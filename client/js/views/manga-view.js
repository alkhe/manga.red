import React from 'react';
import { State, RouteHandler } from 'react-router';
import { Actions, Stores } from '../hub';
import Symbiosis from '../mixins/symbiosis-mixin';
import Progress from '../views/progress';
import Process from '../constants/process-constants';

export default React.createClass({
	mixins: [State, Symbiosis(Stores.Title)],
	componentWillMount() {
		let params = this.getParams();
		Actions.API.getManga(params.alias);
	},
	render() {
		return <RouteHandler />;
	}
});
