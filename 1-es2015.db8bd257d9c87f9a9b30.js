(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/ng-rating-bar/ng-rating-bar.ngfactory.js":
/*!***************************************************************!*\
  !*** ./node_modules/ng-rating-bar/ng-rating-bar.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: NgRatingBarModuleNgFactory, RenderType_ɵa, View_ɵa_0, View_ɵa_Host_0, ɵaNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgRatingBarModuleNgFactory", function() { return NgRatingBarModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵa", function() { return RenderType_ɵa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵa_0", function() { return View_ɵa_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵa_Host_0", function() { return View_ɵa_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵaNgFactory", function() { return ɵaNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_rating_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-rating-bar */ "./node_modules/ng-rating-bar/fesm2015/ng-rating-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var NgRatingBarModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](ng_rating_bar__WEBPACK_IMPORTED_MODULE_1__["NgRatingBarModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_rating_bar__WEBPACK_IMPORTED_MODULE_1__["NgRatingBarModule"], ng_rating_bar__WEBPACK_IMPORTED_MODULE_1__["NgRatingBarModule"], [])]); });

var styles_ɵa = [".star[_ngcontent-%COMP%]{position:relative}.star[_ngcontent-%COMP%]:not(.half){min-height:20px;min-width:20px;cursor:pointer;display:inline-block}.star.active[_ngcontent-%COMP%]{color:inherit}.star.half[_ngcontent-%COMP%]{height:inherit;font-size:inherit;cursor:pointer;position:absolute;left:0;top:0;display:inline-block;overflow:hidden}"];
var RenderType_ɵa = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵa, data: {} });

function View_ɵa_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "star half"]], [[4, "width", "%"], [4, "color", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\u2605"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.halfValue; var currVal_1 = _co.colorActive; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_ɵa_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 6, "span", [["class", "star"]], [[4, "fontSize", null], [4, "backgroundColor", null], [4, "marginRight", null]], [[null, "mouseenter"], [null, "mouseleave"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = (_co.enter(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } if (("mouseleave" === en)) {
        var pd_1 = (_co.leave(_v.context.index) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.setSelected(_v.context.index) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](4, { "color": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" \u2605 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵa_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _ck(_v, 4, 0, ((_v.context.index <= _co.hoverIndex) ? _co.colorActive : _co.colorDefault)); _ck(_v, 3, 0, currVal_3); var currVal_4 = (!_co.isHovered && (_v.context.index == _co.halfIndex)); _ck(_v, 7, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styles.fontSize; var currVal_1 = _co.styles.backgroundColor; var currVal_2 = _co.styles.margin; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }); }
function View_ɵa_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵa_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.numbers; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ɵa_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-rating-bar", [], null, null, null, View_ɵa_0, RenderType_ɵa)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 638976, null, 0, ng_rating_bar__WEBPACK_IMPORTED_MODULE_1__["ɵa"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵaNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-rating-bar", ng_rating_bar__WEBPACK_IMPORTED_MODULE_1__["ɵa"], View_ɵa_Host_0, { ratingCount: "ratingCount", colorActive: "colorActive", colorDefault: "colorDefault", disabled: "disabled", resetAble: "resetAble", control: "control", styles: "styles", value: "value" }, { valueChange: "valueChange", hoverChange: "hoverChange" }, []);



/***/ }),

/***/ "./src/app/common-blocks/badge-list/badge-list.component.ngfactory.js":
/*!****************************************************************************!*\
  !*** ./src/app/common-blocks/badge-list/badge-list.component.ngfactory.js ***!
  \****************************************************************************/
/*! exports provided: RenderType_BadgeListComponent, View_BadgeListComponent_0, View_BadgeListComponent_Host_0, BadgeListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BadgeListComponent", function() { return RenderType_BadgeListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BadgeListComponent_0", function() { return View_BadgeListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BadgeListComponent_Host_0", function() { return View_BadgeListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeListComponentNgFactory", function() { return BadgeListComponentNgFactory; });
/* harmony import */ var _badge_list_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badge-list.component.sass.shim.ngstyle */ "./src/app/common-blocks/badge-list/badge-list.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _badge_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badge-list.component */ "./src/app/common-blocks/badge-list/badge-list.component.ts");
/* harmony import */ var _services_resource_loads_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/resource-loads.service */ "./src/app/services/resource-loads.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_BadgeListComponent = [_badge_list_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BadgeListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BadgeListComponent, data: {} });

function View_BadgeListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "badge-list__img-wrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["class", "badge-list__img"]], [[8, "src", 4]], [[null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = (_co.open($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseleave" === en)) {
        var pd_1 = (_co.close() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.resourceLoadsService.getAchievementImage(_co.img); _ck(_v, 1, 0, currVal_0); }); }
function View_BadgeListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BadgeListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.img; _ck(_v, 1, 0, currVal_0); }, null); }
function View_BadgeListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-badge-list", [], null, null, null, View_BadgeListComponent_0, RenderType_BadgeListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _badge_list_component__WEBPACK_IMPORTED_MODULE_3__["BadgeListComponent"], [_services_resource_loads_service__WEBPACK_IMPORTED_MODULE_4__["ResourceLoadsService"]], null, null)], null, null); }
var BadgeListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-badge-list", _badge_list_component__WEBPACK_IMPORTED_MODULE_3__["BadgeListComponent"], View_BadgeListComponent_Host_0, { img: "img" }, { openTooltip: "openTooltip", closeTooltip: "closeTooltip" }, []);



/***/ }),

/***/ "./src/app/common-blocks/badge-list/badge-list.component.sass.shim.ngstyle.js":
/*!************************************************************************************!*\
  !*** ./src/app/common-blocks/badge-list/badge-list.component.sass.shim.ngstyle.js ***!
  \************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".badge-list__img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n}\n\n@media screen and (min-width: 2000px) {\n  .badge-list__img[_ngcontent-%COMP%] {\n    width: 6vw;\n  }\n}"];



/***/ }),

/***/ "./src/app/common-blocks/badge-list/badge-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/common-blocks/badge-list/badge-list.component.ts ***!
  \******************************************************************/
/*! exports provided: BadgeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeListComponent", function() { return BadgeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class BadgeListComponent {
    constructor(resourceLoadsService) {
        this.resourceLoadsService = resourceLoadsService;
        this.openTooltip = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeTooltip = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    open(e) {
        this.openTooltip.emit(e.target.getBoundingClientRect());
    }
    close() {
        this.closeTooltip.emit(true);
    }
}


/***/ }),

/***/ "./src/app/common-blocks/number-indicator/number-indicator.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/common-blocks/number-indicator/number-indicator.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: RenderType_NumberIndicatorComponent, View_NumberIndicatorComponent_0, View_NumberIndicatorComponent_Host_0, NumberIndicatorComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NumberIndicatorComponent", function() { return RenderType_NumberIndicatorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NumberIndicatorComponent_0", function() { return View_NumberIndicatorComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NumberIndicatorComponent_Host_0", function() { return View_NumberIndicatorComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberIndicatorComponentNgFactory", function() { return NumberIndicatorComponentNgFactory; });
/* harmony import */ var _number_indicator_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-indicator.component.sass.shim.ngstyle */ "./src/app/common-blocks/number-indicator/number-indicator.component.sass.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _number_indicator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number-indicator.component */ "./src/app/common-blocks/number-indicator/number-indicator.component.ts");
/* harmony import */ var _services_resource_loads_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/resource-loads.service */ "./src/app/services/resource-loads.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_NumberIndicatorComponent = [_number_indicator_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NumberIndicatorComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NumberIndicatorComponent, data: {} });

function View_NumberIndicatorComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["class", "number-indicator__img"]], [[8, "src", 4]], [[null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = (_co.open($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseleave" === en)) {
        var pd_1 = (_co.close() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.resourceLoadsService.getNumberImage(_co.value, _co.color); _ck(_v, 0, 0, currVal_0); }); }
function View_NumberIndicatorComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "number-indicator__img-wrapper d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NumberIndicatorComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.value || (_co.value === 0)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_NumberIndicatorComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-number-indicator", [], null, null, null, View_NumberIndicatorComponent_0, RenderType_NumberIndicatorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 573440, null, 0, _number_indicator_component__WEBPACK_IMPORTED_MODULE_3__["NumberIndicatorComponent"], [_services_resource_loads_service__WEBPACK_IMPORTED_MODULE_4__["ResourceLoadsService"]], null, null)], null, null); }
var NumberIndicatorComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-number-indicator", _number_indicator_component__WEBPACK_IMPORTED_MODULE_3__["NumberIndicatorComponent"], View_NumberIndicatorComponent_Host_0, { value: "value", color: "color", isActive: "isActive" }, { openTooltip: "openTooltip", closeTooltip: "closeTooltip" }, []);



/***/ }),

/***/ "./src/app/common-blocks/number-indicator/number-indicator.component.sass.shim.ngstyle.js":
/*!************************************************************************************************!*\
  !*** ./src/app/common-blocks/number-indicator/number-indicator.component.sass.shim.ngstyle.js ***!
  \************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".number-indicator__img-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.number-indicator__img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n}"];



/***/ }),

/***/ "./src/app/common-blocks/number-indicator/number-indicator.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/common-blocks/number-indicator/number-indicator.component.ts ***!
  \******************************************************************************/
/*! exports provided: NumberIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberIndicatorComponent", function() { return NumberIndicatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class NumberIndicatorComponent {
    constructor(resourceLoadsService) {
        this.resourceLoadsService = resourceLoadsService;
        this.openTooltip = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeTooltip = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges() {
        if (this.value > 100) {
            this.value = 'plus100';
        }
    }
    open(e) {
        this.openTooltip.emit(e.target.getBoundingClientRect());
    }
    close() {
        this.closeTooltip.emit(true);
    }
}


/***/ })

}]);