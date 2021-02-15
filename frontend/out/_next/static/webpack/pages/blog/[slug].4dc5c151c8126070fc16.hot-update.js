webpackHotUpdate_N_E("pages/blog/[slug]",{

/***/ "./pages/blog/[slug]/index.js":
/*!************************************!*\
  !*** ./pages/blog/[slug]/index.js ***!
  \************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slug; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _lib_ghost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/ghost */ \"./lib/ghost.js\");\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/hero */ \"./components/hero/index.js\");\n/* harmony import */ var _components_bloggy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/bloggy */ \"./components/bloggy/index.js\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/global */ \"./styles/global.js\");\n\nvar _jsxFileName = \"/Volumes/Ben Drive/From The Ground Up/website/frontend/pages/blog/[slug]/index.js\";\n\n\n\n\n\nvar __N_SSG = true;\nfunction Slug(_ref) {\n  var post = _ref.post;\n\n  var timeConvert = function timeConvert(time) {\n    time = time.slice(0, 10);\n    return time;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      message: post.title,\n      background: \"url('/ftgu-academy-header.jpg')\",\n      postTag: post.tags,\n      postAuthor: post.authors[0].name,\n      createdAt: timeConvert(post.created_at)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_global__WEBPACK_IMPORTED_MODULE_5__[\"MaxContainer\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_bloggy__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        post: post\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 3\n  }, this);\n}\n_c = Slug;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slug\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10vaW5kZXguanM/ODNjNyJdLCJuYW1lcyI6WyJTbHVnIiwicG9zdCIsInRpbWVDb252ZXJ0IiwidGltZSIsInNsaWNlIiwidGl0bGUiLCJ0YWdzIiwiYXV0aG9ycyIsIm5hbWUiLCJjcmVhdGVkX2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsT0FBd0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQ3RDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBVTtBQUM3QkEsUUFBSSxHQUFHQSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFYLEVBQWMsRUFBZCxDQUFQO0FBQ0EsV0FBT0QsSUFBUDtBQUNBLEdBSEQ7O0FBS0Esc0JBQ0MscUVBQUMsaUVBQUQ7QUFBQSw0QkFDQyxxRUFBQyx3REFBRDtBQUNDLGFBQU8sRUFBRUYsSUFBSSxDQUFDSSxLQURmO0FBRUMsZ0JBQVUsbUNBRlg7QUFHQyxhQUFPLEVBQUVKLElBQUksQ0FBQ0ssSUFIZjtBQUlDLGdCQUFVLEVBQUVMLElBQUksQ0FBQ00sT0FBTCxDQUFhLENBQWIsRUFBZ0JDLElBSjdCO0FBS0MsZUFBUyxFQUFFTixXQUFXLENBQUNELElBQUksQ0FBQ1EsVUFBTjtBQUx2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFRQyxxRUFBQywyREFBRDtBQUFBLDZCQUNDLHFFQUFDLDBEQUFEO0FBQVEsWUFBSSxFQUFFUjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFjQTtLQXBCdUJELEkiLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0JztcbmltcG9ydCB7IGdldEF1dGhvciwgZ2V0U2luZ2xlUG9zdCB9IGZyb20gJy4uLy4uLy4uL2xpYi9naG9zdCc7XG5pbXBvcnQgSGVybyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlcm8nO1xuaW1wb3J0IEJsb2dneSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Jsb2dneSc7XG5pbXBvcnQgKiBhcyBHUyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvZ2xvYmFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2x1Zyh7IHBvc3QgfSkge1xuXHRjb25zdCB0aW1lQ29udmVydCA9ICh0aW1lKSA9PiB7XG5cdFx0dGltZSA9IHRpbWUuc2xpY2UoMCwgMTApO1xuXHRcdHJldHVybiB0aW1lO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHRcdDxIZXJvXG5cdFx0XHRcdG1lc3NhZ2U9e3Bvc3QudGl0bGV9XG5cdFx0XHRcdGJhY2tncm91bmQ9e2B1cmwoJy9mdGd1LWFjYWRlbXktaGVhZGVyLmpwZycpYH1cblx0XHRcdFx0cG9zdFRhZz17cG9zdC50YWdzfVxuXHRcdFx0XHRwb3N0QXV0aG9yPXtwb3N0LmF1dGhvcnNbMF0ubmFtZX1cblx0XHRcdFx0Y3JlYXRlZEF0PXt0aW1lQ29udmVydChwb3N0LmNyZWF0ZWRfYXQpfVxuXHRcdFx0Lz5cblx0XHRcdDxHUy5NYXhDb250YWluZXI+XG5cdFx0XHRcdDxCbG9nZ3kgcG9zdD17cG9zdH0gLz5cblx0XHRcdDwvR1MuTWF4Q29udGFpbmVyPlxuXHRcdDwvTGF5b3V0PlxuXHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG5cdHJldHVybiB7XG5cdFx0cGF0aHM6IFtdLFxuXHRcdGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuXHRjb25zdCBwb3N0ID0gYXdhaXQgZ2V0U2luZ2xlUG9zdChjb250ZXh0LnBhcmFtcy5zbHVnKTtcblx0aWYgKCFwb3N0KSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5vdEZvdW5kOiB0cnVlLFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7IHBvc3QgfSxcblx0fTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[slug]/index.js\n");

/***/ })

})