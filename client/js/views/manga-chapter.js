import React from 'react';
import { State } from 'react-router';
import MangaAPIActions from '../actions/manga-api-actions';
import MangaTitleStore from '../stores/manga-title-store';
import MangaChapterStore from '../stores/manga-chapter-store';
import Symbiosis from '../mixins/symbiosis-mixin';
import Progress from '../views/progress';

export default React.createClass({
	mixins: [State, Symbiosis(MangaChapterStore)],
	componentWillMount() {
		let dep = MangaTitleStore.getState();
		if (dep.ready) {
			let params = this.getParams();
			MangaAPIActions.getChapter(dep.manga, params.chapter);
		}
	},
	componentWillUpdate(nextProps, nextState) {
		if (nextState.run) {
			let params = this.getParams();
			let dep = MangaTitleStore.getState();
			MangaAPIActions.getChapter.defer(dep.manga, params.chapter);
		}
	},
	render() {
		let page;
		if (this.state.ready && !this.state.loading) {
			page = <img src={`https://cdn.mangaeden.com/mangasimg/${this.state.pages[this.state.pages.length - this.state.page - 1][1]}`} />;
		}
		return (
			<div className='teal-text'>
				<Progress loading={this.state.loading} />
				<div className='center-align'>
					{page}
				</div>
			</div>
		);
	}
});
