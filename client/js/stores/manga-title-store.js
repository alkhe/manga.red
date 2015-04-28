import alt from '../alt';
import MangaAPIActions from '../actions/manga-api-actions';

class MangaTitleStore {
	constructor() {
		this.bindActions(MangaAPIActions);

		this.manga = {};

		this.loading = false;
		this.ready = false;
		this.run = false;
	}
	getAllManga() {
		this.loading = true;
	}
	getAllMangaComplete() {
		this.run = true;
	}
	getManga() {
		this.loading = true;
		this.run = false;
	}
	getMangaComplete(manga) {
		this.manga = manga;

		this.loading = false;
		this.ready = true;
	}
}

export default alt.createStore(MangaTitleStore, 'MangaTitleStore');
