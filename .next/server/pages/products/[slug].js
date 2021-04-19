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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+GZE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeApolloClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useApolloClient; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VS8K");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Configuration of the Apollo Client to enable the use of GraphQL.
 */



let apolloClient;

const createApolloClient = () => {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
      uri: `${_config_globals__WEBPACK_IMPORTED_MODULE_2__[/* API_DOMAIN */ "a"]}/graphql`
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

/***/ "1sxy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (formatPrice);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("tzql");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "NC1Z":
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "PwMW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProductsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProductBySlug; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

;
const getProductsPage = async (apolloClient, filter) => {
  const formatFilters = () => {
    let formattedFilters = '';

    if (filter.query) {
      if (filter.query.department) {
        formattedFilters += `
          departments: { slug: "${filter.query.department}" }
        `;
      }

      if (filter.query.category) {
        formattedFilters += `
          categories: { slug: "${filter.query.category}" }
        `;
      }

      if (filter.query.subcategory) {
        formattedFilters += `
          subcategories: { slug: "${filter.query.subcategory}" }
        `;
      }
    }

    return formattedFilters;
  };

  const {
    error,
    data
  } = await apolloClient.query({
    query: _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      query getProductsPage(
        $where: JSON! = {
          active: true
          ${formatFilters()}
        }
      ) {
        products(start: ${filter.start}, limit: ${filter.limit}, where: $where) {
          id
          slug
          name
          price
          offers(where: { active: true }) {
            id
          }
          cover {
            alternativeText
            url
          }
        }
      }
    `
  });
  return error !== null && error !== void 0 ? error : data.products.filter(product => product !== null);
};
const getProductBySlug = async (apolloClient, slug) => {
  const {
    error,
    data,
    loading
  } = await apolloClient.query({
    query: _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      query getProduct($where: JSON! = { active: true, slug: "${slug}" }) {
        products(where: $where) {
          id
          name
          description
          media {
            mime
            url
          }
          meta_description
          meta_title
          offers(where: { active: true }) {
            id
            name
            description
            discount
          }
          price
          variants(where: {active: true}) {
            id
            color
            pattern
            size
            stock
          }
        }
      }
    `
  });
  return error !== null && error !== void 0 ? error : data.products[0];
};

/***/ }),

/***/ "VS8K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PAGE_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AUTH_FACEBOOK_CALLBACK; });
/* unused harmony export AUTH_FACEBOOK_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AUTH_GOOGLE_CALLBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AUTH_GOOGLE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return STRIPE_PUBLISHED_KEY; });
const API_DOMAIN = "http://165.227.199.69:1337";
const PAGE_LIMIT = 12;
console.log("API");
console.log(API_DOMAIN);
const AUTH_FACEBOOK_CALLBACK = `${API_DOMAIN}/auth/facebook/callback`;
const AUTH_FACEBOOK_URL = `${API_DOMAIN}/connect/facebook`;
const AUTH_GOOGLE_CALLBACK = `${API_DOMAIN}/auth/google/callback`;
const AUTH_GOOGLE_URL = `${API_DOMAIN}/connect/google`;
const STRIPE_PUBLISHED_KEY = "pk_test_51Hw15gJ4rvPOyPXnQ6Rjf7X4RxmsSBqvTVy3h3Bfwdo2WddlWAgC64bzfHeQbn4V5jJpPrJ7eHeWrGQMWOlRzW8700mrQLCJpL";


/***/ }),

/***/ "bCPq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderProvider; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


//: use this context whenever you want to access the OrderProvider
const OrderContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
/* harmony default export */ __webpack_exports__["b"] = (OrderContext);
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

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(OrderContext.Provider, {
    value: {
      order,
      addProductToBag,
      removeProduct,
      setOrder
    },
    children: children
  });
}

;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ip4w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./config/globals.ts
var globals = __webpack_require__("VS8K");

// CONCATENATED MODULE: ./assets/images/media_not_found.svg
/* harmony default export */ var media_not_found = ("data:image/svg+xml;base64,PHN2ZyBpZD0iYTMzOGU3NTUtZjZjNy00NWEwLThlYzctMGU4YTkyZTMzY2Y2IiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjgxNi4yMjIzNyIgaGVpZ2h0PSI3MDAuNTk3IiB2aWV3Qm94PSIwIDAgODE2LjIyMjM3IDcwMC41OTciPjxwYXRoIGQ9Ik03NzIuMDIwOSw3OTcuODk1MThhMzQuODE0MjYsMzQuODE0MjYsMCwwLDEtMTYuNzQ1NjEtNC4zMDg1OUwyNzguODY3LDUzMy4wNDA2OWEzNS4wMzk0MiwzNS4wMzk0MiwwLDAsMS0xMy45MTM3LTQ3LjUwMTQ3TDQ2Ni4wMDA2MywxMTcuOTI0YTM0Ljk5OTQ1LDM0Ljk5OTQ1LDAsMCwxLDQ3LjUwMTcxLTEzLjkxMzU4bDQ3Ni40MDgyLDI2MC41NDU5YTM1LjAzOTEzLDM1LjAzOTEzLDAsMCwxLDEzLjkxMzgyLDQ3LjUwMTQ3TDgwMi43NzcsNzc5LjY3M2EzNC43NzE0LDM0Ljc3MTQsMCwwLDEtMjAuODY5MTQsMTYuNzk0OTJBMzUuMTQ3LDM1LjE0NywwLDAsMSw3NzIuMDIwOSw3OTcuODk1MThabS0xMy44NjY3LTkuNTcyMjdhMjkuMDAwNzksMjkuMDAwNzksMCwwLDAsMzkuMzU4NjQtMTEuNTI4OEw5OTguNTYwMiw0MDkuMTc4ODdBMjkuMDMzNDUsMjkuMDMzNDUsMCwwLDAsOTg3LjAzMTY0LDM2OS44Mkw1MTAuNjIzNDQsMTA5LjI3NDA5YTI5LjAwMDgxLDI5LjAwMDgxLDAsMCwwLTM5LjM1ODY1LDExLjUyODhMMjcwLjIxNzQzLDQ4OC40MTgxM0EyOS4wMzMzNSwyOS4wMzMzNSwwLDAsMCwyODEuNzQ2LDUyNy43NzdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkxLjg4ODgyIC05OS43MDE1KSIgZmlsbD0iI2YyZjJmMiIvPjxwYXRoIGQ9Ik03ODEuODQ0MTQsNjY5LjMyNDg3YTMyLjcwNTY3LDMyLjcwNTY3LDAsMCwxLTE1LjY4MjYyLTQuMDE2NkwzODAuOTk5MTcsNDU0LjY2NDcxYTMyLjQ2OTQ3LDMyLjQ2OTQ3LDAsMCwxLTEyLjkxOTkyLTQ0LjEwODRMNDg4LjE1MSwxOTEuMDA1YTMyLjQ5NjkzLDMyLjQ5NjkzLDAsMCwxLDQ0LjEwODY1LTEyLjkxOTkyTDkxNy40MjIyNiwzODguNzI4NjhhMzIuNDk3NTgsMzIuNDk3NTgsMCwwLDEsMTIuOTE5OTMsNDQuMTA4MzlsLS40Mzg3My0uMjM5NzQuNDM4NzMuMjM5NzRMODEwLjI3MDQxLDY1Mi4zODgzNEEzMi4zNjQzLDMyLjM2NDMsMCwwLDEsNzgxLjg0NDE0LDY2OS4zMjQ4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTEuODg4ODIgLTk5LjcwMTUpIiBmaWxsPSIjZjJmMmYyIi8+PHBhdGggZD0iTTc2OS44ODg4Miw3OTcuNzk4NWgtNTQzYTMyLjUzNjkyLDMyLjUzNjkyLDAsMCwxLTMyLjUtMzIuNXYtNDE5YTMyLjUzNjkyLDMyLjUzNjkyLDAsMCwxLDMyLjUtMzIuNWg1NDNhMzIuNTM2ODUsMzIuNTM2ODUsMCwwLDEsMzIuNSwzMi41djQxOUEzMi41MzY4NSwzMi41MzY4NSwwLDAsMSw3NjkuODg4ODIsNzk3Ljc5ODVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkxLjg4ODgyIC05OS43MDE1KSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik03NjkuODg4ODIsODAwLjI5ODVoLTU0M2EzNS4wMzk0NywzNS4wMzk0NywwLDAsMS0zNS0zNXYtNDE5YTM1LjAzOTQ3LDM1LjAzOTQ3LDAsMCwxLDM1LTM1aDU0M2EzNS4wMzk0NywzNS4wMzk0NywwLDAsMSwzNSwzNXY0MTlBMzUuMDM5NDcsMzUuMDM5NDcsMCwwLDEsNzY5Ljg4ODgyLDgwMC4yOTg1Wm0tNTQzLTQ4M2EyOS4wMzI3NSwyOS4wMzI3NSwwLDAsMC0yOSwyOXY0MTlhMjkuMDMyNzUsMjkuMDMyNzUsMCwwLDAsMjksMjloNTQzYTI5LjAzMjc2LDI5LjAzMjc2LDAsMCwwLDI5LTI5di00MTlhMjkuMDMyNzYsMjkuMDMyNzYsMCwwLDAtMjktMjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkxLjg4ODgyIC05OS43MDE1KSIgZmlsbD0iI2U2ZTZlNiIvPjxwYXRoIGQ9Ik01ODIuODkxNTYsNDUxLjU4NmE0MC43NjM1OCw0MC43NjM1OCwwLDAsMC0zMi41NTExNiwxNi4xODU5MywyNi44Mzk3NiwyNi44Mzk3NiwwLDAsMC0zNy40NDkxMiwyNC42NDc1N0g2MjMuNzI1MDVBNDAuODMzNDIsNDAuODMzNDIsMCwwLDAsNTgyLjg5MTU2LDQ1MS41ODZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkxLjg4ODgyIC05OS43MDE1KSIgZmlsbD0iI2U2ZTZlNiIvPjxjaXJjbGUgY3g9IjE0OC4xOTY2OSIgY3k9IjQ0NS45NjAzNiIgcj0iNjUuNzU3MjciIGZpbGw9IiNhMzE5NWIiLz48cGF0aCBkPSJNNzI1LjI0ODY4LDY4MS4xNzg1MWEzMS44NzgxMSwzMS44NzgxMSwwLDAsMS03LjM1OTg2Ljg1aC00MzlhMzEuODc0OTIsMzEuODc0OTIsMCwwLDEtMTUuNDYtMy45N2wxLjE2OTkyLTEuNjgsNDguOTgtNzAuNTMsNzIuNTgwMDgtMTA0LjQ5LDEuMDYtMS41MywxMS40MTk5My0xNi40NGE4LjMzNjkzLDguMzM2OTMsMCwwLDEsMTMuNzAwMTksMGwzNy45Mzk5NCw1NC42MXYuMDFsMjIuMzE5ODMsMzIuMTQsNTMuMjgwMjcsNzYuNyw4MC44MDk1Ny0xMTUuMzVhOC4zNDc4Miw4LjM0NzgyLDAsMCwxLDEzLjY4MDE4LDBsNTEuODM5ODQsNzMuOTksMi45OCw0LjI1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS44ODg4MiAtOTkuNzAxNSkiIGZpbGw9IiMxYzJkM2QiLz48cGF0aCBkPSJNNDk1LjYxODQ4LDUxOS43NjgwNUE1MC4yOTI3MSw1MC4yOTI3MSwwLDAsMCw0NTUuNDU4LDUzOS43Mzc3LDMzLjExNCwzMy4xMTQsMCwwLDAsNDA5LjI1NDUsNTcwLjE0N2gxMzYuNzQzQTUwLjM3ODksNTAuMzc4OSwwLDAsMCw0OTUuNjE4NDgsNTE5Ljc2ODA1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS44ODg4MiAtOTkuNzAxNSkiIGZpbGw9IiNjY2MiLz48cGF0aCBkPSJNNzE3Ljg4ODgyLDY4My4wMjg0OGgtNDM5YTMyLjk3MDA3LDMyLjk3MDA3LDAsMCwxLTMzLTMzVjM5OS43ODg3M2EzMy4wMzczNCwzMy4wMzczNCwwLDAsMSwzMy0zM2g0MzlhMzMuMDM3MzQsMzMuMDM3MzQsMCwwLDEsMzMsMzNWNjUwLjAyODQ4YTMyLjk2MjExLDMyLjk2MjExLDAsMCwxLTMzLDMzWm0tNDM5LTMxNC4yMzk3NWEzMS4wMzUyLDMxLjAzNTIsMCwwLDAtMzEsMzFWNjUwLjAyODQ4YTMwLjk3MDc3LDMwLjk3MDc3LDAsMCwwLDMxLDMxaDQzOWEzMC45NjM3LDMwLjk2MzcsMCwwLDAsMzEtMzFWMzk5Ljc4ODczYTMxLjAzNTIxLDMxLjAzNTIxLDAsMCwwLTMxLTMxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS44ODg4MiAtOTkuNzAxNSkiIGZpbGw9IiMxYzJkM2QiLz48L3N2Zz4NCg==");
// CONCATENATED MODULE: ./utils/get-media-source.ts
/**
 * This utility function returns a media URL based on one of three cases:
 *
 *  1. There's no media source to return (when no media is added).
 *  2. The media is served from the same server that runs the app (local).
 *  3. The media is served by an upload provider (remote server).
 */


;

const getMediaSource = media => {
  //: Case 1.
  if (!media) {
    return media_not_found;
  } //: Case 2.


  if (media.url.indexOf("/") === 0) {
    return globals["a" /* API_DOMAIN */] + media.url;
  } //: Case 3.


  return media.url;
};

/* harmony default export */ var get_media_source = __webpack_exports__["a"] = (getMediaSource);

/***/ }),

/***/ "oF3+":
/***/ (function(module, exports) {

module.exports = require("notistack");

/***/ }),

/***/ "pvWX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDepartments; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const getDepartments = async (apolloClient) => {
  let {
    error,
    data,
    loading
  } = await apolloClient.query({
    query: _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      query getDepartments {
        departments {
          id
          slug
          name
          categories {
            id
            slug
            name
            subcategories {
              id
              slug
              name
            }
          }
        }
      }
    `
  });
  return error !== null && error !== void 0 ? error : data.departments;
};

/***/ }),

/***/ "qGP1":
/***/ (function(module) {

module.exports = JSON.parse("{\"amarillo\":\"#fbdc58\",\"azul\":\"#4fbcdc\",\"azul marino\":\"#000080\",\"blanco\":\"#ffffff\",\"naranja\":\"#fe7f46\",\"negro\":\"#120e0f\",\"guinda\":\"#bd3e55\",\"rojo\":\"#ff0000\",\"verde\":\"#6fc421\",\"vino\":\"#a3195b\"}");

/***/ }),

/***/ "tzql":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ProductDetailsPage; });
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./actions/fetch-departments.ts
var fetch_departments = __webpack_require__("pvWX");

// EXTERNAL MODULE: ./actions/fetch-products.ts
var fetch_products = __webpack_require__("PwMW");

// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__("NC1Z");

// EXTERNAL MODULE: ./context/OrderContext.tsx
var OrderContext = __webpack_require__("bCPq");

// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__("oF3+");

// CONCATENATED MODULE: ./components/buttons/AddToBagButton.tsx






AddToBagButton.defaultProps = {
  order: null
};
const classes = {
  container: `
    bg-accent
    cursor-pointer
    flex
    flex-row
    flex-nowrap
    items-center
    hover:bg-inactive
    hover:text-primary
    justify-center
    font-bold
    px-4
    py-3
    rounded-lg
    text-bse
    shadow
  `
};
function AddToBagButton({
  order
}) {
  const {
    enqueueSnackbar
  } = Object(external_notistack_["useSnackbar"])();
  const {
    addProductToBag
  } = Object(external_react_["useContext"])(OrderContext["b" /* default */]);

  const handlerClick = event => {
    event.preventDefault();
    const variantQuantity = parseInt(document.getElementById('quantity').value);
    addProductToBag(variantQuantity, order);
    enqueueSnackbar("Articulo agregado");
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
    onClick: e => handlerClick(e),
    className: classes.container,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: "mr-3",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_feather_["ShoppingBag"], {})
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      children: "A\xF1adir a la bolsa"
    })]
  });
}
;
// EXTERNAL MODULE: ./utils/get-media-source.ts + 1 modules
var get_media_source = __webpack_require__("ip4w");

// CONCATENATED MODULE: ./components/carousels/Carousel.tsx





Carousel.defaultProps = {
  media: []
};
const Carousel_classes = {
  container: `
    md:w-full
    h-full
    md:flex
    md:flex-row
    md:flex-nowrap
    md:justify-center
    md:items-center
    relative
  `,
  controls: {
    container: `
      absolute
      bg-bse
      bg-opacity-75
      bottom-0
      flex
      flex-nowrap
      flex-row
      right-0
    `,
    button: `
      flex
      flex-row
      h-9
      items-center
      justify-center
      md:text-accent
      md:hover:text-primary
      w-9
    `
  },
  image: `
    animate-fadeIn
    min-h-full
    min-w-full
    object-cover
  `,
  video: `
    animate-fadeIn
    min-h-full
    min-w-full
  `
};
function Carousel({
  media
}) {
  const {
    0: file,
    1: setFile
  } = Object(external_react_["useState"])(media[0]);
  const mediaElement = Object(external_react_["useRef"])(null);

  const showPrevious = event => {
    event.preventDefault();
    const fileIndex = media.indexOf(file) ? media.indexOf(file) - 1 : media.length - 1;
    return setFile(media[fileIndex]);
  };

  const showNext = event => {
    event.preventDefault();
    const fileIndex = media.indexOf(file) < media.length - 1 ? media.indexOf(file) + 1 : 0;
    return setFile(media[fileIndex]);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Carousel_classes.container,
    children: [file && (file.mime.includes('image') ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      ref: mediaElement,
      src: Object(get_media_source["a" /* default */])(file),
      alt: file.alternativeText,
      className: Carousel_classes.image
    }, file.id) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("video", {
      ref: mediaElement,
      autoPlay: true,
      muted: true,
      loop: true,
      className: Carousel_classes.video,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
        src: Object(get_media_source["a" /* default */])(file),
        type: file.mime
      })
    }, file.id)), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Carousel_classes.controls.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        onClick: e => showPrevious(e),
        className: Carousel_classes.controls.button,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_feather_["ChevronLeft"], {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        onClick: e => showNext(e),
        className: Carousel_classes.controls.button,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_feather_["ChevronRight"], {})
      })]
    })]
  });
}
;
// CONCATENATED MODULE: ./components/controls/QuantitySelector.js






const QuantitySelector = ({
  stock
}) => {
  const {
    0: quantity,
    1: setQuantity
  } = Object(external_react_["useState"])(1);

  const decrement = event => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = event => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex flex-row",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: "h-9 w-9 rounded-l-md bg-inactive text-accent hover:text-primary flex flex-row items-center justify-center",
        onClick: event => decrement(event),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_feather_["Minus"], {
          size: "18"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        id: "quantity",
        name: "quantity",
        readOnly: true,
        type: "number",
        value: quantity,
        style: {
          appearance: 'textfield'
        },
        className: "w-20 bg-inactive text-center"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: "h-9 w-9 rounded-r-md bg-inactive text-accent hover:text-primary flex flex-row items-center justify-center",
        onClick: event => increment(event),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_feather_["Plus"], {
          size: "18"
        })
      })]
    })
  });
};

QuantitySelector.defaultProps = {
  stock: 1
};
/* harmony default export */ var controls_QuantitySelector = (QuantitySelector);
// EXTERNAL MODULE: ./data/colors.json
var colors = __webpack_require__("qGP1");

// CONCATENATED MODULE: ./components/controls/VariantSelector.tsx





VariantSelector.defaultProps = {
  state: [],
  variants: []
};
const VariantSelector_classes = {
  container: `
    cursor-pointer
    overflow-hidden
    relative

    rounded
    shadow
  `,
  defaultItem: `
    md:bg-inactive
    md:px-4
    md:py-2
    md:text-secondary
    p-2
  `,
  item: {
    container: `
      flex
      flex-row
      hover:bg-accent
      hover:text-bse
      items-center
      justify-start
      md:px-4
      md:py-2
      p-2
    `,
    colorSwatch: `
      border-2
      border-bse
      h-7
      md:mr-4
      mr-2
      rounded-full
      w-7
    `,
    description: `
      text-sm
      uppercase
    `
  }
};
function VariantSelector({
  state,
  variants
}) {
  const [selectedVariant, setSelectedVariant] = state;
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);
  const dropdownIcon = Object(external_react_["useRef"])(null);

  const animate = () => {
    dropdownIcon.current.classList.toggle('animate-flipHorizontalBottom');
    setVisible(!visible);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    onClick: animate,
    className: VariantSelector_classes.container,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
      children: [!selectedVariant ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        className: VariantSelector_classes.defaultItem,
        children: "Selecciona"
      }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
        className: VariantSelector_classes.item.container,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            backgroundColor: colors[selectedVariant.color.trim().toLowerCase()]
          },
          className: VariantSelector_classes.item.colorSwatch
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("small", {
          className: VariantSelector_classes.item.description,
          children: [selectedVariant.color, ", ", selectedVariant.size, ", ", selectedVariant.pattern]
        })]
      }), visible && variants.filter(variant => variant.stock > 0).map(variant => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
        className: VariantSelector_classes.item.container + 'bg-inactive',
        onClick: () => setSelectedVariant(variant),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: VariantSelector_classes.item.colorSwatch,
          style: {
            backgroundColor: colors[variant.color.trim().toLowerCase()]
          }
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("small", {
          className: VariantSelector_classes.item.description,
          children: [variant.color, ", ", variant.size, ", ", variant.pattern]
        })]
      }, variant.id))]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      ref: dropdownIcon,
      className: "absolute right-4 top-2",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_feather_["ChevronDown"], {})
    })]
  });
}
;
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./components/dropdowns/Dropdown.tsx






Dropdown.defaultProps = {
  label: 'Dropdown'
};
const Dropdown_classes = {
  container: `
    flex
    flex-row
    flex-nowrap
    font-bold
    items-center
  `
};
function Dropdown({
  children = '',
  label,
  onClick
}) {
  const arrowIcon = Object(external_react_["useRef"])(null);

  const animate = () => {
    arrowIcon.current.classList.toggle('animate-flipHorizontalBottom');
    onClick();
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
      onClick: animate,
      className: Dropdown_classes.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
        variant: "h6",
        color: "textPrimary",
        children: label
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        ref: arrowIcon,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_feather_["ChevronDown"], {
          size: "18"
        })
      })]
    }), children]
  });
}
;
// CONCATENATED MODULE: ./components/controls/OffersSelector.tsx





OffersSelector.defaultProps = {
  offers: [],
  state: []
};
function OffersSelector({
  offers,
  state
}) {
  const [selectedOffers, setSelectedOffers] = state;
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);

  const applyOffer = (event, offerId) => {
    event.currentTarget.classList.toggle('bg-accent');
    event.currentTarget.classList.toggle('bg-inactive');
    event.currentTarget.classList.toggle('shadow');
    event.currentTarget.classList.toggle('shadow-inner');
    event.currentTarget.classList.toggle('text-bse');
    event.currentTarget.classList.toggle('text-primary');
    const applied = selectedOffers.filter(selectedOffer => selectedOffer === offerId);

    if (applied.length === 0) {
      return setSelectedOffers(selectedOffers.concat([offerId]));
    } else {
      return setSelectedOffers(selectedOffers.filter(selectedOffer => selectedOffer !== offerId));
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: offers.map(offer => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex flex-row flex-wrap justify-between items-center mb-4",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: event => applyOffer(event, offer.id),
        className: "flex flex-row flex-wrap justify-center px-4 py-2 rounded-md shadow bg-accent text-bse font-bold border-accent hover:bg-inactive hover:text-primary transition-all w-1/4",
        children: selectedOffers.filter(selectedOffer => selectedOffer === offer.id).length === 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: "\xA1La quiero!"
          })
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "\xA1Ya la tienes!"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: offer.name
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "flex flex-row items-center text-accent cursor-pointer hover:text-primary",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Dropdown, {
          onClick: () => setVisible(!visible),
          label: "Detalles"
        })
      }), visible && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "w-full px-4 py-4 mt-1 rounded-md shadow bg-soft animate-expandBottom",
        children: offer.description
      })]
    }, offer.id))
  });
}
;
// EXTERNAL MODULE: ./lib/apollo-client.ts
var apollo_client = __webpack_require__("+GZE");

// EXTERNAL MODULE: ./utils/format-price.ts
var format_price = __webpack_require__("1sxy");

// CONCATENATED MODULE: ./pages/products/[slug].tsx












const _slug_classes = {
  container: `
    h-screen
    max-w-screen
    relative
  `,
  carousel: `
    bg-base
    h-4/6
    md:absolute
    md:h-full
    md:right-12
    md:rounded-lg
    md:w-1/2
    overflow-hidden
  `,
  details: `
    h-11/12
    overflow-y-scroll
    pb-20
    w-full
  `,
  information: {
    container: `
      bg-bse
      mt-6
      md:w-2/5
      md:absolute
      md:m-12
      md:p-12
      md:bg-base
      md:shadow
      md:rounded-2xl
      md:z-10
      md:overflow-y-scroll
      p-7
      rounded-t-3xl
      max-w-full
    `,
    section: `
      mb-7
      w-full
    `,
    header: {
      title: `
        font-bold
        font-display
        mb-2
        text-2xl
      `
    },
    title: `
      font-bold
      mb-2
    `
  },
  addButton: `
    flex
    flex-row
    justify-end
    mt-12
  `
};
function ProductDetailsPage({
  departments,
  product,
  referer
}) {
  const {
    0: selectedVariant,
    1: setSelectedVariant
  } = Object(external_react_["useState"])(null);
  const {
    0: selectedOffers,
    1: setSelectedOffers
  } = Object(external_react_["useState"])([]);
  const {
    0: viewportWidth,
    1: setViewportWidth
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    setViewportWidth(window.innerWidth);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: _slug_classes.container,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: _slug_classes.details,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: _slug_classes.carousel,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Carousel, {
          media: product.media
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: _slug_classes.information.container,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: _slug_classes.information.section,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: _slug_classes.information.header.title,
            children: product.name
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "mb-6",
            children: Object(format_price["a" /* default */])('MXN', product.price)
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: product.description
          })]
        }), product.variants.length !== 0 && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: _slug_classes.information.section,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: _slug_classes.information.title,
            children: "Variante"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(VariantSelector, {
            state: [selectedVariant, setSelectedVariant],
            variants: product.variants
          })]
        }), product.offers.length !== 0 && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: _slug_classes.information.section,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: _slug_classes.information.title,
            children: "Ofertas"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(OffersSelector, {
            offers: product.offers,
            state: [selectedOffers, setSelectedOffers]
          })]
        }), selectedVariant && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: _slug_classes.information.section,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: _slug_classes.information.title,
            children: "Cantidad"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "flex flex-row items-center",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(controls_QuantitySelector, {
              stock: selectedVariant.stock
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("small", {
              className: "ml-4 text-sm text-neutral",
              children: ["\xA1", selectedVariant.stock, " disponibles!"]
            })]
          })]
        }), product && selectedVariant && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: _slug_classes.addButton,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AddToBagButton, {
            order: {
              offers: selectedOffers,
              product,
              variant: selectedVariant
            }
          })
        })]
      })]
    })
  });
}
;
const getServerSideProps = async ({
  params,
  req
}) => {
  const apolloClient = Object(apollo_client["a" /* initializeApolloClient */])();
  const departments = await Object(fetch_departments["a" /* getDepartments */])(apolloClient);
  const product = await Object(fetch_products["a" /* getProductBySlug */])(apolloClient, params.slug);
  return {
    props: {
      departments,
      product,
      referer: req.headers.referer || '/'
    }
  };
};

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });