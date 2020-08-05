webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/config */ "./components/config.js");
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-places-autocomplete */ "./node_modules/react-places-autocomplete/dist/index.js");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\Jgo\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





function App() {
  _s();

  var _this = this;

  function clickSubmit() {
    console.log("asdsa");
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      address = _React$useState2[0],
      setAddress = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      addressDrop = _React$useState4[0],
      setAddressDrop = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      coordinates = _React$useState6[0],
      setCoordinates = _React$useState6[1];

  var handleSelect = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(value) {
      var results, latLng;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__["geocodeByAddress"])(value);

            case 2:
              results = _context.sent;
              _context.next = 5;
              return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__["getLatLng"])(results[0]);

            case 5:
              latLng = _context.sent;
              setAddress(value);
              setCoordinates(latLng);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSelect(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleSelectDrop = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(value) {
      var results, latLng;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__["geocodeByAddress"])(value);

            case 2:
              results = _context2.sent;
              _context2.next = 5;
              return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__["getLatLng"])(results[0]);

            case 5:
              latLng = _context2.sent;
              setAddress1(value);
              setCoordinates(latLng);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSelectDrop(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    "class": "container-fluid mainCon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("div", {
    "class": "container-fluid h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row h-100 align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "pTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "Book your delivery now!"), __jsx("div", {
    className: "box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: address,
    onChange: setAddress,
    onSelect: handleSelect,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, function (_ref3) {
    var getInputProps = _ref3.getInputProps,
        suggestions = _ref3.suggestions,
        getSuggestionItemProps = _ref3.getSuggestionItemProps,
        loading = _ref3.loading;
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 23
      }
    }, __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
      placeholder: "Type address",
      className: "location-search-input"
    }), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "autocomplete-dropdown-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 25
      }
    }, loading && __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 39
      }
    }, "Loading..."), suggestions.map(function (suggestion) {
      var className = suggestion.active ? "suggestion-item--active" : "suggestion-item"; // inline style for demonstration purpose

      var style = suggestion.active ? {
        backgroundColor: "#fafafa",
        cursor: "pointer"
      } : {
        backgroundColor: "#ffffff",
        cursor: "pointer"
      };
      return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getSuggestionItemProps(suggestion, {
        className: "input-suggestion",
        style: style
      }), {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 31
        }
      }), __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 33
        }
      }, suggestion.description));
    })));
  }), __jsx(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: address,
    onChange: setAddress,
    onSelect: handleSelect,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, function (_ref4) {
    var getInputProps = _ref4.getInputProps,
        suggestions = _ref4.suggestions,
        getSuggestionItemProps = _ref4.getSuggestionItemProps,
        loading = _ref4.loading;
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 23
      }
    }, __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
      placeholder: "Type address",
      className: "location-search-input"
    }), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "autocomplete-dropdown-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 25
      }
    }, loading && __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 39
      }
    }, "Loading..."), suggestions.map(function (suggestion) {
      var className = suggestion.active ? "suggestion-item--active" : "suggestion-item"; // inline style for demonstration purpose

      var style = suggestion.active ? {
        backgroundColor: "#fafafa",
        cursor: "pointer"
      } : {
        backgroundColor: "#ffffff",
        cursor: "pointer"
      };
      return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getSuggestionItemProps(suggestion, {
        className: "input-suggestion",
        style: style
      }), {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 31
        }
      }), __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 33
        }
      }, suggestion.description));
    })));
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/map",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "button",
    className: "btnSubmit",
    value: "SUBMIT",
    onClick: clickSubmit(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  }))))))));
}

_s(App, "WhROiArM0sfK+s04axYHA0PCuUE=");

_c = App;

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJjbGlja1N1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsInVzZVN0YXRlIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJhZGRyZXNzRHJvcCIsInNldEFkZHJlc3NEcm9wIiwibGF0IiwibG5nIiwiY29vcmRpbmF0ZXMiLCJzZXRDb29yZGluYXRlcyIsImhhbmRsZVNlbGVjdCIsInZhbHVlIiwiZ2VvY29kZUJ5QWRkcmVzcyIsInJlc3VsdHMiLCJnZXRMYXRMbmciLCJsYXRMbmciLCJoYW5kbGVTZWxlY3REcm9wIiwic2V0QWRkcmVzczEiLCJnZXRJbnB1dFByb3BzIiwic3VnZ2VzdGlvbnMiLCJnZXRTdWdnZXN0aW9uSXRlbVByb3BzIiwibG9hZGluZyIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwibWFwIiwic3VnZ2VzdGlvbiIsImFjdGl2ZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFlLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUFBOztBQUM1QixXQUFTQyxXQUFULEdBQXVCO0FBQ3JCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0Q7O0FBSDJCLHdCQU1HQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQU5IO0FBQUE7QUFBQSxNQU1yQkMsT0FOcUI7QUFBQSxNQU1YQyxVQU5XOztBQUFBLHlCQU9XSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQVBYO0FBQUE7QUFBQSxNQU9wQkcsV0FQb0I7QUFBQSxNQU9QQyxjQVBPOztBQUFBLHlCQVFVTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFDbkRLLE9BQUcsRUFBRSxJQUQ4QztBQUVuREMsT0FBRyxFQUFF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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jZDFkZjY5ODM4OWE1MTQ4YjVjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvY29uZmlnXCI7XHJcbmltcG9ydCBQbGFjZXNBdXRvY29tcGxldGUsIHtcclxuICBnZW9jb2RlQnlBZGRyZXNzLFxyXG4gIGdldExhdExuZyxcclxufSBmcm9tIFwicmVhY3QtcGxhY2VzLWF1dG9jb21wbGV0ZVwiO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGZ1bmN0aW9uIGNsaWNrU3VibWl0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJhc2RzYVwiKTtcclxuICB9XHJcbiAgXHJcblxyXG4gIGNvbnN0IFthZGRyZXNzLCAgc2V0QWRkcmVzc10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbIGFkZHJlc3NEcm9wLCBzZXRBZGRyZXNzRHJvcF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXMsIHNldENvb3JkaW5hdGVzXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2VvY29kZUJ5QWRkcmVzcyh2YWx1ZSk7XHJcbiAgICBjb25zdCBsYXRMbmcgPSBhd2FpdCBnZXRMYXRMbmcocmVzdWx0c1swXSk7XHJcbiAgICBzZXRBZGRyZXNzKHZhbHVlKTtcclxuICAgIHNldENvb3JkaW5hdGVzKGxhdExuZyk7XHJcbiAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3REcm9wID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2VvY29kZUJ5QWRkcmVzcyh2YWx1ZSk7XHJcbiAgICBjb25zdCBsYXRMbmcgPSBhd2FpdCBnZXRMYXRMbmcocmVzdWx0c1swXSk7XHJcbiAgICBzZXRBZGRyZXNzMSh2YWx1ZSk7XHJcbiAgICBzZXRDb29yZGluYXRlcyhsYXRMbmcpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIG1haW5Db25cIj5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIGgtMTAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoLTEwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFRpdGxlXCI+Qm9vayB5b3VyIGRlbGl2ZXJ5IG5vdyE8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8UGxhY2VzQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0SW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0U3VnZ2VzdGlvbkl0ZW1Qcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiVHlwZSBhZGRyZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwibG9jYXRpb24tc2VhcmNoLWlucHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZS1kcm9wZG93bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gc3VnZ2VzdGlvbi5hY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInN1Z2dlc3Rpb24taXRlbS0tYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInN1Z2dlc3Rpb24taXRlbVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5saW5lIHN0eWxlIGZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3VnZ2VzdGlvbi5hY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZhZmFmYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0U3VnZ2VzdGlvbkl0ZW1Qcm9wcyhzdWdnZXN0aW9uLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiaW5wdXQtc3VnZ2VzdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3VnZ2VzdGlvbi5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L1BsYWNlc0F1dG9jb21wbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgPFBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICAgIGdldElucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgIGdldFN1Z2dlc3Rpb25JdGVtUHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRJbnB1dFByb3BzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlR5cGUgYWRkcmVzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImxvY2F0aW9uLXNlYXJjaC1pbnB1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtZHJvcGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHN1Z2dlc3Rpb24uYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzdWdnZXN0aW9uLWl0ZW0tLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzdWdnZXN0aW9uLWl0ZW1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlubGluZSBzdHlsZSBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN1Z2dlc3Rpb24uYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmYWZhZmFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFN1Z2dlc3Rpb25JdGVtUHJvcHMoc3VnZ2VzdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImlucHV0LXN1Z2dlc3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N1Z2dlc3Rpb24uZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9QbGFjZXNBdXRvY29tcGxldGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTVUJNSVRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrU3VibWl0KCl9XHJcbiAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==