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

var _Process = require('../constants/process-constants');

var _Process2 = _interopRequireDefault(_Process);

var MangaTitleStore = (function () {
	function MangaTitleStore() {
		_classCallCheck(this, MangaTitleStore);

		this.bindActions(_MangaAPIActions2['default']);

		this.manga = {};

		this.process = _Process2['default'].Before;
	}

	_createClass(MangaTitleStore, [{
		key: 'getAllManga',
		value: function getAllManga() {
			this.process = _Process2['default'].Waiting;
		}
	}, {
		key: 'getAllMangaComplete',
		value: function getAllMangaComplete() {
			this.process = _Process2['default'].Ready;
		}
	}, {
		key: 'getManga',
		value: function getManga() {
			this.process = _Process2['default'].Working;
		}
	}, {
		key: 'getMangaComplete',
		value: function getMangaComplete(manga) {
			this.manga = manga;

			this.process = _Process2['default'].Done;
		}
	}]);

	return MangaTitleStore;
})();

exports['default'] = _alt2['default'].createStore(MangaTitleStore, 'MangaTitleStore');
module.exports = exports['default'];