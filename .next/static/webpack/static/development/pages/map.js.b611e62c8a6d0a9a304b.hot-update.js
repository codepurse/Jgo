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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcC5qcyJdLCJuYW1lcyI6WyJNYXAiLCJkaXJlY3Rpb25zIiwiZGlyZWN0aW9uc1NlcnZpY2UiLCJnb29nbGUiLCJtYXBzIiwiRGlyZWN0aW9uc1NlcnZpY2UiLCJvcmlnaW4iLCJsYXQiLCJnbG9iYWwiLCJjb25maWciLCJwbGFjZSIsImRlbGl2ZXIiLCJwaWNrb2ZmbGF0IiwibG5nIiwicGlja29mZmxhbmciLCJkZXN0aW5hdGlvbiIsInJvdXRlIiwidHJhdmVsTW9kZSIsIlRyYXZlbE1vZGUiLCJEUklWSU5HIiwicmVzdWx0Iiwic3RhdHVzIiwiRGlyZWN0aW9uc1N0YXR1cyIsIk9LIiwic2V0U3RhdGUiLCJjb25zb2xlIiwiZXJyb3IiLCJHb29nbGVNYXBFeGFtcGxlIiwid2l0aEdvb2dsZU1hcCIsInByb3BzIiwic3RhdGUiLCJoZWlnaHQiLCJ3aWR0aCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFNTUEsRzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxnQkFBVSxFQUFFO0FBRE4sSzs7Ozs7Ozt3Q0FJWTtBQUFBOztBQUNsQixVQUFNQyxpQkFBaUIsR0FBRyxJQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsaUJBQWhCLEVBQTFCO0FBRUEsVUFBTUMsTUFBTSxHQUFHO0FBQUVDLFdBQUcsRUFBRUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCLENBQTRCQyxVQUFuQztBQUFnREMsV0FBRyxFQUFFTCxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJHO0FBQWpGLE9BQWY7QUFDQSxVQUFNQyxXQUFXLEdBQUc7QUFBRVIsV0FBRyxFQUFFLFVBQVA7QUFBbUJNLFdBQUcsRUFBRTtBQUF4QixPQUFwQjtBQUVBWCx1QkFBaUIsQ0FBQ2MsS0FBbEIsQ0FDRTtBQUNFVixjQUFNLEVBQUVBLE1BRFY7QUFFRVMsbUJBQVcsRUFBRUEsV0FGZjtBQUdFRSxrQkFBVSxFQUFFZCxNQUFNLENBQUNDLElBQVAsQ0FBWWMsVUFBWixDQUF1QkM7QUFIckMsT0FERixFQU1FLFVBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFvQjtBQUNsQixZQUFJQSxNQUFNLEtBQUtsQixNQUFNLENBQUNDLElBQVAsQ0FBWWtCLGdCQUFaLENBQTZCQyxFQUE1QyxFQUFnRDtBQUM5QyxnQkFBSSxDQUFDQyxRQUFMLENBQWM7QUFDWnZCLHNCQUFVLEVBQUVtQjtBQURBLFdBQWQ7QUFHRCxTQUpELE1BSU87QUFDTEssaUJBQU8sQ0FBQ0MsS0FBUixxQ0FBMkNOLE1BQTNDO0FBQ0Q7QUFDRixPQWRIO0FBZ0JEOzs7NkJBRVE7QUFBQTs7QUFDUCxVQUFNTyxnQkFBZ0IsR0FBR0MsdUVBQWEsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsZUFDMUMsTUFBQywyREFBRDtBQUNFLHVCQUFhLEVBQUU7QUFBRXRCLGVBQUcsRUFBRSxVQUFQO0FBQW1CTSxlQUFHLEVBQUU7QUFBeEIsV0FEakI7QUFFRSxxQkFBVyxFQUFFLEVBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUlFLE1BQUMsb0VBQUQ7QUFDRSxvQkFBVSxFQUFFLE1BQUksQ0FBQ2lCLEtBQUwsQ0FBVzdCLFVBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFKRixDQUQwQztBQUFBLE9BQU4sQ0FBdEM7QUFXQSxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdCQUFEO0FBQ0Usd0JBQWdCLEVBQUU7QUFBSyxlQUFLLEVBQUU7QUFBRThCLGtCQUFNLFNBQVI7QUFBbUJDLGlCQUFLLEVBQUU7QUFBMUIsV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRHBCO0FBRUUsa0JBQVUsRUFBRTtBQUFLLGVBQUssRUFBRTtBQUFFRCxrQkFBTTtBQUFSLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGO0FBUUQ7Ozs7RUFqRGVFLCtDOztBQW9ESGpDLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxtYXAuanMuYjYxMWU2MmM4YTZkMGE5YTMwNGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFsIGdvb2dsZSovXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL2NvbmZpZyc7XHJcbmltcG9ydCB7XHJcbiAgd2l0aEdvb2dsZU1hcCxcclxuICB3aXRoU2NyaXB0anMsXHJcbiAgR29vZ2xlTWFwLFxyXG4gIERpcmVjdGlvbnNSZW5kZXJlclxyXG59IGZyb20gXCJyZWFjdC1nb29nbGUtbWFwc1wiO1xyXG5jbGFzcyBNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZGlyZWN0aW9uczogbnVsbFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcclxuXHJcbiAgICBjb25zdCBvcmlnaW4gPSB7IGxhdDogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYXQgLCBsbmc6IGdsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5waWNrb2ZmbGFuZyB9O1xyXG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB7IGxhdDogMTQuNTU5MDQzNiwgbG5nOiAxMjEuMDI0MzMyNyB9O1xyXG5cclxuICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JpZ2luOiBvcmlnaW4sXHJcbiAgICAgICAgZGVzdGluYXRpb246IGRlc3RpbmF0aW9uLFxyXG4gICAgICAgIHRyYXZlbE1vZGU6IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklOR1xyXG4gICAgICB9LFxyXG4gICAgICAocmVzdWx0LCBzdGF0dXMpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uczogcmVzdWx0XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgZXJyb3IgZmV0Y2hpbmcgZGlyZWN0aW9ucyAke3Jlc3VsdH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBHb29nbGVNYXBFeGFtcGxlID0gd2l0aEdvb2dsZU1hcChwcm9wcyA9PiAoXHJcbiAgICAgIDxHb29nbGVNYXBcclxuICAgICAgICBkZWZhdWx0Q2VudGVyPXt7IGxhdDogMTQuMzU5ODA1MywgbG5nOiAxMjAuOTMwMTY0NCB9fVxyXG4gICAgICAgIGRlZmF1bHRab29tPXsxM31cclxuICAgICAgPlxyXG4gICAgICAgIDxEaXJlY3Rpb25zUmVuZGVyZXJcclxuICAgICAgICAgIGRpcmVjdGlvbnM9e3RoaXMuc3RhdGUuZGlyZWN0aW9uc31cclxuICAgICAgICAvPlxyXG4gICAgICA8L0dvb2dsZU1hcD5cclxuICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEdvb2dsZU1hcEV4YW1wbGVcclxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQ9ezxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgMTAwdmhgLCB3aWR0aDogXCIxMDAlIFwiIH19IC8+fVxyXG4gICAgICAgICAgbWFwRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6IGAxMDAlYCB9fSAvPn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=