import React from 'react';
import { Link, State } from 'react-router';
import { Actions, Stores } from '../hub';
import Symbiosis from '../mixins/symbiosis-mixin';
import Progress from '../views/progress';
import Process from '../constants/process-constants';

export default React.createClass({
	mixins: [State, Symbiosis(Stores.MangaTitle)],
	componentWillMount() {
		Actions.MangaUI.toTitle();
	},
	renderDetail() {
		let detail;
		if (this.state.process == Process.Done) {
			let chapters = this.state.manga.chapters.map(c =>
				<Link to='chapter' params={{ alias: this.getParams().alias, chapter: c[0] }} key={c[0]} className='collection-item'>
					{c[2]}
				</Link>
			);
			detail = (
				<div className='animated fadeIn'>
					<p className='flow-text'>{_.unescape(this.state.manga.description.replace(/\&\#0+(?=\d+\;)/g, '&#'))}</p>
					<h1>{this.state.manga.title}</h1>
					<div className='collection'>
						{chapters}
					</div>
				</div>
			);
		}
		return detail;
	},
	render() {
		return (
			<div>
				<Progress loading={Process.Loading(this.state.process)} />
				<div className='teal-text'>
					{this.renderDetail()}
				</div>
			</div>
		);
	}
});
