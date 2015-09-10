'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hub = require('../hub');

var _decoratorsSymbiosis = require('../decorators/symbiosis');

var _decoratorsSymbiosis2 = _interopRequireDefault(_decoratorsSymbiosis);

var colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'];

var ColorPicker = (function (_React$Component) {
	_inherits(ColorPicker, _React$Component);

	function ColorPicker() {
		_classCallCheck(this, _ColorPicker);

		_get(Object.getPrototypeOf(_ColorPicker.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(ColorPicker, [{
		key: 'changeColor',
		value: function changeColor(e, el, c) {
			_hub.Actions.UI.changeThemeColor({ color: c, confirm: false });
		}
	}, {
		key: 'changeColorConfirm',
		value: function changeColorConfirm(e, el, c) {
			e.stopPropagation();
			_hub.Actions.UI.changeThemeColor({ color: c, confirm: true });
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			var props = this.props;
			var state = this.state;

			var colorboxes = colors.map(function (c) {
				return _react2['default'].createElement('div', { onMouseOver: _.partialRight(_this.changeColor.bind(_this), c),
					onClick: _.partialRight(_this.changeColorConfirm.bind(_this), c),
					key: c,
					className: 'colorbox ' + c + ' ' + (c == state.actualcolor ? 'current' : c == state.color ? 'selected' : '') });
			});
			return _react2['default'].createElement(
				'div',
				{ onMouseLeave: _.partialRight(this.changeColor.bind(this), state.actualcolor),
					className: 'colorpicker ' + (props.hidden ? 'hide' : '') },
				colorboxes
			);
		}
	}], [{
		key: 'getStores',
		value: function getStores() {
			return [_hub.Stores.UI];
		}
	}, {
		key: 'getPropsFromStores',
		value: function getPropsFromStores() {
			return _hub.Stores.UI.getState();
		}
	}]);

	var _ColorPicker = ColorPicker;
	ColorPicker = (0, _decoratorsSymbiosis2['default'])(_hub.Stores.UI)(ColorPicker) || ColorPicker;
	return ColorPicker;
})(_react2['default'].Component);

exports['default'] = ColorPicker;
module.exports = exports['default'];