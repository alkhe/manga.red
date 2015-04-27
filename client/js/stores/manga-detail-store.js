import alt from '../alt';
import MangaActions from '../actions/manga-actions';
import MangaDetailActions from '../actions/manga-detail-actions';
import MangaIndexStore from './manga-index-store';

class MangaDetailStore {
	constructor() {
		this.bindActions(MangaActions);
		this.bindActions(MangaDetailActions);

		this.manga = {};
		this.ready = false;
		this.loading = false;
	}
	onGetAllManga() {
		this.loading = true;
	}
	onGetAllMangaComplete() {
		this.ready = true;
	}
	onGetMangaComplete(manga) {
		this.manga = manga;
		this.loading = false;
	}
}

export default alt.createStore(MangaDetailStore, 'MangaDetailStore');
