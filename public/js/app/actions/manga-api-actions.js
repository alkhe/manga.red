'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _reqwest = require('reqwest');

var _reqwest2 = _interopRequireDefault(_reqwest);

var MangaAPIActions = (function () {
	function MangaAPIActions() {
		_classCallCheck(this, MangaAPIActions);
	}

	_createClass(MangaAPIActions, [{
		key: 'getAllManga',
		value: function getAllManga() {
			_reqwest2['default']({
				url: 'https://www.mangaeden.com/api/list/0/',
				crossOrigin: true,
				success: this.actions.getAllMangaComplete
			});
			this.dispatch();
		}
	}, {
		key: 'getAllMangaComplete',
		value: function getAllMangaComplete(res) {
			this.dispatch(res.manga);
		}
	}, {
		key: 'getManga',
		value: function getManga(index, alias) {
			var manga = _.find(index, _.matchesProperty('a', alias));
			_reqwest2['default']({
				url: 'https://www.mangaeden.com/api/manga/' + manga.i,
				crossOrigin: true,
				success: this.actions.getMangaComplete
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
		value: function getChapter(manga, number) {
			var chapter = _.find(manga.chapters, function (c) {
				return c[0] == number;
			});
			_reqwest2['default']({
				url: 'https://www.mangaeden.com/api/chapter/' + chapter[3],
				crossOrigin: true,
				success: this.actions.getChapterComplete
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