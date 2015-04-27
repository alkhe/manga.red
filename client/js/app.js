import React from 'react';
import { RouteHandler } from 'react-router';
import MangaActions from './actions/manga-actions';
import Header from './views/header';

export default React.createClass({
	getAllManga() {
		MangaActions.getAllManga();
	},
	componentWillMount() {
		this.getAllManga();
	},
	render() {
		return (
			<div>
				<Header />
				<div className='container'>
					<RouteHandler />
				</div>
			</div>
		);
	}
});
