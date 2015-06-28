import React from 'react';
import { State, RouteHandler } from 'react-router';
import { Actions, Stores } from '../hub';
import Mixin from '../mixins/mixin';
import Symbiosis from '../mixins/symbiosis';
import Progress from '../views/progress';
import Process from '../constants/process-constants';

@Symbiosis(Stores.Title)
export default class extends Mixin(React.Component, State) {
	componentWillMount() {
		let params = this.getParams();
		Actions.API.getManga(params.alias);
	}
	render() {
		return <RouteHandler />;
	}
}
