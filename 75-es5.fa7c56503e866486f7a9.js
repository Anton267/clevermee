function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"V+m6":function(t,e,n){"use strict";n.r(e),n.d(e,"TableComponent",(function(){return f})),n.d(e,"TableModule",(function(){return b}));var r=n("ofXK"),i=n("3Pt+"),o=n("fXoL");function a(t,e){if(1&t&&(o.Wb(0,"p",5),o.Dc(1),o.Vb()),2&t){var n=o.hc(2);o.Cb(1),o.Ec(n.title)}}function c(t,e){if(1&t&&(o.Wb(0,"td",8),o.Dc(1),o.Vb()),2&t){var n=e.$implicit;o.Cb(1),o.Ec(n)}}function l(t,e){if(1&t&&(o.Wb(0,"tr",6),o.Cc(1,c,2,1,"td",7),o.Vb()),2&t){var n=e.$implicit;o.Cb(1),o.kc("ngForOf",n.Values)}}function s(t,e){if(1&t&&(o.Wb(0,"div",1),o.Cc(1,a,2,1,"p",2),o.Wb(2,"table",3),o.Cc(3,l,2,1,"tr",4),o.Vb(),o.Vb()),2&t){var n=o.hc();o.Cb(1),o.kc("ngIf",n.title),o.Cb(2),o.kc("ngForOf",n.tableList)}}var f=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){this.list.sort((function(t,e){return t.Order-e.Order})),this.tableList=this.list}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Kb({type:t,selectors:[["app-table"]],inputs:{list:"list",title:"title"},decls:1,vars:1,consts:[["class","table-wrapper main-f-size text-center",4,"ngIf"],[1,"table-wrapper","main-f-size","text-center"],["class","title",4,"ngIf"],[1,"table","text-center","mx-auto"],["class","table__tr",4,"ngFor","ngForOf"],[1,"title"],[1,"table__tr"],["class","table__td",4,"ngFor","ngForOf"],[1,"table__td"]],template:function(t,e){1&t&&o.Cc(0,s,4,2,"div",0),2&t&&o.kc("ngIf",e.tableList)},directives:[r.j,r.i],styles:["[_nghost-%COMP%]{margin:.5vh 0;width:100%}.table-wrapper[_ngcontent-%COMP%]{line-height:1;margin-bottom:.5vh}.title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:.5vh}.table[_ngcontent-%COMP%]{width:90%;table-layout:fixed}.table__tr[_ngcontent-%COMP%]:first-child   .table__td[_ngcontent-%COMP%]{background:#a64ac9;border-bottom:.3vw solid #fff;color:#fff}.table__td[_ngcontent-%COMP%]{border:.15vw solid #fff;padding:1vh 0;background:#e1d0eb}"]}),t}(),b=function(){var t=function(){function t(e){_classCallCheck(this,t),this.componentFactoryResolver=e}return _createClass(t,[{key:"resolveComponent",value:function(){return this.componentFactoryResolver.resolveComponentFactory(f)}}]),t}();return t.\u0275mod=o.Ob({type:t}),t.\u0275inj=o.Nb({factory:function(e){return new(e||t)(o.ac(o.j))},imports:[[r.b,i.n]]}),t}()}}]);