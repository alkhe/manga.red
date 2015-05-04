'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _RouteHandler = require('react-router');

var _Actions$Stores = require('./hub');

var _Header = require('./views/header');

var _Header2 = _interopRequireDefault(_Header);

var _UIHeader = require('./views/ui-header');

var _UIHeader2 = _interopRequireDefault(_UIHeader);

var _Symbiosis = require('./mixins/symbiosis-mixin');

var _Symbiosis2 = _interopRequireDefault(_Symbiosis);

exports['default'] = _React2['default'].createClass({
	displayName: 'app',

	mixins: [_Symbiosis2['default'](_Actions$Stores.Stores.UI)],
	componentWillMount: function componentWillMount() {
		_Actions$Stores.Actions.MangaAPI.getAllManga();
	},
	renderHeader: function renderHeader() {
		// return (this.state.state != UIState.chapter)
		// 	? <Header />
		// 	: null;
		return _React2['default'].createElement(_Header2['default'], null);
	},
	renderUIHeader: function renderUIHeader() {
		// return (this.state.state == UIState.chapter)
		// 	? <UIHeader />
		// 	: null;
		return _React2['default'].createElement(_UIHeader2['default'], null);
	},
	render: function render() {
		return _React2['default'].createElement(
			'div',
			null,
			this.renderHeader(),
			_React2['default'].createElement(
				'div',
				{ className: 'container' },
				_React2['default'].createElement(_RouteHandler.RouteHandler, null)
			),
			this.renderUIHeader()
		);
	}
});
module.exports = exports['default'];