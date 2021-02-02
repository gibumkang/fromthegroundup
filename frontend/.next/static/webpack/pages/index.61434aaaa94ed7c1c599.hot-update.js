webpackHotUpdate_N_E("pages/index",{

/***/ "./components/email/email.styles.js":
/*!******************************************!*\
  !*** ./components/email/email.styles.js ***!
  \******************************************/
/*! exports provided: HeroBackground, Message, Form, FormContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeroBackground\", function() { return HeroBackground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormContainer\", function() { return FormContainer; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/global */ \"./styles/global.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tdisplay: flex;\\n\\tgap: 5rem;\\n\\t.name {\\n\\t\\tflex: 1;\\n\\t}\\n\\t.email {\\n\\t\\tflex: 1.75;\\n\\t}\\n\\t.submit-button {\\n\\t\\tflex: 1;\\n\\t}\\n\\t& > div {\\n\\t\\tinput {\\n\\t\\t\\tbox-sizing: border-box;\\n\\t\\t\\tpadding: 0.75rem;\\n\\t\\t\\tmargin-right: 1rem;\\n\\t\\t\\twidth: 100%;\\n\\t\\t}\\n\\t\\tbutton {\\n\\t\\t\\tbackground: #f84f49;\\n\\t\\t\\tpadding: 1.2rem 3rem;\\n\\t\\t\\tfont-weight: bold;\\n\\t\\t\\tcolor: #fff;\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\tborder: 0;\\n\\t\\t}\\n\\t}\\n\\t@media screen and (max-width: \", \") {\\n\\t\\tdisplay: block;\\n\\t\\t& > div {\\n\\t\\t\\tinput {\\n\\t\\t\\t\\tmargin: 0.5rem 0rem 1.5rem 0rem;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\twidth: 100%;\\n\\tposition: absolute;\\n\\tbottom: 0;\\n\\tleft: 0;\\n\\ttext-align: center;\\n\\tbackground: rgba(0, 0, 0, 0.5);\\n\\tp {\\n\\t\\tcolor: #fff;\\n\\t}\\n\\t@media screen and (max-width: \", \") {\\n\\t\\tbackground: none;\\n\\t}\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tmax-width: 70rem;\\n\\ttext-align: center;\\n\\tmargin: 0 auto;\\n\\tposition: absolute;\\n\\tleft: 50%;\\n\\ttop: 50%;\\n\\ttransform: translate(-50%, -50%);\\n\\t@media screen and (max-width: \", \") {\\n\\t\\ttop: 10%;\\n\\t\\ttransform: translate(-50%, 0%);\\n\\t}\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tbackground: #eee;\\n\\twidth: 100vw;\\n\\theight: 100vh;\\n\\tposition: relative;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar HeroBackground = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_styles_global__WEBPACK_IMPORTED_MODULE_2__[\"FullWidth\"])(_templateObject());\nvar Message = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2(), function (props) {\n  return props.theme.smWidth;\n});\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3(), function (props) {\n  return props.theme.smWidth;\n});\nvar FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form(_templateObject4(), function (props) {\n  return props.theme.smWidth;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbWFpbC9lbWFpbC5zdHlsZXMuanM/ODQ5ZCJdLCJuYW1lcyI6WyJIZXJvQmFja2dyb3VuZCIsInN0eWxlZCIsIkdTIiwiTWVzc2FnZSIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzbVdpZHRoIiwiRm9ybSIsIkZvcm1Db250YWluZXIiLCJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxjQUFjLEdBQUdDLGlFQUFNLENBQUNDLHdEQUFELENBQVQsbUJBQXBCO0FBT0EsSUFBTUMsT0FBTyxHQUFHRix5REFBTSxDQUFDRyxHQUFWLHFCQVFhLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBdkI7QUFBQSxDQVJiLENBQWI7QUFjQSxJQUFNQyxJQUFJLEdBQUdQLHlEQUFNLENBQUNHLEdBQVYscUJBVWdCLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBdkI7QUFBQSxDQVZoQixDQUFWO0FBZUEsSUFBTUUsYUFBYSxHQUFHUix5REFBTSxDQUFDUyxJQUFWLHFCQTRCTyxVQUFDTCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQXZCO0FBQUEsQ0E1QlAsQ0FBbkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL2VtYWlsL2VtYWlsLnN0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgR1MgZnJvbSAnLi4vLi4vc3R5bGVzL2dsb2JhbCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuZXhwb3J0IGNvbnN0IEhlcm9CYWNrZ3JvdW5kID0gc3R5bGVkKEdTLkZ1bGxXaWR0aClgXG5cdGJhY2tncm91bmQ6ICNlZWU7XG5cdHdpZHRoOiAxMDB2dztcblx0aGVpZ2h0OiAxMDB2aDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2UgPSBzdHlsZWQuZGl2YFxuXHRtYXgtd2lkdGg6IDcwcmVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDUwJTtcblx0dG9wOiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc21XaWR0aH0pIHtcblx0XHR0b3A6IDEwJTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmRpdmBcblx0d2lkdGg6IDEwMCU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcblx0cCB7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNtV2lkdGh9KSB7XG5cdFx0YmFja2dyb3VuZDogbm9uZTtcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQuZm9ybWBcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiA1cmVtO1xuXHQubmFtZSB7XG5cdFx0ZmxleDogMTtcblx0fVxuXHQuZW1haWwge1xuXHRcdGZsZXg6IDEuNzU7XG5cdH1cblx0LnN1Ym1pdC1idXR0b24ge1xuXHRcdGZsZXg6IDE7XG5cdH1cblx0JiA+IGRpdiB7XG5cdFx0aW5wdXQge1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdHBhZGRpbmc6IDAuNzVyZW07XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDFyZW07XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cdFx0YnV0dG9uIHtcblx0XHRcdGJhY2tncm91bmQ6ICNmODRmNDk7XG5cdFx0XHRwYWRkaW5nOiAxLjJyZW0gM3JlbTtcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGJvcmRlcjogMDtcblx0XHR9XG5cdH1cblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNtV2lkdGh9KSB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0JiA+IGRpdiB7XG5cdFx0XHRpbnB1dCB7XG5cdFx0XHRcdG1hcmdpbjogMC41cmVtIDByZW0gMS41cmVtIDByZW07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/email/email.styles.js\n");

/***/ })

})