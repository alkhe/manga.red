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

var _MangaUIActions = require('../actions/manga-ui-actions');

var _MangaUIActions2 = _interopRequireDefault(_MangaUIActions);

var _MangaIndexStore = require('../stores/manga-index-store');

var _MangaIndexStore2 = _interopRequireDefault(_MangaIndexStore);

var _MangaTitleStore = require('../stores/manga-title-store');

var _MangaTitleStore2 = _interopRequireDefault(_MangaTitleStore);

var _Symbiosis = require('../mixins/symbiosis-mixin');

var _Symbiosis2 = _interopRequireDefault(_Symbiosis);

var _Progress = require('../views/progress');

var _Progress2 = _interopRequireDefault(_Progress);

var _Process = require('../constants/process-constants');

var _Process2 = _interopRequireDefault(_Process);

exports['default'] = _React2['default'].createClass({
	displayName: 'manga-view',

	mixins: [_State$RouteHandler.State, _Symbiosis2['default'](_MangaTitleStore2['default'])],
	componentWillMount: function componentWillMount() {
		_MangaUIActions2['default'].toTitle();
		var index = _MangaIndexStore2['default'].getState();
		if (index.process == _Process2['default'].Done) {
			var params = this.getParams();
			_MangaAPIActions2['default'].getManga(index.all, params.alias);
		}
	},
	componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
		if (nextState.process == _Process2['default'].Ready) {
			var params = this.getParams();
			var index = _MangaIndexStore2['default'].getState();
			_MangaAPIActions2['default'].getManga.defer(index.all, params.alias);
		}
	},
	render: function render() {
		return _React2['default'].createElement(_State$RouteHandler.RouteHandler, null);
	}
});
module.exports = exports['default'];