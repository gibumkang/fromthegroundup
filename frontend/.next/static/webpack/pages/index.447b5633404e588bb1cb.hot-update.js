webpackHotUpdate_N_E("pages/index",{

/***/ "./components/email/email.styles.js":
/*!******************************************!*\
  !*** ./components/email/email.styles.js ***!
  \******************************************/
/*! exports provided: HeroBackground, Message, Form, FormContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeroBackground\", function() { return HeroBackground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormContainer\", function() { return FormContainer; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/global */ \"./styles/global.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tdisplay: flex;\\n\\tgap: 5rem;\\n\\t.name {\\n\\t\\tflex: 1;\\n\\t}\\n\\t.email {\\n\\t\\tflex: 1.75;\\n\\t}\\n\\t.submit-button {\\n\\t\\tflex: 1;\\n\\t}\\n\\t& > div {\\n\\t\\tinput {\\n\\t\\t\\tpadding: 0.75rem;\\n\\t\\t\\tmargin-right: 1rem;\\n\\t\\t\\twidth: 100%;\\n\\t\\t}\\n\\t\\tbutton {\\n\\t\\t\\tbackground: #f84f49;\\n\\t\\t\\tpadding: 1.2rem 3rem;\\n\\t\\t\\tfont-weight: bold;\\n\\t\\t\\tcolor: #fff;\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\tborder: 0;\\n\\t\\t}\\n\\t}\\n\\t@media screen and (max-width: \", \") {\\n\\t\\tdisplay: block;\\n\\t\\t& > div {\\n\\t\\t\\tinput {\\n\\t\\t\\t\\tmargin-right: 0;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\twidth: 100%;\\n\\tposition: absolute;\\n\\tbottom: 0;\\n\\tleft: 0;\\n\\ttext-align: center;\\n\\tbackground: rgba(0, 0, 0, 0.5);\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tmax-width: 70rem;\\n\\ttext-align: center;\\n\\tmargin: 0 auto;\\n\\tposition: absolute;\\n\\tleft: 50%;\\n\\ttop: 50%;\\n\\ttransform: translate(-50%, -50%);\\n\\t@media screen and (max-width: \", \") {\\n\\t\\ttop: 10%;\\n\\t\\ttransform: translate(-50%, 0%);\\n\\t}\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tbackground: #eee;\\n\\twidth: 100vw;\\n\\theight: 100vh;\\n\\tposition: relative;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar HeroBackground = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_styles_global__WEBPACK_IMPORTED_MODULE_2__[\"FullWidth\"])(_templateObject());\nvar Message = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2(), function (props) {\n  return props.theme.smWidth;\n});\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nvar FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form(_templateObject4(), function (props) {\n  return props.theme.smWidth;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbWFpbC9lbWFpbC5zdHlsZXMuanM/ODQ5ZCJdLCJuYW1lcyI6WyJIZXJvQmFja2dyb3VuZCIsInN0eWxlZCIsIkdTIiwiTWVzc2FnZSIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzbVdpZHRoIiwiRm9ybSIsIkZvcm1Db250YWluZXIiLCJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxjQUFjLEdBQUdDLGlFQUFNLENBQUNDLHdEQUFELENBQVQsbUJBQXBCO0FBT0EsSUFBTUMsT0FBTyxHQUFHRix5REFBTSxDQUFDRyxHQUFWLHFCQVFhLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBdkI7QUFBQSxDQVJiLENBQWI7QUFjQSxJQUFNQyxJQUFJLEdBQUdQLHlEQUFNLENBQUNHLEdBQVYsb0JBQVY7QUFTQSxJQUFNSyxhQUFhLEdBQUdSLHlEQUFNLENBQUNTLElBQVYscUJBMkJPLFVBQUNMLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBdkI7QUFBQSxDQTNCUCxDQUFuQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZW1haWwvZW1haWwuc3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBHUyBmcm9tICcuLi8uLi9zdHlsZXMvZ2xvYmFsJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5leHBvcnQgY29uc3QgSGVyb0JhY2tncm91bmQgPSBzdHlsZWQoR1MuRnVsbFdpZHRoKWBcblx0YmFja2dyb3VuZDogI2VlZTtcblx0d2lkdGg6IDEwMHZ3O1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5leHBvcnQgY29uc3QgTWVzc2FnZSA9IHN0eWxlZC5kaXZgXG5cdG1heC13aWR0aDogNzByZW07XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogNTAlO1xuXHR0b3A6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zbVdpZHRofSkge1xuXHRcdHRvcDogMTAlO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IEZvcm0gPSBzdHlsZWQuZGl2YFxuXHR3aWR0aDogMTAwJTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQuZm9ybWBcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiA1cmVtO1xuXHQubmFtZSB7XG5cdFx0ZmxleDogMTtcblx0fVxuXHQuZW1haWwge1xuXHRcdGZsZXg6IDEuNzU7XG5cdH1cblx0LnN1Ym1pdC1idXR0b24ge1xuXHRcdGZsZXg6IDE7XG5cdH1cblx0JiA+IGRpdiB7XG5cdFx0aW5wdXQge1xuXHRcdFx0cGFkZGluZzogMC43NXJlbTtcblx0XHRcdG1hcmdpbi1yaWdodDogMXJlbTtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblx0XHRidXR0b24ge1xuXHRcdFx0YmFja2dyb3VuZDogI2Y4NGY0OTtcblx0XHRcdHBhZGRpbmc6IDEuMnJlbSAzcmVtO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Ym9yZGVyOiAwO1xuXHRcdH1cblx0fVxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc21XaWR0aH0pIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHQmID4gZGl2IHtcblx0XHRcdGlucHV0IHtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/email/email.styles.js\n");

/***/ })

})