'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _constantsUiStateConstants = require('../constants/ui-state-constants');

var _constantsUiStateConstants2 = _interopRequireDefault(_constantsUiStateConstants);

var _actionsIndex = require('../actions/index');

var _actionsIndex2 = _interopRequireDefault(_actionsIndex);

var UIStore = (function () {
	function UIStore() {
		_classCallCheck(this, UIStore);

		this.bindActions(_actionsIndex2['default'].UI);

		this.level = _constantsUiStateConstants2['default'].index;

		this.actualcolor = localStorage.getItem('theme-color') || 'red';
		this.color = this.actualcolor;
		this.colorOpen = false;
	}

	_createClass(UIStore, [{
		key: 'toIndex',
		value: function toIndex() {
			this.level = _constantsUiStateConstants2['default'].index;
		}
	}, {
		key: 'toTitle',
		value: function toTitle() {
			this.level = _constantsUiStateConstants2['default'].title;
		}
	}, {
		key: 'toChapter',
		value: function toChapter() {
			this.level = _constantsUiStateConstants2['default'].chapter;
		}
	}, {
		key: 'changeThemeColor',
		value: function changeThemeColor(o) {
			if (o.confirm) {
				this.actualcolor = o.color;
			}
			this.color = o.color;
		}
	}, {
		key: 'toggleColorPicker',
		value: function toggleColorPicker() {
			this.colorOpen = !this.colorOpen;
		}
	}]);

	return UIStore;
})();

exports['default'] = _alt2['default'].createStore(UIStore, 'UIStore');
module.exports = exports['default'];