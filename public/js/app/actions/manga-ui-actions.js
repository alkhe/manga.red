'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var indexState = function indexState() {
	return _alt2['default'].getStore('MangaIndexStore').getState();
};
var lastSearch = null;

var MangaUIActions = (function () {
	function MangaUIActions() {
		_classCallCheck(this, MangaUIActions);
	}

	_createClass(MangaUIActions, [{
		key: 'readNextPage',
		value: function readNextPage() {
			this.dispatch();
		}
	}, {
		key: 'readPreviousPage',
		value: function readPreviousPage() {
			this.dispatch();
		}
	}, {
		key: 'readFirstPage',
		value: function readFirstPage() {
			this.dispatch();
		}
	}, {
		key: 'readLastPage',
		value: function readLastPage() {
			this.dispatch();
		}
	}, {
		key: 'search',
		value: function search(term) {
			var _this = this;

			clearTimeout(lastSearch);
			lastSearch = _.delay(function () {
				_this.dispatch(term.length > 0 ? indexState().fuzzy.search(term) : null);
			}, 400);
		}
	}, {
		key: 'toIndex',
		value: function toIndex() {
			this.dispatch();
		}
	}, {
		key: 'toTitle',
		value: function toTitle() {
			this.dispatch();
		}
	}, {
		key: 'toChapter',
		value: function toChapter() {
			this.dispatch();
		}
	}]);

	return MangaUIActions;
})();

exports['default'] = _alt2['default'].createActions(MangaUIActions);
module.exports = exports['default'];