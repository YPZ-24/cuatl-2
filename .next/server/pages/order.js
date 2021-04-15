module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/order.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/fetch-sessions.ts":
/*!***********************************!*\
  !*** ./actions/fetch-sessions.ts ***!
  \***********************************/
/*! exports provided: getSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSession", function() { return getSession; });
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");

const getSession = async token => {
  const url = token.includes('id_token') ? _config_globals__WEBPACK_IMPORTED_MODULE_0__["AUTH_GOOGLE_CALLBACK"] : _config_globals__WEBPACK_IMPORTED_MODULE_0__["AUTH_FACEBOOK_CALLBACK"];
  const response = await fetch(url + token);
  const sessionData = await response.json();
  return {
    token: sessionData.jwt,
    user: {
      id: sessionData.user.id,
      username: sessionData.user.username,
      email: sessionData.user.email,
      avatar: sessionData.user.avatar ? sessionData.user.avatar.formats.thumbnail : null
    }
  };
};

/***/ }),

/***/ "./components/buttons/PaymentButton.js":
/*!*********************************************!*\
  !*** ./components/buttons/PaymentButton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\buttons\\PaymentButton.js";







const stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__["loadStripe"])(_config_globals__WEBPACK_IMPORTED_MODULE_5__["STRIPE_PUBLISHED_KEY"]);

const PaymentButton = ({
  order
}) => {
  const {
    getToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  const handleClick = async () => {
    /*
    const stripe = await stripePromise;
    const token = await getToken();
      const response = await fetch(`${API_DOMAIN}/orders`, {
      method: 'POST',
      body: JSON.stringify({ order }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const session = await response.json();
    
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });*/
    router.push('/user/address');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: handleClick,
    variant: "contained",
    color: "primary",
    fullWidth: true,
    children: "Continuar la compra"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};

PaymentButton.propTypes = {
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
PaymentButton.default = {
  order: []
};
/* harmony default export */ __webpack_exports__["default"] = (PaymentButton);

/***/ }),

/***/ "./components/tables/OrderResumeTable.js":
/*!***********************************************!*\
  !*** ./components/tables/OrderResumeTable.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/format-price */ "./utils/format-price.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _buttons_PaymentButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buttons/PaymentButton */ "./components/buttons/PaymentButton.js");


var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\tables\\OrderResumeTable.js";






const OrderResumeTable = ({
  order
}) => {
  const {
    0: total,
    1: setTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let subTotal = 0;

    for (let i = 0; i < order.length; i++) {
      subTotal += order[i].product.price * order[i].quantity;
    }

    setTotal(subTotal);
  }, [order]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "h5",
      align: "center",
      children: "TOTAL"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "h6",
      align: "center",
      children: Object(_utils_format_price__WEBPACK_IMPORTED_MODULE_3__["default"])('MXN', total)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_buttons_PaymentButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      order: order
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

OrderResumeTable.propTypes = {
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
OrderResumeTable.defaultProps = {
  order: []
};
/* harmony default export */ __webpack_exports__["default"] = (OrderResumeTable);

/***/ }),

/***/ "./components/tables/OrderTable.js":
/*!*****************************************!*\
  !*** ./components/tables/OrderTable.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\tables\\OrderTable.js";




const OrderTable = ({
  order,
  removeProduct
}) => {
  console.log("ORDE");
  console.log(order.variant);
  console.log(order.product);
  console.log(order.variant);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableContainer"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      size: "small",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableHead"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "QUITAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "PRODUCTO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "COLOR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "TAMA\xD1O"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "PRECIO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "CANTIDAD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "FINAL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableBody"], {
        children: order.map((orderItem, itemNumber) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
              onClick: () => removeProduct(itemNumber),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            children: orderItem.product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            children: orderItem.variant.color
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            children: orderItem.variant.size
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            children: orderItem.product.price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            children: orderItem.quantity
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            children: orderItem.product.price * orderItem.quantity
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, undefined)]
        }, itemNumber, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

OrderTable.propTypes = {
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
OrderTable.defaultProps = {
  order: []
};
/* harmony default export */ __webpack_exports__["default"] = (OrderTable);

/***/ }),

/***/ "./config/globals.ts":
/*!***************************!*\
  !*** ./config/globals.ts ***!
  \***************************/
/*! exports provided: API_DOMAIN, PAGE_LIMIT, AUTH_FACEBOOK_CALLBACK, AUTH_FACEBOOK_URL, AUTH_GOOGLE_CALLBACK, AUTH_GOOGLE_URL, STRIPE_PUBLISHED_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DOMAIN", function() { return API_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_LIMIT", function() { return PAGE_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_FACEBOOK_CALLBACK", function() { return AUTH_FACEBOOK_CALLBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_FACEBOOK_URL", function() { return AUTH_FACEBOOK_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_GOOGLE_CALLBACK", function() { return AUTH_GOOGLE_CALLBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_GOOGLE_URL", function() { return AUTH_GOOGLE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRIPE_PUBLISHED_KEY", function() { return STRIPE_PUBLISHED_KEY; });
const API_DOMAIN = "http://localhost:1337";
const PAGE_LIMIT = 12;
const AUTH_FACEBOOK_CALLBACK = `${API_DOMAIN}/auth/facebook/callback`;
const AUTH_FACEBOOK_URL = `${API_DOMAIN}/connect/facebook`;
const AUTH_GOOGLE_CALLBACK = `${API_DOMAIN}/auth/google/callback`;
const AUTH_GOOGLE_URL = `${API_DOMAIN}/connect/google`;
const STRIPE_PUBLISHED_KEY = "pk_test_51Hw15gJ4rvPOyPXnQ6Rjf7X4RxmsSBqvTVy3h3Bfwdo2WddlWAgC64bzfHeQbn4V5jJpPrJ7eHeWrGQMWOlRzW8700mrQLCJpL";


/***/ }),

/***/ "./context/AuthContext.tsx":
/*!*********************************!*\
  !*** ./context/AuthContext.tsx ***!
  \*********************************/
/*! exports provided: default, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_fetch_sessions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/actions/fetch-sessions */ "./actions/fetch-sessions.ts");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\context\\AuthContext.tsx";



//: use this context wherever you want to access the AuthProvider
const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])(null);
/* harmony default export */ __webpack_exports__["default"] = (AuthContext);
 //: use this component in the _app.tsx file to share the authentication state
//: globally

function AuthProvider({
  children
}) {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const login = async () => {
    if ('id_token' in router.query || 'access_token' in router.query) {
      const session = await Object(_actions_fetch_sessions__WEBPACK_IMPORTED_MODULE_3__["getSession"])(location.search);
      router.replace('/');
      sessionStorage.setItem('session', JSON.stringify(session));
      setUser(session.user);
    }
  };

  const logout = () => {
    sessionStorage.removeItem('session');
    setUser(null);
    router.push('/');
  };

  const getSessionStorage = () => {
    try {
      return JSON.parse(sessionStorage.getItem('session'));
    } catch (_error) {
      console.error(_error.message);
      return null;
    }
  };

  const getToken = () => {
    return getSessionStorage().token;
  }; //: use this custom hook to set the local session into the global state each
  //: time a page is refreshed; use it only on page components


  const useSession = () => {
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
      const session = getSessionStorage();
      setUser(session === null || session === void 0 ? void 0 : session.user);
    }, []);
  };

  const isUserLoggedIn = () => {
    return getSessionStorage() ? true : false;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: {
      user,
      login,
      logout,
      getToken,
      isUserLoggedIn,
      useSession
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

;

/***/ }),

/***/ "./context/OrderContext.tsx":
/*!**********************************!*\
  !*** ./context/OrderContext.tsx ***!
  \**********************************/
/*! exports provided: default, OrderProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderProvider", function() { return OrderProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\context\\OrderContext.tsx";

//: use this context whenever you want to access the OrderProvider
const OrderContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
/* harmony default export */ __webpack_exports__["default"] = (OrderContext);
 //: use this component in all the other components where you want to access
//: the global state of a user order

function OrderProvider({
  children
}) {
  const {
    0: order,
    1: setOrder
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const getOrder = () => {
    try {
      return JSON.parse(localStorage.getItem('order')) || [];
    } catch (error) {}

    return [];
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const o = getOrder();
    setOrder(o);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    saveOrder(order);
  }, [order]);

  const countProducts = () => {
    //return order ? order.variants.length : 0;
    return 0;
  };

  const saveOrder = order => {
    localStorage.setItem('order', JSON.stringify(order));
  };

  const addProductToBag = (variantQuantity, product) => {
    const activeOrder = [...order]; //: if the product and variant is already there

    const indexOfOrderItem = activeOrder.findIndex(orderItem => orderItem.variant.id === product.variant.id);

    if (indexOfOrderItem !== -1) {
      //: update quantity
      const currentQuantity = activeOrder[indexOfOrderItem].quantity;

      if (currentQuantity + variantQuantity <= product.variant.stock) {
        activeOrder[indexOfOrderItem].quantity = currentQuantity + variantQuantity;
      }
    } else {
      activeOrder.push({
        product: product.product,
        variant: product.variant,
        quantity: variantQuantity,
        offers: product.offers
      });
    }

    setOrder(activeOrder); //saveOrder(activeOrder)
  };

  const removeProduct = itemNumber => {
    alert("BORRAR");
    const activeOrder = [...order];
    activeOrder.splice(itemNumber, 1);
    setOrder(activeOrder); //saveOrder(order)
  };
  /*
    
    const addOrderItem = (item: IPaymentOrder) => {
  };
    //: use this function to add a new item to the order in local storage
  const setOrderItemInLS = (activeOrder: Array<IPaymentOrder>) => {
    localStorage.setItem('orderItems', JSON.stringify(activeOrder));
  };
    //: use this function to get the current order object from local storage
  const getOrderItemFromLS = (): Array<IPaymentOrder> => {
    try {
      return JSON.parse(localStorage.getItem('orderItems')) || [];
    } catch (_error) {
      console.error((_error as SyntaxError).message);
      return null;
    }
  };*/


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OrderContext.Provider, {
    value: {
      order,
      countProducts,
      addProductToBag,
      removeProduct
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, this);
}

;

/***/ }),

/***/ "./pages/order.tsx":
/*!*************************!*\
  !*** ./pages/order.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_tables_OrderResumeTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/tables/OrderResumeTable */ "./components/tables/OrderResumeTable.js");
/* harmony import */ var _components_tables_OrderTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/tables/OrderTable */ "./components/tables/OrderTable.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/OrderContext */ "./context/OrderContext.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\pages\\order.tsx";






function OrderPage() {
  const {
    user,
    useSession
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const {
    order,
    removeProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_5__["default"]); //const [order, setOrder] = useState([]);

  /*
  const getOrder = (): Array<IPaymentOrder> => {
    try {
      return JSON.parse(localStorage.getItem('order')) || [];
    } catch (error) { }
      return [];
  };
    useEffect(()=>{
    setOrder(getOrder)
  },[])*/

  useSession();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      container: true,
      spacing: 5,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
          variant: "h4",
          align: "center",
          children: "BOLSA DE COMPRAS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), order.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        item: true,
        xs: 12,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
          variant: "h5",
          align: "center",
          children: "A\xFAn no tienes articulos en tu bolsa"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 14
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
          variant: "h5",
          align: "center",
          children: "Agrega algunos"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 14
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
          item: true,
          xs: 12,
          md: 9,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_tables_OrderTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
            order: order,
            removeProduct: removeProduct
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
          item: true,
          xs: 12,
          md: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_tables_OrderResumeTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
            order: order
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
;

/***/ }),

/***/ "./utils/format-price.ts":
/*!*******************************!*\
  !*** ./utils/format-price.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This function is used to format prices to make them look like:
 * US 300.90, MX 1589.90 or GB 12.00
 *
 * Currency codes (ISO 4217 currency codes) are passed as arguments depending on
 * i18n global context.
 */
const formatPrice = (currencyCode, price) => {
  //: force two decimals
  const priceWithDecimals = parseFloat(String(price)).toFixed(2);
  return `${currencyCode.toUpperCase()} ${priceWithDecimals}`;
};

/* harmony default export */ __webpack_exports__["default"] = (formatPrice);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9mZXRjaC1zZXNzaW9ucy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvUGF5bWVudEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlcy9PcmRlclJlc3VtZVRhYmxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGVzL09yZGVyVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9BdXRoQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9PcmRlckNvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL29yZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9mb3JtYXQtcHJpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN0cmlwZS9zdHJpcGUtanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJ0b2tlbiIsInVybCIsImluY2x1ZGVzIiwiQVVUSF9HT09HTEVfQ0FMTEJBQ0siLCJBVVRIX0ZBQ0VCT09LX0NBTExCQUNLIiwicmVzcG9uc2UiLCJmZXRjaCIsInNlc3Npb25EYXRhIiwianNvbiIsImp3dCIsInVzZXIiLCJpZCIsInVzZXJuYW1lIiwiZW1haWwiLCJhdmF0YXIiLCJmb3JtYXRzIiwidGh1bWJuYWlsIiwic3RyaXBlUHJvbWlzZSIsImxvYWRTdHJpcGUiLCJTVFJJUEVfUFVCTElTSEVEX0tFWSIsIlBheW1lbnRCdXR0b24iLCJvcmRlciIsImdldFRva2VuIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2xpY2siLCJwdXNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJkZWZhdWx0IiwiT3JkZXJSZXN1bWVUYWJsZSIsInRvdGFsIiwic2V0VG90YWwiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN1YlRvdGFsIiwiaSIsImxlbmd0aCIsInByb2R1Y3QiLCJwcmljZSIsInF1YW50aXR5IiwiZm9ybWF0UHJpY2UiLCJkZWZhdWx0UHJvcHMiLCJPcmRlclRhYmxlIiwicmVtb3ZlUHJvZHVjdCIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYW50IiwibWFwIiwib3JkZXJJdGVtIiwiaXRlbU51bWJlciIsIm5hbWUiLCJjb2xvciIsInNpemUiLCJBUElfRE9NQUlOIiwicHJvY2VzcyIsIlBBR0VfTElNSVQiLCJBVVRIX0ZBQ0VCT09LX1VSTCIsIkFVVEhfR09PR0xFX1VSTCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFVzZXIiLCJsb2dpbiIsInF1ZXJ5Iiwic2Vzc2lvbiIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiZ2V0U2Vzc2lvblN0b3JhZ2UiLCJwYXJzZSIsImdldEl0ZW0iLCJfZXJyb3IiLCJlcnJvciIsIm1lc3NhZ2UiLCJ1c2VTZXNzaW9uIiwiaXNVc2VyTG9nZ2VkSW4iLCJPcmRlckNvbnRleHQiLCJPcmRlclByb3ZpZGVyIiwic2V0T3JkZXIiLCJnZXRPcmRlciIsImxvY2FsU3RvcmFnZSIsIm8iLCJzYXZlT3JkZXIiLCJjb3VudFByb2R1Y3RzIiwiYWRkUHJvZHVjdFRvQmFnIiwidmFyaWFudFF1YW50aXR5IiwiYWN0aXZlT3JkZXIiLCJpbmRleE9mT3JkZXJJdGVtIiwiZmluZEluZGV4IiwiY3VycmVudFF1YW50aXR5Iiwic3RvY2siLCJvZmZlcnMiLCJhbGVydCIsInNwbGljZSIsIk9yZGVyUGFnZSIsIkF1dGhDb250ZXgiLCJjdXJyZW5jeUNvZGUiLCJwcmljZVdpdGhEZWNpbWFscyIsInBhcnNlRmxvYXQiLCJTdHJpbmciLCJ0b0ZpeGVkIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFHTyxNQUFNQSxVQUFVLEdBQUcsTUFBT0MsS0FB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RUFBRDtBQUFZLGlCQUFLLEVBQUVuQixLQUFuQjtBQUEwQix5QkFBYSxFQUFFMEI7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFJQyxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQW1CLFlBQUUsRUFBRSxDQUF2QjtBQUFBLGlDQUNFLHFFQUFDLDJFQUFEO0FBQWtCLGlCQUFLLEVBQUUxQjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRDtBQUFBLHNCQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBd0JEO0FBQUEsQzs7Ozs7Ozs7Ozs7O0FDdkREO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNdUIsV0FBcUUsR0FBRyxDQUFDOEQsWUFBRCxFQUFlaEUsS0FBZixLQUF5QjtBQUNyRztBQUNBLFFBQU1pRSxpQkFBaUIsR0FBR0MsVUFBVSxDQUFDQyxNQUFNLENBQUNuRSxLQUFELENBQVAsQ0FBVixDQUEwQm9FLE9BQTFCLENBQWtDLENBQWxDLENBQTFCO0FBRUEsU0FBUSxHQUFFSixZQUFZLENBQUNLLFdBQWIsRUFBMkIsSUFBR0osaUJBQWtCLEVBQTFEO0FBQ0QsQ0FMRDs7QUFPZS9ELDBFQUFmLEU7Ozs7Ozs7Ozs7O0FDZEEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvb3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL29yZGVyLnRzeFwiKTtcbiIsImltcG9ydCB7IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0ssIEFVVEhfR09PR0xFX0NBTExCQUNLIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcbmltcG9ydCBJU2Vzc2lvbiBmcm9tICdAL21vZGVscy9JU2Vzc2lvbic7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2Vzc2lvbiA9IGFzeW5jICh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxJU2Vzc2lvbj4gPT4ge1xyXG4gIGNvbnN0IHVybDogc3RyaW5nID0gdG9rZW4uaW5jbHVkZXMoJ2lkX3Rva2VuJylcclxuICAgID8gQVVUSF9HT09HTEVfQ0FMTEJBQ0tcclxuICAgIDogQVVUSF9GQUNFQk9PS19DQUxMQkFDSztcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyB0b2tlbik7XHJcbiAgY29uc3Qgc2Vzc2lvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b2tlbjogc2Vzc2lvbkRhdGEuand0LFxyXG4gICAgdXNlcjoge1xyXG4gICAgICBpZDogc2Vzc2lvbkRhdGEudXNlci5pZCxcclxuICAgICAgdXNlcm5hbWU6IHNlc3Npb25EYXRhLnVzZXIudXNlcm5hbWUsXHJcbiAgICAgIGVtYWlsOiBzZXNzaW9uRGF0YS51c2VyLmVtYWlsLFxyXG4gICAgICBhdmF0YXI6IHNlc3Npb25EYXRhLnVzZXIuYXZhdGFyXHJcbiAgICAgICAgPyBzZXNzaW9uRGF0YS51c2VyLmF2YXRhci5mb3JtYXRzLnRodW1ibmFpbFxyXG4gICAgICAgIDogbnVsbFxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFNUUklQRV9QVUJMSVNIRURfS0VZLCBBUElfRE9NQUlOIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuXHJcbmNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKFNUUklQRV9QVUJMSVNIRURfS0VZKTtcclxuXHJcbmNvbnN0IFBheW1lbnRCdXR0b24gPSAoeyBvcmRlciB9KSA9PiB7XHJcbiAgY29uc3QgeyBnZXRUb2tlbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLypcclxuICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IHN0cmlwZVByb21pc2U7XHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKCk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfRE9NQUlOfS9vcmRlcnNgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG9yZGVyIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7XHJcbiAgICAgIHNlc3Npb25JZDogc2Vzc2lvbi5pZFxyXG4gICAgfSk7Ki9cclxuICAgIHJvdXRlci5wdXNoKCcvdXNlci9hZGRyZXNzJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBmdWxsV2lkdGg+XHJcbiAgICAgIENvbnRpbnVhciBsYSBjb21wcmFcclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5QYXltZW50QnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBvcmRlcjogUHJvcFR5cGVzLmFycmF5XHJcbn07XHJcblxyXG5QYXltZW50QnV0dG9uLmRlZmF1bHQgPSB7XHJcbiAgb3JkZXI6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50QnV0dG9uO1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IGZvcm1hdFByaWNlIGZyb20gJ0AvdXRpbHMvZm9ybWF0LXByaWNlJztcclxuaW1wb3J0IHtUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFBheW1lbnRCdXR0b24gZnJvbSAnLi4vYnV0dG9ucy9QYXltZW50QnV0dG9uJztcclxuXHJcbmNvbnN0IE9yZGVyUmVzdW1lVGFibGUgPSAoeyBvcmRlciB9KSA9PiB7XHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHN1YlRvdGFsID0gMFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzdWJUb3RhbCArPSBvcmRlcltpXS5wcm9kdWN0LnByaWNlICogb3JkZXJbaV0ucXVhbnRpdHk7XHJcbiAgICB9XHJcbiAgICBzZXRUb3RhbChzdWJUb3RhbClcclxuICB9LCBbb3JkZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGFsaWduPVwiY2VudGVyXCI+VE9UQUw8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGFsaWduPVwiY2VudGVyXCI+e2Zvcm1hdFByaWNlKCdNWE4nLHRvdGFsKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxQYXltZW50QnV0dG9uIG9yZGVyPXtvcmRlcn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5PcmRlclJlc3VtZVRhYmxlLnByb3BUeXBlcyA9IHtcclxuICBvcmRlcjogUHJvcFR5cGVzLmFycmF5XHJcbn07XHJcblxyXG5PcmRlclJlc3VtZVRhYmxlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBvcmRlcjogW11cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyUmVzdW1lVGFibGU7XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7VGFibGVDb250YWluZXIsIFRhYmxlLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgSWNvbkJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBJY29uRGVsZXRlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGUnXHJcblxyXG5jb25zdCBPcmRlclRhYmxlID0gKHsgb3JkZXIsIHJlbW92ZVByb2R1Y3R9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJPUkRFXCIpXHJcbiAgY29uc29sZS5sb2cob3JkZXIudmFyaWFudClcclxuICBjb25zb2xlLmxvZyhvcmRlci5wcm9kdWN0KVxyXG4gIGNvbnNvbGUubG9nKG9yZGVyLnZhcmlhbnQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVDb250YWluZXI+XHJcbiAgICAgIDxUYWJsZSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudCA9IFwidGhcIj5RVUlUQVI8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQgPSBcInRoXCI+UFJPRFVDVE88L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQgPSBcInRoXCI+Q09MT1I8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQgPSBcInRoXCI+VEFNQcORTzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudCA9IFwidGhcIj5QUkVDSU88L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQgPSBcInRoXCI+Q0FOVElEQUQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQgPSBcInRoXCI+RklOQUw8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgIHtvcmRlci5tYXAoKG9yZGVySXRlbSwgaXRlbU51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2l0ZW1OdW1iZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCk9PnJlbW92ZVByb2R1Y3QoaXRlbU51bWJlcil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uRGVsZXRlLz5cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntvcmRlckl0ZW0ucHJvZHVjdC5uYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57b3JkZXJJdGVtLnZhcmlhbnQuY29sb3J9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntvcmRlckl0ZW0udmFyaWFudC5zaXplfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57b3JkZXJJdGVtLnByb2R1Y3QucHJpY2V9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntvcmRlckl0ZW0ucXVhbnRpdHl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntvcmRlckl0ZW0ucHJvZHVjdC5wcmljZSpvcmRlckl0ZW0ucXVhbnRpdHl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgIDwvVGFibGU+XHJcbiAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5PcmRlclRhYmxlLnByb3BUeXBlcyA9IHtcclxuICBvcmRlcjogUHJvcFR5cGVzLmFycmF5XHJcbn07XHJcblxyXG5PcmRlclRhYmxlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBvcmRlcjogW11cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyVGFibGU7XHJcbiIsImNvbnN0IEFQSV9ET01BSU4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRE9NQUlOO1xyXG5jb25zdCBQQUdFX0xJTUlUID0gMTI7XHJcblxyXG5jb25zdCBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLID0gYCR7QVBJX0RPTUFJTn0vYXV0aC9mYWNlYm9vay9jYWxsYmFja2A7XHJcbmNvbnN0IEFVVEhfRkFDRUJPT0tfVVJMID0gYCR7QVBJX0RPTUFJTn0vY29ubmVjdC9mYWNlYm9va2A7XHJcbmNvbnN0IEFVVEhfR09PR0xFX0NBTExCQUNLID0gYCR7QVBJX0RPTUFJTn0vYXV0aC9nb29nbGUvY2FsbGJhY2tgO1xyXG5jb25zdCBBVVRIX0dPT0dMRV9VUkwgPSBgJHtBUElfRE9NQUlOfS9jb25uZWN0L2dvb2dsZWA7XHJcblxyXG5jb25zdCBTVFJJUEVfUFVCTElTSEVEX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSVNIRURfS0VZO1xyXG5cclxuZXhwb3J0IHtcclxuICBBUElfRE9NQUlOLFxyXG4gIFBBR0VfTElNSVQsXHJcbiAgQVVUSF9GQUNFQk9PS19DQUxMQkFDSyxcclxuICBBVVRIX0ZBQ0VCT09LX1VSTCxcclxuICBBVVRIX0dPT0dMRV9DQUxMQkFDSyxcclxuICBBVVRIX0dPT0dMRV9VUkwsXHJcbiAgU1RSSVBFX1BVQkxJU0hFRF9LRVlcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ0AvYWN0aW9ucy9mZXRjaC1zZXNzaW9ucyc7XHJcbmltcG9ydCBJU2Vzc2lvbiBmcm9tICdAL21vZGVscy9JU2Vzc2lvbic7XHJcbmltcG9ydCBJVXNlciBmcm9tICdAL21vZGVscy9JVXNlcic7XHJcblxyXG4vLzogdXNlIHRoaXMgY29udGV4dCB3aGVyZXZlciB5b3Ugd2FudCB0byBhY2Nlc3MgdGhlIEF1dGhQcm92aWRlclxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuZXhwb3J0IHsgQXV0aFByb3ZpZGVyIH07XHJcblxyXG4vLzogdXNlIHRoaXMgY29tcG9uZW50IGluIHRoZSBfYXBwLnRzeCBmaWxlIHRvIHNoYXJlIHRoZSBhdXRoZW50aWNhdGlvbiBzdGF0ZVxyXG4vLzogZ2xvYmFsbHlcclxuZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPElVc2VyPihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBpZiAoJ2lkX3Rva2VuJyBpbiByb3V0ZXIucXVlcnkgfHwgJ2FjY2Vzc190b2tlbicgaW4gcm91dGVyLnF1ZXJ5KSB7XHJcbiAgICAgIGNvbnN0IHNlc3Npb246IElTZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihsb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2Vzc2lvbicsIEpTT04uc3RyaW5naWZ5KHNlc3Npb24pKTtcclxuICAgICAgc2V0VXNlcihzZXNzaW9uLnVzZXIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpOiB2b2lkID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Nlc3Npb24nKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFNlc3Npb25TdG9yYWdlID0gKCk6IElTZXNzaW9uIHwgbnVsbCA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJykpO1xyXG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoKF9lcnJvciBhcyBTeW50YXhFcnJvcikubWVzc2FnZSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFRva2VuID0gKCk6IHN0cmluZyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIGdldFNlc3Npb25TdG9yYWdlKCkudG9rZW47XHJcbiAgfTtcclxuXHJcbiAgLy86IHVzZSB0aGlzIGN1c3RvbSBob29rIHRvIHNldCB0aGUgbG9jYWwgc2Vzc2lvbiBpbnRvIHRoZSBnbG9iYWwgc3RhdGUgZWFjaFxyXG4gIC8vOiB0aW1lIGEgcGFnZSBpcyByZWZyZXNoZWQ7IHVzZSBpdCBvbmx5IG9uIHBhZ2UgY29tcG9uZW50c1xyXG4gIGNvbnN0IHVzZVNlc3Npb24gPSAoKTogdm9pZCA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNzaW9uOiBJU2Vzc2lvbiA9IGdldFNlc3Npb25TdG9yYWdlKCk7XHJcblxyXG4gICAgICBzZXRVc2VyKHNlc3Npb24/LnVzZXIpO1xyXG4gICAgfSwgW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzVXNlckxvZ2dlZEluID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgcmV0dXJuIGdldFNlc3Npb25TdG9yYWdlKCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICB1c2VyLCBsb2dpbiwgbG9nb3V0LCBnZXRUb2tlbiwgaXNVc2VyTG9nZ2VkSW4sIHVzZVNlc3Npb25cclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElQYXltZW50T3JkZXIgZnJvbSBcIkAvbW9kZWxzL0lQYXltZW50T3JkZXJcIjtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb250ZXh0IHdoZW5ldmVyIHlvdSB3YW50IHRvIGFjY2VzcyB0aGUgT3JkZXJQcm92aWRlclxyXG5jb25zdCBPcmRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJDb250ZXh0O1xyXG5cclxuZXhwb3J0IHsgT3JkZXJQcm92aWRlciB9O1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbXBvbmVudCBpbiBhbGwgdGhlIG90aGVyIGNvbXBvbmVudHMgd2hlcmUgeW91IHdhbnQgdG8gYWNjZXNzXHJcbi8vOiB0aGUgZ2xvYmFsIHN0YXRlIG9mIGEgdXNlciBvcmRlclxyXG5mdW5jdGlvbiBPcmRlclByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG5cclxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlPEFycmF5PElQYXltZW50T3JkZXI+PihbXSk7XHJcblxyXG4gIGNvbnN0IGdldE9yZGVyID0gKCk6IEFycmF5PElQYXltZW50T3JkZXI+ID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcicpKSB8fCBbXTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cclxuICAgIHJldHVybiBbXTtcclxuICB9O1xyXG5cclxuICBcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnN0IG8gPSBnZXRPcmRlcigpXHJcbiAgICBzZXRPcmRlcihvKVxyXG4gIH0sW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2F2ZU9yZGVyKG9yZGVyKVxyXG4gIH0sW29yZGVyXSlcclxuXHJcbiAgY29uc3QgY291bnRQcm9kdWN0cyA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgLy9yZXR1cm4gb3JkZXIgPyBvcmRlci52YXJpYW50cy5sZW5ndGggOiAwO1xyXG4gICAgcmV0dXJuIDBcclxuICB9O1xyXG5cclxuICBjb25zdCBzYXZlT3JkZXIgPSAob3JkZXI6IEFycmF5PElQYXltZW50T3JkZXI+KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXInLCBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFByb2R1Y3RUb0JhZyA9ICh2YXJpYW50UXVhbnRpdHk6bnVtYmVyLCBwcm9kdWN0OklQYXltZW50T3JkZXIpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZU9yZGVyID0gWy4uLm9yZGVyXVxyXG4gICAvLzogaWYgdGhlIHByb2R1Y3QgYW5kIHZhcmlhbnQgaXMgYWxyZWFkeSB0aGVyZVxyXG4gICBjb25zdCBpbmRleE9mT3JkZXJJdGVtID0gYWN0aXZlT3JkZXIuZmluZEluZGV4KChvcmRlckl0ZW06IElQYXltZW50T3JkZXIpID0+IG9yZGVySXRlbS52YXJpYW50LmlkID09PSBwcm9kdWN0LnZhcmlhbnQuaWQpO1xyXG4gICBpZiAoaW5kZXhPZk9yZGVySXRlbSAhPT0gLTEpIHtcclxuICAgICAvLzogdXBkYXRlIHF1YW50aXR5XHJcbiAgICAgY29uc3QgY3VycmVudFF1YW50aXR5ID0gYWN0aXZlT3JkZXJbaW5kZXhPZk9yZGVySXRlbV0ucXVhbnRpdHk7XHJcbiAgICAgaWYgKGN1cnJlbnRRdWFudGl0eSArIHZhcmlhbnRRdWFudGl0eSA8PSBwcm9kdWN0LnZhcmlhbnQuc3RvY2spIHtcclxuICAgICAgIGFjdGl2ZU9yZGVyW2luZGV4T2ZPcmRlckl0ZW1dLnF1YW50aXR5ID0gY3VycmVudFF1YW50aXR5ICsgdmFyaWFudFF1YW50aXR5O1xyXG4gICAgIH1cclxuICAgfSBlbHNlIHtcclxuICAgICBhY3RpdmVPcmRlci5wdXNoKHtcclxuICAgICAgIHByb2R1Y3Q6IHByb2R1Y3QucHJvZHVjdCxcclxuICAgICAgIHZhcmlhbnQ6IHByb2R1Y3QudmFyaWFudCxcclxuICAgICAgIHF1YW50aXR5OiB2YXJpYW50UXVhbnRpdHksXHJcbiAgICAgICBvZmZlcnM6IHByb2R1Y3Qub2ZmZXJzXHJcbiAgICAgfSk7XHJcbiAgIH1cclxuICAgIHNldE9yZGVyKGFjdGl2ZU9yZGVyKTtcclxuICAgIC8vc2F2ZU9yZGVyKGFjdGl2ZU9yZGVyKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZVByb2R1Y3QgPSAoaXRlbU51bWJlcikgPT4ge1xyXG4gICAgICBhbGVydChcIkJPUlJBUlwiKVxyXG4gICAgICBjb25zdCBhY3RpdmVPcmRlciA9IFsuLi5vcmRlcl1cclxuICAgICAgYWN0aXZlT3JkZXIuc3BsaWNlKGl0ZW1OdW1iZXIsIDEpXHJcbiAgICAgIHNldE9yZGVyKGFjdGl2ZU9yZGVyKVxyXG4gICAgICAvL3NhdmVPcmRlcihvcmRlcilcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuXHJcbiAgXHJcblxyXG4gIGNvbnN0IGFkZE9yZGVySXRlbSA9IChpdGVtOiBJUGF5bWVudE9yZGVyKSA9PiB7XHJcbiAgfTtcclxuXHJcbiAgLy86IHVzZSB0aGlzIGZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBpdGVtIHRvIHRoZSBvcmRlciBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgY29uc3Qgc2V0T3JkZXJJdGVtSW5MUyA9IChhY3RpdmVPcmRlcjogQXJyYXk8SVBheW1lbnRPcmRlcj4pID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlckl0ZW1zJywgSlNPTi5zdHJpbmdpZnkoYWN0aXZlT3JkZXIpKTtcclxuICB9O1xyXG5cclxuICAvLzogdXNlIHRoaXMgZnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50IG9yZGVyIG9iamVjdCBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBnZXRPcmRlckl0ZW1Gcm9tTFMgPSAoKTogQXJyYXk8SVBheW1lbnRPcmRlcj4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVySXRlbXMnKSkgfHwgW107XHJcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcigoX2Vycm9yIGFzIFN5bnRheEVycm9yKS5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTsqL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE9yZGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBvcmRlciwgY291bnRQcm9kdWN0cywgYWRkUHJvZHVjdFRvQmFnLCByZW1vdmVQcm9kdWN0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L09yZGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgT3JkZXJSZXN1bWVUYWJsZSBmcm9tICdAL2NvbXBvbmVudHMvdGFibGVzL09yZGVyUmVzdW1lVGFibGUnO1xyXG5pbXBvcnQgT3JkZXJUYWJsZSBmcm9tICdAL2NvbXBvbmVudHMvdGFibGVzL09yZGVyVGFibGUnO1xyXG5pbXBvcnQgQXV0aENvbnRleCBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgT3JkZXJDb250ZXh0IGZyb20gJ0AvY29udGV4dC9PcmRlckNvbnRleHQnO1xyXG5pbXBvcnQge1R5cG9ncmFwaHksIEdyaWR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3JkZXJQYWdlKCkge1xyXG4gIGNvbnN0IHsgdXNlciwgdXNlU2Vzc2lvbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4KTtcclxuXHJcbiAgY29uc3QgeyBvcmRlciwgcmVtb3ZlUHJvZHVjdCB9ID0gdXNlQ29udGV4dChPcmRlckNvbnRleHQpO1xyXG4gIFxyXG4gIFxyXG4gIC8vY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8qXHJcbiAgY29uc3QgZ2V0T3JkZXIgPSAoKTogQXJyYXk8SVBheW1lbnRPcmRlcj4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyJykpIHx8IFtdO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxyXG5cclxuICAgIHJldHVybiBbXTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHNldE9yZGVyKGdldE9yZGVyKVxyXG4gIH0sW10pKi9cclxuXHJcblxyXG4gIHVzZVNlc3Npb24oKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fT5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBhbGlnbj1cImNlbnRlclwiPkJPTFNBIERFIENPTVBSQVM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIHtvcmRlci5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgYWxpZ249XCJjZW50ZXJcIj5Bw7puIG5vIHRpZW5lcyBhcnRpY3Vsb3MgZW4gdHUgYm9sc2E8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBhbGlnbj1cImNlbnRlclwiPkFncmVnYSBhbGd1bm9zPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDpcclxuICAgICAgICAgPD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OX0+XHJcbiAgICAgICAgICAgIDxPcmRlclRhYmxlIG9yZGVyPXtvcmRlcn0gcmVtb3ZlUHJvZHVjdD17cmVtb3ZlUHJvZHVjdH0gLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30+XHJcbiAgICAgICAgICAgIDxPcmRlclJlc3VtZVRhYmxlIG9yZGVyPXtvcmRlcn0gLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCIvKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGZvcm1hdCBwcmljZXMgdG8gbWFrZSB0aGVtIGxvb2sgbGlrZTpcclxuICogVVMgMzAwLjkwLCBNWCAxNTg5LjkwIG9yIEdCIDEyLjAwXHJcbiAqXHJcbiAqIEN1cnJlbmN5IGNvZGVzIChJU08gNDIxNyBjdXJyZW5jeSBjb2RlcykgYXJlIHBhc3NlZCBhcyBhcmd1bWVudHMgZGVwZW5kaW5nIG9uXHJcbiAqIGkxOG4gZ2xvYmFsIGNvbnRleHQuXHJcbiAqL1xyXG5jb25zdCBmb3JtYXRQcmljZTogKGN1cnJlbmN5Q29kZTogc3RyaW5nLCBwcmljZTogbnVtYmVyIHwgc3RyaW5nKSA9PiBzdHJpbmcgPSAoY3VycmVuY3lDb2RlLCBwcmljZSkgPT4ge1xyXG4gIC8vOiBmb3JjZSB0d28gZGVjaW1hbHNcclxuICBjb25zdCBwcmljZVdpdGhEZWNpbWFscyA9IHBhcnNlRmxvYXQoU3RyaW5nKHByaWNlKSkudG9GaXhlZCgyKTtcclxuXHJcbiAgcmV0dXJuIGAke2N1cnJlbmN5Q29kZS50b1VwcGVyQ2FzZSgpfSAke3ByaWNlV2l0aERlY2ltYWxzfWA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRQcmljZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0cmlwZS9zdHJpcGUtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==