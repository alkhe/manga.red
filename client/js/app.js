import React from 'react';
import { RouteHandler } from 'react-router';
import MangaAPIActions from './actions/manga-api-actions';
import Header from './views/header';

export default React.createClass({
	componentWillMount() {
		MangaAPIActions.getAllManga();
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
