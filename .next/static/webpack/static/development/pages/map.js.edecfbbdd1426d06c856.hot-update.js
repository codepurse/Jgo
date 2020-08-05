webpackHotUpdate("static\\development\\pages\\map.js",{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/config */ "./components/config.js");
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\Jgo\\components\\Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*global google*/




var Map = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Map, _Component);

  var _super = _createSuper(Map);

  function Map() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Map);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      directions: null
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var directionsService = new google.maps.DirectionsService();
      var origin = {
        lat: 14.3598053,
        lng: 120.9301644
      };
      var destination = {
        lat: 14.5590436,
        lng: 121.0243327
      };
      directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      }, function (result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          _this2.setState({
            directions: result
          });
        } else {
          console.error("error fetching directions ".concat(result));
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var GoogleMapExample = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_9__["withGoogleMap"])(function (props) {
        return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_9__["GoogleMap"], {
          defaultCenter: {
            lat: 14.3598053,
            lng: 120.9301644
          },
          defaultZoom: 13,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 7
          }
        }, __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_9__["DirectionsRenderer"], {
          directions: _this3.state.directions,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 9
          }
        }));
      });
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }
      }, __jsx(GoogleMapExample, {
        containerElement: __jsx("div", {
          style: {
            height: "100vh",
            width: "100% "
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 29
          }
        }),
        mapElement: __jsx("div", {
          style: {
            height: "100%"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 23
          }
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Map);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcC5qcyJdLCJuYW1lcyI6WyJNYXAiLCJkaXJlY3Rpb25zIiwiZGlyZWN0aW9uc1NlcnZpY2UiLCJnb29nbGUiLCJtYXBzIiwiRGlyZWN0aW9uc1NlcnZpY2UiLCJvcmlnaW4iLCJsYXQiLCJsbmciLCJkZXN0aW5hdGlvbiIsInJvdXRlIiwidHJhdmVsTW9kZSIsIlRyYXZlbE1vZGUiLCJEUklWSU5HIiwicmVzdWx0Iiwic3RhdHVzIiwiRGlyZWN0aW9uc1N0YXR1cyIsIk9LIiwic2V0U3RhdGUiLCJjb25zb2xlIiwiZXJyb3IiLCJHb29nbGVNYXBFeGFtcGxlIiwid2l0aEdvb2dsZU1hcCIsInByb3BzIiwic3RhdGUiLCJoZWlnaHQiLCJ3aWR0aCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFNTUEsRzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxnQkFBVSxFQUFFO0FBRE4sSzs7Ozs7Ozt3Q0FJWTtBQUFBOztBQUNsQixVQUFNQyxpQkFBaUIsR0FBRyxJQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsaUJBQWhCLEVBQTFCO0FBRUEsVUFBTUMsTUFBTSxHQUFHO0FBQUVDLFdBQUcsRUFBRSxVQUFQO0FBQW1CQyxXQUFHLEVBQUU7QUFBeEIsT0FBZjtBQUNBLFVBQU1DLFdBQVcsR0FBRztBQUFFRixXQUFHLEVBQUUsVUFBUDtBQUFtQkMsV0FBRyxFQUFFO0FBQXhCLE9BQXBCO0FBRUFOLHVCQUFpQixDQUFDUSxLQUFsQixDQUNFO0FBQ0VKLGNBQU0sRUFBRUEsTUFEVjtBQUVFRyxtQkFBVyxFQUFFQSxXQUZmO0FBR0VFLGtCQUFVLEVBQUVSLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUSxVQUFaLENBQXVCQztBQUhyQyxPQURGLEVBTUUsVUFBQ0MsTUFBRCxFQUFTQyxNQUFULEVBQW9CO0FBQ2xCLFlBQUlBLE1BQU0sS0FBS1osTUFBTSxDQUFDQyxJQUFQLENBQVlZLGdCQUFaLENBQTZCQyxFQUE1QyxFQUFnRDtBQUM5QyxnQkFBSSxDQUFDQyxRQUFMLENBQWM7QUFDWmpCLHNCQUFVLEVBQUVhO0FBREEsV0FBZDtBQUdELFNBSkQsTUFJTztBQUNMSyxpQkFBTyxDQUFDQyxLQUFSLHFDQUEyQ04sTUFBM0M7QUFDRDtBQUNGLE9BZEg7QUFnQkQ7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQU1PLGdCQUFnQixHQUFHQyx1RUFBYSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxlQUMxQyxNQUFDLDJEQUFEO0FBQ0UsdUJBQWEsRUFBRTtBQUFFaEIsZUFBRyxFQUFFLFVBQVA7QUFBbUJDLGVBQUcsRUFBRTtBQUF4QixXQURqQjtBQUVFLHFCQUFXLEVBQUUsRUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUUsTUFBQyxvRUFBRDtBQUNFLG9CQUFVLEVBQUUsTUFBSSxDQUFDZ0IsS0FBTCxDQUFXdkIsVUFEekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUpGLENBRDBDO0FBQUEsT0FBTixDQUF0QztBQVdBLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0JBQUQ7QUFDRSx3QkFBZ0IsRUFBRTtBQUFLLGVBQUssRUFBRTtBQUFFd0Isa0JBQU0sU0FBUjtBQUFtQkMsaUJBQUssRUFBRTtBQUExQixXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEcEI7QUFFRSxrQkFBVSxFQUFFO0FBQUssZUFBSyxFQUFFO0FBQUVELGtCQUFNO0FBQVIsV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREY7QUFRRDs7OztFQWpEZUUsK0M7O0FBb0RIM0Isa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1hcC5qcy5lZGVjZmJiZGQxNDI2ZDA2Yzg1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypnbG9iYWwgZ29vZ2xlKi9cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvY29uZmlnJztcclxuaW1wb3J0IHtcclxuICB3aXRoR29vZ2xlTWFwLFxyXG4gIHdpdGhTY3JpcHRqcyxcclxuICBHb29nbGVNYXAsXHJcbiAgRGlyZWN0aW9uc1JlbmRlcmVyXHJcbn0gZnJvbSBcInJlYWN0LWdvb2dsZS1tYXBzXCI7XHJcbmNsYXNzIE1hcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBkaXJlY3Rpb25zOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xyXG5cclxuICAgIGNvbnN0IG9yaWdpbiA9IHsgbGF0OiAxNC4zNTk4MDUzLCBsbmc6IDEyMC45MzAxNjQ0IH07XHJcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHsgbGF0OiAxNC41NTkwNDM2LCBsbmc6IDEyMS4wMjQzMzI3IH07XHJcblxyXG4gICAgZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUoXHJcbiAgICAgIHtcclxuICAgICAgICBvcmlnaW46IG9yaWdpbixcclxuICAgICAgICBkZXN0aW5hdGlvbjogZGVzdGluYXRpb24sXHJcbiAgICAgICAgdHJhdmVsTW9kZTogZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HXHJcbiAgICAgIH0sXHJcbiAgICAgIChyZXN1bHQsIHN0YXR1cykgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkaXJlY3Rpb25zOiByZXN1bHRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBlcnJvciBmZXRjaGluZyBkaXJlY3Rpb25zICR7cmVzdWx0fWApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IEdvb2dsZU1hcEV4YW1wbGUgPSB3aXRoR29vZ2xlTWFwKHByb3BzID0+IChcclxuICAgICAgPEdvb2dsZU1hcFxyXG4gICAgICAgIGRlZmF1bHRDZW50ZXI9e3sgbGF0OiAxNC4zNTk4MDUzLCBsbmc6IDEyMC45MzAxNjQ0IH19XHJcbiAgICAgICAgZGVmYXVsdFpvb209ezEzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPERpcmVjdGlvbnNSZW5kZXJlclxyXG4gICAgICAgICAgZGlyZWN0aW9ucz17dGhpcy5zdGF0ZS5kaXJlY3Rpb25zfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvR29vZ2xlTWFwPlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8R29vZ2xlTWFwRXhhbXBsZVxyXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6IGAxMDB2aGAsIHdpZHRoOiBcIjEwMCUgXCIgfX0gLz59XHJcbiAgICAgICAgICBtYXBFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDEwMCVgIH19IC8+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==