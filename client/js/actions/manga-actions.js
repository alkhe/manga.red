import alt from '../alt';
import reqwest from 'reqwest';

class MangaActions {
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
	getManga(id) {
		reqwest({
			url: `https://www.mangaeden.com/api/manga/${id}`,
			crossOrigin: true,
			success: this.actions.getMangaComplete
		});
		this.dispatch();
	}
	getMangaComplete(res) {
		this.dispatch(res);
	}
}

export default alt.createActions(MangaActions);
