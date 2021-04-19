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
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_5__);

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
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_5__["useSnackbar"])();
  const {
    addProductToBag
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_4__["default"]);

  const handlerClick = event => {
    event.preventDefault();
    const variantQuantity = parseInt(document.getElementById('quantity').value);
    addProductToBag(variantQuantity, order);
    enqueueSnackbar("Articulo agregado");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    onClick: e => handlerClick(e),
    className: classes.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "mr-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_2__["ShoppingBag"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 30
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "A\xF1adir a la bolsa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\dropdowns\\Dropdown.tsx";




Dropdown.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
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
  const arrowIcon = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  const animate = () => {
    arrowIcon.current.classList.toggle('animate-flipHorizontalBottom');
    onClick();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      onClick: animate,
      className: classes.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        variant: "h6",
        color: "textPrimary",
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        ref: arrowIcon,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_4__["ChevronDown"], {
          size: "18"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 31
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/lib/apollo-client */ "./lib/apollo-client.ts");
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/format-price */ "./utils/format-price.ts");

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
          lineNumber: 95,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
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
            lineNumber: 100,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mb-6",
            children: Object(_utils_format_price__WEBPACK_IMPORTED_MODULE_10__["default"])('MXN', product.price)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: product.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this), product.variants.length !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.information.section,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.information.title,
            children: "Variante"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_controls_VariantSelector__WEBPACK_IMPORTED_MODULE_7__["default"], {
            state: [selectedVariant, setSelectedVariant],
            variants: product.variants
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, this), product.offers.length !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.information.section,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.information.title,
            children: "Ofertas"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_controls_OffersSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
            offers: product.offers,
            state: [selectedOffers, setSelectedOffers]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }, this), selectedVariant && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.information.section,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.information.title,
            children: "Cantidad"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-row items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_controls_QuantitySelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
              stock: selectedVariant.stock
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "ml-4 text-sm text-neutral",
              children: ["\xA1", selectedVariant.stock, " disponibles!"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
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
            lineNumber: 143,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, this);
}
;
const getServerSideProps = async ({
  params,
  req
}) => {
  const apolloClient = Object(_lib_apollo_client__WEBPACK_IMPORTED_MODULE_9__["initializeApolloClient"])();
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

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "notistack":
/*!****************************!*\
  !*** external "notistack" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("notistack");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9mZXRjaC1kZXBhcnRtZW50cy50cyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2ZldGNoLXByb2R1Y3RzLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvbWVkaWFfbm90X2ZvdW5kLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvQWRkVG9CYWdCdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2Fyb3VzZWxzL0Nhcm91c2VsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRyb2xzL09mZmVyc1NlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRyb2xzL1F1YW50aXR5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250cm9scy9WYXJpYW50U2VsZWN0b3IudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd25zL0Ryb3Bkb3duLnRzeCIsIndlYnBhY2s6Ly8vLi9jb25maWcvZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L09yZGVyQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL2Fwb2xsby1jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZHVjdHMvW3NsdWddLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9mb3JtYXQtcHJpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0LW1lZGlhLXNvdXJjZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm90aXN0YWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZmVhdGhlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImdldERlcGFydG1lbnRzIiwiYXBvbGxvQ2xpZW50IiwiZXJyb3IiLCJkYXRhIiwibG9hZGluZyIsInF1ZXJ5IiwiZ3FsIiwiZGVwYXJ0bWVudHMiLCJnZXRQcm9kdWN0c1BhZ2UiLCJmaWx0ZXIiLCJmb3JtYXRGaWx0ZXJzIiwiZm9ybWF0dGVkRmlsdGVycyIsImRlcGFydG1lbnQiLCJjYXRlZ29yeSIsInN1YmNhdGVnb3J5Iiwic3RhcnQiLCJsaW1pdCIsInByb2R1Y3RzIiwicHJvZHVjdCIsImdldFByb2R1Y3RCeVNsdWciLCJzbHVnIiwiQWRkVG9CYWdCdXR0b24iLCJwcm9wVHlwZXMiLCJvcmRlciIsIlByb3BUeXBlcyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsImNsYXNzZXMiLCJjb250YWluZXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJ1c2VTbmFja2JhciIsImFkZFByb2R1Y3RUb0JhZyIsInVzZUNvbnRleHQiLCJPcmRlckNvbnRleHQiLCJoYW5kbGVyQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFyaWFudFF1YW50aXR5IiwicGFyc2VJbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJlIiwiQ2Fyb3VzZWwiLCJtZWRpYSIsImFycmF5IiwiY29udHJvbHMiLCJidXR0b24iLCJpbWFnZSIsInZpZGVvIiwiZmlsZSIsInNldEZpbGUiLCJ1c2VTdGF0ZSIsIm1lZGlhRWxlbWVudCIsInVzZVJlZiIsInNob3dQcmV2aW91cyIsImZpbGVJbmRleCIsImluZGV4T2YiLCJsZW5ndGgiLCJzaG93TmV4dCIsIm1pbWUiLCJpbmNsdWRlcyIsImdldE1lZGlhU291cmNlIiwiYWx0ZXJuYXRpdmVUZXh0IiwiaWQiLCJPZmZlcnNTZWxlY3RvciIsIm9mZmVycyIsInN0YXRlIiwic2VsZWN0ZWRPZmZlcnMiLCJzZXRTZWxlY3RlZE9mZmVycyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiYXBwbHlPZmZlciIsIm9mZmVySWQiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYXBwbGllZCIsInNlbGVjdGVkT2ZmZXIiLCJjb25jYXQiLCJtYXAiLCJvZmZlciIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIlF1YW50aXR5U2VsZWN0b3IiLCJzdG9jayIsInF1YW50aXR5Iiwic2V0UXVhbnRpdHkiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnQiLCJhcHBlYXJhbmNlIiwibnVtYmVyIiwiVmFyaWFudFNlbGVjdG9yIiwidmFyaWFudHMiLCJkZWZhdWx0SXRlbSIsIml0ZW0iLCJjb2xvclN3YXRjaCIsInNlbGVjdGVkVmFyaWFudCIsInNldFNlbGVjdGVkVmFyaWFudCIsImRyb3Bkb3duSWNvbiIsImFuaW1hdGUiLCJjdXJyZW50IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwiY29sb3IiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJzaXplIiwicGF0dGVybiIsInZhcmlhbnQiLCJEcm9wZG93biIsImxhYmVsIiwic3RyaW5nIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwiYXJyb3dJY29uIiwiQVBJX0RPTUFJTiIsInByb2Nlc3MiLCJQQUdFX0xJTUlUIiwiQVVUSF9GQUNFQk9PS19DQUxMQkFDSyIsIkFVVEhfRkFDRUJPT0tfVVJMIiwiQVVUSF9HT09HTEVfQ0FMTEJBQ0siLCJBVVRIX0dPT0dMRV9VUkwiLCJTVFJJUEVfUFVCTElTSEVEX0tFWSIsImNyZWF0ZUNvbnRleHQiLCJPcmRlclByb3ZpZGVyIiwic2V0T3JkZXIiLCJnZXRPcmRlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VFZmZlY3QiLCJvIiwic2F2ZU9yZGVyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFjdGl2ZU9yZGVyIiwiaW5kZXhPZk9yZGVySXRlbSIsImZpbmRJbmRleCIsIm9yZGVySXRlbSIsImN1cnJlbnRRdWFudGl0eSIsInB1c2giLCJyZW1vdmVQcm9kdWN0IiwiaXRlbU51bWJlciIsInNwbGljZSIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImluaXRpYWxpemVBcG9sbG9DbGllbnQiLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJyZXN0b3JlIiwidXNlQXBvbGxvQ2xpZW50Iiwic3RvcmUiLCJ1c2VNZW1vIiwiY2Fyb3VzZWwiLCJkZXRhaWxzIiwiaW5mb3JtYXRpb24iLCJzZWN0aW9uIiwiaGVhZGVyIiwidGl0bGUiLCJhZGRCdXR0b24iLCJQcm9kdWN0RGV0YWlsc1BhZ2UiLCJyZWZlcmVyIiwidmlld3BvcnRXaWR0aCIsInNldFZpZXdwb3J0V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZm9ybWF0UHJpY2UiLCJwcmljZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsInJlcSIsInByb3BzIiwiaGVhZGVycyIsImN1cnJlbmN5Q29kZSIsInByaWNlV2l0aERlY2ltYWxzIiwicGFyc2VGbG9hdCIsIlN0cmluZyIsInRvRml4ZWQiLCJ0b1VwcGVyQ2FzZSIsIm1lZGlhTm90Rm91bmRJbWFnZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3RzL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvZHVjdHMvW3NsdWddLnRzeFwiKTtcbiIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgZ3FsLCBOb3JtYWxpemVkQ2FjaGVPYmplY3QgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5pbXBvcnQgSURlcGFydG1lbnQgZnJvbSAnQC9tb2RlbHMvSURlcGFydG1lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERlcGFydG1lbnRzID0gYXN5bmMgKFxyXG4gIGFwb2xsb0NsaWVudDogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD5cclxuKTogUHJvbWlzZTxJRGVwYXJ0bWVudFtdPiA9PiB7XHJcbiAgbGV0IHsgZXJyb3IsIGRhdGEsIGxvYWRpbmcgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICBxdWVyeTogZ3FsYFxyXG4gICAgICBxdWVyeSBnZXREZXBhcnRtZW50cyB7XHJcbiAgICAgICAgZGVwYXJ0bWVudHMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHNsdWdcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgc3ViY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgfSk7XHJcbiAgXHJcbiAgcmV0dXJuIGVycm9yID8/IGRhdGEuZGVwYXJ0bWVudHM7XHJcbn07XHJcbiIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgZ3FsLCBOb3JtYWxpemVkQ2FjaGVPYmplY3QgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5pbXBvcnQgSVByb2R1Y3QgZnJvbSAnQC9tb2RlbHMvSVByb2R1Y3QnO1xyXG5cclxuaW50ZXJmYWNlIElQYWdlRmlsdGVyIHtcclxuICBzdGFydDogbnVtYmVyO1xyXG4gIGxpbWl0OiBudW1iZXI7XHJcbiAgcXVlcnk/OiBhbnlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c1BhZ2UgPSBhc3luYyAoXHJcbiAgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PixcclxuICBmaWx0ZXI6IElQYWdlRmlsdGVyXHJcbik6IFByb21pc2U8SVByb2R1Y3RbXT4gPT4ge1xyXG4gIGNvbnN0IGZvcm1hdEZpbHRlcnMgPSAoKSA9PiB7XHJcbiAgICBsZXQgZm9ybWF0dGVkRmlsdGVycyA9ICcnO1xyXG5cclxuICAgIGlmIChmaWx0ZXIucXVlcnkpIHtcclxuICAgICAgaWYgKGZpbHRlci5xdWVyeS5kZXBhcnRtZW50KSB7XHJcbiAgICAgICAgZm9ybWF0dGVkRmlsdGVycyArPSBgXHJcbiAgICAgICAgICBkZXBhcnRtZW50czogeyBzbHVnOiBcIiR7ZmlsdGVyLnF1ZXJ5LmRlcGFydG1lbnR9XCIgfVxyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaWx0ZXIucXVlcnkuY2F0ZWdvcnkpIHtcclxuICAgICAgICBmb3JtYXR0ZWRGaWx0ZXJzICs9IGBcclxuICAgICAgICAgIGNhdGVnb3JpZXM6IHsgc2x1ZzogXCIke2ZpbHRlci5xdWVyeS5jYXRlZ29yeX1cIiB9XHJcbiAgICAgICAgYDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZpbHRlci5xdWVyeS5zdWJjYXRlZ29yeSkge1xyXG4gICAgICAgIGZvcm1hdHRlZEZpbHRlcnMgKz0gYFxyXG4gICAgICAgICAgc3ViY2F0ZWdvcmllczogeyBzbHVnOiBcIiR7ZmlsdGVyLnF1ZXJ5LnN1YmNhdGVnb3J5fVwiIH1cclxuICAgICAgICBgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZvcm1hdHRlZEZpbHRlcnM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBlcnJvciwgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBncWxgXHJcbiAgICAgIHF1ZXJ5IGdldFByb2R1Y3RzUGFnZShcclxuICAgICAgICAkd2hlcmU6IEpTT04hID0ge1xyXG4gICAgICAgICAgYWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAke2Zvcm1hdEZpbHRlcnMoKX1cclxuICAgICAgICB9XHJcbiAgICAgICkge1xyXG4gICAgICAgIHByb2R1Y3RzKHN0YXJ0OiAke2ZpbHRlci5zdGFydH0sIGxpbWl0OiAke2ZpbHRlci5saW1pdH0sIHdoZXJlOiAkd2hlcmUpIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgb2ZmZXJzKHdoZXJlOiB7IGFjdGl2ZTogdHJ1ZSB9KSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb3ZlciB7XHJcbiAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxyXG4gICAgICAgICAgICB1cmxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGBcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGVycm9yID8/IGRhdGEucHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0OiBJUHJvZHVjdCkgPT4gcHJvZHVjdCAhPT0gbnVsbCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdEJ5U2x1ZyA9IGFzeW5jIChcclxuICBhcG9sbG9DbGllbnQ6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+LFxyXG4gIHNsdWc6IHN0cmluZ1xyXG4pOiBQcm9taXNlPElQcm9kdWN0PiA9PiB7XHJcbiAgY29uc3QgeyBlcnJvciwgZGF0YSwgbG9hZGluZyB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBncWxgXHJcbiAgICAgIHF1ZXJ5IGdldFByb2R1Y3QoJHdoZXJlOiBKU09OISA9IHsgYWN0aXZlOiB0cnVlLCBzbHVnOiBcIiR7c2x1Z31cIiB9KSB7XHJcbiAgICAgICAgcHJvZHVjdHMod2hlcmU6ICR3aGVyZSkge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICBtZWRpYSB7XHJcbiAgICAgICAgICAgIG1pbWVcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtZXRhX2Rlc2NyaXB0aW9uXHJcbiAgICAgICAgICBtZXRhX3RpdGxlXHJcbiAgICAgICAgICBvZmZlcnMod2hlcmU6IHsgYWN0aXZlOiB0cnVlIH0pIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBkaXNjb3VudFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHJpY2VcclxuICAgICAgICAgIHZhcmlhbnRzKHdoZXJlOiB7YWN0aXZlOiB0cnVlfSkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICBwYXR0ZXJuXHJcbiAgICAgICAgICAgIHNpemVcclxuICAgICAgICAgICAgc3RvY2tcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGBcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGVycm9yID8/IGRhdGEucHJvZHVjdHNbMF07XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCcFpEMGlZVE16T0dVM05UVXRaalpqTnkwME5XRXdMVGhsWXpjdE1HVTRZVGt5WlRNelkyWTJJaUJrWVhSaExXNWhiV1U5SWt4aGVXVnlJREVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZDJsa2RHZzlJamd4Tmk0eU1qSXpOeUlnYUdWcFoyaDBQU0kzTURBdU5UazNJaUIyYVdWM1FtOTRQU0l3SURBZ09ERTJMakl5TWpNM0lEY3dNQzQxT1RjaVBqeHdZWFJvSUdROUlrMDNOekl1TURJd09TdzNPVGN1T0RrMU1UaGhNelF1T0RFME1qWXNNelF1T0RFME1qWXNNQ3d3TERFdE1UWXVOelExTmpFdE5DNHpNRGcxT1V3eU56Z3VPRFkzTERVek15NHdOREEyT1dFek5TNHdNemswTWl3ek5TNHdNemswTWl3d0xEQXNNUzB4TXk0NU1UTTNMVFEzTGpVd01UUTNURFEyTmk0d01EQTJNeXd4TVRjdU9USTBZVE0wTGprNU9UUTFMRE0wTGprNU9UUTFMREFzTUN3eExEUTNMalV3TVRjeExURXpMamt4TXpVNGJEUTNOaTQwTURneUxESTJNQzQxTkRVNVlUTTFMakF6T1RFekxETTFMakF6T1RFekxEQXNNQ3d4TERFekxqa3hNemd5TERRM0xqVXdNVFEzVERnd01pNDNOemNzTnpjNUxqWTNNMkV6TkM0M056RTBMRE0wTGpjM01UUXNNQ3d3TERFdE1qQXVPRFk1TVRRc01UWXVOemswT1RKQk16VXVNVFEzTERNMUxqRTBOeXd3TERBc01TdzNOekl1TURJd09TdzNPVGN1T0RrMU1UaGFiUzB4TXk0NE5qWTNMVGt1TlRjeU1qZGhNamt1TURBd056a3NNamt1TURBd056a3NNQ3d3TERBc016a3VNelU0TmpRdE1URXVOVEk0T0V3NU9UZ3VOVFl3TWl3ME1Ea3VNVGM0T0RkQk1qa3VNRE16TkRVc01qa3VNRE16TkRVc01Dd3dMREFzT1RnM0xqQXpNVFkwTERNMk9TNDRNa3cxTVRBdU5qSXpORFFzTVRBNUxqSTNOREE1WVRJNUxqQXdNRGd4TERJNUxqQXdNRGd4TERBc01Dd3dMVE01TGpNMU9EWTFMREV4TGpVeU9EaE1NamN3TGpJeE56UXpMRFE0T0M0ME1UZ3hNMEV5T1M0d016TXpOU3d5T1M0d016TXpOU3d3TERBc01Dd3lPREV1TnpRMkxEVXlOeTQzTnpkYUlpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TVRreExqZzRPRGd5SUMwNU9TNDNNREUxS1NJZ1ptbHNiRDBpSTJZeVpqSm1NaUl2UGp4d1lYUm9JR1E5SWswM09ERXVPRFEwTVRRc05qWTVMak15TkRnM1lUTXlMamN3TlRZM0xETXlMamN3TlRZM0xEQXNNQ3d4TFRFMUxqWTRNall5TFRRdU1ERTJOa3d6T0RBdU9UazVNVGNzTkRVMExqWTJORGN4WVRNeUxqUTJPVFEzTERNeUxqUTJPVFEzTERBc01Dd3hMVEV5TGpreE9Ua3lMVFEwTGpFd09EUk1ORGc0TGpFMU1Td3hPVEV1TURBMVlUTXlMalE1TmprekxETXlMalE1TmprekxEQXNNQ3d4TERRMExqRXdPRFkxTFRFeUxqa3hPVGt5VERreE55NDBNakl5Tml3ek9EZ3VOekk0TmpoaE16SXVORGszTlRnc016SXVORGszTlRnc01Dd3dMREVzTVRJdU9URTVPVE1zTkRRdU1UQTRNemxzTFM0ME16ZzNNeTB1TWpNNU56UXVORE00TnpNdU1qTTVOelJNT0RFd0xqSTNNRFF4TERZMU1pNHpPRGd6TkVFek1pNHpOalF6TERNeUxqTTJORE1zTUN3d0xERXNOemd4TGpnME5ERTBMRFkyT1M0ek1qUTROMW9pSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtDMHhPVEV1T0RnNE9ESWdMVGs1TGpjd01UVXBJaUJtYVd4c1BTSWpaakptTW1ZeUlpOCtQSEJoZEdnZ1pEMGlUVGMyT1M0NE9EZzRNaXczT1RjdU56azROV2d0TlRRellUTXlMalV6TmpreUxETXlMalV6TmpreUxEQXNNQ3d4TFRNeUxqVXRNekl1TlhZdE5ERTVZVE15TGpVek5qa3lMRE15TGpVek5qa3lMREFzTUN3eExETXlMalV0TXpJdU5XZzFORE5oTXpJdU5UTTJPRFVzTXpJdU5UTTJPRFVzTUN3d0xERXNNekl1TlN3ek1pNDFkalF4T1VFek1pNDFNelk0TlN3ek1pNDFNelk0TlN3d0xEQXNNU3czTmprdU9EZzRPRElzTnprM0xqYzVPRFZhSWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3RNVGt4TGpnNE9EZ3lJQzA1T1M0M01ERTFLU0lnWm1sc2JEMGlJMlptWmlJdlBqeHdZWFJvSUdROUlrMDNOamt1T0RnNE9ESXNPREF3TGpJNU9EVm9MVFUwTTJFek5TNHdNemswTnl3ek5TNHdNemswTnl3d0xEQXNNUzB6TlMwek5YWXROREU1WVRNMUxqQXpPVFEzTERNMUxqQXpPVFEzTERBc01Dd3hMRE0xTFRNMWFEVTBNMkV6TlM0d016azBOeXd6TlM0d016azBOeXd3TERBc01Td3pOU3d6TlhZME1UbEJNelV1TURNNU5EY3NNelV1TURNNU5EY3NNQ3d3TERFc056WTVMamc0T0RneUxEZ3dNQzR5T1RnMVdtMHROVFF6TFRRNE0yRXlPUzR3TXpJM05Td3lPUzR3TXpJM05Td3dMREFzTUMweU9Td3lPWFkwTVRsaE1qa3VNRE15TnpVc01qa3VNRE15TnpVc01Dd3dMREFzTWprc01qbG9OVFF6WVRJNUxqQXpNamMyTERJNUxqQXpNamMyTERBc01Dd3dMREk1TFRJNWRpMDBNVGxoTWprdU1ETXlOellzTWprdU1ETXlOellzTUN3d0xEQXRNamt0TWpsYUlpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TVRreExqZzRPRGd5SUMwNU9TNDNNREUxS1NJZ1ptbHNiRDBpSTJVMlpUWmxOaUl2UGp4d1lYUm9JR1E5SWswMU9ESXVPRGt4TlRZc05EVXhMalU0Tm1FME1DNDNOak0xT0N3ME1DNDNOak0xT0N3d0xEQXNNQzB6TWk0MU5URXhOaXd4Tmk0eE9EVTVNeXd5Tmk0NE16azNOaXd5Tmk0NE16azNOaXd3TERBc01DMHpOeTQwTkRreE1pd3lOQzQyTkRjMU4wZzJNak11TnpJMU1EVkJOREF1T0RNek5ESXNOREF1T0RNek5ESXNNQ3d3TERBc05UZ3lMamc1TVRVMkxEUTFNUzQxT0RaYUlpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TVRreExqZzRPRGd5SUMwNU9TNDNNREUxS1NJZ1ptbHNiRDBpSTJVMlpUWmxOaUl2UGp4amFYSmpiR1VnWTNnOUlqRTBPQzR4T1RZMk9TSWdZM2s5SWpRME5TNDVOakF6TmlJZ2NqMGlOalV1TnpVM01qY2lJR1pwYkd3OUlpTmhNekU1TldJaUx6NDhjR0YwYUNCa1BTSk5OekkxTGpJME9EWTRMRFk0TVM0eE56ZzFNV0V6TVM0NE56Z3hNU3d6TVM0NE56Z3hNU3d3TERBc01TMDNMak0xT1RnMkxqZzFhQzAwTXpsaE16RXVPRGMwT1RJc016RXVPRGMwT1RJc01Dd3dMREV0TVRVdU5EWXRNeTQ1TjJ3eExqRTJPVGt5TFRFdU5qZ3NORGd1T1RndE56QXVOVE1zTnpJdU5UZ3dNRGd0TVRBMExqUTVMREV1TURZdE1TNDFNeXd4TVM0ME1UazVNeTB4Tmk0ME5HRTRMak16TmprekxEZ3VNek0yT1RNc01Dd3dMREVzTVRNdU56QXdNVGtzTUd3ek55NDVNems1TkN3MU5DNDJNWFl1TURGc01qSXVNekU1T0RNc016SXVNVFFzTlRNdU1qZ3dNamNzTnpZdU55dzRNQzQ0TURrMU55MHhNVFV1TXpWaE9DNHpORGM0TWl3NExqTTBOemd5TERBc01Dd3hMREV6TGpZNE1ERTRMREJzTlRFdU9ETTVPRFFzTnpNdU9Ua3NNaTQ1T0N3MExqSTFXaUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xURTVNUzQ0T0RnNE1pQXRPVGt1TnpBeE5Ta2lJR1pwYkd3OUlpTXhZekprTTJRaUx6NDhjR0YwYUNCa1BTSk5ORGsxTGpZeE9EUTRMRFV4T1M0M05qZ3dOVUUxTUM0eU9USTNNU3cxTUM0eU9USTNNU3d3TERBc01DdzBOVFV1TkRVNExEVXpPUzQzTXpjM0xETXpMakV4TkN3ek15NHhNVFFzTUN3d0xEQXNOREE1TGpJMU5EVXNOVGN3TGpFME4yZ3hNell1TnpRelFUVXdMak0zT0Rrc05UQXVNemM0T1N3d0xEQXNNQ3cwT1RVdU5qRTRORGdzTlRFNUxqYzJPREExV2lJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9MVEU1TVM0NE9EZzRNaUF0T1RrdU56QXhOU2tpSUdacGJHdzlJaU5qWTJNaUx6NDhjR0YwYUNCa1BTSk5OekUzTGpnNE9EZ3lMRFk0TXk0d01qZzBPR2d0TkRNNVlUTXlMamszTURBM0xETXlMamszTURBM0xEQXNNQ3d4TFRNekxUTXpWak01T1M0M09EZzNNMkV6TXk0d016Y3pOQ3d6TXk0d016Y3pOQ3d3TERBc01Td3pNeTB6TTJnME16bGhNek11TURNM016UXNNek11TURNM016UXNNQ3d3TERFc016TXNNek5XTmpVd0xqQXlPRFE0WVRNeUxqazJNakV4TERNeUxqazJNakV4TERBc01Dd3hMVE16TERNeldtMHRORE01TFRNeE5DNHlNemszTldFek1TNHdNelV5TERNeExqQXpOVElzTUN3d0xEQXRNekVzTXpGV05qVXdMakF5T0RRNFlUTXdMamszTURjM0xETXdMamszTURjM0xEQXNNQ3d3TERNeExETXhhRFF6T1dFek1DNDVOak0zTERNd0xqazJNemNzTUN3d0xEQXNNekV0TXpGV016azVMamM0T0RjellUTXhMakF6TlRJeExETXhMakF6TlRJeExEQXNNQ3d3TFRNeExUTXhXaUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xURTVNUzQ0T0RnNE1pQXRPVGt1TnpBeE5Ta2lJR1pwYkd3OUlpTXhZekprTTJRaUx6NDhMM04yWno0TkNnPT1cIiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFNob3BwaW5nQmFnIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcbmltcG9ydCBJUGF5bWVudE9yZGVyIGZyb20gJ0AvbW9kZWxzL0lQYXltZW50T3JkZXInO1xyXG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgT3JkZXJDb250ZXh0IGZyb20gJ0AvY29udGV4dC9PcmRlckNvbnRleHQnO1xyXG5pbXBvcnQge3VzZVNuYWNrYmFyfSBmcm9tICdub3Rpc3RhY2snXHJcblxyXG5BZGRUb0JhZ0J1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgb3JkZXI6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuXHJcbkFkZFRvQmFnQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBvcmRlcjogbnVsbFxyXG59O1xyXG5cclxuY29uc3QgY2xhc3NlcyA9IHtcclxuICBjb250YWluZXI6IGBcclxuICAgIGJnLWFjY2VudFxyXG4gICAgY3Vyc29yLXBvaW50ZXJcclxuICAgIGZsZXhcclxuICAgIGZsZXgtcm93XHJcbiAgICBmbGV4LW5vd3JhcFxyXG4gICAgaXRlbXMtY2VudGVyXHJcbiAgICBob3ZlcjpiZy1pbmFjdGl2ZVxyXG4gICAgaG92ZXI6dGV4dC1wcmltYXJ5XHJcbiAgICBqdXN0aWZ5LWNlbnRlclxyXG4gICAgZm9udC1ib2xkXHJcbiAgICBweC00XHJcbiAgICBweS0zXHJcbiAgICByb3VuZGVkLWxnXHJcbiAgICB0ZXh0LWJzZVxyXG4gICAgc2hhZG93XHJcbiAgYFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVG9CYWdCdXR0b24oeyBvcmRlciB9OiB7IG9yZGVyOiBJUGF5bWVudE9yZGVyIH0pIHtcclxuXHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKCk7XHJcbiAgY29uc3QgeyBhZGRQcm9kdWN0VG9CYWcgfSA9IHVzZUNvbnRleHQoT3JkZXJDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlckNsaWNrID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB2YXJpYW50UXVhbnRpdHkgPSBwYXJzZUludCgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5JykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gICAgYWRkUHJvZHVjdFRvQmFnKHZhcmlhbnRRdWFudGl0eSwgb3JkZXIpXHJcbiAgICBlbnF1ZXVlU25hY2tiYXIoXCJBcnRpY3VsbyBhZ3JlZ2Fkb1wiKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YSBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlckNsaWNrKGUpfSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItM1wiPjxTaG9wcGluZ0JhZyAvPjwvc3Bhbj5cclxuICAgICAgPHNwYW4+QcOxYWRpciBhIGxhIGJvbHNhPC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoZXZyb25MZWZ0LCBDaGV2cm9uUmlnaHQgfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuXHJcbmltcG9ydCBnZXRNZWRpYVNvdXJjZSBmcm9tICdAL3V0aWxzL2dldC1tZWRpYS1zb3VyY2UnO1xyXG5cclxuQ2Fyb3VzZWwucHJvcFR5cGVzID0ge1xyXG4gIG1lZGlhOiBQcm9wVHlwZXMuYXJyYXlcclxufTtcclxuXHJcbkNhcm91c2VsLmRlZmF1bHRQcm9wcyA9IHtcclxuICBtZWRpYTogW11cclxufTtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY29udGFpbmVyOiBgXHJcbiAgICBtZDp3LWZ1bGxcclxuICAgIGgtZnVsbFxyXG4gICAgbWQ6ZmxleFxyXG4gICAgbWQ6ZmxleC1yb3dcclxuICAgIG1kOmZsZXgtbm93cmFwXHJcbiAgICBtZDpqdXN0aWZ5LWNlbnRlclxyXG4gICAgbWQ6aXRlbXMtY2VudGVyXHJcbiAgICByZWxhdGl2ZVxyXG4gIGAsXHJcblxyXG4gIGNvbnRyb2xzOiB7XHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgYWJzb2x1dGVcclxuICAgICAgYmctYnNlXHJcbiAgICAgIGJnLW9wYWNpdHktNzVcclxuICAgICAgYm90dG9tLTBcclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICBmbGV4LXJvd1xyXG4gICAgICByaWdodC0wXHJcbiAgICBgLFxyXG4gICAgYnV0dG9uOiBgXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1yb3dcclxuICAgICAgaC05XHJcbiAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICBqdXN0aWZ5LWNlbnRlclxyXG4gICAgICBtZDp0ZXh0LWFjY2VudFxyXG4gICAgICBtZDpob3Zlcjp0ZXh0LXByaW1hcnlcclxuICAgICAgdy05XHJcbiAgICBgXHJcbiAgfSxcclxuXHJcbiAgaW1hZ2U6IGBcclxuICAgIGFuaW1hdGUtZmFkZUluXHJcbiAgICBtaW4taC1mdWxsXHJcbiAgICBtaW4tdy1mdWxsXHJcbiAgICBvYmplY3QtY292ZXJcclxuICBgLFxyXG5cclxuICB2aWRlbzogYFxyXG4gICAgYW5pbWF0ZS1mYWRlSW5cclxuICAgIG1pbi1oLWZ1bGxcclxuICAgIG1pbi13LWZ1bGxcclxuICBgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbCh7IG1lZGlhIH0pIHtcclxuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShtZWRpYVswXSk7XHJcbiAgY29uc3QgbWVkaWFFbGVtZW50ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBzaG93UHJldmlvdXMgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBmaWxlSW5kZXggPSBtZWRpYS5pbmRleE9mKGZpbGUpXHJcbiAgICAgID8gbWVkaWEuaW5kZXhPZihmaWxlKSAtIDFcclxuICAgICAgOiBtZWRpYS5sZW5ndGggLSAxO1xyXG5cclxuICAgIHJldHVybiBzZXRGaWxlKG1lZGlhW2ZpbGVJbmRleF0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dOZXh0ID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZmlsZUluZGV4ID0gbWVkaWEuaW5kZXhPZihmaWxlKSA8IChtZWRpYS5sZW5ndGggLSAxKVxyXG4gICAgICA/IG1lZGlhLmluZGV4T2YoZmlsZSkgKyAxXHJcbiAgICAgIDogMDtcclxuXHJcbiAgICByZXR1cm4gc2V0RmlsZShtZWRpYVtmaWxlSW5kZXhdKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAge1xyXG4gICAgICAgIGZpbGUgJiYgKFxyXG4gICAgICAgICAgZmlsZS5taW1lLmluY2x1ZGVzKCdpbWFnZScpID9cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHJlZj17bWVkaWFFbGVtZW50fVxyXG4gICAgICAgICAgICAgIGtleT17ZmlsZS5pZH1cclxuICAgICAgICAgICAgICBzcmM9e2dldE1lZGlhU291cmNlKGZpbGUpfVxyXG4gICAgICAgICAgICAgIGFsdD17ZmlsZS5hbHRlcm5hdGl2ZVRleHR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgIHJlZj17bWVkaWFFbGVtZW50fVxyXG4gICAgICAgICAgICAgIGtleT17ZmlsZS5pZH1cclxuICAgICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy52aWRlb31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtnZXRNZWRpYVNvdXJjZShmaWxlKX0gdHlwZT17ZmlsZS5taW1lfT48L3NvdXJjZT5cclxuICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGEgb25DbGljaz17KGUpID0+IHNob3dQcmV2aW91cyhlKX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzLmJ1dHRvbn0+XHJcbiAgICAgICAgICA8Q2hldnJvbkxlZnQgLz5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxhIG9uQ2xpY2s9eyhlKSA9PiBzaG93TmV4dChlKX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzLmJ1dHRvbn0+XHJcbiAgICAgICAgICA8Q2hldnJvblJpZ2h0IC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ0AvY29tcG9uZW50cy9kcm9wZG93bnMvRHJvcGRvd24nO1xyXG5pbXBvcnQgSU9mZmVyIGZyb20gJ0AvbW9kZWxzL0lPZmZlcic7XHJcblxyXG5PZmZlcnNTZWxlY3Rvci5wcm9wVHlwZXMgPSB7XHJcbiAgb2ZmZXJzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgc3RhdGU6IFByb3BUeXBlcy5hcnJheVxyXG59O1xyXG5cclxuT2ZmZXJzU2VsZWN0b3IuZGVmYXVsdFByb3BzID0ge1xyXG4gIG9mZmVyczogW10sXHJcbiAgc3RhdGU6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPZmZlcnNTZWxlY3RvcihcclxuICB7IG9mZmVycywgc3RhdGUgfTogeyBvZmZlcnM6IEFycmF5PElPZmZlcj4sIHN0YXRlOiBhbnkgfVxyXG4pIHtcclxuICBjb25zdCBbc2VsZWN0ZWRPZmZlcnMsIHNldFNlbGVjdGVkT2ZmZXJzXSA9IHN0YXRlO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgYXBwbHlPZmZlciA9IChldmVudDogYW55LCBvZmZlcklkOiBzdHJpbmcpID0+IHtcclxuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYmctYWNjZW50Jyk7XHJcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2JnLWluYWN0aXZlJyk7XHJcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3NoYWRvdycpO1xyXG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdzaGFkb3ctaW5uZXInKTtcclxuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgndGV4dC1ic2UnKTtcclxuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgndGV4dC1wcmltYXJ5Jyk7XHJcblxyXG4gICAgY29uc3QgYXBwbGllZCA9IHNlbGVjdGVkT2ZmZXJzLmZpbHRlcigoc2VsZWN0ZWRPZmZlcikgPT4gc2VsZWN0ZWRPZmZlciA9PT0gb2ZmZXJJZCk7XHJcblxyXG4gICAgaWYgKGFwcGxpZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBzZXRTZWxlY3RlZE9mZmVycyhzZWxlY3RlZE9mZmVycy5jb25jYXQoW29mZmVySWRdKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gc2V0U2VsZWN0ZWRPZmZlcnMoXHJcbiAgICAgICAgc2VsZWN0ZWRPZmZlcnMuZmlsdGVyKChzZWxlY3RlZE9mZmVyKSA9PiBzZWxlY3RlZE9mZmVyICE9PSBvZmZlcklkKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7XHJcbiAgICAgICAgb2ZmZXJzLm1hcCgob2ZmZXIpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtvZmZlci5pZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi00XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gYXBwbHlPZmZlcihldmVudCwgb2ZmZXIuaWQpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC13cmFwIGp1c3RpZnktY2VudGVyIHB4LTQgcHktMiByb3VuZGVkLW1kIHNoYWRvdyBiZy1hY2NlbnQgdGV4dC1ic2UgZm9udC1ib2xkIGJvcmRlci1hY2NlbnQgaG92ZXI6YmctaW5hY3RpdmUgaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tYWxsIHctMS80XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzZWxlY3RlZE9mZmVycy5maWx0ZXIoKHNlbGVjdGVkT2ZmZXI6IElPZmZlcikgPT4gc2VsZWN0ZWRPZmZlciA9PT0gb2ZmZXIuaWQpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyA8PlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj7CoUxhIHF1aWVybyE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIDogPHNwYW4+wqFZYSBsYSB0aWVuZXMhPC9zcGFuPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8cD57b2ZmZXIubmFtZX08L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHRleHQtYWNjZW50IGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93biBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKCF2aXNpYmxlKX0gbGFiZWw9XCJEZXRhbGxlc1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge3Zpc2libGUgJiZcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS00IG10LTEgcm91bmRlZC1tZCBzaGFkb3cgYmctc29mdCBhbmltYXRlLWV4cGFuZEJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge29mZmVyLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICA8L2RpdiA+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBsdXMgfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuaW1wb3J0IHsgTWludXMgfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuXHJcbmNvbnN0IFF1YW50aXR5U2VsZWN0b3IgPSAoeyBzdG9jayB9KSA9PiB7XHJcbiAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgZGVjcmVtZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAocXVhbnRpdHkgPiAxKSB7XHJcbiAgICAgIHNldFF1YW50aXR5KHF1YW50aXR5IC0gMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5jcmVtZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAocXVhbnRpdHkgPCBzdG9jaykge1xyXG4gICAgICBzZXRRdWFudGl0eShxdWFudGl0eSArIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTkgdy05IHJvdW5kZWQtbC1tZCBiZy1pbmFjdGl2ZSB0ZXh0LWFjY2VudCBob3Zlcjp0ZXh0LXByaW1hcnkgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBkZWNyZW1lbnQoZXZlbnQpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNaW51cyBzaXplPVwiMThcIiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJxdWFudGl0eVwiXHJcbiAgICAgICAgICBuYW1lPVwicXVhbnRpdHlcIlxyXG4gICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxyXG4gICAgICAgICAgc3R5bGU9e3thcHBlYXJhbmNlOiAndGV4dGZpZWxkJ319XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTIwIGJnLWluYWN0aXZlIHRleHQtY2VudGVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtOSB3LTkgcm91bmRlZC1yLW1kIGJnLWluYWN0aXZlIHRleHQtYWNjZW50IGhvdmVyOnRleHQtcHJpbWFyeSBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGluY3JlbWVudChldmVudCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBsdXMgc2l6ZT1cIjE4XCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUXVhbnRpdHlTZWxlY3Rvci5wcm9wVHlwZXMgPSB7XHJcbiAgc3RvY2s6IFByb3BUeXBlcy5udW1iZXJcclxufTtcclxuXHJcblF1YW50aXR5U2VsZWN0b3IuZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0b2NrOiAxXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWFudGl0eVNlbGVjdG9yO1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGV2cm9uRG93biB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5cclxuaW1wb3J0IGNvbG9ycyBmcm9tICdAL2RhdGEvY29sb3JzLmpzb24nO1xyXG5cclxuVmFyaWFudFNlbGVjdG9yLnByb3BUeXBlcyA9IHtcclxuICBzdGF0ZTogUHJvcFR5cGVzLmFycmF5LFxyXG4gIHZhcmlhbnRzOiBQcm9wVHlwZXMuYXJyYXlcclxufTtcclxuXHJcblZhcmlhbnRTZWxlY3Rvci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc3RhdGU6IFtdLFxyXG4gIHZhcmlhbnRzOiBbXVxyXG59O1xyXG5cclxuY29uc3QgY2xhc3NlcyA9IHtcclxuICBjb250YWluZXI6IGBcclxuICAgIGN1cnNvci1wb2ludGVyXHJcbiAgICBvdmVyZmxvdy1oaWRkZW5cclxuICAgIHJlbGF0aXZlXHJcblxyXG4gICAgcm91bmRlZFxyXG4gICAgc2hhZG93XHJcbiAgYCxcclxuICBkZWZhdWx0SXRlbTogYFxyXG4gICAgbWQ6YmctaW5hY3RpdmVcclxuICAgIG1kOnB4LTRcclxuICAgIG1kOnB5LTJcclxuICAgIG1kOnRleHQtc2Vjb25kYXJ5XHJcbiAgICBwLTJcclxuICBgLFxyXG4gIGl0ZW06IHtcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGhvdmVyOmJnLWFjY2VudFxyXG4gICAgICBob3Zlcjp0ZXh0LWJzZVxyXG4gICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAganVzdGlmeS1zdGFydFxyXG4gICAgICBtZDpweC00XHJcbiAgICAgIG1kOnB5LTJcclxuICAgICAgcC0yXHJcbiAgICBgLFxyXG4gICAgY29sb3JTd2F0Y2g6IGBcclxuICAgICAgYm9yZGVyLTJcclxuICAgICAgYm9yZGVyLWJzZVxyXG4gICAgICBoLTdcclxuICAgICAgbWQ6bXItNFxyXG4gICAgICBtci0yXHJcbiAgICAgIHJvdW5kZWQtZnVsbFxyXG4gICAgICB3LTdcclxuICAgIGAsXHJcbiAgICBkZXNjcmlwdGlvbjogYFxyXG4gICAgICB0ZXh0LXNtXHJcbiAgICAgIHVwcGVyY2FzZVxyXG4gICAgYFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZhcmlhbnRTZWxlY3Rvcih7IHN0YXRlLCB2YXJpYW50cyB9KSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkVmFyaWFudCwgc2V0U2VsZWN0ZWRWYXJpYW50XSA9IHN0YXRlO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkcm9wZG93bkljb24gPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGFuaW1hdGUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBkcm9wZG93bkljb24uY3VycmVudC5jbGFzc0xpc3QudG9nZ2xlKCdhbmltYXRlLWZsaXBIb3Jpem9udGFsQm90dG9tJyk7XHJcbiAgICBzZXRWaXNpYmxlKCF2aXNpYmxlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBvbkNsaWNrPXthbmltYXRlfSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICFzZWxlY3RlZFZhcmlhbnRcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmRlZmF1bHRJdGVtfT5cclxuICAgICAgICAgICAgICBTZWxlY2Npb25hXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbc2VsZWN0ZWRWYXJpYW50LmNvbG9yLnRyaW0oKS50b0xvd2VyQ2FzZSgpXVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbS5jb2xvclN3YXRjaH1cclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbS5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRWYXJpYW50LmNvbG9yfSwge3NlbGVjdGVkVmFyaWFudC5zaXplfSwge3NlbGVjdGVkVmFyaWFudC5wYXR0ZXJufVxyXG4gICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB2aXNpYmxlICYmXHJcbiAgICAgICAgICB2YXJpYW50cy5maWx0ZXIoKHZhcmlhbnQpID0+IHZhcmlhbnQuc3RvY2sgPiAwKS5tYXAoKHZhcmlhbnQpID0+IChcclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAga2V5PXt2YXJpYW50LmlkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtLmNvbnRhaW5lciArICdiZy1pbmFjdGl2ZSd9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRWYXJpYW50KHZhcmlhbnQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW0uY29sb3JTd2F0Y2h9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1t2YXJpYW50LmNvbG9yLnRyaW0oKS50b0xvd2VyQ2FzZSgpXSB9fVxyXG4gICAgICAgICAgICAgID48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgIHt2YXJpYW50LmNvbG9yfSwge3ZhcmlhbnQuc2l6ZX0sIHt2YXJpYW50LnBhdHRlcm59XHJcbiAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3VsPlxyXG5cclxuXHJcbiAgICAgIDxzcGFuIHJlZj17ZHJvcGRvd25JY29ufSBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC00IHRvcC0yXCI+XHJcbiAgICAgICAgPENoZXZyb25Eb3duIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGV2cm9uRG93biB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5cclxuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGFiZWw6ICdEcm9wZG93bidcclxufTtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY29udGFpbmVyOiBgXHJcbiAgICBmbGV4XHJcbiAgICBmbGV4LXJvd1xyXG4gICAgZmxleC1ub3dyYXBcclxuICAgIGZvbnQtYm9sZFxyXG4gICAgaXRlbXMtY2VudGVyXHJcbiAgYCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3Bkb3duKHsgY2hpbGRyZW4gPSAnJywgbGFiZWwsIG9uQ2xpY2sgfSkge1xyXG4gIGNvbnN0IGFycm93SWNvbiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgIGFycm93SWNvbi5jdXJyZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGUtZmxpcEhvcml6b250YWxCb3R0b20nKTtcclxuICAgIG9uQ2xpY2soKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGEgb25DbGljaz17YW5pbWF0ZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPntsYWJlbH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPHNwYW4gcmVmPXthcnJvd0ljb259PjxDaGV2cm9uRG93biBzaXplPVwiMThcIiAvPjwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJjb25zdCBBUElfRE9NQUlOID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0RPTUFJTjtcclxuY29uc3QgUEFHRV9MSU1JVCA9IDEyO1xyXG5cclxuY29uc3QgQVVUSF9GQUNFQk9PS19DQUxMQkFDSyA9IGAke0FQSV9ET01BSU59L2F1dGgvZmFjZWJvb2svY2FsbGJhY2tgO1xyXG5jb25zdCBBVVRIX0ZBQ0VCT09LX1VSTCA9IGAke0FQSV9ET01BSU59L2Nvbm5lY3QvZmFjZWJvb2tgO1xyXG5jb25zdCBBVVRIX0dPT0dMRV9DQUxMQkFDSyA9IGAke0FQSV9ET01BSU59L2F1dGgvZ29vZ2xlL2NhbGxiYWNrYDtcclxuY29uc3QgQVVUSF9HT09HTEVfVVJMID0gYCR7QVBJX0RPTUFJTn0vY29ubmVjdC9nb29nbGVgO1xyXG5cclxuY29uc3QgU1RSSVBFX1BVQkxJU0hFRF9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElTSEVEX0tFWTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQVBJX0RPTUFJTixcclxuICBQQUdFX0xJTUlULFxyXG4gIEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0ssXHJcbiAgQVVUSF9GQUNFQk9PS19VUkwsXHJcbiAgQVVUSF9HT09HTEVfQ0FMTEJBQ0ssXHJcbiAgQVVUSF9HT09HTEVfVVJMLFxyXG4gIFNUUklQRV9QVUJMSVNIRURfS0VZXHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElQYXltZW50T3JkZXIgZnJvbSBcIkAvbW9kZWxzL0lQYXltZW50T3JkZXJcIjtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb250ZXh0IHdoZW5ldmVyIHlvdSB3YW50IHRvIGFjY2VzcyB0aGUgT3JkZXJQcm92aWRlclxyXG5jb25zdCBPcmRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJDb250ZXh0O1xyXG5cclxuZXhwb3J0IHsgT3JkZXJQcm92aWRlciB9O1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbXBvbmVudCBpbiBhbGwgdGhlIG90aGVyIGNvbXBvbmVudHMgd2hlcmUgeW91IHdhbnQgdG8gYWNjZXNzXHJcbi8vOiB0aGUgZ2xvYmFsIHN0YXRlIG9mIGEgdXNlciBvcmRlclxyXG5mdW5jdGlvbiBPcmRlclByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG5cclxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlPEFycmF5PElQYXltZW50T3JkZXI+PihbXSk7XHJcblxyXG4gIGNvbnN0IGdldE9yZGVyID0gKCk6IEFycmF5PElQYXltZW50T3JkZXI+ID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcicpKSB8fCBbXTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cclxuICAgIHJldHVybiBbXTtcclxuICB9O1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgbyA9IGdldE9yZGVyKClcclxuICAgIHNldE9yZGVyKG8pXHJcbiAgfSxbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzYXZlT3JkZXIob3JkZXIpXHJcbiAgfSxbb3JkZXJdKVxyXG5cclxuICBjb25zdCBzYXZlT3JkZXIgPSAob3JkZXI6IEFycmF5PElQYXltZW50T3JkZXI+KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXInLCBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFByb2R1Y3RUb0JhZyA9ICh2YXJpYW50UXVhbnRpdHk6bnVtYmVyLCBwcm9kdWN0OklQYXltZW50T3JkZXIpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZU9yZGVyID0gWy4uLm9yZGVyXVxyXG4gICAvLzogaWYgdGhlIHByb2R1Y3QgYW5kIHZhcmlhbnQgaXMgYWxyZWFkeSB0aGVyZVxyXG4gICBjb25zdCBpbmRleE9mT3JkZXJJdGVtID0gYWN0aXZlT3JkZXIuZmluZEluZGV4KChvcmRlckl0ZW06IElQYXltZW50T3JkZXIpID0+IG9yZGVySXRlbS52YXJpYW50LmlkID09PSBwcm9kdWN0LnZhcmlhbnQuaWQpO1xyXG4gICBpZiAoaW5kZXhPZk9yZGVySXRlbSAhPT0gLTEpIHtcclxuICAgICAvLzogdXBkYXRlIHF1YW50aXR5XHJcbiAgICAgY29uc3QgY3VycmVudFF1YW50aXR5ID0gYWN0aXZlT3JkZXJbaW5kZXhPZk9yZGVySXRlbV0ucXVhbnRpdHk7XHJcbiAgICAgaWYgKGN1cnJlbnRRdWFudGl0eSArIHZhcmlhbnRRdWFudGl0eSA8PSBwcm9kdWN0LnZhcmlhbnQuc3RvY2spIHtcclxuICAgICAgIGFjdGl2ZU9yZGVyW2luZGV4T2ZPcmRlckl0ZW1dLnF1YW50aXR5ID0gY3VycmVudFF1YW50aXR5ICsgdmFyaWFudFF1YW50aXR5O1xyXG4gICAgIH1cclxuICAgfSBlbHNlIHtcclxuICAgICBhY3RpdmVPcmRlci5wdXNoKHtcclxuICAgICAgIHByb2R1Y3Q6IHByb2R1Y3QucHJvZHVjdCxcclxuICAgICAgIHZhcmlhbnQ6IHByb2R1Y3QudmFyaWFudCxcclxuICAgICAgIHF1YW50aXR5OiB2YXJpYW50UXVhbnRpdHksXHJcbiAgICAgICBvZmZlcnM6IHByb2R1Y3Qub2ZmZXJzXHJcbiAgICAgfSk7XHJcbiAgIH1cclxuICAgIHNldE9yZGVyKGFjdGl2ZU9yZGVyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVQcm9kdWN0ID0gKGl0ZW1OdW1iZXIpID0+IHtcclxuICAgICAgY29uc3QgYWN0aXZlT3JkZXIgPSBbLi4ub3JkZXJdXHJcbiAgICAgIGFjdGl2ZU9yZGVyLnNwbGljZShpdGVtTnVtYmVyLCAxKVxyXG4gICAgICBzZXRPcmRlcihhY3RpdmVPcmRlcilcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE9yZGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBvcmRlciwgYWRkUHJvZHVjdFRvQmFnLCByZW1vdmVQcm9kdWN0LCBzZXRPcmRlciB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9PcmRlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIiwiLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gb2YgdGhlIEFwb2xsbyBDbGllbnQgdG8gZW5hYmxlIHRoZSB1c2Ugb2YgR3JhcGhRTC5cclxuICovXHJcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQXBvbGxvQ2xpZW50LFxyXG4gIEh0dHBMaW5rLFxyXG4gIEluTWVtb3J5Q2FjaGUsXHJcbiAgTm9ybWFsaXplZENhY2hlT2JqZWN0XHJcbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgQVBJX0RPTUFJTiB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xyXG5cclxubGV0IGFwb2xsb0NsaWVudDogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD47XHJcblxyXG5jb25zdCBjcmVhdGVBcG9sbG9DbGllbnQgPSAoKTogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD4gPT4ge1xyXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIGxpbms6IG5ldyBIdHRwTGluayh7IHVyaTogYCR7QVBJX0RPTUFJTn0vZ3JhcGhxbGAgfSksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG4gIH0pO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBpbml0aWFsaXplQXBvbGxvQ2xpZW50ID0gKGluaXRpYWxTdGF0ZTogYW55ID0gbnVsbCk6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+ID0+IHtcclxuICBjb25zdCBfYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudCgpO1xyXG5cclxuICAvLzogaW5pdGlhbCBzdGF0ZSBvZiBOZXh0LmpzIGRhdGEgZmV0Y2hpbmcgbWV0aG9kcyBpcyBoeWRyYXRlZCBoZXJlXHJcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgLy86IGdldCBleGlzdGluZyBjYWNoZSwgbG9hZGVkIGR1cmluZyBjbGllbnQgc2lkZSBkYXRhIGZldGNoaW5nXHJcbiAgICBjb25zdCBleGlzdGluZ0NhY2hlID0gX2Fwb2xsb0NsaWVudC5leHRyYWN0KCk7XHJcblxyXG4gICAgLy86IHJlc3RvcmUgdGhlIGNhY2hlIHVzaW5nIHRoZSBkYXRhIHBhc3NlZCBmcm9tIFwiZ2V0U3RhdGljUHJvcHNcIiBvclxyXG4gICAgLy86IFwiZ2V0U2VydmVyU2lkZVByb3BzXCIgY29tYmluZWQgd2l0aCB0aGUgZXhpc3RpbmcgY2FjaGUgZGF0YVxyXG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKHsgLi4uZXhpc3RpbmdDYWNoZSwgLi4uaW5pdGlhbFN0YXRlIH0pO1xyXG4gIH1cclxuXHJcbiAgLy86IGZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfYXBvbGxvQ2xpZW50O1xyXG5cclxuICAvLzogY3JlYXRlIHRoZSBBcG9sbG8gQ2xpZW50IG9uY2UgaW4gdGhlIGNsaWVudFxyXG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50O1xyXG5cclxuICByZXR1cm4gX2Fwb2xsb0NsaWVudDtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogdXNlIHRoaXMgY3VzdG9tIGhvb2sgaW4geW91ciBjb21wb25lbnRzIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIG9mIHRoZSBBcG9sbG9cclxuLy86IENsaWVudFxyXG5jb25zdCB1c2VBcG9sbG9DbGllbnQgPSAoaW5pdGlhbFN0YXRlOiBhbnkpOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiA9PiB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gaW5pdGlhbGl6ZUFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUpLFxyXG4gICAgW2luaXRpYWxTdGF0ZV1cclxuICApO1xyXG5cclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgeyBpbml0aWFsaXplQXBvbGxvQ2xpZW50LCB1c2VBcG9sbG9DbGllbnQgfTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0RGVwYXJ0bWVudHMgfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtZGVwYXJ0bWVudHMnO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0QnlTbHVnIH0gZnJvbSBcIkAvYWN0aW9ucy9mZXRjaC1wcm9kdWN0c1wiO1xyXG5pbXBvcnQgQWRkVG9CYWdCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2J1dHRvbnMvQWRkVG9CYWdCdXR0b24nO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnQC9jb21wb25lbnRzL2Nhcm91c2Vscy9DYXJvdXNlbCc7XHJcbmltcG9ydCBRdWFudGl0eVNlbGVjdG9yIGZyb20gJ0AvY29tcG9uZW50cy9jb250cm9scy9RdWFudGl0eVNlbGVjdG9yJztcclxuaW1wb3J0IFZhcmlhbnRTZWxlY3RvciBmcm9tICdAL2NvbXBvbmVudHMvY29udHJvbHMvVmFyaWFudFNlbGVjdG9yJztcclxuaW1wb3J0IE9mZmVyc1NlbGVjdG9yIGZyb20gJ0AvY29tcG9uZW50cy9jb250cm9scy9PZmZlcnNTZWxlY3Rvcic7XHJcbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG9DbGllbnQgfSBmcm9tIFwiQC9saWIvYXBvbGxvLWNsaWVudFwiO1xyXG5pbXBvcnQgSVZhcmlhbnQgZnJvbSAnQC9tb2RlbHMvSVZhcmlhbnQnO1xyXG5pbXBvcnQgSU9mZmVyIGZyb20gJ0AvbW9kZWxzL0lPZmZlcic7XHJcbmltcG9ydCBmb3JtYXRQcmljZSBmcm9tICdAL3V0aWxzL2Zvcm1hdC1wcmljZSc7XHJcblxyXG5jb25zdCBjbGFzc2VzID0ge1xyXG4gIGNvbnRhaW5lcjogYFxyXG4gICAgaC1zY3JlZW5cclxuICAgIG1heC13LXNjcmVlblxyXG4gICAgcmVsYXRpdmVcclxuICBgLFxyXG5cclxuICBjYXJvdXNlbDogYFxyXG4gICAgYmctYmFzZVxyXG4gICAgaC00LzZcclxuICAgIG1kOmFic29sdXRlXHJcbiAgICBtZDpoLWZ1bGxcclxuICAgIG1kOnJpZ2h0LTEyXHJcbiAgICBtZDpyb3VuZGVkLWxnXHJcbiAgICBtZDp3LTEvMlxyXG4gICAgb3ZlcmZsb3ctaGlkZGVuXHJcbiAgYCxcclxuXHJcbiAgZGV0YWlsczogYFxyXG4gICAgaC0xMS8xMlxyXG4gICAgb3ZlcmZsb3cteS1zY3JvbGxcclxuICAgIHBiLTIwXHJcbiAgICB3LWZ1bGxcclxuICBgLFxyXG5cclxuICBpbmZvcm1hdGlvbjoge1xyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIGJnLWJzZVxyXG4gICAgICBtdC02XHJcbiAgICAgIG1kOnctMi81XHJcbiAgICAgIG1kOmFic29sdXRlXHJcbiAgICAgIG1kOm0tMTJcclxuICAgICAgbWQ6cC0xMlxyXG4gICAgICBtZDpiZy1iYXNlXHJcbiAgICAgIG1kOnNoYWRvd1xyXG4gICAgICBtZDpyb3VuZGVkLTJ4bFxyXG4gICAgICBtZDp6LTEwXHJcbiAgICAgIG1kOm92ZXJmbG93LXktc2Nyb2xsXHJcbiAgICAgIHAtN1xyXG4gICAgICByb3VuZGVkLXQtM3hsXHJcbiAgICAgIG1heC13LWZ1bGxcclxuICAgIGAsXHJcbiAgICBzZWN0aW9uOiBgXHJcbiAgICAgIG1iLTdcclxuICAgICAgdy1mdWxsXHJcbiAgICBgLFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgIHRpdGxlOiBgXHJcbiAgICAgICAgZm9udC1ib2xkXHJcbiAgICAgICAgZm9udC1kaXNwbGF5XHJcbiAgICAgICAgbWItMlxyXG4gICAgICAgIHRleHQtMnhsXHJcbiAgICAgIGBcclxuICAgIH0sXHJcbiAgICB0aXRsZTogYFxyXG4gICAgICBmb250LWJvbGRcclxuICAgICAgbWItMlxyXG4gICAgYFxyXG4gIH0sXHJcblxyXG4gIGFkZEJ1dHRvbjogYFxyXG4gICAgZmxleFxyXG4gICAgZmxleC1yb3dcclxuICAgIGp1c3RpZnktZW5kXHJcbiAgICBtdC0xMlxyXG4gIGBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3REZXRhaWxzUGFnZSh7IGRlcGFydG1lbnRzLCBwcm9kdWN0LCByZWZlcmVyIH0pIHtcclxuICBjb25zdCBbc2VsZWN0ZWRWYXJpYW50LCBzZXRTZWxlY3RlZFZhcmlhbnRdID0gdXNlU3RhdGU8SVZhcmlhbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE9mZmVycywgc2V0U2VsZWN0ZWRPZmZlcnNdID0gdXNlU3RhdGU8SU9mZmVyW10+KFtdKTtcclxuICBjb25zdCBbdmlld3BvcnRXaWR0aCwgc2V0Vmlld3BvcnRXaWR0aF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Vmlld3BvcnRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsc30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2Fyb3VzZWx9PlxyXG4gICAgICAgICAgPENhcm91c2VsIG1lZGlhPXtwcm9kdWN0Lm1lZGlhfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvcm1hdGlvbi5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb3JtYXRpb24uc2VjdGlvbn0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvcm1hdGlvbi5oZWFkZXIudGl0bGV9Pntwcm9kdWN0Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi02XCI+e2Zvcm1hdFByaWNlKCdNWE4nLCBwcm9kdWN0LnByaWNlKX08L3A+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcHJvZHVjdC52YXJpYW50cy5sZW5ndGggIT09IDAgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb3JtYXRpb24uc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9ybWF0aW9uLnRpdGxlfT5WYXJpYW50ZTwvcD5cclxuICAgICAgICAgICAgICA8VmFyaWFudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICBzdGF0ZT17W3NlbGVjdGVkVmFyaWFudCwgc2V0U2VsZWN0ZWRWYXJpYW50XX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtwcm9kdWN0LnZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcHJvZHVjdC5vZmZlcnMubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9ybWF0aW9uLnNlY3Rpb259PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvcm1hdGlvbi50aXRsZX0+T2ZlcnRhczwvcD5cclxuICAgICAgICAgICAgICA8T2ZmZXJzU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIG9mZmVycz17cHJvZHVjdC5vZmZlcnN9XHJcbiAgICAgICAgICAgICAgICBzdGF0ZT17W3NlbGVjdGVkT2ZmZXJzLCBzZXRTZWxlY3RlZE9mZmVyc119XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb3JtYXRpb24uc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9ybWF0aW9uLnRpdGxlfT5DYW50aWRhZDwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8UXVhbnRpdHlTZWxlY3RvciBzdG9jaz17c2VsZWN0ZWRWYXJpYW50LnN0b2NrfSAvPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cIm1sLTQgdGV4dC1zbSB0ZXh0LW5ldXRyYWxcIj5cclxuICAgICAgICAgICAgICAgICAgwqF7c2VsZWN0ZWRWYXJpYW50LnN0b2NrfSBkaXNwb25pYmxlcyFcclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgKHByb2R1Y3QgJiYgc2VsZWN0ZWRWYXJpYW50KSAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRCdXR0b259PlxyXG4gICAgICAgICAgICAgIDxBZGRUb0JhZ0J1dHRvbiBvcmRlcj17e1xyXG4gICAgICAgICAgICAgICAgb2ZmZXJzOiBzZWxlY3RlZE9mZmVycyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50OiBzZWxlY3RlZFZhcmlhbnRcclxuICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2RpdiA+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMsIHJlcSB9KSA9PiB7XHJcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCgpO1xyXG4gIGNvbnN0IGRlcGFydG1lbnRzID0gYXdhaXQgZ2V0RGVwYXJ0bWVudHMoYXBvbGxvQ2xpZW50KTtcclxuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgZ2V0UHJvZHVjdEJ5U2x1ZyhhcG9sbG9DbGllbnQsIHBhcmFtcy5zbHVnKTtcclxuXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgZGVwYXJ0bWVudHMsIHByb2R1Y3QsIHJlZmVyZXI6IHJlcS5oZWFkZXJzLnJlZmVyZXIgfHwgJy8nIH0gfVxyXG59O1xyXG4iLCIvKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGZvcm1hdCBwcmljZXMgdG8gbWFrZSB0aGVtIGxvb2sgbGlrZTpcclxuICogVVMgMzAwLjkwLCBNWCAxNTg5LjkwIG9yIEdCIDEyLjAwXHJcbiAqXHJcbiAqIEN1cnJlbmN5IGNvZGVzIChJU08gNDIxNyBjdXJyZW5jeSBjb2RlcykgYXJlIHBhc3NlZCBhcyBhcmd1bWVudHMgZGVwZW5kaW5nIG9uXHJcbiAqIGkxOG4gZ2xvYmFsIGNvbnRleHQuXHJcbiAqL1xyXG5jb25zdCBmb3JtYXRQcmljZTogKGN1cnJlbmN5Q29kZTogc3RyaW5nLCBwcmljZTogbnVtYmVyIHwgc3RyaW5nKSA9PiBzdHJpbmcgPSAoY3VycmVuY3lDb2RlLCBwcmljZSkgPT4ge1xyXG4gIC8vOiBmb3JjZSB0d28gZGVjaW1hbHNcclxuICBjb25zdCBwcmljZVdpdGhEZWNpbWFscyA9IHBhcnNlRmxvYXQoU3RyaW5nKHByaWNlKSkudG9GaXhlZCgyKTtcclxuXHJcbiAgcmV0dXJuIGAke2N1cnJlbmN5Q29kZS50b1VwcGVyQ2FzZSgpfSAke3ByaWNlV2l0aERlY2ltYWxzfWA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRQcmljZTtcclxuIiwiLyoqXHJcbiAqIFRoaXMgdXRpbGl0eSBmdW5jdGlvbiByZXR1cm5zIGEgbWVkaWEgVVJMIGJhc2VkIG9uIG9uZSBvZiB0aHJlZSBjYXNlczpcclxuICpcclxuICogIDEuIFRoZXJlJ3Mgbm8gbWVkaWEgc291cmNlIHRvIHJldHVybiAod2hlbiBubyBtZWRpYSBpcyBhZGRlZCkuXHJcbiAqICAyLiBUaGUgbWVkaWEgaXMgc2VydmVkIGZyb20gdGhlIHNhbWUgc2VydmVyIHRoYXQgcnVucyB0aGUgYXBwIChsb2NhbCkuXHJcbiAqICAzLiBUaGUgbWVkaWEgaXMgc2VydmVkIGJ5IGFuIHVwbG9hZCBwcm92aWRlciAocmVtb3RlIHNlcnZlcikuXHJcbiAqL1xyXG5pbXBvcnQgeyBBUElfRE9NQUlOIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcbmltcG9ydCBtZWRpYU5vdEZvdW5kSW1hZ2UgZnJvbSBcIkAvYXNzZXRzL2ltYWdlcy9tZWRpYV9ub3RfZm91bmQuc3ZnXCI7XHJcblxyXG5pbnRlcmZhY2UgTWVkaWEge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufTtcclxuXHJcbmNvbnN0IGdldE1lZGlhU291cmNlOiAobWVkaWE6IE1lZGlhKSA9PiBzdHJpbmcgPSAobWVkaWEpID0+IHtcclxuICAvLzogQ2FzZSAxLlxyXG4gIGlmICghbWVkaWEpIHtcclxuICAgIHJldHVybiBtZWRpYU5vdEZvdW5kSW1hZ2U7XHJcbiAgfVxyXG5cclxuICAvLzogQ2FzZSAyLlxyXG4gIGlmIChtZWRpYS51cmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcclxuICAgIHJldHVybiBBUElfRE9NQUlOICsgbWVkaWEudXJsO1xyXG4gIH1cclxuXHJcbiAgLy86IENhc2UgMy5cclxuICByZXR1cm4gbWVkaWEudXJsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0TWVkaWFTb3VyY2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vdGlzdGFja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZlYXRoZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=