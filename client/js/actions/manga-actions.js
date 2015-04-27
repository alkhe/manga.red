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
}

export default alt.createActions(MangaActions);
