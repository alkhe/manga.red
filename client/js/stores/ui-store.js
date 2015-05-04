import alt from '../alt';
import UIState from '../constants/ui-state-constants';
import MangaUIActions from '../actions/manga-ui-actions';

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
