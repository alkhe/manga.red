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
			var m = this.props.manga;
			return _react2['default'].createElement(
				_reactRouter.Link,
				{ to: 'manga', params: { alias: m.a } },
				_react2['default'].createElement(
					'div',
					{ className: 'col l3 m4 s6' },
					_react2['default'].createElement(
						'div',
						{ className: 'card large ' + color + ' z-depth-2 animated fadeIn' },
						_react2['default'].createElement(
							'div',
							{ className: 'card-image' },
							_react2['default'].createElement('img', { src: 'https://cdn.mangaeden.com/mangasimg/' + m.im })
						),
						_react2['default'].createElement(
							'div',
							{ className: 'card-content ' + color + '-text text-lighten-4' },
							_react2['default'].createElement(
								'span',
								{ className: 'card-title truncate' },
								m.t
							),
							_react2['default'].createElement(
								'p',
								null,
								'Categories: ',
								m.c.join(' ')
							)
						)
					)
				)
			);
		}
	}]);

	_class = (0, _decoratorsSymbiosis2['default'])(_hub.Stores.UI)(_class) || _class;
	return _class;
})((0, _mixinsMixin2['default'])(_react2['default'].Component, PureRenderMixin));

exports['default'] = _default;
module.exports = exports['default'];