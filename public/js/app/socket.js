'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _io = require('socket.io');

var _io2 = _interopRequireDefault(_io);

exports['default'] = _io2['default'].connect();
module.exports = exports['default'];