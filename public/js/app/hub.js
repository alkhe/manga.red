'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _actionsIndex = require('./actions/index');

var _actionsIndex2 = _interopRequireDefault(_actionsIndex);

var _storesIndex = require('./stores/index');

var _storesIndex2 = _interopRequireDefault(_storesIndex);

exports['default'] = { Actions: _actionsIndex2['default'], Stores: _storesIndex2['default'] };
module.exports = exports['default'];