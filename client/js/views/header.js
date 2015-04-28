import React from 'react';
import { Link } from 'react-router';
import MangaUIActions from '../actions/manga-ui-actions';
import UIStore, { State } from '../stores/ui-store';
import Symbiosis from '../mixins/symbiosis-mixin';

export default React.createClass({
	mixins: [Symbiosis(UIStore)],
	componentDidMount() {
		_.defer(() => {
			switch (this.state.state) {
				case State.index:
					break;
				case State.title:
					break;
				case State.chapter:
					$('.tooltipped').tooltip({ delay: 50 });
					break;
				default:
					break;
			}
		});
	},
	renderExtra() {
		let extra;
		switch (this.state.state) {
			case State.index:
				break;
			case State.title:
				break;
			case State.chapter:
				extra = [(
					<li onClick={MangaUIActions.readFirstPage}
						className='tooltipped' data-tooltip='First Page (Home)'>
						<i className='mdi-av-skip-previous'></i>
					</li>
				), (
					<li onClick={MangaUIActions.readPreviousPage}
						className='tooltipped' data-tooltip='Previous Page (Left)'>
						<i className='mdi-hardware-keyboard-arrow-left'></i>
					</li>
				), (
					<li onClick={MangaUIActions.readNextPage}
						className='tooltipped' data-tooltip='Next Page (Right)'>
						<i className='mdi-hardware-keyboard-arrow-right'></i>
					</li>
				), (
					<li onClick={MangaUIActions.readLastPage}
						className='tooltipped' data-tooltip='Last Page (End)'>
						<i className='mdi-av-skip-next'></i>
					</li>
				)];
				break;
			default:
				break;
		}
		return extra;
	},
	render() {
		return (
			<div className='navbar-fixed'>
				<nav className='teal'>
					<div className='nav-wrapper container'>
						<Link to='main' className='brand-logo teal-text text-lighten-4'>Manga.IO</Link>
						<ul className='right'>
							{this.renderExtra()}
							<li>
								<a href='http://www.mangaeden.com/' className='teal-text text-lighten-2'>
									A <span className='teal-text text-lighten-4'>MangaEden</span> Client
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
});
