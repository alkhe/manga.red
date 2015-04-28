import alt from '../alt';
import reqwest from 'reqwest';

class MangaAPIActions {
	getAllManga() {
		reqwest({
			url: 'https://www.mangaeden.com/api/list/0/',
			crossOrigin: true,
			success: this.actions.getAllMangaComplete
		});
		this.dispatch();
	}
	getAllMangaComplete(res) {
		this.dispatch(res.manga);
	}
	getManga(index, alias) {
		let manga = _.find(index, _.matchesProperty('a', alias));
		reqwest({
			url: `https://www.mangaeden.com/api/manga/${manga.i}`,
			crossOrigin: true,
			success: this.actions.getMangaComplete
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
