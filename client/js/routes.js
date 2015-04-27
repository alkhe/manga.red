import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';
import App from './app';
import Search from './views/search';
import MangaDetail from './views/manga-detail';

export default (
	<Route handler={App} path='/'>
		<DefaultRoute name='main' handler={Search} />
		<Route name='manga' handler={MangaDetail} path='manga/:alias' />
	</Route>
);
