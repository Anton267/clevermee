function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{qcXs:function(e,t,r){"use strict";r.r(t),r.d(t,"PaintTheBearComponent",(function(){return _})),r.d(t,"PaintTheBearModule",(function(){return h}));var n=r("ofXK"),o=r("3Pt+"),i=r("fXoL"),a=r("XCOF"),c=r("TznM"),s=["mouseColorElem"],l=["paintBearWrapper"];function b(e,t){if(1&e&&(i.Wb(0,"div",24),i.Wb(1,"div",25),i.Dc(2),i.Vb(),i.Wb(3,"div",26),i.Rb(4,"div",27),i.Vb(),i.Vb()),2&e){var r=t.$implicit;i.Cb(2),i.Fc(" ",r.value," ")}}function u(e,t){if(1&e&&(i.Wb(0,"div",22),i.Cc(1,b,5,1,"div",23),i.Vb()),2&e){var r=i.hc();i.Cb(1),i.kc("ngForOf",r.optionsArray)}}function d(e,t){if(1&e){var r=i.Xb();i.Wb(0,"div",30),i.Rb(1,"span",31),i.Wb(2,"div",32),i.Wb(3,"input",33),i.ec("input",(function(e){i.vc(r);var n=t.$implicit,o=i.hc(2);return[o.isIcon(e.target),o.getUserResult(e.target.value,n.order)]})),i.Vb(),i.Vb(),i.Rb(4,"div",34),i.Vb()}if(2&e){var n=t.$implicit,o=t.index,a=i.hc(2);i.Cb(1),i.kc("innerHTML",n.value,i.wc),i.Cb(2),i.Gb("correct-exercise-answer",n.IsCorrect)("incorrect-exercise-answer",null!==n.IsCorrect&&!n.IsCorrect),i.kc("disabled",n.CorrectValue)("value",n.CorrectValue),i.Cb(1),i.Bc("background",a.colors[o].color,i.Jb)}}function p(e,t){if(1&e&&(i.Wb(0,"div",28),i.Cc(1,d,5,9,"div",29),i.Vb()),2&e){var r=i.hc();i.Cb(1),i.kc("ngForOf",r.sentencesArray)}}function g(e,t){if(1&e){var r=i.Xb();i.Wb(0,"div",35),i.ec("click",(function(e){i.vc(r);var n=t.index;return i.hc().addActiveClass(e.target,n)})),i.Vb()}2&e&&i.Bc("background",t.$implicit.color,i.Jb)}var _=function(){var e=function(){function e(t,r){_classCallCheck(this,e),this.exerciseDataService=t,this.resourceLoadsService=r,this.colors=[{color:"#10afaa",bucketImg:"BucketBlue"},{color:"#fccd05",bucketImg:"BucketYellow"},{color:"#ff712d",bucketImg:"BucketOrange"}],this.imgSrc=r.getExerciseImage(this.colors[0].bucketImg)}return _createClass(e,[{key:"ngOnChanges",value:function(){var e=this;if(this.list.sort((function(e,t){return e.Order-t.Order})),this.isCorrectValues){var t=document.getElementsByClassName("left_ear")[0],r=document.getElementsByClassName("right_ear")[0],n=document.getElementsByClassName("bear")[0],o=document.getElementsByClassName("bear__mouth")[0];this.list.forEach((function(i){e.sentencesArray.forEach((function(e){e.order===i.Order&&(e.CorrectValue=i.CorrectValue,e.IsCorrect=i.IsCorrect)})),1===i.Order&&(t.style.background=e.colors[i.Order-1].color,r.style.background=e.colors[i.Order-1].color),2===i.Order&&(n.style.background=e.colors[i.Order-1].color),3===i.Order&&(o.style.background=e.colors[i.Order-1].color)}))}else{var i=[],a=[];this.list.forEach((function(e){var t={order:null,value:null,CorrectValue:null,IsCorrect:null};"Option"===e.Metric&&(t.order=e.Order,t.value=e.Value,i.push(t)),"Sentence"===e.Metric&&(t.order=e.Order,t.value=e.Value,a.push(t))})),this.optionsArray=i,this.sentencesArray=a}}},{key:"isIcon",value:function(e){e.value?e.classList.remove("form_input-edit-icon"):e.classList.add("form_input-edit-icon")}},{key:"addColor",value:function(e){this.currentColor&&(e.style.background=this.currentColor)}},{key:"getUserResult",value:function(e,t){this.exerciseDataService.subject.next({Type:"PaintTheBear",Order:this.Order,Data:{Order:t,Value:e}})}},{key:"addActiveClass",value:function(e,t){var r=document.getElementsByClassName("paint-bear-color");Array.from(r).forEach((function(e){e.classList.remove("paint-bear-color-active")})),e.classList.add("paint-bear-color-active"),this.imgSrc=this.resourceLoadsService.getExerciseImage(this.colors[t].bucketImg),this.currentColor=this.colors[t].color,("ontouchstart"in window||navigator.msMaxTouchPoints)&&(this.mouseColorElem.nativeElement.style.display="none")}},{key:"mouseColor",value:function(e){if(!(e.clientX>this.paintBearWrapper.nativeElement.getBoundingClientRect().right)){var t=e.clientX-this.paintBearWrapper.nativeElement.getBoundingClientRect().width,r=e.clientY-this.paintBearWrapper.nativeElement.getBoundingClientRect().height/1.4,n=this.mouseColorElem.nativeElement.getBoundingClientRect().width;this.mouseColorElem.nativeElement.style.left=t+1.5*n+"px",this.mouseColorElem.nativeElement.style.top=r+"px"}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Qb(a.a),i.Qb(c.a))},e.\u0275cmp=i.Kb({type:e,selectors:[["app-paint-the-bear"]],viewQuery:function(e,t){var r;1&e&&(i.Hc(s,!0),i.Hc(l,!0)),2&e&&(i.rc(r=i.fc())&&(t.mouseColorElem=r.first),i.rc(r=i.fc())&&(t.paintBearWrapper=r.first))},inputs:{isCorrectValues:"isCorrectValues",Order:"Order",list:"list"},features:[i.Ab],decls:23,vars:8,consts:[[1,"d-flex","justify-content-between"],[1,"left-wrapper","big-f-size"],["class","paint-bear__options-wrapper",4,"ngIf"],["class","paint-bear__sentences-wrapper",4,"ngIf"],[1,"paint-bear-wrapper","right_wapper",3,"mousemove","touchmove"],["paintBearWrapper",""],[1,"paint-the-bear-container","d-flex"],[1,"paint-the-bear-wrapper","m-auto",3,"click"],[1,"bear","bear_colors","bear_square"],[1,"bear__ears","bear_colors","left_ear","bear_triangle",3,"click"],[1,"bear__ears","bear_colors","right_ear","bear_triangle",3,"click"],[1,"bear__eyes","left_eye"],[1,"eyes__eyeball"],[1,"bear__eyes","right_eye"],[1,"bear__mouth","bear_colors","bear_circle",3,"click"],[1,"d-flex","align-items-center"],[1,"paint-bear-colors-wrapper","d-flex"],[1,"bucket-img-wrapper"],[1,"bucket__img",3,"src"],["class","paint-bear-color",3,"background","click",4,"ngFor","ngForOf"],[1,"mouse-color"],["mouseColorElem",""],[1,"paint-bear__options-wrapper"],["class","paint-bear__option-container d-flex align-items-center",4,"ngFor","ngForOf"],[1,"paint-bear__option-container","d-flex","align-items-center"],[1,"paint-bear__option"],[1,"paint-bear__options-figure","bear_colors","d-flex"],[1,"options-figure","m-auto"],[1,"paint-bear__sentences-wrapper"],["class","paint-bear__inputs-container d-flex align-items-center justify-content-end",4,"ngFor","ngForOf"],[1,"paint-bear__inputs-container","d-flex","align-items-center","justify-content-end"],[1,"paint-bear__options-text",3,"innerHTML"],[1,"form_input-wrapper","paint-bear__input-wrapper"],["type","text",1,"form_input","form_input-edit-icon","exercise-one-answers__input","text-center","big-f-size",3,"disabled","value","input"],[1,"paint-bear__options-figure"],[1,"paint-bear-color",3,"click"]],template:function(e,t){1&e&&(i.Wb(0,"div",0),i.Wb(1,"div",1),i.Cc(2,u,2,1,"div",2),i.Cc(3,p,2,1,"div",3),i.Vb(),i.Wb(4,"div",4,5),i.ec("mousemove",(function(e){return t.mouseColor(e)}))("touchmove",(function(e){return t.mouseColor(e)})),i.Wb(6,"div",6),i.Wb(7,"div",7),i.ec("click",(function(e){return t.addColor(e.target)})),i.Rb(8,"div",8),i.Wb(9,"div",9),i.ec("click",(function(e){return t.addColor(e.target)})),i.Vb(),i.Wb(10,"div",10),i.ec("click",(function(e){return t.addColor(e.target)})),i.Vb(),i.Wb(11,"div",11),i.Rb(12,"div",12),i.Vb(),i.Wb(13,"div",13),i.Rb(14,"div",12),i.Vb(),i.Wb(15,"div",14),i.ec("click",(function(e){return t.addColor(e.target)})),i.Vb(),i.Vb(),i.Vb(),i.Wb(16,"div",15),i.Wb(17,"div",16),i.Wb(18,"div",17),i.Rb(19,"img",18),i.Vb(),i.Cc(20,g,1,2,"div",19),i.Vb(),i.Vb(),i.Rb(21,"div",20,21),i.Vb(),i.Vb()),2&e&&(i.Cb(2),i.kc("ngIf",t.optionsArray),i.Cb(1),i.kc("ngIf",t.sentencesArray),i.Cb(16),i.kc("src",t.imgSrc,i.xc),i.Cb(1),i.kc("ngForOf",t.colors),i.Cb(1),i.Bc("background",t.currentColor,i.Jb),i.Gb("mouse-color_border",t.currentColor))},directives:[n.j,n.i],styles:['[_nghost-%COMP%]{width:90%;margin:auto}.left-wrapper[_ngcontent-%COMP%]{width:50%;margin-right:3vw}.paint-bear__options-wrapper[_ngcontent-%COMP%]{width:65%;margin-bottom:2vh}.paint-bear__option[_ngcontent-%COMP%]{border-radius:100px;padding:1vh 2vw;text-align:center;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;margin:1vh 1vw 1vh 0;background:#be9a02;width:70%}.paint-bear__options-figure[_ngcontent-%COMP%]{border-radius:50%;width:3.5vw;height:3.5vw;position:relative}.paint-bear__option-container[_ngcontent-%COMP%]:first-child   .paint-bear__options-figure[_ngcontent-%COMP%]   .options-figure[_ngcontent-%COMP%]{width:0;height:0;border-left:1.3vh solid transparent;border-right:1.3vh solid transparent;border-bottom:1.2vw solid #e3b86e}.paint-bear__option-container[_ngcontent-%COMP%]:nth-child(2)   .paint-bear__options-figure[_ngcontent-%COMP%]   .options-figure[_ngcontent-%COMP%]{width:1vw;height:1vw;background:#dfb05e;pointer-events:none}.paint-bear__option-container[_ngcontent-%COMP%]:nth-child(3)   .paint-bear__options-figure[_ngcontent-%COMP%]   .options-figure[_ngcontent-%COMP%]{width:1.2vw;height:1.2vw;border-radius:50%;background:#e3b86e}.paint-bear__inputs-container[_ngcontent-%COMP%]{margin-top:1vh;margin-bottom:1vh}.paint-bear__inputs-container[_ngcontent-%COMP%]:last-child{margin-bottom:0}.paint-bear__options-text[_ngcontent-%COMP%]{display:inline-block;margin-right:1vw}.paint-bear__input-wrapper[_ngcontent-%COMP%]{margin-right:1vw;max-width:15vw}.paint-bear-wrapper[_ngcontent-%COMP%]{width:25vw;height:10%}.paint-the-bear-container[_ngcontent-%COMP%]{background:#f2f2f2;border-radius:3vh;padding:3vw 1vw 1vw;margin-bottom:2vh}.paint-the-bear-wrapper[_ngcontent-%COMP%]{position:relative;width:14vw;height:14vw}.bear_colors[_ngcontent-%COMP%]{background:#f5e6cc;border:.1vw solid #bc8425}.bear[_ngcontent-%COMP%], .bear__ears[_ngcontent-%COMP%], .bear__mouth[_ngcontent-%COMP%]{transition:background .2s}.bear[_ngcontent-%COMP%]{border-radius:50%;width:100%;height:100%;position:relative;z-index:2;cursor:pointer}.bear[_ngcontent-%COMP%]:before{left:45%;top:7%}.bear__ears[_ngcontent-%COMP%]{position:absolute;top:-15%;z-index:1;border-radius:50%;width:34%;height:34%;cursor:pointer}.bear__ears[_ngcontent-%COMP%]:before{left:27%;top:30%}.left_ear[_ngcontent-%COMP%]{left:0}.right_ear[_ngcontent-%COMP%]{right:0}.bear__eyes[_ngcontent-%COMP%]{background:#fff;border:.1vw solid #bc8425;border-radius:50%;width:15%;height:25%;position:absolute;top:25%;z-index:3;pointer-events:none}.left_eye[_ngcontent-%COMP%]{left:25%}.right_eye[_ngcontent-%COMP%]{right:25%}.eyes__eyeball[_ngcontent-%COMP%]{height:45%;background:#000;border-radius:50%;bottom:15%}.bear__mouth[_ngcontent-%COMP%], .eyes__eyeball[_ngcontent-%COMP%]{width:50%;position:absolute;left:25%}.bear__mouth[_ngcontent-%COMP%]{height:20%;border-radius:0 0 50% 50%/0 0 100% 100%;top:65%;z-index:3;cursor:pointer}.bear__mouth[_ngcontent-%COMP%]:before{left:calc(50% - .7vw);top:15%}.paint-bear-colors-wrapper[_ngcontent-%COMP%]{background:#dad8d9;padding:1vw 1.5vw;border-radius:10vh;margin:auto}.bucket-img-wrapper[_ngcontent-%COMP%], .paint-bear-color[_ngcontent-%COMP%]{width:3vw;height:3vw;margin-right:1vw}.paint-bear-color[_ngcontent-%COMP%]:last-child{margin-right:0}.bucket__img[_ngcontent-%COMP%]{width:100%;height:100%}.paint-bear-color[_ngcontent-%COMP%]{border-radius:50%;cursor:pointer}.paint-bear-color-active[_ngcontent-%COMP%]{border:.3vw solid #4d4d4d}.mouse-color[_ngcontent-%COMP%]{padding:1vh;position:absolute;z-index:5}.mouse-color_border[_ngcontent-%COMP%]{border:.1vw solid #fff}.bear_triangle[_ngcontent-%COMP%]:before{content:"";position:absolute;width:0;height:0;border-left:1vw solid transparent;border-right:1vw solid transparent;border-bottom:1.5vw solid #e3b86e;pointer-events:none;opacity:.5}.bear_circle[_ngcontent-%COMP%]:before, .bear_square[_ngcontent-%COMP%]:before{content:"";position:absolute;width:1.5vw;height:1.5vw;background:#e3b86e;pointer-events:none;opacity:.5}.bear_circle[_ngcontent-%COMP%]:before{border-radius:50%}']}),e}(),h=function(){var e=function(){function e(t){_classCallCheck(this,e),this.componentFactoryResolver=t}return _createClass(e,[{key:"resolveComponent",value:function(){return this.componentFactoryResolver.resolveComponentFactory(_)}}]),e}();return e.\u0275mod=i.Ob({type:e}),e.\u0275inj=i.Nb({factory:function(t){return new(t||e)(i.ac(i.j))},imports:[[n.b,o.n]]}),e}()}}]);