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

var _decoratorsNetwork = require('../decorators/network');

var _decoratorsNetwork2 = _interopRequireDefault(_decoratorsNetwork);

var _mixinsMixin = require('../mixins/mixin');

var _mixinsMixin2 = _interopRequireDefault(_mixinsMixin);

var _viewsProgress = require('../views/progress');

var _viewsProgress2 = _interopRequireDefault(_viewsProgress);

var _constantsProcessConstants = require('../constants/process-constants');

var _constantsProcessConstants2 = _interopRequireDefault(_constantsProcessConstants);

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
						{ to: 'chapter', params: { alias: _this.getParams().alias, chapter: c[0] }, key: c[0], className: 'row chapter-entry' },
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
						{ className: '' + ui.color + '-text text-lighten-1' },
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
					{ className: '' + ui.color + '-text' },
					this.renderDetail()
				)
			);
		}
	}]);

	_class = (0, _decoratorsNetwork2['default'])({
		title: _hub.Stores.Title,
		ui: _hub.Stores.UI
	})(_class) || _class;
	return _class;
})((0, _mixinsMixin2['default'])(_react2['default'].Component, _reactRouter.State));

exports['default'] = _default;
module.exports = exports['default'];