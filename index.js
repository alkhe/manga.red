var app = require('koa')(),
	logger = require('koa-logger'),
	compress = require('koa-compress'),
	condget = require('koa-conditional-get'),
	etag = require('koa-etag'),
	serve = require('koa-static');

app
	.use(logger())
	.use(compress())
	.use(condget())
	.use(etag())
	.use(serve('public'));

var server = require('http').createServer(app.callback());

module.exports = server.listen(process.env.PORT || 80, function() {});
