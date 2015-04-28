import alt from '../alt';
import MangaAPIActions from '../actions/manga-api-actions';
import MangaUIActions from '../actions/manga-ui-actions';

let images = [];

class MangaChapterStore {
	constructor() {
		this.bindActions(MangaAPIActions);
		this.bindActions(MangaUIActions);

		this.page = 0;
		this.pages = [];

		this.loading = false;
		this.ready = false;
		this.run = false;
	}
	getAllManga() {
		this.loading = true;
	}
	getManga() {
		this.loading = true;
	}
	getMangaComplete() {
		this.run = true;
	}
	getChapter() {
		this.loading = true;
		this.run = false;
	}
	getChapterComplete(pages) {
		this.page = 0;
		this.pages = pages;
		images = this.pages.map(x => {
			let img = (new Image()).src = `https://cdn.mangaeden.com/mangasimg/${x[1]}`;
			return img;
		});

		this.loading = false;
		this.ready = true;
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
