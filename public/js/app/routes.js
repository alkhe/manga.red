'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _Router$Route$DefaultRoute = require('react-router');

var _Router$Route$DefaultRoute2 = _interopRequireDefault(_Router$Route$DefaultRoute);

var _App = require('./app');

var _App2 = _interopRequireDefault(_App);

var _Search = require('./views/search');

var _Search2 = _interopRequireDefault(_Search);

var _MangaView = require('./views/manga-view');

var _MangaView2 = _interopRequireDefault(_MangaView);

var _MangaDetail = require('./views/manga-detail');

var _MangaDetail2 = _interopRequireDefault(_MangaDetail);

var _MangaChapter = require('./views/manga-chapter');

var _MangaChapter2 = _interopRequireDefault(_MangaChapter);

exports['default'] = _React2['default'].createElement(
	_Router$Route$DefaultRoute.Route,
	{ handler: _App2['default'], path: '/' },
	_React2['default'].createElement(_Router$Route$DefaultRoute.DefaultRoute, { name: 'main', handler: _Search2['default'] }),
	_React2['default'].createElement(
		_Router$Route$DefaultRoute.Route,
		{ name: 'manga', handler: _MangaView2['default'], path: 'manga/:alias' },
		_React2['default'].createElement(_Router$Route$DefaultRoute.DefaultRoute, { name: 'detail', handler: _MangaDetail2['default'] }),
		_React2['default'].createElement(_Router$Route$DefaultRoute.Route, { name: 'chapter', handler: _MangaChapter2['default'], path: ':chapter' })
	)
);
module.exports = exports['default'];