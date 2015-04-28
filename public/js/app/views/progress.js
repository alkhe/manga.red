'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var PureRenderMixin = _React2['default'].addons.PureRenderMixin;
exports['default'] = _React2['default'].createClass({
	displayName: 'progress',

	mixins: [PureRenderMixin],
	render: function render() {
		var innerClass = '' + (this.props.loading ? 'indeterminate' : 'determinate') + ' teal lighten-4';
		return _React2['default'].createElement(
			'div',
			{ className: 'progress teal' },
			_React2['default'].createElement('div', { className: innerClass })
		);
	}
});
module.exports = exports['default'];