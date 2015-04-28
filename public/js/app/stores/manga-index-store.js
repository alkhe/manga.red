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

var MangaIndexStore = (function () {
	function MangaIndexStore() {
		_classCallCheck(this, MangaIndexStore);

		this.bindActions(_MangaAPIActions2['default']);

		this.all = [];
		this.sorted = [];

		this.loading = false;
		this.ready = false;
	}

	_createClass(MangaIndexStore, [{
		key: 'getAllManga',
		value: function getAllManga() {
			this.loading = true;
		}
	}, {
		key: 'getAllMangaComplete',
		value: function getAllMangaComplete(list) {
			this.all = list;
			this.sorted = list.sort(function (a, b) {
				return b.h - a.h;
			});

			this.loading = false;
			this.ready = true;
		}
	}]);

	return MangaIndexStore;
})();

exports['default'] = _alt2['default'].createStore(MangaIndexStore, 'MangaIndexStore');
module.exports = exports['default'];