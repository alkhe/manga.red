"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function () {
	var _ref;

	for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
		mixins[_key] = arguments[_key];
	}

	var Class = function Class() {
		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = mixins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _mixin$constructor;

				var mixin = _step.value;

				mixin.constructor && (_mixin$constructor = mixin.constructor).call.apply(_mixin$constructor, [this].concat(args));
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	};
	(_ref = _).assign.apply(_ref, [Class.prototype].concat(mixins));
	return Class;
};

module.exports = exports["default"];