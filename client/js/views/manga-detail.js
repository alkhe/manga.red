import React from 'react';
import { Link, State } from 'react-router';
import { Actions, Stores } from '../hub';
import Network from '../mixins/network-mixin';
import Progress from '../views/progress';
import Process from '../constants/process-constants';

export default React.createClass({
	mixins: [State, Network({
		title: Stores.Title,
		ui: Stores.UI
	})],
	componentWillMount() {
		Actions.UI.toTitle();
	},
	renderDetail() {
		let detail;
		let { title, ui } = this.state;
		if (title.process == Process.Done) {
			let chapters = title.manga.chapters.map(c =>
				<Link to='chapter' params={{ alias: this.getParams().alias, chapter: c[0] }} key={c[0]} className='row chapter-entry'>
					<div className={`col s1 ${ui.color} lighten-3 ${ui.color}-text text-lighten-1 right-align`}><div>{c[0]}</div></div>
					<div className={`col s11 ${ui.color} lighten-4 ${ui.color}-text text-darken-1`}><div>{(c[2] && c[0] != c[2]) ? c[2] : 'N/A'}</div></div>
				</Link>
			);
			detail = (
				<div className='animated fadeIn'>
					<h1 className={`${ui.color}-text text-lighten-1`}>{title.manga.title}</h1>
					<p className={`flow-text ${ui.color}-text text-lighten-3`}>{_.unescape(title.manga.description.replace(/\&\#0+(?=\d+\;)/g, '&#'))}</p>
					{chapters}
				</div>
			);
		}
		return detail;
	},
	render() {
		let { title, ui } = this.state;
		return (
			<div>
				<Progress loading={Process.Loading(title.process)} />
				<div className={`${ui.color}-text`}>
					{this.renderDetail()}
				</div>
			</div>
		);
	}
});
