(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0lCM":function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),r=i("e+uH"),o=i("qiFC"),s=i("tyNb"),a=i("mrSG"),c=i("fXoL"),l=i("l5mm"),b=i("pLZG"),d=i("Kj3r"),h=i("tk/3"),g=i("TznM"),u=i("5eHb"),p=i("XCOF"),f=i("lGQG"),_=i("vlHM"),m=i("91IU"),v=i("UKFO"),w=i("IUgt"),x=i("G1Gu");const k=["optionsBlock"],C=["continueButton"],O=["scrollbar"],y=["renderContainer"];function M(e,t){if(1&e&&(c.Wb(0,"div",33),c.Wb(1,"p",34),c.Dc(2," Dificuldade "),c.Vb(),c.Rb(3,"img",35),c.Vb()),2&e){const e=c.hc(2);c.Cb(3),c.kc("src",e.resourceLoadsService.getDifficultyImage(e.levelHeader.Difficulty+""),c.xc)}}function T(e,t){if(1&e&&(c.Ub(0),c.Wb(1,"div",11),c.Wb(2,"div",12),c.Wb(3,"div",13),c.Wb(4,"div",14),c.Rb(5,"img",15),c.Vb(),c.Wb(6,"div",16),c.Wb(7,"div",17),c.Wb(8,"div",18),c.Rb(9,"img",19),c.Vb(),c.Wb(10,"div",20),c.Rb(11,"app-progress-bar",21),c.Vb(),c.Vb(),c.Wb(12,"div",22),c.Wb(13,"p",23),c.Dc(14),c.Vb(),c.Wb(15,"p",24),c.Dc(16),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(17,"div",25),c.Wb(18,"div",26),c.Cc(19,M,4,1,"div",27),c.Wb(20,"div",28),c.Wb(21,"p",29),c.Dc(22," Nota curso "),c.Vb(),c.Rb(23,"img",30),c.Vb(),c.Vb(),c.Wb(24,"div",31),c.Wb(25,"p",32),c.Dc(26," Nota curso "),c.Vb(),c.Rb(27,"img",30),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Tb()),2&e){const e=c.hc();c.Cb(5),c.kc("src",e.resourceLoadsService.getLevelBadgeImage(e.levelHeader.LevelNumber+""),c.xc),c.Cb(4),c.kc("src",e.resourceLoadsService.getTypeImage(e.levelHeader.IntroType),c.xc),c.Cb(2),c.kc("value",e.levelHeader.Progress),c.Cb(3),c.Fc(" ",e.levelHeader.LevelName," "),c.Cb(2),c.Fc(" ",e.levelHeader.SubLevelName," "),c.Cb(2),c.Gb("no-header__difficulty",!e.levelHeader.Difficulty),c.Cb(1),c.kc("ngIf",e.levelHeader.Difficulty),c.Cb(4),c.kc("src",e.resourceLoadsService.getNumberImage(e.levelHeader.CourseGrade,!1),c.xc),c.Cb(4),c.kc("src",e.resourceLoadsService.getNumberImage(e.levelHeader.LevelGrade+"",!1),c.xc)}}const P=function(e,t,i,n){return{height:e,width:t,"margin-top":i,order:n}};function L(e,t){if(1&e&&c.Rb(0,"div",42),2&e){const e=c.hc(2);c.Gb("mx-auto","Center"===e.titleLableText.Alignment)("mr-auto","Left"===e.titleLableText.Alignment)("ml-auto","Right"===e.titleLableText.Alignment),c.kc("ngStyle",c.qc(8,P,e.titleLableText.Height?e.titleLableText.Height+"vh":"initial",e.titleLableText.Width+"%",e.titleLableText.Margin+"vh",e.titleLableText.Order-1))("innerHTML",e.titleLableText.Text,c.wc)}}function V(e,t){if(1&e&&c.Rb(0,"p",44),2&e){const e=t.$implicit;c.Gb("mx-auto","Center"===e.Alignment)("mr-auto","Left"===e.Alignment)("ml-auto","Right"===e.Alignment),c.kc("ngStyle",c.qc(8,P,e.Height?e.Height+"vh":"initial",e.Width+"%",e.Margin+"vh",e.Order-1))("innerHTML",e.Text,c.wc)}}function I(e,t){if(1&e&&(c.Ub(0),c.Cc(1,V,1,13,"p",43),c.Tb()),2&e){const e=c.hc(2);c.Cb(1),c.kc("ngForOf",e.optionsData.OptionsText)}}function W(e,t){if(1&e&&(c.Wb(0,"div",45),c.Sb(1,null,46),c.Vb()),2&e){const e=t.$implicit;c.Gb("mx-auto","Center"===e.Alignment)("mr-auto","Left"===e.Alignment)("ml-auto","Right"===e.Alignment),c.kc("ngStyle",c.qc(8,P,e.Height?e.Height+"vh":"initial",e.Width+"%",e.Margin+"vh",e.Order-1)),c.Db("data-Order",e.Order)}}function D(e,t){if(1&e){const e=c.Xb();c.Wb(0,"div",36),c.ec("resize",(function(){return c.vc(e),c.hc().setQuestionContainerHeight()}),!1,c.uc),c.Cc(1,L,1,13,"div",37),c.Wb(2,"ng-scrollbar",null,38),c.Wb(4,"div",39,40),c.Cc(6,I,2,1,"ng-container",6),c.Cc(7,W,3,13,"div",41),c.Vb(),c.Vb(),c.Vb()}if(2&e){const e=c.hc();c.Gb("exercise-wrapper_show",e.isContentVisible),c.Cb(1),c.kc("ngIf",e.titleLableText.Text),c.Cb(5),c.kc("ngIf",e.optionsData.OptionsText.length),c.Cb(1),c.kc("ngForOf",e.renderContainers)}}function H(e,t){if(1&e){const e=c.Xb();c.Wb(0,"div",66),c.ec("click",(function(){return c.vc(e),c.hc(2).seeRightAnswers()})),c.Vb()}}function j(e,t){if(1&e){const e=c.Xb();c.Ub(0),c.Wb(1,"div",47),c.Wb(2,"div",48),c.Wb(3,"div",49),c.Rb(4,"img",50),c.Vb(),c.Wb(5,"div",51),c.Wb(6,"div",52),c.Rb(7,"app-progress-bar",53),c.Vb(),c.Wb(8,"div",54),c.Wb(9,"div",55),c.Wb(10,"p",56),c.Dc(11," Nota do exerc\xedcio "),c.Vb(),c.Rb(12,"img",57),c.Vb(),c.Wb(13,"div",58),c.Wb(14,"p",59),c.Dc(15," Tempo de resposta "),c.Vb(),c.Rb(16,"img",57),c.Vb(),c.Wb(17,"div",60),c.Dc(18," seg "),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(19,"div",61),c.Wb(20,"div",62),c.Wb(21,"div",63),c.Dc(22),c.Vb(),c.Vb(),c.Cc(23,H,1,0,"div",64),c.Wb(24,"div",65),c.ec("click",(function(){return c.vc(e),c.hc().seeRightAnswers()})),c.Vb(),c.Vb(),c.Vb(),c.Tb()}if(2&e){const e=c.hc();c.Cb(1),c.Gb("scale-out-ver-center",!e.isOpenResults),c.Cb(6),c.kc("value",e.feedback.ProgressValue)("difficulty",e.feedback.DifficultyIconList)("isGreen",!0),c.Cb(5),c.kc("src",e.resourceLoadsService.getNumberImage(e.feedback.GradeValue,!1),c.xc),c.Cb(4),c.kc("src",e.resourceLoadsService.getNumberImage(e.feedback.Duration,!1),c.xc),c.Cb(6),c.Fc(" ",e.feedback.ExerciseResultMessage," "),c.Cb(1),c.kc("ngIf",!e.isAllAnswersRight)}}const z=[{path:"**",component:(()=>{class e{constructor(e,t,i,n,r,o,a,c){this.resourceLoadsService=e,this.toastr=t,this.exerciseDataService=i,this.router=n,this.auth=r,this.componentsLoadsService=o,this.compiler=a,this.injector=c,this.isBlockContinueButton=!0,this.isAllAnswersRight=!1,this.renderContainers=[],this.renderCount=0,this.saveInstance={},this.titleLableText={Text:null,Width:null,Height:null,Alignment:null,Margin:null,Order:null},this.optionsData={OptionsText:[]};const l=this.router.url,d=l.slice(l.indexOf("t/")+2);this.routerSubscription=n.events.pipe(Object(b.a)(e=>e instanceof s.a)).subscribe(e=>{this.getExercise(+d)})}ngOnInit(){const e=(new h.e).append("Username","tiago.rodrigues").append("Password",btoa("password")),t=this.auth.login(e).subscribe(e=>this.getheader(),e=>{this.toastr.error(e.error.error_description,"Oh no !"),console.error(e),t.unsubscribe()})}getheader(){this.resourceLoadsService.getExercise().then(e=>{this.levelHeader=e.LevelHeader}).catch(e=>{console.error(e),this.toastr.error("Header is not available","Error")})}loadComponent(e,t){return Object(a.a)(this,void 0,void 0,(function*(){try{const i=yield this.componentsLoadsService[e.Type](),n=i[Object.keys(i)[1]],r=(yield this.compiler.compileModuleAsync(n)).create(this.injector),o=r.instance.resolveComponent();setTimeout(()=>{const{instance:i}=this.containers.toArray()[t].createComponent(o,null,r.injector);i.list=e.CustomizeItemList,i.Order=e.Order,i.IsHorizontal=e.IsHorizontal,this.saveInstance[e.Type+e.Order]=i;try{i.ngOnChanges(),i.ngOnInit(),i.ngAfterViewInit()}catch(n){}},0)}catch(i){console.error(i)}}))}getResult(){if(this.saveresults)return this.feedback=this.saveresults,void(this.isOpenResults=!0);this.exerciseDataService.subject.next("getdata"),this.exerciseDataService.resultSubject.pipe(Object(d.a)(500)).subscribe(e=>{this.checkDataLength()!==e.length&&(e=this.noUserAnswer(e)),console.log(e),this.resourceLoadsService.exerciseResult(this.exerciseId,e).then(e=>{this.saveresults=e,this.feedback=e,this.isOpenResults=!0,e.ProgressValue>=100&&(this.isAllAnswersRight=!0)}).catch(e=>{this.toastr.error("Exercise answer is not available","Error"),this.isBlockContinueButton=!1,console.log(e)})})}seeRightAnswers(){this.isOpenResults=!1,this.saveresults.CorrectBlocks.forEach(e=>{this.getoptions(e,!0)}),setTimeout(()=>{this.feedback=null},300)}clearExerciseData(){this.isOptions=null;for(const e in this.optionsData)this.optionsData.hasOwnProperty(e)&&"object"==typeof this.optionsData[e]&&(this.optionsData[e]=[])}noUserAnswer(e){const t={};e.length&&e.forEach(e=>{t[e.Type+e.Order]=!0});for(const i in this.optionsData)this.optionsData.hasOwnProperty(i)&&"object"==typeof this.optionsData[i]&&this.optionsData[i].length&&this.optionsData[i].forEach(i=>{t[i.Type+i.Order]||"Text Label"===i.Type||e.push({ResultValues:[{Order:null,Value:null}],Order:i.Order,Type:i.Type})});return e}checkDataLength(){let e=0;for(const t in this.optionsData)this.optionsData.hasOwnProperty(t)&&"object"==typeof this.optionsData[t]&&this.optionsData[t].length&&(e+=this.optionsData[t].length);return e}getExercise(e){this.resourceLoadsService.getExercisetest(e).then(e=>{console.log(e),this.clearExerciseData(),this.exerciseId=e.ExerciseBlock.ExerciseId,e.ExerciseBlock.OptionBlocks&&(this.isOptions=!0,e.ExerciseBlock.OptionBlocks.forEach(e=>{this.renderContainers.push({Container:null,Order:e.Order,Width:e.Width,Height:e.Height,Alignment:e.Alignment,Margin:e.Margin}),"Text Label"===e.Type&&1===e.Order&&(e.Text=this.setFraction(e.Text),this.titleLableText.Alignment=e.Alignment,this.titleLableText.Height=e.Height,this.titleLableText.Margin=e.Margin,this.titleLableText.Text=e.Text,this.titleLableText.Width=e.Width,this.titleLableText.Order=e.Order,this.renderContainers.shift()),"Text Label"===e.Type&&1!==e.Order&&(e.Text=this.setFraction(e.Text),this.optionsData.OptionsText.push(e)),"Text Label"!==e.Type&&this.getoptions(e,!1)})),this.setQuestionContainerHeight(),this.blockButton()}).catch(e=>{this.toastr.error("Exercise is not available","Error"),console.error(e)})}getoptions(e,t){if("Table"===e.Type&&(e.CustomizeItemList=e.Table),Object.prototype.hasOwnProperty.call(e,"CustomizeItemList")&&e.CustomizeItemList.forEach(e=>{e.Value&&(e.Value=this.setFraction(e.Value))}),t){for(const t in this.saveInstance)if(Object.prototype.hasOwnProperty.call(this.saveInstance,t)&&t===e.Type+e.Order){const n=this.saveInstance[t];try{n.list=e.CorrectValues}catch(i){console.warn(`Error ${e.Type} has no "CustomizeItemList"`)}try{n.isCorrectValues=!0}catch(i){console.warn(`Error ${e.Type} has no "isCorrectValues"`)}try{n.ngOnChanges()}catch(i){console.warn(`Error ${e.Type} has no "ngOnChanges()"`)}}}else this.loadComponent(e,this.renderCount++),this.optionsData[e.Type]=[],this.optionsData[e.Type].push(e)}setFraction(e){if(-1!==e.indexOf("<f>")){const t=[];let i,n=e;for(;-1!==n.indexOf("<f>");){const e=n.slice(n.indexOf("<f>")+3,n.indexOf("/")),r=n.slice(n.indexOf("/")+1,n.indexOf("</f>")),o='<span class="divider_line-height">'+n.slice(0,n.indexOf("<f>"));i=n.slice(n.indexOf("</f>")+4)+"</span>",t.push(o+`\n        <span class='divider ${e.length>r.length?"divider_bottom":"divider_top"} '>\n        <span class="top">${e}</span>\n        <span class="bottom">${r}</span>\n        </span>`),n=n.slice(n.indexOf("</f>")+4)}return t.join("")+i}return e}blockButton(){this.isBlockContinueButton=!1;const e=Object(l.a)(1e3).subscribe(t=>{t>=4&&(this.isBlockContinueButton=!1,e.unsubscribe())})}setQuestionContainerHeight(){this.isContentVisible=!1,setTimeout(()=>{const e=this.optionsBlock.nativeElement.getBoundingClientRect().top,t=this.continueButton.nativeElement.getBoundingClientRect().top;this.scrollbar.nativeElement.style.maxHeight=t-e+"px",this.optionsBlock.nativeElement.style.minHeight=t-e+"px",this.isContentVisible=!0},300)}ngOnDestroy(){try{this.routerSubscription.unsubscribe()}catch(e){}}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(g.a),c.Qb(u.b),c.Qb(p.a),c.Qb(s.b),c.Qb(f.a),c.Qb(_.a),c.Qb(c.i),c.Qb(c.r))},e.\u0275cmp=c.Kb({type:e,selectors:[["app-exercise"]],viewQuery:function(e,t){var i;1&e&&(c.Hc(k,!0),c.Hc(C,!0),c.Hc(O,!0),c.Hc(y,!0,c.O)),2&e&&(c.rc(i=c.fc())&&(t.optionsBlock=i.first),c.rc(i=c.fc())&&(t.continueButton=i.first),c.rc(i=c.fc())&&(t.scrollbar=i.first),c.rc(i=c.fc())&&(t.containers=i))},decls:13,vars:5,consts:[[1,"navigation-wrapper"],[1,"navigation-wrapper__logo-container"],["routerLink","/",1,"navigation-wrapper__logo-link"],["src","/assets/Images/Logo/clever.png","alt","CleverMee",1,"navigation-wrapper__logo-img"],[1,"navigation-wrapper__home-img-wrapper"],["src","/assets/Images/Icons/home-ico.png","alt","CleverMee",1,"navigation-wrapper__home-img"],[4,"ngIf"],["class","exercise-wrapper",3,"exercise-wrapper_show","resize",4,"ngIf"],["appClick","",1,"main-navigation-button","exercise-continue-button","big-f-size",3,"click"],["continueButton",""],[1,"exercise-tooltip"],[1,"wrap"],[1,"header-wrapper","d-flex","justify-content-between","align-items-center","scale-in-ver-center"],[1,"header-left","d-flex"],[1,"header-left__img-wrapper"],[1,"header-left__img",3,"src"],[1,"header-left__right","align-self-center"],[1,"header-left__right-top","d-flex"],[1,"header-left__right-icon-wrapper"],[1,"header-left__right-icon",3,"src"],[1,"header__progress-bar-wapper"],[3,"value"],[1,"header__right-bottom"],[1,"header__level-title","big-f-size"],[1,"header__level-subtitle","main-f-size"],[1,"header-right","d-flex","justify-content-end","main-f-size","text-center"],[1,"header__productivity-wrapper","header-right_container","d-flex","justify-content-between","align-items-center"],["class","header__difficulty productivity_container scale-in-ver-center align-self-stretch d-flex flex-column justify-content-between align-items-center",4,"ngIf"],[1,"header__number-level","productivity_container","align-self-stretch","d-flex","flex-column","justify-content-between","align-items-center"],[1,"header__productivity__title","header__level-number-title"],[1,"header__productivity__number-indicator-img","header-indicator_img",3,"src"],[1,"header__level-number","header-right_container","d-flex","flex-column","justify-content-between","align-items-center"],[1,"header__level-number-title"],[1,"header__difficulty","productivity_container","scale-in-ver-center","align-self-stretch","d-flex","flex-column","justify-content-between","align-items-center"],[1,"header__difficulty-title"],[1,"header__difficulty-img","header-indicator_img",3,"src"],[1,"exercise-wrapper",3,"resize"],["class","exercise__question big-f-size d-flex align-items-center",3,"mx-auto","mr-auto","ml-auto","ngStyle","innerHTML",4,"ngIf"],["scrollbar",""],[1,"exercise__options-wrapper","d-flex","flex-wrap","justify-content-center","align-items-center"],["optionsBlock",""],["class","exercise__render-container d-flex flex-column justify-content-center",3,"mx-auto","mr-auto","ml-auto","ngStyle",4,"ngFor","ngForOf"],[1,"exercise__question","big-f-size","d-flex","align-items-center",3,"ngStyle","innerHTML"],["class","exercise__question big-f-size",3,"mx-auto","mr-auto","ml-auto","ngStyle","innerHTML",4,"ngFor","ngForOf"],[1,"exercise__question","big-f-size",3,"ngStyle","innerHTML"],[1,"exercise__render-container","d-flex","flex-column","justify-content-center",3,"ngStyle"],["renderContainer",""],[1,"feedback-wrapper","main-f-size","scale-in-ver-center"],[1,"feedback-top-wrapper","d-flex","justify-content-between"],[1,"feedback__corect-img-wrapper","feedback-left","align-self-center"],["src","/assets/Images/OtherImages/CorrectBadge.png",1,"feedback__correct-img"],[1,"feedback-right"],[1,"feedback__progress-bar-wrapper"],[3,"value","difficulty","isGreen"],[1,"feedback__indicators","d-flex","justify-content-end"],[1,"feedback__indicator-left","feedback_indicator","d-flex","flex-column","justify-content-between"],[1,"feedback__indicator-title"],[1,"feedback__indicator-img",3,"src"],[1,"feedback__indicator-right","feedback_indicator","d-flex","flex-column","justify-content-between"],[1,"feedback__indicator-title","text-right"],[1,"feedback__indicator-subtitle"],[1,"feedback__bottom-wrapper","d-flex","justify-content-between"],[1,"feedback__bottom-left","d-flex"],[1,"feedback__bottom-text","big-font-size","align-self-center"],["class","feedback__bottom-right feedback__bottom-result-button",3,"click",4,"ngIf"],[1,"feedback__bottom-right","feedback__bottom-button",3,"click"],[1,"feedback__bottom-right","feedback__bottom-result-button",3,"click"]],template:function(e,t){1&e&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"a",2),c.Rb(3,"img",3),c.Vb(),c.Wb(4,"div",4),c.Rb(5,"img",5),c.Vb(),c.Vb(),c.Vb(),c.Cc(6,T,28,10,"ng-container",6),c.Cc(7,D,8,5,"div",7),c.Wb(8,"div",8,9),c.ec("click",(function(){return t.getResult()})),c.Dc(10," Continuar\n"),c.Vb(),c.Cc(11,j,25,9,"ng-container",6),c.Rb(12,"app-tooltip",10)),2&e&&(c.Cb(6),c.kc("ngIf",t.levelHeader),c.Cb(1),c.kc("ngIf",t.isOptions),c.Cb(1),c.Gb("disabled",t.isBlockContinueButton),c.Cb(3),c.kc("ngIf",t.feedback))},directives:[s.e,n.j,m.a,v.a,w.a,x.a,n.i,n.k],styles:[".wrap[_ngcontent-%COMP%]{padding:2vw 2vw 1.2vw}.header-wrapper[_ngcontent-%COMP%]{background:#fef5cd;padding:1.5vw;border-radius:2vh;line-height:1.1}.header-left[_ngcontent-%COMP%]{width:35%}.header-left__img-wrapper[_ngcontent-%COMP%]{width:27%;min-width:80px;margin-right:.8vw}.header-left__right[_ngcontent-%COMP%]{width:60%}.header-left__right-top[_ngcontent-%COMP%]{margin-bottom:.7vh}.header-left__right-icon-wrapper[_ngcontent-%COMP%]{width:1.8vw;min-width:20px;margin-right:.8vw}.header__progress-bar-wapper[_ngcontent-%COMP%]{width:13vw;height:3vh;min-height:20px;margin-top:.2vh}.header__level-title[_ngcontent-%COMP%]{margin-bottom:.3vh}.header-right[_ngcontent-%COMP%]{width:65%;height:13vh;white-space:nowrap}.header-right_container[_ngcontent-%COMP%]{padding:.8vw;border-radius:2vh;margin-left:1vw}.header-right_container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1vh}.header__button[_ngcontent-%COMP%]{width:20%;color:#fff;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.header__button_video[_ngcontent-%COMP%]{background:url(/assets/Images/OtherImages/video.png) no-repeat center bottom .8vw,#11afa9;background-size:40%}.header__button_exersise[_ngcontent-%COMP%]{background:url(/assets/Images/OtherImages/exersise.png) no-repeat center bottom .8vw,#11afa9;background-size:25%}.header-indicator_img[_ngcontent-%COMP%]{height:60%;margin:0 auto}.header__productivity-wrapper[_ngcontent-%COMP%]{background:#ffd2bc;max-width:35%;min-width:220px}.productivity_container[_ngcontent-%COMP%]:first-child{margin-right:1vw}.no-header__difficulty[_ngcontent-%COMP%], .no-header__difficulty[_ngcontent-%COMP%]   .header__number-level[_ngcontent-%COMP%]{width:auto!important}.scale-out-hor-left[_ngcontent-%COMP%]{-webkit-animation:scale-out-hor-left .5s cubic-bezier(.55,.085,.68,.53) both;animation:scale-out-hor-left .5s cubic-bezier(.55,.085,.68,.53) both}@-webkit-keyframes scale-out-hor-left{0%{transform:scaleX(1);transform-origin:0 0;opacity:1}to{transform:scaleX(0);transform-origin:0 0;opacity:1}}@keyframes scale-out-hor-left{0%{transform:scaleX(1);transform-origin:0 0;opacity:1}to{transform:scaleX(0);transform-origin:0 0;opacity:1}}.header__level-number[_ngcontent-%COMP%]{background:#feeb9b}.scale-in-right-course-badge[_ngcontent-%COMP%]{-webkit-animation:scale-in-right-course-badge .5s cubic-bezier(.25,.46,.45,.94) both;animation:scale-in-right-course-badge .5s cubic-bezier(.25,.46,.45,.94) both}.scale-out-right-course-badge[_ngcontent-%COMP%]{-webkit-animation:scale-out-right-course-badge .5s cubic-bezier(.25,.46,.45,.94) both;animation:scale-out-right-course-badge .5s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes scale-in-right-course-badge{0%{width:0}to{width:15%}}@keyframes scale-in-right-course-badge{0%{width:0}to{width:15%}}@-webkit-keyframes scale-out-right-course-badge{0%{width:15%}to{width:0}}@keyframes scale-out-right-course-badge{0%{width:15%}to{width:0}}ng-scrollbar[_ngcontent-%COMP%]{--scrollbar-size:.7vw;--scrollbar-thumb-color:#dbb6e9;--scrollbar-track-color:#eddbf3;--scrollbar-border-radius:100px;width:100%}.exercise__options-wrapper[_ngcontent-%COMP%]{padding-right:1.5vw}.feedback-wrapper[_ngcontent-%COMP%]{background:#feeb9b;width:50%;min-width:650px;padding:1.5vw;border-radius:2vh;position:absolute;top:30%;left:32%;z-index:1}.feedback-top-wrapper[_ngcontent-%COMP%]{margin-bottom:2vh}.feedback__corect-img-wrapper[_ngcontent-%COMP%]{width:39%}.feedback-right[_ngcontent-%COMP%]{width:52%;height:28vh}.feedback__progress-bar-wrapper[_ngcontent-%COMP%]{width:25vw;height:3vh;margin:0 1vw 9vh auto}.feedback_indicator[_ngcontent-%COMP%]{width:-webkit-min-content;width:-moz-min-content;width:min-content}.feedback__indicators[_ngcontent-%COMP%]{height:45%;margin-left:auto;margin-right:2vw;position:relative}.feedback__indicator-left[_ngcontent-%COMP%]{margin-right:2vw}.feedback__indicator-title[_ngcontent-%COMP%]{white-space:nowrap}.feedback__indicator-img[_ngcontent-%COMP%]{-o-object-fit:contain;object-fit:contain;height:65%;margin:5% auto 0}.feedback__indicator-subtitle[_ngcontent-%COMP%]{line-height:1;position:absolute;right:0;bottom:0;transform:translateX(-40%)}.feedback__bottom-wrapper[_ngcontent-%COMP%]{min-height:12vh}.feedback__bottom-left[_ngcontent-%COMP%]{background:#fef5cd;margin-right:1vw;border-radius:2vh;padding:.5vh .5vw;width:100%}.feedback__bottom-text[_ngcontent-%COMP%]{padding:1vh 1vw;line-height:1.2}.feedback__bottom-button[_ngcontent-%COMP%]{background:url(/assets/Images/OtherImages/Continue.png) no-repeat 50%;background-size:contain;width:15%;cursor:pointer}.feedback__bottom-result-button[_ngcontent-%COMP%]{background:url(/assets/Images/OtherImages/result-button.jpeg) no-repeat 50%;background-size:contain;width:15%;margin-right:.5vw;cursor:pointer}.exercise-wrapper[_ngcontent-%COMP%]{position:relative;opacity:0;padding:0 3vw}.exercise-wrapper_show[_ngcontent-%COMP%]{-webkit-animation:show .2s cubic-bezier(.55,.085,.68,.53) both;animation:show .2s cubic-bezier(.55,.085,.68,.53) both}@-webkit-keyframes show{0%{opacity:0}to{opacity:1}}@keyframes show{0%{opacity:0}to{opacity:1}}.exercise__questions-wrapper[_ngcontent-%COMP%]{padding:0 2vw;margin-bottom:.5vh}.number-line-wrapper[_ngcontent-%COMP%]{height:10vh}.scaled-number-line-wrapper[_ngcontent-%COMP%]{height:12vh}.questionImages-img__wrapper[_ngcontent-%COMP%]{width:45%;min-width:350px;padding-left:1vw}.questionImages__img[_ngcontent-%COMP%]{width:100%}.exercise__question[_ngcontent-%COMP%]{line-height:1.1}.exercise__question-link[_ngcontent-%COMP%]{line-height:1.1;color:#49b0a8;text-decoration:underline;transition:opacity .2s}.exercise__question-link[_ngcontent-%COMP%]:active, .exercise__question-link[_ngcontent-%COMP%]:hover{opacity:.7}.exercise-continue-button[_ngcontent-%COMP%]{border:none;background:#92d050;width:20%;position:absolute;right:2vw;bottom:1.5vh}"]}),e})()}];let R=(()=>{class e{}return e.\u0275mod=c.Ob({type:e}),e.\u0275inj=c.Nb({factory:function(t){return new(t||e)},imports:[[s.f.forChild(z)],s.f]}),e})();var B=i("3Pt+"),S=i("nr/b");i.d(t,"ExerciseModule",(function(){return E}));let E=(()=>{class e{}return e.\u0275mod=c.Ob({type:e}),e.\u0275inj=c.Nb({factory:function(t){return new(t||e)},providers:[],imports:[[n.b,r.a,o.a,B.f,B.n,R,S.CourseOngoingPageModule]]}),e})()}}]);