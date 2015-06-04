import alt from '../alt';
import Actions from '../actions/index';
import Process from '../constants/process-constants';

let images = [];

class MangaChapterStore {
	constructor() {
		this.bindActions(Actions.API);
		this.bindActions(Actions.UI);

		this.page = 0;
		this.pages = [];

		this.process = Process.Before;
	}
	getAllManga() {
		this.process = Process.Waiting;
	}
	getManga() {
		this.process = Process.Waiting;
	}
	getMangaComplete() {
		this.process = Process.Ready;
	}
	getChapter() {
		this.process = Process.Working;
	}
	getChapterComplete(pages) {
		this.page = 0;
		this.pages = pages;
		images = this.pages.map(x => {
			let img = (new Image()).src = `https://cdn.mangaeden.com/mangasimg/${x[1]}`;
			return img;
		});

		this.process = Process.Done;
	}
	readNextPage() {
		if (this.page < this.pages.length - 1) {
			this.page++;
		}
	}
	readPreviousPage() {
		if (this.page > 0) {
			this.page--;
		}
	}
	readFirstPage() {
		this.page = 0;
	}
	readLastPage() {
		this.page = this.pages.length - 1;
	}
}

export default alt.createStore(MangaChapterStore, 'MangaChapterStore');
