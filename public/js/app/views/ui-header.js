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

var _reactRouter = require('react-router');

var _hub = require('../hub');

var _constantsUiStateConstants = require('../constants/ui-state-constants');

var _constantsUiStateConstants2 = _interopRequireDefault(_constantsUiStateConstants);

var _mixinsMixin = require('../mixins/mixin');

var _mixinsMixin2 = _interopRequireDefault(_mixinsMixin);

var _decoratorsNetwork = require('../decorators/network');

var _decoratorsNetwork2 = _interopRequireDefault(_decoratorsNetwork);

var _colorpicker = require('./colorpicker');

var _colorpicker2 = _interopRequireDefault(_colorpicker);

var TransitionGroup = _react.addons.TransitionGroup;

var _default = (function (_React$Component) {
	var _class = function _default() {
		var _this = this;

		_classCallCheck(this, _class2);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}

		this.componentDidMount = function () {
			_this.componentDidUpdate();
		};
	};

	_inherits(_class, _React$Component);

	var _class2 = _class;

	_createClass(_class2, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var _this2 = this;

			_.defer(function () {
				switch (_this2.state.ui.level) {
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
			var extra = undefined;
			var _state = this.state;
			var ui = _state.ui;
			var title = _state.title;
			var chapter = _state.chapter;

			switch (ui.level) {
				case _constantsUiStateConstants2['default'].index:
					break;
				case _constantsUiStateConstants2['default'].title:
					var params = this.getParams();
					extra = _react2['default'].createElement(
						'li',
						{ key: 'detail' },
						_react2['default'].createElement(
							_reactRouter.Link,
							{ className: '' + ui.color + '-text text-lighten-4 animated fadeIn', to: 'detail', params: { alias: params.alias } },
							title.manga.title
						)
					);
					break;
				case _constantsUiStateConstants2['default'].chapter:
					var params = this.getParams();
					extra = [['detail', 'detail', { alias: params.alias }, title.manga.title], ['chapter', 'chapter', { alias: params.alias, chapter: params.chapter }, 'Ch. ' + params.chapter], ['page', 'chapter', { alias: params.alias, chapter: params.chapter }, 'Pg. ' + chapter.page]].map(function (arr) {
						return _react2['default'].createElement(
							'li',
							{ key: arr[0] },
							_react2['default'].createElement(
								_reactRouter.Link,
								{ className: '' + ui.color + '-text text-lighten-4 animated fadeIn', to: arr[1], params: arr[2] },
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
	}]);

	_class = (0, _decoratorsNetwork2['default'])({
		ui: _hub.Stores.UI,
		title: _hub.Stores.Title,
		chapter: _hub.Stores.Chapter
	})(_class) || _class;
	return _class;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];