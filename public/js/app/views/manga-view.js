'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _State$RouteHandler = require('react-router');

var _MangaAPIActions = require('../actions/manga-api-actions');

var _MangaAPIActions2 = _interopRequireDefault(_MangaAPIActions);

var _MangaIndexStore = require('../stores/manga-index-store');

var _MangaIndexStore2 = _interopRequireDefault(_MangaIndexStore);

var _MangaTitleStore = require('../stores/manga-title-store');

var _MangaTitleStore2 = _interopRequireDefault(_MangaTitleStore);

var _Symbiosis = require('../mixins/symbiosis-mixin');

var _Symbiosis2 = _interopRequireDefault(_Symbiosis);

var _Progress = require('../views/progress');

var _Progress2 = _interopRequireDefault(_Progress);

exports['default'] = _React2['default'].createClass({
	displayName: 'manga-view',

	mixins: [_State$RouteHandler.State, _Symbiosis2['default'](_MangaTitleStore2['default'])],
	componentWillMount: function componentWillMount() {
		var dep = _MangaIndexStore2['default'].getState();
		if (dep.ready) {
			var params = this.getParams();
			_MangaAPIActions2['default'].getManga(dep.all, params.alias);
		}
	},
	componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
		if (nextState.run) {
			var params = this.getParams();
			var dep = _MangaIndexStore2['default'].getState();
			_MangaAPIActions2['default'].getManga.defer(dep.all, params.alias);
		}
	},
	render: function render() {
		return _React2['default'].createElement(_State$RouteHandler.RouteHandler, null);
	}
});
module.exports = exports['default'];