import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';
import App from './app';
import Search from './views/search';
import MangaView from './views/manga-view';
import MangaDetail from './views/manga-detail';
import MangaChapter from './views/manga-chapter';

export default (
	<Route handler={App} path='/'>
		<DefaultRoute name='main' handler={Search} />
		<Route name='manga' handler={MangaView} path='manga/:alias'>
			<DefaultRoute name='detail' handler={MangaDetail} />
			<Route name='chapter' handler={MangaChapter} path=':chapter' />
		</Route>
	</Route>
);
