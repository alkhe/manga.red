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

var _reactRouter = require('react-router');

var _hub = require('../hub');

var _decoratorsSymbiosis = require('../decorators/symbiosis');

var _decoratorsSymbiosis2 = _interopRequireDefault(_decoratorsSymbiosis);

var _viewsProgress = require('../views/progress');

var _viewsProgress2 = _interopRequireDefault(_viewsProgress);

var _constantsProcessConstants = require('../constants/process-constants');

var _constantsProcessConstants2 = _interopRequireDefault(_constantsProcessConstants);

var _default = (function (_React$Component) {
	_inherits(_default, _React$Component);

	function _default() {
		_classCallCheck(this, _default2);

		_get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(_default, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var params = this.context.router.getCurrentParams();
			_hub.Actions.API.getManga(params.alias);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(_reactRouter.RouteHandler, null);
		}
	}], [{
		key: 'contextTypes',
		value: {
			router: _react2['default'].PropTypes.any.isRequired
		},
		enumerable: true
	}]);

	var _default2 = _default;
	_default = (0, _decoratorsSymbiosis2['default'])(_hub.Stores.Title)(_default) || _default;
	return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];