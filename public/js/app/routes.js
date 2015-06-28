'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _viewsSearch = require('./views/search');

var _viewsSearch2 = _interopRequireDefault(_viewsSearch);

var _viewsMangaView = require('./views/manga-view');

var _viewsMangaView2 = _interopRequireDefault(_viewsMangaView);

var _viewsMangaDetail = require('./views/manga-detail');

var _viewsMangaDetail2 = _interopRequireDefault(_viewsMangaDetail);

var _viewsMangaChapter = require('./views/manga-chapter');

var _viewsMangaChapter2 = _interopRequireDefault(_viewsMangaChapter);

exports['default'] = _react2['default'].createElement(
	_reactRouter.Route,
	{ handler: _app2['default'], path: '/' },
	_react2['default'].createElement(_reactRouter.DefaultRoute, { name: 'main', handler: _viewsSearch2['default'] }),
	_react2['default'].createElement(
		_reactRouter.Route,
		{ name: 'manga', handler: _viewsMangaView2['default'], path: 'manga/:alias' },
		_react2['default'].createElement(_reactRouter.DefaultRoute, { name: 'detail', handler: _viewsMangaDetail2['default'] }),
		_react2['default'].createElement(_reactRouter.Route, { name: 'chapter', handler: _viewsMangaChapter2['default'], path: ':chapter' })
	)
);
module.exports = exports['default'];