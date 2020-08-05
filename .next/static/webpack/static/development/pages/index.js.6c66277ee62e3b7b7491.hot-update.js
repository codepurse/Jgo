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
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-places-autocomplete */ "./node_modules/react-places-autocomplete/dist/index.js");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\Jgo\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



function App() {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      address = _React$useState2[0],
      setAddress = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    lat: null,
    lng: null
  }),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      coordinates = _React$useState4[0],
      setCoordinates = _React$useState4[1];

  var handleSelect = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(value) {
      var results, latLng;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["geocodeByAddress"])(value);

            case 2:
              results = _context.sent;
              _context.next = 5;
              return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["getLatLng"])(results[0]);

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

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default.a, {
    value: address,
    onChange: setAddress,
    onSelect: handleSelect,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, function (_ref2) {
    var getInputProps = _ref2.getInputProps,
        suggestions = _ref2.suggestions,
        getSuggestionItemProps = _ref2.getSuggestionItemProps,
        loading = _ref2.loading;
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, "Latitude: ", coordinates.lat), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, "Longitude: ", coordinates.lng), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
      placeholder: "Type address"
    }), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, loading ? __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 26
      }
    }, "...loading") : null, suggestions.map(function (suggestion) {
      var style = {
        backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
      };
      return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getSuggestionItemProps(suggestion, {
        style: style
      }), {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 19
        }
      }), suggestion.description);
    })));
  }));
}

_s(App, "3tfHOfFsCQ5buIs4iWYNpuYfm3o=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJSZWFjdCIsInVzZVN0YXRlIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJsYXQiLCJsbmciLCJjb29yZGluYXRlcyIsInNldENvb3JkaW5hdGVzIiwiaGFuZGxlU2VsZWN0IiwidmFsdWUiLCJnZW9jb2RlQnlBZGRyZXNzIiwicmVzdWx0cyIsImdldExhdExuZyIsImxhdExuZyIsImdldElucHV0UHJvcHMiLCJzdWdnZXN0aW9ucyIsImdldFN1Z2dlc3Rpb25JdGVtUHJvcHMiLCJsb2FkaW5nIiwicGxhY2Vob2xkZXIiLCJtYXAiLCJzdWdnZXN0aW9uIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhY3RpdmUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtlLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUFBOztBQUFBLHdCQUNFQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQURGO0FBQUE7QUFBQSxNQUNyQkMsT0FEcUI7QUFBQSxNQUNaQyxVQURZOztBQUFBLHlCQUVVSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFDbkRHLE9BQUcsRUFBRSxJQUQ4QztBQUVuREMsT0FBRyxFQUFFO0FBRjhDLEdBQWYsQ0FGVjtBQUFBO0FBQUEsTUFFckJDLFdBRnFCO0FBQUEsTUFFUkMsY0FGUTs7QUFPNUIsTUFBTUMsWUFBWTtBQUFBLGdNQUFHLGlCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0dDLGtGQUFnQixDQUFDRCxLQUFELENBRG5COztBQUFBO0FBQ2JFLHFCQURhO0FBQUE7QUFBQSxxQkFFRUMsMkVBQVMsQ0FBQ0QsT0FBTyxDQUFDLENBQUQsQ0FBUixDQUZYOztBQUFBO0FBRWJFLG9CQUZhO0FBR25CVix3QkFBVSxDQUFDTSxLQUFELENBQVY7QUFDQUYsNEJBQWMsQ0FBQ00sTUFBRCxDQUFkOztBQUptQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaTCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQU9BLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBSUUsTUFBQyxnRUFBRDtBQUNFLFNBQUssRUFBRU4sT0FEVDtBQUVFLFlBQVEsRUFBRUMsVUFGWjtBQUdFLFlBQVEsRUFBRUssWUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0c7QUFBQSxRQUFHTSxhQUFILFNBQUdBLGFBQUg7QUFBQSxRQUFrQkMsV0FBbEIsU0FBa0JBLFdBQWxCO0FBQUEsUUFBK0JDLHNCQUEvQixTQUErQkEsc0JBQS9CO0FBQUEsUUFBdURDLE9BQXZELFNBQXVEQSxPQUF2RDtBQUFBLFdBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWNYLFdBQVcsQ0FBQ0YsR0FBMUIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQWVFLFdBQVcsQ0FBQ0QsR0FBM0IsQ0FGRixFQUlFLHNHQUFXUyxhQUFhLENBQUM7QUFBRUksaUJBQVcsRUFBRTtBQUFmLEtBQUQsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUpGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxPQUFPLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBSCxHQUEyQixJQURyQyxFQUdHRixXQUFXLENBQUNJLEdBQVosQ0FBZ0IsVUFBQUMsVUFBVSxFQUFJO0FBQzdCLFVBQU1DLEtBQUssR0FBRztBQUNaQyx1QkFBZSxFQUFFRixVQUFVLENBQUNHLE1BQVgsR0FBb0IsU0FBcEIsR0FBZ0M7QUFEckMsT0FBZDtBQUlBLGFBQ0Usb0dBQVNQLHNCQUFzQixDQUFDSSxVQUFELEVBQWE7QUFBRUMsYUFBSyxFQUFMQTtBQUFGLE9BQWIsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUNHRCxVQUFVLENBQUNJLFdBRGQsQ0FERjtBQUtELEtBVkEsQ0FISCxDQU5GLENBREQ7QUFBQSxHQUxILENBSkYsQ0FERjtBQXFDRDs7R0FuRHVCekIsRzs7S0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNmM2NjI3N2VlNjJlM2I3Yjc0OTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFBsYWNlc0F1dG9jb21wbGV0ZSwge1xyXG4gIGdlb2NvZGVCeUFkZHJlc3MsXHJcbiAgZ2V0TGF0TG5nXHJcbn0gZnJvbSBcInJlYWN0LXBsYWNlcy1hdXRvY29tcGxldGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29vcmRpbmF0ZXMsIHNldENvb3JkaW5hdGVzXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxuZzogbnVsbFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSBhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2VvY29kZUJ5QWRkcmVzcyh2YWx1ZSk7XHJcbiAgICBjb25zdCBsYXRMbmcgPSBhd2FpdCBnZXRMYXRMbmcocmVzdWx0c1swXSk7XHJcbiAgICBzZXRBZGRyZXNzKHZhbHVlKTtcclxuICAgIHNldENvb3JkaW5hdGVzKGxhdExuZyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICBcclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDxQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICB2YWx1ZT17YWRkcmVzc31cclxuICAgICAgICBvbkNoYW5nZT17c2V0QWRkcmVzc31cclxuICAgICAgICBvblNlbGVjdD17aGFuZGxlU2VsZWN0fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IGdldElucHV0UHJvcHMsIHN1Z2dlc3Rpb25zLCBnZXRTdWdnZXN0aW9uSXRlbVByb3BzLCBsb2FkaW5nIH0pID0+IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPkxhdGl0dWRlOiB7Y29vcmRpbmF0ZXMubGF0fTwvcD5cclxuICAgICAgICAgICAgPHA+TG9uZ2l0dWRlOiB7Y29vcmRpbmF0ZXMubG5nfTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcyh7IHBsYWNlaG9sZGVyOiBcIlR5cGUgYWRkcmVzc1wiIH0pfSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7bG9hZGluZyA/IDxkaXY+Li4ubG9hZGluZzwvZGl2PiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgIHtzdWdnZXN0aW9ucy5tYXAoc3VnZ2VzdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzdWdnZXN0aW9uLmFjdGl2ZSA/IFwiIzQxYjZlNlwiIDogXCIjZmZmXCJcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiB7Li4uZ2V0U3VnZ2VzdGlvbkl0ZW1Qcm9wcyhzdWdnZXN0aW9uLCB7IHN0eWxlIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUGxhY2VzQXV0b2NvbXBsZXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=