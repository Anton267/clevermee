function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,i,n){return i&&_defineProperties(t.prototype,i),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{A8A2:function(t,i,n){"use strict";n.r(i),n.d(i,"BuildFractionsComponent",(function(){return v})),n.d(i,"BuildFractionsModule",(function(){return C}));var e=n("ofXK"),r=n("3Pt+"),c=n("fXoL"),o=n("XCOF");function a(t,i){if(1&t&&(c.Wb(0,"div",16),c.Dc(1),c.Vb()),2&t){var n=c.hc(2).$implicit;c.Cb(1),c.Fc(" ",n.defaultValue," ")}}function s(t,i){if(1&t){var n=c.Xb();c.Wb(0,"div",17),c.Wb(1,"input",18),c.ec("input",(function(t){c.vc(n);var i=c.hc(2).$implicit,e=c.hc(6);return[e.isIcon(t.target),e.getUserResult(t.target.value,i.order)]})),c.Vb(),c.Vb()}if(2&t){var e=c.hc(2).$implicit;c.Cb(1),c.Gb("correct-exercise-answer",e.IsCorrect)("input-disabled",e.defaultValue)("build-fractions__input--small",e.length>1)("incorrect-exercise-answer",null!==e.IsCorrect&&!e.IsCorrect),c.kc("disabled",e.CorrectValue||e.defaultValue)("value",e.CorrectValue||e.defaultValue)}}function l(t,i){if(1&t&&(c.Wb(0,"div",19),c.Dc(1),c.Vb()),2&t){var n=c.hc(2).$implicit;c.Cb(1),c.Fc(" ",n.defaultValue," ")}}function f(t,i){1&t&&c.Rb(0,"div",20)}function u(t,i){if(1&t&&(c.Wb(0,"div"),c.Cc(1,a,2,1,"div",12),c.Cc(2,s,2,10,"div",13),c.Cc(3,l,2,1,"div",14),c.Cc(4,f,1,0,"div",15),c.Vb()),2&t){var n=c.hc().$implicit;c.Cb(1),c.kc("ngIf","Prefix"===n.type),c.Cb(1),c.kc("ngIf","Input"===n.type||"DefaultValue"===n.type),c.Cb(1),c.kc("ngIf","Sufix"===n.type),c.Cb(1),c.kc("ngIf","Empty"===n.type)}}function d(t,i){if(1&t&&(c.Wb(0,"div",11),c.Cc(1,u,5,4,"div",4),c.Vb()),2&t){var n=i.$implicit;c.Cb(1),c.kc("ngIf","Symbol"!==n.type)}}function b(t,i){if(1&t&&(c.Ub(0,9),c.Cc(1,d,2,1,"div",10),c.Tb()),2&t){var n=c.hc().$implicit;c.Cb(1),c.kc("ngForOf",n)}}function p(t,i){if(1&t&&(c.Wb(0,"div",21),c.Dc(1),c.Vb()),2&t){var n=c.hc().$implicit;c.Cb(1),c.Fc(" ",n.defaultValue," ")}}function _(t,i){if(1&t&&(c.Wb(0,"div",6),c.Cc(1,b,2,1,"ng-container",7),c.Cc(2,p,2,1,"div",8),c.Vb()),2&t){var n=i.$implicit,e=c.hc(2).$implicit;c.Gb("build-fractions__separator",e.length>1&&"Empty"!==e.type),c.Cb(1),c.kc("ngIf",n.length),c.Cb(1),c.kc("ngIf","Symbol"===n.type)}}function g(t,i){if(1&t&&(c.Ub(0),c.Cc(1,_,3,4,"div",5),c.Tb()),2&t){var n=c.hc().$implicit;c.Cb(1),c.kc("ngForOf",n)}}function h(t,i){if(1&t&&(c.Wb(0,"div",3),c.Cc(1,g,2,1,"ng-container",4),c.Vb()),2&t){var n=i.$implicit;c.Cb(1),c.kc("ngIf",n.length)}}function m(t,i){if(1&t&&(c.Wb(0,"div",1),c.Cc(1,h,2,1,"div",2),c.Vb()),2&t){var n=c.hc();c.Cb(1),c.kc("ngForOf",n.BuildFractionsArray)}}var v=function(){var t=function(){function t(i){_classCallCheck(this,t),this.exerciseDataService=i}return _createClass(t,[{key:"ngOnChanges",value:function(){var t=this;if(this.list)if(this.list.sort((function(t,i){return t.Order-i.Order})),this.isCorrectValues)this.list.forEach((function(i){t.BuildFractionsArray.forEach((function(t){t.forEach((function(t){t.length&&t.forEach((function(t){t.order===i.Order&&(t.CorrectValue=i.CorrectValue,t.IsCorrect=i.IsCorrect)}))}))}))}));else{var i=[];this.list.forEach((function(t){var n={CorrectValue:null,IsCorrect:null,defaultValue:t.Value?t.Value:null,order:t.Order,type:t.Metric};"Symbol"===t.Metric&&i.push(n),"DefaultValue"===t.Metric&&i.push(n),"Input"===t.Metric&&i.push(n),"Sufix"===t.Metric&&i.push(n),"Prefix"===t.Metric&&i.push(n),"Empty"===t.Metric&&i.push(n)}));var n=[],e=0,r=1,c=0;i.forEach((function(t){n.push([]),n[e].type="",t.order!==r&&n.pop(),"Symbol"!==t.type&&(t.order===r&&(n[e].push([]),i.forEach((function(i){t.order!==i.order||n[e][c].order||(n[e][c].push(i),"Empty"===i.type&&(n[e].type="Empty"))})),r++,c++),c>1&&(c=0,e++)),t.order===r&&"Symbol"===t.type&&(n[e].push(t),r++,e++)})),this.BuildFractionsArray=n}}},{key:"getUserResult",value:function(t,i){this.exerciseDataService.subject.next({Type:"BuildFractions",Order:this.Order,Data:{Order:i,Value:t}})}},{key:"isIcon",value:function(t){t.value?t.classList.remove("form_input-edit-icon"):t.classList.add("form_input-edit-icon")}}]),t}();return t.\u0275fac=function(i){return new(i||t)(c.Qb(o.a))},t.\u0275cmp=c.Kb({type:t,selectors:[["app-build-fractions"]],inputs:{isCorrectValues:"isCorrectValues",Order:"Order",list:"list"},features:[c.Ab],decls:1,vars:1,consts:[["class","build-fractions d-flex align-items-center justify-content-center",4,"ngIf"],[1,"build-fractions","d-flex","align-items-center","justify-content-center"],["class","build-fractions__fraction d-flex flex-column align-items-center justify-content-center",4,"ngFor","ngForOf"],[1,"build-fractions__fraction","d-flex","flex-column","align-items-center","justify-content-center"],[4,"ngIf"],["class","build-fractions__fraction-row d-flex align-items-center justify-content-center",3,"build-fractions__separator",4,"ngFor","ngForOf"],[1,"build-fractions__fraction-row","d-flex","align-items-center","justify-content-center"],["class","d-flex",4,"ngIf"],["class","build-fractions__symbol text-center big-f-size",4,"ngIf"],[1,"d-flex"],["class","build-fractions__fraction-row-item d-flex flex-column align-items-center",4,"ngFor","ngForOf"],[1,"build-fractions__fraction-row-item","d-flex","flex-column","align-items-center"],["class","build-fractions__prefix big-f-size",4,"ngIf"],["class","form_input-wrapper build-fractions__input-subwrapper",4,"ngIf"],["class","build-fractions__sufix big-f-size",4,"ngIf"],["class","build-fractions__empty big-f-size",4,"ngIf"],[1,"build-fractions__prefix","big-f-size"],[1,"form_input-wrapper","build-fractions__input-subwrapper"],["type","text",1,"form_input","form_input-edit-icon","build-fractions__input","text-center","big-f-size",3,"disabled","value","input"],[1,"build-fractions__sufix","big-f-size"],[1,"build-fractions__empty","big-f-size"],[1,"build-fractions__symbol","text-center","big-f-size"]],template:function(t,i){1&t&&c.Cc(0,m,2,1,"div",0),2&t&&c.kc("ngIf",i.BuildFractionsArray)},directives:[e.j,e.i],styles:['[_nghost-%COMP%]{width:100%;margin:5vh 0}.build-fractions__fraction[_ngcontent-%COMP%]{width:auto}.build-fractions__fraction[_ngcontent-%COMP%]   .build-fractions__fraction-row[_ngcontent-%COMP%]{width:100%;position:relative}.build-fractions__fraction[_ngcontent-%COMP%]:not(:nth-child(2n))   .build-fractions__fraction-row[_ngcontent-%COMP%]:last-child.build-fractions__separator{margin-top:4.5vh}.build-fractions__fraction[_ngcontent-%COMP%]:not(:nth-child(2n))   .build-fractions__fraction-row[_ngcontent-%COMP%]:last-child.build-fractions__separator:after{position:absolute;content:"";left:0;right:0;width:100%;top:-2.5vh;border-bottom:.5vh solid #a64ac9}.build-fractions__input[_ngcontent-%COMP%]{max-width:9vw}.build-fractions__input--small[_ngcontent-%COMP%]{width:7vw}.build-fractions__sufix[_ngcontent-%COMP%]{margin-left:.5vw}.build-fractions__prefix[_ngcontent-%COMP%]{margin-right:.5vw}.build-fractions__symbol[_ngcontent-%COMP%]{width:4.5vw;min-width:3em;margin:.5em 1vw;border-radius:5vh;background:#11afa9;color:#fff;padding:.5em .5em .7em;text-align:center;line-height:1}.build-fractions__empty[_ngcontent-%COMP%]{display:none}']}),t}(),C=function(){var t=function(){function t(i){_classCallCheck(this,t),this.componentFactoryResolver=i}return _createClass(t,[{key:"resolveComponent",value:function(){return this.componentFactoryResolver.resolveComponentFactory(v)}}]),t}();return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(i){return new(i||t)(c.ac(c.j))},imports:[[e.b,r.n]]}),t}()}}]);