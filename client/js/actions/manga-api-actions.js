import alt from '../alt';
import reqwest from 'reqwest';
import Process from '../constants/process-constants';

let indexStore = _.once(() => alt.getStore('MangaIndexStore'));
let titleStore = _.once(() => alt.getStore('MangaTitleStore'));
let chapterStore = _.once(() => alt.getStore('MangaChapterStore'));

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
			let manga = _.find(indexStore().getState().sorted, _.matchesProperty('a', alias));
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
				let id = _.find(titleStore().getState().manga.chapters, c => c[0] == number)[3];
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
