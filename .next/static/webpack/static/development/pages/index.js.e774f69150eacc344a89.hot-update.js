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
    _this.pickofflat = "";
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(index, [{
    key: "clickBox",
    value: function clickBox() {
      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["geocodeByAddress"])(this.state.value).then(function (results) {
        return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["getLatLng"])(results[0]);
      }).then(function (_ref) {
        var lat = _ref.lat,
            lng = _ref.lng;
        return console.log({
          lat: lat,
          lng: lng
        });
      });
      global.config.place.deliver.pickofflat = {
        lat: lat
      };
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
        onSelect: this.handleSelect,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZWFyY2hPcHRpb25zIiwiY29tcG9uZW50UmVzdHJpY3Rpb25zIiwiY291bnRyeSIsImluZGV4IiwicHJvcHMiLCJ2YWx1ZSIsInNldFN0YXRlIiwidmFsdWUxIiwic3RhdGUiLCJjbGlja0JveCIsImJpbmQiLCJwaWNrb2ZmbGF0IiwiZ2VvY29kZUJ5QWRkcmVzcyIsInRoZW4iLCJyZXN1bHRzIiwiZ2V0TGF0TG5nIiwibGF0IiwibG5nIiwiY29uc29sZSIsImxvZyIsImdsb2JhbCIsImNvbmZpZyIsInBsYWNlIiwiZGVsaXZlciIsInBpY2tvZmYiLCJkcm9wb2ZmIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU2VsZWN0IiwiZ2V0SW5wdXRQcm9wcyIsInN1Z2dlc3Rpb25zIiwiZ2V0U3VnZ2VzdGlvbkl0ZW1Qcm9wcyIsImxvYWRpbmciLCJwbGFjZWhvbGRlciIsImNsYXNzTmFtZSIsIm1hcCIsInN1Z2dlc3Rpb24iLCJhY3RpdmUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImN1cnNvciIsImRlc2NyaXB0aW9uIiwiaGFuZGxlQ2hhbmdlMSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUc7QUFDcEJDLHVCQUFxQixFQUFFO0FBQUVDLFdBQU8sRUFBRSxDQUFDLElBQUQ7QUFBWDtBQURILENBQXRCO0FBSU8sSUFBTUMsS0FBYjtBQUFBOztBQUFBOztBQUNFLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQix1TkFTSixVQUFDQyxLQUFELEVBQVc7QUFDeEIsWUFBS0MsUUFBTCxDQUFjO0FBQUVELGFBQUssRUFBTEE7QUFBRixPQUFkO0FBQ0QsS0FYa0I7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U0FEbkI7QUFFRUMsa0JBQU0sRUFBRTtBQUZWLFdBRFUsR0FLVjtBQUNFRCwyQkFBZSxFQUFFLFNBRG5CO0FBRUVDLGtCQUFNLEVBQUU7QUFGVixXQUxKO0FBU0EsaUJBQ0Usb0dBQ01ULHNCQUFzQixDQUFDSyxVQUFELEVBQWE7QUFDckNGLHFCQUFTLEVBQUUsa0JBRDBCO0FBRXJDSSxpQkFBSyxFQUFMQTtBQUZxQyxXQUFiLENBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQU9GLFVBQVUsQ0FBQ0ssV0FBbEIsQ0FORixDQURGO0FBVUQsU0F4QkEsQ0FGSCxDQVBGLENBTkQ7QUFBQSxPQU5ILENBbkRGLENBRkYsRUF3R0UsTUFBQyxpREFBRDtBQUFNLFlBQUksRUFBQyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBQyxXQUZaO0FBR0UsYUFBSyxFQUFDLFFBSFI7QUFJRSxlQUFPLEVBQUUsS0FBSy9CLFFBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQXhHRixDQUZGLENBREYsQ0FERixDQURGLENBREYsQ0FERjtBQThIRDtBQXRLSDs7QUFBQTtBQUFBLEVBQTJCaUMsK0NBQTNCO0FBeUtldkMsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmU3NzRmNjkxNTBlYWNjMzQ0YTg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IGdlb2NvZGVCeUFkZHJlc3MsIGdldExhdExuZyB9IGZyb20gXCJyZWFjdC1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBQbGFjZXNBdXRvY29tcGxldGUgZnJvbSBcInJlYWN0LXBsYWNlcy1hdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTWFwIGZyb20gXCIuL21hcFwiO1xyXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2NvbmZpZ1wiO1xyXG5cclxuY29uc3Qgc2VhcmNoT3B0aW9ucyA9IHtcclxuICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHsgY291bnRyeTogW1wicGhcIl0gfSxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBpbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyB2YWx1ZTogXCJcIiB9O1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWUxOiBcIlwiIH07XHJcbiAgICB0aGlzLmNsaWNrQm94ID0gdGhpcy5jbGlja0JveC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5waWNrb2ZmbGF0ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNoYW5nZTEgPSAodmFsdWUxKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUxIH0pO1xyXG4gIH07XHJcblxyXG4gIGNsaWNrQm94KCkge1xyXG4gICAgZ2VvY29kZUJ5QWRkcmVzcyh0aGlzLnN0YXRlLnZhbHVlKVxyXG4gICAgICAudGhlbigocmVzdWx0cykgPT4gZ2V0TGF0TG5nKHJlc3VsdHNbMF0pKVxyXG4gICAgIFxyXG4gICAgICAudGhlbigoeyBsYXQsIGxuZyB9KSA9PlxyXG4gICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coeyBsYXQsIGxuZyB9KVxyXG4gICAgICAgIFxyXG4gICAgICApO1xyXG4gICAgICBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdCA9IHtsYXR9O1xyXG4gICAgZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmYgPSB0aGlzLnN0YXRlLnZhbHVlO1xyXG5cclxuICAgIGdlb2NvZGVCeUFkZHJlc3ModGhpcy5zdGF0ZS52YWx1ZTEpXHJcbiAgICAgIC50aGVuKChyZXN1bHRzKSA9PiBnZXRMYXRMbmcocmVzdWx0c1swXSkpXHJcbiAgICAgIC50aGVuKCh7IGxhdCwgbG5nIH0pID0+XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgZ290IGxhdGl0dWRlIGFuZCBsb25naXR1ZGVcIiwgeyBsYXQsIGxuZyB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmID0gdGhpcy5zdGF0ZS52YWx1ZTE7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIG1haW5Db25cIj5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBoLTEwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGgtMTAwIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwVGl0bGVcIj5Cb29rIHlvdXIgZGVsaXZlcnkgbm93ITwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UGxhY2VzQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLmhhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaE9wdGlvbnM9e3NlYXJjaE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldElucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRTdWdnZXN0aW9uSXRlbVByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQaWNrLXVwIGxvY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJsb2NhdGlvbi1zZWFyY2gtaW5wdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtZHJvcGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbnMubWFwKChzdWdnZXN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHN1Z2dlc3Rpb24uYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInN1Z2dlc3Rpb24taXRlbS0tYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwic3VnZ2VzdGlvbi1pdGVtXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlubGluZSBzdHlsZSBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3VnZ2VzdGlvbi5hY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmYWZhZmFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFN1Z2dlc3Rpb25JdGVtUHJvcHMoc3VnZ2VzdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiaW5wdXQtc3VnZ2VzdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdWdnZXN0aW9uLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QbGFjZXNBdXRvY29tcGxldGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYWNlc0F1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWUxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlMX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLmhhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaE9wdGlvbnM9e3NlYXJjaE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldElucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRTdWdnZXN0aW9uSXRlbVByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQaWNrLXVwIGxvY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJsb2NhdGlvbi1zZWFyY2gtaW5wdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtZHJvcGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbnMubWFwKChzdWdnZXN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHN1Z2dlc3Rpb24uYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInN1Z2dlc3Rpb24taXRlbS0tYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwic3VnZ2VzdGlvbi1pdGVtXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlubGluZSBzdHlsZSBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3VnZ2VzdGlvbi5hY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmYWZhZmFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFN1Z2dlc3Rpb25JdGVtUHJvcHMoc3VnZ2VzdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiaW5wdXQtc3VnZ2VzdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdWdnZXN0aW9uLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QbGFjZXNBdXRvY29tcGxldGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21hcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5TdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTVUJNSVRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbGlja0JveH1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9