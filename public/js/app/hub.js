'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _MangaAPI = require('./actions/manga-api-actions');

var _MangaAPI2 = _interopRequireDefault(_MangaAPI);

var _MangaUI = require('./actions/manga-ui-actions');

var _MangaUI2 = _interopRequireDefault(_MangaUI);

var _MangaIndex = require('./stores/manga-index-store');

var _MangaIndex2 = _interopRequireDefault(_MangaIndex);

var _MangaTitle = require('./stores/manga-title-store');

var _MangaTitle2 = _interopRequireDefault(_MangaTitle);

var _MangaChapter = require('./stores/manga-chapter-store');

var _MangaChapter2 = _interopRequireDefault(_MangaChapter);

var _UI = require('./stores/ui-store');

var _UI2 = _interopRequireDefault(_UI);

var Actions = { MangaAPI: _MangaAPI2['default'], MangaUI: _MangaUI2['default'] };
exports.Actions = Actions;
var Stores = { MangaIndex: _MangaIndex2['default'], MangaTitle: _MangaTitle2['default'], MangaChapter: _MangaChapter2['default'], UI: _UI2['default'] };
exports.Stores = Stores;