import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './views/header';

export default React.createClass({
	render() {
		return (
			<div>
				<Header />
				<div className='container'>
					<RouteHandler />
				</div>
			</div>
		);
	}
});
