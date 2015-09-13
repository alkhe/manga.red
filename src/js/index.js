import RDOM from 'react-dom';
import React from 'react';
import Router from 'react-router';

import { createHistory } from 'history';
import Routes from './routes';

import Flux from 'fluxette';
import thunk from 'fluxette-thunk';
import reducer from './reducers';
import { Context } from 'fluxette-react';

import init from './init';

RDOM.render(
	<Context flux={ init(Flux(reducer).using(thunk)) }>
		{ () => <Router history={ createHistory() } routes={ Routes() } /> }
	</Context>,
	document.getElementById('mangared')
);
