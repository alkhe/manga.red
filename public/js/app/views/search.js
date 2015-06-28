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

var _hub = require('../hub');

var _decoratorsNetwork = require('../decorators/network');

var _decoratorsNetwork2 = _interopRequireDefault(_decoratorsNetwork);

var _decoratorsAutobind = require('../decorators/autobind');

var _decoratorsAutobind2 = _interopRequireDefault(_decoratorsAutobind);

var _viewsMangaCard = require('../views/manga-card');

var _viewsMangaCard2 = _interopRequireDefault(_viewsMangaCard);

var _viewsProgress = require('../views/progress');

var _viewsProgress2 = _interopRequireDefault(_viewsProgress);

var _constantsProcessConstants = require('../constants/process-constants');

var _constantsProcessConstants2 = _interopRequireDefault(_constantsProcessConstants);

var plural = function plural(n) {
	return n == 1 ? '' : 's';
};

var _default = (function (_React$Component) {
	var _class = function _default() {
		_classCallCheck(this, _class2);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	};

	_inherits(_class, _React$Component);

	var _class2 = _class;

	_createClass(_class2, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_hub.Actions.UI.toIndex();
		}
	}, {
		key: 'renderManga',
		value: function renderManga() {
			var index = this.state.index;

			return (index.results ? index.results : index.sorted).slice(0, 24).map(function (m) {
				return _react2['default'].createElement(_viewsMangaCard2['default'], { key: m.i, manga: m });
			});
		}
	}, {
		key: 'search',
		value: function search() {
			_hub.Actions.UI.search(_react2['default'].findDOMNode(this.refs.search).value);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_react2['default'].findDOMNode(this.refs.search).focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state;
			var index = _state.index;
			var ui = _state.ui;

			var titles = index.results ? index.results.length : index.sorted.length;
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(_viewsProgress2['default'], { loading: _constantsProcessConstants2['default'].Loading(index.process) }),
				_react2['default'].createElement(
					'div',
					{ className: 'input-field ' + ui.color + '-text text-lighten-4' },
					_react2['default'].createElement('input', { type: 'text', ref: 'search', onChange: this.search }),
					_react2['default'].createElement(
						'label',
						null,
						'Search titles'
					)
				),
				_react2['default'].createElement(
					'h2',
					{ className: 'grey-text text-darken-3' },
					titles,
					' title',
					plural(titles)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'row' },
					this.renderManga()
				)
			);
		}
	}]);

	_class = (0, _decoratorsAutobind2['default'])(_class) || _class;
	_class = (0, _decoratorsNetwork2['default'])({
		index: _hub.Stores.Index,
		ui: _hub.Stores.UI
	})(_class) || _class;
	return _class;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];