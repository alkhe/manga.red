import jade from 'jade';
import React from 'react';
import ReDOM from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import Flux from 'fluxette';
import { Context } from 'fluxette-react';
import thunk from 'fluxette-thunk';
import reducer from './src/js/reducers';
import Routes from './src/js/routes';
import color from './src/js/actions/color';

let template = jade.compileFile('./src/html/index.jade');
let iso = root => template({ ssr: ReDOM.renderToString(root) });

export default (req, res) => {
	let { theme } = req.cookies;
	let flux = Flux(reducer).using(thunk);
	flux.dispatch(color.confirm(theme));
	let location = createLocation(req.url);
	match({ routes: Routes(), location }, (err, redir, initial) => {
		res.send(iso(
			<Context flux={ flux }>
				{ () => <RoutingContext { ...initial } /> }
			</Context>
		));
	})
}
