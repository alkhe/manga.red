'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _State$RouteHandler = require('react-router');

var _Actions$Stores = require('../hub');

var _Symbiosis = require('../mixins/symbiosis-mixin');

var _Symbiosis2 = _interopRequireDefault(_Symbiosis);

var _Progress = require('../views/progress');

var _Progress2 = _interopRequireDefault(_Progress);

var _Process = require('../constants/process-constants');

var _Process2 = _interopRequireDefault(_Process);

exports['default'] = _React2['default'].createClass({
	displayName: 'manga-view',

	mixins: [_State$RouteHandler.State, _Symbiosis2['default'](_Actions$Stores.Stores.MangaTitle)],
	componentWillMount: function componentWillMount() {
		var params = this.getParams();
		_Actions$Stores.Actions.MangaAPI.getManga(params.alias);
	},
	componentWillUpdate: function componentWillUpdate(nextProps, nextState) {},
	render: function render() {
		return _React2['default'].createElement(_State$RouteHandler.RouteHandler, null);
	}
});
module.exports = exports['default'];

// if (nextState.process == Process.Ready) {
// 	let params = this.getParams();
// 	let index = Stores.MangaIndex.getState();
// 	Actions.MangaAPI.getManga.defer(index.all, params.alias);
// }