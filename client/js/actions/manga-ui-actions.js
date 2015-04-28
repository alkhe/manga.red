import alt from '../alt';

let lastSearch = null;

class MangaUIActions {
	readNextPage() {
		this.dispatch();
	}
	readPreviousPage() {
		this.dispatch();
	}
	readFirstPage() {
		this.dispatch();
	}
	readLastPage() {
		this.dispatch();
	}
	search(provider, term) {
		clearTimeout(lastSearch);
		lastSearch = _.delay(() => {
			this.dispatch(term.length > 0 ? provider.search(term) : []);
		}, 400);
	}
	toIndex() {
		this.dispatch();
	}
	toTitle() {
		this.dispatch();
	}
	toChapter() {
		this.dispatch();
	}
}

export default alt.createActions(MangaUIActions);
