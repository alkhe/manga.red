'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mangaChapterStore = require('./manga-chapter-store');

var _mangaChapterStore2 = _interopRequireDefault(_mangaChapterStore);

var _mangaIndexStore = require('./manga-index-store');

var _mangaIndexStore2 = _interopRequireDefault(_mangaIndexStore);

var _mangaTitleStore = require('./manga-title-store');

var _mangaTitleStore2 = _interopRequireDefault(_mangaTitleStore);

var _uiStore = require('./ui-store');

var _uiStore2 = _interopRequireDefault(_uiStore);

exports['default'] = { Chapter: _mangaChapterStore2['default'], Index: _mangaIndexStore2['default'], Title: _mangaTitleStore2['default'], UI: _uiStore2['default'] };
module.exports = exports['default'];