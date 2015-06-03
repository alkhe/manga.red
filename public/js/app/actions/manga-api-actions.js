"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),_alt=require("../alt"),_alt2=_interopRequireDefault(_alt),_reqwest=require("reqwest"),_reqwest2=_interopRequireDefault(_reqwest),_constantsProcessConstants=require("../constants/process-constants"),_constantsProcessConstants2=_interopRequireDefault(_constantsProcessConstants),indexStore=_.once(function(){return _alt2["default"].getStore("MangaIndexStore")}),titleStore=_.once(function(){return _alt2["default"].getStore("MangaTitleStore")}),chapterStore=_.once(function(){return _alt2["default"].getStore("MangaChapterStore")}),allMangaData=void 0,_getAllManga=function(){return _reqwest2["default"]({url:"https://www.mangaeden.com/api/list/0/",crossOrigin:!0})},mangaData=void 0,_getManga=function(t){return _reqwest2["default"]({url:"https://www.mangaeden.com/api/manga/"+t,crossOrigin:!0})},chapterData=void 0,_getChapter=function(t){return _reqwest2["default"]({url:"https://www.mangaeden.com/api/chapter/"+t,crossOrigin:!0})},MangaAPIActions=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"getAllManga",value:function(){allMangaData=_getAllManga().then(this.actions.getAllMangaComplete),this.dispatch()}},{key:"getAllMangaComplete",value:function(t){this.dispatch(t.manga)}},{key:"getManga",value:function(t){var e=this;allMangaData.then(function(){var a=_.find(indexStore().getState().sorted,_.matchesProperty("a",t));mangaData=_getManga(a.i).then(e.actions.getMangaComplete)}),this.dispatch()}},{key:"getMangaComplete",value:function(t){this.dispatch(t)}},{key:"getChapter",value:function(t){var e=this;allMangaData.then(function(){mangaData.then(function(){var a=_.find(titleStore().getState().manga.chapters,function(e){return e[0]==t})[3];chapterData=_getChapter(a).then(e.actions.getChapterComplete)})}),this.dispatch()}},{key:"getChapterComplete",value:function(t){this.dispatch(t.images)}}]),t}();exports["default"]=_alt2["default"].createActions(MangaAPIActions),module.exports=exports["default"];