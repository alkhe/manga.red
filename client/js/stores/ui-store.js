import alt from '../alt';
import MangaUIActions from '../actions/manga-ui-actions';

export const State = {
	index: 0,
	title: 1,
	chapter: 2
};

class UIStore {
	constructor() {
		this.bindActions(MangaUIActions);

		this.state = State.index;
	}
	toIndex() {
		this.state = State.index;
	}
	toTitle() {
		this.state = State.title;
	}
	toChapter() {
		this.state = State.chapter;
	}
}

export default alt.createStore(UIStore, 'UIStore');
