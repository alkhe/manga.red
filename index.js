import express from 'express';
import webpack from 'webpack';
import ssr from './ssr';

let production = process.env.NODE_ENV === 'production';

let app = express();
app.use(require('cookie-parser')());
let router = express.Router();

if (production) {
	console.log('[pro]');
	app.use(require('compression')());
}
else {
	console.log('[dev]');
	let config = require('./dev.babel'),
		compiler = webpack(config),
		dev = require('webpack-dev-middleware'),
		hot = require('webpack-hot-middleware');

	app.use(dev(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath
	})).use(hot(compiler));
}

router.get('/', ssr);

app
	.use(router)
	.use(express.static('./public'));

const port = process.env.PORT || 80;

app.listen(port, 'localhost', err => {
	if (err) {
		return console.err(err);
	}
	console.log(`listening on http://localhost:${ port }`);
});
