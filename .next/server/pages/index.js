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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
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

/***/ "./assets/images/facebook_circle.png":
/*!*******************************************!*\
  !*** ./assets/images/facebook_circle.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

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

/***/ "./assets/images/instagram_square.png":
/*!********************************************!*\
  !*** ./assets/images/instagram_square.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

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

/***/ "./components/buttons/LoadMoreButton.tsx":
/*!***********************************************!*\
  !*** ./components/buttons/LoadMoreButton.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadMoreButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\buttons\\LoadMoreButton.tsx";



LoadMoreButton.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fetcher: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
LoadMoreButton.defaultProps = {
  disabled: false,
  fether: () => {}
};
const classes = {
  default: `
    cursor-pointer
    flex
    flex-nowrap
    flex-row
    font-bold
    items-center
    justify-center
    p-3
    rounded-lg
  `,
  disabled: `
    bg-inactive
    shadow-inner
    text-secondary
  `,
  enabled: `
    bg-accent
    lg:hover:bg-inactive
    lg:hover:text-primary
    text-bse
    shadow
  `
};
function LoadMoreButton({
  disabled,
  fetcher
}) {
  const refreshIcon = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  const loadMore = event => {
    event.preventDefault();

    if (!disabled) {
      refreshIcon.current.classList.toggle('animate-rotateCenter'); //: create an small effect of delay before loading more products

      setTimeout(() => {
        fetcher();
        refreshIcon.current.classList.toggle('animate-rotateCenter');
      }, 1500);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    onClick: event => loadMore(event),
    className: `${classes.default} ${disabled ? classes.disabled : classes.enabled}`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      ref: refreshIcon,
      className: "mr-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["RefreshCw"], {
        size: "18"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 48
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), disabled ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "No hay m\xE1s productos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "M\xE1s productos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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

/***/ "./components/cards/ProductCard.tsx":
/*!******************************************!*\
  !*** ./components/cards/ProductCard.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_detect_touch_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/detect-touch-device */ "./utils/detect-touch-device.ts");
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/format-price */ "./utils/format-price.ts");
/* harmony import */ var _utils_get_media_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/get-media-source */ "./utils/get-media-source.ts");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\cards\\ProductCard.tsx";





ProductCard.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
ProductCard.defaultProps = {
  product: null
};
const classes = {
  container: `
    h-40
    md:h-72
    overflow-hidden
    relative
    lg:h-96
    lg:rounded-xl
    rounded-lg
    shadow
  `,
  image: `
    min-h-full
    min-w-full
    object-cover
  `,
  offer: {
    container: `
      absolute
      bg-accent
      bg-opacity-90
      h-1/4
      right-0
      top-0
      w-full
      z-10
    `,
    label: `
      absolute
      font-bold
      md:right-1
      md:text-base
      md:text-bse
      md:top-3
      md:rotate-35
      lg:right-2
      lg:text-lg
      lg:top-4
      right-0
      rotate-33
      top-2
      text-bse
      text-xs
      transform
    `
  },
  product: {
    container: `
      absolute
      bottom-0
      font-bold
      font-display
      md:p-3
      md:text-lg
      lg:py-4
      lg:px-6
      lg:text-2xl
      px-2
      py-1
      text-bse
      z-10
    `
  }
};
const styles = {
  offer: {
    clipPath: 'polygon(54% 0, 100% 100%, 100% 0)'
  }
};
function ProductCard({
  product
}) {
  const {
    0: isHover,
    1: setIsHover
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const animateOnHover = event => {
    if (Object(_utils_detect_touch_device__WEBPACK_IMPORTED_MODULE_3__["default"])()) {
      event.currentTarget.classList.toggle('animate-scaleUpCenter');
      event.currentTarget.classList.toggle('animate-scaleDownCenter');
      setIsHover(!isHover);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.container,
    onMouseEnter: animateOnHover,
    onMouseLeave: animateOnHover,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: Object(_utils_get_media_source__WEBPACK_IMPORTED_MODULE_5__["default"])(product.cover),
      alt: product.cover.alternativeText,
      className: classes.image
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, this), product.offers.length !== 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.offer.container,
      style: styles.offer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: classes.offer.label,
        children: "\xA1Oferta!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.product.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: Object(_utils_format_price__WEBPACK_IMPORTED_MODULE_4__["default"])('MXN', product.price)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
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

/***/ "./components/footers/Footer.tsx":
/*!***************************************!*\
  !*** ./components/footers/Footer.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/logo.svg */ "./assets/images/logo.svg");
/* harmony import */ var _assets_images_facebook_circle_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/facebook_circle.png */ "./assets/images/facebook_circle.png");
/* harmony import */ var _assets_images_instagram_square_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/instagram_square.png */ "./assets/images/instagram_square.png");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\footers\\Footer.tsx";



const classes = {
  container: `
    hidden
    md:bg-bse
    md:block
    md:bottom-0
    md:p-12
    md:shadow
    md:w-full
  `,
  image: `
    max-h-full
    max-w-full
  `,
  social: {
    container: `
      flex
      flex-row
      items-center
      justify-between
      w-full
    `,
    logo: `
      h-12
    `,
    links: {
      container: `
        flex
        flex-row
        h-full
        items-center
      `,
      item: `
        animate-heartbeat
        h-9
        ml-3
      `
    }
  },
  legals: {
    container: `
      border-secondary
      border-t-2
      flex
      flex-row
      items-center
      justify-between
      mt-5
      pt-3
      w-full
    `,
    copyrights: `
      font-bold
      text-secondary
      text-xs
      uppercase
    `,
    links: {
      container: `
        flex
        flex-row
      `,
      anchor: `
        flex
        flex-row
        items-center
        ml-4
        text-secondary
        underline
      `,
      label: `
        font-bold
        mr-1
        text-xs
        uppercase
      `
    }
  }
};
function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: classes.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.social.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.social.logo,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
          alt: "Logo",
          className: classes.image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.social.links.container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "S\xEDguenos en redes sociales:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.facebook.com/home.php?ref=wizard",
          className: classes.social.links.item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _assets_images_facebook_circle_png__WEBPACK_IMPORTED_MODULE_2__["default"],
            alt: "Facebook",
            className: classes.image
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.instagram.com/invites/contact/?i=1j4cwlrxxpy1o&utm_content=kkrt0xk",
          className: classes.social.links.item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _assets_images_instagram_square_png__WEBPACK_IMPORTED_MODULE_3__["default"],
            alt: "Instagram",
            className: classes.image
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.legals.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
        className: classes.legals.copyrights,
        children: "\xA9 2020 por Cuatl. Todos los derechos reservados."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.legals.links.container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "",
          className: classes.legals.links.anchor,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            className: classes.legals.links.label,
            children: "Acerca de nosotros"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "",
          className: classes.legals.links.anchor,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            className: classes.legals.links.label,
            children: "Pol\xEDtica de privacidad"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, this);
}
;

/***/ }),

/***/ "./components/galleries/ProductsGallery.tsx":
/*!**************************************************!*\
  !*** ./components/galleries/ProductsGallery.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductsGallery; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cards_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/cards/ProductCard */ "./components/cards/ProductCard.tsx");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\galleries\\ProductsGallery.tsx";



ProductsGallery.propTypes = {
  products: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
};
ProductsGallery.defaultProps = {
  products: []
};
const classes = {
  container: `
    gap-7
    grid
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
  `
};
function ProductsGallery({
  products
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.container,
    children: products.map(product => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/products/${product.slug}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cards_ProductCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          product: product
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, this)
    }, product.id, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
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

/***/ "./components/navbars/Tabbar.tsx":
/*!***************************************!*\
  !*** ./components/navbars/Tabbar.tsx ***!
  \***************************************/
/*! exports provided: TAB_PAGES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_PAGES", function() { return TAB_PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tabbar; });
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
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/context/OrderContext */ "./context/OrderContext.tsx");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\navbars\\Tabbar.tsx";






Tabbar.propTypes = {
  page: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
Tabbar.defaultProps = {
  page: 'home'
};
const classes = {
  container: `
    fixed
    bg-bse
    bottom-0
    flex
    flex-nowrap
    flex-row
    md:hidden
    overflow-hidden
    rounded-t-2xl
    shadow
    w-full
    z-50
  `,
  tabItem: {
    container: `
      flex
      flex-1
      flex-col
      flex-nowrap
      font-bold
      h-16
      items-center
      justify-center
      relative
      transition-all
    `
  },
  bag: {
    itemsCounter: `
      absolute
      border-2
      border-bse
      flex
      flex-nowrap
      flex-row
      font-bold
      h-5
      items-center
      justify-center
      right-6
      rounded-full
      text-bse
      w-5
    `
  }
};
const styles = {
  bag: {
    itemsCounter: {
      fontSize: '0.75rem'
    }
  }
};
let TAB_PAGES;

(function (TAB_PAGES) {
  TAB_PAGES["HOME"] = "home";
  TAB_PAGES["BAG"] = "bag";
  TAB_PAGES["USER"] = "user";
  TAB_PAGES["HELP"] = "help";
})(TAB_PAGES || (TAB_PAGES = {}));

;
function Tabbar({
  page
}) {
  const {
    user
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const {
    countProducts
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const {
    0: activeItem,
    1: setActiveItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(page);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: classes.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: () => setActiveItem(TAB_PAGES.HOME),
        className: classes.tabItem.container + (activeItem === TAB_PAGES.HOME ? 'text-accent' : 'text-secondary'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_4__["Home"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: activeItem === TAB_PAGES.HOME ? '' : 'hidden',
          children: "Inicio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: user ? '/order' : '/auth',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: () => setActiveItem(TAB_PAGES.BAG),
        className: classes.tabItem.container + (activeItem === TAB_PAGES.BAG ? 'text-accent' : 'text-secondary'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.bag.itemsCounter + (activeItem === TAB_PAGES.BAG ? 'bg-accent top-1' : 'bg-secondary top-3'),
          style: styles.bag.itemsCounter,
          children: countProducts()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_4__["ShoppingBag"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: activeItem === TAB_PAGES.BAG ? '' : 'hidden',
          children: "Bolsa"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: user ? '/user/profile' : '/auth',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: () => setActiveItem(TAB_PAGES.USER),
        className: classes.tabItem.container + (activeItem === TAB_PAGES.USER ? 'text-accent' : 'text-secondary'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_4__["User"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: activeItem === TAB_PAGES.USER ? '' : 'hidden',
          children: "Yo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/help",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: () => setActiveItem(TAB_PAGES.HELP),
        className: classes.tabItem.container + (activeItem === TAB_PAGES.HELP ? 'text-accent' : 'text-secondary'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_4__["MessageCircle"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: activeItem === TAB_PAGES.HELP ? '' : 'hidden',
          children: "Ayuda"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head.js */ "next/head.js");
/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/index */ "react/index");
/* harmony import */ var react_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_fetch_departments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/actions/fetch-departments */ "./actions/fetch-departments.ts");
/* harmony import */ var _actions_fetch_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/actions/fetch-products */ "./actions/fetch-products.ts");
/* harmony import */ var _components_buttons_LoadMoreButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/buttons/LoadMoreButton */ "./components/buttons/LoadMoreButton.tsx");
/* harmony import */ var _components_galleries_ProductsGallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/galleries/ProductsGallery */ "./components/galleries/ProductsGallery.tsx");
/* harmony import */ var _components_footers_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/footers/Footer */ "./components/footers/Footer.tsx");
/* harmony import */ var _components_navbars_Omnibar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/navbars/Omnibar */ "./components/navbars/Omnibar.tsx");
/* harmony import */ var _components_navbars_Tabbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/navbars/Tabbar */ "./components/navbars/Tabbar.tsx");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/lib/apollo-client */ "./lib/apollo-client.ts");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\pages\\index.tsx";












const classes = {
  container: `
    h-screen
    max-w-screen
  `,
  gallery: {
    container: `
      h-3/4
      md:h-auto
      md:overflow-visible
      overflow-y-auto
      px-7
      py-12
      top-0
      w-full
    `,
    loadButton: `
      flex
      flex-nowrap
      flex-row
      justify-center
      mb-20
      md:my-12
      mt-12
    `
  }
};
function HomePage({
  initialProducts,
  departments
}) {
  const {
    login,
    useSession
  } = Object(react_index__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_11__["default"]);
  const apolloClient = Object(_lib_apollo_client__WEBPACK_IMPORTED_MODULE_12__["useApolloClient"])(initialProducts);
  const [page, setPage] = Object(react_index__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    index: 0,
    data: initialProducts,
    previousData: initialProducts
  });

  const getNewPage = async () => {
    const newPage = await Object(_actions_fetch_products__WEBPACK_IMPORTED_MODULE_4__["getProductsPage"])(apolloClient, {
      start: page.data.length,
      limit: _config_globals__WEBPACK_IMPORTED_MODULE_10__["PAGE_LIMIT"]
    });
    setPage({
      index: page.index + 1,
      data: page.data.concat(newPage),
      previousData: newPage
    });
  };

  useSession();
  Object(react_index__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const loginUser = async () => {
      //: login user if the session token is in the route query
      if (location.search) await login(location.search);
    };

    loginUser();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Cuatl - La mejor moda artesanal de M\xE9xico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Encuentra los mejores productos artesanales de M\xE9xico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbars_Omnibar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      menuEntries: departments
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.gallery.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_galleries_ProductsGallery__WEBPACK_IMPORTED_MODULE_6__["default"], {
        products: page.data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.gallery.loadButton,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttons_LoadMoreButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          disabled: !page.previousData.length,
          fetcher: getNewPage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbars_Tabbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      page: _components_navbars_Tabbar__WEBPACK_IMPORTED_MODULE_9__["TAB_PAGES"].HOME
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footers_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, this);
}
;
const getServerSideProps = async () => {
  const apolloClient = Object(_lib_apollo_client__WEBPACK_IMPORTED_MODULE_12__["initializeApolloClient"])();
  const initialProducts = await Object(_actions_fetch_products__WEBPACK_IMPORTED_MODULE_4__["getProductsPage"])(apolloClient, {
    start: 0,
    limit: _config_globals__WEBPACK_IMPORTED_MODULE_10__["PAGE_LIMIT"]
  });
  const departments = await Object(_actions_fetch_departments__WEBPACK_IMPORTED_MODULE_3__["getDepartments"])(apolloClient);
  return {
    props: {
      initialProducts,
      departments
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

/***/ "next/head.js":
/*!*******************************!*\
  !*** external "next/head.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head.js");

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

/***/ "react/index":
/*!******************************!*\
  !*** external "react/index" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2ZldGNoLWRlcGFydG1lbnRzLnRzIiwid2VicGFjazovLy8uL2FjdGlvbnMvZmV0Y2gtcHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9mZXRjaC1zZXNzaW9ucy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2ZhY2Vib29rX2NpcmNsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9mcmFtZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9pbnN0YWdyYW1fc3F1YXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvbWVkaWFfbm90X2ZvdW5kLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F2YXRhcnMvQ2lyY2xlQXZhdGFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvTG9hZE1vcmVCdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9PdXRsaW5lQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmRzL1Byb2R1Y3RDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3ducy9Ecm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXJzL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYWxsZXJpZXMvUHJvZHVjdHNHYWxsZXJ5LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnVzL0NhdGVnb3JpZXNNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnVzL0RlcGFydG1lbnRzTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXJzL09tbmliYXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFycy9UYWJiYXIudHN4Iiwid2VicGFjazovLy8uL2NvbmZpZy9nbG9iYWxzLnRzIiwid2VicGFjazovLy8uL2NvbnRleHQvQXV0aENvbnRleHQudHN4Iiwid2VicGFjazovLy8uL2NvbnRleHQvT3JkZXJDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9saWIvYXBvbGxvLWNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2RldGVjdC10b3VjaC1kZXZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybWF0LXByaWNlLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2dldC1tZWRpYS1zb3VyY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWZlYXRoZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2luZGV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiZ2V0RGVwYXJ0bWVudHMiLCJhcG9sbG9DbGllbnQiLCJlcnJvciIsImRhdGEiLCJxdWVyeSIsImdxbCIsImRlcGFydG1lbnRzIiwiZ2V0UHJvZHVjdHNQYWdlIiwiZmlsdGVyIiwiZm9ybWF0RmlsdGVycyIsImZvcm1hdHRlZEZpbHRlcnMiLCJkZXBhcnRtZW50IiwiY2F0ZWdvcnkiLCJzdWJjYXRlZ29yeSIsInN0YXJ0IiwibGltaXQiLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJnZXRQcm9kdWN0QnlTbHVnIiwic2x1ZyIsImdldFNlc3Npb24iLCJ0b2tlbiIsInVybCIsImluY2x1ZGVzIiwiQVVUSF9HT09HTEVfQ0FMTEJBQ0siLCJBVVRIX0ZBQ0VCT09LX0NBTExCQUNLIiwicmVzcG9uc2UiLCJmZXRjaCIsInNlc3Npb25EYXRhIiwianNvbiIsImp3dCIsInVzZXIiLCJpZCIsInVzZXJuYW1lIiwiZW1haWwiLCJhdmF0YXIiLCJmb3JtYXRzIiwidGh1bWJuYWlsIiwiQ2lyY2xlQXZhdGFyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwic2l6ZSIsInN0cmluZyIsImRlZmF1bHRQcm9wcyIsInN0eWxlcyIsInRhaWx3aW5kIiwiZnJhbWUiLCJjb250YWluZXIiLCJnZW5lcmljIiwiaW1hZ2UiLCJub0F2YXRhciIsImdldENvbnRhaW5lclN0eWxlIiwiZ2V0Tm9BdmF0YXJTdHlsZSIsImdldE1lZGlhU291cmNlIiwiTG9hZE1vcmVCdXR0b24iLCJkaXNhYmxlZCIsImJvb2wiLCJmZXRjaGVyIiwiZnVuYyIsImZldGhlciIsImNsYXNzZXMiLCJkZWZhdWx0IiwiZW5hYmxlZCIsInJlZnJlc2hJY29uIiwidXNlUmVmIiwibG9hZE1vcmUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNldFRpbWVvdXQiLCJPdXRsaW5lQnV0dG9uIiwibGFiZWwiLCJQcm9kdWN0Q2FyZCIsIm9mZmVyIiwiY2xpcFBhdGgiLCJpc0hvdmVyIiwic2V0SXNIb3ZlciIsInVzZVN0YXRlIiwiYW5pbWF0ZU9uSG92ZXIiLCJpc1RvdWNoRW5hYmxlZCIsImN1cnJlbnRUYXJnZXQiLCJjb3ZlciIsImFsdGVybmF0aXZlVGV4dCIsIm9mZmVycyIsImxlbmd0aCIsIm5hbWUiLCJmb3JtYXRQcmljZSIsInByaWNlIiwiRHJvcGRvd24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJhcnJvd0ljb24iLCJhbmltYXRlIiwic29jaWFsIiwibG9nbyIsImxpbmtzIiwiaXRlbSIsImxlZ2FscyIsImNvcHlyaWdodHMiLCJhbmNob3IiLCJGb290ZXIiLCJjdWF0bExvZ28iLCJmYWNlYm9va0xvZ28iLCJpbnN0YWdyYW1Mb2dvIiwiUHJvZHVjdHNHYWxsZXJ5IiwiYXJyYXlPZiIsIm1hcCIsIkNhdGVnb3JpZXNNZW51Iiwic3ViY2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJEZXBhcnRtZW50c01lbnUiLCJkZXBhcnRtZW50c01lbnUiLCJjYXRlZ29yaWVzTWVudSIsInRpdGxlIiwic2V0RGVwYXJ0bWVudCIsInNob3dDYXRlZ29yaWVzIiwiZXZ0IiwiT21uaWJhciIsIm1lbnVFbnRyaWVzIiwiYXJyYXkiLCJjYXJ2aW5nIiwibWVudSIsImxpbmtHcm91cCIsImJhZyIsIml0ZW1zQ291bnRlciIsIm5hdmJhciIsImJhY2tncm91bmRJbWFnZSIsImNhcnZpbmdJbWFnZSIsImZvbnRTaXplIiwibWVudUNvbnRhaW5lciIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsIm9yZGVyIiwiT3JkZXJDb250ZXh0IiwiaXNNZW51VmlzaWJsZSIsInNldElzTWVudVZpc2libGUiLCJsb2dvSW1hZ2UiLCJUYWJiYXIiLCJwYWdlIiwidGFiSXRlbSIsIlRBQl9QQUdFUyIsImNvdW50UHJvZHVjdHMiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsIkhPTUUiLCJCQUciLCJVU0VSIiwiSEVMUCIsIkFQSV9ET01BSU4iLCJwcm9jZXNzIiwiUEFHRV9MSU1JVCIsIkFVVEhfRkFDRUJPT0tfVVJMIiwiQVVUSF9HT09HTEVfVVJMIiwiU1RSSVBFX1BVQkxJU0hFRF9LRVkiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwic2V0VXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsImxvZ2luIiwic2Vzc2lvbiIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwicHVzaCIsImdldFNlc3Npb25TdG9yYWdlIiwicGFyc2UiLCJnZXRJdGVtIiwiX2Vycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJnZXRUb2tlbiIsInVzZVNlc3Npb24iLCJ1c2VFZmZlY3QiLCJpc1VzZXJMb2dnZWRJbiIsIk9yZGVyUHJvdmlkZXIiLCJzZXRPcmRlciIsImdldE9yZGVyIiwibG9jYWxTdG9yYWdlIiwibyIsInNhdmVPcmRlciIsImFkZFByb2R1Y3RUb0JhZyIsInZhcmlhbnRRdWFudGl0eSIsImFjdGl2ZU9yZGVyIiwiaW5kZXhPZk9yZGVySXRlbSIsImZpbmRJbmRleCIsIm9yZGVySXRlbSIsInZhcmlhbnQiLCJjdXJyZW50UXVhbnRpdHkiLCJxdWFudGl0eSIsInN0b2NrIiwicmVtb3ZlUHJvZHVjdCIsIml0ZW1OdW1iZXIiLCJhbGVydCIsInNwbGljZSIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJpbml0aWFsaXplQXBvbGxvQ2xpZW50IiwiaW5pdGlhbFN0YXRlIiwiX2Fwb2xsb0NsaWVudCIsImV4aXN0aW5nQ2FjaGUiLCJleHRyYWN0IiwicmVzdG9yZSIsInVzZUFwb2xsb0NsaWVudCIsInN0b3JlIiwidXNlTWVtbyIsInByZWZldGNoZWQiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiRGF0ZSIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwidmFsdWUiLCJkb2N1bWVudCIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsIngiLCJ5IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJnYWxsZXJ5IiwibG9hZEJ1dHRvbiIsIkhvbWVQYWdlIiwiaW5pdGlhbFByb2R1Y3RzIiwic2V0UGFnZSIsImluZGV4IiwicHJldmlvdXNEYXRhIiwiZ2V0TmV3UGFnZSIsIm5ld1BhZ2UiLCJjb25jYXQiLCJsb2dpblVzZXIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJtYXhUb3VjaFBvaW50cyIsImN1cnJlbmN5Q29kZSIsInByaWNlV2l0aERlY2ltYWxzIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJ0b1VwcGVyQ2FzZSIsIm1lZGlhIiwibWVkaWFOb3RGb3VuZEltYWdlIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlD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QS9CLEVBQWtDO0FBQ2hDLFdBQU9uYiwwREFBVSxHQUFHaWIsS0FBSyxDQUFDbGpCLEdBQTFCO0FBQ0QsR0FUeUQsQ0FXMUQ7OztBQUNBLFNBQU9rakIsS0FBSyxDQUFDbGpCLEdBQWI7QUFDRCxDQWJEOztBQWVlZ0MsNkVBQWYsRTs7Ozs7Ozs7Ozs7QUM5QkEsMkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIGdxbCwgTm9ybWFsaXplZENhY2hlT2JqZWN0IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuaW1wb3J0IElEZXBhcnRtZW50IGZyb20gJ0AvbW9kZWxzL0lEZXBhcnRtZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREZXBhcnRtZW50cyA9IGFzeW5jIChcclxuICBhcG9sbG9DbGllbnQ6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+XHJcbik6IFByb21pc2U8SURlcGFydG1lbnRbXT4gPT4ge1xyXG4gIGNvbnN0IHsgZXJyb3IsIGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICBxdWVyeTogZ3FsYFxyXG4gICAgICBxdWVyeSBnZXREZXBhcnRtZW50cyB7XHJcbiAgICAgICAgZGVwYXJ0bWVudHMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHNsdWdcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgc3ViY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBlcnJvciA/PyBkYXRhLmRlcGFydG1lbnRzO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIGdxbCwgTm9ybWFsaXplZENhY2hlT2JqZWN0IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuaW1wb3J0IElQcm9kdWN0IGZyb20gJ0AvbW9kZWxzL0lQcm9kdWN0JztcclxuXHJcbmludGVyZmFjZSBJUGFnZUZpbHRlciB7XHJcbiAgc3RhcnQ6IG51bWJlcjtcclxuICBsaW1pdDogbnVtYmVyO1xyXG4gIHF1ZXJ5PzogYW55XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNQYWdlID0gYXN5bmMgKFxyXG4gIGFwb2xsb0NsaWVudDogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD4sXHJcbiAgZmlsdGVyOiBJUGFnZUZpbHRlclxyXG4pOiBQcm9taXNlPElQcm9kdWN0W10+ID0+IHtcclxuICBjb25zdCBmb3JtYXRGaWx0ZXJzID0gKCkgPT4ge1xyXG4gICAgbGV0IGZvcm1hdHRlZEZpbHRlcnMgPSAnJztcclxuXHJcbiAgICBpZiAoZmlsdGVyLnF1ZXJ5KSB7XHJcbiAgICAgIGlmIChmaWx0ZXIucXVlcnkuZGVwYXJ0bWVudCkge1xyXG4gICAgICAgIGZvcm1hdHRlZEZpbHRlcnMgKz0gYFxyXG4gICAgICAgICAgZGVwYXJ0bWVudHM6IHsgc2x1ZzogXCIke2ZpbHRlci5xdWVyeS5kZXBhcnRtZW50fVwiIH1cclxuICAgICAgICBgO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZmlsdGVyLnF1ZXJ5LmNhdGVnb3J5KSB7XHJcbiAgICAgICAgZm9ybWF0dGVkRmlsdGVycyArPSBgXHJcbiAgICAgICAgICBjYXRlZ29yaWVzOiB7IHNsdWc6IFwiJHtmaWx0ZXIucXVlcnkuY2F0ZWdvcnl9XCIgfVxyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaWx0ZXIucXVlcnkuc3ViY2F0ZWdvcnkpIHtcclxuICAgICAgICBmb3JtYXR0ZWRGaWx0ZXJzICs9IGBcclxuICAgICAgICAgIHN1YmNhdGVnb3JpZXM6IHsgc2x1ZzogXCIke2ZpbHRlci5xdWVyeS5zdWJjYXRlZ29yeX1cIiB9XHJcbiAgICAgICAgYDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmb3JtYXR0ZWRGaWx0ZXJzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgZXJyb3IsIGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICBxdWVyeTogZ3FsYFxyXG4gICAgICBxdWVyeSBnZXRQcm9kdWN0c1BhZ2UoXHJcbiAgICAgICAgJHdoZXJlOiBKU09OISA9IHtcclxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxyXG4gICAgICAgICAgJHtmb3JtYXRGaWx0ZXJzKCl9XHJcbiAgICAgICAgfVxyXG4gICAgICApIHtcclxuICAgICAgICBwcm9kdWN0cyhzdGFydDogJHtmaWx0ZXIuc3RhcnR9LCBsaW1pdDogJHtmaWx0ZXIubGltaXR9LCB3aGVyZTogJHdoZXJlKSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgcHJpY2VcclxuICAgICAgICAgIG9mZmVycyh3aGVyZTogeyBhY3RpdmU6IHRydWUgfSkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY292ZXIge1xyXG4gICAgICAgICAgICBhbHRlcm5hdGl2ZVRleHRcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBlcnJvciA/PyBkYXRhLnByb2R1Y3RzLmZpbHRlcigocHJvZHVjdDogSVByb2R1Y3QpID0+IHByb2R1Y3QgIT09IG51bGwpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RCeVNsdWcgPSBhc3luYyAoXHJcbiAgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PixcclxuICBzbHVnOiBzdHJpbmdcclxuKTogUHJvbWlzZTxJUHJvZHVjdD4gPT4ge1xyXG4gIGNvbnN0IHsgZXJyb3IsIGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XHJcbiAgICBxdWVyeTogZ3FsYFxyXG4gICAgICBxdWVyeSBnZXRQcm9kdWN0KCR3aGVyZTogSlNPTiEgPSB7IGFjdGl2ZTogdHJ1ZSwgc2x1ZzogXCIke3NsdWd9XCIgfSkge1xyXG4gICAgICAgIHByb2R1Y3RzKHdoZXJlOiAkd2hlcmUpIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgbWVkaWEge1xyXG4gICAgICAgICAgICBtaW1lXHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbWV0YV9kZXNjcmlwdGlvblxyXG4gICAgICAgICAgbWV0YV90aXRsZVxyXG4gICAgICAgICAgb2ZmZXJzKHdoZXJlOiB7IGFjdGl2ZTogdHJ1ZSB9KSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgZGlzY291bnRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICB2YXJpYW50cyh3aGVyZToge2FjdGl2ZTogdHJ1ZX0pIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgcGF0dGVyblxyXG4gICAgICAgICAgICBzaXplXHJcbiAgICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBlcnJvciA/PyBkYXRhLnByb2R1Y3RzWzBdO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLLCBBVVRIX0dPT0dMRV9DQUxMQkFDSyB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xyXG5pbXBvcnQgSVNlc3Npb24gZnJvbSAnQC9tb2RlbHMvSVNlc3Npb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb24gPSBhc3luYyAodG9rZW46IHN0cmluZyk6IFByb21pc2U8SVNlc3Npb24+ID0+IHtcclxuICBjb25zdCB1cmw6IHN0cmluZyA9IHRva2VuLmluY2x1ZGVzKCdpZF90b2tlbicpXHJcbiAgICA/IEFVVEhfR09PR0xFX0NBTExCQUNLXHJcbiAgICA6IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0s7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgdG9rZW4pO1xyXG4gIGNvbnN0IHNlc3Npb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9rZW46IHNlc3Npb25EYXRhLmp3dCxcclxuICAgIHVzZXI6IHtcclxuICAgICAgaWQ6IHNlc3Npb25EYXRhLnVzZXIuaWQsXHJcbiAgICAgIHVzZXJuYW1lOiBzZXNzaW9uRGF0YS51c2VyLnVzZXJuYW1lLFxyXG4gICAgICBlbWFpbDogc2Vzc2lvbkRhdGEudXNlci5lbWFpbCxcclxuICAgICAgYXZhdGFyOiBzZXNzaW9uRGF0YS51c2VyLmF2YXRhclxyXG4gICAgICAgID8gc2Vzc2lvbkRhdGEudXNlci5hdmF0YXIuZm9ybWF0cy50aHVtYm5haWxcclxuICAgICAgICA6IG51bGxcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSUlBQUFDQ0NBWUFBQUNLQXhEOUFBQUFDWEJJV1hNQUFCY1JBQUFYRVFIS0p2TS9BQUFKVTBsRVFWUjRuTzJkWFdoY1JSVEhaM2VUdE50MHUwbGJXbSt4ZENzK3FDMGtCWXNveFd6Qmw0TGlGdC84d0JSRUgvemFLc0tDUWxORjJCY2hCZnZtUi9LZytGSklGUFJKVFY3NlVvVUVLcFVLYmRaYTE1YWt6V2FwMitaalYyWjdGcmVaTzNmdng5eTVNL2VlSHl3YmRuYVRtenYvUFhQbXpNdzVzVWFqUVJBa0h2azdnRFJCSVNCTlVBaElFeFFDMHFRcnJMZkJLRlN6aEpBTVBBWUpJWDN3OHg3bXpYeW1vV1dHRUxKSUNKa2loTXlWaTZrNTdpYzBKUlN6QnFOUXBaMmNiWHNNTUc4U1N3VkUwWHlVaTZrWjJmK3phTFFWZ2xHbzBtLzVNSkhUOFoxb0NXT0NQc3JGMUdLSDl5dUhWa0l3Q2xWcTJ2T0VrSnhERXkrYlNSREVtTUxYZUE5YUNNRW9WSWZoMnovRU5Lb050UlJVREtPcSt4WEtDZ0hHL1dHd0FDcC8rKzB5VGtWUkxxYW1WTHc0NVlRQUFzakRJODI4UVgvb1RHUkVOVUVvSlFRWUFrWkNZZ0U2TVE2Q1VHTElVRUlJTUFNWTFkQUg4RW9GL0llUm9DOGtVQ0hBTUVCdnd0dE1ZN1FvVVg4b3lPRWlNQ0ZBNUc4c0lzT0FYVTdCY0NFOURoSElXb05ScUZJcjhET0tnSUZheGlrWUtxVWkxU0xBVURBUlFWL0FLZFIzeU1zTVNFa1RBcWg4S3FSVFFyOFlMeGRUd3pMK2tCUWh3TFJ3RkVYZ0NocDN5UG50Ti9ndUJCREJsMHdENG9SWnVyam1weGg4ZFJiQktVUVJlR2ZBYnlmU040dGdGS3JVMFhtWmFVQzhVQUhMSUh6L2d5OFdBU3dCaWtBOGFiQU1HZEcvV2JoRlFKOUFDc0o5QnFFV0FVVWdqWmJQMENmcUR3b1RBamd5S0FKNURFQ0lYZ2hDaGdaUTVsd1U0Z1Q3ZHNWSmVtT01lZjE4dVU2V2FvR3MyNXdVc1hvcFNnZ3pDbXdnRmNxV1pJdzhzNytyOXRqZXhJMUg5eVJXOTI2TDIxNFhXVmtqdGI4VzY5ZnB6NWZtNi9HNWhYcjlRcm0rNC9KQ1BYbmxab05jdVZsblB1T1JvK1ZpYXNMTHIvQXNCS05RSFEzVE12SUxCN3Rycnh6cVdYcG9aM3duMHlpQXo4OHVsejc0OW83b3hUWTZyUnowc3NuRjB3RVhXRW9PaFFqZVA3S2g4dHFobnA3dUJFa1MwbnpvUkJyOGhhemJhM2J0TExhdEpHck5FdzhreU84bk5sZmVHT3BKZ3doMFpRamlOM0tGRUlaRnBFK2UyemgvNXRWTkpKMk1oY1hKUGVFMjJPUnFhSUFoUWR2SUlYVUVmM3hyMDQzNysrUGJtVWI5Y1RWRXVMVUkycHpnV1UrYkNMWXlqZUZnQ0FKN2puQXNCQmlIdE4xaUZuSVJ0QmgxR25WMEpJUzJ3eWRhUW4yQ0NJaUFnTy9tcUorY1dnUnRUeC9SMmNIekI3dkQ2QlB3eUR1eENyYUZvTE0xb0g3QkZ5OGxLMHhEdUhGa0ZaeFlCRzJ0d1p2Wm5rcUlwb2hPc0cwVmJBbEJkMnRBSTRaTVF6U3diUlhzV29TY3J0YUFMaHhwSGpIMGlxMnBwRjBoQkg1STB5M3ZQTFhobHA1WExvdzlkdUlLSFlVQVVVUXQ0d2E3KytOa1Z6b1dwWmtDajQ1Q3NCTmlsbkxTeGcrZWZEQlJrN1dTdUhTN2NYUGhWbU9KYVZqSHhXdjF6Y3lML2tPampSbXJaV283UXNneHIyakNrZjFkODlRdytIVzFsVnFqOHRIM2QzcStPNythWEtvMStna2gvY3liMUNFSEM0V21XQXJCS0ZTMWRSSXArNHlFYjdPRlQ2ZVhLeC8vY0VlbmV6TnNKWVJPUG9LMjFvQnkzNWFZTDd1TXZqNjNNcStaQ0NnRFZrdlVvUlVDalIvNEFSME8zajF6VzFjSGxOdWZYQ0hBOW5SdGg0WDlCdmRmODhUcDZXWGhPMDhsd3QybllIVzN1QitLTWo5ZFhGWFpJZXdFdDA5UkNBNzU3VytkRFFKSjgwNVVveEFjOE05UzQ1bzJGOHZIdEY5TmhRRGVKV1kzV1VkdHBYR2JlVkUvSEZrRTB6Y2pvY0MwYjFFSTBjUDBhQ0lLSVlLWU9ZdzhJUWc3ZDQ4b0NkTy9QQ0V3aWtGQ0JkTy9QQ0hnakNIY2RMWUlJdE94SU1yQzlERWpCRE96Z1lRT3BvL05oSUJFRUJRQzBnU0ZnRFN4M0txbUFwKzltTHp3aUJIZjVQUlNrdDJ4allRUW9UdVVkdmZIdDU5OXI3ZkVORGpnOU5UeWpxL09yU2gzemtKNUlUeStON0c4dFRmMk1OTVFBRjF4MHJ0M1c3elh5MSsrdktEbU1qWU9EWktoNmZWVUJJVWdFWnAvMFljY2kwSkFJVWlrbFlSVFJSZ2hxRnE3T0F6OFVscFR4U2RqK3BnUkF1SWZmMXl2TzU3OXlJSW5oS2hsRjVIQ3IzK3VxYklEbXFuendCT0M4Rkl4eU4wTTdvckE5QzlQQ054VHM0Zzc2R25wZ05MNG04SDBMd3BCRXRlcmpYOVZ1UmF6NC9FOElUQmVKZUtONlQ5V1Z4VzVoZFBNS3haQ1lCU0RlSU1XN2xEa0ZwcjJyYWtRd0hSNFdseEI3bVhtNnBvcUMwMm0xdDVVQ0FEaldTTHVVZWpNcEdtL1dnbkJWRG1JY3hRNk0xbmhWWkZGSVVqZzZtSjlXWkZMNGZhcFpYRXZvMUNkQ3pxMUhxKzhYdWZQSmNpSFQyOWdYdmNDL1dhLy9rM044V1lYbnlxN3VlRll1Wmd5cmJYUmFSRmtJdWppWFNybEk2Q25vYzllV21OZTF3aHVEUzZyb1lGWW1SSkVPMmF0YWtsYkNnR0tTdUkwTWh4d1Urc1JtOHZRWEhPQ2FJVmxQOW9SZ3FsemdXakZwTld3WUVzSU1PODBqVThqMm1BNUxOZ1NBb0JXUVY5S2RyWWYyaElDekQzUmFkUVRXN1Uybk94WjdHaGVFT1dvOEFKSVhvUXdobnNadGNQMmw5ZTJFTURyUkt1Z0R4VmZoRUR1aW1FRWZRVnR5SGVhTXJiajVseUR0b1crSWtUSnJtL1F3ckVRNEE5Z1hFRnQvSzhXRDJoYktEd0NUTG81dHVoS0NCQnRQTWswSUVGVGNWdVZ6L1haUjNBY1o1a0dKRWlHblRpSVFvUUFhRnNUTW9STXdyWUJWM2dTQWd3Ung1a0dSRFlscjE5S3o4Zml5OFVVRFZxTU13MklMS2hma0hNN0pMUVFsUjhoai81Q1lPUjVXOVNkSUVRSW9NWWNya1ZJNTVUVHdCRVBZUmxUNEpoY0ZzVWdqZkZ5TVNVc25pTTBkUTZZS0p4SitBL2RrU3owUGd2UG9RUlRtR05NQXlLS1dWN0pQaS80a2t3THhpMFVnM2lhSXZBNlF6RER0NnhxS0FiaCtDWUM0bmQ2UFJERFlYUWdQVFB1cHdpSWpEeUxzQktHc3duMzBObUI2elVFdTBoSnVBbXppUXdHblJ4elRQVHNnSWUwekt0VTBlVmlpdFlTT3NVMEl1dWhhd2NIUkFXTDdDQTlCUzhFUVk3aVVNRmxraGJmRWhFMmRrSWd1WmdoMWpDSVc5N3VnWDR4anBlTEtjOExTRzRJTENrM0RVbVhpNmtzVERHamJoMWFWaUN3NHdLQloyZUhjVEFUMGFWczZnc2NCU3RnbXY5UUZrcWs2UWRIa25ySEJ5SXlYRkFMZUxKY1RHVzg3Q29TaVZMMUdxaURCTVBGNFpBS29nS2Jmak93NTFNWmxLenkxZ3BDR1lWcUZnN1VEREZ2MG92VzhiUFJJQnhCT3loZDdxOU5FQm5ZQlRXc1dTVjdhdFhHWk1ZRDNLSjgzVWZ5LzZZWEtvUzhVYWptUUJEUE1tOVVneEtjSEI4TDJnRjBnaFpDYUFlY3F3bWpVTzJETll3Y1BBZVpHSFFha2xWTnlRNEVpVUk3SWJTQXNYYWlsUzNNS0ZRSElVaVZoZWNCNWtOaXFFQmk2eWw0ektnNjdqdkJNZ1Z2Q0JpRUdBVjk3b1BuRmp3SHROUlcwMkFST3IzMVBHTldHQ3NNaEYwSWlFMnc3aVBTQklXQU5FRWhJSVFRUXY0RDh3RU80bUpnaDFFQUFBQUFTVVZPUks1Q1lJST1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRRME1DSWdhR1ZwWjJoMFBTSXpNQ0lnZG1sbGQwSnZlRDBpTUNBd0lERTBOREFnTXpBaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStEUW84WnlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNEQXBJajROQ2p4eVpXTjBJSGRwWkhSb1BTSTFOQ0lnYUdWcFoyaDBQU0l6TUNJZ2RISmhibk5tYjNKdFBTSnRZWFJ5YVhnb01TQXdJREFnTFRFZ01TQXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtEUW84Y0dGMGFDQmtQU0pOTVRFdU16QTVNU0F5TUM0NE9EWTBWakUyTGpJMU56bElNVFl1TnpBNU1WWXlOVWd4VmpZdU5VZ3lNaTQxVmpFd0xqVTVPVGhJTmk0MFZqSXdMamc0TmpSSU1URXVNekE1TVZvaUlHWnBiR3c5SWlOQk16RTVOVUlpTHo0TkNqeHdZWFJvSUdROUlrMHhPU0F4TWk0d01EUldNekJJTlRWV01qVXVPRGczTTBnME5pNDFWakl4TGpjM05EWklNemN1TlZZeE55NHhORGN5U0RJNExqVldNVEl1TURBMFNERTVXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRJNElEQldOaTQwTWpjM05rZ3pOeTR4T1RFMVZqRXhMalUyTkRkSU5EWXVNemd6VmpFNFNEVTFWakJJTWpoYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjbVZqZENCM2FXUjBhRDBpTlRRaUlHaGxhV2RvZEQwaU16QWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREVnTUNBd0lDMHhJRFkwSURNd0tTSWdabWxzYkQwaWQyaHBkR1VpTHo0TkNqeHdZWFJvSUdROUlrMDNOQzR6TURreElESXdMamc0TmpSV01UWXVNalUzT1VnM09TNDNNRGt4VmpJMVNEWTBWall1TlVnNE5TNDFWakV3TGpVNU9UaElOamt1TkZZeU1DNDRPRFkwU0RjMExqTXdPVEZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNHRjBhQ0JrUFNKTk9ESWdNVEl1TURBMFZqTXdTREV4T0ZZeU5TNDRPRGN6U0RFd09TNDFWakl4TGpjM05EWklNVEF3TGpWV01UY3VNVFEzTWtnNU1TNDFWakV5TGpBd05FZzRNbG9pSUdacGJHdzlJaU5CTXpFNU5VSWlMejROQ2p4d1lYUm9JR1E5SWswNU1TQXdWall1TkRJM056WklNVEF3TGpFNU1WWXhNUzQxTmpRM1NERXdPUzR6T0ROV01UaElNVEU0VmpCSU9URmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y21WamRDQjNhV1IwYUQwaU5UUWlJR2hsYVdkb2REMGlNekFpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SURFeU55QXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtEUW84Y0dGMGFDQmtQU0pOTVRNM0xqTXdPU0F5TUM0NE9EWTBWakUyTGpJMU56bElNVFF5TGpjd09WWXlOVWd4TWpkV05pNDFTREUwT0M0MVZqRXdMalU1T1RoSU1UTXlMalJXTWpBdU9EZzJORWd4TXpjdU16QTVXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRFME5TQXhNaTR3TURSV016QklNVGd4VmpJMUxqZzROek5JTVRjeUxqVldNakV1TnpjME5rZ3hOak11TlZZeE55NHhORGN5U0RFMU5DNDFWakV5TGpBd05FZ3hORFZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNHRjBhQ0JrUFNKTk1UVTBJREJXTmk0ME1qYzNOa2d4TmpNdU1Ua3hWakV4TGpVMk5EZElNVGN5TGpNNE0xWXhPRWd4T0RGV01FZ3hOVFJhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNtVmpkQ0IzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTXpBaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElERTVNQ0F6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOGNHRjBhQ0JrUFNKTk1qQXdMak13T1NBeU1DNDRPRFkwVmpFMkxqSTFOemxJTWpBMUxqY3dPVll5TlVneE9UQldOaTQxU0RJeE1TNDFWakV3TGpVNU9UaElNVGsxTGpSV01qQXVPRGcyTkVneU1EQXVNekE1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BIQmhkR2dnWkQwaVRUSXdPQ0F4TWk0d01EUldNekJJTWpRMFZqSTFMamc0TnpOSU1qTTFMalZXTWpFdU56YzBOa2d5TWpZdU5WWXhOeTR4TkRjeVNESXhOeTQxVmpFeUxqQXdORWd5TURoYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjR0YwYUNCa1BTSk5NakUzSURCV05pNDBNamMzTmtneU1qWXVNVGt4VmpFeExqVTJORGRJTWpNMUxqTTRNMVl4T0VneU5EUldNRWd5TVRkYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjbVZqZENCM2FXUjBhRDBpTlRRaUlHaGxhV2RvZEQwaU16QWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREVnTUNBd0lDMHhJREkxTXlBek1Da2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhjR0YwYUNCa1BTSk5Nall6TGpNd09TQXlNQzQ0T0RZMFZqRTJMakkxTnpsSU1qWTRMamN3T1ZZeU5VZ3lOVE5XTmk0MVNESTNOQzQxVmpFd0xqVTVPVGhJTWpVNExqUldNakF1T0RnMk5FZ3lOak11TXpBNVdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnMEtQSEJoZEdnZ1pEMGlUVEkzTVNBeE1pNHdNRFJXTXpCSU16QTNWakkxTGpnNE56TklNams0TGpWV01qRXVOemMwTmtneU9Ea3VOVll4Tnk0eE5EY3lTREk0TUM0MVZqRXlMakF3TkVneU56RmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y0dGMGFDQmtQU0pOTWpnd0lEQldOaTQwTWpjM05rZ3lPRGt1TVRreFZqRXhMalUyTkRkSU1qazRMak00TTFZeE9FZ3pNRGRXTUVneU9EQmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y21WamRDQjNhV1IwYUQwaU5UUWlJR2hsYVdkb2REMGlNekFpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SURNeE5pQXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtEUW84Y0dGMGFDQmtQU0pOTXpJMkxqTXdPU0F5TUM0NE9EWTBWakUyTGpJMU56bElNek14TGpjd09WWXlOVWd6TVRaV05pNDFTRE16Tnk0MVZqRXdMalU1T1RoSU16SXhMalJXTWpBdU9EZzJORWd6TWpZdU16QTVXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRNek5DQXhNaTR3TURSV016QklNemN3VmpJMUxqZzROek5JTXpZeExqVldNakV1TnpjME5rZ3pOVEl1TlZZeE55NHhORGN5U0RNME15NDFWakV5TGpBd05FZ3pNelJhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNHRjBhQ0JrUFNKTk16UXpJREJXTmk0ME1qYzNOa2d6TlRJdU1Ua3hWakV4TGpVMk5EZElNell4TGpNNE0xWXhPRWd6TnpCV01FZ3pORE5hSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNtVmpkQ0IzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTXpBaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElETTNPU0F6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOGNHRjBhQ0JrUFNKTk16ZzVMak13T1NBeU1DNDRPRFkwVmpFMkxqSTFOemxJTXprMExqY3dPVll5TlVnek56bFdOaTQxU0RRd01DNDFWakV3TGpVNU9UaElNemcwTGpSV01qQXVPRGcyTkVnek9Ea3VNekE1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BIQmhkR2dnWkQwaVRUTTVOeUF4TWk0d01EUldNekJJTkRNelZqSTFMamc0TnpOSU5ESTBMalZXTWpFdU56YzBOa2cwTVRVdU5WWXhOeTR4TkRjeVNEUXdOaTQxVmpFeUxqQXdORWd6T1RkYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjR0YwYUNCa1BTSk5OREEySURCV05pNDBNamMzTmtnME1UVXVNVGt4VmpFeExqVTJORGRJTkRJMExqTTRNMVl4T0VnME16TldNRWcwTURaYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjbVZqZENCM2FXUjBhRDBpTlRRaUlHaGxhV2RvZEQwaU16QWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREVnTUNBd0lDMHhJRFEwTWlBek1Da2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhjR0YwYUNCa1BTSk5ORFV5TGpNd09TQXlNQzQ0T0RZMFZqRTJMakkxTnpsSU5EVTNMamN3T1ZZeU5VZzBOREpXTmk0MVNEUTJNeTQxVmpFd0xqVTVPVGhJTkRRM0xqUldNakF1T0RnMk5FZzBOVEl1TXpBNVdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnMEtQSEJoZEdnZ1pEMGlUVFEyTUNBeE1pNHdNRFJXTXpCSU5EazJWakkxTGpnNE56TklORGczTGpWV01qRXVOemMwTmtnME56Z3VOVll4Tnk0eE5EY3lTRFEyT1M0MVZqRXlMakF3TkVnME5qQmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y0dGMGFDQmtQU0pOTkRZNUlEQldOaTQwTWpjM05rZzBOemd1TVRreFZqRXhMalUyTkRkSU5EZzNMak00TTFZeE9FZzBPVFpXTUVnME5qbGFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y21WamRDQjNhV1IwYUQwaU5UUWlJR2hsYVdkb2REMGlNekFpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SURVd05TQXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtEUW84Y0dGMGFDQmtQU0pOTlRFMUxqTXdPU0F5TUM0NE9EWTBWakUyTGpJMU56bElOVEl3TGpjd09WWXlOVWcxTURWV05pNDFTRFV5Tmk0MVZqRXdMalU1T1RoSU5URXdMalJXTWpBdU9EZzJORWcxTVRVdU16QTVXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRVeU15QXhNaTR3TURSV016QklOVFU1VmpJMUxqZzROek5JTlRVd0xqVldNakV1TnpjME5rZzFOREV1TlZZeE55NHhORGN5U0RVek1pNDFWakV5TGpBd05FZzFNak5hSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNHRjBhQ0JrUFNKTk5UTXlJREJXTmk0ME1qYzNOa2cxTkRFdU1Ua3hWakV4TGpVMk5EZElOVFV3TGpNNE0xWXhPRWcxTlRsV01FZzFNekphSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNtVmpkQ0IzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTXpBaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElEVTJPQ0F6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOGNHRjBhQ0JrUFNKTk5UYzRMak13T1NBeU1DNDRPRFkwVmpFMkxqSTFOemxJTlRnekxqY3dPVll5TlVnMU5qaFdOaTQxU0RVNE9TNDFWakV3TGpVNU9UaElOVGN6TGpSV01qQXVPRGcyTkVnMU56Z3VNekE1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BIQmhkR2dnWkQwaVRUVTROaUF4TWk0d01EUldNekJJTmpJeVZqSTFMamc0TnpOSU5qRXpMalZXTWpFdU56YzBOa2cyTURRdU5WWXhOeTR4TkRjeVNEVTVOUzQxVmpFeUxqQXdORWcxT0RaYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjR0YwYUNCa1BTSk5OVGsxSURCV05pNDBNamMzTmtnMk1EUXVNVGt4VmpFeExqVTJORGRJTmpFekxqTTRNMVl4T0VnMk1qSldNRWcxT1RWYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjbVZqZENCM2FXUjBhRDBpTlRRaUlHaGxhV2RvZEQwaU16QWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREVnTUNBd0lDMHhJRFl6TVNBek1Da2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhjR0YwYUNCa1BTSk5OalF4TGpNd09TQXlNQzQ0T0RZMFZqRTJMakkxTnpsSU5qUTJMamN3T1ZZeU5VZzJNekZXTmk0MVNEWTFNaTQxVmpFd0xqVTVPVGhJTmpNMkxqUldNakF1T0RnMk5FZzJOREV1TXpBNVdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnMEtQSEJoZEdnZ1pEMGlUVFkwT1NBeE1pNHdNRFJXTXpCSU5qZzFWakkxTGpnNE56TklOamMyTGpWV01qRXVOemMwTmtnMk5qY3VOVll4Tnk0eE5EY3lTRFkxT0M0MVZqRXlMakF3TkVnMk5EbGFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y0dGMGFDQmtQU0pOTmpVNElEQldOaTQwTWpjM05rZzJOamN1TVRreFZqRXhMalUyTkRkSU5qYzJMak00TTFZeE9FZzJPRFZXTUVnMk5UaGFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y21WamRDQjNhV1IwYUQwaU5UUWlJR2hsYVdkb2REMGlNekFpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SURZNU5DQXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtEUW84Y0dGMGFDQmtQU0pOTnpBMExqTXdPU0F5TUM0NE9EWTBWakUyTGpJMU56bElOekE1TGpjd09WWXlOVWcyT1RSV05pNDFTRGN4TlM0MVZqRXdMalU1T1RoSU5qazVMalJXTWpBdU9EZzJORWczTURRdU16QTVXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRjeE1pQXhNaTR3TURSV016QklOelE0VmpJMUxqZzROek5JTnpNNUxqVldNakV1TnpjME5rZzNNekF1TlZZeE55NHhORGN5U0RjeU1TNDFWakV5TGpBd05FZzNNVEphSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNHRjBhQ0JrUFNKTk56SXhJREJXTmk0ME1qYzNOa2czTXpBdU1Ua3hWakV4TGpVMk5EZElOek01TGpNNE0xWXhPRWczTkRoV01FZzNNakZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNtVmpkQ0IzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTXpBaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElEYzFOeUF6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOGNHRjBhQ0JrUFNKTk56WTNMak13T1NBeU1DNDRPRFkwVmpFMkxqSTFOemxJTnpjeUxqY3dPVll5TlVnM05UZFdOaTQxU0RjM09DNDFWakV3TGpVNU9UaElOell5TGpSV01qQXVPRGcyTkVnM05qY3VNekE1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BIQmhkR2dnWkQwaVRUYzNOU0F4TWk0d01EUldNekJJT0RFeFZqSTFMamc0TnpOSU9EQXlMalZXTWpFdU56YzBOa2czT1RNdU5WWXhOeTR4TkRjeVNEYzROQzQxVmpFeUxqQXdORWczTnpWYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjR0YwYUNCa1BTSk5OemcwSURCV05pNDBNamMzTmtnM09UTXVNVGt4VmpFeExqVTJORGRJT0RBeUxqTTRNMVl4T0VnNE1URldNRWczT0RSYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjbVZqZENCM2FXUjBhRDBpTlRRaUlHaGxhV2RvZEQwaU16QWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREVnTUNBd0lDMHhJRGd5TUNBek1Da2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhjR0YwYUNCa1BTSk5PRE13TGpNd09TQXlNQzQ0T0RZMFZqRTJMakkxTnpsSU9ETTFMamN3T1ZZeU5VZzRNakJXTmk0MVNEZzBNUzQxVmpFd0xqVTVPVGhJT0RJMUxqUldNakF1T0RnMk5FZzRNekF1TXpBNVdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnMEtQSEJoZEdnZ1pEMGlUVGd6T0NBeE1pNHdNRFJXTXpCSU9EYzBWakkxTGpnNE56TklPRFkxTGpWV01qRXVOemMwTmtnNE5UWXVOVll4Tnk0eE5EY3lTRGcwTnk0MVZqRXlMakF3TkVnNE16aGFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y0dGMGFDQmtQU0pOT0RRM0lEQldOaTQwTWpjM05rZzROVFl1TVRreFZqRXhMalUyTkRkSU9EWTFMak00TTFZeE9FZzROelJXTUVnNE5EZGFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y21WamRDQjNhV1IwYUQwaU5UUWlJR2hsYVdkb2REMGlNekFpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SURnNE15QXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtEUW84Y0dGMGFDQmtQU0pOT0RrekxqTXdPU0F5TUM0NE9EWTBWakUyTGpJMU56bElPRGs0TGpjd09WWXlOVWc0T0ROV05pNDFTRGt3TkM0MVZqRXdMalU1T1RoSU9EZzRMalJXTWpBdU9EZzJORWc0T1RNdU16QTVXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRrd01TQXhNaTR3TURSV016QklPVE0zVmpJMUxqZzROek5JT1RJNExqVldNakV1TnpjME5rZzVNVGt1TlZZeE55NHhORGN5U0RreE1DNDFWakV5TGpBd05FZzVNREZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNHRjBhQ0JrUFNKTk9URXdJREJXTmk0ME1qYzNOa2c1TVRrdU1Ua3hWakV4TGpVMk5EZElPVEk0TGpNNE0xWXhPRWc1TXpkV01FZzVNVEJhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNtVmpkQ0IzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTXpBaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElEazBOaUF6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOGNHRjBhQ0JrUFNKTk9UVTJMak13T1NBeU1DNDRPRFkwVmpFMkxqSTFOemxJT1RZeExqY3dPVll5TlVnNU5EWldOaTQxU0RrMk55NDFWakV3TGpVNU9UaElPVFV4TGpSV01qQXVPRGcyTkVnNU5UWXVNekE1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BIQmhkR2dnWkQwaVRUazJOQ0F4TWk0d01EUldNekJJTVRBd01GWXlOUzQ0T0RjelNEazVNUzQxVmpJeExqYzNORFpJT1RneUxqVldNVGN1TVRRM01rZzVOek11TlZZeE1pNHdNRFJJT1RZMFdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnMEtQSEJoZEdnZ1pEMGlUVGszTXlBd1ZqWXVOREkzTnpaSU9UZ3lMakU1TVZZeE1TNDFOalEzU0RrNU1TNHpPRE5XTVRoSU1UQXdNRll3U0RrM00xb2lJR1pwYkd3OUlpTkJNekU1TlVJaUx6NE5Danh5WldOMElIZHBaSFJvUFNJMU5DSWdhR1ZwWjJoMFBTSXpNQ0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVNBd0lEQWdMVEVnTVRBd09TQXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtEUW84Y0dGMGFDQmtQU0pOTVRBeE9TNHpNU0F5TUM0NE9EWTBWakUyTGpJMU56bElNVEF5TkM0M01WWXlOVWd4TURBNVZqWXVOVWd4TURNd0xqVldNVEF1TlRrNU9FZ3hNREUwTGpSV01qQXVPRGcyTkVneE1ERTVMak14V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BIQmhkR2dnWkQwaVRURXdNamNnTVRJdU1EQTBWak13U0RFd05qTldNalV1T0RnM00wZ3hNRFUwTGpWV01qRXVOemMwTmtneE1EUTFMalZXTVRjdU1UUTNNa2d4TURNMkxqVldNVEl1TURBMFNERXdNamRhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNHRjBhQ0JrUFNKTk1UQXpOaUF3VmpZdU5ESTNOelpJTVRBME5TNHhPVll4TVM0MU5qUTNTREV3TlRRdU16aFdNVGhJTVRBMk0xWXdTREV3TXpaYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjbVZqZENCM2FXUjBhRDBpTlRRaUlHaGxhV2RvZEQwaU16QWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREVnTUNBd0lDMHhJREV3TnpJZ016QXBJaUJtYVd4c1BTSjNhR2wwWlNJdlBnMEtQSEJoZEdnZ1pEMGlUVEV3T0RJdU16RWdNakF1T0RnMk5GWXhOaTR5TlRjNVNERXdPRGN1TnpGV01qVklNVEEzTWxZMkxqVklNVEE1TXk0MVZqRXdMalU1T1RoSU1UQTNOeTQwVmpJd0xqZzROalJJTVRBNE1pNHpNVm9pSUdacGJHdzlJaU5CTXpFNU5VSWlMejROQ2p4d1lYUm9JR1E5SWsweE1Ea3dJREV5TGpBd05GWXpNRWd4TVRJMlZqSTFMamc0TnpOSU1URXhOeTQxVmpJeExqYzNORFpJTVRFd09DNDFWakUzTGpFME56SklNVEE1T1M0MVZqRXlMakF3TkVneE1Ea3dXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRFd09Ua2dNRlkyTGpReU56YzJTREV4TURndU1UbFdNVEV1TlRZME4wZ3hNVEUzTGpNNFZqRTRTREV4TWpaV01FZ3hNRGs1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BISmxZM1FnZDJsa2RHZzlJalUwSWlCb1pXbG5hSFE5SWpNd0lpQjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3hJREFnTUNBdE1TQXhNVE0xSURNd0tTSWdabWxzYkQwaWQyaHBkR1VpTHo0TkNqeHdZWFJvSUdROUlrMHhNVFExTGpNeElESXdMamc0TmpSV01UWXVNalUzT1VneE1UVXdMamN4VmpJMVNERXhNelZXTmk0MVNERXhOVFl1TlZZeE1DNDFPVGs0U0RFeE5EQXVORll5TUM0NE9EWTBTREV4TkRVdU16RmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y0dGMGFDQmtQU0pOTVRFMU15QXhNaTR3TURSV016QklNVEU0T1ZZeU5TNDRPRGN6U0RFeE9EQXVOVll5TVM0M056UTJTREV4TnpFdU5WWXhOeTR4TkRjeVNERXhOakl1TlZZeE1pNHdNRFJJTVRFMU0xb2lJR1pwYkd3OUlpTkJNekU1TlVJaUx6NE5Danh3WVhSb0lHUTlJazB4TVRZeUlEQldOaTQwTWpjM05rZ3hNVGN4TGpFNVZqRXhMalUyTkRkSU1URTRNQzR6T0ZZeE9FZ3hNVGc1VmpCSU1URTJNbG9pSUdacGJHdzlJaU5CTXpFNU5VSWlMejROQ2p4eVpXTjBJSGRwWkhSb1BTSTFOQ0lnYUdWcFoyaDBQU0l6TUNJZ2RISmhibk5tYjNKdFBTSnRZWFJ5YVhnb01TQXdJREFnTFRFZ01URTVPQ0F6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOGNHRjBhQ0JrUFNKTk1USXdPQzR6TVNBeU1DNDRPRFkwVmpFMkxqSTFOemxJTVRJeE15NDNNVll5TlVneE1UazRWall1TlVneE1qRTVMalZXTVRBdU5UazVPRWd4TWpBekxqUldNakF1T0RnMk5FZ3hNakE0TGpNeFdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnMEtQSEJoZEdnZ1pEMGlUVEV5TVRZZ01USXVNREEwVmpNd1NERXlOVEpXTWpVdU9EZzNNMGd4TWpRekxqVldNakV1TnpjME5rZ3hNak0wTGpWV01UY3VNVFEzTWtneE1qSTFMalZXTVRJdU1EQTBTREV5TVRaYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0RRbzhjR0YwYUNCa1BTSk5NVEl5TlNBd1ZqWXVOREkzTnpaSU1USXpOQzR4T1ZZeE1TNDFOalEzU0RFeU5ETXVNemhXTVRoSU1USTFNbFl3U0RFeU1qVmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y21WamRDQjNhV1IwYUQwaU5UUWlJR2hsYVdkb2REMGlNekFpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SURFeU5qRWdNekFwSWlCbWFXeHNQU0ozYUdsMFpTSXZQZzBLUEhCaGRHZ2daRDBpVFRFeU56RXVNekVnTWpBdU9EZzJORll4Tmk0eU5UYzVTREV5TnpZdU56RldNalZJTVRJMk1WWTJMalZJTVRJNE1pNDFWakV3TGpVNU9UaElNVEkyTmk0MFZqSXdMamc0TmpSSU1USTNNUzR6TVZvaUlHWnBiR3c5SWlOQk16RTVOVUlpTHo0TkNqeHdZWFJvSUdROUlrMHhNamM1SURFeUxqQXdORll6TUVneE16RTFWakkxTGpnNE56TklNVE13Tmk0MVZqSXhMamMzTkRaSU1USTVOeTQxVmpFM0xqRTBOekpJTVRJNE9DNDFWakV5TGpBd05FZ3hNamM1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGcwS1BIQmhkR2dnWkQwaVRURXlPRGdnTUZZMkxqUXlOemMyU0RFeU9UY3VNVGxXTVRFdU5UWTBOMGd4TXpBMkxqTTRWakU0U0RFek1UVldNRWd4TWpnNFdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnMEtQSEpsWTNRZ2QybGtkR2c5SWpVMElpQm9aV2xuYUhROUlqTXdJaUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d4SURBZ01DQXRNU0F4TXpJMElETXdLU0lnWm1sc2JEMGlkMmhwZEdVaUx6NE5Danh3WVhSb0lHUTlJazB4TXpNMExqTXhJREl3TGpnNE5qUldNVFl1TWpVM09VZ3hNek01TGpjeFZqSTFTREV6TWpSV05pNDFTREV6TkRVdU5WWXhNQzQxT1RrNFNERXpNamt1TkZZeU1DNDRPRFkwU0RFek16UXVNekZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOGNHRjBhQ0JrUFNKTk1UTTBNaUF4TWk0d01EUldNekJJTVRNM09GWXlOUzQ0T0RjelNERXpOamt1TlZZeU1TNDNOelEyU0RFek5qQXVOVll4Tnk0eE5EY3lTREV6TlRFdU5WWXhNaTR3TURSSU1UTTBNbG9pSUdacGJHdzlJaU5CTXpFNU5VSWlMejROQ2p4d1lYUm9JR1E5SWsweE16VXhJREJXTmk0ME1qYzNOa2d4TXpZd0xqRTVWakV4TGpVMk5EZElNVE0yT1M0ek9GWXhPRWd4TXpjNFZqQklNVE0xTVZvaUlHWnBiR3c5SWlOQk16RTVOVUlpTHo0TkNqeHlaV04wSUhkcFpIUm9QU0kxTkNJZ2FHVnBaMmgwUFNJek1DSWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NU0F3SURBZ0xURWdNVE00TnlBek1Da2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhjR0YwYUNCa1BTSk5NVE01Tnk0ek1TQXlNQzQ0T0RZMFZqRTJMakkxTnpsSU1UUXdNaTQzTVZZeU5VZ3hNemczVmpZdU5VZ3hOREE0TGpWV01UQXVOVGs1T0VneE16a3lMalJXTWpBdU9EZzJORWd4TXprM0xqTXhXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRFME1EVWdNVEl1TURBMFZqTXdTREUwTkRGV01qVXVPRGczTTBneE5ETXlMalZXTWpFdU56YzBOa2d4TkRJekxqVldNVGN1TVRRM01rZ3hOREUwTGpWV01USXVNREEwU0RFME1EVmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtEUW84Y0dGMGFDQmtQU0pOTVRReE5DQXdWall1TkRJM056WklNVFF5TXk0eE9WWXhNUzQxTmpRM1NERTBNekl1TXpoV01UaElNVFEwTVZZd1NERTBNVFJhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrRFFvOEwyYytEUW84WkdWbWN6NE5DanhqYkdsd1VHRjBhQ0JwWkQwaVkyeHBjREFpUGcwS1BISmxZM1FnZDJsa2RHZzlJakUwTkRBaUlHaGxhV2RvZEQwaU16QWlJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhMMk5zYVhCUVlYUm9QZzBLUEM5a1pXWnpQZzBLUEM5emRtYytEUW89XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRFlBQUFBMkNBWUFBQUNNUldyZEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJWZlNVUkJWSGdCaFZwNWtCN0ZkWC9kMC9OOTMrNXF0Ym92TG5FSWN4a0JKbmdEaFFNWWM1UUJHNUFEcENnQ2NZSWRZdXlLQ2NabC9nZzR0a081SU5pSkV4dENKU0VWY3hnVHFHQkRzQU1XTnhhQmdDU09HSU9FRGlRa2RLekU3bmZNVExkLzc3MmVtVzhsQkNQMTlodzkzZS8zN243ekdmcUE0NnpMLzMrV1Q4eHBaTUlwbnZ4aHh0UCt4b1JoUTZGSkJTVW1qak1oeEI2Tkg2QzNQa2h2Z2ljWDlGbUNjUll0OGR6ekdJclhCcjFIUTQ5emZzZndtQUxQS1JRWW0rSCt6cVF3YjJMTmxiaCsxR1RkcGRjKzhZa05lNkxkdk4vTk02OThmYmJ0NXRjQXpHVWdhSVl0Q1NmdCtWck9nMDdBd0V3OHQ2RVFnbDFRWUV5dzloRUVnNHZBRWkrRVY5Y3lyMWVtNkQwajF3SXlXSmxYMXZFVVRERGJjSDYzTDVMdlhQUHIwWFVmQ3V6Y1MxZWNCMGI5RUZUUE1Ud3hLUWpydll3V0lGZ29DTWdnMGdqUzl3TXhzZmNDUkNWbG9xUWlLQUdvWUJpRUFDb1pVTjZQNTBZa0tjdnB3WXdPaVpLZm1PMkpUeTYvOHBuajc5a2pzUE11ZXZHcVlNeU5ocUFXVkt1WUZlbUVDcVRwazVSSWdiUjM1ZlV1elphZ3ZZOEEreVFacFdEak9GWkZXK2k2U1NqQkdBRXBxNGJZR2N0L0ZDZVJOODU5N1MrZVBQR20zWUJkc09UL1BvY2hkMkdNcmRRcmdtQmd4cFNxRjZwbkFvYlVaaEpTUW10QXZyS2xTZUFxTzZ2VlUrMnFCbGF1WTRWd1UySUJEUW9HZXNpcmx1TGprYmdIOE5ZdHVmenBUOXhiQWJ2a3JCZjNLcExlU2t3NkxZQkFCbUZsY2w5SmkwcHBDU2U5Y0R4bDdnY2Q0N3hYaVZHODUzVnBCVmVERnJXRHZUaVpvMlFneGZYNDNDckhvNFJLenF0d2JDMExZNnNITEQxZUdUelozTEN0SXk1NStvUk5Ub2JublcvWUxFeExaR0pQa3lSV1hwYzI1WVUvUW1UYVowUE9LQWlWVHRIbkxCUTRQeFAxS2lVVnlaWnpVd0xndjBVRnhzU1ZqWmdWVStCcllORk1BcWtmNEdjK21ObEVuYS9qOWxmTnBTZjlhcDZ6NmNzZ1lrWWlnNzJBU1VvYmt0Zmp2V2hQTEpuV29LVTVDNXUwNkpoNU5EeTdRZWtnUEdGcUtXMGtsS0pQa2dTcTBhL3Zackx1WXc3eEFZV25Ja1ByNWVTNTMrRnBZc000YlY3eExtMS9kVHZacmlWMVZhWlV5RGlCcmVCN2sxQXBiK0RmWW9ybUlXNHd1Sk5EbHMrdzBXYXNjRXpQOVhXVlhFTEsvYUVSb3RIekRxQmp6MWxJdzdNR0pxL1ZmNFRKOXdOOThGRmJVbEQxd3IvMmhqYXRlZmd0ZXUzZlg2V3dVNE5obURTMWpsTzF0YUt1T0oxcDdQZ1pMdkc5VXlpNmFRRVJDbFVSbGhMZll4VWp0YW1QbmpxUHpycnFLQm9ZYWRLSEh1WURMei9nQlJQL0d4cGNNRWlIWEhZb0hYekJ3ZlRDRGMvUitvZldpdXRYY0pWTFVUOWdSQlgxbmsxT2RpRDRDQTI0YWtzTWlNRUlVUGppbE5UakhidGtQenJqSzhmVUdoQVBZVllPeXhqTHFMMmpUYjEybC9JTWFwVmp2b0xWTGNxS1k2S1pqTU5BVnkzeWx3VHEyeHhvVW5Ob2dOejBCbUZSNFg2bGRGRDdZNjhicGNhd296VjMvVllkaHd5d1VVbU5XRjhTWTJvb3d1SE9rZC9mbWx5RXlwN0VHQmkrOGJYTHhpdEhucmJQTHFBQ2RiYjE2TlY3WDZhMVQ2eWxzVFZiWWJQcStkSlNoZGxqbGp6MU1kQXp1QmowUzdDbGVuRnZnTndEMThoK00ybmVxZnZSUG1jdG90YmNvWWlPNk1pclBrYjV0ZzV0ZW5pZDJseW9sYklNRFF6UUc3dlFmUDNFQnlhQWU4REVPQ1F1SHVySVJMRkxIc0M4Vjl5L2hOeGdMYW8zSHZvdFBmM2RwOGgyaWlwYk1ORUdyYWtEdU9TSVJoVkhYYnR5MmtTQ1NtR2E2THBySHhqSERobmE3NHJGZE5CRlIwWDZBL1cyWmZUNGt2dklieStvZEJqRVkwVjY2aVVCYk1LQnd5a25yaVNlTUloZGlmdkdQUWVpUmkvK2FBV0tYMXg1OTR2MC9NM0xxSW5SdGhyUG1VME0ycXdTa1hjYU5rakFxbnN2WXZoUnlRVWY0WVRveHF1c3dnZzlacHhvMVkzTGFHaDRpT2FmdlVnZU5xQ3ErMy91SS9UV3JTdXF5S3FqUTN4UEdOZUVsdWVXUFdFaVdYa2hzYWtCZFd6aXZPVnlPdlJUKzFlU2FtOGVwNVUvZXA1YWdhV0JzVDZuQnQ3ajVqeS95eTNIUExuTUJ6VVhCbWxjOCtKeFJSdENodWNacFRhbkZHWlE5a216b01OditDU2R2UFF5V3Z6RE02a3hLNlVtMVBnMzMzbWNzaTJkaW82OXpqMFk0Y1hFK2IyWUQ2OW52YTREODdFV1JCaGRyRkJpU1Fsa1l1Y2RNcDJHNTAycEpuenpnZGZJdFROSm8xd29tZUgxWFdGT1BBZXcxQmNDMEVuajU3azJlUy9FYlFvSXdUMExrSW5KNktDdm5VaHpUaitRYUtxam1hTjcwU0hYbnlMUFhTZW5kVDlaV1dsTmE4NGdOUStjVXZtQU1oTVM3eDFqc09VYmpsUlNES29CUWxxUUJGL3ZmZmljMmpWQlBkY3ZmVjFTSjVaS2c4R3pkRXRRVVZvdVN0MUZCaGxzcWxxeld0VGFieW9OSERDTm1uTUdvREo1SEp1cnlrdnN6R2w0MGN6SzF2aVlmdGhjcUxIT3ZlMVhxNnB0RXYrWmUremVDc1pIWUZUdUpvUmh4aW5YTlprVmNDR3FFTzVOblY5TGl6SkRPMWR0amtScm5OT01YaDJFWGl0UFJTTHdaclBQUG9JV25IWWt0ZVlQazIwNjVRK3lDNTdudldXcjZlMjducWZ3enJoc2d4TE11ZVBaMVRSODVIdzFOZndaKzk5MVFnZGJVbWZOWnRDQUJ3MGx4MEZxVmhLcE1xOVZxOVk0Qnd3S1FuVzFJUUM5Y0pJZGdodE9LbHpzWmwydnAwNGphSGJpcWdRMkFtTlRiam1hLzhVVGFlR0ZIeWRKSUhjTjFFMUxVdytaUzhOb0N5NDZqdGI4K05mMDdtMVBFVTNrdFA2Zkg4TTJLOURJc1F1cC9kb21Xbi9MMDVnaUYrK1pkTEhpOWk2Wk9ab2NtQ0VqTmh2VlNRQVZNYmd6UUZlREtpcUEyZ2ZKL2Nxak85Nm1Sa0ZxcEZIMHR1S1dBa3RuRE5MQzY4NmkyU2NzK3RCVVF4N0RIKzk3NlNqTlB2b0FldjJyZDFDeWRZSzIvT0J4ZW9jZWw3b0R1M3hyZEVzU3ZLWHV6Z25ZbHdLekNPcVMyNW82ZEpnWWFnaTVveE9QRnRSdVhJeEZpVnd6c0ZwaXZYWkg3U0dFbUNBck9NMVdNR0V6b2NOdnVvZ0dGOCtycWNjaTNRMWp0UFh4MTZpOWFwTVFPWFFna3ViUi9hbTE5NHdLL01EaU9iVDNOejlONjYrK0Q0RStBNU01QWtScHg2MFFjekRyZEtnVnAwNmdHVWFjajdKSjNYNGRPa1FWeFF2RzdZWUxHcy9FR1BzazVyTmM3YTlVdjJoakVwQnhQdmZ5azBCZ0g2aWVwM1hmL3lWdHV2TkplRWhiN2JzUW1tZ0Q1aDM1ekRHMDE1V25rWnVtcE02QWxEdFE0UzAzLzFLems3aVZrZGdrcFFiWVV6ZXJwbWZhakdoUFRKL0JOQi9UTFBHMmpSaC9yRWpNUnkrbHJqbEphbUFoVjArWmtIcS9WTXBVdWJwM09JcDlMejYrMHI1OHJFMnYvdG10dFAyT0o2aFZlSmxiZHcyNi9YR1lhK0xlWmZUR2wvOE5JcTN6L2dVWGpWS0M4R0pqMGkxYXdiRko4bGU0aWFLb1ZkbFpuYy9VV3kwZW8vYzREdzZST0pHYzJsY2lmVUVtNlRNS0hwTjB5ZGtlZWpUYmhZa2dwdG1NNWw4NENudXBtZkQyM3o5RS9xWFZFaG8wcnNUQVRNcEFyWDJBZ09WcmFlUDNIcXIzTkxDNWtYTVc5d0VyRkZ5TXMrUnJKbkFHdzZIQUJJMmZKbVpCRlVOY3FLVWsyWURwVVFPRU4xeFgxS3c4ZUxGRzJxVkdBN2JXYUtOcGIxb2RHdnA0bloxMDFtMmw4WitwTjdNQXpnbTJaQnltRE43S05QR3NBTGoxenNlbzkvYjI2djFacHk5RzNoQjBmQXk0Z2UxR1doOHdsb3JOWXJxbXpET2gzSzNoUFVscERLYzNjT1d1STRRMzB3bUFBTkZTOHlvNTVBVklpdFpvTU1DZTlFUHpHalRsZ05xMk9zKzlRZzA3UWE2SmhqbVNwSVBXazh6Q3lzNUJRWmFiMmlhV0dGdTZzbnEvTVg4YVVxbWh5dk5LY201VUVrU2UrZzlKdkpHT0dWYkJhTyt4K2dGYVJiMHl6ZG5RbU5QTzhsNHMxdzFjQlF3QlBPMUZsVEl5R1IvSk5IaW5QdS9aV2J0R3hySFdHQnVMTDRXVnhpNmJDbmJObUtIVWN4aDh0bnBUdlE0SDhvRzAydHJFcEo1TVZZcXJYb3RqQ3FtWmxHVWdwb3FMcTY2UmRxb2tsQUU2QWFpcEVQVkpqTG5NMGl4alZsbndJYWpzSkM1Q2xSMGtLZTZhQXpUQWhNUkVVRkt3aGdxaXo2MEFsT0N4U3drQjVSSThZMGRoNHg2aTNESFhoNDI3ZnZHYUpqb1ZxU3l6cjRURW1pQXNGVUNGOUN4YVVaY2tWRkpSaWptdVpjb2hUVjVrT2RNYm85QkZSdEJTdDkxY09KL2FVRlBaWElyMkpMV2tMSU5rY0pDWVRjVExoU0tsd1FQbjFzdGtJQkk3Y1lyTUM1VXNkbzM0R21aSW1LTmplWmdFYXVJQTNlaUt3M0NXOTErWmxBUDQzTElCMjhtcW1EREJNU2ZVWlhJcUpyWlEvaTV5eUwzM2tUdFRqanVheG0rRGFzZkNKOEZkaXlwQ2FwNTdCb3I1QTRCeEdTdUhKeHc0L2lQVk91TnZicVJpODFaUjl4aWdkSDNhcGJUUUIwNDNxajV1NTZ6YWJ3b0RaNXZnNWhxUUhEeWZjOXc2MUcrc1JpVFdSV0RrQmx0RGIxTmsrYlpEN3ozN2VEWE96WjFEVXo1N0pwSmVNTW54T1BTWWw4ZktPZDVOMEJ0dXVOODY5emhxN2pPcmVyLzM3RytvV1dnVjJjUWt3SlJlc1I5WUNKVkRrYTh6b2R6Y0ZxcFZEU3pJS3BZS0lBYUk2NGJlTTMzQW1NRk1rTFNHZ2t1RTZDNWxUejhJNGRWWndjakZmMHpoMEFNeExxK1lZRERPTmlKUTF4TUdoU1AzcFJsWExLbUp6UUx0dU9zUnFUaEo3YVVrVks0bmU4VGdQZFhWNmFpV3BPYkR6VXJRalVTeXhFUnlXRmpzQ2Z1eVNtTFk0SmhVQ1JPQzBWZ1NTUXFuTXJhQnhoNzl6N29pbFRab3hqWGZKSHZhR2FpbVFJV3hFN2VPeCtZeVI5SE1xWG4rR2JUZzVyOG1OM1ZLcFZaYjducVkwczJib1BhWlNxSlV0UmlmYkovM1pmc3N2eU9VbXFXV284QWNBMG1zMS9Rb0tUU2cya0pxR01IWEhvOUxaSWxUVGxZdXVDcFdZcm9IYnFQT2duMXA0SWpmMS9GVGhtbms4MSttN0p3bGxMMzBBdlhXdjhYSkMrTFV2alR5c1ZIc3AyWlR2OUZrTDc5QnZkdnY0UnhQeW5rK0MxSDdyS2djdzB4UzF5ZmRRdk5IaVhHUXJTMTBONEJXc05rd054MTdRc3Q5MFBnbHpnUEdtTmQxQnRmQ2RpR05PWi94RlNDdFV6TzNlcFQvK050VWZPRmJsT3kzV0lsR1MrZnNSZW1uRnREZ252WXhlSC84K1JkcDRvWi9SQTQ1UVFYU2NrNkFKYmxGVGhtOEk5MDZvblRlcWd1MXZwdFRWVDBXR3NxNnZrb1J3TElJSkJjd2VxN1pnZW1UbUIxQWNUNzFjWE1YM1d1ZnhHVHk5anZVL3NGWGlNNzRQQTJkY2lGVXFrRWZlSUR3c1ovOUYyWC9jU2NsNDRnK0FKV1V0Y0dVcXZvK0JTUjk3SzJIQjJwZ1dVNVVCZkVJenBhZnVqRFdPVmJCcUg0c1RvbGpjYnZmMjBGVlRXektWS0pCaDNzZHVWZUZ6VkJuQnlRMWlKMUVQLzhlN1h6cUo5UTQ4US9KSEh3Y05lWXRSRUtkeWp3aDc4S2R2ME1Uenl5bGJPa3Z5RzNjUW81am5ITmtxUDVjSlJKcjZMeGliVEFGTTMyNFp2UllWK0tYNVBoU2hrY3ZVdE9rQ2hMcnFhU2lmUm1ydFQrNXQ3UHYyN1Z0UWEzbWs5MzRxdktJdlZRRktrUmd1bmRpbGpkM3JDVjY0R2JpQXAwZm1rbkZ3QlNBd3JPSk5vV3RZMkFROGtRRWFpK0FPTjNWVFdNb3YxSUdsWnhKamRoTmN5R0NlS05XNStMdExWRm5sQkcra3AxNlJtZGNFVUZwcmQ3RTRNeDlkOVVMTktCN2Jua3BPZklQeUd4NU9kcDhYNWs2QW1QZER1VzNZdTRML3A2R1pIcjhiVXAyd3NCekk2a1c1NGxGeW9GYUU5ZnlJNUVXY1RSSDlVSHRqS3U4QVczb3RLUDZLbVlJNU10WDYzcmlCWlUrOXNvbVRtVFpFN0lxT25ISmhiYVVHNGphOWpyNW5Sc3JMaldQWFVKK2NBQmM5TUpKa3dZWng4M3dmaDZxWTFHc01ieTc1ZWR5ajM5Q0FFZUVkZVE5eDllNlpwS3dwdUFlOTdLMm1nVS9OenllUzJDNExxWWtOUFdjMFFwVXRtRTc1UysvSlo5c0sxdVBvU0hLRG9rTktwdThtSWxnMk4weXdUeHBFc2FwOTlMOXRUWU96U2IzNldzUmg1QjlOMEY0QzhyRGJRQWFQZ0NWYWtFS1RiNDJjcC9ySU53SVkyMHp5QnF5Rm9OakFDQStPQVlWVFFFQWcyZ1F4enNHbUVGVlVlZjg0bWNwblR1Tm9yYlJqZ2RmUU83dHF4MkF4TTlnWWs0cHF1T2hpbmtYRXpwWlVHcjdHSkN3MjdjUzhZdVZQNlh3ZXhlQjZPbnlUbnI0T1ZUa2JjcVgvUlBjODdnWWFyMmxpQjhjQ2k4eFMzNUJ3YjhBeUZRdHFhYzdYNDVUeXUzU3JvajA1dzJrZGNINGM0b2NTY0hVcTYrZ29WTlByRzE5dkVjNy92VVhFc09DMldNSXlaeHRtUGNRaklmNEc1SkpqSlFEckRYU09JOUsvQTdxUG5rVHRUNTVIYWNmUW54cjhRWGtGNTFNK2VzL3A3RDZDZFQ3MWt0b01ENXV6M2t6VnVodk4vaFRyRlJWQzlVQ3duY3poRHc0ajhoditXQ25yb045aTA5YlpHZnZROGt4SjlETTA4K21aUHBJVFMrbTJuVEQzYkRYdGxSbm9zZXFuSmwrK3BDZHdFNnovVnVqenlRdWpGb0JGUjFIb2xMamZSU01FQWs1Vk96dzgyRmpYMkkzVlVXQVN1bUxDUlJsc0wzUE92aVduSUVBdElLRGE2ZzlKa1hIVXQyTFd4RncwcUlJNk5JbTFCbnVmSGdhZjh5bTNiWXBlRy9MOSsraXpoMUx3UmdVRGZFaHpjZTluRlJCVFYwTUxJeGQ1cXl6cjZEd01jcEFKQitVM21wamJVejRxeVBPMzN3QUdvVk42ZEZmNGhKeDM0b2NSUEFSYlZBLzBOaysxS1duZTcvRFVKakVuNXIzdXgvRjJFN2E5ZyszVSsvaDUwQlBBd3l2NngrQnpQdThaRlk0TytnZXhhdC9VZ0lUQ2FlOCswMWthOC9TSXdhRzgyVGpFOVI3WkRuWlJlZFRzdUFFMk4xYzJ2WGJyZGxsbFQwWGhDZVAzSDJyQlJ2YnVvWGEvL01JVGR6L01KbDNKNkJORGRuTDhkNlFjMWFWT3R1bWovT1ZOVWJ6cU5seHkwbXpVSFo3RGVZelV6TjRWa05XRHl1QVpKOHUzMlcwR0dsVWpGRFBGdm1SQThtT0hJUU1mclpLalZNb05HT2NPaFV1VDRzb29qeXFJbEpRTmZWZTg4RU0zZys3OElCdkEyYjhQYUxObTZtOVlnV1pWUWp5TzFBL3lhQjJ2VlQ3cktubnJJNUZWRWZTbjBURU1zNjJ2RW1IQ2FNNi8zTHEzOEhGLzZVQ2kyb29nSFNYSzRWMG0yZ2d0R29YTll0TmxZRklnUFR4ZzdxUE5pWGJmeTlPUXh3SDk3MTQzZ1hYNGJZSmZlaGdQSXFuQmFvQ29RMUNPMmhkVkRzek1DbExCVXdCVUh4ZTlKcG91QWNFUGppTllrYUxkWVZKZm5UWVM5Zi91ZXdEbW03NGhxelJ2UmkxdU5rR0tZNUtLa3JMNmZkZHVlNlhXZ1JWNWRTbHpudVZVUENGZWtXVUFpeURnUXA1eVd5NEFNUFhlWXc3UlF5dm1xSGJzb1RJQ1NCN1VnNGQvRTRTeitQUDVJd0p1eWt5b3NRWVF2QzMrVnlBbVV2dTI5Uzk5ek5YaE5UZFkxQlpZc2tGY1NRUm5GRUpjdHdROWRLZmtaSCtJcTYyRGhNbHhTcG1RcXFxVnVqUDIwTGNOUVQ1dVZzZUExcnBvalgrZVhtZkE2RG1teGIrdjlDZHZnS3hXbnNoQVVvU0wvbFozR3R3OVB2Q291WFhyOXZOWm9zSC8raXZrR2grRjNWQ1E2VXFSc2NST0laVkV1dDd6WmhvUHRHR2ZQUlkzTXZ2RUwzODVrUEFjZ1VxNTkrQUFCZytBQm9rd2g0dGlDcHlENEtoaXI2RGR4QkJ3Z1FraVQ1dlF5VjdUdXhLN2F1SlNnU2Z0NUFzOEM5Um9JN1dYWDN3aTM5ejQyUVo5aDM1WTM5NmdYWG1sdURNaU5pWlZVQlNMcE52VmJzQ3M1VVhreU1DNDVxRTVlMElseGVrVWxXb2ZVVlEzQWNHMWNOMVIyM05DekJJRHRjY0dta2NFcHRndTRQOXRMRjJsMjFMd1RHd29qY0FZSTNORU44Vmk1Yi83VTlwTitYYzVRalBYcmszYk90YXFPTUYwSi9wN0VBNEkrZTZvSnozajdXbUNsYmxEemZscTRnRVluVWNMRFZRQUREUmtRQU1TODlMbjBjbkFqQ1FGTFdSaGJBakFUQS93UUJoeHdJUUhxK3QzcEJCaGF5NTFYZUhiczk3d3pjY3RQeTZUYnRpMkhPWVlZYTk4bzM1elpDZllreDZpazNjRWZDTSswT1JoeUU5cC9sSnFZcDFRVVc5b2VSU1VSVlZXdXdJZ29BREVBQTB2UWlVK3phZUkyTmhGUXdkcndBbjBJK3o5UEQyVHR2THg4MTdmc0t1OHQzV0szbmVldFFXOXIvM1ducnJ1M3VpL1hlOEMvMXBwTS91SEFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTWpjd0lpQm9aV2xuYUhROUlqTTJNQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTNNQ0F6TmpBaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStEUW84Y0dGMGFDQmtQU0pOTVRNMUlESXhOaTQzTVRWRE1UZ3pMamN3TkNBeU1UWXVOekUxSURJeU15NHhPRFlnTVRjNExqTTNOQ0F5TWpNdU1UZzJJREV6TVM0d056bERNakl6TGpFNE5pQTRNeTQzT0RNMElERTRNeTQzTURRZ05EVXVORFF5T1NBeE16VWdORFV1TkRReU9VTTROaTR5T1RVM0lEUTFMalEwTWprZ05EWXVPREV6TWlBNE15NDNPRE0wSURRMkxqZ3hNeklnTVRNeExqQTNPVU0wTmk0NE1UTXlJREUzT0M0ek56UWdPRFl1TWprMU55QXlNVFl1TnpFMUlERXpOU0F5TVRZdU56RTFXaUlnWm1sc2JEMGlkMmhwZEdVaUx6NE5Danh3WVhSb0lHUTlJazB4TXpRdU9UazNJREl4TVM0d016RkRNVGd3TGpRMk9DQXlNVEV1TURNeElESXhOeTR6TXpFZ01UYzFMakl6TlNBeU1UY3VNek14SURFek1TNHdOemxETWpFM0xqTXpNU0E0Tmk0NU1qSXlJREU0TUM0ME5qZ2dOVEV1TVRJMk1pQXhNelF1T1RrM0lEVXhMakV5TmpKRE9Ea3VOVEkxSURVeExqRXlOaklnTlRJdU5qWXlPQ0E0Tmk0NU1qSXlJRFV5TGpZMk1qZ2dNVE14TGpBM09VTTFNaTQyTmpJNElERTNOUzR5TXpVZ09Ea3VOVEkxSURJeE1TNHdNekVnTVRNMExqazVOeUF5TVRFdU1ETXhXaUlnYzNSeWIydGxQU0lqUVRNeE9UVkNJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqSXVNRGMzSWlCemRISnZhMlV0YldsMFpYSnNhVzFwZEQwaU1UQWlMejROQ2p4d1lYUm9JR1E5SWsweE16UXVPVGt5SURBdU1EQXpNalkxTXpoRE1UQTRMakk1TmlBd0xqQXdNekkyTlRRMklEZ3lMakU1T0RZZ055NDJPVEEyTlNBMk1DNHdNREVnTWpJdU1Ea3pNME16Tnk0NE1ETTFJRE0yTGpRNU5pQXlNQzQxTURJMElEVTJMamsyTnpFZ01UQXVNamcxTlNBNE1DNDVNVGd4UXpBdU1EWTROamt3TXlBeE1EUXVPRFk1SUMweUxqWXdOVEF5SURFek1TNHlNalFnTWk0Mk1ESTBPU0F4TlRZdU5qVXhRemN1T0RBNU9Ua2dNVGd5TGpBM055QXlNQzQyTmpRNElESXdOUzQwTXpNZ016a3VOVFF4TlNBeU1qTXVOelkxUXpVNExqUXhPREVnTWpReUxqQTVOeUE0TWk0ME5qZzRJREkxTkM0MU9ESWdNVEE0TGpZMU1pQXlOVGt1TmpReFF6RXpOQzQ0TXpZZ01qWTBMamNnTVRZeExqazNOaUF5TmpJdU1UQTFJREU0Tmk0Mk5ERWdNalV5TGpFNE5rTXlNVEV1TXpBMklESTBNaTR5TmpZZ01qTXlMak00T0NBeU1qVXVORFkzSURJME55NHlNaklnTWpBekxqa3hNME15TmpJdU1EVTFJREU0TWk0ek5UZ2dNalk1TGprM015QXhOVGN1TURFM0lESTJPUzQ1TnpVZ01UTXhMakE1TWtNeU5qa3VPVGMzSURFeE15NDROemdnTWpZMkxqUTROaUE1Tmk0NE16RTNJREkxT1M0M01ETWdPREF1T1RJM00wTXlOVEl1T1RJZ05qVXVNREl5T1NBeU5ESXVPVGM0SURVd0xqVTNNVGNnTWpNd0xqUTBNeUF6T0M0ek9UZzVRekl4Tnk0NU1Ea2dNall1TWpJMklESXdNeTR3TWpnZ01UWXVOVGNnTVRnMkxqWTFJRGt1T1RneVF6RTNNQzR5TnpNZ015NHpPVFF3TlNBeE5USXVOekU1SURBdU1EQXpNalkxTXpNZ01UTTBMams1TWlBd0xqQXdNekkyTlRNNFZqQXVNREF6TWpZMU16aGFUVEV6TkM0NU9USWdNakUzTGpBMU1VTXhNVGN1TkRnMElESXhOeTR3TlNBeE1EQXVNelk1SURJeE1pNHdNRGNnT0RVdU9ERXhOeUF5TURJdU5UWkROekV1TWpVME5TQXhPVE11TVRFeklEVTVMamt3T1NBeE56a3VOamczSURVekxqSXdPVGNnTVRZekxqazNPVU0wTmk0MU1UQTBJREUwT0M0eU55QTBOQzQzTlRneklERXpNQzQ1T0RZZ05EZ3VNVGMwT0NBeE1UUXVNekZETlRFdU5Ua3hOQ0E1Tnk0Mk16UTVJRFl3TGpBeU16TWdPREl1TXpFM09TQTNNaTQwTURReUlEY3dMakk1TmtNNE5DNDNPRFV4SURVNExqSTNOREVnTVRBd0xqVTFPU0ExTUM0d09EY3pJREV4Tnk0M016RWdORFl1Tnpjd09FTXhNelF1T1RBeklEUXpMalExTkRRZ01UVXlMamN3TXlBME5TNHhOVGN5SURFMk9DNDROemdnTlRFdU5qWXpPVU14T0RVdU1EVTBJRFU0TGpFM01EY2dNVGs0TGpnNElEWTVMakU0T1RFZ01qQTRMall3TnlBNE15NHpNalpETWpFNExqTXpOQ0E1Tnk0ME5qSTVJREl5TXk0MU1qWWdNVEUwTGpBNE15QXlNak11TlRJMklERXpNUzR3T0RWRE1qSXpMalV5TmlBeE5ESXVNemMySURJeU1TNHlNemNnTVRVekxqVTFOaUF5TVRZdU56ZzRJREUyTXk0NU9EZERNakV5TGpNek9TQXhOelF1TkRFNElESXdOUzQ0TVRnZ01UZ3pMamc1TmlBeE9UY3VOVGszSURFNU1TNDROemxETVRnNUxqTTNOaUF4T1RrdU9EWXpJREUzT1M0Mk1UVWdNakEyTGpFNU5TQXhOamd1T0RjMElESXhNQzQxTVRWRE1UVTRMakV6TWlBeU1UUXVPRE0ySURFME5pNDJNVGtnTWpFM0xqQTFPU0F4TXpRdU9Ua3lJREl4Tnk0d05UaFdNakUzTGpBMU1Wb2lJR1pwYkd3OUlpTkJNekU1TlVJaUx6NE5Danh3WVhSb0lHUTlJazB4TXpRdU5qWWdNakV1T1RVek1Vd3hNekV1TkRVeElETXlMakUwTmpSTU1USTRMakkwTVNBME1pNHpNemsyU0RFME1TNHdOelpNTVRNM0xqZzNJRE15TGpFME5qUk1NVE0wTGpZMklESXhMamsxTXpGYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0RRbzhjR0YwYUNCa1BTSk5NVFE0TGprM055QXpOUzQxTWprM1F6RTBOeTQ0TkRnZ016VXVOVE13TVNBeE5EWXVOelV4SURNMUxqZzVNRGdnTVRRMUxqZzFOQ0F6Tmk0MU5UWXpUREV6TkM0Mk5pQXdUREV5TXk0ME5pQXpOaTQxTlRZelF6RXlNaTQxTmlBek5TNDRPVE15SURFeU1TNDBOaklnTXpVdU5UTXlPQ0F4TWpBdU16TXlJRE0xTGpVeU9UZERNVEU0TGpnNU9DQXpOUzQxTWprM0lERXhOeTQxTWpJZ016WXVNRGd6TVNBeE1UWXVOVEEzSURNM0xqQTJPRE5ETVRFMUxqUTVNeUF6T0M0d05UTTFJREV4TkM0NU1qTWdNemt1TXpnNU55QXhNVFF1T1RJeklEUXdMamM0TTBNeE1UUXVPVEl6SURReUxqRTNOaklnTVRFMUxqUTVNeUEwTXk0MU1USTBJREV4Tmk0MU1EY2dORFF1TkRrM05rTXhNVGN1TlRJeUlEUTFMalE0TWpnZ01URTRMamc1T0NBME5pNHdNell5SURFeU1DNHpNeklnTkRZdU1ETTJNa014TWpFdU5ERXhJRFEyTGpBek1Ea2dNVEl5TGpRMk1TQTBOUzQzTURVZ01USXpMak0wTXlBME5TNHhNREkyUXpFeU5DNHlNalVnTkRRdU5UQXdNU0F4TWpRdU9EazJJRFF6TGpZME9Ua2dNVEkxTGpJMk5TQTBNaTQyTmpZelNERXlOUzR6TURaTU1UTTBMalkyTXlBeE1pNDVNems1VERFME5DNHdNRGNnTkRJdU5qWTJNMGd4TkRRdU1ETXhRekUwTkM0ek9UY2dORE11TlRJNU9DQXhORFF1T1RrM0lEUTBMakk0TURjZ01UUTFMamMyT0NBME5DNDRNemc1UXpFME5pNDFNemtnTkRVdU16azNNaUF4TkRjdU5EVXhJRFExTGpjME1Ua2dNVFE0TGpRd09DQTBOUzQ0TXpZMFF6RTBPUzR6TmpRZ05EVXVPVE13T0NBeE5UQXVNekk1SURRMUxqYzNNVFFnTVRVeExqSWdORFV1TXpjMU1rTXhOVEl1TURjeElEUTBMamszT0RrZ01UVXlMamd4TkNBME5DNHpOakEzSURFMU15NHpOVElnTkRNdU5UZzJNME14TlRNdU9EZzVJRFF5TGpneE1pQXhOVFF1TWlBME1TNDVNVEEySURFMU5DNHlOVEVnTkRBdU9UYzRNa014TlRRdU16QXlJRFF3TGpBME5UZ2dNVFUwTGpBNU1pQXpPUzR4TVRjeklERTFNeTQyTkRNZ016Z3VNamt4T0VNeE5UTXVNVGswSURNM0xqUTJOak1nTVRVeUxqVXlNaUF6Tmk0M056UTJJREUxTVM0M0lETTJMakk1TURWRE1UVXdMamczT0NBek5TNDRNRFkxSURFME9TNDVNelVnTXpVdU5UUTRNU0F4TkRndU9UYzBJRE0xTGpVME0wd3hORGd1T1RjM0lETTFMalV5T1RkYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0RRbzhjR0YwYUNCa1BTSk5OVFV1TWpreE9DQTFOQzR4TlRZeVREWXdMalEwTURZZ05qTXVOVFkyTVV3Mk5TNDFPRGsxSURjeUxqazNOa3czTkM0Mk5qVXpJRFkwTGpFMk1qaE1OalF1T1RjMU1TQTFPUzR4TmpJNFREVTFMakk0TkRrZ05UUXVNVFl5T1V3MU5TNHlPVEU0SURVMExqRTFOakphSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrRFFvOGNHRjBhQ0JrUFNKTk56VXVNamszTXlBMU15NDVNakk0UXpjMExqVXdNaklnTlRRdU56QXdNU0EzTXk0NU9EZzVJRFUxTGpjd056UWdOek11T0RNMUlEVTJMamM1TWpkTU16a3VNekF6TWlBek9DNDJNVEk1VERVNExqQXdNemtnTnpJdU1UVXlOa00xTmk0NE9EQXlJRGN5TGpNd05qSWdOVFV1T0RNNE9TQTNNaTQ0TVRFNElEVTFMakF6T0RJZ056TXVOVGt5TmtNMU5DNHpNakkzSURjMExqSTFPRFFnTlRNdU9EQTVOQ0EzTlM0eE1ESXpJRFV6TGpVMU5ESWdOell1TURNeU1rTTFNeTR5T1RnNUlEYzJMamsyTWlBMU15NHpNVEUySURjM0xqazBNakVnTlRNdU5Ua3dPQ0EzT0M0NE5qVTBRelV6TGpnM0lEYzVMamM0T0RjZ05UUXVOREExTVNBNE1DNDJNVGs0SURVMUxqRXpOelVnT0RFdU1qWTRRelUxTGpnM0lEZ3hMamt4TmpJZ05UWXVOemN4TnlBNE1pNHpOVFkySURVM0xqYzBORE1nT0RJdU5UUXhNVU0xT0M0M01UWTVJRGd5TGpjeU5UWWdOVGt1TnpJeklEZ3lMalkwTnpFZ05qQXVOalV5T0NBNE1pNHpNVFF5UXpZeExqVTRNalVnT0RFdU9UZ3hNeUEyTWk0ME1EQXpJRGd4TGpRd05qZ2dOak11TURFMk9DQTRNQzQyTlRNMFF6WXpMall6TXpNZ056a3VPU0EyTkM0d01qUTVJRGM0TGprNU5qWWdOalF1TVRRNE55QTNPQzR3TkRFNFF6WTBMakkzTWpZZ056Y3VNRGczSURZMExqRXlOQ0EzTmk0eE1UYzJJRFl6TGpjeE9USWdOelV1TWpNNU1rdzJNeTQzTXprNElEYzFMakl4TlRsTU5EZ3VOekV4T1NBME55NDNOamsxVERjMkxqazNOVGdnTmpJdU16WTVORlkyTWk0ek5EazBRemMzTGprMU5UVWdOakl1Tnprek1TQTNPUzR3TlRFMUlEWXlMamt6TlRFZ09EQXVNVEUyTnlBMk1pNDNOVFkwUXpneExqRTRNVGtnTmpJdU5UYzNOaUE0TWk0eE5qVXpJRFl5TGpBNE5qWWdPREl1T1RNME9DQTJNUzR6TkRrMFF6Z3pMalExT1RJZ05qQXVPRFkyTmlBNE15NDROemc0SURZd0xqSTROamdnT0RRdU1UWTROeUExT1M0Mk5EUkRPRFF1TkRVNE5pQTFPUzR3TURFeUlEZzBMall4TXlBMU9DNHpNRGcySURnMExqWXlNamNnTlRjdU5qQTJPVU00TkM0Mk16SXpJRFUyTGprd05UTWdPRFF1TkRrM01pQTFOaTR5TURnNElEZzBMakl5TlRFZ05UVXVOVFU0TjBNNE15NDVOVE1nTlRRdU9UQTROaUE0TXk0MU5EazJJRFUwTGpNeE9ERWdPRE11TURNNE55QTFNeTQ0TWpFNVF6Z3lMalV5TnpjZ05UTXVNekkxTnlBNE1TNDVNVGsxSURVeUxqa3pNemtnT0RFdU1qVXdNU0ExTWk0Mk5qazRRemd3TGpVNE1EWWdOVEl1TkRBMU5pQTNPUzQ0TmpNMElEVXlMakkzTkRNZ056a3VNVFF3T1NBMU1pNHlPRE0zUXpjNExqUXhPRE1nTlRJdU1qa3pNU0EzTnk0M01EVWdOVEl1TkRReklEYzNMakEwTXpFZ05USXVOekkwTlVNM05pNHpPREV5SURVekxqQXdOaUEzTlM0M09EUXhJRFV6TGpReE16VWdOelV1TWpnM0lEVXpMamt5TWpoSU56VXVNamszTTFvaUlHWnBiR3c5SWlNd01FRXhPVUVpTHo0TkNqeHdZWFJvSUdROUlrMHlNaTQyTURZM0lERXpNUzQwTWpKTU16TXVNVEF6TlNBeE16UXVOVE0xVERRekxqWXdNRFFnTVRNM0xqWTFNbFl4TWpVdU1UZzVURE16TGpFd016VWdNVEk0TGpNd05Vd3lNaTQyTURZM0lERXpNUzQwTWpKYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0RRbzhjR0YwYUNCa1BTSk5Nell1TlRnME5TQXhNVGN1TlRFeVF6TTJMalU0TkRjZ01URTRMall3T1NBek5pNDVOVE0xSURFeE9TNDJOelVnTXpjdU5qTTBPQ0F4TWpBdU5UUTVUREFnTVRNeExqUXhPVXd6Tnk0Mk5USWdNVFF5TGpJNU5VTXpOaTQ1TmpRNUlERTBNeTR4TnlBek5pNDFPVEl6SURFME5DNHlNemtnTXpZdU5Ua3hNeUF4TkRVdU16TTVRek0yTGpVNU1UTWdNVFEyTGpjek1pQXpOeTR4TmpFeklERTBPQzR3TmpnZ016Z3VNVGMxT0NBeE5Ea3VNRFV6UXpNNUxqRTVNRE1nTVRVd0xqQXpPU0EwTUM0MU5qWXpJREUxTUM0MU9USWdOREl1TURBeE1TQXhOVEF1TlRreVF6UXpMalF6TlRnZ01UVXdMalU1TWlBME5DNDRNVEU0SURFMU1DNHdNemtnTkRVdU9ESTJNeUF4TkRrdU1EVXpRelEyTGpnME1Ea2dNVFE0TGpBMk9DQTBOeTQwTVRBNElERTBOaTQzTXpJZ05EY3VOREV3T0NBeE5EVXVNek01UXpRM0xqUXdOek1nTVRRMExqSTRPQ0EwTnk0d056STBJREUwTXk0eU5qUWdORFl1TkRVeE15QXhOREl1TkRBMFF6UTFMamd6TURNZ01UUXhMalUwTkNBME5DNDVOVEk0SURFME1DNDRPU0EwTXk0NU16Y2dNVFF3TGpVeU9WWXhOREF1TkRrMVRERXpMak14TVRZZ01UTXhMalF4T1V3ME15NDVNemNnTVRJeUxqTXpObFl4TWpJdU16QTJRelEwTGprMU16RWdNVEl4TGprME9TQTBOUzQ0TXpJZ01USXhMakk1T0NBME5pNDBOVFVnTVRJd0xqUTBNVU0wTnk0d056Z2dNVEU1TGpVNE5DQTBOeTQwTVRVeUlERXhPQzQxTmpFZ05EY3VOREl4TVNBeE1UY3VOVEV5UXpRM0xqUXlNVEVnTVRFMkxqZ3lNaUEwTnk0eU9ERXlJREV4Tmk0eE16a2dORGN1TURBNU15QXhNVFV1TlRBeVF6UTJMamN6TnpVZ01URTBMamcyTlNBME5pNHpNemtnTVRFMExqSTROU0EwTlM0NE16WTJJREV4TXk0M09UaERORFV1TXpNME15QXhNVE11TXpFZ05EUXVOek0zT1NBeE1USXVPVEl6SURRMExqQTRNVFlnTVRFeUxqWTFPVU0wTXk0ME1qVXlJREV4TWk0ek9UVWdOREl1TnpJeE9DQXhNVEl1TWpVNUlEUXlMakF4TVRRZ01URXlMakkxT1VNME1TNHpNREE1SURFeE1pNHlOVGtnTkRBdU5UazNOU0F4TVRJdU16azFJRE01TGprME1URWdNVEV5TGpZMU9VTXpPUzR5T0RRNElERXhNaTQ1TWpNZ016Z3VOamc0TkNBeE1UTXVNekVnTXpndU1UZzJNU0F4TVRNdU56azRRek0zTGpZNE16Z2dNVEUwTGpJNE5TQXpOeTR5T0RVeklERXhOQzQ0TmpVZ016Y3VNREV6TkNBeE1UVXVOVEF5UXpNMkxqYzBNVFVnTVRFMkxqRXpPU0F6Tmk0Mk1ERTJJREV4Tmk0NE1qSWdNell1TmpBeE5pQXhNVGN1TlRFeVNETTJMalU0TkRWYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0RRbzhjR0YwYUNCa1BTSk5OVFV1TnpZNUlESXdPQzQwT0RWTU5qVXVORFE0T1NBeU1ETXVORGcxVERjMUxqRXpPVEVnTVRrNExqUTROVXcyTmk0d05qTTBJREU0T1M0Mk56Rk1OakF1T1RFME5TQXhPVGt1TURnNFREVTFMamMyT1NBeU1EZ3VORGcxV2lJZ1ptbHNiRDBpSXpBd1FURTVRU0l2UGcwS1BIQmhkR2dnWkQwaVRUVTFMalV5T1NBeE9Ea3VNRFUxUXpVMkxqTXlOaklnTVRnNUxqZ3pNaUExTnk0ek5qUTNJREU1TUM0ek16UWdOVGd1TkRnME5DQXhPVEF1TkRneVRETTVMamM0TURNZ01qSTBMakF5TlV3M05DNHpNVGc1SURJd05TNDROVGhETnpRdU5EY3lOQ0F5TURZdU9UVWdOelF1T1RnNE1TQXlNRGN1T1RZeklEYzFMamM0T0RFZ01qQTRMamMwTlVNM05pNDRNRGM1SURJd09TNDNNRGdnTnpndU1UYzNNaUF5TVRBdU1qUXpJRGM1TGpVNU9UZ2dNakV3TGpJek0wTTRNUzR3TWpJMElESXhNQzR5TWpNZ09ESXVNemcwSURJd09TNDJOeUE0TXk0ek9TQXlNRGd1TmprelF6ZzBMak01TlRrZ01qQTNMamN4TnlBNE5DNDVOalUwSURJd05pNHpPVFFnT0RRdU9UYzFNeUF5TURVdU1ERXpRemcwTGprNE5USWdNakF6TGpZek1TQTROQzQwTXpRMklESXdNaTR6TURJZ09ETXVORFF5TnlBeU1ERXVNekV4UXpneUxqWTNNalFnTWpBd0xqVTNOU0E0TVM0Mk9Ea3hJREl3TUM0d09EVWdPREF1TmpJME15QXhPVGt1T1RBM1F6YzVMalUxT1RRZ01UazVMamN5T0NBM09DNDBOak0zSURFNU9TNDROamtnTnpjdU5EZ3pOeUF5TURBdU16RXhURGMzTGpRMU9UY2dNakF3TGpJNE1VdzBPUzR4T1RVNElESXhOQzQ0T0RGTU5qUXVNak13TmlBeE9EY3VORE0xUXpZMExqWTROeUF4T0RZdU5EZzFJRFkwTGpnek1qa2dNVGcxTGpReU1TQTJOQzQyTkRnNElERTROQzR6T0RoRE5qUXVORFkwTnlBeE9ETXVNelUxSURZekxqazFPVFFnTVRneUxqUXdNU0EyTXk0eU1EQTRJREU0TVM0Mk5UVkROakl1TmprNE5pQXhPREV1TVRZM0lEWXlMakV3TWpRZ01UZ3dMamM0SURZeExqUTBOakVnTVRnd0xqVXhOVU0yTUM0M09EazRJREU0TUM0eU5URWdOakF1TURnMk5DQXhPREF1TVRFMUlEVTVMak0zTlRrZ01UZ3dMakV4TlVNMU9DNDJOalUwSURFNE1DNHhNVFFnTlRjdU9UWXhPQ0F4T0RBdU1qVWdOVGN1TXpBMU15QXhPREF1TlRFMFF6VTJMalkwT0RnZ01UZ3dMamMzTnlBMU5pNHdOVEl5SURFNE1TNHhOalFnTlRVdU5UUTVOaUF4T0RFdU5qVXlRelUxTGpBME5qa2dNVGd5TGpFek9TQTFOQzQyTkRneUlERTRNaTQzTVRnZ05UUXVNemMySURFNE15NHpOVFpETlRRdU1UQXpPQ0F4T0RNdU9Ua3pJRFV6TGprMk16VWdNVGcwTGpZM05pQTFNeTQ1TmpNeUlERTROUzR6TmpaRE5UTXVPVFl5T1NBeE9EWXVNRFUySURVMExqRXdNalVnTVRnMkxqY3pPU0ExTkM0ek56UXhJREU0Tnk0ek56ZEROVFF1TmpRMU55QXhPRGd1TURFMElEVTFMakEwTkNBeE9EZ3VOVGt6SURVMUxqVTBOakVnTVRnNUxqQTRNa3cxTlM0MU1qa2dNVGc1TGpBMU5Wb2lJR1pwYkd3OUlpTXdNRUV4T1VFaUx6NE5Danh3WVhSb0lHUTlJazB4TXpVdU16TTNJREkwTUM0eU1qUk1NVE00TGpVME15QXlNekF1TURNMVRERTBNUzQzTlRJZ01qRTVMamcwTVVneE1qZ3VPVEU0VERFek1pNHhNamNnTWpNd0xqQXpOVXd4TXpVdU16TTNJREkwTUM0eU1qUmFJaUJtYVd4c1BTSWpNREJCTVRsQklpOCtEUW84Y0dGMGFDQmtQU0pOTVRJeExqQXhNaUF5TWpZdU5qVXhRekV5TWk0eE5ERWdNakkyTGpZMU1TQXhNak11TWpNNUlESXlOaTR5T1RNZ01USTBMakV6T1NBeU1qVXVOak14VERFek5TNHpOQ0F5TmpJdU1UZ3hUREUwTmk0MU15QXlNalV1TmpFNFF6RTBOeTQwTXlBeU1qWXVNamcxSURFME9DNDFNekVnTWpJMkxqWTBOeUF4TkRrdU5qWTBJREl5Tmk0Mk5EaERNVFV4TGpBNU9DQXlNall1TmpRNElERTFNaTQwTnpRZ01qSTJMakE1TkNBeE5UTXVORGc1SURJeU5TNHhNRGxETVRVMExqVXdNeUF5TWpRdU1USTBJREUxTlM0d056TWdNakl5TGpjNE9DQXhOVFV1TURjeklESXlNUzR6T1RWRE1UVTFMakEzTXlBeU1qQXVNREF4SURFMU5DNDFNRE1nTWpFNExqWTJOU0F4TlRNdU5EZzVJREl4Tnk0Mk9FTXhOVEl1TkRjMElESXhOaTQyT1RVZ01UVXhMakE1T0NBeU1UWXVNVFF4SURFME9TNDJOalFnTWpFMkxqRTBNVU14TkRndU5UZzBJREl4Tmk0eE5EY2dNVFEzTGpVek1pQXlNVFl1TkRjMElERTBOaTQyTkRrZ01qRTNMakEzT1VNeE5EVXVOelkzSURJeE55NDJPRE1nTVRRMUxqQTVOaUF5TVRndU5UTTJJREUwTkM0M01qZ2dNakU1TGpVeU1VZ3hORFF1TmpnMlRERXpOUzR6TkNBeU5Ea3VNalUwVERFeU5TNDVPRGtnTWpFNUxqVXlOVWd4TWpVdU9UVTRRekV5TlM0MU9USWdNakU0TGpZMklERXlOQzQ1T1RFZ01qRTNMamt3T0NBeE1qUXVNaklnTWpFM0xqTTBPVU14TWpNdU5EUTRJREl4Tmk0M09TQXhNakl1TlRNMUlESXhOaTQwTkRVZ01USXhMalUzTnlBeU1UWXVNelV4UXpFeU1DNDJNVGtnTWpFMkxqSTFOeUF4TVRrdU5qVXpJREl4Tmk0ME1UY2dNVEU0TGpjNE1TQXlNVFl1T0RFMFF6RXhOeTQ1TVNBeU1UY3VNakV4SURFeE55NHhOallnTWpFM0xqZ3pNU0F4TVRZdU5qSTVJREl4T0M0Mk1EWkRNVEUyTGpBNU1TQXlNVGt1TXpneUlERXhOUzQzT0RFZ01qSXdMakk0TlNBeE1UVXVOek14SURJeU1TNHlNVGhETVRFMUxqWTRNU0F5TWpJdU1UVXlJREV4TlM0NE9USWdNakl6TGpBNE1TQXhNVFl1TXpReklESXlNeTQ1TURkRE1URTJMamM1TkNBeU1qUXVOek16SURFeE55NDBOamdnTWpJMUxqUXlOQ0F4TVRndU1qa3lJREl5TlM0NU1EaERNVEU1TGpFeE5pQXlNall1TXpreElERXlNQzR3TmlBeU1qWXVOalE0SURFeU1TNHdNaklnTWpJMkxqWTFNVWd4TWpFdU1ERXlXaUlnWm1sc2JEMGlJekF3UVRFNVFTSXZQZzBLUEhCaGRHZ2daRDBpVFRJeE5DNDJPVFFnTWpBNExqQXpOVXd5TURrdU5UUTFJREU1T0M0Mk1UaE1NakEwTGpNNU5pQXhPRGt1TWpBNFRERTVOUzR6TWpFZ01UazRMakF5TVV3eU1EVXVNREU0SURJd015NHdNakZNTWpFMExqY3dPQ0F5TURndU1ESXhUREl4TkM0Mk9UUWdNakE0TGpBek5Wb2lJR1pwYkd3OUlpTXdNRUV4T1VFaUx6NE5Danh3WVhSb0lHUTlJazB4T1RRdU5qazJJREl3T0M0eU5qVkRNVGsxTGpRNU1pQXlNRGN1TkRnNElERTVOaTR3TURVZ01qQTJMalE0SURFNU5pNHhOVGdnTWpBMUxqTTVOVXd5TXpBdU5qazNJREl5TXk0MU5UVk1NakV4TGprNUlERTVNQzR3TVRKRE1qRXpMakV4TXlBeE9Ea3VPRFkySURJeE5DNHhOVFVnTVRnNUxqTTJOQ0F5TVRRdU9UVTFJREU0T0M0MU9EVkRNakUxTGpZM01TQXhPRGN1T1RFNUlESXhOaTR4T0RRZ01UZzNMakEzTlNBeU1UWXVORE01SURFNE5pNHhORFZETWpFMkxqWTVOQ0F4T0RVdU1qRTFJREl4Tmk0Mk9ERWdNVGcwTGpJek5TQXlNVFl1TkRBeElERTRNeTR6TVRGRE1qRTJMakV5TVNBeE9ESXVNemc0SURJeE5TNDFPRFlnTVRneExqVTFOeUF5TVRRdU9EVXpJREU0TUM0NU1EbERNakUwTGpFeU1TQXhPREF1TWpZeElESXhNeTR5TVRrZ01UYzVMamd5TVNBeU1USXVNalEySURFM09TNDJNemRETWpFeExqSTNNeUF4TnprdU5EVXpJREl4TUM0eU5qY2dNVGM1TGpVek1pQXlNRGt1TXpNNElERTNPUzQ0TmpWRE1qQTRMalF3T0NBeE9EQXVNVGs0SURJd055NDFPU0F4T0RBdU56Y3pJREl3Tmk0NU56UWdNVGd4TGpVeU4wTXlNRFl1TXpVNElERTRNaTR5T0RFZ01qQTFMamsyTnlBeE9ETXVNVGcwSURJd05TNDRORE1nTVRnMExqRXpPVU15TURVdU56SWdNVGcxTGpBNU5DQXlNRFV1T0RZNUlERTROaTR3TmpNZ01qQTJMakkzTkNBeE9EWXVPVFF5VERJd05pNHlOU0F4T0RZdU9UWTFUREl5TVM0eU9EVWdNakUwTGpRd09Fd3hPVE11TURJMElERTVPUzQ0TVRoV01UazVMamd6T0VNeE9USXVNVE0ySURFNU9TNDBOemdnTVRreExqRTJOQ0F4T1RrdU16VTVJREU1TUM0eU1URWdNVGs1TGpRNU0wTXhPRGt1TWpVNUlERTVPUzQyTWpjZ01UZzRMak0yTVNBeU1EQXVNREVnTVRnM0xqWXhOU0F5TURBdU5qQXhRekU0Tmk0NE5qa2dNakF4TGpFNU1pQXhPRFl1TXpBeUlESXdNUzQ1TmpnZ01UZzFMamszTlNBeU1ESXVPRFEzUXpFNE5TNDJORGdnTWpBekxqY3lOaUF4T0RVdU5UY3lJREl3TkM0Mk56VWdNVGcxTGpjMU55QXlNRFV1TlRreVF6RTROUzQ1TkRFZ01qQTJMalV4SURFNE5pNHpOemtnTWpBM0xqTTJNU0F4T0RjdU1ESXpJREl3T0M0d05UWkRNVGczTGpZMk55QXlNRGd1TnpVeElERTRPQzQwT1RNZ01qQTVMakkyTXlBeE9Ea3VOREV6SURJd09TNDFNemhETVRrd0xqTXpNeUF5TURrdU9ERXpJREU1TVM0ek1UTWdNakE1TGpnMElERTVNaTR5TkRnZ01qQTVMall4TmtNeE9UTXVNVGd5SURJd09TNHpPVElnTVRrMExqQXpOeUF5TURndU9USTJJREU1TkM0M01pQXlNRGd1TWpZNFRERTVOQzQyT1RZZ01qQTRMakkyTlZvaUlHWnBiR3c5SWlNd01FRXhPVUVpTHo0TkNqeHdZWFJvSUdROUlrMHlORGN1TXpjNUlERXpNQzQzTmpWTU1qTTJMamc0TmlBeE1qY3VOalE1VERJeU5pNHpPRGtnTVRJMExqVXpNbFl4TXpZdU9UazFUREl6Tmk0NE9EWWdNVE16TGpnNE1rd3lORGN1TXpjNUlERXpNQzQzTmpWYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0RRbzhjR0YwYUNCa1BTSk5Nak16TGpReE1pQXhORFF1TmpZNVF6SXpNeTQwTURrZ01UUXpMalUzTWlBeU16TXVNRE00SURFME1pNDFNRFlnTWpNeUxqTTFOU0F4TkRFdU5qTXlUREkzTUNBeE16QXVOell5VERJek1pNHpORGdnTVRFNUxqZzRPVU15TXpNdU1ETTBJREV4T1M0d01UTWdNak16TGpRd05pQXhNVGN1T1RReklESXpNeTQwTURrZ01URTJMamcwTWtNeU16TXVOREE1SURFeE5TNDBORGtnTWpNeUxqZ3pPU0F4TVRRdU1URXpJREl6TVM0NE1qUWdNVEV6TGpFeU9FTXlNekF1T0RFZ01URXlMakUwTWlBeU1qa3VORE0wSURFeE1TNDFPRGtnTWpJM0xqazVPU0F4TVRFdU5UZzVRekl5Tmk0MU5qUWdNVEV4TGpVNE9TQXlNalV1TVRnNElERXhNaTR4TkRJZ01qSTBMakUzTXlBeE1UTXVNVEk0UXpJeU15NHhOVGtnTVRFMExqRXhNeUF5TWpJdU5UZzVJREV4TlM0ME5Ea2dNakl5TGpVNE9TQXhNVFl1T0RReVF6SXlNaTQxT1RVZ01URTNMamc1TWlBeU1qSXVPVE16SURFeE9DNDVNVFVnTWpJekxqVTFOaUF4TVRrdU56Y3pRekl5TkM0eE56a2dNVEl3TGpZek1TQXlNalV1TURVM0lERXlNUzR5T0RNZ01qSTJMakEzTXlBeE1qRXVOalF5VmpFeU1TNDJOelZNTWpVMkxqWTROU0F4TXpBdU56WXlUREl5Tmk0d05qWWdNVE01TGpnek9WWXhNemt1T0RZeVF6SXlOUzR3TlRFZ01UUXdMakl5TWlBeU1qUXVNVGN6SURFME1DNDROelFnTWpJekxqVTFJREUwTVM0M016SkRNakl5TGpreU55QXhOREl1TlRrZ01qSXlMalU1SURFME15NDJNVElnTWpJeUxqVTRNaUF4TkRRdU5qWXlRekl5TWk0MU9ESWdNVFEyTGpBMU5TQXlNak11TVRVeUlERTBOeTR6T1RFZ01qSTBMakUyTnlBeE5EZ3VNemMzUXpJeU5TNHhPREVnTVRRNUxqTTJNaUF5TWpZdU5UVTNJREUwT1M0NU1UVWdNakkzTGprNU1pQXhORGt1T1RFMVF6SXlPUzQwTWpjZ01UUTVMamt4TlNBeU16QXVPREF6SURFME9TNHpOaklnTWpNeExqZ3hOeUF4TkRndU16YzNRekl6TWk0NE16SWdNVFEzTGpNNU1TQXlNek11TkRBeUlERTBOaTR3TlRVZ01qTXpMalF3TWlBeE5EUXVOall5VERJek15NDBNVElnTVRRMExqWTJPVm9pSUdacGJHdzlJaU13TUVFeE9VRWlMejROQ2p4d1lYUm9JR1E5SWsweU1UUXVNak14SURVekxqWTVNamxNTWpBMExqVXpOQ0ExT0M0Mk9USTVUREU1TkM0NE5EUWdOak11TmpreU9Fd3lNRE11T1RJZ056SXVOVEEyTVV3eU1Ea3VNRFk0SURZekxqQTVOakZNTWpFMExqSXhOeUExTXk0Mk9EWXlUREl4TkM0eU16RWdOVE11TmpreU9Wb2lJR1pwYkd3OUlpTXdNRUV4T1VFaUx6NE5Danh3WVhSb0lHUTlJazB5TVRRdU5EWTRJRGN6TGpFeE9UUkRNakV6TGpZMk9DQTNNaTR6TkRZMElESXhNaTQyTXlBM01TNDRORGM1SURJeE1TNDFNVElnTnpFdU5qazVORXd5TXpBdU1qSWdNemd1TVRZMk5Fd3hPVFV1TmpjNElEVTJMak15TmpKRE1UazFMalV5TkNBMU5TNHlNelkySURFNU5TNHdNRGdnTlRRdU1qSTFOU0F4T1RRdU1qQTVJRFV6TGpRME5qSkRNVGt6TGpFNU5DQTFNaTQwTmpFMElERTVNUzQ0TVRjZ05URXVPVEE0TlNBeE9UQXVNemd5SURVeExqa3dPVEZETVRnNExqazBPQ0ExTVM0NU1EazNJREU0Tnk0MU56SWdOVEl1TkRZek9DQXhPRFl1TlRVNElEVXpMalEwT1RWRE1UZzFMalUwTXlBMU5DNDBNelV6SURFNE5DNDVOelFnTlRVdU56Y3hPQ0F4T0RRdU9UYzFJRFUzTGpFMk5USkRNVGcwTGprM05TQTFPQzQxTlRnMklERTROUzQxTkRZZ05Ua3VPRGswTmlBeE9EWXVOVFl4SURZd0xqZzNPVFZETVRnM0xqTXlPU0EyTVM0Mk1UWXlJREU0T0M0ek1USWdOakl1TVRBMk9TQXhPRGt1TXpjMklEWXlMakk0TlRaRE1Ua3dMalEwSURZeUxqUTJORFFnTVRreExqVXpOQ0EyTWk0ek1qSTNJREU1TWk0MU1UTWdOakV1T0RjNU5Vd3hPVEl1TlRNM0lEWXhMamt3TWpoTU1qSXdMamd3TVNBME55NHpNRGsyVERJd05TNDNOek1nTnpRdU56VXlOMVkzTkM0M056STNRekl3TlM0ek1UVWdOelV1TnpJek9DQXlNRFV1TVRZNElEYzJMamM0T0RRZ01qQTFMak0xTWlBM055NDRNak5ETWpBMUxqVXpOeUEzT0M0NE5UYzJJREl3Tmk0d05ETWdOemt1T0RFeU5pQXlNRFl1T0RBeklEZ3dMalUxT1RORE1qQTNMak13TlNBNE1TNHdORFk1SURJd055NDVNRElnT0RFdU5ETXpOeUF5TURndU5UVTVJRGd4TGpZNU56UkRNakE1TGpJeE5TQTRNUzQ1TmpFeElESXdPUzQ1TVRrZ09ESXVNRGsyTnlBeU1UQXVOakk1SURneUxqQTVOalJETWpFeExqTTBJRGd5TGpBNU5qRWdNakV5TGpBME15QTRNUzQ1TlRrNUlESXhNaTQyT1RrZ09ERXVOamsxTmtNeU1UTXVNelUySURneExqUXpNVE1nTWpFekxqazFNaUE0TVM0d05EUWdNakUwTGpRMU5DQTRNQzQxTlRaRE1qRTBMamsxTmlBNE1DNHdOamM1SURJeE5TNHpOVFVnTnprdU5EZzROU0F5TVRVdU5qSTJJRGM0TGpnMU1VTXlNVFV1T0RrNElEYzRMakl4TXpVZ01qRTJMakF6TnlBM055NDFNekF5SURJeE5pNHdNemNnTnpZdU9EUXdNME15TVRZdU1ETTNJRGMyTGpFMU1EUWdNakUxTGpnNU5pQTNOUzQwTmpjeklESXhOUzQyTWpRZ056UXVPRE5ETWpFMUxqTTFNaUEzTkM0eE9USTNJREl4TkM0NU5UTWdOek11TmpFek55QXlNVFF1TkRVeElEY3pMakV5Tmt3eU1UUXVORFk0SURjekxqRXhPVFJhSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrRFFvOGNHRjBhQ0JrUFNKTk1UYzNMalE1TWlBMU5TNHpNamswVERFM05TNDNOelVnTlRRdU5qTTVORXd4TnprdU5EUTRJRFExTGprM01qaERNVGd3TGpJek15QTBOQzR4TVRVNUlERTRNQzR5TWpZZ05ESXVNRE15TXlBeE56a3VOREk1SURRd0xqRTRNRFJETVRjNExqWXpNU0F6T0M0ek1qZzFJREUzTnk0eE1Ea2dNell1T0RZZ01UYzFMakU1TnlBek5pNHdPVGM1UXpFM015NHlPRFVnTXpVdU16TTFPU0F4TnpFdU1UTTVJRE0xTGpNME1qY2dNVFk1TGpJek1pQXpOaTR4TVRZNVF6RTJOeTR6TWpVZ016WXVPRGt4TVNBeE5qVXVPREV6SURNNExqTTJPVE1nTVRZMUxqQXlPQ0EwTUM0eU1qWXlUREUyTVM0ek5UVWdORGd1T0RreU9Fd3hOVGt1TmpNNUlEUTRMakl3TmpKTU1UWXpMak14TWlBek9TNDFNemsyUXpFMk5DNHlPRFlnTXpjdU1qUXhNU0F4TmpZdU1UWXhJRE0xTGpReE1qWWdNVFk0TGpVeU5DQXpOQzQwTlRZMVF6RTNNQzQ0T0RjZ016TXVOVEF3TkNBeE56TXVOVFEwSURNekxqUTVORGtnTVRjMUxqa3hNU0F6TkM0ME5ERXpRekUzT0M0eU56Z2dNelV1TXpnM055QXhPREF1TVRZeElETTNMakl3T0RRZ01UZ3hMakUwTlNBek9TNDFNREk0UXpFNE1pNHhNeUEwTVM0M09UY3pJREU0TWk0eE16WWdORFF1TXpjM055QXhPREV1TVRZeElEUTJMalkzTmpKTU1UYzNMalE1TWlBMU5TNHpNamswV2lJZ1ptbHNiRDBpSXpBd1FURTVRU0l2UGcwS1BIQmhkR2dnWkQwaVRURTNNeTR6TWpnZ05EQXVOVFEyTTBNeE56SXVOakE1SURRd0xqSTFOamtnTVRjeExqZ3pOeUEwTUM0eE1EZzBJREUzTVM0d05UZ2dOREF1TVRBNU0wTXhOekF1TWpjNUlEUXdMakV4TURJZ01UWTVMalV3TnlBME1DNHlOakEySURFMk9DNDNPRGdnTkRBdU5UVXhOME14TmpndU1EWTVJRFF3TGpnME1qZ2dNVFkzTGpReE5pQTBNUzR5TmprZ01UWTJMamcyTnlBME1TNDRNRFUzUXpFMk5pNHpNVGdnTkRJdU16UXlOU0F4TmpVdU9EZ3pJRFF5TGprM09UTWdNVFkxTGpVNE9DQTBNeTQyTnprMlRERTJNeTR3T0RrZ05Ea3VOVFl5T0V3eE56UXVNRE01SURVekxqazFNamhNTVRjMkxqVXpPQ0EwT0M0d05qSTVRekUzTmk0NE16VWdORGN1TXpZek5pQXhOell1T1RnMklEUTJMall4TkRRZ01UYzJMams0TlNBME5TNDROVGd5UXpFM05pNDVPRE1nTkRVdU1UQXhPU0F4TnpZdU9ESTRJRFEwTGpNMU16UWdNVGMyTGpVeU9DQTBNeTQyTlRVMFF6RTNOaTR5TWprZ05ESXVPVFUzTXlBeE56VXVOemtnTkRJdU16SXpOU0F4TnpVdU1qTTRJRFF4TGpjNVF6RTNOQzQyT0RZZ05ERXVNalUyTlNBeE56UXVNRE15SURRd0xqZ3pNemtnTVRjekxqTXhNU0EwTUM0MU5EWXpTREUzTXk0ek1qaGFUVEUzTUM0ek1EZ2dORGN1TmpjeU9VTXhOamt1T1RrM0lEUTNMalUwT0RrZ01UWTVMamN6SURRM0xqTXpPQ0F4TmprdU5UUXpJRFEzTGpBMk5qbERNVFk1TGpNMU5TQTBOaTQzT1RVNElERTJPUzR5TlRRZ05EWXVORGMyTnlBeE5qa3VNalUwSURRMkxqRTFRekUyT1M0eU5UTWdORFV1T0RJek5DQXhOamt1TXpVeUlEUTFMalV3TXprZ01UWTVMalV6T0NBME5TNHlNekpETVRZNUxqY3lOU0EwTkM0NU5qQXhJREUyT1M0NU9TQTBOQzQzTkRnZ01UY3dMak13TVNBME5DNDJNakkzUXpFM01DNDJNVEVnTkRRdU5EazNNeUF4TnpBdU9UVXpJRFEwTGpRMk5EUWdNVGN4TGpJNE15QTBOQzQxTWpjNVF6RTNNUzQyTVRNZ05EUXVOVGt4TlNBeE56RXVPVEUySURRMExqYzBPRGNnTVRjeUxqRTFOQ0EwTkM0NU56azNRekUzTWk0ek9USWdORFV1TWpFd055QXhOekl1TlRVMElEUTFMalV3TlNBeE56SXVOakU1SURRMUxqZ3lOVFJETVRjeUxqWTROU0EwTmk0eE5EVTRJREUzTWk0Mk5URWdORFl1TkRjM09TQXhOekl1TlRJeUlEUTJMamMzT1RWRE1UY3lMalF6T0NBME5pNDVOems1SURFM01pNHpNVFVnTkRjdU1UWXlJREUzTWk0eE5UZ2dORGN1TXpFMU5FTXhOekl1TURBeElEUTNMalEyT0RnZ01UY3hMamd4TkNBME55NDFPVEF6SURFM01TNDJNRGtnTkRjdU5qY3lPVU14TnpFdU5EQXpJRFEzTGpjMU5pQXhOekV1TVRneUlEUTNMamM1T0RnZ01UY3dMamsxT0NBME55NDNPVGc0UXpFM01DNDNNelVnTkRjdU56azRPQ0F4TnpBdU5URTBJRFEzTGpjMU5pQXhOekF1TXpBNElEUTNMalkzTWpsYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0RRbzhjR0YwYUNCa1BTSk5Nakl3TGpFNU5pQXhNRFl1TmprMlRESXhPUzQwTnprZ01UQTFMakF5T1V3eU1qZ3VNemN6SURFd01TNDBNamxETWpNd0xqSTBNeUF4TURBdU5qTTFJREl6TVM0M01UZ2dPVGt1TVRZd01pQXlNekl1TkRjNUlEazNMak15TVVNeU16TXVNalFnT1RVdU5EZ3hPU0F5TXpNdU1qSTNJRGt6TGpReU5pQXlNekl1TkRReklEa3hMalU1TmpGRE1qTXhMalkxT0NBNE9TNDNOall5SURJek1DNHhOalVnT0RndU16QTROaUF5TWpndU1qZzFJRGczTGpVek56UkRNakkyTGpRd05TQTROaTQzTmpZeElESXlOQzR5T0RnZ09EWXVOelF5T0NBeU1qSXVNemtnT0RjdU5EY3lOVXd5TVRNdU5EZzJJRGt4TGpBMk5UaE1NakV5TGpjM05TQTRPUzR6T1RreFRESXlNUzQyTnpJZ09EVXVOems1TWtNeU1qUXVNREkySURnMExqZzROalFnTWpJMkxqWTFOU0E0TkM0NU1EazBJREl5T0M0NU9URWdPRFV1T0RZek0wTXlNekV1TXpJM0lEZzJMamd4TnpJZ01qTXpMakU0TXlBNE9DNDJNalV6SURJek5DNHhOVGdnT1RBdU9EazNRekl6TlM0eE16TWdPVE11TVRZNE9DQXlNelV1TVRRNElEazFMamN5TVRjZ01qTTBMaklnT1RndU1EQTBNME15TXpNdU1qVXpJREV3TUM0eU9EY2dNak14TGpReE9DQXhNREl1TVRFMklESXlPUzR3T1RRZ01UQXpMakE1Tmt3eU1qQXVNVGsySURFd05pNDJPVFphSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrRFFvOGNHRjBhQ0JrUFNKTk1qSTRMakF5SURrekxqTTROVGhETWpJM0xqUXhOU0E1TVM0NU56VTVJREl5Tmk0eU5UZ2dPVEF1T0RVM0lESXlOQzQ0TURRZ09UQXVNamMxUXpJeU15NHpOU0E0T1M0Mk9UTXhJREl5TVM0M01UZ2dPRGt1TmprMU55QXlNakF1TWpZMklEa3dMakk0TWpWTU1qRTBMakU0SURreUxqYzBNalJNTWpFNExqYzFNaUF4TURNdU16Z3lUREl5TkM0NE1EY2dNVEF3TGprek1rTXlNalV1TlRNeElERXdNQzQyTkRVZ01qSTJMakU0T1NBeE1EQXVNakl4SURJeU5pNDNORFFnT1RrdU5qZzFOVU15TWpjdU1qazRJRGs1TGpFME9UZ2dNakkzTGpjek9DQTVPQzQxTVRJNUlESXlPQzR3TXpnZ09UY3VPREV4TkVNeU1qZ3VNek00SURrM0xqRXdPVGtnTWpJNExqUTVNaUE1Tmk0ek5UYzNJREl5T0M0ME9URWdPVFV1TlRrNE1VTXlNamd1TkRrZ09UUXVPRE00TmlBeU1qZ3VNek0xSURrMExqQTROamNnTWpJNExqQXpNeUE1TXk0ek9EVTRTREl5T0M0d01scE5Nakl3TGpZNU1TQTVOaTR6T0RVM1F6SXlNQzQxTkRjZ09UWXVNRE0ySURJeU1DNDFNekVnT1RVdU5qUTRNeUF5TWpBdU5qUTRJRGsxTGpJNE9EaERNakl3TGpjMk5DQTVOQzQ1TWpreklESXlNUzR3TURVZ09UUXVOakl3TVNBeU1qRXVNek1nT1RRdU5ERXpPVU15TWpFdU5qVTFJRGswTGpJd056WWdNakl5TGpBME5DQTVOQzR4TVRjeElESXlNaTQwTXlBNU5DNHhOVGMzUXpJeU1pNDRNVFVnT1RRdU1UazRNeUF5TWpNdU1UYzFJRGswTGpNMk56VWdNakl6TGpRME55QTVOQzQyTXpZMlF6SXlNeTQzTVRrZ09UUXVPVEExTmlBeU1qTXVPRGcySURrMUxqSTFOemdnTWpJekxqa3lNU0E1TlM0Mk16TXlRekl5TXk0NU5UVWdPVFl1TURBNE5pQXlNak11T0RVMUlEazJMak00TkNBeU1qTXVOak0ySURrMkxqWTVOVFpETWpJekxqUXhPQ0E1Tnk0d01EY3lJREl5TXk0d09UVWdPVGN1TWpNMU5pQXlNakl1TnpJeklEazNMak0wTVRsRE1qSXlMak0xSURrM0xqUTBPRE1nTWpJeExqazFNU0E1Tnk0ME1qWXhJREl5TVM0MU9UUWdPVGN1TWpjNU1VTXlNakV1TVRnMElEazNMakV3T0RNZ01qSXdMamcxT1NBNU5pNDNPRGN6SURJeU1DNDJPVEVnT1RZdU16ZzFOMW9pSUdacGJHdzlJaU13TUVFeE9VRWlMejROQ2p4d1lYUm9JR1E5SWsweU1USXVPREEySURFM01pNDNOamhNTWpFekxqVXhOeUF4TnpFdU1UQXlUREl5TWk0ME5ERWdNVGMwTGpZMk9FTXlNalF1TXpNMklERTNOUzR6TmpjZ01qSTJMalF6TnlBeE56VXVNeklnTWpJNExqSTVOaUF4TnpRdU5UTTRRekl6TUM0eE5UWWdNVGN6TGpjMU5pQXlNekV1TmpJNUlERTNNaTR6TURFZ01qTXlMalF3TVNBeE56QXVORGd4UXpJek15NHhOelFnTVRZNExqWTJNaUF5TXpNdU1UZzFJREUyTmk0Mk1qSWdNak15TGpRek15QXhOalF1TnprMFF6SXpNUzQyT0NBeE5qSXVPVFkzSURJek1DNHlNalFnTVRZeExqUTVOaUF5TWpndU16Y3pJREUyTUM0Mk9UVk1NakU1TGpRME9DQXhOVGN1TVRJNFRESXlNQzR4TlRrZ01UVTFMalEyTWt3eU1qa3VNRGd6SURFMU9TNHdNamhETWpNd0xqSTFOU0F4TlRrdU5EazNJREl6TVM0ek1qRWdNVFl3TGpFNE5TQXlNekl1TWpFNUlERTJNUzR3TlRSRE1qTXpMakV4TnlBeE5qRXVPVEl5SURJek15NDRNeUF4TmpJdU9UVTBJREl6TkM0ek1UZ2dNVFkwTGpBNVF6SXpOQzQ0TURVZ01UWTFMakl5TmlBeU16VXVNRFU0SURFMk5pNDBORFFnTWpNMUxqQTJJREUyTnk0Mk56VkRNak0xTGpBMk15QXhOamd1T1RBMklESXpOQzQ0TVRZZ01UY3dMakV5TlNBeU16UXVNek0wSURFM01TNHlOak5ETWpNekxqZzFNU0F4TnpJdU5EQXhJREl6TXk0eE5ESWdNVGN6TGpRek5pQXlNekl1TWpRNElERTNOQzR6TURoRE1qTXhMak0xTkNBeE56VXVNVGdnTWpNd0xqSTVNU0F4TnpVdU9EY3pJREl5T1M0eE1qRWdNVGMyTGpNME5rTXlNamN1T1RVeElERTNOaTQ0TWlBeU1qWXVOamszSURFM055NHdOalVnTWpJMUxqUXlPU0F4TnpjdU1EWTNRekl5TkM0eE5qSWdNVGMzTGpBM0lESXlNaTQ1TURZZ01UYzJMamd6SURJeU1TNDNNelFnTVRjMkxqTTJNa3d5TVRJdU9EQTJJREUzTWk0M05qaGFJaUJtYVd4c1BTSWpNREJCTVRsQklpOCtEUW84Y0dGMGFDQmtQU0pOTWpJNExqQXlOaUF4TmpndU56STFRekl5T0M0ek1qTWdNVFk0TGpBeU5pQXlNamd1TkRjMUlERTJOeTR5TnpjZ01qSTRMalEzTXlBeE5qWXVOVEpETWpJNExqUTNNaUF4TmpVdU56WTBJREl5T0M0ek1UY2dNVFkxTGpBeE5pQXlNamd1TURFM0lERTJOQzR6TVRoRE1qSTNMamN4TnlBeE5qTXVOaklnTWpJM0xqSTNPU0F4TmpJdU9UZzJJREl5Tmk0M01qY2dNVFl5TGpRMU1rTXlNall1TVRjMUlERTJNUzQ1TVRrZ01qSTFMalV5SURFMk1TNDBPVFlnTWpJMExqZ2dNVFl4TGpJd09Vd3lNVGd1TnpNMElERTFPQzQzT0RKTU1qRTBMakl4TkNBeE5qa3VORFE0VERJeU1DNHlOemtnTVRjeExqZzNNa015TWpBdU9UazVJREUzTWk0eE5qRWdNakl4TGpjM01TQXhOekl1TXpBNUlESXlNaTQxTlRFZ01UY3lMak13T0VNeU1qTXVNek1nTVRjeUxqTXdOeUF5TWpRdU1UQXhJREUzTWk0eE5UWWdNakkwTGpneU1TQXhOekV1T0RZMVF6SXlOUzQxTkNBeE56RXVOVGMwSURJeU5pNHhPVE1nTVRjeExqRTBPQ0F5TWpZdU56UXpJREUzTUM0Mk1USkRNakkzTGpJNU1pQXhOekF1TURjMUlESXlOeTQzTWpjZ01UWTVMalF6T1NBeU1qZ3VNREl6SURFMk9DNDNNemhNTWpJNExqQXlOaUF4TmpndU56STFXazB5TWpBdU5qZ3hJREUyTlM0M09USkRNakl3TGpjM055QXhOalV1TlRZM0lESXlNQzQ1TWpNZ01UWTFMak0yTlNBeU1qRXVNVEE1SURFMk5TNHlNREZETWpJeExqSTVOaUF4TmpVdU1ETTRJREl5TVM0MU1UY2dNVFkwTGpreE5pQXlNakV1TnpVM0lERTJOQzQ0TkRaRE1qSXhMams1TnlBeE5qUXVOemMxSURJeU1pNHlOU0F4TmpRdU56VTNJREl5TWk0ME9Ua2dNVFkwTGpjNU1rTXlNakl1TnpRM0lERTJOQzQ0TWpnZ01qSXlMams0TkNBeE5qUXVPVEUzSURJeU15NHhPVE1nTVRZMUxqQTFNa015TWpNdU5EQXlJREUyTlM0eE9EY2dNakl6TGpVM055QXhOalV1TXpZMklESXlNeTQzTURZZ01UWTFMalUzTlVNeU1qTXVPRE0ySURFMk5TNDNPRFFnTWpJekxqa3hOaUF4TmpZdU1ERTRJREl5TXk0NU5ERWdNVFkyTGpJMlF6SXlNeTQ1TmpZZ01UWTJMalV3TXlBeU1qTXVPVE0xSURFMk5pNDNORGdnTWpJekxqZzFNU0F4TmpZdU9UYzNRekl5TXk0M05qY2dNVFkzTGpJd055QXlNak11TmpNeElERTJOeTQwTVRZZ01qSXpMalExTkNBeE5qY3VOVGc0UXpJeU15NHlOVFVnTVRZM0xqYzNPQ0F5TWpNdU1ERXhJREUyTnk0NU1UY2dNakl5TGpjME5DQXhOamN1T1RrMFF6SXlNaTQwTnpjZ01UWTRMakEzTWlBeU1qSXVNVGsxSURFMk9DNHdPRFVnTWpJeExqa3lNU0F4TmpndU1ETXlRekl5TVM0Mk5EZ2dNVFkzTGprM09TQXlNakV1TXpreUlERTJOeTQ0TmpNZ01qSXhMakUzTlNBeE5qY3VOamt6UXpJeU1DNDVOVGdnTVRZM0xqVXlNeUF5TWpBdU56ZzNJREUyTnk0ek1EUWdNakl3TGpZM055QXhOamN1TURVMVF6SXlNQzQxT1RFZ01UWTJMamcxTlNBeU1qQXVOVFEySURFMk5pNDJOQ0F5TWpBdU5UUTJJREUyTmk0ME1qTkRNakl3TGpVME5pQXhOall1TWpBM0lESXlNQzQxT1RFZ01UWTFMams1TWlBeU1qQXVOamMzSURFMk5TNDNPVEpJTWpJd0xqWTRNVm9pSUdacGJHdzlJaU13TUVFeE9VRWlMejROQ2p4d1lYUm9JR1E5SWsweE5qQXVOVEEwSURJeE15NDNNREZNTVRZeUxqSXlJREl4TXk0d01EVk1NVFkxTGpreU5DQXlNakV1TmpRMVF6RTJOaTR6TVRjZ01qSXlMalUyTVNBeE5qWXVPRGt6SURJeU15NHpPVE1nTVRZM0xqWXhOeUF5TWpRdU1EazBRekUyT0M0ek5ESWdNakkwTGpjNU5DQXhOamt1TWpBeElESXlOUzR6TkRrZ01UY3dMakUwTmlBeU1qVXVOekkzUXpFM01TNHdPVElnTWpJMkxqRXdOU0F4TnpJdU1UQTFJREl5Tmk0eU9UZ2dNVGN6TGpFeU55QXlNall1TWprMlF6RTNOQzR4TkRrZ01qSTJMakk1TkNBeE56VXVNVFl4SURJeU5pNHdPVFlnTVRjMkxqRXdOU0F5TWpVdU56RTFRekUzTnk0d05Ea2dNakkxTGpNek15QXhOemN1T1RBMklESXlOQzQzTnpRZ01UYzRMall5TnlBeU1qUXVNRGRETVRjNUxqTTBPQ0F5TWpNdU16WTNJREUzT1M0NU1pQXlNakl1TlRNeUlERTRNQzR6TURrZ01qSXhMall4TkVNeE9EQXVOams0SURJeU1DNDJPVFlnTVRnd0xqZzVOeUF5TVRrdU56RXpJREU0TUM0NE9UVWdNakU0TGpjeVF6RTRNQzQ0T1RNZ01qRTNMamN5TnlBeE9EQXVOamc1SURJeE5pNDNORFFnTVRnd0xqSTVOaUF5TVRVdU9ESTRUREUzTmk0MU9USWdNakEzTGpFNU1Vd3hOemd1TXpBNUlESXdOaTQwT1RGTU1UZ3lMakF4TmlBeU1UVXVNVE14UXpFNE1pNDFNRE1nTWpFMkxqSTJOeUF4T0RJdU56VTFJREl4Tnk0ME9EWWdNVGd5TGpjMU9DQXlNVGd1TnpFMlF6RTRNaTQzTmlBeU1Ua3VPVFEzSURFNE1pNDFNVE1nTWpJeExqRTJOaUF4T0RJdU1ETWdNakl5TGpNd05FTXhPREV1TlRRM0lESXlNeTQwTkRJZ01UZ3dMamd6T1NBeU1qUXVORGMzSURFM09TNDVORFFnTWpJMUxqTTBPVU14TnprdU1EVWdNakkyTGpJeU1TQXhOemN1T1RnM0lESXlOaTQ1TVRNZ01UYzJMamd4TnlBeU1qY3VNemcyUXpFM05TNDJORGNnTWpJM0xqZzFPU0F4TnpRdU16a3pJREl5T0M0eE1EUWdNVGN6TGpFeU5TQXlNamd1TVRBM1F6RTNNUzQ0TlRnZ01qSTRMakV3T1NBeE56QXVOakF5SURJeU55NDROamtnTVRZNUxqUXpNU0F5TWpjdU5FTXhOamd1TWpVNUlESXlOaTQ1TXpFZ01UWTNMakU1TXlBeU1qWXVNalF6SURFMk5pNHlPVFlnTWpJMUxqTTNORU14TmpVdU16azRJREl5TkM0MU1EWWdNVFkwTGpZNE5TQXlNak11TkRjMElERTJOQzR4T1RjZ01qSXlMak16T0V3eE5qQXVOVEEwSURJeE15NDNNREZhSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrRFFvOGNHRjBhQ0JrUFNKTk1UYzBMakl4SURJeU1TNHlPVFZETVRjMUxqWTJNU0F5TWpBdU56QTJJREUzTmk0NE1USWdNakU1TGpVNE15QXhOemN1TkRFeElESXhPQzR4TnpGRE1UYzRMakF4SURJeE5pNDNOVGtnTVRjNExqQXdPQ0F5TVRVdU1UYzFJREUzTnk0ME1EWWdNakV6TGpjMk5Vd3hOelF1T0RnM0lESXdOeTQ0T0RWTU1UWXpMamswTnlBeU1USXVNekUxVERFMk5pNDBOallnTWpFNExqRTNPRU14TmpjdU1EWTVJREl4T1M0MU9EY2dNVFk0TGpJeU15QXlNakF1TnpBM0lERTJPUzQyTnpVZ01qSXhMakk1TVVNeE56RXVNVEkzSURJeU1TNDROelVnTVRjeUxqYzFPQ0F5TWpFdU9EYzJJREUzTkM0eU1TQXlNakV1TWprMVdrMHhOekV1TVRVNUlESXhOQzR4TnpGRE1UY3hMalV5TlNBeU1UUXVNRElnTVRjeExqa3pOQ0F5TVRNdU9UazNJREUzTWk0ek1UVWdNakUwTGpFd05rTXhOekl1TmprM0lESXhOQzR5TVRZZ01UY3pMakF5T0NBeU1UUXVORFVnTVRjekxqSTFNU0F5TVRRdU56ZERNVGN6TGpRM05DQXlNVFV1TURrZ01UY3pMalUzTmlBeU1UVXVORGMxSURFM015NDFNemtnTWpFMUxqZzJRekUzTXk0MU1ESWdNakUyTGpJME5TQXhOek11TXpJNUlESXhOaTQyTURVZ01UY3pMakEwT0NBeU1UWXVPRGM1UXpFM01pNDNOamdnTWpFM0xqRTFNeUF4TnpJdU16azRJREl4Tnk0ek1qVWdNVGN5TGpBd01pQXlNVGN1TXpZelF6RTNNUzQyTURjZ01qRTNMalF3TWlBeE56RXVNakE1SURJeE55NHpNRFlnTVRjd0xqZzNPQ0F5TVRjdU1Ea3lRekUzTUM0MU5EY2dNakUyTGpnM055QXhOekF1TXpBeklESXhOaTQxTlRnZ01UY3dMakU0T0NBeU1UWXVNVGc0UXpFM01DNHdOeklnTWpFMUxqZ3hPQ0F4TnpBdU1Ea3pJREl4TlM0ME1qRWdNVGN3TGpJME5pQXlNVFV1TURZMVF6RTNNQzQwTWpFZ01qRTBMalkySURFM01DNDNOVElnTWpFMExqTTBJREUzTVM0eE5qa2dNakUwTGpFM01VZ3hOekV1TVRVNVdpSWdabWxzYkQwaUl6QXdRVEU1UVNJdlBnMEtQSEJoZEdnZ1pEMGlUVGt5TGpReE9EWWdNakEyTGpZMU1VdzVOQzR4TXpRNUlESXdOeTR6TkRGTU9UQXVORFl5TVNBeU1UWXVNREE0UXpnNUxqWTNOVFVnTWpFM0xqZzJNaUE0T1M0Mk56azNJREl4T1M0NU5EUWdPVEF1TkRjek55QXlNakV1TnprMVF6a3hMakkyTnpnZ01qSXpMalkwTnlBNU1pNDNPRFkySURJeU5TNHhNVFlnT1RRdU5qazJNaUF5TWpVdU9EYzVRemsyTGpZd05UY2dNakkyTGpZME15QTVPQzQzTkRrMElESXlOaTQyTXprZ01UQXdMalkxTmlBeU1qVXVPRFk0UXpFd01pNDFOaklnTWpJMUxqQTVOeUF4TURRdU1EYzFJREl5TXk0Mk1qSWdNVEEwTGpnMk1pQXlNakV1TnpZNFRERXdPQzQxTWpnZ01qRXpMakV3TVV3eE1UQXVNalEwSURJeE15NDNPVEZNTVRBMkxqVTNNU0F5TWpJdU5EVTRRekV3Tmk0d09Ea2dNakl6TGpVNU5pQXhNRFV1TXpnZ01qSTBMall6TVNBeE1EUXVORGcySURJeU5TNDFNRE5ETVRBekxqVTVNU0F5TWpZdU16YzFJREV3TWk0MU1qa2dNakkzTGpBMk55QXhNREV1TXpVNUlESXlOeTQxTkRGRE1UQXdMakU0T1NBeU1qZ3VNREUwSURrNExqa3pORFFnTWpJNExqSTFPU0E1Tnk0Mk5qWTVJREl5T0M0eU5qSkRPVFl1TXprNU5TQXlNamd1TWpZMUlEazFMakUwTXprZ01qSTRMakF5TlNBNU15NDVOekU1SURJeU55NDFOVFpET1RJdU56azVPU0F5TWpjdU1EZzRJRGt4TGpjek5EUWdNakkyTGpNNU9TQTVNQzQ0TXpZeUlESXlOUzQxTXpGRE9Ea3VPVE00TVNBeU1qUXVOall5SURnNUxqSXlORGtnTWpJekxqWXpNU0E0T0M0M016YzBJREl5TWk0ME9UVkRPRGd1TWpRNU9TQXlNakV1TXpVNElEZzNMams1TnpZZ01qSXdMakUwSURnM0xqazVORGtnTWpFNExqa3dPVU00Tnk0NU9USXlJREl4Tnk0Mk56a2dPRGd1TWpNNU1pQXlNVFl1TkRVNUlEZzRMamN5TVRjZ01qRTFMak15TVV3NU1pNDBNVGcySURJd05pNDJOVEZhSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrRFFvOGNHRjBhQ0JrUFNKTk9UWXVOVGd5TkNBeU1qRXVORE14UXprNExqQXpOamtnTWpJeUxqQXhNU0E1T1M0Mk5qZzVJREl5TWk0d01EY2dNVEF4TGpFeUlESXlNUzQwTWtNeE1ESXVOVGN4SURJeU1DNDRNeklnTVRBekxqY3lNeUF5TVRrdU56QTVJREV3TkM0ek1qTWdNakU0TGpJNU9Fd3hNRFl1T0RJeUlESXhNaTQwTURoTU9UVXVPRE0zTmlBeU1EZ3VNREkxVERrekxqTXpPRFlnTWpFekxqa3dPRU01TWk0M05EQTJJREl4TlM0ek1qRWdPVEl1TnpRME9TQXlNVFl1T1RBM0lEa3pMak0xTURZZ01qRTRMak14TjBNNU15NDVOVFl6SURJeE9TNDNNamNnT1RVdU1URXpPQ0F5TWpBdU9EUTJJRGsyTGpVMk9EY2dNakl4TGpReU9FdzVOaTQxT0RJMElESXlNUzQwTXpGYVRUazVMall3TXpFZ01qRTBMakk1T0VNNU9TNDVOalV6SURJeE5DNDBORFFnTVRBd0xqSTJOQ0F5TVRRdU56QTRJREV3TUM0ME5Ea2dNakUxTGpBME5FTXhNREF1TmpNeklESXhOUzR6T0NBeE1EQXVOamt5SURJeE5TNDNOamNnTVRBd0xqWXhOaUF5TVRZdU1UUXhRekV3TUM0MU16a2dNakUyTGpVeE5DQXhNREF1TXpNeElESXhOaTQ0TlNBeE1EQXVNREk0SURJeE55NHdPVEpET1RrdU56STBPQ0F5TVRjdU16TXpJRGs1TGpNME5EZ2dNakUzTGpRMk5TQTVPQzQ1TlRJMklESXhOeTQwTmpWRE9UZ3VOVFl3TlNBeU1UY3VORFkxSURrNExqRTRNRFFnTWpFM0xqTXpNeUE1Tnk0NE56Y3lJREl4Tnk0d09USkRPVGN1TlRjMElESXhOaTQ0TlNBNU55NHpOalkwSURJeE5pNDFNVFFnT1RjdU1qZzVOeUF5TVRZdU1UUXhRemszTGpJeE15QXlNVFV1TnpZM0lEazNMakkzTWlBeU1UVXVNemdnT1RjdU5EVTJOaUF5TVRVdU1EUTBRemszTGpZME1USWdNakUwTGpjd09DQTVOeTQ1TkNBeU1UUXVORFEwSURrNExqTXdNaklnTWpFMExqSTVPRU01T0M0M01Ua3hJREl4TkM0eE1qa2dPVGt1TVRnM09DQXlNVFF1TVRJM0lEazVMall3TmpVZ01qRTBMakk1TVV3NU9TNDJNRE14SURJeE5DNHlPVGhhSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrRFFvOGNHRjBhQ0JrUFNKTk5Ea3VOVGszTXlBeE5UVXVOREkxVERVd0xqTXhPREVnTVRVM0xqQTVNa3cwTVM0ME1qQTVJREUyTUM0Mk9EaERNemt1TlRVek1pQXhOakV1TkRnMUlETTRMakE0TVRjZ01UWXlMamsySURNM0xqTXlNalFnTVRZMExqYzVPRU16Tmk0MU5qTXhJREUyTmk0Mk16Y2dNell1TlRjMk55QXhOamd1TmpreElETTNMak0yTURNZ01UY3dMalV5UXpNNExqRTBNemdnTVRjeUxqTTBPQ0F6T1M0Mk16UTRJREUzTXk0NE1EVWdOREV1TlRFeU9DQXhOelF1TlRjNFF6UXpMak01TURnZ01UYzFMak0xTVNBME5TNDFNRFlnTVRjMUxqTTNOeUEwTnk0ME1ETTRJREUzTkM0Mk5USk1OVFl1TXpBNElERTNNUzR3TlRKTU5UY3VNREU0TlNBeE56SXVOekU0VERRNExqRXhORFFnTVRjMkxqTXlOVU0wTmk0NU16a3lJREUzTmk0NE15QTBOUzQyTnpFNUlERTNOeTR4TURJZ05EUXVNemczSURFM055NHhNalZETkRNdU1UQXlNU0F4TnpjdU1UUTRJRFF4TGpneU5UUWdNVGMyTGpreU1TQTBNQzQyTXpFNElERTNOaTQwTlRsRE16a3VORE00TXlBeE56VXVPVGsySURNNExqTTFNaUF4TnpVdU16QTJJRE0zTGpRek5qWWdNVGMwTGpRelF6TTJMalV5TVRNZ01UY3pMalUxTkNBek5TNDNPVFUwSURFM01pNDFNU0F6TlM0ek1ERTFJREUzTVM0ek5UZERNelF1T0RBM05pQXhOekF1TWpBMUlETTBMalUxTlRjZ01UWTRMamsyT1NBek5DNDFOakEySURFMk55NDNNakZETXpRdU5UWTFOU0F4TmpZdU5EY3pJRE0wTGpneU56RWdNVFkxTGpJek9TQXpOUzR6TWprNUlERTJOQzR3T1VNek5TNDRNekk0SURFMk1pNDVORElnTXpZdU5UWTJPU0F4TmpFdU9UQXlJRE0zTGpRNE9TQXhOakV1TURNelF6TTRMalF4TVRJZ01UWXdMakUyTkNBek9TNDFNREk1SURFMU9TNDBPRElnTkRBdU55QXhOVGt1TURJNFREUTVMalU1TnpNZ01UVTFMalF5TlZvaUlHWnBiR3c5SWlNd01FRXhPVUVpTHo0TkNqeHdZWFJvSUdROUlrMDBNUzQzTnpneUlERTJPQzQzTXpsRE5ESXVNRGMzTXlBeE5qa3VORE0zSURReUxqVXhOVEVnTVRjd0xqQTNNU0EwTXk0d05qWTRJREUzTUM0Mk1EVkRORE11TmpFNE5DQXhOekV1TVRNNUlEUTBMakkzTXlBeE56RXVOVFl5SURRMExqazVNekVnTVRjeExqZzFNVU0wTlM0M01UTXlJREUzTWk0eE16a2dORFl1TkRnME9DQXhOekl1TWpnMklEUTNMakkyTXpjZ01UY3lMakk0TlVNME9DNHdOREkxSURFM01pNHlPRE1nTkRndU9ERXpOU0F4TnpJdU1UTXpJRFE1TGpVek1qUWdNVGN4TGpnME1rdzFOUzQxT0RjMUlERTJPUzR6T1RWTU5URXVNREkxTmlBeE5UZ3VOell5VERRMExqazNOQ0F4TmpFdU1qRXlRelEwTGpJMU5USWdNVFl4TGpVd01pQTBNeTQyTURJMElERTJNUzQ1TWpjZ05ETXVNRFV5T0NBeE5qSXVORFl6UXpReUxqVXdNeklnTVRZeUxqazVPQ0EwTWk0d05qYzJJREUyTXk0Mk16UWdOREV1Tnpjd09DQXhOalF1TXpNeVF6UXhMalEzTkRFZ01UWTFMakF6TVNBME1TNHpNaklnTVRZMUxqYzRJRFF4TGpNeU16TWdNVFkyTGpVek5rTTBNUzR6TWpRMUlERTJOeTR5T1RJZ05ERXVORGM1TVNBeE5qZ3VNRFF4SURReExqYzNPRElnTVRZNExqY3pPVnBOTkRrdU1URXpOeUF4TmpVdU56YzVRelE1TGpJMk5DQXhOall1TVRNeElEUTVMakk0TXpnZ01UWTJMalV5TkNBME9TNHhOamszSURFMk5pNDRPRGxETkRrdU1EVTFOU0F4TmpjdU1qVTBJRFE0TGpneE5EVWdNVFkzTGpVM0lEUTRMalE0TnpZZ01UWTNMamM0TWtNME9DNHhOakE0SURFMk55NDVPVFFnTkRjdU56WTRNeUF4TmpndU1EZzVJRFEzTGpNM056RWdNVFk0TGpBMU1rTTBOaTQ1T0RZZ01UWTRMakF4TkNBME5pNDJNakF5SURFMk55NDRORFlnTkRZdU16UXlNeUF4TmpjdU5UYzJRelEyTGpBMk5ETWdNVFkzTGpNd055QTBOUzQ0T1RFMElERTJOaTQ1TlRFZ05EVXVPRFV5T0NBeE5qWXVOVGN5UXpRMUxqZ3hORE1nTVRZMkxqRTVNaUEwTlM0NU1USTJJREUyTlM0NE1URWdORFl1TVRNd09TQXhOalV1TkRrelF6UTJMak0wT1RNZ01UWTFMakUzTmlBME5pNDJOelF5SURFMk5DNDVORElnTkRjdU1EVXdNeUF4TmpRdU9ETXhRelEzTGpReU5qVWdNVFkwTGpjeUlEUTNMamd6TURVZ01UWTBMamN6T1NBME9DNHhPVE0zSURFMk5DNDRPRFZETkRndU5EQXdNaUF4TmpRdU9UWTRJRFE0TGpVNE56Y2dNVFkxTGpBNE9TQTBPQzQzTkRVMklERTJOUzR5TkRORE5EZ3VPVEF6TlNBeE5qVXVNemsySURRNUxqQXlPRFlnTVRZMUxqVTNPQ0EwT1M0eE1UTTNJREUyTlM0M056bGFJaUJtYVd4c1BTSWpNREJCTVRsQklpOCtEUW84Y0dGMGFDQmtQU0pOTlRZdU9URTFPQ0E0T1M0ME5qa3lURFUyTGpFNE9ERWdPVEV1TVRNMU9VdzBOeTR5TmpNMElEZzNMalUyT1RKRE5EVXVNelV6T1NBNE5pNDRNRFUwSURRekxqSXhNREVnT0RZdU9EQTVOU0EwTVM0ek1ETTNJRGczTGpVNE1EWkRNemt1TXprM015QTRPQzR6TlRFM0lETTNMamc0TkRRZ09Ea3VPREkyTmlBek55NHdPVGM0SURreExqWTRNRGxETXpZdU16RXhNaUE1TXk0MU16VXlJRE0yTGpNeE5UUWdPVFV1TmpFMk9TQXpOeTR4TURrMUlEazNMalEyT0RKRE16Y3VPVEF6TlNBNU9TNHpNVGsxSURNNUxqUXlNalFnTVRBd0xqYzRPU0EwTVM0ek16RTVJREV3TVM0MU5USk1OVEF1TWpVMk5pQXhNRFV1TVRFeVREUTVMalUwT1RVZ01UQTJMamMzT1V3ME1DNDJNalE0SURFd015NHlNVEpETXprdU5EVXlPQ0F4TURJdU56UXpJRE00TGpNNE56UWdNVEF5TGpBMU5TQXpOeTQwT0RrMElERXdNUzR4T0RaRE16WXVOVGt4TlNBeE1EQXVNekUzSURNMUxqZzNPRFVnT1RrdU1qZzBPU0F6TlM0ek9URXpJRGs0TGpFME9EVkRNelF1TkRBM05DQTVOUzQ0TlRNMElETTBMalF3TWpZZ09UTXVNamN5TnlBek5TNHpOemd4SURrd0xqazNOREpETXpZdU16VXpOU0E0T0M0Mk56VTNJRE00TGpJeU9UTWdPRFl1T0RRM05pQTBNQzQxT1RJNElEZzFMamc1TWpGRE5ESXVPVFUyTXlBNE5DNDVNelkySURRMUxqWXhNemdnT0RRdU9UTXlJRFEzTGprNE1EZ2dPRFV1T0RjNU0wdzFOaTQ1TVRVNElEZzVMalEyT1RKYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0RRbzhjR0YwYUNCa1BTSk5OREV1TmprMU5TQTVNeTQxTVRJMFF6UXhMak01T0NBNU5DNHlNVEUxSURReExqSTBOVFFnT1RRdU9UWXdPQ0EwTVM0eU5EWTJJRGsxTGpjeE56TkROREV1TWpRM09DQTVOaTQwTnpNNElEUXhMalF3TWpjZ09UY3VNakl5TnlBME1TNDNNREkwSURrM0xqa3lNRGxETkRJdU1EQXlNaUE1T0M0Mk1Ua3lJRFF5TGpRME1Ea2dPVGt1TWpVek1pQTBNaTQ1T1RNMElEazVMamM0TmpWRE5ETXVOVFExT1NBeE1EQXVNeklnTkRRdU1qQXhNeUF4TURBdU56UXlJRFEwTGpreU1qRWdNVEF4TGpBeU9VdzFNQzQ1T0RBM0lERXdNeTQwTlRaTU5UVXVOVEF4TkNBNU1pNDNPRGxNTkRrdU5ETTJJRGt3TGpNMk1qUkRORGd1TnpFMU9DQTVNQzR3TnpRZ05EY3VPVFEwSURnNUxqa3lOalFnTkRjdU1UWTBPU0E0T1M0NU1qaERORFl1TXpnMU9TQTRPUzQ1TWprMklEUTFMall4TkRnZ09UQXVNRGd3TXlBME5DNDRPVFU0SURrd0xqTTNNVGRETkRRdU1UYzJPQ0E1TUM0Mk5qTWdORE11TlRJME1TQTVNUzR3T0RreUlEUXlMamszTkRrZ09URXVOakkxT1VNME1pNDBNalU0SURreUxqRTJNalVnTkRFdU9Ua3hJRGt5TGpjNU9TQTBNUzQyT1RVMUlEa3pMalE1T1ZZNU15NDFNVEkwV2swME9TNHdNelEwSURrMkxqUTBOVGRETkRndU9UTTRNU0E1Tmk0Mk56QTRJRFE0TGpjNU1UY2dPVFl1T0RjeU5DQTBPQzQyTURVM0lEazNMakF6TmtNME9DNDBNVGsySURrM0xqRTVPVGNnTkRndU1UazROU0E1Tnk0ek1qRXlJRFEzTGprMU9ETWdPVGN1TXpreVF6UTNMamN4T0RFZ09UY3VORFl5TnlBME55NDBOalEzSURrM0xqUTRNRGtnTkRjdU1qRTJOQ0E1Tnk0ME5EVXlRelEyTGprMk9ERWdPVGN1TkRBNU5TQTBOaTQzTXpFZ09UY3VNekl3T1NBME5pNDFNakl5SURrM0xqRTROVFpETkRZdU16RXpOQ0E1Tnk0d05UQTBJRFEyTGpFek9DQTVOaTQ0TnpFNElEUTJMakF3T0RjZ09UWXVOall5T1VNME5TNDROemswSURrMkxqUTFOQ0EwTlM0M09UazBJRGsyTGpJeE9UZ2dORFV1TnpjME5DQTVOUzQ1TnpjelF6UTFMamMwT1RRZ09UVXVOek0wTnlBME5TNDNPREF4SURrMUxqUTRPVGdnTkRVdU9EWTBNaUE1TlM0eU5qQXlRelExTGprME9ETWdPVFV1TURNd05TQTBOaTR3T0RNNElEazBMamd5TVRnZ05EWXVNall3T1NBNU5DNDJORGxETkRZdU5EVTRNeUE1TkM0ME5UWTJJRFEyTGpjd01UVWdPVFF1TXpFME5TQTBOaTQ1TmpreElEazBMakl6TlRORE5EY3VNak0yTmlBNU5DNHhOVFl4SURRM0xqVXlNRElnT1RRdU1UUXlNeUEwTnk0M09UUTJJRGswTGpFNU5VTTBPQzR3TmpnNUlEazBMakkwTnpnZ05EZ3VNekkxTnlBNU5DNHpOalUxSURRNExqVTBNVGtnT1RRdU5UTTNOME0wT0M0M05UZ3lJRGswTGpjeElEUTRMamt5TnpRZ09UUXVPVE14TkNBME9TNHdNelEwSURrMUxqRTRNalJETkRrdU1USWdPVFV1TXpneU5pQTBPUzR4TmpReElEazFMalU1TnpJZ05Ea3VNVFkwTVNBNU5TNDRNVFJETkRrdU1UWTBNU0E1Tmk0d016QTRJRFE1TGpFeUlEazJMakkwTlRVZ05Ea3VNRE0wTkNBNU5pNDBORFUzV2lJZ1ptbHNiRDBpSXpBd1FURTVRU0l2UGcwS1BIQmhkR2dnWkQwaVRURXdPUzQ1TURRZ05EZ3VNakl5T0V3eE1EZ3VNVGc0SURRNExqa3hPVFZNTVRBMExqUTRNU0EwTUM0eU5qazFRekV3TkM0eE1ESWdNemt1TXpNek9TQXhNRE11TlRNMElETTRMalE0TVRFZ01UQXlMamd4TVNBek55NDNOakZETVRBeUxqQTRPU0F6Tnk0d05EQTVJREV3TVM0eU1qVWdNell1TkRZNElERXdNQzR5TnpJZ016WXVNRGMxTjBNNU9TNHpNVGcySURNMUxqWTRNelVnT1RndU1qazBNaUF6TlM0ME56azNJRGszTGpJMU9EY2dNelV1TkRjMk5VTTVOaTR5TWpNeklETTFMalEzTXpNZ09UVXVNVGszTmlBek5TNDJOekExSURrMExqSTBNVFlnTXpZdU1EVTJPRU01TXk0eU9EVTJJRE0yTGpRME16RWdPVEl1TkRFNE5TQXpOeTR3TVRBMklEa3hMalk1TVNBek55NDNNall5UXprd0xqazJNellnTXpndU5EUXhOeUE1TUM0ek9UQXpJRE01TGpJNU1TQTVNQzR3TURRNUlEUXdMakl5TkRKRE9Ea3VOakU1TkNBME1TNHhOVGMwSURnNUxqUXlPVFFnTkRJdU1UVTFPU0E0T1M0ME5EWXhJRFF6TGpFMk1UTkRPRGt1TkRZeU55QTBOQzR4TmpZM0lEZzVMalk0TlRjZ05EVXVNVFU0T0NBNU1DNHhNREU0SURRMkxqQTNPVFZNT1RNdU9ERTFPU0ExTkM0M01UazBURGt5TGpBNU9UWWdOVFV1TkRBNU5FdzRPQzR6T1RVNElEUTJMamMyT1RWRE9EY3VPRGcyTlNBME5TNDJNekF4SURnM0xqWXhOVFVnTkRRdU5EQXpOeUE0Tnk0MU9UZzJJRFF6TGpFMk1UZERPRGN1TlRneE9DQTBNUzQ1TVRrMklEZzNMamd4T1RRZ05EQXVOamcyTnlBNE9DNHlPVGMzSURNNUxqVXpORGRET0RndU56YzJJRE00TGpNNE1qY2dPRGt1TkRnMU5DQXpOeTR6TXpRMUlEa3dMak00TkRZZ016WXVORFV4TVVNNU1TNHlPRE00SURNMUxqVTJOemNnT1RJdU16VTFJRE0wTGpnMk5qY2dPVE11TlRNMU55QXpOQzR6T0RsRE9UUXVOekUyTlNBek15NDVNVEV6SURrMUxqazRNek1nTXpNdU5qWTJNeUE1Tnk0eU5qSTBJRE16TGpZMk9ETkRPVGd1TlRReE5TQXpNeTQyTnpBeklEazVMamd3TnpVZ016TXVPVEU1TXlBeE1EQXVPVGczSURNMExqUXdNRGRETVRBeUxqRTJOaUF6TkM0NE9ESXlJREV3TXk0eU16VWdNelV1TlRnMk5TQXhNRFF1TVRNeElETTJMalEzTWpkRE1UQTFMakF5TnlBek55NHpOVGc1SURFd05TNDNNek1nTXpndU5EQTVNeUF4TURZdU1qQTRJRE01TGpVMk1qbE1NVEE1TGprd05DQTBPQzR5TWpJNFdpSWdabWxzYkQwaUl6QXdRVEU1UVNJdlBnMEtQSEJoZEdnZ1pEMGlUVGsyTGpFNU9ESWdOREF1TmpJMk1rTTVOUzQwTnprZ05EQXVPVEUyTmlBNU5DNDRNalU0SURReExqTTBNVGdnT1RRdU1qYzFPU0EwTVM0NE56YzFRemt6TGpjeU5qRWdOREl1TkRFek1pQTVNeTR5T1RBeklEUXpMakEwT0RnZ09USXVPVGt6TlNBME15NDNORGd4UXpreUxqWTVOamNnTkRRdU5EUTNOQ0E1TWk0MU5EUTNJRFExTGpFNU5qY2dPVEl1TlRRMk15QTBOUzQ1TlRORE9USXVOVFEzT0NBME5pNDNNRGswSURreUxqY3dNamdnTkRjdU5EVTRJRGt6TGpBd01qVWdORGd1TVRVMk1rdzVOUzQxTWpJZ05UUXVNRE0yTVV3eE1EWXVORGN5SURRNUxqWXdOakZNTVRBekxqazFNaUEwTXk0M01qWXlRekV3TXk0Mk5UTWdORE11TURJM09DQXhNRE11TWpFMUlEUXlMak01TXpVZ01UQXlMalkyTkNBME1TNDROVGsxUXpFd01pNHhNVElnTkRFdU16STFOaUF4TURFdU5EVTRJRFF3TGprd01qUWdNVEF3TGpjek9DQTBNQzQyTVRReVF6RXdNQzR3TVRjZ05EQXVNekkySURrNUxqSTBOVGtnTkRBdU1UYzROQ0E1T0M0ME5qY2dOREF1TVRjNU9VTTVOeTQyT0RneElEUXdMakU0TVRRZ09UWXVPVEUzTVNBME1DNHpNekU1SURrMkxqRTVPRElnTkRBdU5qSXlPVlkwTUM0Mk1qWXlXazA1T1M0eU5EWXpJRFEzTGpjME9UVkRPVGd1T1RNek1TQTBOeTQ0T0NBNU9DNDFPRGNnTkRjdU9URTJPU0E1T0M0eU5USXhJRFEzTGpnMU5UZERPVGN1T1RFM01TQTBOeTQzT1RRMElEazNMall3T0RZZ05EY3VOak0zTnlBNU55NHpOalUzSURRM0xqUXdOVFZET1RjdU1USXlPQ0EwTnk0eE56TTBJRGsyTGprMU5qWWdORFl1T0RjMk1pQTVOaTQ0T0RneklEUTJMalUxTWtNNU5pNDRNaUEwTmk0eU1qYzNJRGsyTGpnMU1qWWdORFV1T0RreE1TQTVOaTQ1T0RJZ05EVXVOVGcwT1VNNU55NHhNVEUwSURRMUxqSTNPRGdnT1RjdU16TXhPQ0EwTlM0d01UWTVJRGszTGpZeE5TQTBOQzQ0TXpJNFF6azNMamc1T0RJZ05EUXVOalE0TnlBNU9DNHlNekUxSURRMExqVTFNRGNnT1RndU5UY3lNeUEwTkM0MU5URXlRems0TGpreE16RWdORFF1TlRVeE55QTVPUzR5TkRZeElEUTBMalkxTURjZ09Ua3VOVEk0TnlBME5DNDRNelUyUXprNUxqZ3hNVFFnTkRVdU1ESXdOU0F4TURBdU1ETXhJRFExTGpJNE15QXhNREF1TVRVNUlEUTFMalU0T1RWRE1UQXdMakkwTmlBME5TNDNPRGsxSURFd01DNHlPU0EwTmk0d01EUXhJREV3TUM0eU9URWdORFl1TWpJeFF6RXdNQzR5T1RJZ05EWXVORE0zT0NBeE1EQXVNalE1SURRMkxqWTFNamNnTVRBd0xqRTJOQ0EwTmk0NE5UTXpRekV3TUM0d056a2dORGN1TURVek9TQTVPUzQ1TlRRMUlEUTNMakl6TmpNZ09Ua3VOemszSURRM0xqTTVNREZET1RrdU5qTTVOaUEwTnk0MU5ETTVJRGs1TGpRMU1qUWdORGN1TmpZMklEazVMakkwTmpNZ05EY3VOelE1TlZvaUlHWnBiR3c5SWlNd01FRXhPVUVpTHo0TkNqeHdZWFJvSUdROUlrMHhOVFl1TkRBNUlERTRPUzR6TURKRE1UUTVMalkyTlNBeE9URXVORFExSURFME1pNDJORGtnTVRreUxqWTNPU0F4TXpVdU5UWWdNVGt5TGprMk9FTXhNamd1TWpJeElERTVNeTR5TnpZZ01USXdMamczTkNBeE9USXVOakF6SURFeE15NDNNalVnTVRrd0xqazJPRU14TURZdU5UY3lJREU0T1M0ek56VWdPVGt1T0RRek5TQXhPRFl1TXpReUlEa3pMamszTXpnZ01UZ3lMakEyTlVNNE55NDRORGdnTVRjM0xqUTNOeUE0TWk0NU1UYzVJREUzTVM0MU5UWWdOemt1TlRneElERTJOQzQzTnpsRE56VXVOVFkzTVNBeE5UWXVNekU1SURjekxqVTJOVFlnTVRRM0xqQTVNU0EzTXk0M01qVWdNVE0zTGpjM09VTTNNeTQwTXpNMElERXlPUzQxTlRJZ056UXVPREF4TWlBeE1qRXVNelE1SURjM0xqYzFNVFFnTVRFekxqWXpNa000TWk0NE9EVXlJREV3TUM0eU1pQTVNeTR5TWpJNUlEZzVMakk1TXprZ01UQTJMalUxTVNBNE15NHhPVEkyUXpFeE15NHhOelFnT0RBdU1EazVPU0F4TWpBdU1qVXlJRGM0TGpBeU15QXhNamN1TlRNeElEYzNMakF6TmtNeE16VXVNRFUySURjMkxqQXhNRFlnTVRReUxqWTVOU0EzTmk0d05EZzRJREUxTUM0eU1TQTNOeTR4TkRrMFF6RTFOeTQ1T1RVZ056Z3VNamMxTWlBeE5qVXVOVGcySURnd0xqUXlOek1nTVRjeUxqYzNNaUE0TXk0MU5EWkRNVGN4TGpRMk5TQTRPQzQ1TVRreklERTNNQzR5TURjZ09UUXVNamc1TWlBeE5qZ3VPVGsySURrNUxqWTFOVGhETVRZM0xqYzROaUF4TURVdU1ESXlJREUyTmk0Mk1EWWdNVEV3TGpRMk55QXhOalV1TkRVM0lERXhOUzQ1T0RsV01URTJMakl5Tmt3eE5qQXVNek01SURFeE5pNDBOakpNTVRRMUxqUTFPU0F4TVRZdU5qazVRekUwTkM0eE5Ua2dNVEUyTGpZNU9TQXhORE11TlRBNUlERXhOUzQ1TVNBeE5ETXVOVEE1SURFeE5DNHpNekpXTVRBeExqYzROa014TkRNdU5URTFJREV3TVM0ME5qZ2dNVFF6TGpZd09DQXhNREV1TVRVM0lERTBNeTQzT0NBeE1EQXVPRGcyUXpFME15NDVOVEVnTVRBd0xqWXhOU0F4TkRRdU1UazBJREV3TUM0ek9UUWdNVFEwTGpRNE5DQXhNREF1TWpRMlF6RTBOUzR4T1RFZ09Ua3VPRFUxTkNBeE5EVXVPVGtnT1RrdU5qVXdNU0F4TkRZdU9EQXpJRGs1TGpZMU1ERkRNVFEzTGpZeE5pQTVPUzQyTlRBeElERTBPQzQwTVRVZ09Ua3VPRFUxTkNBeE5Ea3VNVEl5SURFd01DNHlORFpETVRRNUxqUXhNU0F4TURBdU16azFJREUwT1M0Mk5UUWdNVEF3TGpZeE5pQXhORGt1T0RJMUlERXdNQzQ0T0RkRE1UUTVMams1TmlBeE1ERXVNVFU0SURFMU1DNHdPU0F4TURFdU5EWTRJREUxTUM0d09UY2dNVEF4TGpjNE5sWXhNVEF1TXpFeVNERTFPQzR6T1V3eE5UTXVPVGc1SURnNExqYzFOVGxETVRVeExqQTBNeUE0Tnk0Mk9EYzVJREUwTnk0NU56TWdPRFl1T1RjeU5pQXhORFF1T0RRNElEZzJMall5TlRsRE1UUXhJRGcyTGpFMU1qTWdNVE0zTGpFd05TQTROaTR4TlRJeklERXpNeTR5TlRZZ09EWXVOakkxT1VNeE1qa3VNRFF6SURnM0xqRTBOREVnTVRJMExqa3pNeUE0T0M0eU5qYzFJREV5TVM0d05pQTRPUzQ1TlRrelF6RXhOaTQ0TnlBNU1TNDNOemtnTVRFekxqRXlOaUE1TkM0ME5ESXlJREV4TUM0d056WWdPVGN1TnpjeU5VTXhNRFl1TlRNeklERXdNUzQzTXpVZ01UQXpMamd3TXlBeE1EWXVNekU0SURFd01pNHdNeUF4TVRFdU1qYzJRems1TGpjME56Z2dNVEUzTGpneklEazRMalkzTVRnZ01USTBMamN5TXlBNU9DNDROVEUxSURFek1TNDJNemxET1RndU5ERTJNeUF4TXprdU56RTFJRGs1TGpjME56WWdNVFEzTGpjNE9TQXhNREl1TnpVNElERTFOUzR6TWpsRE1UQTFMakE0TWlBeE5qQXVPVEVnTVRBNExqZ3dPU0F4TmpVdU9ETTRJREV4TXk0MU9UZ2dNVFk1TGpZMk1rTXhNVGd1TURBMklERTNNeTR3TXpVZ01USXpMakV5TlNBeE56VXVOREkxSURFeU9DNDFPVEVnTVRjMkxqWTJNa014TXpRdU1ETWdNVGMzTGpreE1TQXhNemt1TlRreklERTNPQzQxT0RFZ01UUTFMakU0TVNBeE56Z3VOall5UXpFMU1DNHpOVGNnTVRjNExqYzJJREUxTlM0MU16TWdNVGM0TGpRNE15QXhOakF1TmpZMUlERTNOeTQ0TXpKRE1UWTFMalEzTVNBeE56Y3VNakF6SURFMk9TNDBNVFFnTVRjMkxqWTBOeUF4TnpJdU5EazBJREUzTmk0eE5qVk1NVGN6TGpJek1pQXhPREV1TXpjMVF6RTJPQzR3TmpnZ01UZzBMamd5TmlBeE5qSXVNemsySURFNE55NDBPVGdnTVRVMkxqUXdPU0F4T0RrdU16QXlXaUlnWm1sc2JEMGlJekF3UVRFNVFTSXZQZzBLUEhCaGRHZ2daRDBpVFRjeUxqQTROemdnTXpBeExqYzVOME0yT0M0eU9EZ2dNamczTGpVME55QTFPUzQ0TnpFeklESTNOeTQyTXpFZ05UQXVNVEU1TXlBeU56Y3VOak14UXpNMkxqZ3dOemdnTWpjM0xqWXpNU0F5TlM0NU9UVXhJREk1Tmk0d09DQXlOUzQ1T1RVeElETXhPQzQ0TVRSRE1qVXVPVGcwT0NBek5ERXVOVFFnTXpZdU56azNOU0F6TlRrdU9UazNJRFV3TGpFd09TQXpOVGt1T1RrM1F6WXdMamcxTmpRZ016VTVMams1TnlBMk9TNDVOek0wSURNME55NDVOemNnTnpNdU1EZzJOeUF6TXpFdU16bElOakF1TnpJNU5FTTFPQzQyTkRVNElETTBNUzR4TkRjZ05UUXVNek0wTlNBek5EY3VPRFlnTkRrdU16VTNNeUF6TkRjdU9EWkROREl1TXpVME9DQXpORGN1T0RZZ016WXVOalUyTnlBek16UXVOVFUzSURNMkxqWTFOamNnTXpFNExqRTJOME16Tmk0Mk5UWTNJRE13TVM0M09EUWdOREl1TXpVeE5DQXlPRGd1TkRneElEUTVMak0xTnpNZ01qZzRMalE0TVVNMU15NDNPREU1SURJNE9DNDBPREVnTlRjdU5qYzNPQ0F5T1RNdU56YzBJRFU1TGprMU16WWdNekF4TGpneE5FdzNNaTR3T0RjNElETXdNUzQzT1RkYUlpQm1hV3hzUFNJalFUVXhNVFZDSWk4K0RRbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRrMUxqSTFOemNnTXpNMUxqTXpOMGczTXk0d09EWTNRemN6TGpBNE5qY2dNelE0TGpRek55QTRNaTQ1TURNNUlETTFPUzR3TnpjZ09UUXVPVGt6TkNBek5Ua3VNRGMzUXpFd055NHdPRE1nTXpVNUxqQTNOeUF4TVRZdU9TQXpORGd1TkRNM0lERXhOaTQ1SURNek5TNHpNemRJTVRBMExqSldNek00TGpBME4wZzROUzQzT0RNNFZqTXpOUzR6T0V3NU5TNHlOVGMzSURNek5TNHpNemRhVFRjekxqQTROamNnTWpnMkxqQXhORWc0TlM0M09EY3lWak16TlM0ek5EZElOek11TURnMk4xWXlPRFl1TURFMFdrMHhNRFF1TWlBeU9UQXVORFUwU0RFeE5pNDVWak16TlM0ek16ZElNVEEwTGpKV01qa3dMalExTkZwTk1UQTBMaklnTXpNNExqQTFRekV3TkM0eU9EY2dNelF3TGpVeElERXdNeTR6TmpjZ016UXlMamt3TXlBeE1ERXVOalFnTXpRMExqY3dOa001T1M0NU1UUXlJRE0wTmk0MU1EZ2dPVGN1TlRJeU9TQXpORGN1TlRjeklEazBMams1SURNME55NDJOamRET1RJdU5EVTNOQ0F6TkRjdU5UY3hJRGt3TGpBMk5qa2dNelEyTGpVd05TQTRPQzR6TkRFMklETTBOQzQzTURORE9EWXVOakUyTWlBek5ESXVPU0E0TlM0Mk9UWTJJRE0wTUM0MU1EY2dPRFV1Tnpnek9DQXpNemd1TURRM1NERXdOQzR5VmpNek9DNHdOVm9pSUdacGJHdzlJaU5CTlRFeE5VSWlMejROQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5NVEl5TGprNU15QXpOVGN1TlRNelNERXpNeTR4TlVNeE16VXVNamt5SURNMU1pNDVOU0F4TXpRdU16RTBJRE0wTVM0NU1qTWdNVE00TGpJeklETTBNaTQzTXpkSU1UUTRMak01TVVNeE5UTXVNVEl4SURNME1pNDJPRE1nTVRVeExqVTBPU0F6TkRndU56Y2dNVFV6TGpRM01TQXpOakJJTVRZekxqWXlPRU14TmprdU56WXlJRE0wTVM0eE5qTWdNVFUyTGpZME15QXlPVFF1TVRnM0lERTBNeTR6TVRFZ01qa3pMalF4TjBNeE16VXVNRFkySURJNU5DNDFOVFFnTVRFM0xqSTJOQ0F6TXpjdU9EVTNJREV5TWk0NU9UTWdNelUzTGpVek0xcE5NVFF6TGpNeE1TQXpNVE11TVRRMFF6RTBNQzQzTURVZ016RTBMamc1TkNBeE16a3VNVEUySURNeE9TNDVNamNnTVRNNExqSXpJRE15Tnk0NU5FTXhNemd1T0RjNUlETXlPQzQyTVRnZ01UTTVMalkyTlNBek1qa3VNVFU1SURFME1DNDFNemtnTXpJNUxqVXlPVU14TkRFdU5ERXpJRE15T1M0NE9UZ2dNVFF5TGpNMU5pQXpNekF1TURnNUlERTBNeTR6TURrZ016TXdMakE0T1VNeE5EUXVNall5SURNek1DNHdPRGtnTVRRMUxqSXdOU0F6TWprdU9EazRJREUwTmk0d056a2dNekk1TGpVeU9VTXhORFl1T1RVeklETXlPUzR4TlRrZ01UUTNMamN6T0NBek1qZ3VOakU0SURFME9DNHpPRGNnTXpJM0xqazBRekUwTnk0NE1URWdNekl3TGpJNE5DQXhORFl1TVRjZ016RTFMalFnTVRRekxqTXhNU0F6TVRNdU1UUTBXaUlnWm1sc2JEMGlJMEUxTVRFMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRFM05pNHdOelVnTWpneExqQTRORWd4TWpndU1EY3pWakk1TUM0ME5URklNVGMyTGpBM05WWXpOVGd1TWpjelNERTROUzQzTWxZeU9UQXVORFV4U0RJd09TNHpNelpXTWpneExqQTRORWd4TnpZdU1EYzFXaUlnWm1sc2JEMGlJMEUxTVRFMVFpSXZQZzBLUEhCaGRHZ2daRDBpVFRJeE5DNDBNVFlnTXpRNExqbFdNamd4TGpBNE5FZ3lNalF1TURZMVZqTTBPQzQ1U0RJME5DNDRPVEZXTXpVNExqSTNTREl4TkM0ME1UWldNelE0TGpsYUlpQm1hV3hzUFNJalFUVXhNVFZDSWk4K0RRbzhMM04yWno0TkNnPT1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCcFpEMGlZVE16T0dVM05UVXRaalpqTnkwME5XRXdMVGhsWXpjdE1HVTRZVGt5WlRNelkyWTJJaUJrWVhSaExXNWhiV1U5SWt4aGVXVnlJREVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZDJsa2RHZzlJamd4Tmk0eU1qSXpOeUlnYUdWcFoyaDBQU0kzTURBdU5UazNJaUIyYVdWM1FtOTRQU0l3SURBZ09ERTJMakl5TWpNM0lEY3dNQzQxT1RjaVBqeHdZWFJvSUdROUlrMDNOekl1TURJd09TdzNPVGN1T0RrMU1UaGhNelF1T0RFME1qWXNNelF1T0RFME1qWXNNQ3d3TERFdE1UWXVOelExTmpFdE5DNHpNRGcxT1V3eU56Z3VPRFkzTERVek15NHdOREEyT1dFek5TNHdNemswTWl3ek5TNHdNemswTWl3d0xEQXNNUzB4TXk0NU1UTTNMVFEzTGpVd01UUTNURFEyTmk0d01EQTJNeXd4TVRjdU9USTBZVE0wTGprNU9UUTFMRE0wTGprNU9UUTFMREFzTUN3eExEUTNMalV3TVRjeExURXpMamt4TXpVNGJEUTNOaTQwTURneUxESTJNQzQxTkRVNVlUTTFMakF6T1RFekxETTFMakF6T1RFekxEQXNNQ3d4TERFekxqa3hNemd5TERRM0xqVXdNVFEzVERnd01pNDNOemNzTnpjNUxqWTNNMkV6TkM0M056RTBMRE0wTGpjM01UUXNNQ3d3TERFdE1qQXVPRFk1TVRRc01UWXVOemswT1RKQk16VXVNVFEzTERNMUxqRTBOeXd3TERBc01TdzNOekl1TURJd09TdzNPVGN1T0RrMU1UaGFiUzB4TXk0NE5qWTNMVGt1TlRjeU1qZGhNamt1TURBd056a3NNamt1TURBd056a3NNQ3d3TERBc016a3VNelU0TmpRdE1URXVOVEk0T0V3NU9UZ3VOVFl3TWl3ME1Ea3VNVGM0T0RkQk1qa3VNRE16TkRVc01qa3VNRE16TkRVc01Dd3dMREFzT1RnM0xqQXpNVFkwTERNMk9TNDRNa3cxTVRBdU5qSXpORFFzTVRBNUxqSTNOREE1WVRJNUxqQXdNRGd4TERJNUxqQXdNRGd4TERBc01Dd3dMVE01TGpNMU9EWTFMREV4TGpVeU9EaE1NamN3TGpJeE56UXpMRFE0T0M0ME1UZ3hNMEV5T1M0d016TXpOU3d5T1M0d016TXpOU3d3TERBc01Dd3lPREV1TnpRMkxEVXlOeTQzTnpkYUlpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TVRreExqZzRPRGd5SUMwNU9TNDNNREUxS1NJZ1ptbHNiRDBpSTJZeVpqSm1NaUl2UGp4d1lYUm9JR1E5SWswM09ERXVPRFEwTVRRc05qWTVMak15TkRnM1lUTXlMamN3TlRZM0xETXlMamN3TlRZM0xEQXNNQ3d4TFRFMUxqWTRNall5TFRRdU1ERTJOa3d6T0RBdU9UazVNVGNzTkRVMExqWTJORGN4WVRNeUxqUTJPVFEzTERNeUxqUTJPVFEzTERBc01Dd3hMVEV5TGpreE9Ua3lMVFEwTGpFd09EUk1ORGc0TGpFMU1Td3hPVEV1TURBMVlUTXlMalE1TmprekxETXlMalE1TmprekxEQXNNQ3d4TERRMExqRXdPRFkxTFRFeUxqa3hPVGt5VERreE55NDBNakl5Tml3ek9EZ3VOekk0TmpoaE16SXVORGszTlRnc016SXVORGszTlRnc01Dd3dMREVzTVRJdU9URTVPVE1zTkRRdU1UQTRNemxzTFM0ME16ZzNNeTB1TWpNNU56UXVORE00TnpNdU1qTTVOelJNT0RFd0xqSTNNRFF4TERZMU1pNHpPRGd6TkVFek1pNHpOalF6TERNeUxqTTJORE1zTUN3d0xERXNOemd4TGpnME5ERTBMRFkyT1M0ek1qUTROMW9pSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtDMHhPVEV1T0RnNE9ESWdMVGs1TGpjd01UVXBJaUJtYVd4c1BTSWpaakptTW1ZeUlpOCtQSEJoZEdnZ1pEMGlUVGMyT1M0NE9EZzRNaXczT1RjdU56azROV2d0TlRRellUTXlMalV6TmpreUxETXlMalV6TmpreUxEQXNNQ3d4TFRNeUxqVXRNekl1TlhZdE5ERTVZVE15TGpVek5qa3lMRE15TGpVek5qa3lMREFzTUN3eExETXlMalV0TXpJdU5XZzFORE5oTXpJdU5UTTJPRFVzTXpJdU5UTTJPRFVzTUN3d0xERXNNekl1TlN3ek1pNDFkalF4T1VFek1pNDFNelk0TlN3ek1pNDFNelk0TlN3d0xEQXNNU3czTmprdU9EZzRPRElzTnprM0xqYzVPRFZhSWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3RNVGt4TGpnNE9EZ3lJQzA1T1M0M01ERTFLU0lnWm1sc2JEMGlJMlptWmlJdlBqeHdZWFJvSUdROUlrMDNOamt1T0RnNE9ESXNPREF3TGpJNU9EVm9MVFUwTTJFek5TNHdNemswTnl3ek5TNHdNemswTnl3d0xEQXNNUzB6TlMwek5YWXROREU1WVRNMUxqQXpPVFEzTERNMUxqQXpPVFEzTERBc01Dd3hMRE0xTFRNMWFEVTBNMkV6TlM0d016azBOeXd6TlM0d016azBOeXd3TERBc01Td3pOU3d6TlhZME1UbEJNelV1TURNNU5EY3NNelV1TURNNU5EY3NNQ3d3TERFc056WTVMamc0T0RneUxEZ3dNQzR5T1RnMVdtMHROVFF6TFRRNE0yRXlPUzR3TXpJM05Td3lPUzR3TXpJM05Td3dMREFzTUMweU9Td3lPWFkwTVRsaE1qa3VNRE15TnpVc01qa3VNRE15TnpVc01Dd3dMREFzTWprc01qbG9OVFF6WVRJNUxqQXpNamMyTERJNUxqQXpNamMyTERBc01Dd3dMREk1TFRJNWRpMDBNVGxoTWprdU1ETXlOellzTWprdU1ETXlOellzTUN3d0xEQXRNamt0TWpsYUlpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TVRreExqZzRPRGd5SUMwNU9TNDNNREUxS1NJZ1ptbHNiRDBpSTJVMlpUWmxOaUl2UGp4d1lYUm9JR1E5SWswMU9ESXVPRGt4TlRZc05EVXhMalU0Tm1FME1DNDNOak0xT0N3ME1DNDNOak0xT0N3d0xEQXNNQzB6TWk0MU5URXhOaXd4Tmk0eE9EVTVNeXd5Tmk0NE16azNOaXd5Tmk0NE16azNOaXd3TERBc01DMHpOeTQwTkRreE1pd3lOQzQyTkRjMU4wZzJNak11TnpJMU1EVkJOREF1T0RNek5ESXNOREF1T0RNek5ESXNNQ3d3TERBc05UZ3lMamc1TVRVMkxEUTFNUzQxT0RaYUlpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TVRreExqZzRPRGd5SUMwNU9TNDNNREUxS1NJZ1ptbHNiRDBpSTJVMlpUWmxOaUl2UGp4amFYSmpiR1VnWTNnOUlqRTBPQzR4T1RZMk9TSWdZM2s5SWpRME5TNDVOakF6TmlJZ2NqMGlOalV1TnpVM01qY2lJR1pwYkd3OUlpTmhNekU1TldJaUx6NDhjR0YwYUNCa1BTSk5OekkxTGpJME9EWTRMRFk0TVM0eE56ZzFNV0V6TVM0NE56Z3hNU3d6TVM0NE56Z3hNU3d3TERBc01TMDNMak0xT1RnMkxqZzFhQzAwTXpsaE16RXVPRGMwT1RJc016RXVPRGMwT1RJc01Dd3dMREV0TVRVdU5EWXRNeTQ1TjJ3eExqRTJPVGt5TFRFdU5qZ3NORGd1T1RndE56QXVOVE1zTnpJdU5UZ3dNRGd0TVRBMExqUTVMREV1TURZdE1TNDFNeXd4TVM0ME1UazVNeTB4Tmk0ME5HRTRMak16TmprekxEZ3VNek0yT1RNc01Dd3dMREVzTVRNdU56QXdNVGtzTUd3ek55NDVNems1TkN3MU5DNDJNWFl1TURGc01qSXVNekU1T0RNc016SXVNVFFzTlRNdU1qZ3dNamNzTnpZdU55dzRNQzQ0TURrMU55MHhNVFV1TXpWaE9DNHpORGM0TWl3NExqTTBOemd5TERBc01Dd3hMREV6TGpZNE1ERTRMREJzTlRFdU9ETTVPRFFzTnpNdU9Ua3NNaTQ1T0N3MExqSTFXaUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xURTVNUzQ0T0RnNE1pQXRPVGt1TnpBeE5Ta2lJR1pwYkd3OUlpTXhZekprTTJRaUx6NDhjR0YwYUNCa1BTSk5ORGsxTGpZeE9EUTRMRFV4T1M0M05qZ3dOVUUxTUM0eU9USTNNU3cxTUM0eU9USTNNU3d3TERBc01DdzBOVFV1TkRVNExEVXpPUzQzTXpjM0xETXpMakV4TkN3ek15NHhNVFFzTUN3d0xEQXNOREE1TGpJMU5EVXNOVGN3TGpFME4yZ3hNell1TnpRelFUVXdMak0zT0Rrc05UQXVNemM0T1N3d0xEQXNNQ3cwT1RVdU5qRTRORGdzTlRFNUxqYzJPREExV2lJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9MVEU1TVM0NE9EZzRNaUF0T1RrdU56QXhOU2tpSUdacGJHdzlJaU5qWTJNaUx6NDhjR0YwYUNCa1BTSk5OekUzTGpnNE9EZ3lMRFk0TXk0d01qZzBPR2d0TkRNNVlUTXlMamszTURBM0xETXlMamszTURBM0xEQXNNQ3d4TFRNekxUTXpWak01T1M0M09EZzNNMkV6TXk0d016Y3pOQ3d6TXk0d016Y3pOQ3d3TERBc01Td3pNeTB6TTJnME16bGhNek11TURNM016UXNNek11TURNM016UXNNQ3d3TERFc016TXNNek5XTmpVd0xqQXlPRFE0WVRNeUxqazJNakV4TERNeUxqazJNakV4TERBc01Dd3hMVE16TERNeldtMHRORE01TFRNeE5DNHlNemszTldFek1TNHdNelV5TERNeExqQXpOVElzTUN3d0xEQXRNekVzTXpGV05qVXdMakF5T0RRNFlUTXdMamszTURjM0xETXdMamszTURjM0xEQXNNQ3d3TERNeExETXhhRFF6T1dFek1DNDVOak0zTERNd0xqazJNemNzTUN3d0xEQXNNekV0TXpGV016azVMamM0T0RjellUTXhMakF6TlRJeExETXhMakF6TlRJeExEQXNNQ3d3TFRNeExUTXhXaUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xURTVNUzQ0T0RnNE1pQXRPVGt1TnpBeE5Ta2lJR1pwYkd3OUlpTXhZekprTTJRaUx6NDhMM04yWno0TkNnPT1cIiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuXHJcbmltcG9ydCBnZXRNZWRpYVNvdXJjZSBmcm9tICdAL3V0aWxzL2dldC1tZWRpYS1zb3VyY2UnO1xyXG5cclxuQ2lyY2xlQXZhdGFyLnByb3BUeXBlcyA9IHtcclxuICBhdmF0YXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuQ2lyY2xlQXZhdGFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhdmF0YXI6IG51bGwsXHJcbiAgc2l6ZTogJzMyJ1xyXG59O1xyXG5cclxubGV0IHN0eWxlcyA9IHtcclxuICB0YWlsd2luZDoge1xyXG4gICAgZnJhbWU6IGBcclxuICAgICAgYm9yZGVyLTRcclxuICAgICAgYm9yZGVyLWFjY2VudFxyXG4gICAgICBtaW4tdy1taW5cclxuICAgICAgcC0yXHJcbiAgICAgIHJvdW5kZWQtZnVsbFxyXG4gICAgICBzaGFkb3dcclxuICAgIGAsXHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgb3ZlcmZsb3ctaGlkZGVuXHJcbiAgICAgIHJvdW5kZWQtZnVsbFxyXG4gICAgYCxcclxuICAgIGdlbmVyaWM6IHtcclxuICAgICAgaW1hZ2U6IGBcclxuICAgICAgICBtYXgtaC1mdWxsXHJcbiAgICAgICAgbWF4LXctZnVsbFxyXG4gICAgICBgLFxyXG4gICAgICBub0F2YXRhcjogYFxyXG4gICAgICAgIGJnLXNvZnRcclxuICAgICAgICBmbGV4XHJcbiAgICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgICBmbGV4LXJvd1xyXG4gICAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICAgIGp1c3RpZnktY2VudGVyXHJcbiAgICAgICAgdGV4dC1hY2NlbnRcclxuICAgICAgYFxyXG4gICAgfSxcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaXJjbGVBdmF0YXIoeyBhdmF0YXIsIHNpemUgfSkge1xyXG4gIGNvbnN0IGdldENvbnRhaW5lclN0eWxlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgJHtzdHlsZXMudGFpbHdpbmQuY29udGFpbmVyfSBoLSR7c2l6ZX0gdy0ke3NpemV9XHJcbiAgICBgO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldE5vQXZhdGFyU3R5bGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAke3N0eWxlcy50YWlsd2luZC5nZW5lcmljLm5vQXZhdGFyfSBoLSR7c2l6ZX0gdy0ke3NpemV9XHJcbiAgICBgO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhaWx3aW5kLmZyYW1lfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENvbnRhaW5lclN0eWxlKCl9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGF2YXRhciAmJiBhdmF0YXIudXJsXHJcbiAgICAgICAgICAgID9cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17Z2V0TWVkaWFTb3VyY2UoYXZhdGFyKX1cclxuICAgICAgICAgICAgICBhbHQ9XCJGb3RvIGRlIHVzdWFyaW9cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhaWx3aW5kLmdlbmVyaWMuaW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldE5vQXZhdGFyU3R5bGUoKX0+XHJcbiAgICAgICAgICAgICAgPFVzZXIgc2l6ZT17c2l6ZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVmcmVzaEN3IH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcblxyXG5Mb2FkTW9yZUJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGZldGNoZXI6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcblxyXG5Mb2FkTW9yZUJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gIGZldGhlcjogKCkgPT4geyB9XHJcbn07XHJcblxyXG5jb25zdCBjbGFzc2VzID0ge1xyXG4gIGRlZmF1bHQ6IGBcclxuICAgIGN1cnNvci1wb2ludGVyXHJcbiAgICBmbGV4XHJcbiAgICBmbGV4LW5vd3JhcFxyXG4gICAgZmxleC1yb3dcclxuICAgIGZvbnQtYm9sZFxyXG4gICAgaXRlbXMtY2VudGVyXHJcbiAgICBqdXN0aWZ5LWNlbnRlclxyXG4gICAgcC0zXHJcbiAgICByb3VuZGVkLWxnXHJcbiAgYCxcclxuXHJcbiAgZGlzYWJsZWQ6IGBcclxuICAgIGJnLWluYWN0aXZlXHJcbiAgICBzaGFkb3ctaW5uZXJcclxuICAgIHRleHQtc2Vjb25kYXJ5XHJcbiAgYCxcclxuXHJcbiAgZW5hYmxlZDogYFxyXG4gICAgYmctYWNjZW50XHJcbiAgICBsZzpob3ZlcjpiZy1pbmFjdGl2ZVxyXG4gICAgbGc6aG92ZXI6dGV4dC1wcmltYXJ5XHJcbiAgICB0ZXh0LWJzZVxyXG4gICAgc2hhZG93XHJcbiAgYFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZE1vcmVCdXR0b24oeyBkaXNhYmxlZCwgZmV0Y2hlciB9KSB7XHJcbiAgY29uc3QgcmVmcmVzaEljb24gPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGxvYWRNb3JlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCFkaXNhYmxlZCkge1xyXG4gICAgICByZWZyZXNoSWNvbi5jdXJyZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGUtcm90YXRlQ2VudGVyJyk7XHJcblxyXG4gICAgICAvLzogY3JlYXRlIGFuIHNtYWxsIGVmZmVjdCBvZiBkZWxheSBiZWZvcmUgbG9hZGluZyBtb3JlIHByb2R1Y3RzXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoZXIoKTtcclxuICAgICAgICByZWZyZXNoSWNvbi5jdXJyZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGUtcm90YXRlQ2VudGVyJyk7XHJcbiAgICAgIH0sIDE1MDApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGxvYWRNb3JlKGV2ZW50KX1cclxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRlZmF1bHR9ICR7ZGlzYWJsZWQgPyBjbGFzc2VzLmRpc2FibGVkIDogY2xhc3Nlcy5lbmFibGVkfWB9XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIHJlZj17cmVmcmVzaEljb259IGNsYXNzTmFtZT1cIm1yLTJcIj48UmVmcmVzaEN3IHNpemU9XCIxOFwiIC8+PC9zcGFuPlxyXG4gICAgICB7XHJcbiAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgID8gPHNwYW4+Tm8gaGF5IG3DoXMgcHJvZHVjdG9zPC9zcGFuPlxyXG4gICAgICAgICAgOiA8c3Bhbj5Nw6FzIHByb2R1Y3Rvczwvc3Bhbj5cclxuICAgICAgfVxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5PdXRsaW5lQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuT3V0bGluZUJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGFiZWw6ICdPdXRsaW5lIGJ1dHRvbidcclxufTtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSBgXHJcbiAgYm9yZGVyLTJcclxuICBib3JkZXItYWNjZW50XHJcbiAgZmxleFxyXG4gIGZsZXgtcm93XHJcbiAgZmxleC1ub3dyYXBcclxuICBmb250LWJvbGRcclxuICBob3ZlcjpiZy1hY2NlbnRcclxuICBob3Zlcjp0ZXh0LWJzZVxyXG4gIGl0ZW1zLWNlbnRlclxyXG4gIGp1c3RpZnktY2VudGVyXHJcbiAgcC0yXHJcbiAgcm91bmRlZC1sZ1xyXG4gIHRleHQtYWNjZW50XHJcbiAgdHJhbnNpdGlvbi1hbGxcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE91dGxpbmVCdXR0b24oeyBsYWJlbCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT57bGFiZWx9PC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgaXNUb3VjaEVuYWJsZWQgZnJvbSAnQC91dGlscy9kZXRlY3QtdG91Y2gtZGV2aWNlJztcclxuaW1wb3J0IGZvcm1hdFByaWNlIGZyb20gJ0AvdXRpbHMvZm9ybWF0LXByaWNlJztcclxuaW1wb3J0IGdldE1lZGlhU291cmNlIGZyb20gJ0AvdXRpbHMvZ2V0LW1lZGlhLXNvdXJjZSc7XHJcblxyXG5Qcm9kdWN0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdDogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG5cclxuUHJvZHVjdENhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHByb2R1Y3Q6IG51bGxcclxufTtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY29udGFpbmVyOiBgXHJcbiAgICBoLTQwXHJcbiAgICBtZDpoLTcyXHJcbiAgICBvdmVyZmxvdy1oaWRkZW5cclxuICAgIHJlbGF0aXZlXHJcbiAgICBsZzpoLTk2XHJcbiAgICBsZzpyb3VuZGVkLXhsXHJcbiAgICByb3VuZGVkLWxnXHJcbiAgICBzaGFkb3dcclxuICBgLFxyXG5cclxuICBpbWFnZTogYFxyXG4gICAgbWluLWgtZnVsbFxyXG4gICAgbWluLXctZnVsbFxyXG4gICAgb2JqZWN0LWNvdmVyXHJcbiAgYCxcclxuXHJcbiAgb2ZmZXI6IHtcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBhYnNvbHV0ZVxyXG4gICAgICBiZy1hY2NlbnRcclxuICAgICAgYmctb3BhY2l0eS05MFxyXG4gICAgICBoLTEvNFxyXG4gICAgICByaWdodC0wXHJcbiAgICAgIHRvcC0wXHJcbiAgICAgIHctZnVsbFxyXG4gICAgICB6LTEwXHJcbiAgICBgLFxyXG4gICAgbGFiZWw6IGBcclxuICAgICAgYWJzb2x1dGVcclxuICAgICAgZm9udC1ib2xkXHJcbiAgICAgIG1kOnJpZ2h0LTFcclxuICAgICAgbWQ6dGV4dC1iYXNlXHJcbiAgICAgIG1kOnRleHQtYnNlXHJcbiAgICAgIG1kOnRvcC0zXHJcbiAgICAgIG1kOnJvdGF0ZS0zNVxyXG4gICAgICBsZzpyaWdodC0yXHJcbiAgICAgIGxnOnRleHQtbGdcclxuICAgICAgbGc6dG9wLTRcclxuICAgICAgcmlnaHQtMFxyXG4gICAgICByb3RhdGUtMzNcclxuICAgICAgdG9wLTJcclxuICAgICAgdGV4dC1ic2VcclxuICAgICAgdGV4dC14c1xyXG4gICAgICB0cmFuc2Zvcm1cclxuICAgIGBcclxuICB9LFxyXG5cclxuICBwcm9kdWN0OiB7XHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgYWJzb2x1dGVcclxuICAgICAgYm90dG9tLTBcclxuICAgICAgZm9udC1ib2xkXHJcbiAgICAgIGZvbnQtZGlzcGxheVxyXG4gICAgICBtZDpwLTNcclxuICAgICAgbWQ6dGV4dC1sZ1xyXG4gICAgICBsZzpweS00XHJcbiAgICAgIGxnOnB4LTZcclxuICAgICAgbGc6dGV4dC0yeGxcclxuICAgICAgcHgtMlxyXG4gICAgICBweS0xXHJcbiAgICAgIHRleHQtYnNlXHJcbiAgICAgIHotMTBcclxuICAgIGBcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgb2ZmZXI6IHsgY2xpcFBhdGg6ICdwb2x5Z29uKDU0JSAwLCAxMDAlIDEwMCUsIDEwMCUgMCknIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RDYXJkKHsgcHJvZHVjdCB9KSB7XHJcbiAgY29uc3QgW2lzSG92ZXIsIHNldElzSG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBhbmltYXRlT25Ib3ZlciA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBpZiAoaXNUb3VjaEVuYWJsZWQoKSkge1xyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGUtc2NhbGVVcENlbnRlcicpO1xyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGUtc2NhbGVEb3duQ2VudGVyJyk7XHJcblxyXG4gICAgICBzZXRJc0hvdmVyKCFpc0hvdmVyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfVxyXG4gICAgICBvbk1vdXNlRW50ZXI9e2FuaW1hdGVPbkhvdmVyfVxyXG4gICAgICBvbk1vdXNlTGVhdmU9e2FuaW1hdGVPbkhvdmVyfVxyXG4gICAgPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPXtnZXRNZWRpYVNvdXJjZShwcm9kdWN0LmNvdmVyKX1cclxuICAgICAgICBhbHQ9e3Byb2R1Y3QuY292ZXIuYWx0ZXJuYXRpdmVUZXh0fVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHtwcm9kdWN0Lm9mZmVycy5sZW5ndGggIT09IDAgJiZcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5vZmZlci5jb250YWluZXJ9IHN0eWxlPXtzdHlsZXMub2ZmZXJ9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmVyLmxhYmVsfT7CoU9mZXJ0YSE8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3QuY29udGFpbmVyfT5cclxuICAgICAgICA8cD57cHJvZHVjdC5uYW1lfTwvcD5cclxuICAgICAgICA8cD57Zm9ybWF0UHJpY2UoJ01YTicsIHByb2R1Y3QucHJpY2UpfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoZXZyb25Eb3duIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcblxyXG5Ecm9wZG93bi5wcm9wVHlwZXMgPSB7XHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbkRyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsYWJlbDogJ0Ryb3Bkb3duJ1xyXG59O1xyXG5cclxuY29uc3QgY2xhc3NlcyA9IHtcclxuICBjb250YWluZXI6IGBcclxuICAgIGZsZXhcclxuICAgIGZsZXgtcm93XHJcbiAgICBmbGV4LW5vd3JhcFxyXG4gICAgZm9udC1ib2xkXHJcbiAgICBpdGVtcy1jZW50ZXJcclxuICBgLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcGRvd24oeyBjaGlsZHJlbiA9ICcnLCBsYWJlbCwgb25DbGljayB9KSB7XHJcbiAgY29uc3QgYXJyb3dJY29uID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gICAgYXJyb3dJY29uLmN1cnJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYW5pbWF0ZS1mbGlwSG9yaXpvbnRhbEJvdHRvbScpO1xyXG4gICAgb25DbGljaygpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YSBvbkNsaWNrPXthbmltYXRlfSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0xXCI+e2xhYmVsfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiByZWY9e2Fycm93SWNvbn0+PENoZXZyb25Eb3duIHNpemU9XCIxOFwiIC8+PC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBjdWF0bExvZ28gZnJvbSAnQC9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnJztcclxuaW1wb3J0IGZhY2Vib29rTG9nbyBmcm9tICdAL2Fzc2V0cy9pbWFnZXMvZmFjZWJvb2tfY2lyY2xlLnBuZyc7XHJcbmltcG9ydCBpbnN0YWdyYW1Mb2dvIGZyb20gJ0AvYXNzZXRzL2ltYWdlcy9pbnN0YWdyYW1fc3F1YXJlLnBuZyc7XHJcblxyXG5jb25zdCBjbGFzc2VzID0ge1xyXG4gIGNvbnRhaW5lcjogYFxyXG4gICAgaGlkZGVuXHJcbiAgICBtZDpiZy1ic2VcclxuICAgIG1kOmJsb2NrXHJcbiAgICBtZDpib3R0b20tMFxyXG4gICAgbWQ6cC0xMlxyXG4gICAgbWQ6c2hhZG93XHJcbiAgICBtZDp3LWZ1bGxcclxuICBgLFxyXG5cclxuICBpbWFnZTogYFxyXG4gICAgbWF4LWgtZnVsbFxyXG4gICAgbWF4LXctZnVsbFxyXG4gIGAsXHJcblxyXG4gIHNvY2lhbDoge1xyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1yb3dcclxuICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICAgIGp1c3RpZnktYmV0d2VlblxyXG4gICAgICB3LWZ1bGxcclxuICAgIGAsXHJcbiAgICBsb2dvOiBgXHJcbiAgICAgIGgtMTJcclxuICAgIGAsXHJcbiAgICBsaW5rczoge1xyXG4gICAgICBjb250YWluZXI6IGBcclxuICAgICAgICBmbGV4XHJcbiAgICAgICAgZmxleC1yb3dcclxuICAgICAgICBoLWZ1bGxcclxuICAgICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAgYCxcclxuICAgICAgaXRlbTogYFxyXG4gICAgICAgIGFuaW1hdGUtaGVhcnRiZWF0XHJcbiAgICAgICAgaC05XHJcbiAgICAgICAgbWwtM1xyXG4gICAgICBgXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbGVnYWxzOiB7XHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgYm9yZGVyLXNlY29uZGFyeVxyXG4gICAgICBib3JkZXItdC0yXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1yb3dcclxuICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICAgIGp1c3RpZnktYmV0d2VlblxyXG4gICAgICBtdC01XHJcbiAgICAgIHB0LTNcclxuICAgICAgdy1mdWxsXHJcbiAgICBgLFxyXG4gICAgY29weXJpZ2h0czogYFxyXG4gICAgICBmb250LWJvbGRcclxuICAgICAgdGV4dC1zZWNvbmRhcnlcclxuICAgICAgdGV4dC14c1xyXG4gICAgICB1cHBlcmNhc2VcclxuICAgIGAsXHJcbiAgICBsaW5rczoge1xyXG4gICAgICBjb250YWluZXI6IGBcclxuICAgICAgICBmbGV4XHJcbiAgICAgICAgZmxleC1yb3dcclxuICAgICAgYCxcclxuICAgICAgYW5jaG9yOiBgXHJcbiAgICAgICAgZmxleFxyXG4gICAgICAgIGZsZXgtcm93XHJcbiAgICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICAgICAgbWwtNFxyXG4gICAgICAgIHRleHQtc2Vjb25kYXJ5XHJcbiAgICAgICAgdW5kZXJsaW5lXHJcbiAgICAgIGAsXHJcbiAgICAgIGxhYmVsOiBgXHJcbiAgICAgICAgZm9udC1ib2xkXHJcbiAgICAgICAgbXItMVxyXG4gICAgICAgIHRleHQteHNcclxuICAgICAgICB1cHBlcmNhc2VcclxuICAgICAgYFxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsLmxvZ299PlxyXG4gICAgICAgICAgPGltZyBzcmM9e2N1YXRsTG9nb30gYWx0PVwiTG9nb1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsLmxpbmtzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8cD5Tw61ndWVub3MgZW4gcmVkZXMgc29jaWFsZXM6PC9wPlxyXG5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaG9tZS5waHA/cmVmPXdpemFyZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWwubGlua3MuaXRlbX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2ZhY2Vib29rTG9nb30gYWx0PVwiRmFjZWJvb2tcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaW52aXRlcy9jb250YWN0Lz9pPTFqNGN3bHJ4eHB5MW8mdXRtX2NvbnRlbnQ9a2tydDB4a1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWwubGlua3MuaXRlbX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2luc3RhZ3JhbUxvZ299IGFsdD1cIkluc3RhZ3JhbVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWdhbHMuY29udGFpbmVyfT5cclxuICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZ2Fscy5jb3B5cmlnaHRzfT5cclxuICAgICAgICAgIMKpIDIwMjAgcG9yIEN1YXRsLiBUb2RvcyBsb3MgZGVyZWNob3MgcmVzZXJ2YWRvcy5cclxuICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZ2Fscy5saW5rcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWdhbHMubGlua3MuYW5jaG9yfT5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWdhbHMubGlua3MubGFiZWx9PlxyXG4gICAgICAgICAgICAgIEFjZXJjYSBkZSBub3NvdHJvc1xyXG4gICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWdhbHMubGlua3MuYW5jaG9yfT5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWdhbHMubGlua3MubGFiZWx9PlxyXG4gICAgICAgICAgICAgIFBvbMOtdGljYSBkZSBwcml2YWNpZGFkXHJcbiAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvY2FyZHMvUHJvZHVjdENhcmQnO1xyXG5pbXBvcnQgSVByb2R1Y3QgZnJvbSAnQC9tb2RlbHMvSVByb2R1Y3QnO1xyXG5cclxuUHJvZHVjdHNHYWxsZXJ5LnByb3BUeXBlcyA9IHtcclxuICBwcm9kdWN0czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcclxufTtcclxuXHJcblByb2R1Y3RzR2FsbGVyeS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgcHJvZHVjdHM6IFtdXHJcbn07XHJcblxyXG5jb25zdCBjbGFzc2VzID0ge1xyXG4gIGNvbnRhaW5lcjogYFxyXG4gICAgZ2FwLTdcclxuICAgIGdyaWRcclxuICAgIGdyaWQtY29scy0yXHJcbiAgICBtZDpncmlkLWNvbHMtM1xyXG4gICAgbGc6Z3JpZC1jb2xzLTRcclxuICBgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c0dhbGxlcnkoeyBwcm9kdWN0cyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIHtcclxuICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3Q6IElQcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICA8TGluayBrZXk9e3Byb2R1Y3QuaWR9IGhyZWY9e2AvcHJvZHVjdHMvJHtwcm9kdWN0LnNsdWd9YH0+XHJcbiAgICAgICAgICAgIDxhPjxQcm9kdWN0Q2FyZCBwcm9kdWN0PXtwcm9kdWN0fSAvPjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IElDYXRlZ29yeSBmcm9tICdAL21vZGVscy9JQ2F0ZWdvcnknO1xyXG5pbXBvcnQgSVN1YmNhdGVnb3J5IGZyb20gJ0AvbW9kZWxzL0lTdWJjYXRlZ29yeSc7XHJcblxyXG5DYXRlZ29yaWVzTWVudS5wcm9wVHlwZXMgPSB7XHJcbiAgZGVwYXJ0bWVudDogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbkNhdGVnb3JpZXNNZW51LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkZXBhcnRtZW50OiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgY2xhc3NlcyA9IHtcclxuICBjb250YWluZXI6IGBcclxuICAgIGdhcC02XHJcbiAgICBncmlkXHJcbiAgICBtZDpncmlkLWNvbHMtM1xyXG4gIGAsXHJcblxyXG4gIGl0ZW06IGBcclxuICAgIGN1cnNvci1wb2ludGVyXHJcbiAgICBmb250LWJvbGRcclxuICAgIHRleHQtc2Vjb25kYXJ5XHJcbiAgICB1cHBlcmNhc2VcclxuICBgLFxyXG5cclxuICBzdWJjYXRlZ29yaWVzOiB7XHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgbWwtNFxyXG4gICAgYCxcclxuICAgIGl0ZW06IGBcclxuICAgICAgY3Vyc29yLXBvaW50ZXJcclxuICAgICAgaG92ZXI6dGV4dC1hY2NlbnRcclxuICAgICAgbXktMVxyXG4gICAgYFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3JpZXNNZW51KHsgZGVwYXJ0bWVudCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIHtcclxuICAgICAgICBkZXBhcnRtZW50LmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeTogSUNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICA8dWwga2V5PXtjYXRlZ29yeS5zbHVnfT5cclxuICAgICAgICAgICAgPGEgaHJlZj17YC9zdG9yZS9wcm9kdWN0cz9kZXBhcnRtZW50PSR7ZGVwYXJ0bWVudC5zbHVnfSZjYXRlZ29yeT0ke2NhdGVnb3J5LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT57Y2F0ZWdvcnkubmFtZX08L2xpPlxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YmNhdGVnb3JpZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5zdWJjYXRlZ29yaWVzLm1hcCgoc3ViY2F0ZWdvcnk6IElTdWJjYXRlZ29yeSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17c3ViY2F0ZWdvcnkuc2x1Z31cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3N0b3JlL3Byb2R1Y3RzP2RlcGFydG1lbnQ9JHtkZXBhcnRtZW50LnNsdWd9JmNhdGVnb3J5PSR7Y2F0ZWdvcnkuc2x1Z30mc3ViY2F0ZWdvcnk9JHtzdWJjYXRlZ29yeS5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YmNhdGVnb3JpZXMuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c3ViY2F0ZWdvcnkubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKSlcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoZXZyb25SaWdodCB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5cclxuaW1wb3J0IENhdGVnb3JpZXNNZW51IGZyb20gJy4vQ2F0ZWdvcmllc01lbnUnO1xyXG5pbXBvcnQgSURlcGFydG1lbnQgZnJvbSAnQC9tb2RlbHMvSURlcGFydG1lbnQnO1xyXG5pbXBvcnQgaXNUb3VjaEVuYWJsZWQgZnJvbSAnQC91dGlscy9kZXRlY3QtdG91Y2gtZGV2aWNlJztcclxuXHJcbkRlcGFydG1lbnRzTWVudS5wcm9wVHlwZXMgPSB7XHJcbiAgZGVwYXJ0bWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpXHJcbn07XHJcblxyXG5EZXBhcnRtZW50c01lbnUuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRlcGFydG1lbnRzOiBbXVxyXG59O1xyXG5cclxuY29uc3QgY2xhc3NlcyA9IHtcclxuICBjb250YWluZXI6IGBcclxuICAgIGFuaW1hdGUtZXhwYW5kVmVydGljYWxseVxyXG4gICAgYmctYnNlXHJcbiAgICBmbGV4XHJcbiAgICBmbGV4LW5vd3JhcFxyXG4gICAgZmxleC1yb3dcclxuICAgIHctZnVsbFxyXG4gIGAsXHJcblxyXG4gIGRlcGFydG1lbnRzTWVudToge1xyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIGJnLWFjY2VudFxyXG4gICAgICBmb250LWJvbGRcclxuICAgICAgcHktNFxyXG4gICAgICBtZDpweS03XHJcbiAgICAgIHRleHQtYnNlXHJcbiAgICAgIG1kOnctMS80XHJcbiAgICAgIHctMS8zXHJcbiAgICBgLFxyXG4gICAgaXRlbTogYFxyXG4gICAgICBhY3RpdmU6YmctYnNlXHJcbiAgICAgIGFjdGl2ZTp0ZXh0LXByaW1hcnlcclxuICAgICAgY3Vyc29yLXBvaW50ZXJcclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICBmbGV4LXJvd1xyXG4gICAgICBob3ZlcjpiZy1ic2VcclxuICAgICAgaG92ZXI6dGV4dC1wcmltYXJ5XHJcbiAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICBqdXN0aWZ5LWJldHdlZW5cclxuICAgICAgcC0zXHJcbiAgICBgXHJcbiAgfSxcclxuXHJcbiAgY2F0ZWdvcmllc01lbnU6IHtcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBmbGV4LTFcclxuICAgICAgbWQ6cHgtMTJcclxuICAgICAgbWQ6cHktOVxyXG4gICAgICBwLTZcclxuICAgIGAsXHJcbiAgICB0aXRsZTogYFxyXG4gICAgICBib3JkZXItYi0yXHJcbiAgICAgIGJvcmRlci1zZWNvbmRhcnlcclxuICAgICAgZm9udC1kaXNwbGF5XHJcbiAgICAgIG1iLTZcclxuICAgICAgbWQ6bWItOVxyXG4gICAgICBwYi0zXHJcbiAgICAgIHRleHQtMnhsXHJcbiAgICAgIHRleHQtYWNjZW50XHJcbiAgICBgXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVwYXJ0bWVudHNNZW51KHsgZGVwYXJ0bWVudHMgfSkge1xyXG4gIGNvbnN0IFtkZXBhcnRtZW50LCBzZXREZXBhcnRtZW50XSA9IHVzZVN0YXRlPElEZXBhcnRtZW50PihkZXBhcnRtZW50c1swXSk7XHJcblxyXG4gIGNvbnN0IHNob3dDYXRlZ29yaWVzID0gKGV2ZW50OiBhbnksIGl0ZW06IElEZXBhcnRtZW50KTogdm9pZCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RGVwYXJ0bWVudChpdGVtKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXBhcnRtZW50c01lbnUuY29udGFpbmVyfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBkZXBhcnRtZW50cy5tYXAoKGl0ZW06IElEZXBhcnRtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc1RvdWNoRW5hYmxlZCgpXHJcbiAgICAgICAgICAgICAgPyAvLzogb24gdG91Y2ggZGV2aWNlcyBjbGlja2luZyBvbiB0aGlzIGl0ZW0gd2lsbCBzaG93IGNhdGVnb3JpZXNcclxuICAgICAgICAgICAgICA8YSBrZXk9e2l0ZW0uc2x1Z30gb25DbGljaz17KGV2dCkgPT4gc2hvd0NhdGVnb3JpZXMoZXZ0LCBpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmRlcGFydG1lbnRzTWVudS5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgc2l6ZT1cIjE4XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDogLy86IG9uIG5vbi10b3VjaCBkZXZpY2VzIGNsaWNraW5nIG9uIHRoaXMgaXRlbSB3aWxsIHJlZGlyZWN0XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5zbHVnfVxyXG4gICAgICAgICAgICAgICAgaHJlZj17YC9zdG9yZS9wcm9kdWN0cz9kZXBhcnRtZW50PSR7aXRlbS5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0RGVwYXJ0bWVudChpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlcGFydG1lbnRzTWVudS5pdGVtfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPENoZXZyb25SaWdodCBzaXplPVwiMThcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhdGVnb3JpZXNNZW51LmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGEgaHJlZj17YC9zdG9yZS9wcm9kdWN0cz9kZXBhcnRtZW50PSR7ZGVwYXJ0bWVudC5zbHVnfWB9PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yaWVzTWVudS50aXRsZX0+XHJcbiAgICAgICAgICAgIHtkZXBhcnRtZW50Lm5hbWV9XHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGVwYXJ0bWVudCAmJlxyXG4gICAgICAgICAgPENhdGVnb3JpZXNNZW51IGRlcGFydG1lbnQ9e2RlcGFydG1lbnR9IC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vcmVIb3Jpem9udGFsLCBNb3JlVmVydGljYWwsIFNob3BwaW5nQmFnIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcblxyXG5pbXBvcnQgY2FydmluZ0ltYWdlIGZyb20gJ0AvYXNzZXRzL2ltYWdlcy9mcmFtZS5zdmcnO1xyXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJ0AvYXNzZXRzL2ltYWdlcy9sb2dvLnN2Zyc7XHJcbmltcG9ydCBDaXJjbGVBdmF0YXIgZnJvbSAnQC9jb21wb25lbnRzL2F2YXRhcnMvQ2lyY2xlQXZhdGFyJztcclxuaW1wb3J0IE91dGxpbmVCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2J1dHRvbnMvT3V0bGluZUJ1dHRvbic7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdAL2NvbXBvbmVudHMvZHJvcGRvd25zL0Ryb3Bkb3duJztcclxuaW1wb3J0IERlcGFydG1lbnRzTWVudSBmcm9tICdAL2NvbXBvbmVudHMvbWVudXMvRGVwYXJ0bWVudHNNZW51JztcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJ0AvY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCBPcmRlckNvbnRleHQgZnJvbSAnQC9jb250ZXh0L09yZGVyQ29udGV4dCc7XHJcblxyXG5PbW5pYmFyLnByb3BUeXBlcyA9IHtcclxuICBtZW51RW50cmllczogUHJvcFR5cGVzLmFycmF5XHJcbn07XHJcblxyXG5PbW5pYmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBtZW51RW50cmllczogW11cclxufTtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY2FydmluZzogYFxyXG4gICAgYmctcmVwZWF0LXhcclxuICAgIGgtOFxyXG4gICAgdy1mdWxsXHJcbiAgYCxcclxuXHJcbiAgY29udGFpbmVyOiBgXHJcbiAgICBiZy1ic2VcclxuICAgIGZsZXhcclxuICAgIGZsZXgtY29sXHJcbiAgICBmbGV4LW5vd3JhcFxyXG4gICAgaC0yNFxyXG4gICAgbWQ6aC0yOFxyXG4gICAgcmVsYXRpdmVcclxuICAgIHNoYWRvd1xyXG4gICAgdy1mdWxsXHJcbiAgICB6LTUwXHJcbiAgYCxcclxuXHJcbiAgZGVwYXJ0bWVudHM6IHtcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBjdXJzb3ItcG9pbnRlclxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgYCxcclxuICAgIG1lbnU6IGBcclxuICAgICAgYWJzb2x1dGVcclxuICAgICAgbWF4LWgtMS8yXHJcbiAgICAgIHctZnVsbFxyXG4gICAgICB6LTQwXHJcbiAgICBgXHJcbiAgfSxcclxuXHJcbiAgbGlua0dyb3VwOiB7XHJcbiAgICBiYWc6IHtcclxuICAgICAgY29udGFpbmVyOiBgXHJcbiAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgbWQ6ZmxleFxyXG4gICAgICAgIG1kOmZsZXgtcm93XHJcbiAgICAgICAgbWQ6ZmxleC1ub3dyYXBcclxuICAgICAgICBtZDppdGVtcy1jZW50ZXJcclxuICAgICAgICBtZDpqdXN0aWZ5LWNlbnRlclxyXG4gICAgICAgIG1kOmgtMTJcclxuICAgICAgICBtZDpyZWxhdGl2ZVxyXG4gICAgICAgIG1kOnctMTJcclxuICAgICAgYCxcclxuICAgICAgaXRlbXNDb3VudGVyOiBgXHJcbiAgICAgICAgYWJzb2x1dGVcclxuICAgICAgICBiZy1hY2NlbnRcclxuICAgICAgICBib3JkZXItMlxyXG4gICAgICAgIGJvcmRlci1ic2VcclxuICAgICAgICBmbGV4XHJcbiAgICAgICAgZmxleC1yb3dcclxuICAgICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICAgIGZvbnQtYm9sZFxyXG4gICAgICAgIGgtNVxyXG4gICAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICAgIGp1c3RpZnktY2VudGVyXHJcbiAgICAgICAgcmlnaHQtMVxyXG4gICAgICAgIHJvdW5kZWQtZnVsbFxyXG4gICAgICAgIHRleHQtYnNlXHJcbiAgICAgICAgdG9wLTFcclxuICAgICAgICB3LTVcclxuICAgICAgYFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICBqdXN0aWZ5LWVuZFxyXG4gICAgICB3LTEvM1xyXG4gICAgYCxcclxuICAgIHVzZXI6IHtcclxuICAgICAgY29udGFpbmVyOiBgXHJcbiAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgbWQ6Y3Vyc29yLXBvaW50ZXJcclxuICAgICAgICBtZDppbmxpbmUtYmxvY2tcclxuICAgICAgICBtZDptbC00XHJcbiAgICAgIGBcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBsb2dvOiB7XHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4LXJvd1xyXG4gICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICBoLTEyXHJcbiAgICAgIGp1c3RpZnktc3RhcnRcclxuICAgICAgdy0xLzNcclxuICAgIGAsXHJcbiAgICBpbWFnZTogYFxyXG4gICAgICBtYXgtaC1mdWxsXHJcbiAgICAgIG1heC13LWZ1bGxcclxuICAgIGAsXHJcbiAgfSxcclxuXHJcbiAgbmF2YmFyOiBgXHJcbiAgICBmbGV4XHJcbiAgICBmbGV4LTFcclxuICAgIGZsZXgtcm93XHJcbiAgICBmbGV4LW5vd3JhcFxyXG4gICAgaXRlbXMtY2VudGVyXHJcbiAgICBqdXN0aWZ5LWJldHdlZW5cclxuICAgIHB4LTdcclxuICBgXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FydmluZzoge1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke2NhcnZpbmdJbWFnZX0nKWBcclxuICB9LFxyXG4gIGl0ZW1zQ291bnRlcjoge1xyXG4gICAgZm9udFNpemU6ICcwLjc1cmVtJ1xyXG4gIH0sXHJcbiAgdGFpbHdpbmQ6IHtcclxuICAgIGRlcGFydG1lbnRzTWVudToge1xyXG4gICAgICBtZW51Q29udGFpbmVyOiBgXHJcbiAgICAgICAgYWJzb2x1dGVcclxuICAgICAgICBtYXgtaC0xLzJcclxuICAgICAgICBvdmVyZmxvdy15LXNjcm9sbFxyXG4gICAgICAgIHRvcC0yNFxyXG4gICAgICAgIHctZnVsbFxyXG4gICAgICAgIHotNDBcclxuICAgICAgYFxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9tbmliYXIoeyBtZW51RW50cmllcyB9KSB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCB7IG9yZGVyIH0gPSB1c2VDb250ZXh0KE9yZGVyQ29udGV4dCk7XHJcbiAgY29uc3QgW2lzTWVudVZpc2libGUsIHNldElzTWVudVZpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJ2aW5nfSBzdHlsZT17c3R5bGVzLmNhcnZpbmd9PjwvZGl2PlxyXG5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZiYXJ9PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e2NsYXNzZXMubG9nby5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvLmltYWdlfSBzcmM9e2xvZ29JbWFnZX0gYWx0PVwiTG9nb1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVwYXJ0bWVudHMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVwYXJ0YW1lbnRvc1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01lbnVWaXNpYmxlKCFpc01lbnVWaXNpYmxlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtHcm91cC5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01lbnVWaXNpYmxlKCFpc01lbnVWaXNpYmxlKX0+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNNZW51VmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgICA/IDxNb3JlSG9yaXpvbnRhbCAvPlxyXG4gICAgICAgICAgICAgICAgICA6IDxNb3JlVmVydGljYWwgLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPXt1c2VyID8gJy9vcmRlcicgOiAnL2F1dGgnfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rR3JvdXAuYmFnLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTaG9wcGluZ0JhZyAvPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rR3JvdXAuYmFnLml0ZW1zQ291bnRlcn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaXRlbXNDb3VudGVyfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtvcmRlci5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj17dXNlciA/ICcvdXNlci9wcm9maWxlJyA6ICcvYXV0aCd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtHcm91cC51c2VyLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVzZXJcclxuICAgICAgICAgICAgICAgICAgPyA8Q2lyY2xlQXZhdGFyIGF2YXRhcj17dXNlci5hdmF0YXJ9IHNpemU9XCI4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgOiA8T3V0bGluZUJ1dHRvbiBsYWJlbD1cIlJlZ8Otc3RyYXRlIG8gaW5ncmVzYVwiIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgaXNNZW51VmlzaWJsZSAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQuZGVwYXJ0bWVudHNNZW51Lm1lbnVDb250YWluZXJ9PlxyXG4gICAgICAgICAgPERlcGFydG1lbnRzTWVudSBkZXBhcnRtZW50cz17bWVudUVudHJpZXN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIb21lLCBNZXNzYWdlQ2lyY2xlLCBTaG9wcGluZ0JhZywgVXNlciB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5cclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJ0AvY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCBPcmRlckNvbnRleHQgZnJvbSAnQC9jb250ZXh0L09yZGVyQ29udGV4dCc7XHJcblxyXG5UYWJiYXIucHJvcFR5cGVzID0ge1xyXG4gIHBhZ2U6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcblRhYmJhci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgcGFnZTogJ2hvbWUnXHJcbn07XHJcblxyXG5jb25zdCBjbGFzc2VzID0ge1xyXG4gIGNvbnRhaW5lcjogYFxyXG4gICAgZml4ZWRcclxuICAgIGJnLWJzZVxyXG4gICAgYm90dG9tLTBcclxuICAgIGZsZXhcclxuICAgIGZsZXgtbm93cmFwXHJcbiAgICBmbGV4LXJvd1xyXG4gICAgbWQ6aGlkZGVuXHJcbiAgICBvdmVyZmxvdy1oaWRkZW5cclxuICAgIHJvdW5kZWQtdC0yeGxcclxuICAgIHNoYWRvd1xyXG4gICAgdy1mdWxsXHJcbiAgICB6LTUwXHJcbiAgYCxcclxuXHJcbiAgdGFiSXRlbToge1xyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC0xXHJcbiAgICAgIGZsZXgtY29sXHJcbiAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgIGZvbnQtYm9sZFxyXG4gICAgICBoLTE2XHJcbiAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICBqdXN0aWZ5LWNlbnRlclxyXG4gICAgICByZWxhdGl2ZVxyXG4gICAgICB0cmFuc2l0aW9uLWFsbFxyXG4gICAgYFxyXG4gIH0sXHJcblxyXG4gIGJhZzoge1xyXG4gICAgaXRlbXNDb3VudGVyOiBgXHJcbiAgICAgIGFic29sdXRlXHJcbiAgICAgIGJvcmRlci0yXHJcbiAgICAgIGJvcmRlci1ic2VcclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICBmbGV4LXJvd1xyXG4gICAgICBmb250LWJvbGRcclxuICAgICAgaC01XHJcbiAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICBqdXN0aWZ5LWNlbnRlclxyXG4gICAgICByaWdodC02XHJcbiAgICAgIHJvdW5kZWQtZnVsbFxyXG4gICAgICB0ZXh0LWJzZVxyXG4gICAgICB3LTVcclxuICAgIGBcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYmFnOiB7XHJcbiAgICBpdGVtc0NvdW50ZXI6IHtcclxuICAgICAgZm9udFNpemU6ICcwLjc1cmVtJ1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIFRBQl9QQUdFUyB7XHJcbiAgSE9NRSA9ICdob21lJyxcclxuICBCQUcgPSAnYmFnJyxcclxuICBVU0VSID0gJ3VzZXInLFxyXG4gIEhFTFAgPSAnaGVscCdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmJhcih7IHBhZ2UgfTogeyBwYWdlOiBUQUJfUEFHRVMgfSkge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgeyBjb3VudFByb2R1Y3RzIH0gPSB1c2VDb250ZXh0KE9yZGVyQ29udGV4dCk7XHJcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUocGFnZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJdGVtKFRBQl9QQUdFUy5IT01FKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGNsYXNzZXMudGFiSXRlbS5jb250YWluZXIgK1xyXG4gICAgICAgICAgICAoYWN0aXZlSXRlbSA9PT0gVEFCX1BBR0VTLkhPTUUgPyAndGV4dC1hY2NlbnQnIDogJ3RleHQtc2Vjb25kYXJ5JylcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SG9tZSAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXthY3RpdmVJdGVtID09PSBUQUJfUEFHRVMuSE9NRSA/ICcnIDogJ2hpZGRlbid9PlxyXG4gICAgICAgICAgICBJbmljaW9cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9e3VzZXIgPyAnL29yZGVyJyA6ICcvYXV0aCd9PlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJdGVtKFRBQl9QQUdFUy5CQUcpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgY2xhc3Nlcy50YWJJdGVtLmNvbnRhaW5lciArXHJcbiAgICAgICAgICAgIChhY3RpdmVJdGVtID09PSBUQUJfUEFHRVMuQkFHID8gJ3RleHQtYWNjZW50JyA6ICd0ZXh0LXNlY29uZGFyeScpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIGNsYXNzZXMuYmFnLml0ZW1zQ291bnRlciArXHJcbiAgICAgICAgICAgICAgKGFjdGl2ZUl0ZW0gPT09IFRBQl9QQUdFUy5CQUcgPyAnYmctYWNjZW50IHRvcC0xJyA6ICdiZy1zZWNvbmRhcnkgdG9wLTMnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYmFnLml0ZW1zQ291bnRlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NvdW50UHJvZHVjdHMoKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFNob3BwaW5nQmFnIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2FjdGl2ZUl0ZW0gPT09IFRBQl9QQUdFUy5CQUcgPyAnJyA6ICdoaWRkZW4nfT5cclxuICAgICAgICAgICAgQm9sc2FcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9e3VzZXIgPyAnL3VzZXIvcHJvZmlsZScgOiAnL2F1dGgnfT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlSXRlbShUQUJfUEFHRVMuVVNFUil9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBjbGFzc2VzLnRhYkl0ZW0uY29udGFpbmVyICtcclxuICAgICAgICAgICAgKGFjdGl2ZUl0ZW0gPT09IFRBQl9QQUdFUy5VU0VSID8gJ3RleHQtYWNjZW50JyA6ICd0ZXh0LXNlY29uZGFyeScpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFVzZXIgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YWN0aXZlSXRlbSA9PT0gVEFCX1BBR0VTLlVTRVIgPyAnJyA6ICdoaWRkZW4nfT5cclxuICAgICAgICAgICAgWW9cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvaGVscFwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJdGVtKFRBQl9QQUdFUy5IRUxQKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGNsYXNzZXMudGFiSXRlbS5jb250YWluZXIgK1xyXG4gICAgICAgICAgICAoYWN0aXZlSXRlbSA9PT0gVEFCX1BBR0VTLkhFTFAgPyAndGV4dC1hY2NlbnQnIDogJ3RleHQtc2Vjb25kYXJ5JylcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVzc2FnZUNpcmNsZSAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXthY3RpdmVJdGVtID09PSBUQUJfUEFHRVMuSEVMUCA/ICcnIDogJ2hpZGRlbid9PlxyXG4gICAgICAgICAgICBBeXVkYVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuIiwiY29uc3QgQVBJX0RPTUFJTiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9ET01BSU47XHJcbmNvbnN0IFBBR0VfTElNSVQgPSAxMjtcclxuXHJcbmNvbnN0IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0sgPSBgJHtBUElfRE9NQUlOfS9hdXRoL2ZhY2Vib29rL2NhbGxiYWNrYDtcclxuY29uc3QgQVVUSF9GQUNFQk9PS19VUkwgPSBgJHtBUElfRE9NQUlOfS9jb25uZWN0L2ZhY2Vib29rYDtcclxuY29uc3QgQVVUSF9HT09HTEVfQ0FMTEJBQ0sgPSBgJHtBUElfRE9NQUlOfS9hdXRoL2dvb2dsZS9jYWxsYmFja2A7XHJcbmNvbnN0IEFVVEhfR09PR0xFX1VSTCA9IGAke0FQSV9ET01BSU59L2Nvbm5lY3QvZ29vZ2xlYDtcclxuXHJcbmNvbnN0IFNUUklQRV9QVUJMSVNIRURfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJU0hFRF9LRVk7XHJcblxyXG5leHBvcnQge1xyXG4gIEFQSV9ET01BSU4sXHJcbiAgUEFHRV9MSU1JVCxcclxuICBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLLFxyXG4gIEFVVEhfRkFDRUJPT0tfVVJMLFxyXG4gIEFVVEhfR09PR0xFX0NBTExCQUNLLFxyXG4gIEFVVEhfR09PR0xFX1VSTCxcclxuICBTVFJJUEVfUFVCTElTSEVEX0tFWVxyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLXNlc3Npb25zJztcclxuaW1wb3J0IElTZXNzaW9uIGZyb20gJ0AvbW9kZWxzL0lTZXNzaW9uJztcclxuaW1wb3J0IElVc2VyIGZyb20gJ0AvbW9kZWxzL0lVc2VyJztcclxuXHJcbi8vOiB1c2UgdGhpcyBjb250ZXh0IHdoZXJldmVyIHlvdSB3YW50IHRvIGFjY2VzcyB0aGUgQXV0aFByb3ZpZGVyXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xyXG5leHBvcnQgeyBBdXRoUHJvdmlkZXIgfTtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb21wb25lbnQgaW4gdGhlIF9hcHAudHN4IGZpbGUgdG8gc2hhcmUgdGhlIGF1dGhlbnRpY2F0aW9uIHN0YXRlXHJcbi8vOiBnbG9iYWxseVxyXG5mdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8SVVzZXI+KG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBsb2dpbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGlmICgnaWRfdG9rZW4nIGluIHJvdXRlci5xdWVyeSB8fCAnYWNjZXNzX3Rva2VuJyBpbiByb3V0ZXIucXVlcnkpIHtcclxuICAgICAgY29uc3Qgc2Vzc2lvbjogSVNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGxvY2F0aW9uLnNlYXJjaCk7XHJcblxyXG4gICAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdzZXNzaW9uJywgSlNPTi5zdHJpbmdpZnkoc2Vzc2lvbikpO1xyXG4gICAgICBzZXRVc2VyKHNlc3Npb24udXNlcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnc2Vzc2lvbicpO1xyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U2Vzc2lvblN0b3JhZ2UgPSAoKTogSVNlc3Npb24gfCBudWxsID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb24nKSk7XHJcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcigoX2Vycm9yIGFzIFN5bnRheEVycm9yKS5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0VG9rZW4gPSAoKTogc3RyaW5nIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gZ2V0U2Vzc2lvblN0b3JhZ2UoKS50b2tlbjtcclxuICB9O1xyXG5cclxuICAvLzogdXNlIHRoaXMgY3VzdG9tIGhvb2sgdG8gc2V0IHRoZSBsb2NhbCBzZXNzaW9uIGludG8gdGhlIGdsb2JhbCBzdGF0ZSBlYWNoXHJcbiAgLy86IHRpbWUgYSBwYWdlIGlzIHJlZnJlc2hlZDsgdXNlIGl0IG9ubHkgb24gcGFnZSBjb21wb25lbnRzXHJcbiAgY29uc3QgdXNlU2Vzc2lvbiA9ICgpOiB2b2lkID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlc3Npb246IElTZXNzaW9uID0gZ2V0U2Vzc2lvblN0b3JhZ2UoKTtcclxuXHJcbiAgICAgIHNldFVzZXIoc2Vzc2lvbj8udXNlcik7XHJcbiAgICB9LCBbXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNVc2VyTG9nZ2VkSW4gPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gZ2V0U2Vzc2lvblN0b3JhZ2UoKSA/IHRydWUgOiBmYWxzZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgIHVzZXIsIGxvZ2luLCBsb2dvdXQsIGdldFRva2VuLCBpc1VzZXJMb2dnZWRJbiwgdXNlU2Vzc2lvblxyXG4gICAgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSVBheW1lbnRPcmRlciBmcm9tIFwiQC9tb2RlbHMvSVBheW1lbnRPcmRlclwiO1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbnRleHQgd2hlbmV2ZXIgeW91IHdhbnQgdG8gYWNjZXNzIHRoZSBPcmRlclByb3ZpZGVyXHJcbmNvbnN0IE9yZGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlckNvbnRleHQ7XHJcblxyXG5leHBvcnQgeyBPcmRlclByb3ZpZGVyIH07XHJcblxyXG4vLzogdXNlIHRoaXMgY29tcG9uZW50IGluIGFsbCB0aGUgb3RoZXIgY29tcG9uZW50cyB3aGVyZSB5b3Ugd2FudCB0byBhY2Nlc3NcclxuLy86IHRoZSBnbG9iYWwgc3RhdGUgb2YgYSB1c2VyIG9yZGVyXHJcbmZ1bmN0aW9uIE9yZGVyUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcblxyXG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGU8QXJyYXk8SVBheW1lbnRPcmRlcj4+KFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0T3JkZXIgPSAoKTogQXJyYXk8SVBheW1lbnRPcmRlcj4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyJykpIHx8IFtdO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH07XHJcblxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgbyA9IGdldE9yZGVyKClcclxuICAgIHNldE9yZGVyKG8pXHJcbiAgfSxbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzYXZlT3JkZXIob3JkZXIpXHJcbiAgfSxbb3JkZXJdKVxyXG5cclxuICBjb25zdCBjb3VudFByb2R1Y3RzID0gKCk6IG51bWJlciA9PiB7XHJcbiAgICAvL3JldHVybiBvcmRlciA/IG9yZGVyLnZhcmlhbnRzLmxlbmd0aCA6IDA7XHJcbiAgICByZXR1cm4gMFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNhdmVPcmRlciA9IChvcmRlcjogQXJyYXk8SVBheW1lbnRPcmRlcj4pID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlcicsIEpTT04uc3RyaW5naWZ5KG9yZGVyKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkUHJvZHVjdFRvQmFnID0gKHZhcmlhbnRRdWFudGl0eTpudW1iZXIsIHByb2R1Y3Q6SVBheW1lbnRPcmRlcikgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlT3JkZXIgPSBbLi4ub3JkZXJdXHJcbiAgIC8vOiBpZiB0aGUgcHJvZHVjdCBhbmQgdmFyaWFudCBpcyBhbHJlYWR5IHRoZXJlXHJcbiAgIGNvbnN0IGluZGV4T2ZPcmRlckl0ZW0gPSBhY3RpdmVPcmRlci5maW5kSW5kZXgoKG9yZGVySXRlbTogSVBheW1lbnRPcmRlcikgPT4gb3JkZXJJdGVtLnZhcmlhbnQuaWQgPT09IHByb2R1Y3QudmFyaWFudC5pZCk7XHJcbiAgIGlmIChpbmRleE9mT3JkZXJJdGVtICE9PSAtMSkge1xyXG4gICAgIC8vOiB1cGRhdGUgcXVhbnRpdHlcclxuICAgICBjb25zdCBjdXJyZW50UXVhbnRpdHkgPSBhY3RpdmVPcmRlcltpbmRleE9mT3JkZXJJdGVtXS5xdWFudGl0eTtcclxuICAgICBpZiAoY3VycmVudFF1YW50aXR5ICsgdmFyaWFudFF1YW50aXR5IDw9IHByb2R1Y3QudmFyaWFudC5zdG9jaykge1xyXG4gICAgICAgYWN0aXZlT3JkZXJbaW5kZXhPZk9yZGVySXRlbV0ucXVhbnRpdHkgPSBjdXJyZW50UXVhbnRpdHkgKyB2YXJpYW50UXVhbnRpdHk7XHJcbiAgICAgfVxyXG4gICB9IGVsc2Uge1xyXG4gICAgIGFjdGl2ZU9yZGVyLnB1c2goe1xyXG4gICAgICAgcHJvZHVjdDogcHJvZHVjdC5wcm9kdWN0LFxyXG4gICAgICAgdmFyaWFudDogcHJvZHVjdC52YXJpYW50LFxyXG4gICAgICAgcXVhbnRpdHk6IHZhcmlhbnRRdWFudGl0eSxcclxuICAgICAgIG9mZmVyczogcHJvZHVjdC5vZmZlcnNcclxuICAgICB9KTtcclxuICAgfVxyXG4gICAgc2V0T3JkZXIoYWN0aXZlT3JkZXIpO1xyXG4gICAgLy9zYXZlT3JkZXIoYWN0aXZlT3JkZXIpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlUHJvZHVjdCA9IChpdGVtTnVtYmVyKSA9PiB7XHJcbiAgICAgIGFsZXJ0KFwiQk9SUkFSXCIpXHJcbiAgICAgIGNvbnN0IGFjdGl2ZU9yZGVyID0gWy4uLm9yZGVyXVxyXG4gICAgICBhY3RpdmVPcmRlci5zcGxpY2UoaXRlbU51bWJlciwgMSlcclxuICAgICAgc2V0T3JkZXIoYWN0aXZlT3JkZXIpXHJcbiAgICAgIC8vc2F2ZU9yZGVyKG9yZGVyKVxyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG5cclxuICBcclxuXHJcbiAgY29uc3QgYWRkT3JkZXJJdGVtID0gKGl0ZW06IElQYXltZW50T3JkZXIpID0+IHtcclxuICB9O1xyXG5cclxuICAvLzogdXNlIHRoaXMgZnVuY3Rpb24gdG8gYWRkIGEgbmV3IGl0ZW0gdG8gdGhlIG9yZGVyIGluIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBzZXRPcmRlckl0ZW1JbkxTID0gKGFjdGl2ZU9yZGVyOiBBcnJheTxJUGF5bWVudE9yZGVyPikgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29yZGVySXRlbXMnLCBKU09OLnN0cmluZ2lmeShhY3RpdmVPcmRlcikpO1xyXG4gIH07XHJcblxyXG4gIC8vOiB1c2UgdGhpcyBmdW5jdGlvbiB0byBnZXQgdGhlIGN1cnJlbnQgb3JkZXIgb2JqZWN0IGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gIGNvbnN0IGdldE9yZGVySXRlbUZyb21MUyA9ICgpOiBBcnJheTxJUGF5bWVudE9yZGVyPiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXJJdGVtcycpKSB8fCBbXTtcclxuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKChfZXJyb3IgYXMgU3ludGF4RXJyb3IpLm1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9OyovXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8T3JkZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG9yZGVyLCBjb3VudFByb2R1Y3RzLCBhZGRQcm9kdWN0VG9CYWcsIHJlbW92ZVByb2R1Y3QgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvT3JkZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIG9mIHRoZSBBcG9sbG8gQ2xpZW50IHRvIGVuYWJsZSB0aGUgdXNlIG9mIEdyYXBoUUwuXHJcbiAqL1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEFwb2xsb0NsaWVudCxcclxuICBIdHRwTGluayxcclxuICBJbk1lbW9yeUNhY2hlLFxyXG4gIE5vcm1hbGl6ZWRDYWNoZU9iamVjdFxyXG59IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmltcG9ydCB7IEFQSV9ET01BSU4gfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuXHJcbmxldCBhcG9sbG9DbGllbnQ6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+O1xyXG5cclxuY29uc3QgY3JlYXRlQXBvbGxvQ2xpZW50ID0gKCk6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+ID0+IHtcclxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICBzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJywgLy8gaXQgaXMgdHJ1ZSB3aGVuIFNTUlxyXG4gICAgbGluazogbmV3IEh0dHBMaW5rKHsgdXJpOiBgJHtBUElfRE9NQUlOfS9ncmFwaHFsYCB9KSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsaXplQXBvbGxvQ2xpZW50ID0gKGluaXRpYWxTdGF0ZTogYW55ID0gbnVsbCk6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+ID0+IHtcclxuICBjb25zdCBfYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudCgpO1xyXG5cclxuICAvLzogaW5pdGlhbCBzdGF0ZSBvZiBOZXh0LmpzIGRhdGEgZmV0Y2hpbmcgbWV0aG9kcyBpcyBoeWRyYXRlZCBoZXJlXHJcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgLy86IGdldCBleGlzdGluZyBjYWNoZSwgbG9hZGVkIGR1cmluZyBjbGllbnQgc2lkZSBkYXRhIGZldGNoaW5nXHJcbiAgICBjb25zdCBleGlzdGluZ0NhY2hlID0gX2Fwb2xsb0NsaWVudC5leHRyYWN0KCk7XHJcblxyXG4gICAgLy86IHJlc3RvcmUgdGhlIGNhY2hlIHVzaW5nIHRoZSBkYXRhIHBhc3NlZCBmcm9tIFwiZ2V0U3RhdGljUHJvcHNcIiBvclxyXG4gICAgLy86IFwiZ2V0U2VydmVyU2lkZVByb3BzXCIgY29tYmluZWQgd2l0aCB0aGUgZXhpc3RpbmcgY2FjaGUgZGF0YVxyXG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKHsgLi4uZXhpc3RpbmdDYWNoZSwgLi4uaW5pdGlhbFN0YXRlIH0pO1xyXG4gIH1cclxuXHJcbiAgLy86IGZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfYXBvbGxvQ2xpZW50O1xyXG5cclxuICAvLzogY3JlYXRlIHRoZSBBcG9sbG8gQ2xpZW50IG9uY2UgaW4gdGhlIGNsaWVudFxyXG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50O1xyXG5cclxuICByZXR1cm4gX2Fwb2xsb0NsaWVudDtcclxufTtcclxuXHJcbi8vOiB1c2UgdGhpcyBjdXN0b20gaG9vayBpbiB5b3VyIGNvbXBvbmVudHMgdG8gaHlkcmF0ZSB0aGUgc3RhdGUgb2YgdGhlIEFwb2xsb1xyXG4vLzogQ2xpZW50XHJcbmNvbnN0IHVzZUFwb2xsb0NsaWVudCA9IChpbml0aWFsU3RhdGU6IGFueSk6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+ID0+IHtcclxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiBpbml0aWFsaXplQXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSksXHJcbiAgICBbaW5pdGlhbFN0YXRlXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGluaXRpYWxpemVBcG9sbG9DbGllbnQsIHVzZUFwb2xsb0NsaWVudCB9O1xyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZC5qcyc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdC9pbmRleCc7XHJcblxyXG5pbXBvcnQgeyBnZXREZXBhcnRtZW50cyB9IGZyb20gJ0AvYWN0aW9ucy9mZXRjaC1kZXBhcnRtZW50cyc7XHJcbmltcG9ydCB7IGdldFByb2R1Y3RzUGFnZSB9IGZyb20gJ0AvYWN0aW9ucy9mZXRjaC1wcm9kdWN0cyc7XHJcbmltcG9ydCBMb2FkTW9yZUJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9ucy9Mb2FkTW9yZUJ1dHRvbic7XHJcbmltcG9ydCBQcm9kdWN0c0dhbGxlcnkgZnJvbSAnQC9jb21wb25lbnRzL2dhbGxlcmllcy9Qcm9kdWN0c0dhbGxlcnknO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9mb290ZXJzL0Zvb3Rlcic7XHJcbmltcG9ydCBPbW5pYmFyIGZyb20gJ0AvY29tcG9uZW50cy9uYXZiYXJzL09tbmliYXInO1xyXG5pbXBvcnQgVGFiYmFyLCB7IFRBQl9QQUdFUyB9IGZyb20gJ0AvY29tcG9uZW50cy9uYXZiYXJzL1RhYmJhcic7XHJcbmltcG9ydCB7IFBBR0VfTElNSVQgfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJ0AvY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG9DbGllbnQsIHVzZUFwb2xsb0NsaWVudCB9IGZyb20gJ0AvbGliL2Fwb2xsby1jbGllbnQnO1xyXG5pbXBvcnQgSVBhZ2UgZnJvbSAnQC9tb2RlbHMvSVBhZ2UnO1xyXG5pbXBvcnQgSVByb2R1Y3QgZnJvbSAnQC9tb2RlbHMvSVByb2R1Y3QnO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY29udGFpbmVyOiBgXHJcbiAgICBoLXNjcmVlblxyXG4gICAgbWF4LXctc2NyZWVuXHJcbiAgYCxcclxuXHJcbiAgZ2FsbGVyeToge1xyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIGgtMy80XHJcbiAgICAgIG1kOmgtYXV0b1xyXG4gICAgICBtZDpvdmVyZmxvdy12aXNpYmxlXHJcbiAgICAgIG92ZXJmbG93LXktYXV0b1xyXG4gICAgICBweC03XHJcbiAgICAgIHB5LTEyXHJcbiAgICAgIHRvcC0wXHJcbiAgICAgIHctZnVsbFxyXG4gICAgYCxcclxuICAgIGxvYWRCdXR0b246IGBcclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICBmbGV4LXJvd1xyXG4gICAgICBqdXN0aWZ5LWNlbnRlclxyXG4gICAgICBtYi0yMFxyXG4gICAgICBtZDpteS0xMlxyXG4gICAgICBtdC0xMlxyXG4gICAgYFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgaW5pdGlhbFByb2R1Y3RzLCBkZXBhcnRtZW50cyB9KSB7XHJcbiAgY29uc3QgeyBsb2dpbiwgdXNlU2Vzc2lvbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvQ2xpZW50KGluaXRpYWxQcm9kdWN0cyk7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8SVBhZ2U+KHtcclxuICAgIGluZGV4OiAwLFxyXG4gICAgZGF0YTogaW5pdGlhbFByb2R1Y3RzLFxyXG4gICAgcHJldmlvdXNEYXRhOiBpbml0aWFsUHJvZHVjdHNcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2V0TmV3UGFnZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1BhZ2U6IElQcm9kdWN0W10gPSBhd2FpdCBnZXRQcm9kdWN0c1BhZ2UoXHJcbiAgICAgIGFwb2xsb0NsaWVudCwgeyBzdGFydDogcGFnZS5kYXRhLmxlbmd0aCwgbGltaXQ6IFBBR0VfTElNSVQgfVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRQYWdlKHtcclxuICAgICAgaW5kZXg6IHBhZ2UuaW5kZXggKyAxLFxyXG4gICAgICBkYXRhOiBwYWdlLmRhdGEuY29uY2F0KG5ld1BhZ2UpLFxyXG4gICAgICBwcmV2aW91c0RhdGE6IG5ld1BhZ2VcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZVNlc3Npb24oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgLy86IGxvZ2luIHVzZXIgaWYgdGhlIHNlc3Npb24gdG9rZW4gaXMgaW4gdGhlIHJvdXRlIHF1ZXJ5XHJcbiAgICAgIGlmIChsb2NhdGlvbi5zZWFyY2gpIGF3YWl0IGxvZ2luKGxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvZ2luVXNlcigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DdWF0bCAtIExhIG1lam9yIG1vZGEgYXJ0ZXNhbmFsIGRlIE3DqXhpY288L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJFbmN1ZW50cmEgbG9zIG1lam9yZXMgcHJvZHVjdG9zIGFydGVzYW5hbGVzIGRlIE3DqXhpY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8T21uaWJhciBtZW51RW50cmllcz17ZGVwYXJ0bWVudHN9IC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5nYWxsZXJ5LmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPFByb2R1Y3RzR2FsbGVyeSBwcm9kdWN0cz17cGFnZS5kYXRhfSAvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5nYWxsZXJ5LmxvYWRCdXR0b259PlxyXG4gICAgICAgICAgPExvYWRNb3JlQnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshcGFnZS5wcmV2aW91c0RhdGEubGVuZ3RofVxyXG4gICAgICAgICAgICBmZXRjaGVyPXtnZXROZXdQYWdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8VGFiYmFyIHBhZ2U9e1RBQl9QQUdFUy5IT01FfSAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG9DbGllbnQoKTtcclxuICBjb25zdCBpbml0aWFsUHJvZHVjdHMgPSBhd2FpdCBnZXRQcm9kdWN0c1BhZ2UoYXBvbGxvQ2xpZW50LCB7XHJcbiAgICBzdGFydDogMCxcclxuICAgIGxpbWl0OiBQQUdFX0xJTUlUXHJcbiAgfSk7XHJcbiAgY29uc3QgZGVwYXJ0bWVudHMgPSBhd2FpdCBnZXREZXBhcnRtZW50cyhhcG9sbG9DbGllbnQpO1xyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBpbml0aWFsUHJvZHVjdHMsIGRlcGFydG1lbnRzIH0gfTtcclxufTtcclxuIiwiY29uc3QgaXNUb3VjaEVuYWJsZWQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuICgndG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpc1RvdWNoRW5hYmxlZDtcclxuIiwiLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBmb3JtYXQgcHJpY2VzIHRvIG1ha2UgdGhlbSBsb29rIGxpa2U6XHJcbiAqIFVTIDMwMC45MCwgTVggMTU4OS45MCBvciBHQiAxMi4wMFxyXG4gKlxyXG4gKiBDdXJyZW5jeSBjb2RlcyAoSVNPIDQyMTcgY3VycmVuY3kgY29kZXMpIGFyZSBwYXNzZWQgYXMgYXJndW1lbnRzIGRlcGVuZGluZyBvblxyXG4gKiBpMThuIGdsb2JhbCBjb250ZXh0LlxyXG4gKi9cclxuY29uc3QgZm9ybWF0UHJpY2U6IChjdXJyZW5jeUNvZGU6IHN0cmluZywgcHJpY2U6IG51bWJlciB8IHN0cmluZykgPT4gc3RyaW5nID0gKGN1cnJlbmN5Q29kZSwgcHJpY2UpID0+IHtcclxuICAvLzogZm9yY2UgdHdvIGRlY2ltYWxzXHJcbiAgY29uc3QgcHJpY2VXaXRoRGVjaW1hbHMgPSBwYXJzZUZsb2F0KFN0cmluZyhwcmljZSkpLnRvRml4ZWQoMik7XHJcblxyXG4gIHJldHVybiBgJHtjdXJyZW5jeUNvZGUudG9VcHBlckNhc2UoKX0gJHtwcmljZVdpdGhEZWNpbWFsc31gO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UHJpY2U7XHJcbiIsIi8qKlxyXG4gKiBUaGlzIHV0aWxpdHkgZnVuY3Rpb24gcmV0dXJucyBhIG1lZGlhIFVSTCBiYXNlZCBvbiBvbmUgb2YgdGhyZWUgY2FzZXM6XHJcbiAqXHJcbiAqICAxLiBUaGVyZSdzIG5vIG1lZGlhIHNvdXJjZSB0byByZXR1cm4gKHdoZW4gbm8gbWVkaWEgaXMgYWRkZWQpLlxyXG4gKiAgMi4gVGhlIG1lZGlhIGlzIHNlcnZlZCBmcm9tIHRoZSBzYW1lIHNlcnZlciB0aGF0IHJ1bnMgdGhlIGFwcCAobG9jYWwpLlxyXG4gKiAgMy4gVGhlIG1lZGlhIGlzIHNlcnZlZCBieSBhbiB1cGxvYWQgcHJvdmlkZXIgKHJlbW90ZSBzZXJ2ZXIpLlxyXG4gKi9cclxuaW1wb3J0IHsgQVBJX0RPTUFJTiB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xyXG5pbXBvcnQgbWVkaWFOb3RGb3VuZEltYWdlIGZyb20gXCJAL2Fzc2V0cy9pbWFnZXMvbWVkaWFfbm90X2ZvdW5kLnN2Z1wiO1xyXG5cclxuaW50ZXJmYWNlIE1lZGlhIHtcclxuICB1cmw6IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRNZWRpYVNvdXJjZTogKG1lZGlhOiBNZWRpYSkgPT4gc3RyaW5nID0gKG1lZGlhKSA9PiB7XHJcbiAgLy86IENhc2UgMS5cclxuICBpZiAoIW1lZGlhKSB7XHJcbiAgICByZXR1cm4gbWVkaWFOb3RGb3VuZEltYWdlO1xyXG4gIH1cclxuXHJcbiAgLy86IENhc2UgMi5cclxuICBpZiAobWVkaWEudXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XHJcbiAgICByZXR1cm4gQVBJX0RPTUFJTiArIG1lZGlhLnVybDtcclxuICB9XHJcblxyXG4gIC8vOiBDYXNlIDMuXHJcbiAgcmV0dXJuIG1lZGlhLnVybDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE1lZGlhU291cmNlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1mZWF0aGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2luZGV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9