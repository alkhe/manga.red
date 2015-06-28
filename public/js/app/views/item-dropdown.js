'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mixinsMixin = require('../mixins/mixin');

var _mixinsMixin2 = _interopRequireDefault(_mixinsMixin);

var PureRenderMixin = _react2['default'].addons.PureRenderMixin;

var _default = (function (_Mixin) {
	var _class = function _default() {
		_classCallCheck(this, _class);

		if (_Mixin != null) {
			_Mixin.apply(this, arguments);
		}
	};

	_inherits(_class, _Mixin);

	_createClass(_class, [{
		key: 'render',
		value: function render() {
			var props = this.props;
			return _react2['default'].createElement(
				'li',
				null,
				_react2['default'].createElement(
					'a',
					{ className: 'dropdown-button ' + (props.styles || ''), 'data-activates': props.domain },
					props.title
				),
				_react2['default'].createElement(
					'ul',
					{ id: props.domain, className: 'dropdown-content' },
					props.children
				)
			);
		}
	}]);

	return _class;
})((0, _mixinsMixin2['default'])(_react2['default'].Component, PureRenderMixin));

exports['default'] = _default;
module.exports = exports['default'];