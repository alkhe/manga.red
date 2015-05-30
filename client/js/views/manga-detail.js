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
				<Link to='chapter' params={{ alias: this.getParams().alias, chapter: c[0] }} key={c[0]} className='row chapter-entry'>
					<div className='col s1 teal lighten-3 teal-text text-lighten-1 right-align'><div>{c[0]}</div></div>
					<div className='col s11 teal lighten-4 teal-text text-darken-1'><div>{(c[2] && c[0] != c[2]) ? c[2] : 'N/A'}</div></div>
				</Link>
			);
			detail = (
				<div className='animated fadeIn'>
					<h1 className='teal-text text-lighten-1'>{this.state.manga.title}</h1>
					<p className='flow-text teal-text text-lighten-3'>{_.unescape(this.state.manga.description.replace(/\&\#0+(?=\d+\;)/g, '&#'))}</p>
					{chapters}
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
