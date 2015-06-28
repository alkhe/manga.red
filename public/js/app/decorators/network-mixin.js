'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

var onChange = '__onChange';

exports['default'] = function (Network) {
	return _defineProperty({
		getInitialState: function getInitialState() {
			return _.mapValues(Network, function (s) {
				return s.getState();
			});
		},
		componentWillMount: function componentWillMount() {
			var _this = this;

			_.each(Network, function (s) {
				return s.listen(_this[onChange]);
			});
		},
		componentWillUnmount: function componentWillUnmount() {
			var _this2 = this;

			_.each(Network, function (s) {
				return s.unlisten(_this2[onChange]);
			});
		} }, onChange, function () {
		this.setState(_.mapValues(Network, function (s) {
			return s.getState();
		}));
	});
};

;
module.exports = exports['default'];