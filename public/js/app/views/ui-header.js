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

var _constantsUiStateConstants = require('../constants/ui-state-constants');

var _constantsUiStateConstants2 = _interopRequireDefault(_constantsUiStateConstants);

var _decoratorsNetwork = require('../decorators/network');

var _decoratorsNetwork2 = _interopRequireDefault(_decoratorsNetwork);

var _colorpicker = require('./colorpicker');

var _colorpicker2 = _interopRequireDefault(_colorpicker);

var _default = (function (_React$Component) {
	_inherits(_default, _React$Component);

	function _default() {
		_classCallCheck(this, _default2);

		_get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(_default, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.componentDidUpdate();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var _this = this;

			_.defer(function () {
				switch (_this.state.ui.level) {
					case _constantsUiStateConstants2['default'].index:
						break;
					case _constantsUiStateConstants2['default'].title:
						break;
					case _constantsUiStateConstants2['default'].chapter:
						$('.tooltipped').tooltip({ delay: 50 });
						break;
					default:
						break;
				}
			});
		}
	}, {
		key: 'renderLeft',
		value: function renderLeft() {
			var extra = undefined,
			    params = undefined;
			var _state = this.state;
			var ui = _state.ui;
			var title = _state.title;
			var chapter = _state.chapter;

			switch (ui.level) {
				case _constantsUiStateConstants2['default'].index:
					break;
				case _constantsUiStateConstants2['default'].title:
					params = this.context.router.getCurrentParams();
					extra = _react2['default'].createElement(
						'li',
						{ key: 'detail' },
						_react2['default'].createElement(
							_reactRouter.Link,
							{ className: ui.color + '-text text-lighten-4 animated fadeIn', to: 'detail', params: { alias: params.alias } },
							title.manga.title
						)
					);
					break;
				case _constantsUiStateConstants2['default'].chapter:
					params = this.context.router.getCurrentParams();
					extra = [['detail', 'detail', { alias: params.alias }, title.manga.title], ['chapter', 'chapter', { alias: params.alias, chapter: params.chapter }, 'Ch. ' + params.chapter], ['page', 'chapter', { alias: params.alias, chapter: params.chapter }, 'Pg. ' + chapter.page]].map(function (arr) {
						return _react2['default'].createElement(
							'li',
							{ key: arr[0] },
							_react2['default'].createElement(
								_reactRouter.Link,
								{ className: ui.color + '-text text-lighten-4 animated fadeIn', to: arr[1], params: arr[2] },
								arr[3]
							)
						);
					});
					break;
				default:
					break;
			}
			return extra;
		}
	}, {
		key: 'renderRight',
		value: function renderRight() {
			var ui = this.state.ui;

			var extra = [];
			switch (ui.level) {
				case _constantsUiStateConstants2['default'].index:
					break;
				case _constantsUiStateConstants2['default'].title:
					break;
				case _constantsUiStateConstants2['default'].chapter:
					extra = extra.concat([[_hub.Actions.UI.readFirstPage, 'First Page (Home)', 'av-skip-previous'], [_hub.Actions.UI.readPreviousPage, 'Previous Page (Left)', 'hardware-keyboard-arrow-left'], [_hub.Actions.UI.readNextPage, 'Next Page (Right)', 'hardware-keyboard-arrow-right'], [_hub.Actions.UI.readLastPage, 'Last Page (End)', 'av-skip-next']].map(function (arr, i) {
						return _react2['default'].createElement(
							'li',
							{ onClick: arr[0], key: i, className: 'tooltipped ' + ui.color + '-text text-lighten-4',
								'data-tooltip': arr[1], 'data-position': 'left' },
							_react2['default'].createElement('i', { className: 'widemargin mdi-' + arr[2] })
						);
					}));
					break;
				default:
					break;
			}
			extra.push(_react2['default'].createElement(
				'li',
				{ onClick: _hub.Actions.UI.toggleColorPicker, className: 'tooltipped ' + ui.color + '-text text-lighten-4' },
				_react2['default'].createElement('i', { className: 'widemargin mdi-image-color-lens' }),
				_react2['default'].createElement(_colorpicker2['default'], { hidden: !ui.colorOpen })
			));
			return extra;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'navbar-fixed noselect arrow-cursor' },
				_react2['default'].createElement(
					'nav',
					{ className: 'fixed-bottom ' + this.state.ui.color + ' z-depth-0' },
					_react2['default'].createElement(
						'div',
						{ className: 'nav-wrapper container' },
						_react2['default'].createElement(
							'ul',
							{ className: 'left' },
							this.renderLeft()
						),
						_react2['default'].createElement(
							'ul',
							{ className: 'right' },
							this.renderRight()
						)
					)
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
		ui: _hub.Stores.UI,
		title: _hub.Stores.Title,
		chapter: _hub.Stores.Chapter
	})(_default) || _default;
	return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];