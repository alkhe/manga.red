import alt from '../alt';
import MangaActions from '../actions/manga-actions';

class MangaIndexStore {
	constructor() {
		this.bindListeners({
			onGetAllManga: MangaActions.getAllManga,
			onGetAllMangaComplete: MangaActions.getAllMangaComplete
		});

		this.all = [];
		this.sorted = [];
		this.loading = false;
	}
	onGetAllManga() {
		this.loading = true;
	}
	onGetAllMangaComplete(list) {
		this.all = list;
		this.sorted = list.sort((a, b) => b.h - a.h);
		this.loading = false;
	}
}

export default alt.createStore(MangaIndexStore, 'MangaIndexStore');
