'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _State = require('react-router');

var _MangaAPIActions = require('../actions/manga-api-actions');

var _MangaAPIActions2 = _interopRequireDefault(_MangaAPIActions);

var _MangaUIActions = require('../actions/manga-ui-actions');

var _MangaUIActions2 = _interopRequireDefault(_MangaUIActions);

var _MangaTitleStore = require('../stores/manga-title-store');

var _MangaTitleStore2 = _interopRequireDefault(_MangaTitleStore);

var _MangaChapterStore = require('../stores/manga-chapter-store');

var _MangaChapterStore2 = _interopRequireDefault(_MangaChapterStore);

var _Symbiosis = require('../mixins/symbiosis-mixin');

var _Symbiosis2 = _interopRequireDefault(_Symbiosis);

var _DOMEvent = require('../mixins/dom-event-mixin');

var _DOMEvent2 = _interopRequireDefault(_DOMEvent);

var _Progress = require('../views/progress');

var _Progress2 = _interopRequireDefault(_Progress);

var keys = {
	end: 35,
	home: 36,
	left: 37,
	right: 39
};

exports['default'] = _React2['default'].createClass({
	displayName: 'manga-chapter',

	mixins: [_State.State, _Symbiosis2['default'](_MangaChapterStore2['default']), _DOMEvent2['default']($(document.body), 'keydown', 'handleKey')],
	componentWillMount: function componentWillMount() {
		var dep = _MangaTitleStore2['default'].getState();
		if (dep.ready) {
			var params = this.getParams();
			_MangaAPIActions2['default'].getChapter(dep.manga, params.chapter);
		}
	},
	handleKey: function handleKey(e) {
		switch (e.which) {
			case keys.left:
				_MangaUIActions2['default'].readPreviousPage();
				break;
			case keys.right:
				_MangaUIActions2['default'].readNextPage();
				break;
			case keys.home:
				e.preventDefault();
				_MangaUIActions2['default'].readFirstPage();
				break;
			case keys.end:
				e.preventDefault();
				_MangaUIActions2['default'].readLastPage();
				break;
			default:
				break;
		}
	},
	componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
		if (nextState.run) {
			var params = this.getParams();
			var dep = _MangaTitleStore2['default'].getState();
			_MangaAPIActions2['default'].getChapter.defer(dep.manga, params.chapter);
		}
	},
	render: function render() {
		var page = undefined;
		if (this.state.ready && !this.state.loading) {
			page = _React2['default'].createElement('img', { src: 'https://cdn.mangaeden.com/mangasimg/' + this.state.pages[this.state.pages.length - this.state.page - 1][1] });
		}
		return _React2['default'].createElement(
			'div',
			{ className: 'teal-text' },
			_React2['default'].createElement(_Progress2['default'], { loading: this.state.loading }),
			_React2['default'].createElement(
				'h2',
				null,
				'Page ',
				this.state.page
			),
			_React2['default'].createElement(
				'div',
				{ className: 'center-align' },
				page
			)
		);
	}
});
module.exports = exports['default'];