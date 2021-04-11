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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

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
  const {
    error,
    data
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
    data
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

/***/ "./assets/images/frame.svg":
/*!*********************************!*\
  !*** ./assets/images/frame.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDE0NDAgMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4NCjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMSAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMTEuMzA5MSAyMC44ODY0VjE2LjI1NzlIMTYuNzA5MVYyNUgxVjYuNUgyMi41VjEwLjU5OThINi40VjIwLjg4NjRIMTEuMzA5MVoiIGZpbGw9IiNBMzE5NUIiLz4NCjxwYXRoIGQ9Ik0xOSAxMi4wMDRWMzBINTVWMjUuODg3M0g0Ni41VjIxLjc3NDZIMzcuNVYxNy4xNDcySDI4LjVWMTIuMDA0SDE5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTI4IDBWNi40Mjc3NkgzNy4xOTE1VjExLjU2NDdINDYuMzgzVjE4SDU1VjBIMjhaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDY0IDMwKSIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik03NC4zMDkxIDIwLjg4NjRWMTYuMjU3OUg3OS43MDkxVjI1SDY0VjYuNUg4NS41VjEwLjU5OThINjkuNFYyMC44ODY0SDc0LjMwOTFaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNODIgMTIuMDA0VjMwSDExOFYyNS44ODczSDEwOS41VjIxLjc3NDZIMTAwLjVWMTcuMTQ3Mkg5MS41VjEyLjAwNEg4MloiIGZpbGw9IiNBMzE5NUIiLz4NCjxwYXRoIGQ9Ik05MSAwVjYuNDI3NzZIMTAwLjE5MVYxMS41NjQ3SDEwOS4zODNWMThIMTE4VjBIOTFaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDEyNyAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMTM3LjMwOSAyMC44ODY0VjE2LjI1NzlIMTQyLjcwOVYyNUgxMjdWNi41SDE0OC41VjEwLjU5OThIMTMyLjRWMjAuODg2NEgxMzcuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTE0NSAxMi4wMDRWMzBIMTgxVjI1Ljg4NzNIMTcyLjVWMjEuNzc0NkgxNjMuNVYxNy4xNDcySDE1NC41VjEyLjAwNEgxNDVaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNMTU0IDBWNi40Mjc3NkgxNjMuMTkxVjExLjU2NDdIMTcyLjM4M1YxOEgxODFWMEgxNTRaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDE5MCAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMjAwLjMwOSAyMC44ODY0VjE2LjI1NzlIMjA1LjcwOVYyNUgxOTBWNi41SDIxMS41VjEwLjU5OThIMTk1LjRWMjAuODg2NEgyMDAuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTIwOCAxMi4wMDRWMzBIMjQ0VjI1Ljg4NzNIMjM1LjVWMjEuNzc0NkgyMjYuNVYxNy4xNDcySDIxNy41VjEyLjAwNEgyMDhaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNMjE3IDBWNi40Mjc3NkgyMjYuMTkxVjExLjU2NDdIMjM1LjM4M1YxOEgyNDRWMEgyMTdaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDI1MyAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMjYzLjMwOSAyMC44ODY0VjE2LjI1NzlIMjY4LjcwOVYyNUgyNTNWNi41SDI3NC41VjEwLjU5OThIMjU4LjRWMjAuODg2NEgyNjMuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTI3MSAxMi4wMDRWMzBIMzA3VjI1Ljg4NzNIMjk4LjVWMjEuNzc0NkgyODkuNVYxNy4xNDcySDI4MC41VjEyLjAwNEgyNzFaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNMjgwIDBWNi40Mjc3NkgyODkuMTkxVjExLjU2NDdIMjk4LjM4M1YxOEgzMDdWMEgyODBaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDMxNiAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMzI2LjMwOSAyMC44ODY0VjE2LjI1NzlIMzMxLjcwOVYyNUgzMTZWNi41SDMzNy41VjEwLjU5OThIMzIxLjRWMjAuODg2NEgzMjYuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTMzNCAxMi4wMDRWMzBIMzcwVjI1Ljg4NzNIMzYxLjVWMjEuNzc0NkgzNTIuNVYxNy4xNDcySDM0My41VjEyLjAwNEgzMzRaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNMzQzIDBWNi40Mjc3NkgzNTIuMTkxVjExLjU2NDdIMzYxLjM4M1YxOEgzNzBWMEgzNDNaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDM3OSAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMzg5LjMwOSAyMC44ODY0VjE2LjI1NzlIMzk0LjcwOVYyNUgzNzlWNi41SDQwMC41VjEwLjU5OThIMzg0LjRWMjAuODg2NEgzODkuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTM5NyAxMi4wMDRWMzBINDMzVjI1Ljg4NzNINDI0LjVWMjEuNzc0Nkg0MTUuNVYxNy4xNDcySDQwNi41VjEyLjAwNEgzOTdaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNNDA2IDBWNi40Mjc3Nkg0MTUuMTkxVjExLjU2NDdINDI0LjM4M1YxOEg0MzNWMEg0MDZaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDQ0MiAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNNDUyLjMwOSAyMC44ODY0VjE2LjI1NzlINDU3LjcwOVYyNUg0NDJWNi41SDQ2My41VjEwLjU5OThINDQ3LjRWMjAuODg2NEg0NTIuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTQ2MCAxMi4wMDRWMzBINDk2VjI1Ljg4NzNINDg3LjVWMjEuNzc0Nkg0NzguNVYxNy4xNDcySDQ2OS41VjEyLjAwNEg0NjBaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNNDY5IDBWNi40Mjc3Nkg0NzguMTkxVjExLjU2NDdINDg3LjM4M1YxOEg0OTZWMEg0NjlaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDUwNSAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNNTE1LjMwOSAyMC44ODY0VjE2LjI1NzlINTIwLjcwOVYyNUg1MDVWNi41SDUyNi41VjEwLjU5OThINTEwLjRWMjAuODg2NEg1MTUuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTUyMyAxMi4wMDRWMzBINTU5VjI1Ljg4NzNINTUwLjVWMjEuNzc0Nkg1NDEuNVYxNy4xNDcySDUzMi41VjEyLjAwNEg1MjNaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNNTMyIDBWNi40Mjc3Nkg1NDEuMTkxVjExLjU2NDdINTUwLjM4M1YxOEg1NTlWMEg1MzJaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDU2OCAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNNTc4LjMwOSAyMC44ODY0VjE2LjI1NzlINTgzLjcwOVYyNUg1NjhWNi41SDU4OS41VjEwLjU5OThINTczLjRWMjAuODg2NEg1NzguMzA5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTU4NiAxMi4wMDRWMzBINjIyVjI1Ljg4NzNINjEzLjVWMjEuNzc0Nkg2MDQuNVYxNy4xNDcySDU5NS41VjEyLjAwNEg1ODZaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNNTk1IDBWNi40Mjc3Nkg2MDQuMTkxVjExLjU2NDdINjEzLjM4M1YxOEg2MjJWMEg1OTVaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDYzMSAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNNjQxLjMwOSAyMC44ODY0VjE2LjI1NzlINjQ2LjcwOVYyNUg2MzFWNi41SDY1Mi41VjEwLjU5OThINjM2LjRWMjAuODg2NEg2NDEuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTY0OSAxMi4wMDRWMzBINjg1VjI1Ljg4NzNINjc2LjVWMjEuNzc0Nkg2NjcuNVYxNy4xNDcySDY1OC41VjEyLjAwNEg2NDlaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNNjU4IDBWNi40Mjc3Nkg2NjcuMTkxVjExLjU2NDdINjc2LjM4M1YxOEg2ODVWMEg2NThaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDY5NCAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNNzA0LjMwOSAyMC44ODY0VjE2LjI1NzlINzA5LjcwOVYyNUg2OTRWNi41SDcxNS41VjEwLjU5OThINjk5LjRWMjAuODg2NEg3MDQuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTcxMiAxMi4wMDRWMzBINzQ4VjI1Ljg4NzNINzM5LjVWMjEuNzc0Nkg3MzAuNVYxNy4xNDcySDcyMS41VjEyLjAwNEg3MTJaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNNzIxIDBWNi40Mjc3Nkg3MzAuMTkxVjExLjU2NDdINzM5LjM4M1YxOEg3NDhWMEg3MjFaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDc1NyAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNNzY3LjMwOSAyMC44ODY0VjE2LjI1NzlINzcyLjcwOVYyNUg3NTdWNi41SDc3OC41VjEwLjU5OThINzYyLjRWMjAuODg2NEg3NjcuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTc3NSAxMi4wMDRWMzBIODExVjI1Ljg4NzNIODAyLjVWMjEuNzc0Nkg3OTMuNVYxNy4xNDcySDc4NC41VjEyLjAwNEg3NzVaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNNzg0IDBWNi40Mjc3Nkg3OTMuMTkxVjExLjU2NDdIODAyLjM4M1YxOEg4MTFWMEg3ODRaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDgyMCAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNODMwLjMwOSAyMC44ODY0VjE2LjI1NzlIODM1LjcwOVYyNUg4MjBWNi41SDg0MS41VjEwLjU5OThIODI1LjRWMjAuODg2NEg4MzAuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTgzOCAxMi4wMDRWMzBIODc0VjI1Ljg4NzNIODY1LjVWMjEuNzc0Nkg4NTYuNVYxNy4xNDcySDg0Ny41VjEyLjAwNEg4MzhaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNODQ3IDBWNi40Mjc3Nkg4NTYuMTkxVjExLjU2NDdIODY1LjM4M1YxOEg4NzRWMEg4NDdaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDg4MyAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNODkzLjMwOSAyMC44ODY0VjE2LjI1NzlIODk4LjcwOVYyNUg4ODNWNi41SDkwNC41VjEwLjU5OThIODg4LjRWMjAuODg2NEg4OTMuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTkwMSAxMi4wMDRWMzBIOTM3VjI1Ljg4NzNIOTI4LjVWMjEuNzc0Nkg5MTkuNVYxNy4xNDcySDkxMC41VjEyLjAwNEg5MDFaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNOTEwIDBWNi40Mjc3Nkg5MTkuMTkxVjExLjU2NDdIOTI4LjM4M1YxOEg5MzdWMEg5MTBaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDk0NiAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNOTU2LjMwOSAyMC44ODY0VjE2LjI1NzlIOTYxLjcwOVYyNUg5NDZWNi41SDk2Ny41VjEwLjU5OThIOTUxLjRWMjAuODg2NEg5NTYuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTk2NCAxMi4wMDRWMzBIMTAwMFYyNS44ODczSDk5MS41VjIxLjc3NDZIOTgyLjVWMTcuMTQ3Mkg5NzMuNVYxMi4wMDRIOTY0WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTk3MyAwVjYuNDI3NzZIOTgyLjE5MVYxMS41NjQ3SDk5MS4zODNWMThIMTAwMFYwSDk3M1oiIGZpbGw9IiNBMzE5NUIiLz4NCjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTAwOSAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMTAxOS4zMSAyMC44ODY0VjE2LjI1NzlIMTAyNC43MVYyNUgxMDA5VjYuNUgxMDMwLjVWMTAuNTk5OEgxMDE0LjRWMjAuODg2NEgxMDE5LjMxWiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTEwMjcgMTIuMDA0VjMwSDEwNjNWMjUuODg3M0gxMDU0LjVWMjEuNzc0NkgxMDQ1LjVWMTcuMTQ3MkgxMDM2LjVWMTIuMDA0SDEwMjdaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNMTAzNiAwVjYuNDI3NzZIMTA0NS4xOVYxMS41NjQ3SDEwNTQuMzhWMThIMTA2M1YwSDEwMzZaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDEwNzIgMzApIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZD0iTTEwODIuMzEgMjAuODg2NFYxNi4yNTc5SDEwODcuNzFWMjVIMTA3MlY2LjVIMTA5My41VjEwLjU5OThIMTA3Ny40VjIwLjg4NjRIMTA4Mi4zMVoiIGZpbGw9IiNBMzE5NUIiLz4NCjxwYXRoIGQ9Ik0xMDkwIDEyLjAwNFYzMEgxMTI2VjI1Ljg4NzNIMTExNy41VjIxLjc3NDZIMTEwOC41VjE3LjE0NzJIMTA5OS41VjEyLjAwNEgxMDkwWiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTEwOTkgMFY2LjQyNzc2SDExMDguMTlWMTEuNTY0N0gxMTE3LjM4VjE4SDExMjZWMEgxMDk5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHJlY3Qgd2lkdGg9IjU0IiBoZWlnaHQ9IjMwIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAxMTM1IDMwKSIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik0xMTQ1LjMxIDIwLjg4NjRWMTYuMjU3OUgxMTUwLjcxVjI1SDExMzVWNi41SDExNTYuNVYxMC41OTk4SDExNDAuNFYyMC44ODY0SDExNDUuMzFaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNMTE1MyAxMi4wMDRWMzBIMTE4OVYyNS44ODczSDExODAuNVYyMS43NzQ2SDExNzEuNVYxNy4xNDcySDExNjIuNVYxMi4wMDRIMTE1M1oiIGZpbGw9IiNBMzE5NUIiLz4NCjxwYXRoIGQ9Ik0xMTYyIDBWNi40Mjc3NkgxMTcxLjE5VjExLjU2NDdIMTE4MC4zOFYxOEgxMTg5VjBIMTE2MloiIGZpbGw9IiNBMzE5NUIiLz4NCjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTE5OCAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMTIwOC4zMSAyMC44ODY0VjE2LjI1NzlIMTIxMy43MVYyNUgxMTk4VjYuNUgxMjE5LjVWMTAuNTk5OEgxMjAzLjRWMjAuODg2NEgxMjA4LjMxWiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTEyMTYgMTIuMDA0VjMwSDEyNTJWMjUuODg3M0gxMjQzLjVWMjEuNzc0NkgxMjM0LjVWMTcuMTQ3MkgxMjI1LjVWMTIuMDA0SDEyMTZaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNMTIyNSAwVjYuNDI3NzZIMTIzNC4xOVYxMS41NjQ3SDEyNDMuMzhWMThIMTI1MlYwSDEyMjVaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDEyNjEgMzApIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZD0iTTEyNzEuMzEgMjAuODg2NFYxNi4yNTc5SDEyNzYuNzFWMjVIMTI2MVY2LjVIMTI4Mi41VjEwLjU5OThIMTI2Ni40VjIwLjg4NjRIMTI3MS4zMVoiIGZpbGw9IiNBMzE5NUIiLz4NCjxwYXRoIGQ9Ik0xMjc5IDEyLjAwNFYzMEgxMzE1VjI1Ljg4NzNIMTMwNi41VjIxLjc3NDZIMTI5Ny41VjE3LjE0NzJIMTI4OC41VjEyLjAwNEgxMjc5WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTEyODggMFY2LjQyNzc2SDEyOTcuMTlWMTEuNTY0N0gxMzA2LjM4VjE4SDEzMTVWMEgxMjg4WiIgZmlsbD0iI0EzMTk1QiIvPg0KPHJlY3Qgd2lkdGg9IjU0IiBoZWlnaHQ9IjMwIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAxMzI0IDMwKSIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik0xMzM0LjMxIDIwLjg4NjRWMTYuMjU3OUgxMzM5LjcxVjI1SDEzMjRWNi41SDEzNDUuNVYxMC41OTk4SDEzMjkuNFYyMC44ODY0SDEzMzQuMzFaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNMTM0MiAxMi4wMDRWMzBIMTM3OFYyNS44ODczSDEzNjkuNVYyMS43NzQ2SDEzNjAuNVYxNy4xNDcySDEzNTEuNVYxMi4wMDRIMTM0MloiIGZpbGw9IiNBMzE5NUIiLz4NCjxwYXRoIGQ9Ik0xMzUxIDBWNi40Mjc3NkgxMzYwLjE5VjExLjU2NDdIMTM2OS4zOFYxOEgxMzc4VjBIMTM1MVoiIGZpbGw9IiNBMzE5NUIiLz4NCjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTM4NyAzMCkiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMTM5Ny4zMSAyMC44ODY0VjE2LjI1NzlIMTQwMi43MVYyNUgxMzg3VjYuNUgxNDA4LjVWMTAuNTk5OEgxMzkyLjRWMjAuODg2NEgxMzk3LjMxWiIgZmlsbD0iI0EzMTk1QiIvPg0KPHBhdGggZD0iTTE0MDUgMTIuMDA0VjMwSDE0NDFWMjUuODg3M0gxNDMyLjVWMjEuNzc0NkgxNDIzLjVWMTcuMTQ3MkgxNDE0LjVWMTIuMDA0SDE0MDVaIiBmaWxsPSIjQTMxOTVCIi8+DQo8cGF0aCBkPSJNMTQxNCAwVjYuNDI3NzZIMTQyMy4xOVYxMS41NjQ3SDE0MzIuMzhWMThIMTQ0MVYwSDE0MTRaIiBmaWxsPSIjQTMxOTVCIi8+DQo8L2c+DQo8ZGVmcz4NCjxjbGlwUGF0aCBpZD0iY2xpcDAiPg0KPHJlY3Qgd2lkdGg9IjE0NDAiIGhlaWdodD0iMzAiIGZpbGw9IndoaXRlIi8+DQo8L2NsaXBQYXRoPg0KPC9kZWZzPg0KPC9zdmc+DQo=");

/***/ }),

/***/ "./assets/images/logo.svg":
/*!********************************!*\
  !*** ./assets/images/logo.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjcwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDI3MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTM1IDIxNi43MTVDMTgzLjcwNCAyMTYuNzE1IDIyMy4xODYgMTc4LjM3NCAyMjMuMTg2IDEzMS4wNzlDMjIzLjE4NiA4My43ODM0IDE4My43MDQgNDUuNDQyOSAxMzUgNDUuNDQyOUM4Ni4yOTU3IDQ1LjQ0MjkgNDYuODEzMiA4My43ODM0IDQ2LjgxMzIgMTMxLjA3OUM0Ni44MTMyIDE3OC4zNzQgODYuMjk1NyAyMTYuNzE1IDEzNSAyMTYuNzE1WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik0xMzQuOTk3IDIxMS4wMzFDMTgwLjQ2OCAyMTEuMDMxIDIxNy4zMzEgMTc1LjIzNSAyMTcuMzMxIDEzMS4wNzlDMjE3LjMzMSA4Ni45MjIyIDE4MC40NjggNTEuMTI2MiAxMzQuOTk3IDUxLjEyNjJDODkuNTI1IDUxLjEyNjIgNTIuNjYyOCA4Ni45MjIyIDUyLjY2MjggMTMxLjA3OUM1Mi42NjI4IDE3NS4yMzUgODkuNTI1IDIxMS4wMzEgMTM0Ljk5NyAyMTEuMDMxWiIgc3Ryb2tlPSIjQTMxOTVCIiBzdHJva2Utd2lkdGg9IjIuMDc3IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4NCjxwYXRoIGQ9Ik0xMzQuOTkyIDAuMDAzMjY1MzhDMTA4LjI5NiAwLjAwMzI2NTQ2IDgyLjE5ODYgNy42OTA2NSA2MC4wMDEgMjIuMDkzM0MzNy44MDM1IDM2LjQ5NiAyMC41MDI0IDU2Ljk2NzEgMTAuMjg1NSA4MC45MTgxQzAuMDY4NjkwMyAxMDQuODY5IC0yLjYwNTAyIDEzMS4yMjQgMi42MDI0OSAxNTYuNjUxQzcuODA5OTkgMTgyLjA3NyAyMC42NjQ4IDIwNS40MzMgMzkuNTQxNSAyMjMuNzY1QzU4LjQxODEgMjQyLjA5NyA4Mi40Njg4IDI1NC41ODIgMTA4LjY1MiAyNTkuNjQxQzEzNC44MzYgMjY0LjcgMTYxLjk3NiAyNjIuMTA1IDE4Ni42NDEgMjUyLjE4NkMyMTEuMzA2IDI0Mi4yNjYgMjMyLjM4OCAyMjUuNDY3IDI0Ny4yMjIgMjAzLjkxM0MyNjIuMDU1IDE4Mi4zNTggMjY5Ljk3MyAxNTcuMDE3IDI2OS45NzUgMTMxLjA5MkMyNjkuOTc3IDExMy44NzggMjY2LjQ4NiA5Ni44MzE3IDI1OS43MDMgODAuOTI3M0MyNTIuOTIgNjUuMDIyOSAyNDIuOTc4IDUwLjU3MTcgMjMwLjQ0MyAzOC4zOTg5QzIxNy45MDkgMjYuMjI2IDIwMy4wMjggMTYuNTcgMTg2LjY1IDkuOTgyQzE3MC4yNzMgMy4zOTQwNSAxNTIuNzE5IDAuMDAzMjY1MzMgMTM0Ljk5MiAwLjAwMzI2NTM4VjAuMDAzMjY1MzhaTTEzNC45OTIgMjE3LjA1MUMxMTcuNDg0IDIxNy4wNSAxMDAuMzY5IDIxMi4wMDcgODUuODExNyAyMDIuNTZDNzEuMjU0NSAxOTMuMTEzIDU5LjkwOSAxNzkuNjg3IDUzLjIwOTcgMTYzLjk3OUM0Ni41MTA0IDE0OC4yNyA0NC43NTgzIDEzMC45ODYgNDguMTc0OCAxMTQuMzFDNTEuNTkxNCA5Ny42MzQ5IDYwLjAyMzMgODIuMzE3OSA3Mi40MDQyIDcwLjI5NkM4NC43ODUxIDU4LjI3NDEgMTAwLjU1OSA1MC4wODczIDExNy43MzEgNDYuNzcwOEMxMzQuOTAzIDQzLjQ1NDQgMTUyLjcwMyA0NS4xNTcyIDE2OC44NzggNTEuNjYzOUMxODUuMDU0IDU4LjE3MDcgMTk4Ljg4IDY5LjE4OTEgMjA4LjYwNyA4My4zMjZDMjE4LjMzNCA5Ny40NjI5IDIyMy41MjYgMTE0LjA4MyAyMjMuNTI2IDEzMS4wODVDMjIzLjUyNiAxNDIuMzc2IDIyMS4yMzcgMTUzLjU1NiAyMTYuNzg4IDE2My45ODdDMjEyLjMzOSAxNzQuNDE4IDIwNS44MTggMTgzLjg5NiAxOTcuNTk3IDE5MS44NzlDMTg5LjM3NiAxOTkuODYzIDE3OS42MTUgMjA2LjE5NSAxNjguODc0IDIxMC41MTVDMTU4LjEzMiAyMTQuODM2IDE0Ni42MTkgMjE3LjA1OSAxMzQuOTkyIDIxNy4wNThWMjE3LjA1MVoiIGZpbGw9IiNBMzE5NUIiLz4NCjxwYXRoIGQ9Ik0xMzQuNjYgMjEuOTUzMUwxMzEuNDUxIDMyLjE0NjRMMTI4LjI0MSA0Mi4zMzk2SDE0MS4wNzZMMTM3Ljg3IDMyLjE0NjRMMTM0LjY2IDIxLjk1MzFaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMTQ4Ljk3NyAzNS41Mjk3QzE0Ny44NDggMzUuNTMwMSAxNDYuNzUxIDM1Ljg5MDggMTQ1Ljg1NCAzNi41NTYzTDEzNC42NiAwTDEyMy40NiAzNi41NTYzQzEyMi41NiAzNS44OTMyIDEyMS40NjIgMzUuNTMyOCAxMjAuMzMyIDM1LjUyOTdDMTE4Ljg5OCAzNS41Mjk3IDExNy41MjIgMzYuMDgzMSAxMTYuNTA3IDM3LjA2ODNDMTE1LjQ5MyAzOC4wNTM1IDExNC45MjMgMzkuMzg5NyAxMTQuOTIzIDQwLjc4M0MxMTQuOTIzIDQyLjE3NjIgMTE1LjQ5MyA0My41MTI0IDExNi41MDcgNDQuNDk3NkMxMTcuNTIyIDQ1LjQ4MjggMTE4Ljg5OCA0Ni4wMzYyIDEyMC4zMzIgNDYuMDM2MkMxMjEuNDExIDQ2LjAzMDkgMTIyLjQ2MSA0NS43MDUgMTIzLjM0MyA0NS4xMDI2QzEyNC4yMjUgNDQuNTAwMSAxMjQuODk2IDQzLjY0OTkgMTI1LjI2NSA0Mi42NjYzSDEyNS4zMDZMMTM0LjY2MyAxMi45Mzk5TDE0NC4wMDcgNDIuNjY2M0gxNDQuMDMxQzE0NC4zOTcgNDMuNTI5OCAxNDQuOTk3IDQ0LjI4MDcgMTQ1Ljc2OCA0NC44Mzg5QzE0Ni41MzkgNDUuMzk3MiAxNDcuNDUxIDQ1Ljc0MTkgMTQ4LjQwOCA0NS44MzY0QzE0OS4zNjQgNDUuOTMwOCAxNTAuMzI5IDQ1Ljc3MTQgMTUxLjIgNDUuMzc1MkMxNTIuMDcxIDQ0Ljk3ODkgMTUyLjgxNCA0NC4zNjA3IDE1My4zNTIgNDMuNTg2M0MxNTMuODg5IDQyLjgxMiAxNTQuMiA0MS45MTA2IDE1NC4yNTEgNDAuOTc4MkMxNTQuMzAyIDQwLjA0NTggMTU0LjA5MiAzOS4xMTczIDE1My42NDMgMzguMjkxOEMxNTMuMTk0IDM3LjQ2NjMgMTUyLjUyMiAzNi43NzQ2IDE1MS43IDM2LjI5MDVDMTUwLjg3OCAzNS44MDY1IDE0OS45MzUgMzUuNTQ4MSAxNDguOTc0IDM1LjU0M0wxNDguOTc3IDM1LjUyOTdaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNNTUuMjkxOCA1NC4xNTYyTDYwLjQ0MDYgNjMuNTY2MUw2NS41ODk1IDcyLjk3Nkw3NC42NjUzIDY0LjE2MjhMNjQuOTc1MSA1OS4xNjI4TDU1LjI4NDkgNTQuMTYyOUw1NS4yOTE4IDU0LjE1NjJaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNNzUuMjk3MyA1My45MjI4Qzc0LjUwMjIgNTQuNzAwMSA3My45ODg5IDU1LjcwNzQgNzMuODM1IDU2Ljc5MjdMMzkuMzAzMiAzOC42MTI5TDU4LjAwMzkgNzIuMTUyNkM1Ni44ODAyIDcyLjMwNjIgNTUuODM4OSA3Mi44MTE4IDU1LjAzODIgNzMuNTkyNkM1NC4zMjI3IDc0LjI1ODQgNTMuODA5NCA3NS4xMDIzIDUzLjU1NDIgNzYuMDMyMkM1My4yOTg5IDc2Ljk2MiA1My4zMTE2IDc3Ljk0MjEgNTMuNTkwOCA3OC44NjU0QzUzLjg3IDc5Ljc4ODcgNTQuNDA1MSA4MC42MTk4IDU1LjEzNzUgODEuMjY4QzU1Ljg3IDgxLjkxNjIgNTYuNzcxNyA4Mi4zNTY2IDU3Ljc0NDMgODIuNTQxMUM1OC43MTY5IDgyLjcyNTYgNTkuNzIzIDgyLjY0NzEgNjAuNjUyOCA4Mi4zMTQyQzYxLjU4MjUgODEuOTgxMyA2Mi40MDAzIDgxLjQwNjggNjMuMDE2OCA4MC42NTM0QzYzLjYzMzMgNzkuOSA2NC4wMjQ5IDc4Ljk5NjYgNjQuMTQ4NyA3OC4wNDE4QzY0LjI3MjYgNzcuMDg3IDY0LjEyNCA3Ni4xMTc2IDYzLjcxOTIgNzUuMjM5Mkw2My43Mzk4IDc1LjIxNTlMNDguNzExOSA0Ny43Njk1TDc2Ljk3NTggNjIuMzY5NFY2Mi4zNDk0Qzc3Ljk1NTUgNjIuNzkzMSA3OS4wNTE1IDYyLjkzNTEgODAuMTE2NyA2Mi43NTY0QzgxLjE4MTkgNjIuNTc3NiA4Mi4xNjUzIDYyLjA4NjYgODIuOTM0OCA2MS4zNDk0QzgzLjQ1OTIgNjAuODY2NiA4My44Nzg4IDYwLjI4NjggODQuMTY4NyA1OS42NDRDODQuNDU4NiA1OS4wMDEyIDg0LjYxMyA1OC4zMDg2IDg0LjYyMjcgNTcuNjA2OUM4NC42MzIzIDU2LjkwNTMgODQuNDk3MiA1Ni4yMDg4IDg0LjIyNTEgNTUuNTU4N0M4My45NTMgNTQuOTA4NiA4My41NDk2IDU0LjMxODEgODMuMDM4NyA1My44MjE5QzgyLjUyNzcgNTMuMzI1NyA4MS45MTk1IDUyLjkzMzkgODEuMjUwMSA1Mi42Njk4QzgwLjU4MDYgNTIuNDA1NiA3OS44NjM0IDUyLjI3NDMgNzkuMTQwOSA1Mi4yODM3Qzc4LjQxODMgNTIuMjkzMSA3Ny43MDUgNTIuNDQzIDc3LjA0MzEgNTIuNzI0NUM3Ni4zODEyIDUzLjAwNiA3NS43ODQxIDUzLjQxMzUgNzUuMjg3IDUzLjkyMjhINzUuMjk3M1oiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0yMi42MDY3IDEzMS40MjJMMzMuMTAzNSAxMzQuNTM1TDQzLjYwMDQgMTM3LjY1MlYxMjUuMTg5TDMzLjEwMzUgMTI4LjMwNUwyMi42MDY3IDEzMS40MjJaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMzYuNTg0NSAxMTcuNTEyQzM2LjU4NDcgMTE4LjYwOSAzNi45NTM1IDExOS42NzUgMzcuNjM0OCAxMjAuNTQ5TDAgMTMxLjQxOUwzNy42NTIgMTQyLjI5NUMzNi45NjQ5IDE0My4xNyAzNi41OTIzIDE0NC4yMzkgMzYuNTkxMyAxNDUuMzM5QzM2LjU5MTMgMTQ2LjczMiAzNy4xNjEzIDE0OC4wNjggMzguMTc1OCAxNDkuMDUzQzM5LjE5MDMgMTUwLjAzOSA0MC41NjYzIDE1MC41OTIgNDIuMDAxMSAxNTAuNTkyQzQzLjQzNTggMTUwLjU5MiA0NC44MTE4IDE1MC4wMzkgNDUuODI2MyAxNDkuMDUzQzQ2Ljg0MDkgMTQ4LjA2OCA0Ny40MTA4IDE0Ni43MzIgNDcuNDEwOCAxNDUuMzM5QzQ3LjQwNzMgMTQ0LjI4OCA0Ny4wNzI0IDE0My4yNjQgNDYuNDUxMyAxNDIuNDA0QzQ1LjgzMDMgMTQxLjU0NCA0NC45NTI4IDE0MC44OSA0My45MzcgMTQwLjUyOVYxNDAuNDk1TDEzLjMxMTYgMTMxLjQxOUw0My45MzcgMTIyLjMzNlYxMjIuMzA2QzQ0Ljk1MzEgMTIxLjk0OSA0NS44MzIgMTIxLjI5OCA0Ni40NTUgMTIwLjQ0MUM0Ny4wNzggMTE5LjU4NCA0Ny40MTUyIDExOC41NjEgNDcuNDIxMSAxMTcuNTEyQzQ3LjQyMTEgMTE2LjgyMiA0Ny4yODEyIDExNi4xMzkgNDcuMDA5MyAxMTUuNTAyQzQ2LjczNzUgMTE0Ljg2NSA0Ni4zMzkgMTE0LjI4NSA0NS44MzY2IDExMy43OThDNDUuMzM0MyAxMTMuMzEgNDQuNzM3OSAxMTIuOTIzIDQ0LjA4MTYgMTEyLjY1OUM0My40MjUyIDExMi4zOTUgNDIuNzIxOCAxMTIuMjU5IDQyLjAxMTQgMTEyLjI1OUM0MS4zMDA5IDExMi4yNTkgNDAuNTk3NSAxMTIuMzk1IDM5Ljk0MTEgMTEyLjY1OUMzOS4yODQ4IDExMi45MjMgMzguNjg4NCAxMTMuMzEgMzguMTg2MSAxMTMuNzk4QzM3LjY4MzggMTE0LjI4NSAzNy4yODUzIDExNC44NjUgMzcuMDEzNCAxMTUuNTAyQzM2Ljc0MTUgMTE2LjEzOSAzNi42MDE2IDExNi44MjIgMzYuNjAxNiAxMTcuNTEySDM2LjU4NDVaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNNTUuNzY5IDIwOC40ODVMNjUuNDQ4OSAyMDMuNDg1TDc1LjEzOTEgMTk4LjQ4NUw2Ni4wNjM0IDE4OS42NzFMNjAuOTE0NSAxOTkuMDg4TDU1Ljc2OSAyMDguNDg1WiIgZmlsbD0iIzAwQTE5QSIvPg0KPHBhdGggZD0iTTU1LjUyOSAxODkuMDU1QzU2LjMyNjIgMTg5LjgzMiA1Ny4zNjQ3IDE5MC4zMzQgNTguNDg0NCAxOTAuNDgyTDM5Ljc4MDMgMjI0LjAyNUw3NC4zMTg5IDIwNS44NThDNzQuNDcyNCAyMDYuOTUgNzQuOTg4MSAyMDcuOTYzIDc1Ljc4ODEgMjA4Ljc0NUM3Ni44MDc5IDIwOS43MDggNzguMTc3MiAyMTAuMjQzIDc5LjU5OTggMjEwLjIzM0M4MS4wMjI0IDIxMC4yMjMgODIuMzg0IDIwOS42NyA4My4zOSAyMDguNjkzQzg0LjM5NTkgMjA3LjcxNyA4NC45NjU0IDIwNi4zOTQgODQuOTc1MyAyMDUuMDEzQzg0Ljk4NTIgMjAzLjYzMSA4NC40MzQ2IDIwMi4zMDIgODMuNDQyNyAyMDEuMzExQzgyLjY3MjQgMjAwLjU3NSA4MS42ODkxIDIwMC4wODUgODAuNjI0MyAxOTkuOTA3Qzc5LjU1OTQgMTk5LjcyOCA3OC40NjM3IDE5OS44NjkgNzcuNDgzNyAyMDAuMzExTDc3LjQ1OTcgMjAwLjI4MUw0OS4xOTU4IDIxNC44ODFMNjQuMjMwNiAxODcuNDM1QzY0LjY4NyAxODYuNDg1IDY0LjgzMjkgMTg1LjQyMSA2NC42NDg4IDE4NC4zODhDNjQuNDY0NyAxODMuMzU1IDYzLjk1OTQgMTgyLjQwMSA2My4yMDA4IDE4MS42NTVDNjIuNjk4NiAxODEuMTY3IDYyLjEwMjQgMTgwLjc4IDYxLjQ0NjEgMTgwLjUxNUM2MC43ODk4IDE4MC4yNTEgNjAuMDg2NCAxODAuMTE1IDU5LjM3NTkgMTgwLjExNUM1OC42NjU0IDE4MC4xMTQgNTcuOTYxOCAxODAuMjUgNTcuMzA1MyAxODAuNTE0QzU2LjY0ODggMTgwLjc3NyA1Ni4wNTIyIDE4MS4xNjQgNTUuNTQ5NiAxODEuNjUyQzU1LjA0NjkgMTgyLjEzOSA1NC42NDgyIDE4Mi43MTggNTQuMzc2IDE4My4zNTZDNTQuMTAzOCAxODMuOTkzIDUzLjk2MzUgMTg0LjY3NiA1My45NjMyIDE4NS4zNjZDNTMuOTYyOSAxODYuMDU2IDU0LjEwMjUgMTg2LjczOSA1NC4zNzQxIDE4Ny4zNzdDNTQuNjQ1NyAxODguMDE0IDU1LjA0NCAxODguNTkzIDU1LjU0NjEgMTg5LjA4Mkw1NS41MjkgMTg5LjA1NVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0xMzUuMzM3IDI0MC4yMjRMMTM4LjU0MyAyMzAuMDM1TDE0MS43NTIgMjE5Ljg0MUgxMjguOTE4TDEzMi4xMjcgMjMwLjAzNUwxMzUuMzM3IDI0MC4yMjRaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMTIxLjAxMiAyMjYuNjUxQzEyMi4xNDEgMjI2LjY1MSAxMjMuMjM5IDIyNi4yOTMgMTI0LjEzOSAyMjUuNjMxTDEzNS4zNCAyNjIuMTgxTDE0Ni41MyAyMjUuNjE4QzE0Ny40MyAyMjYuMjg1IDE0OC41MzEgMjI2LjY0NyAxNDkuNjY0IDIyNi42NDhDMTUxLjA5OCAyMjYuNjQ4IDE1Mi40NzQgMjI2LjA5NCAxNTMuNDg5IDIyNS4xMDlDMTU0LjUwMyAyMjQuMTI0IDE1NS4wNzMgMjIyLjc4OCAxNTUuMDczIDIyMS4zOTVDMTU1LjA3MyAyMjAuMDAxIDE1NC41MDMgMjE4LjY2NSAxNTMuNDg5IDIxNy42OEMxNTIuNDc0IDIxNi42OTUgMTUxLjA5OCAyMTYuMTQxIDE0OS42NjQgMjE2LjE0MUMxNDguNTg0IDIxNi4xNDcgMTQ3LjUzMiAyMTYuNDc0IDE0Ni42NDkgMjE3LjA3OUMxNDUuNzY3IDIxNy42ODMgMTQ1LjA5NiAyMTguNTM2IDE0NC43MjggMjE5LjUyMUgxNDQuNjg2TDEzNS4zNCAyNDkuMjU0TDEyNS45ODkgMjE5LjUyNUgxMjUuOTU4QzEyNS41OTIgMjE4LjY2IDEyNC45OTEgMjE3LjkwOCAxMjQuMjIgMjE3LjM0OUMxMjMuNDQ4IDIxNi43OSAxMjIuNTM1IDIxNi40NDUgMTIxLjU3NyAyMTYuMzUxQzEyMC42MTkgMjE2LjI1NyAxMTkuNjUzIDIxNi40MTcgMTE4Ljc4MSAyMTYuODE0QzExNy45MSAyMTcuMjExIDExNy4xNjYgMjE3LjgzMSAxMTYuNjI5IDIxOC42MDZDMTE2LjA5MSAyMTkuMzgyIDExNS43ODEgMjIwLjI4NSAxMTUuNzMxIDIyMS4yMThDMTE1LjY4MSAyMjIuMTUyIDExNS44OTIgMjIzLjA4MSAxMTYuMzQzIDIyMy45MDdDMTE2Ljc5NCAyMjQuNzMzIDExNy40NjggMjI1LjQyNCAxMTguMjkyIDIyNS45MDhDMTE5LjExNiAyMjYuMzkxIDEyMC4wNiAyMjYuNjQ4IDEyMS4wMjIgMjI2LjY1MUgxMjEuMDEyWiIgZmlsbD0iIzAwQTE5QSIvPg0KPHBhdGggZD0iTTIxNC42OTQgMjA4LjAzNUwyMDkuNTQ1IDE5OC42MThMMjA0LjM5NiAxODkuMjA4TDE5NS4zMjEgMTk4LjAyMUwyMDUuMDE4IDIwMy4wMjFMMjE0LjcwOCAyMDguMDIxTDIxNC42OTQgMjA4LjAzNVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0xOTQuNjk2IDIwOC4yNjVDMTk1LjQ5MiAyMDcuNDg4IDE5Ni4wMDUgMjA2LjQ4IDE5Ni4xNTggMjA1LjM5NUwyMzAuNjk3IDIyMy41NTVMMjExLjk5IDE5MC4wMTJDMjEzLjExMyAxODkuODY2IDIxNC4xNTUgMTg5LjM2NCAyMTQuOTU1IDE4OC41ODVDMjE1LjY3MSAxODcuOTE5IDIxNi4xODQgMTg3LjA3NSAyMTYuNDM5IDE4Ni4xNDVDMjE2LjY5NCAxODUuMjE1IDIxNi42ODEgMTg0LjIzNSAyMTYuNDAxIDE4My4zMTFDMjE2LjEyMSAxODIuMzg4IDIxNS41ODYgMTgxLjU1NyAyMTQuODUzIDE4MC45MDlDMjE0LjEyMSAxODAuMjYxIDIxMy4yMTkgMTc5LjgyMSAyMTIuMjQ2IDE3OS42MzdDMjExLjI3MyAxNzkuNDUzIDIxMC4yNjcgMTc5LjUzMiAyMDkuMzM4IDE3OS44NjVDMjA4LjQwOCAxODAuMTk4IDIwNy41OSAxODAuNzczIDIwNi45NzQgMTgxLjUyN0MyMDYuMzU4IDE4Mi4yODEgMjA1Ljk2NyAxODMuMTg0IDIwNS44NDMgMTg0LjEzOUMyMDUuNzIgMTg1LjA5NCAyMDUuODY5IDE4Ni4wNjMgMjA2LjI3NCAxODYuOTQyTDIwNi4yNSAxODYuOTY1TDIyMS4yODUgMjE0LjQwOEwxOTMuMDI0IDE5OS44MThWMTk5LjgzOEMxOTIuMTM2IDE5OS40NzggMTkxLjE2NCAxOTkuMzU5IDE5MC4yMTEgMTk5LjQ5M0MxODkuMjU5IDE5OS42MjcgMTg4LjM2MSAyMDAuMDEgMTg3LjYxNSAyMDAuNjAxQzE4Ni44NjkgMjAxLjE5MiAxODYuMzAyIDIwMS45NjggMTg1Ljk3NSAyMDIuODQ3QzE4NS42NDggMjAzLjcyNiAxODUuNTcyIDIwNC42NzUgMTg1Ljc1NyAyMDUuNTkyQzE4NS45NDEgMjA2LjUxIDE4Ni4zNzkgMjA3LjM2MSAxODcuMDIzIDIwOC4wNTZDMTg3LjY2NyAyMDguNzUxIDE4OC40OTMgMjA5LjI2MyAxODkuNDEzIDIwOS41MzhDMTkwLjMzMyAyMDkuODEzIDE5MS4zMTMgMjA5Ljg0IDE5Mi4yNDggMjA5LjYxNkMxOTMuMTgyIDIwOS4zOTIgMTk0LjAzNyAyMDguOTI2IDE5NC43MiAyMDguMjY4TDE5NC42OTYgMjA4LjI2NVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0yNDcuMzc5IDEzMC43NjVMMjM2Ljg4NiAxMjcuNjQ5TDIyNi4zODkgMTI0LjUzMlYxMzYuOTk1TDIzNi44ODYgMTMzLjg4MkwyNDcuMzc5IDEzMC43NjVaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMjMzLjQxMiAxNDQuNjY5QzIzMy40MDkgMTQzLjU3MiAyMzMuMDM4IDE0Mi41MDYgMjMyLjM1NSAxNDEuNjMyTDI3MCAxMzAuNzYyTDIzMi4zNDggMTE5Ljg4OUMyMzMuMDM0IDExOS4wMTMgMjMzLjQwNiAxMTcuOTQzIDIzMy40MDkgMTE2Ljg0MkMyMzMuNDA5IDExNS40NDkgMjMyLjgzOSAxMTQuMTEzIDIzMS44MjQgMTEzLjEyOEMyMzAuODEgMTEyLjE0MiAyMjkuNDM0IDExMS41ODkgMjI3Ljk5OSAxMTEuNTg5QzIyNi41NjQgMTExLjU4OSAyMjUuMTg4IDExMi4xNDIgMjI0LjE3MyAxMTMuMTI4QzIyMy4xNTkgMTE0LjExMyAyMjIuNTg5IDExNS40NDkgMjIyLjU4OSAxMTYuODQyQzIyMi41OTUgMTE3Ljg5MiAyMjIuOTMzIDExOC45MTUgMjIzLjU1NiAxMTkuNzczQzIyNC4xNzkgMTIwLjYzMSAyMjUuMDU3IDEyMS4yODMgMjI2LjA3MyAxMjEuNjQyVjEyMS42NzVMMjU2LjY4NSAxMzAuNzYyTDIyNi4wNjYgMTM5LjgzOVYxMzkuODYyQzIyNS4wNTEgMTQwLjIyMiAyMjQuMTczIDE0MC44NzQgMjIzLjU1IDE0MS43MzJDMjIyLjkyNyAxNDIuNTkgMjIyLjU5IDE0My42MTIgMjIyLjU4MiAxNDQuNjYyQzIyMi41ODIgMTQ2LjA1NSAyMjMuMTUyIDE0Ny4zOTEgMjI0LjE2NyAxNDguMzc3QzIyNS4xODEgMTQ5LjM2MiAyMjYuNTU3IDE0OS45MTUgMjI3Ljk5MiAxNDkuOTE1QzIyOS40MjcgMTQ5LjkxNSAyMzAuODAzIDE0OS4zNjIgMjMxLjgxNyAxNDguMzc3QzIzMi44MzIgMTQ3LjM5MSAyMzMuNDAyIDE0Ni4wNTUgMjMzLjQwMiAxNDQuNjYyTDIzMy40MTIgMTQ0LjY2OVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0yMTQuMjMxIDUzLjY5MjlMMjA0LjUzNCA1OC42OTI5TDE5NC44NDQgNjMuNjkyOEwyMDMuOTIgNzIuNTA2MUwyMDkuMDY4IDYzLjA5NjFMMjE0LjIxNyA1My42ODYyTDIxNC4yMzEgNTMuNjkyOVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0yMTQuNDY4IDczLjExOTRDMjEzLjY2OCA3Mi4zNDY0IDIxMi42MyA3MS44NDc5IDIxMS41MTIgNzEuNjk5NEwyMzAuMjIgMzguMTY2NEwxOTUuNjc4IDU2LjMyNjJDMTk1LjUyNCA1NS4yMzY2IDE5NS4wMDggNTQuMjI1NSAxOTQuMjA5IDUzLjQ0NjJDMTkzLjE5NCA1Mi40NjE0IDE5MS44MTcgNTEuOTA4NSAxOTAuMzgyIDUxLjkwOTFDMTg4Ljk0OCA1MS45MDk3IDE4Ny41NzIgNTIuNDYzOCAxODYuNTU4IDUzLjQ0OTVDMTg1LjU0MyA1NC40MzUzIDE4NC45NzQgNTUuNzcxOCAxODQuOTc1IDU3LjE2NTJDMTg0Ljk3NSA1OC41NTg2IDE4NS41NDYgNTkuODk0NiAxODYuNTYxIDYwLjg3OTVDMTg3LjMyOSA2MS42MTYyIDE4OC4zMTIgNjIuMTA2OSAxODkuMzc2IDYyLjI4NTZDMTkwLjQ0IDYyLjQ2NDQgMTkxLjUzNCA2Mi4zMjI3IDE5Mi41MTMgNjEuODc5NUwxOTIuNTM3IDYxLjkwMjhMMjIwLjgwMSA0Ny4zMDk2TDIwNS43NzMgNzQuNzUyN1Y3NC43NzI3QzIwNS4zMTUgNzUuNzIzOCAyMDUuMTY4IDc2Ljc4ODQgMjA1LjM1MiA3Ny44MjNDMjA1LjUzNyA3OC44NTc2IDIwNi4wNDMgNzkuODEyNiAyMDYuODAzIDgwLjU1OTNDMjA3LjMwNSA4MS4wNDY5IDIwNy45MDIgODEuNDMzNyAyMDguNTU5IDgxLjY5NzRDMjA5LjIxNSA4MS45NjExIDIwOS45MTkgODIuMDk2NyAyMTAuNjI5IDgyLjA5NjRDMjExLjM0IDgyLjA5NjEgMjEyLjA0MyA4MS45NTk5IDIxMi42OTkgODEuNjk1NkMyMTMuMzU2IDgxLjQzMTMgMjEzLjk1MiA4MS4wNDQgMjE0LjQ1NCA4MC41NTZDMjE0Ljk1NiA4MC4wNjc5IDIxNS4zNTUgNzkuNDg4NSAyMTUuNjI2IDc4Ljg1MUMyMTUuODk4IDc4LjIxMzUgMjE2LjAzNyA3Ny41MzAyIDIxNi4wMzcgNzYuODQwM0MyMTYuMDM3IDc2LjE1MDQgMjE1Ljg5NiA3NS40NjczIDIxNS42MjQgNzQuODNDMjE1LjM1MiA3NC4xOTI3IDIxNC45NTMgNzMuNjEzNyAyMTQuNDUxIDczLjEyNkwyMTQuNDY4IDczLjExOTRaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMTc3LjQ5MiA1NS4zMjk0TDE3NS43NzUgNTQuNjM5NEwxNzkuNDQ4IDQ1Ljk3MjhDMTgwLjIzMyA0NC4xMTU5IDE4MC4yMjYgNDIuMDMyMyAxNzkuNDI5IDQwLjE4MDRDMTc4LjYzMSAzOC4zMjg1IDE3Ny4xMDkgMzYuODYgMTc1LjE5NyAzNi4wOTc5QzE3My4yODUgMzUuMzM1OSAxNzEuMTM5IDM1LjM0MjcgMTY5LjIzMiAzNi4xMTY5QzE2Ny4zMjUgMzYuODkxMSAxNjUuODEzIDM4LjM2OTMgMTY1LjAyOCA0MC4yMjYyTDE2MS4zNTUgNDguODkyOEwxNTkuNjM5IDQ4LjIwNjJMMTYzLjMxMiAzOS41Mzk2QzE2NC4yODYgMzcuMjQxMSAxNjYuMTYxIDM1LjQxMjYgMTY4LjUyNCAzNC40NTY1QzE3MC44ODcgMzMuNTAwNCAxNzMuNTQ0IDMzLjQ5NDkgMTc1LjkxMSAzNC40NDEzQzE3OC4yNzggMzUuMzg3NyAxODAuMTYxIDM3LjIwODQgMTgxLjE0NSAzOS41MDI4QzE4Mi4xMyA0MS43OTczIDE4Mi4xMzYgNDQuMzc3NyAxODEuMTYxIDQ2LjY3NjJMMTc3LjQ5MiA1NS4zMjk0WiIgZmlsbD0iIzAwQTE5QSIvPg0KPHBhdGggZD0iTTE3My4zMjggNDAuNTQ2M0MxNzIuNjA5IDQwLjI1NjkgMTcxLjgzNyA0MC4xMDg0IDE3MS4wNTggNDAuMTA5M0MxNzAuMjc5IDQwLjExMDIgMTY5LjUwNyA0MC4yNjA2IDE2OC43ODggNDAuNTUxN0MxNjguMDY5IDQwLjg0MjggMTY3LjQxNiA0MS4yNjkgMTY2Ljg2NyA0MS44MDU3QzE2Ni4zMTggNDIuMzQyNSAxNjUuODgzIDQyLjk3OTMgMTY1LjU4OCA0My42Nzk2TDE2My4wODkgNDkuNTYyOEwxNzQuMDM5IDUzLjk1MjhMMTc2LjUzOCA0OC4wNjI5QzE3Ni44MzUgNDcuMzYzNiAxNzYuOTg2IDQ2LjYxNDQgMTc2Ljk4NSA0NS44NTgyQzE3Ni45ODMgNDUuMTAxOSAxNzYuODI4IDQ0LjM1MzQgMTc2LjUyOCA0My42NTU0QzE3Ni4yMjkgNDIuOTU3MyAxNzUuNzkgNDIuMzIzNSAxNzUuMjM4IDQxLjc5QzE3NC42ODYgNDEuMjU2NSAxNzQuMDMyIDQwLjgzMzkgMTczLjMxMSA0MC41NDYzSDE3My4zMjhaTTE3MC4zMDggNDcuNjcyOUMxNjkuOTk3IDQ3LjU0ODkgMTY5LjczIDQ3LjMzOCAxNjkuNTQzIDQ3LjA2NjlDMTY5LjM1NSA0Ni43OTU4IDE2OS4yNTQgNDYuNDc2NyAxNjkuMjU0IDQ2LjE1QzE2OS4yNTMgNDUuODIzNCAxNjkuMzUyIDQ1LjUwMzkgMTY5LjUzOCA0NS4yMzJDMTY5LjcyNSA0NC45NjAxIDE2OS45OSA0NC43NDggMTcwLjMwMSA0NC42MjI3QzE3MC42MTEgNDQuNDk3MyAxNzAuOTUzIDQ0LjQ2NDQgMTcxLjI4MyA0NC41Mjc5QzE3MS42MTMgNDQuNTkxNSAxNzEuOTE2IDQ0Ljc0ODcgMTcyLjE1NCA0NC45Nzk3QzE3Mi4zOTIgNDUuMjEwNyAxNzIuNTU0IDQ1LjUwNSAxNzIuNjE5IDQ1LjgyNTRDMTcyLjY4NSA0Ni4xNDU4IDE3Mi42NTEgNDYuNDc3OSAxNzIuNTIyIDQ2Ljc3OTVDMTcyLjQzOCA0Ni45Nzk5IDE3Mi4zMTUgNDcuMTYyIDE3Mi4xNTggNDcuMzE1NEMxNzIuMDAxIDQ3LjQ2ODggMTcxLjgxNCA0Ny41OTAzIDE3MS42MDkgNDcuNjcyOUMxNzEuNDAzIDQ3Ljc1NiAxNzEuMTgyIDQ3Ljc5ODggMTcwLjk1OCA0Ny43OTg4QzE3MC43MzUgNDcuNzk4OCAxNzAuNTE0IDQ3Ljc1NiAxNzAuMzA4IDQ3LjY3MjlaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMjIwLjE5NiAxMDYuNjk2TDIxOS40NzkgMTA1LjAyOUwyMjguMzczIDEwMS40MjlDMjMwLjI0MyAxMDAuNjM1IDIzMS43MTggOTkuMTYwMiAyMzIuNDc5IDk3LjMyMUMyMzMuMjQgOTUuNDgxOSAyMzMuMjI3IDkzLjQyNiAyMzIuNDQzIDkxLjU5NjFDMjMxLjY1OCA4OS43NjYyIDIzMC4xNjUgODguMzA4NiAyMjguMjg1IDg3LjUzNzRDMjI2LjQwNSA4Ni43NjYxIDIyNC4yODggODYuNzQyOCAyMjIuMzkgODcuNDcyNUwyMTMuNDg2IDkxLjA2NThMMjEyLjc3NSA4OS4zOTkxTDIyMS42NzIgODUuNzk5MkMyMjQuMDI2IDg0Ljg4NjQgMjI2LjY1NSA4NC45MDk0IDIyOC45OTEgODUuODYzM0MyMzEuMzI3IDg2LjgxNzIgMjMzLjE4MyA4OC42MjUzIDIzNC4xNTggOTAuODk3QzIzNS4xMzMgOTMuMTY4OCAyMzUuMTQ4IDk1LjcyMTcgMjM0LjIgOTguMDA0M0MyMzMuMjUzIDEwMC4yODcgMjMxLjQxOCAxMDIuMTE2IDIyOS4wOTQgMTAzLjA5NkwyMjAuMTk2IDEwNi42OTZaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMjI4LjAyIDkzLjM4NThDMjI3LjQxNSA5MS45NzU5IDIyNi4yNTggOTAuODU3IDIyNC44MDQgOTAuMjc1QzIyMy4zNSA4OS42OTMxIDIyMS43MTggODkuNjk1NyAyMjAuMjY2IDkwLjI4MjVMMjE0LjE4IDkyLjc0MjRMMjE4Ljc1MiAxMDMuMzgyTDIyNC44MDcgMTAwLjkzMkMyMjUuNTMxIDEwMC42NDUgMjI2LjE4OSAxMDAuMjIxIDIyNi43NDQgOTkuNjg1NUMyMjcuMjk4IDk5LjE0OTggMjI3LjczOCA5OC41MTI5IDIyOC4wMzggOTcuODExNEMyMjguMzM4IDk3LjEwOTkgMjI4LjQ5MiA5Ni4zNTc3IDIyOC40OTEgOTUuNTk4MUMyMjguNDkgOTQuODM4NiAyMjguMzM1IDk0LjA4NjcgMjI4LjAzMyA5My4zODU4SDIyOC4wMlpNMjIwLjY5MSA5Ni4zODU3QzIyMC41NDcgOTYuMDM2IDIyMC41MzEgOTUuNjQ4MyAyMjAuNjQ4IDk1LjI4ODhDMjIwLjc2NCA5NC45MjkzIDIyMS4wMDUgOTQuNjIwMSAyMjEuMzMgOTQuNDEzOUMyMjEuNjU1IDk0LjIwNzYgMjIyLjA0NCA5NC4xMTcxIDIyMi40MyA5NC4xNTc3QzIyMi44MTUgOTQuMTk4MyAyMjMuMTc1IDk0LjM2NzUgMjIzLjQ0NyA5NC42MzY2QzIyMy43MTkgOTQuOTA1NiAyMjMuODg2IDk1LjI1NzggMjIzLjkyMSA5NS42MzMyQzIyMy45NTUgOTYuMDA4NiAyMjMuODU1IDk2LjM4NCAyMjMuNjM2IDk2LjY5NTZDMjIzLjQxOCA5Ny4wMDcyIDIyMy4wOTUgOTcuMjM1NiAyMjIuNzIzIDk3LjM0MTlDMjIyLjM1IDk3LjQ0ODMgMjIxLjk1MSA5Ny40MjYxIDIyMS41OTQgOTcuMjc5MUMyMjEuMTg0IDk3LjEwODMgMjIwLjg1OSA5Ni43ODczIDIyMC42OTEgOTYuMzg1N1oiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0yMTIuODA2IDE3Mi43NjhMMjEzLjUxNyAxNzEuMTAyTDIyMi40NDEgMTc0LjY2OEMyMjQuMzM2IDE3NS4zNjcgMjI2LjQzNyAxNzUuMzIgMjI4LjI5NiAxNzQuNTM4QzIzMC4xNTYgMTczLjc1NiAyMzEuNjI5IDE3Mi4zMDEgMjMyLjQwMSAxNzAuNDgxQzIzMy4xNzQgMTY4LjY2MiAyMzMuMTg1IDE2Ni42MjIgMjMyLjQzMyAxNjQuNzk0QzIzMS42OCAxNjIuOTY3IDIzMC4yMjQgMTYxLjQ5NiAyMjguMzczIDE2MC42OTVMMjE5LjQ0OCAxNTcuMTI4TDIyMC4xNTkgMTU1LjQ2MkwyMjkuMDgzIDE1OS4wMjhDMjMwLjI1NSAxNTkuNDk3IDIzMS4zMjEgMTYwLjE4NSAyMzIuMjE5IDE2MS4wNTRDMjMzLjExNyAxNjEuOTIyIDIzMy44MyAxNjIuOTU0IDIzNC4zMTggMTY0LjA5QzIzNC44MDUgMTY1LjIyNiAyMzUuMDU4IDE2Ni40NDQgMjM1LjA2IDE2Ny42NzVDMjM1LjA2MyAxNjguOTA2IDIzNC44MTYgMTcwLjEyNSAyMzQuMzM0IDE3MS4yNjNDMjMzLjg1MSAxNzIuNDAxIDIzMy4xNDIgMTczLjQzNiAyMzIuMjQ4IDE3NC4zMDhDMjMxLjM1NCAxNzUuMTggMjMwLjI5MSAxNzUuODczIDIyOS4xMjEgMTc2LjM0NkMyMjcuOTUxIDE3Ni44MiAyMjYuNjk3IDE3Ny4wNjUgMjI1LjQyOSAxNzcuMDY3QzIyNC4xNjIgMTc3LjA3IDIyMi45MDYgMTc2LjgzIDIyMS43MzQgMTc2LjM2MkwyMTIuODA2IDE3Mi43NjhaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMjI4LjAyNiAxNjguNzI1QzIyOC4zMjMgMTY4LjAyNiAyMjguNDc1IDE2Ny4yNzcgMjI4LjQ3MyAxNjYuNTJDMjI4LjQ3MiAxNjUuNzY0IDIyOC4zMTcgMTY1LjAxNiAyMjguMDE3IDE2NC4zMThDMjI3LjcxNyAxNjMuNjIgMjI3LjI3OSAxNjIuOTg2IDIyNi43MjcgMTYyLjQ1MkMyMjYuMTc1IDE2MS45MTkgMjI1LjUyIDE2MS40OTYgMjI0LjggMTYxLjIwOUwyMTguNzM0IDE1OC43ODJMMjE0LjIxNCAxNjkuNDQ4TDIyMC4yNzkgMTcxLjg3MkMyMjAuOTk5IDE3Mi4xNjEgMjIxLjc3MSAxNzIuMzA5IDIyMi41NTEgMTcyLjMwOEMyMjMuMzMgMTcyLjMwNyAyMjQuMTAxIDE3Mi4xNTYgMjI0LjgyMSAxNzEuODY1QzIyNS41NCAxNzEuNTc0IDIyNi4xOTMgMTcxLjE0OCAyMjYuNzQzIDE3MC42MTJDMjI3LjI5MiAxNzAuMDc1IDIyNy43MjcgMTY5LjQzOSAyMjguMDIzIDE2OC43MzhMMjI4LjAyNiAxNjguNzI1Wk0yMjAuNjgxIDE2NS43OTJDMjIwLjc3NyAxNjUuNTY3IDIyMC45MjMgMTY1LjM2NSAyMjEuMTA5IDE2NS4yMDFDMjIxLjI5NiAxNjUuMDM4IDIyMS41MTcgMTY0LjkxNiAyMjEuNzU3IDE2NC44NDZDMjIxLjk5NyAxNjQuNzc1IDIyMi4yNSAxNjQuNzU3IDIyMi40OTkgMTY0Ljc5MkMyMjIuNzQ3IDE2NC44MjggMjIyLjk4NCAxNjQuOTE3IDIyMy4xOTMgMTY1LjA1MkMyMjMuNDAyIDE2NS4xODcgMjIzLjU3NyAxNjUuMzY2IDIyMy43MDYgMTY1LjU3NUMyMjMuODM2IDE2NS43ODQgMjIzLjkxNiAxNjYuMDE4IDIyMy45NDEgMTY2LjI2QzIyMy45NjYgMTY2LjUwMyAyMjMuOTM1IDE2Ni43NDggMjIzLjg1MSAxNjYuOTc3QzIyMy43NjcgMTY3LjIwNyAyMjMuNjMxIDE2Ny40MTYgMjIzLjQ1NCAxNjcuNTg4QzIyMy4yNTUgMTY3Ljc3OCAyMjMuMDExIDE2Ny45MTcgMjIyLjc0NCAxNjcuOTk0QzIyMi40NzcgMTY4LjA3MiAyMjIuMTk1IDE2OC4wODUgMjIxLjkyMSAxNjguMDMyQzIyMS42NDggMTY3Ljk3OSAyMjEuMzkyIDE2Ny44NjMgMjIxLjE3NSAxNjcuNjkzQzIyMC45NTggMTY3LjUyMyAyMjAuNzg3IDE2Ny4zMDQgMjIwLjY3NyAxNjcuMDU1QzIyMC41OTEgMTY2Ljg1NSAyMjAuNTQ2IDE2Ni42NCAyMjAuNTQ2IDE2Ni40MjNDMjIwLjU0NiAxNjYuMjA3IDIyMC41OTEgMTY1Ljk5MiAyMjAuNjc3IDE2NS43OTJIMjIwLjY4MVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0xNjAuNTA0IDIxMy43MDFMMTYyLjIyIDIxMy4wMDVMMTY1LjkyNCAyMjEuNjQ1QzE2Ni4zMTcgMjIyLjU2MSAxNjYuODkzIDIyMy4zOTMgMTY3LjYxNyAyMjQuMDk0QzE2OC4zNDIgMjI0Ljc5NCAxNjkuMjAxIDIyNS4zNDkgMTcwLjE0NiAyMjUuNzI3QzE3MS4wOTIgMjI2LjEwNSAxNzIuMTA1IDIyNi4yOTggMTczLjEyNyAyMjYuMjk2QzE3NC4xNDkgMjI2LjI5NCAxNzUuMTYxIDIyNi4wOTYgMTc2LjEwNSAyMjUuNzE1QzE3Ny4wNDkgMjI1LjMzMyAxNzcuOTA2IDIyNC43NzQgMTc4LjYyNyAyMjQuMDdDMTc5LjM0OCAyMjMuMzY3IDE3OS45MiAyMjIuNTMyIDE4MC4zMDkgMjIxLjYxNEMxODAuNjk4IDIyMC42OTYgMTgwLjg5NyAyMTkuNzEzIDE4MC44OTUgMjE4LjcyQzE4MC44OTMgMjE3LjcyNyAxODAuNjg5IDIxNi43NDQgMTgwLjI5NiAyMTUuODI4TDE3Ni41OTIgMjA3LjE5MUwxNzguMzA5IDIwNi40OTFMMTgyLjAxNiAyMTUuMTMxQzE4Mi41MDMgMjE2LjI2NyAxODIuNzU1IDIxNy40ODYgMTgyLjc1OCAyMTguNzE2QzE4Mi43NiAyMTkuOTQ3IDE4Mi41MTMgMjIxLjE2NiAxODIuMDMgMjIyLjMwNEMxODEuNTQ3IDIyMy40NDIgMTgwLjgzOSAyMjQuNDc3IDE3OS45NDQgMjI1LjM0OUMxNzkuMDUgMjI2LjIyMSAxNzcuOTg3IDIyNi45MTMgMTc2LjgxNyAyMjcuMzg2QzE3NS42NDcgMjI3Ljg1OSAxNzQuMzkzIDIyOC4xMDQgMTczLjEyNSAyMjguMTA3QzE3MS44NTggMjI4LjEwOSAxNzAuNjAyIDIyNy44NjkgMTY5LjQzMSAyMjcuNEMxNjguMjU5IDIyNi45MzEgMTY3LjE5MyAyMjYuMjQzIDE2Ni4yOTYgMjI1LjM3NEMxNjUuMzk4IDIyNC41MDYgMTY0LjY4NSAyMjMuNDc0IDE2NC4xOTcgMjIyLjMzOEwxNjAuNTA0IDIxMy43MDFaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMTc0LjIxIDIyMS4yOTVDMTc1LjY2MSAyMjAuNzA2IDE3Ni44MTIgMjE5LjU4MyAxNzcuNDExIDIxOC4xNzFDMTc4LjAxIDIxNi43NTkgMTc4LjAwOCAyMTUuMTc1IDE3Ny40MDYgMjEzLjc2NUwxNzQuODg3IDIwNy44ODVMMTYzLjk0NyAyMTIuMzE1TDE2Ni40NjYgMjE4LjE3OEMxNjcuMDY5IDIxOS41ODcgMTY4LjIyMyAyMjAuNzA3IDE2OS42NzUgMjIxLjI5MUMxNzEuMTI3IDIyMS44NzUgMTcyLjc1OCAyMjEuODc2IDE3NC4yMSAyMjEuMjk1Wk0xNzEuMTU5IDIxNC4xNzFDMTcxLjUyNSAyMTQuMDIgMTcxLjkzNCAyMTMuOTk3IDE3Mi4zMTUgMjE0LjEwNkMxNzIuNjk3IDIxNC4yMTYgMTczLjAyOCAyMTQuNDUgMTczLjI1MSAyMTQuNzdDMTczLjQ3NCAyMTUuMDkgMTczLjU3NiAyMTUuNDc1IDE3My41MzkgMjE1Ljg2QzE3My41MDIgMjE2LjI0NSAxNzMuMzI5IDIxNi42MDUgMTczLjA0OCAyMTYuODc5QzE3Mi43NjggMjE3LjE1MyAxNzIuMzk4IDIxNy4zMjUgMTcyLjAwMiAyMTcuMzYzQzE3MS42MDcgMjE3LjQwMiAxNzEuMjA5IDIxNy4zMDYgMTcwLjg3OCAyMTcuMDkyQzE3MC41NDcgMjE2Ljg3NyAxNzAuMzAzIDIxNi41NTggMTcwLjE4OCAyMTYuMTg4QzE3MC4wNzIgMjE1LjgxOCAxNzAuMDkzIDIxNS40MjEgMTcwLjI0NiAyMTUuMDY1QzE3MC40MjEgMjE0LjY2IDE3MC43NTIgMjE0LjM0IDE3MS4xNjkgMjE0LjE3MUgxNzEuMTU5WiIgZmlsbD0iIzAwQTE5QSIvPg0KPHBhdGggZD0iTTkyLjQxODYgMjA2LjY1MUw5NC4xMzQ5IDIwNy4zNDFMOTAuNDYyMSAyMTYuMDA4Qzg5LjY3NTUgMjE3Ljg2MiA4OS42Nzk3IDIxOS45NDQgOTAuNDczNyAyMjEuNzk1QzkxLjI2NzggMjIzLjY0NyA5Mi43ODY2IDIyNS4xMTYgOTQuNjk2MiAyMjUuODc5Qzk2LjYwNTcgMjI2LjY0MyA5OC43NDk0IDIyNi42MzkgMTAwLjY1NiAyMjUuODY4QzEwMi41NjIgMjI1LjA5NyAxMDQuMDc1IDIyMy42MjIgMTA0Ljg2MiAyMjEuNzY4TDEwOC41MjggMjEzLjEwMUwxMTAuMjQ0IDIxMy43OTFMMTA2LjU3MSAyMjIuNDU4QzEwNi4wODkgMjIzLjU5NiAxMDUuMzggMjI0LjYzMSAxMDQuNDg2IDIyNS41MDNDMTAzLjU5MSAyMjYuMzc1IDEwMi41MjkgMjI3LjA2NyAxMDEuMzU5IDIyNy41NDFDMTAwLjE4OSAyMjguMDE0IDk4LjkzNDQgMjI4LjI1OSA5Ny42NjY5IDIyOC4yNjJDOTYuMzk5NSAyMjguMjY1IDk1LjE0MzkgMjI4LjAyNSA5My45NzE5IDIyNy41NTZDOTIuNzk5OSAyMjcuMDg4IDkxLjczNDQgMjI2LjM5OSA5MC44MzYyIDIyNS41MzFDODkuOTM4MSAyMjQuNjYyIDg5LjIyNDkgMjIzLjYzMSA4OC43Mzc0IDIyMi40OTVDODguMjQ5OSAyMjEuMzU4IDg3Ljk5NzYgMjIwLjE0IDg3Ljk5NDkgMjE4LjkwOUM4Ny45OTIyIDIxNy42NzkgODguMjM5MiAyMTYuNDU5IDg4LjcyMTcgMjE1LjMyMUw5Mi40MTg2IDIwNi42NTFaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNOTYuNTgyNCAyMjEuNDMxQzk4LjAzNjkgMjIyLjAxMSA5OS42Njg5IDIyMi4wMDcgMTAxLjEyIDIyMS40MkMxMDIuNTcxIDIyMC44MzIgMTAzLjcyMyAyMTkuNzA5IDEwNC4zMjMgMjE4LjI5OEwxMDYuODIyIDIxMi40MDhMOTUuODM3NiAyMDguMDI1TDkzLjMzODYgMjEzLjkwOEM5Mi43NDA2IDIxNS4zMjEgOTIuNzQ0OSAyMTYuOTA3IDkzLjM1MDYgMjE4LjMxN0M5My45NTYzIDIxOS43MjcgOTUuMTEzOCAyMjAuODQ2IDk2LjU2ODcgMjIxLjQyOEw5Ni41ODI0IDIyMS40MzFaTTk5LjYwMzEgMjE0LjI5OEM5OS45NjUzIDIxNC40NDQgMTAwLjI2NCAyMTQuNzA4IDEwMC40NDkgMjE1LjA0NEMxMDAuNjMzIDIxNS4zOCAxMDAuNjkyIDIxNS43NjcgMTAwLjYxNiAyMTYuMTQxQzEwMC41MzkgMjE2LjUxNCAxMDAuMzMxIDIxNi44NSAxMDAuMDI4IDIxNy4wOTJDOTkuNzI0OCAyMTcuMzMzIDk5LjM0NDggMjE3LjQ2NSA5OC45NTI2IDIxNy40NjVDOTguNTYwNSAyMTcuNDY1IDk4LjE4MDQgMjE3LjMzMyA5Ny44NzcyIDIxNy4wOTJDOTcuNTc0IDIxNi44NSA5Ny4zNjY0IDIxNi41MTQgOTcuMjg5NyAyMTYuMTQxQzk3LjIxMyAyMTUuNzY3IDk3LjI3MiAyMTUuMzggOTcuNDU2NiAyMTUuMDQ0Qzk3LjY0MTIgMjE0LjcwOCA5Ny45NCAyMTQuNDQ0IDk4LjMwMjIgMjE0LjI5OEM5OC43MTkxIDIxNC4xMjkgOTkuMTg3OCAyMTQuMTI3IDk5LjYwNjUgMjE0LjI5MUw5OS42MDMxIDIxNC4yOThaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNNDkuNTk3MyAxNTUuNDI1TDUwLjMxODEgMTU3LjA5Mkw0MS40MjA5IDE2MC42ODhDMzkuNTUzMiAxNjEuNDg1IDM4LjA4MTcgMTYyLjk2IDM3LjMyMjQgMTY0Ljc5OEMzNi41NjMxIDE2Ni42MzcgMzYuNTc2NyAxNjguNjkxIDM3LjM2MDMgMTcwLjUyQzM4LjE0MzggMTcyLjM0OCAzOS42MzQ4IDE3My44MDUgNDEuNTEyOCAxNzQuNTc4QzQzLjM5MDggMTc1LjM1MSA0NS41MDYgMTc1LjM3NyA0Ny40MDM4IDE3NC42NTJMNTYuMzA4IDE3MS4wNTJMNTcuMDE4NSAxNzIuNzE4TDQ4LjExNDQgMTc2LjMyNUM0Ni45MzkyIDE3Ni44MyA0NS42NzE5IDE3Ny4xMDIgNDQuMzg3IDE3Ny4xMjVDNDMuMTAyMSAxNzcuMTQ4IDQxLjgyNTQgMTc2LjkyMSA0MC42MzE4IDE3Ni40NTlDMzkuNDM4MyAxNzUuOTk2IDM4LjM1MiAxNzUuMzA2IDM3LjQzNjYgMTc0LjQzQzM2LjUyMTMgMTczLjU1NCAzNS43OTU0IDE3Mi41MSAzNS4zMDE1IDE3MS4zNTdDMzQuODA3NiAxNzAuMjA1IDM0LjU1NTcgMTY4Ljk2OSAzNC41NjA2IDE2Ny43MjFDMzQuNTY1NSAxNjYuNDczIDM0LjgyNzEgMTY1LjIzOSAzNS4zMjk5IDE2NC4wOUMzNS44MzI4IDE2Mi45NDIgMzYuNTY2OSAxNjEuOTAyIDM3LjQ4OSAxNjEuMDMzQzM4LjQxMTIgMTYwLjE2NCAzOS41MDI5IDE1OS40ODIgNDAuNyAxNTkuMDI4TDQ5LjU5NzMgMTU1LjQyNVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik00MS43NzgyIDE2OC43MzlDNDIuMDc3MyAxNjkuNDM3IDQyLjUxNTEgMTcwLjA3MSA0My4wNjY4IDE3MC42MDVDNDMuNjE4NCAxNzEuMTM5IDQ0LjI3MyAxNzEuNTYyIDQ0Ljk5MzEgMTcxLjg1MUM0NS43MTMyIDE3Mi4xMzkgNDYuNDg0OCAxNzIuMjg2IDQ3LjI2MzcgMTcyLjI4NUM0OC4wNDI1IDE3Mi4yODMgNDguODEzNSAxNzIuMTMzIDQ5LjUzMjQgMTcxLjg0Mkw1NS41ODc1IDE2OS4zOTVMNTEuMDI1NiAxNTguNzYyTDQ0Ljk3NCAxNjEuMjEyQzQ0LjI1NTIgMTYxLjUwMiA0My42MDI0IDE2MS45MjcgNDMuMDUyOCAxNjIuNDYzQzQyLjUwMzIgMTYyLjk5OCA0Mi4wNjc2IDE2My42MzQgNDEuNzcwOCAxNjQuMzMyQzQxLjQ3NDEgMTY1LjAzMSA0MS4zMjIgMTY1Ljc4IDQxLjMyMzMgMTY2LjUzNkM0MS4zMjQ1IDE2Ny4yOTIgNDEuNDc5MSAxNjguMDQxIDQxLjc3ODIgMTY4LjczOVpNNDkuMTEzNyAxNjUuNzc5QzQ5LjI2NCAxNjYuMTMxIDQ5LjI4MzggMTY2LjUyNCA0OS4xNjk3IDE2Ni44ODlDNDkuMDU1NSAxNjcuMjU0IDQ4LjgxNDUgMTY3LjU3IDQ4LjQ4NzYgMTY3Ljc4MkM0OC4xNjA4IDE2Ny45OTQgNDcuNzY4MyAxNjguMDg5IDQ3LjM3NzEgMTY4LjA1MkM0Ni45ODYgMTY4LjAxNCA0Ni42MjAyIDE2Ny44NDYgNDYuMzQyMyAxNjcuNTc2QzQ2LjA2NDMgMTY3LjMwNyA0NS44OTE0IDE2Ni45NTEgNDUuODUyOCAxNjYuNTcyQzQ1LjgxNDMgMTY2LjE5MiA0NS45MTI2IDE2NS44MTEgNDYuMTMwOSAxNjUuNDkzQzQ2LjM0OTMgMTY1LjE3NiA0Ni42NzQyIDE2NC45NDIgNDcuMDUwMyAxNjQuODMxQzQ3LjQyNjUgMTY0LjcyIDQ3LjgzMDUgMTY0LjczOSA0OC4xOTM3IDE2NC44ODVDNDguNDAwMiAxNjQuOTY4IDQ4LjU4NzcgMTY1LjA4OSA0OC43NDU2IDE2NS4yNDNDNDguOTAzNSAxNjUuMzk2IDQ5LjAyODYgMTY1LjU3OCA0OS4xMTM3IDE2NS43NzlaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNNTYuOTE1OCA4OS40NjkyTDU2LjE4ODEgOTEuMTM1OUw0Ny4yNjM0IDg3LjU2OTJDNDUuMzUzOSA4Ni44MDU0IDQzLjIxMDEgODYuODA5NSA0MS4zMDM3IDg3LjU4MDZDMzkuMzk3MyA4OC4zNTE3IDM3Ljg4NDQgODkuODI2NiAzNy4wOTc4IDkxLjY4MDlDMzYuMzExMiA5My41MzUyIDM2LjMxNTQgOTUuNjE2OSAzNy4xMDk1IDk3LjQ2ODJDMzcuOTAzNSA5OS4zMTk1IDM5LjQyMjQgMTAwLjc4OSA0MS4zMzE5IDEwMS41NTJMNTAuMjU2NiAxMDUuMTEyTDQ5LjU0OTUgMTA2Ljc3OUw0MC42MjQ4IDEwMy4yMTJDMzkuNDUyOCAxMDIuNzQzIDM4LjM4NzQgMTAyLjA1NSAzNy40ODk0IDEwMS4xODZDMzYuNTkxNSAxMDAuMzE3IDM1Ljg3ODUgOTkuMjg0OSAzNS4zOTEzIDk4LjE0ODVDMzQuNDA3NCA5NS44NTM0IDM0LjQwMjYgOTMuMjcyNyAzNS4zNzgxIDkwLjk3NDJDMzYuMzUzNSA4OC42NzU3IDM4LjIyOTMgODYuODQ3NiA0MC41OTI4IDg1Ljg5MjFDNDIuOTU2MyA4NC45MzY2IDQ1LjYxMzggODQuOTMyIDQ3Ljk4MDggODUuODc5M0w1Ni45MTU4IDg5LjQ2OTJaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNNDEuNjk1NSA5My41MTI0QzQxLjM5OCA5NC4yMTE1IDQxLjI0NTQgOTQuOTYwOCA0MS4yNDY2IDk1LjcxNzNDNDEuMjQ3OCA5Ni40NzM4IDQxLjQwMjcgOTcuMjIyNyA0MS43MDI0IDk3LjkyMDlDNDIuMDAyMiA5OC42MTkyIDQyLjQ0MDkgOTkuMjUzMiA0Mi45OTM0IDk5Ljc4NjVDNDMuNTQ1OSAxMDAuMzIgNDQuMjAxMyAxMDAuNzQyIDQ0LjkyMjEgMTAxLjAyOUw1MC45ODA3IDEwMy40NTZMNTUuNTAxNCA5Mi43ODlMNDkuNDM2IDkwLjM2MjRDNDguNzE1OCA5MC4wNzQgNDcuOTQ0IDg5LjkyNjQgNDcuMTY0OSA4OS45MjhDNDYuMzg1OSA4OS45Mjk2IDQ1LjYxNDggOTAuMDgwMyA0NC44OTU4IDkwLjM3MTdDNDQuMTc2OCA5MC42NjMgNDMuNTI0MSA5MS4wODkyIDQyLjk3NDkgOTEuNjI1OUM0Mi40MjU4IDkyLjE2MjUgNDEuOTkxIDkyLjc5OSA0MS42OTU1IDkzLjQ5OVY5My41MTI0Wk00OS4wMzQ0IDk2LjQ0NTdDNDguOTM4MSA5Ni42NzA4IDQ4Ljc5MTcgOTYuODcyNCA0OC42MDU3IDk3LjAzNkM0OC40MTk2IDk3LjE5OTcgNDguMTk4NSA5Ny4zMjEyIDQ3Ljk1ODMgOTcuMzkyQzQ3LjcxODEgOTcuNDYyNyA0Ny40NjQ3IDk3LjQ4MDkgNDcuMjE2NCA5Ny40NDUyQzQ2Ljk2ODEgOTcuNDA5NSA0Ni43MzEgOTcuMzIwOSA0Ni41MjIyIDk3LjE4NTZDNDYuMzEzNCA5Ny4wNTA0IDQ2LjEzOCA5Ni44NzE4IDQ2LjAwODcgOTYuNjYyOUM0NS44Nzk0IDk2LjQ1NCA0NS43OTk0IDk2LjIxOTggNDUuNzc0NCA5NS45NzczQzQ1Ljc0OTQgOTUuNzM0NyA0NS43ODAxIDk1LjQ4OTggNDUuODY0MiA5NS4yNjAyQzQ1Ljk0ODMgOTUuMDMwNSA0Ni4wODM4IDk0LjgyMTggNDYuMjYwOSA5NC42NDlDNDYuNDU4MyA5NC40NTY2IDQ2LjcwMTUgOTQuMzE0NSA0Ni45NjkxIDk0LjIzNTNDNDcuMjM2NiA5NC4xNTYxIDQ3LjUyMDIgOTQuMTQyMyA0Ny43OTQ2IDk0LjE5NUM0OC4wNjg5IDk0LjI0NzggNDguMzI1NyA5NC4zNjU1IDQ4LjU0MTkgOTQuNTM3N0M0OC43NTgyIDk0LjcxIDQ4LjkyNzQgOTQuOTMxNCA0OS4wMzQ0IDk1LjE4MjRDNDkuMTIgOTUuMzgyNiA0OS4xNjQxIDk1LjU5NzIgNDkuMTY0MSA5NS44MTRDNDkuMTY0MSA5Ni4wMzA4IDQ5LjEyIDk2LjI0NTUgNDkuMDM0NCA5Ni40NDU3WiIgZmlsbD0iIzAwQTE5QSIvPg0KPHBhdGggZD0iTTEwOS45MDQgNDguMjIyOEwxMDguMTg4IDQ4LjkxOTVMMTA0LjQ4MSA0MC4yNjk1QzEwNC4xMDIgMzkuMzMzOSAxMDMuNTM0IDM4LjQ4MTEgMTAyLjgxMSAzNy43NjFDMTAyLjA4OSAzNy4wNDA5IDEwMS4yMjUgMzYuNDY4IDEwMC4yNzIgMzYuMDc1N0M5OS4zMTg2IDM1LjY4MzUgOTguMjk0MiAzNS40Nzk3IDk3LjI1ODcgMzUuNDc2NUM5Ni4yMjMzIDM1LjQ3MzMgOTUuMTk3NiAzNS42NzA1IDk0LjI0MTYgMzYuMDU2OEM5My4yODU2IDM2LjQ0MzEgOTIuNDE4NSAzNy4wMTA2IDkxLjY5MSAzNy43MjYyQzkwLjk2MzYgMzguNDQxNyA5MC4zOTAzIDM5LjI5MSA5MC4wMDQ5IDQwLjIyNDJDODkuNjE5NCA0MS4xNTc0IDg5LjQyOTQgNDIuMTU1OSA4OS40NDYxIDQzLjE2MTNDODkuNDYyNyA0NC4xNjY3IDg5LjY4NTcgNDUuMTU4OCA5MC4xMDE4IDQ2LjA3OTVMOTMuODE1OSA1NC43MTk0TDkyLjA5OTYgNTUuNDA5NEw4OC4zOTU4IDQ2Ljc2OTVDODcuODg2NSA0NS42MzAxIDg3LjYxNTUgNDQuNDAzNyA4Ny41OTg2IDQzLjE2MTdDODcuNTgxOCA0MS45MTk2IDg3LjgxOTQgNDAuNjg2NyA4OC4yOTc3IDM5LjUzNDdDODguNzc2IDM4LjM4MjcgODkuNDg1NCAzNy4zMzQ1IDkwLjM4NDYgMzYuNDUxMUM5MS4yODM4IDM1LjU2NzcgOTIuMzU1IDM0Ljg2NjcgOTMuNTM1NyAzNC4zODlDOTQuNzE2NSAzMy45MTEzIDk1Ljk4MzMgMzMuNjY2MyA5Ny4yNjI0IDMzLjY2ODNDOTguNTQxNSAzMy42NzAzIDk5LjgwNzUgMzMuOTE5MyAxMDAuOTg3IDM0LjQwMDdDMTAyLjE2NiAzNC44ODIyIDEwMy4yMzUgMzUuNTg2NSAxMDQuMTMxIDM2LjQ3MjdDMTA1LjAyNyAzNy4zNTg5IDEwNS43MzMgMzguNDA5MyAxMDYuMjA4IDM5LjU2MjlMMTA5LjkwNCA0OC4yMjI4WiIgZmlsbD0iIzAwQTE5QSIvPg0KPHBhdGggZD0iTTk2LjE5ODIgNDAuNjI2MkM5NS40NzkgNDAuOTE2NiA5NC44MjU4IDQxLjM0MTggOTQuMjc1OSA0MS44Nzc1QzkzLjcyNjEgNDIuNDEzMiA5My4yOTAzIDQzLjA0ODggOTIuOTkzNSA0My43NDgxQzkyLjY5NjcgNDQuNDQ3NCA5Mi41NDQ3IDQ1LjE5NjcgOTIuNTQ2MyA0NS45NTNDOTIuNTQ3OCA0Ni43MDk0IDkyLjcwMjggNDcuNDU4IDkzLjAwMjUgNDguMTU2Mkw5NS41MjIgNTQuMDM2MUwxMDYuNDcyIDQ5LjYwNjFMMTAzLjk1MiA0My43MjYyQzEwMy42NTMgNDMuMDI3OCAxMDMuMjE1IDQyLjM5MzUgMTAyLjY2NCA0MS44NTk1QzEwMi4xMTIgNDEuMzI1NiAxMDEuNDU4IDQwLjkwMjQgMTAwLjczOCA0MC42MTQyQzEwMC4wMTcgNDAuMzI2IDk5LjI0NTkgNDAuMTc4NCA5OC40NjcgNDAuMTc5OUM5Ny42ODgxIDQwLjE4MTQgOTYuOTE3MSA0MC4zMzE5IDk2LjE5ODIgNDAuNjIyOVY0MC42MjYyWk05OS4yNDYzIDQ3Ljc0OTVDOTguOTMzMSA0Ny44OCA5OC41ODcgNDcuOTE2OSA5OC4yNTIxIDQ3Ljg1NTdDOTcuOTE3MSA0Ny43OTQ0IDk3LjYwODYgNDcuNjM3NyA5Ny4zNjU3IDQ3LjQwNTVDOTcuMTIyOCA0Ny4xNzM0IDk2Ljk1NjYgNDYuODc2MiA5Ni44ODgzIDQ2LjU1MkM5Ni44MiA0Ni4yMjc3IDk2Ljg1MjYgNDUuODkxMSA5Ni45ODIgNDUuNTg0OUM5Ny4xMTE0IDQ1LjI3ODggOTcuMzMxOCA0NS4wMTY5IDk3LjYxNSA0NC44MzI4Qzk3Ljg5ODIgNDQuNjQ4NyA5OC4yMzE1IDQ0LjU1MDcgOTguNTcyMyA0NC41NTEyQzk4LjkxMzEgNDQuNTUxNyA5OS4yNDYxIDQ0LjY1MDcgOTkuNTI4NyA0NC44MzU2Qzk5LjgxMTQgNDUuMDIwNSAxMDAuMDMxIDQ1LjI4MyAxMDAuMTU5IDQ1LjU4OTVDMTAwLjI0NiA0NS43ODk1IDEwMC4yOSA0Ni4wMDQxIDEwMC4yOTEgNDYuMjIxQzEwMC4yOTIgNDYuNDM3OCAxMDAuMjQ5IDQ2LjY1MjcgMTAwLjE2NCA0Ni44NTMzQzEwMC4wNzkgNDcuMDUzOSA5OS45NTQ1IDQ3LjIzNjMgOTkuNzk3IDQ3LjM5MDFDOTkuNjM5NiA0Ny41NDM5IDk5LjQ1MjQgNDcuNjY2IDk5LjI0NjMgNDcuNzQ5NVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0xNTYuNDA5IDE4OS4zMDJDMTQ5LjY2NSAxOTEuNDQ1IDE0Mi42NDkgMTkyLjY3OSAxMzUuNTYgMTkyLjk2OEMxMjguMjIxIDE5My4yNzYgMTIwLjg3NCAxOTIuNjAzIDExMy43MjUgMTkwLjk2OEMxMDYuNTcyIDE4OS4zNzUgOTkuODQzNSAxODYuMzQyIDkzLjk3MzggMTgyLjA2NUM4Ny44NDggMTc3LjQ3NyA4Mi45MTc5IDE3MS41NTYgNzkuNTgxIDE2NC43NzlDNzUuNTY3MSAxNTYuMzE5IDczLjU2NTYgMTQ3LjA5MSA3My43MjUgMTM3Ljc3OUM3My40MzM0IDEyOS41NTIgNzQuODAxMiAxMjEuMzQ5IDc3Ljc1MTQgMTEzLjYzMkM4Mi44ODUyIDEwMC4yMiA5My4yMjI5IDg5LjI5MzkgMTA2LjU1MSA4My4xOTI2QzExMy4xNzQgODAuMDk5OSAxMjAuMjUyIDc4LjAyMyAxMjcuNTMxIDc3LjAzNkMxMzUuMDU2IDc2LjAxMDYgMTQyLjY5NSA3Ni4wNDg4IDE1MC4yMSA3Ny4xNDk0QzE1Ny45OTUgNzguMjc1MiAxNjUuNTg2IDgwLjQyNzMgMTcyLjc3MiA4My41NDZDMTcxLjQ2NSA4OC45MTkzIDE3MC4yMDcgOTQuMjg5MiAxNjguOTk2IDk5LjY1NThDMTY3Ljc4NiAxMDUuMDIyIDE2Ni42MDYgMTEwLjQ2NyAxNjUuNDU3IDExNS45ODlWMTE2LjIyNkwxNjAuMzM5IDExNi40NjJMMTQ1LjQ1OSAxMTYuNjk5QzE0NC4xNTkgMTE2LjY5OSAxNDMuNTA5IDExNS45MSAxNDMuNTA5IDExNC4zMzJWMTAxLjc4NkMxNDMuNTE1IDEwMS40NjggMTQzLjYwOCAxMDEuMTU3IDE0My43OCAxMDAuODg2QzE0My45NTEgMTAwLjYxNSAxNDQuMTk0IDEwMC4zOTQgMTQ0LjQ4NCAxMDAuMjQ2QzE0NS4xOTEgOTkuODU1NCAxNDUuOTkgOTkuNjUwMSAxNDYuODAzIDk5LjY1MDFDMTQ3LjYxNiA5OS42NTAxIDE0OC40MTUgOTkuODU1NCAxNDkuMTIyIDEwMC4yNDZDMTQ5LjQxMSAxMDAuMzk1IDE0OS42NTQgMTAwLjYxNiAxNDkuODI1IDEwMC44ODdDMTQ5Ljk5NiAxMDEuMTU4IDE1MC4wOSAxMDEuNDY4IDE1MC4wOTcgMTAxLjc4NlYxMTAuMzEySDE1OC4zOUwxNTMuOTg5IDg4Ljc1NTlDMTUxLjA0MyA4Ny42ODc5IDE0Ny45NzMgODYuOTcyNiAxNDQuODQ4IDg2LjYyNTlDMTQxIDg2LjE1MjMgMTM3LjEwNSA4Ni4xNTIzIDEzMy4yNTYgODYuNjI1OUMxMjkuMDQzIDg3LjE0NDEgMTI0LjkzMyA4OC4yNjc1IDEyMS4wNiA4OS45NTkzQzExNi44NyA5MS43NzkgMTEzLjEyNiA5NC40NDIyIDExMC4wNzYgOTcuNzcyNUMxMDYuNTMzIDEwMS43MzUgMTAzLjgwMyAxMDYuMzE4IDEwMi4wMyAxMTEuMjc2Qzk5Ljc0NzggMTE3LjgzIDk4LjY3MTggMTI0LjcyMyA5OC44NTE1IDEzMS42MzlDOTguNDE2MyAxMzkuNzE1IDk5Ljc0NzYgMTQ3Ljc4OSAxMDIuNzU4IDE1NS4zMjlDMTA1LjA4MiAxNjAuOTEgMTA4LjgwOSAxNjUuODM4IDExMy41OTggMTY5LjY2MkMxMTguMDA2IDE3My4wMzUgMTIzLjEyNSAxNzUuNDI1IDEyOC41OTEgMTc2LjY2MkMxMzQuMDMgMTc3LjkxMSAxMzkuNTkzIDE3OC41ODEgMTQ1LjE4MSAxNzguNjYyQzE1MC4zNTcgMTc4Ljc2IDE1NS41MzMgMTc4LjQ4MyAxNjAuNjY1IDE3Ny44MzJDMTY1LjQ3MSAxNzcuMjAzIDE2OS40MTQgMTc2LjY0NyAxNzIuNDk0IDE3Ni4xNjVMMTczLjIzMiAxODEuMzc1QzE2OC4wNjggMTg0LjgyNiAxNjIuMzk2IDE4Ny40OTggMTU2LjQwOSAxODkuMzAyWiIgZmlsbD0iIzAwQTE5QSIvPg0KPHBhdGggZD0iTTcyLjA4NzggMzAxLjc5N0M2OC4yODggMjg3LjU0NyA1OS44NzEzIDI3Ny42MzEgNTAuMTE5MyAyNzcuNjMxQzM2LjgwNzggMjc3LjYzMSAyNS45OTUxIDI5Ni4wOCAyNS45OTUxIDMxOC44MTRDMjUuOTg0OCAzNDEuNTQgMzYuNzk3NSAzNTkuOTk3IDUwLjEwOSAzNTkuOTk3QzYwLjg1NjQgMzU5Ljk5NyA2OS45NzM0IDM0Ny45NzcgNzMuMDg2NyAzMzEuMzlINjAuNzI5NEM1OC42NDU4IDM0MS4xNDcgNTQuMzM0NSAzNDcuODYgNDkuMzU3MyAzNDcuODZDNDIuMzU0OCAzNDcuODYgMzYuNjU2NyAzMzQuNTU3IDM2LjY1NjcgMzE4LjE2N0MzNi42NTY3IDMwMS43ODQgNDIuMzUxNCAyODguNDgxIDQ5LjM1NzMgMjg4LjQ4MUM1My43ODE5IDI4OC40ODEgNTcuNjc3OCAyOTMuNzc0IDU5Ljk1MzYgMzAxLjgxNEw3Mi4wODc4IDMwMS43OTdaIiBmaWxsPSIjQTUxMTVCIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTk1LjI1NzcgMzM1LjMzN0g3My4wODY3QzczLjA4NjcgMzQ4LjQzNyA4Mi45MDM5IDM1OS4wNzcgOTQuOTkzNCAzNTkuMDc3QzEwNy4wODMgMzU5LjA3NyAxMTYuOSAzNDguNDM3IDExNi45IDMzNS4zMzdIMTA0LjJWMzM4LjA0N0g4NS43ODM4VjMzNS4zOEw5NS4yNTc3IDMzNS4zMzdaTTczLjA4NjcgMjg2LjAxNEg4NS43ODcyVjMzNS4zNDdINzMuMDg2N1YyODYuMDE0Wk0xMDQuMiAyOTAuNDU0SDExNi45VjMzNS4zMzdIMTA0LjJWMjkwLjQ1NFpNMTA0LjIgMzM4LjA1QzEwNC4yODcgMzQwLjUxIDEwMy4zNjcgMzQyLjkwMyAxMDEuNjQgMzQ0LjcwNkM5OS45MTQyIDM0Ni41MDggOTcuNTIyOSAzNDcuNTczIDk0Ljk5IDM0Ny42NjdDOTIuNDU3NCAzNDcuNTcxIDkwLjA2NjkgMzQ2LjUwNSA4OC4zNDE2IDM0NC43MDNDODYuNjE2MiAzNDIuOSA4NS42OTY2IDM0MC41MDcgODUuNzgzOCAzMzguMDQ3SDEwNC4yVjMzOC4wNVoiIGZpbGw9IiNBNTExNUIiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIyLjk5MyAzNTcuNTMzSDEzMy4xNUMxMzUuMjkyIDM1Mi45NSAxMzQuMzE0IDM0MS45MjMgMTM4LjIzIDM0Mi43MzdIMTQ4LjM5MUMxNTMuMTIxIDM0Mi42ODMgMTUxLjU0OSAzNDguNzcgMTUzLjQ3MSAzNjBIMTYzLjYyOEMxNjkuNzYyIDM0MS4xNjMgMTU2LjY0MyAyOTQuMTg3IDE0My4zMTEgMjkzLjQxN0MxMzUuMDY2IDI5NC41NTQgMTE3LjI2NCAzMzcuODU3IDEyMi45OTMgMzU3LjUzM1pNMTQzLjMxMSAzMTMuMTQ0QzE0MC43MDUgMzE0Ljg5NCAxMzkuMTE2IDMxOS45MjcgMTM4LjIzIDMyNy45NEMxMzguODc5IDMyOC42MTggMTM5LjY2NSAzMjkuMTU5IDE0MC41MzkgMzI5LjUyOUMxNDEuNDEzIDMyOS44OTggMTQyLjM1NiAzMzAuMDg5IDE0My4zMDkgMzMwLjA4OUMxNDQuMjYyIDMzMC4wODkgMTQ1LjIwNSAzMjkuODk4IDE0Ni4wNzkgMzI5LjUyOUMxNDYuOTUzIDMyOS4xNTkgMTQ3LjczOCAzMjguNjE4IDE0OC4zODcgMzI3Ljk0QzE0Ny44MTEgMzIwLjI4NCAxNDYuMTcgMzE1LjQgMTQzLjMxMSAzMTMuMTQ0WiIgZmlsbD0iI0E1MTE1QiIvPg0KPHBhdGggZD0iTTE3Ni4wNzUgMjgxLjA4NEgxMjguMDczVjI5MC40NTFIMTc2LjA3NVYzNTguMjczSDE4NS43MlYyOTAuNDUxSDIwOS4zMzZWMjgxLjA4NEgxNzYuMDc1WiIgZmlsbD0iI0E1MTE1QiIvPg0KPHBhdGggZD0iTTIxNC40MTYgMzQ4LjlWMjgxLjA4NEgyMjQuMDY1VjM0OC45SDI0NC44OTFWMzU4LjI3SDIxNC40MTZWMzQ4LjlaIiBmaWxsPSIjQTUxMTVCIi8+DQo8L3N2Zz4NCg==");

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

/***/ "./components/avatars/CircleAvatar.tsx":
/*!*********************************************!*\
  !*** ./components/avatars/CircleAvatar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CircleAvatar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_get_media_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/get-media-source */ "./utils/get-media-source.ts");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\avatars\\CircleAvatar.tsx";



CircleAvatar.propTypes = {
  avatar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
CircleAvatar.defaultProps = {
  avatar: null,
  size: '32'
};
let styles = {
  tailwind: {
    frame: `
      border-4
      border-accent
      min-w-min
      p-2
      rounded-full
      shadow
    `,
    container: `
      overflow-hidden
      rounded-full
    `,
    generic: {
      image: `
        max-h-full
        max-w-full
      `,
      noAvatar: `
        bg-soft
        flex
        flex-nowrap
        flex-row
        items-center
        justify-center
        text-accent
      `
    }
  }
};
function CircleAvatar({
  avatar,
  size
}) {
  const getContainerStyle = () => {
    return `
      ${styles.tailwind.container} h-${size} w-${size}
    `;
  };

  const getNoAvatarStyle = () => {
    return `
      ${styles.tailwind.generic.noAvatar} h-${size} w-${size}
    `;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: styles.tailwind.frame,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: getContainerStyle(),
      children: avatar && avatar.url ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: Object(_utils_get_media_source__WEBPACK_IMPORTED_MODULE_3__["default"])(avatar),
        alt: "Foto de usuario",
        className: styles.tailwind.generic.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: getNoAvatarStyle(),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_2__["User"], {
          size: size
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
;

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

/***/ "./components/buttons/OutlineButton.tsx":
/*!**********************************************!*\
  !*** ./components/buttons/OutlineButton.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OutlineButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\buttons\\OutlineButton.tsx";

OutlineButton.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
OutlineButton.defaultProps = {
  label: 'Outline button'
};
const classes = `
  border-2
  border-accent
  flex
  flex-row
  flex-nowrap
  font-bold
  hover:bg-accent
  hover:text-bse
  items-center
  justify-center
  p-2
  rounded-lg
  text-accent
  transition-all
`;
function OutlineButton({
  label
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: label
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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

/***/ "./components/menus/CategoriesMenu.tsx":
/*!*********************************************!*\
  !*** ./components/menus/CategoriesMenu.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoriesMenu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\menus\\CategoriesMenu.tsx";

CategoriesMenu.propTypes = {
  department: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
CategoriesMenu.defaultProps = {
  department: null
};
const classes = {
  container: `
    gap-6
    grid
    md:grid-cols-3
  `,
  item: `
    cursor-pointer
    font-bold
    text-secondary
    uppercase
  `,
  subcategories: {
    container: `
      ml-4
    `,
    item: `
      cursor-pointer
      hover:text-accent
      my-1
    `
  }
};
function CategoriesMenu({
  department
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.container,
    children: department.categories.map(category => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: `/store/products?department=${department.slug}&category=${category.slug}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: classes.item,
          children: category.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: classes.subcategories.container,
        children: category.subcategories.map(subcategory => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: `/store/products?department=${department.slug}&category=${category.slug}&subcategory=${subcategory.slug}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: classes.subcategories.item,
            children: subcategory.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, this)
        }, subcategory.slug, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 19
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, this)]
    }, category.slug, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
;

/***/ }),

/***/ "./components/menus/DepartmentsMenu.tsx":
/*!**********************************************!*\
  !*** ./components/menus/DepartmentsMenu.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DepartmentsMenu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CategoriesMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CategoriesMenu */ "./components/menus/CategoriesMenu.tsx");
/* harmony import */ var _utils_detect_touch_device__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/detect-touch-device */ "./utils/detect-touch-device.ts");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\menus\\DepartmentsMenu.tsx";





DepartmentsMenu.propTypes = {
  departments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
DepartmentsMenu.defaultProps = {
  departments: []
};
const classes = {
  container: `
    animate-expandVertically
    bg-bse
    flex
    flex-nowrap
    flex-row
    w-full
  `,
  departmentsMenu: {
    container: `
      bg-accent
      font-bold
      py-4
      md:py-7
      text-bse
      md:w-1/4
      w-1/3
    `,
    item: `
      active:bg-bse
      active:text-primary
      cursor-pointer
      flex
      flex-nowrap
      flex-row
      hover:bg-bse
      hover:text-primary
      items-center
      justify-between
      p-3
    `
  },
  categoriesMenu: {
    container: `
      flex-1
      md:px-12
      md:py-9
      p-6
    `,
    title: `
      border-b-2
      border-secondary
      font-display
      mb-6
      md:mb-9
      pb-3
      text-2xl
      text-accent
    `
  }
};
function DepartmentsMenu({
  departments
}) {
  const {
    0: department,
    1: setDepartment
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(departments[0]);

  const showCategories = (event, item) => {
    event.preventDefault();
    setDepartment(item);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: classes.departmentsMenu.container,
      children: departments.map(item => {
        return Object(_utils_detect_touch_device__WEBPACK_IMPORTED_MODULE_5__["default"])() ?
        /*#__PURE__*/
        //: on touch devices clicking on this item will show categories
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          onClick: evt => showCategories(evt, item),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: classes.departmentsMenu.item,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: item.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["ChevronRight"], {
              size: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 17
          }, this)
        }, item.slug, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 15
        }, this) :
        /*#__PURE__*/
        //: on non-touch devices clicking on this item will redirect
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: `/store/products?department=${item.slug}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            onMouseEnter: () => setDepartment(item),
            className: classes.departmentsMenu.item,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: item.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["ChevronRight"], {
              size: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 17
          }, this)
        }, item.slug, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 15
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.categoriesMenu.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: `/store/products?department=${department.slug}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: classes.categoriesMenu.title,
          children: department.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this), department && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CategoriesMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
        department: department
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }, this);
}
;

/***/ }),

/***/ "./components/navbars/Navigationbar.tsx":
/*!**********************************************!*\
  !*** ./components/navbars/Navigationbar.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigationbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\navbars\\Navigationbar.tsx";




Navigationbar.propTypes = {
  referer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
Navigationbar.defaultProps = {
  referer: ''
};
const styles = {
  tailwind: {
    pageContainer: `
      bg-bse
      flex
      flex-nowrap
      flex-row
      h-16
      items-center
      justify-between
      px-6
      relative
      shadow
      z-50
    `,
    control: `
      flex
      flex-nowrap
      flex-row
      h-full
      items-center
      justify-center
      w-16
    `
  }
};
function Navigationbar({
  children = null,
  referer
}) {
  const {
    0: backButton,
    1: setBackButton
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    //: Link perform some asynchronous tasks that triggers a warning if the
    //: component is unmounted before it was mounted (like in the case of hidding
    //: it as a result of a responsive behaviour). By using a state, we prevent
    //: this warning and just mount the back button if the component is mounted
    setBackButton( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: referer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: styles.tailwind.control,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_4__["ArrowLeft"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: styles.tailwind.pageContainer,
    children: [backButton, children && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styles.tailwind.control,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
;

/***/ }),

/***/ "./components/navbars/Omnibar.tsx":
/*!****************************************!*\
  !*** ./components/navbars/Omnibar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Omnibar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_frame_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/frame.svg */ "./assets/images/frame.svg");
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/logo.svg */ "./assets/images/logo.svg");
/* harmony import */ var _components_avatars_CircleAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/avatars/CircleAvatar */ "./components/avatars/CircleAvatar.tsx");
/* harmony import */ var _components_buttons_OutlineButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/buttons/OutlineButton */ "./components/buttons/OutlineButton.tsx");
/* harmony import */ var _components_dropdowns_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/dropdowns/Dropdown */ "./components/dropdowns/Dropdown.tsx");
/* harmony import */ var _components_menus_DepartmentsMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/menus/DepartmentsMenu */ "./components/menus/DepartmentsMenu.tsx");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/context/OrderContext */ "./context/OrderContext.tsx");


var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\navbars\\Omnibar.tsx";











Omnibar.propTypes = {
  menuEntries: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
Omnibar.defaultProps = {
  menuEntries: []
};
const classes = {
  carving: `
    bg-repeat-x
    h-8
    w-full
  `,
  container: `
    bg-bse
    flex
    flex-col
    flex-nowrap
    h-24
    md:h-28
    relative
    shadow
    w-full
    z-50
  `,
  departments: {
    container: `
      cursor-pointer
      flex
      flex-row
      flex-nowrap
      items-center
    `,
    menu: `
      absolute
      max-h-1/2
      w-full
      z-40
    `
  },
  linkGroup: {
    bag: {
      container: `
        hidden
        md:flex
        md:flex-row
        md:flex-nowrap
        md:items-center
        md:justify-center
        md:h-12
        md:relative
        md:w-12
      `,
      itemsCounter: `
        absolute
        bg-accent
        border-2
        border-bse
        flex
        flex-row
        flex-nowrap
        font-bold
        h-5
        items-center
        justify-center
        right-1
        rounded-full
        text-bse
        top-1
        w-5
      `
    },
    container: `
      flex
      flex-row
      flex-nowrap
      items-center
      justify-end
      w-1/3
    `,
    user: {
      container: `
        hidden
        md:cursor-pointer
        md:inline-block
        md:ml-4
      `
    }
  },
  logo: {
    container: `
      flex
      flex-row
      flex-nowrap
      h-12
      justify-start
      w-1/3
    `,
    image: `
      max-h-full
      max-w-full
    `
  },
  navbar: `
    flex
    flex-1
    flex-row
    flex-nowrap
    items-center
    justify-between
    px-7
  `
};
const styles = {
  carving: {
    backgroundImage: `url('${_assets_images_frame_svg__WEBPACK_IMPORTED_MODULE_4__["default"]}')`
  },
  itemsCounter: {
    fontSize: '0.75rem'
  },
  tailwind: {
    departmentsMenu: {
      menuContainer: `
        absolute
        max-h-1/2
        overflow-y-scroll
        top-24
        w-full
        z-40
      `
    }
  }
};
function Omnibar({
  menuEntries
}) {
  const {
    user
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_10__["default"]);
  const {
    order
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_11__["default"]);
  const {
    0: isMenuVisible,
    1: setIsMenuVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.carving,
        style: styles.carving
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: classes.navbar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/",
          className: classes.logo.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: classes.logo.image,
            src: _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.departments.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "hidden md:block",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dropdowns_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
              label: "Departamentos",
              onClick: () => setIsMenuVisible(!isMenuVisible)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.linkGroup.container,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "md:hidden",
            onClick: () => setIsMenuVisible(!isMenuVisible),
            children: isMenuVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["MoreHorizontal"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 21
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["MoreVertical"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: user ? '/order' : '/auth',
            className: classes.linkGroup.bag.container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["ShoppingBag"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: classes.linkGroup.bag.itemsCounter,
              style: styles.itemsCounter,
              children: order.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: user ? '/user/profile' : '/auth',
            className: classes.linkGroup.user.container,
            children: user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_avatars_CircleAvatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
              avatar: user.avatar,
              size: "8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 21
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttons_OutlineButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
              label: "Reg\xEDstrate o ingresa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, this), isMenuVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styles.tailwind.departmentsMenu.menuContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_menus_DepartmentsMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
        departments: menuEntries
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }, this)]
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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = "use-credentials";
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = "use-credentials"; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_fetch_departments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/actions/fetch-departments */ "./actions/fetch-departments.ts");
/* harmony import */ var _actions_fetch_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/actions/fetch-products */ "./actions/fetch-products.ts");
/* harmony import */ var _components_buttons_AddToBagButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/buttons/AddToBagButton */ "./components/buttons/AddToBagButton.tsx");
/* harmony import */ var _components_carousels_Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/carousels/Carousel */ "./components/carousels/Carousel.tsx");
/* harmony import */ var _components_controls_QuantitySelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/controls/QuantitySelector */ "./components/controls/QuantitySelector.js");
/* harmony import */ var _components_controls_VariantSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/controls/VariantSelector */ "./components/controls/VariantSelector.tsx");
/* harmony import */ var _components_controls_OffersSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/controls/OffersSelector */ "./components/controls/OffersSelector.tsx");
/* harmony import */ var _components_navbars_Navigationbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/navbars/Navigationbar */ "./components/navbars/Navigationbar.tsx");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/lib/apollo-client */ "./lib/apollo-client.ts");
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utils/format-price */ "./utils/format-price.ts");
/* harmony import */ var _components_navbars_Omnibar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/navbars/Omnibar */ "./components/navbars/Omnibar.tsx");

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_11__["default"]);
  const {
    0: selectedVariant,
    1: setSelectedVariant
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: selectedOffers,
    1: setSelectedOffers
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: viewportWidth,
    1: setViewportWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  useSession();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setViewportWidth(window.innerWidth);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [product.meta_title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: ["Cuatl - ", product.meta_title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }, this), product.meta_description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: product.meta_description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this), viewportWidth < 768 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbars_Navigationbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      referer: referer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }, this), viewportWidth >= 768 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbars_Omnibar__WEBPACK_IMPORTED_MODULE_14__["default"], {
      menuEntries: departments
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.details,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.carousel,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_carousels_Carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
          media: product.media
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
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
            lineNumber: 129,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mb-6",
            children: Object(_utils_format_price__WEBPACK_IMPORTED_MODULE_13__["default"])('MXN', product.price)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: product.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this), product.variants.length !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.information.section,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.information.title,
            children: "Variante"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_controls_VariantSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
            state: [selectedVariant, setSelectedVariant],
            variants: product.variants
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }, this), product.offers.length !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.information.section,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.information.title,
            children: "Ofertas"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_controls_OffersSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
            offers: product.offers,
            state: [selectedOffers, setSelectedOffers]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, this), selectedVariant && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.information.section,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.information.title,
            children: "Cantidad"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-row items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_controls_QuantitySelector__WEBPACK_IMPORTED_MODULE_7__["default"], {
              stock: selectedVariant.stock
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              className: "ml-4 text-sm text-neutral",
              children: ["\xA1", selectedVariant.stock, " disponibles!"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }, this), product && selectedVariant && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.addButton,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttons_AddToBagButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
            order: {
              offers: selectedOffers,
              product,
              variant: selectedVariant
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, this);
}
;
const getServerSideProps = async ({
  params,
  req
}) => {
  const apolloClient = Object(_lib_apollo_client__WEBPACK_IMPORTED_MODULE_12__["initializeApolloClient"])();
  const departments = await Object(_actions_fetch_departments__WEBPACK_IMPORTED_MODULE_3__["getDepartments"])(apolloClient);
  const product = await Object(_actions_fetch_products__WEBPACK_IMPORTED_MODULE_4__["getProductBySlug"])(apolloClient, params.slug);
  return {
    props: {
      departments,
      product,
      referer: req.headers.referer || '/'
    }
  };
};

/***/ }),

/***/ "./utils/detect-touch-device.ts":
/*!**************************************!*\
  !*** ./utils/detect-touch-device.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isTouchEnabled = () => {
  return 'touchstart' in window || navigator.maxTouchPoints;
};

/* harmony default export */ __webpack_exports__["default"] = (isTouchEnabled);

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2ZldGNoLWRlcGFydG1lbnRzLnRzIiwid2VicGFjazovLy8uL2FjdGlvbnMvZmV0Y2gtcHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9mZXRjaC1zZXNzaW9ucy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2ZyYW1lLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvbWVkaWFfbm90X2ZvdW5kLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F2YXRhcnMvQ2lyY2xlQXZhdGFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvQWRkVG9CYWdCdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9PdXRsaW5lQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Nhcm91c2Vscy9DYXJvdXNlbC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250cm9scy9PZmZlcnNTZWxlY3Rvci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250cm9scy9RdWFudGl0eVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udHJvbHMvVmFyaWFudFNlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3ducy9Ecm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51cy9DYXRlZ29yaWVzTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51cy9EZXBhcnRtZW50c01lbnUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFycy9OYXZpZ2F0aW9uYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhcnMvT21uaWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9BdXRoQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9PcmRlckNvbnRleHQudHN4Iiwid2VicGFjazovLy8uL2xpYi9hcG9sbG8tY2xpZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy9bc2x1Z10udHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2RldGVjdC10b3VjaC1kZXZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybWF0LXByaWNlLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2dldC1tZWRpYS1zb3VyY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWZlYXRoZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImdldERlcGFydG1lbnRzIiwiYXBvbGxvQ2xpZW50IiwiZXJyb3IiLCJkYXRhIiwicXVlcnkiLCJncWwiLCJkZXBhcnRtZW50cyIsImdldFByb2R1Y3RzUGFnZSIsImZpbHRlciIsImZvcm1hdEZpbHRlcnMiLCJmb3JtYXR0ZWRGaWx0ZXJzIiwiZGVwYXJ0bWVudCIsImNhdGVnb3J5Iiwic3ViY2F0ZWdvcnkiLCJzdGFydCIsImxpbWl0IiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiZ2V0UHJvZHVjdEJ5U2x1ZyIsInNsdWciLCJnZXRTZXNzaW9uIiwidG9rZW4iLCJ1cmwiLCJpbmNsdWRlcyIsIkFVVEhfR09PR0xFX0NBTExCQUNLIiwiQVVUSF9GQUNFQk9PS19DQUxMQkFDSyIsInJlc3BvbnNlIiwiZmV0Y2giLCJzZXNzaW9uRGF0YSIsImpzb24iLCJqd3QiLCJ1c2VyIiwiaWQiLCJ1c2VybmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiZm9ybWF0cyIsInRodW1ibmFpbCIsIkNpcmNsZUF2YXRhciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInNpemUiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJzdHlsZXMiLCJ0YWlsd2luZCIsImZyYW1lIiwiY29udGFpbmVyIiwiZ2VuZXJpYyIsImltYWdlIiwibm9BdmF0YXIiLCJnZXRDb250YWluZXJTdHlsZSIsImdldE5vQXZhdGFyU3R5bGUiLCJnZXRNZWRpYVNvdXJjZSIsIkFkZFRvQmFnQnV0dG9uIiwib3JkZXIiLCJjbGFzc2VzIiwiYWRkUHJvZHVjdFRvQmFnIiwidXNlQ29udGV4dCIsIk9yZGVyQ29udGV4dCIsImhhbmRsZXJDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YXJpYW50UXVhbnRpdHkiLCJwYXJzZUludCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImUiLCJPdXRsaW5lQnV0dG9uIiwibGFiZWwiLCJDYXJvdXNlbCIsIm1lZGlhIiwiYXJyYXkiLCJjb250cm9scyIsImJ1dHRvbiIsInZpZGVvIiwiZmlsZSIsInNldEZpbGUiLCJ1c2VTdGF0ZSIsIm1lZGlhRWxlbWVudCIsInVzZVJlZiIsInNob3dQcmV2aW91cyIsImZpbGVJbmRleCIsImluZGV4T2YiLCJsZW5ndGgiLCJzaG93TmV4dCIsIm1pbWUiLCJhbHRlcm5hdGl2ZVRleHQiLCJPZmZlcnNTZWxlY3RvciIsIm9mZmVycyIsInN0YXRlIiwic2VsZWN0ZWRPZmZlcnMiLCJzZXRTZWxlY3RlZE9mZmVycyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiYXBwbHlPZmZlciIsIm9mZmVySWQiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYXBwbGllZCIsInNlbGVjdGVkT2ZmZXIiLCJjb25jYXQiLCJtYXAiLCJvZmZlciIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIlF1YW50aXR5U2VsZWN0b3IiLCJzdG9jayIsInF1YW50aXR5Iiwic2V0UXVhbnRpdHkiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnQiLCJhcHBlYXJhbmNlIiwibnVtYmVyIiwiVmFyaWFudFNlbGVjdG9yIiwidmFyaWFudHMiLCJkZWZhdWx0SXRlbSIsIml0ZW0iLCJjb2xvclN3YXRjaCIsInNlbGVjdGVkVmFyaWFudCIsInNldFNlbGVjdGVkVmFyaWFudCIsImRyb3Bkb3duSWNvbiIsImFuaW1hdGUiLCJjdXJyZW50IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwiY29sb3IiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJwYXR0ZXJuIiwidmFyaWFudCIsIkRyb3Bkb3duIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwiYXJyb3dJY29uIiwiQ2F0ZWdvcmllc01lbnUiLCJzdWJjYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsIkRlcGFydG1lbnRzTWVudSIsImFycmF5T2YiLCJkZXBhcnRtZW50c01lbnUiLCJjYXRlZ29yaWVzTWVudSIsInRpdGxlIiwic2V0RGVwYXJ0bWVudCIsInNob3dDYXRlZ29yaWVzIiwiaXNUb3VjaEVuYWJsZWQiLCJldnQiLCJOYXZpZ2F0aW9uYmFyIiwicmVmZXJlciIsInBhZ2VDb250YWluZXIiLCJjb250cm9sIiwiYmFja0J1dHRvbiIsInNldEJhY2tCdXR0b24iLCJ1c2VFZmZlY3QiLCJPbW5pYmFyIiwibWVudUVudHJpZXMiLCJjYXJ2aW5nIiwibWVudSIsImxpbmtHcm91cCIsImJhZyIsIml0ZW1zQ291bnRlciIsImxvZ28iLCJuYXZiYXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjYXJ2aW5nSW1hZ2UiLCJmb250U2l6ZSIsIm1lbnVDb250YWluZXIiLCJBdXRoQ29udGV4dCIsImlzTWVudVZpc2libGUiLCJzZXRJc01lbnVWaXNpYmxlIiwibG9nb0ltYWdlIiwiQVBJX0RPTUFJTiIsInByb2Nlc3MiLCJQQUdFX0xJTUlUIiwiQVVUSF9GQUNFQk9PS19VUkwiLCJBVVRIX0dPT0dMRV9VUkwiLCJTVFJJUEVfUFVCTElTSEVEX0tFWSIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJzZXRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9naW4iLCJzZXNzaW9uIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiZ2V0U2Vzc2lvblN0b3JhZ2UiLCJwYXJzZSIsImdldEl0ZW0iLCJfZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSIsImdldFRva2VuIiwidXNlU2Vzc2lvbiIsImlzVXNlckxvZ2dlZEluIiwiT3JkZXJQcm92aWRlciIsInNldE9yZGVyIiwiZ2V0T3JkZXIiLCJsb2NhbFN0b3JhZ2UiLCJvIiwic2F2ZU9yZGVyIiwiY291bnRQcm9kdWN0cyIsImFjdGl2ZU9yZGVyIiwiaW5kZXhPZk9yZGVySXRlbSIsImZpbmRJbmRleCIsIm9yZGVySXRlbSIsImN1cnJlbnRRdWFudGl0eSIsInJlbW92ZVByb2R1Y3QiLCJpdGVtTnVtYmVyIiwiYWxlcnQiLCJzcGxpY2UiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwibGluayIsIkh0dHBMaW5rIiwidXJpIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCIsImluaXRpYWxTdGF0ZSIsIl9hcG9sbG9DbGllbnQiLCJleGlzdGluZ0NhY2hlIiwiZXh0cmFjdCIsInJlc3RvcmUiLCJ1c2VBcG9sbG9DbGllbnQiLCJzdG9yZSIsInVzZU1lbW8iLCJwcmVmZXRjaGVkIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJ0YXJnZXQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsIngiLCJ5IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiY2Fyb3VzZWwiLCJkZXRhaWxzIiwiaW5mb3JtYXRpb24iLCJzZWN0aW9uIiwiaGVhZGVyIiwiYWRkQnV0dG9uIiwiUHJvZHVjdERldGFpbHNQYWdlIiwidmlld3BvcnRXaWR0aCIsInNldFZpZXdwb3J0V2lkdGgiLCJpbm5lcldpZHRoIiwibWV0YV90aXRsZSIsIm1ldGFfZGVzY3JpcHRpb24iLCJmb3JtYXRQcmljZSIsInByaWNlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwiaGVhZGVycyIsIm1heFRvdWNoUG9pbnRzIiwiY3VycmVuY3lDb2RlIiwicHJpY2VXaXRoRGVjaW1hbHMiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInRvVXBwZXJDYXNlIiwibWVkaWFOb3RGb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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Ozs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3RzL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvZHVjdHMvW3NsdWddLnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIGdxbCwgTm9ybWFsaXplZENhY2hlT2JqZWN0IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuaW1wb3J0IElEZXBhcnRtZW50IGZyb20gJ0AvbW9kZWxzL0lEZXBhcnRtZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREZXBhcnRtZW50cyA9IGFzeW5jIChcclxuICBhcG9sbG9DbGllbnQ6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+XHJcbik6IFByb21pc2U8SURlcGFydG1lbnRbXT4gPT4ge1xyXG4gIGNvbnN0IHsgZXJyb3IsIGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICBxdWVyeTogZ3FsYFxyXG4gICAgICBxdWVyeSBnZXREZXBhcnRtZW50cyB7XHJcbiAgICAgICAgZGVwYXJ0bWVudHMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHNsdWdcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgc3ViY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBlcnJvciA/PyBkYXRhLmRlcGFydG1lbnRzO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIGdxbCwgTm9ybWFsaXplZENhY2hlT2JqZWN0IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuaW1wb3J0IElQcm9kdWN0IGZyb20gJ0AvbW9kZWxzL0lQcm9kdWN0JztcclxuXHJcbmludGVyZmFjZSBJUGFnZUZpbHRlciB7XHJcbiAgc3RhcnQ6IG51bWJlcjtcclxuICBsaW1pdDogbnVtYmVyO1xyXG4gIHF1ZXJ5PzogYW55XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNQYWdlID0gYXN5bmMgKFxyXG4gIGFwb2xsb0NsaWVudDogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD4sXHJcbiAgZmlsdGVyOiBJUGFnZUZpbHRlclxyXG4pOiBQcm9taXNlPElQcm9kdWN0W10+ID0+IHtcclxuICBjb25zdCBmb3JtYXRGaWx0ZXJzID0gKCkgPT4ge1xyXG4gICAgbGV0IGZvcm1hdHRlZEZpbHRlcnMgPSAnJztcclxuXHJcbiAgICBpZiAoZmlsdGVyLnF1ZXJ5KSB7XHJcbiAgICAgIGlmIChmaWx0ZXIucXVlcnkuZGVwYXJ0bWVudCkge1xyXG4gICAgICAgIGZvcm1hdHRlZEZpbHRlcnMgKz0gYFxyXG4gICAgICAgICAgZGVwYXJ0bWVudHM6IHsgc2x1ZzogXCIke2ZpbHRlci5xdWVyeS5kZXBhcnRtZW50fVwiIH1cclxuICAgICAgICBgO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZmlsdGVyLnF1ZXJ5LmNhdGVnb3J5KSB7XHJcbiAgICAgICAgZm9ybWF0dGVkRmlsdGVycyArPSBgXHJcbiAgICAgICAgICBjYXRlZ29yaWVzOiB7IHNsdWc6IFwiJHtmaWx0ZXIucXVlcnkuY2F0ZWdvcnl9XCIgfVxyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaWx0ZXIucXVlcnkuc3ViY2F0ZWdvcnkpIHtcclxuICAgICAgICBmb3JtYXR0ZWRGaWx0ZXJzICs9IGBcclxuICAgICAgICAgIHN1YmNhdGVnb3JpZXM6IHsgc2x1ZzogXCIke2ZpbHRlci5xdWVyeS5zdWJjYXRlZ29yeX1cIiB9XHJcbiAgICAgICAgYDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmb3JtYXR0ZWRGaWx0ZXJzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgZXJyb3IsIGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICBxdWVyeTogZ3FsYFxyXG4gICAgICBxdWVyeSBnZXRQcm9kdWN0c1BhZ2UoXHJcbiAgICAgICAgJHdoZXJlOiBKU09OISA9IHtcclxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxyXG4gICAgICAgICAgJHtmb3JtYXRGaWx0ZXJzKCl9XHJcbiAgICAgICAgfVxyXG4gICAgICApIHtcclxuICAgICAgICBwcm9kdWN0cyhzdGFydDogJHtmaWx0ZXIuc3RhcnR9LCBsaW1pdDogJHtmaWx0ZXIubGltaXR9LCB3aGVyZTogJHdoZXJlKSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgcHJpY2VcclxuICAgICAgICAgIG9mZmVycyh3aGVyZTogeyBhY3RpdmU6IHRydWUgfSkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY292ZXIge1xyXG4gICAgICAgICAgICBhbHRlcm5hdGl2ZVRleHRcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBlcnJvciA/PyBkYXRhLnByb2R1Y3RzLmZpbHRlcigocHJvZHVjdDogSVByb2R1Y3QpID0+IHByb2R1Y3QgIT09IG51bGwpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RCeVNsdWcgPSBhc3luYyAoXHJcbiAgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PixcclxuICBzbHVnOiBzdHJpbmdcclxuKTogUHJvbWlzZTxJUHJvZHVjdD4gPT4ge1xyXG4gIGNvbnN0IHsgZXJyb3IsIGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICBxdWVyeTogZ3FsYFxyXG4gICAgICBxdWVyeSBnZXRQcm9kdWN0KCR3aGVyZTogSlNPTiEgPSB7IGFjdGl2ZTogdHJ1ZSwgc2x1ZzogXCIke3NsdWd9XCIgfSkge1xyXG4gICAgICAgIHByb2R1Y3RzKHdoZXJlOiAkd2hlcmUpIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgbWVkaWEge1xyXG4gICAgICAgICAgICBtaW1lXHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbWV0YV9kZXNjcmlwdGlvblxyXG4gICAgICAgICAgbWV0YV90aXRsZVxyXG4gICAgICAgICAgb2ZmZXJzKHdoZXJlOiB7IGFjdGl2ZTogdHJ1ZSB9KSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgZGlzY291bnRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICB2YXJpYW50cyh3aGVyZToge2FjdGl2ZTogdHJ1ZX0pIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgcGF0dGVyblxyXG4gICAgICAgICAgICBzaXplXHJcbiAgICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBlcnJvciA/PyBkYXRhLnByb2R1Y3RzWzBdO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLLCBBVVRIX0dPT0dMRV9DQUxMQkFDSyB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xyXG5pbXBvcnQgSVNlc3Npb24gZnJvbSAnQC9tb2RlbHMvSVNlc3Npb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb24gPSBhc3luYyAodG9rZW46IHN0cmluZyk6IFByb21pc2U8SVNlc3Npb24+ID0+IHtcclxuICBjb25zdCB1cmw6IHN0cmluZyA9IHRva2VuLmluY2x1ZGVzKCdpZF90b2tlbicpXHJcbiAgICA/IEFVVEhfR09PR0xFX0NBTExCQUNLXHJcbiAgICA6IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0s7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgdG9rZW4pO1xyXG4gIGNvbnN0IHNlc3Npb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9rZW46IHNlc3Npb25EYXRhLmp3dCxcclxuICAgIHVzZXI6IHtcclxuICAgICAgaWQ6IHNlc3Npb25EYXRhLnVzZXIuaWQsXHJcbiAgICAgIHVzZXJuYW1lOiBzZXNzaW9uRGF0YS51c2VyLnVzZXJuYW1lLFxyXG4gICAgICBlbWFpbDogc2Vzc2lvbkRhdGEudXNlci5lbWFpbCxcclxuICAgICAgYXZhdGFyOiBzZXNzaW9uRGF0YS51c2VyLmF2YXRhclxyXG4gICAgICAgID8gc2Vzc2lvbkRhdGEudXNlci5hdmF0YXIuZm9ybWF0cy50aHVtYm5haWxcclxuICAgICAgICA6IG51bGxcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UUTBNQ0lnYUdWcFoyaDBQU0l6TUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREUwTkRBZ016QWlJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrRFFvOFp5QmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjREFwSWo0TkNqeHlaV04wSUhkcFpIUm9QU0kxTkNJZ2FHVnBaMmgwUFNJek1DSWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NU0F3SURBZ0xURWdNU0F6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOGNHRjBhQ0JrUFNKTk1URXVNekE1TVNBeU1DNDRPRFkwVmpFMkxqSTFOemxJTVRZdU56QTVNVll5TlVneFZqWXVOVWd5TWk0MVZqRXdMalU1T1RoSU5pNDBWakl3TGpnNE5qUklNVEV1TXpBNU1Wb2lJR1pwYkd3OUlpTkJNekU1TlVJaUx6NE5Danh3WVhSb0lHUTlJazB4T1NBeE1pNHdNRFJXTXpCSU5UVldNalV1T0RnM00wZzBOaTQxVmpJeExqYzNORFpJTXpjdU5WWXhOeTR4TkRjeVNESTRMalZXTVRJdU1EQTBTREU1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BIQmhkR2dnWkQwaVRUSTRJREJXTmk0ME1qYzNOa2d6Tnk0eE9URTFWakV4TGpVMk5EZElORFl1TXpnelZqRTRTRFUxVmpCSU1qaGFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y21WamRDQjNhV1IwYUQwaU5UUWlJR2hsYVdkb2REMGlNekFpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SURZMElETXdLU0lnWm1sc2JEMGlkMmhwZEdVaUx6NE5Danh3WVhSb0lHUTlJazAzTkM0ek1Ea3hJREl3TGpnNE5qUldNVFl1TWpVM09VZzNPUzQzTURreFZqSTFTRFkwVmpZdU5VZzROUzQxVmpFd0xqVTVPVGhJTmprdU5GWXlNQzQ0T0RZMFNEYzBMak13T1RGYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjR0YwYUNCa1BTSk5PRElnTVRJdU1EQTBWak13U0RFeE9GWXlOUzQ0T0RjelNERXdPUzQxVmpJeExqYzNORFpJTVRBd0xqVldNVGN1TVRRM01rZzVNUzQxVmpFeUxqQXdORWc0TWxvaUlHWnBiR3c5SWlOQk16RTVOVUlpTHo0TkNqeHdZWFJvSUdROUlrMDVNU0F3VmpZdU5ESTNOelpJTVRBd0xqRTVNVll4TVM0MU5qUTNTREV3T1M0ek9ETldNVGhJTVRFNFZqQklPVEZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNtVmpkQ0IzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTXpBaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElERXlOeUF6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOGNHRjBhQ0JrUFNKTk1UTTNMak13T1NBeU1DNDRPRFkwVmpFMkxqSTFOemxJTVRReUxqY3dPVll5TlVneE1qZFdOaTQxU0RFME9DNDFWakV3TGpVNU9UaElNVE15TGpSV01qQXVPRGcyTkVneE16Y3VNekE1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BIQmhkR2dnWkQwaVRURTBOU0F4TWk0d01EUldNekJJTVRneFZqSTFMamc0TnpOSU1UY3lMalZXTWpFdU56YzBOa2d4TmpNdU5WWXhOeTR4TkRjeVNERTFOQzQxVmpFeUxqQXdORWd4TkRWYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjR0YwYUNCa1BTSk5NVFUwSURCV05pNDBNamMzTmtneE5qTXVNVGt4VmpFeExqVTJORGRJTVRjeUxqTTRNMVl4T0VneE9ERldNRWd4TlRSYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjbVZqZENCM2FXUjBhRDBpTlRRaUlHaGxhV2RvZEQwaU16QWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREVnTUNBd0lDMHhJREU1TUNBek1Da2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhjR0YwYUNCa1BTSk5NakF3TGpNd09TQXlNQzQ0T0RZMFZqRTJMakkxTnpsSU1qQTFMamN3T1ZZeU5VZ3hPVEJXTmk0MVNESXhNUzQxVmpFd0xqVTVPVGhJTVRrMUxqUldNakF1T0RnMk5FZ3lNREF1TXpBNVdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnMEtQSEJoZEdnZ1pEMGlUVEl3T0NBeE1pNHdNRFJXTXpCSU1qUTBWakkxTGpnNE56TklNak0xTGpWV01qRXVOemMwTmtneU1qWXVOVll4Tnk0eE5EY3lTREl4Tnk0MVZqRXlMakF3TkVneU1EaGFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y0dGMGFDQmtQU0pOTWpFM0lEQldOaTQwTWpjM05rZ3lNall1TVRreFZqRXhMalUyTkRkSU1qTTFMak00TTFZeE9FZ3lORFJXTUVneU1UZGFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y21WamRDQjNhV1IwYUQwaU5UUWlJR2hsYVdkb2REMGlNekFpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SURJMU15QXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtEUW84Y0dGMGFDQmtQU0pOTWpZekxqTXdPU0F5TUM0NE9EWTBWakUyTGpJMU56bElNalk0TGpjd09WWXlOVWd5TlROV05pNDFTREkzTkM0MVZqRXdMalU1T1RoSU1qVTRMalJXTWpBdU9EZzJORWd5TmpNdU16QTVXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRJM01TQXhNaTR3TURSV016QklNekEzVmpJMUxqZzROek5JTWprNExqVldNakV1TnpjME5rZ3lPRGt1TlZZeE55NHhORGN5U0RJNE1DNDFWakV5TGpBd05FZ3lOekZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNHRjBhQ0JrUFNKTk1qZ3dJREJXTmk0ME1qYzNOa2d5T0RrdU1Ua3hWakV4TGpVMk5EZElNams0TGpNNE0xWXhPRWd6TURkV01FZ3lPREJhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNtVmpkQ0IzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTXpBaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElETXhOaUF6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOGNHRjBhQ0JrUFNKTk16STJMak13T1NBeU1DNDRPRFkwVmpFMkxqSTFOemxJTXpNeExqY3dPVll5TlVnek1UWldOaTQxU0RNek55NDFWakV3TGpVNU9UaElNekl4TGpSV01qQXVPRGcyTkVnek1qWXVNekE1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BIQmhkR2dnWkQwaVRUTXpOQ0F4TWk0d01EUldNekJJTXpjd1ZqSTFMamc0TnpOSU16WXhMalZXTWpFdU56YzBOa2d6TlRJdU5WWXhOeTR4TkRjeVNETTBNeTQxVmpFeUxqQXdORWd6TXpSYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjR0YwYUNCa1BTSk5NelF6SURCV05pNDBNamMzTmtnek5USXVNVGt4VmpFeExqVTJORGRJTXpZeExqTTRNMVl4T0Vnek56QldNRWd6TkROYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjbVZqZENCM2FXUjBhRDBpTlRRaUlHaGxhV2RvZEQwaU16QWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREVnTUNBd0lDMHhJRE0zT1NBek1Da2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhjR0YwYUNCa1BTSk5Nemc1TGpNd09TQXlNQzQ0T0RZMFZqRTJMakkxTnpsSU16azBMamN3T1ZZeU5VZ3pOemxXTmk0MVNEUXdNQzQxVmpFd0xqVTVPVGhJTXpnMExqUldNakF1T0RnMk5FZ3pPRGt1TXpBNVdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnMEtQSEJoZEdnZ1pEMGlUVE01TnlBeE1pNHdNRFJXTXpCSU5ETXpWakkxTGpnNE56TklOREkwTGpWV01qRXVOemMwTmtnME1UVXVOVll4Tnk0eE5EY3lTRFF3Tmk0MVZqRXlMakF3TkVnek9UZGFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y0dGMGFDQmtQU0pOTkRBMklEQldOaTQwTWpjM05rZzBNVFV1TVRreFZqRXhMalUyTkRkSU5ESTBMak00TTFZeE9FZzBNek5XTUVnME1EWmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y21WamRDQjNhV1IwYUQwaU5UUWlJR2hsYVdkb2REMGlNekFpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SURRME1pQXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtEUW84Y0dGMGFDQmtQU0pOTkRVeUxqTXdPU0F5TUM0NE9EWTBWakUyTGpJMU56bElORFUzTGpjd09WWXlOVWcwTkRKV05pNDFTRFEyTXk0MVZqRXdMalU1T1RoSU5EUTNMalJXTWpBdU9EZzJORWcwTlRJdU16QTVXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRRMk1DQXhNaTR3TURSV016QklORGsyVmpJMUxqZzROek5JTkRnM0xqVldNakV1TnpjME5rZzBOemd1TlZZeE55NHhORGN5U0RRMk9TNDFWakV5TGpBd05FZzBOakJhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNHRjBhQ0JrUFNKTk5EWTVJREJXTmk0ME1qYzNOa2cwTnpndU1Ua3hWakV4TGpVMk5EZElORGczTGpNNE0xWXhPRWcwT1RaV01FZzBOamxhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNtVmpkQ0IzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTXpBaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElEVXdOU0F6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOGNHRjBhQ0JrUFNKTk5URTFMak13T1NBeU1DNDRPRFkwVmpFMkxqSTFOemxJTlRJd0xqY3dPVll5TlVnMU1EVldOaTQxU0RVeU5pNDFWakV3TGpVNU9UaElOVEV3TGpSV01qQXVPRGcyTkVnMU1UVXVNekE1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BIQmhkR2dnWkQwaVRUVXlNeUF4TWk0d01EUldNekJJTlRVNVZqSTFMamc0TnpOSU5UVXdMalZXTWpFdU56YzBOa2cxTkRFdU5WWXhOeTR4TkRjeVNEVXpNaTQxVmpFeUxqQXdORWcxTWpOYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjR0YwYUNCa1BTSk5OVE15SURCV05pNDBNamMzTmtnMU5ERXVNVGt4VmpFeExqVTJORGRJTlRVd0xqTTRNMVl4T0VnMU5UbFdNRWcxTXpKYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjbVZqZENCM2FXUjBhRDBpTlRRaUlHaGxhV2RvZEQwaU16QWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREVnTUNBd0lDMHhJRFUyT0NBek1Da2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhjR0YwYUNCa1BTSk5OVGM0TGpNd09TQXlNQzQ0T0RZMFZqRTJMakkxTnpsSU5UZ3pMamN3T1ZZeU5VZzFOamhXTmk0MVNEVTRPUzQxVmpFd0xqVTVPVGhJTlRjekxqUldNakF1T0RnMk5FZzFOemd1TXpBNVdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnMEtQSEJoZEdnZ1pEMGlUVFU0TmlBeE1pNHdNRFJXTXpCSU5qSXlWakkxTGpnNE56TklOakV6TGpWV01qRXVOemMwTmtnMk1EUXVOVll4Tnk0eE5EY3lTRFU1TlM0MVZqRXlMakF3TkVnMU9EWmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y0dGMGFDQmtQU0pOTlRrMUlEQldOaTQwTWpjM05rZzJNRFF1TVRreFZqRXhMalUyTkRkSU5qRXpMak00TTFZeE9FZzJNakpXTUVnMU9UVmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y21WamRDQjNhV1IwYUQwaU5UUWlJR2hsYVdkb2REMGlNekFpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SURZek1TQXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtEUW84Y0dGMGFDQmtQU0pOTmpReExqTXdPU0F5TUM0NE9EWTBWakUyTGpJMU56bElOalEyTGpjd09WWXlOVWcyTXpGV05pNDFTRFkxTWk0MVZqRXdMalU1T1RoSU5qTTJMalJXTWpBdU9EZzJORWcyTkRFdU16QTVXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRZME9TQXhNaTR3TURSV016QklOamcxVmpJMUxqZzROek5JTmpjMkxqVldNakV1TnpjME5rZzJOamN1TlZZeE55NHhORGN5U0RZMU9DNDFWakV5TGpBd05FZzJORGxhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNHRjBhQ0JrUFNKTk5qVTRJREJXTmk0ME1qYzNOa2cyTmpjdU1Ua3hWakV4TGpVMk5EZElOamMyTGpNNE0xWXhPRWcyT0RWV01FZzJOVGhhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNtVmpkQ0IzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTXpBaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElEWTVOQ0F6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOGNHRjBhQ0JrUFNKTk56QTBMak13T1NBeU1DNDRPRFkwVmpFMkxqSTFOemxJTnpBNUxqY3dPVll5TlVnMk9UUldOaTQxU0RjeE5TNDFWakV3TGpVNU9UaElOams1TGpSV01qQXVPRGcyTkVnM01EUXVNekE1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BIQmhkR2dnWkQwaVRUY3hNaUF4TWk0d01EUldNekJJTnpRNFZqSTFMamc0TnpOSU56TTVMalZXTWpFdU56YzBOa2czTXpBdU5WWXhOeTR4TkRjeVNEY3lNUzQxVmpFeUxqQXdORWczTVRKYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjR0YwYUNCa1BTSk5Oekl4SURCV05pNDBNamMzTmtnM016QXVNVGt4VmpFeExqVTJORGRJTnpNNUxqTTRNMVl4T0VnM05EaFdNRWczTWpGYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjbVZqZENCM2FXUjBhRDBpTlRRaUlHaGxhV2RvZEQwaU16QWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREVnTUNBd0lDMHhJRGMxTnlBek1Da2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhjR0YwYUNCa1BTSk5OelkzTGpNd09TQXlNQzQ0T0RZMFZqRTJMakkxTnpsSU56Y3lMamN3T1ZZeU5VZzNOVGRXTmk0MVNEYzNPQzQxVmpFd0xqVTVPVGhJTnpZeUxqUldNakF1T0RnMk5FZzNOamN1TXpBNVdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnMEtQSEJoZEdnZ1pEMGlUVGMzTlNBeE1pNHdNRFJXTXpCSU9ERXhWakkxTGpnNE56TklPREF5TGpWV01qRXVOemMwTmtnM09UTXVOVll4Tnk0eE5EY3lTRGM0TkM0MVZqRXlMakF3TkVnM056VmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y0dGMGFDQmtQU0pOTnpnMElEQldOaTQwTWpjM05rZzNPVE11TVRreFZqRXhMalUyTkRkSU9EQXlMak00TTFZeE9FZzRNVEZXTUVnM09EUmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y21WamRDQjNhV1IwYUQwaU5UUWlJR2hsYVdkb2REMGlNekFpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SURneU1DQXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtEUW84Y0dGMGFDQmtQU0pOT0RNd0xqTXdPU0F5TUM0NE9EWTBWakUyTGpJMU56bElPRE0xTGpjd09WWXlOVWc0TWpCV05pNDFTRGcwTVM0MVZqRXdMalU1T1RoSU9ESTFMalJXTWpBdU9EZzJORWc0TXpBdU16QTVXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRnek9DQXhNaTR3TURSV016QklPRGMwVmpJMUxqZzROek5JT0RZMUxqVldNakV1TnpjME5rZzROVFl1TlZZeE55NHhORGN5U0RnME55NDFWakV5TGpBd05FZzRNemhhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNHRjBhQ0JrUFNKTk9EUTNJREJXTmk0ME1qYzNOa2c0TlRZdU1Ua3hWakV4TGpVMk5EZElPRFkxTGpNNE0xWXhPRWc0TnpSV01FZzRORGRhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNtVmpkQ0IzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTXpBaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElEZzRNeUF6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOGNHRjBhQ0JrUFNKTk9Ea3pMak13T1NBeU1DNDRPRFkwVmpFMkxqSTFOemxJT0RrNExqY3dPVll5TlVnNE9ETldOaTQxU0Rrd05DNDFWakV3TGpVNU9UaElPRGc0TGpSV01qQXVPRGcyTkVnNE9UTXVNekE1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BIQmhkR2dnWkQwaVRUa3dNU0F4TWk0d01EUldNekJJT1RNM1ZqSTFMamc0TnpOSU9USTRMalZXTWpFdU56YzBOa2c1TVRrdU5WWXhOeTR4TkRjeVNEa3hNQzQxVmpFeUxqQXdORWc1TURGYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjR0YwYUNCa1BTSk5PVEV3SURCV05pNDBNamMzTmtnNU1Ua3VNVGt4VmpFeExqVTJORGRJT1RJNExqTTRNMVl4T0VnNU16ZFdNRWc1TVRCYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjbVZqZENCM2FXUjBhRDBpTlRRaUlHaGxhV2RvZEQwaU16QWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREVnTUNBd0lDMHhJRGswTmlBek1Da2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhjR0YwYUNCa1BTSk5PVFUyTGpNd09TQXlNQzQ0T0RZMFZqRTJMakkxTnpsSU9UWXhMamN3T1ZZeU5VZzVORFpXTmk0MVNEazJOeTQxVmpFd0xqVTVPVGhJT1RVeExqUldNakF1T0RnMk5FZzVOVFl1TXpBNVdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnMEtQSEJoZEdnZ1pEMGlUVGsyTkNBeE1pNHdNRFJXTXpCSU1UQXdNRll5TlM0NE9EY3pTRGs1TVM0MVZqSXhMamMzTkRaSU9UZ3lMalZXTVRjdU1UUTNNa2c1TnpNdU5WWXhNaTR3TURSSU9UWTBXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRrM015QXdWall1TkRJM056WklPVGd5TGpFNU1WWXhNUzQxTmpRM1NEazVNUzR6T0ROV01UaElNVEF3TUZZd1NEazNNMW9pSUdacGJHdzlJaU5CTXpFNU5VSWlMejROQ2p4eVpXTjBJSGRwWkhSb1BTSTFOQ0lnYUdWcFoyaDBQU0l6TUNJZ2RISmhibk5tYjNKdFBTSnRZWFJ5YVhnb01TQXdJREFnTFRFZ01UQXdPU0F6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOGNHRjBhQ0JrUFNKTk1UQXhPUzR6TVNBeU1DNDRPRFkwVmpFMkxqSTFOemxJTVRBeU5DNDNNVll5TlVneE1EQTVWall1TlVneE1ETXdMalZXTVRBdU5UazVPRWd4TURFMExqUldNakF1T0RnMk5FZ3hNREU1TGpNeFdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnMEtQSEJoZEdnZ1pEMGlUVEV3TWpjZ01USXVNREEwVmpNd1NERXdOak5XTWpVdU9EZzNNMGd4TURVMExqVldNakV1TnpjME5rZ3hNRFExTGpWV01UY3VNVFEzTWtneE1ETTJMalZXTVRJdU1EQTBTREV3TWpkYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjR0YwYUNCa1BTSk5NVEF6TmlBd1ZqWXVOREkzTnpaSU1UQTBOUzR4T1ZZeE1TNDFOalEzU0RFd05UUXVNemhXTVRoSU1UQTJNMVl3U0RFd016WmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y21WamRDQjNhV1IwYUQwaU5UUWlJR2hsYVdkb2REMGlNekFpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SURFd056SWdNekFwSWlCbWFXeHNQU0ozYUdsMFpTSXZQZzBLUEhCaGRHZ2daRDBpVFRFd09ESXVNekVnTWpBdU9EZzJORll4Tmk0eU5UYzVTREV3T0RjdU56RldNalZJTVRBM01sWTJMalZJTVRBNU15NDFWakV3TGpVNU9UaElNVEEzTnk0MFZqSXdMamc0TmpSSU1UQTRNaTR6TVZvaUlHWnBiR3c5SWlOQk16RTVOVUlpTHo0TkNqeHdZWFJvSUdROUlrMHhNRGt3SURFeUxqQXdORll6TUVneE1USTJWakkxTGpnNE56TklNVEV4Tnk0MVZqSXhMamMzTkRaSU1URXdPQzQxVmpFM0xqRTBOekpJTVRBNU9TNDFWakV5TGpBd05FZ3hNRGt3V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BIQmhkR2dnWkQwaVRURXdPVGtnTUZZMkxqUXlOemMyU0RFeE1EZ3VNVGxXTVRFdU5UWTBOMGd4TVRFM0xqTTRWakU0U0RFeE1qWldNRWd4TURrNVdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnMEtQSEpsWTNRZ2QybGtkR2c5SWpVMElpQm9aV2xuYUhROUlqTXdJaUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d4SURBZ01DQXRNU0F4TVRNMUlETXdLU0lnWm1sc2JEMGlkMmhwZEdVaUx6NE5Danh3WVhSb0lHUTlJazB4TVRRMUxqTXhJREl3TGpnNE5qUldNVFl1TWpVM09VZ3hNVFV3TGpjeFZqSTFTREV4TXpWV05pNDFTREV4TlRZdU5WWXhNQzQxT1RrNFNERXhOREF1TkZZeU1DNDRPRFkwU0RFeE5EVXVNekZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNHRjBhQ0JrUFNKTk1URTFNeUF4TWk0d01EUldNekJJTVRFNE9WWXlOUzQ0T0RjelNERXhPREF1TlZZeU1TNDNOelEyU0RFeE56RXVOVll4Tnk0eE5EY3lTREV4TmpJdU5WWXhNaTR3TURSSU1URTFNMW9pSUdacGJHdzlJaU5CTXpFNU5VSWlMejROQ2p4d1lYUm9JR1E5SWsweE1UWXlJREJXTmk0ME1qYzNOa2d4TVRjeExqRTVWakV4TGpVMk5EZElNVEU0TUM0ek9GWXhPRWd4TVRnNVZqQklNVEUyTWxvaUlHWnBiR3c5SWlOQk16RTVOVUlpTHo0TkNqeHlaV04wSUhkcFpIUm9QU0kxTkNJZ2FHVnBaMmgwUFNJek1DSWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NU0F3SURBZ0xURWdNVEU1T0NBek1Da2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhjR0YwYUNCa1BTSk5NVEl3T0M0ek1TQXlNQzQ0T0RZMFZqRTJMakkxTnpsSU1USXhNeTQzTVZZeU5VZ3hNVGs0VmpZdU5VZ3hNakU1TGpWV01UQXVOVGs1T0VneE1qQXpMalJXTWpBdU9EZzJORWd4TWpBNExqTXhXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRFeU1UWWdNVEl1TURBMFZqTXdTREV5TlRKV01qVXVPRGczTTBneE1qUXpMalZXTWpFdU56YzBOa2d4TWpNMExqVldNVGN1TVRRM01rZ3hNakkxTGpWV01USXVNREEwU0RFeU1UWmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y0dGMGFDQmtQU0pOTVRJeU5TQXdWall1TkRJM056WklNVEl6TkM0eE9WWXhNUzQxTmpRM1NERXlORE11TXpoV01UaElNVEkxTWxZd1NERXlNalZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNtVmpkQ0IzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTXpBaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElERXlOakVnTXpBcElpQm1hV3hzUFNKM2FHbDBaU0l2UGcwS1BIQmhkR2dnWkQwaVRURXlOekV1TXpFZ01qQXVPRGcyTkZZeE5pNHlOVGM1U0RFeU56WXVOekZXTWpWSU1USTJNVlkyTGpWSU1USTRNaTQxVmpFd0xqVTVPVGhJTVRJMk5pNDBWakl3TGpnNE5qUklNVEkzTVM0ek1Wb2lJR1pwYkd3OUlpTkJNekU1TlVJaUx6NE5Danh3WVhSb0lHUTlJazB4TWpjNUlERXlMakF3TkZZek1FZ3hNekUxVmpJMUxqZzROek5JTVRNd05pNDFWakl4TGpjM05EWklNVEk1Tnk0MVZqRTNMakUwTnpKSU1USTRPQzQxVmpFeUxqQXdORWd4TWpjNVdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnMEtQSEJoZEdnZ1pEMGlUVEV5T0RnZ01GWTJMalF5TnpjMlNERXlPVGN1TVRsV01URXVOVFkwTjBneE16QTJMak00VmpFNFNERXpNVFZXTUVneE1qZzRXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZzBLUEhKbFkzUWdkMmxrZEdnOUlqVTBJaUJvWldsbmFIUTlJak13SWlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNneElEQWdNQ0F0TVNBeE16STBJRE13S1NJZ1ptbHNiRDBpZDJocGRHVWlMejROQ2p4d1lYUm9JR1E5SWsweE16TTBMak14SURJd0xqZzROalJXTVRZdU1qVTNPVWd4TXpNNUxqY3hWakkxU0RFek1qUldOaTQxU0RFek5EVXVOVll4TUM0MU9UazRTREV6TWprdU5GWXlNQzQ0T0RZMFNERXpNelF1TXpGYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjR0YwYUNCa1BTSk5NVE0wTWlBeE1pNHdNRFJXTXpCSU1UTTNPRll5TlM0NE9EY3pTREV6TmprdU5WWXlNUzQzTnpRMlNERXpOakF1TlZZeE55NHhORGN5U0RFek5URXVOVll4TWk0d01EUklNVE0wTWxvaUlHWnBiR3c5SWlOQk16RTVOVUlpTHo0TkNqeHdZWFJvSUdROUlrMHhNelV4SURCV05pNDBNamMzTmtneE16WXdMakU1VmpFeExqVTJORGRJTVRNMk9TNHpPRll4T0VneE16YzRWakJJTVRNMU1Wb2lJR1pwYkd3OUlpTkJNekU1TlVJaUx6NE5Danh5WldOMElIZHBaSFJvUFNJMU5DSWdhR1ZwWjJoMFBTSXpNQ0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVNBd0lEQWdMVEVnTVRNNE55QXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtEUW84Y0dGMGFDQmtQU0pOTVRNNU55NHpNU0F5TUM0NE9EWTBWakUyTGpJMU56bElNVFF3TWk0M01WWXlOVWd4TXpnM1ZqWXVOVWd4TkRBNExqVldNVEF1TlRrNU9FZ3hNemt5TGpSV01qQXVPRGcyTkVneE16azNMak14V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BIQmhkR2dnWkQwaVRURTBNRFVnTVRJdU1EQTBWak13U0RFME5ERldNalV1T0RnM00wZ3hORE15TGpWV01qRXVOemMwTmtneE5ESXpMalZXTVRjdU1UUTNNa2d4TkRFMExqVldNVEl1TURBMFNERTBNRFZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNHRjBhQ0JrUFNKTk1UUXhOQ0F3VmpZdU5ESTNOelpJTVRReU15NHhPVll4TVM0MU5qUTNTREUwTXpJdU16aFdNVGhJTVRRME1WWXdTREUwTVRSYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhMMmMrRFFvOFpHVm1jejROQ2p4amJHbHdVR0YwYUNCcFpEMGlZMnhwY0RBaVBnMEtQSEpsWTNRZ2QybGtkR2c5SWpFME5EQWlJR2hsYVdkb2REMGlNekFpSUdacGJHdzlJbmRvYVhSbElpOCtEUW84TDJOc2FYQlFZWFJvUGcwS1BDOWtaV1p6UGcwS1BDOXpkbWMrRFFvPVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNamN3SWlCb1pXbG5hSFE5SWpNMk1DSWdkbWxsZDBKdmVEMGlNQ0F3SURJM01DQXpOakFpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0RRbzhjR0YwYUNCa1BTSk5NVE0xSURJeE5pNDNNVFZETVRnekxqY3dOQ0F5TVRZdU56RTFJREl5TXk0eE9EWWdNVGM0TGpNM05DQXlNak11TVRnMklERXpNUzR3TnpsRE1qSXpMakU0TmlBNE15NDNPRE0wSURFNE15NDNNRFFnTkRVdU5EUXlPU0F4TXpVZ05EVXVORFF5T1VNNE5pNHlPVFUzSURRMUxqUTBNamtnTkRZdU9ERXpNaUE0TXk0M09ETTBJRFEyTGpneE16SWdNVE14TGpBM09VTTBOaTQ0TVRNeUlERTNPQzR6TnpRZ09EWXVNamsxTnlBeU1UWXVOekUxSURFek5TQXlNVFl1TnpFMVdpSWdabWxzYkQwaWQyaHBkR1VpTHo0TkNqeHdZWFJvSUdROUlrMHhNelF1T1RrM0lESXhNUzR3TXpGRE1UZ3dMalEyT0NBeU1URXVNRE14SURJeE55NHpNekVnTVRjMUxqSXpOU0F5TVRjdU16TXhJREV6TVM0d056bERNakUzTGpNek1TQTROaTQ1TWpJeUlERTRNQzQwTmpnZ05URXVNVEkyTWlBeE16UXVPVGszSURVeExqRXlOakpET0RrdU5USTFJRFV4TGpFeU5qSWdOVEl1TmpZeU9DQTROaTQ1TWpJeUlEVXlMalkyTWpnZ01UTXhMakEzT1VNMU1pNDJOakk0SURFM05TNHlNelVnT0RrdU5USTFJREl4TVM0d016RWdNVE0wTGprNU55QXlNVEV1TURNeFdpSWdjM1J5YjJ0bFBTSWpRVE14T1RWQ0lpQnpkSEp2YTJVdGQybGtkR2c5SWpJdU1EYzNJaUJ6ZEhKdmEyVXRiV2wwWlhKc2FXMXBkRDBpTVRBaUx6NE5Danh3WVhSb0lHUTlJazB4TXpRdU9Ua3lJREF1TURBek1qWTFNemhETVRBNExqSTVOaUF3TGpBd016STJOVFEySURneUxqRTVPRFlnTnk0Mk9UQTJOU0EyTUM0d01ERWdNakl1TURrek0wTXpOeTQ0TURNMUlETTJMalE1TmlBeU1DNDFNREkwSURVMkxqazJOekVnTVRBdU1qZzFOU0E0TUM0NU1UZ3hRekF1TURZNE5qa3dNeUF4TURRdU9EWTVJQzB5TGpZd05UQXlJREV6TVM0eU1qUWdNaTQyTURJME9TQXhOVFl1TmpVeFF6Y3VPREE1T1RrZ01UZ3lMakEzTnlBeU1DNDJOalE0SURJd05TNDBNek1nTXprdU5UUXhOU0F5TWpNdU56WTFRelU0TGpReE9ERWdNalF5TGpBNU55QTRNaTQwTmpnNElESTFOQzQxT0RJZ01UQTRMalkxTWlBeU5Ua3VOalF4UXpFek5DNDRNellnTWpZMExqY2dNVFl4TGprM05pQXlOakl1TVRBMUlERTROaTQyTkRFZ01qVXlMakU0TmtNeU1URXVNekEySURJME1pNHlOallnTWpNeUxqTTRPQ0F5TWpVdU5EWTNJREkwTnk0eU1qSWdNakF6TGpreE0wTXlOakl1TURVMUlERTRNaTR6TlRnZ01qWTVMamszTXlBeE5UY3VNREUzSURJMk9TNDVOelVnTVRNeExqQTVNa015TmprdU9UYzNJREV4TXk0NE56Z2dNalkyTGpRNE5pQTVOaTQ0TXpFM0lESTFPUzQzTURNZ09EQXVPVEkzTTBNeU5USXVPVElnTmpVdU1ESXlPU0F5TkRJdU9UYzRJRFV3TGpVM01UY2dNak13TGpRME15QXpPQzR6T1RnNVF6SXhOeTQ1TURrZ01qWXVNakkySURJd015NHdNamdnTVRZdU5UY2dNVGcyTGpZMUlEa3VPVGd5UXpFM01DNHlOek1nTXk0ek9UUXdOU0F4TlRJdU56RTVJREF1TURBek1qWTFNek1nTVRNMExqazVNaUF3TGpBd016STJOVE00VmpBdU1EQXpNalkxTXpoYVRURXpOQzQ1T1RJZ01qRTNMakExTVVNeE1UY3VORGcwSURJeE55NHdOU0F4TURBdU16WTVJREl4TWk0d01EY2dPRFV1T0RFeE55QXlNREl1TlRaRE56RXVNalUwTlNBeE9UTXVNVEV6SURVNUxqa3dPU0F4TnprdU5qZzNJRFV6TGpJd09UY2dNVFl6TGprM09VTTBOaTQxTVRBMElERTBPQzR5TnlBME5DNDNOVGd6SURFek1DNDVPRFlnTkRndU1UYzBPQ0F4TVRRdU16RkROVEV1TlRreE5DQTVOeTQyTXpRNUlEWXdMakF5TXpNZ09ESXVNekUzT1NBM01pNDBNRFF5SURjd0xqSTVOa000TkM0M09EVXhJRFU0TGpJM05ERWdNVEF3TGpVMU9TQTFNQzR3T0RjeklERXhOeTQzTXpFZ05EWXVOemN3T0VNeE16UXVPVEF6SURRekxqUTFORFFnTVRVeUxqY3dNeUEwTlM0eE5UY3lJREUyT0M0NE56Z2dOVEV1TmpZek9VTXhPRFV1TURVMElEVTRMakUzTURjZ01UazRMamc0SURZNUxqRTRPVEVnTWpBNExqWXdOeUE0TXk0ek1qWkRNakU0TGpNek5DQTVOeTQwTmpJNUlESXlNeTQxTWpZZ01URTBMakE0TXlBeU1qTXVOVEkySURFek1TNHdPRFZETWpJekxqVXlOaUF4TkRJdU16YzJJREl5TVM0eU16Y2dNVFV6TGpVMU5pQXlNVFl1TnpnNElERTJNeTQ1T0RkRE1qRXlMak16T1NBeE56UXVOREU0SURJd05TNDRNVGdnTVRnekxqZzVOaUF4T1RjdU5UazNJREU1TVM0NE56bERNVGc1TGpNM05pQXhPVGt1T0RZeklERTNPUzQyTVRVZ01qQTJMakU1TlNBeE5qZ3VPRGMwSURJeE1DNDFNVFZETVRVNExqRXpNaUF5TVRRdU9ETTJJREUwTmk0Mk1Ua2dNakUzTGpBMU9TQXhNelF1T1RreUlESXhOeTR3TlRoV01qRTNMakExTVZvaUlHWnBiR3c5SWlOQk16RTVOVUlpTHo0TkNqeHdZWFJvSUdROUlrMHhNelF1TmpZZ01qRXVPVFV6TVV3eE16RXVORFV4SURNeUxqRTBOalJNTVRJNExqSTBNU0EwTWk0ek16azJTREUwTVM0d056Wk1NVE0zTGpnM0lETXlMakUwTmpSTU1UTTBMalkySURJeExqazFNekZhSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrRFFvOGNHRjBhQ0JrUFNKTk1UUTRMamszTnlBek5TNDFNamszUXpFME55NDRORGdnTXpVdU5UTXdNU0F4TkRZdU56VXhJRE0xTGpnNU1EZ2dNVFExTGpnMU5DQXpOaTQxTlRZelRERXpOQzQyTmlBd1RERXlNeTQwTmlBek5pNDFOVFl6UXpFeU1pNDFOaUF6TlM0NE9UTXlJREV5TVM0ME5qSWdNelV1TlRNeU9DQXhNakF1TXpNeUlETTFMalV5T1RkRE1URTRMamc1T0NBek5TNDFNamszSURFeE55NDFNaklnTXpZdU1EZ3pNU0F4TVRZdU5UQTNJRE0zTGpBMk9ETkRNVEUxTGpRNU15QXpPQzR3TlRNMUlERXhOQzQ1TWpNZ016a3VNemc1TnlBeE1UUXVPVEl6SURRd0xqYzRNME14TVRRdU9USXpJRFF5TGpFM05qSWdNVEUxTGpRNU15QTBNeTQxTVRJMElERXhOaTQxTURjZ05EUXVORGszTmtNeE1UY3VOVEl5SURRMUxqUTRNamdnTVRFNExqZzVPQ0EwTmk0d016WXlJREV5TUM0ek16SWdORFl1TURNMk1rTXhNakV1TkRFeElEUTJMakF6TURrZ01USXlMalEyTVNBME5TNDNNRFVnTVRJekxqTTBNeUEwTlM0eE1ESTJRekV5TkM0eU1qVWdORFF1TlRBd01TQXhNalF1T0RrMklEUXpMalkwT1RrZ01USTFMakkyTlNBME1pNDJOall6U0RFeU5TNHpNRFpNTVRNMExqWTJNeUF4TWk0NU16azVUREUwTkM0d01EY2dOREl1TmpZMk0wZ3hORFF1TURNeFF6RTBOQzR6T1RjZ05ETXVOVEk1T0NBeE5EUXVPVGszSURRMExqSTRNRGNnTVRRMUxqYzJPQ0EwTkM0NE16ZzVRekUwTmk0MU16a2dORFV1TXprM01pQXhORGN1TkRVeElEUTFMamMwTVRrZ01UUTRMalF3T0NBME5TNDRNelkwUXpFME9TNHpOalFnTkRVdU9UTXdPQ0F4TlRBdU16STVJRFExTGpjM01UUWdNVFV4TGpJZ05EVXVNemMxTWtNeE5USXVNRGN4SURRMExqazNPRGtnTVRVeUxqZ3hOQ0EwTkM0ek5qQTNJREUxTXk0ek5USWdORE11TlRnMk0wTXhOVE11T0RnNUlEUXlMamd4TWlBeE5UUXVNaUEwTVM0NU1UQTJJREUxTkM0eU5URWdOREF1T1RjNE1rTXhOVFF1TXpBeUlEUXdMakEwTlRnZ01UVTBMakE1TWlBek9TNHhNVGN6SURFMU15NDJORE1nTXpndU1qa3hPRU14TlRNdU1UazBJRE0zTGpRMk5qTWdNVFV5TGpVeU1pQXpOaTQzTnpRMklERTFNUzQzSURNMkxqSTVNRFZETVRVd0xqZzNPQ0F6TlM0NE1EWTFJREUwT1M0NU16VWdNelV1TlRRNE1TQXhORGd1T1RjMElETTFMalUwTTB3eE5EZ3VPVGMzSURNMUxqVXlPVGRhSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrRFFvOGNHRjBhQ0JrUFNKTk5UVXVNamt4T0NBMU5DNHhOVFl5VERZd0xqUTBNRFlnTmpNdU5UWTJNVXcyTlM0MU9EazFJRGN5TGprM05rdzNOQzQyTmpVeklEWTBMakUyTWpoTU5qUXVPVGMxTVNBMU9TNHhOakk0VERVMUxqSTRORGtnTlRRdU1UWXlPVXcxTlM0eU9URTRJRFUwTGpFMU5qSmFJaUJtYVd4c1BTSWpNREJCTVRsQklpOCtEUW84Y0dGMGFDQmtQU0pOTnpVdU1qazNNeUExTXk0NU1qSTRRemMwTGpVd01qSWdOVFF1TnpBd01TQTNNeTQ1T0RnNUlEVTFMamN3TnpRZ056TXVPRE0xSURVMkxqYzVNamRNTXprdU16QXpNaUF6T0M0Mk1USTVURFU0TGpBd016a2dOekl1TVRVeU5rTTFOaTQ0T0RBeUlEY3lMak13TmpJZ05UVXVPRE00T1NBM01pNDRNVEU0SURVMUxqQXpPRElnTnpNdU5Ua3lOa00xTkM0ek1qSTNJRGMwTGpJMU9EUWdOVE11T0RBNU5DQTNOUzR4TURJeklEVXpMalUxTkRJZ056WXVNRE15TWtNMU15NHlPVGc1SURjMkxqazJNaUExTXk0ek1URTJJRGMzTGprME1qRWdOVE11TlRrd09DQTNPQzQ0TmpVMFF6VXpMamczSURjNUxqYzRPRGNnTlRRdU5EQTFNU0E0TUM0Mk1UazRJRFUxTGpFek56VWdPREV1TWpZNFF6VTFMamczSURneExqa3hOaklnTlRZdU56Y3hOeUE0TWk0ek5UWTJJRFUzTGpjME5ETWdPREl1TlRReE1VTTFPQzQzTVRZNUlEZ3lMamN5TlRZZ05Ua3VOekl6SURneUxqWTBOekVnTmpBdU5qVXlPQ0E0TWk0ek1UUXlRell4TGpVNE1qVWdPREV1T1RneE15QTJNaTQwTURBeklEZ3hMalF3TmpnZ05qTXVNREUyT0NBNE1DNDJOVE0wUXpZekxqWXpNek1nTnprdU9TQTJOQzR3TWpRNUlEYzRMams1TmpZZ05qUXVNVFE0TnlBM09DNHdOREU0UXpZMExqSTNNallnTnpjdU1EZzNJRFkwTGpFeU5DQTNOaTR4TVRjMklEWXpMamN4T1RJZ056VXVNak01TWt3Mk15NDNNems0SURjMUxqSXhOVGxNTkRndU56RXhPU0EwTnk0M05qazFURGMyTGprM05UZ2dOakl1TXpZNU5GWTJNaTR6TkRrMFF6YzNMamsxTlRVZ05qSXVOemt6TVNBM09TNHdOVEUxSURZeUxqa3pOVEVnT0RBdU1URTJOeUEyTWk0M05UWTBRemd4TGpFNE1Ua2dOakl1TlRjM05pQTRNaTR4TmpVeklEWXlMakE0TmpZZ09ESXVPVE0wT0NBMk1TNHpORGswUXpnekxqUTFPVElnTmpBdU9EWTJOaUE0TXk0NE56ZzRJRFl3TGpJNE5qZ2dPRFF1TVRZNE55QTFPUzQyTkRSRE9EUXVORFU0TmlBMU9TNHdNREV5SURnMExqWXhNeUExT0M0ek1EZzJJRGcwTGpZeU1qY2dOVGN1TmpBMk9VTTROQzQyTXpJeklEVTJMamt3TlRNZ09EUXVORGszTWlBMU5pNHlNRGc0SURnMExqSXlOVEVnTlRVdU5UVTROME00TXk0NU5UTWdOVFF1T1RBNE5pQTRNeTQxTkRrMklEVTBMak14T0RFZ09ETXVNRE00TnlBMU15NDRNakU1UXpneUxqVXlOemNnTlRNdU16STFOeUE0TVM0NU1UazFJRFV5TGprek16a2dPREV1TWpVd01TQTFNaTQyTmprNFF6Z3dMalU0TURZZ05USXVOREExTmlBM09TNDROak0wSURVeUxqSTNORE1nTnprdU1UUXdPU0ExTWk0eU9ETTNRemM0TGpReE9ETWdOVEl1TWprek1TQTNOeTQzTURVZ05USXVORFF6SURjM0xqQTBNekVnTlRJdU56STBOVU0zTmk0ek9ERXlJRFV6TGpBd05pQTNOUzQzT0RReElEVXpMalF4TXpVZ056VXVNamczSURVekxqa3lNamhJTnpVdU1qazNNMW9pSUdacGJHdzlJaU13TUVFeE9VRWlMejROQ2p4d1lYUm9JR1E5SWsweU1pNDJNRFkzSURFek1TNDBNakpNTXpNdU1UQXpOU0F4TXpRdU5UTTFURFF6TGpZd01EUWdNVE0zTGpZMU1sWXhNalV1TVRnNVRETXpMakV3TXpVZ01USTRMak13TlV3eU1pNDJNRFkzSURFek1TNDBNakphSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrRFFvOGNHRjBhQ0JrUFNKTk16WXVOVGcwTlNBeE1UY3VOVEV5UXpNMkxqVTRORGNnTVRFNExqWXdPU0F6Tmk0NU5UTTFJREV4T1M0Mk56VWdNemN1TmpNME9DQXhNakF1TlRRNVREQWdNVE14TGpReE9Vd3pOeTQyTlRJZ01UUXlMakk1TlVNek5pNDVOalE1SURFME15NHhOeUF6Tmk0MU9USXpJREUwTkM0eU16a2dNell1TlRreE15QXhORFV1TXpNNVF6TTJMalU1TVRNZ01UUTJMamN6TWlBek55NHhOakV6SURFME9DNHdOamdnTXpndU1UYzFPQ0F4TkRrdU1EVXpRek01TGpFNU1ETWdNVFV3TGpBek9TQTBNQzQxTmpZeklERTFNQzQxT1RJZ05ESXVNREF4TVNBeE5UQXVOVGt5UXpRekxqUXpOVGdnTVRVd0xqVTVNaUEwTkM0NE1URTRJREUxTUM0d016a2dORFV1T0RJMk15QXhORGt1TURVelF6UTJMamcwTURrZ01UUTRMakEyT0NBME55NDBNVEE0SURFME5pNDNNeklnTkRjdU5ERXdPQ0F4TkRVdU16TTVRelEzTGpRd056TWdNVFEwTGpJNE9DQTBOeTR3TnpJMElERTBNeTR5TmpRZ05EWXVORFV4TXlBeE5ESXVOREEwUXpRMUxqZ3pNRE1nTVRReExqVTBOQ0EwTkM0NU5USTRJREUwTUM0NE9TQTBNeTQ1TXpjZ01UUXdMalV5T1ZZeE5EQXVORGsxVERFekxqTXhNVFlnTVRNeExqUXhPVXcwTXk0NU16Y2dNVEl5TGpNek5sWXhNakl1TXpBMlF6UTBMamsxTXpFZ01USXhMamswT1NBME5TNDRNeklnTVRJeExqSTVPQ0EwTmk0ME5UVWdNVEl3TGpRME1VTTBOeTR3TnpnZ01URTVMalU0TkNBME55NDBNVFV5SURFeE9DNDFOakVnTkRjdU5ESXhNU0F4TVRjdU5URXlRelEzTGpReU1URWdNVEUyTGpneU1pQTBOeTR5T0RFeUlERXhOaTR4TXprZ05EY3VNREE1TXlBeE1UVXVOVEF5UXpRMkxqY3pOelVnTVRFMExqZzJOU0EwTmk0ek16a2dNVEUwTGpJNE5TQTBOUzQ0TXpZMklERXhNeTQzT1RoRE5EVXVNek0wTXlBeE1UTXVNekVnTkRRdU56TTNPU0F4TVRJdU9USXpJRFEwTGpBNE1UWWdNVEV5TGpZMU9VTTBNeTQwTWpVeUlERXhNaTR6T1RVZ05ESXVOekl4T0NBeE1USXVNalU1SURReUxqQXhNVFFnTVRFeUxqSTFPVU0wTVM0ek1EQTVJREV4TWk0eU5Ua2dOREF1TlRrM05TQXhNVEl1TXprMUlETTVMamswTVRFZ01URXlMalkxT1VNek9TNHlPRFE0SURFeE1pNDVNak1nTXpndU5qZzROQ0F4TVRNdU16RWdNemd1TVRnMk1TQXhNVE11TnprNFF6TTNMalk0TXpnZ01URTBMakk0TlNBek55NHlPRFV6SURFeE5DNDROalVnTXpjdU1ERXpOQ0F4TVRVdU5UQXlRek0yTGpjME1UVWdNVEUyTGpFek9TQXpOaTQyTURFMklERXhOaTQ0TWpJZ016WXVOakF4TmlBeE1UY3VOVEV5U0RNMkxqVTRORFZhSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrRFFvOGNHRjBhQ0JrUFNKTk5UVXVOelk1SURJd09DNDBPRFZNTmpVdU5EUTRPU0F5TURNdU5EZzFURGMxTGpFek9URWdNVGs0TGpRNE5VdzJOaTR3TmpNMElERTRPUzQyTnpGTU5qQXVPVEUwTlNBeE9Ua3VNRGc0VERVMUxqYzJPU0F5TURndU5EZzFXaUlnWm1sc2JEMGlJekF3UVRFNVFTSXZQZzBLUEhCaGRHZ2daRDBpVFRVMUxqVXlPU0F4T0RrdU1EVTFRelUyTGpNeU5qSWdNVGc1TGpnek1pQTFOeTR6TmpRM0lERTVNQzR6TXpRZ05UZ3VORGcwTkNBeE9UQXVORGd5VERNNUxqYzRNRE1nTWpJMExqQXlOVXczTkM0ek1UZzVJREl3TlM0NE5UaEROelF1TkRjeU5DQXlNRFl1T1RVZ056UXVPVGc0TVNBeU1EY3VPVFl6SURjMUxqYzRPREVnTWpBNExqYzBOVU0zTmk0NE1EYzVJREl3T1M0M01EZ2dOemd1TVRjM01pQXlNVEF1TWpReklEYzVMalU1T1RnZ01qRXdMakl6TTBNNE1TNHdNakkwSURJeE1DNHlNak1nT0RJdU16ZzBJREl3T1M0Mk55QTRNeTR6T1NBeU1EZ3VOamt6UXpnMExqTTVOVGtnTWpBM0xqY3hOeUE0TkM0NU5qVTBJREl3Tmk0ek9UUWdPRFF1T1RjMU15QXlNRFV1TURFelF6ZzBMams0TlRJZ01qQXpMall6TVNBNE5DNDBNelEySURJd01pNHpNRElnT0RNdU5EUXlOeUF5TURFdU16RXhRemd5TGpZM01qUWdNakF3TGpVM05TQTRNUzQyT0RreElESXdNQzR3T0RVZ09EQXVOakkwTXlBeE9Ua3VPVEEzUXpjNUxqVTFPVFFnTVRrNUxqY3lPQ0EzT0M0ME5qTTNJREU1T1M0NE5qa2dOemN1TkRnek55QXlNREF1TXpFeFREYzNMalExT1RjZ01qQXdMakk0TVV3ME9TNHhPVFU0SURJeE5DNDRPREZNTmpRdU1qTXdOaUF4T0RjdU5ETTFRelkwTGpZNE55QXhPRFl1TkRnMUlEWTBMamd6TWprZ01UZzFMalF5TVNBMk5DNDJORGc0SURFNE5DNHpPRGhETmpRdU5EWTBOeUF4T0RNdU16VTFJRFl6TGprMU9UUWdNVGd5TGpRd01TQTJNeTR5TURBNElERTRNUzQyTlRWRE5qSXVOams0TmlBeE9ERXVNVFkzSURZeUxqRXdNalFnTVRnd0xqYzRJRFl4TGpRME5qRWdNVGd3TGpVeE5VTTJNQzQzT0RrNElERTRNQzR5TlRFZ05qQXVNRGcyTkNBeE9EQXVNVEUxSURVNUxqTTNOVGtnTVRnd0xqRXhOVU0xT0M0Mk5qVTBJREU0TUM0eE1UUWdOVGN1T1RZeE9DQXhPREF1TWpVZ05UY3VNekExTXlBeE9EQXVOVEUwUXpVMkxqWTBPRGdnTVRnd0xqYzNOeUExTmk0d05USXlJREU0TVM0eE5qUWdOVFV1TlRRNU5pQXhPREV1TmpVeVF6VTFMakEwTmprZ01UZ3lMakV6T1NBMU5DNDJORGd5SURFNE1pNDNNVGdnTlRRdU16YzJJREU0TXk0ek5UWkROVFF1TVRBek9DQXhPRE11T1RreklEVXpMamsyTXpVZ01UZzBMalkzTmlBMU15NDVOak15SURFNE5TNHpOalpETlRNdU9UWXlPU0F4T0RZdU1EVTJJRFUwTGpFd01qVWdNVGcyTGpjek9TQTFOQzR6TnpReElERTROeTR6TnpkRE5UUXVOalExTnlBeE9EZ3VNREUwSURVMUxqQTBOQ0F4T0RndU5Ua3pJRFUxTGpVME5qRWdNVGc1TGpBNE1rdzFOUzQxTWprZ01UZzVMakExTlZvaUlHWnBiR3c5SWlNd01FRXhPVUVpTHo0TkNqeHdZWFJvSUdROUlrMHhNelV1TXpNM0lESTBNQzR5TWpSTU1UTTRMalUwTXlBeU16QXVNRE0xVERFME1TNDNOVElnTWpFNUxqZzBNVWd4TWpndU9URTRUREV6TWk0eE1qY2dNak13TGpBek5Vd3hNelV1TXpNM0lESTBNQzR5TWpSYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0RRbzhjR0YwYUNCa1BTSk5NVEl4TGpBeE1pQXlNall1TmpVeFF6RXlNaTR4TkRFZ01qSTJMalkxTVNBeE1qTXVNak01SURJeU5pNHlPVE1nTVRJMExqRXpPU0F5TWpVdU5qTXhUREV6TlM0ek5DQXlOakl1TVRneFRERTBOaTQxTXlBeU1qVXVOakU0UXpFME55NDBNeUF5TWpZdU1qZzFJREUwT0M0MU16RWdNakkyTGpZME55QXhORGt1TmpZMElESXlOaTQyTkRoRE1UVXhMakE1T0NBeU1qWXVOalE0SURFMU1pNDBOelFnTWpJMkxqQTVOQ0F4TlRNdU5EZzVJREl5TlM0eE1EbERNVFUwTGpVd015QXlNalF1TVRJMElERTFOUzR3TnpNZ01qSXlMamM0T0NBeE5UVXVNRGN6SURJeU1TNHpPVFZETVRVMUxqQTNNeUF5TWpBdU1EQXhJREUxTkM0MU1ETWdNakU0TGpZMk5TQXhOVE11TkRnNUlESXhOeTQyT0VNeE5USXVORGMwSURJeE5pNDJPVFVnTVRVeExqQTVPQ0F5TVRZdU1UUXhJREUwT1M0Mk5qUWdNakUyTGpFME1VTXhORGd1TlRnMElESXhOaTR4TkRjZ01UUTNMalV6TWlBeU1UWXVORGMwSURFME5pNDJORGtnTWpFM0xqQTNPVU14TkRVdU56WTNJREl4Tnk0Mk9ETWdNVFExTGpBNU5pQXlNVGd1TlRNMklERTBOQzQzTWpnZ01qRTVMalV5TVVneE5EUXVOamcyVERFek5TNHpOQ0F5TkRrdU1qVTBUREV5TlM0NU9Ea2dNakU1TGpVeU5VZ3hNalV1T1RVNFF6RXlOUzQxT1RJZ01qRTRMalkySURFeU5DNDVPVEVnTWpFM0xqa3dPQ0F4TWpRdU1qSWdNakUzTGpNME9VTXhNak11TkRRNElESXhOaTQzT1NBeE1qSXVOVE0xSURJeE5pNDBORFVnTVRJeExqVTNOeUF5TVRZdU16VXhRekV5TUM0Mk1Ua2dNakUyTGpJMU55QXhNVGt1TmpVeklESXhOaTQwTVRjZ01URTRMamM0TVNBeU1UWXVPREUwUXpFeE55NDVNU0F5TVRjdU1qRXhJREV4Tnk0eE5qWWdNakUzTGpnek1TQXhNVFl1TmpJNUlESXhPQzQyTURaRE1URTJMakE1TVNBeU1Ua3VNemd5SURFeE5TNDNPREVnTWpJd0xqSTROU0F4TVRVdU56TXhJREl5TVM0eU1UaERNVEUxTGpZNE1TQXlNakl1TVRVeUlERXhOUzQ0T1RJZ01qSXpMakE0TVNBeE1UWXVNelF6SURJeU15NDVNRGRETVRFMkxqYzVOQ0F5TWpRdU56TXpJREV4Tnk0ME5qZ2dNakkxTGpReU5DQXhNVGd1TWpreUlESXlOUzQ1TURoRE1URTVMakV4TmlBeU1qWXVNemt4SURFeU1DNHdOaUF5TWpZdU5qUTRJREV5TVM0d01qSWdNakkyTGpZMU1VZ3hNakV1TURFeVdpSWdabWxzYkQwaUl6QXdRVEU1UVNJdlBnMEtQSEJoZEdnZ1pEMGlUVEl4TkM0Mk9UUWdNakE0TGpBek5Vd3lNRGt1TlRRMUlERTVPQzQyTVRoTU1qQTBMak01TmlBeE9Ea3VNakE0VERFNU5TNHpNakVnTVRrNExqQXlNVXd5TURVdU1ERTRJREl3TXk0d01qRk1NakUwTGpjd09DQXlNRGd1TURJeFRESXhOQzQyT1RRZ01qQTRMakF6TlZvaUlHWnBiR3c5SWlNd01FRXhPVUVpTHo0TkNqeHdZWFJvSUdROUlrMHhPVFF1TmprMklESXdPQzR5TmpWRE1UazFMalE1TWlBeU1EY3VORGc0SURFNU5pNHdNRFVnTWpBMkxqUTRJREU1Tmk0eE5UZ2dNakExTGpNNU5Vd3lNekF1TmprM0lESXlNeTQxTlRWTU1qRXhMams1SURFNU1DNHdNVEpETWpFekxqRXhNeUF4T0RrdU9EWTJJREl4TkM0eE5UVWdNVGc1TGpNMk5DQXlNVFF1T1RVMUlERTRPQzQxT0RWRE1qRTFMalkzTVNBeE9EY3VPVEU1SURJeE5pNHhPRFFnTVRnM0xqQTNOU0F5TVRZdU5ETTVJREU0Tmk0eE5EVkRNakUyTGpZNU5DQXhPRFV1TWpFMUlESXhOaTQyT0RFZ01UZzBMakl6TlNBeU1UWXVOREF4SURFNE15NHpNVEZETWpFMkxqRXlNU0F4T0RJdU16ZzRJREl4TlM0MU9EWWdNVGd4TGpVMU55QXlNVFF1T0RVeklERTRNQzQ1TURsRE1qRTBMakV5TVNBeE9EQXVNall4SURJeE15NHlNVGtnTVRjNUxqZ3lNU0F5TVRJdU1qUTJJREUzT1M0Mk16ZERNakV4TGpJM015QXhOemt1TkRVeklESXhNQzR5TmpjZ01UYzVMalV6TWlBeU1Ea3VNek00SURFM09TNDROalZETWpBNExqUXdPQ0F4T0RBdU1UazRJREl3Tnk0MU9TQXhPREF1TnpjeklESXdOaTQ1TnpRZ01UZ3hMalV5TjBNeU1EWXVNelU0SURFNE1pNHlPREVnTWpBMUxqazJOeUF4T0RNdU1UZzBJREl3TlM0NE5ETWdNVGcwTGpFek9VTXlNRFV1TnpJZ01UZzFMakE1TkNBeU1EVXVPRFk1SURFNE5pNHdOak1nTWpBMkxqSTNOQ0F4T0RZdU9UUXlUREl3Tmk0eU5TQXhPRFl1T1RZMVRESXlNUzR5T0RVZ01qRTBMalF3T0V3eE9UTXVNREkwSURFNU9TNDRNVGhXTVRrNUxqZ3pPRU14T1RJdU1UTTJJREU1T1M0ME56Z2dNVGt4TGpFMk5DQXhPVGt1TXpVNUlERTVNQzR5TVRFZ01UazVMalE1TTBNeE9Ea3VNalU1SURFNU9TNDJNamNnTVRnNExqTTJNU0F5TURBdU1ERWdNVGczTGpZeE5TQXlNREF1TmpBeFF6RTROaTQ0TmprZ01qQXhMakU1TWlBeE9EWXVNekF5SURJd01TNDVOamdnTVRnMUxqazNOU0F5TURJdU9EUTNRekU0TlM0Mk5EZ2dNakF6TGpjeU5pQXhPRFV1TlRjeUlESXdOQzQyTnpVZ01UZzFMamMxTnlBeU1EVXVOVGt5UXpFNE5TNDVOREVnTWpBMkxqVXhJREU0Tmk0ek56a2dNakEzTGpNMk1TQXhPRGN1TURJeklESXdPQzR3TlRaRE1UZzNMalkyTnlBeU1EZ3VOelV4SURFNE9DNDBPVE1nTWpBNUxqSTJNeUF4T0RrdU5ERXpJREl3T1M0MU16aERNVGt3TGpNek15QXlNRGt1T0RFeklERTVNUzR6TVRNZ01qQTVMamcwSURFNU1pNHlORGdnTWpBNUxqWXhOa014T1RNdU1UZ3lJREl3T1M0ek9USWdNVGswTGpBek55QXlNRGd1T1RJMklERTVOQzQzTWlBeU1EZ3VNalk0VERFNU5DNDJPVFlnTWpBNExqSTJOVm9pSUdacGJHdzlJaU13TUVFeE9VRWlMejROQ2p4d1lYUm9JR1E5SWsweU5EY3VNemM1SURFek1DNDNOalZNTWpNMkxqZzROaUF4TWpjdU5qUTVUREl5Tmk0ek9Ea2dNVEkwTGpVek1sWXhNell1T1RrMVRESXpOaTQ0T0RZZ01UTXpMamc0TWt3eU5EY3VNemM1SURFek1DNDNOalZhSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrRFFvOGNHRjBhQ0JrUFNKTk1qTXpMalF4TWlBeE5EUXVOalk1UXpJek15NDBNRGtnTVRRekxqVTNNaUF5TXpNdU1ETTRJREUwTWk0MU1EWWdNak15TGpNMU5TQXhOREV1TmpNeVRESTNNQ0F4TXpBdU56WXlUREl6TWk0ek5EZ2dNVEU1TGpnNE9VTXlNek11TURNMElERXhPUzR3TVRNZ01qTXpMalF3TmlBeE1UY3VPVFF6SURJek15NDBNRGtnTVRFMkxqZzBNa015TXpNdU5EQTVJREV4TlM0ME5Ea2dNak15TGpnek9TQXhNVFF1TVRFeklESXpNUzQ0TWpRZ01URXpMakV5T0VNeU16QXVPREVnTVRFeUxqRTBNaUF5TWprdU5ETTBJREV4TVM0MU9Ea2dNakkzTGprNU9TQXhNVEV1TlRnNVF6SXlOaTQxTmpRZ01URXhMalU0T1NBeU1qVXVNVGc0SURFeE1pNHhORElnTWpJMExqRTNNeUF4TVRNdU1USTRRekl5TXk0eE5Ua2dNVEUwTGpFeE15QXlNakl1TlRnNUlERXhOUzQwTkRrZ01qSXlMalU0T1NBeE1UWXVPRFF5UXpJeU1pNDFPVFVnTVRFM0xqZzVNaUF5TWpJdU9UTXpJREV4T0M0NU1UVWdNakl6TGpVMU5pQXhNVGt1TnpjelF6SXlOQzR4TnprZ01USXdMall6TVNBeU1qVXVNRFUzSURFeU1TNHlPRE1nTWpJMkxqQTNNeUF4TWpFdU5qUXlWakV5TVM0Mk56Vk1NalUyTGpZNE5TQXhNekF1TnpZeVRESXlOaTR3TmpZZ01UTTVMamd6T1ZZeE16a3VPRFl5UXpJeU5TNHdOVEVnTVRRd0xqSXlNaUF5TWpRdU1UY3pJREUwTUM0NE56UWdNakl6TGpVMUlERTBNUzQzTXpKRE1qSXlMamt5TnlBeE5ESXVOVGtnTWpJeUxqVTVJREUwTXk0Mk1USWdNakl5TGpVNE1pQXhORFF1TmpZeVF6SXlNaTQxT0RJZ01UUTJMakExTlNBeU1qTXVNVFV5SURFME55NHpPVEVnTWpJMExqRTJOeUF4TkRndU16YzNRekl5TlM0eE9ERWdNVFE1TGpNMk1pQXlNall1TlRVM0lERTBPUzQ1TVRVZ01qSTNMams1TWlBeE5Ea3VPVEUxUXpJeU9TNDBNamNnTVRRNUxqa3hOU0F5TXpBdU9EQXpJREUwT1M0ek5qSWdNak14TGpneE55QXhORGd1TXpjM1F6SXpNaTQ0TXpJZ01UUTNMak01TVNBeU16TXVOREF5SURFME5pNHdOVFVnTWpNekxqUXdNaUF4TkRRdU5qWXlUREl6TXk0ME1USWdNVFEwTGpZMk9Wb2lJR1pwYkd3OUlpTXdNRUV4T1VFaUx6NE5Danh3WVhSb0lHUTlJazB5TVRRdU1qTXhJRFV6TGpZNU1qbE1NakEwTGpVek5DQTFPQzQyT1RJNVRERTVOQzQ0TkRRZ05qTXVOamt5T0V3eU1ETXVPVElnTnpJdU5UQTJNVXd5TURrdU1EWTRJRFl6TGpBNU5qRk1NakUwTGpJeE55QTFNeTQyT0RZeVRESXhOQzR5TXpFZ05UTXVOamt5T1ZvaUlHWnBiR3c5SWlNd01FRXhPVUVpTHo0TkNqeHdZWFJvSUdROUlrMHlNVFF1TkRZNElEY3pMakV4T1RSRE1qRXpMalkyT0NBM01pNHpORFkwSURJeE1pNDJNeUEzTVM0NE5EYzVJREl4TVM0MU1USWdOekV1TmprNU5Fd3lNekF1TWpJZ016Z3VNVFkyTkV3eE9UVXVOamM0SURVMkxqTXlOakpETVRrMUxqVXlOQ0ExTlM0eU16WTJJREU1TlM0d01EZ2dOVFF1TWpJMU5TQXhPVFF1TWpBNUlEVXpMalEwTmpKRE1Ua3pMakU1TkNBMU1pNDBOakUwSURFNU1TNDRNVGNnTlRFdU9UQTROU0F4T1RBdU16Z3lJRFV4TGprd09URkRNVGc0TGprME9DQTFNUzQ1TURrM0lERTROeTQxTnpJZ05USXVORFl6T0NBeE9EWXVOVFU0SURVekxqUTBPVFZETVRnMUxqVTBNeUExTkM0ME16VXpJREU0TkM0NU56UWdOVFV1TnpjeE9DQXhPRFF1T1RjMUlEVTNMakUyTlRKRE1UZzBMamszTlNBMU9DNDFOVGcySURFNE5TNDFORFlnTlRrdU9EazBOaUF4T0RZdU5UWXhJRFl3TGpnM09UVkRNVGczTGpNeU9TQTJNUzQyTVRZeUlERTRPQzR6TVRJZ05qSXVNVEEyT1NBeE9Ea3VNemMySURZeUxqSTROVFpETVRrd0xqUTBJRFl5TGpRMk5EUWdNVGt4TGpVek5DQTJNaTR6TWpJM0lERTVNaTQxTVRNZ05qRXVPRGM1TlV3eE9USXVOVE0zSURZeExqa3dNamhNTWpJd0xqZ3dNU0EwTnk0ek1EazJUREl3TlM0M056TWdOelF1TnpVeU4xWTNOQzQzTnpJM1F6SXdOUzR6TVRVZ056VXVOekl6T0NBeU1EVXVNVFk0SURjMkxqYzRPRFFnTWpBMUxqTTFNaUEzTnk0NE1qTkRNakExTGpVek55QTNPQzQ0TlRjMklESXdOaTR3TkRNZ056a3VPREV5TmlBeU1EWXVPREF6SURnd0xqVTFPVE5ETWpBM0xqTXdOU0E0TVM0d05EWTVJREl3Tnk0NU1ESWdPREV1TkRNek55QXlNRGd1TlRVNUlEZ3hMalk1TnpSRE1qQTVMakl4TlNBNE1TNDVOakV4SURJd09TNDVNVGtnT0RJdU1EazJOeUF5TVRBdU5qSTVJRGd5TGpBNU5qUkRNakV4TGpNMElEZ3lMakE1TmpFZ01qRXlMakEwTXlBNE1TNDVOVGs1SURJeE1pNDJPVGtnT0RFdU5qazFOa015TVRNdU16VTJJRGd4TGpRek1UTWdNakV6TGprMU1pQTRNUzR3TkRRZ01qRTBMalExTkNBNE1DNDFOVFpETWpFMExqazFOaUE0TUM0d05qYzVJREl4TlM0ek5UVWdOemt1TkRnNE5TQXlNVFV1TmpJMklEYzRMamcxTVVNeU1UVXVPRGs0SURjNExqSXhNelVnTWpFMkxqQXpOeUEzTnk0MU16QXlJREl4Tmk0d016Y2dOell1T0RRd00wTXlNVFl1TURNM0lEYzJMakUxTURRZ01qRTFMamc1TmlBM05TNDBOamN6SURJeE5TNDJNalFnTnpRdU9ETkRNakUxTGpNMU1pQTNOQzR4T1RJM0lESXhOQzQ1TlRNZ056TXVOakV6TnlBeU1UUXVORFV4SURjekxqRXlOa3d5TVRRdU5EWTRJRGN6TGpFeE9UUmFJaUJtYVd4c1BTSWpNREJCTVRsQklpOCtEUW84Y0dGMGFDQmtQU0pOTVRjM0xqUTVNaUExTlM0ek1qazBUREUzTlM0M056VWdOVFF1TmpNNU5Fd3hOemt1TkRRNElEUTFMamszTWpoRE1UZ3dMakl6TXlBME5DNHhNVFU1SURFNE1DNHlNallnTkRJdU1ETXlNeUF4TnprdU5ESTVJRFF3TGpFNE1EUkRNVGM0TGpZek1TQXpPQzR6TWpnMUlERTNOeTR4TURrZ016WXVPRFlnTVRjMUxqRTVOeUF6Tmk0d09UYzVRekUzTXk0eU9EVWdNelV1TXpNMU9TQXhOekV1TVRNNUlETTFMak0wTWpjZ01UWTVMakl6TWlBek5pNHhNVFk1UXpFMk55NHpNalVnTXpZdU9Ea3hNU0F4TmpVdU9ERXpJRE00TGpNMk9UTWdNVFkxTGpBeU9DQTBNQzR5TWpZeVRERTJNUzR6TlRVZ05EZ3VPRGt5T0V3eE5Ua3VOak01SURRNExqSXdOakpNTVRZekxqTXhNaUF6T1M0MU16azJRekUyTkM0eU9EWWdNemN1TWpReE1TQXhOall1TVRZeElETTFMalF4TWpZZ01UWTRMalV5TkNBek5DNDBOVFkxUXpFM01DNDRPRGNnTXpNdU5UQXdOQ0F4TnpNdU5UUTBJRE16TGpRNU5Ea2dNVGMxTGpreE1TQXpOQzQwTkRFelF6RTNPQzR5TnpnZ016VXVNemczTnlBeE9EQXVNVFl4SURNM0xqSXdPRFFnTVRneExqRTBOU0F6T1M0MU1ESTRRekU0TWk0eE15QTBNUzQzT1RjeklERTRNaTR4TXpZZ05EUXVNemMzTnlBeE9ERXVNVFl4SURRMkxqWTNOakpNTVRjM0xqUTVNaUExTlM0ek1qazBXaUlnWm1sc2JEMGlJekF3UVRFNVFTSXZQZzBLUEhCaGRHZ2daRDBpVFRFM015NHpNamdnTkRBdU5UUTJNME14TnpJdU5qQTVJRFF3TGpJMU5qa2dNVGN4TGpnek55QTBNQzR4TURnMElERTNNUzR3TlRnZ05EQXVNVEE1TTBNeE56QXVNamM1SURRd0xqRXhNRElnTVRZNUxqVXdOeUEwTUM0eU5qQTJJREUyT0M0M09EZ2dOREF1TlRVeE4wTXhOamd1TURZNUlEUXdMamcwTWpnZ01UWTNMalF4TmlBME1TNHlOamtnTVRZMkxqZzJOeUEwTVM0NE1EVTNRekUyTmk0ek1UZ2dOREl1TXpReU5TQXhOalV1T0RneklEUXlMamszT1RNZ01UWTFMalU0T0NBME15NDJOemsyVERFMk15NHdPRGtnTkRrdU5UWXlPRXd4TnpRdU1ETTVJRFV6TGprMU1qaE1NVGMyTGpVek9DQTBPQzR3TmpJNVF6RTNOaTQ0TXpVZ05EY3VNell6TmlBeE56WXVPVGcySURRMkxqWXhORFFnTVRjMkxqazROU0EwTlM0NE5UZ3lRekUzTmk0NU9ETWdORFV1TVRBeE9TQXhOell1T0RJNElEUTBMak0xTXpRZ01UYzJMalV5T0NBME15NDJOVFUwUXpFM05pNHlNamtnTkRJdU9UVTNNeUF4TnpVdU56a2dOREl1TXpJek5TQXhOelV1TWpNNElEUXhMamM1UXpFM05DNDJPRFlnTkRFdU1qVTJOU0F4TnpRdU1ETXlJRFF3TGpnek16a2dNVGN6TGpNeE1TQTBNQzQxTkRZelNERTNNeTR6TWpoYVRURTNNQzR6TURnZ05EY3VOamN5T1VNeE5qa3VPVGszSURRM0xqVTBPRGtnTVRZNUxqY3pJRFEzTGpNek9DQXhOamt1TlRReklEUTNMakEyTmpsRE1UWTVMak0xTlNBME5pNDNPVFU0SURFMk9TNHlOVFFnTkRZdU5EYzJOeUF4TmprdU1qVTBJRFEyTGpFMVF6RTJPUzR5TlRNZ05EVXVPREl6TkNBeE5qa3VNelV5SURRMUxqVXdNemtnTVRZNUxqVXpPQ0EwTlM0eU16SkRNVFk1TGpjeU5TQTBOQzQ1TmpBeElERTJPUzQ1T1NBME5DNDNORGdnTVRjd0xqTXdNU0EwTkM0Mk1qSTNRekUzTUM0Mk1URWdORFF1TkRrM015QXhOekF1T1RVeklEUTBMalEyTkRRZ01UY3hMakk0TXlBME5DNDFNamM1UXpFM01TNDJNVE1nTkRRdU5Ua3hOU0F4TnpFdU9URTJJRFEwTGpjME9EY2dNVGN5TGpFMU5DQTBOQzQ1TnprM1F6RTNNaTR6T1RJZ05EVXVNakV3TnlBeE56SXVOVFUwSURRMUxqVXdOU0F4TnpJdU5qRTVJRFExTGpneU5UUkRNVGN5TGpZNE5TQTBOaTR4TkRVNElERTNNaTQyTlRFZ05EWXVORGMzT1NBeE56SXVOVEl5SURRMkxqYzNPVFZETVRjeUxqUXpPQ0EwTmk0NU56azVJREUzTWk0ek1UVWdORGN1TVRZeUlERTNNaTR4TlRnZ05EY3VNekUxTkVNeE56SXVNREF4SURRM0xqUTJPRGdnTVRjeExqZ3hOQ0EwTnk0MU9UQXpJREUzTVM0Mk1Ea2dORGN1TmpjeU9VTXhOekV1TkRBeklEUTNMamMxTmlBeE56RXVNVGd5SURRM0xqYzVPRGdnTVRjd0xqazFPQ0EwTnk0M09UZzRRekUzTUM0M016VWdORGN1TnprNE9DQXhOekF1TlRFMElEUTNMamMxTmlBeE56QXVNekE0SURRM0xqWTNNamxhSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrRFFvOGNHRjBhQ0JrUFNKTk1qSXdMakU1TmlBeE1EWXVOamsyVERJeE9TNDBOemtnTVRBMUxqQXlPVXd5TWpndU16Y3pJREV3TVM0ME1qbERNak13TGpJME15QXhNREF1TmpNMUlESXpNUzQzTVRnZ09Ua3VNVFl3TWlBeU16SXVORGM1SURrM0xqTXlNVU15TXpNdU1qUWdPVFV1TkRneE9TQXlNek11TWpJM0lEa3pMalF5TmlBeU16SXVORFF6SURreExqVTVOakZETWpNeExqWTFPQ0E0T1M0M05qWXlJREl6TUM0eE5qVWdPRGd1TXpBNE5pQXlNamd1TWpnMUlEZzNMalV6TnpSRE1qSTJMalF3TlNBNE5pNDNOall4SURJeU5DNHlPRGdnT0RZdU56UXlPQ0F5TWpJdU16a2dPRGN1TkRjeU5Vd3lNVE11TkRnMklEa3hMakEyTlRoTU1qRXlMamMzTlNBNE9TNHpPVGt4VERJeU1TNDJOeklnT0RVdU56azVNa015TWpRdU1ESTJJRGcwTGpnNE5qUWdNakkyTGpZMU5TQTROQzQ1TURrMElESXlPQzQ1T1RFZ09EVXVPRFl6TTBNeU16RXVNekkzSURnMkxqZ3hOeklnTWpNekxqRTRNeUE0T0M0Mk1qVXpJREl6TkM0eE5UZ2dPVEF1T0RrM1F6SXpOUzR4TXpNZ09UTXVNVFk0T0NBeU16VXVNVFE0SURrMUxqY3lNVGNnTWpNMExqSWdPVGd1TURBME0wTXlNek11TWpVeklERXdNQzR5T0RjZ01qTXhMalF4T0NBeE1ESXVNVEUySURJeU9TNHdPVFFnTVRBekxqQTVOa3d5TWpBdU1UazJJREV3Tmk0Mk9UWmFJaUJtYVd4c1BTSWpNREJCTVRsQklpOCtEUW84Y0dGMGFDQmtQU0pOTWpJNExqQXlJRGt6TGpNNE5UaERNakkzTGpReE5TQTVNUzQ1TnpVNUlESXlOaTR5TlRnZ09UQXVPRFUzSURJeU5DNDRNRFFnT1RBdU1qYzFRekl5TXk0ek5TQTRPUzQyT1RNeElESXlNUzQzTVRnZ09Ea3VOamsxTnlBeU1qQXVNalkySURrd0xqSTRNalZNTWpFMExqRTRJRGt5TGpjME1qUk1NakU0TGpjMU1pQXhNRE11TXpneVRESXlOQzQ0TURjZ01UQXdMamt6TWtNeU1qVXVOVE14SURFd01DNDJORFVnTWpJMkxqRTRPU0F4TURBdU1qSXhJREl5Tmk0M05EUWdPVGt1TmpnMU5VTXlNamN1TWprNElEazVMakUwT1RnZ01qSTNMamN6T0NBNU9DNDFNVEk1SURJeU9DNHdNemdnT1RjdU9ERXhORU15TWpndU16TTRJRGszTGpFd09Ua2dNakk0TGpRNU1pQTVOaTR6TlRjM0lESXlPQzQwT1RFZ09UVXVOVGs0TVVNeU1qZ3VORGtnT1RRdU9ETTROaUF5TWpndU16TTFJRGswTGpBNE5qY2dNakk0TGpBek15QTVNeTR6T0RVNFNESXlPQzR3TWxwTk1qSXdMalk1TVNBNU5pNHpPRFUzUXpJeU1DNDFORGNnT1RZdU1ETTJJREl5TUM0MU16RWdPVFV1TmpRNE15QXlNakF1TmpRNElEazFMakk0T0RoRE1qSXdMamMyTkNBNU5DNDVNamt6SURJeU1TNHdNRFVnT1RRdU5qSXdNU0F5TWpFdU16TWdPVFF1TkRFek9VTXlNakV1TmpVMUlEazBMakl3TnpZZ01qSXlMakEwTkNBNU5DNHhNVGN4SURJeU1pNDBNeUE1TkM0eE5UYzNRekl5TWk0NE1UVWdPVFF1TVRrNE15QXlNak11TVRjMUlEazBMak0yTnpVZ01qSXpMalEwTnlBNU5DNDJNelkyUXpJeU15NDNNVGtnT1RRdU9UQTFOaUF5TWpNdU9EZzJJRGsxTGpJMU56Z2dNakl6TGpreU1TQTVOUzQyTXpNeVF6SXlNeTQ1TlRVZ09UWXVNREE0TmlBeU1qTXVPRFUxSURrMkxqTTROQ0F5TWpNdU5qTTJJRGsyTGpZNU5UWkRNakl6TGpReE9DQTVOeTR3TURjeUlESXlNeTR3T1RVZ09UY3VNak0xTmlBeU1qSXVOekl6SURrM0xqTTBNVGxETWpJeUxqTTFJRGszTGpRME9ETWdNakl4TGprMU1TQTVOeTQwTWpZeElESXlNUzQxT1RRZ09UY3VNamM1TVVNeU1qRXVNVGcwSURrM0xqRXdPRE1nTWpJd0xqZzFPU0E1Tmk0M09EY3pJREl5TUM0Mk9URWdPVFl1TXpnMU4xb2lJR1pwYkd3OUlpTXdNRUV4T1VFaUx6NE5Danh3WVhSb0lHUTlJazB5TVRJdU9EQTJJREUzTWk0M05qaE1NakV6TGpVeE55QXhOekV1TVRBeVRESXlNaTQwTkRFZ01UYzBMalkyT0VNeU1qUXVNek0ySURFM05TNHpOamNnTWpJMkxqUXpOeUF4TnpVdU16SWdNakk0TGpJNU5pQXhOelF1TlRNNFF6SXpNQzR4TlRZZ01UY3pMamMxTmlBeU16RXVOakk1SURFM01pNHpNREVnTWpNeUxqUXdNU0F4TnpBdU5EZ3hRekl6TXk0eE56UWdNVFk0TGpZMk1pQXlNek11TVRnMUlERTJOaTQyTWpJZ01qTXlMalF6TXlBeE5qUXVOemswUXpJek1TNDJPQ0F4TmpJdU9UWTNJREl6TUM0eU1qUWdNVFl4TGpRNU5pQXlNamd1TXpjeklERTJNQzQyT1RWTU1qRTVMalEwT0NBeE5UY3VNVEk0VERJeU1DNHhOVGtnTVRVMUxqUTJNa3d5TWprdU1EZ3pJREUxT1M0d01qaERNak13TGpJMU5TQXhOVGt1TkRrM0lESXpNUzR6TWpFZ01UWXdMakU0TlNBeU16SXVNakU1SURFMk1TNHdOVFJETWpNekxqRXhOeUF4TmpFdU9USXlJREl6TXk0NE15QXhOakl1T1RVMElESXpOQzR6TVRnZ01UWTBMakE1UXpJek5DNDRNRFVnTVRZMUxqSXlOaUF5TXpVdU1EVTRJREUyTmk0ME5EUWdNak0xTGpBMklERTJOeTQyTnpWRE1qTTFMakEyTXlBeE5qZ3VPVEEySURJek5DNDRNVFlnTVRjd0xqRXlOU0F5TXpRdU16TTBJREUzTVM0eU5qTkRNak16TGpnMU1TQXhOekl1TkRBeElESXpNeTR4TkRJZ01UY3pMalF6TmlBeU16SXVNalE0SURFM05DNHpNRGhETWpNeExqTTFOQ0F4TnpVdU1UZ2dNak13TGpJNU1TQXhOelV1T0RjeklESXlPUzR4TWpFZ01UYzJMak0wTmtNeU1qY3VPVFV4SURFM05pNDRNaUF5TWpZdU5qazNJREUzTnk0d05qVWdNakkxTGpReU9TQXhOemN1TURZM1F6SXlOQzR4TmpJZ01UYzNMakEzSURJeU1pNDVNRFlnTVRjMkxqZ3pJREl5TVM0M016UWdNVGMyTGpNMk1rd3lNVEl1T0RBMklERTNNaTQzTmpoYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0RRbzhjR0YwYUNCa1BTSk5Nakk0TGpBeU5pQXhOamd1TnpJMVF6SXlPQzR6TWpNZ01UWTRMakF5TmlBeU1qZ3VORGMxSURFMk55NHlOemNnTWpJNExqUTNNeUF4TmpZdU5USkRNakk0TGpRM01pQXhOalV1TnpZMElESXlPQzR6TVRjZ01UWTFMakF4TmlBeU1qZ3VNREUzSURFMk5DNHpNVGhETWpJM0xqY3hOeUF4TmpNdU5qSWdNakkzTGpJM09TQXhOakl1T1RnMklESXlOaTQzTWpjZ01UWXlMalExTWtNeU1qWXVNVGMxSURFMk1TNDVNVGtnTWpJMUxqVXlJREUyTVM0ME9UWWdNakkwTGpnZ01UWXhMakl3T1V3eU1UZ3VOek0wSURFMU9DNDNPREpNTWpFMExqSXhOQ0F4TmprdU5EUTRUREl5TUM0eU56a2dNVGN4TGpnM01rTXlNakF1T1RrNUlERTNNaTR4TmpFZ01qSXhMamMzTVNBeE56SXVNekE1SURJeU1pNDFOVEVnTVRjeUxqTXdPRU15TWpNdU16TWdNVGN5TGpNd055QXlNalF1TVRBeElERTNNaTR4TlRZZ01qSTBMamd5TVNBeE56RXVPRFkxUXpJeU5TNDFOQ0F4TnpFdU5UYzBJREl5Tmk0eE9UTWdNVGN4TGpFME9DQXlNall1TnpReklERTNNQzQyTVRKRE1qSTNMakk1TWlBeE56QXVNRGMxSURJeU55NDNNamNnTVRZNUxqUXpPU0F5TWpndU1ESXpJREUyT0M0M016aE1Nakk0TGpBeU5pQXhOamd1TnpJMVdrMHlNakF1TmpneElERTJOUzQzT1RKRE1qSXdMamMzTnlBeE5qVXVOVFkzSURJeU1DNDVNak1nTVRZMUxqTTJOU0F5TWpFdU1UQTVJREUyTlM0eU1ERkRNakl4TGpJNU5pQXhOalV1TURNNElESXlNUzQxTVRjZ01UWTBMamt4TmlBeU1qRXVOelUzSURFMk5DNDRORFpETWpJeExqazVOeUF4TmpRdU56YzFJREl5TWk0eU5TQXhOalF1TnpVM0lESXlNaTQwT1RrZ01UWTBMamM1TWtNeU1qSXVOelEzSURFMk5DNDRNamdnTWpJeUxqazROQ0F4TmpRdU9URTNJREl5TXk0eE9UTWdNVFkxTGpBMU1rTXlNak11TkRBeUlERTJOUzR4T0RjZ01qSXpMalUzTnlBeE5qVXVNelkySURJeU15NDNNRFlnTVRZMUxqVTNOVU15TWpNdU9ETTJJREUyTlM0M09EUWdNakl6TGpreE5pQXhOall1TURFNElESXlNeTQ1TkRFZ01UWTJMakkyUXpJeU15NDVOallnTVRZMkxqVXdNeUF5TWpNdU9UTTFJREUyTmk0M05EZ2dNakl6TGpnMU1TQXhOall1T1RjM1F6SXlNeTQzTmpjZ01UWTNMakl3TnlBeU1qTXVOak14SURFMk55NDBNVFlnTWpJekxqUTFOQ0F4TmpjdU5UZzRRekl5TXk0eU5UVWdNVFkzTGpjM09DQXlNak11TURFeElERTJOeTQ1TVRjZ01qSXlMamMwTkNBeE5qY3VPVGswUXpJeU1pNDBOemNnTVRZNExqQTNNaUF5TWpJdU1UazFJREUyT0M0d09EVWdNakl4TGpreU1TQXhOamd1TURNeVF6SXlNUzQyTkRnZ01UWTNMamszT1NBeU1qRXVNemt5SURFMk55NDROak1nTWpJeExqRTNOU0F4TmpjdU5qa3pRekl5TUM0NU5UZ2dNVFkzTGpVeU15QXlNakF1TnpnM0lERTJOeTR6TURRZ01qSXdMalkzTnlBeE5qY3VNRFUxUXpJeU1DNDFPVEVnTVRZMkxqZzFOU0F5TWpBdU5UUTJJREUyTmk0Mk5DQXlNakF1TlRRMklERTJOaTQwTWpORE1qSXdMalUwTmlBeE5qWXVNakEzSURJeU1DNDFPVEVnTVRZMUxqazVNaUF5TWpBdU5qYzNJREUyTlM0M09USklNakl3TGpZNE1Wb2lJR1pwYkd3OUlpTXdNRUV4T1VFaUx6NE5Danh3WVhSb0lHUTlJazB4TmpBdU5UQTBJREl4TXk0M01ERk1NVFl5TGpJeUlESXhNeTR3TURWTU1UWTFMamt5TkNBeU1qRXVOalExUXpFMk5pNHpNVGNnTWpJeUxqVTJNU0F4TmpZdU9Ea3pJREl5TXk0ek9UTWdNVFkzTGpZeE55QXlNalF1TURrMFF6RTJPQzR6TkRJZ01qSTBMamM1TkNBeE5qa3VNakF4SURJeU5TNHpORGtnTVRjd0xqRTBOaUF5TWpVdU56STNRekUzTVM0d09USWdNakkyTGpFd05TQXhOekl1TVRBMUlESXlOaTR5T1RnZ01UY3pMakV5TnlBeU1qWXVNamsyUXpFM05DNHhORGtnTWpJMkxqSTVOQ0F4TnpVdU1UWXhJREl5Tmk0d09UWWdNVGMyTGpFd05TQXlNalV1TnpFMVF6RTNOeTR3TkRrZ01qSTFMak16TXlBeE56Y3VPVEEySURJeU5DNDNOelFnTVRjNExqWXlOeUF5TWpRdU1EZERNVGM1TGpNME9DQXlNak11TXpZM0lERTNPUzQ1TWlBeU1qSXVOVE15SURFNE1DNHpNRGtnTWpJeExqWXhORU14T0RBdU5qazRJREl5TUM0Mk9UWWdNVGd3TGpnNU55QXlNVGt1TnpFeklERTRNQzQ0T1RVZ01qRTRMamN5UXpFNE1DNDRPVE1nTWpFM0xqY3lOeUF4T0RBdU5qZzVJREl4Tmk0M05EUWdNVGd3TGpJNU5pQXlNVFV1T0RJNFRERTNOaTQxT1RJZ01qQTNMakU1TVV3eE56Z3VNekE1SURJd05pNDBPVEZNTVRneUxqQXhOaUF5TVRVdU1UTXhRekU0TWk0MU1ETWdNakUyTGpJMk55QXhPREl1TnpVMUlESXhOeTQwT0RZZ01UZ3lMamMxT0NBeU1UZ3VOekUyUXpFNE1pNDNOaUF5TVRrdU9UUTNJREU0TWk0MU1UTWdNakl4TGpFMk5pQXhPREl1TURNZ01qSXlMak13TkVNeE9ERXVOVFEzSURJeU15NDBORElnTVRnd0xqZ3pPU0F5TWpRdU5EYzNJREUzT1M0NU5EUWdNakkxTGpNME9VTXhOemt1TURVZ01qSTJMakl5TVNBeE56Y3VPVGczSURJeU5pNDVNVE1nTVRjMkxqZ3hOeUF5TWpjdU16ZzJRekUzTlM0Mk5EY2dNakkzTGpnMU9TQXhOelF1TXpreklESXlPQzR4TURRZ01UY3pMakV5TlNBeU1qZ3VNVEEzUXpFM01TNDROVGdnTWpJNExqRXdPU0F4TnpBdU5qQXlJREl5Tnk0NE5qa2dNVFk1TGpRek1TQXlNamN1TkVNeE5qZ3VNalU1SURJeU5pNDVNekVnTVRZM0xqRTVNeUF5TWpZdU1qUXpJREUyTmk0eU9UWWdNakkxTGpNM05FTXhOalV1TXprNElESXlOQzQxTURZZ01UWTBMalk0TlNBeU1qTXVORGMwSURFMk5DNHhPVGNnTWpJeUxqTXpPRXd4TmpBdU5UQTBJREl4TXk0M01ERmFJaUJtYVd4c1BTSWpNREJCTVRsQklpOCtEUW84Y0dGMGFDQmtQU0pOTVRjMExqSXhJREl5TVM0eU9UVkRNVGMxTGpZMk1TQXlNakF1TnpBMklERTNOaTQ0TVRJZ01qRTVMalU0TXlBeE56Y3VOREV4SURJeE9DNHhOekZETVRjNExqQXhJREl4Tmk0M05Ua2dNVGM0TGpBd09DQXlNVFV1TVRjMUlERTNOeTQwTURZZ01qRXpMamMyTlV3eE56UXVPRGczSURJd055NDRPRFZNTVRZekxqazBOeUF5TVRJdU16RTFUREUyTmk0ME5qWWdNakU0TGpFM09FTXhOamN1TURZNUlESXhPUzQxT0RjZ01UWTRMakl5TXlBeU1qQXVOekEzSURFMk9TNDJOelVnTWpJeExqSTVNVU14TnpFdU1USTNJREl5TVM0NE56VWdNVGN5TGpjMU9DQXlNakV1T0RjMklERTNOQzR5TVNBeU1qRXVNamsxV2sweE56RXVNVFU1SURJeE5DNHhOekZETVRjeExqVXlOU0F5TVRRdU1ESWdNVGN4TGprek5DQXlNVE11T1RrM0lERTNNaTR6TVRVZ01qRTBMakV3TmtNeE56SXVOamszSURJeE5DNHlNVFlnTVRjekxqQXlPQ0F5TVRRdU5EVWdNVGN6TGpJMU1TQXlNVFF1TnpkRE1UY3pMalEzTkNBeU1UVXVNRGtnTVRjekxqVTNOaUF5TVRVdU5EYzFJREUzTXk0MU16a2dNakUxTGpnMlF6RTNNeTQxTURJZ01qRTJMakkwTlNBeE56TXVNekk1SURJeE5pNDJNRFVnTVRjekxqQTBPQ0F5TVRZdU9EYzVRekUzTWk0M05qZ2dNakUzTGpFMU15QXhOekl1TXprNElESXhOeTR6TWpVZ01UY3lMakF3TWlBeU1UY3VNell6UXpFM01TNDJNRGNnTWpFM0xqUXdNaUF4TnpFdU1qQTVJREl4Tnk0ek1EWWdNVGN3TGpnM09DQXlNVGN1TURreVF6RTNNQzQxTkRjZ01qRTJMamczTnlBeE56QXVNekF6SURJeE5pNDFOVGdnTVRjd0xqRTRPQ0F5TVRZdU1UZzRRekUzTUM0d056SWdNakUxTGpneE9DQXhOekF1TURreklESXhOUzQwTWpFZ01UY3dMakkwTmlBeU1UVXVNRFkxUXpFM01DNDBNakVnTWpFMExqWTJJREUzTUM0M05USWdNakUwTGpNMElERTNNUzR4TmprZ01qRTBMakUzTVVneE56RXVNVFU1V2lJZ1ptbHNiRDBpSXpBd1FURTVRU0l2UGcwS1BIQmhkR2dnWkQwaVRUa3lMalF4T0RZZ01qQTJMalkxTVV3NU5DNHhNelE1SURJd055NHpOREZNT1RBdU5EWXlNU0F5TVRZdU1EQTRRemc1TGpZM05UVWdNakUzTGpnMk1pQTRPUzQyTnprM0lESXhPUzQ1TkRRZ09UQXVORGN6TnlBeU1qRXVOemsxUXpreExqSTJOemdnTWpJekxqWTBOeUE1TWk0M09EWTJJREl5TlM0eE1UWWdPVFF1TmprMk1pQXlNalV1T0RjNVF6azJMall3TlRjZ01qSTJMalkwTXlBNU9DNDNORGswSURJeU5pNDJNemtnTVRBd0xqWTFOaUF5TWpVdU9EWTRRekV3TWk0MU5qSWdNakkxTGpBNU55QXhNRFF1TURjMUlESXlNeTQyTWpJZ01UQTBMamcyTWlBeU1qRXVOelk0VERFd09DNDFNamdnTWpFekxqRXdNVXd4TVRBdU1qUTBJREl4TXk0M09URk1NVEEyTGpVM01TQXlNakl1TkRVNFF6RXdOaTR3T0RrZ01qSXpMalU1TmlBeE1EVXVNemdnTWpJMExqWXpNU0F4TURRdU5EZzJJREl5TlM0MU1ETkRNVEF6TGpVNU1TQXlNall1TXpjMUlERXdNaTQxTWprZ01qSTNMakEyTnlBeE1ERXVNelU1SURJeU55NDFOREZETVRBd0xqRTRPU0F5TWpndU1ERTBJRGs0TGprek5EUWdNakk0TGpJMU9TQTVOeTQyTmpZNUlESXlPQzR5TmpKRE9UWXVNems1TlNBeU1qZ3VNalkxSURrMUxqRTBNemtnTWpJNExqQXlOU0E1TXk0NU56RTVJREl5Tnk0MU5UWkRPVEl1TnprNU9TQXlNamN1TURnNElEa3hMamN6TkRRZ01qSTJMak01T1NBNU1DNDRNell5SURJeU5TNDFNekZET0RrdU9UTTRNU0F5TWpRdU5qWXlJRGc1TGpJeU5Ea2dNakl6TGpZek1TQTRPQzQzTXpjMElESXlNaTQwT1RWRE9EZ3VNalE1T1NBeU1qRXVNelU0SURnM0xqazVOellnTWpJd0xqRTBJRGczTGprNU5Ea2dNakU0TGprd09VTTROeTQ1T1RJeUlESXhOeTQyTnprZ09EZ3VNak01TWlBeU1UWXVORFU1SURnNExqY3lNVGNnTWpFMUxqTXlNVXc1TWk0ME1UZzJJREl3Tmk0Mk5URmFJaUJtYVd4c1BTSWpNREJCTVRsQklpOCtEUW84Y0dGMGFDQmtQU0pOT1RZdU5UZ3lOQ0F5TWpFdU5ETXhRems0TGpBek5qa2dNakl5TGpBeE1TQTVPUzQyTmpnNUlESXlNaTR3TURjZ01UQXhMakV5SURJeU1TNDBNa014TURJdU5UY3hJREl5TUM0NE16SWdNVEF6TGpjeU15QXlNVGt1TnpBNUlERXdOQzR6TWpNZ01qRTRMakk1T0V3eE1EWXVPREl5SURJeE1pNDBNRGhNT1RVdU9ETTNOaUF5TURndU1ESTFURGt6TGpNek9EWWdNakV6TGprd09FTTVNaTQzTkRBMklESXhOUzR6TWpFZ09USXVOelEwT1NBeU1UWXVPVEEzSURrekxqTTFNRFlnTWpFNExqTXhOME01TXk0NU5UWXpJREl4T1M0M01qY2dPVFV1TVRFek9DQXlNakF1T0RRMklEazJMalUyT0RjZ01qSXhMalF5T0V3NU5pNDFPREkwSURJeU1TNDBNekZhVFRrNUxqWXdNekVnTWpFMExqSTVPRU01T1M0NU5qVXpJREl4TkM0ME5EUWdNVEF3TGpJMk5DQXlNVFF1TnpBNElERXdNQzQwTkRrZ01qRTFMakEwTkVNeE1EQXVOak16SURJeE5TNHpPQ0F4TURBdU5qa3lJREl4TlM0M05qY2dNVEF3TGpZeE5pQXlNVFl1TVRReFF6RXdNQzQxTXprZ01qRTJMalV4TkNBeE1EQXVNek14SURJeE5pNDROU0F4TURBdU1ESTRJREl4Tnk0d09USkRPVGt1TnpJME9DQXlNVGN1TXpNeklEazVMak0wTkRnZ01qRTNMalEyTlNBNU9DNDVOVEkySURJeE55NDBOalZET1RndU5UWXdOU0F5TVRjdU5EWTFJRGs0TGpFNE1EUWdNakUzTGpNek15QTVOeTQ0TnpjeUlESXhOeTR3T1RKRE9UY3VOVGMwSURJeE5pNDROU0E1Tnk0ek5qWTBJREl4Tmk0MU1UUWdPVGN1TWpnNU55QXlNVFl1TVRReFF6azNMakl4TXlBeU1UVXVOelkzSURrM0xqSTNNaUF5TVRVdU16Z2dPVGN1TkRVMk5pQXlNVFV1TURRMFF6azNMalkwTVRJZ01qRTBMamN3T0NBNU55NDVOQ0F5TVRRdU5EUTBJRGs0TGpNd01qSWdNakUwTGpJNU9FTTVPQzQzTVRreElESXhOQzR4TWprZ09Ua3VNVGczT0NBeU1UUXVNVEkzSURrNUxqWXdOalVnTWpFMExqSTVNVXc1T1M0Mk1ETXhJREl4TkM0eU9UaGFJaUJtYVd4c1BTSWpNREJCTVRsQklpOCtEUW84Y0dGMGFDQmtQU0pOTkRrdU5UazNNeUF4TlRVdU5ESTFURFV3TGpNeE9ERWdNVFUzTGpBNU1rdzBNUzQwTWpBNUlERTJNQzQyT0RoRE16a3VOVFV6TWlBeE5qRXVORGcxSURNNExqQTRNVGNnTVRZeUxqazJJRE0zTGpNeU1qUWdNVFkwTGpjNU9FTXpOaTQxTmpNeElERTJOaTQyTXpjZ016WXVOVGMyTnlBeE5qZ3VOamt4SURNM0xqTTJNRE1nTVRjd0xqVXlRek00TGpFME16Z2dNVGN5TGpNME9DQXpPUzQyTXpRNElERTNNeTQ0TURVZ05ERXVOVEV5T0NBeE56UXVOVGM0UXpRekxqTTVNRGdnTVRjMUxqTTFNU0EwTlM0MU1EWWdNVGMxTGpNM055QTBOeTQwTURNNElERTNOQzQyTlRKTU5UWXVNekE0SURFM01TNHdOVEpNTlRjdU1ERTROU0F4TnpJdU56RTRURFE0TGpFeE5EUWdNVGMyTGpNeU5VTTBOaTQ1TXpreUlERTNOaTQ0TXlBME5TNDJOekU1SURFM055NHhNRElnTkRRdU16ZzNJREUzTnk0eE1qVkRORE11TVRBeU1TQXhOemN1TVRRNElEUXhMamd5TlRRZ01UYzJMamt5TVNBME1DNDJNekU0SURFM05pNDBOVGxETXprdU5ETTRNeUF4TnpVdU9UazJJRE00TGpNMU1pQXhOelV1TXpBMklETTNMalF6TmpZZ01UYzBMalF6UXpNMkxqVXlNVE1nTVRjekxqVTFOQ0F6TlM0M09UVTBJREUzTWk0MU1TQXpOUzR6TURFMUlERTNNUzR6TlRkRE16UXVPREEzTmlBeE56QXVNakExSURNMExqVTFOVGNnTVRZNExqazJPU0F6TkM0MU5qQTJJREUyTnk0M01qRkRNelF1TlRZMU5TQXhOall1TkRjeklETTBMamd5TnpFZ01UWTFMakl6T1NBek5TNHpNams1SURFMk5DNHdPVU16TlM0NE16STRJREUyTWk0NU5ESWdNell1TlRZMk9TQXhOakV1T1RBeUlETTNMalE0T1NBeE5qRXVNRE16UXpNNExqUXhNVElnTVRZd0xqRTJOQ0F6T1M0MU1ESTVJREUxT1M0ME9ESWdOREF1TnlBeE5Ua3VNREk0VERRNUxqVTVOek1nTVRVMUxqUXlOVm9pSUdacGJHdzlJaU13TUVFeE9VRWlMejROQ2p4d1lYUm9JR1E5SWswME1TNDNOemd5SURFMk9DNDNNemxETkRJdU1EYzNNeUF4TmprdU5ETTNJRFF5TGpVeE5URWdNVGN3TGpBM01TQTBNeTR3TmpZNElERTNNQzQyTURWRE5ETXVOakU0TkNBeE56RXVNVE01SURRMExqSTNNeUF4TnpFdU5UWXlJRFEwTGprNU16RWdNVGN4TGpnMU1VTTBOUzQzTVRNeUlERTNNaTR4TXprZ05EWXVORGcwT0NBeE56SXVNamcySURRM0xqSTJNemNnTVRjeUxqSTROVU0wT0M0d05ESTFJREUzTWk0eU9ETWdORGd1T0RFek5TQXhOekl1TVRNeklEUTVMalV6TWpRZ01UY3hMamcwTWt3MU5TNDFPRGMxSURFMk9TNHpPVFZNTlRFdU1ESTFOaUF4TlRndU56WXlURFEwTGprM05DQXhOakV1TWpFeVF6UTBMakkxTlRJZ01UWXhMalV3TWlBME15NDJNREkwSURFMk1TNDVNamNnTkRNdU1EVXlPQ0F4TmpJdU5EWXpRelF5TGpVd016SWdNVFl5TGprNU9DQTBNaTR3TmpjMklERTJNeTQyTXpRZ05ERXVOemN3T0NBeE5qUXVNek15UXpReExqUTNOREVnTVRZMUxqQXpNU0EwTVM0ek1qSWdNVFkxTGpjNElEUXhMak15TXpNZ01UWTJMalV6TmtNME1TNHpNalExSURFMk55NHlPVElnTkRFdU5EYzVNU0F4TmpndU1EUXhJRFF4TGpjM09ESWdNVFk0TGpjek9WcE5ORGt1TVRFek55QXhOalV1TnpjNVF6UTVMakkyTkNBeE5qWXVNVE14SURRNUxqSTRNemdnTVRZMkxqVXlOQ0EwT1M0eE5qazNJREUyTmk0NE9EbERORGt1TURVMU5TQXhOamN1TWpVMElEUTRMamd4TkRVZ01UWTNMalUzSURRNExqUTROellnTVRZM0xqYzRNa00wT0M0eE5qQTRJREUyTnk0NU9UUWdORGN1TnpZNE15QXhOamd1TURnNUlEUTNMak0zTnpFZ01UWTRMakExTWtNME5pNDVPRFlnTVRZNExqQXhOQ0EwTmk0Mk1qQXlJREUyTnk0NE5EWWdORFl1TXpReU15QXhOamN1TlRjMlF6UTJMakEyTkRNZ01UWTNMak13TnlBME5TNDRPVEUwSURFMk5pNDVOVEVnTkRVdU9EVXlPQ0F4TmpZdU5UY3lRelExTGpneE5ETWdNVFkyTGpFNU1pQTBOUzQ1TVRJMklERTJOUzQ0TVRFZ05EWXVNVE13T1NBeE5qVXVORGt6UXpRMkxqTTBPVE1nTVRZMUxqRTNOaUEwTmk0Mk56UXlJREUyTkM0NU5ESWdORGN1TURVd015QXhOalF1T0RNeFF6UTNMalF5TmpVZ01UWTBMamN5SURRM0xqZ3pNRFVnTVRZMExqY3pPU0EwT0M0eE9UTTNJREUyTkM0NE9EVkRORGd1TkRBd01pQXhOalF1T1RZNElEUTRMalU0TnpjZ01UWTFMakE0T1NBME9DNDNORFUySURFMk5TNHlORE5ETkRndU9UQXpOU0F4TmpVdU16azJJRFE1TGpBeU9EWWdNVFkxTGpVM09DQTBPUzR4TVRNM0lERTJOUzQzTnpsYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0RRbzhjR0YwYUNCa1BTSk5OVFl1T1RFMU9DQTRPUzQwTmpreVREVTJMakU0T0RFZ09URXVNVE0xT1V3ME55NHlOak0wSURnM0xqVTJPVEpETkRVdU16VXpPU0E0Tmk0NE1EVTBJRFF6TGpJeE1ERWdPRFl1T0RBNU5TQTBNUzR6TURNM0lEZzNMalU0TURaRE16a3VNemszTXlBNE9DNHpOVEUzSURNM0xqZzRORFFnT0RrdU9ESTJOaUF6Tnk0d09UYzRJRGt4TGpZNE1EbERNell1TXpFeE1pQTVNeTQxTXpVeUlETTJMak14TlRRZ09UVXVOakUyT1NBek55NHhNRGsxSURrM0xqUTJPREpETXpjdU9UQXpOU0E1T1M0ek1UazFJRE01TGpReU1qUWdNVEF3TGpjNE9TQTBNUzR6TXpFNUlERXdNUzQxTlRKTU5UQXVNalUyTmlBeE1EVXVNVEV5VERRNUxqVTBPVFVnTVRBMkxqYzNPVXcwTUM0Mk1qUTRJREV3TXk0eU1USkRNemt1TkRVeU9DQXhNREl1TnpReklETTRMak00TnpRZ01UQXlMakExTlNBek55NDBPRGswSURFd01TNHhPRFpETXpZdU5Ua3hOU0F4TURBdU16RTNJRE0xTGpnM09EVWdPVGt1TWpnME9TQXpOUzR6T1RFeklEazRMakUwT0RWRE16UXVOREEzTkNBNU5TNDROVE0wSURNMExqUXdNallnT1RNdU1qY3lOeUF6TlM0ek56Z3hJRGt3TGprM05ESkRNell1TXpVek5TQTRPQzQyTnpVM0lETTRMakl5T1RNZ09EWXVPRFEzTmlBME1DNDFPVEk0SURnMUxqZzVNakZETkRJdU9UVTJNeUE0TkM0NU16WTJJRFExTGpZeE16Z2dPRFF1T1RNeUlEUTNMams0TURnZ09EVXVPRGM1TTB3MU5pNDVNVFU0SURnNUxqUTJPVEphSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrRFFvOGNHRjBhQ0JrUFNKTk5ERXVOamsxTlNBNU15NDFNVEkwUXpReExqTTVPQ0E1TkM0eU1URTFJRFF4TGpJME5UUWdPVFF1T1RZd09DQTBNUzR5TkRZMklEazFMamN4TnpORE5ERXVNalEzT0NBNU5pNDBOek00SURReExqUXdNamNnT1RjdU1qSXlOeUEwTVM0M01ESTBJRGszTGpreU1EbEROREl1TURBeU1pQTVPQzQyTVRreUlEUXlMalEwTURrZ09Ua3VNalV6TWlBME1pNDVPVE0wSURrNUxqYzROalZETkRNdU5UUTFPU0F4TURBdU16SWdORFF1TWpBeE15QXhNREF1TnpReUlEUTBMamt5TWpFZ01UQXhMakF5T1V3MU1DNDVPREEzSURFd015NDBOVFpNTlRVdU5UQXhOQ0E1TWk0M09EbE1ORGt1TkRNMklEa3dMak0yTWpSRE5EZ3VOekUxT0NBNU1DNHdOelFnTkRjdU9UUTBJRGc1TGpreU5qUWdORGN1TVRZME9TQTRPUzQ1TWpoRE5EWXVNemcxT1NBNE9TNDVNamsySURRMUxqWXhORGdnT1RBdU1EZ3dNeUEwTkM0NE9UVTRJRGt3TGpNM01UZERORFF1TVRjMk9DQTVNQzQyTmpNZ05ETXVOVEkwTVNBNU1TNHdPRGt5SURReUxqazNORGtnT1RFdU5qSTFPVU0wTWk0ME1qVTRJRGt5TGpFMk1qVWdOREV1T1RreElEa3lMamM1T1NBME1TNDJPVFUxSURrekxqUTVPVlk1TXk0MU1USTBXazAwT1M0d016UTBJRGsyTGpRME5UZERORGd1T1RNNE1TQTVOaTQyTnpBNElEUTRMamM1TVRjZ09UWXVPRGN5TkNBME9DNDJNRFUzSURrM0xqQXpOa00wT0M0ME1UazJJRGszTGpFNU9UY2dORGd1TVRrNE5TQTVOeTR6TWpFeUlEUTNMamsxT0RNZ09UY3VNemt5UXpRM0xqY3hPREVnT1RjdU5EWXlOeUEwTnk0ME5qUTNJRGszTGpRNE1Ea2dORGN1TWpFMk5DQTVOeTQwTkRVeVF6UTJMamsyT0RFZ09UY3VOREE1TlNBME5pNDNNekVnT1RjdU16SXdPU0EwTmk0MU1qSXlJRGszTGpFNE5UWkRORFl1TXpFek5DQTVOeTR3TlRBMElEUTJMakV6T0NBNU5pNDROekU0SURRMkxqQXdPRGNnT1RZdU5qWXlPVU0wTlM0NE56azBJRGsyTGpRMU5DQTBOUzQzT1RrMElEazJMakl4T1RnZ05EVXVOemMwTkNBNU5TNDVOemN6UXpRMUxqYzBPVFFnT1RVdU56TTBOeUEwTlM0M09EQXhJRGsxTGpRNE9UZ2dORFV1T0RZME1pQTVOUzR5TmpBeVF6UTFMamswT0RNZ09UVXVNRE13TlNBME5pNHdPRE00SURrMExqZ3lNVGdnTkRZdU1qWXdPU0E1TkM0Mk5EbERORFl1TkRVNE15QTVOQzQwTlRZMklEUTJMamN3TVRVZ09UUXVNekUwTlNBME5pNDVOamt4SURrMExqSXpOVE5ETkRjdU1qTTJOaUE1TkM0eE5UWXhJRFEzTGpVeU1ESWdPVFF1TVRReU15QTBOeTQzT1RRMklEazBMakU1TlVNME9DNHdOamc1SURrMExqSTBOemdnTkRndU16STFOeUE1TkM0ek5qVTFJRFE0TGpVME1Ua2dPVFF1TlRNM04wTTBPQzQzTlRneUlEazBMamN4SURRNExqa3lOelFnT1RRdU9UTXhOQ0EwT1M0d016UTBJRGsxTGpFNE1qUkRORGt1TVRJZ09UVXVNemd5TmlBME9TNHhOalF4SURrMUxqVTVOeklnTkRrdU1UWTBNU0E1TlM0NE1UUkRORGt1TVRZME1TQTVOaTR3TXpBNElEUTVMakV5SURrMkxqSTBOVFVnTkRrdU1ETTBOQ0E1Tmk0ME5EVTNXaUlnWm1sc2JEMGlJekF3UVRFNVFTSXZQZzBLUEhCaGRHZ2daRDBpVFRFd09TNDVNRFFnTkRndU1qSXlPRXd4TURndU1UZzRJRFE0TGpreE9UVk1NVEEwTGpRNE1TQTBNQzR5TmprMVF6RXdOQzR4TURJZ016a3VNek16T1NBeE1ETXVOVE0wSURNNExqUTRNVEVnTVRBeUxqZ3hNU0F6Tnk0M05qRkRNVEF5TGpBNE9TQXpOeTR3TkRBNUlERXdNUzR5TWpVZ016WXVORFk0SURFd01DNHlOeklnTXpZdU1EYzFOME01T1M0ek1UZzJJRE0xTGpZNE16VWdPVGd1TWprME1pQXpOUzQwTnprM0lEazNMakkxT0RjZ016VXVORGMyTlVNNU5pNHlNak16SURNMUxqUTNNek1nT1RVdU1UazNOaUF6TlM0Mk56QTFJRGswTGpJME1UWWdNell1TURVMk9FTTVNeTR5T0RVMklETTJMalEwTXpFZ09USXVOREU0TlNBek55NHdNVEEySURreExqWTVNU0F6Tnk0M01qWXlRemt3TGprMk16WWdNemd1TkRReE55QTVNQzR6T1RBeklETTVMakk1TVNBNU1DNHdNRFE1SURRd0xqSXlOREpET0RrdU5qRTVOQ0EwTVM0eE5UYzBJRGc1TGpReU9UUWdOREl1TVRVMU9TQTRPUzQwTkRZeElEUXpMakUyTVRORE9Ea3VORFl5TnlBME5DNHhOalkzSURnNUxqWTROVGNnTkRVdU1UVTRPQ0E1TUM0eE1ERTRJRFEyTGpBM09UVk1PVE11T0RFMU9TQTFOQzQzTVRrMFREa3lMakE1T1RZZ05UVXVOREE1TkV3NE9DNHpPVFU0SURRMkxqYzJPVFZET0RjdU9EZzJOU0EwTlM0Mk16QXhJRGczTGpZeE5UVWdORFF1TkRBek55QTROeTQxT1RnMklEUXpMakUyTVRkRE9EY3VOVGd4T0NBME1TNDVNVGsySURnM0xqZ3hPVFFnTkRBdU5qZzJOeUE0T0M0eU9UYzNJRE01TGpVek5EZERPRGd1TnpjMklETTRMak00TWpjZ09Ea3VORGcxTkNBek55NHpNelExSURrd0xqTTRORFlnTXpZdU5EVXhNVU01TVM0eU9ETTRJRE0xTGpVMk56Y2dPVEl1TXpVMUlETTBMamcyTmpjZ09UTXVOVE0xTnlBek5DNHpPRGxET1RRdU56RTJOU0F6TXk0NU1URXpJRGsxTGprNE16TWdNek11TmpZMk15QTVOeTR5TmpJMElETXpMalkyT0RORE9UZ3VOVFF4TlNBek15NDJOekF6SURrNUxqZ3dOelVnTXpNdU9URTVNeUF4TURBdU9UZzNJRE0wTGpRd01EZERNVEF5TGpFMk5pQXpOQzQ0T0RJeUlERXdNeTR5TXpVZ016VXVOVGcyTlNBeE1EUXVNVE14SURNMkxqUTNNamRETVRBMUxqQXlOeUF6Tnk0ek5UZzVJREV3TlM0M016TWdNemd1TkRBNU15QXhNRFl1TWpBNElETTVMalUyTWpsTU1UQTVMamt3TkNBME9DNHlNakk0V2lJZ1ptbHNiRDBpSXpBd1FURTVRU0l2UGcwS1BIQmhkR2dnWkQwaVRUazJMakU1T0RJZ05EQXVOakkyTWtNNU5TNDBOemtnTkRBdU9URTJOaUE1TkM0NE1qVTRJRFF4TGpNME1UZ2dPVFF1TWpjMU9TQTBNUzQ0TnpjMVF6a3pMamN5TmpFZ05ESXVOREV6TWlBNU15NHlPVEF6SURRekxqQTBPRGdnT1RJdU9Ua3pOU0EwTXk0M05EZ3hRemt5TGpZNU5qY2dORFF1TkRRM05DQTVNaTQxTkRRM0lEUTFMakU1TmpjZ09USXVOVFEyTXlBME5TNDVOVE5ET1RJdU5UUTNPQ0EwTmk0M01EazBJRGt5TGpjd01qZ2dORGN1TkRVNElEa3pMakF3TWpVZ05EZ3VNVFUyTWt3NU5TNDFNaklnTlRRdU1ETTJNVXd4TURZdU5EY3lJRFE1TGpZd05qRk1NVEF6TGprMU1pQTBNeTQzTWpZeVF6RXdNeTQyTlRNZ05ETXVNREkzT0NBeE1ETXVNakUxSURReUxqTTVNelVnTVRBeUxqWTJOQ0EwTVM0NE5UazFRekV3TWk0eE1USWdOREV1TXpJMU5pQXhNREV1TkRVNElEUXdMamt3TWpRZ01UQXdMamN6T0NBME1DNDJNVFF5UXpFd01DNHdNVGNnTkRBdU16STJJRGs1TGpJME5Ua2dOREF1TVRjNE5DQTVPQzQwTmpjZ05EQXVNVGM1T1VNNU55NDJPRGd4SURRd0xqRTRNVFFnT1RZdU9URTNNU0EwTUM0ek16RTVJRGsyTGpFNU9ESWdOREF1TmpJeU9WWTBNQzQyTWpZeVdrMDVPUzR5TkRZeklEUTNMamMwT1RWRE9UZ3VPVE16TVNBME55NDRPQ0E1T0M0MU9EY2dORGN1T1RFMk9TQTVPQzR5TlRJeElEUTNMamcxTlRkRE9UY3VPVEUzTVNBME55NDNPVFEwSURrM0xqWXdPRFlnTkRjdU5qTTNOeUE1Tnk0ek5qVTNJRFEzTGpRd05UVkRPVGN1TVRJeU9DQTBOeTR4TnpNMElEazJMamsxTmpZZ05EWXVPRGMyTWlBNU5pNDRPRGd6SURRMkxqVTFNa001Tmk0NE1pQTBOaTR5TWpjM0lEazJMamcxTWpZZ05EVXVPRGt4TVNBNU5pNDVPRElnTkRVdU5UZzBPVU01Tnk0eE1URTBJRFExTGpJM09EZ2dPVGN1TXpNeE9DQTBOUzR3TVRZNUlEazNMall4TlNBME5DNDRNekk0UXprM0xqZzVPRElnTkRRdU5qUTROeUE1T0M0eU16RTFJRFEwTGpVMU1EY2dPVGd1TlRjeU15QTBOQzQxTlRFeVF6azRMamt4TXpFZ05EUXVOVFV4TnlBNU9TNHlORFl4SURRMExqWTFNRGNnT1RrdU5USTROeUEwTkM0NE16VTJRems1TGpneE1UUWdORFV1TURJd05TQXhNREF1TURNeElEUTFMakk0TXlBeE1EQXVNVFU1SURRMUxqVTRPVFZETVRBd0xqSTBOaUEwTlM0M09EazFJREV3TUM0eU9TQTBOaTR3TURReElERXdNQzR5T1RFZ05EWXVNakl4UXpFd01DNHlPVElnTkRZdU5ETTNPQ0F4TURBdU1qUTVJRFEyTGpZMU1qY2dNVEF3TGpFMk5DQTBOaTQ0TlRNelF6RXdNQzR3TnprZ05EY3VNRFV6T1NBNU9TNDVOVFExSURRM0xqSXpOak1nT1RrdU56azNJRFEzTGpNNU1ERkRPVGt1TmpNNU5pQTBOeTQxTkRNNUlEazVMalExTWpRZ05EY3VOalkySURrNUxqSTBOak1nTkRjdU56UTVOVm9pSUdacGJHdzlJaU13TUVFeE9VRWlMejROQ2p4d1lYUm9JR1E5SWsweE5UWXVOREE1SURFNE9TNHpNREpETVRRNUxqWTJOU0F4T1RFdU5EUTFJREUwTWk0Mk5Ea2dNVGt5TGpZM09TQXhNelV1TlRZZ01Ua3lMamsyT0VNeE1qZ3VNakl4SURFNU15NHlOellnTVRJd0xqZzNOQ0F4T1RJdU5qQXpJREV4TXk0M01qVWdNVGt3TGprMk9FTXhNRFl1TlRjeUlERTRPUzR6TnpVZ09Ua3VPRFF6TlNBeE9EWXVNelF5SURrekxqazNNemdnTVRneUxqQTJOVU00Tnk0NE5EZ2dNVGMzTGpRM055QTRNaTQ1TVRjNUlERTNNUzQxTlRZZ056a3VOVGd4SURFMk5DNDNOemxETnpVdU5UWTNNU0F4TlRZdU16RTVJRGN6TGpVMk5UWWdNVFEzTGpBNU1TQTNNeTQzTWpVZ01UTTNMamMzT1VNM015NDBNek0wSURFeU9TNDFOVElnTnpRdU9EQXhNaUF4TWpFdU16UTVJRGMzTGpjMU1UUWdNVEV6TGpZek1rTTRNaTQ0T0RVeUlERXdNQzR5TWlBNU15NHlNakk1SURnNUxqSTVNemtnTVRBMkxqVTFNU0E0TXk0eE9USTJRekV4TXk0eE56UWdPREF1TURrNU9TQXhNakF1TWpVeUlEYzRMakF5TXlBeE1qY3VOVE14SURjM0xqQXpOa014TXpVdU1EVTJJRGMyTGpBeE1EWWdNVFF5TGpZNU5TQTNOaTR3TkRnNElERTFNQzR5TVNBM055NHhORGswUXpFMU55NDVPVFVnTnpndU1qYzFNaUF4TmpVdU5UZzJJRGd3TGpReU56TWdNVGN5TGpjM01pQTRNeTQxTkRaRE1UY3hMalEyTlNBNE9DNDVNVGt6SURFM01DNHlNRGNnT1RRdU1qZzVNaUF4TmpndU9UazJJRGs1TGpZMU5UaERNVFkzTGpjNE5pQXhNRFV1TURJeUlERTJOaTQyTURZZ01URXdMalEyTnlBeE5qVXVORFUzSURFeE5TNDVPRGxXTVRFMkxqSXlOa3d4TmpBdU16TTVJREV4Tmk0ME5qSk1NVFExTGpRMU9TQXhNVFl1TmprNVF6RTBOQzR4TlRrZ01URTJMalk1T1NBeE5ETXVOVEE1SURFeE5TNDVNU0F4TkRNdU5UQTVJREV4TkM0ek16SldNVEF4TGpjNE5rTXhORE11TlRFMUlERXdNUzQwTmpnZ01UUXpMall3T0NBeE1ERXVNVFUzSURFME15NDNPQ0F4TURBdU9EZzJRekUwTXk0NU5URWdNVEF3TGpZeE5TQXhORFF1TVRrMElERXdNQzR6T1RRZ01UUTBMalE0TkNBeE1EQXVNalEyUXpFME5TNHhPVEVnT1RrdU9EVTFOQ0F4TkRVdU9Ua2dPVGt1TmpVd01TQXhORFl1T0RBeklEazVMalkxTURGRE1UUTNMall4TmlBNU9TNDJOVEF4SURFME9DNDBNVFVnT1RrdU9EVTFOQ0F4TkRrdU1USXlJREV3TUM0eU5EWkRNVFE1TGpReE1TQXhNREF1TXprMUlERTBPUzQyTlRRZ01UQXdMall4TmlBeE5Ea3VPREkxSURFd01DNDRPRGRETVRRNUxqazVOaUF4TURFdU1UVTRJREUxTUM0d09TQXhNREV1TkRZNElERTFNQzR3T1RjZ01UQXhMamM0TmxZeE1UQXVNekV5U0RFMU9DNHpPVXd4TlRNdU9UZzVJRGc0TGpjMU5UbERNVFV4TGpBME15QTROeTQyT0RjNUlERTBOeTQ1TnpNZ09EWXVPVGN5TmlBeE5EUXVPRFE0SURnMkxqWXlOVGxETVRReElEZzJMakUxTWpNZ01UTTNMakV3TlNBNE5pNHhOVEl6SURFek15NHlOVFlnT0RZdU5qSTFPVU14TWprdU1EUXpJRGczTGpFME5ERWdNVEkwTGprek15QTRPQzR5TmpjMUlERXlNUzR3TmlBNE9TNDVOVGt6UXpFeE5pNDROeUE1TVM0M056a2dNVEV6TGpFeU5pQTVOQzQwTkRJeUlERXhNQzR3TnpZZ09UY3VOemN5TlVNeE1EWXVOVE16SURFd01TNDNNelVnTVRBekxqZ3dNeUF4TURZdU16RTRJREV3TWk0d015QXhNVEV1TWpjMlF6azVMamMwTnpnZ01URTNMamd6SURrNExqWTNNVGdnTVRJMExqY3lNeUE1T0M0NE5URTFJREV6TVM0Mk16bERPVGd1TkRFMk15QXhNemt1TnpFMUlEazVMamMwTnpZZ01UUTNMamM0T1NBeE1ESXVOelU0SURFMU5TNHpNamxETVRBMUxqQTRNaUF4TmpBdU9URWdNVEE0TGpnd09TQXhOalV1T0RNNElERXhNeTQxT1RnZ01UWTVMalkyTWtNeE1UZ3VNREEySURFM015NHdNelVnTVRJekxqRXlOU0F4TnpVdU5ESTFJREV5T0M0MU9URWdNVGMyTGpZMk1rTXhNelF1TURNZ01UYzNMamt4TVNBeE16a3VOVGt6SURFM09DNDFPREVnTVRRMUxqRTRNU0F4TnpndU5qWXlRekUxTUM0ek5UY2dNVGM0TGpjMklERTFOUzQxTXpNZ01UYzRMalE0TXlBeE5qQXVOalkxSURFM055NDRNekpETVRZMUxqUTNNU0F4TnpjdU1qQXpJREUyT1M0ME1UUWdNVGMyTGpZME55QXhOekl1TkRrMElERTNOaTR4TmpWTU1UY3pMakl6TWlBeE9ERXVNemMxUXpFMk9DNHdOamdnTVRnMExqZ3lOaUF4TmpJdU16azJJREU0Tnk0ME9UZ2dNVFUyTGpRd09TQXhPRGt1TXpBeVdpSWdabWxzYkQwaUl6QXdRVEU1UVNJdlBnMEtQSEJoZEdnZ1pEMGlUVGN5TGpBNE56Z2dNekF4TGpjNU4wTTJPQzR5T0RnZ01qZzNMalUwTnlBMU9TNDROekV6SURJM055NDJNekVnTlRBdU1URTVNeUF5TnpjdU5qTXhRek0yTGpnd056Z2dNamMzTGpZek1TQXlOUzQ1T1RVeElESTVOaTR3T0NBeU5TNDVPVFV4SURNeE9DNDRNVFJETWpVdU9UZzBPQ0F6TkRFdU5UUWdNell1TnprM05TQXpOVGt1T1RrM0lEVXdMakV3T1NBek5Ua3VPVGszUXpZd0xqZzFOalFnTXpVNUxqazVOeUEyT1M0NU56TTBJRE0wTnk0NU56Y2dOek11TURnMk55QXpNekV1TXpsSU5qQXVOekk1TkVNMU9DNDJORFU0SURNME1TNHhORGNnTlRRdU16TTBOU0F6TkRjdU9EWWdORGt1TXpVM015QXpORGN1T0RaRE5ESXVNelUwT0NBek5EY3VPRFlnTXpZdU5qVTJOeUF6TXpRdU5UVTNJRE0yTGpZMU5qY2dNekU0TGpFMk4wTXpOaTQyTlRZM0lETXdNUzQzT0RRZ05ESXVNelV4TkNBeU9EZ3VORGd4SURRNUxqTTFOek1nTWpnNExqUTRNVU0xTXk0M09ERTVJREk0T0M0ME9ERWdOVGN1TmpjM09DQXlPVE11TnpjMElEVTVMamsxTXpZZ016QXhMamd4TkV3M01pNHdPRGM0SURNd01TNDNPVGRhSWlCbWFXeHNQU0lqUVRVeE1UVkNJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVGsxTGpJMU56Y2dNek0xTGpNek4wZzNNeTR3T0RZM1F6Y3pMakE0TmpjZ016UTRMalF6TnlBNE1pNDVNRE01SURNMU9TNHdOemNnT1RRdU9Ua3pOQ0F6TlRrdU1EYzNRekV3Tnk0d09ETWdNelU1TGpBM055QXhNVFl1T1NBek5EZ3VORE0zSURFeE5pNDVJRE16TlM0ek16ZElNVEEwTGpKV016TTRMakEwTjBnNE5TNDNPRE00VmpNek5TNHpPRXc1TlM0eU5UYzNJRE16TlM0ek16ZGFUVGN6TGpBNE5qY2dNamcyTGpBeE5FZzROUzQzT0RjeVZqTXpOUzR6TkRkSU56TXVNRGcyTjFZeU9EWXVNREUwV2sweE1EUXVNaUF5T1RBdU5EVTBTREV4Tmk0NVZqTXpOUzR6TXpkSU1UQTBMakpXTWprd0xqUTFORnBOTVRBMExqSWdNek00TGpBMVF6RXdOQzR5T0RjZ016UXdMalV4SURFd015NHpOamNnTXpReUxqa3dNeUF4TURFdU5qUWdNelEwTGpjd05rTTVPUzQ1TVRReUlETTBOaTQxTURnZ09UY3VOVEl5T1NBek5EY3VOVGN6SURrMExqazVJRE0wTnk0Mk5qZERPVEl1TkRVM05DQXpORGN1TlRjeElEa3dMakEyTmprZ016UTJMalV3TlNBNE9DNHpOREUySURNME5DNDNNRE5ET0RZdU5qRTJNaUF6TkRJdU9TQTROUzQyT1RZMklETTBNQzQxTURjZ09EVXVOemd6T0NBek16Z3VNRFEzU0RFd05DNHlWak16T0M0d05Wb2lJR1pwYkd3OUlpTkJOVEV4TlVJaUx6NE5Danh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk1USXlMams1TXlBek5UY3VOVE16U0RFek15NHhOVU14TXpVdU1qa3lJRE0xTWk0NU5TQXhNelF1TXpFMElETTBNUzQ1TWpNZ01UTTRMakl6SURNME1pNDNNemRJTVRRNExqTTVNVU14TlRNdU1USXhJRE0wTWk0Mk9ETWdNVFV4TGpVME9TQXpORGd1TnpjZ01UVXpMalEzTVNBek5qQklNVFl6TGpZeU9FTXhOamt1TnpZeUlETTBNUzR4TmpNZ01UVTJMalkwTXlBeU9UUXVNVGczSURFME15NHpNVEVnTWprekxqUXhOME14TXpVdU1EWTJJREk1TkM0MU5UUWdNVEUzTGpJMk5DQXpNemN1T0RVM0lERXlNaTQ1T1RNZ016VTNMalV6TTFwTk1UUXpMak14TVNBek1UTXVNVFEwUXpFME1DNDNNRFVnTXpFMExqZzVOQ0F4TXprdU1URTJJRE14T1M0NU1qY2dNVE00TGpJeklETXlOeTQ1TkVNeE16Z3VPRGM1SURNeU9DNDJNVGdnTVRNNUxqWTJOU0F6TWprdU1UVTVJREUwTUM0MU16a2dNekk1TGpVeU9VTXhOREV1TkRFeklETXlPUzQ0T1RnZ01UUXlMak0xTmlBek16QXVNRGc1SURFME15NHpNRGtnTXpNd0xqQTRPVU14TkRRdU1qWXlJRE16TUM0d09Ea2dNVFExTGpJd05TQXpNamt1T0RrNElERTBOaTR3TnprZ016STVMalV5T1VNeE5EWXVPVFV6SURNeU9TNHhOVGtnTVRRM0xqY3pPQ0F6TWpndU5qRTRJREUwT0M0ek9EY2dNekkzTGprMFF6RTBOeTQ0TVRFZ016SXdMakk0TkNBeE5EWXVNVGNnTXpFMUxqUWdNVFF6TGpNeE1TQXpNVE11TVRRMFdpSWdabWxzYkQwaUkwRTFNVEUxUWlJdlBnMEtQSEJoZEdnZ1pEMGlUVEUzTmk0d056VWdNamd4TGpBNE5FZ3hNamd1TURjelZqSTVNQzQwTlRGSU1UYzJMakEzTlZZek5UZ3VNamN6U0RFNE5TNDNNbFl5T1RBdU5EVXhTREl3T1M0ek16WldNamd4TGpBNE5FZ3hOell1TURjMVdpSWdabWxzYkQwaUkwRTFNVEUxUWlJdlBnMEtQSEJoZEdnZ1pEMGlUVEl4TkM0ME1UWWdNelE0TGpsV01qZ3hMakE0TkVneU1qUXVNRFkxVmpNME9DNDVTREkwTkM0NE9URldNelU0TGpJM1NESXhOQzQwTVRaV016UTRMamxhSWlCbWFXeHNQU0lqUVRVeE1UVkNJaTgrRFFvOEwzTjJaejROQ2c9PVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJwWkQwaVlUTXpPR1UzTlRVdFpqWmpOeTAwTldFd0xUaGxZemN0TUdVNFlUa3laVE16WTJZMklpQmtZWFJoTFc1aGJXVTlJa3hoZVdWeUlERWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkMmxrZEdnOUlqZ3hOaTR5TWpJek55SWdhR1ZwWjJoMFBTSTNNREF1TlRrM0lpQjJhV1YzUW05NFBTSXdJREFnT0RFMkxqSXlNak0zSURjd01DNDFPVGNpUGp4d1lYUm9JR1E5SWswM056SXVNREl3T1N3M09UY3VPRGsxTVRoaE16UXVPREUwTWpZc016UXVPREUwTWpZc01Dd3dMREV0TVRZdU56UTFOakV0TkM0ek1EZzFPVXd5TnpndU9EWTNMRFV6TXk0d05EQTJPV0V6TlM0d016azBNaXd6TlM0d016azBNaXd3TERBc01TMHhNeTQ1TVRNM0xUUTNMalV3TVRRM1REUTJOaTR3TURBMk15d3hNVGN1T1RJMFlUTTBMams1T1RRMUxETTBMams1T1RRMUxEQXNNQ3d4TERRM0xqVXdNVGN4TFRFekxqa3hNelU0YkRRM05pNDBNRGd5TERJMk1DNDFORFU1WVRNMUxqQXpPVEV6TERNMUxqQXpPVEV6TERBc01Dd3hMREV6TGpreE16Z3lMRFEzTGpVd01UUTNURGd3TWk0M056Y3NOemM1TGpZM00yRXpOQzQzTnpFMExETTBMamMzTVRRc01Dd3dMREV0TWpBdU9EWTVNVFFzTVRZdU56azBPVEpCTXpVdU1UUTNMRE0xTGpFME55d3dMREFzTVN3M056SXVNREl3T1N3M09UY3VPRGsxTVRoYWJTMHhNeTQ0TmpZM0xUa3VOVGN5TWpkaE1qa3VNREF3Tnprc01qa3VNREF3Tnprc01Dd3dMREFzTXprdU16VTROalF0TVRFdU5USTRPRXc1T1RndU5UWXdNaXcwTURrdU1UYzRPRGRCTWprdU1ETXpORFVzTWprdU1ETXpORFVzTUN3d0xEQXNPVGczTGpBek1UWTBMRE0yT1M0NE1rdzFNVEF1TmpJek5EUXNNVEE1TGpJM05EQTVZVEk1TGpBd01EZ3hMREk1TGpBd01EZ3hMREFzTUN3d0xUTTVMak0xT0RZMUxERXhMalV5T0RoTU1qY3dMakl4TnpRekxEUTRPQzQwTVRneE0wRXlPUzR3TXpNek5Td3lPUzR3TXpNek5Td3dMREFzTUN3eU9ERXVOelEyTERVeU55NDNOemRhSWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3RNVGt4TGpnNE9EZ3lJQzA1T1M0M01ERTFLU0lnWm1sc2JEMGlJMll5WmpKbU1pSXZQanh3WVhSb0lHUTlJazAzT0RFdU9EUTBNVFFzTmpZNUxqTXlORGczWVRNeUxqY3dOVFkzTERNeUxqY3dOVFkzTERBc01Dd3hMVEUxTGpZNE1qWXlMVFF1TURFMk5rd3pPREF1T1RrNU1UY3NORFUwTGpZMk5EY3hZVE15TGpRMk9UUTNMRE15TGpRMk9UUTNMREFzTUN3eExURXlMamt4T1RreUxUUTBMakV3T0RSTU5EZzRMakUxTVN3eE9URXVNREExWVRNeUxqUTVOamt6TERNeUxqUTVOamt6TERBc01Dd3hMRFEwTGpFd09EWTFMVEV5TGpreE9Ua3lURGt4Tnk0ME1qSXlOaXd6T0RndU56STROamhoTXpJdU5EazNOVGdzTXpJdU5EazNOVGdzTUN3d0xERXNNVEl1T1RFNU9UTXNORFF1TVRBNE16bHNMUzQwTXpnM015MHVNak01TnpRdU5ETTROek11TWpNNU56Uk1PREV3TGpJM01EUXhMRFkxTWk0ek9EZ3pORUV6TWk0ek5qUXpMRE15TGpNMk5ETXNNQ3d3TERFc056Z3hMamcwTkRFMExEWTJPUzR6TWpRNE4xb2lJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0MweE9URXVPRGc0T0RJZ0xUazVMamN3TVRVcElpQm1hV3hzUFNJalpqSm1NbVl5SWk4K1BIQmhkR2dnWkQwaVRUYzJPUzQ0T0RnNE1pdzNPVGN1TnprNE5XZ3ROVFF6WVRNeUxqVXpOamt5TERNeUxqVXpOamt5TERBc01Dd3hMVE15TGpVdE16SXVOWFl0TkRFNVlUTXlMalV6TmpreUxETXlMalV6TmpreUxEQXNNQ3d4TERNeUxqVXRNekl1TldnMU5ETmhNekl1TlRNMk9EVXNNekl1TlRNMk9EVXNNQ3d3TERFc016SXVOU3d6TWk0MWRqUXhPVUV6TWk0MU16WTROU3d6TWk0MU16WTROU3d3TERBc01TdzNOamt1T0RnNE9ESXNOemszTGpjNU9EVmFJaUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNndE1Ua3hMamc0T0RneUlDMDVPUzQzTURFMUtTSWdabWxzYkQwaUkyWm1aaUl2UGp4d1lYUm9JR1E5SWswM05qa3VPRGc0T0RJc09EQXdMakk1T0RWb0xUVTBNMkV6TlM0d016azBOeXd6TlM0d016azBOeXd3TERBc01TMHpOUzB6TlhZdE5ERTVZVE0xTGpBek9UUTNMRE0xTGpBek9UUTNMREFzTUN3eExETTFMVE0xYURVME0yRXpOUzR3TXprME55d3pOUzR3TXprME55d3dMREFzTVN3ek5Td3pOWFkwTVRsQk16VXVNRE01TkRjc016VXVNRE01TkRjc01Dd3dMREVzTnpZNUxqZzRPRGd5TERnd01DNHlPVGcxV20wdE5UUXpMVFE0TTJFeU9TNHdNekkzTlN3eU9TNHdNekkzTlN3d0xEQXNNQzB5T1N3eU9YWTBNVGxoTWprdU1ETXlOelVzTWprdU1ETXlOelVzTUN3d0xEQXNNamtzTWpsb05UUXpZVEk1TGpBek1qYzJMREk1TGpBek1qYzJMREFzTUN3d0xESTVMVEk1ZGkwME1UbGhNamt1TURNeU56WXNNamt1TURNeU56WXNNQ3d3TERBdE1qa3RNamxhSWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3RNVGt4TGpnNE9EZ3lJQzA1T1M0M01ERTFLU0lnWm1sc2JEMGlJMlUyWlRabE5pSXZQanh3WVhSb0lHUTlJazAxT0RJdU9Ea3hOVFlzTkRVeExqVTRObUUwTUM0M05qTTFPQ3cwTUM0M05qTTFPQ3d3TERBc01DMHpNaTQxTlRFeE5pd3hOaTR4T0RVNU15d3lOaTQ0TXprM05pd3lOaTQ0TXprM05pd3dMREFzTUMwek55NDBORGt4TWl3eU5DNDJORGMxTjBnMk1qTXVOekkxTURWQk5EQXVPRE16TkRJc05EQXVPRE16TkRJc01Dd3dMREFzTlRneUxqZzVNVFUyTERRMU1TNDFPRFphSWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3RNVGt4TGpnNE9EZ3lJQzA1T1M0M01ERTFLU0lnWm1sc2JEMGlJMlUyWlRabE5pSXZQanhqYVhKamJHVWdZM2c5SWpFME9DNHhPVFkyT1NJZ1kzazlJalEwTlM0NU5qQXpOaUlnY2owaU5qVXVOelUzTWpjaUlHWnBiR3c5SWlOaE16RTVOV0lpTHo0OGNHRjBhQ0JrUFNKTk56STFMakkwT0RZNExEWTRNUzR4TnpnMU1XRXpNUzQ0TnpneE1Td3pNUzQ0TnpneE1Td3dMREFzTVMwM0xqTTFPVGcyTGpnMWFDMDBNemxoTXpFdU9EYzBPVElzTXpFdU9EYzBPVElzTUN3d0xERXRNVFV1TkRZdE15NDVOMnd4TGpFMk9Ua3lMVEV1Tmpnc05EZ3VPVGd0TnpBdU5UTXNOekl1TlRnd01EZ3RNVEEwTGpRNUxERXVNRFl0TVM0MU15d3hNUzQwTVRrNU15MHhOaTQwTkdFNExqTXpOamt6TERndU16TTJPVE1zTUN3d0xERXNNVE11TnpBd01Ua3NNR3d6Tnk0NU16azVOQ3cxTkM0Mk1YWXVNREZzTWpJdU16RTVPRE1zTXpJdU1UUXNOVE11TWpnd01qY3NOell1Tnl3NE1DNDRNRGsxTnkweE1UVXVNelZoT0M0ek5EYzRNaXc0TGpNME56Z3lMREFzTUN3eExERXpMalk0TURFNExEQnNOVEV1T0RNNU9EUXNOek11T1Rrc01pNDVPQ3cwTGpJMVdpSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTFRFNU1TNDRPRGc0TWlBdE9Ua3VOekF4TlNraUlHWnBiR3c5SWlNeFl6SmtNMlFpTHo0OGNHRjBhQ0JrUFNKTk5EazFMall4T0RRNExEVXhPUzQzTmpnd05VRTFNQzR5T1RJM01TdzFNQzR5T1RJM01Td3dMREFzTUN3ME5UVXVORFU0TERVek9TNDNNemMzTERNekxqRXhOQ3d6TXk0eE1UUXNNQ3d3TERBc05EQTVMakkxTkRVc05UY3dMakUwTjJneE16WXVOelF6UVRVd0xqTTNPRGtzTlRBdU16YzRPU3d3TERBc01DdzBPVFV1TmpFNE5EZ3NOVEU1TGpjMk9EQTFXaUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xURTVNUzQ0T0RnNE1pQXRPVGt1TnpBeE5Ta2lJR1pwYkd3OUlpTmpZMk1pTHo0OGNHRjBhQ0JrUFNKTk56RTNMamc0T0RneUxEWTRNeTR3TWpnME9HZ3RORE01WVRNeUxqazNNREEzTERNeUxqazNNREEzTERBc01Dd3hMVE16TFRNelZqTTVPUzQzT0RnM00yRXpNeTR3TXpjek5Dd3pNeTR3TXpjek5Dd3dMREFzTVN3ek15MHpNMmcwTXpsaE16TXVNRE0zTXpRc016TXVNRE0zTXpRc01Dd3dMREVzTXpNc016TldOalV3TGpBeU9EUTRZVE15TGprMk1qRXhMRE15TGprMk1qRXhMREFzTUN3eExUTXpMRE16V20wdE5ETTVMVE14TkM0eU16azNOV0V6TVM0d016VXlMRE14TGpBek5USXNNQ3d3TERBdE16RXNNekZXTmpVd0xqQXlPRFE0WVRNd0xqazNNRGMzTERNd0xqazNNRGMzTERBc01Dd3dMRE14TERNeGFEUXpPV0V6TUM0NU5qTTNMRE13TGprMk16Y3NNQ3d3TERBc016RXRNekZXTXprNUxqYzRPRGN6WVRNeExqQXpOVEl4TERNeExqQXpOVEl4TERBc01Dd3dMVE14TFRNeFdpSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTFRFNU1TNDRPRGc0TWlBdE9Ua3VOekF4TlNraUlHWnBiR3c5SWlNeFl6SmtNMlFpTHo0OEwzTjJaejROQ2c9PVwiIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5cclxuaW1wb3J0IGdldE1lZGlhU291cmNlIGZyb20gJ0AvdXRpbHMvZ2V0LW1lZGlhLXNvdXJjZSc7XHJcblxyXG5DaXJjbGVBdmF0YXIucHJvcFR5cGVzID0ge1xyXG4gIGF2YXRhcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5DaXJjbGVBdmF0YXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIGF2YXRhcjogbnVsbCxcclxuICBzaXplOiAnMzInXHJcbn07XHJcblxyXG5sZXQgc3R5bGVzID0ge1xyXG4gIHRhaWx3aW5kOiB7XHJcbiAgICBmcmFtZTogYFxyXG4gICAgICBib3JkZXItNFxyXG4gICAgICBib3JkZXItYWNjZW50XHJcbiAgICAgIG1pbi13LW1pblxyXG4gICAgICBwLTJcclxuICAgICAgcm91bmRlZC1mdWxsXHJcbiAgICAgIHNoYWRvd1xyXG4gICAgYCxcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBvdmVyZmxvdy1oaWRkZW5cclxuICAgICAgcm91bmRlZC1mdWxsXHJcbiAgICBgLFxyXG4gICAgZ2VuZXJpYzoge1xyXG4gICAgICBpbWFnZTogYFxyXG4gICAgICAgIG1heC1oLWZ1bGxcclxuICAgICAgICBtYXgtdy1mdWxsXHJcbiAgICAgIGAsXHJcbiAgICAgIG5vQXZhdGFyOiBgXHJcbiAgICAgICAgYmctc29mdFxyXG4gICAgICAgIGZsZXhcclxuICAgICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICAgIGZsZXgtcm93XHJcbiAgICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICAgICAganVzdGlmeS1jZW50ZXJcclxuICAgICAgICB0ZXh0LWFjY2VudFxyXG4gICAgICBgXHJcbiAgICB9LFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENpcmNsZUF2YXRhcih7IGF2YXRhciwgc2l6ZSB9KSB7XHJcbiAgY29uc3QgZ2V0Q29udGFpbmVyU3R5bGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAke3N0eWxlcy50YWlsd2luZC5jb250YWluZXJ9IGgtJHtzaXplfSB3LSR7c2l6ZX1cclxuICAgIGA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Tm9BdmF0YXJTdHlsZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICR7c3R5bGVzLnRhaWx3aW5kLmdlbmVyaWMubm9BdmF0YXJ9IGgtJHtzaXplfSB3LSR7c2l6ZX1cclxuICAgIGA7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQuZnJhbWV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q29udGFpbmVyU3R5bGUoKX0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYXZhdGFyICYmIGF2YXRhci51cmxcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtnZXRNZWRpYVNvdXJjZShhdmF0YXIpfVxyXG4gICAgICAgICAgICAgIGFsdD1cIkZvdG8gZGUgdXN1YXJpb1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQuZ2VuZXJpYy5pbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Tm9BdmF0YXJTdHlsZSgpfT5cclxuICAgICAgICAgICAgICA8VXNlciBzaXplPXtzaXplfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgU2hvcHBpbmdCYWcgfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuaW1wb3J0IElQYXltZW50T3JkZXIgZnJvbSAnQC9tb2RlbHMvSVBheW1lbnRPcmRlcic7XHJcbmltcG9ydCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBPcmRlckNvbnRleHQgZnJvbSAnQC9jb250ZXh0L09yZGVyQ29udGV4dCc7XHJcblxyXG5BZGRUb0JhZ0J1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgb3JkZXI6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuXHJcbkFkZFRvQmFnQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBvcmRlcjogbnVsbFxyXG59O1xyXG5cclxuY29uc3QgY2xhc3NlcyA9IHtcclxuICBjb250YWluZXI6IGBcclxuICAgIGJnLWFjY2VudFxyXG4gICAgY3Vyc29yLXBvaW50ZXJcclxuICAgIGZsZXhcclxuICAgIGZsZXgtcm93XHJcbiAgICBmbGV4LW5vd3JhcFxyXG4gICAgaXRlbXMtY2VudGVyXHJcbiAgICBob3ZlcjpiZy1pbmFjdGl2ZVxyXG4gICAgaG92ZXI6dGV4dC1wcmltYXJ5XHJcbiAgICBqdXN0aWZ5LWNlbnRlclxyXG4gICAgZm9udC1ib2xkXHJcbiAgICBweC00XHJcbiAgICBweS0zXHJcbiAgICByb3VuZGVkLWxnXHJcbiAgICB0ZXh0LWJzZVxyXG4gICAgc2hhZG93XHJcbiAgYFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVG9CYWdCdXR0b24oeyBvcmRlciB9OiB7IG9yZGVyOiBJUGF5bWVudE9yZGVyIH0pIHtcclxuXHJcbiAgY29uc3QgeyBhZGRQcm9kdWN0VG9CYWcgfSA9IHVzZUNvbnRleHQoT3JkZXJDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlckNsaWNrID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB2YXJpYW50UXVhbnRpdHkgPSBwYXJzZUludCgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5JykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gICAgYWRkUHJvZHVjdFRvQmFnKHZhcmlhbnRRdWFudGl0eSwgb3JkZXIpXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVyQ2xpY2soZSl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0zXCI+PFNob3BwaW5nQmFnIC8+PC9zcGFuPlxyXG4gICAgICA8c3Bhbj5Bw7FhZGlyIGEgbGEgYm9sc2E8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbk91dGxpbmVCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5PdXRsaW5lQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsYWJlbDogJ091dGxpbmUgYnV0dG9uJ1xyXG59O1xyXG5cclxuY29uc3QgY2xhc3NlcyA9IGBcclxuICBib3JkZXItMlxyXG4gIGJvcmRlci1hY2NlbnRcclxuICBmbGV4XHJcbiAgZmxleC1yb3dcclxuICBmbGV4LW5vd3JhcFxyXG4gIGZvbnQtYm9sZFxyXG4gIGhvdmVyOmJnLWFjY2VudFxyXG4gIGhvdmVyOnRleHQtYnNlXHJcbiAgaXRlbXMtY2VudGVyXHJcbiAganVzdGlmeS1jZW50ZXJcclxuICBwLTJcclxuICByb3VuZGVkLWxnXHJcbiAgdGV4dC1hY2NlbnRcclxuICB0cmFuc2l0aW9uLWFsbFxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3V0bGluZUJ1dHRvbih7IGxhYmVsIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PntsYWJlbH08L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGV2cm9uTGVmdCwgQ2hldnJvblJpZ2h0IH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcblxyXG5pbXBvcnQgZ2V0TWVkaWFTb3VyY2UgZnJvbSAnQC91dGlscy9nZXQtbWVkaWEtc291cmNlJztcclxuXHJcbkNhcm91c2VsLnByb3BUeXBlcyA9IHtcclxuICBtZWRpYTogUHJvcFR5cGVzLmFycmF5XHJcbn07XHJcblxyXG5DYXJvdXNlbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbWVkaWE6IFtdXHJcbn07XHJcblxyXG5jb25zdCBjbGFzc2VzID0ge1xyXG4gIGNvbnRhaW5lcjogYFxyXG4gICAgbWQ6dy1mdWxsXHJcbiAgICBoLWZ1bGxcclxuICAgIG1kOmZsZXhcclxuICAgIG1kOmZsZXgtcm93XHJcbiAgICBtZDpmbGV4LW5vd3JhcFxyXG4gICAgbWQ6anVzdGlmeS1jZW50ZXJcclxuICAgIG1kOml0ZW1zLWNlbnRlclxyXG4gICAgcmVsYXRpdmVcclxuICBgLFxyXG5cclxuICBjb250cm9sczoge1xyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIGFic29sdXRlXHJcbiAgICAgIGJnLWJzZVxyXG4gICAgICBiZy1vcGFjaXR5LTc1XHJcbiAgICAgIGJvdHRvbS0wXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgZmxleC1yb3dcclxuICAgICAgcmlnaHQtMFxyXG4gICAgYCxcclxuICAgIGJ1dHRvbjogYFxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGgtOVxyXG4gICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAganVzdGlmeS1jZW50ZXJcclxuICAgICAgbWQ6dGV4dC1hY2NlbnRcclxuICAgICAgbWQ6aG92ZXI6dGV4dC1wcmltYXJ5XHJcbiAgICAgIHctOVxyXG4gICAgYFxyXG4gIH0sXHJcblxyXG4gIGltYWdlOiBgXHJcbiAgICBhbmltYXRlLWZhZGVJblxyXG4gICAgbWluLWgtZnVsbFxyXG4gICAgbWluLXctZnVsbFxyXG4gICAgb2JqZWN0LWNvdmVyXHJcbiAgYCxcclxuXHJcbiAgdmlkZW86IGBcclxuICAgIGFuaW1hdGUtZmFkZUluXHJcbiAgICBtaW4taC1mdWxsXHJcbiAgICBtaW4tdy1mdWxsXHJcbiAgYFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWwoeyBtZWRpYSB9KSB7XHJcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobWVkaWFbMF0pO1xyXG4gIGNvbnN0IG1lZGlhRWxlbWVudCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3Qgc2hvd1ByZXZpb3VzID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZmlsZUluZGV4ID0gbWVkaWEuaW5kZXhPZihmaWxlKVxyXG4gICAgICA/IG1lZGlhLmluZGV4T2YoZmlsZSkgLSAxXHJcbiAgICAgIDogbWVkaWEubGVuZ3RoIC0gMTtcclxuXHJcbiAgICByZXR1cm4gc2V0RmlsZShtZWRpYVtmaWxlSW5kZXhdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93TmV4dCA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGZpbGVJbmRleCA9IG1lZGlhLmluZGV4T2YoZmlsZSkgPCAobWVkaWEubGVuZ3RoIC0gMSlcclxuICAgICAgPyBtZWRpYS5pbmRleE9mKGZpbGUpICsgMVxyXG4gICAgICA6IDA7XHJcblxyXG4gICAgcmV0dXJuIHNldEZpbGUobWVkaWFbZmlsZUluZGV4XSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIHtcclxuICAgICAgICBmaWxlICYmIChcclxuICAgICAgICAgIGZpbGUubWltZS5pbmNsdWRlcygnaW1hZ2UnKSA/XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICByZWY9e21lZGlhRWxlbWVudH1cclxuICAgICAgICAgICAgICBrZXk9e2ZpbGUuaWR9XHJcbiAgICAgICAgICAgICAgc3JjPXtnZXRNZWRpYVNvdXJjZShmaWxlKX1cclxuICAgICAgICAgICAgICBhbHQ9e2ZpbGUuYWx0ZXJuYXRpdmVUZXh0fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8dmlkZW9cclxuICAgICAgICAgICAgICByZWY9e21lZGlhRWxlbWVudH1cclxuICAgICAgICAgICAgICBrZXk9e2ZpbGUuaWR9XHJcbiAgICAgICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudmlkZW99XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c291cmNlIHNyYz17Z2V0TWVkaWFTb3VyY2UoZmlsZSl9IHR5cGU9e2ZpbGUubWltZX0+PC9zb3VyY2U+XHJcbiAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9scy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxhIG9uQ2xpY2s9eyhlKSA9PiBzaG93UHJldmlvdXMoZSl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9scy5idXR0b259PlxyXG4gICAgICAgICAgPENoZXZyb25MZWZ0IC8+XHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICA8YSBvbkNsaWNrPXsoZSkgPT4gc2hvd05leHQoZSl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9scy5idXR0b259PlxyXG4gICAgICAgICAgPENoZXZyb25SaWdodCAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdAL2NvbXBvbmVudHMvZHJvcGRvd25zL0Ryb3Bkb3duJztcclxuaW1wb3J0IElPZmZlciBmcm9tICdAL21vZGVscy9JT2ZmZXInO1xyXG5cclxuT2ZmZXJzU2VsZWN0b3IucHJvcFR5cGVzID0ge1xyXG4gIG9mZmVyczogUHJvcFR5cGVzLmFycmF5LFxyXG4gIHN0YXRlOiBQcm9wVHlwZXMuYXJyYXlcclxufTtcclxuXHJcbk9mZmVyc1NlbGVjdG9yLmRlZmF1bHRQcm9wcyA9IHtcclxuICBvZmZlcnM6IFtdLFxyXG4gIHN0YXRlOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT2ZmZXJzU2VsZWN0b3IoXHJcbiAgeyBvZmZlcnMsIHN0YXRlIH06IHsgb2ZmZXJzOiBBcnJheTxJT2ZmZXI+LCBzdGF0ZTogYW55IH1cclxuKSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkT2ZmZXJzLCBzZXRTZWxlY3RlZE9mZmVyc10gPSBzdGF0ZTtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGFwcGx5T2ZmZXIgPSAoZXZlbnQ6IGFueSwgb2ZmZXJJZDogc3RyaW5nKSA9PiB7XHJcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2JnLWFjY2VudCcpO1xyXG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdiZy1pbmFjdGl2ZScpO1xyXG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdzaGFkb3cnKTtcclxuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hhZG93LWlubmVyJyk7XHJcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3RleHQtYnNlJyk7XHJcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3RleHQtcHJpbWFyeScpO1xyXG5cclxuICAgIGNvbnN0IGFwcGxpZWQgPSBzZWxlY3RlZE9mZmVycy5maWx0ZXIoKHNlbGVjdGVkT2ZmZXIpID0+IHNlbGVjdGVkT2ZmZXIgPT09IG9mZmVySWQpO1xyXG5cclxuICAgIGlmIChhcHBsaWVkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gc2V0U2VsZWN0ZWRPZmZlcnMoc2VsZWN0ZWRPZmZlcnMuY29uY2F0KFtvZmZlcklkXSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHNldFNlbGVjdGVkT2ZmZXJzKFxyXG4gICAgICAgIHNlbGVjdGVkT2ZmZXJzLmZpbHRlcigoc2VsZWN0ZWRPZmZlcikgPT4gc2VsZWN0ZWRPZmZlciAhPT0gb2ZmZXJJZClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge1xyXG4gICAgICAgIG9mZmVycy5tYXAoKG9mZmVyKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17b2ZmZXIuaWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC13cmFwIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGFwcGx5T2ZmZXIoZXZlbnQsIG9mZmVyLmlkKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTIgcm91bmRlZC1tZCBzaGFkb3cgYmctYWNjZW50IHRleHQtYnNlIGZvbnQtYm9sZCBib3JkZXItYWNjZW50IGhvdmVyOmJnLWluYWN0aXZlIGhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWFsbCB3LTEvNFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2VsZWN0ZWRPZmZlcnMuZmlsdGVyKChzZWxlY3RlZE9mZmVyOiBJT2ZmZXIpID0+IHNlbGVjdGVkT2ZmZXIgPT09IG9mZmVyLmlkKS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgID8gPD5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+wqFMYSBxdWllcm8hPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICA6IDxzcGFuPsKhWWEgbGEgdGllbmVzITwvc3Bhbj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPHA+e29mZmVyLm5hbWV9PC9wPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciB0ZXh0LWFjY2VudCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSghdmlzaWJsZSl9IGxhYmVsPVwiRGV0YWxsZXNcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHt2aXNpYmxlICYmXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktNCBtdC0xIHJvdW5kZWQtbWQgc2hhZG93IGJnLXNvZnQgYW5pbWF0ZS1leHBhbmRCb3R0b21cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtvZmZlci5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSlcclxuICAgICAgfVxyXG4gICAgPC9kaXYgPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQbHVzIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcbmltcG9ydCB7IE1pbnVzIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcblxyXG5jb25zdCBRdWFudGl0eVNlbGVjdG9yID0gKHsgc3RvY2sgfSkgPT4ge1xyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIGNvbnN0IGRlY3JlbWVudCA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKHF1YW50aXR5ID4gMSkge1xyXG4gICAgICBzZXRRdWFudGl0eShxdWFudGl0eSAtIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluY3JlbWVudCA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKHF1YW50aXR5IDwgc3RvY2spIHtcclxuICAgICAgc2V0UXVhbnRpdHkocXVhbnRpdHkgKyAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC05IHctOSByb3VuZGVkLWwtbWQgYmctaW5hY3RpdmUgdGV4dC1hY2NlbnQgaG92ZXI6dGV4dC1wcmltYXJ5IGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gZGVjcmVtZW50KGV2ZW50KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWludXMgc2l6ZT1cIjE4XCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPVwicXVhbnRpdHlcIlxyXG4gICAgICAgICAgbmFtZT1cInF1YW50aXR5XCJcclxuICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHZhbHVlPXtxdWFudGl0eX1cclxuICAgICAgICAgIHN0eWxlPXt7YXBwZWFyYW5jZTogJ3RleHRmaWVsZCd9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0yMCBiZy1pbmFjdGl2ZSB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTkgdy05IHJvdW5kZWQtci1tZCBiZy1pbmFjdGl2ZSB0ZXh0LWFjY2VudCBob3Zlcjp0ZXh0LXByaW1hcnkgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBpbmNyZW1lbnQoZXZlbnQpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQbHVzIHNpemU9XCIxOFwiIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblF1YW50aXR5U2VsZWN0b3IucHJvcFR5cGVzID0ge1xyXG4gIHN0b2NrOiBQcm9wVHlwZXMubnVtYmVyXHJcbn07XHJcblxyXG5RdWFudGl0eVNlbGVjdG9yLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzdG9jazogMVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVhbnRpdHlTZWxlY3RvcjtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hldnJvbkRvd24gfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuXHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnQC9kYXRhL2NvbG9ycy5qc29uJztcclxuXHJcblZhcmlhbnRTZWxlY3Rvci5wcm9wVHlwZXMgPSB7XHJcbiAgc3RhdGU6IFByb3BUeXBlcy5hcnJheSxcclxuICB2YXJpYW50czogUHJvcFR5cGVzLmFycmF5XHJcbn07XHJcblxyXG5WYXJpYW50U2VsZWN0b3IuZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0YXRlOiBbXSxcclxuICB2YXJpYW50czogW11cclxufTtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY29udGFpbmVyOiBgXHJcbiAgICBjdXJzb3ItcG9pbnRlclxyXG4gICAgb3ZlcmZsb3ctaGlkZGVuXHJcbiAgICByZWxhdGl2ZVxyXG5cclxuICAgIHJvdW5kZWRcclxuICAgIHNoYWRvd1xyXG4gIGAsXHJcbiAgZGVmYXVsdEl0ZW06IGBcclxuICAgIG1kOmJnLWluYWN0aXZlXHJcbiAgICBtZDpweC00XHJcbiAgICBtZDpweS0yXHJcbiAgICBtZDp0ZXh0LXNlY29uZGFyeVxyXG4gICAgcC0yXHJcbiAgYCxcclxuICBpdGVtOiB7XHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4LXJvd1xyXG4gICAgICBob3ZlcjpiZy1hY2NlbnRcclxuICAgICAgaG92ZXI6dGV4dC1ic2VcclxuICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICAgIGp1c3RpZnktc3RhcnRcclxuICAgICAgbWQ6cHgtNFxyXG4gICAgICBtZDpweS0yXHJcbiAgICAgIHAtMlxyXG4gICAgYCxcclxuICAgIGNvbG9yU3dhdGNoOiBgXHJcbiAgICAgIGJvcmRlci0yXHJcbiAgICAgIGJvcmRlci1ic2VcclxuICAgICAgaC03XHJcbiAgICAgIG1kOm1yLTRcclxuICAgICAgbXItMlxyXG4gICAgICByb3VuZGVkLWZ1bGxcclxuICAgICAgdy03XHJcbiAgICBgLFxyXG4gICAgZGVzY3JpcHRpb246IGBcclxuICAgICAgdGV4dC1zbVxyXG4gICAgICB1cHBlcmNhc2VcclxuICAgIGBcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWYXJpYW50U2VsZWN0b3IoeyBzdGF0ZSwgdmFyaWFudHMgfSkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFZhcmlhbnQsIHNldFNlbGVjdGVkVmFyaWFudF0gPSBzdGF0ZTtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZHJvcGRvd25JY29uID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBhbmltYXRlID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgZHJvcGRvd25JY29uLmN1cnJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYW5pbWF0ZS1mbGlwSG9yaXpvbnRhbEJvdHRvbScpO1xyXG4gICAgc2V0VmlzaWJsZSghdmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgb25DbGljaz17YW5pbWF0ZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAhc2VsZWN0ZWRWYXJpYW50XHJcbiAgICAgICAgICAgID9cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWZhdWx0SXRlbX0+XHJcbiAgICAgICAgICAgICAgU2VsZWNjaW9uYVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbS5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzW3NlbGVjdGVkVmFyaWFudC5jb2xvci50cmltKCkudG9Mb3dlckNhc2UoKV1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW0uY29sb3JTd2F0Y2h9XHJcbiAgICAgICAgICAgICAgPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW0uZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkVmFyaWFudC5jb2xvcn0sIHtzZWxlY3RlZFZhcmlhbnQuc2l6ZX0sIHtzZWxlY3RlZFZhcmlhbnQucGF0dGVybn1cclxuICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmlzaWJsZSAmJlxyXG4gICAgICAgICAgdmFyaWFudHMuZmlsdGVyKCh2YXJpYW50KSA9PiB2YXJpYW50LnN0b2NrID4gMCkubWFwKCh2YXJpYW50KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGtleT17dmFyaWFudC5pZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbS5jb250YWluZXIgKyAnYmctaW5hY3RpdmUnfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkVmFyaWFudCh2YXJpYW50KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtLmNvbG9yU3dhdGNofVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbdmFyaWFudC5jb2xvci50cmltKCkudG9Mb3dlckNhc2UoKV0gfX1cclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbS5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICB7dmFyaWFudC5jb2xvcn0sIHt2YXJpYW50LnNpemV9LCB7dmFyaWFudC5wYXR0ZXJufVxyXG4gICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgPC91bD5cclxuXHJcblxyXG4gICAgICA8c3BhbiByZWY9e2Ryb3Bkb3duSWNvbn0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtNCB0b3AtMlwiPlxyXG4gICAgICAgIDxDaGV2cm9uRG93biAvPlxyXG4gICAgICA8L3NwYW4+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hldnJvbkRvd24gfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuXHJcbkRyb3Bkb3duLnByb3BUeXBlcyA9IHtcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuRHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xyXG4gIGxhYmVsOiAnRHJvcGRvd24nXHJcbn07XHJcblxyXG5jb25zdCBjbGFzc2VzID0ge1xyXG4gIGNvbnRhaW5lcjogYFxyXG4gICAgZmxleFxyXG4gICAgZmxleC1yb3dcclxuICAgIGZsZXgtbm93cmFwXHJcbiAgICBmb250LWJvbGRcclxuICAgIGl0ZW1zLWNlbnRlclxyXG4gIGAsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wZG93bih7IGNoaWxkcmVuID0gJycsIGxhYmVsLCBvbkNsaWNrIH0pIHtcclxuICBjb25zdCBhcnJvd0ljb24gPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICBhcnJvd0ljb24uY3VycmVudC5jbGFzc0xpc3QudG9nZ2xlKCdhbmltYXRlLWZsaXBIb3Jpem9udGFsQm90dG9tJyk7XHJcbiAgICBvbkNsaWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxhIG9uQ2xpY2s9e2FuaW1hdGV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTFcIj57bGFiZWx9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIHJlZj17YXJyb3dJY29ufT48Q2hldnJvbkRvd24gc2l6ZT1cIjE4XCIgLz48L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBJQ2F0ZWdvcnkgZnJvbSAnQC9tb2RlbHMvSUNhdGVnb3J5JztcclxuaW1wb3J0IElTdWJjYXRlZ29yeSBmcm9tICdAL21vZGVscy9JU3ViY2F0ZWdvcnknO1xyXG5cclxuQ2F0ZWdvcmllc01lbnUucHJvcFR5cGVzID0ge1xyXG4gIGRlcGFydG1lbnQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5DYXRlZ29yaWVzTWVudS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGVwYXJ0bWVudDogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY29udGFpbmVyOiBgXHJcbiAgICBnYXAtNlxyXG4gICAgZ3JpZFxyXG4gICAgbWQ6Z3JpZC1jb2xzLTNcclxuICBgLFxyXG5cclxuICBpdGVtOiBgXHJcbiAgICBjdXJzb3ItcG9pbnRlclxyXG4gICAgZm9udC1ib2xkXHJcbiAgICB0ZXh0LXNlY29uZGFyeVxyXG4gICAgdXBwZXJjYXNlXHJcbiAgYCxcclxuXHJcbiAgc3ViY2F0ZWdvcmllczoge1xyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIG1sLTRcclxuICAgIGAsXHJcbiAgICBpdGVtOiBgXHJcbiAgICAgIGN1cnNvci1wb2ludGVyXHJcbiAgICAgIGhvdmVyOnRleHQtYWNjZW50XHJcbiAgICAgIG15LTFcclxuICAgIGBcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yaWVzTWVudSh7IGRlcGFydG1lbnQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICB7XHJcbiAgICAgICAgZGVwYXJ0bWVudC5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnk6IElDYXRlZ29yeSkgPT4gKFxyXG4gICAgICAgICAgPHVsIGtleT17Y2F0ZWdvcnkuc2x1Z30+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2Avc3RvcmUvcHJvZHVjdHM/ZGVwYXJ0bWVudD0ke2RlcGFydG1lbnQuc2x1Z30mY2F0ZWdvcnk9JHtjYXRlZ29yeS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+e2NhdGVnb3J5Lm5hbWV9PC9saT5cclxuICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJjYXRlZ29yaWVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkuc3ViY2F0ZWdvcmllcy5tYXAoKHN1YmNhdGVnb3J5OiBJU3ViY2F0ZWdvcnkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3N1YmNhdGVnb3J5LnNsdWd9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9zdG9yZS9wcm9kdWN0cz9kZXBhcnRtZW50PSR7ZGVwYXJ0bWVudC5zbHVnfSZjYXRlZ29yeT0ke2NhdGVnb3J5LnNsdWd9JnN1YmNhdGVnb3J5PSR7c3ViY2F0ZWdvcnkuc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJjYXRlZ29yaWVzLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3N1YmNhdGVnb3J5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICkpXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGV2cm9uUmlnaHQgfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuXHJcbmltcG9ydCBDYXRlZ29yaWVzTWVudSBmcm9tICcuL0NhdGVnb3JpZXNNZW51JztcclxuaW1wb3J0IElEZXBhcnRtZW50IGZyb20gJ0AvbW9kZWxzL0lEZXBhcnRtZW50JztcclxuaW1wb3J0IGlzVG91Y2hFbmFibGVkIGZyb20gJ0AvdXRpbHMvZGV0ZWN0LXRvdWNoLWRldmljZSc7XHJcblxyXG5EZXBhcnRtZW50c01lbnUucHJvcFR5cGVzID0ge1xyXG4gIGRlcGFydG1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KVxyXG59O1xyXG5cclxuRGVwYXJ0bWVudHNNZW51LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkZXBhcnRtZW50czogW11cclxufTtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY29udGFpbmVyOiBgXHJcbiAgICBhbmltYXRlLWV4cGFuZFZlcnRpY2FsbHlcclxuICAgIGJnLWJzZVxyXG4gICAgZmxleFxyXG4gICAgZmxleC1ub3dyYXBcclxuICAgIGZsZXgtcm93XHJcbiAgICB3LWZ1bGxcclxuICBgLFxyXG5cclxuICBkZXBhcnRtZW50c01lbnU6IHtcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBiZy1hY2NlbnRcclxuICAgICAgZm9udC1ib2xkXHJcbiAgICAgIHB5LTRcclxuICAgICAgbWQ6cHktN1xyXG4gICAgICB0ZXh0LWJzZVxyXG4gICAgICBtZDp3LTEvNFxyXG4gICAgICB3LTEvM1xyXG4gICAgYCxcclxuICAgIGl0ZW06IGBcclxuICAgICAgYWN0aXZlOmJnLWJzZVxyXG4gICAgICBhY3RpdmU6dGV4dC1wcmltYXJ5XHJcbiAgICAgIGN1cnNvci1wb2ludGVyXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgZmxleC1yb3dcclxuICAgICAgaG92ZXI6YmctYnNlXHJcbiAgICAgIGhvdmVyOnRleHQtcHJpbWFyeVxyXG4gICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAganVzdGlmeS1iZXR3ZWVuXHJcbiAgICAgIHAtM1xyXG4gICAgYFxyXG4gIH0sXHJcblxyXG4gIGNhdGVnb3JpZXNNZW51OiB7XHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgZmxleC0xXHJcbiAgICAgIG1kOnB4LTEyXHJcbiAgICAgIG1kOnB5LTlcclxuICAgICAgcC02XHJcbiAgICBgLFxyXG4gICAgdGl0bGU6IGBcclxuICAgICAgYm9yZGVyLWItMlxyXG4gICAgICBib3JkZXItc2Vjb25kYXJ5XHJcbiAgICAgIGZvbnQtZGlzcGxheVxyXG4gICAgICBtYi02XHJcbiAgICAgIG1kOm1iLTlcclxuICAgICAgcGItM1xyXG4gICAgICB0ZXh0LTJ4bFxyXG4gICAgICB0ZXh0LWFjY2VudFxyXG4gICAgYFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcGFydG1lbnRzTWVudSh7IGRlcGFydG1lbnRzIH0pIHtcclxuICBjb25zdCBbZGVwYXJ0bWVudCwgc2V0RGVwYXJ0bWVudF0gPSB1c2VTdGF0ZTxJRGVwYXJ0bWVudD4oZGVwYXJ0bWVudHNbMF0pO1xyXG5cclxuICBjb25zdCBzaG93Q2F0ZWdvcmllcyA9IChldmVudDogYW55LCBpdGVtOiBJRGVwYXJ0bWVudCk6IHZvaWQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldERlcGFydG1lbnQoaXRlbSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMuZGVwYXJ0bWVudHNNZW51LmNvbnRhaW5lcn0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGVwYXJ0bWVudHMubWFwKChpdGVtOiBJRGVwYXJ0bWVudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNUb3VjaEVuYWJsZWQoKVxyXG4gICAgICAgICAgICAgID8gLy86IG9uIHRvdWNoIGRldmljZXMgY2xpY2tpbmcgb24gdGhpcyBpdGVtIHdpbGwgc2hvdyBjYXRlZ29yaWVzXHJcbiAgICAgICAgICAgICAgPGEga2V5PXtpdGVtLnNsdWd9IG9uQ2xpY2s9eyhldnQpID0+IHNob3dDYXRlZ29yaWVzKGV2dCwgaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXBhcnRtZW50c01lbnUuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hldnJvblJpZ2h0IHNpemU9XCIxOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA6IC8vOiBvbiBub24tdG91Y2ggZGV2aWNlcyBjbGlja2luZyBvbiB0aGlzIGl0ZW0gd2lsbCByZWRpcmVjdFxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uc2x1Z31cclxuICAgICAgICAgICAgICAgIGhyZWY9e2Avc3RvcmUvcHJvZHVjdHM/ZGVwYXJ0bWVudD0ke2l0ZW0uc2x1Z31gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldERlcGFydG1lbnQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXBhcnRtZW50c01lbnUuaXRlbX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgc2l6ZT1cIjE4XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yaWVzTWVudS5jb250YWluZXJ9PlxyXG4gICAgICAgIDxhIGhyZWY9e2Avc3RvcmUvcHJvZHVjdHM/ZGVwYXJ0bWVudD0ke2RlcGFydG1lbnQuc2x1Z31gfT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMuY2F0ZWdvcmllc01lbnUudGl0bGV9PlxyXG4gICAgICAgICAgICB7ZGVwYXJ0bWVudC5uYW1lfVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRlcGFydG1lbnQgJiZcclxuICAgICAgICAgIDxDYXRlZ29yaWVzTWVudSBkZXBhcnRtZW50PXtkZXBhcnRtZW50fSAvPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcnJvd0xlZnQgfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuXHJcbk5hdmlnYXRpb25iYXIucHJvcFR5cGVzID0ge1xyXG4gIHJlZmVyZXI6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbk5hdmlnYXRpb25iYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHJlZmVyZXI6ICcnXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgdGFpbHdpbmQ6IHtcclxuICAgIHBhZ2VDb250YWluZXI6IGBcclxuICAgICAgYmctYnNlXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgZmxleC1yb3dcclxuICAgICAgaC0xNlxyXG4gICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAganVzdGlmeS1iZXR3ZWVuXHJcbiAgICAgIHB4LTZcclxuICAgICAgcmVsYXRpdmVcclxuICAgICAgc2hhZG93XHJcbiAgICAgIHotNTBcclxuICAgIGAsXHJcblxyXG4gICAgY29udHJvbDogYFxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGgtZnVsbFxyXG4gICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAganVzdGlmeS1jZW50ZXJcclxuICAgICAgdy0xNlxyXG4gICAgYCxcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uYmFyKHsgY2hpbGRyZW4gPSBudWxsLCByZWZlcmVyIH0pIHtcclxuICBjb25zdCBbYmFja0J1dHRvbiwgc2V0QmFja0J1dHRvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vOiBMaW5rIHBlcmZvcm0gc29tZSBhc3luY2hyb25vdXMgdGFza3MgdGhhdCB0cmlnZ2VycyBhIHdhcm5pbmcgaWYgdGhlXHJcbiAgICAvLzogY29tcG9uZW50IGlzIHVubW91bnRlZCBiZWZvcmUgaXQgd2FzIG1vdW50ZWQgKGxpa2UgaW4gdGhlIGNhc2Ugb2YgaGlkZGluZ1xyXG4gICAgLy86IGl0IGFzIGEgcmVzdWx0IG9mIGEgcmVzcG9uc2l2ZSBiZWhhdmlvdXIpLiBCeSB1c2luZyBhIHN0YXRlLCB3ZSBwcmV2ZW50XHJcbiAgICAvLzogdGhpcyB3YXJuaW5nIGFuZCBqdXN0IG1vdW50IHRoZSBiYWNrIGJ1dHRvbiBpZiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcclxuICAgIHNldEJhY2tCdXR0b24oXHJcbiAgICAgIDxMaW5rIGhyZWY9e3JlZmVyZXJ9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRhaWx3aW5kLmNvbnRyb2x9PlxyXG4gICAgICAgICAgPEFycm93TGVmdCAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhaWx3aW5kLnBhZ2VDb250YWluZXJ9PlxyXG4gICAgICB7YmFja0J1dHRvbn1cclxuXHJcbiAgICAgIHtcclxuICAgICAgICBjaGlsZHJlbiAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQuY29udHJvbH0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vcmVIb3Jpem9udGFsLCBNb3JlVmVydGljYWwsIFNob3BwaW5nQmFnIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcblxyXG5pbXBvcnQgY2FydmluZ0ltYWdlIGZyb20gJ0AvYXNzZXRzL2ltYWdlcy9mcmFtZS5zdmcnO1xyXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJ0AvYXNzZXRzL2ltYWdlcy9sb2dvLnN2Zyc7XHJcbmltcG9ydCBDaXJjbGVBdmF0YXIgZnJvbSAnQC9jb21wb25lbnRzL2F2YXRhcnMvQ2lyY2xlQXZhdGFyJztcclxuaW1wb3J0IE91dGxpbmVCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2J1dHRvbnMvT3V0bGluZUJ1dHRvbic7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdAL2NvbXBvbmVudHMvZHJvcGRvd25zL0Ryb3Bkb3duJztcclxuaW1wb3J0IERlcGFydG1lbnRzTWVudSBmcm9tICdAL2NvbXBvbmVudHMvbWVudXMvRGVwYXJ0bWVudHNNZW51JztcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJ0AvY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCBPcmRlckNvbnRleHQgZnJvbSAnQC9jb250ZXh0L09yZGVyQ29udGV4dCc7XHJcblxyXG5PbW5pYmFyLnByb3BUeXBlcyA9IHtcclxuICBtZW51RW50cmllczogUHJvcFR5cGVzLmFycmF5XHJcbn07XHJcblxyXG5PbW5pYmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBtZW51RW50cmllczogW11cclxufTtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY2FydmluZzogYFxyXG4gICAgYmctcmVwZWF0LXhcclxuICAgIGgtOFxyXG4gICAgdy1mdWxsXHJcbiAgYCxcclxuXHJcbiAgY29udGFpbmVyOiBgXHJcbiAgICBiZy1ic2VcclxuICAgIGZsZXhcclxuICAgIGZsZXgtY29sXHJcbiAgICBmbGV4LW5vd3JhcFxyXG4gICAgaC0yNFxyXG4gICAgbWQ6aC0yOFxyXG4gICAgcmVsYXRpdmVcclxuICAgIHNoYWRvd1xyXG4gICAgdy1mdWxsXHJcbiAgICB6LTUwXHJcbiAgYCxcclxuXHJcbiAgZGVwYXJ0bWVudHM6IHtcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBjdXJzb3ItcG9pbnRlclxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgYCxcclxuICAgIG1lbnU6IGBcclxuICAgICAgYWJzb2x1dGVcclxuICAgICAgbWF4LWgtMS8yXHJcbiAgICAgIHctZnVsbFxyXG4gICAgICB6LTQwXHJcbiAgICBgXHJcbiAgfSxcclxuXHJcbiAgbGlua0dyb3VwOiB7XHJcbiAgICBiYWc6IHtcclxuICAgICAgY29udGFpbmVyOiBgXHJcbiAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgbWQ6ZmxleFxyXG4gICAgICAgIG1kOmZsZXgtcm93XHJcbiAgICAgICAgbWQ6ZmxleC1ub3dyYXBcclxuICAgICAgICBtZDppdGVtcy1jZW50ZXJcclxuICAgICAgICBtZDpqdXN0aWZ5LWNlbnRlclxyXG4gICAgICAgIG1kOmgtMTJcclxuICAgICAgICBtZDpyZWxhdGl2ZVxyXG4gICAgICAgIG1kOnctMTJcclxuICAgICAgYCxcclxuICAgICAgaXRlbXNDb3VudGVyOiBgXHJcbiAgICAgICAgYWJzb2x1dGVcclxuICAgICAgICBiZy1hY2NlbnRcclxuICAgICAgICBib3JkZXItMlxyXG4gICAgICAgIGJvcmRlci1ic2VcclxuICAgICAgICBmbGV4XHJcbiAgICAgICAgZmxleC1yb3dcclxuICAgICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICAgIGZvbnQtYm9sZFxyXG4gICAgICAgIGgtNVxyXG4gICAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICAgIGp1c3RpZnktY2VudGVyXHJcbiAgICAgICAgcmlnaHQtMVxyXG4gICAgICAgIHJvdW5kZWQtZnVsbFxyXG4gICAgICAgIHRleHQtYnNlXHJcbiAgICAgICAgdG9wLTFcclxuICAgICAgICB3LTVcclxuICAgICAgYFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICBqdXN0aWZ5LWVuZFxyXG4gICAgICB3LTEvM1xyXG4gICAgYCxcclxuICAgIHVzZXI6IHtcclxuICAgICAgY29udGFpbmVyOiBgXHJcbiAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgbWQ6Y3Vyc29yLXBvaW50ZXJcclxuICAgICAgICBtZDppbmxpbmUtYmxvY2tcclxuICAgICAgICBtZDptbC00XHJcbiAgICAgIGBcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBsb2dvOiB7XHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4LXJvd1xyXG4gICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICBoLTEyXHJcbiAgICAgIGp1c3RpZnktc3RhcnRcclxuICAgICAgdy0xLzNcclxuICAgIGAsXHJcbiAgICBpbWFnZTogYFxyXG4gICAgICBtYXgtaC1mdWxsXHJcbiAgICAgIG1heC13LWZ1bGxcclxuICAgIGAsXHJcbiAgfSxcclxuXHJcbiAgbmF2YmFyOiBgXHJcbiAgICBmbGV4XHJcbiAgICBmbGV4LTFcclxuICAgIGZsZXgtcm93XHJcbiAgICBmbGV4LW5vd3JhcFxyXG4gICAgaXRlbXMtY2VudGVyXHJcbiAgICBqdXN0aWZ5LWJldHdlZW5cclxuICAgIHB4LTdcclxuICBgXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FydmluZzoge1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke2NhcnZpbmdJbWFnZX0nKWBcclxuICB9LFxyXG4gIGl0ZW1zQ291bnRlcjoge1xyXG4gICAgZm9udFNpemU6ICcwLjc1cmVtJ1xyXG4gIH0sXHJcbiAgdGFpbHdpbmQ6IHtcclxuICAgIGRlcGFydG1lbnRzTWVudToge1xyXG4gICAgICBtZW51Q29udGFpbmVyOiBgXHJcbiAgICAgICAgYWJzb2x1dGVcclxuICAgICAgICBtYXgtaC0xLzJcclxuICAgICAgICBvdmVyZmxvdy15LXNjcm9sbFxyXG4gICAgICAgIHRvcC0yNFxyXG4gICAgICAgIHctZnVsbFxyXG4gICAgICAgIHotNDBcclxuICAgICAgYFxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9tbmliYXIoeyBtZW51RW50cmllcyB9KSB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCB7IG9yZGVyIH0gPSB1c2VDb250ZXh0KE9yZGVyQ29udGV4dCk7XHJcbiAgY29uc3QgW2lzTWVudVZpc2libGUsIHNldElzTWVudVZpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJ2aW5nfSBzdHlsZT17c3R5bGVzLmNhcnZpbmd9PjwvZGl2PlxyXG5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZiYXJ9PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e2NsYXNzZXMubG9nby5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvLmltYWdlfSBzcmM9e2xvZ29JbWFnZX0gYWx0PVwiTG9nb1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVwYXJ0bWVudHMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVwYXJ0YW1lbnRvc1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01lbnVWaXNpYmxlKCFpc01lbnVWaXNpYmxlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtHcm91cC5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01lbnVWaXNpYmxlKCFpc01lbnVWaXNpYmxlKX0+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNNZW51VmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgICA/IDxNb3JlSG9yaXpvbnRhbCAvPlxyXG4gICAgICAgICAgICAgICAgICA6IDxNb3JlVmVydGljYWwgLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPXt1c2VyID8gJy9vcmRlcicgOiAnL2F1dGgnfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rR3JvdXAuYmFnLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTaG9wcGluZ0JhZyAvPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rR3JvdXAuYmFnLml0ZW1zQ291bnRlcn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaXRlbXNDb3VudGVyfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtvcmRlci5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj17dXNlciA/ICcvdXNlci9wcm9maWxlJyA6ICcvYXV0aCd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtHcm91cC51c2VyLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVzZXJcclxuICAgICAgICAgICAgICAgICAgPyA8Q2lyY2xlQXZhdGFyIGF2YXRhcj17dXNlci5hdmF0YXJ9IHNpemU9XCI4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgOiA8T3V0bGluZUJ1dHRvbiBsYWJlbD1cIlJlZ8Otc3RyYXRlIG8gaW5ncmVzYVwiIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgaXNNZW51VmlzaWJsZSAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQuZGVwYXJ0bWVudHNNZW51Lm1lbnVDb250YWluZXJ9PlxyXG4gICAgICAgICAgPERlcGFydG1lbnRzTWVudSBkZXBhcnRtZW50cz17bWVudUVudHJpZXN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsImNvbnN0IEFQSV9ET01BSU4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRE9NQUlOO1xyXG5jb25zdCBQQUdFX0xJTUlUID0gMTI7XHJcblxyXG5jb25zdCBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLID0gYCR7QVBJX0RPTUFJTn0vYXV0aC9mYWNlYm9vay9jYWxsYmFja2A7XHJcbmNvbnN0IEFVVEhfRkFDRUJPT0tfVVJMID0gYCR7QVBJX0RPTUFJTn0vY29ubmVjdC9mYWNlYm9va2A7XHJcbmNvbnN0IEFVVEhfR09PR0xFX0NBTExCQUNLID0gYCR7QVBJX0RPTUFJTn0vYXV0aC9nb29nbGUvY2FsbGJhY2tgO1xyXG5jb25zdCBBVVRIX0dPT0dMRV9VUkwgPSBgJHtBUElfRE9NQUlOfS9jb25uZWN0L2dvb2dsZWA7XHJcblxyXG5jb25zdCBTVFJJUEVfUFVCTElTSEVEX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSVNIRURfS0VZO1xyXG5cclxuZXhwb3J0IHtcclxuICBBUElfRE9NQUlOLFxyXG4gIFBBR0VfTElNSVQsXHJcbiAgQVVUSF9GQUNFQk9PS19DQUxMQkFDSyxcclxuICBBVVRIX0ZBQ0VCT09LX1VSTCxcclxuICBBVVRIX0dPT0dMRV9DQUxMQkFDSyxcclxuICBBVVRIX0dPT0dMRV9VUkwsXHJcbiAgU1RSSVBFX1BVQkxJU0hFRF9LRVlcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ0AvYWN0aW9ucy9mZXRjaC1zZXNzaW9ucyc7XHJcbmltcG9ydCBJU2Vzc2lvbiBmcm9tICdAL21vZGVscy9JU2Vzc2lvbic7XHJcbmltcG9ydCBJVXNlciBmcm9tICdAL21vZGVscy9JVXNlcic7XHJcblxyXG4vLzogdXNlIHRoaXMgY29udGV4dCB3aGVyZXZlciB5b3Ugd2FudCB0byBhY2Nlc3MgdGhlIEF1dGhQcm92aWRlclxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuZXhwb3J0IHsgQXV0aFByb3ZpZGVyIH07XHJcblxyXG4vLzogdXNlIHRoaXMgY29tcG9uZW50IGluIHRoZSBfYXBwLnRzeCBmaWxlIHRvIHNoYXJlIHRoZSBhdXRoZW50aWNhdGlvbiBzdGF0ZVxyXG4vLzogZ2xvYmFsbHlcclxuZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPElVc2VyPihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBpZiAoJ2lkX3Rva2VuJyBpbiByb3V0ZXIucXVlcnkgfHwgJ2FjY2Vzc190b2tlbicgaW4gcm91dGVyLnF1ZXJ5KSB7XHJcbiAgICAgIGNvbnN0IHNlc3Npb246IElTZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihsb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2Vzc2lvbicsIEpTT04uc3RyaW5naWZ5KHNlc3Npb24pKTtcclxuICAgICAgc2V0VXNlcihzZXNzaW9uLnVzZXIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpOiB2b2lkID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Nlc3Npb24nKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFNlc3Npb25TdG9yYWdlID0gKCk6IElTZXNzaW9uIHwgbnVsbCA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJykpO1xyXG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoKF9lcnJvciBhcyBTeW50YXhFcnJvcikubWVzc2FnZSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFRva2VuID0gKCk6IHN0cmluZyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIGdldFNlc3Npb25TdG9yYWdlKCkudG9rZW47XHJcbiAgfTtcclxuXHJcbiAgLy86IHVzZSB0aGlzIGN1c3RvbSBob29rIHRvIHNldCB0aGUgbG9jYWwgc2Vzc2lvbiBpbnRvIHRoZSBnbG9iYWwgc3RhdGUgZWFjaFxyXG4gIC8vOiB0aW1lIGEgcGFnZSBpcyByZWZyZXNoZWQ7IHVzZSBpdCBvbmx5IG9uIHBhZ2UgY29tcG9uZW50c1xyXG4gIGNvbnN0IHVzZVNlc3Npb24gPSAoKTogdm9pZCA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNzaW9uOiBJU2Vzc2lvbiA9IGdldFNlc3Npb25TdG9yYWdlKCk7XHJcblxyXG4gICAgICBzZXRVc2VyKHNlc3Npb24/LnVzZXIpO1xyXG4gICAgfSwgW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzVXNlckxvZ2dlZEluID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgcmV0dXJuIGdldFNlc3Npb25TdG9yYWdlKCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICB1c2VyLCBsb2dpbiwgbG9nb3V0LCBnZXRUb2tlbiwgaXNVc2VyTG9nZ2VkSW4sIHVzZVNlc3Npb25cclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElQYXltZW50T3JkZXIgZnJvbSBcIkAvbW9kZWxzL0lQYXltZW50T3JkZXJcIjtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb250ZXh0IHdoZW5ldmVyIHlvdSB3YW50IHRvIGFjY2VzcyB0aGUgT3JkZXJQcm92aWRlclxyXG5jb25zdCBPcmRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJDb250ZXh0O1xyXG5cclxuZXhwb3J0IHsgT3JkZXJQcm92aWRlciB9O1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbXBvbmVudCBpbiBhbGwgdGhlIG90aGVyIGNvbXBvbmVudHMgd2hlcmUgeW91IHdhbnQgdG8gYWNjZXNzXHJcbi8vOiB0aGUgZ2xvYmFsIHN0YXRlIG9mIGEgdXNlciBvcmRlclxyXG5mdW5jdGlvbiBPcmRlclByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG5cclxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlPEFycmF5PElQYXltZW50T3JkZXI+PihbXSk7XHJcblxyXG4gIGNvbnN0IGdldE9yZGVyID0gKCk6IEFycmF5PElQYXltZW50T3JkZXI+ID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcicpKSB8fCBbXTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cclxuICAgIHJldHVybiBbXTtcclxuICB9O1xyXG5cclxuICBcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnN0IG8gPSBnZXRPcmRlcigpXHJcbiAgICBzZXRPcmRlcihvKVxyXG4gIH0sW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2F2ZU9yZGVyKG9yZGVyKVxyXG4gIH0sW29yZGVyXSlcclxuXHJcbiAgY29uc3QgY291bnRQcm9kdWN0cyA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgLy9yZXR1cm4gb3JkZXIgPyBvcmRlci52YXJpYW50cy5sZW5ndGggOiAwO1xyXG4gICAgcmV0dXJuIDBcclxuICB9O1xyXG5cclxuICBjb25zdCBzYXZlT3JkZXIgPSAob3JkZXI6IEFycmF5PElQYXltZW50T3JkZXI+KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXInLCBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFByb2R1Y3RUb0JhZyA9ICh2YXJpYW50UXVhbnRpdHk6bnVtYmVyLCBwcm9kdWN0OklQYXltZW50T3JkZXIpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZU9yZGVyID0gWy4uLm9yZGVyXVxyXG4gICAvLzogaWYgdGhlIHByb2R1Y3QgYW5kIHZhcmlhbnQgaXMgYWxyZWFkeSB0aGVyZVxyXG4gICBjb25zdCBpbmRleE9mT3JkZXJJdGVtID0gYWN0aXZlT3JkZXIuZmluZEluZGV4KChvcmRlckl0ZW06IElQYXltZW50T3JkZXIpID0+IG9yZGVySXRlbS52YXJpYW50LmlkID09PSBwcm9kdWN0LnZhcmlhbnQuaWQpO1xyXG4gICBpZiAoaW5kZXhPZk9yZGVySXRlbSAhPT0gLTEpIHtcclxuICAgICAvLzogdXBkYXRlIHF1YW50aXR5XHJcbiAgICAgY29uc3QgY3VycmVudFF1YW50aXR5ID0gYWN0aXZlT3JkZXJbaW5kZXhPZk9yZGVySXRlbV0ucXVhbnRpdHk7XHJcbiAgICAgaWYgKGN1cnJlbnRRdWFudGl0eSArIHZhcmlhbnRRdWFudGl0eSA8PSBwcm9kdWN0LnZhcmlhbnQuc3RvY2spIHtcclxuICAgICAgIGFjdGl2ZU9yZGVyW2luZGV4T2ZPcmRlckl0ZW1dLnF1YW50aXR5ID0gY3VycmVudFF1YW50aXR5ICsgdmFyaWFudFF1YW50aXR5O1xyXG4gICAgIH1cclxuICAgfSBlbHNlIHtcclxuICAgICBhY3RpdmVPcmRlci5wdXNoKHtcclxuICAgICAgIHByb2R1Y3Q6IHByb2R1Y3QucHJvZHVjdCxcclxuICAgICAgIHZhcmlhbnQ6IHByb2R1Y3QudmFyaWFudCxcclxuICAgICAgIHF1YW50aXR5OiB2YXJpYW50UXVhbnRpdHksXHJcbiAgICAgICBvZmZlcnM6IHByb2R1Y3Qub2ZmZXJzXHJcbiAgICAgfSk7XHJcbiAgIH1cclxuICAgIHNldE9yZGVyKGFjdGl2ZU9yZGVyKTtcclxuICAgIC8vc2F2ZU9yZGVyKGFjdGl2ZU9yZGVyKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZVByb2R1Y3QgPSAoaXRlbU51bWJlcikgPT4ge1xyXG4gICAgICBhbGVydChcIkJPUlJBUlwiKVxyXG4gICAgICBjb25zdCBhY3RpdmVPcmRlciA9IFsuLi5vcmRlcl1cclxuICAgICAgYWN0aXZlT3JkZXIuc3BsaWNlKGl0ZW1OdW1iZXIsIDEpXHJcbiAgICAgIHNldE9yZGVyKGFjdGl2ZU9yZGVyKVxyXG4gICAgICAvL3NhdmVPcmRlcihvcmRlcilcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuXHJcbiAgXHJcblxyXG4gIGNvbnN0IGFkZE9yZGVySXRlbSA9IChpdGVtOiBJUGF5bWVudE9yZGVyKSA9PiB7XHJcbiAgfTtcclxuXHJcbiAgLy86IHVzZSB0aGlzIGZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBpdGVtIHRvIHRoZSBvcmRlciBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgY29uc3Qgc2V0T3JkZXJJdGVtSW5MUyA9IChhY3RpdmVPcmRlcjogQXJyYXk8SVBheW1lbnRPcmRlcj4pID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlckl0ZW1zJywgSlNPTi5zdHJpbmdpZnkoYWN0aXZlT3JkZXIpKTtcclxuICB9O1xyXG5cclxuICAvLzogdXNlIHRoaXMgZnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50IG9yZGVyIG9iamVjdCBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBnZXRPcmRlckl0ZW1Gcm9tTFMgPSAoKTogQXJyYXk8SVBheW1lbnRPcmRlcj4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVySXRlbXMnKSkgfHwgW107XHJcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcigoX2Vycm9yIGFzIFN5bnRheEVycm9yKS5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTsqL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE9yZGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBvcmRlciwgY291bnRQcm9kdWN0cywgYWRkUHJvZHVjdFRvQmFnLCByZW1vdmVQcm9kdWN0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L09yZGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCIvKipcclxuICogQ29uZmlndXJhdGlvbiBvZiB0aGUgQXBvbGxvIENsaWVudCB0byBlbmFibGUgdGhlIHVzZSBvZiBHcmFwaFFMLlxyXG4gKi9cclxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBBcG9sbG9DbGllbnQsXHJcbiAgSHR0cExpbmssXHJcbiAgSW5NZW1vcnlDYWNoZSxcclxuICBOb3JtYWxpemVkQ2FjaGVPYmplY3RcclxufSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBBUElfRE9NQUlOIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcblxyXG5sZXQgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PjtcclxuXHJcbmNvbnN0IGNyZWF0ZUFwb2xsb0NsaWVudCA9ICgpOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiA9PiB7XHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcsIC8vIGl0IGlzIHRydWUgd2hlbiBTU1JcclxuICAgIGxpbms6IG5ldyBIdHRwTGluayh7IHVyaTogYCR7QVBJX0RPTUFJTn0vZ3JhcGhxbGAgfSksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCA9IChpbml0aWFsU3RhdGU6IGFueSA9IG51bGwpOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiA9PiB7XHJcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKTtcclxuXHJcbiAgLy86IGluaXRpYWwgc3RhdGUgb2YgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgaXMgaHlkcmF0ZWQgaGVyZVxyXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcclxuICAgIC8vOiBnZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xyXG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpO1xyXG5cclxuICAgIC8vOiByZXN0b3JlIHRoZSBjYWNoZSB1c2luZyB0aGUgZGF0YSBwYXNzZWQgZnJvbSBcImdldFN0YXRpY1Byb3BzXCIgb3JcclxuICAgIC8vOiBcImdldFNlcnZlclNpZGVQcm9wc1wiIGNvbWJpbmVkIHdpdGggdGhlIGV4aXN0aW5nIGNhY2hlIGRhdGFcclxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZSh7IC4uLmV4aXN0aW5nQ2FjaGUsIC4uLmluaXRpYWxTdGF0ZSB9KTtcclxuICB9XHJcblxyXG4gIC8vOiBmb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcclxuXHJcbiAgLy86IGNyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcclxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudDtcclxuXHJcbiAgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XHJcbn07XHJcblxyXG4vLzogdXNlIHRoaXMgY3VzdG9tIGhvb2sgaW4geW91ciBjb21wb25lbnRzIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIG9mIHRoZSBBcG9sbG9cclxuLy86IENsaWVudFxyXG5jb25zdCB1c2VBcG9sbG9DbGllbnQgPSAoaW5pdGlhbFN0YXRlOiBhbnkpOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiA9PiB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gaW5pdGlhbGl6ZUFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUpLFxyXG4gICAgW2luaXRpYWxTdGF0ZV1cclxuICApO1xyXG5cclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgeyBpbml0aWFsaXplQXBvbGxvQ2xpZW50LCB1c2VBcG9sbG9DbGllbnQgfTtcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JpcHRzLCBjc3MgfSA9IGF3YWl0IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIGNvbnN0IFssIHN0eWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgXSBhcyBjb25zdClcblxuICAgICAgICAgIGNvbnN0IGVudHJ5cG9pbnQ6IFJvdXRlRW50cnlwb2ludCA9IGF3YWl0IHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgPih7IHN0eWxlcyB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlKSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55XG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZ2V0RGVwYXJ0bWVudHMgfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtZGVwYXJ0bWVudHMnO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0QnlTbHVnIH0gZnJvbSBcIkAvYWN0aW9ucy9mZXRjaC1wcm9kdWN0c1wiO1xyXG5pbXBvcnQgQWRkVG9CYWdCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2J1dHRvbnMvQWRkVG9CYWdCdXR0b24nO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnQC9jb21wb25lbnRzL2Nhcm91c2Vscy9DYXJvdXNlbCc7XHJcbmltcG9ydCBRdWFudGl0eVNlbGVjdG9yIGZyb20gJ0AvY29tcG9uZW50cy9jb250cm9scy9RdWFudGl0eVNlbGVjdG9yJztcclxuaW1wb3J0IFZhcmlhbnRTZWxlY3RvciBmcm9tICdAL2NvbXBvbmVudHMvY29udHJvbHMvVmFyaWFudFNlbGVjdG9yJztcclxuaW1wb3J0IE9mZmVyc1NlbGVjdG9yIGZyb20gJ0AvY29tcG9uZW50cy9jb250cm9scy9PZmZlcnNTZWxlY3Rvcic7XHJcbmltcG9ydCBOYXZpZ2F0aW9uYmFyIGZyb20gJ0AvY29tcG9uZW50cy9uYXZiYXJzL05hdmlnYXRpb25iYXInO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnQC9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCB9IGZyb20gXCJAL2xpYi9hcG9sbG8tY2xpZW50XCI7XHJcbmltcG9ydCBJVmFyaWFudCBmcm9tICdAL21vZGVscy9JVmFyaWFudCc7XHJcbmltcG9ydCBJT2ZmZXIgZnJvbSAnQC9tb2RlbHMvSU9mZmVyJztcclxuaW1wb3J0IGZvcm1hdFByaWNlIGZyb20gJ0AvdXRpbHMvZm9ybWF0LXByaWNlJztcclxuaW1wb3J0IE9tbmliYXIgZnJvbSAnQC9jb21wb25lbnRzL25hdmJhcnMvT21uaWJhcic7XHJcblxyXG5jb25zdCBjbGFzc2VzID0ge1xyXG4gIGNvbnRhaW5lcjogYFxyXG4gICAgaC1zY3JlZW5cclxuICAgIG1heC13LXNjcmVlblxyXG4gICAgcmVsYXRpdmVcclxuICBgLFxyXG5cclxuICBjYXJvdXNlbDogYFxyXG4gICAgYmctYmFzZVxyXG4gICAgaC00LzZcclxuICAgIG1kOmFic29sdXRlXHJcbiAgICBtZDpoLWZ1bGxcclxuICAgIG1kOnJpZ2h0LTEyXHJcbiAgICBtZDpyb3VuZGVkLWxnXHJcbiAgICBtZDp3LTEvMlxyXG4gICAgb3ZlcmZsb3ctaGlkZGVuXHJcbiAgYCxcclxuXHJcbiAgZGV0YWlsczogYFxyXG4gICAgaC0xMS8xMlxyXG4gICAgb3ZlcmZsb3cteS1zY3JvbGxcclxuICAgIHBiLTIwXHJcbiAgICB3LWZ1bGxcclxuICBgLFxyXG5cclxuICBpbmZvcm1hdGlvbjoge1xyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIGJnLWJzZVxyXG4gICAgICBtdC02XHJcbiAgICAgIG1kOnctMi81XHJcbiAgICAgIG1kOmFic29sdXRlXHJcbiAgICAgIG1kOm0tMTJcclxuICAgICAgbWQ6cC0xMlxyXG4gICAgICBtZDpiZy1iYXNlXHJcbiAgICAgIG1kOnNoYWRvd1xyXG4gICAgICBtZDpyb3VuZGVkLTJ4bFxyXG4gICAgICBtZDp6LTEwXHJcbiAgICAgIG1kOm92ZXJmbG93LXktc2Nyb2xsXHJcbiAgICAgIHAtN1xyXG4gICAgICByb3VuZGVkLXQtM3hsXHJcbiAgICAgIG1heC13LWZ1bGxcclxuICAgIGAsXHJcbiAgICBzZWN0aW9uOiBgXHJcbiAgICAgIG1iLTdcclxuICAgICAgdy1mdWxsXHJcbiAgICBgLFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgIHRpdGxlOiBgXHJcbiAgICAgICAgZm9udC1ib2xkXHJcbiAgICAgICAgZm9udC1kaXNwbGF5XHJcbiAgICAgICAgbWItMlxyXG4gICAgICAgIHRleHQtMnhsXHJcbiAgICAgIGBcclxuICAgIH0sXHJcbiAgICB0aXRsZTogYFxyXG4gICAgICBmb250LWJvbGRcclxuICAgICAgbWItMlxyXG4gICAgYFxyXG4gIH0sXHJcblxyXG4gIGFkZEJ1dHRvbjogYFxyXG4gICAgZmxleFxyXG4gICAgZmxleC1yb3dcclxuICAgIGp1c3RpZnktZW5kXHJcbiAgICBtdC0xMlxyXG4gIGBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3REZXRhaWxzUGFnZSh7IGRlcGFydG1lbnRzLCBwcm9kdWN0LCByZWZlcmVyIH0pIHtcclxuICBjb25zdCB7IHVzZVNlc3Npb24gfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFZhcmlhbnQsIHNldFNlbGVjdGVkVmFyaWFudF0gPSB1c2VTdGF0ZTxJVmFyaWFudD4obnVsbCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkT2ZmZXJzLCBzZXRTZWxlY3RlZE9mZmVyc10gPSB1c2VTdGF0ZTxJT2ZmZXJbXT4oW10pO1xyXG4gIGNvbnN0IFt2aWV3cG9ydFdpZHRoLCBzZXRWaWV3cG9ydFdpZHRoXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4gIHVzZVNlc3Npb24oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFZpZXdwb3J0V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb2R1Y3QubWV0YV90aXRsZSAmJlxyXG4gICAgICAgICAgPHRpdGxlPkN1YXRsIC0ge3Byb2R1Y3QubWV0YV90aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm9kdWN0Lm1ldGFfZGVzY3JpcHRpb24gJiZcclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb2R1Y3QubWV0YV9kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICB9XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIHtcclxuICAgICAgICB2aWV3cG9ydFdpZHRoIDwgNzY4ICYmXHJcbiAgICAgICAgPE5hdmlnYXRpb25iYXIgcmVmZXJlcj17cmVmZXJlcn0gLz5cclxuICAgICAgfVxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHZpZXdwb3J0V2lkdGggPj0gNzY4ICYmXHJcbiAgICAgICAgPE9tbmliYXIgbWVudUVudHJpZXM9e2RlcGFydG1lbnRzfSAvPlxyXG4gICAgICB9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJvdXNlbH0+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwgbWVkaWE9e3Byb2R1Y3QubWVkaWF9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9ybWF0aW9uLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvcm1hdGlvbi5zZWN0aW9ufT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9ybWF0aW9uLmhlYWRlci50aXRsZX0+e3Byb2R1Y3QubmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTZcIj57Zm9ybWF0UHJpY2UoJ01YTicsIHByb2R1Y3QucHJpY2UpfTwvcD5cclxuICAgICAgICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvcm1hdGlvbi5zZWN0aW9ufT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb3JtYXRpb24udGl0bGV9PlZhcmlhbnRlPC9wPlxyXG4gICAgICAgICAgICAgIDxWYXJpYW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIHN0YXRlPXtbc2VsZWN0ZWRWYXJpYW50LCBzZXRTZWxlY3RlZFZhcmlhbnRdfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3Byb2R1Y3QudmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9kdWN0Lm9mZmVycy5sZW5ndGggIT09IDAgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb3JtYXRpb24uc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9ybWF0aW9uLnRpdGxlfT5PZmVydGFzPC9wPlxyXG4gICAgICAgICAgICAgIDxPZmZlcnNTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgb2ZmZXJzPXtwcm9kdWN0Lm9mZmVyc31cclxuICAgICAgICAgICAgICAgIHN0YXRlPXtbc2VsZWN0ZWRPZmZlcnMsIHNldFNlbGVjdGVkT2ZmZXJzXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVmFyaWFudCAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvcm1hdGlvbi5zZWN0aW9ufT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb3JtYXRpb24udGl0bGV9PkNhbnRpZGFkPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxRdWFudGl0eVNlbGVjdG9yIHN0b2NrPXtzZWxlY3RlZFZhcmlhbnQuc3RvY2t9IC8+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwibWwtNCB0ZXh0LXNtIHRleHQtbmV1dHJhbFwiPlxyXG4gICAgICAgICAgICAgICAgICDCoXtzZWxlY3RlZFZhcmlhbnQuc3RvY2t9IGRpc3BvbmlibGVzIVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAocHJvZHVjdCAmJiBzZWxlY3RlZFZhcmlhbnQpICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZEJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgPEFkZFRvQmFnQnV0dG9uIG9yZGVyPXt7XHJcbiAgICAgICAgICAgICAgICBvZmZlcnM6IHNlbGVjdGVkT2ZmZXJzLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IHNlbGVjdGVkVmFyaWFudFxyXG4gICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2ID5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcywgcmVxIH0pID0+IHtcclxuICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvQ2xpZW50KCk7XHJcbiAgY29uc3QgZGVwYXJ0bWVudHMgPSBhd2FpdCBnZXREZXBhcnRtZW50cyhhcG9sbG9DbGllbnQpO1xyXG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBnZXRQcm9kdWN0QnlTbHVnKGFwb2xsb0NsaWVudCwgcGFyYW1zLnNsdWcpO1xyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBkZXBhcnRtZW50cywgcHJvZHVjdCwgcmVmZXJlcjogcmVxLmhlYWRlcnMucmVmZXJlciB8fCAnLycgfSB9XHJcbn07XHJcbiIsImNvbnN0IGlzVG91Y2hFbmFibGVkID0gKCkgPT4ge1xyXG4gIHJldHVybiAoJ3RvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXNUb3VjaEVuYWJsZWQ7XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZm9ybWF0IHByaWNlcyB0byBtYWtlIHRoZW0gbG9vayBsaWtlOlxyXG4gKiBVUyAzMDAuOTAsIE1YIDE1ODkuOTAgb3IgR0IgMTIuMDBcclxuICpcclxuICogQ3VycmVuY3kgY29kZXMgKElTTyA0MjE3IGN1cnJlbmN5IGNvZGVzKSBhcmUgcGFzc2VkIGFzIGFyZ3VtZW50cyBkZXBlbmRpbmcgb25cclxuICogaTE4biBnbG9iYWwgY29udGV4dC5cclxuICovXHJcbmNvbnN0IGZvcm1hdFByaWNlOiAoY3VycmVuY3lDb2RlOiBzdHJpbmcsIHByaWNlOiBudW1iZXIgfCBzdHJpbmcpID0+IHN0cmluZyA9IChjdXJyZW5jeUNvZGUsIHByaWNlKSA9PiB7XHJcbiAgLy86IGZvcmNlIHR3byBkZWNpbWFsc1xyXG4gIGNvbnN0IHByaWNlV2l0aERlY2ltYWxzID0gcGFyc2VGbG9hdChTdHJpbmcocHJpY2UpKS50b0ZpeGVkKDIpO1xyXG5cclxuICByZXR1cm4gYCR7Y3VycmVuY3lDb2RlLnRvVXBwZXJDYXNlKCl9ICR7cHJpY2VXaXRoRGVjaW1hbHN9YDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFByaWNlO1xyXG4iLCIvKipcclxuICogVGhpcyB1dGlsaXR5IGZ1bmN0aW9uIHJldHVybnMgYSBtZWRpYSBVUkwgYmFzZWQgb24gb25lIG9mIHRocmVlIGNhc2VzOlxyXG4gKlxyXG4gKiAgMS4gVGhlcmUncyBubyBtZWRpYSBzb3VyY2UgdG8gcmV0dXJuICh3aGVuIG5vIG1lZGlhIGlzIGFkZGVkKS5cclxuICogIDIuIFRoZSBtZWRpYSBpcyBzZXJ2ZWQgZnJvbSB0aGUgc2FtZSBzZXJ2ZXIgdGhhdCBydW5zIHRoZSBhcHAgKGxvY2FsKS5cclxuICogIDMuIFRoZSBtZWRpYSBpcyBzZXJ2ZWQgYnkgYW4gdXBsb2FkIHByb3ZpZGVyIChyZW1vdGUgc2VydmVyKS5cclxuICovXHJcbmltcG9ydCB7IEFQSV9ET01BSU4gfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuaW1wb3J0IG1lZGlhTm90Rm91bmRJbWFnZSBmcm9tIFwiQC9hc3NldHMvaW1hZ2VzL21lZGlhX25vdF9mb3VuZC5zdmdcIjtcclxuXHJcbmludGVyZmFjZSBNZWRpYSB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TWVkaWFTb3VyY2U6IChtZWRpYTogTWVkaWEpID0+IHN0cmluZyA9IChtZWRpYSkgPT4ge1xyXG4gIC8vOiBDYXNlIDEuXHJcbiAgaWYgKCFtZWRpYSkge1xyXG4gICAgcmV0dXJuIG1lZGlhTm90Rm91bmRJbWFnZTtcclxuICB9XHJcblxyXG4gIC8vOiBDYXNlIDIuXHJcbiAgaWYgKG1lZGlhLnVybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xyXG4gICAgcmV0dXJuIEFQSV9ET01BSU4gKyBtZWRpYS51cmw7XHJcbiAgfVxyXG5cclxuICAvLzogQ2FzZSAzLlxyXG4gIHJldHVybiBtZWRpYS51cmw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNZWRpYVNvdXJjZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmVhdGhlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==