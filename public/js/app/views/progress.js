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

var _mixinsSymbiosis = require('../mixins/symbiosis');

var _mixinsSymbiosis2 = _interopRequireDefault(_mixinsSymbiosis);

var _hub = require('../hub');

var _mixinsMixin = require('../mixins/mixin');

var _mixinsMixin2 = _interopRequireDefault(_mixinsMixin);

var PureRenderMixin = _react2['default'].addons.PureRenderMixin;

var _default = (function (_Mixin) {
	var _class = function _default() {
		_classCallCheck(this, _class2);

		if (_Mixin != null) {
			_Mixin.apply(this, arguments);
		}
	};

	_inherits(_class, _Mixin);

	var _class2 = _class;

	_createClass(_class2, [{
		key: 'render',
		value: function render() {
			var color = this.state.color;
			var innerClass = '' + (this.props.loading ? 'indeterminate' : 'determinate') + ' ' + color + ' lighten-4';
			return _react2['default'].createElement(
				'div',
				{ className: 'progress ' + color },
				_react2['default'].createElement('div', { className: innerClass })
			);
		}
	}]);

	_class = (0, _mixinsSymbiosis2['default'])(_hub.Stores.UI)(_class) || _class;
	return _class;
})((0, _mixinsMixin2['default'])(_react2['default'].Component, PureRenderMixin));

exports['default'] = _default;
module.exports = exports['default'];