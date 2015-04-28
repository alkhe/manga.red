import React from 'react';
import Symbiosis from '../mixins/symbiosis-mixin';
import MangaUIActions from '../actions/manga-ui-actions';
import MangaIndexStore from '../stores/manga-index-store';
import MangaCard from '../views/manga-card';
import Progress from '../views/progress';

export default React.createClass({
	mixins: [Symbiosis(MangaIndexStore)],
	renderManga() {
		return (this.state.results.length ? this.state.results : this.state.sorted)
			.slice(0, 20).map(m => <MangaCard manga={m} />);
	},
	search() {
		MangaUIActions.search(this.state.fuzzy, this.refs.search.getDOMNode().value);
	},
	render() {
		return (
			<div>
				<Progress loading={this.state.loading} />
				<div className='input-field teal-text text-lighten-4'>
					<input type='text' ref='search' onChange={this.search} />
					<label>Search titles</label>
				</div>
				<div className='row'>
					{this.renderManga()}
				</div>
			</div>
		);
	}
});
