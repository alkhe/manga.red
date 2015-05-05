import React from 'react';
import { State } from 'react-router';
import { Actions, Stores } from '../hub';
import Symbiosis from '../mixins/symbiosis-mixin';
import DOMEvent from '../mixins/dom-event-mixin';
import Progress from '../views/progress';
import Process from '../constants/process-constants';

const keys = {
	end: 35,
	home: 36,
	left: 37,
	right: 39
};

export default React.createClass({
	mixins: [State, Symbiosis(Stores.MangaChapter), DOMEvent($(document.body), 'keydown', 'handleKey')],
	componentWillMount() {
		Actions.MangaUI.toChapter();
		let params = this.getParams();
		Actions.MangaAPI.getChapter(params.chapter);
	},
	handleKey(e) {
		switch (e.which) {
			case keys.left:
				Actions.MangaUI.readPreviousPage();
				document.body.scrollTop = 0;
				break;
			case keys.right:
				Actions.MangaUI.readNextPage();
				document.body.scrollTop = 0;
				break;
			case keys.home:
				e.preventDefault();
				Actions.MangaUI.readFirstPage();
				document.body.scrollTop = 0;
				break;
			case keys.end:
				e.preventDefault();
				Actions.MangaUI.readLastPage();
				document.body.scrollTop = 0;
				break;
			default:
				break;
		}
	},
	render() {
		let page;
		if (this.state.process == Process.Done) {
			page = <img style={{ width: '60vw' }} src={`https://cdn.mangaeden.com/mangasimg/${this.state.pages[this.state.pages.length - this.state.page - 1][1]}`} />;
		}
		return (
			<div className='teal-text'>
				<Progress loading={Process.Loading(this.state.process)} />
				<div className='center-align'>
					{page}
				</div>
			</div>
		);
	}
});
