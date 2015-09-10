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

var _decoratorsNetwork = require('../decorators/network');

var _decoratorsNetwork2 = _interopRequireDefault(_decoratorsNetwork);

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
			_hub.Actions.UI.toTitle();
		}
	}, {
		key: 'renderDetail',
		value: function renderDetail() {
			var _this = this;

			var detail = undefined;
			var _state = this.state;
			var title = _state.title;
			var ui = _state.ui;

			if (title.process == _constantsProcessConstants2['default'].Done) {
				var chapters = title.manga.chapters.map(function (c) {
					return _react2['default'].createElement(
						_reactRouter.Link,
						{ to: 'chapter', params: { alias: _this.context.router.getCurrentParams().alias, chapter: c[0] }, key: c[0], className: 'row chapter-entry' },
						_react2['default'].createElement(
							'div',
							{ className: 'col s1 ' + ui.color + ' lighten-3 ' + ui.color + '-text text-lighten-1 right-align' },
							_react2['default'].createElement(
								'div',
								null,
								c[0]
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col s11 ' + ui.color + ' lighten-4 ' + ui.color + '-text text-darken-1' },
							_react2['default'].createElement(
								'div',
								null,
								c[2] && c[0] != c[2] ? c[2] : 'N/A'
							)
						)
					);
				});
				detail = _react2['default'].createElement(
					'div',
					{ className: 'animated fadeIn' },
					_react2['default'].createElement(
						'h1',
						{ className: ui.color + '-text text-lighten-1' },
						title.manga.title
					),
					_react2['default'].createElement(
						'p',
						{ className: 'flow-text ' + ui.color + '-text text-lighten-3' },
						_.unescape(title.manga.description.replace(/\&\#0+(?=\d+\;)/g, '&#'))
					),
					chapters
				);
			}
			return detail;
		}
	}, {
		key: 'render',
		value: function render() {
			var _state2 = this.state;
			var title = _state2.title;
			var ui = _state2.ui;

			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(_viewsProgress2['default'], { loading: _constantsProcessConstants2['default'].Loading(title.process) }),
				_react2['default'].createElement(
					'div',
					{ className: ui.color + '-text' },
					this.renderDetail()
				)
			);
		}
	}], [{
		key: 'contextTypes',
		value: {
			router: _react2['default'].PropTypes.any.isRequired
		},
		enumerable: true
	}]);

	var _default2 = _default;
	_default = (0, _decoratorsNetwork2['default'])({
		title: _hub.Stores.Title,
		ui: _hub.Stores.UI
	})(_default) || _default;
	return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];