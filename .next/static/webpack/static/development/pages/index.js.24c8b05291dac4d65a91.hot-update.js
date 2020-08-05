webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getvalue, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getvalue", function() { return getvalue; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-places-autocomplete */ "./node_modules/react-places-autocomplete/dist/index.js");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./map */ "./pages/map.js");
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/config */ "./components/config.js");
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_config__WEBPACK_IMPORTED_MODULE_13__);









var _this2 = undefined,
    _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\Jgo\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var searchOptions = {
  componentRestrictions: {
    country: ["ph"]
  }
};
var getvalue = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(getvalue, _Component);

  var _super = _createSuper(getvalue);

  function getvalue(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, getvalue);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleChange", function (value) {
      _this.setState({
        value: value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleChange1", function (value1) {
      _this.setState({
        value1: value1
      });
    });

    _this.state = {
      value: ""
    };
    _this.state = {
      value1: ""
    };
    _this.pickofflat = "";
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(getvalue, [{
    key: "clickBox",
    value: function clickBox() {
      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["geocodeByAddress"])(this.state.value).then(function (results) {
        return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["getLatLng"])(results[0]);
      }).then(function (_ref) {
        var lat = _ref.lat,
            lng = _ref.lng;
        return console.log("Successfully got latitude and longitude", {
          lat: lat,
          lng: lng
        });
      });
      global.config.place.deliver.pickoff = this.state.value;
      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["geocodeByAddress"])(this.state.value1).then(function (results) {
        return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["getLatLng"])(results[0]);
      }).then(function (_ref2) {
        var lat = _ref2.lat,
            lng = _ref2.lng;
        return console.log("Successfully got latitude and longitude", {
          lat: lat,
          lng: lng
        });
      });
      global.config.place.deliver.dropoff = this.state.value1;
    }
  }]);

  return getvalue;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var index = function index() {
  return __jsx("div", {
    "class": "container-fluid mainCon",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("div", {
    "class": "container-fluid h-100",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "container h-100",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row h-100 align-items-center",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "col-lg-6",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "pTitle",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, "Book your delivery now!"), __jsx("div", {
    className: "box",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, __jsx(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default.a, {
    value: _this2.state.value,
    onChange: _this2.handleChange,
    onSelect: _this2.handleSelect,
    searchOptions: searchOptions,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, function (_ref3) {
    var getInputProps = _ref3.getInputProps,
        suggestions = _ref3.suggestions,
        getSuggestionItemProps = _ref3.getSuggestionItemProps,
        loading = _ref3.loading;
    return __jsx("div", {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 25
      }
    }, __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
      placeholder: "Pick-up location",
      className: "location-search-input"
    }), {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 27
      }
    })), __jsx("div", {
      className: "autocomplete-dropdown-container",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 27
      }
    }, loading && __jsx("div", {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 41
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
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 33
        }
      }), __jsx("span", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 35
        }
      }, suggestion.description));
    })));
  }), __jsx(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default.a, {
    value: _this2.state.value1,
    onChange: _this2.handleChange1,
    onSelect: _this2.handleSelect1,
    searchOptions: searchOptions,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, function (_ref4) {
    var getInputProps = _ref4.getInputProps,
        suggestions = _ref4.suggestions,
        getSuggestionItemProps = _ref4.getSuggestionItemProps,
        loading = _ref4.loading;
    return __jsx("div", {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }, __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
      placeholder: "Pick-up location",
      className: "location-search-input"
    }), {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 27
      }
    })), __jsx("div", {
      className: "autocomplete-dropdown-container",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 27
      }
    }, loading && __jsx("div", {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 41
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
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 33
        }
      }), __jsx("span", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 35
        }
      }, suggestion.description));
    })));
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/index",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 19
    }
  }, __jsx("input", {
    type: "button",
    className: "btnSubmit",
    value: "SUBMIT",
    onClick: _this2.clickBox,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZWFyY2hPcHRpb25zIiwiY29tcG9uZW50UmVzdHJpY3Rpb25zIiwiY291bnRyeSIsImdldHZhbHVlIiwicHJvcHMiLCJ2YWx1ZSIsInNldFN0YXRlIiwidmFsdWUxIiwic3RhdGUiLCJwaWNrb2ZmbGF0IiwiZ2VvY29kZUJ5QWRkcmVzcyIsInRoZW4iLCJyZXN1bHRzIiwiZ2V0TGF0TG5nIiwibGF0IiwibG5nIiwiY29uc29sZSIsImxvZyIsImdsb2JhbCIsImNvbmZpZyIsInBsYWNlIiwiZGVsaXZlciIsInBpY2tvZmYiLCJkcm9wb2ZmIiwiQ29tcG9uZW50IiwiaW5kZXgiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTZWxlY3QiLCJnZXRJbnB1dFByb3BzIiwic3VnZ2VzdGlvbnMiLCJnZXRTdWdnZXN0aW9uSXRlbVByb3BzIiwibG9hZGluZyIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwibWFwIiwic3VnZ2VzdGlvbiIsImFjdGl2ZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yIiwiZGVzY3JpcHRpb24iLCJoYW5kbGVDaGFuZ2UxIiwiaGFuZGxlU2VsZWN0MSIsImNsaWNrQm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ3BCQyx1QkFBcUIsRUFBRTtBQUFFQyxXQUFPLEVBQUUsQ0FBQyxJQUFEO0FBQVg7QUFESCxDQUF0QjtBQUlPLElBQU1DLFFBQWI7QUFBQTs7QUFBQTs7QUFDRSxvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsdU5BUUosVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCLFlBQUtDLFFBQUwsQ0FBYztBQUFFRCxhQUFL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QUUsU0FEbkI7QUFFRUMsY0FBTSxFQUFFO0FBRlYsT0FMSjtBQVNBLGFBQ0Usb0dBQ01ULHNCQUFzQixDQUFDSyxVQUFELEVBQWE7QUFDckNGLGlCQUFTLEVBQUUsa0JBRDBCO0FBRXJDSSxhQUFLLEVBQUxBO0FBRnFDLE9BQWIsQ0FENUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBT0YsVUFBVSxDQUFDSyxXQUFsQixDQU5GLENBREY7QUFVRCxLQXhCQSxDQUZILENBUEYsQ0FORDtBQUFBLEdBTkgsQ0FuREYsQ0FGRixFQXdHRSxNQUFDLGlEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFTLEVBQUMsV0FGWjtBQUdFLFNBQUssRUFBQyxRQUhSO0FBSUUsV0FBTyxFQUFFLE1BQUksQ0FBQ0csUUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBeEdGLENBRkYsQ0FERixDQURGLENBREYsQ0FERixDQURGO0FBK0hILENBbklEOztBQXFJZWxCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yNGM4YjA1MjkxZGFjNGQ2NWE5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBnZW9jb2RlQnlBZGRyZXNzLCBnZXRMYXRMbmcgfSBmcm9tIFwicmVhY3QtcGxhY2VzLWF1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgUGxhY2VzQXV0b2NvbXBsZXRlIGZyb20gXCJyZWFjdC1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE1hcCBmcm9tIFwiLi9tYXBcIjtcclxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9jb25maWdcIjtcclxuXHJcbmNvbnN0IHNlYXJjaE9wdGlvbnMgPSB7XHJcbiAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7IGNvdW50cnk6IFtcInBoXCJdIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgZ2V0dmFsdWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWU6IFwiXCIgfTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IHZhbHVlMTogXCJcIiB9O1xyXG4gICAgdGhpcy5waWNrb2ZmbGF0ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNoYW5nZTEgPSAodmFsdWUxKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUxIH0pO1xyXG4gIH07XHJcblxyXG4gIGNsaWNrQm94KCkge1xyXG4gICAgZ2VvY29kZUJ5QWRkcmVzcyh0aGlzLnN0YXRlLnZhbHVlKVxyXG4gICAgICAudGhlbigocmVzdWx0cykgPT4gZ2V0TGF0TG5nKHJlc3VsdHNbMF0pKVxyXG4gICAgICAudGhlbigoeyBsYXQsIGxuZyB9KSA9PlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGdvdCBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlXCIsIHsgbGF0LCBsbmcgfSlcclxuICAgICAgKTtcclxuICBcclxuICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmID0gdGhpcy5zdGF0ZS52YWx1ZTtcclxuICBcclxuICAgIGdlb2NvZGVCeUFkZHJlc3ModGhpcy5zdGF0ZS52YWx1ZTEpXHJcbiAgICAgIC50aGVuKChyZXN1bHRzKSA9PiBnZXRMYXRMbmcocmVzdWx0c1swXSkpXHJcbiAgICAgIC50aGVuKCh7IGxhdCwgbG5nIH0pID0+XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgZ290IGxhdGl0dWRlIGFuZCBsb25naXR1ZGVcIiwgeyBsYXQsIGxuZyB9KVxyXG4gICAgICApO1xyXG4gIFxyXG4gICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmYgPSB0aGlzLnN0YXRlLnZhbHVlMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBtYWluQ29uXCI+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgaC0xMDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaC0xMDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFRpdGxlXCI+Qm9vayB5b3VyIGRlbGl2ZXJ5IG5vdyE8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5oYW5kbGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hPcHRpb25zPXtzZWFyY2hPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRJbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U3VnZ2VzdGlvbkl0ZW1Qcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRJbnB1dFByb3BzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUGljay11cCBsb2NhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwibG9jYXRpb24tc2VhcmNoLWlucHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlLWRyb3Bkb3duLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBzdWdnZXN0aW9uLmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzdWdnZXN0aW9uLWl0ZW0tLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInN1Z2dlc3Rpb24taXRlbVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmxpbmUgc3R5bGUgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN1Z2dlc3Rpb24uYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmFmYWZhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRTdWdnZXN0aW9uSXRlbVByb3BzKHN1Z2dlc3Rpb24sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImlucHV0LXN1Z2dlc3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3VnZ2VzdGlvbi5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGxhY2VzQXV0b2NvbXBsZXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlMX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5oYW5kbGVTZWxlY3QxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VhcmNoT3B0aW9ucz17c2VhcmNoT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0SW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFN1Z2dlc3Rpb25JdGVtUHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlBpY2stdXAgbG9jYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImxvY2F0aW9uLXNlYXJjaC1pbnB1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZS1kcm9wZG93bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gc3VnZ2VzdGlvbi5hY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic3VnZ2VzdGlvbi1pdGVtLS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzdWdnZXN0aW9uLWl0ZW1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5saW5lIHN0eWxlIGZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBzdWdnZXN0aW9uLmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZhZmFmYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0U3VnZ2VzdGlvbkl0ZW1Qcm9wcyhzdWdnZXN0aW9uLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJpbnB1dC1zdWdnZXN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N1Z2dlc3Rpb24uZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1BsYWNlc0F1dG9jb21wbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU1VCTUlUXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xpY2tCb3h9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9