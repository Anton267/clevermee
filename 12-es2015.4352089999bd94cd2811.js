(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{zteD:function(t,e,r){"use strict";r.r(e),r.d(e,"BottomChainComponent",(function(){return u})),r.d(e,"BottomChainModule",(function(){return p}));var n=r("ofXK"),o=r("3Pt+"),i=r("fXoL"),a=r("XCOF");function c(t,e){if(1&t&&(i.Wb(0,"span",7),i.Dc(1),i.Vb()),2&t){const t=i.hc().$implicit;i.Cb(1),i.Fc(" ",t.chainValue," ")}}function s(t,e){if(1&t){const t=i.Xb();i.Wb(0,"div",4),i.Cc(1,c,2,1,"span",5),i.Wb(2,"input",6),i.ec("input",(function(r){i.vc(t);const n=e.$implicit,o=i.hc(2);return[o.isIcon(r.target),o.getUserResult(r.target.value,n.order)]})),i.Vb(),i.Vb()}if(2&t){const t=e.$implicit,r=e.index,n=i.hc(2);i.Bc("margin-left",t.position),i.Cb(1),i.kc("ngIf",r!==n.bottomChainArray.length-1),i.Cb(1),i.Gb("input-disabled",t.defaultValue)("correct-exercise-answer",t.IsCorrect)("incorrect-exercise-answer",null!==t.IsCorrect&&!t.IsCorrect),i.kc("disabled",t.defaultValue)("value",t.defaultValue||t.CorrectValue)}}function l(t,e){if(1&t&&(i.Wb(0,"div",1),i.Wb(1,"div",2),i.Cc(2,s,3,11,"div",3),i.Vb(),i.Vb()),2&t){const t=i.hc();i.Cb(2),i.kc("ngForOf",t.bottomChainArray)}}let u=(()=>{class t{constructor(t){this.exerciseDataService=t}ngOnChanges(){if(this.list.sort((t,e)=>t.Order-e.Order),this.isCorrectValues)return void this.list.forEach(t=>{this.bottomChainArray.forEach(e=>{e.order===t.Order&&(e.CorrectValue=t.CorrectValue,e.IsCorrect=t.IsCorrect)})});const t=[],e=[];this.list.forEach(r=>{const n={position:null,CorrectValue:null,IsCorrect:null,chainValue:null,defaultValue:null,order:r.Order};"ChainValue"===r.Metric&&(n.chainValue=r.Value,t.push(n)),"DefaultValue"===r.Metric&&(n.defaultValue=r.Value,e.push(n))}),t.push({position:null,CorrectValue:null,IsCorrect:null,chainValue:null,defaultValue:null,order:t.length+1});let r=2;t.forEach(t=>{e.forEach(e=>{t.order===e.order&&(t.defaultValue=e.defaultValue)}),t.position=r+"vw",r+=10}),this.bottomChainArray=t}getUserResult(t,e){this.exerciseDataService.subject.next({Type:"BottomChain",Order:this.Order,Data:{Order:e,Value:t}})}isIcon(t){t.value?t.classList.remove("form_input-edit-icon"):t.classList.add("form_input-edit-icon")}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(a.a))},t.\u0275cmp=i.Kb({type:t,selectors:[["app-bottom-chain"]],inputs:{isCorrectValues:"isCorrectValues",Order:"Order",list:"list"},features:[i.Ab],decls:1,vars:1,consts:[["class","bottom-chain-wrapper d-flex justify-content-center",4,"ngIf"],[1,"bottom-chain-wrapper","d-flex","justify-content-center"],[1,"bottom-chain-subwrapper","d-flex","flex-column"],["class","form_input-wrapper",3,"margin-left",4,"ngFor","ngForOf"],[1,"form_input-wrapper"],["class","arrow big-f-size",4,"ngIf"],["type","text",1,"form_input","form_input-edit-icon","exercise-one-answers__input","text-center","big-f-size",3,"disabled","value","input"],[1,"arrow","big-f-size"]],template:function(t,e){1&t&&i.Cc(0,l,3,1,"div",0),2&t&&i.kc("ngIf",e.bottomChainArray)},directives:[n.j,n.i],styles:['[_nghost-%COMP%]{width:100%;margin:auto}.bottom-chain-wrapper[_ngcontent-%COMP%]{width:100%;margin:2vh 0;position:relative}.bottom-chain-subwrapper[_ngcontent-%COMP%]{width:auto}.form_input-wrapper[_ngcontent-%COMP%]{width:12vw}.form_input-wrapper[_ngcontent-%COMP%]:not(:first-child){margin-top:3vh}.form_input[_ngcontent-%COMP%]{padding:0!important}.arrow[_ngcontent-%COMP%]{height:7vh;top:-3vh;z-index:1;width:50%;padding-left:5vw;padding-top:3vh;white-space:nowrap;transform:translateX(200%)}.arrow[_ngcontent-%COMP%], .arrow[_ngcontent-%COMP%]:before{position:absolute;right:0;left:0}.arrow[_ngcontent-%COMP%]:before{content:"";display:block;background:url(/assets/Images/OtherImages/exercise-arrow.png) no-repeat;background-position:bottom;background-size:contain;width:4vw;margin:auto;top:0;bottom:0;transform:rotate(35deg) translateX(20%)}']}),t})(),p=(()=>{class t{constructor(t){this.componentFactoryResolver=t}resolveComponent(){return this.componentFactoryResolver.resolveComponentFactory(u)}}return t.\u0275mod=i.Ob({type:t}),t.\u0275inj=i.Nb({factory:function(e){return new(e||t)(i.ac(i.j))},imports:[[n.b,o.n]]}),t})()}}]);