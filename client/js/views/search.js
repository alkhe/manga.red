import React from 'react';
import Symbiosis from '../mixins/symbiosis-mixin';
import { Actions, Stores } from '../hub';
import MangaCard from '../views/manga-card';
import Progress from '../views/progress';
import Process from '../constants/process-constants';

let plural = n => n == 1 ? '' : 's';

export default React.createClass({
	mixins: [Symbiosis(Stores.MangaIndex)],
	componentWillMount() {
		Actions.MangaUI.toIndex();
	},
	renderManga() {
		let state = this.state;
		return (state.results ? state.results : state.sorted)
			.slice(0, 24).map(m => <MangaCard key={m.i} manga={m} />);
	},
	search() {
		Actions.MangaUI.search(React.findDOMNode(this.refs.search).value);
	},
	componentDidMount() {
		React.findDOMNode(this.refs.search).focus();
	},
	render() {
		let state = this.state;
		let titles = state.results ? state.results.length : state.sorted.length;
		return (
			<div>
				<Progress loading={Process.Loading(state.process)} />
				<div className='input-field teal-text text-lighten-4'>
					<input type='text' ref='search' onChange={this.search} />
					<label>Search titles</label>
				</div>
				<h2 className='grey-text text-darken-3'>{ titles } title{ plural(titles) }</h2>
				<div className='row'>
					{this.renderManga()}
				</div>
			</div>
		);
	}
});
