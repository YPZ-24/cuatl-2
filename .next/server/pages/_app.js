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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./lib/apollo-client.ts":
/*!******************************!*\
  !*** ./lib/apollo-client.ts ***!
  \******************************/
/*! exports provided: initializeApolloClient, useApolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApolloClient", function() { return initializeApolloClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return useApolloClient; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Configuration of the Apollo Client to enable the use of GraphQL.
 */



let apolloClient;

const createApolloClient = () => {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    ssrMode: true,
    // it is true when SSR
    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
      uri: `${_config_globals__WEBPACK_IMPORTED_MODULE_2__["API_DOMAIN"]}/graphql`
    }),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]()
  });
};

const initializeApolloClient = (initialState = null) => {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); //: initial state of Next.js data fetching methods is hydrated here


  if (initialState) {
    //: get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract(); //: restore the cache using the data passed from "getStaticProps" or
    //: "getServerSideProps" combined with the existing cache data


    _apolloClient.cache.restore(_objectSpread(_objectSpread({}, existingCache), initialState));
  } //: for SSG and SSR always create a new Apollo Client


  if (true) return _apolloClient; //: create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}; //: use this custom hook in your components to hydrate the state of the Apollo
//: Client


const useApolloClient = initialState => {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeApolloClient(initialState), [initialState]);
  return store;
};



/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/OrderContext */ "./context/OrderContext.tsx");
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/apollo-client */ "./lib/apollo-client.ts");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function App({
  Component,
  pageProps
}) {
  const apolloClient = Object(_lib_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useApolloClient"])(pageProps.initialApolloState);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"], {
    client: apolloClient,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_4__["OrderProvider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

;
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9mZXRjaC1zZXNzaW9ucy50cyIsIndlYnBhY2s6Ly8vLi9jb25maWcvZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L09yZGVyQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL2Fwb2xsby1jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsInRva2VuIiwidXJsIiwiaW5jbHVkZXMiLCJBVVRIX0dPT0dMRV9DQUxMQkFDSyIsIkFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0siLCJyZXNwb25zZSIsImZldGNoIiwic2Vzc2lvbkRhdGEiLCJqc29uIiwiand0IiwidXNlciIsImlkIiwidXNlcm5hbWUiLCJlbWFpbCIsImF2YXRhciIsImZvcm1hdHMiLCJ0aHVtYm5haWwiLCJBUElfRE9NQUlOIiwicHJvY2VzcyIsIlBBR0VfTElNSVQiLCJBVVRIX0ZBQ0VCT09LX1VSTCIsIkFVVEhfR09PR0xFX1VSTCIsIlNUUklQRV9QVUJMSVNIRURfS0VZIiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dpbiIsInF1ZXJ5Iiwic2Vzc2lvbiIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwicHVzaCIsImdldFNlc3Npb25TdG9yYWdlIiwicGFyc2UiLCJnZXRJdGVtIiwiX2Vycm9yIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsImdldFRva2VuIiwidXNlU2Vzc2lvbiIsInVzZUVmZmVjdCIsImlzVXNlckxvZ2dlZEluIiwiT3JkZXJDb250ZXh0IiwiT3JkZXJQcm92aWRlciIsIm9yZGVyIiwic2V0T3JkZXIiLCJnZXRPcmRlciIsImxvY2FsU3RvcmFnZSIsIm8iLCJzYXZlT3JkZXIiLCJjb3VudFByb2R1Y3RzIiwiYWRkUHJvZHVjdFRvQmFnIiwidmFyaWFudFF1YW50aXR5IiwicHJvZHVjdCIsImFjdGl2ZU9yZGVyIiwiaW5kZXhPZk9yZGVySXRlbSIsImZpbmRJbmRleCIsIm9yZGVySXRlbSIsInZhcmlhbnQiLCJjdXJyZW50UXVhbnRpdHkiLCJxdWFudGl0eSIsInN0b2NrIiwib2ZmZXJzIiwicmVtb3ZlUHJvZHVjdCIsIml0ZW1OdW1iZXIiLCJhbGVydCIsInNwbGljZSIsImFwb2xsb0NsaWVudCIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJpbml0aWFsaXplQXBvbGxvQ2xpZW50IiwiaW5pdGlhbFN0YXRlIiwiX2Fwb2xsb0NsaWVudCIsImV4aXN0aW5nQ2FjaGUiLCJleHRyYWN0IiwicmVzdG9yZSIsInVzZUFwb2xsb0NsaWVudCIsInN0b3JlIiwidXNlTWVtbyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImluaXRpYWxBcG9sbG9TdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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VyxhQUFmO0FBRW5CLFNBQU9BLGFBQVA7QUFDRCxDQXBCRCxDLENBc0JBO0FBQ0E7OztBQUNBLE1BQU1JLGVBQWUsR0FBSUwsWUFBRCxJQUE0RDtBQUNsRixRQUFNTSxLQUFLLEdBQUdDLHFEQUFPLENBQ25CLE1BQU1SLHNCQUFzQixDQUFDQyxZQUFELENBRFQsRUFFbkIsQ0FBQ0EsWUFBRCxDQUZtQixDQUFyQjtBQUtBLFNBQU9NLEtBQVA7QUFDRCxDQVBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNFLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUFpRDtBQUMvQyxRQUFNcEIsWUFBWSxHQUFHZSwwRUFBZSxDQUFDSyxTQUFTLENBQUNDLGtCQUFYLENBQXBDO0FBRUEsc0JBQ0UscUVBQUMsNkRBQUQ7QUFBZ0IsVUFBTSxFQUFFckIsWUFBeEI7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFBLDZCQUNFLHFFQUFDLG1FQUFEO0FBQUEsK0JBQ0UscUVBQUMsU0FBRCxvQkFBZW9CLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0FBQUE7QUFFY0Ysa0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0ssIEFVVEhfR09PR0xFX0NBTExCQUNLIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcbmltcG9ydCBJU2Vzc2lvbiBmcm9tICdAL21vZGVscy9JU2Vzc2lvbic7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2Vzc2lvbiA9IGFzeW5jICh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxJU2Vzc2lvbj4gPT4ge1xyXG4gIGNvbnN0IHVybDogc3RyaW5nID0gdG9rZW4uaW5jbHVkZXMoJ2lkX3Rva2VuJylcclxuICAgID8gQVVUSF9HT09HTEVfQ0FMTEJBQ0tcclxuICAgIDogQVVUSF9GQUNFQk9PS19DQUxMQkFDSztcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyB0b2tlbik7XHJcbiAgY29uc3Qgc2Vzc2lvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b2tlbjogc2Vzc2lvbkRhdGEuand0LFxyXG4gICAgdXNlcjoge1xyXG4gICAgICBpZDogc2Vzc2lvbkRhdGEudXNlci5pZCxcclxuICAgICAgdXNlcm5hbWU6IHNlc3Npb25EYXRhLnVzZXIudXNlcm5hbWUsXHJcbiAgICAgIGVtYWlsOiBzZXNzaW9uRGF0YS51c2VyLmVtYWlsLFxyXG4gICAgICBhdmF0YXI6IHNlc3Npb25EYXRhLnVzZXIuYXZhdGFyXHJcbiAgICAgICAgPyBzZXNzaW9uRGF0YS51c2VyLmF2YXRhci5mb3JtYXRzLnRodW1ibmFpbFxyXG4gICAgICAgIDogbnVsbFxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbiIsImNvbnN0IEFQSV9ET01BSU4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRE9NQUlOO1xyXG5jb25zdCBQQUdFX0xJTUlUID0gMTI7XHJcblxyXG5jb25zdCBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLID0gYCR7QVBJX0RPTUFJTn0vYXV0aC9mYWNlYm9vay9jYWxsYmFja2A7XHJcbmNvbnN0IEFVVEhfRkFDRUJPT0tfVVJMID0gYCR7QVBJX0RPTUFJTn0vY29ubmVjdC9mYWNlYm9va2A7XHJcbmNvbnN0IEFVVEhfR09PR0xFX0NBTExCQUNLID0gYCR7QVBJX0RPTUFJTn0vYXV0aC9nb29nbGUvY2FsbGJhY2tgO1xyXG5jb25zdCBBVVRIX0dPT0dMRV9VUkwgPSBgJHtBUElfRE9NQUlOfS9jb25uZWN0L2dvb2dsZWA7XHJcblxyXG5jb25zdCBTVFJJUEVfUFVCTElTSEVEX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSVNIRURfS0VZO1xyXG5cclxuZXhwb3J0IHtcclxuICBBUElfRE9NQUlOLFxyXG4gIFBBR0VfTElNSVQsXHJcbiAgQVVUSF9GQUNFQk9PS19DQUxMQkFDSyxcclxuICBBVVRIX0ZBQ0VCT09LX1VSTCxcclxuICBBVVRIX0dPT0dMRV9DQUxMQkFDSyxcclxuICBBVVRIX0dPT0dMRV9VUkwsXHJcbiAgU1RSSVBFX1BVQkxJU0hFRF9LRVlcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ0AvYWN0aW9ucy9mZXRjaC1zZXNzaW9ucyc7XHJcbmltcG9ydCBJU2Vzc2lvbiBmcm9tICdAL21vZGVscy9JU2Vzc2lvbic7XHJcbmltcG9ydCBJVXNlciBmcm9tICdAL21vZGVscy9JVXNlcic7XHJcblxyXG4vLzogdXNlIHRoaXMgY29udGV4dCB3aGVyZXZlciB5b3Ugd2FudCB0byBhY2Nlc3MgdGhlIEF1dGhQcm92aWRlclxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuZXhwb3J0IHsgQXV0aFByb3ZpZGVyIH07XHJcblxyXG4vLzogdXNlIHRoaXMgY29tcG9uZW50IGluIHRoZSBfYXBwLnRzeCBmaWxlIHRvIHNoYXJlIHRoZSBhdXRoZW50aWNhdGlvbiBzdGF0ZVxyXG4vLzogZ2xvYmFsbHlcclxuZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPElVc2VyPihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBpZiAoJ2lkX3Rva2VuJyBpbiByb3V0ZXIucXVlcnkgfHwgJ2FjY2Vzc190b2tlbicgaW4gcm91dGVyLnF1ZXJ5KSB7XHJcbiAgICAgIGNvbnN0IHNlc3Npb246IElTZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihsb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2Vzc2lvbicsIEpTT04uc3RyaW5naWZ5KHNlc3Npb24pKTtcclxuICAgICAgc2V0VXNlcihzZXNzaW9uLnVzZXIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpOiB2b2lkID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Nlc3Npb24nKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFNlc3Npb25TdG9yYWdlID0gKCk6IElTZXNzaW9uIHwgbnVsbCA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJykpO1xyXG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoKF9lcnJvciBhcyBTeW50YXhFcnJvcikubWVzc2FnZSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFRva2VuID0gKCk6IHN0cmluZyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIGdldFNlc3Npb25TdG9yYWdlKCkudG9rZW47XHJcbiAgfTtcclxuXHJcbiAgLy86IHVzZSB0aGlzIGN1c3RvbSBob29rIHRvIHNldCB0aGUgbG9jYWwgc2Vzc2lvbiBpbnRvIHRoZSBnbG9iYWwgc3RhdGUgZWFjaFxyXG4gIC8vOiB0aW1lIGEgcGFnZSBpcyByZWZyZXNoZWQ7IHVzZSBpdCBvbmx5IG9uIHBhZ2UgY29tcG9uZW50c1xyXG4gIGNvbnN0IHVzZVNlc3Npb24gPSAoKTogdm9pZCA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNzaW9uOiBJU2Vzc2lvbiA9IGdldFNlc3Npb25TdG9yYWdlKCk7XHJcblxyXG4gICAgICBzZXRVc2VyKHNlc3Npb24/LnVzZXIpO1xyXG4gICAgfSwgW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzVXNlckxvZ2dlZEluID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgcmV0dXJuIGdldFNlc3Npb25TdG9yYWdlKCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICB1c2VyLCBsb2dpbiwgbG9nb3V0LCBnZXRUb2tlbiwgaXNVc2VyTG9nZ2VkSW4sIHVzZVNlc3Npb25cclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElQYXltZW50T3JkZXIgZnJvbSBcIkAvbW9kZWxzL0lQYXltZW50T3JkZXJcIjtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb250ZXh0IHdoZW5ldmVyIHlvdSB3YW50IHRvIGFjY2VzcyB0aGUgT3JkZXJQcm92aWRlclxyXG5jb25zdCBPcmRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJDb250ZXh0O1xyXG5cclxuZXhwb3J0IHsgT3JkZXJQcm92aWRlciB9O1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbXBvbmVudCBpbiBhbGwgdGhlIG90aGVyIGNvbXBvbmVudHMgd2hlcmUgeW91IHdhbnQgdG8gYWNjZXNzXHJcbi8vOiB0aGUgZ2xvYmFsIHN0YXRlIG9mIGEgdXNlciBvcmRlclxyXG5mdW5jdGlvbiBPcmRlclByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG5cclxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlPEFycmF5PElQYXltZW50T3JkZXI+PihbXSk7XHJcblxyXG4gIGNvbnN0IGdldE9yZGVyID0gKCk6IEFycmF5PElQYXltZW50T3JkZXI+ID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcicpKSB8fCBbXTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cclxuICAgIHJldHVybiBbXTtcclxuICB9O1xyXG5cclxuICBcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnN0IG8gPSBnZXRPcmRlcigpXHJcbiAgICBzZXRPcmRlcihvKVxyXG4gIH0sW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2F2ZU9yZGVyKG9yZGVyKVxyXG4gIH0sW29yZGVyXSlcclxuXHJcbiAgY29uc3QgY291bnRQcm9kdWN0cyA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgLy9yZXR1cm4gb3JkZXIgPyBvcmRlci52YXJpYW50cy5sZW5ndGggOiAwO1xyXG4gICAgcmV0dXJuIDBcclxuICB9O1xyXG5cclxuICBjb25zdCBzYXZlT3JkZXIgPSAob3JkZXI6IEFycmF5PElQYXltZW50T3JkZXI+KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXInLCBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFByb2R1Y3RUb0JhZyA9ICh2YXJpYW50UXVhbnRpdHk6bnVtYmVyLCBwcm9kdWN0OklQYXltZW50T3JkZXIpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZU9yZGVyID0gWy4uLm9yZGVyXVxyXG4gICAvLzogaWYgdGhlIHByb2R1Y3QgYW5kIHZhcmlhbnQgaXMgYWxyZWFkeSB0aGVyZVxyXG4gICBjb25zdCBpbmRleE9mT3JkZXJJdGVtID0gYWN0aXZlT3JkZXIuZmluZEluZGV4KChvcmRlckl0ZW06IElQYXltZW50T3JkZXIpID0+IG9yZGVySXRlbS52YXJpYW50LmlkID09PSBwcm9kdWN0LnZhcmlhbnQuaWQpO1xyXG4gICBpZiAoaW5kZXhPZk9yZGVySXRlbSAhPT0gLTEpIHtcclxuICAgICAvLzogdXBkYXRlIHF1YW50aXR5XHJcbiAgICAgY29uc3QgY3VycmVudFF1YW50aXR5ID0gYWN0aXZlT3JkZXJbaW5kZXhPZk9yZGVySXRlbV0ucXVhbnRpdHk7XHJcbiAgICAgaWYgKGN1cnJlbnRRdWFudGl0eSArIHZhcmlhbnRRdWFudGl0eSA8PSBwcm9kdWN0LnZhcmlhbnQuc3RvY2spIHtcclxuICAgICAgIGFjdGl2ZU9yZGVyW2luZGV4T2ZPcmRlckl0ZW1dLnF1YW50aXR5ID0gY3VycmVudFF1YW50aXR5ICsgdmFyaWFudFF1YW50aXR5O1xyXG4gICAgIH1cclxuICAgfSBlbHNlIHtcclxuICAgICBhY3RpdmVPcmRlci5wdXNoKHtcclxuICAgICAgIHByb2R1Y3Q6IHByb2R1Y3QucHJvZHVjdCxcclxuICAgICAgIHZhcmlhbnQ6IHByb2R1Y3QudmFyaWFudCxcclxuICAgICAgIHF1YW50aXR5OiB2YXJpYW50UXVhbnRpdHksXHJcbiAgICAgICBvZmZlcnM6IHByb2R1Y3Qub2ZmZXJzXHJcbiAgICAgfSk7XHJcbiAgIH1cclxuICAgIHNldE9yZGVyKGFjdGl2ZU9yZGVyKTtcclxuICAgIC8vc2F2ZU9yZGVyKGFjdGl2ZU9yZGVyKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZVByb2R1Y3QgPSAoaXRlbU51bWJlcikgPT4ge1xyXG4gICAgICBhbGVydChcIkJPUlJBUlwiKVxyXG4gICAgICBjb25zdCBhY3RpdmVPcmRlciA9IFsuLi5vcmRlcl1cclxuICAgICAgYWN0aXZlT3JkZXIuc3BsaWNlKGl0ZW1OdW1iZXIsIDEpXHJcbiAgICAgIHNldE9yZGVyKGFjdGl2ZU9yZGVyKVxyXG4gICAgICAvL3NhdmVPcmRlcihvcmRlcilcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuXHJcbiAgXHJcblxyXG4gIGNvbnN0IGFkZE9yZGVySXRlbSA9IChpdGVtOiBJUGF5bWVudE9yZGVyKSA9PiB7XHJcbiAgfTtcclxuXHJcbiAgLy86IHVzZSB0aGlzIGZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBpdGVtIHRvIHRoZSBvcmRlciBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgY29uc3Qgc2V0T3JkZXJJdGVtSW5MUyA9IChhY3RpdmVPcmRlcjogQXJyYXk8SVBheW1lbnRPcmRlcj4pID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlckl0ZW1zJywgSlNPTi5zdHJpbmdpZnkoYWN0aXZlT3JkZXIpKTtcclxuICB9O1xyXG5cclxuICAvLzogdXNlIHRoaXMgZnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50IG9yZGVyIG9iamVjdCBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBnZXRPcmRlckl0ZW1Gcm9tTFMgPSAoKTogQXJyYXk8SVBheW1lbnRPcmRlcj4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVySXRlbXMnKSkgfHwgW107XHJcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcigoX2Vycm9yIGFzIFN5bnRheEVycm9yKS5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTsqL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE9yZGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBvcmRlciwgY291bnRQcm9kdWN0cywgYWRkUHJvZHVjdFRvQmFnLCByZW1vdmVQcm9kdWN0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L09yZGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCIvKipcclxuICogQ29uZmlndXJhdGlvbiBvZiB0aGUgQXBvbGxvIENsaWVudCB0byBlbmFibGUgdGhlIHVzZSBvZiBHcmFwaFFMLlxyXG4gKi9cclxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBBcG9sbG9DbGllbnQsXHJcbiAgSHR0cExpbmssXHJcbiAgSW5NZW1vcnlDYWNoZSxcclxuICBOb3JtYWxpemVkQ2FjaGVPYmplY3RcclxufSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBBUElfRE9NQUlOIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcblxyXG5sZXQgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PjtcclxuXHJcbmNvbnN0IGNyZWF0ZUFwb2xsb0NsaWVudCA9ICgpOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiA9PiB7XHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcsIC8vIGl0IGlzIHRydWUgd2hlbiBTU1JcclxuICAgIGxpbms6IG5ldyBIdHRwTGluayh7IHVyaTogYCR7QVBJX0RPTUFJTn0vZ3JhcGhxbGAgfSksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCA9IChpbml0aWFsU3RhdGU6IGFueSA9IG51bGwpOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiA9PiB7XHJcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKTtcclxuXHJcbiAgLy86IGluaXRpYWwgc3RhdGUgb2YgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgaXMgaHlkcmF0ZWQgaGVyZVxyXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcclxuICAgIC8vOiBnZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xyXG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpO1xyXG5cclxuICAgIC8vOiByZXN0b3JlIHRoZSBjYWNoZSB1c2luZyB0aGUgZGF0YSBwYXNzZWQgZnJvbSBcImdldFN0YXRpY1Byb3BzXCIgb3JcclxuICAgIC8vOiBcImdldFNlcnZlclNpZGVQcm9wc1wiIGNvbWJpbmVkIHdpdGggdGhlIGV4aXN0aW5nIGNhY2hlIGRhdGFcclxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZSh7IC4uLmV4aXN0aW5nQ2FjaGUsIC4uLmluaXRpYWxTdGF0ZSB9KTtcclxuICB9XHJcblxyXG4gIC8vOiBmb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcclxuXHJcbiAgLy86IGNyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcclxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudDtcclxuXHJcbiAgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XHJcbn07XHJcblxyXG4vLzogdXNlIHRoaXMgY3VzdG9tIGhvb2sgaW4geW91ciBjb21wb25lbnRzIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIG9mIHRoZSBBcG9sbG9cclxuLy86IENsaWVudFxyXG5jb25zdCB1c2VBcG9sbG9DbGllbnQgPSAoaW5pdGlhbFN0YXRlOiBhbnkpOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiA9PiB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gaW5pdGlhbGl6ZUFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUpLFxyXG4gICAgW2luaXRpYWxTdGF0ZV1cclxuICApO1xyXG5cclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgeyBpbml0aWFsaXplQXBvbGxvQ2xpZW50LCB1c2VBcG9sbG9DbGllbnQgfTtcclxuIiwiaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIsIE5vcm1hbGl6ZWRDYWNoZU9iamVjdCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnQC9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgT3JkZXJQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dC9PcmRlckNvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VBcG9sbG9DbGllbnQgfSBmcm9tICdAL2xpYi9hcG9sbG8tY2xpZW50JztcclxuXHJcbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvQ2xpZW50KHBhZ2VQcm9wcy5pbml0aWFsQXBvbGxvU3RhdGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvQ2xpZW50fT5cclxuICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICA8T3JkZXJQcm92aWRlcj5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L09yZGVyUHJvdmlkZXI+XHJcbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==