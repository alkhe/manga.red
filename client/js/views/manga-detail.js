import React from 'react';
import Symbiosis from '../mixins/symbiosis-mixin';
import MangaDetailActions from '../actions/manga-detail-actions';
import MangaDetailStore from '../stores/manga-detail-store';
import { State } from 'react-router';
import Progress from '../views/progress';

export default React.createClass({
	mixins: [State, Symbiosis(MangaDetailStore)],
	componentWillUpdate: function(nextProps, nextState) {
		if (nextState.ready && nextState.loading) {
			let params = this.getParams();
			MangaDetailActions.getManga(params.alias);
		}
	},
	renderChapters() {
		let chapters = this.state.manga.chapters.map(c =>
				<a className='collection-item'>
					{c[2]}
				</a>
			);
		return (
			<div className='collection'>
				{chapters}
			</div>
		);
	},
	render() {
		let inner = this.state.ready && !this.state.loading
			? (
				<div className='animated fadeIn'>
					<h1>{this.state.manga.title}</h1>
					<p className='flow-text'>{_.unescape(this.state.manga.description)}</p>
					{this.renderChapters()}
				</div>
			)
			: null;
		return (
			<div className='teal-text'>
				<Progress loading={this.state.loading} />
				{inner}
			</div>
		);
	}
});
