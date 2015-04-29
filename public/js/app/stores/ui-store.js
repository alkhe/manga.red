'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _MangaUIActions = require('../actions/manga-ui-actions');

var _MangaUIActions2 = _interopRequireDefault(_MangaUIActions);

var State = {
	index: 0,
	title: 1,
	chapter: 2
};

exports.State = State;

var UIStore = (function () {
	function UIStore() {
		_classCallCheck(this, UIStore);

		this.bindActions(_MangaUIActions2['default']);

		this.state = State.index;
	}

	_createClass(UIStore, [{
		key: 'toIndex',
		value: function toIndex() {
			this.state = State.index;
		}
	}, {
		key: 'toTitle',
		value: function toTitle() {
			this.state = State.title;
		}
	}, {
		key: 'toChapter',
		value: function toChapter() {
			this.state = State.chapter;
		}
	}]);

	return UIStore;
})();

exports['default'] = _alt2['default'].createStore(UIStore, 'UIStore');