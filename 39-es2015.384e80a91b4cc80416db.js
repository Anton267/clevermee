(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{IMeN:function(t,e,r){"use strict";r.r(e),r.d(e,"FillInputsComponent",(function(){return p})),r.d(e,"FillInputsModule",(function(){return u}));var n=r("ofXK"),i=r("3Pt+"),o=r("fXoL"),s=r("XCOF");function c(t,e){if(1&t&&o.Rb(0,"p",5),2&t){const t=o.hc(2);o.kc("innerHTML",t.Label,o.wc)}}function l(t,e){if(1&t){const t=o.Xb();o.Wb(0,"div",6),o.Rb(1,"span",7),o.Wb(2,"div",8),o.Wb(3,"input",9),o.ec("input",(function(r){o.vc(t);const n=e.index,i=o.hc(2);return[i.isIcon(r.target),i.getUserResult(r.target.value,n)]})),o.Vb(),o.Vb(),o.Vb()}if(2&t){const t=e.$implicit,r=o.hc(2);o.Gb("mx-auto",!r.IsHorizontal),o.Cb(1),o.kc("innerHTML",t.letter.Value,o.wc),o.Cb(2),o.Gb("correct-exercise-answer",t.IsCorrect)("incorrect-exercise-answer",null!==t.IsCorrect&&!t.IsCorrect),o.kc("disabled",t.CorrectValue)("value",t.CorrectValue)}}function a(t,e){if(1&t&&(o.Wb(0,"div",1),o.Cc(1,c,1,1,"p",2),o.Wb(2,"div",3),o.Cc(3,l,4,9,"div",4),o.Vb(),o.Vb()),2&t){const t=o.hc();o.Cb(1),o.kc("ngIf",t.Label),o.Cb(1),o.Gb("vertical-wrapper",!t.IsHorizontal),o.Cb(1),o.kc("ngForOf",t.fillInputsArray)}}let p=(()=>{class t{constructor(t){this.exerciseDataService=t}ngOnChanges(){if(this.list.sort((t,e)=>t.Order-e.Order),this.isCorrectValues)return void this.list.forEach((t,e)=>{this.fillInputsArray[e]&&(this.fillInputsArray[e].CorrectValue=t.CorrectValue,this.fillInputsArray[e].IsCorrect=t.IsCorrect)});const t=[];let e=1;this.list.forEach(r=>{const n={CorrectValue:null,IsCorrect:null,letter:r,order:e++,isHorizontal:!0};t.push(n)}),this.fillInputsArray=t}getUserResult(t,e){this.exerciseDataService.subject.next({Type:"FillInputs",Order:this.Order,Data:{Order:e+1,Value:t}})}isIcon(t){t.value?t.classList.remove("form_input-edit-icon"):t.classList.add("form_input-edit-icon")}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(s.a))},t.\u0275cmp=o.Kb({type:t,selectors:[["app-fill-inputs"]],inputs:{isCorrectValues:"isCorrectValues",Order:"Order",list:"list",IsHorizontal:"IsHorizontal",Label:"Label"},features:[o.Ab],decls:1,vars:1,consts:[["class","inputs-wrapper big-f-size mx-auto",4,"ngIf"],[1,"inputs-wrapper","big-f-size","mx-auto"],["class","text-center",3,"innerHTML",4,"ngIf"],[1,"d-flex","flex-wrap","align-content-baseline"],["class","fill-input-wrapper d-flex align-items-center",3,"mx-auto",4,"ngFor","ngForOf"],[1,"text-center",3,"innerHTML"],[1,"fill-input-wrapper","d-flex","align-items-center"],[1,"letter",3,"innerHTML"],[1,"form_input-wrapper","form_fill-input-wrapper"],["type","text",1,"form_input","form_input-edit-icon","exercise-one-answers__input","text-center","big-f-size",3,"disabled","value","input"]],template:function(t,e){1&t&&o.Cc(0,a,4,4,"div",0),2&t&&o.kc("ngIf",e.fillInputsArray)},directives:[n.j,n.i],styles:["[_nghost-%COMP%]{width:100%;margin:auto}.fill-input-wrapper[_ngcontent-%COMP%]{width:33.33%;min-width:15vw;position:relative;margin:2vh 0}.letter[_ngcontent-%COMP%]{display:inline-block;margin-right:1vh;margin-left:auto;text-align:right}.form_input-wrapper[_ngcontent-%COMP%]{width:85%}.form_input[_ngcontent-%COMP%]{border-radius:10vh!important}.vertical-wrapper[_ngcontent-%COMP%]{flex-direction:column!important}.vertical-wrapper[_ngcontent-%COMP%]   .fill-input-wrapper[_ngcontent-%COMP%]{width:100%;max-width:35vw}.vertical-wrapper[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]{width:100%}.vertical-wrapper[_ngcontent-%COMP%]   .form_fill-input-wrapper[_ngcontent-%COMP%]{max-width:25vw}"]}),t})(),u=(()=>{class t{constructor(t){this.componentFactoryResolver=t}resolveComponent(){return this.componentFactoryResolver.resolveComponentFactory(p)}}return t.\u0275mod=o.Ob({type:t}),t.\u0275inj=o.Nb({factory:function(e){return new(e||t)(o.ac(o.j))},imports:[[n.b,i.n]]}),t})()}}]);