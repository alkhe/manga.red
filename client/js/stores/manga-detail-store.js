import alt from '../alt';
import MangaActions from '../actions/manga-actions';

class MangaDetailStore {
	constructor() {
		this.bindListeners({
			onGetManga: MangaActions.getManga,
			onGetMangaComplete: MangaActions.getMangaComplete
		});

		this.manga = {};
		this.loading = false;
	}
	onGetManga() {
		this.loading = true;
	}
	onGetMangaComplete(manga) {
		this.manga = manga;
		this.loading = false;
	}
}

export default alt.createStore(MangaDetailStore, 'MangaDetailStore');
