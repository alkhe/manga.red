import React from 'react';
import { State, RouteHandler } from 'react-router';
import { Actions, Stores } from '../hub';
import Symbiosis from '../mixins/symbiosis-mixin';
import Progress from '../views/progress';
import Process from '../constants/process-constants';

export default React.createClass({
	mixins: [State, Symbiosis(Stores.MangaTitle)],
	componentWillMount() {
		let params = this.getParams();
		Actions.MangaAPI.getManga(params.alias);
	},
	componentWillUpdate(nextProps, nextState) {
		// if (nextState.process == Process.Ready) {
		// 	let params = this.getParams();
		// 	let index = Stores.MangaIndex.getState();
		// 	Actions.MangaAPI.getManga.defer(index.all, params.alias);
		// }
	},
	render() {
		return <RouteHandler />;
	}
});
