import React from 'react';
import { State, RouteHandler } from 'react-router';
import MangaAPIActions from '../actions/manga-api-actions';
import MangaUIActions from '../actions/manga-ui-actions';
import MangaIndexStore from '../stores/manga-index-store';
import MangaTitleStore from '../stores/manga-title-store';
import Symbiosis from '../mixins/symbiosis-mixin';
import Progress from '../views/progress';
import Process from '../constants/process-constants';

export default React.createClass({
	mixins: [State, Symbiosis(MangaTitleStore)],
	componentWillMount() {
		MangaUIActions.toTitle();
		let dep = MangaIndexStore.getState();
		if (dep.ready) {
			let params = this.getParams();
			MangaAPIActions.getManga(dep.all, params.alias);
		}
	},
	componentWillUpdate(nextProps, nextState) {
		if (nextState.process == Process.Ready) {
			let params = this.getParams();
			let dep = MangaIndexStore.getState();
			MangaAPIActions.getManga.defer(dep.all, params.alias);
		}
	},
	render() {
		return <RouteHandler />;
	}
});
