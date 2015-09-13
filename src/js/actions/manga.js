import axios from 'axios';
import { filter } from 'fuzzaldrin';
import { start, finish } from './loading';
import { MANGA } from '../types';

let { INDEX, TITLE, CHAPTER } = MANGA;

let dupe = function(fn) {
	fn(this);
	return this;
};

let fork = function(fn) {
	this.then(fn);
	return this;
};

let find = (arr, pred) => arr.filter(pred)[0];

let lock = lock => ({ type: LOADING.LOCK, lock });
let unlock = lock => ({ type: LOADING.UNLOCK, lock });

// .manga
// im: image (base image for manga)
// t: title (manga title)
// i: id (database id)
// a: alias (url-friendly slug)
// s: status (???)
// c: category (array of genres)
// ld: last date (unix timestamp of last upload)
// h: hits (popularity)
let getIndex = () =>
	axios.get('https://www.mangaeden.com/api/list/0/')
		.then(res => res.data.manga)
		.then(list => list.sort((a, b) => b.h - a.h));

// aka: ?
// aka-alias: ?
// alias: url-friendly slug
// artist: ?
// artist_kw: ?
// author: ?
// author_kw: ?
// categories: array of genres
// chapters: array of [code number, unix time upload, code string, id]
// chapters_len: number of chapters
// created: creation date in unix time
// description: manga description
// hits: popularity
// image: base image
// language: 0 => en, 1 => it
// last_chapter_date: last upload in unix time
// random: ?
// released: ?
// startswith: lowercase first letter of title
// title: full title
// title_kw: ?
// type: ?
// updatedKeywords: ?
let getTitle = id =>
	axios.get(`https://www.mangaeden.com/api/manga/${ id }`)
		.then(res => res.data);

// .images
// array of [page number, image url, width, height]
let getChapter = id =>
	axios.get(`https://www.mangaeden.com/api/chapter/${ id }`)
		.then(res => res.data.images.reverse());

let getTitle$alias = alias =>
	getIndex()
		.then(list => find(list, m => m.a === alias).i)
		.then(getTitle);

let getChapter$alias$code = (alias, code) =>
	getTitle$alias(alias)
		.then(title => find(title.chapters, c => c[0] == code)[3])
		.then(getChapter);

export let index = () => ({ dispatch }) => {
	dispatch(start(INDEX.LOCK));
	return getIndex()
		.then(list => ({ list, type: INDEX.SUCCESS }))
		.catch(error => ({ error, type: INDEX.FAILURE }))
		::dupe(p => p
			.then(action => [finish(INDEX.LOCK), action])
			.then(dispatch)
		);
}

export let title = alias => ({ dispatch }) => {
	dispatch(start(TITLE.LOCK));
	return getTitle$alias(alias)
		.then(title => ({ title, type: TITLE.SUCCESS }))
		.catch(error => ({ error, type: TITLE.FAILURE }))
		::dupe(p => p
			.then(action => [finish(TITLE.LOCK), action])
			.then(dispatch)
		);
}

export let chapter = (alias, code) => ({ dispatch }) => {
	dispatch(start(CHAPTER.LOCK));
	return getChapter$alias$code(alias, code)
		.then(chapter => ({ chapter, type: CHAPTER.SUCCESS }))
		.catch(error => ({ error, type: CHAPTER.FAILURE }))
		::dupe(p => p
			.then(action => [finish(CHAPTER.LOCK), action])
			.then(dispatch)
		);
}
