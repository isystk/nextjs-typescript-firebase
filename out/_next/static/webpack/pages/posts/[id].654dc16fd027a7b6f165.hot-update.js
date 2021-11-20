webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./src/pages/posts/[id].tsx":
/*!**********************************!*\
  !*** ./src/pages/posts/[id].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_constants_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/constants/url */ \"./src/common/constants/url.ts\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _store_slice_posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/slice/posts */ \"./src/store/slice/posts.ts\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _components_pages_Slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/pages/Slider */ \"./src/components/pages/Slider.tsx\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_widgets_SnsShare__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/widgets/SnsShare */ \"./src/components/widgets/SnsShare.tsx\");\n/* harmony import */ var _components_widgets_Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/widgets/Modal */ \"./src/components/widgets/Modal.tsx\");\n\n\nvar _jsxFileName = \"/Users/iseyoshitaka/github/isystk/nextjs-typescript-firebase/src/pages/posts/[id].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar PostsDetail = function PostsDetail() {\n  _s();\n\n  var _items$id;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      id = _useState[0],\n      setId = _useState[1];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(_store_slice_posts__WEBPACK_IMPORTED_MODULE_6__[\"selectPosts\"]),\n      loading = _useSelector.loading,\n      error = _useSelector.error,\n      items = _useSelector.items; // この部分を追加\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // idがqueryで利用可能になったら処理される\n    if (router.asPath !== router.route) {\n      setId(router.query.id);\n    }\n  }, [router]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (id) dispatch(Object(_store_slice_posts__WEBPACK_IMPORTED_MODULE_6__[\"readPost\"])(id));\n  }, [id]);\n  if (loading) return __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 23\n    }\n  }, \"...loading\");\n  if (error) return __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 21\n    }\n  }, error);\n  var data = ((_items$id = items[id]) === null || _items$id === void 0 ? void 0 : _items$id.data) || {};\n\n  var post = _objectSpread(_objectSpread({}, data), {}, {\n    regist_data_yyyymmdd: data.regist_datetime && moment__WEBPACK_IMPORTED_MODULE_7___default()(data.regist_datetime).format('YYYY/MM/DD HH:mm')\n  });\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: post.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, __jsx(\"nav\", {\n    className: \"breadcrumb\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    href: _common_constants_url__WEBPACK_IMPORTED_MODULE_4__[\"URL\"].HOME,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__[\"FontAwesomeIcon\"], {\n    icon: \"home\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 19\n    }\n  }), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 19\n    }\n  }, \"HOME\")))), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, post && post.title))), __jsx(\"div\", {\n    className: \"entry-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"entry-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, post && post.title), __jsx(\"div\", {\n    className: \"article-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, __jsx(_components_pages_Slider__WEBPACK_IMPORTED_MODULE_10__[\"Slider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, post && lodash__WEBPACK_IMPORTED_MODULE_11__[\"map\"]([post.photo], function (e, index) {\n    return __jsx(\"img\", {\n      alt: \"sample1\",\n      width: \"644\",\n      src: e,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 19\n      }\n    });\n  }))), __jsx(\"div\", {\n    className: \" clearfix\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"entry-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, post && post.description)), __jsx(\"div\", {\n    className: \"clearfix\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"entry-meta\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__[\"FontAwesomeIcon\"], {\n    icon: \"clock\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }), post && post.regist_data_yyyymmdd), __jsx(_components_widgets_SnsShare__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    title: post.title,\n    url: \"\".concat(_common_constants_url__WEBPACK_IMPORTED_MODULE_4__[\"URL\"].POSTS, \"/\").concat(id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  })), __jsx(_components_widgets_Modal__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }, __jsx(_components_widgets_SnsShare__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    title: post.title,\n    url: \"\".concat(_common_constants_url__WEBPACK_IMPORTED_MODULE_4__[\"URL\"].POSTS, \"/\").concat(id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  })));\n}; // /** ここからSSGでビルドする場合の設定 */\n// import fetch from 'node-fetch'\n// const https = require('https')\n// const agent = new https.Agent({\n//   rejectUnauthorized: false,\n// })\n// import { API_ENDPOINT } from '@/common/constants/api'\n// // 投稿IDの一覧を取得\n// export async function getStaticPaths() {\n//   const res = await fetch(API_ENDPOINT.POSTS, { agent })\n//   const posts = await res.json()\n//   const paths = posts.map((post) => `/posts/${post.postId}`)\n//   return { paths, fallback: false }\n// }\n// // 各投稿データを取得\n// export async function getStaticProps({ params }) {\n//   const res = await fetch(`${API_ENDPOINT.POSTS}/${params.id}`, { agent })\n//   const post = await res.json()\n//   return { props: { post: post.data[0] } }\n// }\n// /** ここまでSSGでビルドする場合の設定 */\n\n\n_s(PostsDetail, \"N992CSiELpgvt/Ux40L4We1WPaw=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"], next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c = PostsDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostsDetail);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostsDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3RzLy50c3g/OWFlOCJdLCJuYW1lcyI6WyJQb3N0c0RldGFpbCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFBvc3RzIiwibG9hZGluZyIsImVycm9yIiwiaXRlbXMiLCJ1c2VFZmZlY3QiLCJhc1BhdGgiLCJyb3V0ZSIsInF1ZXJ5IiwicmVhZFBvc3QiLCJkYXRhIiwicG9zdCIsInJlZ2lzdF9kYXRhX3l5eXltbWRkIiwicmVnaXN0X2RhdGV0aW1lIiwibW9tZW50IiwiZm9ybWF0IiwidGl0bGUiLCJVUkwiLCJIT01FIiwiXyIsInBob3RvIiwiZSIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJQT1NUUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFlLEdBQUcsU0FBbEJBLFdBQWtCLEdBQU07QUFBQTs7QUFBQTs7QUFDNUIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRjRCLGtCQUdSQyxzREFBUSxDQUFDLEVBQUQsQ0FIQTtBQUFBLE1BR3JCQyxFQUhxQjtBQUFBLE1BR2pCQyxLQUhpQjs7QUFBQSxxQkFJTUMsK0RBQVcsQ0FBQ0MsOERBQUQsQ0FKakI7QUFBQSxNQUlwQkMsT0FKb0IsZ0JBSXBCQSxPQUpvQjtBQUFBLE1BSVhDLEtBSlcsZ0JBSVhBLEtBSlc7QUFBQSxNQUlKQyxLQUpJLGdCQUlKQSxLQUpJLEVBTTVCOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQSxRQUFJVixNQUFNLENBQUNXLE1BQVAsS0FBa0JY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RCxFQUVtQkksdUQ7OztLQUo5QlIsVztBQXFHU0EsMEVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFVSTCB9IGZyb20gJ0AvY29tbW9uL2NvbnN0YW50cy91cmwnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBzZWxlY3RQb3N0cywgcmVhZFBvc3QgfSBmcm9tICdAL3N0b3JlL3NsaWNlL3Bvc3RzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9wYWdlcy9TbGlkZXInXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBTbnNTaGFyZSBmcm9tICdAL2NvbXBvbmVudHMvd2lkZ2V0cy9TbnNTaGFyZSdcbmltcG9ydCBNb2RhbCBmcm9tICdAL2NvbXBvbmVudHMvd2lkZ2V0cy9Nb2RhbCdcblxuY29uc3QgUG9zdHNEZXRhaWw6IEZDID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgaXRlbXMgfSA9IHVzZVNlbGVjdG9yKHNlbGVjdFBvc3RzKVxuXG4gIC8vIOOBk+OBrumDqOWIhuOCkui/veWKoFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGlk44GMcXVlcnnjgafliKnnlKjlj6/og73jgavjgarjgaPjgZ/jgonlh6bnkIbjgZXjgozjgotcbiAgICBpZiAocm91dGVyLmFzUGF0aCAhPT0gcm91dGVyLnJvdXRlKSB7XG4gICAgICBzZXRJZChyb3V0ZXIucXVlcnkuaWQpXG4gICAgfVxuICB9LCBbcm91dGVyXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpZCkgZGlzcGF0Y2gocmVhZFBvc3QoaWQpKVxuICB9LCBbaWRdKVxuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+Li4ubG9hZGluZzwvcD5cbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+e2Vycm9yfTwvcD5cblxuICBjb25zdCBkYXRhID0gaXRlbXNbaWRdPy5kYXRhIHx8IHt9XG4gIGNvbnN0IHBvc3QgPSB7XG4gICAgLi4uZGF0YSxcbiAgICByZWdpc3RfZGF0YV95eXl5bW1kZDpcbiAgICAgIGRhdGEucmVnaXN0X2RhdGV0aW1lICYmXG4gICAgICBtb21lbnQoZGF0YS5yZWdpc3RfZGF0ZXRpbWUpLmZvcm1hdCgnWVlZWS9NTS9ERCBISDptbScpLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPXtwb3N0LnRpdGxlfT5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICB7XG4gICAgICAgICAgLy88IS0tIOODkeODs+OBj+OBmiAtLT5cbiAgICAgICAgfVxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1VSTC5IT01FfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImhvbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+SE9NRTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+e3Bvc3QgJiYgcG9zdC50aXRsZX08L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cnktaGVhZGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImVudHJ5LXRpdGxlXCI+e3Bvc3QgJiYgcG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1pbWdcIj5cbiAgICAgICAgICAgIDxTbGlkZXI+XG4gICAgICAgICAgICAgIHtwb3N0ICYmXG4gICAgICAgICAgICAgICAgXy5tYXAoW3Bvc3QucGhvdG9dLCAoZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwic2FtcGxlMVwiIHdpZHRoPVwiNjQ0XCIgc3JjPXtlfSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cnktY29udGVudFwiPlxuICAgICAgICAgIDxwPntwb3N0ICYmIHBvc3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5LW1ldGFcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJjbG9ja1wiIC8+XG4gICAgICAgICAge3Bvc3QgJiYgcG9zdC5yZWdpc3RfZGF0YV95eXl5bW1kZH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFNuc1NoYXJlIHRpdGxlPXtwb3N0LnRpdGxlfSB1cmw9e2Ake1VSTC5QT1NUU30vJHtpZH1gfSAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPE1vZGFsPlxuICAgICAgICA8U25zU2hhcmUgdGl0bGU9e3Bvc3QudGl0bGV9IHVybD17YCR7VVJMLlBPU1RTfS8ke2lkfWB9IC8+XG4gICAgICA8L01vZGFsPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbi8vIC8qKiDjgZPjgZPjgYvjgolTU0fjgafjg5Pjg6vjg4njgZnjgovloLTlkIjjga7oqK3lrpogKi9cbi8vIGltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJ1xuLy8gY29uc3QgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpXG4vLyBjb25zdCBhZ2VudCA9IG5ldyBodHRwcy5BZ2VudCh7XG4vLyAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXG4vLyB9KVxuLy8gaW1wb3J0IHsgQVBJX0VORFBPSU5UIH0gZnJvbSAnQC9jb21tb24vY29uc3RhbnRzL2FwaSdcbi8vIC8vIOaKleeov0lE44Gu5LiA6Kan44KS5Y+W5b6XXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSV9FTkRQT0lOVC5QT1NUUywgeyBhZ2VudCB9KVxuLy8gICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcbi8vICAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+IGAvcG9zdHMvJHtwb3N0LnBvc3RJZH1gKVxuLy8gICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cbi8vIH1cbi8vIC8vIOWQhOaKleeov+ODh+ODvOOCv+OCkuWPluW+l1xuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0VORFBPSU5ULlBPU1RTfS8ke3BhcmFtcy5pZH1gLCB7IGFnZW50IH0pXG4vLyAgIGNvbnN0IHBvc3QgPSBhd2FpdCByZXMuanNvbigpXG4vLyAgIHJldHVybiB7IHByb3BzOiB7IHBvc3Q6IHBvc3QuZGF0YVswXSB9IH1cbi8vIH1cbi8vIC8qKiDjgZPjgZPjgb7jgadTU0fjgafjg5Pjg6vjg4njgZnjgovloLTlkIjjga7oqK3lrpogKi9cblxuZXhwb3J0IGRlZmF1bHQgUG9zdHNEZXRhaWxcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts/[id].tsx\n");

/***/ })

})