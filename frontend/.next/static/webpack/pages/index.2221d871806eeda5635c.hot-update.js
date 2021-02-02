webpackHotUpdate_N_E("pages/index",{

/***/ "./components/header/header.styles.js":
/*!********************************************!*\
  !*** ./components/header/header.styles.js ***!
  \********************************************/
/*! exports provided: Header, THeader, Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"THeader\", function() { return THeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navigation\", function() { return Navigation; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tbackground: green;\\n\\tpadding: 1.5rem 0rem;\\n\\tdiv {\\n\\t\\tflex: 1;\\n\\t}\\n\\tdiv:nth-child(2) {\\n\\t\\ttext-align: right;\\n\\t\\tul {\\n\\t\\t\\tli {\\n\\t\\t\\t\\tdisplay: inline;\\n\\t\\t\\t\\tpadding: 1rem;\\n\\t\\t\\t\\t&:nth-last-child(1) {\\n\\t\\t\\t\\t\\tpadding: 0;\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tmargin: 0 auto;\\n\\tbackground: none;\\n\\twidth: 100%;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tmargin: 0 auto;\\n\\tbackground: #ccc;\\n\\twidth: 100%;\\n\\tposition: fixed;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n //standard solid header - solid color background\n\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header(_templateObject()); //transparent header - meant for header to blend in with background\n\nvar THeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header(_templateObject2()); //navigation items - aligns right\n\nvar Navigation = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav(_templateObject3());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnN0eWxlcy5qcz82NzVmIl0sIm5hbWVzIjpbIkhlYWRlciIsInN0eWxlZCIsImhlYWRlciIsIlRIZWFkZXIiLCJOYXZpZ2F0aW9uIiwibmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNPLElBQU1BLE1BQU0sR0FBR0MseURBQU0sQ0FBQ0MsTUFBVixtQkFBWixDLENBT1A7O0FBQ08sSUFBTUMsT0FBTyxHQUFHRix5REFBTSxDQUFDQyxNQUFWLG9CQUFiLEMsQ0FNUDs7QUFDTyxJQUFNRSxVQUFVLEdBQUdILHlEQUFNLENBQUNJLEdBQVYsb0JBQWhCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnN0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vL3N0YW5kYXJkIHNvbGlkIGhlYWRlciAtIHNvbGlkIGNvbG9yIGJhY2tncm91bmRcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuXHRtYXJnaW46IDAgYXV0bztcblx0YmFja2dyb3VuZDogI2NjYztcblx0d2lkdGg6IDEwMCU7XG5cdHBvc2l0aW9uOiBmaXhlZDtcbmA7XG5cbi8vdHJhbnNwYXJlbnQgaGVhZGVyIC0gbWVhbnQgZm9yIGhlYWRlciB0byBibGVuZCBpbiB3aXRoIGJhY2tncm91bmRcbmV4cG9ydCBjb25zdCBUSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcblx0bWFyZ2luOiAwIGF1dG87XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdHdpZHRoOiAxMDAlO1xuYDtcblxuLy9uYXZpZ2F0aW9uIGl0ZW1zIC0gYWxpZ25zIHJpZ2h0XG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbiA9IHN0eWxlZC5uYXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJhY2tncm91bmQ6IGdyZWVuO1xuXHRwYWRkaW5nOiAxLjVyZW0gMHJlbTtcblx0ZGl2IHtcblx0XHRmbGV4OiAxO1xuXHR9XG5cdGRpdjpudGgtY2hpbGQoMikge1xuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdHVsIHtcblx0XHRcdGxpIHtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdFx0XHRwYWRkaW5nOiAxcmVtO1xuXHRcdFx0XHQmOm50aC1sYXN0LWNoaWxkKDEpIHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header/header.styles.js\n");

/***/ })

})