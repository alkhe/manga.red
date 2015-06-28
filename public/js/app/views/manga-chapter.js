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

var _mixinsMixin = require('../mixins/mixin');

var _mixinsMixin2 = _interopRequireDefault(_mixinsMixin);

var _decoratorsSymbiosis = require('../decorators/symbiosis');

var _decoratorsSymbiosis2 = _interopRequireDefault(_decoratorsSymbiosis);

var _mixinsDomEventMixin = require('../mixins/dom-event-mixin');

var _mixinsDomEventMixin2 = _interopRequireDefault(_mixinsDomEventMixin);

var _viewsProgress = require('../views/progress');

var _viewsProgress2 = _interopRequireDefault(_viewsProgress);

var _constantsProcessConstants = require('../constants/process-constants');

var _constantsProcessConstants2 = _interopRequireDefault(_constantsProcessConstants);

var keys = {
	end: 35,
	home: 36,
	left: 37,
	right: 39
};

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
			_hub.Actions.UI.toChapter();
			var params = this.getParams();
			_hub.Actions.API.getChapter(params.chapter);
		}
	}, {
		key: 'handleKey',
		value: function handleKey(e) {
			switch (e.which) {
				case keys.left:
					_hub.Actions.UI.readPreviousPage();
					break;
				case keys.right:
					_hub.Actions.UI.readNextPage();
					break;
				case keys.home:
					e.preventDefault();
					_hub.Actions.UI.readFirstPage();
					break;
				case keys.end:
					e.preventDefault();
					_hub.Actions.UI.readLastPage();
					break;
				default:
					break;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var page = undefined;
			var chapter = this.state;
			if (chapter.process == _constantsProcessConstants2['default'].Done) {
				page = _react2['default'].createElement('img', { style: { height: 'calc(86vh - 50px)' }, src: 'https://cdn.mangaeden.com/mangasimg/' + chapter.pages[chapter.pages.length - chapter.page - 1][1] });
			}
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(_viewsProgress2['default'], { loading: _constantsProcessConstants2['default'].Loading(chapter.process) }),
				_react2['default'].createElement(
					'div',
					{ className: 'center-align' },
					page
				)
			);
		}
	}]);

	_class = (0, _decoratorsSymbiosis2['default'])(_hub.Stores.Chapter)(_class) || _class;
	return _class;
})((0, _mixinsMixin2['default'])(_react2['default'].Component, _reactRouter.State, (0, _mixinsDomEventMixin2['default'])($(document.body), 'keydown', 'handleKey')));

exports['default'] = _default;
module.exports = exports['default'];