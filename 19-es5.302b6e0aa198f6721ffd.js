function _classCallCheck(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(r,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}function _createClass(r,e,n){return e&&_defineProperties(r.prototype,e),n&&_defineProperties(r,n),r}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{wXKM:function(r,e,n){"use strict";n.r(e),n.d(e,"ComparisonChainComponent",(function(){return f})),n.d(e,"ComparisonChainModule",(function(){return p}));var t=n("ofXK"),o=n("3Pt+"),i=n("fXoL"),a=n("XCOF");function c(r,e){if(1&r){var n=i.Xb();i.Wb(0,"div",5),i.Wb(1,"input",6),i.ec("input",(function(r){i.vc(n);var e=i.hc().$implicit,t=i.hc(2);return[t.isIcon(r.target),t.getUserResult(r.target.value,e.order)]})),i.Vb(),i.Vb()}if(2&r){var t=i.hc().$implicit;i.Cb(1),i.Gb("correct-exercise-answer",t.IsCorrect)("input-disabled",t.value)("incorrect-exercise-answer",null!==t.IsCorrect&&!t.IsCorrect),i.kc("disabled",t.CorrectValue||t.value)("value",t.CorrectValue||t.value)}}function s(r,e){if(1&r&&(i.Wb(0,"div",7),i.Dc(1),i.Vb()),2&r){var n=i.hc().$implicit;i.Cb(1),i.Fc(" ",n.symbol," ")}}function u(r,e){if(1&r&&(i.Ub(0),i.Cc(1,c,2,8,"div",3),i.Cc(2,s,2,1,"div",4),i.Tb()),2&r){var n=e.$implicit;i.Cb(1),i.kc("ngIf",!n.symbol),i.Cb(1),i.kc("ngIf",n.symbol)}}function l(r,e){if(1&r&&(i.Wb(0,"div",1),i.Cc(1,u,3,2,"ng-container",2),i.Vb()),2&r){var n=i.hc();i.Cb(1),i.kc("ngForOf",n.comparisonArray)}}var f=function(){var r=function(){function r(e){_classCallCheck(this,r),this.exerciseDataService=e}return _createClass(r,[{key:"ngOnChanges",value:function(){var r=this;if(this.list.sort((function(r,e){return r.Order-e.Order})),this.isCorrectValues)this.comparisonArray.forEach((function(e){e.symbol||r.list.forEach((function(r){e.order===r.Order&&(e.value=r.CorrectValue,e.IsCorrect=r.IsCorrect)}))}));else{var e,n=[],t=[];this.list.forEach((function(r){var o={CorrectValue:null,IsCorrect:null,defaultValue:r.Value,order:r.Order};"NumberOfInputs"===r.Metric&&(e=+r.Value),"DefaultValue"===r.Metric&&n.push(o),"Symbol"===r.Metric&&t.push(o)}));for(var o=[],i=1,a=e;a>0;){var c={value:null,CorrectValue:null,IsCorrect:null,order:i++};o.push(c),a--}o.forEach((function(r){n.forEach((function(e){e.order===r.order&&(r.value=e.defaultValue)}))}));var s=[];o.forEach((function(r){t.forEach((function(e){e.order===r.order&&(s.push(r),s.push({symbol:e.defaultValue,value:null,CorrectValue:null,IsCorrect:null,order:null}))}))})),s.push({value:null,CorrectValue:null,IsCorrect:null,order:o.length}),this.comparisonArray=s}}},{key:"getUserResult",value:function(r,e){this.exerciseDataService.subject.next({Type:"ComparisonChain",Order:this.Order,Data:{Order:e,Value:r}})}},{key:"isIcon",value:function(r){r.value?r.classList.remove("form_input-edit-icon"):r.classList.add("form_input-edit-icon")}}]),r}();return r.\u0275fac=function(e){return new(e||r)(i.Qb(a.a))},r.\u0275cmp=i.Kb({type:r,selectors:[["app-comparison-chain"]],inputs:{isCorrectValues:"isCorrectValues",Order:"Order",list:"list"},features:[i.Ab],decls:1,vars:1,consts:[["class","comparison-wrapper d-flex flex-wrap",4,"ngIf"],[1,"comparison-wrapper","d-flex","flex-wrap"],[4,"ngFor","ngForOf"],["class","form_input-wrapper comparison__input-wrapper",4,"ngIf"],["class","comparison__symbol big-f-size text-center",4,"ngIf"],[1,"form_input-wrapper","comparison__input-wrapper"],["type","text",1,"form_input","form_input-edit-icon","big-f-size","text-center",3,"disabled","value","input"],[1,"comparison__symbol","big-f-size","text-center"]],template:function(r,e){1&r&&i.Cc(0,l,2,1,"div",0),2&r&&i.kc("ngIf",e.comparisonArray)},directives:[t.j,t.i],styles:["[_nghost-%COMP%]{width:100%}.comparison-wrapper[_ngcontent-%COMP%]{padding:.5vh 0}.comparison__symbol[_ngcontent-%COMP%]{background:#11afa9;color:#fff;padding:.5vw;border-radius:10vh;width:7%;margin:0 1vw 1vw;line-height:1.4}.comparison__input-wrapper[_ngcontent-%COMP%]{margin-bottom:1vw;max-width:15%}"]}),r}(),p=function(){var r=function(){function r(e){_classCallCheck(this,r),this.componentFactoryResolver=e}return _createClass(r,[{key:"resolveComponent",value:function(){return this.componentFactoryResolver.resolveComponentFactory(f)}}]),r}();return r.\u0275mod=i.Ob({type:r}),r.\u0275inj=i.Nb({factory:function(e){return new(e||r)(i.ac(i.j))},imports:[[t.b,o.n]]}),r}()}}]);