(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{whBs:function(t,n,i){"use strict";i.r(n),i.d(n,"LinkOptionsComponent",(function(){return y})),i.d(n,"LinkOptionsModule",(function(){return O}));var e=i("ofXK"),o=i("3Pt+"),s=i("fXoL"),r=i("XCOF"),c=i("TznM");const a=["optionsWrapper"],l=["canvas"];function p(t,n){if(1&t){const t=s.Xb();s.Wb(0,"div",10),s.Wb(1,"div",11),s.Dc(2),s.Vb(),s.Wb(3,"div",12),s.ec("click",(function(i){s.vc(t);const e=n.$implicit;return s.hc(2).getPositionA(i.target,e.order)}))("touchstart",(function(i){s.vc(t);const e=n.$implicit;return s.hc(2).getPositionA(i.target,e.order)})),s.Vb(),s.Vb()}if(2&t){const t=n.$implicit,i=s.hc(2);s.Gb("options-image-wrapper",i.IsImage),s.Cb(2),s.Fc(" ",t.value," "),s.Cb(1),s.Db("data-order",t.order)}}function h(t,n){if(1&t&&(s.Wb(0,"div",17),s.Dc(1),s.Vb()),2&t){const t=s.hc().$implicit;s.Cb(1),s.Fc(" ",t.value," ")}}function g(t,n){if(1&t&&(s.Wb(0,"div",18),s.Rb(1,"img",19),s.Vb()),2&t){const t=s.hc().$implicit,n=s.hc(2);s.Cb(1),s.kc("src",n.resourceLoadsService.getExerciseImage(t.value),s.xc)}}function u(t,n){if(1&t){const t=s.Xb();s.Wb(0,"div",20),s.ec("click",(function(n){s.vc(t);const i=s.hc().$implicit;return s.hc(2).getPositionA(n.target,i.order)}))("touchstart",(function(n){s.vc(t);const i=s.hc().$implicit;return s.hc(2).getPositionA(n.target,i.order)})),s.Vb()}if(2&t){const t=s.hc().$implicit;s.Db("data-order",t.order)}}function v(t,n){if(1&t){const t=s.Xb();s.Wb(0,"div",10),s.Wb(1,"div",13),s.ec("click",(function(i){s.vc(t);const e=n.$implicit,o=s.hc(2);return[o.getPositionB(i.target),o.getUserResult(e.order)]})),s.Vb(),s.Cc(2,h,2,1,"div",14),s.Cc(3,g,2,1,"div",15),s.Cc(4,u,1,1,"div",16),s.Vb()}if(2&t){const t=n.$implicit,i=s.hc(2);s.Gb("options-image-wrapper",i.IsImage),s.Cb(1),s.Db("data-order",t.order),s.Cb(1),s.kc("ngIf",!i.IsImage&&!i.LinkOptionsArray[2]||!i.IsImage&&i.LinkOptionsArray[2]||i.IsImage&&i.LinkOptionsArray[2]),s.Cb(1),s.kc("ngIf",i.IsImage&&!i.LinkOptionsArray[2]),s.Cb(1),s.kc("ngIf",i.LinkOptionsArray[2])}}function d(t,n){if(1&t&&(s.Wb(0,"div",24),s.Dc(1),s.Vb()),2&t){const t=s.hc().$implicit;s.Cb(1),s.Fc(" ",t.value," ")}}function m(t,n){if(1&t&&(s.Wb(0,"div",18),s.Rb(1,"img",19),s.Vb()),2&t){const t=s.hc().$implicit,n=s.hc(3);s.Cb(1),s.kc("src",n.resourceLoadsService.getExerciseImage(t.value),s.xc)}}function f(t,n){if(1&t){const t=s.Xb();s.Wb(0,"div",10),s.Wb(1,"div",22),s.ec("click",(function(i){s.vc(t);const e=n.$implicit,o=s.hc(3);return[o.getPositionB(i.target),o.getUserResult(e.order)]})),s.Vb(),s.Cc(2,d,2,1,"div",23),s.Cc(3,m,2,1,"div",15),s.Vb()}if(2&t){const t=n.$implicit,i=s.hc(3);s.Gb("options-image-wrapper",i.IsImage),s.Cb(1),s.Db("data-order",t.order),s.Cb(1),s.kc("ngIf",!i.IsImage),s.Cb(1),s.kc("ngIf",i.IsImage)}}function b(t,n){if(1&t&&(s.Ub(0),s.Wb(1,"div",21),s.Cc(2,f,4,5,"div",5),s.Vb(),s.Tb()),2&t){const t=s.hc(2);s.Cb(2),s.kc("ngForOf",t.LinkOptionsArray[2])}}function C(t,n){if(1&t){const t=s.Xb();s.Wb(0,"div",1,2),s.Wb(2,"div",3),s.ec("mousemove",(function(n){return s.vc(t),s.hc().lineMove(n,0)}))("touchmove",(function(n){return s.vc(t),s.hc().lineMove(n,0)}))("touchend",(function(n){return s.vc(t),s.hc().getTouchPositionB(n)}))("click",(function(n){return s.vc(t),s.hc().clearOnClick(n.target)})),s.Wb(3,"div",4),s.Cc(4,p,4,4,"div",5),s.Vb(),s.Wb(5,"div",6),s.Cc(6,v,5,6,"div",5),s.Vb(),s.Cc(7,b,3,1,"ng-container",7),s.Rb(8,"canvas",8,9),s.Vb(),s.Vb()}if(2&t){const t=s.hc();s.Gb("blockAfterGetResults",t.isCorrectValues),s.Cb(4),s.kc("ngForOf",t.LinkOptionsArray[0]),s.Cb(2),s.kc("ngForOf",t.LinkOptionsArray[1]),s.Cb(1),s.kc("ngIf",t.LinkOptionsArray[2])}}let y=(()=>{class t{constructor(t,n){this.exerciseDataService=t,this.resourceLoadsService=n,this.position={x1:null,y1:null,x2:null,y2:null},this.results={},this.saveLines={},this.domElems={canvas:null,canvasWrapper:null},this.lineStart=!1,this.startFlomLeftPoint=!1,this.startFromRightPoint=!1}ngOnChanges(){const t=[];if(this.list.sort((t,n)=>t.Order-n.Order),this.isCorrectValues){this.saveLines={};const t=document.getElementsByClassName("js-left-point"),n=document.getElementsByClassName("js-right-point");let i=0;return this.list.forEach((e,o)=>{let s,r;this.LinkOptionsArray.length>2?(t.length/2>i?(s=t[e.Order-1],r=t[+e.CorrectValue-1]):(s=n[e.Order-1-t.length/2],r=n[+e.CorrectValue-1-t.length/2]),i++):(s=t[e.Order-1],r=t[+e.CorrectValue-1]),this.saveLines[o]={isCorrect:null,x1:null,y1:null,x2:null,y2:null},this.saveLines[o].isCorrect=e.IsCorrect,this.saveLines[o].x1=this.getCenterPosition(s).x,this.saveLines[o].y1=this.getCenterPosition(s).y,this.saveLines[o].x2=this.getCenterPosition(r).x,this.saveLines[o].y2=this.getCenterPosition(r).y}),this.clearCanvas(),void this.paintSaveLines()}let n,i;const e=[];this.list.forEach(t=>{"IsImage"===t.Metric&&(this.IsImage="True"===t.Value),"NumberOfColumns"===t.Metric&&(n=+t.Value),"NumberOfOptions"===t.Metric&&(i=+t.Value),"Value"===t.Metric&&e.push({order:t.Order,value:t.Value})});let o=1;for(;n>0;)t[o-1]=[],e.forEach((n,e)=>{e<i*o&&e>=i*(o-1)&&t[o-1].push(n)}),o++,n--;this.LinkOptionsArray=t}lineMove(t,n){if(!this.lineStart)return;const i=this.optionsWrapper.nativeElement.getBoundingClientRect().left,e=this.optionsWrapper.nativeElement.getBoundingClientRect().top,o=this.getEventPosition(t).clientX-i,s=this.getEventPosition(t).clientY-e,r=this.position.x1-i,c=this.position.y1-e,a=this.canvas.nativeElement.getContext("2d");this.clearCanvas(),a.beginPath(),a.moveTo(r,c);const l=t.target;if(l.classList.contains("js-drop-point")){const t=this.getCenterPosition(l).x-i,n=this.getCenterPosition(l).y-e;a.lineTo(t,n)}else a.lineTo(o,s);a.stroke(),this.paintSaveLines()}getPositionA(t,n){t.classList.contains("js-left-point")&&(this.startFlomLeftPoint=!0,this.startFromRightPoint=!1),t.classList.contains("js-right-point")&&(this.startFlomLeftPoint=!1,this.startFromRightPoint=!0),this.elemAttention(t),this.position.x1=this.getCenterPosition(t).x,this.position.y1=this.getCenterPosition(t).y,this.lineStart=!0,this.saveStartNumber=n,this.saveLines[n]&&delete this.saveLines[n]}getTouchPositionB(t){if(this.clearCanvas(),this.paintSaveLines(),!this.lineStart)return;const n=document.elementFromPoint(t.changedTouches[0].clientX,t.changedTouches[0].clientY);if((!n.classList.contains("js-left-point")||this.startFlomLeftPoint)&&(!n.classList.contains("js-right-point")||this.startFromRightPoint)&&(n.classList.contains("js-center-left-point")||n.classList.contains("js-center-right-point"))){this.getUserResult(n.getAttribute("data-order")),this.elemAttention(n),this.position.x2=this.getCenterPosition(n).x,this.position.y2=this.getCenterPosition(n).y;const t={x1:null,y1:null,x2:null,y2:null};t.x1=this.position.x1,t.y1=this.position.y1,t.x2=this.position.x2,t.y2=this.position.y2,this.saveLines[this.saveStartNumber]=t,this.lineStart=!1,this.paintSaveLines()}}clearOnClick(t){t.classList.contains("js-drop-point")||t.classList.contains("js-right-point")||t.classList.contains("js-left-point")||(this.lineStart=!1,this.clearCanvas(),this.paintSaveLines())}getPositionB(t){if(t.classList.contains("js-left-point")&&!this.startFlomLeftPoint)return;if(t.classList.contains("js-right-point")&&!this.startFromRightPoint)return;if(!this.lineStart)return;this.elemAttention(t),this.position.x2=this.getCenterPosition(t).x,this.position.y2=this.getCenterPosition(t).y;const n={x1:null,y1:null,x2:null,y2:null};n.x1=this.position.x1,n.y1=this.position.y1,n.x2=this.position.x2,n.y2=this.position.y2,this.saveLines[this.saveStartNumber]=n,this.lineStart=!1}clearCanvas(){this.canvas.nativeElement.getContext("2d").clearRect(0,0,this.optionsWrapper.nativeElement.getBoundingClientRect().width,this.optionsWrapper.nativeElement.getBoundingClientRect().height)}getCenterPosition(t){const n=t.getBoundingClientRect().width/2,i=t.getBoundingClientRect().top;return{x:t.getBoundingClientRect().left+n,y:i+n}}paintSaveLines(){const t=this.canvas.nativeElement.getContext("2d");for(const n in this.saveLines)if(Object.prototype.hasOwnProperty.call(this.saveLines,n)){const i=this.saveLines[n];Object.prototype.hasOwnProperty.call(i,"isCorrect")&&(t.strokeStyle=this.saveLines[n].isCorrect?"#92d050":"#FBACAC");const e=i.x1-this.canvas.nativeElement.getBoundingClientRect().left,o=i.y1-this.canvas.nativeElement.getBoundingClientRect().top,s=i.x2-this.canvas.nativeElement.getBoundingClientRect().left,r=i.y2-this.canvas.nativeElement.getBoundingClientRect().top;t.beginPath(),t.moveTo(e,o),t.lineTo(s,r),t.stroke()}}getUserResult(t){this.results[this.saveStartNumber]={Type:"LinkOptions",Order:this.Order,Data:{Order:this.saveStartNumber,Value:t+""}};for(const n in this.results)Object.prototype.hasOwnProperty.call(this.results,n)&&this.exerciseDataService.subject.next(this.results[n])}elemAttention(t){t.classList.add("elem-attention"),setTimeout(()=>{t.classList.remove("elem-attention")},300)}getEventPosition(t){let n,i;return"mousemove"===t.type&&(n=t.clientX,i=t.clientY),"touchmove"===t.type&&(n=t.touches[0].clientX,i=t.touches[0].clientY),{clientX:n,clientY:i}}ngAfterViewInit(){this.canvas.nativeElement.width=this.optionsWrapper.nativeElement.getBoundingClientRect().width,this.canvas.nativeElement.height=this.optionsWrapper.nativeElement.getBoundingClientRect().height;const t=this.canvas.nativeElement.getContext("2d");t.strokeStyle="#fccd04",t.lineWidth=this.windowWidth()/100/2}windowWidth(){const t=window,n=document,i=n.documentElement,e=n.getElementsByTagName("body")[0];return t.innerWidth||i.clientWidth||e.clientWidth}}return t.\u0275fac=function(n){return new(n||t)(s.Qb(r.a),s.Qb(c.a))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-link-options"]],viewQuery:function(t,n){var i;1&t&&(s.Hc(a,!0),s.Hc(l,!0)),2&t&&(s.rc(i=s.fc())&&(n.optionsWrapper=i.first),s.rc(i=s.fc())&&(n.canvas=i.first))},inputs:{isCorrectValues:"isCorrectValues",Order:"Order",list:"list"},features:[s.Ab],decls:1,vars:1,consts:[["class","wrapper",3,"blockAfterGetResults",4,"ngIf"],[1,"wrapper"],["optionsWrapper",""],[1,"link-options-wrapper","d-flex","justify-content-center",3,"mousemove","touchmove","touchend","click"],[1,"left-options-container","options_container","d-flex","flex-column","justify-content-between"],["class","d-flex align-items-center",3,"options-image-wrapper",4,"ngFor","ngForOf"],[1,"center-options-container","options_container","d-flex","flex-column","justify-content-between"],[4,"ngIf"],[1,"canvas"],["canvas",""],[1,"d-flex","align-items-center"],[1,"left-option","option","main-f-size"],[1,"option-point","left-option-point","js-left-point",3,"click","touchstart"],[1,"option-point","center-option-point","js-center-left-point","js-drop-point","js-left-point",3,"click"],["class","center-option option main-f-size",4,"ngIf"],["class","option-image-wrapper",4,"ngIf"],["class","option-point center-option-point center_right-point js-right-point",3,"click","touchstart",4,"ngIf"],[1,"center-option","option","main-f-size"],[1,"option-image-wrapper"],[1,"option-image",3,"src"],[1,"option-point","center-option-point","center_right-point","js-right-point",3,"click","touchstart"],[1,"right-options-container","options_container"],[1,"option-point","right-option-point","js-center-right-point","js-drop-point","js-right-point",3,"click"],["class","right-option option main-f-size",4,"ngIf"],[1,"right-option","option","main-f-size"]],template:function(t,n){1&t&&s.Cc(0,C,10,5,"div",0),2&t&&s.kc("ngIf",n.LinkOptionsArray)},directives:[e.j,e.i],styles:["[_nghost-%COMP%]{width:100%}.blockAfterGetResults[_ngcontent-%COMP%]{pointer-events:none}.canvas[_ngcontent-%COMP%]{z-index:-1;position:absolute;top:0;left:0}.link-options-wrapper[_ngcontent-%COMP%]:not(:last-child){margin-right:3vw}.link-options-wrapper[_ngcontent-%COMP%]{position:relative}.center-options-container[_ngcontent-%COMP%], .left-options-container[_ngcontent-%COMP%]{margin-right:3vw}.option[_ngcontent-%COMP%]{border-radius:100px;display:flex;justify-content:center;align-items:center;padding:1vh 3vw;text-align:center;color:#fff;font-size:calc(1vh + .5vw);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;margin:1vh 0;width:100%}.options-image-wrapper[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1.5vh}.options-image-wrapper[_ngcontent-%COMP%]{height:10vh}.option-image-wrapper[_ngcontent-%COMP%]{height:inherit;background:#ffd2bb;border:.3vw solid #f47433;border-radius:10vh;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.option-image[_ngcontent-%COMP%]{width:100%;max-width:150px;height:100%;-o-object-fit:contain;object-fit:contain}.center_right-point[_ngcontent-%COMP%]:hover, .left-option-point[_ngcontent-%COMP%]:hover{opacity:.5}.option-point[_ngcontent-%COMP%]{padding:.7vw;border-radius:50%;cursor:pointer;transition:opacity .2s}.center_right-point[_ngcontent-%COMP%]{margin-left:1vw;margin-right:0!important}.left-option[_ngcontent-%COMP%]{background:#11afa9}.center-option[_ngcontent-%COMP%]{background:#ff712c}.right-option[_ngcontent-%COMP%]{background:#fccd05}.left-option-point[_ngcontent-%COMP%]{background:#0b7570;margin-left:1vw}.center-option-point[_ngcontent-%COMP%]{background:#c74200;margin-right:1vw}.right-option-point[_ngcontent-%COMP%]{background:#c09805;margin-right:1vw}.elem-attention[_ngcontent-%COMP%]{-webkit-animation:attention .3s;animation:attention .3s}@-webkit-keyframes attention{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}@keyframes attention{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}@media screen and (min-width:3000px){.option-image[_ngcontent-%COMP%]{width:10vw}}"]}),t})(),O=(()=>{class t{constructor(t){this.componentFactoryResolver=t}resolveComponent(){return this.componentFactoryResolver.resolveComponentFactory(y)}}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(n){return new(n||t)(s.ac(s.j))},imports:[[e.b,o.n]]}),t})()}}]);