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

exports['default'] = _React2['default'].createClass({
	displayName: 'search',

	mixins: [_Symbiosis2['default'](_MangaIndexStore2['default'])],
	renderManga: function renderManga() {
		return (this.state.results.length ? this.state.results : this.state.sorted).slice(0, 20).map(function (m) {
			return _React2['default'].createElement(_MangaCard2['default'], { manga: m });
		});
	},
	search: function search() {
		_MangaUIActions2['default'].search(this.state.fuzzy, this.refs.search.getDOMNode().value);
	},
	render: function render() {
		return _React2['default'].createElement(
			'div',
			null,
			_React2['default'].createElement(_Progress2['default'], { loading: this.state.loading }),
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
				'div',
				{ className: 'row' },
				this.renderManga()
			)
		);
	}
});
module.exports = exports['default'];