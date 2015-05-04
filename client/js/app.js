import React from 'react';
import { RouteHandler } from 'react-router';
import { Actions, Stores } from './hub';
import Header from './views/header';
import UIHeader from './views/ui-header';
import Symbiosis from './mixins/symbiosis-mixin';

export default React.createClass({
	mixins: [Symbiosis(Stores.UI)],
	componentWillMount() {
		Actions.MangaAPI.getAllManga();
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
