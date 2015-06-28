'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsIndex = require('../actions/index');

var _actionsIndex2 = _interopRequireDefault(_actionsIndex);

var _constantsProcessConstants = require('../constants/process-constants');

var _constantsProcessConstants2 = _interopRequireDefault(_constantsProcessConstants);

var images = [];

var MangaChapterStore = (function () {
	function MangaChapterStore() {
		_classCallCheck(this, MangaChapterStore);

		this.bindActions(_actionsIndex2['default'].API);
		this.bindActions(_actionsIndex2['default'].UI);

		this.page = 0;
		this.pages = [];

		this.process = _constantsProcessConstants2['default'].Before;
	}

	_createClass(MangaChapterStore, [{
		key: 'getAllManga',
		value: function getAllManga() {
			this.process = _constantsProcessConstants2['default'].Waiting;
		}
	}, {
		key: 'getManga',
		value: function getManga() {
			this.process = _constantsProcessConstants2['default'].Waiting;
		}
	}, {
		key: 'getMangaComplete',
		value: function getMangaComplete() {
			this.process = _constantsProcessConstants2['default'].Ready;
		}
	}, {
		key: 'getChapter',
		value: function getChapter() {
			this.process = _constantsProcessConstants2['default'].Working;
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

			this.process = _constantsProcessConstants2['default'].Done;
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