import alt from '../alt';
import reqwest from 'reqwest';
import Process from '../constants/process-constants';

let indexState = () => alt.getStore('MangaIndexStore').getState();
let titleState = () => alt.getStore('MangaTitleStore').getState();
let chapterState = () => alt.getStore('MangaChapterStore').getState();

let emptypromise = () => new Promise(resolve => resolve());

let getAllMangaAPI = () => reqwest({
	url: 'https://www.mangaeden.com/api/list/0/',
	crossOrigin: true
});

let getMangaAPI = (id) => reqwest({
	url: `https://www.mangaeden.com/api/manga/${id}`,
	crossOrigin: true
});

class MangaAPIActions {
	getAllManga() {
		getAllMangaAPI().then(this.actions.getAllMangaComplete);
		this.dispatch();
	}
	getAllMangaComplete(res) {
		this.dispatch(res.manga);
	}
	getManga(alias) {
		(indexState().process < Process.Working
			? getAllMangaAPI().then(this.actions.getAllMangaComplete)
			: emptypromise()
		).then(() => {
			let manga = _.find(indexState().sorted, _.matchesProperty('a', alias));
			getMangaAPI(manga.i).then(this.actions.getMangaComplete);
		});
		this.dispatch();
	}
	getMangaComplete(res) {
		this.dispatch(res);
	}
	getChapter(manga, number) {
		let chapter = _.find(manga.chapters, c => c[0] == number);
		reqwest({
			url: `https://www.mangaeden.com/api/chapter/${chapter[3]}`,
			crossOrigin: true,
			success: this.actions.getChapterComplete
		});
		this.dispatch();
	}
	getChapterComplete(chapter) {
		this.dispatch(chapter.images);
	}
}

export default alt.createActions(MangaAPIActions);
