import React from 'react';
import MangaUIActions from '../actions/manga-ui-actions';
import UIStore, { UIState } from '../stores/ui-store';
// import MangaTitleStore from '../stores/manga-title-store';
// import MangaChapterStore from '../stores/manga-chapter-store';
import Symbiosis from '../mixins/symbiosis-mixin';

export default React.createClass({
	mixins: [Symbiosis(UIStore)],
	componentDidMount() {
		this.componentDidUpdate();
	},
	componentDidUpdate() {
		_.defer(() => {
			switch (this.state.state) {
				case UIState.index:
					break;
				case UIState.title:
					break;
				case UIState.chapter:
					$('.tooltipped').tooltip({ delay: 50 });
					break;
				default:
					break;
			}
		});
	},
	renderLeft() {
		let extra;
		switch (this.state.state) {
			case UIState.index:
				break;
			case UIState.title:
				break;
			case UIState.chapter:
				break;
			default:
				break;
		}
		return extra;
	},
	renderRight() {
		let extra;
		switch (this.state.state) {
			case UIState.index:
				break;
			case UIState.title:
				break;
			case UIState.chapter:
				extra = [
					[MangaUIActions.readFirstPage, 'First Page (Home)', 'av-skip-previous'],
					[MangaUIActions.readPreviousPage, 'Previous Page (Left)', 'hardware-keyboard-arrow-left'],
					[MangaUIActions.readNextPage, 'Next Page (Right)', 'hardware-keyboard-arrow-right'],
					[MangaUIActions.readLastPage, 'Last Page (End)', 'av-skip-next']
				].map(arr => (
					<li onClick={arr[0]} className='tooltipped'
						data-tooltip={arr[1]} data-position='left'>
						<i className={`widemargin mdi-${arr[2]}`}></i>
					</li>
				));
				break;
			default:
				break;
		}
		return extra;
	},
	render() {
		return (
			<div className='navbar-fixed'>
				<nav className='fixed-bottom teal z-depth-0'>
					<div className='nav-wrapper container'>
						<ul className='left'>
							{this.renderLeft()}
						</ul>
						<ul className='right'>
							{this.renderRight()}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
});
