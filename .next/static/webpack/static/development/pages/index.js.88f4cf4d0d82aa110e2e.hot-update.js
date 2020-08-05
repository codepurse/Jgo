webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
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








var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\Jgo\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var searchOptions = {
  componentRestrictions: {
    country: ["ph"]
  }
};
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
    _this.clickBox = _this.clickBox.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(index, [{
    key: "clickBox",
    value: function clickBox() {
      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["geocodeByAddress"])(this.state.value1).then(function (results) {
        return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["getLatLng"])(results[0]);
      }).then(function (_ref) {
        var lat = _ref.lat,
            lng = _ref.lng;
        return console.log("Successfully got latitude and longitude", {
          lat: lat,
          lng: lng
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        "class": "container-fluid mainCon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }
      }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, __jsx("div", {
        "class": "container-fluid h-100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "container h-100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row h-100 align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 19
        }
      }, "Book your delivery now!"), __jsx("div", {
        className: "box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
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
          lineNumber: 53,
          columnNumber: 21
        }
      }, function (_ref2) {
        var getInputProps = _ref2.getInputProps,
            suggestions = _ref2.suggestions,
            getSuggestionItemProps = _ref2.getSuggestionItemProps,
            loading = _ref2.loading;
        return __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }
        }, __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
          placeholder: "Pick-up location",
          className: "location-search-input"
        }), {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 27
          }
        })), __jsx("div", {
          className: "autocomplete-dropdown-container",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 27
          }
        }, loading && __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
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
              lineNumber: 89,
              columnNumber: 33
            }
          }), __jsx("span", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95,
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
          lineNumber: 103,
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
            lineNumber: 115,
            columnNumber: 25
          }
        }, __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
          placeholder: "Pick-up location",
          className: "location-search-input"
        }), {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 27
          }
        })), __jsx("div", {
          className: "autocomplete-dropdown-container",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 27
          }
        }, loading && __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123,
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
              lineNumber: 139,
              columnNumber: 33
            }
          }), __jsx("span", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 35
            }
          }, suggestion.description));
        })));
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/index",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
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
          lineNumber: 155,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZWFyY2hPcHRpb25zIiwiY29tcG9uZW50UmVzdHJpY3Rpb25zIiwiY291bnRyeSIsImluZGV4IiwicHJvcHMiLCJ2YWx1ZSIsInNldFN0YXRlIiwidmFsdWUxIiwic3RhdGUiLCJjbGlja0JveCIsImJpbmQiLCJnZW9jb2RlQnlBZGRyZXNzIiwidGhlbiIsInJlc3VsdHMiLCJnZXRMYXRMbmciLCJsYXQiLCJsbmciLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU2VsZWN0IiwiZ2V0SW5wdXRQcm9wcyIsInN1Z2dlc3Rpb25zIiwiZ2V0U3VnZ2VzdGlvbkl0ZW1Qcm9wcyIsImxvYWRpbmciLCJwbGFjZWhvbGRlciIsImNsYXNzTmFtZSIsIm1hcCIsInN1Z2dlc3Rpb24iLCJhY3RpdmUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImN1cnNvciIsImRlc2NyaXB0aW9uIiwiaGFuZGxlQ2hhbmdlMSIsImhhbmRsZVNlbGVjdDEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUc7QUFDcEJDLHVCQUFxQixFQUFFO0FBQUVDLFdBQU8sRUFBRSxDQUFDLElBQUQ7QUFBWDtBQURILENBQXRCO0FBS08sSUFBTUMsS0FBYjtBQUFBOztBQUFBOztBQUNFLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQix1TkFRSixVQUFDQyxLQUFELEVBQVc7QUFDeEIsWUFBS0MsUUFBTCxDQUFjO0FBQUVELGFBQUssRUFBTEE7QUFBRixPQUFkO0FBQ0QsS0FWa0I7O0FBQUEsd05BWUgsVUFBQ0UsTUFBRCxFQUFZO0FBQzFCLFlBQUtELFFBQUwsQ0FB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OiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuODhmNGNmNGQwZDgyYWExMTBlMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgZ2VvY29kZUJ5QWRkcmVzcywgZ2V0TGF0TG5nIH0gZnJvbSBcInJlYWN0LXBsYWNlcy1hdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IFBsYWNlc0F1dG9jb21wbGV0ZSBmcm9tIFwicmVhY3QtcGxhY2VzLWF1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBNYXAgZnJvbSBcIi4vbWFwXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvY29uZmlnXCI7XHJcblxyXG5jb25zdCBzZWFyY2hPcHRpb25zID0ge1xyXG4gIGNvbXBvbmVudFJlc3RyaWN0aW9uczogeyBjb3VudHJ5OiBbXCJwaFwiXSB9LFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBpbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyB2YWx1ZTogXCJcIiB9O1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWUxOiBcIlwiIH07XHJcbiAgICB0aGlzLmNsaWNrQm94ID0gdGhpcy5jbGlja0JveC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlMSA9ICh2YWx1ZTEpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTEgfSk7XHJcbiAgfTtcclxuXHJcbiAgY2xpY2tCb3goKSB7XHJcbiAgICBnZW9jb2RlQnlBZGRyZXNzKHRoaXMuc3RhdGUudmFsdWUxKVxyXG4gICAgICAudGhlbigocmVzdWx0cykgPT4gZ2V0TGF0TG5nKHJlc3VsdHNbMF0pKVxyXG4gICAgICAudGhlbigoeyBsYXQsIGxuZyB9KSA9PlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGdvdCBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlXCIsIHsgbGF0LCBsbmcgfSlcclxuICAgICAgKTtcclxuXHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBtYWluQ29uXCI+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgaC0xMDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaC0xMDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFRpdGxlXCI+Qm9vayB5b3VyIGRlbGl2ZXJ5IG5vdyE8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5oYW5kbGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hPcHRpb25zPXtzZWFyY2hPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRJbnB1dFByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U3VnZ2VzdGlvbkl0ZW1Qcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRJbnB1dFByb3BzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUGljay11cCBsb2NhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwibG9jYXRpb24tc2VhcmNoLWlucHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlLWRyb3Bkb3duLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBzdWdnZXN0aW9uLmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzdWdnZXN0aW9uLWl0ZW0tLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInN1Z2dlc3Rpb24taXRlbVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmxpbmUgc3R5bGUgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN1Z2dlc3Rpb24uYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmFmYWZhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRTdWdnZXN0aW9uSXRlbVByb3BzKHN1Z2dlc3Rpb24sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImlucHV0LXN1Z2dlc3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3VnZ2VzdGlvbi5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGxhY2VzQXV0b2NvbXBsZXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlMX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5oYW5kbGVTZWxlY3QxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VhcmNoT3B0aW9ucz17c2VhcmNoT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0SW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFN1Z2dlc3Rpb25JdGVtUHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlBpY2stdXAgbG9jYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImxvY2F0aW9uLXNlYXJjaC1pbnB1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZS1kcm9wZG93bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gc3VnZ2VzdGlvbi5hY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic3VnZ2VzdGlvbi1pdGVtLS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzdWdnZXN0aW9uLWl0ZW1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5saW5lIHN0eWxlIGZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBzdWdnZXN0aW9uLmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZhZmFmYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0U3VnZ2VzdGlvbkl0ZW1Qcm9wcyhzdWdnZXN0aW9uLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJpbnB1dC1zdWdnZXN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N1Z2dlc3Rpb24uZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1BsYWNlc0F1dG9jb21wbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU1VCTUlUXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xpY2tCb3h9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==