webpackHotUpdate("static\\development\\pages\\map.js",{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
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
        lat: global.config.place.deliver.pickofflat,
        lng: global.config.place.deliver.pickofflang
      };
      var destination = {
        lat: global.config.place.deliver.dropofflat,
        lng: global.config.place.deliver.dropofflang
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcC5qcyJdLCJuYW1lcyI6WyJNYXAiLCJkaXJlY3Rpb25zIiwiZGlyZWN0aW9uc1NlcnZpY2UiLCJnb29nbGUiLCJtYXBzIiwiRGlyZWN0aW9uc1NlcnZpY2UiLCJvcmlnaW4iLCJsYXQiLCJnbG9iYWwiLCJjb25maWciLCJwbGFjZSIsImRlbGl2ZXIiLCJwaWNrb2ZmbGF0IiwibG5nIiwicGlja29mZmxhbmciLCJkZXN0aW5hdGlvbiIsImRyb3BvZmZsYXQiLCJkcm9wb2ZmbGFuZyIsInJvdXRlIiwidHJhdmVsTW9kZSIsIlRyYXZlbE1vZGUiLCJEUklWSU5HIiwicmVzdWx0Iiwic3RhdHVzIiwiRGlyZWN0aW9uc1N0YXR1cyIsIk9LIiwic2V0U3RhdGUiLCJjb25zb2xlIiwiZXJyb3IiLCJHb29nbGVNYXBFeGFtcGxlIiwid2l0aEdvb2dsZU1hcCIsInByb3BzIiwic3RhdGUiLCJoZWlnaHQiLCJ3aWR0aCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFNTUEsRzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxnQkFBVSxFQUFFO0FBRE4sSzs7Ozs7Ozt3Q0FJWTtBQUFBOztBQUNsQixVQUFNQyxpQkFBaUIsR0FBRyxJQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsaUJBQWhCLEVBQTFCO0FBRUEsVUFBTUMsTUFBTSxHQUFHO0FBQUVDLFdBQUcsRUFBRUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCQyxVQUFuQztBQUFnREMsV0FBRyxFQUFFTCxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJHO0FBQWpGLE9BQWY7QUFDQSxVQUFNQyxXQUFXLEdBQUc7QUFBRVIsV0FBRyxFQUFFQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJLLFVBQW5DO0FBQStDSCxXQUFHLEVBQUVMLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CQyxPQUFwQixDQUE0Qk07QUFBaEYsT0FBcEI7QUFFQWYsdUJBQWlCLENBQUNnQixLQUFsQixDQUNFO0FBQ0VaLGNBQU0sRUFBRUEsTUFEVjtBQUVFUyxtQkFBVyxFQUFFQSxXQUZmO0FBR0VJLGtCQUFVLEVBQUVoQixNQUFNLENBQUNDLElBQVAsQ0FBWWdCLFVBQVosQ0FBdUJDO0FBSHJDLE9BREYsRUFNRSxVQUFDQyxNQUFELEVBQVNDLE1BQVQsRUFBb0I7QUFDbEIsWUFBSUEsTUFBTSxLQUFLcEIsTUFBTSxDQUFDQyxJQUFQLENBQVlvQixnQkFBWixDQUE2QkMsRUFBNUMsRUFBZ0Q7QUFDOUMsZ0JBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1p6QixzQkFBVSxFQUFFcUI7QUFEQSxXQUFkO0FBR0QsU0FKRCxNQUlPO0FBQ0xLLGlCQUFPLENBQUNDLEtBQVIscUNBQTJDTixNQUEzQztBQUNEO0FBQ0YsT0FkSDtBQWdCRDs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBTU8sZ0JBQWdCLEdBQUdDLHVFQUFhLENBQUMsVUFBQUMsS0FBSztBQUFBLGVBQzFDLE1BQUMsMkRBQUQ7QUFDRSx1QkFBYSxFQUFFO0FBQUV4QixlQUFHLEVBQUUsVUFBUDtBQUFtQk0sZUFBRyxFQUFFO0FBQXhCLFdBRGpCO0FBRUUscUJBQVcsRUFBRSxFQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FJRSxNQUFDLG9FQUFEO0FBQ0Usb0JBQVUsRUFBRSxNQUFJLENBQUNtQixLQUFMLENBQVcvQixVQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSkYsQ0FEMEM7QUFBQSxPQUFOLENBQXRDO0FBV0EsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnQkFBRDtBQUNFLHdCQUFnQixFQUFFO0FBQUssZUFBSyxFQUFFO0FBQUVnQyxrQkFBTSxTQUFSO0FBQW1CQyxpQkFBSyxFQUFFO0FBQTFCLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURwQjtBQUVFLGtCQUFVLEVBQUU7QUFBSyxlQUFLLEVBQUU7QUFBRUQsa0JBQU07QUFBUixXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERjtBQVFEOzs7O0VBakRlRSwrQzs7QUFvREhuQyxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbWFwLmpzLjM2N2JmNzJlNTFmNGIwODU5ZDQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCBnb29nbGUqL1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9jb25maWcnO1xyXG5pbXBvcnQge1xyXG4gIHdpdGhHb29nbGVNYXAsXHJcbiAgd2l0aFNjcmlwdGpzLFxyXG4gIEdvb2dsZU1hcCxcclxuICBEaXJlY3Rpb25zUmVuZGVyZXJcclxufSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcclxuY2xhc3MgTWFwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGRpcmVjdGlvbnM6IG51bGxcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XHJcblxyXG4gICAgY29uc3Qgb3JpZ2luID0geyBsYXQ6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGF0ICwgbG5nOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhbmcgfTtcclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0geyBsYXQ6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGF0LCBsbmc6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmbGFuZyB9O1xyXG5cclxuICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JpZ2luOiBvcmlnaW4sXHJcbiAgICAgICAgZGVzdGluYXRpb246IGRlc3RpbmF0aW9uLFxyXG4gICAgICAgIHRyYXZlbE1vZGU6IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklOR1xyXG4gICAgICB9LFxyXG4gICAgICAocmVzdWx0LCBzdGF0dXMpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uczogcmVzdWx0XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgZXJyb3IgZmV0Y2hpbmcgZGlyZWN0aW9ucyAke3Jlc3VsdH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBHb29nbGVNYXBFeGFtcGxlID0gd2l0aEdvb2dsZU1hcChwcm9wcyA9PiAoXHJcbiAgICAgIDxHb29nbGVNYXBcclxuICAgICAgICBkZWZhdWx0Q2VudGVyPXt7IGxhdDogMTQuMzU5ODA1MywgbG5nOiAxMjAuOTMwMTY0NCB9fVxyXG4gICAgICAgIGRlZmF1bHRab29tPXsxM31cclxuICAgICAgPlxyXG4gICAgICAgIDxEaXJlY3Rpb25zUmVuZGVyZXJcclxuICAgICAgICAgIGRpcmVjdGlvbnM9e3RoaXMuc3RhdGUuZGlyZWN0aW9uc31cclxuICAgICAgICAvPlxyXG4gICAgICA8L0dvb2dsZU1hcD5cclxuICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEdvb2dsZU1hcEV4YW1wbGVcclxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQ9ezxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgMTAwdmhgLCB3aWR0aDogXCIxMDAlIFwiIH19IC8+fVxyXG4gICAgICAgICAgbWFwRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6IGAxMDAlYCB9fSAvPn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=