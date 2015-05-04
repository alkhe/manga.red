import alt from '../alt';

let indexState = () => alt.getStore('MangaIndexStore').getState();
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
	search(term) {
		clearTimeout(lastSearch);
		lastSearch = _.delay(() => {
			this.dispatch(term.length > 0 ? indexState().fuzzy.search(term) : null);
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
