(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{KTyT:function(e,t,i){"use strict";i.r(t),i.d(t,"SimpleFractionComponent",(function(){return d})),i.d(t,"SimpleFractionModule",(function(){return f}));var r=i("ofXK"),n=i("3Pt+"),o=i("fXoL"),s=i("XCOF"),a=i("TznM");function c(e,t){if(1&e&&(o.Wb(0,"div",8),o.Rb(1,"img",9),o.Vb()),2&e){const e=o.hc(2);o.Cb(1),o.kc("src",e.resourceLoadsService.getExerciseImage(e.imageName),o.xc)}}function l(e,t){if(1&e){const e=o.Xb();o.Wb(0,"div",10),o.Wb(1,"input",11),o.ec("input",(function(i){o.vc(e);const r=t.$implicit,n=o.hc(2);return[n.isIcon(i.target),n.getUserResult(i.target.value,r.order)]})),o.Vb(),o.Vb()}if(2&e){const e=t.$implicit;o.Cb(1),o.Gb("correct-exercise-answer",e.IsCorrect)("input-disabled",e.defaultValue)("incorrect-exercise-answer",null!==e.IsCorrect&&!e.IsCorrect),o.kc("disabled",e.CorrectValue||e.defaultValue)("value",e.CorrectValue||e.defaultValue)}}function p(e,t){1&e&&(o.Wb(0,"div",12),o.Wb(1,"div",13),o.Rb(2,"span",14),o.Wb(3,"span",15),o.Dc(4,"Numerador"),o.Vb(),o.Vb(),o.Wb(5,"div",13),o.Rb(6,"span",14),o.Wb(7,"span",15),o.Dc(8,"Denominador"),o.Vb(),o.Vb(),o.Vb())}function u(e,t){if(1&e&&(o.Wb(0,"div",1),o.Wb(1,"div",2),o.Cc(2,c,2,1,"div",3),o.Wb(3,"div",4),o.Cc(4,l,2,8,"div",5),o.Rb(5,"span",6),o.Vb(),o.Cc(6,p,9,0,"div",7),o.Vb(),o.Vb()),2&e){const e=o.hc();o.Cb(2),o.kc("ngIf",e.imageName),o.Cb(2),o.kc("ngForOf",e.SimpleFraction),o.Cb(2),o.kc("ngIf",e.hasLegends)}}let d=(()=>{class e{constructor(e,t){this.exerciseDataService=e,this.resourceLoadsService=t}ngOnChanges(){if(!this.list)return;if(this.list.sort((e,t)=>e.Order-t.Order),this.isCorrectValues)return void this.list.forEach(e=>{this.SimpleFraction.forEach(t=>{t.order===e.Order&&(t.CorrectValue=e.CorrectValue,t.IsCorrect=e.IsCorrect)})});const e=[],t=[];this.list.forEach(i=>{const r={CorrectValue:null,IsCorrect:null,defaultValue:i.Value?i.Value:null,order:i.Order};"HasLegend"===i.Metric&&(this.hasLegends="True"===i.Value),"ImageName"===i.Metric&&(this.imageName=i.Value),"DefaultValue"===i.Metric&&e.push(r),"Input"===i.Metric&&t.push(r)}),t.forEach(t=>{e.forEach(e=>{t.order===e.order&&(t.defaultValue=e.defaultValue)})}),this.SimpleFraction=t}getUserResult(e,t){this.exerciseDataService.subject.next({Type:"SimpleFraction",Order:this.Order,Data:{Order:t,Value:e}})}isIcon(e){e.value?e.classList.remove("form_input-edit-icon"):e.classList.add("form_input-edit-icon")}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(s.a),o.Qb(a.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["app-simple-fraction"]],inputs:{isCorrectValues:"isCorrectValues",Order:"Order",list:"list"},features:[o.Ab],decls:1,vars:1,consts:[["class","d-flex justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"simple-fraction__wrapper"],["class","simple-fraction__img-wrapper",4,"ngIf"],[1,"simple-fraction__input-wrapper"],["class","form_input-wrapper simple-fraction__input-subwrapper",4,"ngFor","ngForOf"],[1,"simple-fraction__separator"],["class","simple-fraction__legends",4,"ngIf"],[1,"simple-fraction__img-wrapper"],[1,"simple-fraction__img",3,"src"],[1,"form_input-wrapper","simple-fraction__input-subwrapper"],["type","text",1,"form_input","form_input-edit-icon","simple-fraction__input","text-center","big-f-size",3,"disabled","value","input"],[1,"simple-fraction__legends"],[1,"simple-fraction__legends-item"],[1,"simple-fraction__legends-arrow"],[1,"simple-fraction__legends-text","big-f-size"]],template:function(e,t){1&e&&o.Cc(0,u,7,3,"div",0),2&e&&o.kc("ngIf",t.SimpleFraction)},directives:[r.j,r.i],styles:['[_nghost-%COMP%]{width:100%;margin:auto}.simple-fraction__wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:90%;margin:1vh auto 4vh}.simple-fraction__img-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:30%}.simple-fraction__img[_ngcontent-%COMP%]{min-width:80%}.simple-fraction__input-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:20%}.simple-fraction__input-subwrapper[_ngcontent-%COMP%]{position:relative;width:10vw}.simple-fraction__input-subwrapper[_ngcontent-%COMP%]:first-child{margin-bottom:5.5vh}.simple-fraction__input-subwrapper[_ngcontent-%COMP%]:first-child:after{position:absolute;content:"";left:0;right:0;bottom:-3vh;border-bottom:.5vh solid #a64ac9}.simple-fraction__legends[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;width:30%}.simple-fraction__legends-item[_ngcontent-%COMP%]{display:flex;align-items:center}.simple-fraction__legends-item[_ngcontent-%COMP%]:first-child{margin-bottom:7.5vh}.simple-fraction__legends-arrow[_ngcontent-%COMP%]{position:relative;width:0;height:0;margin-right:7vw;border-top:1vh solid transparent;border-bottom:1vh solid transparent;border-right:2vh solid #a64ac9}.simple-fraction__legends-arrow[_ngcontent-%COMP%]:after{position:absolute;content:"";left:1vh;top:0;bottom:0;margin:auto;height:.25vh;width:6vw;background:#a64ac9}']}),e})(),f=(()=>{class e{constructor(e){this.componentFactoryResolver=e}resolveComponent(){return this.componentFactoryResolver.resolveComponentFactory(d)}}return e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({factory:function(t){return new(t||e)(o.ac(o.j))},imports:[[r.b,n.n]]}),e})()}}]);