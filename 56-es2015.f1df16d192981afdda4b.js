(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{bjLR:function(e,n,t){"use strict";t.r(n),t.d(n,"NumberLineComponent",(function(){return s})),t.d(n,"NumberLineModule",(function(){return a}));var i=t("ofXK"),r=t("3Pt+"),o=t("fXoL");function c(e,n){if(1&e&&(o.Wb(0,"div",4),o.Rb(1,"div",5),o.Vb()),2&e){const e=n.$implicit,t=o.hc(2);o.Cb(1),o.Gb("number-line__letter",!t.getNumber(e.Value)),o.kc("innerHTML",e.Value,o.wc)}}function l(e,n){if(1&e&&(o.Wb(0,"div",1),o.Cc(1,c,2,3,"div",2),o.Rb(2,"div",3),o.Vb()),2&e){const e=o.hc();o.Cb(1),o.kc("ngForOf",e.numberLineList)}}let s=(()=>{class e{ngAfterContentInit(){this.list.sort((e,n)=>e.Order-n.Order),this.numberLineList=this.list,console.log(this.list)}getNumber(e){if(e)return+e[0]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Kb({type:e,selectors:[["app-number-line"]],inputs:{list:"list"},decls:1,vars:1,consts:[["class","number-line-wrapper d-flex justify-content-between align-items-center",4,"ngIf"],[1,"number-line-wrapper","d-flex","justify-content-between","align-items-center"],["class","number-line__vertical-line",4,"ngFor","ngForOf"],[1,"number-line__line"],[1,"number-line__vertical-line"],[1,"number-line__answer","text-center","main-f-size",3,"innerHTML"]],template:function(e,n){1&e&&o.Cc(0,l,3,1,"div",0),2&e&&o.kc("ngIf",n.numberLineList)},directives:[i.j,i.i],styles:["[_nghost-%COMP%]{padding:0 2vw;margin:1vh 0;width:100%}.number-line-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:4vh;padding:0 2vw}.number-line__line[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;border-bottom:2px solid #a64ac9}.number-line__vertical-line[_ngcontent-%COMP%]{border-left:2px solid #a64ac9;height:100%}.number-line__answer[_ngcontent-%COMP%]{position:absolute;text-transform:uppercase;padding:0 1.3vh;border-radius:.5vh;bottom:0;transform:translate(-50%,118%);max-width:5em}.number-line__letter[_ngcontent-%COMP%]{color:#fff;background:#fccd04}@media screen and (min-width:1920px){.number-line__line[_ngcontent-%COMP%], .number-line__vertical-line[_ngcontent-%COMP%]{border-width:3px}}@media screen and (min-width:2500px){.number-line__line[_ngcontent-%COMP%], .number-line__vertical-line[_ngcontent-%COMP%]{border-width:5px}}"]}),e})(),a=(()=>{class e{constructor(e){this.componentFactoryResolver=e}resolveComponent(){return this.componentFactoryResolver.resolveComponentFactory(s)}}return e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({factory:function(n){return new(n||e)(o.ac(o.j))},imports:[[i.b,r.n]]}),e})()}}]);