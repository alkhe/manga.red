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

var MangaIndexStore = (function () {
	function MangaIndexStore() {
		_classCallCheck(this, MangaIndexStore);

		this.bindActions(_actionsIndex2['default'].API);
		this.bindActions(_actionsIndex2['default'].UI);

		this.all = [];
		this.sorted = [];
		this.fuzzy = null;
		this.results = null;

		this.process = _constantsProcessConstants2['default'].Before;
	}

	_createClass(MangaIndexStore, [{
		key: 'getAllManga',
		value: function getAllManga() {
			this.process = _constantsProcessConstants2['default'].Working;
		}
	}, {
		key: 'getAllMangaComplete',
		value: function getAllMangaComplete(list) {
			this.all = list;
			this.sorted = _.sortByOrder(list, 'h', false);
			this.fuzzy = new Fuse(this.sorted, { keys: ['t'], threshold: 0.36, distance: 6 });

			this.process = _constantsProcessConstants2['default'].Done;
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