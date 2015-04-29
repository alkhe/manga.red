'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _Symbiosis = require('../mixins/symbiosis-mixin');

var _Symbiosis2 = _interopRequireDefault(_Symbiosis);

var _MangaUIActions = require('../actions/manga-ui-actions');

var _MangaUIActions2 = _interopRequireDefault(_MangaUIActions);

var _MangaIndexStore = require('../stores/manga-index-store');

var _MangaIndexStore2 = _interopRequireDefault(_MangaIndexStore);

var _MangaCard = require('../views/manga-card');

var _MangaCard2 = _interopRequireDefault(_MangaCard);

var _Progress = require('../views/progress');

var _Progress2 = _interopRequireDefault(_Progress);

var _Process = require('../constants/process-constants');

var _Process2 = _interopRequireDefault(_Process);

exports['default'] = _React2['default'].createClass({
	displayName: 'search',

	mixins: [_Symbiosis2['default'](_MangaIndexStore2['default'])],
	componentWillMount: function componentWillMount() {
		_MangaUIActions2['default'].toIndex();
	},
	renderManga: function renderManga() {
		return (this.state.results.length ? this.state.results : this.state.sorted).slice(0, 20).map(function (m) {
			return _React2['default'].createElement(_MangaCard2['default'], { key: m.i, manga: m });
		});
	},
	search: function search() {
		_MangaUIActions2['default'].search(this.state.fuzzy, _React2['default'].findDOMNode(this.refs.search).value);
	},
	componentDidMount: function componentDidMount() {
		_React2['default'].findDOMNode(this.refs.search).focus();
	},
	render: function render() {
		return _React2['default'].createElement(
			'div',
			null,
			_React2['default'].createElement(_Progress2['default'], { loading: _Process2['default'].Loading(this.state.process) }),
			_React2['default'].createElement(
				'div',
				{ className: 'input-field teal-text text-lighten-4' },
				_React2['default'].createElement('input', { type: 'text', ref: 'search', onChange: this.search }),
				_React2['default'].createElement(
					'label',
					null,
					'Search titles'
				)
			),
			_React2['default'].createElement(
				'h2',
				{ className: 'grey-text text-darken-3' },
				this.state.results.length ? this.state.results.length : this.state.sorted.length,
				' titles'
			),
			_React2['default'].createElement(
				'div',
				{ className: 'row' },
				this.renderManga()
			)
		);
	}
});
module.exports = exports['default'];