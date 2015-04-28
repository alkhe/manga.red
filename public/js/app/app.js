'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _RouteHandler = require('react-router');

var _MangaAPIActions = require('./actions/manga-api-actions');

var _MangaAPIActions2 = _interopRequireDefault(_MangaAPIActions);

var _Header = require('./views/header');

var _Header2 = _interopRequireDefault(_Header);

exports['default'] = _React2['default'].createClass({
	displayName: 'app',

	componentWillMount: function componentWillMount() {
		_MangaAPIActions2['default'].getAllManga();
	},
	render: function render() {
		return _React2['default'].createElement(
			'div',
			null,
			_React2['default'].createElement(_Header2['default'], null),
			_React2['default'].createElement(
				'div',
				{ className: 'container' },
				_React2['default'].createElement(_RouteHandler.RouteHandler, null)
			)
		);
	}
});
module.exports = exports['default'];