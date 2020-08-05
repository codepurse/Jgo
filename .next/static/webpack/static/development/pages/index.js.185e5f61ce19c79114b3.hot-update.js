webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
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









var _s = $RefreshSig$(),
    _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\Jgo\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var searchOptions = {
  componentRestrictions: {
    country: ["ph"]
  }
};

function getCoordinates() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    lag: null
  }),
      setCoordinates = _useState[0];
}

_s(getCoordinates, "zWu3v/u+A39oN4c7DrvILSGs0FM=");

var index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(index, _Component);

  var _super = _createSuper(index);

  function index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, index);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleChange", function (value) {
      _this.setState({
        value: value
      });

      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["geocodeByAddress"])(_this.state.value).then(function (results) {
        return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["getLatLng"])(results[0]);
      }).then(function (_ref) {
        var lat = _ref.lat,
            lng = _ref.lng;
        return setCoordinates(lat);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleChange1", function (value1) {
      _this.setState({
        value1: value1
      });

      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["geocodeByAddress"])(_this.state.value).then(function (results) {
        return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["getLatLng"])(results[0]);
      }).then(function (_ref2) {
        var lat = _ref2.lat,
            lng = _ref2.lng;
        return global.config.place.deliver.dropoff = {
          lat: lat
        };
      }, console.log(global.config.place.deliver.dropoff));
    });

    _this.state = {
      value: ""
    };
    _this.state = {
      value1: ""
    };
    _this.clickBox = _this.clickBox.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(index, [{
    key: "clickBox",
    value: function clickBox() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        "class": "container-fluid mainCon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 7
        }
      }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, __jsx("div", {
        "class": "container-fluid h-100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "container h-100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row h-100 align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 19
        }
      }, "Book your delivery now!"), __jsx("div", {
        className: "box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 19
        }
      }, __jsx(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default.a, {
        value: this.state.value,
        onChange: this.handleChange,
        onSelect: this.handleSelect,
        searchOptions: searchOptions,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
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
            lineNumber: 75,
            columnNumber: 25
          }
        }, __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
          placeholder: "Pick-up location",
          className: "location-search-input"
        }), {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 27
          }
        })), __jsx("div", {
          className: "autocomplete-dropdown-container",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 27
          }
        }, loading && __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
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
              lineNumber: 99,
              columnNumber: 33
            }
          }), __jsx("span", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 35
            }
          }, suggestion.description));
        })));
      }), __jsx(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default.a, {
        value: this.state.value1,
        onChange: this.handleChange1,
        onSelect: this.handleSelect1,
        searchOptions: searchOptions,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
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
            lineNumber: 125,
            columnNumber: 25
          }
        }, __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
          placeholder: "Pick-up location",
          className: "location-search-input"
        }), {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 27
          }
        })), __jsx("div", {
          className: "autocomplete-dropdown-container",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 27
          }
        }, loading && __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133,
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
              lineNumber: 149,
              columnNumber: 33
            }
          }), __jsx("span", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 35
            }
          }, suggestion.description));
        })));
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/map",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 19
        }
      }, __jsx("input", {
        type: "button",
        className: "btnSubmit",
        value: "SUBMIT",
        onClick: this.clickBox,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }
      }))))))));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZWFyY2hPcHRpb25zIiwiY29tcG9uZW50UmVzdHJpY3Rpb25zIiwiY291bnRyeSIsImdldENvb3JkaW5hdGVzIiwidXNlU3RhdGUiLCJsYWciLCJzZXRDb29yZGluYXRlcyIsImluZGV4IiwicHJvcHMiLCJ2YWx1ZSIsInNldFN0YXRlIiwiZ2VvY29kZUJ5QWRkcmVzcyIsInN0YXRlIiwidGhlbiIsInJlc3VsdHMiLCJnZXRMYXRMbmciLCJsYXQiLCJsbmciLCJ2YWx1ZTEiLCJnbG9iYWwiLCJjb25maWciLCJwbGFjZSIsImRlbGl2ZXIiLCJkcm9wb2ZmIiwiY29uc29sZSIsImxvZyIsImNsaWNrQm94IiwiYmluZCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVNlbGVjdCIsImdldElucHV0UHJvcHMiLCJzdWdnZXN0aW9ucyIsImdldFN1Z2dlc3Rpb25JdGVtUHJvcHMiLCJsb2FkaW5nIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJtYXAiLCJzdWdnZXN0aW9uIiwiYWN0aXZlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3IiLCJkZXNjcmlwdGlvbiIsImhhbmRsZUNoYW5nZTEiLCJoYW5kbGVTZWxlY3QxIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ3BCQyx1QkFBcUIsRUFBRTtBQUFFQyxXQUFPLEVBQUUsQ0FBQyxJQUFEO0FBQVg7QUFESCxDQUF0Qjs7QUFJQSxTQUFTQyxjQUFULEdBQTBCO0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUU7QUFDakNDLE9BQUcsRUFBRTtBQUQ0QixHQUFGLENBRFQ7QUFBQSxNQUNqQkMsY0FEaUI7QUFJekI7O0dBSlFILGM7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QVNBLGlCQUNFLG9HQUNNVCxzQkFBc0IsQ0FBQ0ssVUFBRCxFQUFhO0FBQ3JDRixxQkFBUyxFQUFFLGtCQUQwQjtBQUVyQ0ksaUJBQUssRUFBTEE7QUFGcUMsV0FBYixDQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFPRixVQUFVLENBQUNLLFdBQWxCLENBTkYsQ0FERjtBQVVELFNBeEJBLENBRkgsQ0FQRixDQU5EO0FBQUEsT0FOSCxDQW5ERixDQUZGLEVBd0dFLE1BQUMsaURBQUQ7QUFBTSxZQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGlCQUFTLEVBQUMsV0FGWjtBQUdFLGFBQUssRUFBQyxRQUhSO0FBSUUsZUFBTyxFQUFFLEtBQUtoQixRQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0F4R0YsQ0FGRixDQURGLENBREYsQ0FERixDQURGLENBREY7QUE4SEQ7QUEvSkg7O0FBQUE7QUFBQSxFQUEyQm1CLCtDQUEzQjtBQWtLZXRDLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4xODVlNWY2MWNlMTljNzkxMTRiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBnZW9jb2RlQnlBZGRyZXNzLCBnZXRMYXRMbmcgfSBmcm9tIFwicmVhY3QtcGxhY2VzLWF1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgUGxhY2VzQXV0b2NvbXBsZXRlIGZyb20gXCJyZWFjdC1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE1hcCBmcm9tIFwiLi9tYXBcIjtcclxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9jb25maWdcIjtcclxuXHJcbmNvbnN0IHNlYXJjaE9wdGlvbnMgPSB7XHJcbiAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7IGNvdW50cnk6IFtcInBoXCJdIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRDb29yZGluYXRlcygpIHtcclxuICBjb25zdCBbc2V0Q29vcmRpbmF0ZXNdID0gdXNlU3RhdGUgKHtcclxuICAgIGxhZzogbnVsbFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgaW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWU6IFwiXCIgfTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IHZhbHVlMTogXCJcIiB9O1xyXG4gICAgdGhpcy5jbGlja0JveCA9IHRoaXMuY2xpY2tCb3guYmluZCh0aGlzKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSk7XHJcbiAgICBnZW9jb2RlQnlBZGRyZXNzKHRoaXMuc3RhdGUudmFsdWUpXHJcbiAgICAgIC50aGVuKChyZXN1bHRzKSA9PiBnZXRMYXRMbmcocmVzdWx0c1swXSkpXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgICh7IGxhdCwgbG5nIH0pID0+IChzZXRDb29yZGluYXRlcyhsYXQpKSxcclxuICAgICAgICBcclxuICAgICAgKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2UxID0gKHZhbHVlMSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlMSB9KTtcclxuICAgIGdlb2NvZGVCeUFkZHJlc3ModGhpcy5zdGF0ZS52YWx1ZSlcclxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IGdldExhdExuZyhyZXN1bHRzWzBdKSlcclxuICAgICAgLnRoZW4oXHJcbiAgICAgICAgKHsgbGF0LCBsbmcgfSkgPT4gKGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmID0geyBsYXQgfSksXHJcbiAgICAgICAgY29uc29sZS5sb2coZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmYpXHJcbiAgICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY2xpY2tCb3goKSB7fVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIG1haW5Db25cIj5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBoLTEwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGgtMTAwIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVGl0bGVcIj5Cb29rIHlvdXIgZGVsaXZlcnkgbm93ITwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UGxhY2VzQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLmhhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaE9wdGlvbnM9e3NlYXJjaE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldElucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRTdWdnZXN0aW9uSXRlbVByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQaWNrLXVwIGxvY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJsb2NhdGlvbi1zZWFyY2gtaW5wdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtZHJvcGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbnMubWFwKChzdWdnZXN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHN1Z2dlc3Rpb24uYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInN1Z2dlc3Rpb24taXRlbS0tYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwic3VnZ2VzdGlvbi1pdGVtXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlubGluZSBzdHlsZSBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3VnZ2VzdGlvbi5hY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmYWZhZmFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFN1Z2dlc3Rpb25JdGVtUHJvcHMoc3VnZ2VzdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiaW5wdXQtc3VnZ2VzdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdWdnZXN0aW9uLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QbGFjZXNBdXRvY29tcGxldGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWUxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlMX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLmhhbmRsZVNlbGVjdDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hPcHRpb25zPXtzZWFyY2hPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRJbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U3VnZ2VzdGlvbkl0ZW1Qcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRJbnB1dFByb3BzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUGljay11cCBsb2NhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwibG9jYXRpb24tc2VhcmNoLWlucHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlLWRyb3Bkb3duLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBzdWdnZXN0aW9uLmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzdWdnZXN0aW9uLWl0ZW0tLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInN1Z2dlc3Rpb24taXRlbVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmxpbmUgc3R5bGUgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN1Z2dlc3Rpb24uYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmFmYWZhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRTdWdnZXN0aW9uSXRlbVByb3BzKHN1Z2dlc3Rpb24sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImlucHV0LXN1Z2dlc3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3VnZ2VzdGlvbi5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGxhY2VzQXV0b2NvbXBsZXRlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU1VCTUlUXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xpY2tCb3h9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==