function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{I4wG:function(e,t,r){"use strict";r.r(t),r.d(t,"DragNumbersToOperationComponent",(function(){return _})),r.d(t,"DragNumbersToOperationModule",(function(){return h}));var n=r("ofXK"),a=r("3Pt+"),i=r("Amjd"),o=r("fXoL"),s=r("XCOF"),u=["optionsWrapper"];function c(e,t){if(1&e&&(o.Wb(0,"span"),o.Dc(1),o.Vb()),2&e){var r=o.hc().$implicit;o.Cb(1),o.Fc(" ",r.value," ")}}function p(e,t){if(1&e){var r=o.Xb();o.Wb(0,"div",13),o.Wb(1,"input",14),o.ec("dragenter",(function(e){return o.vc(r),o.hc(4).dragenter(e)}))("drop",(function(e){o.vc(r);var t=o.hc(),n=t.$implicit,a=t.index,i=o.hc().index,s=o.hc(2);return[s.drop(e.target,n.order),s.getValue(e.target.value,i,a)]}))("dragover",(function(e){o.vc(r);var t=o.hc(2).index;return o.hc(2).dragover(e,t)}))("dragleave",(function(e){return o.vc(r),o.hc(4).dragLeaveDefault(e.target)})),o.Vb(),o.Vb()}if(2&e){var n=o.hc().$implicit;o.Cb(1),o.Gb("correct-exercise-answer",n.IsCorrect)("incorrect-exercise-answer",null!==n.IsCorrect&&!n.IsCorrect),o.kc("value",n.CorrectValue)}}function l(e,t){if(1&e&&(o.Wb(0,"td",10),o.Cc(1,c,2,1,"span",11),o.Cc(2,p,2,5,"div",12),o.Vb()),2&e){var r=t.$implicit;o.Cb(1),o.kc("ngIf",r&&r.value),o.Cb(1),o.kc("ngIf",r&&!r.value)}}function d(e,t){if(1&e&&(o.Wb(0,"tr",8),o.Cc(1,l,3,2,"td",9),o.Vb()),2&e){var r=t.$implicit;o.Cb(1),o.kc("ngForOf",r)}}function g(e,t){if(1&e&&(o.Wb(0,"table",6),o.Cc(1,d,2,1,"tr",7),o.Vb()),2&e){var r=o.hc();o.Gb("drag-numbers__table-isInput",r.resultInput.isInput),o.Cb(1),o.kc("ngForOf",r.dragNumbersArray)}}function f(e,t){if(1&e&&(o.Wb(0,"div",15),o.Wb(1,"span",16),o.Dc(2,"Resultado:"),o.Vb(),o.Wb(3,"div",17),o.Rb(4,"input",18),o.Vb(),o.Vb()),2&e){var r=o.hc();o.Cb(4),o.Gb("correct-exercise-answer",r.resultInput.IsCorrect)("incorrect-exercise-answer",null!==r.resultInput.IsCorrect&&!r.resultInput.IsCorrect),o.kc("value",r.resultInput.CorrectValue||r.resultInput.value)}}function v(e,t){if(1&e){var r=o.Xb();o.Wb(0,"div",19),o.ec("dragstart",(function(e){return o.vc(r),o.hc().dragOptionsStart(e.target)}))("dragenter",(function(e){return o.vc(r),o.hc().dragenterOptions(e)})),o.Dc(1),o.Vb()}if(2&e){var n=t.$implicit;o.Cb(1),o.Fc(" ",n," ")}}var b=function(){return[0,1,2,3,4,5,6,7,8,9]};Object(i.polyfill)();var _=function(){var e=function(){function e(t){_classCallCheck(this,e),this.exerciseDataService=t,this.resultInput={isInput:null,order:null,value:"",CorrectValue:null,IsCorrect:null},this.inputResult=[]}return _createClass(e,[{key:"ngOnChanges",value:function(){var e=this;if(this.list.sort((function(e,t){return e.Order-t.Order})),this.isCorrectValues)this.list.forEach((function(t,r){e.dragNumbersArray.forEach((function(e){e.forEach((function(e){e&&t.Order===e.order&&(e.IsCorrect=t.IsCorrect,e.CorrectValue=t.CorrectValue)}))})),t.Order===e.resultInput.order&&(e.resultInput.IsCorrect=t.IsCorrect,e.resultInput.CorrectValue=t.CorrectValue)}));else{var t,r=[],n=[];this.list.forEach((function(r){"ResultInput"===r.Metric&&(e.resultInput.isInput=!0),"ColumnSize"===r.Metric&&(t=+r.Value),"Empty"===r.Metric&&n.push(null),"Input"===r.Metric&&n.push({order:r.Order,value:null,CorrectValue:null,IsCorrect:null}),"DefaultValue"===r.Metric&&n.push({order:r.Order,value:r.Value,CorrectValue:null,IsCorrect:null})}));var a=0;n.forEach((function(e,n){n%t==0||a-1<0?(r.push([e]),a++):r[a-1].push(e)})),this.resultInput.isInput&&(this.resultInput.order=r[r.length-1][r[r.length-1].length-1].order+1),this.dragNumbersArray=r}}},{key:"dragover",value:function(e,t){e.preventDefault()}},{key:"dragLeaveDefault",value:function(e){e.classList.remove("drag_active"),e.classList.remove("drag_active-option")}},{key:"drop",value:function(e,t){e.value=this.startOptionValue,this.getUserResult(this.startOptionValue,t),e.classList.remove("drag_active"),e.classList.remove("drag_active-option")}},{key:"dragenter",value:function(e){e.preventDefault(),e.target.classList.add("drag_active"),e.target.classList.add("drag_active-option")}},{key:"dragOptionsStart",value:function(e){this.startOptionValue=e.innerText,e.classList.remove("swap_option")}},{key:"dragoverOptions",value:function(e){e.preventDefault(),this.optionsWrapper.nativeElement.classList.add("options-wrapper_active")}},{key:"dropOptions",value:function(){this.optionsWrapper.nativeElement.classList.remove("options-wrapper_active")}},{key:"dragenterOptions",value:function(e){e.preventDefault()}},{key:"dragleaveOptions",value:function(){this.optionsWrapper.nativeElement.classList.remove("options-wrapper_active")}},{key:"getValue",value:function(e,t,r){t===this.dragNumbersArray.length-1&&(this.inputResult[r]=e,this.resultInput.value=this.inputResult.join(""),this.getUserResult(this.resultInput.value,this.resultInput.order))}},{key:"getUserResult",value:function(e,t){this.exerciseDataService.subject.next({Type:"DragNumbersToOperation",Order:this.Order,Data:{Order:t,Value:e}})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Qb(s.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["app-drag-numbers-to-operation"]],viewQuery:function(e,t){var r;1&e&&o.Ac(u,!0),2&e&&o.rc(r=o.fc())&&(t.optionsWrapper=r.first)},inputs:{isCorrectValues:"isCorrectValues",Order:"Order",list:"list"},features:[o.Ab],decls:6,vars:4,consts:[[1,"d-flex","justify-content-center"],["class","drag-numbers__table big-f-size",3,"drag-numbers__table-isInput",4,"ngIf"],["class","answer-input-wrapper big-f-size my-auto",4,"ngIf"],[1,"options-wrapper","main-f-size","d-flex","justify-content-center","mt-2",3,"drop","dragover","dragenter","dragleave"],["optionsWrapper",""],["class","drag-options__option text-center swap_option","draggable","true",3,"dragstart","dragenter",4,"ngFor","ngForOf"],[1,"drag-numbers__table","big-f-size"],["class","drag-numbers__tr",4,"ngFor","ngForOf"],[1,"drag-numbers__tr"],["class","drag-numbers__td text-center",4,"ngFor","ngForOf"],[1,"drag-numbers__td","text-center"],[4,"ngIf"],["class","form_input-wrapper drag-numbers__input-wrapper",4,"ngIf"],[1,"form_input-wrapper","drag-numbers__input-wrapper"],["type","text","disabled","",1,"form_input","drag-numbers__input","text-center","big-f-size",3,"value","dragenter","drop","dragover","dragleave"],[1,"answer-input-wrapper","big-f-size","my-auto"],[1,"answer-input__label"],[1,"form_input-wrapper"],["type","text","disabled","",1,"form_input","exercise-one-answers__input","text-center","big-f-size",3,"value"],["draggable","true",1,"drag-options__option","text-center","swap_option",3,"dragstart","dragenter"]],template:function(e,t){1&e&&(o.Wb(0,"div",0),o.Cc(1,g,2,3,"table",1),o.Cc(2,f,5,5,"div",2),o.Vb(),o.Wb(3,"div",3,4),o.ec("drop",(function(){return t.dropOptions()}))("dragover",(function(e){return t.dragoverOptions(e)}))("dragenter",(function(e){return t.dragenterOptions(e)}))("dragleave",(function(){return t.dragleaveOptions()})),o.Cc(5,v,2,1,"div",5),o.Vb()),2&e&&(o.Cb(1),o.kc("ngIf",t.dragNumbersArray),o.Cb(1),o.kc("ngIf",t.resultInput.isInput),o.Cb(3),o.kc("ngForOf",o.mc(3,b)))},directives:[n.j,n.i],styles:["[_nghost-%COMP%]{margin:.5vh auto;width:100%}.drag-numbers__table-isInput[_ngcontent-%COMP%]{margin-left:35%;margin-right:10%}.drag-numbers__td[_ngcontent-%COMP%]{width:3vw;height:3vw}.drag-numbers__input-wrapper[_ngcontent-%COMP%]{border-radius:50%}.drag-numbers__input[_ngcontent-%COMP%]{padding:0;width:3vw;height:3vw}.drag-numbers__tr[_ngcontent-%COMP%]:nth-child(odd):not(:first-child)   .drag-numbers__td[_ngcontent-%COMP%]{padding-top:1vh}.drag-numbers__tr[_ngcontent-%COMP%]:nth-child(2n){border-bottom:.2vw solid #a136ce}.answer-input-wrapper[_ngcontent-%COMP%]{width:20%;margin:auto}.answer-input__label[_ngcontent-%COMP%]{color:#aa8b02}.drag_active-option[_ngcontent-%COMP%]{animation:swap_option .5s infinite alternate-reverse}.drag-options__option[_ngcontent-%COMP%]:active{opacity:.6}.drag-options__option[_ngcontent-%COMP%]{background:#ff712c;color:#fff;width:3vw;height:3vw;line-height:3vw;border-radius:50%;cursor:-webkit-grab;cursor:grab}.options-wrapper[_ngcontent-%COMP%]{border-radius:5vh;border:.2vw dashed transparent;padding:.1vh 1vw}.options-wrapper_empty[_ngcontent-%COMP%]{padding:1.5vh 0}.options-wrapper[_ngcontent-%COMP%]   .drag-options__option[_ngcontent-%COMP%]{margin:1vh 0}.options-wrapper[_ngcontent-%COMP%]   .drag-options__option[_ngcontent-%COMP%]:not(:last-child){margin-right:1%}.swap_option[_ngcontent-%COMP%]{-webkit-animation:swap_option .3s;animation:swap_option .3s}.options-wrapper.options-wrapper_active[_ngcontent-%COMP%]{border-color:#afabab}@-webkit-keyframes swap_option{0%{background:#fff}to{background:#ff712c}}@keyframes swap_option{0%{background:#fff}to{background:#ff712c}}"]}),e}(),h=function(){var e=function(){function e(t){_classCallCheck(this,e),this.componentFactoryResolver=t}return _createClass(e,[{key:"resolveComponent",value:function(){return this.componentFactoryResolver.resolveComponentFactory(_)}}]),e}();return e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({factory:function(t){return new(t||e)(o.ac(o.j))},imports:[[n.b,a.n]]}),e}()}}]);