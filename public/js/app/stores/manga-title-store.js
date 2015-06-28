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

var MangaTitleStore = (function () {
	function MangaTitleStore() {
		_classCallCheck(this, MangaTitleStore);

		this.bindActions(_actionsIndex2['default'].API);

		this.manga = {};

		this.process = _constantsProcessConstants2['default'].Before;
	}

	_createClass(MangaTitleStore, [{
		key: 'getAllManga',
		value: function getAllManga() {
			this.process = _constantsProcessConstants2['default'].Waiting;
		}
	}, {
		key: 'getAllMangaComplete',
		value: function getAllMangaComplete() {
			this.process = _constantsProcessConstants2['default'].Ready;
		}
	}, {
		key: 'getManga',
		value: function getManga() {
			this.process = _constantsProcessConstants2['default'].Working;
		}
	}, {
		key: 'getMangaComplete',
		value: function getMangaComplete(manga) {
			this.manga = manga;

			this.process = _constantsProcessConstants2['default'].Done;
		}
	}]);

	return MangaTitleStore;
})();

exports['default'] = _alt2['default'].createStore(MangaTitleStore, 'MangaTitleStore');
module.exports = exports['default'];