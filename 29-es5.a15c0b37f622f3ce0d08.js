function _classCallCheck(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function _createClass(r,t,e){return t&&_defineProperties(r.prototype,t),e&&_defineProperties(r,e),r}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"cp+E":function(r,t,e){"use strict";e.r(t),e.d(t,"DragNumbersToDivisionComponent",(function(){return I})),e.d(t,"DragNumbersToDivisionModule",(function(){return O}));var n=e("ofXK"),i=e("3Pt+"),a=e("Amjd"),o=e("fXoL"),c=e("XCOF"),s=["optionsWrapper"];function u(r,t){if(1&r&&(o.Wb(0,"span"),o.Dc(1),o.Vb()),2&r){var e=o.hc().$implicit;o.Cb(1),o.Fc(" ",e.value," ")}}function l(r,t){if(1&r){var e=o.Xb();o.Wb(0,"div",14),o.Wb(1,"input",15),o.ec("dragenter",(function(r){return o.vc(e),o.hc(4).dragenter(r)}))("drop",(function(r){o.vc(e);var t=o.hc().$implicit;return o.hc(3).drop(r.target,t.order)}))("dragover",(function(r){o.vc(e);var t=o.hc(2).index;return o.hc(2).dragover(r,t)}))("dragleave",(function(r){return o.vc(e),o.hc(4).dragLeaveDefault(r.target)})),o.Vb(),o.Vb()}if(2&r){var n=o.hc().$implicit;o.Cb(1),o.Gb("correct-exercise-answer",n.IsCorrect)("incorrect-exercise-answer",null!==n.IsCorrect&&!n.IsCorrect),o.kc("value",n.CorrectValue)}}function p(r,t){if(1&r&&(o.Wb(0,"td",11),o.Cc(1,u,2,1,"span",12),o.Cc(2,l,2,5,"div",13),o.Vb()),2&r){var e=t.$implicit;o.Cb(1),o.kc("ngIf",e&&e.value),o.Cb(1),o.kc("ngIf",e&&!e.value)}}function d(r,t){if(1&r&&(o.Wb(0,"tr",9),o.Cc(1,p,3,2,"td",10),o.Vb()),2&r){var e=t.$implicit;o.Cb(1),o.kc("ngForOf",e)}}function g(r,t){if(1&r&&(o.Wb(0,"table",7),o.Cc(1,d,2,1,"tr",8),o.Vb()),2&r){var e=o.hc();o.Cb(1),o.kc("ngForOf",e.dragNumbersArray)}}function v(r,t){if(1&r&&(o.Wb(0,"span"),o.Dc(1),o.Vb()),2&r){var e=o.hc().$implicit;o.Cb(1),o.Fc(" ",e.value," ")}}function f(r,t){if(1&r){var e=o.Xb();o.Wb(0,"div",14),o.Wb(1,"input",15),o.ec("dragenter",(function(r){return o.vc(e),o.hc(4).dragenter(r)}))("drop",(function(r){o.vc(e);var t=o.hc(),n=t.$implicit,i=t.index,a=o.hc().index,c=o.hc(2);return[c.drop(r.target,n.order),c.getValue(r.target.value,a,i)]}))("dragover",(function(r){o.vc(e);var t=o.hc(2).index;return o.hc(2).dragover(r,t)}))("dragleave",(function(r){return o.vc(e),o.hc(4).dragLeaveDefault(r.target)})),o.Vb(),o.Vb()}if(2&r){var n=o.hc().$implicit;o.Cb(1),o.Gb("correct-exercise-answer",n.IsCorrect)("incorrect-exercise-answer",null!==n.IsCorrect&&!n.IsCorrect),o.kc("value",n.CorrectValue)}}function b(r,t){if(1&r&&(o.Wb(0,"td",11),o.Cc(1,v,2,1,"span",12),o.Cc(2,f,2,5,"div",13),o.Vb()),2&r){var e=t.$implicit;o.Cb(1),o.kc("ngIf",e&&e.value),o.Cb(1),o.kc("ngIf",e&&!e.value)}}function _(r,t){if(1&r&&(o.Wb(0,"tr",9),o.Cc(1,b,3,2,"td",10),o.Vb()),2&r){var e=t.$implicit;o.Cb(1),o.kc("ngForOf",e)}}function h(r,t){if(1&r&&(o.Wb(0,"table",16),o.Cc(1,_,2,1,"tr",8),o.Vb()),2&r){var e=o.hc();o.Gb("right_table-isNoInput",!e.resultInput.isInput),o.Cb(1),o.kc("ngForOf",e.dividerInputArray)}}function C(r,t){if(1&r&&(o.Wb(0,"div",17),o.Wb(1,"span",18),o.Dc(2,"Resultado:"),o.Vb(),o.Wb(3,"div",19),o.Rb(4,"input",20),o.Vb(),o.Vb()),2&r){var e=o.hc();o.Cb(4),o.Gb("correct-exercise-answer",e.resultInput.IsCorrect)("incorrect-exercise-answer",null!==e.resultInput.IsCorrect&&!e.resultInput.IsCorrect),o.kc("value",e.resultInput.CorrectValue||e.resultInput.value)}}function m(r,t){if(1&r){var e=o.Xb();o.Wb(0,"div",21),o.ec("dragstart",(function(r){return o.vc(e),o.hc().dragOptionsStart(r.target)}))("dragenter",(function(r){return o.vc(e),o.hc().dragenterOptions(r)})),o.Dc(1),o.Vb()}if(2&r){var n=t.$implicit;o.Cb(1),o.Fc(" ",n," ")}}var w=function(){return[0,1,2,3,4,5,6,7,8,9]};Object(a.polyfill)();var I=function(){var r=function(){function r(t){_classCallCheck(this,r),this.exerciseDataService=t,this.dividerInputArray=[[],[]],this.resultInput={isInput:null,order:null,value:"",CorrectValue:null,IsCorrect:null},this.inputResult=[]}return _createClass(r,[{key:"ngOnChanges",value:function(){var r=this;if(this.list.sort((function(r,t){return r.Order-t.Order})),this.isCorrectValues)this.list.forEach((function(t,e){r.dragNumbersArray.forEach((function(r){r.forEach((function(r){r&&t.Order===r.order&&(r.IsCorrect=t.IsCorrect,r.CorrectValue=t.CorrectValue)}))})),r.dividerInputArray.forEach((function(r){r.forEach((function(r){r&&t.Order===r.order&&(r.IsCorrect=t.IsCorrect,r.CorrectValue=t.CorrectValue)}))})),t.Order===r.resultInput.order&&(r.resultInput.IsCorrect=t.IsCorrect,r.resultInput.CorrectValue=t.CorrectValue)}));else{var t,e=[],n=[];this.list.forEach((function(e){var i={order:null,value:null,CorrectValue:null,IsCorrect:null};"ResultInput"===e.Metric&&(r.resultInput.isInput=!0),"DividerValue"===e.Metric&&(i.value=e.Value,r.dividerInputArray[0].push(i)),"DividendValue"===e.Metric&&(t=e.Value.length,e.Value.split("").forEach((function(r){n.push({order:null,value:r,CorrectValue:null,IsCorrect:null})}))),"Empty"===e.Metric&&n.push(null),"DividendInput"===e.Metric&&(i.order=e.Order,n.push(i)),"DividerInput"===e.Metric&&(i.order=e.Order,r.dividerInputArray[1].push(i))}));var i=0;n.forEach((function(r,n){n%t==0||i-1<0?(e.push([r]),i++):e[i-1].push(r)})),this.resultInput.isInput&&(this.resultInput.order=this.dividerInputArray[this.dividerInputArray.length-1][this.dividerInputArray[this.dividerInputArray.length-1].length-1].order+1),this.dragNumbersArray=e}}},{key:"dragover",value:function(r,t){r.preventDefault()}},{key:"dragLeaveDefault",value:function(r){r.classList.remove("drag_active"),r.classList.remove("drag_active-option")}},{key:"drop",value:function(r,t){r.value=this.startOptionValue,this.getUserResult(this.startOptionValue,t),r.classList.remove("drag_active"),r.classList.remove("drag_active-option")}},{key:"dragenter",value:function(r){r.preventDefault(),r.target.classList.add("drag_active"),r.target.classList.add("drag_active-option")}},{key:"dragOptionsStart",value:function(r){this.startOptionValue=r.innerText,r.classList.remove("swap_option")}},{key:"dragoverOptions",value:function(r){r.preventDefault(),this.optionsWrapper.nativeElement.classList.add("options-wrapper_active")}},{key:"dropOptions",value:function(){this.optionsWrapper.nativeElement.classList.remove("options-wrapper_active")}},{key:"dragenterOptions",value:function(r){r.preventDefault()}},{key:"dragleaveOptions",value:function(){this.optionsWrapper.nativeElement.classList.remove("options-wrapper_active")}},{key:"getValue",value:function(r,t,e){t===this.dividerInputArray.length-1&&(this.inputResult[e]=r,this.resultInput.value=this.inputResult.join(""),this.getUserResult(this.resultInput.value,this.resultInput.order))}},{key:"getUserResult",value:function(r,t){this.exerciseDataService.subject.next({Type:"DragNumbersToDivision",Order:this.Order,Data:{Order:t,Value:r}})}}]),r}();return r.\u0275fac=function(t){return new(t||r)(o.Qb(c.a))},r.\u0275cmp=o.Kb({type:r,selectors:[["app-drag-numbers-to-division"]],viewQuery:function(r,t){var e;1&r&&o.Ac(s,!0),2&r&&o.rc(e=o.fc())&&(t.optionsWrapper=e.first)},inputs:{isCorrectValues:"isCorrectValues",Order:"Order",list:"list"},features:[o.Ab],decls:7,vars:5,consts:[[1,"d-flex","justify-content-center"],["class","drag-numbers__table left_table big-f-size",4,"ngIf"],["class","drag-numbers__table right_table big-f-size",3,"right_table-isNoInput",4,"ngIf"],["class","answer-input-wrapper big-f-size my-auto",4,"ngIf"],[1,"options-wrapper","main-f-size","d-flex","justify-content-center","mt-2",3,"drop","dragover","dragenter","dragleave"],["optionsWrapper",""],["class","drag-options__option text-center swap_option","draggable","true",3,"dragstart","dragenter",4,"ngFor","ngForOf"],[1,"drag-numbers__table","left_table","big-f-size"],["class","drag-numbers__tr",4,"ngFor","ngForOf"],[1,"drag-numbers__tr"],["class","drag-numbers__td text-center",4,"ngFor","ngForOf"],[1,"drag-numbers__td","text-center"],[4,"ngIf"],["class","form_input-wrapper drag-numbers__input-wrapper",4,"ngIf"],[1,"form_input-wrapper","drag-numbers__input-wrapper"],["type","text","disabled","",1,"form_input","drag-numbers__input","text-center","big-f-size",3,"value","dragenter","drop","dragover","dragleave"],[1,"drag-numbers__table","right_table","big-f-size"],[1,"answer-input-wrapper","big-f-size","my-auto"],[1,"answer-input__label"],[1,"form_input-wrapper"],["type","text","disabled","",1,"form_input","exercise-one-answers__input","text-center","big-f-size",3,"value"],["draggable","true",1,"drag-options__option","text-center","swap_option",3,"dragstart","dragenter"]],template:function(r,t){1&r&&(o.Wb(0,"div",0),o.Cc(1,g,2,1,"table",1),o.Cc(2,h,2,3,"table",2),o.Cc(3,C,5,5,"div",3),o.Vb(),o.Wb(4,"div",4,5),o.ec("drop",(function(){return t.dropOptions()}))("dragover",(function(r){return t.dragoverOptions(r)}))("dragenter",(function(r){return t.dragenterOptions(r)}))("dragleave",(function(){return t.dragleaveOptions()})),o.Cc(6,m,2,1,"div",6),o.Vb()),2&r&&(o.Cb(1),o.kc("ngIf",t.dragNumbersArray),o.Cb(1),o.kc("ngIf",t.dividerInputArray[0].length),o.Cb(1),o.kc("ngIf",t.resultInput.isInput),o.Cb(3),o.kc("ngForOf",o.mc(4,w)))},directives:[n.j,n.i],styles:["[_nghost-%COMP%]{margin:auto;width:100%}.drag-numbers__td[_ngcontent-%COMP%]{width:3vw;height:3vw}.drag-numbers__input-wrapper[_ngcontent-%COMP%]{border-radius:50%}.drag-numbers__input[_ngcontent-%COMP%]{padding:0;width:3vw;height:3vw}.left_table[_ngcontent-%COMP%]{border-right:.2vw solid #a136ce;margin-left:25%}.left_table[_ngcontent-%COMP%]   .drag-numbers__tr[_ngcontent-%COMP%]   .drag-numbers__td[_ngcontent-%COMP%]:last-child{padding-right:.5vw}.right_table-isNoInput[_ngcontent-%COMP%]{margin-right:25%}.right_table[_ngcontent-%COMP%]   .drag-numbers__tr[_ngcontent-%COMP%]:last-child{border-top:.2vw solid #a136ce}.right_table[_ngcontent-%COMP%]   .drag-numbers__tr[_ngcontent-%COMP%]   .drag-numbers__td[_ngcontent-%COMP%]:first-child{padding-left:.5vw}.right_table[_ngcontent-%COMP%]   .drag-numbers__tr[_ngcontent-%COMP%]:last-child   .drag-numbers__td[_ngcontent-%COMP%]{padding-top:1vh}.answer-input-wrapper[_ngcontent-%COMP%]{width:20%;margin:auto}.answer-input__label[_ngcontent-%COMP%]{color:#aa8b02}.drag_active-option[_ngcontent-%COMP%]{animation:swap_option .5s infinite alternate-reverse}.drag-options__option[_ngcontent-%COMP%]:active{opacity:.6}.drag-options__option[_ngcontent-%COMP%]{background:#ff712c;color:#fff;width:3vw;height:3vw;line-height:3vw;border-radius:50%;cursor:-webkit-grab;cursor:grab}.options-wrapper[_ngcontent-%COMP%]{border-radius:5vh;border:.2vw dashed transparent;padding:.1vh 1vw}.options-wrapper_empty[_ngcontent-%COMP%]{padding:1.5vh 0}.options-wrapper[_ngcontent-%COMP%]   .drag-options__option[_ngcontent-%COMP%]{margin:1vh 0}.options-wrapper[_ngcontent-%COMP%]   .drag-options__option[_ngcontent-%COMP%]:not(:last-child){margin-right:1%}.swap_option[_ngcontent-%COMP%]{-webkit-animation:swap_option .3s;animation:swap_option .3s}.options-wrapper.options-wrapper_active[_ngcontent-%COMP%]{border-color:#afabab}@-webkit-keyframes swap_option{0%{background:#fff}to{background:#ff712c}}@keyframes swap_option{0%{background:#fff}to{background:#ff712c}}"]}),r}(),O=function(){var r=function(){function r(t){_classCallCheck(this,r),this.componentFactoryResolver=t}return _createClass(r,[{key:"resolveComponent",value:function(){return this.componentFactoryResolver.resolveComponentFactory(I)}}]),r}();return r.\u0275mod=o.Ob({type:r}),r.\u0275inj=o.Nb({factory:function(t){return new(t||r)(o.ac(o.j))},imports:[[n.b,i.n]]}),r}()}}]);