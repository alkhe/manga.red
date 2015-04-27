import React from 'react';
import Symbiosis from '../mixins/symbiosis-mixin';
import MangaActions from '../actions/manga-actions';
import MangaDetailStore from '../stores/manga-detail-store';
import { State } from 'react-router';
import Progress from '../views/progress';

export default React.createClass({
	mixins: [State, Symbiosis(MangaDetailStore)],
	componentWillMount() {
		let params = this.getParams();
		MangaActions.getManga(params.id);
	},
	render() {
		return (
			<div className='teal-text'>
				<Progress loading={this.state.loading} />
				<h1>{this.state.manga.title}</h1>
				<p className='flow-text'>{_.unescape(this.state.manga.description)}</p>
			</div>
		);
	}
});
