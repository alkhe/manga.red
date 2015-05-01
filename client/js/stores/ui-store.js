import alt from '../alt';
import MangaUIActions from '../actions/manga-ui-actions';

export const UIState = {
	index: 0,
	title: 1,
	chapter: 2
};

class UIStore {
	constructor() {
		this.bindActions(MangaUIActions);

		this.state = UIState.index;
	}
	toIndex() {
		this.state = UIState.index;
	}
	toTitle() {
		this.state = UIState.title;
	}
	toChapter() {
		this.state = UIState.chapter;
	}
}

export default alt.createStore(UIStore, 'UIStore');
