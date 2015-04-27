import React from 'react';
import Symbiosis from '../mixins/symbiosis-mixin';
import MangaActions from '../actions/manga-actions';
import MangaIndexStore from '../stores/manga-index-store';
import MangaCard from '../views/manga-card';
import Progress from '../views/progress';

export default React.createClass({
	mixins: [Symbiosis(MangaIndexStore)],
	getAllManga() {
		MangaActions.getAllManga();
	},
	renderManga() {
		return this.state.sorted.slice(0, 20).map(m => <MangaCard manga={m} />);
	},
	componentWillMount() {
		this.getAllManga();
	},
	render() {
		return (
			<div>
				<Progress loading={this.state.loading} />
				<div className='row'>
					{this.renderManga()}
				</div>
			</div>
		);
	}
});
