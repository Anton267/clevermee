(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"V+m6":function(t,n,e){"use strict";e.r(n),e.d(n,"TableComponent",(function(){return b})),e.d(n,"TableModule",(function(){return f}));var o=e("ofXK"),i=e("3Pt+"),c=e("fXoL");function r(t,n){if(1&t&&(c.Wb(0,"p",5),c.Dc(1),c.Vb()),2&t){const t=c.hc(2);c.Cb(1),c.Ec(t.title)}}function s(t,n){if(1&t&&(c.Wb(0,"td",8),c.Dc(1),c.Vb()),2&t){const t=n.$implicit;c.Cb(1),c.Ec(t)}}function l(t,n){if(1&t&&(c.Wb(0,"tr",6),c.Cc(1,s,2,1,"td",7),c.Vb()),2&t){const t=n.$implicit;c.Cb(1),c.kc("ngForOf",t.Values)}}function a(t,n){if(1&t&&(c.Wb(0,"div",1),c.Cc(1,r,2,1,"p",2),c.Wb(2,"table",3),c.Cc(3,l,2,1,"tr",4),c.Vb(),c.Vb()),2&t){const t=c.hc();c.Cb(1),c.kc("ngIf",t.title),c.Cb(2),c.kc("ngForOf",t.tableList)}}let b=(()=>{class t{ngOnInit(){this.list.sort((t,n)=>t.Order-n.Order),this.tableList=this.list}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Kb({type:t,selectors:[["app-table"]],inputs:{list:"list",title:"title"},decls:1,vars:1,consts:[["class","table-wrapper main-f-size text-center",4,"ngIf"],[1,"table-wrapper","main-f-size","text-center"],["class","title",4,"ngIf"],[1,"table","text-center","mx-auto"],["class","table__tr",4,"ngFor","ngForOf"],[1,"title"],[1,"table__tr"],["class","table__td",4,"ngFor","ngForOf"],[1,"table__td"]],template:function(t,n){1&t&&c.Cc(0,a,4,2,"div",0),2&t&&c.kc("ngIf",n.tableList)},directives:[o.j,o.i],styles:["[_nghost-%COMP%]{margin:.5vh 0;width:100%}.table-wrapper[_ngcontent-%COMP%]{line-height:1;margin-bottom:.5vh}.title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:.5vh}.table[_ngcontent-%COMP%]{width:90%;table-layout:fixed}.table__tr[_ngcontent-%COMP%]:first-child   .table__td[_ngcontent-%COMP%]{background:#a64ac9;border-bottom:.3vw solid #fff;color:#fff}.table__td[_ngcontent-%COMP%]{border:.15vw solid #fff;padding:1vh 0;background:#e1d0eb}"]}),t})(),f=(()=>{class t{constructor(t){this.componentFactoryResolver=t}resolveComponent(){return this.componentFactoryResolver.resolveComponentFactory(b)}}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(n){return new(n||t)(c.ac(c.j))},imports:[[o.b,i.n]]}),t})()}}]);