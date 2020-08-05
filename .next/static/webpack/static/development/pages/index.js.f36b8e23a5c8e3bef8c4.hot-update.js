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

function handleChange() {
  var _this = this;

  handleChange = function handleChange(value) {
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
  };
}

;
var index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(index, _Component);

  var _super = _createSuper(index);

  function index(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, index);

    _this2 = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this2), "handleChange1", function (value1) {
      _this2.setState({
        value1: value1
      });

      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["geocodeByAddress"])(_this2.state.value).then(function (results) {
        return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["getLatLng"])(results[0]);
      }).then(function (_ref2) {
        var lat = _ref2.lat,
            lng = _ref2.lng;
        return global.config.place.deliver.dropoff = {
          lat: lat
        };
      }, console.log(global.config.place.deliver.dropoff));
    });

    _this2.state = {
      value: ""
    };
    _this2.state = {
      value1: ""
    };
    _this2.clickBox = _this2.clickBox.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(index, [{
    key: "clickBox",
    value: function clickBox() {}
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        "class": "container-fluid mainCon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }
      }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, __jsx("div", {
        "class": "container-fluid h-100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "container h-100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row h-100 align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "col-lg-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "pTitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 19
        }
      }, "Book your delivery now!"), __jsx("div", {
        className: "box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 19
        }
      }, __jsx(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default.a, {
        value: this.state.value,
        onChange: handleChange(),
        onSelect: this.handleSelect,
        searchOptions: searchOptions,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }
      }, function (_ref3) {
        var getInputProps = _ref3.getInputProps,
            suggestions = _ref3.suggestions,
            getSuggestionItemProps = _ref3.getSuggestionItemProps,
            loading = _ref3.loading;
        return __jsx("div", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }
        }, __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
          placeholder: "Pick-up location",
          className: "location-search-input"
        }), {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 27
          }
        })), __jsx("div", {
          className: "autocomplete-dropdown-container",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 27
          }
        }, loading && __jsx("div", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
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
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 33
            }
          }), __jsx("span", {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106,
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
          lineNumber: 114,
          columnNumber: 21
        }
      }, function (_ref4) {
        var getInputProps = _ref4.getInputProps,
            suggestions = _ref4.suggestions,
            getSuggestionItemProps = _ref4.getSuggestionItemProps,
            loading = _ref4.loading;
        return __jsx("div", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }
        }, __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps({
          placeholder: "Pick-up location",
          className: "location-search-input"
        }), {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 27
          }
        })), __jsx("div", {
          className: "autocomplete-dropdown-container",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 27
          }
        }, loading && __jsx("div", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134,
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
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 33
            }
          }), __jsx("span", {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 35
            }
          }, suggestion.description));
        })));
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/map",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
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
          lineNumber: 166,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZWFyY2hPcHRpb25zIiwiY29tcG9uZW50UmVzdHJpY3Rpb25zIiwiY291bnRyeSIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwic2V0U3RhdGUiLCJnZW9jb2RlQnlBZGRyZXNzIiwic3RhdGUiLCJ0aGVuIiwicmVzdWx0cyIsImdldExhdExuZyIsImxhdCIsImxuZyIsInNldENvb3JkaW5hdGVzIiwiaW5kZXgiLCJwcm9wcyIsInZhbHVlMSIsImdsb2JhbCIsImNvbmZpZyIsInBsYWNlIiwiZGVsaXZlciIsImRyb3BvZmYiLCJjb25zb2xlIiwibG9nIiwiY2xpY2tCb3giLCJiaW5kIiwiaGFuZGxlU2VsZWN0IiwiZ2V0SW5wdXRQcm9wcyIsInN1Z2dlc3Rpb25zIiwiZ2V0U3VnZ2VzdGlvbkl0ZW1Qcm9wcyIsImxvYWRpbmciLCJwbGFjZWhvbGRlciIsImNsYXNzTmFtZSIsIm1hcCIsInN1Z2dlc3Rpb24iLCJhY3RpdmUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImN1cnNvciIsImRlc2NyaXB0aW9uIiwiaGFuZGxlQ2hhbmdlMSIsImhhbmRsZVNlbGVjdDEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUc7QUFDcEJDLHVCQUFxQixFQUFFO0FBQUVDLFdBQU8sRUFBRSxDQUFDLElBQUQ7QUFBWDtBQURILENBQXRCOztBQU1BLFNBQVNDLFlBQVQsR0FBd0I7QUFBQTs7QUFDdEJBLGNBQVksR0FBRyxzQkFBQ0MsS0FBRCxFQUFXO0FBQ3hCLFNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVELFdBQUssRUFBTEE7QUFBRixLQUFkOztBQUNBRSx1RkFBZ0IsQ0FBQyxLQUFJLENBQUNDLEtBQUwsQ0FB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFPRixVQUFVLENBQUNLLFdBQWxCLENBTkYsQ0FERjtBQVVELFNBeEJBLENBRkgsQ0FQRixDQU5EO0FBQUEsT0FOSCxDQW5ERixDQUZGLEVBd0dFLE1BQUMsaURBQUQ7QUFBTSxZQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGlCQUFTLEVBQUMsV0FGWjtBQUdFLGFBQUssRUFBQyxRQUhSO0FBSUUsZUFBTyxFQUFFLEtBQUtmLFFBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQXhHRixDQUZGLENBREYsQ0FERixDQURGLENBREYsQ0FERjtBQThIRDtBQXZKSDs7QUFBQTtBQUFBLEVBQTJCa0IsK0NBQTNCO0FBMEplNUIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmYzNmI4ZTIzYTVjOGUzYmVmOGM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IGdlb2NvZGVCeUFkZHJlc3MsIGdldExhdExuZyB9IGZyb20gXCJyZWFjdC1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBQbGFjZXNBdXRvY29tcGxldGUgZnJvbSBcInJlYWN0LXBsYWNlcy1hdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTWFwIGZyb20gXCIuL21hcFwiO1xyXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2NvbmZpZ1wiO1xyXG5cclxuY29uc3Qgc2VhcmNoT3B0aW9ucyA9IHtcclxuICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHsgY291bnRyeTogW1wicGhcIl0gfSxcclxufTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xyXG4gIGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xyXG4gICAgZ2VvY29kZUJ5QWRkcmVzcyh0aGlzLnN0YXRlLnZhbHVlKVxyXG4gICAgICAudGhlbigocmVzdWx0cykgPT4gZ2V0TGF0TG5nKHJlc3VsdHNbMF0pKVxyXG4gICAgICAudGhlbihcclxuICAgICAgICAoeyBsYXQsIGxuZyB9KSA9PiAoc2V0Q29vcmRpbmF0ZXMobGF0KSksXHJcbiAgICAgICAgXHJcbiAgICAgICk7XHJcbiAgfTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgaW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWU6IFwiXCIgfTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IHZhbHVlMTogXCJcIiB9O1xyXG4gICAgdGhpcy5jbGlja0JveCA9IHRoaXMuY2xpY2tCb3guYmluZCh0aGlzKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiBcclxuIFxyXG4gIGhhbmRsZUNoYW5nZTEgPSAodmFsdWUxKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUxIH0pO1xyXG4gICAgZ2VvY29kZUJ5QWRkcmVzcyh0aGlzLnN0YXRlLnZhbHVlKVxyXG4gICAgICAudGhlbigocmVzdWx0cykgPT4gZ2V0TGF0TG5nKHJlc3VsdHNbMF0pKVxyXG4gICAgICAudGhlbihcclxuICAgICAgICAoeyBsYXQsIGxuZyB9KSA9PiAoZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLmRyb3BvZmYgPSB7IGxhdCB9KSxcclxuICAgICAgICBjb25zb2xlLmxvZyhnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZilcclxuICAgICAgKTtcclxuICB9O1xyXG5cclxuICBjbGlja0JveCgpIHt9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgbWFpbkNvblwiPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIGgtMTAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaC0xMDAgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBUaXRsZVwiPkJvb2sgeW91ciBkZWxpdmVyeSBub3chPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGFjZXNBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuaGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VhcmNoT3B0aW9ucz17c2VhcmNoT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0SW5wdXRQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFN1Z2dlc3Rpb25JdGVtUHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlBpY2stdXAgbG9jYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImxvY2F0aW9uLXNlYXJjaC1pbnB1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZS1kcm9wZG93bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gc3VnZ2VzdGlvbi5hY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic3VnZ2VzdGlvbi1pdGVtLS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzdWdnZXN0aW9uLWl0ZW1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5saW5lIHN0eWxlIGZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBzdWdnZXN0aW9uLmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZhZmFmYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0U3VnZ2VzdGlvbkl0ZW1Qcm9wcyhzdWdnZXN0aW9uLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJpbnB1dC1zdWdnZXN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N1Z2dlc3Rpb24uZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1BsYWNlc0F1dG9jb21wbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8UGxhY2VzQXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuaGFuZGxlU2VsZWN0MX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaE9wdGlvbnM9e3NlYXJjaE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldElucHV0UHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRTdWdnZXN0aW9uSXRlbVByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQaWNrLXVwIGxvY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJsb2NhdGlvbi1zZWFyY2gtaW5wdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvY29tcGxldGUtZHJvcGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbnMubWFwKChzdWdnZXN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHN1Z2dlc3Rpb24uYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInN1Z2dlc3Rpb24taXRlbS0tYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwic3VnZ2VzdGlvbi1pdGVtXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlubGluZSBzdHlsZSBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3VnZ2VzdGlvbi5hY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmYWZhZmFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFN1Z2dlc3Rpb25JdGVtUHJvcHMoc3VnZ2VzdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiaW5wdXQtc3VnZ2VzdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdWdnZXN0aW9uLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QbGFjZXNBdXRvY29tcGxldGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21hcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5TdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTVUJNSVRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbGlja0JveH1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9