module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/user/orders.js");
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

    setOrder(activeOrder);
  };

  const removeProduct = itemNumber => {
    const activeOrder = [...order];
    activeOrder.splice(itemNumber, 1);
    setOrder(activeOrder);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OrderContext.Provider, {
    value: {
      order,
      addProductToBag,
      removeProduct,
      setOrder
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

;

/***/ }),

/***/ "./pages/user/orders.js":
/*!******************************!*\
  !*** ./pages/user/orders.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/OrderContext */ "./context/OrderContext.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/format-price */ "./utils/format-price.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_myFetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/myFetch */ "./utils/myFetch.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\pages\\user\\orders.js";











function orders() {
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_10__["useSnackbar"])();
  const {
    getToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const {
    setOrder
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const {
    0: userOrders,
    1: setUserOrders
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  const confirmOrder = async sessionId => {
    const order = await Object(_utils_myFetch__WEBPACK_IMPORTED_MODULE_9__["default"])({
      method: 'POST',
      path: `/orders/confirm`,
      body: {
        checkout_session: sessionId
      }
    });
    if (order._id) enqueueSnackbar(`Listo: ${order.status.toUpperCase()}`);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const path = router.asPath;
    const i = path.search("=");
    const sessionId = path.slice(i + 1);

    if (i != -1) {
      confirmOrder(sessionId);
      setOrder([]);
      router.push('/user/orders');
    }
  }, []);

  async function getUserOrders() {
    const token = await getToken();
    const response = await (await fetch(`${_config_globals__WEBPACK_IMPORTED_MODULE_2__["API_DOMAIN"]}/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })).json();
    setUserOrders(response);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getUserOrders();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      container: true,
      spacing: 5,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
          variant: "h4",
          align: "center",
          children: "MIS COMPRAS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        children: userOrders.map(o => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Accordion"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["AccordionSummary"], {
            expandIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 63
            }, this),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
              container: true,
              spacing: 2,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
                item: true,
                xs: 8,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
                  gutterBottom: true,
                  variant: "overline",
                  children: new Date(o.createdAt).toLocaleString()
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
                  gutterBottom: true,
                  variant: "subtitle1",
                  children: o.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
                  variant: "subtitle1",
                  children: Object(_utils_format_price__WEBPACK_IMPORTED_MODULE_7__["default"])('MXN', o.total)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
                item: true,
                xs: 1,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
                  orientation: "vertical"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
                item: true,
                xs: 3,
                style: {
                  display: "flex",
                  alignItems: "center"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
                  variant: "h6",
                  children: o.delivery_status.toUpperCase()
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 33
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["AccordionDetails"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Table"], {
              size: "small",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableHead"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableRow"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    align: "center",
                    children: "ARTICULO"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 49
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    align: "center",
                    children: "COLOR"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 49
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    align: "center",
                    children: "TAMA\xD1O"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 49
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 45
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableBody"], {
                children: o.variants.map(v => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableRow"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    children: v.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 53
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    align: "center",
                    children: v.color
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 53
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TableCell"], {
                    align: "center",
                    children: v.size
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 53
                  }, this)]
                }, `Variant-${v.id}`, true, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 49
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 33
          }, this)]
        }, `Order-${o.id}`, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 29
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (orders);

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

/***/ "./utils/myFetch.js":
/*!**************************!*\
  !*** ./utils/myFetch.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");


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
};

async function myFetch({
  method,
  path,
  body
}) {
  try {
    const res = await fetch(_config_globals__WEBPACK_IMPORTED_MODULE_0__["API_DOMAIN"] + path, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      }
    });
    let data;
    data = await res.json();
    return data;
  } catch (e) {
    //e.message = "Fetch failed"
    return e;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (myFetch);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "notistack":
/*!****************************!*\
  !*** external "notistack" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("notistack");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9mZXRjaC1zZXNzaW9ucy50cyIsIndlYnBhY2s6Ly8vLi9jb25maWcvZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L09yZGVyQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlci9vcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybWF0LXByaWNlLnRzIiwid2VicGFjazovLy8uL3V0aWxzL215RmV0Y2guanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm90aXN0YWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwidG9rZW4iLCJ1cmwiLCJpbmNsdWRlcyIsIkFVVEhfR09PR0xFX0NBTExCQUNLIiwiQVVUSF9GQUNFQk9PS19DQUxMQkFDSyIsInJlc3BvbnNlIiwiZmV0Y2giLCJzZXNzaW9uRGF0YSIsImpzb24iLCJqd3QiLCJ1c2VyIiwiaWQiLCJ1c2VybmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiZm9ybWF0cyIsInRodW1ibmFpbCIsIkFQSV9ET01BSU4iLCJwcm9jZXNzIiwiUEFHRV9MSU1JVCIsIkFVVEhfRkFDRUJPT0tfVVJMIiwiQVVUSF9HT09HTEVfVVJMIiwiU1RSSVBFX1BVQkxJU0hFRF9LRVkiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImxvZ2luIiwicXVlcnkiLCJzZXNzaW9uIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiZ2V0U2Vzc2lvblN0b3JhZ2UiLCJwYXJzZSIsImdldEl0ZW0iLCJfZXJyb3IiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2V0VG9rZW4iLCJ1c2VTZXNzaW9uIiwidXNlRWZmZWN0IiwiaXNVc2VyTG9nZ2VkSW4iLCJPcmRlckNvbnRleHQiLCJPcmRlclByb3ZpZGVyIiwib3JkZXIiLCJzZXRPcmRlciIsImdldE9yZGVyIiwibG9jYWxTdG9yYWdlIiwibyIsInNhdmVPcmRlciIsImFkZFByb2R1Y3RUb0JhZyIsInZhcmlhbnRRdWFudGl0eSIsInByb2R1Y3QiLCJhY3RpdmVPcmRlciIsImluZGV4T2ZPcmRlckl0ZW0iLCJmaW5kSW5kZXgiLCJvcmRlckl0ZW0iLCJ2YXJpYW50IiwiY3VycmVudFF1YW50aXR5IiwicXVhbnRpdHkiLCJzdG9jayIsIm9mZmVycyIsInJlbW92ZVByb2R1Y3QiLCJpdGVtTnVtYmVyIiwic3BsaWNlIiwib3JkZXJzIiwiZW5xdWV1ZVNuYWNrYmFyIiwidXNlU25hY2tiYXIiLCJ1c2VDb250ZXh0IiwidXNlck9yZGVycyIsInNldFVzZXJPcmRlcnMiLCJjb25maXJtT3JkZXIiLCJzZXNzaW9uSWQiLCJteUZldGNoIiwibWV0aG9kIiwicGF0aCIsImJvZHkiLCJjaGVja291dF9zZXNzaW9uIiwiX2lkIiwic3RhdHVzIiwidG9VcHBlckNhc2UiLCJhc1BhdGgiLCJpIiwic2xpY2UiLCJnZXRVc2VyT3JkZXJzIiwiaGVhZGVycyIsIm1hcCIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZVN0cmluZyIsImZvcm1hdFByaWNlIiwidG90YWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImRlbGl2ZXJ5X3N0YXR1cyIsInZhcmlhbnRzIiwidiIsIm5hbWUiLCJjb2xvciIsInNpemUiLCJjdXJyZW5jeUNvZGUiLCJwcmljZSIsInByaWNlV2l0aERlY2ltYWxzIiwicGFyc2VGbG9hdCIsIlN0cmluZyIsInRvRml4ZWQiLCJyZXMiLCJkYXRhIiwiZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUdPLE1BQU1BLFVBQVUsR0FBRyxNQUFPQyxLQUFQLElBQTRDO0FBQ3BFLFFBQU1DLEdBQVcsR0FBR0QsS0FBSyxDQUFDRSxRQUFOLENBQWUsVUFBZixJQUNoQkMsb0VBRGdCLEdBRWhCQyxzRUFGSjtBQUlBLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNMLEdB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Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3VzZXIvb3JkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy91c2VyL29yZGVycy5qc1wiKTtcbiIsImltcG9ydCB7IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0ssIEFVVEhfR09PR0xFX0NBTExCQUNLIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcbmltcG9ydCBJU2Vzc2lvbiBmcm9tICdAL21vZGVscy9JU2Vzc2lvbic7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2Vzc2lvbiA9IGFzeW5jICh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxJU2Vzc2lvbj4gPT4ge1xyXG4gIGNvbnN0IHVybDogc3RyaW5nID0gdG9rZW4uaW5jbHVkZXMoJ2lkX3Rva2VuJylcclxuICAgID8gQVVUSF9HT09HTEVfQ0FMTEJBQ0tcclxuICAgIDogQVVUSF9GQUNFQk9PS19DQUxMQkFDSztcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyB0b2tlbik7XHJcbiAgY29uc3Qgc2Vzc2lvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b2tlbjogc2Vzc2lvbkRhdGEuand0LFxyXG4gICAgdXNlcjoge1xyXG4gICAgICBpZDogc2Vzc2lvbkRhdGEudXNlci5pZCxcclxuICAgICAgdXNlcm5hbWU6IHNlc3Npb25EYXRhLnVzZXIudXNlcm5hbWUsXHJcbiAgICAgIGVtYWlsOiBzZXNzaW9uRGF0YS51c2VyLmVtYWlsLFxyXG4gICAgICBhdmF0YXI6IHNlc3Npb25EYXRhLnVzZXIuYXZhdGFyXHJcbiAgICAgICAgPyBzZXNzaW9uRGF0YS51c2VyLmF2YXRhci5mb3JtYXRzLnRodW1ibmFpbFxyXG4gICAgICAgIDogbnVsbFxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbiIsImNvbnN0IEFQSV9ET01BSU4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRE9NQUlOO1xyXG5jb25zdCBQQUdFX0xJTUlUID0gMTI7XHJcblxyXG5jb25zdCBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLID0gYCR7QVBJX0RPTUFJTn0vYXV0aC9mYWNlYm9vay9jYWxsYmFja2A7XHJcbmNvbnN0IEFVVEhfRkFDRUJPT0tfVVJMID0gYCR7QVBJX0RPTUFJTn0vY29ubmVjdC9mYWNlYm9va2A7XHJcbmNvbnN0IEFVVEhfR09PR0xFX0NBTExCQUNLID0gYCR7QVBJX0RPTUFJTn0vYXV0aC9nb29nbGUvY2FsbGJhY2tgO1xyXG5jb25zdCBBVVRIX0dPT0dMRV9VUkwgPSBgJHtBUElfRE9NQUlOfS9jb25uZWN0L2dvb2dsZWA7XHJcblxyXG5jb25zdCBTVFJJUEVfUFVCTElTSEVEX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSVNIRURfS0VZO1xyXG5cclxuZXhwb3J0IHtcclxuICBBUElfRE9NQUlOLFxyXG4gIFBBR0VfTElNSVQsXHJcbiAgQVVUSF9GQUNFQk9PS19DQUxMQkFDSyxcclxuICBBVVRIX0ZBQ0VCT09LX1VSTCxcclxuICBBVVRIX0dPT0dMRV9DQUxMQkFDSyxcclxuICBBVVRIX0dPT0dMRV9VUkwsXHJcbiAgU1RSSVBFX1BVQkxJU0hFRF9LRVlcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ0AvYWN0aW9ucy9mZXRjaC1zZXNzaW9ucyc7XHJcbmltcG9ydCBJU2Vzc2lvbiBmcm9tICdAL21vZGVscy9JU2Vzc2lvbic7XHJcbmltcG9ydCBJVXNlciBmcm9tICdAL21vZGVscy9JVXNlcic7XHJcblxyXG4vLzogdXNlIHRoaXMgY29udGV4dCB3aGVyZXZlciB5b3Ugd2FudCB0byBhY2Nlc3MgdGhlIEF1dGhQcm92aWRlclxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuZXhwb3J0IHsgQXV0aFByb3ZpZGVyIH07XHJcblxyXG4vLzogdXNlIHRoaXMgY29tcG9uZW50IGluIHRoZSBfYXBwLnRzeCBmaWxlIHRvIHNoYXJlIHRoZSBhdXRoZW50aWNhdGlvbiBzdGF0ZVxyXG4vLzogZ2xvYmFsbHlcclxuZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPElVc2VyPihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBpZiAoJ2lkX3Rva2VuJyBpbiByb3V0ZXIucXVlcnkgfHwgJ2FjY2Vzc190b2tlbicgaW4gcm91dGVyLnF1ZXJ5KSB7XHJcbiAgICAgIGNvbnN0IHNlc3Npb246IElTZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihsb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2Vzc2lvbicsIEpTT04uc3RyaW5naWZ5KHNlc3Npb24pKTtcclxuICAgICAgc2V0VXNlcihzZXNzaW9uLnVzZXIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpOiB2b2lkID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Nlc3Npb24nKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFNlc3Npb25TdG9yYWdlID0gKCk6IElTZXNzaW9uIHwgbnVsbCA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJykpO1xyXG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoKF9lcnJvciBhcyBTeW50YXhFcnJvcikubWVzc2FnZSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFRva2VuID0gKCk6IHN0cmluZyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIGdldFNlc3Npb25TdG9yYWdlKCkudG9rZW47XHJcbiAgfTtcclxuXHJcbiAgLy86IHVzZSB0aGlzIGN1c3RvbSBob29rIHRvIHNldCB0aGUgbG9jYWwgc2Vzc2lvbiBpbnRvIHRoZSBnbG9iYWwgc3RhdGUgZWFjaFxyXG4gIC8vOiB0aW1lIGEgcGFnZSBpcyByZWZyZXNoZWQ7IHVzZSBpdCBvbmx5IG9uIHBhZ2UgY29tcG9uZW50c1xyXG4gIGNvbnN0IHVzZVNlc3Npb24gPSAoKTogdm9pZCA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNzaW9uOiBJU2Vzc2lvbiA9IGdldFNlc3Npb25TdG9yYWdlKCk7XHJcblxyXG4gICAgICBzZXRVc2VyKHNlc3Npb24/LnVzZXIpO1xyXG4gICAgfSwgW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzVXNlckxvZ2dlZEluID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgcmV0dXJuIGdldFNlc3Npb25TdG9yYWdlKCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICB1c2VyLCBsb2dpbiwgbG9nb3V0LCBnZXRUb2tlbiwgaXNVc2VyTG9nZ2VkSW4sIHVzZVNlc3Npb25cclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElQYXltZW50T3JkZXIgZnJvbSBcIkAvbW9kZWxzL0lQYXltZW50T3JkZXJcIjtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb250ZXh0IHdoZW5ldmVyIHlvdSB3YW50IHRvIGFjY2VzcyB0aGUgT3JkZXJQcm92aWRlclxyXG5jb25zdCBPcmRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJDb250ZXh0O1xyXG5cclxuZXhwb3J0IHsgT3JkZXJQcm92aWRlciB9O1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbXBvbmVudCBpbiBhbGwgdGhlIG90aGVyIGNvbXBvbmVudHMgd2hlcmUgeW91IHdhbnQgdG8gYWNjZXNzXHJcbi8vOiB0aGUgZ2xvYmFsIHN0YXRlIG9mIGEgdXNlciBvcmRlclxyXG5mdW5jdGlvbiBPcmRlclByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG5cclxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlPEFycmF5PElQYXltZW50T3JkZXI+PihbXSk7XHJcblxyXG4gIGNvbnN0IGdldE9yZGVyID0gKCk6IEFycmF5PElQYXltZW50T3JkZXI+ID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcicpKSB8fCBbXTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cclxuICAgIHJldHVybiBbXTtcclxuICB9O1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgbyA9IGdldE9yZGVyKClcclxuICAgIHNldE9yZGVyKG8pXHJcbiAgfSxbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzYXZlT3JkZXIob3JkZXIpXHJcbiAgfSxbb3JkZXJdKVxyXG5cclxuICBjb25zdCBzYXZlT3JkZXIgPSAob3JkZXI6IEFycmF5PElQYXltZW50T3JkZXI+KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXInLCBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFByb2R1Y3RUb0JhZyA9ICh2YXJpYW50UXVhbnRpdHk6bnVtYmVyLCBwcm9kdWN0OklQYXltZW50T3JkZXIpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZU9yZGVyID0gWy4uLm9yZGVyXVxyXG4gICAvLzogaWYgdGhlIHByb2R1Y3QgYW5kIHZhcmlhbnQgaXMgYWxyZWFkeSB0aGVyZVxyXG4gICBjb25zdCBpbmRleE9mT3JkZXJJdGVtID0gYWN0aXZlT3JkZXIuZmluZEluZGV4KChvcmRlckl0ZW06IElQYXltZW50T3JkZXIpID0+IG9yZGVySXRlbS52YXJpYW50LmlkID09PSBwcm9kdWN0LnZhcmlhbnQuaWQpO1xyXG4gICBpZiAoaW5kZXhPZk9yZGVySXRlbSAhPT0gLTEpIHtcclxuICAgICAvLzogdXBkYXRlIHF1YW50aXR5XHJcbiAgICAgY29uc3QgY3VycmVudFF1YW50aXR5ID0gYWN0aXZlT3JkZXJbaW5kZXhPZk9yZGVySXRlbV0ucXVhbnRpdHk7XHJcbiAgICAgaWYgKGN1cnJlbnRRdWFudGl0eSArIHZhcmlhbnRRdWFudGl0eSA8PSBwcm9kdWN0LnZhcmlhbnQuc3RvY2spIHtcclxuICAgICAgIGFjdGl2ZU9yZGVyW2luZGV4T2ZPcmRlckl0ZW1dLnF1YW50aXR5ID0gY3VycmVudFF1YW50aXR5ICsgdmFyaWFudFF1YW50aXR5O1xyXG4gICAgIH1cclxuICAgfSBlbHNlIHtcclxuICAgICBhY3RpdmVPcmRlci5wdXNoKHtcclxuICAgICAgIHByb2R1Y3Q6IHByb2R1Y3QucHJvZHVjdCxcclxuICAgICAgIHZhcmlhbnQ6IHByb2R1Y3QudmFyaWFudCxcclxuICAgICAgIHF1YW50aXR5OiB2YXJpYW50UXVhbnRpdHksXHJcbiAgICAgICBvZmZlcnM6IHByb2R1Y3Qub2ZmZXJzXHJcbiAgICAgfSk7XHJcbiAgIH1cclxuICAgIHNldE9yZGVyKGFjdGl2ZU9yZGVyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVQcm9kdWN0ID0gKGl0ZW1OdW1iZXIpID0+IHtcclxuICAgICAgY29uc3QgYWN0aXZlT3JkZXIgPSBbLi4ub3JkZXJdXHJcbiAgICAgIGFjdGl2ZU9yZGVyLnNwbGljZShpdGVtTnVtYmVyLCAxKVxyXG4gICAgICBzZXRPcmRlcihhY3RpdmVPcmRlcilcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE9yZGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBvcmRlciwgYWRkUHJvZHVjdFRvQmFnLCByZW1vdmVQcm9kdWN0LCBzZXRPcmRlciB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9PcmRlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFQSV9ET01BSU4gfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJ0AvY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCBPcmRlckNvbnRleHQgZnJvbSAnQC9jb250ZXh0L09yZGVyQ29udGV4dCc7XHJcbmltcG9ydCB7IEFjY29yZGlvbiwgQWNjb3JkaW9uU3VtbWFyeSwgVHlwb2dyYXBoeSwgQWNjb3JkaW9uRGV0YWlscywgR3JpZCwgRGl2aWRlciwgVGFibGUsIFRhYmxlSGVhZCwgVGFibGVCb2R5LCBUYWJsZVJvdywgVGFibGVDZWxsIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSdcclxuaW1wb3J0IGZvcm1hdFByaWNlIGZyb20gJ0AvdXRpbHMvZm9ybWF0LXByaWNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgbXlGZXRjaCBmcm9tICcuLi8uLi91dGlscy9teUZldGNoJ1xyXG5pbXBvcnQge3VzZVNuYWNrYmFyfSBmcm9tICdub3Rpc3RhY2snXHJcblxyXG5mdW5jdGlvbiBvcmRlcnMoKSB7XHJcblxyXG4gICAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKCk7XHJcbiAgICBjb25zdCB7IGdldFRva2VuIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgc2V0T3JkZXIgfSA9IHVzZUNvbnRleHQoT3JkZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IFt1c2VyT3JkZXJzLCBzZXRVc2VyT3JkZXJzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgY29uZmlybU9yZGVyID0gYXN5bmMgKHNlc3Npb25JZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9yZGVyID0gYXdhaXQgbXlGZXRjaCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcclxuICAgICAgICAgICAgcGF0aDogYC9vcmRlcnMvY29uZmlybWAsIFxyXG4gICAgICAgICAgICBib2R5OiB7IGNoZWNrb3V0X3Nlc3Npb246IHNlc3Npb25JZCB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZihvcmRlci5faWQpIGVucXVldWVTbmFja2JhcihgTGlzdG86ICR7b3JkZXIuc3RhdHVzLnRvVXBwZXJDYXNlKCl9YClcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXRoID0gcm91dGVyLmFzUGF0aFxyXG4gICAgICAgIGNvbnN0IGkgPSBwYXRoLnNlYXJjaChcIj1cIilcclxuICAgICAgICBjb25zdCBzZXNzaW9uSWQgPSBwYXRoLnNsaWNlKGkrMSlcclxuICAgICAgICBpZihpIT0tMSkge1xyXG4gICAgICAgICAgICBjb25maXJtT3JkZXIoc2Vzc2lvbklkKVxyXG4gICAgICAgICAgICBzZXRPcmRlcihbXSlcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy91c2VyL29yZGVycycpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJPcmRlcnMoKXtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKCk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCAoYXdhaXQgZmV0Y2goYCR7QVBJX0RPTUFJTn0vb3JkZXJzYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pKS5qc29uKClcclxuICAgICAgICAgIHNldFVzZXJPcmRlcnMocmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGdldFVzZXJPcmRlcnMoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgYWxpZ249XCJjZW50ZXJcIj5NSVMgQ09NUFJBUzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJPcmRlcnMubWFwKChvKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiAga2V5PXtgT3JkZXItJHtvLmlkfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeSBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwib3ZlcmxpbmVcIiA+e25ldyBEYXRlKG8uY3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygpfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiA+e28uc3RhdHVzfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiID57Zm9ybWF0UHJpY2UoJ01YTicsby50b3RhbCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntvLmRlbGl2ZXJ5X3N0YXR1cy50b1VwcGVyQ2FzZSgpfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQVJUSUNVTE9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDT0xPUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBTUHDkU9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7by52YXJpYW50cy5tYXAoKHYpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2BWYXJpYW50LSR7di5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3YubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7di5jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7di5zaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3JkZXJzIiwiLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBmb3JtYXQgcHJpY2VzIHRvIG1ha2UgdGhlbSBsb29rIGxpa2U6XHJcbiAqIFVTIDMwMC45MCwgTVggMTU4OS45MCBvciBHQiAxMi4wMFxyXG4gKlxyXG4gKiBDdXJyZW5jeSBjb2RlcyAoSVNPIDQyMTcgY3VycmVuY3kgY29kZXMpIGFyZSBwYXNzZWQgYXMgYXJndW1lbnRzIGRlcGVuZGluZyBvblxyXG4gKiBpMThuIGdsb2JhbCBjb250ZXh0LlxyXG4gKi9cclxuY29uc3QgZm9ybWF0UHJpY2U6IChjdXJyZW5jeUNvZGU6IHN0cmluZywgcHJpY2U6IG51bWJlciB8IHN0cmluZykgPT4gc3RyaW5nID0gKGN1cnJlbmN5Q29kZSwgcHJpY2UpID0+IHtcclxuICAvLzogZm9yY2UgdHdvIGRlY2ltYWxzXHJcbiAgY29uc3QgcHJpY2VXaXRoRGVjaW1hbHMgPSBwYXJzZUZsb2F0KFN0cmluZyhwcmljZSkpLnRvRml4ZWQoMik7XHJcblxyXG4gIHJldHVybiBgJHtjdXJyZW5jeUNvZGUudG9VcHBlckNhc2UoKX0gJHtwcmljZVdpdGhEZWNpbWFsc31gO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UHJpY2U7XHJcbiIsImltcG9ydCB7IEFQSV9ET01BSU4gfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuXHJcbmNvbnN0IGdldFNlc3Npb25TdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbicpKTtcclxuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKChfZXJyb3IpLm1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFRva2VuID0gKCk9PiB7XHJcbiAgICByZXR1cm4gZ2V0U2Vzc2lvblN0b3JhZ2UoKS50b2tlbjtcclxufTtcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBteUZldGNoICh7bWV0aG9kLCBwYXRoLCBib2R5fSl7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQVBJX0RPTUFJTitwYXRoLCB7XHJcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtnZXRUb2tlbigpfWBcclxuICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGRhdGE7XHJcbiAgICAgICAgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgLy9lLm1lc3NhZ2UgPSBcIkZldGNoIGZhaWxlZFwiXHJcbiAgICAgICAgcmV0dXJuIGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbXlGZXRjaDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub3Rpc3RhY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=