'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _hub = require('./hub');

var _viewsHeader = require('./views/header');

var _viewsHeader2 = _interopRequireDefault(_viewsHeader);

var _viewsUiHeader = require('./views/ui-header');

var _viewsUiHeader2 = _interopRequireDefault(_viewsUiHeader);

var _mixinsSymbiosisMixin = require('./mixins/symbiosis-mixin');

var _mixinsSymbiosisMixin2 = _interopRequireDefault(_mixinsSymbiosisMixin);

exports['default'] = _react2['default'].createClass({
	displayName: 'app',

	mixins: [(0, _mixinsSymbiosisMixin2['default'])(_hub.Stores.UI)],
	componentWillMount: function componentWillMount() {
		_hub.Actions.API.getAllManga();
	},
	renderHeader: function renderHeader() {
		// return (this.state.state != UIState.chapter)
		// 	? <Header />
		// 	: null;
		return _react2['default'].createElement(_viewsHeader2['default'], null);
	},
	renderUIHeader: function renderUIHeader() {
		// return (this.state.state == UIState.chapter)
		// 	? <UIHeader />
		// 	: null;
		return _react2['default'].createElement(_viewsUiHeader2['default'], null);
	},
	render: function render() {
		return _react2['default'].createElement(
			'div',
			null,
			this.renderHeader(),
			_react2['default'].createElement(
				'div',
				{ className: 'container' },
				_react2['default'].createElement(_reactRouter.RouteHandler, null)
			),
			this.renderUIHeader()
		);
	}
});
module.exports = exports['default'];