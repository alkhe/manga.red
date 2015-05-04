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

var _Process = require('../constants/process-constants');

var _Process2 = _interopRequireDefault(_Process);

var indexState = function indexState() {
	return _alt2['default'].getStore('MangaIndexStore').getState();
};
var titleState = function titleState() {
	return _alt2['default'].getStore('MangaTitleStore').getState();
};
var chapterState = function chapterState() {
	return _alt2['default'].getStore('MangaChapterStore').getState();
};

var emptypromise = function emptypromise() {
	return new Promise(function (resolve) {
		return resolve();
	});
};

var getAllMangaAPI = function getAllMangaAPI() {
	return _reqwest2['default']({
		url: 'https://www.mangaeden.com/api/list/0/',
		crossOrigin: true
	});
};

var getMangaAPI = function getMangaAPI(id) {
	return _reqwest2['default']({
		url: 'https://www.mangaeden.com/api/manga/' + id,
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
			getAllMangaAPI().then(this.actions.getAllMangaComplete);
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

			(indexState().process < _Process2['default'].Working ? getAllMangaAPI().then(this.actions.getAllMangaComplete) : emptypromise()).then(function () {
				var manga = _.find(indexState().sorted, _.matchesProperty('a', alias));
				getMangaAPI(manga.i).then(_this.actions.getMangaComplete);
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