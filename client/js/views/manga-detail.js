import React from 'react';
import { Link, State } from 'react-router';
import Symbiosis from '../mixins/symbiosis-mixin';
import MangaTitleStore from '../stores/manga-title-store';
import Progress from '../views/progress';

export default React.createClass({
	mixins: [State, Symbiosis(MangaTitleStore)],
	renderDetail() {
		let detail;
		if (this.state.ready && !this.state.loading) {
			let chapters = this.state.manga.chapters.map(c =>
				<Link to='chapter' params={{ alias: this.getParams().alias, chapter: c[0] }} className='collection-item'>
					{c[2]}
				</Link>
			);
			detail = (
				<div className='animated fadeIn'>
					<h1>{this.state.manga.title}</h1>
					<p className='flow-text'>{_.unescape(this.state.manga.description)}</p>
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
				<Progress loading={this.state.loading} />
				<div className='teal-text'>
					{this.renderDetail()}
				</div>
			</div>
		);
	}
});
