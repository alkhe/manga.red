'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _Link$State = require('react-router');

var _Symbiosis = require('../mixins/symbiosis-mixin');

var _Symbiosis2 = _interopRequireDefault(_Symbiosis);

var _MangaTitleStore = require('../stores/manga-title-store');

var _MangaTitleStore2 = _interopRequireDefault(_MangaTitleStore);

var _Progress = require('../views/progress');

var _Progress2 = _interopRequireDefault(_Progress);

var _Process = require('../constants/process-constants');

var _Process2 = _interopRequireDefault(_Process);

exports['default'] = _React2['default'].createClass({
	displayName: 'manga-detail',

	mixins: [_Link$State.State, _Symbiosis2['default'](_MangaTitleStore2['default'])],
	renderDetail: function renderDetail() {
		var _this = this;

		var detail = undefined;
		if (this.state.process == _Process2['default'].Done) {
			var chapters = this.state.manga.chapters.map(function (c) {
				return _React2['default'].createElement(
					_Link$State.Link,
					{ to: 'chapter', params: { alias: _this.getParams().alias, chapter: c[0] }, className: 'collection-item' },
					c[2]
				);
			});
			detail = _React2['default'].createElement(
				'div',
				{ className: 'animated fadeIn' },
				_React2['default'].createElement(
					'h1',
					null,
					this.state.manga.title
				),
				_React2['default'].createElement(
					'p',
					{ className: 'flow-text' },
					_.unescape(this.state.manga.description)
				),
				_React2['default'].createElement(
					'div',
					{ className: 'collection' },
					chapters
				)
			);
		}
		return detail;
	},
	render: function render() {
		return _React2['default'].createElement(
			'div',
			null,
			_React2['default'].createElement(_Progress2['default'], { loading: _Process2['default'].Loading(this.state.process) }),
			_React2['default'].createElement(
				'div',
				{ className: 'teal-text' },
				this.renderDetail()
			)
		);
	}
});
module.exports = exports['default'];