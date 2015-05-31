"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react),_reactRouter=require("react-router"),_hub=require("../hub"),_constantsUiStateConstants=require("../constants/ui-state-constants"),_constantsUiStateConstants2=_interopRequireDefault(_constantsUiStateConstants),_mixinsNetworkMixin=require("../mixins/network-mixin"),_mixinsNetworkMixin2=_interopRequireDefault(_mixinsNetworkMixin),_colorpicker=require("./colorpicker"),_colorpicker2=_interopRequireDefault(_colorpicker),TransitionGroup=_react.addons.TransitionGroup;exports["default"]=_react2["default"].createClass({displayName:"ui-header",mixins:[_reactRouter.State,_mixinsNetworkMixin2["default"]({ui:_hub.Stores.UI,title:_hub.Stores.MangaTitle,chapter:_hub.Stores.MangaChapter})],componentDidMount:function(){this.componentDidUpdate()},componentDidUpdate:function(){var e=this;_.defer(function(){switch(e.state.ui.level){case _constantsUiStateConstants2["default"].index:break;case _constantsUiStateConstants2["default"].title:break;case _constantsUiStateConstants2["default"].chapter:$(".tooltipped").tooltip({delay:50})}})},renderLeft:function(){var e=void 0,t=this.state,a=t.ui,r=t.title,i=t.chapter;switch(a.level){case _constantsUiStateConstants2["default"].index:break;case _constantsUiStateConstants2["default"].title:var n=this.getParams();e=_react2["default"].createElement("li",{key:"detail"},_react2["default"].createElement(_reactRouter.Link,{className:""+a.color+"-text text-lighten-4 animated fadeIn",to:"detail",params:{alias:n.alias}},r.manga.title));break;case _constantsUiStateConstants2["default"].chapter:var n=this.getParams();e=[["detail","detail",{alias:n.alias},r.manga.title],["chapter","chapter",{alias:n.alias,chapter:n.chapter},"Ch. "+n.chapter],["page","chapter",{alias:n.alias,chapter:n.chapter},"Pg. "+i.page]].map(function(e){return _react2["default"].createElement("li",{key:e[0]},_react2["default"].createElement(_reactRouter.Link,{className:""+a.color+"-text text-lighten-4 animated fadeIn",to:e[1],params:e[2]},e[3]))})}return e},renderRight:function(){var e=this.state.ui,t=[];switch(e.level){case _constantsUiStateConstants2["default"].index:break;case _constantsUiStateConstants2["default"].title:break;case _constantsUiStateConstants2["default"].chapter:t=t.concat([[_hub.Actions.MangaUI.readFirstPage,"First Page (Home)","av-skip-previous"],[_hub.Actions.MangaUI.readPreviousPage,"Previous Page (Left)","hardware-keyboard-arrow-left"],[_hub.Actions.MangaUI.readNextPage,"Next Page (Right)","hardware-keyboard-arrow-right"],[_hub.Actions.MangaUI.readLastPage,"Last Page (End)","av-skip-next"]].map(function(t,a){return _react2["default"].createElement("li",{onClick:t[0],key:a,className:"tooltipped "+e.color+"-text text-lighten-4","data-tooltip":t[1],"data-position":"left"},_react2["default"].createElement("i",{className:"widemargin mdi-"+t[2]}))}))}var a=e.colorOpen?_react2["default"].createElement(_colorpicker2["default"],{visible:e.colorOpen}):"";return t.push(_react2["default"].createElement("li",{onClick:_hub.Actions.MangaUI.toggleColorPicker,className:"tooltipped "+e.color+"-text text-lighten-4"},_react2["default"].createElement("i",{className:"widemargin mdi-image-color-lens"}),a)),t},render:function(){return _react2["default"].createElement("div",{className:"navbar-fixed noselect arrow-cursor"},_react2["default"].createElement("nav",{className:"fixed-bottom "+this.state.ui.color+" z-depth-0"},_react2["default"].createElement("div",{className:"nav-wrapper container"},_react2["default"].createElement("ul",{className:"left"},this.renderLeft()),_react2["default"].createElement("ul",{className:"right"},this.renderRight()))))}}),module.exports=exports["default"];