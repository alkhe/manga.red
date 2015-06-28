"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

exports["default"] = function (Stores) {
	return function (Component) {
		var change = function change() {};

		var Listener = (function (_Component) {
			function Listener() {
				var _this = this;

				_classCallCheck(this, Listener);

				_get(Object.getPrototypeOf(Listener.prototype), "constructor", this).call(this);
				this.state = _.mapValues(Stores, function (s) {
					return s.getState();
				});
				change = function () {
					_this.setState(_.mapValues(Stores, function (s) {
						return s.getState();
					}));
				};
			}

			_inherits(Listener, _Component);

			_createClass(Listener, [{
				key: "componentDidMount",
				value: function componentDidMount() {
					var sfn = _get(Object.getPrototypeOf(Listener.prototype), "componentDidMount", this);
					if (sfn) {
						sfn();
					}
					_.each(Stores, function (s) {
						s.listen(change);
					});
				}
			}, {
				key: "componentWillUnmount",
				value: function componentWillUnmount() {
					var sfn = _get(Object.getPrototypeOf(Listener.prototype), "componentWillUnmount", this);
					if (sfn) {
						sfn();
					}
					_.each(Stores, function (s) {
						s.unlisten(change);
					});
				}
			}]);

			return Listener;
		})(Component);

		return Listener;
	};
};

module.exports = exports["default"];