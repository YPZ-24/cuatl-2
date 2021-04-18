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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/products/[slug].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/fetch-departments.ts":
/*!**************************************!*\
  !*** ./actions/fetch-departments.ts ***!
  \**************************************/
/*! exports provided: getDepartments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepartments", function() { return getDepartments; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
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

/***/ "./actions/fetch-products.ts":
/*!***********************************!*\
  !*** ./actions/fetch-products.ts ***!
  \***********************************/
/*! exports provided: getProductsPage, getProductBySlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsPage", function() { return getProductsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductBySlug", function() { return getProductBySlug; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
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

/***/ "./assets/images/media_not_found.svg":
/*!*******************************************!*\
  !*** ./assets/images/media_not_found.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0iYTMzOGU3NTUtZjZjNy00NWEwLThlYzctMGU4YTkyZTMzY2Y2IiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjgxNi4yMjIzNyIgaGVpZ2h0PSI3MDAuNTk3IiB2aWV3Qm94PSIwIDAgODE2LjIyMjM3IDcwMC41OTciPjxwYXRoIGQ9Ik03NzIuMDIwOSw3OTcuODk1MThhMzQuODE0MjYsMzQuODE0MjYsMCwwLDEtMTYuNzQ1NjEtNC4zMDg1OUwyNzguODY3LDUzMy4wNDA2OWEzNS4wMzk0MiwzNS4wMzk0MiwwLDAsMS0xMy45MTM3LTQ3LjUwMTQ3TDQ2Ni4wMDA2MywxMTcuOTI0YTM0Ljk5OTQ1LDM0Ljk5OTQ1LDAsMCwxLDQ3LjUwMTcxLTEzLjkxMzU4bDQ3Ni40MDgyLDI2MC41NDU5YTM1LjAzOTEzLDM1LjAzOTEzLDAsMCwxLDEzLjkxMzgyLDQ3LjUwMTQ3TDgwMi43NzcsNzc5LjY3M2EzNC43NzE0LDM0Ljc3MTQsMCwwLDEtMjAuODY5MTQsMTYuNzk0OTJBMzUuMTQ3LDM1LjE0NywwLDAsMSw3NzIuMDIwOSw3OTcuODk1MThabS0xMy44NjY3LTkuNTcyMjdhMjkuMDAwNzksMjkuMDAwNzksMCwwLDAsMzkuMzU4NjQtMTEuNTI4OEw5OTguNTYwMiw0MDkuMTc4ODdBMjkuMDMzNDUsMjkuMDMzNDUsMCwwLDAsOTg3LjAzMTY0LDM2OS44Mkw1MTAuNjIzNDQsMTA5LjI3NDA5YTI5LjAwMDgxLDI5LjAwMDgxLDAsMCwwLTM5LjM1ODY1LDExLjUyODhMMjcwLjIxNzQzLDQ4OC40MTgxM0EyOS4wMzMzNSwyOS4wMzMzNSwwLDAsMCwyODEuNzQ2LDUyNy43NzdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkxLjg4ODgyIC05OS43MDE1KSIgZmlsbD0iI2YyZjJmMiIvPjxwYXRoIGQ9Ik03ODEuODQ0MTQsNjY5LjMyNDg3YTMyLjcwNTY3LDMyLjcwNTY3LDAsMCwxLTE1LjY4MjYyLTQuMDE2NkwzODAuOTk5MTcsNDU0LjY2NDcxYTMyLjQ2OTQ3LDMyLjQ2OTQ3LDAsMCwxLTEyLjkxOTkyLTQ0LjEwODRMNDg4LjE1MSwxOTEuMDA1YTMyLjQ5NjkzLDMyLjQ5NjkzLDAsMCwxLDQ0LjEwODY1LTEyLjkxOTkyTDkxNy40MjIyNiwzODguNzI4NjhhMzIuNDk3NTgsMzIuNDk3NTgsMCwwLDEsMTIuOTE5OTMsNDQuMTA4MzlsLS40Mzg3My0uMjM5NzQuNDM4NzMuMjM5NzRMODEwLjI3MDQxLDY1Mi4zODgzNEEzMi4zNjQzLDMyLjM2NDMsMCwwLDEsNzgxLjg0NDE0LDY2OS4zMjQ4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTEuODg4ODIgLTk5LjcwMTUpIiBmaWxsPSIjZjJmMmYyIi8+PHBhdGggZD0iTTc2OS44ODg4Miw3OTcuNzk4NWgtNTQzYTMyLjUzNjkyLDMyLjUzNjkyLDAsMCwxLTMyLjUtMzIuNXYtNDE5YTMyLjUzNjkyLDMyLjUzNjkyLDAsMCwxLDMyLjUtMzIuNWg1NDNhMzIuNTM2ODUsMzIuNTM2ODUsMCwwLDEsMzIuNSwzMi41djQxOUEzMi41MzY4NSwzMi41MzY4NSwwLDAsMSw3NjkuODg4ODIsNzk3Ljc5ODVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkxLjg4ODgyIC05OS43MDE1KSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik03NjkuODg4ODIsODAwLjI5ODVoLTU0M2EzNS4wMzk0NywzNS4wMzk0NywwLDAsMS0zNS0zNXYtNDE5YTM1LjAzOTQ3LDM1LjAzOTQ3LDAsMCwxLDM1LTM1aDU0M2EzNS4wMzk0NywzNS4wMzk0NywwLDAsMSwzNSwzNXY0MTlBMzUuMDM5NDcsMzUuMDM5NDcsMCwwLDEsNzY5Ljg4ODgyLDgwMC4yOTg1Wm0tNTQzLTQ4M2EyOS4wMzI3NSwyOS4wMzI3NSwwLDAsMC0yOSwyOXY0MTlhMjkuMDMyNzUsMjkuMDMyNzUsMCwwLDAsMjksMjloNTQzYTI5LjAzMjc2LDI5LjAzMjc2LDAsMCwwLDI5LTI5di00MTlhMjkuMDMyNzYsMjkuMDMyNzYsMCwwLDAtMjktMjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkxLjg4ODgyIC05OS43MDE1KSIgZmlsbD0iI2U2ZTZlNiIvPjxwYXRoIGQ9Ik01ODIuODkxNTYsNDUxLjU4NmE0MC43NjM1OCw0MC43NjM1OCwwLDAsMC0zMi41NTExNiwxNi4xODU5MywyNi44Mzk3NiwyNi44Mzk3NiwwLDAsMC0zNy40NDkxMiwyNC42NDc1N0g2MjMuNzI1MDVBNDAuODMzNDIsNDAuODMzNDIsMCwwLDAsNTgyLjg5MTU2LDQ1MS41ODZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkxLjg4ODgyIC05OS43MDE1KSIgZmlsbD0iI2U2ZTZlNiIvPjxjaXJjbGUgY3g9IjE0OC4xOTY2OSIgY3k9IjQ0NS45NjAzNiIgcj0iNjUuNzU3MjciIGZpbGw9IiNhMzE5NWIiLz48cGF0aCBkPSJNNzI1LjI0ODY4LDY4MS4xNzg1MWEzMS44NzgxMSwzMS44NzgxMSwwLDAsMS03LjM1OTg2Ljg1aC00MzlhMzEuODc0OTIsMzEuODc0OTIsMCwwLDEtMTUuNDYtMy45N2wxLjE2OTkyLTEuNjgsNDguOTgtNzAuNTMsNzIuNTgwMDgtMTA0LjQ5LDEuMDYtMS41MywxMS40MTk5My0xNi40NGE4LjMzNjkzLDguMzM2OTMsMCwwLDEsMTMuNzAwMTksMGwzNy45Mzk5NCw1NC42MXYuMDFsMjIuMzE5ODMsMzIuMTQsNTMuMjgwMjcsNzYuNyw4MC44MDk1Ny0xMTUuMzVhOC4zNDc4Miw4LjM0NzgyLDAsMCwxLDEzLjY4MDE4LDBsNTEuODM5ODQsNzMuOTksMi45OCw0LjI1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS44ODg4MiAtOTkuNzAxNSkiIGZpbGw9IiMxYzJkM2QiLz48cGF0aCBkPSJNNDk1LjYxODQ4LDUxOS43NjgwNUE1MC4yOTI3MSw1MC4yOTI3MSwwLDAsMCw0NTUuNDU4LDUzOS43Mzc3LDMzLjExNCwzMy4xMTQsMCwwLDAsNDA5LjI1NDUsNTcwLjE0N2gxMzYuNzQzQTUwLjM3ODksNTAuMzc4OSwwLDAsMCw0OTUuNjE4NDgsNTE5Ljc2ODA1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS44ODg4MiAtOTkuNzAxNSkiIGZpbGw9IiNjY2MiLz48cGF0aCBkPSJNNzE3Ljg4ODgyLDY4My4wMjg0OGgtNDM5YTMyLjk3MDA3LDMyLjk3MDA3LDAsMCwxLTMzLTMzVjM5OS43ODg3M2EzMy4wMzczNCwzMy4wMzczNCwwLDAsMSwzMy0zM2g0MzlhMzMuMDM3MzQsMzMuMDM3MzQsMCwwLDEsMzMsMzNWNjUwLjAyODQ4YTMyLjk2MjExLDMyLjk2MjExLDAsMCwxLTMzLDMzWm0tNDM5LTMxNC4yMzk3NWEzMS4wMzUyLDMxLjAzNTIsMCwwLDAtMzEsMzFWNjUwLjAyODQ4YTMwLjk3MDc3LDMwLjk3MDc3LDAsMCwwLDMxLDMxaDQzOWEzMC45NjM3LDMwLjk2MzcsMCwwLDAsMzEtMzFWMzk5Ljc4ODczYTMxLjAzNTIxLDMxLjAzNTIxLDAsMCwwLTMxLTMxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS44ODg4MiAtOTkuNzAxNSkiIGZpbGw9IiMxYzJkM2QiLz48L3N2Zz4NCg==");

/***/ }),

/***/ "./components/buttons/AddToBagButton.tsx":
/*!***********************************************!*\
  !*** ./components/buttons/AddToBagButton.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddToBagButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/OrderContext */ "./context/OrderContext.tsx");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\buttons\\AddToBagButton.tsx";




AddToBagButton.propTypes = {
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
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
    addProductToBag
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_4__["default"]);

  const handlerClick = event => {
    event.preventDefault();
    const variantQuantity = parseInt(document.getElementById('quantity').value);
    addProductToBag(variantQuantity, order);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    onClick: e => handlerClick(e),
    className: classes.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "mr-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_2__["ShoppingBag"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 30
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "A\xF1adir a la bolsa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
;

/***/ }),

/***/ "./components/carousels/Carousel.tsx":
/*!*******************************************!*\
  !*** ./components/carousels/Carousel.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_get_media_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/get-media-source */ "./utils/get-media-source.ts");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\carousels\\Carousel.tsx";




Carousel.propTypes = {
  media: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
Carousel.defaultProps = {
  media: []
};
const classes = {
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(media[0]);
  const mediaElement = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.container,
    children: [file && (file.mime.includes('image') ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      ref: mediaElement,
      src: Object(_utils_get_media_source__WEBPACK_IMPORTED_MODULE_4__["default"])(file),
      alt: file.alternativeText,
      className: classes.image
    }, file.id, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("video", {
      ref: mediaElement,
      autoPlay: true,
      muted: true,
      loop: true,
      className: classes.video,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("source", {
        src: Object(_utils_get_media_source__WEBPACK_IMPORTED_MODULE_4__["default"])(file),
        type: file.mime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 15
      }, this)
    }, file.id, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.controls.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: e => showPrevious(e),
        className: classes.controls.button,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["ChevronLeft"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: e => showNext(e),
        className: classes.controls.button,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["ChevronRight"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, this);
}
;

/***/ }),

/***/ "./components/controls/OffersSelector.tsx":
/*!************************************************!*\
  !*** ./components/controls/OffersSelector.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OffersSelector; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_dropdowns_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/dropdowns/Dropdown */ "./components/dropdowns/Dropdown.tsx");


var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\controls\\OffersSelector.tsx";



OffersSelector.propTypes = {
  offers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: offers.map(offer => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-row flex-wrap justify-between items-center mb-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: event => applyOffer(event, offer.id),
        className: "flex flex-row flex-wrap justify-center px-4 py-2 rounded-md shadow bg-accent text-bse font-bold border-accent hover:bg-inactive hover:text-primary transition-all w-1/4",
        children: selectedOffers.filter(selectedOffer => selectedOffer === offer.id).length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\xA1La quiero!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 19
          }, this)
        }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "\xA1Ya la tienes!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: offer.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row items-center text-accent cursor-pointer hover:text-primary",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dropdowns_Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onClick: () => setVisible(!visible),
          label: "Detalles"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, this), visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full px-4 py-4 mt-1 rounded-md shadow bg-soft animate-expandBottom",
        children: offer.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 15
      }, this)]
    }, offer.id, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
;

/***/ }),

/***/ "./components/controls/QuantitySelector.js":
/*!*************************************************!*\
  !*** ./components/controls/QuantitySelector.js ***!
  \*************************************************/
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
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\controls\\QuantitySelector.js";





const QuantitySelector = ({
  stock
}) => {
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1);

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "h-9 w-9 rounded-l-md bg-inactive text-accent hover:text-primary flex flex-row items-center justify-center",
        onClick: event => decrement(event),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["Minus"], {
          size: "18"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        id: "quantity",
        name: "quantity",
        readOnly: true,
        type: "number",
        value: quantity,
        style: {
          appearance: 'textfield'
        },
        className: "w-20 bg-inactive text-center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "h-9 w-9 rounded-r-md bg-inactive text-accent hover:text-primary flex flex-row items-center justify-center",
        onClick: event => increment(event),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["Plus"], {
          size: "18"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

QuantitySelector.propTypes = {
  stock: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
QuantitySelector.defaultProps = {
  stock: 1
};
/* harmony default export */ __webpack_exports__["default"] = (QuantitySelector);

/***/ }),

/***/ "./components/controls/VariantSelector.tsx":
/*!*************************************************!*\
  !*** ./components/controls/VariantSelector.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VariantSelector; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/colors.json */ "./data/colors.json");
var _data_colors_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/data/colors.json */ "./data/colors.json", 1);

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\controls\\VariantSelector.tsx";




VariantSelector.propTypes = {
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  variants: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
VariantSelector.defaultProps = {
  state: [],
  variants: []
};
const classes = {
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const dropdownIcon = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  const animate = () => {
    dropdownIcon.current.classList.toggle('animate-flipHorizontalBottom');
    setVisible(!visible);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    onClick: animate,
    className: classes.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: [!selectedVariant ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: classes.defaultItem,
        children: "Selecciona"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: classes.item.container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            backgroundColor: _data_colors_json__WEBPACK_IMPORTED_MODULE_4__[selectedVariant.color.trim().toLowerCase()]
          },
          className: classes.item.colorSwatch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
          className: classes.item.description,
          children: [selectedVariant.color, ", ", selectedVariant.size, ", ", selectedVariant.pattern]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, this), visible && variants.filter(variant => variant.stock > 0).map(variant => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: classes.item.container + 'bg-inactive',
        onClick: () => setSelectedVariant(variant),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.item.colorSwatch,
          style: {
            backgroundColor: _data_colors_json__WEBPACK_IMPORTED_MODULE_4__[variant.color.trim().toLowerCase()]
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
          className: classes.item.description,
          children: [variant.color, ", ", variant.size, ", ", variant.pattern]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 15
        }, this)]
      }, variant.id, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }, this))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      ref: dropdownIcon,
      className: "absolute right-4 top-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["ChevronDown"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, this);
}
;

/***/ }),

/***/ "./components/dropdowns/Dropdown.tsx":
/*!*******************************************!*\
  !*** ./components/dropdowns/Dropdown.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\dropdowns\\Dropdown.tsx";



Dropdown.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Dropdown.defaultProps = {
  label: 'Dropdown'
};
const classes = {
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
  const arrowIcon = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  const animate = () => {
    arrowIcon.current.classList.toggle('animate-flipHorizontalBottom');
    onClick();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      onClick: animate,
      className: classes.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "mr-1",
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        ref: arrowIcon,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["ChevronDown"], {
          size: "18"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 31
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), children]
  }, void 0, true);
}
;

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

/***/ "./data/colors.json":
/*!**************************!*\
  !*** ./data/colors.json ***!
  \**************************/
/*! exports provided: amarillo, azul, azul marino, blanco, naranja, negro, guinda, rojo, verde, vino, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"amarillo\":\"#fbdc58\",\"azul\":\"#4fbcdc\",\"azul marino\":\"#000080\",\"blanco\":\"#ffffff\",\"naranja\":\"#fe7f46\",\"negro\":\"#120e0f\",\"guinda\":\"#bd3e55\",\"rojo\":\"#ff0000\",\"verde\":\"#6fc421\",\"vino\":\"#a3195b\"}");

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

/***/ "./pages/products/[slug].tsx":
/*!***********************************!*\
  !*** ./pages/products/[slug].tsx ***!
  \***********************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_fetch_departments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/actions/fetch-departments */ "./actions/fetch-departments.ts");
/* harmony import */ var _actions_fetch_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/actions/fetch-products */ "./actions/fetch-products.ts");
/* harmony import */ var _components_buttons_AddToBagButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/buttons/AddToBagButton */ "./components/buttons/AddToBagButton.tsx");
/* harmony import */ var _components_carousels_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/carousels/Carousel */ "./components/carousels/Carousel.tsx");
/* harmony import */ var _components_controls_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/controls/QuantitySelector */ "./components/controls/QuantitySelector.js");
/* harmony import */ var _components_controls_VariantSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/controls/VariantSelector */ "./components/controls/VariantSelector.tsx");
/* harmony import */ var _components_controls_OffersSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/controls/OffersSelector */ "./components/controls/OffersSelector.tsx");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/lib/apollo-client */ "./lib/apollo-client.ts");
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/format-price */ "./utils/format-price.ts");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\pages\\products\\[slug].tsx";











const classes = {
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
    useSession
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_9__["default"]);
  const {
    0: selectedVariant,
    1: setSelectedVariant
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: selectedOffers,
    1: setSelectedOffers
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: viewportWidth,
    1: setViewportWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  useSession();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setViewportWidth(window.innerWidth);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.details,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.carousel,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_carousels_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
          media: product.media
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.information.container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.information.section,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.information.header.title,
            children: product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mb-6",
            children: Object(_utils_format_price__WEBPACK_IMPORTED_MODULE_11__["default"])('MXN', product.price)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: product.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this), product.variants.length !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.information.section,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.information.title,
            children: "Variante"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_controls_VariantSelector__WEBPACK_IMPORTED_MODULE_7__["default"], {
            state: [selectedVariant, setSelectedVariant],
            variants: product.variants
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }, this), product.offers.length !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.information.section,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.information.title,
            children: "Ofertas"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_controls_OffersSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
            offers: product.offers,
            state: [selectedOffers, setSelectedOffers]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 13
        }, this), selectedVariant && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.information.section,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.information.title,
            children: "Cantidad"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-row items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_controls_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
              stock: selectedVariant.stock
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "ml-4 text-sm text-neutral",
              children: ["\xA1", selectedVariant.stock, " disponibles!"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, this), product && selectedVariant && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.addButton,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttons_AddToBagButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
            order: {
              offers: selectedOffers,
              product,
              variant: selectedVariant
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, this);
}
;
const getServerSideProps = async ({
  params,
  req
}) => {
  const apolloClient = Object(_lib_apollo_client__WEBPACK_IMPORTED_MODULE_10__["initializeApolloClient"])();
  const departments = await Object(_actions_fetch_departments__WEBPACK_IMPORTED_MODULE_2__["getDepartments"])(apolloClient);
  const product = await Object(_actions_fetch_products__WEBPACK_IMPORTED_MODULE_3__["getProductBySlug"])(apolloClient, params.slug);
  return {
    props: {
      departments,
      product,
      referer: req.headers.referer || '/'
    }
  };
};

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

/***/ "./utils/get-media-source.ts":
/*!***********************************!*\
  !*** ./utils/get-media-source.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");
/* harmony import */ var _assets_images_media_not_found_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/media_not_found.svg */ "./assets/images/media_not_found.svg");
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
    return _assets_images_media_not_found_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
  } //: Case 2.


  if (media.url.indexOf("/") === 0) {
    return _config_globals__WEBPACK_IMPORTED_MODULE_0__["API_DOMAIN"] + media.url;
  } //: Case 3.


  return media.url;
};

/* harmony default export */ __webpack_exports__["default"] = (getMediaSource);

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

/***/ "react-feather":
/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9mZXRjaC1kZXBhcnRtZW50cy50cyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2ZldGNoLXByb2R1Y3RzLnRzIiwid2VicGFjazovLy8uL2FjdGlvbnMvZmV0Y2gtc2Vzc2lvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9tZWRpYV9ub3RfZm91bmQuc3ZnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9BZGRUb0JhZ0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJvdXNlbHMvQ2Fyb3VzZWwudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udHJvbHMvT2ZmZXJzU2VsZWN0b3IudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udHJvbHMvUXVhbnRpdHlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRyb2xzL1ZhcmlhbnRTZWxlY3Rvci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bnMvRHJvcGRvd24udHN4Iiwid2VicGFjazovLy8uL2NvbmZpZy9nbG9iYWxzLnRzIiwid2VicGFjazovLy8uL2NvbnRleHQvQXV0aENvbnRleHQudHN4Iiwid2VicGFjazovLy8uL2NvbnRleHQvT3JkZXJDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9saWIvYXBvbGxvLWNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy9bc2x1Z10udHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2Zvcm1hdC1wcmljZS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXQtbWVkaWEtc291cmNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1mZWF0aGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiZ2V0RGVwYXJ0bWVudHMiLCJhcG9sbG9DbGllbnQiLCJlcnJvciIsImRhdGEiLCJsb2FkaW5nIiwicXVlcnkiLCJncWwiLCJkZXBhcnRtZW50cyIsImdldFByb2R1Y3RzUGFnZSIsImZpbHRlciIsImZvcm1hdEZpbHRlcnMiLCJmb3JtYXR0ZWRGaWx0ZXJzIiwiZGVwYXJ0bWVudCIsImNhdGVnb3J5Iiwic3ViY2F0ZWdvcnkiLCJzdGFydCIsImxpbWl0IiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiZ2V0UHJvZHVjdEJ5U2x1ZyIsInNsdWciLCJnZXRTZXNzaW9uIiwidG9rZW4iLCJ1cmwiLCJpbmNsdWRlcyIsIkFVVEhfR09PR0xFX0NBTExCQUNLIiwiQVVUSF9GQUNFQk9PS19DQUxMQkFDSyIsInJlc3BvbnNlIiwiZmV0Y2giLCJzZXNzaW9uRGF0YSIsImpzb24iLCJqd3QiLCJ1c2VyIiwiaWQiLCJ1c2VybmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiZm9ybWF0cyIsInRodW1ibmFpbCIsIkFkZFRvQmFnQnV0dG9uIiwicHJvcFR5cGVzIiwib3JkZXIiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJjbGFzc2VzIiwiY29udGFpbmVyIiwiYWRkUHJvZHVjdFRvQmFnIiwidXNlQ29udGV4dCIsIk9yZGVyQ29udGV4dCIsImhhbmRsZXJDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YXJpYW50UXVhbnRpdHkiLCJwYXJzZUludCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImUiLCJDYXJvdXNlbCIsIm1lZGlhIiwiYXJyYXkiLCJjb250cm9scyIsImJ1dHRvbiIsImltYWdlIiwidmlkZW8iLCJmaWxlIiwic2V0RmlsZSIsInVzZVN0YXRlIiwibWVkaWFFbGVtZW50IiwidXNlUmVmIiwic2hvd1ByZXZpb3VzIiwiZmlsZUluZGV4IiwiaW5kZXhPZiIsImxlbmd0aCIsInNob3dOZXh0IiwibWltZSIsImdldE1lZGlhU291cmNlIiwiYWx0ZXJuYXRpdmVUZXh0IiwiT2ZmZXJzU2VsZWN0b3IiLCJvZmZlcnMiLCJzdGF0ZSIsInNlbGVjdGVkT2ZmZXJzIiwic2V0U2VsZWN0ZWRPZmZlcnMiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImFwcGx5T2ZmZXIiLCJvZmZlcklkIiwiY3VycmVudFRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFwcGxpZWQiLCJzZWxlY3RlZE9mZmVyIiwiY29uY2F0IiwibWFwIiwib2ZmZXIiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJRdWFudGl0eVNlbGVjdG9yIiwic3RvY2siLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwiZGVjcmVtZW50IiwiaW5jcmVtZW50IiwiYXBwZWFyYW5jZSIsIm51bWJlciIsIlZhcmlhbnRTZWxlY3RvciIsInZhcmlhbnRzIiwiZGVmYXVsdEl0ZW0iLCJpdGVtIiwiY29sb3JTd2F0Y2giLCJzZWxlY3RlZFZhcmlhbnQiLCJzZXRTZWxlY3RlZFZhcmlhbnQiLCJkcm9wZG93bkljb24iLCJhbmltYXRlIiwiY3VycmVudCIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImNvbG9yIiwidHJpbSIsInRvTG93ZXJDYXNlIiwic2l6ZSIsInBhdHRlcm4iLCJ2YXJpYW50IiwiRHJvcGRvd24iLCJsYWJlbCIsInN0cmluZyIsImNoaWxkcmVuIiwib25DbGljayIsImFycm93SWNvbiIsIkFQSV9ET01BSU4iLCJwcm9jZXNzIiwiUEFHRV9MSU1JVCIsIkFVVEhfRkFDRUJPT0tfVVJMIiwiQVVUSF9HT09HTEVfVVJMIiwiU1RSSVBFX1BVQkxJU0hFRF9LRVkiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJzZXRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9naW4iLCJzZXNzaW9uIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiZ2V0U2Vzc2lvblN0b3JhZ2UiLCJwYXJzZSIsImdldEl0ZW0iLCJfZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSIsImdldFRva2VuIiwidXNlU2Vzc2lvbiIsInVzZUVmZmVjdCIsImlzVXNlckxvZ2dlZEluIiwiT3JkZXJQcm92aWRlciIsInNldE9yZGVyIiwiZ2V0T3JkZXIiLCJsb2NhbFN0b3JhZ2UiLCJvIiwic2F2ZU9yZGVyIiwiY291bnRQcm9kdWN0cyIsImFjdGl2ZU9yZGVyIiwiaW5kZXhPZk9yZGVySXRlbSIsImZpbmRJbmRleCIsIm9yZGVySXRlbSIsImN1cnJlbnRRdWFudGl0eSIsInJlbW92ZVByb2R1Y3QiLCJpdGVtTnVtYmVyIiwiYWxlcnQiLCJzcGxpY2UiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJpbml0aWFsaXplQXBvbGxvQ2xpZW50IiwiaW5pdGlhbFN0YXRlIiwiX2Fwb2xsb0NsaWVudCIsImV4aXN0aW5nQ2FjaGUiLCJleHRyYWN0IiwicmVzdG9yZSIsInVzZUFwb2xsb0NsaWVudCIsInN0b3JlIiwidXNlTWVtbyIsImNhcm91c2VsIiwiZGV0YWlscyIsImluZm9ybWF0aW9uIiwic2VjdGlvbiIsImhlYWRlciIsInRpdGxlIiwiYWRkQnV0dG9uIiwiUHJvZHVjdERldGFpbHNQYWdlIiwicmVmZXJlciIsInZpZXdwb3J0V2lkdGgiLCJzZXRWaWV3cG9ydFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImZvcm1hdFByaWNlIiwicHJpY2UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJyZXEiLCJwcm9wcyIsImhlYWRlcnMiLCJjdXJyZW5jeUNvZGUiLCJwcmljZVdpdGhEZWNpbWFscyIsInBhcnNlRmxvYXQiLCJTdHJpbmciLCJ0b0ZpeGVkIiwidG9VcHBlckNhc2UiLCJtZWRpYU5vdEZvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlPLE1BQU1BLGNBQWMsR0FBRyxPQUM1QkMsWUFENEIsS0FFRDtBQUMzQixNQUFJO0FBQUVDLFNBQUY7QUFBU0MsUUFBVDtBQUFlQztBQUFmLE1BQTJCLE1BQU1ILFlBQVksQ0FBQ0ksS0FBYixDQUFtQjtBQUN0REEsU0FBSyxFQUFFQyxrREFBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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b2R1Y3RzL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvZHVjdHMvW3NsdWddLnRzeFwiKTtcbiIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgZ3FsLCBOb3JtYWxpemVkQ2FjaGVPYmplY3QgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5pbXBvcnQgSURlcGFydG1lbnQgZnJvbSAnQC9tb2RlbHMvSURlcGFydG1lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERlcGFydG1lbnRzID0gYXN5bmMgKFxyXG4gIGFwb2xsb0NsaWVudDogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD5cclxuKTogUHJvbWlzZTxJRGVwYXJ0bWVudFtdPiA9PiB7XHJcbiAgbGV0IHsgZXJyb3IsIGRhdGEsIGxvYWRpbmcgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICBxdWVyeTogZ3FsYFxyXG4gICAgICBxdWVyeSBnZXREZXBhcnRtZW50cyB7XHJcbiAgICAgICAgZGVwYXJ0bWVudHMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHNsdWdcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgc3ViY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgfSk7XHJcbiAgXHJcbiAgcmV0dXJuIGVycm9yID8/IGRhdGEuZGVwYXJ0bWVudHM7XHJcbn07XHJcbiIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgZ3FsLCBOb3JtYWxpemVkQ2FjaGVPYmplY3QgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5pbXBvcnQgSVByb2R1Y3QgZnJvbSAnQC9tb2RlbHMvSVByb2R1Y3QnO1xyXG5cclxuaW50ZXJmYWNlIElQYWdlRmlsdGVyIHtcclxuICBzdGFydDogbnVtYmVyO1xyXG4gIGxpbWl0OiBudW1iZXI7XHJcbiAgcXVlcnk/OiBhbnlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c1BhZ2UgPSBhc3luYyAoXHJcbiAgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PixcclxuICBmaWx0ZXI6IElQYWdlRmlsdGVyXHJcbik6IFByb21pc2U8SVByb2R1Y3RbXT4gPT4ge1xyXG4gIGNvbnN0IGZvcm1hdEZpbHRlcnMgPSAoKSA9PiB7XHJcbiAgICBsZXQgZm9ybWF0dGVkRmlsdGVycyA9ICcnO1xyXG5cclxuICAgIGlmIChmaWx0ZXIucXVlcnkpIHtcclxuICAgICAgaWYgKGZpbHRlci5xdWVyeS5kZXBhcnRtZW50KSB7XHJcbiAgICAgICAgZm9ybWF0dGVkRmlsdGVycyArPSBgXHJcbiAgICAgICAgICBkZXBhcnRtZW50czogeyBzbHVnOiBcIiR7ZmlsdGVyLnF1ZXJ5LmRlcGFydG1lbnR9XCIgfVxyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaWx0ZXIucXVlcnkuY2F0ZWdvcnkpIHtcclxuICAgICAgICBmb3JtYXR0ZWRGaWx0ZXJzICs9IGBcclxuICAgICAgICAgIGNhdGVnb3JpZXM6IHsgc2x1ZzogXCIke2ZpbHRlci5xdWVyeS5jYXRlZ29yeX1cIiB9XHJcbiAgICAgICAgYDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZpbHRlci5xdWVyeS5zdWJjYXRlZ29yeSkge1xyXG4gICAgICAgIGZvcm1hdHRlZEZpbHRlcnMgKz0gYFxyXG4gICAgICAgICAgc3ViY2F0ZWdvcmllczogeyBzbHVnOiBcIiR7ZmlsdGVyLnF1ZXJ5LnN1YmNhdGVnb3J5fVwiIH1cclxuICAgICAgICBgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZvcm1hdHRlZEZpbHRlcnM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBlcnJvciwgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBncWxgXHJcbiAgICAgIHF1ZXJ5IGdldFByb2R1Y3RzUGFnZShcclxuICAgICAgICAkd2hlcmU6IEpTT04hID0ge1xyXG4gICAgICAgICAgYWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAke2Zvcm1hdEZpbHRlcnMoKX1cclxuICAgICAgICB9XHJcbiAgICAgICkge1xyXG4gICAgICAgIHByb2R1Y3RzKHN0YXJ0OiAke2ZpbHRlci5zdGFydH0sIGxpbWl0OiAke2ZpbHRlci5saW1pdH0sIHdoZXJlOiAkd2hlcmUpIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgb2ZmZXJzKHdoZXJlOiB7IGFjdGl2ZTogdHJ1ZSB9KSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb3ZlciB7XHJcbiAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICB1cmxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGBcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGVycm9yID8/IGRhdGEucHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0OiBJUHJvZHVjdCkgPT4gcHJvZHVjdCAhPT0gbnVsbCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdEJ5U2x1ZyA9IGFzeW5jIChcclxuICBhcG9sbG9DbGllbnQ6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+LFxyXG4gIHNsdWc6IHN0cmluZ1xyXG4pOiBQcm9taXNlPElQcm9kdWN0PiA9PiB7XHJcbiAgY29uc3QgeyBlcnJvciwgZGF0YSwgbG9hZGluZyB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBncWxgXHJcbiAgICAgIHF1ZXJ5IGdldFByb2R1Y3QoJHdoZXJlOiBKU09OISA9IHsgYWN0aXZlOiB0cnVlLCBzbHVnOiBcIiR7c2x1Z31cIiB9KSB7XHJcbiAgICAgICAgcHJvZHVjdHMod2hlcmU6ICR3aGVyZSkge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICBtZWRpYSB7XHJcbiAgICAgICAgICAgIG1pbWVcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtZXRhX2Rlc2NyaXB0aW9uXHJcbiAgICAgICAgICBtZXRhX3RpdGxlXHJcbiAgICAgICAgICBvZmZlcnMod2hlcmU6IHsgYWN0aXZlOiB0cnVlIH0pIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBkaXNjb3VudFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHJpY2VcclxuICAgICAgICAgIHZhcmlhbnRzKHdoZXJlOiB7YWN0aXZlOiB0cnVlfSkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICBwYXR0ZXJuXHJcbiAgICAgICAgICAgIHNpemVcclxuICAgICAgICAgICAgc3RvY2tcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGBcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGVycm9yID8/IGRhdGEucHJvZHVjdHNbMF07XHJcbn07XHJcbiIsImltcG9ydCB7IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0ssIEFVVEhfR09PR0xFX0NBTExCQUNLIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcbmltcG9ydCBJU2Vzc2lvbiBmcm9tICdAL21vZGVscy9JU2Vzc2lvbic7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2Vzc2lvbiA9IGFzeW5jICh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxJU2Vzc2lvbj4gPT4ge1xyXG4gIGNvbnN0IHVybDogc3RyaW5nID0gdG9rZW4uaW5jbHVkZXMoJ2lkX3Rva2VuJylcclxuICAgID8gQVVUSF9HT09HTEVfQ0FMTEJBQ0tcclxuICAgIDogQVVUSF9GQUNFQk9PS19DQUxMQkFDSztcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyB0b2tlbik7XHJcbiAgY29uc3Qgc2Vzc2lvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b2tlbjogc2Vzc2lvbkRhdGEuand0LFxyXG4gICAgdXNlcjoge1xyXG4gICAgICBpZDogc2Vzc2lvbkRhdGEudXNlci5pZCxcclxuICAgICAgdXNlcm5hbWU6IHNlc3Npb25EYXRhLnVzZXIudXNlcm5hbWUsXHJcbiAgICAgIGVtYWlsOiBzZXNzaW9uRGF0YS51c2VyLmVtYWlsLFxyXG4gICAgICBhdmF0YXI6IHNlc3Npb25EYXRhLnVzZXIuYXZhdGFyXHJcbiAgICAgICAgPyBzZXNzaW9uRGF0YS51c2VyLmF2YXRhci5mb3JtYXRzLnRodW1ibmFpbFxyXG4gICAgICAgIDogbnVsbFxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCcFpEMGlZVE16T0dVM05UVXRaalpqTnkwME5XRXdMVGhsWXpjdE1HVTRZVGt5WlRNelkyWTJJaUJrWVhSaExXNWhiV1U5SWt4aGVXVnlJREVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZDJsa2RHZzlJamd4Tmk0eU1qSXpOeUlnYUdWcFoyaDBQU0kzTURBdU5UazNJaUIyYVdWM1FtOTRQU0l3SURBZ09ERTJMakl5TWpNM0lEY3dNQzQxT1RjaVBqeHdZWFJvSUdROUlrMDNOekl1TURJd09TdzNPVGN1T0RrMU1UaGhNelF1T0RFME1qWXNNelF1T0RFME1qWXNNQ3d3TERFdE1UWXVOelExTmpFdE5DNHpNRGcxT1V3eU56Z3VPRFkzTERVek15NHdOREEyT1dFek5TNHdNemswTWl3ek5TNHdNemswTWl3d0xEQXNNUzB4TXk0NU1UTTNMVFEzTGpVd01UUTNURFEyTmk0d01EQTJNeXd4TVRjdU9USTBZVE0wTGprNU9UUTFMRE0wTGprNU9UUTFMREFzTUN3eExEUTNMalV3TVRjeExURXpMamt4TXpVNGJEUTNOaTQwTURneUxESTJNQzQxTkRVNVlUTTFMakF6T1RFekxETTFMakF6T1RFekxEQXNNQ3d4TERFekxqa3hNemd5TERRM0xqVXdNVFEzVERnd01pNDNOemNzTnpjNUxqWTNNMkV6TkM0M056RTBMRE0wTGpjM01UUXNNQ3d3TERFdE1qQXVPRFk1TVRRc01UWXVOemswT1RKQk16VXVNVFEzTERNMUxqRTBOeXd3TERBc01TdzNOekl1TURJd09TdzNPVGN1T0RrMU1UaGFiUzB4TXk0NE5qWTNMVGt1TlRjeU1qZGhNamt1TURBd056a3NNamt1TURBd056a3NNQ3d3TERBc016a3VNelU0TmpRdE1URXVOVEk0T0V3NU9UZ3VOVFl3TWl3ME1Ea3VNVGM0T0RkQk1qa3VNRE16TkRVc01qa3VNRE16TkRVc01Dd3dMREFzT1RnM0xqQXpNVFkwTERNMk9TNDRNa3cxTVRBdU5qSXpORFFzTVRBNUxqSTNOREE1WVRJNUxqQXdNRGd4TERJNUxqQXdNRGd4TERBc01Dd3dMVE01TGpNMU9EWTFMREV4TGpVeU9EaE1NamN3TGpJeE56UXpMRFE0T0M0ME1UZ3hNMEV5T1M0d016TXpOU3d5T1M0d016TXpOU3d3TERBc01Dd3lPREV1TnpRMkxEVXlOeTQzTnpkYUlpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TVRreExqZzRPRGd5SUMwNU9TNDNNREUxS1NJZ1ptbHNiRDBpSTJZeVpqSm1NaUl2UGp4d1lYUm9JR1E5SWswM09ERXVPRFEwTVRRc05qWTVMak15TkRnM1lUTXlMamN3TlRZM0xETXlMamN3TlRZM0xEQXNNQ3d4TFRFMUxqWTRNall5TFRRdU1ERTJOa3d6T0RBdU9UazVNVGNzTkRVMExqWTJORGN4WVRNeUxqUTJPVFEzTERNeUxqUTJPVFEzTERBc01Dd3hMVEV5TGpreE9Ua3lMVFEwTGpFd09EUk1ORGc0TGpFMU1Td3hPVEV1TURBMVlUTXlMalE1TmprekxETXlMalE1TmprekxEQXNNQ3d4TERRMExqRXdPRFkxTFRFeUxqa3hPVGt5VERreE55NDBNakl5Tml3ek9EZ3VOekk0TmpoaE16SXVORGszTlRnc016SXVORGszTlRnc01Dd3dMREVzTVRJdU9URTVPVE1zTkRRdU1UQTRNemxzTFM0ME16ZzNNeTB1TWpNNU56UXVORE00TnpNdU1qTTVOelJNT0RFd0xqSTNNRFF4TERZMU1pNHpPRGd6TkVFek1pNHpOalF6TERNeUxqTTJORE1zTUN3d0xERXNOemd4TGpnME5ERTBMRFkyT1M0ek1qUTROMW9pSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtDMHhPVEV1T0RnNE9ESWdMVGs1TGpjd01UVXBJaUJtYVd4c1BTSWpaakptTW1ZeUlpOCtQSEJoZEdnZ1pEMGlUVGMyT1M0NE9EZzRNaXczT1RjdU56azROV2d0TlRRellUTXlMalV6TmpreUxETXlMalV6TmpreUxEQXNNQ3d4TFRNeUxqVXRNekl1TlhZdE5ERTVZVE15TGpVek5qa3lMRE15TGpVek5qa3lMREFzTUN3eExETXlMalV0TXpJdU5XZzFORE5oTXpJdU5UTTJPRFVzTXpJdU5UTTJPRFVzTUN3d0xERXNNekl1TlN3ek1pNDFkalF4T1VFek1pNDFNelk0TlN3ek1pNDFNelk0TlN3d0xEQXNNU3czTmprdU9EZzRPRElzTnprM0xqYzVPRFZhSWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3RNVGt4TGpnNE9EZ3lJQzA1T1M0M01ERTFLU0lnWm1sc2JEMGlJMlptWmlJdlBqeHdZWFJvSUdROUlrMDNOamt1T0RnNE9ESXNPREF3TGpJNU9EVm9MVFUwTTJFek5TNHdNemswTnl3ek5TNHdNemswTnl3d0xEQXNNUzB6TlMwek5YWXROREU1WVRNMUxqQXpPVFEzTERNMUxqQXpPVFEzTERBc01Dd3hMRE0xTFRNMWFEVTBNMkV6TlM0d016azBOeXd6TlM0d016azBOeXd3TERBc01Td3pOU3d6TlhZME1UbEJNelV1TURNNU5EY3NNelV1TURNNU5EY3NNQ3d3TERFc056WTVMamc0T0RneUxEZ3dNQzR5T1RnMVdtMHROVFF6TFRRNE0yRXlPUzR3TXpJM05Td3lPUzR3TXpJM05Td3dMREFzTUMweU9Td3lPWFkwTVRsaE1qa3VNRE15TnpVc01qa3VNRE15TnpVc01Dd3dMREFzTWprc01qbG9OVFF6WVRJNUxqQXpNamMyTERJNUxqQXpNamMyTERBc01Dd3dMREk1TFRJNWRpMDBNVGxoTWprdU1ETXlOellzTWprdU1ETXlOellzTUN3d0xEQXRNamt0TWpsYUlpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TVRreExqZzRPRGd5SUMwNU9TNDNNREUxS1NJZ1ptbHNiRDBpSTJVMlpUWmxOaUl2UGp4d1lYUm9JR1E5SWswMU9ESXVPRGt4TlRZc05EVXhMalU0Tm1FME1DNDNOak0xT0N3ME1DNDNOak0xT0N3d0xEQXNNQzB6TWk0MU5URXhOaXd4Tmk0eE9EVTVNeXd5Tmk0NE16azNOaXd5Tmk0NE16azNOaXd3TERBc01DMHpOeTQwTkRreE1pd3lOQzQyTkRjMU4wZzJNak11TnpJMU1EVkJOREF1T0RNek5ESXNOREF1T0RNek5ESXNNQ3d3TERBc05UZ3lMamc1TVRVMkxEUTFNUzQxT0RaYUlpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TVRreExqZzRPRGd5SUMwNU9TNDNNREUxS1NJZ1ptbHNiRDBpSTJVMlpUWmxOaUl2UGp4amFYSmpiR1VnWTNnOUlqRTBPQzR4T1RZMk9TSWdZM2s5SWpRME5TNDVOakF6TmlJZ2NqMGlOalV1TnpVM01qY2lJR1pwYkd3OUlpTmhNekU1TldJaUx6NDhjR0YwYUNCa1BTSk5OekkxTGpJME9EWTRMRFk0TVM0eE56ZzFNV0V6TVM0NE56Z3hNU3d6TVM0NE56Z3hNU3d3TERBc01TMDNMak0xT1RnMkxqZzFhQzAwTXpsaE16RXVPRGMwT1RJc016RXVPRGMwT1RJc01Dd3dMREV0TVRVdU5EWXRNeTQ1TjJ3eExqRTJPVGt5TFRFdU5qZ3NORGd1T1RndE56QXVOVE1zTnpJdU5UZ3dNRGd0TVRBMExqUTVMREV1TURZdE1TNDFNeXd4TVM0ME1UazVNeTB4Tmk0ME5HRTRMak16TmprekxEZ3VNek0yT1RNc01Dd3dMREVzTVRNdU56QXdNVGtzTUd3ek55NDVNems1TkN3MU5DNDJNWFl1TURGc01qSXVNekU1T0RNc016SXVNVFFzTlRNdU1qZ3dNamNzTnpZdU55dzRNQzQ0TURrMU55MHhNVFV1TXpWaE9DNHpORGM0TWl3NExqTTBOemd5TERBc01Dd3hMREV6TGpZNE1ERTRMREJzTlRFdU9ETTVPRFFzTnpNdU9Ua3NNaTQ1T0N3MExqSTFXaUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xURTVNUzQ0T0RnNE1pQXRPVGt1TnpBeE5Ta2lJR1pwYkd3OUlpTXhZekprTTJRaUx6NDhjR0YwYUNCa1BTSk5ORGsxTGpZeE9EUTRMRFV4T1M0M05qZ3dOVUUxTUM0eU9USTNNU3cxTUM0eU9USTNNU3d3TERBc01DdzBOVFV1TkRVNExEVXpPUzQzTXpjM0xETXpMakV4TkN3ek15NHhNVFFzTUN3d0xEQXNOREE1TGpJMU5EVXNOVGN3TGpFME4yZ3hNell1TnpRelFUVXdMak0zT0Rrc05UQXVNemM0T1N3d0xEQXNNQ3cwT1RVdU5qRTRORGdzTlRFNUxqYzJPREExV2lJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9MVEU1TVM0NE9EZzRNaUF0T1RrdU56QXhOU2tpSUdacGJHdzlJaU5qWTJNaUx6NDhjR0YwYUNCa1BTSk5OekUzTGpnNE9EZ3lMRFk0TXk0d01qZzBPR2d0TkRNNVlUTXlMamszTURBM0xETXlMamszTURBM0xEQXNNQ3d4TFRNekxUTXpWak01T1M0M09EZzNNMkV6TXk0d016Y3pOQ3d6TXk0d016Y3pOQ3d3TERBc01Td3pNeTB6TTJnME16bGhNek11TURNM016UXNNek11TURNM016UXNNQ3d3TERFc016TXNNek5XTmpVd0xqQXlPRFE0WVRNeUxqazJNakV4TERNeUxqazJNakV4TERBc01Dd3hMVE16TERNeldtMHRORE01TFRNeE5DNHlNemszTldFek1TNHdNelV5TERNeExqQXpOVElzTUN3d0xEQXRNekVzTXpGV05qVXdMakF5T0RRNFlUTXdMamszTURjM0xETXdMamszTURjM0xEQXNNQ3d3TERNeExETXhhRFF6T1dFek1DNDVOak0zTERNd0xqazJNemNzTUN3d0xEQXNNekV0TXpGV016azVMamM0T0RjellUTXhMakF6TlRJeExETXhMakF6TlRJeExEQXNNQ3d3TFRNeExUTXhXaUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xURTVNUzQ0T0RnNE1pQXRPVGt1TnpBeE5Ta2lJR1pwYkd3OUlpTXhZekprTTJRaUx6NDhMM04yWno0TkNnPT1cIiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFNob3BwaW5nQmFnIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcbmltcG9ydCBJUGF5bWVudE9yZGVyIGZyb20gJ0AvbW9kZWxzL0lQYXltZW50T3JkZXInO1xyXG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgT3JkZXJDb250ZXh0IGZyb20gJ0AvY29udGV4dC9PcmRlckNvbnRleHQnO1xyXG5cclxuQWRkVG9CYWdCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIG9yZGVyOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcblxyXG5BZGRUb0JhZ0J1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgb3JkZXI6IG51bGxcclxufTtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY29udGFpbmVyOiBgXHJcbiAgICBiZy1hY2NlbnRcclxuICAgIGN1cnNvci1wb2ludGVyXHJcbiAgICBmbGV4XHJcbiAgICBmbGV4LXJvd1xyXG4gICAgZmxleC1ub3dyYXBcclxuICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgaG92ZXI6YmctaW5hY3RpdmVcclxuICAgIGhvdmVyOnRleHQtcHJpbWFyeVxyXG4gICAganVzdGlmeS1jZW50ZXJcclxuICAgIGZvbnQtYm9sZFxyXG4gICAgcHgtNFxyXG4gICAgcHktM1xyXG4gICAgcm91bmRlZC1sZ1xyXG4gICAgdGV4dC1ic2VcclxuICAgIHNoYWRvd1xyXG4gIGBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFRvQmFnQnV0dG9uKHsgb3JkZXIgfTogeyBvcmRlcjogSVBheW1lbnRPcmRlciB9KSB7XHJcblxyXG4gIGNvbnN0IHsgYWRkUHJvZHVjdFRvQmFnIH0gPSB1c2VDb250ZXh0KE9yZGVyQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJDbGljayA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdmFyaWFudFF1YW50aXR5ID0gcGFyc2VJbnQoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWFudGl0eScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICAgIGFkZFByb2R1Y3RUb0JhZyh2YXJpYW50UXVhbnRpdHksIG9yZGVyKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YSBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlckNsaWNrKGUpfSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItM1wiPjxTaG9wcGluZ0JhZyAvPjwvc3Bhbj5cclxuICAgICAgPHNwYW4+QcOxYWRpciBhIGxhIGJvbHNhPC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoZXZyb25MZWZ0LCBDaGV2cm9uUmlnaHQgfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuXHJcbmltcG9ydCBnZXRNZWRpYVNvdXJjZSBmcm9tICdAL3V0aWxzL2dldC1tZWRpYS1zb3VyY2UnO1xyXG5cclxuQ2Fyb3VzZWwucHJvcFR5cGVzID0ge1xyXG4gIG1lZGlhOiBQcm9wVHlwZXMuYXJyYXlcclxufTtcclxuXHJcbkNhcm91c2VsLmRlZmF1bHRQcm9wcyA9IHtcclxuICBtZWRpYTogW11cclxufTtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY29udGFpbmVyOiBgXHJcbiAgICBtZDp3LWZ1bGxcclxuICAgIGgtZnVsbFxyXG4gICAgbWQ6ZmxleFxyXG4gICAgbWQ6ZmxleC1yb3dcclxuICAgIG1kOmZsZXgtbm93cmFwXHJcbiAgICBtZDpqdXN0aWZ5LWNlbnRlclxyXG4gICAgbWQ6aXRlbXMtY2VudGVyXHJcbiAgICByZWxhdGl2ZVxyXG4gIGAsXHJcblxyXG4gIGNvbnRyb2xzOiB7XHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgYWJzb2x1dGVcclxuICAgICAgYmctYnNlXHJcbiAgICAgIGJnLW9wYWNpdHktNzVcclxuICAgICAgYm90dG9tLTBcclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICBmbGV4LXJvd1xyXG4gICAgICByaWdodC0wXHJcbiAgICBgLFxyXG4gICAgYnV0dG9uOiBgXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1yb3dcclxuICAgICAgaC05XHJcbiAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICBqdXN0aWZ5LWNlbnRlclxyXG4gICAgICBtZDp0ZXh0LWFjY2VudFxyXG4gICAgICBtZDpob3Zlcjp0ZXh0LXByaW1hcnlcclxuICAgICAgdy05XHJcbiAgICBgXHJcbiAgfSxcclxuXHJcbiAgaW1hZ2U6IGBcclxuICAgIGFuaW1hdGUtZmFkZUluXHJcbiAgICBtaW4taC1mdWxsXHJcbiAgICBtaW4tdy1mdWxsXHJcbiAgICBvYmplY3QtY292ZXJcclxuICBgLFxyXG5cclxuICB2aWRlbzogYFxyXG4gICAgYW5pbWF0ZS1mYWRlSW5cclxuICAgIG1pbi1oLWZ1bGxcclxuICAgIG1pbi13LWZ1bGxcclxuICBgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbCh7IG1lZGlhIH0pIHtcclxuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShtZWRpYVswXSk7XHJcbiAgY29uc3QgbWVkaWFFbGVtZW50ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBzaG93UHJldmlvdXMgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBmaWxlSW5kZXggPSBtZWRpYS5pbmRleE9mKGZpbGUpXHJcbiAgICAgID8gbWVkaWEuaW5kZXhPZihmaWxlKSAtIDFcclxuICAgICAgOiBtZWRpYS5sZW5ndGggLSAxO1xyXG5cclxuICAgIHJldHVybiBzZXRGaWxlKG1lZGlhW2ZpbGVJbmRleF0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dOZXh0ID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZmlsZUluZGV4ID0gbWVkaWEuaW5kZXhPZihmaWxlKSA8IChtZWRpYS5sZW5ndGggLSAxKVxyXG4gICAgICA/IG1lZGlhLmluZGV4T2YoZmlsZSkgKyAxXHJcbiAgICAgIDogMDtcclxuXHJcbiAgICByZXR1cm4gc2V0RmlsZShtZWRpYVtmaWxlSW5kZXhdKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAge1xyXG4gICAgICAgIGZpbGUgJiYgKFxyXG4gICAgICAgICAgZmlsZS5taW1lLmluY2x1ZGVzKCdpbWFnZScpID9cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHJlZj17bWVkaWFFbGVtZW50fVxyXG4gICAgICAgICAgICAgIGtleT17ZmlsZS5pZH1cclxuICAgICAgICAgICAgICBzcmM9e2dldE1lZGlhU291cmNlKGZpbGUpfVxyXG4gICAgICAgICAgICAgIGFsdD17ZmlsZS5hbHRlcm5hdGl2ZVRleHR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgIHJlZj17bWVkaWFFbGVtZW50fVxyXG4gICAgICAgICAgICAgIGtleT17ZmlsZS5pZH1cclxuICAgICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy52aWRlb31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtnZXRNZWRpYVNvdXJjZShmaWxlKX0gdHlwZT17ZmlsZS5taW1lfT48L3NvdXJjZT5cclxuICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGEgb25DbGljaz17KGUpID0+IHNob3dQcmV2aW91cyhlKX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzLmJ1dHRvbn0+XHJcbiAgICAgICAgICA8Q2hldnJvbkxlZnQgLz5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxhIG9uQ2xpY2s9eyhlKSA9PiBzaG93TmV4dChlKX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzLmJ1dHRvbn0+XHJcbiAgICAgICAgICA8Q2hldnJvblJpZ2h0IC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ0AvY29tcG9uZW50cy9kcm9wZG93bnMvRHJvcGRvd24nO1xyXG5pbXBvcnQgSU9mZmVyIGZyb20gJ0AvbW9kZWxzL0lPZmZlcic7XHJcblxyXG5PZmZlcnNTZWxlY3Rvci5wcm9wVHlwZXMgPSB7XHJcbiAgb2ZmZXJzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgc3RhdGU6IFByb3BUeXBlcy5hcnJheVxyXG59O1xyXG5cclxuT2ZmZXJzU2VsZWN0b3IuZGVmYXVsdFByb3BzID0ge1xyXG4gIG9mZmVyczogW10sXHJcbiAgc3RhdGU6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPZmZlcnNTZWxlY3RvcihcclxuICB7IG9mZmVycywgc3RhdGUgfTogeyBvZmZlcnM6IEFycmF5PElPZmZlcj4sIHN0YXRlOiBhbnkgfVxyXG4pIHtcclxuICBjb25zdCBbc2VsZWN0ZWRPZmZlcnMsIHNldFNlbGVjdGVkT2ZmZXJzXSA9IHN0YXRlO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgYXBwbHlPZmZlciA9IChldmVudDogYW55LCBvZmZlcklkOiBzdHJpbmcpID0+IHtcclxuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYmctYWNjZW50Jyk7XHJcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2JnLWluYWN0aXZlJyk7XHJcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3NoYWRvdycpO1xyXG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdzaGFkb3ctaW5uZXInKTtcclxuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgndGV4dC1ic2UnKTtcclxuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgndGV4dC1wcmltYXJ5Jyk7XHJcblxyXG4gICAgY29uc3QgYXBwbGllZCA9IHNlbGVjdGVkT2ZmZXJzLmZpbHRlcigoc2VsZWN0ZWRPZmZlcikgPT4gc2VsZWN0ZWRPZmZlciA9PT0gb2ZmZXJJZCk7XHJcblxyXG4gICAgaWYgKGFwcGxpZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBzZXRTZWxlY3RlZE9mZmVycyhzZWxlY3RlZE9mZmVycy5jb25jYXQoW29mZmVySWRdKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gc2V0U2VsZWN0ZWRPZmZlcnMoXHJcbiAgICAgICAgc2VsZWN0ZWRPZmZlcnMuZmlsdGVyKChzZWxlY3RlZE9mZmVyKSA9PiBzZWxlY3RlZE9mZmVyICE9PSBvZmZlcklkKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7XHJcbiAgICAgICAgb2ZmZXJzLm1hcCgob2ZmZXIpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtvZmZlci5pZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi00XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gYXBwbHlPZmZlcihldmVudCwgb2ZmZXIuaWQpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC13cmFwIGp1c3RpZnktY2VudGVyIHB4LTQgcHktMiByb3VuZGVkLW1kIHNoYWRvdyBiZy1hY2NlbnQgdGV4dC1ic2UgZm9udC1ib2xkIGJvcmRlci1hY2NlbnQgaG92ZXI6YmctaW5hY3RpdmUgaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tYWxsIHctMS80XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzZWxlY3RlZE9mZmVycy5maWx0ZXIoKHNlbGVjdGVkT2ZmZXI6IElPZmZlcikgPT4gc2VsZWN0ZWRPZmZlciA9PT0gb2ZmZXIuaWQpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyA8PlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj7CoUxhIHF1aWVybyE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIDogPHNwYW4+wqFZYSBsYSB0aWVuZXMhPC9zcGFuPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8cD57b2ZmZXIubmFtZX08L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHRleHQtYWNjZW50IGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93biBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKCF2aXNpYmxlKX0gbGFiZWw9XCJEZXRhbGxlc1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge3Zpc2libGUgJiZcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS00IG10LTEgcm91bmRlZC1tZCBzaGFkb3cgYmctc29mdCBhbmltYXRlLWV4cGFuZEJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge29mZmVyLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICA8L2RpdiA+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBsdXMgfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuaW1wb3J0IHsgTWludXMgfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuXHJcbmNvbnN0IFF1YW50aXR5U2VsZWN0b3IgPSAoeyBzdG9jayB9KSA9PiB7XHJcbiAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgZGVjcmVtZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAocXVhbnRpdHkgPiAxKSB7XHJcbiAgICAgIHNldFF1YW50aXR5KHF1YW50aXR5IC0gMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5jcmVtZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAocXVhbnRpdHkgPCBzdG9jaykge1xyXG4gICAgICBzZXRRdWFudGl0eShxdWFudGl0eSArIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTkgdy05IHJvdW5kZWQtbC1tZCBiZy1pbmFjdGl2ZSB0ZXh0LWFjY2VudCBob3Zlcjp0ZXh0LXByaW1hcnkgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBkZWNyZW1lbnQoZXZlbnQpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNaW51cyBzaXplPVwiMThcIiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJxdWFudGl0eVwiXHJcbiAgICAgICAgICBuYW1lPVwicXVhbnRpdHlcIlxyXG4gICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxyXG4gICAgICAgICAgc3R5bGU9e3thcHBlYXJhbmNlOiAndGV4dGZpZWxkJ319XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTIwIGJnLWluYWN0aXZlIHRleHQtY2VudGVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtOSB3LTkgcm91bmRlZC1yLW1kIGJnLWluYWN0aXZlIHRleHQtYWNjZW50IGhvdmVyOnRleHQtcHJpbWFyeSBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGluY3JlbWVudChldmVudCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBsdXMgc2l6ZT1cIjE4XCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUXVhbnRpdHlTZWxlY3Rvci5wcm9wVHlwZXMgPSB7XHJcbiAgc3RvY2s6IFByb3BUeXBlcy5udW1iZXJcclxufTtcclxuXHJcblF1YW50aXR5U2VsZWN0b3IuZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0b2NrOiAxXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWFudGl0eVNlbGVjdG9yO1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGV2cm9uRG93biB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5cclxuaW1wb3J0IGNvbG9ycyBmcm9tICdAL2RhdGEvY29sb3JzLmpzb24nO1xyXG5cclxuVmFyaWFudFNlbGVjdG9yLnByb3BUeXBlcyA9IHtcclxuICBzdGF0ZTogUHJvcFR5cGVzLmFycmF5LFxyXG4gIHZhcmlhbnRzOiBQcm9wVHlwZXMuYXJyYXlcclxufTtcclxuXHJcblZhcmlhbnRTZWxlY3Rvci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc3RhdGU6IFtdLFxyXG4gIHZhcmlhbnRzOiBbXVxyXG59O1xyXG5cclxuY29uc3QgY2xhc3NlcyA9IHtcclxuICBjb250YWluZXI6IGBcclxuICAgIGN1cnNvci1wb2ludGVyXHJcbiAgICBvdmVyZmxvdy1oaWRkZW5cclxuICAgIHJlbGF0aXZlXHJcblxyXG4gICAgcm91bmRlZFxyXG4gICAgc2hhZG93XHJcbiAgYCxcclxuICBkZWZhdWx0SXRlbTogYFxyXG4gICAgbWQ6YmctaW5hY3RpdmVcclxuICAgIG1kOnB4LTRcclxuICAgIG1kOnB5LTJcclxuICAgIG1kOnRleHQtc2Vjb25kYXJ5XHJcbiAgICBwLTJcclxuICBgLFxyXG4gIGl0ZW06IHtcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGhvdmVyOmJnLWFjY2VudFxyXG4gICAgICBob3Zlcjp0ZXh0LWJzZVxyXG4gICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAganVzdGlmeS1zdGFydFxyXG4gICAgICBtZDpweC00XHJcbiAgICAgIG1kOnB5LTJcclxuICAgICAgcC0yXHJcbiAgICBgLFxyXG4gICAgY29sb3JTd2F0Y2g6IGBcclxuICAgICAgYm9yZGVyLTJcclxuICAgICAgYm9yZGVyLWJzZVxyXG4gICAgICBoLTdcclxuICAgICAgbWQ6bXItNFxyXG4gICAgICBtci0yXHJcbiAgICAgIHJvdW5kZWQtZnVsbFxyXG4gICAgICB3LTdcclxuICAgIGAsXHJcbiAgICBkZXNjcmlwdGlvbjogYFxyXG4gICAgICB0ZXh0LXNtXHJcbiAgICAgIHVwcGVyY2FzZVxyXG4gICAgYFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZhcmlhbnRTZWxlY3Rvcih7IHN0YXRlLCB2YXJpYW50cyB9KSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkVmFyaWFudCwgc2V0U2VsZWN0ZWRWYXJpYW50XSA9IHN0YXRlO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkcm9wZG93bkljb24gPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGFuaW1hdGUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBkcm9wZG93bkljb24uY3VycmVudC5jbGFzc0xpc3QudG9nZ2xlKCdhbmltYXRlLWZsaXBIb3Jpem9udGFsQm90dG9tJyk7XHJcbiAgICBzZXRWaXNpYmxlKCF2aXNpYmxlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBvbkNsaWNrPXthbmltYXRlfSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICFzZWxlY3RlZFZhcmlhbnRcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmRlZmF1bHRJdGVtfT5cclxuICAgICAgICAgICAgICBTZWxlY2Npb25hXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbc2VsZWN0ZWRWYXJpYW50LmNvbG9yLnRyaW0oKS50b0xvd2VyQ2FzZSgpXVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbS5jb2xvclN3YXRjaH1cclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbS5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRWYXJpYW50LmNvbG9yfSwge3NlbGVjdGVkVmFyaWFudC5zaXplfSwge3NlbGVjdGVkVmFyaWFudC5wYXR0ZXJufVxyXG4gICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB2aXNpYmxlICYmXHJcbiAgICAgICAgICB2YXJpYW50cy5maWx0ZXIoKHZhcmlhbnQpID0+IHZhcmlhbnQuc3RvY2sgPiAwKS5tYXAoKHZhcmlhbnQpID0+IChcclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAga2V5PXt2YXJpYW50LmlkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtLmNvbnRhaW5lciArICdiZy1pbmFjdGl2ZSd9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRWYXJpYW50KHZhcmlhbnQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW0uY29sb3JTd2F0Y2h9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1t2YXJpYW50LmNvbG9yLnRyaW0oKS50b0xvd2VyQ2FzZSgpXSB9fVxyXG4gICAgICAgICAgICAgID48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgIHt2YXJpYW50LmNvbG9yfSwge3ZhcmlhbnQuc2l6ZX0sIHt2YXJpYW50LnBhdHRlcm59XHJcbiAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3VsPlxyXG5cclxuXHJcbiAgICAgIDxzcGFuIHJlZj17ZHJvcGRvd25JY29ufSBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC00IHRvcC0yXCI+XHJcbiAgICAgICAgPENoZXZyb25Eb3duIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGV2cm9uRG93biB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5cclxuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGFiZWw6ICdEcm9wZG93bidcclxufTtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY29udGFpbmVyOiBgXHJcbiAgICBmbGV4XHJcbiAgICBmbGV4LXJvd1xyXG4gICAgZmxleC1ub3dyYXBcclxuICAgIGZvbnQtYm9sZFxyXG4gICAgaXRlbXMtY2VudGVyXHJcbiAgYCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3Bkb3duKHsgY2hpbGRyZW4gPSAnJywgbGFiZWwsIG9uQ2xpY2sgfSkge1xyXG4gIGNvbnN0IGFycm93SWNvbiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgIGFycm93SWNvbi5jdXJyZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGUtZmxpcEhvcml6b250YWxCb3R0b20nKTtcclxuICAgIG9uQ2xpY2soKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGEgb25DbGljaz17YW5pbWF0ZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMVwiPntsYWJlbH08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gcmVmPXthcnJvd0ljb259PjxDaGV2cm9uRG93biBzaXplPVwiMThcIiAvPjwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJjb25zdCBBUElfRE9NQUlOID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0RPTUFJTjtcclxuY29uc3QgUEFHRV9MSU1JVCA9IDEyO1xyXG5cclxuY29uc3QgQVVUSF9GQUNFQk9PS19DQUxMQkFDSyA9IGAke0FQSV9ET01BSU59L2F1dGgvZmFjZWJvb2svY2FsbGJhY2tgO1xyXG5jb25zdCBBVVRIX0ZBQ0VCT09LX1VSTCA9IGAke0FQSV9ET01BSU59L2Nvbm5lY3QvZmFjZWJvb2tgO1xyXG5jb25zdCBBVVRIX0dPT0dMRV9DQUxMQkFDSyA9IGAke0FQSV9ET01BSU59L2F1dGgvZ29vZ2xlL2NhbGxiYWNrYDtcclxuY29uc3QgQVVUSF9HT09HTEVfVVJMID0gYCR7QVBJX0RPTUFJTn0vY29ubmVjdC9nb29nbGVgO1xyXG5cclxuY29uc3QgU1RSSVBFX1BVQkxJU0hFRF9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElTSEVEX0tFWTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQVBJX0RPTUFJTixcclxuICBQQUdFX0xJTUlULFxyXG4gIEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0ssXHJcbiAgQVVUSF9GQUNFQk9PS19VUkwsXHJcbiAgQVVUSF9HT09HTEVfQ0FMTEJBQ0ssXHJcbiAgQVVUSF9HT09HTEVfVVJMLFxyXG4gIFNUUklQRV9QVUJMSVNIRURfS0VZXHJcbn07XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtc2Vzc2lvbnMnO1xyXG5pbXBvcnQgSVNlc3Npb24gZnJvbSAnQC9tb2RlbHMvSVNlc3Npb24nO1xyXG5pbXBvcnQgSVVzZXIgZnJvbSAnQC9tb2RlbHMvSVVzZXInO1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbnRleHQgd2hlcmV2ZXIgeW91IHdhbnQgdG8gYWNjZXNzIHRoZSBBdXRoUHJvdmlkZXJcclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XHJcbmV4cG9ydCB7IEF1dGhQcm92aWRlciB9O1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbXBvbmVudCBpbiB0aGUgX2FwcC50c3ggZmlsZSB0byBzaGFyZSB0aGUgYXV0aGVudGljYXRpb24gc3RhdGVcclxuLy86IGdsb2JhbGx5XHJcbmZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxJVXNlcj4obnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgaWYgKCdpZF90b2tlbicgaW4gcm91dGVyLnF1ZXJ5IHx8ICdhY2Nlc3NfdG9rZW4nIGluIHJvdXRlci5xdWVyeSkge1xyXG4gICAgICBjb25zdCBzZXNzaW9uOiBJU2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24obG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Nlc3Npb24nLCBKU09OLnN0cmluZ2lmeShzZXNzaW9uKSk7XHJcbiAgICAgIHNldFVzZXIoc2Vzc2lvbi51c2VyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdzZXNzaW9uJyk7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgcm91dGVyLnB1c2goJy8nKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRTZXNzaW9uU3RvcmFnZSA9ICgpOiBJU2Vzc2lvbiB8IG51bGwgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbicpKTtcclxuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKChfZXJyb3IgYXMgU3ludGF4RXJyb3IpLm1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRUb2tlbiA9ICgpOiBzdHJpbmcgfCBudWxsID0+IHtcclxuICAgIHJldHVybiBnZXRTZXNzaW9uU3RvcmFnZSgpLnRva2VuO1xyXG4gIH07XHJcblxyXG4gIC8vOiB1c2UgdGhpcyBjdXN0b20gaG9vayB0byBzZXQgdGhlIGxvY2FsIHNlc3Npb24gaW50byB0aGUgZ2xvYmFsIHN0YXRlIGVhY2hcclxuICAvLzogdGltZSBhIHBhZ2UgaXMgcmVmcmVzaGVkOyB1c2UgaXQgb25seSBvbiBwYWdlIGNvbXBvbmVudHNcclxuICBjb25zdCB1c2VTZXNzaW9uID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgc2Vzc2lvbjogSVNlc3Npb24gPSBnZXRTZXNzaW9uU3RvcmFnZSgpO1xyXG5cclxuICAgICAgc2V0VXNlcihzZXNzaW9uPy51c2VyKTtcclxuICAgIH0sIFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc1VzZXJMb2dnZWRJbiA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiBnZXRTZXNzaW9uU3RvcmFnZSgpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgdXNlciwgbG9naW4sIGxvZ291dCwgZ2V0VG9rZW4sIGlzVXNlckxvZ2dlZEluLCB1c2VTZXNzaW9uXHJcbiAgICB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJUGF5bWVudE9yZGVyIGZyb20gXCJAL21vZGVscy9JUGF5bWVudE9yZGVyXCI7XHJcblxyXG4vLzogdXNlIHRoaXMgY29udGV4dCB3aGVuZXZlciB5b3Ugd2FudCB0byBhY2Nlc3MgdGhlIE9yZGVyUHJvdmlkZXJcclxuY29uc3QgT3JkZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyQ29udGV4dDtcclxuXHJcbmV4cG9ydCB7IE9yZGVyUHJvdmlkZXIgfTtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb21wb25lbnQgaW4gYWxsIHRoZSBvdGhlciBjb21wb25lbnRzIHdoZXJlIHlvdSB3YW50IHRvIGFjY2Vzc1xyXG4vLzogdGhlIGdsb2JhbCBzdGF0ZSBvZiBhIHVzZXIgb3JkZXJcclxuZnVuY3Rpb24gT3JkZXJQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuXHJcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZTxBcnJheTxJUGF5bWVudE9yZGVyPj4oW10pO1xyXG5cclxuICBjb25zdCBnZXRPcmRlciA9ICgpOiBBcnJheTxJUGF5bWVudE9yZGVyPiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXInKSkgfHwgW107XHJcbiAgICB9IGNhdGNoIChlcnJvcikgeyB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfTtcclxuXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zdCBvID0gZ2V0T3JkZXIoKVxyXG4gICAgc2V0T3JkZXIobylcclxuICB9LFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHNhdmVPcmRlcihvcmRlcilcclxuICB9LFtvcmRlcl0pXHJcblxyXG4gIGNvbnN0IGNvdW50UHJvZHVjdHMgPSAoKTogbnVtYmVyID0+IHtcclxuICAgIC8vcmV0dXJuIG9yZGVyID8gb3JkZXIudmFyaWFudHMubGVuZ3RoIDogMDtcclxuICAgIHJldHVybiAwXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2F2ZU9yZGVyID0gKG9yZGVyOiBBcnJheTxJUGF5bWVudE9yZGVyPikgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29yZGVyJywgSlNPTi5zdHJpbmdpZnkob3JkZXIpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRQcm9kdWN0VG9CYWcgPSAodmFyaWFudFF1YW50aXR5Om51bWJlciwgcHJvZHVjdDpJUGF5bWVudE9yZGVyKSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmVPcmRlciA9IFsuLi5vcmRlcl1cclxuICAgLy86IGlmIHRoZSBwcm9kdWN0IGFuZCB2YXJpYW50IGlzIGFscmVhZHkgdGhlcmVcclxuICAgY29uc3QgaW5kZXhPZk9yZGVySXRlbSA9IGFjdGl2ZU9yZGVyLmZpbmRJbmRleCgob3JkZXJJdGVtOiBJUGF5bWVudE9yZGVyKSA9PiBvcmRlckl0ZW0udmFyaWFudC5pZCA9PT0gcHJvZHVjdC52YXJpYW50LmlkKTtcclxuICAgaWYgKGluZGV4T2ZPcmRlckl0ZW0gIT09IC0xKSB7XHJcbiAgICAgLy86IHVwZGF0ZSBxdWFudGl0eVxyXG4gICAgIGNvbnN0IGN1cnJlbnRRdWFudGl0eSA9IGFjdGl2ZU9yZGVyW2luZGV4T2ZPcmRlckl0ZW1dLnF1YW50aXR5O1xyXG4gICAgIGlmIChjdXJyZW50UXVhbnRpdHkgKyB2YXJpYW50UXVhbnRpdHkgPD0gcHJvZHVjdC52YXJpYW50LnN0b2NrKSB7XHJcbiAgICAgICBhY3RpdmVPcmRlcltpbmRleE9mT3JkZXJJdGVtXS5xdWFudGl0eSA9IGN1cnJlbnRRdWFudGl0eSArIHZhcmlhbnRRdWFudGl0eTtcclxuICAgICB9XHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgYWN0aXZlT3JkZXIucHVzaCh7XHJcbiAgICAgICBwcm9kdWN0OiBwcm9kdWN0LnByb2R1Y3QsXHJcbiAgICAgICB2YXJpYW50OiBwcm9kdWN0LnZhcmlhbnQsXHJcbiAgICAgICBxdWFudGl0eTogdmFyaWFudFF1YW50aXR5LFxyXG4gICAgICAgb2ZmZXJzOiBwcm9kdWN0Lm9mZmVyc1xyXG4gICAgIH0pO1xyXG4gICB9XHJcbiAgICBzZXRPcmRlcihhY3RpdmVPcmRlcik7XHJcbiAgICAvL3NhdmVPcmRlcihhY3RpdmVPcmRlcilcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVQcm9kdWN0ID0gKGl0ZW1OdW1iZXIpID0+IHtcclxuICAgICAgYWxlcnQoXCJCT1JSQVJcIilcclxuICAgICAgY29uc3QgYWN0aXZlT3JkZXIgPSBbLi4ub3JkZXJdXHJcbiAgICAgIGFjdGl2ZU9yZGVyLnNwbGljZShpdGVtTnVtYmVyLCAxKVxyXG4gICAgICBzZXRPcmRlcihhY3RpdmVPcmRlcilcclxuICAgICAgLy9zYXZlT3JkZXIob3JkZXIpXHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcblxyXG4gIFxyXG5cclxuICBjb25zdCBhZGRPcmRlckl0ZW0gPSAoaXRlbTogSVBheW1lbnRPcmRlcikgPT4ge1xyXG4gIH07XHJcblxyXG4gIC8vOiB1c2UgdGhpcyBmdW5jdGlvbiB0byBhZGQgYSBuZXcgaXRlbSB0byB0aGUgb3JkZXIgaW4gbG9jYWwgc3RvcmFnZVxyXG4gIGNvbnN0IHNldE9yZGVySXRlbUluTFMgPSAoYWN0aXZlT3JkZXI6IEFycmF5PElQYXltZW50T3JkZXI+KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXJJdGVtcycsIEpTT04uc3RyaW5naWZ5KGFjdGl2ZU9yZGVyKSk7XHJcbiAgfTtcclxuXHJcbiAgLy86IHVzZSB0aGlzIGZ1bmN0aW9uIHRvIGdldCB0aGUgY3VycmVudCBvcmRlciBvYmplY3QgZnJvbSBsb2NhbCBzdG9yYWdlXHJcbiAgY29uc3QgZ2V0T3JkZXJJdGVtRnJvbUxTID0gKCk6IEFycmF5PElQYXltZW50T3JkZXI+ID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlckl0ZW1zJykpIHx8IFtdO1xyXG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoKF9lcnJvciBhcyBTeW50YXhFcnJvcikubWVzc2FnZSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH07Ki9cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxPcmRlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgb3JkZXIsIGNvdW50UHJvZHVjdHMsIGFkZFByb2R1Y3RUb0JhZywgcmVtb3ZlUHJvZHVjdCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9PcmRlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIiwiLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gb2YgdGhlIEFwb2xsbyBDbGllbnQgdG8gZW5hYmxlIHRoZSB1c2Ugb2YgR3JhcGhRTC5cclxuICovXHJcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQXBvbGxvQ2xpZW50LFxyXG4gIEh0dHBMaW5rLFxyXG4gIEluTWVtb3J5Q2FjaGUsXHJcbiAgTm9ybWFsaXplZENhY2hlT2JqZWN0XHJcbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgQVBJX0RPTUFJTiB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xyXG5cclxubGV0IGFwb2xsb0NsaWVudDogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD47XHJcblxyXG5jb25zdCBjcmVhdGVBcG9sbG9DbGllbnQgPSAoKTogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD4gPT4ge1xyXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIGxpbms6IG5ldyBIdHRwTGluayh7IHVyaTogYCR7QVBJX0RPTUFJTn0vZ3JhcGhxbGAgfSksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG4gIH0pO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBpbml0aWFsaXplQXBvbGxvQ2xpZW50ID0gKGluaXRpYWxTdGF0ZTogYW55ID0gbnVsbCk6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+ID0+IHtcclxuICBjb25zdCBfYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudCgpO1xyXG5cclxuICAvLzogaW5pdGlhbCBzdGF0ZSBvZiBOZXh0LmpzIGRhdGEgZmV0Y2hpbmcgbWV0aG9kcyBpcyBoeWRyYXRlZCBoZXJlXHJcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgLy86IGdldCBleGlzdGluZyBjYWNoZSwgbG9hZGVkIGR1cmluZyBjbGllbnQgc2lkZSBkYXRhIGZldGNoaW5nXHJcbiAgICBjb25zdCBleGlzdGluZ0NhY2hlID0gX2Fwb2xsb0NsaWVudC5leHRyYWN0KCk7XHJcblxyXG4gICAgLy86IHJlc3RvcmUgdGhlIGNhY2hlIHVzaW5nIHRoZSBkYXRhIHBhc3NlZCBmcm9tIFwiZ2V0U3RhdGljUHJvcHNcIiBvclxyXG4gICAgLy86IFwiZ2V0U2VydmVyU2lkZVByb3BzXCIgY29tYmluZWQgd2l0aCB0aGUgZXhpc3RpbmcgY2FjaGUgZGF0YVxyXG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKHsgLi4uZXhpc3RpbmdDYWNoZSwgLi4uaW5pdGlhbFN0YXRlIH0pO1xyXG4gIH1cclxuXHJcbiAgLy86IGZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfYXBvbGxvQ2xpZW50O1xyXG5cclxuICAvLzogY3JlYXRlIHRoZSBBcG9sbG8gQ2xpZW50IG9uY2UgaW4gdGhlIGNsaWVudFxyXG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50O1xyXG5cclxuICByZXR1cm4gX2Fwb2xsb0NsaWVudDtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogdXNlIHRoaXMgY3VzdG9tIGhvb2sgaW4geW91ciBjb21wb25lbnRzIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIG9mIHRoZSBBcG9sbG9cclxuLy86IENsaWVudFxyXG5jb25zdCB1c2VBcG9sbG9DbGllbnQgPSAoaW5pdGlhbFN0YXRlOiBhbnkpOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiA9PiB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gaW5pdGlhbGl6ZUFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUpLFxyXG4gICAgW2luaXRpYWxTdGF0ZV1cclxuICApO1xyXG5cclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgeyBpbml0aWFsaXplQXBvbGxvQ2xpZW50LCB1c2VBcG9sbG9DbGllbnQgfTtcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0RGVwYXJ0bWVudHMgfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtZGVwYXJ0bWVudHMnO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0QnlTbHVnIH0gZnJvbSBcIkAvYWN0aW9ucy9mZXRjaC1wcm9kdWN0c1wiO1xyXG5pbXBvcnQgQWRkVG9CYWdCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2J1dHRvbnMvQWRkVG9CYWdCdXR0b24nO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnQC9jb21wb25lbnRzL2Nhcm91c2Vscy9DYXJvdXNlbCc7XHJcbmltcG9ydCBRdWFudGl0eVNlbGVjdG9yIGZyb20gJ0AvY29tcG9uZW50cy9jb250cm9scy9RdWFudGl0eVNlbGVjdG9yJztcclxuaW1wb3J0IFZhcmlhbnRTZWxlY3RvciBmcm9tICdAL2NvbXBvbmVudHMvY29udHJvbHMvVmFyaWFudFNlbGVjdG9yJztcclxuaW1wb3J0IE9mZmVyc1NlbGVjdG9yIGZyb20gJ0AvY29tcG9uZW50cy9jb250cm9scy9PZmZlcnNTZWxlY3Rvcic7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvQ2xpZW50IH0gZnJvbSBcIkAvbGliL2Fwb2xsby1jbGllbnRcIjtcclxuaW1wb3J0IElWYXJpYW50IGZyb20gJ0AvbW9kZWxzL0lWYXJpYW50JztcclxuaW1wb3J0IElPZmZlciBmcm9tICdAL21vZGVscy9JT2ZmZXInO1xyXG5pbXBvcnQgZm9ybWF0UHJpY2UgZnJvbSAnQC91dGlscy9mb3JtYXQtcHJpY2UnO1xyXG5cclxuY29uc3QgY2xhc3NlcyA9IHtcclxuICBjb250YWluZXI6IGBcclxuICAgIGgtc2NyZWVuXHJcbiAgICBtYXgtdy1zY3JlZW5cclxuICAgIHJlbGF0aXZlXHJcbiAgYCxcclxuXHJcbiAgY2Fyb3VzZWw6IGBcclxuICAgIGJnLWJhc2VcclxuICAgIGgtNC82XHJcbiAgICBtZDphYnNvbHV0ZVxyXG4gICAgbWQ6aC1mdWxsXHJcbiAgICBtZDpyaWdodC0xMlxyXG4gICAgbWQ6cm91bmRlZC1sZ1xyXG4gICAgbWQ6dy0xLzJcclxuICAgIG92ZXJmbG93LWhpZGRlblxyXG4gIGAsXHJcblxyXG4gIGRldGFpbHM6IGBcclxuICAgIGgtMTEvMTJcclxuICAgIG92ZXJmbG93LXktc2Nyb2xsXHJcbiAgICBwYi0yMFxyXG4gICAgdy1mdWxsXHJcbiAgYCxcclxuXHJcbiAgaW5mb3JtYXRpb246IHtcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBiZy1ic2VcclxuICAgICAgbXQtNlxyXG4gICAgICBtZDp3LTIvNVxyXG4gICAgICBtZDphYnNvbHV0ZVxyXG4gICAgICBtZDptLTEyXHJcbiAgICAgIG1kOnAtMTJcclxuICAgICAgbWQ6YmctYmFzZVxyXG4gICAgICBtZDpzaGFkb3dcclxuICAgICAgbWQ6cm91bmRlZC0yeGxcclxuICAgICAgbWQ6ei0xMFxyXG4gICAgICBtZDpvdmVyZmxvdy15LXNjcm9sbFxyXG4gICAgICBwLTdcclxuICAgICAgcm91bmRlZC10LTN4bFxyXG4gICAgICBtYXgtdy1mdWxsXHJcbiAgICBgLFxyXG4gICAgc2VjdGlvbjogYFxyXG4gICAgICBtYi03XHJcbiAgICAgIHctZnVsbFxyXG4gICAgYCxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICB0aXRsZTogYFxyXG4gICAgICAgIGZvbnQtYm9sZFxyXG4gICAgICAgIGZvbnQtZGlzcGxheVxyXG4gICAgICAgIG1iLTJcclxuICAgICAgICB0ZXh0LTJ4bFxyXG4gICAgICBgXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IGBcclxuICAgICAgZm9udC1ib2xkXHJcbiAgICAgIG1iLTJcclxuICAgIGBcclxuICB9LFxyXG5cclxuICBhZGRCdXR0b246IGBcclxuICAgIGZsZXhcclxuICAgIGZsZXgtcm93XHJcbiAgICBqdXN0aWZ5LWVuZFxyXG4gICAgbXQtMTJcclxuICBgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0RGV0YWlsc1BhZ2UoeyBkZXBhcnRtZW50cywgcHJvZHVjdCwgcmVmZXJlciB9KSB7XHJcbiAgY29uc3QgeyB1c2VTZXNzaW9uIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCBbc2VsZWN0ZWRWYXJpYW50LCBzZXRTZWxlY3RlZFZhcmlhbnRdID0gdXNlU3RhdGU8SVZhcmlhbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE9mZmVycywgc2V0U2VsZWN0ZWRPZmZlcnNdID0gdXNlU3RhdGU8SU9mZmVyW10+KFtdKTtcclxuICBjb25zdCBbdmlld3BvcnRXaWR0aCwgc2V0Vmlld3BvcnRXaWR0aF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICB1c2VTZXNzaW9uKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRWaWV3cG9ydFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJvdXNlbH0+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwgbWVkaWE9e3Byb2R1Y3QubWVkaWF9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9ybWF0aW9uLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvcm1hdGlvbi5zZWN0aW9ufT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9ybWF0aW9uLmhlYWRlci50aXRsZX0+e3Byb2R1Y3QubmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTZcIj57Zm9ybWF0UHJpY2UoJ01YTicsIHByb2R1Y3QucHJpY2UpfTwvcD5cclxuICAgICAgICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvcm1hdGlvbi5zZWN0aW9ufT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb3JtYXRpb24udGl0bGV9PlZhcmlhbnRlPC9wPlxyXG4gICAgICAgICAgICAgIDxWYXJpYW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIHN0YXRlPXtbc2VsZWN0ZWRWYXJpYW50LCBzZXRTZWxlY3RlZFZhcmlhbnRdfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3Byb2R1Y3QudmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9kdWN0Lm9mZmVycy5sZW5ndGggIT09IDAgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb3JtYXRpb24uc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9ybWF0aW9uLnRpdGxlfT5PZmVydGFzPC9wPlxyXG4gICAgICAgICAgICAgIDxPZmZlcnNTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgb2ZmZXJzPXtwcm9kdWN0Lm9mZmVyc31cclxuICAgICAgICAgICAgICAgIHN0YXRlPXtbc2VsZWN0ZWRPZmZlcnMsIHNldFNlbGVjdGVkT2ZmZXJzXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVmFyaWFudCAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvcm1hdGlvbi5zZWN0aW9ufT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb3JtYXRpb24udGl0bGV9PkNhbnRpZGFkPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxRdWFudGl0eVNlbGVjdG9yIHN0b2NrPXtzZWxlY3RlZFZhcmlhbnQuc3RvY2t9IC8+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwibWwtNCB0ZXh0LXNtIHRleHQtbmV1dHJhbFwiPlxyXG4gICAgICAgICAgICAgICAgICDCoXtzZWxlY3RlZFZhcmlhbnQuc3RvY2t9IGRpc3BvbmlibGVzIVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAocHJvZHVjdCAmJiBzZWxlY3RlZFZhcmlhbnQpICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZEJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgPEFkZFRvQmFnQnV0dG9uIG9yZGVyPXt7XHJcbiAgICAgICAgICAgICAgICBvZmZlcnM6IHNlbGVjdGVkT2ZmZXJzLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IHNlbGVjdGVkVmFyaWFudFxyXG4gICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2ID5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcywgcmVxIH0pID0+IHtcclxuICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvQ2xpZW50KCk7XHJcbiAgY29uc3QgZGVwYXJ0bWVudHMgPSBhd2FpdCBnZXREZXBhcnRtZW50cyhhcG9sbG9DbGllbnQpO1xyXG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBnZXRQcm9kdWN0QnlTbHVnKGFwb2xsb0NsaWVudCwgcGFyYW1zLnNsdWcpO1xyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBkZXBhcnRtZW50cywgcHJvZHVjdCwgcmVmZXJlcjogcmVxLmhlYWRlcnMucmVmZXJlciB8fCAnLycgfSB9XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZm9ybWF0IHByaWNlcyB0byBtYWtlIHRoZW0gbG9vayBsaWtlOlxyXG4gKiBVUyAzMDAuOTAsIE1YIDE1ODkuOTAgb3IgR0IgMTIuMDBcclxuICpcclxuICogQ3VycmVuY3kgY29kZXMgKElTTyA0MjE3IGN1cnJlbmN5IGNvZGVzKSBhcmUgcGFzc2VkIGFzIGFyZ3VtZW50cyBkZXBlbmRpbmcgb25cclxuICogaTE4biBnbG9iYWwgY29udGV4dC5cclxuICovXHJcbmNvbnN0IGZvcm1hdFByaWNlOiAoY3VycmVuY3lDb2RlOiBzdHJpbmcsIHByaWNlOiBudW1iZXIgfCBzdHJpbmcpID0+IHN0cmluZyA9IChjdXJyZW5jeUNvZGUsIHByaWNlKSA9PiB7XHJcbiAgLy86IGZvcmNlIHR3byBkZWNpbWFsc1xyXG4gIGNvbnN0IHByaWNlV2l0aERlY2ltYWxzID0gcGFyc2VGbG9hdChTdHJpbmcocHJpY2UpKS50b0ZpeGVkKDIpO1xyXG5cclxuICByZXR1cm4gYCR7Y3VycmVuY3lDb2RlLnRvVXBwZXJDYXNlKCl9ICR7cHJpY2VXaXRoRGVjaW1hbHN9YDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFByaWNlO1xyXG4iLCIvKipcclxuICogVGhpcyB1dGlsaXR5IGZ1bmN0aW9uIHJldHVybnMgYSBtZWRpYSBVUkwgYmFzZWQgb24gb25lIG9mIHRocmVlIGNhc2VzOlxyXG4gKlxyXG4gKiAgMS4gVGhlcmUncyBubyBtZWRpYSBzb3VyY2UgdG8gcmV0dXJuICh3aGVuIG5vIG1lZGlhIGlzIGFkZGVkKS5cclxuICogIDIuIFRoZSBtZWRpYSBpcyBzZXJ2ZWQgZnJvbSB0aGUgc2FtZSBzZXJ2ZXIgdGhhdCBydW5zIHRoZSBhcHAgKGxvY2FsKS5cclxuICogIDMuIFRoZSBtZWRpYSBpcyBzZXJ2ZWQgYnkgYW4gdXBsb2FkIHByb3ZpZGVyIChyZW1vdGUgc2VydmVyKS5cclxuICovXHJcbmltcG9ydCB7IEFQSV9ET01BSU4gfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuaW1wb3J0IG1lZGlhTm90Rm91bmRJbWFnZSBmcm9tIFwiQC9hc3NldHMvaW1hZ2VzL21lZGlhX25vdF9mb3VuZC5zdmdcIjtcclxuXHJcbmludGVyZmFjZSBNZWRpYSB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TWVkaWFTb3VyY2U6IChtZWRpYTogTWVkaWEpID0+IHN0cmluZyA9IChtZWRpYSkgPT4ge1xyXG4gIC8vOiBDYXNlIDEuXHJcbiAgaWYgKCFtZWRpYSkge1xyXG4gICAgcmV0dXJuIG1lZGlhTm90Rm91bmRJbWFnZTtcclxuICB9XHJcblxyXG4gIC8vOiBDYXNlIDIuXHJcbiAgaWYgKG1lZGlhLnVybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xyXG4gICAgcmV0dXJuIEFQSV9ET01BSU4gKyBtZWRpYS51cmw7XHJcbiAgfVxyXG5cclxuICAvLzogQ2FzZSAzLlxyXG4gIHJldHVybiBtZWRpYS51cmw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNZWRpYVNvdXJjZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1mZWF0aGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9