import alt from '../alt';
import UIState from '../constants/ui-state-constants';
import MangaUIActions from '../actions/manga-ui-actions';

class UIStore {
	constructor() {
		this.bindActions(MangaUIActions);

		this.level = UIState.index;
	}
	toIndex() {
		this.level = UIState.index;
	}
	toTitle() {
		this.level = UIState.title;
	}
	toChapter() {
		this.level = UIState.chapter;
	}
}

export default alt.createStore(UIStore, 'UIStore');
