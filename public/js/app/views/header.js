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

var _decoratorsSymbiosis = require('../decorators/symbiosis');

var _decoratorsSymbiosis2 = _interopRequireDefault(_decoratorsSymbiosis);

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
		key: 'render',
		value: function render() {
			var color = this.state.color;
			return _react2['default'].createElement(
				'div',
				{ className: 'navbar-fixed noselect arrow-cursor' },
				_react2['default'].createElement(
					'nav',
					{ className: color },
					_react2['default'].createElement(
						'div',
						{ className: 'nav-wrapper container' },
						_react2['default'].createElement(
							_reactRouter.Link,
							{ to: 'main', className: 'brand-logo ' + color + '-text text-lighten-4' },
							'MangaRed'
						),
						_react2['default'].createElement(
							'ul',
							{ className: 'right' },
							_react2['default'].createElement(
								'li',
								null,
								_react2['default'].createElement(
									'a',
									{ href: 'http://www.mangaeden.com/', className: '' + color + '-text text-lighten-2' },
									'A ',
									_react2['default'].createElement(
										'span',
										{ className: '' + color + '-text text-lighten-4' },
										'MangaEden'
									),
									' Client'
								)
							)
						)
					)
				)
			);
		}
	}]);

	_class = (0, _decoratorsSymbiosis2['default'])(_hub.Stores.UI)(_class) || _class;
	return _class;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];