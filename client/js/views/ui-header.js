import React from 'react';
import { Actions, Stores } from '../hub';
import UIState from '../constants/ui-state-constants';
import Symbiosis from '../mixins/symbiosis-mixin';

export default React.createClass({
	mixins: [Symbiosis(Stores.UI)],
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
					[Actions.MangaUI.readFirstPage, 'First Page (Home)', 'av-skip-previous'],
					[Actions.MangaUI.readPreviousPage, 'Previous Page (Left)', 'hardware-keyboard-arrow-left'],
					[Actions.MangaUI.readNextPage, 'Next Page (Right)', 'hardware-keyboard-arrow-right'],
					[Actions.MangaUI.readLastPage, 'Last Page (End)', 'av-skip-next']
				].map((arr, i) => (
					<li onClick={arr[0]} key={i} className='tooltipped'
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
