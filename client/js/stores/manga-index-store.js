import alt from '../alt';
import MangaAPIActions from '../actions/manga-api-actions';
import MangaUIActions from '../actions/manga-ui-actions';

class MangaIndexStore {
	constructor() {
		this.bindActions(MangaAPIActions);
		this.bindActions(MangaUIActions);

		this.all = [];
		this.sorted = [];
		this.fuzzy = null;
		this.results = [];

		this.loading = false;
		this.ready = false;
	}
	getAllManga() {
		this.loading = true;
	}
	getAllMangaComplete(list) {
		this.all = list;
		this.sorted = list.sort((a, b) => b.h - a.h);
		this.fuzzy = new Fuse(this.sorted, { keys: ['t'] });

		this.loading = false;
		this.ready = true;
	}
	search(results) {
		this.results = results;
	}
}

export default alt.createStore(MangaIndexStore, 'MangaIndexStore');
