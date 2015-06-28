'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _reqwest = require('reqwest');

var _reqwest2 = _interopRequireDefault(_reqwest);

var _constantsProcessConstants = require('../constants/process-constants');

var _constantsProcessConstants2 = _interopRequireDefault(_constantsProcessConstants);

var indexStore = _.once(function () {
	return _alt2['default'].getStore('MangaIndexStore');
});
var titleStore = _.once(function () {
	return _alt2['default'].getStore('MangaTitleStore');
});
var chapterStore = _.once(function () {
	return _alt2['default'].getStore('MangaChapterStore');
});

var allMangaData = undefined;
var _getAllManga = function _getAllManga() {
	return (0, _reqwest2['default'])({
		url: 'https://www.mangaeden.com/api/list/0/',
		crossOrigin: true
	});
};

var mangaData = undefined;
var _getManga = function _getManga(id) {
	return (0, _reqwest2['default'])({
		url: 'https://www.mangaeden.com/api/manga/' + id,
		crossOrigin: true
	});
};

var chapterData = undefined;
var _getChapter = function _getChapter(id) {
	return (0, _reqwest2['default'])({
		url: 'https://www.mangaeden.com/api/chapter/' + id,
		crossOrigin: true
	});
};

var MangaAPIActions = (function () {
	function MangaAPIActions() {
		_classCallCheck(this, MangaAPIActions);
	}

	_createClass(MangaAPIActions, [{
		key: 'getAllManga',
		value: function getAllManga() {
			allMangaData = _getAllManga().then(this.actions.getAllMangaComplete);
			this.dispatch();
		}
	}, {
		key: 'getAllMangaComplete',
		value: function getAllMangaComplete(res) {
			this.dispatch(res.manga);
		}
	}, {
		key: 'getManga',
		value: function getManga(alias) {
			var _this = this;

			allMangaData.then(function () {
				var manga = _.find(indexStore().getState().sorted, _.matchesProperty('a', alias));
				mangaData = _getManga(manga.i).then(_this.actions.getMangaComplete);
			});
			this.dispatch();
		}
	}, {
		key: 'getMangaComplete',
		value: function getMangaComplete(res) {
			this.dispatch(res);
		}
	}, {
		key: 'getChapter',
		value: function getChapter(number) {
			var _this2 = this;

			allMangaData.then(function () {
				mangaData.then(function () {
					var id = _.find(titleStore().getState().manga.chapters, function (c) {
						return c[0] == number;
					})[3];
					chapterData = _getChapter(id).then(_this2.actions.getChapterComplete);
				});
			});
			this.dispatch();
		}
	}, {
		key: 'getChapterComplete',
		value: function getChapterComplete(chapter) {
			this.dispatch(chapter.images);
		}
	}]);

	return MangaAPIActions;
})();

exports['default'] = _alt2['default'].createActions(MangaAPIActions);
module.exports = exports['default'];