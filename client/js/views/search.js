import React from 'react';
import Symbiosis from '../mixins/symbiosis-mixin';
import { Actions, Stores } from '../hub';
import MangaCard from '../views/manga-card';
import Progress from '../views/progress';
import Process from '../constants/process-constants';

export default React.createClass({
	mixins: [Symbiosis(Stores.MangaIndex)],
	componentWillMount() {
		Actions.MangaUI.toIndex();
	},
	renderManga() {
		return (this.state.results.length ? this.state.results : this.state.sorted)
			.slice(0, 20).map(m => <MangaCard key={m.i} manga={m} />);
	},
	search() {
		Actions.MangaUI.search(this.state.fuzzy, React.findDOMNode(this.refs.search).value);
	},
	componentDidMount() {
		React.findDOMNode(this.refs.search).focus();
	},
	render() {
		return (
			<div>
				<Progress loading={Process.Loading(this.state.process)} />
				<div className='input-field teal-text text-lighten-4'>
					<input type='text' ref='search' onChange={this.search} />
					<label>Search titles</label>
				</div>
				<h2 className='grey-text text-darken-3'>{this.state.results.length ? this.state.results.length : this.state.sorted.length } titles</h2>
				<div className='row'>
					{this.renderManga()}
				</div>
			</div>
		);
	}
});
