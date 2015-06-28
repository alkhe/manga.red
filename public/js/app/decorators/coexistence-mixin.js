'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

var onChange = '__onChange';

exports['default'] = function (Stores) {
	return _defineProperty({
		getInitialState: function getInitialState() {
			return _.reduce(Stores.map(function (s) {
				return s.getState();
			}), _.merge, {});
		},
		componentWillMount: function componentWillMount() {
			var _this = this;

			_.each(Stores, function (s) {
				return s.listen(_this[onChange]);
			});
		},
		componentWillUnmount: function componentWillUnmount() {
			var _this2 = this;

			_.each(Stores, function (s) {
				return s.unlisten(_this2[onChange]);
			});
		} }, onChange, function () {
		this.setState(_.merge(Stores.map(function (s) {
			return s.getState();
		})));
	});
};

;
module.exports = exports['default'];