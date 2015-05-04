'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _State = require('react-router');

var _Actions$Stores = require('../hub');

var _Symbiosis = require('../mixins/symbiosis-mixin');

var _Symbiosis2 = _interopRequireDefault(_Symbiosis);

var _DOMEvent = require('../mixins/dom-event-mixin');

var _DOMEvent2 = _interopRequireDefault(_DOMEvent);

var _Progress = require('../views/progress');

var _Progress2 = _interopRequireDefault(_Progress);

var _Process = require('../constants/process-constants');

var _Process2 = _interopRequireDefault(_Process);

var keys = {
	end: 35,
	home: 36,
	left: 37,
	right: 39
};

exports['default'] = _React2['default'].createClass({
	displayName: 'manga-chapter',

	mixins: [_State.State, _Symbiosis2['default'](_Actions$Stores.Stores.MangaChapter), _DOMEvent2['default']($(document.body), 'keydown', 'handleKey')],
	componentWillMount: function componentWillMount() {
		_Actions$Stores.Actions.MangaUI.toChapter();
		var dep = _Actions$Stores.Stores.MangaTitle.getState();
		if (dep.process == _Process2['default'].Done) {
			var params = this.getParams();
			_Actions$Stores.Actions.MangaAPI.getChapter(dep.manga, params.chapter);
		}
	},
	handleKey: function handleKey(e) {
		switch (e.which) {
			case keys.left:
				_Actions$Stores.Actions.MangaUI.readPreviousPage();
				document.body.scrollTop = 0;
				break;
			case keys.right:
				_Actions$Stores.Actions.MangaUI.readNextPage();
				document.body.scrollTop = 0;
				break;
			case keys.home:
				e.preventDefault();
				_Actions$Stores.Actions.MangaUI.readFirstPage();
				document.body.scrollTop = 0;
				break;
			case keys.end:
				e.preventDefault();
				_Actions$Stores.Actions.MangaUI.readLastPage();
				document.body.scrollTop = 0;
				break;
			default:
				break;
		}
	},
	componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
		if (nextState.process == _Process2['default'].Ready) {
			var params = this.getParams();
			var dep = _Actions$Stores.Stores.MangaTitle.getState();
			_Actions$Stores.Actions.MangaAPI.getChapter.defer(dep.manga, params.chapter);
		}
	},
	render: function render() {
		var page = undefined;
		if (this.state.process == _Process2['default'].Done) {
			page = _React2['default'].createElement('img', { style: { width: '60vw' }, src: 'https://cdn.mangaeden.com/mangasimg/' + this.state.pages[this.state.pages.length - this.state.page - 1][1] });
		}
		return _React2['default'].createElement(
			'div',
			{ className: 'teal-text' },
			_React2['default'].createElement(_Progress2['default'], { loading: _Process2['default'].Loading(this.state.process) }),
			_React2['default'].createElement(
				'h2',
				{ className: 'grey-text text-darken-3' },
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