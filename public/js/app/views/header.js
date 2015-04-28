'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _Link = require('react-router');

exports['default'] = _React2['default'].createClass({
	displayName: 'header',

	render: function render() {
		return _React2['default'].createElement(
			'div',
			{ className: 'navbar-fixed' },
			_React2['default'].createElement(
				'nav',
				{ className: 'teal' },
				_React2['default'].createElement(
					'div',
					{ className: 'nav-wrapper container' },
					_React2['default'].createElement(
						_Link.Link,
						{ to: 'main', className: 'brand-logo teal-text text-lighten-4' },
						'Manga.IO'
					),
					_React2['default'].createElement(
						'ul',
						{ className: 'right' },
						_React2['default'].createElement(
							'li',
							null,
							_React2['default'].createElement(
								'a',
								{ href: 'http://www.mangaeden.com/', className: 'teal-text text-lighten-2' },
								'A ',
								_React2['default'].createElement(
									'span',
									{ className: 'teal-text text-lighten-4' },
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
});
module.exports = exports['default'];