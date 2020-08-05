module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/config */ "./components/config.js");
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\Jgo\\components\\Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*global google*/




class Map extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      directions: null
    });
  }

  componentDidMount() {
    const directionsService = new google.maps.DirectionsService();
    const origin = {
      lat: global.config.place.deliver.pickofflat,
      lng: global.config.place.deliver.pickofflang
    };
    const destination = {
      lat: global.config.place.deliver.dropofflat,
      lng: global.config.place.deliver.dropofflang
    };
    directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }

  render() {
    const GoogleMapExample = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withGoogleMap"])(props => __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"], {
      defaultCenter: {
        lat: 14.3598053,
        lng: 120.9301644
      },
      defaultZoom: 13,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }, __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["DirectionsRenderer"], {
      directions: this.state.directions,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    })));
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
          height: `100vh`,
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
          height: `100%`
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

}

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./components/config.js":
/*!******************************!*\
  !*** ./components/config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = global.config = {
  place: {
    deliver: {
      pickoff: "null",
      dropoff: "null",
      pickofflat: "",
      pickofflang: "",
      dropofflat: "",
      dropofflang: ""
    }
  }
};

/***/ }),

/***/ "./components/mapLayout.js":
/*!*********************************!*\
  !*** ./components/mapLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\Jgo\\components\\mapLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Layout = props => __jsx("html", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("div", {
  style: {
    height: "100vh"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, "Jgo Website"), __jsx("link", {
  rel: "stylesheet",
  href: "CSS/index.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap",
  rel: "stylesheet",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
  integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
  crossorigin: "anonymous",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
  integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
  crossorigin: "anonymous",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
  integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
  crossorigin: "anonymous",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
  integrity: "sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI",
  crossorigin: "anonymous",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }
}), __jsx("script", {
  async: true,
  defer: true,
  src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4&libraries=places",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "Script/jgo.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }
})), props.children));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/try.js":
/*!***************************!*\
  !*** ./components/try.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Map */ "./components/Map.js");
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\Jgo\\components\\try.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const App = () => {
  const MapLoader = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withScriptjs"])(_Map__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return __jsx(MapLoader, {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4",
    loadingElement: __jsx("div", {
      style: {
        height: `100%`
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 23
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/map.js":
/*!**********************!*\
  !*** ./pages/map.js ***!
  \**********************/
/*! exports provided: map, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_mapLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/mapLayout */ "./components/mapLayout.js");
/* harmony import */ var _components_try__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/try */ "./components/try.js");
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/config */ "./components/config.js");
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_config__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Alfon\\Documents\\Work Projects\\Github\\Jgo\\pages\\map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class map extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  getComponent(event) {
    if (event.currentTarget.style.backgroundColor === "#CF511F") {
      $(event.currentTarget).css({
        "background-color": "white"
      });
      $(event.currentTarget).find('.pBoxCategory').css({
        "color": "black"
      });
      $(event.currentTarget).find('img').css({
        "filter": "brightness(0) invert(0)"
      });
    } else {
      $(event.currentTarget).css({
        "background-color": "#CF511F"
      });
      $(event.currentTarget).find('.pBoxCategory').css({
        "color": "white"
      });
      $(event.currentTarget).find('img').css({
        "filter": "brightness(0) invert(1)"
      });
    }
  }

  render() {
    return __jsx(_components_mapLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "container-fluid conMap h-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "navbarMaps",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "form-inline",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "Image/JGO logo.png",
      className: "img-fluid",
      style: {
        width: "100px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "divNavs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: "navText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, "HOME"), __jsx("p", {
      className: "navText",
      style: {
        color: "#CF511F"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, "DELIVER"), __jsx("p", {
      className: "navText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, "CONTACT"), __jsx("p", {
      className: "navText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, "LOG-IN")))), __jsx("div", {
      className: "row align-items-center h-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-lg-6 colLeft",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: "pPick",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, " ", __jsx("img", {
      src: "Image/mapgps.svg",
      className: "img-fluid",
      style: {
        marginRight: "10px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }), " ", "Pick Up Location"), __jsx("p", {
      className: "pPick-up",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 15
      }
    }, global.config.place.deliver.pickoff), __jsx("p", {
      className: "pPick",
      style: {
        marginTop: "30px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, " ", __jsx("img", {
      src: "Image/mapgps.svg",
      className: "img-fluid",
      style: {
        marginRight: "10px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }), "Drop Off Location"), __jsx("p", {
      className: "pDrop-off",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }, global.config.place.deliver.dropoff), __jsx("p", {
      className: "pNote",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    }, "Note: Delivery only within Metro Manila"), __jsx("div", {
      className: "divCategory",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: "pPick",
      style: {
        fontSize: "1rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }
    }, "Category"), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "boxCategory align-items-center d-flex justify-content-center",
      onClick: this.getComponent.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "Image/001-file.svg",
      className: "img-fluid mx-auto d-flex imgCategory",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }), __jsx("p", {
      className: "pBoxCategory",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 25
      }
    }, "DOCUMENT")))), __jsx("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "boxCategory align-items-center d-flex justify-content-center",
      onClick: this.getComponent.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "Image/002-pizza.svg",
      className: "img-fluid mx-auto d-flex imgCategory",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 25
      }
    }), __jsx("p", {
      className: "pBoxCategory",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 25
      }
    }, "FOOD")))), __jsx("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "boxCategory align-items-center d-flex justify-content-center",
      onClick: this.getComponent.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "Image/clothing.svg",
      className: "img-fluid mx-auto d-flex imgCategory",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }), __jsx("p", {
      className: "pBoxCategory",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 25
      }
    }, "CLOTHING")))), __jsx("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "boxCategory align-items-center d-flex justify-content-center",
      onClick: this.getComponent.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "Image/medical.svg",
      className: "img-fluid mx-auto d-flex imgCategory",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 25
      }
    }), __jsx("p", {
      className: "pBoxCategory",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 25
      }
    }, "MEDICAL")))), __jsx("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "boxCategory align-items-center d-flex justify-content-center",
      onClick: this.getComponent.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "Image/001-file.svg",
      className: "img-fluid mx-auto d-flex imgCategory",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 25
      }
    }), __jsx("p", {
      className: "pBoxCategory",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 25
      }
    }, "FRAGILE")))), __jsx("div", {
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "boxCategory align-items-center d-flex justify-content-center",
      onClick: this.getComponent.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "Image/other.svg",
      className: "img-fluid mx-auto d-flex imgCategory",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 25
      }
    }), __jsx("p", {
      className: "pBoxCategory",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 25
      }
    }, "OTHERS")))), __jsx("div", {
      className: "col-lg-12 col-md-12 col-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 19
      }
    }, __jsx("p", {
      className: "pNote",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 21
      }
    }, "Note: MAXIMUM WEIGHT IS 10kg"))), __jsx("div", {
      className: "row",
      style: {
        marginTop: "30px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "col-lg-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 19
      }
    }, __jsx("p", {
      className: "pAdditional",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 21
      }
    }, "Additional Services")), __jsx("div", {
      className: "col-lg-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "boxAdditional",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "pAdditonalBox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 23
      }
    }, "Insulated Box"))), __jsx("div", {
      className: "col-lg-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "boxAdditional",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "pAdditonalBox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 23
      }
    }, "Cash Handling"))), __jsx("div", {
      className: "col-lg-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "boxAdditional",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "pAdditonalBox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 23
      }
    }, "Queueing Service"))), __jsx("div", {
      className: "col-lg-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "boxAdditional",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "pAdditonalBox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 23
      }
    }, "Pabili Service")))), __jsx("div", {
      clasName: "row",
      style: {
        marginTop: "20px",
        padding: "0px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "col-lg-6",
      style: {
        paddingLeft: "0px;"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "form-inline",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "Image/mastercard.svg",
      className: "img-fluid",
      style: {
        width: "50px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 23
      }
    }), __jsx("p", {
      className: "pCardNumber",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 23
      }
    }, "Mastercard 8278")))))), __jsx("div", {
      className: "col-lg-6 colMap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 13
      }
    }, __jsx(_components_try__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 15
      }
    })))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (map);

/***/ }),

/***/ 5:
/*!****************************!*\
  !*** multi ./pages/map.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alfon\Documents\Work Projects\Github\Jgo\pages\map.js */"./pages/map.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXBMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90cnkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWFwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZ29vZ2xlLW1hcHNcIiJdLCJuYW1lcyI6WyJNYXAiLCJDb21wb25lbnQiLCJkaXJlY3Rpb25zIiwiY29tcG9uZW50RGlkTW91bnQiLCJkaXJlY3Rpb25zU2VydmljZSIsImdvb2dsZSIsIm1hcHMiLCJEaXJlY3Rpb25zU2VydmljZSIsIm9yaWdpbiIsImxhdCIsImdsb2JhbCIsImNvbmZpZyIsInBsYWNlIiwiZGVsaXZlciIsInBpY2tvZmZsYXQiLCJsbmciLCJwaWNrb2ZmbGFuZyIsImRlc3RpbmF0aW9uIiwiZHJvcG9mZmxhdCIsImRyb3BvZmZsYW5nIiwicm91dGUiLCJ0cmF2ZWxNb2RlIiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciLCJyZXN1bHQiLCJzdGF0dXMiLCJEaXJlY3Rpb25zU3RhdHVzIiwiT0siLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJlcnJvciIsInJlbmRlciIsIkdvb2dsZU1hcEV4YW1wbGUiLCJ3aXRoR29vZ2xlTWFwIiwicHJvcHMiLCJzdGF0ZSIsImhlaWdodCIsIndpZHRoIiwibW9kdWxlIiwiZXhwb3J0cyIsInBpY2tvZmYiLCJkcm9wb2ZmIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJBcHAiLCJNYXBMb2FkZXIiLCJ3aXRoU2NyaXB0anMiLCJtYXAiLCJjb25zdHJ1Y3RvciIsImdldENvbXBvbmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiJCIsImNzcyIsImZpbmQiLCJjb2xvciIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJiaW5kIiwicGFkZGluZyIsInBhZGRpbmdMZWZ0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLE1BQU1BLEdBQU4sU0FBa0JDLCtDQUFsQixDQUE0QjtBQUFBO0FBQUE7O0FBQUEsbUNBQ2xCO0FBQ05DLGdCQUFVLEVBQUU7QUFETixLQURrQjtBQUFBOztBQUsxQkMsbUJBQWlCLEdBQUc7QUFDbEIsVUFBTUMsaUJBQWlCLEdBQUcsSUFBSUMsTUFBTSxDQUFD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LE9BQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0E5SkYsQ0FsQkYsQ0FERixDQURGO0FBeUxEOztBQXpOZ0M7QUE0TnBCVSxrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pPQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiLypnbG9iYWwgZ29vZ2xlKi9cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvY29uZmlnJztcclxuaW1wb3J0IHtcclxuICB3aXRoR29vZ2xlTWFwLFxyXG4gIHdpdGhTY3JpcHRqcyxcclxuICBHb29nbGVNYXAsXHJcbiAgRGlyZWN0aW9uc1JlbmRlcmVyXHJcbn0gZnJvbSBcInJlYWN0LWdvb2dsZS1tYXBzXCI7XHJcbmNsYXNzIE1hcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBkaXJlY3Rpb25zOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xyXG5cclxuICAgIGNvbnN0IG9yaWdpbiA9IHsgbGF0OiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIucGlja29mZmxhdCAsIGxuZzogZ2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZsYW5nIH07XHJcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHsgbGF0OiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhdCwgbG5nOiBnbG9iYWwuY29uZmlnLnBsYWNlLmRlbGl2ZXIuZHJvcG9mZmxhbmcgfTtcclxuXHJcbiAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShcclxuICAgICAge1xyXG4gICAgICAgIG9yaWdpbjogb3JpZ2luLFxyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBkZXN0aW5hdGlvbixcclxuICAgICAgICB0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkdcclxuICAgICAgfSxcclxuICAgICAgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbnM6IHJlc3VsdFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGVycm9yIGZldGNoaW5nIGRpcmVjdGlvbnMgJHtyZXN1bHR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgR29vZ2xlTWFwRXhhbXBsZSA9IHdpdGhHb29nbGVNYXAocHJvcHMgPT4gKFxyXG4gICAgICA8R29vZ2xlTWFwXHJcbiAgICAgICAgZGVmYXVsdENlbnRlcj17eyBsYXQ6IDE0LjM1OTgwNTMsIGxuZzogMTIwLjkzMDE2NDQgfX1cclxuICAgICAgICBkZWZhdWx0Wm9vbT17MTN9XHJcbiAgICAgID5cclxuICAgICAgICA8RGlyZWN0aW9uc1JlbmRlcmVyXHJcbiAgICAgICAgICBkaXJlY3Rpb25zPXt0aGlzLnN0YXRlLmRpcmVjdGlvbnN9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Hb29nbGVNYXA+XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxHb29nbGVNYXBFeGFtcGxlXHJcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDEwMHZoYCwgd2lkdGg6IFwiMTAwJSBcIiB9fSAvPn1cclxuICAgICAgICAgIG1hcEVsZW1lbnQ9ezxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgMTAwJWAgfX0gLz59XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5jb25maWcgPSB7XHJcbiAgICBwbGFjZToge1xyXG4gICAgICAgIGRlbGl2ZXI6IHtcclxuICAgICAgICAgICAgcGlja29mZjogXCJudWxsXCIsXHJcbiAgICAgICAgICAgIGRyb3BvZmY6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICBwaWNrb2ZmbGF0OiBcIlwiLFxyXG4gICAgICAgICAgICBwaWNrb2ZmbGFuZzogXCJcIixcclxuICAgICAgICAgICAgZHJvcG9mZmxhdDogXCJcIixcclxuICAgICAgICAgICAgZHJvcG9mZmxhbmc6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICA8aHRtbD5cclxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIgfX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5KZ28gV2Vic2l0ZTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJDU1MvaW5kZXguY3NzXCI+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA0MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvbGluaz5cclxuXHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNS4xLnNsaW0ubWluLmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1EZlhkejJodFBIMGxzU1NzNW5DVHB1ai96eTRDK09HcGFtb0ZWeTM4TVZCbkUrSWJiVllVZXcrT3JDWGFSa2ZqXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wb3BwZXIuanNAMS4xNi4wL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVE2RTlSSHZiSXlaRkpvZnQrMm1KYkhhRVdsZGx2STlJT1l5NW4zelY5enpUdG1JM1Vrc2RRUlZ2b3hNZm9vQW9cIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9qcy9ib290c3RyYXAubWluLmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1PZ1ZSdnVBVFAxejdKakhMa3VPVTdYdzcwNCtoODM1THIrNlFMOVV2WWpaRTNJcHU2VHA3NWo3Qmgva1IwSktJXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBhc3luYyBkZWZlciBzcmM9XCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PUFJemFTeUR6emlfVkJjZjJPZWY2TFRWaUxVNzY3VVBOSGxuSXplNCZsaWJyYXJpZXM9cGxhY2VzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJTY3JpcHQvamdvLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICA8L2h0bWw+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IHdpdGhTY3JpcHRqcyB9IGZyb20gXCJyZWFjdC1nb29nbGUtbWFwc1wiO1xyXG5pbXBvcnQgTWFwIGZyb20gXCIuL01hcFwiO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IE1hcExvYWRlciA9IHdpdGhTY3JpcHRqcyhNYXApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1hcExvYWRlclxyXG4gICAgICBnb29nbGVNYXBVUkw9XCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PUFJemFTeUR6emlfVkJjZjJPZWY2TFRWaUxVNzY3VVBOSGxuSXplNFwiXHJcbiAgICAgIGxvYWRpbmdFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDEwMCVgIH19IC8+fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFwTGF5b3V0XCI7XHJcbmltcG9ydCBHb29nbGVtYXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvdHJ5XCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgbWFwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcG9uZW50KGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IFwiI0NGNTExRlwiKSB7XHJcbiAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuY3NzKHtcclxuICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZVwiLFxyXG4gICAgICB9KTtcclxuICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5maW5kKCcucEJveENhdGVnb3J5JykuY3NzICh7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcImJsYWNrXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZmluZCgnaW1nJykuY3NzICh7XHJcbiAgICAgICAgXCJmaWx0ZXJcIjogXCJicmlnaHRuZXNzKDApIGludmVydCgwKVwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmNzcyh7XHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI0NGNTExRlwiLFxyXG4gICAgICB9KTtcclxuICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5maW5kKCcucEJveENhdGVnb3J5JykuY3NzICh7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIndoaXRlXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZmluZCgnaW1nJykuY3NzICh7XHJcbiAgICAgICAgXCJmaWx0ZXJcIjogXCJicmlnaHRuZXNzKDApIGludmVydCgxKVwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjb25NYXAgaC0xMDBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyTWFwc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvSkdPIGxvZ28ucG5nXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDBweFwiIH19XHJcbiAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2TmF2c1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmF2VGV4dFwiPkhPTUU8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuYXZUZXh0XCIgc3R5bGU9e3sgY29sb3I6IFwiI0NGNTExRlwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBERUxJVkVSXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuYXZUZXh0XCI+Q09OVEFDVDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hdlRleHRcIj5MT0ctSU48L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2xMZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFBpY2tcIj5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFwZ3BzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIFBpY2sgVXAgTG9jYXRpb25cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicFBpY2stdXBcIj57Z2xvYmFsLmNvbmZpZy5wbGFjZS5kZWxpdmVyLnBpY2tvZmZ9PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQaWNrXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvbWFwZ3BzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgRHJvcCBPZmYgTG9jYXRpb25cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicERyb3Atb2ZmXCI+e2dsb2JhbC5jb25maWcucGxhY2UuZGVsaXZlci5kcm9wb2ZmfTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwTm90ZVwiPk5vdGU6IERlbGl2ZXJ5IG9ubHkgd2l0aGluIE1ldHJvIE1hbmlsYTwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwUGlja1wiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2V0Q29tcG9uZW50LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlLzAwMS1maWxlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94Q2F0ZWdvcnlcIj5ET0NVTUVOVDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3hDYXRlZ29yeSBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nZXRDb21wb25lbnQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiSW1hZ2UvMDAyLXBpenphLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94Q2F0ZWdvcnlcIj5GT09EPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveENhdGVnb3J5IGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdldENvbXBvbmVudC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9jbG90aGluZy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveENhdGVnb3J5XCI+Q0xPVEhJTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2V0Q29tcG9uZW50LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlL21lZGljYWwuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXgtYXV0byBkLWZsZXggaW1nQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBCb3hDYXRlZ29yeVwiPk1FRElDQUw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94Q2F0ZWdvcnkgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2V0Q29tcG9uZW50LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIkltYWdlLzAwMS1maWxlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG14LWF1dG8gZC1mbGV4IGltZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQm94Q2F0ZWdvcnlcIj5GUkFHSUxFPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveENhdGVnb3J5IGFsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdldENvbXBvbmVudC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9vdGhlci5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBteC1hdXRvIGQtZmxleCBpbWdDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEJveENhdGVnb3J5XCI+T1RIRVJTPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicE5vdGVcIj5Ob3RlOiBNQVhJTVVNIFdFSUdIVCBJUyAxMGtnPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBZGRpdGlvbmFsXCI+QWRkaXRpb25hbCBTZXJ2aWNlczwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEFkZGl0aW9uYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBZGRpdG9uYWxCb3hcIj5JbnN1bGF0ZWQgQm94PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94QWRkaXRpb25hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicEFkZGl0b25hbEJveFwiPkNhc2ggSGFuZGxpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hBZGRpdGlvbmFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwQWRkaXRvbmFsQm94XCI+UXVldWVpbmcgU2VydmljZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEFkZGl0aW9uYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBBZGRpdG9uYWxCb3hcIj5QYWJpbGkgU2VydmljZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc05hbWU9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCBwYWRkaW5nOiBcIjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIwcHg7XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9tYXN0ZXJjYXJkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicENhcmROdW1iZXJcIj5NYXN0ZXJjYXJkIDgyNzg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbE1hcFwiPlxyXG4gICAgICAgICAgICAgIDxHb29nbGVtYXA+PC9Hb29nbGVtYXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtbWFwc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9