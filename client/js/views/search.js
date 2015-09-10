import React from 'react';
import { Actions, Stores } from '../hub';
import Network from '../decorators/network';
import MangaCard from '../views/manga-card';
import Progress from '../views/progress';
import Process from '../constants/process-constants';

let plural = n => n == 1 ? '' : 's';

@Network({
	index: Stores.Index,
	ui: Stores.UI
})
export default class extends React.Component {
	componentWillMount() {
		Actions.UI.toIndex();
	}
	renderManga() {
		let { index } = this.state;
		return (index.results ? index.results : index.sorted)
			.slice(0, 24).map(m => <MangaCard key={m.i} manga={m} />);
	}
	search() {
		Actions.UI.search(React.findDOMNode(this.refs.search).value);
	}
	componentDidMount() {
		React.findDOMNode(this.refs.search).focus();
	}
	render() {
		let { index, ui } = this.state;
		let titles = index.results ? index.results.length : index.sorted.length;
		return (
			<div>
				<Progress loading={ Process.Loading(index.process) } />
				<div className={ `input-field ${ui.color}-text text-lighten-4` }>
					<input type='text' ref='search' onChange={ this.search } />
					<label>Search titles</label>
				</div>
				<h2 className='grey-text text-darken-3'>{ titles } title{ plural(titles) }</h2>
				<div className='row'>
					{ this.renderManga() }
				</div>
			</div>
		);
	}
}
