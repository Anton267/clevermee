function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"6ipv":function(e,n,t){"use strict";t.r(n),t.d(n,"InputsOnSentenceComponent",(function(){return d})),t.d(n,"InputsOnSentenceModule",(function(){return v}));var r=t("ofXK"),i=t("3Pt+"),c=t("fXoL"),s=t("XCOF"),a=function(e){return{order:e}};function o(e,n){if(1&e&&c.Rb(0,"div",5),2&e){var t=c.hc().$implicit;c.kc("ngStyle",c.nc(2,a,t.Order))("innerHTML",t.Value,c.wc)}}var u=function(e,n){return{order:e,width:n}};function l(e,n){if(1&e){var t=c.Xb();c.Wb(0,"div",6),c.Wb(1,"input",7),c.ec("input",(function(e){c.vc(t);var n=c.hc().$implicit,r=c.hc(2);return[r.isIcon(e.target),r.getUserResult(e.target.value,n.Order)]})),c.Vb(),c.Vb()}if(2&e){var r=c.hc().$implicit,i=c.hc(2);c.kc("ngStyle",c.oc(7,u,r.Order,i.InputsOnSentenceArray.length<=3?"20%":"9vw")),c.Cb(1),c.Gb("correct-exercise-answer",r.IsCorrect)("incorrect-exercise-answer",null!==r.IsCorrect&&!r.IsCorrect),c.kc("disabled",r.CorrectValue)("value",r.CorrectValue)}}function p(e,n){if(1&e&&(c.Ub(0),c.Cc(1,o,1,4,"div",3),c.Cc(2,l,2,10,"div",4),c.Tb()),2&e){var t=n.$implicit;c.Cb(1),c.kc("ngIf","Sentence"===t.Type),c.Cb(1),c.kc("ngIf","Option"===t.Type)}}function f(e,n){if(1&e&&(c.Wb(0,"div",1),c.Cc(1,p,3,2,"ng-container",2),c.Vb()),2&e){var t=c.hc();c.Cb(1),c.kc("ngForOf",t.InputsOnSentenceArray)}}var d=function(){var e=function(){function e(n){_classCallCheck(this,e),this.exerciseDataService=n}return _createClass(e,[{key:"ngOnChanges",value:function(){var e=this;if(this.list.sort((function(e,n){return e.Order-n.Order})),this.isCorrectValues)this.list.forEach((function(n){e.InputsOnSentenceArray[n.Order-1].CorrectValue=n.CorrectValue,e.InputsOnSentenceArray[n.Order-1].IsCorrect=n.IsCorrect}));else{var n=[];this.list.forEach((function(e){n.push({Order:e.Order,Type:e.Metric,Value:e.Value||null,CorrectValue:null,IsCorrect:null})})),this.InputsOnSentenceArray=n}}},{key:"getUserResult",value:function(e,n){this.exerciseDataService.subject.next({Type:"InputsOnSentence",Order:this.Order,Data:{Order:n,Value:e}})}},{key:"isIcon",value:function(e){e.value?e.classList.remove("form_input-edit-icon"):e.classList.add("form_input-edit-icon")}}]),e}();return e.\u0275fac=function(n){return new(n||e)(c.Qb(s.a))},e.\u0275cmp=c.Kb({type:e,selectors:[["app-inputs-on-sentence"]],inputs:{isCorrectValues:"isCorrectValues",Order:"Order",list:"list"},features:[c.Ab],decls:1,vars:1,consts:[["class","inputs-sentence-wrapper d-flex flex-wrap align-items-center big-f-size",4,"ngIf"],[1,"inputs-sentence-wrapper","d-flex","flex-wrap","align-items-center","big-f-size"],[4,"ngFor","ngForOf"],["class","inputs-sentence__text text-center",3,"ngStyle","innerHTML",4,"ngIf"],["class","form_input-wrapper inputs-sentence__select-wrapper",3,"ngStyle",4,"ngIf"],[1,"inputs-sentence__text","text-center",3,"ngStyle","innerHTML"],[1,"form_input-wrapper","inputs-sentence__select-wrapper",3,"ngStyle"],["type","text",1,"form_input","form_input-edit-icon","text-center","big-f-size",3,"disabled","value","input"]],template:function(e,n){1&e&&c.Cc(0,f,2,1,"div",0),2&e&&c.kc("ngIf",n.InputsOnSentenceArray)},directives:[r.j,r.i,r.k],styles:["[_nghost-%COMP%]{margin:1vh 0;width:100%}.inputs-sentence__select-wrapper[_ngcontent-%COMP%]{min-width:9vw;margin:1vh 1.5%}"]}),e}(),v=function(){var e=function(){function e(n){_classCallCheck(this,e),this.componentFactoryResolver=n}return _createClass(e,[{key:"resolveComponent",value:function(){return this.componentFactoryResolver.resolveComponentFactory(d)}}]),e}();return e.\u0275mod=c.Ob({type:e}),e.\u0275inj=c.Nb({factory:function(n){return new(n||e)(c.ac(c.j))},imports:[[r.b,i.n]]}),e}()}}]);