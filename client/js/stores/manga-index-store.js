import alt from '../alt';
import MangaAPIActions from '../actions/manga-api-actions';

class MangaIndexStore {
	constructor() {
		this.bindActions(MangaAPIActions);

		this.all = [];
		this.sorted = [];
		
		this.loading = false;
		this.ready = false;
	}
	getAllManga() {
		this.loading = true;
	}
	getAllMangaComplete(list) {
		this.all = list;
		this.sorted = list.sort((a, b) => b.h - a.h);

		this.loading = false;
		this.ready = true;
	}
}

export default alt.createStore(MangaIndexStore, 'MangaIndexStore');
