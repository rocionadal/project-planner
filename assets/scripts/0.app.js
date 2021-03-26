(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/App/Component.js":
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nclass Component {\n  constructor(hostElementId, insertBefore = false) {\n    if (hostElementId) {\n      this.hostElementId = document.getElementById(hostElementId);\n    } else {\n      this.hostElementId = document.body;\n    }\n    this.insertBefore = insertBefore;\n  }\n\n  detach() {\n    if (this.element) {\n      this.element.remove();\n    }\n    // this.element.parentElement.removeChild(this.element); // for older browser support\n  }\n\n  attach() {\n    this.hostElementId.insertAdjacentElement(\n      this.insertBefore ? 'afterbegin' : 'beforeend',\n      this.element\n    );\n  }\n}\n\n//# sourceURL=webpack:///./src/App/Component.js?");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/App/Component.js\");\n\n\nclass Tooltip extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(closeNotifierFunction, text, hostElementId) {\n    super(hostElementId); // if we want to attach the element afterbegin we need to pass an argument, default = at the end\n    this.closeNotifier = closeNotifierFunction;\n    this.text = text;\n    this.closeTooltip = () => {\n      this.detach();\n      this.closeNotifier();\n    };\n    this.create();\n  }\n\n  create() {\n    const tooltipElement = document.createElement('div');\n    tooltipElement.className = 'card';\n    const tooltipTemplate = document.getElementById('tooltip');\n    const tooltipBody = document.importNode(tooltipTemplate.content, true);\n    tooltipBody.querySelector('p').textContent = this.text;\n    tooltipElement.append(tooltipBody);\n\n    const hostElPosLeft = this.hostElementId.offsetLeft;\n    const hostElPosTop = this.hostElementId.offsetTop;\n    const hostElHeight = this.hostElementId.clientHeight;\n    const parentElementScroll = this.hostElementId.parentElement.scrollTop;\n\n    const x = hostElPosLeft + 20;\n    const y = hostElPosTop + hostElHeight - parentElementScroll - 10;\n\n    tooltipElement.style.position = 'absolute';\n    tooltipElement.style.left = x + 'px';\n    tooltipElement.style.top = y + 'px';\n\n    tooltipElement.addEventListener('click', this.closeTooltip);\n    this.element = tooltipElement;\n  }\n}\n\n//# sourceURL=webpack:///./src/App/Tooltip.js?");

/***/ })

}]);