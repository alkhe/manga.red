"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = {
	Before: 0,
	Waiting: 1,
	Ready: 2,
	Working: 3,
	Done: 4,
	Loading: function Loading(n) {
		return n > 0 && n < 4;
	}
};
module.exports = exports["default"];