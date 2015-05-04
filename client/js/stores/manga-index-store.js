import alt from '../alt';
import MangaAPIActions from '../actions/manga-api-actions';
import MangaUIActions from '../actions/manga-ui-actions';
import Process from '../constants/process-constants';

class MangaIndexStore {
	constructor() {
		this.bindActions(MangaAPIActions);
		this.bindActions(MangaUIActions);

		this.all = [];
		this.sorted = [];
		this.fuzzy = null;
		this.results = null;

		this.process = Process.Before;
	}
	getAllManga() {
		this.process = Process.Working;
	}
	getAllMangaComplete(list) {
		this.all = list;
		this.sorted = _.sortByOrder(list, 'h', false);
		this.fuzzy = new Fuse(this.sorted, { keys: ['t'], threshold: .36, distance: 6 });

		this.process = Process.Done;
	}
	search(results) {
		this.results = results;
	}
}

export default alt.createStore(MangaIndexStore, 'MangaIndexStore');
