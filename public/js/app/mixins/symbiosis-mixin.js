'use strict';

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); };

Object.defineProperty(exports, '__esModule', {
	value: true
});
var onChange = '__onChange';

exports['default'] = function (Store) {
	return _defineProperty({
		getInitialState: function getInitialState() {
			return Store.getState();
		},
		componentWillMount: function componentWillMount() {
			Store.listen(this[onChange]);
		},
		componentWillUnmount: function componentWillUnmount() {
			Store.unlisten(this[onChange]);
		} }, onChange, function () {
		this.setState(Store.getState());
	});
};

;
module.exports = exports['default'];