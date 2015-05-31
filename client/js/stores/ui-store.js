import alt from '../alt';
import UIState from '../constants/ui-state-constants';
import MangaUIActions from '../actions/manga-ui-actions';

class UIStore {
	constructor() {
		this.bindActions(MangaUIActions);

		this.level = UIState.index;

		this.actualcolor = localStorage.getItem('theme-color') || 'red';
		this.color = this.actualcolor;
		this.colorOpen = false;
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
	changeThemeColor(o) {
		if (o.confirm) {
			this.actualcolor = o.color;
		}
		this.color = o.color;
	}
	toggleColorPicker() {
		this.colorOpen = !this.colorOpen;
	}
}

export default alt.createStore(UIStore, 'UIStore');
