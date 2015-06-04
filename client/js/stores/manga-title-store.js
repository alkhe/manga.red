import alt from '../alt';
import Actions from '../actions/index';
import Process from '../constants/process-constants';

class MangaTitleStore {
	constructor() {
		this.bindActions(Actions.API);

		this.manga = {};

		this.process = Process.Before;
	}
	getAllManga() {
		this.process = Process.Waiting;
	}
	getAllMangaComplete() {
		this.process = Process.Ready;
	}
	getManga() {
		this.process = Process.Working;
	}
	getMangaComplete(manga) {
		this.manga = manga;

		this.process = Process.Done;
	}
}

export default alt.createStore(MangaTitleStore, 'MangaTitleStore');
