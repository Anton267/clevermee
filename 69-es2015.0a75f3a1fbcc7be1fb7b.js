(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"AR/q":function(t,e,r){"use strict";r.r(e),r.d(e,"SimpleCalculationComponent",(function(){return d})),r.d(e,"SimpleCalculationModule",(function(){return f}));var n=r("ofXK"),c=r("3Pt+"),i=r("fXoL"),l=r("XCOF");function o(t,e){if(1&t&&(i.Wb(0,"span"),i.Dc(1),i.Vb()),2&t){const t=i.hc().$implicit;i.Cb(1),i.Fc(" ",t.value," ")}}function a(t,e){if(1&t){const t=i.Xb();i.Wb(0,"div",8),i.Wb(1,"input",9),i.ec("input",(function(e){i.vc(t);const r=i.hc().$implicit,n=i.hc(3);return[n.oneLetter(e.target),n.getUserResult(e.target.value,r.order)]})),i.Vb(),i.Vb()}if(2&t){const t=i.hc().$implicit;i.Cb(1),i.Gb("correct-exercise-answer",t.IsCorrect)("incorrect-exercise-answer",null!==t.IsCorrect&&!t.IsCorrect),i.kc("disabled",t.CorrectValue)("value",t.CorrectValue)}}function s(t,e){if(1&t&&(i.Wb(0,"td",5),i.Cc(1,o,2,1,"span",6),i.Cc(2,a,2,6,"div",7),i.Vb()),2&t){const t=e.$implicit;i.Cb(1),i.kc("ngIf",t&&t.value),i.Cb(1),i.kc("ngIf",t&&!t.value)}}function u(t,e){if(1&t&&(i.Wb(0,"tr",3),i.Cc(1,s,3,2,"td",4),i.Vb()),2&t){const t=e.$implicit;i.Cb(1),i.kc("ngForOf",t)}}function p(t,e){if(1&t&&(i.Wb(0,"table",1),i.Cc(1,u,2,1,"tr",2),i.Vb()),2&t){const t=i.hc();i.Cb(1),i.kc("ngForOf",t.simpleCalculationArray)}}let d=(()=>{class t{constructor(t){this.exerciseDataService=t,this.inputResult=[]}ngOnChanges(){if(this.list.sort((t,e)=>t.Order-e.Order),this.isCorrectValues)return void this.list.forEach((t,e)=>{this.simpleCalculationArray.forEach(e=>{e.forEach(e=>{e&&t.Order===e.order&&(e.IsCorrect=t.IsCorrect,e.CorrectValue=t.CorrectValue)})})});const t=[],e=[];let r;this.list.forEach(t=>{"ColumnSize"===t.Metric&&(r=+t.Value),"Empty"===t.Metric&&e.push(null),"Input"===t.Metric&&e.push({order:t.Order,value:null,CorrectValue:null,IsCorrect:null}),"DefaultValue"===t.Metric&&e.push({order:t.Order,value:t.Value,CorrectValue:null,IsCorrect:null})});let n=0;e.forEach((e,c)=>{c%r==0||n-1<0?(t.push([e]),n++):t[n-1].push(e)}),this.simpleCalculationArray=t}getUserResult(t,e){this.exerciseDataService.subject.next({Type:"SimpleCalculation",Order:this.Order,Data:{Order:e,Value:t}})}oneLetter(t){t.value.length&&(t.value=t.value[t.value.length-1])}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(l.a))},t.\u0275cmp=i.Kb({type:t,selectors:[["app-simple-calculation"]],inputs:{isCorrectValues:"isCorrectValues",Order:"Order",list:"list"},features:[i.Ab],decls:1,vars:1,consts:[["class","simple-calculation__table big-f-size mx-auto",4,"ngIf"],[1,"simple-calculation__table","big-f-size","mx-auto"],["class","simple-calculation__tr",4,"ngFor","ngForOf"],[1,"simple-calculation__tr"],["class","simple-calculation__td text-center",4,"ngFor","ngForOf"],[1,"simple-calculation__td","text-center"],[4,"ngIf"],["class","form_input-wrapper simple-calculation__input-wrapper",4,"ngIf"],[1,"form_input-wrapper","simple-calculation__input-wrapper"],["type","text",1,"form_input","simple-calculation__input","text-center","big-f-size",3,"disabled","value","input"]],template:function(t,e){1&t&&i.Cc(0,p,2,1,"table",0),2&t&&i.kc("ngIf",e.simpleCalculationArray)},directives:[n.j,n.i],styles:["[_nghost-%COMP%]{width:100%}.simple-calculation__td[_ngcontent-%COMP%]{width:3vw;height:3vw}.simple-calculation__input-wrapper[_ngcontent-%COMP%]{border-radius:50%}.simple-calculation__input[_ngcontent-%COMP%]{padding:0;width:3vw;height:3vw}.simple-calculation__tr[_ngcontent-%COMP%]:nth-child(odd):not(:first-child)   .simple-calculation__td[_ngcontent-%COMP%]{padding-top:1vh}.simple-calculation__tr[_ngcontent-%COMP%]:nth-child(2n){border-bottom:.2vw solid #a136ce}"]}),t})(),f=(()=>{class t{constructor(t){this.componentFactoryResolver=t}resolveComponent(){return this.componentFactoryResolver.resolveComponentFactory(d)}}return t.\u0275mod=i.Ob({type:t}),t.\u0275inj=i.Nb({factory:function(e){return new(e||t)(i.ac(i.j))},imports:[[n.b,c.n]]}),t})()}}]);