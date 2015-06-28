'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mangaUiActions = require('./manga-ui-actions');

var _mangaUiActions2 = _interopRequireDefault(_mangaUiActions);

var _mangaApiActions = require('./manga-api-actions');

var _mangaApiActions2 = _interopRequireDefault(_mangaApiActions);

exports['default'] = { UI: _mangaUiActions2['default'], API: _mangaApiActions2['default'] };
module.exports = exports['default'];