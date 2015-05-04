'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _Actions$Stores = require('../hub');

var _UIState = require('../constants/ui-state-constants');

var _UIState2 = _interopRequireDefault(_UIState);

var _Symbiosis = require('../mixins/symbiosis-mixin');

var _Symbiosis2 = _interopRequireDefault(_Symbiosis);

exports['default'] = _React2['default'].createClass({
	displayName: 'ui-header',

	mixins: [_Symbiosis2['default'](_Actions$Stores.Stores.UI)],
	componentDidMount: function componentDidMount() {
		this.componentDidUpdate();
	},
	componentDidUpdate: function componentDidUpdate() {
		var _this = this;

		_.defer(function () {
			switch (_this.state.state) {
				case _UIState2['default'].index:
					break;
				case _UIState2['default'].title:
					break;
				case _UIState2['default'].chapter:
					$('.tooltipped').tooltip({ delay: 50 });
					break;
				default:
					break;
			}
		});
	},
	renderLeft: function renderLeft() {
		var extra = undefined;
		switch (this.state.state) {
			case _UIState2['default'].index:
				break;
			case _UIState2['default'].title:
				break;
			case _UIState2['default'].chapter:
				break;
			default:
				break;
		}
		return extra;
	},
	renderRight: function renderRight() {
		var extra = undefined;
		switch (this.state.state) {
			case _UIState2['default'].index:
				break;
			case _UIState2['default'].title:
				break;
			case _UIState2['default'].chapter:
				extra = [[_Actions$Stores.Actions.MangaUI.readFirstPage, 'First Page (Home)', 'av-skip-previous'], [_Actions$Stores.Actions.MangaUI.readPreviousPage, 'Previous Page (Left)', 'hardware-keyboard-arrow-left'], [_Actions$Stores.Actions.MangaUI.readNextPage, 'Next Page (Right)', 'hardware-keyboard-arrow-right'], [_Actions$Stores.Actions.MangaUI.readLastPage, 'Last Page (End)', 'av-skip-next']].map(function (arr, i) {
					return _React2['default'].createElement(
						'li',
						{ onClick: arr[0], key: i, className: 'tooltipped',
							'data-tooltip': arr[1], 'data-position': 'left' },
						_React2['default'].createElement('i', { className: 'widemargin mdi-' + arr[2] })
					);
				});
				break;
			default:
				break;
		}
		return extra;
	},
	render: function render() {
		return _React2['default'].createElement(
			'div',
			{ className: 'navbar-fixed noselect arrow-cursor' },
			_React2['default'].createElement(
				'nav',
				{ className: 'fixed-bottom teal z-depth-0' },
				_React2['default'].createElement(
					'div',
					{ className: 'nav-wrapper container' },
					_React2['default'].createElement(
						'ul',
						{ className: 'left' },
						this.renderLeft()
					),
					_React2['default'].createElement(
						'ul',
						{ className: 'right' },
						this.renderRight()
					)
				)
			)
		);
	}
});
module.exports = exports['default'];