webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_alex_react_horizontal_scrolling_menu_example_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/useHideBodyScroll */ \"./helpers/useHideBodyScroll/index.ts\");\n/* harmony import */ var _helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/useDrag */ \"./helpers/useDrag.ts\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ \"./node_modules/react-horizontal-scrolling-menu/dist/index.umd.js\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/home/alex/react-horizontal-scrolling-menu/example-nextjs/pages/index.tsx\",\n    _process,\n    _process$env,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\n\n // NOTE: prevent scrolling on main page\n\n // NOTE drag with mouse\n\n // NOTE hide scrollbar in _app.js\n\n\nconst isTest = (_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.NEXT_PUBLIC_IS_TEST;\nconst elemPrefix = 'test';\n\nconst getId = index => \"\".concat(elemPrefix).concat(index);\n\nconst getItems = () => Array(20).fill(0).map((_, ind) => ({\n  id: getId(ind)\n}));\n\nconst onWheel = (apiObj, ev) => {\n  // NOTE: no good standart way to distinguish touchpad scrolling gestures\n  // but can assume that gesture will affect X axis, mouse scroll only Y axis\n  // of if deltaY too small probably is it touchpad\n  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n\n  if (isThouchpad) {\n    ev.stopPropagation();\n    return;\n  }\n\n  if (ev.deltaY < 0) {\n    apiObj.scrollNext();\n  } else if (ev.deltaY > 0) {\n    apiObj.scrollPrev();\n  }\n};\n\nfunction App() {\n  _s();\n\n  const [items] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(getItems);\n  const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]);\n  const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0); // React.useEffect(() => {\n  //   if (items.length < 25) {\n  //     setTimeout(() => {\n  //       const newItems = items.concat(\n  //         Array(5)\n  //           .fill(0)\n  //           .map((_, ind) => ({ id: getId(items.length + ind) }))\n  //       );\n  //       console.log('push new items');\n  //       setItems(newItems);\n  //     }, 3000);\n  //   }\n  // }, [items]);\n\n  const isItemSelected = id => !!selected.find(el => el === id);\n\n  const {\n    dragStart,\n    dragStop,\n    dragMove,\n    dragging\n  } = Object(_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n  const handleDrag = ({\n    scrollContainer\n  }) => ev => dragMove(ev, newPos => {\n    if (scrollContainer.current) {\n      const currentScroll = scrollContainer.current.scrollLeft;\n      scrollContainer.current.scrollLeft = currentScroll + newPos;\n    }\n  });\n\n  const handleItemClick = itemId => ({\n    getItemById,\n    scrollToItem\n  }) => {\n    console.log('item click', itemId);\n\n    if (dragging) {\n      return false;\n    }\n\n    const itemSelected = isItemSelected(itemId);\n    setSelected(currentSelected => itemSelected ? currentSelected.filter(el => el !== itemId) : currentSelected.concat(itemId));\n\n    if (!itemSelected) {\n      var _getItemById, _getItemById$entry;\n\n      // NOTE: center item on select\n      scrollToItem((_getItemById = getItemById(itemId)) === null || _getItemById === void 0 ? void 0 : (_getItemById$entry = _getItemById.entry) === null || _getItemById$entry === void 0 ? void 0 : _getItemById$entry.target, 'smooth', 'center', 'nearest');\n    }\n  };\n\n  const restorePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback((_ref) => {\n    let {\n      scrollContainer\n    } = _ref,\n        rest = Object(_home_alex_react_horizontal_scrolling_menu_example_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"scrollContainer\"]);\n\n    if (scrollContainer.current) {\n      scrollContainer.current.scrollLeft = position;\n    }\n  }, [position]); // eslint-disable-next-line react-hooks/exhaustive-deps\n\n  const savePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(({\n    scrollContainer\n  }) => !!scrollContainer.current && setPosition(scrollContainer.current.scrollLeft), 500), []);\n  const {\n    hideScroll,\n    showScroll\n  } = Object(_helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"example\",\n      style: {\n        height: '200vh',\n        paddingTop: '200px'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onMouseEnter: hideScroll,\n        onMouseLeave: showScroll,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onMouseLeave: dragStop,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"ScrollMenu\"], {\n            LeftArrow: LeftArrow,\n            RightArrow: RightArrow,\n            onInit: restorePosition,\n            onScroll: savePosition,\n            onWheel: onWheel,\n            onMouseDown: () => ev => dragStart(ev),\n            onMouseUp: () => dragStop,\n            onMouseMove: handleDrag,\n            children: items.map(({\n              id\n            }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n              title: id,\n              itemId: id // NOTE: itemId is required for track items\n              ,\n              onClick: handleItemClick(id),\n              selected: isItemSelected(id)\n            }, id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 146,\n              columnNumber: 17\n            }, this))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 131,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"c+pIa2VPxpNyb27OEdP/PlhntNc=\", false, function () {\n  return [_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = App;\n\nfunction LeftArrow() {\n  _s2();\n\n  const {\n    initComplete,\n    isFirstItemVisible,\n    scrollPrev\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]); // NOTE initComplete is a hack for  prevent blinking on init\n  // Can get visibility of item only after it's rendered\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: !initComplete || initComplete && isFirstItemVisible,\n    onClick: () => scrollPrev(isTest ? 'auto' : 'smooth'),\n    children: \"Left\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 169,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(LeftArrow, \"2u9dvBRCES5pVRMXIGOF3Ug5BzY=\");\n\n_c2 = LeftArrow;\n\nfunction RightArrow() {\n  _s3();\n\n  const {\n    initComplete,\n    isLastItemVisible,\n    scrollNext\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: initComplete && isLastItemVisible,\n    onClick: () => scrollNext(isTest ? 'auto' : 'smooth'),\n    children: \"Right\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 183,\n    columnNumber: 5\n  }, this);\n}\n\n_s3(RightArrow, \"PATf83e6EP2QcNJjlk2fI328v74=\");\n\n_c3 = RightArrow;\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    disabled: disabled,\n    onClick: onClick,\n    style: {\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      right: '1%',\n      opacity: disabled ? '0' : '1',\n      userSelect: 'none'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 202,\n    columnNumber: 5\n  }, this);\n}\n\n_c4 = Arrow;\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId\n}) {\n  _s4();\n\n  const visibility = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  const visible = !visibility.initComplete || visibility.initComplete && visibility.isItemVisible(itemId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    onClick: () => onClick(visibility),\n    onKeyDown: ev => {\n      ev.code === 'Enter' && onClick(visibility);\n    },\n    role: \"button\",\n    style: {\n      border: '1px solid',\n      display: 'inline-block',\n      margin: '0 10px',\n      width: '160px',\n      userSelect: 'none'\n    },\n    tabIndex: 0,\n    className: \"card\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 256,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          backgroundColor: visible ? 'transparent' : 'gray'\n        },\n        children: [\"visible: \", JSON.stringify(visible)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 257,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"selected: \", JSON.stringify(!!selected)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 260,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 255,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        backgroundColor: selected ? 'green' : 'bisque',\n        height: '200px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 262,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 239,\n    columnNumber: 5\n  }, this);\n} // TODO: nextjs complains about useLayoutEffect\n\n\n_s4(Card, \"wzCNnUK2b4GmsbLaFyuDONa1PJI=\");\n\n_c5 = Card;\n\nconst Wrapper = () => {\n  _s5();\n\n  const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {\n    setMounted(true);\n  }, []);\n  return mounted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(App, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 280,\n    columnNumber: 20\n  }, undefined) : null;\n};\n\n_s5(Wrapper, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n\n_c6 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c2, \"LeftArrow\");\n$RefreshReg$(_c3, \"RightArrow\");\n$RefreshReg$(_c4, \"Arrow\");\n$RefreshReg$(_c5, \"Card\");\n$RefreshReg$(_c6, \"Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiaXNUZXN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lTX1RFU1QiLCJlbGVtUHJlZml4IiwiZ2V0SWQiLCJpbmRleCIsImdldEl0ZW1zIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImluZCIsImlkIiwib25XaGVlbCIsImFwaU9iaiIsImV2IiwiaXNUaG91Y2hwYWQiLCJNYXRoIiwiYWJzIiwiZGVsdGFYIiwiZGVsdGFZIiwic3RvcFByb3BhZ2F0aW9uIiwic2Nyb2xsTmV4dCIsInNjcm9sbFByZXYiLCJBcHAiLCJpdGVtcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImlzSXRlbVNlbGVjdGVkIiwiZmluZCIsImVsIiwiZHJhZ1N0YXJ0IiwiZHJhZ1N0b3AiLCJkcmFnTW92ZSIsImRyYWdnaW5nIiwidXNlRHJhZyIsImhhbmRsZURyYWciLCJzY3JvbGxDb250YWluZXIiLCJuZXdQb3MiLCJjdXJyZW50IiwiY3VycmVudFNjcm9sbCIsInNjcm9sbExlZnQiLCJoYW5kbGVJdGVtQ2xpY2siLCJpdGVtSWQiLCJnZXRJdGVtQnlJZCIsInNjcm9sbFRvSXRlbSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtU2VsZWN0ZWQiLCJjdXJyZW50U2VsZWN0ZWQiLCJmaWx0ZXIiLCJjb25jYXQiLCJlbnRyeSIsInRhcmdldCIsInJlc3RvcmVQb3NpdGlvbiIsInVzZUNhbGxiYWNrIiwicmVzdCIsInNhdmVQb3NpdGlvbiIsInRocm90dGxlIiwiaGlkZVNjcm9sbCIsInNob3dTY3JvbGwiLCJ1c2VIaWRlQm9keVNjcm9sbCIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJMZWZ0QXJyb3ciLCJSaWdodEFycm93IiwiaW5pdENvbXBsZXRlIiwiaXNGaXJzdEl0ZW1WaXNpYmxlIiwidXNlQ29udGV4dCIsIlZpc2liaWxpdHlDb250ZXh0IiwiaXNMYXN0SXRlbVZpc2libGUiLCJBcnJvdyIsImNoaWxkcmVuIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiY3Vyc29yIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInJpZ2h0Iiwib3BhY2l0eSIsInVzZXJTZWxlY3QiLCJDYXJkIiwidGl0bGUiLCJ2aXNpYmlsaXR5IiwidmlzaWJsZSIsImlzSXRlbVZpc2libGUiLCJjb2RlIiwiYm9yZGVyIiwibWFyZ2luIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiV3JhcHBlciIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUlBOztDQUdBOztDQUdBOztBQUVBO0FBRUEsTUFBTUEsTUFBTSxlQUFHQyxPQUFILDZEQUFHLFNBQVNDLEdBQVosaURBQUcsYUFBY0MsbUJBQTdCO0FBSUEsTUFBTUMsVUFBVSxHQUFHLE1BQW5COztBQUNBLE1BQU1DLEtBQUssR0FBSUMsS0FBRCxjQUFzQkYsVUFBdEIsU0FBbUNFLEtBQW5DLENBQWQ7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLE1BQ2ZDLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLENBRFIsRUFFR0MsR0FGSCxDQUVPLENBQUNDLENBQUQsRUFBSUMsR0FBSixNQUFhO0FBQUVDLElBQUUsRUFBRVIsS0FBSyxDQUFDTyxHQUFEO0FBQVgsQ0FBYixDQUZQLENBREY7O0FBS0EsTUFBTUUsT0FBTyxHQUFHLENBQ2RDLE1BRGMsRUFFZEMsRUFGYyxLQUdMO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0gsRUFBRSxDQUFDSSxNQUFaLE1BQXdCLENBQXhCLElBQTZCRixJQUFJLENBQUNDLEdBQUwsQ0FBU0gsRUFBRSxDQUFDSyxNQUFaLElBQXNC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QUFBLDhCQUNFO0FBQUEsa0JBQU1FO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxhQUFLLEVBQUU7QUFBRVEseUJBQWUsRUFBRU4sT0FBTyxHQUFHLGFBQUgsR0FBbUI7QUFBN0MsU0FBWjtBQUFBLGdDQUNZTyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsT0FBZixDQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBS0U7QUFBQSxpQ0FBZ0JPLElBQUksQ0FBQ0MsU0FBTCxDQUFlLENBQUMsQ0FBQ3JFLFFBQWpCLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRixlQXVCRTtBQUNFLFdBQUssRUFBRTtBQUNMbUUsdUJBQWUsRUFBRW5FLFFBQVEsR0FBRyxPQUFILEdBQWEsUUFEakM7QUFFTHNDLGNBQU0sRUFBRTtBQUZIO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdDRCxDLENBRUQ7OztJQXBEU29CLEk7O01BQUFBLEk7O0FBcURULE1BQU1ZLE9BQU8sR0FBRyxNQUFNO0FBQUE7O0FBQ3BCLFFBQU0sQ0FBQ0MsT0FBRCxFQUFVQyxVQUFWLElBQXdCMUUsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBOUI7QUFFQUQsOENBQUssQ0FBQzJFLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQkQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBRkQsRUFFRyxFQUZIO0FBSUEsU0FBT0QsT0FBTyxnQkFBRyxxRUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUFhLElBQTNCO0FBQ0QsQ0FSRDs7SUFBTUQsTzs7TUFBQUEsTztBQVVTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xuXG4vLyBOT1RFOiBwcmV2ZW50IHNjcm9sbGluZyBvbiBtYWluIHBhZ2VcbmltcG9ydCB1c2VIaWRlQm9keVNjcm9sbCBmcm9tICcuLi9oZWxwZXJzL3VzZUhpZGVCb2R5U2Nyb2xsJztcblxuLy8gTk9URSBkcmFnIHdpdGggbW91c2VcbmltcG9ydCB1c2VEcmFnIGZyb20gJy4uL2hlbHBlcnMvdXNlRHJhZyc7XG5cbi8vIE5PVEUgaGlkZSBzY3JvbGxiYXIgaW4gX2FwcC5qc1xuXG5pbXBvcnQgeyBTY3JvbGxNZW51LCBWaXNpYmlsaXR5Q29udGV4dCB9IGZyb20gJ3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUnO1xuXG5jb25zdCBpc1Rlc3QgPSBwcm9jZXNzPy5lbnY/Lk5FWFRfUFVCTElDX0lTX1RFU1Q7XG5cbnR5cGUgc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUgPSBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgVmlzaWJpbGl0eUNvbnRleHQ+O1xuXG5jb25zdCBlbGVtUHJlZml4ID0gJ3Rlc3QnO1xuY29uc3QgZ2V0SWQgPSAoaW5kZXg6IG51bWJlcikgPT4gYCR7ZWxlbVByZWZpeH0ke2luZGV4fWA7XG5cbmNvbnN0IGdldEl0ZW1zID0gKCkgPT5cbiAgQXJyYXkoMjApXG4gICAgLmZpbGwoMClcbiAgICAubWFwKChfLCBpbmQpID0+ICh7IGlkOiBnZXRJZChpbmQpIH0pKTtcblxuY29uc3Qgb25XaGVlbCA9IChcbiAgYXBpT2JqOiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSxcbiAgZXY6IFJlYWN0LldoZWVsRXZlbnRcbik6IHZvaWQgPT4ge1xuICAvLyBOT1RFOiBubyBnb29kIHN0YW5kYXJ0IHdheSB0byBkaXN0aW5ndWlzaCB0b3VjaHBhZCBzY3JvbGxpbmcgZ2VzdHVyZXNcbiAgLy8gYnV0IGNhbiBhc3N1bWUgdGhhdCBnZXN0dXJlIHdpbGwgYWZmZWN0IFggYXhpcywgbW91c2Ugc2Nyb2xsIG9ubHkgWSBheGlzXG4gIC8vIG9mIGlmIGRlbHRhWSB0b28gc21hbGwgcHJvYmFibHkgaXMgaXQgdG91Y2hwYWRcbiAgY29uc3QgaXNUaG91Y2hwYWQgPSBNYXRoLmFicyhldi5kZWx0YVgpICE9PSAwIHx8IE1hdGguYWJzKGV2LmRlbHRhWSkgPCAxNTtcblxuICBpZiAoaXNUaG91Y2hwYWQpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZXYuZGVsdGFZIDwgMCkge1xuICAgIGFwaU9iai5zY3JvbGxOZXh0KCk7XG4gIH0gZWxzZSBpZiAoZXYuZGVsdGFZID4gMCkge1xuICAgIGFwaU9iai5zY3JvbGxQcmV2KCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2l0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlKGdldEl0ZW1zKTtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIC8vIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKGl0ZW1zLmxlbmd0aCA8IDI1KSB7XG4gIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgICAgY29uc3QgbmV3SXRlbXMgPSBpdGVtcy5jb25jYXQoXG4gIC8vICAgICAgICAgQXJyYXkoNSlcbiAgLy8gICAgICAgICAgIC5maWxsKDApXG4gIC8vICAgICAgICAgICAubWFwKChfLCBpbmQpID0+ICh7IGlkOiBnZXRJZChpdGVtcy5sZW5ndGggKyBpbmQpIH0pKVxuICAvLyAgICAgICApO1xuICAvLyAgICAgICBjb25zb2xlLmxvZygncHVzaCBuZXcgaXRlbXMnKTtcbiAgLy8gICAgICAgc2V0SXRlbXMobmV3SXRlbXMpO1xuICAvLyAgICAgfSwgMzAwMCk7XG4gIC8vICAgfVxuICAvLyB9LCBbaXRlbXNdKTtcblxuICBjb25zdCBpc0l0ZW1TZWxlY3RlZCA9IChpZDogc3RyaW5nKTogYm9vbGVhbiA9PlxuICAgICEhc2VsZWN0ZWQuZmluZCgoZWwpID0+IGVsID09PSBpZCk7XG5cbiAgY29uc3QgeyBkcmFnU3RhcnQsIGRyYWdTdG9wLCBkcmFnTW92ZSwgZHJhZ2dpbmcgfSA9IHVzZURyYWcoKTtcblxuICBjb25zdCBoYW5kbGVEcmFnID1cbiAgICAoeyBzY3JvbGxDb250YWluZXIgfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+XG4gICAgKGV2OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PlxuICAgICAgZHJhZ01vdmUoZXYsIChuZXdQb3MpID0+IHtcbiAgICAgICAgaWYgKHNjcm9sbENvbnRhaW5lci5jdXJyZW50KSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudFNjcm9sbCA9IHNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQ7XG4gICAgICAgICAgc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IGN1cnJlbnRTY3JvbGwgKyBuZXdQb3M7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUl0ZW1DbGljayA9XG4gICAgKGl0ZW1JZDogc3RyaW5nKSA9PlxuICAgICh7IGdldEl0ZW1CeUlkLCBzY3JvbGxUb0l0ZW0gfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdpdGVtIGNsaWNrJywgaXRlbUlkKTtcbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBpdGVtU2VsZWN0ZWQgPSBpc0l0ZW1TZWxlY3RlZChpdGVtSWQpO1xuXG4gICAgICBzZXRTZWxlY3RlZCgoY3VycmVudFNlbGVjdGVkOiBzdHJpbmdbXSkgPT5cbiAgICAgICAgaXRlbVNlbGVjdGVkXG4gICAgICAgICAgPyBjdXJyZW50U2VsZWN0ZWQuZmlsdGVyKChlbCkgPT4gZWwgIT09IGl0ZW1JZClcbiAgICAgICAgICA6IGN1cnJlbnRTZWxlY3RlZC5jb25jYXQoaXRlbUlkKVxuICAgICAgKTtcblxuICAgICAgaWYgKCFpdGVtU2VsZWN0ZWQpIHtcbiAgICAgICAgLy8gTk9URTogY2VudGVyIGl0ZW0gb24gc2VsZWN0XG4gICAgICAgIHNjcm9sbFRvSXRlbShcbiAgICAgICAgICBnZXRJdGVtQnlJZChpdGVtSWQpPy5lbnRyeT8udGFyZ2V0LFxuICAgICAgICAgICdzbW9vdGgnLFxuICAgICAgICAgICdjZW50ZXInLFxuICAgICAgICAgICduZWFyZXN0J1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG5cbiAgY29uc3QgcmVzdG9yZVBvc2l0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHsgc2Nyb2xsQ29udGFpbmVyLCAuLi5yZXN0IH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PiB7XG4gICAgICBpZiAoc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQpIHtcbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHBvc2l0aW9uO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3Bvc2l0aW9uXVxuICApO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgY29uc3Qgc2F2ZVBvc2l0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgdGhyb3R0bGUoXG4gICAgICAoeyBzY3JvbGxDb250YWluZXIgfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+XG4gICAgICAgICEhc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQgJiZcbiAgICAgICAgc2V0UG9zaXRpb24oc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCksXG4gICAgICA1MDBcbiAgICApLFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3QgeyBoaWRlU2Nyb2xsLCBzaG93U2Nyb2xsIH0gPSB1c2VIaWRlQm9keVNjcm9sbCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiIHN0eWxlPXt7IGhlaWdodDogJzIwMHZoJywgcGFkZGluZ1RvcDogJzIwMHB4JyB9fT5cbiAgICAgICAgPGRpdiBvbk1vdXNlRW50ZXI9e2hpZGVTY3JvbGx9IG9uTW91c2VMZWF2ZT17c2hvd1Njcm9sbH0+XG4gICAgICAgICAgPGRpdiBvbk1vdXNlTGVhdmU9e2RyYWdTdG9wfT5cbiAgICAgICAgICAgIDxTY3JvbGxNZW51XG4gICAgICAgICAgICAgIExlZnRBcnJvdz17TGVmdEFycm93fVxuICAgICAgICAgICAgICBSaWdodEFycm93PXtSaWdodEFycm93fVxuICAgICAgICAgICAgICBvbkluaXQ9e3Jlc3RvcmVQb3NpdGlvbn1cbiAgICAgICAgICAgICAgb25TY3JvbGw9e3NhdmVQb3NpdGlvbn1cbiAgICAgICAgICAgICAgb25XaGVlbD17b25XaGVlbH1cbiAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IChldikgPT4gZHJhZ1N0YXJ0KGV2KX1cbiAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiBkcmFnU3RvcH1cbiAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZURyYWd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpdGVtcy5tYXAoKHsgaWQgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICB0aXRsZT17aWR9XG4gICAgICAgICAgICAgICAgICBpdGVtSWQ9e2lkfSAvLyBOT1RFOiBpdGVtSWQgaXMgcmVxdWlyZWQgZm9yIHRyYWNrIGl0ZW1zXG4gICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSXRlbUNsaWNrKGlkKX1cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtpc0l0ZW1TZWxlY3RlZChpZCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1Njcm9sbE1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExlZnRBcnJvdygpIHtcbiAgY29uc3QgeyBpbml0Q29tcGxldGUsIGlzRmlyc3RJdGVtVmlzaWJsZSwgc2Nyb2xsUHJldiB9ID1cbiAgICBSZWFjdC51c2VDb250ZXh0KFZpc2liaWxpdHlDb250ZXh0KTtcblxuICAvLyBOT1RFIGluaXRDb21wbGV0ZSBpcyBhIGhhY2sgZm9yICBwcmV2ZW50IGJsaW5raW5nIG9uIGluaXRcbiAgLy8gQ2FuIGdldCB2aXNpYmlsaXR5IG9mIGl0ZW0gb25seSBhZnRlciBpdCdzIHJlbmRlcmVkXG4gIHJldHVybiAoXG4gICAgPEFycm93XG4gICAgICBkaXNhYmxlZD17IWluaXRDb21wbGV0ZSB8fCAoaW5pdENvbXBsZXRlICYmIGlzRmlyc3RJdGVtVmlzaWJsZSl9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxQcmV2KGlzVGVzdCA/ICdhdXRvJyA6ICdzbW9vdGgnKX1cbiAgICA+XG4gICAgICBMZWZ0XG4gICAgPC9BcnJvdz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUmlnaHRBcnJvdygpIHtcbiAgY29uc3QgeyBpbml0Q29tcGxldGUsIGlzTGFzdEl0ZW1WaXNpYmxlLCBzY3JvbGxOZXh0IH0gPVxuICAgIFJlYWN0LnVzZUNvbnRleHQoVmlzaWJpbGl0eUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPEFycm93XG4gICAgICBkaXNhYmxlZD17aW5pdENvbXBsZXRlICYmIGlzTGFzdEl0ZW1WaXNpYmxlfVxuICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsTmV4dChpc1Rlc3QgPyAnYXV0bycgOiAnc21vb3RoJyl9XG4gICAgPlxuICAgICAgUmlnaHRcbiAgICA8L0Fycm93PlxuICApO1xufVxuXG5mdW5jdGlvbiBBcnJvdyh7XG4gIGNoaWxkcmVuLFxuICBkaXNhYmxlZCxcbiAgb25DbGljayxcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIG9uQ2xpY2s6IFZvaWRGdW5jdGlvbjtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgcmlnaHQ6ICcxJScsXG4gICAgICAgIG9wYWNpdHk6IGRpc2FibGVkID8gJzAnIDogJzEnLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2FyZCh7XG4gIG9uQ2xpY2ssXG4gIHNlbGVjdGVkLFxuICB0aXRsZSxcbiAgaXRlbUlkLFxufToge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s6IEZ1bmN0aW9uO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXRlbUlkOiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IHZpc2liaWxpdHkgPSBSZWFjdC51c2VDb250ZXh0KFZpc2liaWxpdHlDb250ZXh0KTtcblxuICBjb25zdCB2aXNpYmxlID1cbiAgICAhdmlzaWJpbGl0eS5pbml0Q29tcGxldGUgfHxcbiAgICAodmlzaWJpbGl0eS5pbml0Q29tcGxldGUgJiYgdmlzaWJpbGl0eS5pc0l0ZW1WaXNpYmxlKGl0ZW1JZCkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayh2aXNpYmlsaXR5KX1cbiAgICAgIG9uS2V5RG93bj17KGV2KSA9PiB7XG4gICAgICAgIGV2LmNvZGUgPT09ICdFbnRlcicgJiYgb25DbGljayh2aXNpYmlsaXR5KTtcbiAgICAgIH19XG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXJnaW46ICcwIDEwcHgnLFxuICAgICAgICB3aWR0aDogJzE2MHB4JyxcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgfX1cbiAgICAgIHRhYkluZGV4PXswfVxuICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj57dGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB2aXNpYmxlID8gJ3RyYW5zcGFyZW50JyA6ICdncmF5JyB9fT5cbiAgICAgICAgICB2aXNpYmxlOiB7SlNPTi5zdHJpbmdpZnkodmlzaWJsZSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PnNlbGVjdGVkOiB7SlNPTi5zdHJpbmdpZnkoISFzZWxlY3RlZCl9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNlbGVjdGVkID8gJ2dyZWVuJyA6ICdiaXNxdWUnLFxuICAgICAgICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIFRPRE86IG5leHRqcyBjb21wbGFpbnMgYWJvdXQgdXNlTGF5b3V0RWZmZWN0XG5jb25zdCBXcmFwcGVyID0gKCkgPT4ge1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG1vdW50ZWQgPyA8QXBwIC8+IDogbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})