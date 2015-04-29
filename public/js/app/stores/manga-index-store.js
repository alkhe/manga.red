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

var MangaIndexStore = (function () {
	function MangaIndexStore() {
		_classCallCheck(this, MangaIndexStore);

		this.bindActions(_MangaAPIActions2['default']);
		this.bindActions(_MangaUIActions2['default']);

		this.all = [];
		this.sorted = [];
		this.fuzzy = null;
		this.results = [];

		this.process = _Process2['default'].Before;
	}

	_createClass(MangaIndexStore, [{
		key: 'getAllManga',
		value: function getAllManga() {
			this.process = _Process2['default'].Working;
		}
	}, {
		key: 'getAllMangaComplete',
		value: function getAllMangaComplete(list) {
			this.all = list;
			this.sorted = list.sort(function (a, b) {
				return b.h - a.h;
			});
			this.fuzzy = new Fuse(this.sorted, { keys: ['t'], threshold: 0.36, distance: 6 });

			this.process = _Process2['default'].Done;
		}
	}, {
		key: 'search',
		value: function search(results) {
			this.results = results;
		}
	}]);

	return MangaIndexStore;
})();

exports['default'] = _alt2['default'].createStore(MangaIndexStore, 'MangaIndexStore');
module.exports = exports['default'];