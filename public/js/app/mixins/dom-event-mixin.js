"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (el, event, handler) {
	return {
		componentWillMount: function componentWillMount() {
			el.on(event, this[handler]);
		},
		componentWillUnmount: function componentWillUnmount() {
			el.off(event, this[handler]);
		}
	};
};

;
module.exports = exports["default"];