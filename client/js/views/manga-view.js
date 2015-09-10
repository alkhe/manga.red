import React from 'react';
import { RouteHandler } from 'react-router';
import { Actions, Stores } from '../hub';
import Symbiosis from '../decorators/symbiosis';
import Progress from '../views/progress';
import Process from '../constants/process-constants';

@Symbiosis(Stores.Title)
export default class extends React.Component {
	static contextTypes = {
		router: React.PropTypes.any.isRequired
	}
	componentWillMount() {
		let params = this.context.router.getCurrentParams();
		Actions.API.getManga(params.alias);
	}
	render() {
		return <RouteHandler />;
	}
}
