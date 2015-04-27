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
var io = require('socket.io')(server);

module.exports = server.listen(3000, function() {});
io.on('connection', function(socket) {

});
