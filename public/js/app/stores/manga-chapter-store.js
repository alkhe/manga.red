'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _MangaAPIActions = require('../actions/manga-api-actions');

var _MangaAPIActions2 = _interopRequireDefault(_MangaAPIActions);

var _MangaReadActions = require('../actions/manga-read-actions');

var _MangaReadActions2 = _interopRequireDefault(_MangaReadActions);

var images = [];

var MangaChapterStore = (function () {
	function MangaChapterStore() {
		_classCallCheck(this, MangaChapterStore);

		this.bindActions(_MangaAPIActions2['default']);
		this.bindActions(_MangaReadActions2['default']);

		this.page = 0;
		this.pages = [];

		this.loading = false;
		this.ready = false;
		this.run = false;
	}

	_createClass(MangaChapterStore, [{
		key: 'getAllManga',
		value: function getAllManga() {
			this.loading = true;
		}
	}, {
		key: 'getManga',
		value: function getManga() {
			this.loading = true;
		}
	}, {
		key: 'getMangaComplete',
		value: function getMangaComplete() {
			this.run = true;
		}
	}, {
		key: 'getChapter',
		value: function getChapter() {
			this.loading = true;
			this.run = false;
		}
	}, {
		key: 'getChapterComplete',
		value: function getChapterComplete(pages) {
			this.pages = pages;
			images = this.pages.map(function (x) {
				var img = new Image().src = 'https://cdn.mangaeden.com/mangasimg/' + x[1];
				return img;
			});

			this.loading = false;
			this.ready = true;
		}
	}, {
		key: 'readNextPage',
		value: function readNextPage() {
			if (this.page < this.pages.length - 1) {
				this.page++;
			}
		}
	}, {
		key: 'readPreviousPage',
		value: function readPreviousPage() {
			if (this.page > 0) {
				this.page--;
			}
		}
	}, {
		key: 'readFirstPage',
		value: function readFirstPage() {
			this.page = 0;
		}
	}, {
		key: 'readLastPage',
		value: function readLastPage() {
			this.page = this.pages.length - 1;
		}
	}]);

	return MangaChapterStore;
})();

exports['default'] = _alt2['default'].createStore(MangaChapterStore, 'MangaChapterStore');
module.exports = exports['default'];