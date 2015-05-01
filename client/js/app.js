import React from 'react';
import { RouteHandler } from 'react-router';
import MangaAPIActions from './actions/manga-api-actions';
import Header from './views/header';
import UIHeader from './views/ui-header';
import UIStore, { UIState } from './stores/ui-store';
import Symbiosis from './mixins/symbiosis-mixin';

export default React.createClass({
	mixins: [Symbiosis(UIStore)],
	componentWillMount() {
		MangaAPIActions.getAllManga();
	},
	renderHeader() {
		// return (this.state.state != UIState.chapter)
		// 	? <Header />
		// 	: null;
		return <Header />;
	},
	renderUIHeader() {
		// return (this.state.state == UIState.chapter)
		// 	? <UIHeader />
		// 	: null;
		return <UIHeader />;
	},
	render() {
		return (
			<div>
				{this.renderHeader()}
				<div className='container'>
					<RouteHandler />
				</div>
				{this.renderUIHeader()}
			</div>
		);
	}
});
