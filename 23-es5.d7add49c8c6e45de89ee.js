function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{B627:function(e,t,r){"use strict";r.r(t),r.d(t,"ComplexTableComponent",(function(){return d})),r.d(t,"ComplexTableModule",(function(){return C}));var n=r("ofXK"),i=r("3Pt+"),a=r("fXoL"),c=r("XCOF");function o(e,t){if(1&e&&(a.Wb(0,"span",9),a.Dc(1),a.Vb()),2&e){var r=a.hc().$implicit;a.Cb(1),a.Fc(" ",r.Value?r.Value:"\xa0","")}}function l(e,t){if(1&e&&(a.Wb(0,"span",9),a.Dc(1),a.Vb()),2&e){var r=a.hc(2).$implicit;a.Cb(1),a.Fc(" ",r.Value?r.Value:"\xa0","")}}function s(e,t){if(1&e&&(a.Wb(0,"div"),a.Cc(1,l,2,1,"span",6),a.Vb()),2&e){var r=a.hc().$implicit;a.Cb(1),a.kc("ngIf","Empty"===r.Type||"DefaultValue"===r.Type)}}function u(e,t){if(1&e){var r=a.Xb();a.Wb(0,"div",10),a.Wb(1,"input",11),a.ec("input",(function(e){a.vc(r);var t=a.hc().$implicit,n=a.hc(3);return[n.isIcon(e.target),n.getUserResult(e.target.value,t.Order)]})),a.Vb(),a.Vb()}if(2&e){var n=a.hc().$implicit;a.Cb(1),a.Gb("incorrect-exercise-answer",null!==n.IsCorrect&&!n.IsCorrect)("correct-exercise-answer",n.IsCorrect),a.kc("disabled",n.CorrectValue)("value",n.CorrectValue||null)}}function f(e,t){if(1&e&&(a.Wb(0,"td",5),a.Cc(1,o,2,1,"span",6),a.Cc(2,s,2,1,"div",7),a.Cc(3,u,2,6,"div",8),a.Vb()),2&e){var r=t.$implicit,n=a.hc(3);a.Cb(1),a.kc("ngIf","False"===n.isEditable),a.Cb(1),a.kc("ngIf","True"===n.isEditable),a.Cb(1),a.kc("ngIf","Empty"!==r.Type&&"DefaultValue"!==r.Type&&"True"===n.isEditable)}}function p(e,t){if(1&e&&(a.Wb(0,"tr",3),a.Cc(1,f,4,3,"td",4),a.Vb()),2&e){var r=t.$implicit;a.Cb(1),a.kc("ngForOf",r)}}function b(e,t){if(1&e&&(a.Wb(0,"table",1),a.Cc(1,p,2,1,"tr",2),a.Vb()),2&e){var r=a.hc();a.Cb(1),a.kc("ngForOf",r.tableList)}}var d=function(){var e=function(){function e(t){_classCallCheck(this,e),this.exerciseDataService=t}return _createClass(e,[{key:"ngOnChanges",value:function(){var e=this;if(this.list.sort((function(e,t){return e.Order-t.Order})),this.isCorrectValues)this.list.forEach((function(t){e.tableList.forEach((function(e){e.forEach((function(e){e.Order===t.Order&&(e.CorrectValue=t.CorrectValue,e.IsCorrect=t.IsCorrect)}))}))}));else{var t,r=[],n=[],i=[];this.list.forEach((function(e){"ColumnSize"===e.Metric&&r.push({Order:e.Order,Size:e.Value}),"DefaultValue"===e.Metric&&n.push({Order:+e.Order,Value:e.Value,Type:e.Metric}),"Empty"===e.Metric&&n.push({Order:+e.Order,Type:e.Metric}),"Editable"===e.Metric&&(t=e.Value)})),this.isEditable=t;var a=1;r.forEach((function(e){for(var t=+e.Size,r=[];t>0;)r.push({Order:a++,Value:null,Type:null,CorrectValue:null,IsCorrect:null}),t--;i.push(r)})),i.forEach((function(e,t){e.forEach((function(e,t){n.forEach((function(t){t.Order===e.Order&&(e.Value=t.Value,e.Type=t.Type)}))}))})),this.tableList=i}}},{key:"getUserResult",value:function(e,t){this.exerciseDataService.subject.next({Type:"ComplexTable",Order:this.Order,Data:{Order:t,Value:e}})}},{key:"isIcon",value:function(e){e.value?e.classList.remove("form_input-edit-icon"):e.classList.add("form_input-edit-icon")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Qb(c.a))},e.\u0275cmp=a.Kb({type:e,selectors:[["app-complex-table"]],inputs:{list:"list",Order:"Order",isCorrectValues:"isCorrectValues"},features:[a.Ab],decls:1,vars:1,consts:[["class","table-wrapper big-f-size",4,"ngIf"],[1,"table-wrapper","big-f-size"],["class","table__tr d-flex",4,"ngFor","ngForOf"],[1,"table__tr","d-flex"],["class","table__td",4,"ngFor","ngForOf"],[1,"table__td"],["class","table__item",4,"ngIf"],[4,"ngIf"],["class","complex-table__input-wrapper form_input-wrapper",4,"ngIf"],[1,"table__item"],[1,"complex-table__input-wrapper","form_input-wrapper"],["type","text",1,"complex-table__input","form_input-edit-icon","form_input","form_input-edit-icon","text-center","big-f-size",3,"disabled","value","input"]],template:function(e,t){1&e&&a.Cc(0,b,2,1,"table",0),2&e&&a.kc("ngIf",t.tableList)},directives:[n.j,n.i],styles:["[_nghost-%COMP%]{margin:1vh 0;text-align:center;width:100%}.table-wrapper[_ngcontent-%COMP%]{border-right:.15vw solid #a64ac9;display:inline-block;max-width:100%}.table__td[_ngcontent-%COMP%]{width:100%;border-left:.15vw solid #a64ac9;padding:1vh;min-width:8vw;max-width:100%;word-wrap:break-word}.table__tr[_ngcontent-%COMP%]{border-top:.15vw solid #a64ac9;color:#802f9f;background:#fff0e9}.table__tr[_ngcontent-%COMP%]:first-child{background:#ff712c;color:#fff}.table__tr[_ngcontent-%COMP%]:nth-child(2){background:#ffe1d2;color:#55206a}.table__tr[_ngcontent-%COMP%]:last-child{border-bottom:.15vw solid #a64ac9}"]}),e}(),C=function(){var e=function(){function e(t){_classCallCheck(this,e),this.componentFactoryResolver=t}return _createClass(e,[{key:"resolveComponent",value:function(){return this.componentFactoryResolver.resolveComponentFactory(d)}}]),e}();return e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({factory:function(t){return new(t||e)(a.ac(a.j))},imports:[[n.b,i.n]]}),e}()}}]);