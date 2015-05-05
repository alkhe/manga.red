import alt from '../alt';
import reqwest from 'reqwest';
import Process from '../constants/process-constants';

let indexState = () => alt.getStore('MangaIndexStore').getState();
let titleState = () => alt.getStore('MangaTitleStore').getState();
let chapterState = () => alt.getStore('MangaChapterStore').getState();

let allMangaData;
let getAllManga = () => reqwest({
	url: 'https://www.mangaeden.com/api/list/0/',
	crossOrigin: true
});

let mangaData;
let getManga = (id) => reqwest({
	url: `https://www.mangaeden.com/api/manga/${id}`,
	crossOrigin: true
});

let chapterData;
let getChapter = (id) => reqwest({
	url: `https://www.mangaeden.com/api/chapter/${id}`,
	crossOrigin: true
});

class MangaAPIActions {
	getAllManga() {
		allMangaData = getAllManga().then(this.actions.getAllMangaComplete);
		this.dispatch();
	}
	getAllMangaComplete(res) {
		this.dispatch(res.manga);
	}
	getManga(alias) {
		allMangaData.then(() => {
			let manga = _.find(indexState().sorted, _.matchesProperty('a', alias));
			mangaData = getManga(manga.i).then(this.actions.getMangaComplete);
		})
		this.dispatch();
	}
	getMangaComplete(res) {
		this.dispatch(res);
	}
	getChapter(number) {
		allMangaData.then(() => {
			mangaData.then(() => {
				let id = _.find(titleState().manga.chapters, c => c[0] == number)[3];
				chapterData = getChapter(id).then(this.actions.getChapterComplete);
			});
		})
		this.dispatch();
	}
	getChapterComplete(chapter) {
		this.dispatch(chapter.images);
	}
}

export default alt.createActions(MangaAPIActions);
