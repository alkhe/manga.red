import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './app';
import Search from './views/search';

export default () => (
	<Route component={ App } path='/'>
		<IndexRoute component={ Search } />
	</Route>
)
