'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _Link = require('react-router');

var PureRenderMixin = _React2['default'].addons.PureRenderMixin;
exports['default'] = _React2['default'].createClass({
	displayName: 'manga-card',

	mixins: [PureRenderMixin],
	render: function render() {
		var m = this.props.manga;
		return _React2['default'].createElement(
			_Link.Link,
			{ to: 'manga', params: { alias: m.a } },
			_React2['default'].createElement(
				'div',
				{ className: 'col s6' },
				_React2['default'].createElement(
					'div',
					{ className: 'card large teal z-depth-2 animated fadeIn' },
					_React2['default'].createElement(
						'div',
						{ className: 'card-image' },
						_React2['default'].createElement('img', { src: 'https://cdn.mangaeden.com/mangasimg/' + m.im })
					),
					_React2['default'].createElement(
						'div',
						{ className: 'card-content teal-text text-lighten-4' },
						_React2['default'].createElement(
							'span',
							{ className: 'card-title' },
							m.t
						),
						_React2['default'].createElement(
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
});
module.exports = exports['default'];