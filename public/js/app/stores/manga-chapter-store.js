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

var _MangaUIActions = require('../actions/manga-ui-actions');

var _MangaUIActions2 = _interopRequireDefault(_MangaUIActions);

var _Process = require('../constants/process-constants');

var _Process2 = _interopRequireDefault(_Process);

var images = [];

var MangaChapterStore = (function () {
	function MangaChapterStore() {
		_classCallCheck(this, MangaChapterStore);

		this.bindActions(_MangaAPIActions2['default']);
		this.bindActions(_MangaUIActions2['default']);

		this.page = 0;
		this.pages = [];

		this.process = _Process2['default'].Before;
	}

	_createClass(MangaChapterStore, [{
		key: 'getAllManga',
		value: function getAllManga() {
			this.process = _Process2['default'].Waiting;
		}
	}, {
		key: 'getManga',
		value: function getManga() {
			this.process = _Process2['default'].Waiting;
		}
	}, {
		key: 'getMangaComplete',
		value: function getMangaComplete() {
			this.process = _Process2['default'].Ready;
		}
	}, {
		key: 'getChapter',
		value: function getChapter() {
			this.process = _Process2['default'].Working;
		}
	}, {
		key: 'getChapterComplete',
		value: function getChapterComplete(pages) {
			this.page = 0;
			this.pages = pages;
			images = this.pages.map(function (x) {
				var img = new Image().src = 'https://cdn.mangaeden.com/mangasimg/' + x[1];
				return img;
			});

			this.process = _Process2['default'].Done;
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