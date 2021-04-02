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
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDE0NDAgMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDEgMzApIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTEuMzA5MSAyMC44ODY0VjE2LjI1NzlIMTYuNzA5MVYyNUgxVjYuNUgyMi41VjEwLjU5OThINi40VjIwLjg4NjRIMTEuMzA5MVoiIGZpbGw9IiNBMzE5NUIiLz4KPHBhdGggZD0iTTE5IDEyLjAwNFYzMEg1NVYyNS44ODczSDQ2LjVWMjEuNzc0NkgzNy41VjE3LjE0NzJIMjguNVYxMi4wMDRIMTlaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik0yOCAwVjYuNDI3NzZIMzcuMTkxNVYxMS41NjQ3SDQ2LjM4M1YxOEg1NVYwSDI4WiIgZmlsbD0iI0EzMTk1QiIvPgo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDY0IDMwKSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTc0LjMwOTEgMjAuODg2NFYxNi4yNTc5SDc5LjcwOTFWMjVINjRWNi41SDg1LjVWMTAuNTk5OEg2OS40VjIwLjg4NjRINzQuMzA5MVoiIGZpbGw9IiNBMzE5NUIiLz4KPHBhdGggZD0iTTgyIDEyLjAwNFYzMEgxMThWMjUuODg3M0gxMDkuNVYyMS43NzQ2SDEwMC41VjE3LjE0NzJIOTEuNVYxMi4wMDRIODJaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik05MSAwVjYuNDI3NzZIMTAwLjE5MVYxMS41NjQ3SDEwOS4zODNWMThIMTE4VjBIOTFaIiBmaWxsPSIjQTMxOTVCIi8+CjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTI3IDMwKSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEzNy4zMDkgMjAuODg2NFYxNi4yNTc5SDE0Mi43MDlWMjVIMTI3VjYuNUgxNDguNVYxMC41OTk4SDEzMi40VjIwLjg4NjRIMTM3LjMwOVoiIGZpbGw9IiNBMzE5NUIiLz4KPHBhdGggZD0iTTE0NSAxMi4wMDRWMzBIMTgxVjI1Ljg4NzNIMTcyLjVWMjEuNzc0NkgxNjMuNVYxNy4xNDcySDE1NC41VjEyLjAwNEgxNDVaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik0xNTQgMFY2LjQyNzc2SDE2My4xOTFWMTEuNTY0N0gxNzIuMzgzVjE4SDE4MVYwSDE1NFoiIGZpbGw9IiNBMzE5NUIiLz4KPHJlY3Qgd2lkdGg9IjU0IiBoZWlnaHQ9IjMwIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAxOTAgMzApIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjAwLjMwOSAyMC44ODY0VjE2LjI1NzlIMjA1LjcwOVYyNUgxOTBWNi41SDIxMS41VjEwLjU5OThIMTk1LjRWMjAuODg2NEgyMDAuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNMjA4IDEyLjAwNFYzMEgyNDRWMjUuODg3M0gyMzUuNVYyMS43NzQ2SDIyNi41VjE3LjE0NzJIMjE3LjVWMTIuMDA0SDIwOFoiIGZpbGw9IiNBMzE5NUIiLz4KPHBhdGggZD0iTTIxNyAwVjYuNDI3NzZIMjI2LjE5MVYxMS41NjQ3SDIzNS4zODNWMThIMjQ0VjBIMjE3WiIgZmlsbD0iI0EzMTk1QiIvPgo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDI1MyAzMCkiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNjMuMzA5IDIwLjg4NjRWMTYuMjU3OUgyNjguNzA5VjI1SDI1M1Y2LjVIMjc0LjVWMTAuNTk5OEgyNTguNFYyMC44ODY0SDI2My4zMDlaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik0yNzEgMTIuMDA0VjMwSDMwN1YyNS44ODczSDI5OC41VjIxLjc3NDZIMjg5LjVWMTcuMTQ3MkgyODAuNVYxMi4wMDRIMjcxWiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNMjgwIDBWNi40Mjc3NkgyODkuMTkxVjExLjU2NDdIMjk4LjM4M1YxOEgzMDdWMEgyODBaIiBmaWxsPSIjQTMxOTVCIi8+CjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMzE2IDMwKSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMyNi4zMDkgMjAuODg2NFYxNi4yNTc5SDMzMS43MDlWMjVIMzE2VjYuNUgzMzcuNVYxMC41OTk4SDMyMS40VjIwLjg4NjRIMzI2LjMwOVoiIGZpbGw9IiNBMzE5NUIiLz4KPHBhdGggZD0iTTMzNCAxMi4wMDRWMzBIMzcwVjI1Ljg4NzNIMzYxLjVWMjEuNzc0NkgzNTIuNVYxNy4xNDcySDM0My41VjEyLjAwNEgzMzRaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik0zNDMgMFY2LjQyNzc2SDM1Mi4xOTFWMTEuNTY0N0gzNjEuMzgzVjE4SDM3MFYwSDM0M1oiIGZpbGw9IiNBMzE5NUIiLz4KPHJlY3Qgd2lkdGg9IjU0IiBoZWlnaHQ9IjMwIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAzNzkgMzApIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzg5LjMwOSAyMC44ODY0VjE2LjI1NzlIMzk0LjcwOVYyNUgzNzlWNi41SDQwMC41VjEwLjU5OThIMzg0LjRWMjAuODg2NEgzODkuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNMzk3IDEyLjAwNFYzMEg0MzNWMjUuODg3M0g0MjQuNVYyMS43NzQ2SDQxNS41VjE3LjE0NzJINDA2LjVWMTIuMDA0SDM5N1oiIGZpbGw9IiNBMzE5NUIiLz4KPHBhdGggZD0iTTQwNiAwVjYuNDI3NzZINDE1LjE5MVYxMS41NjQ3SDQyNC4zODNWMThINDMzVjBINDA2WiIgZmlsbD0iI0EzMTk1QiIvPgo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDQ0MiAzMCkiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00NTIuMzA5IDIwLjg4NjRWMTYuMjU3OUg0NTcuNzA5VjI1SDQ0MlY2LjVINDYzLjVWMTAuNTk5OEg0NDcuNFYyMC44ODY0SDQ1Mi4zMDlaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik00NjAgMTIuMDA0VjMwSDQ5NlYyNS44ODczSDQ4Ny41VjIxLjc3NDZINDc4LjVWMTcuMTQ3Mkg0NjkuNVYxMi4wMDRINDYwWiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNNDY5IDBWNi40Mjc3Nkg0NzguMTkxVjExLjU2NDdINDg3LjM4M1YxOEg0OTZWMEg0NjlaIiBmaWxsPSIjQTMxOTVCIi8+CjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNTA1IDMwKSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTUxNS4zMDkgMjAuODg2NFYxNi4yNTc5SDUyMC43MDlWMjVINTA1VjYuNUg1MjYuNVYxMC41OTk4SDUxMC40VjIwLjg4NjRINTE1LjMwOVoiIGZpbGw9IiNBMzE5NUIiLz4KPHBhdGggZD0iTTUyMyAxMi4wMDRWMzBINTU5VjI1Ljg4NzNINTUwLjVWMjEuNzc0Nkg1NDEuNVYxNy4xNDcySDUzMi41VjEyLjAwNEg1MjNaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik01MzIgMFY2LjQyNzc2SDU0MS4xOTFWMTEuNTY0N0g1NTAuMzgzVjE4SDU1OVYwSDUzMloiIGZpbGw9IiNBMzE5NUIiLz4KPHJlY3Qgd2lkdGg9IjU0IiBoZWlnaHQ9IjMwIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSA1NjggMzApIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNTc4LjMwOSAyMC44ODY0VjE2LjI1NzlINTgzLjcwOVYyNUg1NjhWNi41SDU4OS41VjEwLjU5OThINTczLjRWMjAuODg2NEg1NzguMzA5WiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNNTg2IDEyLjAwNFYzMEg2MjJWMjUuODg3M0g2MTMuNVYyMS43NzQ2SDYwNC41VjE3LjE0NzJINTk1LjVWMTIuMDA0SDU4NloiIGZpbGw9IiNBMzE5NUIiLz4KPHBhdGggZD0iTTU5NSAwVjYuNDI3NzZINjA0LjE5MVYxMS41NjQ3SDYxMy4zODNWMThINjIyVjBINTk1WiIgZmlsbD0iI0EzMTk1QiIvPgo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDYzMSAzMCkiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02NDEuMzA5IDIwLjg4NjRWMTYuMjU3OUg2NDYuNzA5VjI1SDYzMVY2LjVINjUyLjVWMTAuNTk5OEg2MzYuNFYyMC44ODY0SDY0MS4zMDlaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik02NDkgMTIuMDA0VjMwSDY4NVYyNS44ODczSDY3Ni41VjIxLjc3NDZINjY3LjVWMTcuMTQ3Mkg2NTguNVYxMi4wMDRINjQ5WiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNNjU4IDBWNi40Mjc3Nkg2NjcuMTkxVjExLjU2NDdINjc2LjM4M1YxOEg2ODVWMEg2NThaIiBmaWxsPSIjQTMxOTVCIi8+CjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNjk0IDMwKSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTcwNC4zMDkgMjAuODg2NFYxNi4yNTc5SDcwOS43MDlWMjVINjk0VjYuNUg3MTUuNVYxMC41OTk4SDY5OS40VjIwLjg4NjRINzA0LjMwOVoiIGZpbGw9IiNBMzE5NUIiLz4KPHBhdGggZD0iTTcxMiAxMi4wMDRWMzBINzQ4VjI1Ljg4NzNINzM5LjVWMjEuNzc0Nkg3MzAuNVYxNy4xNDcySDcyMS41VjEyLjAwNEg3MTJaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik03MjEgMFY2LjQyNzc2SDczMC4xOTFWMTEuNTY0N0g3MzkuMzgzVjE4SDc0OFYwSDcyMVoiIGZpbGw9IiNBMzE5NUIiLz4KPHJlY3Qgd2lkdGg9IjU0IiBoZWlnaHQ9IjMwIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSA3NTcgMzApIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzY3LjMwOSAyMC44ODY0VjE2LjI1NzlINzcyLjcwOVYyNUg3NTdWNi41SDc3OC41VjEwLjU5OThINzYyLjRWMjAuODg2NEg3NjcuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNNzc1IDEyLjAwNFYzMEg4MTFWMjUuODg3M0g4MDIuNVYyMS43NzQ2SDc5My41VjE3LjE0NzJINzg0LjVWMTIuMDA0SDc3NVoiIGZpbGw9IiNBMzE5NUIiLz4KPHBhdGggZD0iTTc4NCAwVjYuNDI3NzZINzkzLjE5MVYxMS41NjQ3SDgwMi4zODNWMThIODExVjBINzg0WiIgZmlsbD0iI0EzMTk1QiIvPgo8cmVjdCB3aWR0aD0iNTQiIGhlaWdodD0iMzAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDgyMCAzMCkiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik04MzAuMzA5IDIwLjg4NjRWMTYuMjU3OUg4MzUuNzA5VjI1SDgyMFY2LjVIODQxLjVWMTAuNTk5OEg4MjUuNFYyMC44ODY0SDgzMC4zMDlaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik04MzggMTIuMDA0VjMwSDg3NFYyNS44ODczSDg2NS41VjIxLjc3NDZIODU2LjVWMTcuMTQ3Mkg4NDcuNVYxMi4wMDRIODM4WiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNODQ3IDBWNi40Mjc3Nkg4NTYuMTkxVjExLjU2NDdIODY1LjM4M1YxOEg4NzRWMEg4NDdaIiBmaWxsPSIjQTMxOTVCIi8+CjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgODgzIDMwKSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTg5My4zMDkgMjAuODg2NFYxNi4yNTc5SDg5OC43MDlWMjVIODgzVjYuNUg5MDQuNVYxMC41OTk4SDg4OC40VjIwLjg4NjRIODkzLjMwOVoiIGZpbGw9IiNBMzE5NUIiLz4KPHBhdGggZD0iTTkwMSAxMi4wMDRWMzBIOTM3VjI1Ljg4NzNIOTI4LjVWMjEuNzc0Nkg5MTkuNVYxNy4xNDcySDkxMC41VjEyLjAwNEg5MDFaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik05MTAgMFY2LjQyNzc2SDkxOS4xOTFWMTEuNTY0N0g5MjguMzgzVjE4SDkzN1YwSDkxMFoiIGZpbGw9IiNBMzE5NUIiLz4KPHJlY3Qgd2lkdGg9IjU0IiBoZWlnaHQ9IjMwIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSA5NDYgMzApIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOTU2LjMwOSAyMC44ODY0VjE2LjI1NzlIOTYxLjcwOVYyNUg5NDZWNi41SDk2Ny41VjEwLjU5OThIOTUxLjRWMjAuODg2NEg5NTYuMzA5WiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNOTY0IDEyLjAwNFYzMEgxMDAwVjI1Ljg4NzNIOTkxLjVWMjEuNzc0Nkg5ODIuNVYxNy4xNDcySDk3My41VjEyLjAwNEg5NjRaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik05NzMgMFY2LjQyNzc2SDk4Mi4xOTFWMTEuNTY0N0g5OTEuMzgzVjE4SDEwMDBWMEg5NzNaIiBmaWxsPSIjQTMxOTVCIi8+CjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTAwOSAzMCkiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMDE5LjMxIDIwLjg4NjRWMTYuMjU3OUgxMDI0LjcxVjI1SDEwMDlWNi41SDEwMzAuNVYxMC41OTk4SDEwMTQuNFYyMC44ODY0SDEwMTkuMzFaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik0xMDI3IDEyLjAwNFYzMEgxMDYzVjI1Ljg4NzNIMTA1NC41VjIxLjc3NDZIMTA0NS41VjE3LjE0NzJIMTAzNi41VjEyLjAwNEgxMDI3WiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNMTAzNiAwVjYuNDI3NzZIMTA0NS4xOVYxMS41NjQ3SDEwNTQuMzhWMThIMTA2M1YwSDEwMzZaIiBmaWxsPSIjQTMxOTVCIi8+CjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTA3MiAzMCkiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMDgyLjMxIDIwLjg4NjRWMTYuMjU3OUgxMDg3LjcxVjI1SDEwNzJWNi41SDEwOTMuNVYxMC41OTk4SDEwNzcuNFYyMC44ODY0SDEwODIuMzFaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik0xMDkwIDEyLjAwNFYzMEgxMTI2VjI1Ljg4NzNIMTExNy41VjIxLjc3NDZIMTEwOC41VjE3LjE0NzJIMTA5OS41VjEyLjAwNEgxMDkwWiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNMTA5OSAwVjYuNDI3NzZIMTEwOC4xOVYxMS41NjQ3SDExMTcuMzhWMThIMTEyNlYwSDEwOTlaIiBmaWxsPSIjQTMxOTVCIi8+CjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTEzNSAzMCkiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMTQ1LjMxIDIwLjg4NjRWMTYuMjU3OUgxMTUwLjcxVjI1SDExMzVWNi41SDExNTYuNVYxMC41OTk4SDExNDAuNFYyMC44ODY0SDExNDUuMzFaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik0xMTUzIDEyLjAwNFYzMEgxMTg5VjI1Ljg4NzNIMTE4MC41VjIxLjc3NDZIMTE3MS41VjE3LjE0NzJIMTE2Mi41VjEyLjAwNEgxMTUzWiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNMTE2MiAwVjYuNDI3NzZIMTE3MS4xOVYxMS41NjQ3SDExODAuMzhWMThIMTE4OVYwSDExNjJaIiBmaWxsPSIjQTMxOTVCIi8+CjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTE5OCAzMCkiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMjA4LjMxIDIwLjg4NjRWMTYuMjU3OUgxMjEzLjcxVjI1SDExOThWNi41SDEyMTkuNVYxMC41OTk4SDEyMDMuNFYyMC44ODY0SDEyMDguMzFaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik0xMjE2IDEyLjAwNFYzMEgxMjUyVjI1Ljg4NzNIMTI0My41VjIxLjc3NDZIMTIzNC41VjE3LjE0NzJIMTIyNS41VjEyLjAwNEgxMjE2WiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNMTIyNSAwVjYuNDI3NzZIMTIzNC4xOVYxMS41NjQ3SDEyNDMuMzhWMThIMTI1MlYwSDEyMjVaIiBmaWxsPSIjQTMxOTVCIi8+CjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTI2MSAzMCkiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMjcxLjMxIDIwLjg4NjRWMTYuMjU3OUgxMjc2LjcxVjI1SDEyNjFWNi41SDEyODIuNVYxMC41OTk4SDEyNjYuNFYyMC44ODY0SDEyNzEuMzFaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik0xMjc5IDEyLjAwNFYzMEgxMzE1VjI1Ljg4NzNIMTMwNi41VjIxLjc3NDZIMTI5Ny41VjE3LjE0NzJIMTI4OC41VjEyLjAwNEgxMjc5WiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNMTI4OCAwVjYuNDI3NzZIMTI5Ny4xOVYxMS41NjQ3SDEzMDYuMzhWMThIMTMxNVYwSDEyODhaIiBmaWxsPSIjQTMxOTVCIi8+CjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTMyNCAzMCkiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMzM0LjMxIDIwLjg4NjRWMTYuMjU3OUgxMzM5LjcxVjI1SDEzMjRWNi41SDEzNDUuNVYxMC41OTk4SDEzMjkuNFYyMC44ODY0SDEzMzQuMzFaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik0xMzQyIDEyLjAwNFYzMEgxMzc4VjI1Ljg4NzNIMTM2OS41VjIxLjc3NDZIMTM2MC41VjE3LjE0NzJIMTM1MS41VjEyLjAwNEgxMzQyWiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNMTM1MSAwVjYuNDI3NzZIMTM2MC4xOVYxMS41NjQ3SDEzNjkuMzhWMThIMTM3OFYwSDEzNTFaIiBmaWxsPSIjQTMxOTVCIi8+CjxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTM4NyAzMCkiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMzk3LjMxIDIwLjg4NjRWMTYuMjU3OUgxNDAyLjcxVjI1SDEzODdWNi41SDE0MDguNVYxMC41OTk4SDEzOTIuNFYyMC44ODY0SDEzOTcuMzFaIiBmaWxsPSIjQTMxOTVCIi8+CjxwYXRoIGQ9Ik0xNDA1IDEyLjAwNFYzMEgxNDQxVjI1Ljg4NzNIMTQzMi41VjIxLjc3NDZIMTQyMy41VjE3LjE0NzJIMTQxNC41VjEyLjAwNEgxNDA1WiIgZmlsbD0iI0EzMTk1QiIvPgo8cGF0aCBkPSJNMTQxNCAwVjYuNDI3NzZIMTQyMy4xOVYxMS41NjQ3SDE0MzIuMzhWMThIMTQ0MVYwSDE0MTRaIiBmaWxsPSIjQTMxOTVCIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIzMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K");

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
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjcwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDI3MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMzUgMjE2LjcxNUMxODMuNzA0IDIxNi43MTUgMjIzLjE4NiAxNzguMzc0IDIyMy4xODYgMTMxLjA3OUMyMjMuMTg2IDgzLjc4MzQgMTgzLjcwNCA0NS40NDI5IDEzNSA0NS40NDI5Qzg2LjI5NTcgNDUuNDQyOSA0Ni44MTMyIDgzLjc4MzQgNDYuODEzMiAxMzEuMDc5QzQ2LjgxMzIgMTc4LjM3NCA4Ni4yOTU3IDIxNi43MTUgMTM1IDIxNi43MTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTM0Ljk5NyAyMTEuMDMxQzE4MC40NjggMjExLjAzMSAyMTcuMzMxIDE3NS4yMzUgMjE3LjMzMSAxMzEuMDc5QzIxNy4zMzEgODYuOTIyMiAxODAuNDY4IDUxLjEyNjIgMTM0Ljk5NyA1MS4xMjYyQzg5LjUyNSA1MS4xMjYyIDUyLjY2MjggODYuOTIyMiA1Mi42NjI4IDEzMS4wNzlDNTIuNjYyOCAxNzUuMjM1IDg5LjUyNSAyMTEuMDMxIDEzNC45OTcgMjExLjAzMVoiIHN0cm9rZT0iI0EzMTk1QiIgc3Ryb2tlLXdpZHRoPSIyLjA3NyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0xMzQuOTkyIDAuMDAzMjY1MzhDMTA4LjI5NiAwLjAwMzI2NTQ2IDgyLjE5ODYgNy42OTA2NSA2MC4wMDEgMjIuMDkzM0MzNy44MDM1IDM2LjQ5NiAyMC41MDI0IDU2Ljk2NzEgMTAuMjg1NSA4MC45MTgxQzAuMDY4NjkwMyAxMDQuODY5IC0yLjYwNTAyIDEzMS4yMjQgMi42MDI0OSAxNTYuNjUxQzcuODA5OTkgMTgyLjA3NyAyMC42NjQ4IDIwNS40MzMgMzkuNTQxNSAyMjMuNzY1QzU4LjQxODEgMjQyLjA5NyA4Mi40Njg4IDI1NC41ODIgMTA4LjY1MiAyNTkuNjQxQzEzNC44MzYgMjY0LjcgMTYxLjk3NiAyNjIuMTA1IDE4Ni42NDEgMjUyLjE4NkMyMTEuMzA2IDI0Mi4yNjYgMjMyLjM4OCAyMjUuNDY3IDI0Ny4yMjIgMjAzLjkxM0MyNjIuMDU1IDE4Mi4zNTggMjY5Ljk3MyAxNTcuMDE3IDI2OS45NzUgMTMxLjA5MkMyNjkuOTc3IDExMy44NzggMjY2LjQ4NiA5Ni44MzE3IDI1OS43MDMgODAuOTI3M0MyNTIuOTIgNjUuMDIyOSAyNDIuOTc4IDUwLjU3MTcgMjMwLjQ0MyAzOC4zOTg5QzIxNy45MDkgMjYuMjI2IDIwMy4wMjggMTYuNTcgMTg2LjY1IDkuOTgyQzE3MC4yNzMgMy4zOTQwNSAxNTIuNzE5IDAuMDAzMjY1MzMgMTM0Ljk5MiAwLjAwMzI2NTM4VjAuMDAzMjY1MzhaTTEzNC45OTIgMjE3LjA1MUMxMTcuNDg0IDIxNy4wNSAxMDAuMzY5IDIxMi4wMDcgODUuODExNyAyMDIuNTZDNzEuMjU0NSAxOTMuMTEzIDU5LjkwOSAxNzkuNjg3IDUzLjIwOTcgMTYzLjk3OUM0Ni41MTA0IDE0OC4yNyA0NC43NTgzIDEzMC45ODYgNDguMTc0OCAxMTQuMzFDNTEuNTkxNCA5Ny42MzQ5IDYwLjAyMzMgODIuMzE3OSA3Mi40MDQyIDcwLjI5NkM4NC43ODUxIDU4LjI3NDEgMTAwLjU1OSA1MC4wODczIDExNy43MzEgNDYuNzcwOEMxMzQuOTAzIDQzLjQ1NDQgMTUyLjcwMyA0NS4xNTcyIDE2OC44NzggNTEuNjYzOUMxODUuMDU0IDU4LjE3MDcgMTk4Ljg4IDY5LjE4OTEgMjA4LjYwNyA4My4zMjZDMjE4LjMzNCA5Ny40NjI5IDIyMy41MjYgMTE0LjA4MyAyMjMuNTI2IDEzMS4wODVDMjIzLjUyNiAxNDIuMzc2IDIyMS4yMzcgMTUzLjU1NiAyMTYuNzg4IDE2My45ODdDMjEyLjMzOSAxNzQuNDE4IDIwNS44MTggMTgzLjg5NiAxOTcuNTk3IDE5MS44NzlDMTg5LjM3NiAxOTkuODYzIDE3OS42MTUgMjA2LjE5NSAxNjguODc0IDIxMC41MTVDMTU4LjEzMiAyMTQuODM2IDE0Ni42MTkgMjE3LjA1OSAxMzQuOTkyIDIxNy4wNThWMjE3LjA1MVoiIGZpbGw9IiNBMzE5NUIiLz4KPHBhdGggZD0iTTEzNC42NiAyMS45NTMxTDEzMS40NTEgMzIuMTQ2NEwxMjguMjQxIDQyLjMzOTZIMTQxLjA3NkwxMzcuODcgMzIuMTQ2NEwxMzQuNjYgMjEuOTUzMVoiIGZpbGw9IiMwMEExOUEiLz4KPHBhdGggZD0iTTE0OC45NzcgMzUuNTI5N0MxNDcuODQ4IDM1LjUzMDEgMTQ2Ljc1MSAzNS44OTA4IDE0NS44NTQgMzYuNTU2M0wxMzQuNjYgMEwxMjMuNDYgMzYuNTU2M0MxMjIuNTYgMzUuODkzMiAxMjEuNDYyIDM1LjUzMjggMTIwLjMzMiAzNS41Mjk3QzExOC44OTggMzUuNTI5NyAxMTcuNTIyIDM2LjA4MzEgMTE2LjUwNyAzNy4wNjgzQzExNS40OTMgMzguMDUzNSAxMTQuOTIzIDM5LjM4OTcgMTE0LjkyMyA0MC43ODNDMTE0LjkyMyA0Mi4xNzYyIDExNS40OTMgNDMuNTEyNCAxMTYuNTA3IDQ0LjQ5NzZDMTE3LjUyMiA0NS40ODI4IDExOC44OTggNDYuMDM2MiAxMjAuMzMyIDQ2LjAzNjJDMTIxLjQxMSA0Ni4wMzA5IDEyMi40NjEgNDUuNzA1IDEyMy4zNDMgNDUuMTAyNkMxMjQuMjI1IDQ0LjUwMDEgMTI0Ljg5NiA0My42NDk5IDEyNS4yNjUgNDIuNjY2M0gxMjUuMzA2TDEzNC42NjMgMTIuOTM5OUwxNDQuMDA3IDQyLjY2NjNIMTQ0LjAzMUMxNDQuMzk3IDQzLjUyOTggMTQ0Ljk5NyA0NC4yODA3IDE0NS43NjggNDQuODM4OUMxNDYuNTM5IDQ1LjM5NzIgMTQ3LjQ1MSA0NS43NDE5IDE0OC40MDggNDUuODM2NEMxNDkuMzY0IDQ1LjkzMDggMTUwLjMyOSA0NS43NzE0IDE1MS4yIDQ1LjM3NTJDMTUyLjA3MSA0NC45Nzg5IDE1Mi44MTQgNDQuMzYwNyAxNTMuMzUyIDQzLjU4NjNDMTUzLjg4OSA0Mi44MTIgMTU0LjIgNDEuOTEwNiAxNTQuMjUxIDQwLjk3ODJDMTU0LjMwMiA0MC4wNDU4IDE1NC4wOTIgMzkuMTE3MyAxNTMuNjQzIDM4LjI5MThDMTUzLjE5NCAzNy40NjYzIDE1Mi41MjIgMzYuNzc0NiAxNTEuNyAzNi4yOTA1QzE1MC44NzggMzUuODA2NSAxNDkuOTM1IDM1LjU0ODEgMTQ4Ljk3NCAzNS41NDNMMTQ4Ljk3NyAzNS41Mjk3WiIgZmlsbD0iIzAwQTE5QSIvPgo8cGF0aCBkPSJNNTUuMjkxOCA1NC4xNTYyTDYwLjQ0MDYgNjMuNTY2MUw2NS41ODk1IDcyLjk3Nkw3NC42NjUzIDY0LjE2MjhMNjQuOTc1MSA1OS4xNjI4TDU1LjI4NDkgNTQuMTYyOUw1NS4yOTE4IDU0LjE1NjJaIiBmaWxsPSIjMDBBMTlBIi8+CjxwYXRoIGQ9Ik03NS4yOTczIDUzLjkyMjhDNzQuNTAyMiA1NC43MDAxIDczLjk4ODkgNTUuNzA3NCA3My44MzUgNTYuNzkyN0wzOS4zMDMyIDM4LjYxMjlMNTguMDAzOSA3Mi4xNTI2QzU2Ljg4MDIgNzIuMzA2MiA1NS44Mzg5IDcyLjgxMTggNTUuMDM4MiA3My41OTI2QzU0LjMyMjcgNzQuMjU4NCA1My44MDk0IDc1LjEwMjMgNTMuNTU0MiA3Ni4wMzIyQzUzLjI5ODkgNzYuOTYyIDUzLjMxMTYgNzcuOTQyMSA1My41OTA4IDc4Ljg2NTRDNTMuODcgNzkuNzg4NyA1NC40MDUxIDgwLjYxOTggNTUuMTM3NSA4MS4yNjhDNTUuODcgODEuOTE2MiA1Ni43NzE3IDgyLjM1NjYgNTcuNzQ0MyA4Mi41NDExQzU4LjcxNjkgODIuNzI1NiA1OS43MjMgODIuNjQ3MSA2MC42NTI4IDgyLjMxNDJDNjEuNTgyNSA4MS45ODEzIDYyLjQwMDMgODEuNDA2OCA2My4wMTY4IDgwLjY1MzRDNjMuNjMzMyA3OS45IDY0LjAyNDkgNzguOTk2NiA2NC4xNDg3IDc4LjA0MThDNjQuMjcyNiA3Ny4wODcgNjQuMTI0IDc2LjExNzYgNjMuNzE5MiA3NS4yMzkyTDYzLjczOTggNzUuMjE1OUw0OC43MTE5IDQ3Ljc2OTVMNzYuOTc1OCA2Mi4zNjk0VjYyLjM0OTRDNzcuOTU1NSA2Mi43OTMxIDc5LjA1MTUgNjIuOTM1MSA4MC4xMTY3IDYyLjc1NjRDODEuMTgxOSA2Mi41Nzc2IDgyLjE2NTMgNjIuMDg2NiA4Mi45MzQ4IDYxLjM0OTRDODMuNDU5MiA2MC44NjY2IDgzLjg3ODggNjAuMjg2OCA4NC4xNjg3IDU5LjY0NEM4NC40NTg2IDU5LjAwMTIgODQuNjEzIDU4LjMwODYgODQuNjIyNyA1Ny42MDY5Qzg0LjYzMjMgNTYuOTA1MyA4NC40OTcyIDU2LjIwODggODQuMjI1MSA1NS41NTg3QzgzLjk1MyA1NC45MDg2IDgzLjU0OTYgNTQuMzE4MSA4My4wMzg3IDUzLjgyMTlDODIuNTI3NyA1My4zMjU3IDgxLjkxOTUgNTIuOTMzOSA4MS4yNTAxIDUyLjY2OThDODAuNTgwNiA1Mi40MDU2IDc5Ljg2MzQgNTIuMjc0MyA3OS4xNDA5IDUyLjI4MzdDNzguNDE4MyA1Mi4yOTMxIDc3LjcwNSA1Mi40NDMgNzcuMDQzMSA1Mi43MjQ1Qzc2LjM4MTIgNTMuMDA2IDc1Ljc4NDEgNTMuNDEzNSA3NS4yODcgNTMuOTIyOEg3NS4yOTczWiIgZmlsbD0iIzAwQTE5QSIvPgo8cGF0aCBkPSJNMjIuNjA2NyAxMzEuNDIyTDMzLjEwMzUgMTM0LjUzNUw0My42MDA0IDEzNy42NTJWMTI1LjE4OUwzMy4xMDM1IDEyOC4zMDVMMjIuNjA2NyAxMzEuNDIyWiIgZmlsbD0iIzAwQTE5QSIvPgo8cGF0aCBkPSJNMzYuNTg0NSAxMTcuNTEyQzM2LjU4NDcgMTE4LjYwOSAzNi45NTM1IDExOS42NzUgMzcuNjM0OCAxMjAuNTQ5TDAgMTMxLjQxOUwzNy42NTIgMTQyLjI5NUMzNi45NjQ5IDE0My4xNyAzNi41OTIzIDE0NC4yMzkgMzYuNTkxMyAxNDUuMzM5QzM2LjU5MTMgMTQ2LjczMiAzNy4xNjEzIDE0OC4wNjggMzguMTc1OCAxNDkuMDUzQzM5LjE5MDMgMTUwLjAzOSA0MC41NjYzIDE1MC41OTIgNDIuMDAxMSAxNTAuNTkyQzQzLjQzNTggMTUwLjU5MiA0NC44MTE4IDE1MC4wMzkgNDUuODI2MyAxNDkuMDUzQzQ2Ljg0MDkgMTQ4LjA2OCA0Ny40MTA4IDE0Ni43MzIgNDcuNDEwOCAxNDUuMzM5QzQ3LjQwNzMgMTQ0LjI4OCA0Ny4wNzI0IDE0My4yNjQgNDYuNDUxMyAxNDIuNDA0QzQ1LjgzMDMgMTQxLjU0NCA0NC45NTI4IDE0MC44OSA0My45MzcgMTQwLjUyOVYxNDAuNDk1TDEzLjMxMTYgMTMxLjQxOUw0My45MzcgMTIyLjMzNlYxMjIuMzA2QzQ0Ljk1MzEgMTIxLjk0OSA0NS44MzIgMTIxLjI5OCA0Ni40NTUgMTIwLjQ0MUM0Ny4wNzggMTE5LjU4NCA0Ny40MTUyIDExOC41NjEgNDcuNDIxMSAxMTcuNTEyQzQ3LjQyMTEgMTE2LjgyMiA0Ny4yODEyIDExNi4xMzkgNDcuMDA5MyAxMTUuNTAyQzQ2LjczNzUgMTE0Ljg2NSA0Ni4zMzkgMTE0LjI4NSA0NS44MzY2IDExMy43OThDNDUuMzM0MyAxMTMuMzEgNDQuNzM3OSAxMTIuOTIzIDQ0LjA4MTYgMTEyLjY1OUM0My40MjUyIDExMi4zOTUgNDIuNzIxOCAxMTIuMjU5IDQyLjAxMTQgMTEyLjI1OUM0MS4zMDA5IDExMi4yNTkgNDAuNTk3NSAxMTIuMzk1IDM5Ljk0MTEgMTEyLjY1OUMzOS4yODQ4IDExMi45MjMgMzguNjg4NCAxMTMuMzEgMzguMTg2MSAxMTMuNzk4QzM3LjY4MzggMTE0LjI4NSAzNy4yODUzIDExNC44NjUgMzcuMDEzNCAxMTUuNTAyQzM2Ljc0MTUgMTE2LjEzOSAzNi42MDE2IDExNi44MjIgMzYuNjAxNiAxMTcuNTEySDM2LjU4NDVaIiBmaWxsPSIjMDBBMTlBIi8+CjxwYXRoIGQ9Ik01NS43NjkgMjA4LjQ4NUw2NS40NDg5IDIwMy40ODVMNzUuMTM5MSAxOTguNDg1TDY2LjA2MzQgMTg5LjY3MUw2MC45MTQ1IDE5OS4wODhMNTUuNzY5IDIwOC40ODVaIiBmaWxsPSIjMDBBMTlBIi8+CjxwYXRoIGQ9Ik01NS41MjkgMTg5LjA1NUM1Ni4zMjYyIDE4OS44MzIgNTcuMzY0NyAxOTAuMzM0IDU4LjQ4NDQgMTkwLjQ4MkwzOS43ODAzIDIyNC4wMjVMNzQuMzE4OSAyMDUuODU4Qzc0LjQ3MjQgMjA2Ljk1IDc0Ljk4ODEgMjA3Ljk2MyA3NS43ODgxIDIwOC43NDVDNzYuODA3OSAyMDkuNzA4IDc4LjE3NzIgMjEwLjI0MyA3OS41OTk4IDIxMC4yMzNDODEuMDIyNCAyMTAuMjIzIDgyLjM4NCAyMDkuNjcgODMuMzkgMjA4LjY5M0M4NC4zOTU5IDIwNy43MTcgODQuOTY1NCAyMDYuMzk0IDg0Ljk3NTMgMjA1LjAxM0M4NC45ODUyIDIwMy42MzEgODQuNDM0NiAyMDIuMzAyIDgzLjQ0MjcgMjAxLjMxMUM4Mi42NzI0IDIwMC41NzUgODEuNjg5MSAyMDAuMDg1IDgwLjYyNDMgMTk5LjkwN0M3OS41NTk0IDE5OS43MjggNzguNDYzNyAxOTkuODY5IDc3LjQ4MzcgMjAwLjMxMUw3Ny40NTk3IDIwMC4yODFMNDkuMTk1OCAyMTQuODgxTDY0LjIzMDYgMTg3LjQzNUM2NC42ODcgMTg2LjQ4NSA2NC44MzI5IDE4NS40MjEgNjQuNjQ4OCAxODQuMzg4QzY0LjQ2NDcgMTgzLjM1NSA2My45NTk0IDE4Mi40MDEgNjMuMjAwOCAxODEuNjU1QzYyLjY5ODYgMTgxLjE2NyA2Mi4xMDI0IDE4MC43OCA2MS40NDYxIDE4MC41MTVDNjAuNzg5OCAxODAuMjUxIDYwLjA4NjQgMTgwLjExNSA1OS4zNzU5IDE4MC4xMTVDNTguNjY1NCAxODAuMTE0IDU3Ljk2MTggMTgwLjI1IDU3LjMwNTMgMTgwLjUxNEM1Ni42NDg4IDE4MC43NzcgNTYuMDUyMiAxODEuMTY0IDU1LjU0OTYgMTgxLjY1MkM1NS4wNDY5IDE4Mi4xMzkgNTQuNjQ4MiAxODIuNzE4IDU0LjM3NiAxODMuMzU2QzU0LjEwMzggMTgzLjk5MyA1My45NjM1IDE4NC42NzYgNTMuOTYzMiAxODUuMzY2QzUzLjk2MjkgMTg2LjA1NiA1NC4xMDI1IDE4Ni43MzkgNTQuMzc0MSAxODcuMzc3QzU0LjY0NTcgMTg4LjAxNCA1NS4wNDQgMTg4LjU5MyA1NS41NDYxIDE4OS4wODJMNTUuNTI5IDE4OS4wNTVaIiBmaWxsPSIjMDBBMTlBIi8+CjxwYXRoIGQ9Ik0xMzUuMzM3IDI0MC4yMjRMMTM4LjU0MyAyMzAuMDM1TDE0MS43NTIgMjE5Ljg0MUgxMjguOTE4TDEzMi4xMjcgMjMwLjAzNUwxMzUuMzM3IDI0MC4yMjRaIiBmaWxsPSIjMDBBMTlBIi8+CjxwYXRoIGQ9Ik0xMjEuMDEyIDIyNi42NTFDMTIyLjE0MSAyMjYuNjUxIDEyMy4yMzkgMjI2LjI5MyAxMjQuMTM5IDIyNS42MzFMMTM1LjM0IDI2Mi4xODFMMTQ2LjUzIDIyNS42MThDMTQ3LjQzIDIyNi4yODUgMTQ4LjUzMSAyMjYuNjQ3IDE0OS42NjQgMjI2LjY0OEMxNTEuMDk4IDIyNi42NDggMTUyLjQ3NCAyMjYuMDk0IDE1My40ODkgMjI1LjEwOUMxNTQuNTAzIDIyNC4xMjQgMTU1LjA3MyAyMjIuNzg4IDE1NS4wNzMgMjIxLjM5NUMxNTUuMDczIDIyMC4wMDEgMTU0LjUwMyAyMTguNjY1IDE1My40ODkgMjE3LjY4QzE1Mi40NzQgMjE2LjY5NSAxNTEuMDk4IDIxNi4xNDEgMTQ5LjY2NCAyMTYuMTQxQzE0OC41ODQgMjE2LjE0NyAxNDcuNTMyIDIxNi40NzQgMTQ2LjY0OSAyMTcuMDc5QzE0NS43NjcgMjE3LjY4MyAxNDUuMDk2IDIxOC41MzYgMTQ0LjcyOCAyMTkuNTIxSDE0NC42ODZMMTM1LjM0IDI0OS4yNTRMMTI1Ljk4OSAyMTkuNTI1SDEyNS45NThDMTI1LjU5MiAyMTguNjYgMTI0Ljk5MSAyMTcuOTA4IDEyNC4yMiAyMTcuMzQ5QzEyMy40NDggMjE2Ljc5IDEyMi41MzUgMjE2LjQ0NSAxMjEuNTc3IDIxNi4zNTFDMTIwLjYxOSAyMTYuMjU3IDExOS42NTMgMjE2LjQxNyAxMTguNzgxIDIxNi44MTRDMTE3LjkxIDIxNy4yMTEgMTE3LjE2NiAyMTcuODMxIDExNi42MjkgMjE4LjYwNkMxMTYuMDkxIDIxOS4zODIgMTE1Ljc4MSAyMjAuMjg1IDExNS43MzEgMjIxLjIxOEMxMTUuNjgxIDIyMi4xNTIgMTE1Ljg5MiAyMjMuMDgxIDExNi4zNDMgMjIzLjkwN0MxMTYuNzk0IDIyNC43MzMgMTE3LjQ2OCAyMjUuNDI0IDExOC4yOTIgMjI1LjkwOEMxMTkuMTE2IDIyNi4zOTEgMTIwLjA2IDIyNi42NDggMTIxLjAyMiAyMjYuNjUxSDEyMS4wMTJaIiBmaWxsPSIjMDBBMTlBIi8+CjxwYXRoIGQ9Ik0yMTQuNjk0IDIwOC4wMzVMMjA5LjU0NSAxOTguNjE4TDIwNC4zOTYgMTg5LjIwOEwxOTUuMzIxIDE5OC4wMjFMMjA1LjAxOCAyMDMuMDIxTDIxNC43MDggMjA4LjAyMUwyMTQuNjk0IDIwOC4wMzVaIiBmaWxsPSIjMDBBMTlBIi8+CjxwYXRoIGQ9Ik0xOTQuNjk2IDIwOC4yNjVDMTk1LjQ5MiAyMDcuNDg4IDE5Ni4wMDUgMjA2LjQ4IDE5Ni4xNTggMjA1LjM5NUwyMzAuNjk3IDIyMy41NTVMMjExLjk5IDE5MC4wMTJDMjEzLjExMyAxODkuODY2IDIxNC4xNTUgMTg5LjM2NCAyMTQuOTU1IDE4OC41ODVDMjE1LjY3MSAxODcuOTE5IDIxNi4xODQgMTg3LjA3NSAyMTYuNDM5IDE4Ni4xNDVDMjE2LjY5NCAxODUuMjE1IDIxNi42ODEgMTg0LjIzNSAyMTYuNDAxIDE4My4zMTFDMjE2LjEyMSAxODIuMzg4IDIxNS41ODYgMTgxLjU1NyAyMTQuODUzIDE4MC45MDlDMjE0LjEyMSAxODAuMjYxIDIxMy4yMTkgMTc5LjgyMSAyMTIuMjQ2IDE3OS42MzdDMjExLjI3MyAxNzkuNDUzIDIxMC4yNjcgMTc5LjUzMiAyMDkuMzM4IDE3OS44NjVDMjA4LjQwOCAxODAuMTk4IDIwNy41OSAxODAuNzczIDIwNi45NzQgMTgxLjUyN0MyMDYuMzU4IDE4Mi4yODEgMjA1Ljk2NyAxODMuMTg0IDIwNS44NDMgMTg0LjEzOUMyMDUuNzIgMTg1LjA5NCAyMDUuODY5IDE4Ni4wNjMgMjA2LjI3NCAxODYuOTQyTDIwNi4yNSAxODYuOTY1TDIyMS4yODUgMjE0LjQwOEwxOTMuMDI0IDE5OS44MThWMTk5LjgzOEMxOTIuMTM2IDE5OS40NzggMTkxLjE2NCAxOTkuMzU5IDE5MC4yMTEgMTk5LjQ5M0MxODkuMjU5IDE5OS42MjcgMTg4LjM2MSAyMDAuMDEgMTg3LjYxNSAyMDAuNjAxQzE4Ni44NjkgMjAxLjE5MiAxODYuMzAyIDIwMS45NjggMTg1Ljk3NSAyMDIuODQ3QzE4NS42NDggMjAzLjcyNiAxODUuNTcyIDIwNC42NzUgMTg1Ljc1NyAyMDUuNTkyQzE4NS45NDEgMjA2LjUxIDE4Ni4zNzkgMjA3LjM2MSAxODcuMDIzIDIwOC4wNTZDMTg3LjY2NyAyMDguNzUxIDE4OC40OTMgMjA5LjI2MyAxODkuNDEzIDIwOS41MzhDMTkwLjMzMyAyMDkuODEzIDE5MS4zMTMgMjA5Ljg0IDE5Mi4yNDggMjA5LjYxNkMxOTMuMTgyIDIwOS4zOTIgMTk0LjAzNyAyMDguOTI2IDE5NC43MiAyMDguMjY4TDE5NC42OTYgMjA4LjI2NVoiIGZpbGw9IiMwMEExOUEiLz4KPHBhdGggZD0iTTI0Ny4zNzkgMTMwLjc2NUwyMzYuODg2IDEyNy42NDlMMjI2LjM4OSAxMjQuNTMyVjEzNi45OTVMMjM2Ljg4NiAxMzMuODgyTDI0Ny4zNzkgMTMwLjc2NVoiIGZpbGw9IiMwMEExOUEiLz4KPHBhdGggZD0iTTIzMy40MTIgMTQ0LjY2OUMyMzMuNDA5IDE0My41NzIgMjMzLjAzOCAxNDIuNTA2IDIzMi4zNTUgMTQxLjYzMkwyNzAgMTMwLjc2MkwyMzIuMzQ4IDExOS44ODlDMjMzLjAzNCAxMTkuMDEzIDIzMy40MDYgMTE3Ljk0MyAyMzMuNDA5IDExNi44NDJDMjMzLjQwOSAxMTUuNDQ5IDIzMi44MzkgMTE0LjExMyAyMzEuODI0IDExMy4xMjhDMjMwLjgxIDExMi4xNDIgMjI5LjQzNCAxMTEuNTg5IDIyNy45OTkgMTExLjU4OUMyMjYuNTY0IDExMS41ODkgMjI1LjE4OCAxMTIuMTQyIDIyNC4xNzMgMTEzLjEyOEMyMjMuMTU5IDExNC4xMTMgMjIyLjU4OSAxMTUuNDQ5IDIyMi41ODkgMTE2Ljg0MkMyMjIuNTk1IDExNy44OTIgMjIyLjkzMyAxMTguOTE1IDIyMy41NTYgMTE5Ljc3M0MyMjQuMTc5IDEyMC42MzEgMjI1LjA1NyAxMjEuMjgzIDIyNi4wNzMgMTIxLjY0MlYxMjEuNjc1TDI1Ni42ODUgMTMwLjc2MkwyMjYuMDY2IDEzOS44MzlWMTM5Ljg2MkMyMjUuMDUxIDE0MC4yMjIgMjI0LjE3MyAxNDAuODc0IDIyMy41NSAxNDEuNzMyQzIyMi45MjcgMTQyLjU5IDIyMi41OSAxNDMuNjEyIDIyMi41ODIgMTQ0LjY2MkMyMjIuNTgyIDE0Ni4wNTUgMjIzLjE1MiAxNDcuMzkxIDIyNC4xNjcgMTQ4LjM3N0MyMjUuMTgxIDE0OS4zNjIgMjI2LjU1NyAxNDkuOTE1IDIyNy45OTIgMTQ5LjkxNUMyMjkuNDI3IDE0OS45MTUgMjMwLjgwMyAxNDkuMzYyIDIzMS44MTcgMTQ4LjM3N0MyMzIuODMyIDE0Ny4zOTEgMjMzLjQwMiAxNDYuMDU1IDIzMy40MDIgMTQ0LjY2MkwyMzMuNDEyIDE0NC42NjlaIiBmaWxsPSIjMDBBMTlBIi8+CjxwYXRoIGQ9Ik0yMTQuMjMxIDUzLjY5MjlMMjA0LjUzNCA1OC42OTI5TDE5NC44NDQgNjMuNjkyOEwyMDMuOTIgNzIuNTA2MUwyMDkuMDY4IDYzLjA5NjFMMjE0LjIxNyA1My42ODYyTDIxNC4yMzEgNTMuNjkyOVoiIGZpbGw9IiMwMEExOUEiLz4KPHBhdGggZD0iTTIxNC40NjggNzMuMTE5NEMyMTMuNjY4IDcyLjM0NjQgMjEyLjYzIDcxLjg0NzkgMjExLjUxMiA3MS42OTk0TDIzMC4yMiAzOC4xNjY0TDE5NS42NzggNTYuMzI2MkMxOTUuNTI0IDU1LjIzNjYgMTk1LjAwOCA1NC4yMjU1IDE5NC4yMDkgNTMuNDQ2MkMxOTMuMTk0IDUyLjQ2MTQgMTkxLjgxNyA1MS45MDg1IDE5MC4zODIgNTEuOTA5MUMxODguOTQ4IDUxLjkwOTcgMTg3LjU3MiA1Mi40NjM4IDE4Ni41NTggNTMuNDQ5NUMxODUuNTQzIDU0LjQzNTMgMTg0Ljk3NCA1NS43NzE4IDE4NC45NzUgNTcuMTY1MkMxODQuOTc1IDU4LjU1ODYgMTg1LjU0NiA1OS44OTQ2IDE4Ni41NjEgNjAuODc5NUMxODcuMzI5IDYxLjYxNjIgMTg4LjMxMiA2Mi4xMDY5IDE4OS4zNzYgNjIuMjg1NkMxOTAuNDQgNjIuNDY0NCAxOTEuNTM0IDYyLjMyMjcgMTkyLjUxMyA2MS44Nzk1TDE5Mi41MzcgNjEuOTAyOEwyMjAuODAxIDQ3LjMwOTZMMjA1Ljc3MyA3NC43NTI3Vjc0Ljc3MjdDMjA1LjMxNSA3NS43MjM4IDIwNS4xNjggNzYuNzg4NCAyMDUuMzUyIDc3LjgyM0MyMDUuNTM3IDc4Ljg1NzYgMjA2LjA0MyA3OS44MTI2IDIwNi44MDMgODAuNTU5M0MyMDcuMzA1IDgxLjA0NjkgMjA3LjkwMiA4MS40MzM3IDIwOC41NTkgODEuNjk3NEMyMDkuMjE1IDgxLjk2MTEgMjA5LjkxOSA4Mi4wOTY3IDIxMC42MjkgODIuMDk2NEMyMTEuMzQgODIuMDk2MSAyMTIuMDQzIDgxLjk1OTkgMjEyLjY5OSA4MS42OTU2QzIxMy4zNTYgODEuNDMxMyAyMTMuOTUyIDgxLjA0NCAyMTQuNDU0IDgwLjU1NkMyMTQuOTU2IDgwLjA2NzkgMjE1LjM1NSA3OS40ODg1IDIxNS42MjYgNzguODUxQzIxNS44OTggNzguMjEzNSAyMTYuMDM3IDc3LjUzMDIgMjE2LjAzNyA3Ni44NDAzQzIxNi4wMzcgNzYuMTUwNCAyMTUuODk2IDc1LjQ2NzMgMjE1LjYyNCA3NC44M0MyMTUuMzUyIDc0LjE5MjcgMjE0Ljk1MyA3My42MTM3IDIxNC40NTEgNzMuMTI2TDIxNC40NjggNzMuMTE5NFoiIGZpbGw9IiMwMEExOUEiLz4KPHBhdGggZD0iTTE3Ny40OTIgNTUuMzI5NEwxNzUuNzc1IDU0LjYzOTRMMTc5LjQ0OCA0NS45NzI4QzE4MC4yMzMgNDQuMTE1OSAxODAuMjI2IDQyLjAzMjMgMTc5LjQyOSA0MC4xODA0QzE3OC42MzEgMzguMzI4NSAxNzcuMTA5IDM2Ljg2IDE3NS4xOTcgMzYuMDk3OUMxNzMuMjg1IDM1LjMzNTkgMTcxLjEzOSAzNS4zNDI3IDE2OS4yMzIgMzYuMTE2OUMxNjcuMzI1IDM2Ljg5MTEgMTY1LjgxMyAzOC4zNjkzIDE2NS4wMjggNDAuMjI2MkwxNjEuMzU1IDQ4Ljg5MjhMMTU5LjYzOSA0OC4yMDYyTDE2My4zMTIgMzkuNTM5NkMxNjQuMjg2IDM3LjI0MTEgMTY2LjE2MSAzNS40MTI2IDE2OC41MjQgMzQuNDU2NUMxNzAuODg3IDMzLjUwMDQgMTczLjU0NCAzMy40OTQ5IDE3NS45MTEgMzQuNDQxM0MxNzguMjc4IDM1LjM4NzcgMTgwLjE2MSAzNy4yMDg0IDE4MS4xNDUgMzkuNTAyOEMxODIuMTMgNDEuNzk3MyAxODIuMTM2IDQ0LjM3NzcgMTgxLjE2MSA0Ni42NzYyTDE3Ny40OTIgNTUuMzI5NFoiIGZpbGw9IiMwMEExOUEiLz4KPHBhdGggZD0iTTE3My4zMjggNDAuNTQ2M0MxNzIuNjA5IDQwLjI1NjkgMTcxLjgzNyA0MC4xMDg0IDE3MS4wNTggNDAuMTA5M0MxNzAuMjc5IDQwLjExMDIgMTY5LjUwNyA0MC4yNjA2IDE2OC43ODggNDAuNTUxN0MxNjguMDY5IDQwLjg0MjggMTY3LjQxNiA0MS4yNjkgMTY2Ljg2NyA0MS44MDU3QzE2Ni4zMTggNDIuMzQyNSAxNjUuODgzIDQyLjk3OTMgMTY1LjU4OCA0My42Nzk2TDE2My4wODkgNDkuNTYyOEwxNzQuMDM5IDUzLjk1MjhMMTc2LjUzOCA0OC4wNjI5QzE3Ni44MzUgNDcuMzYzNiAxNzYuOTg2IDQ2LjYxNDQgMTc2Ljk4NSA0NS44NTgyQzE3Ni45ODMgNDUuMTAxOSAxNzYuODI4IDQ0LjM1MzQgMTc2LjUyOCA0My42NTU0QzE3Ni4yMjkgNDIuOTU3MyAxNzUuNzkgNDIuMzIzNSAxNzUuMjM4IDQxLjc5QzE3NC42ODYgNDEuMjU2NSAxNzQuMDMyIDQwLjgzMzkgMTczLjMxMSA0MC41NDYzSDE3My4zMjhaTTE3MC4zMDggNDcuNjcyOUMxNjkuOTk3IDQ3LjU0ODkgMTY5LjczIDQ3LjMzOCAxNjkuNTQzIDQ3LjA2NjlDMTY5LjM1NSA0Ni43OTU4IDE2OS4yNTQgNDYuNDc2NyAxNjkuMjU0IDQ2LjE1QzE2OS4yNTMgNDUuODIzNCAxNjkuMzUyIDQ1LjUwMzkgMTY5LjUzOCA0NS4yMzJDMTY5LjcyNSA0NC45NjAxIDE2OS45OSA0NC43NDggMTcwLjMwMSA0NC42MjI3QzE3MC42MTEgNDQuNDk3MyAxNzAuOTUzIDQ0LjQ2NDQgMTcxLjI4MyA0NC41Mjc5QzE3MS42MTMgNDQuNTkxNSAxNzEuOTE2IDQ0Ljc0ODcgMTcyLjE1NCA0NC45Nzk3QzE3Mi4zOTIgNDUuMjEwNyAxNzIuNTU0IDQ1LjUwNSAxNzIuNjE5IDQ1LjgyNTRDMTcyLjY4NSA0Ni4xNDU4IDE3Mi42NTEgNDYuNDc3OSAxNzIuNTIyIDQ2Ljc3OTVDMTcyLjQzOCA0Ni45Nzk5IDE3Mi4zMTUgNDcuMTYyIDE3Mi4xNTggNDcuMzE1NEMxNzIuMDAxIDQ3LjQ2ODggMTcxLjgxNCA0Ny41OTAzIDE3MS42MDkgNDcuNjcyOUMxNzEuNDAzIDQ3Ljc1NiAxNzEuMTgyIDQ3Ljc5ODggMTcwLjk1OCA0Ny43OTg4QzE3MC43MzUgNDcuNzk4OCAxNzAuNTE0IDQ3Ljc1NiAxNzAuMzA4IDQ3LjY3MjlaIiBmaWxsPSIjMDBBMTlBIi8+CjxwYXRoIGQ9Ik0yMjAuMTk2IDEwNi42OTZMMjE5LjQ3OSAxMDUuMDI5TDIyOC4zNzMgMTAxLjQyOUMyMzAuMjQzIDEwMC42MzUgMjMxLjcxOCA5OS4xNjAyIDIzMi40NzkgOTcuMzIxQzIzMy4yNCA5NS40ODE5IDIzMy4yMjcgOTMuNDI2IDIzMi40NDMgOTEuNTk2MUMyMzEuNjU4IDg5Ljc2NjIgMjMwLjE2NSA4OC4zMDg2IDIyOC4yODUgODcuNTM3NEMyMjYuNDA1IDg2Ljc2NjEgMjI0LjI4OCA4Ni43NDI4IDIyMi4zOSA4Ny40NzI1TDIxMy40ODYgOTEuMDY1OEwyMTIuNzc1IDg5LjM5OTFMMjIxLjY3MiA4NS43OTkyQzIyNC4wMjYgODQuODg2NCAyMjYuNjU1IDg0LjkwOTQgMjI4Ljk5MSA4NS44NjMzQzIzMS4zMjcgODYuODE3MiAyMzMuMTgzIDg4LjYyNTMgMjM0LjE1OCA5MC44OTdDMjM1LjEzMyA5My4xNjg4IDIzNS4xNDggOTUuNzIxNyAyMzQuMiA5OC4wMDQzQzIzMy4yNTMgMTAwLjI4NyAyMzEuNDE4IDEwMi4xMTYgMjI5LjA5NCAxMDMuMDk2TDIyMC4xOTYgMTA2LjY5NloiIGZpbGw9IiMwMEExOUEiLz4KPHBhdGggZD0iTTIyOC4wMiA5My4zODU4QzIyNy40MTUgOTEuOTc1OSAyMjYuMjU4IDkwLjg1NyAyMjQuODA0IDkwLjI3NUMyMjMuMzUgODkuNjkzMSAyMjEuNzE4IDg5LjY5NTcgMjIwLjI2NiA5MC4yODI1TDIxNC4xOCA5Mi43NDI0TDIxOC43NTIgMTAzLjM4MkwyMjQuODA3IDEwMC45MzJDMjI1LjUzMSAxMDAuNjQ1IDIyNi4xODkgMTAwLjIyMSAyMjYuNzQ0IDk5LjY4NTVDMjI3LjI5OCA5OS4xNDk4IDIyNy43MzggOTguNTEyOSAyMjguMDM4IDk3LjgxMTRDMjI4LjMzOCA5Ny4xMDk5IDIyOC40OTIgOTYuMzU3NyAyMjguNDkxIDk1LjU5ODFDMjI4LjQ5IDk0LjgzODYgMjI4LjMzNSA5NC4wODY3IDIyOC4wMzMgOTMuMzg1OEgyMjguMDJaTTIyMC42OTEgOTYuMzg1N0MyMjAuNTQ3IDk2LjAzNiAyMjAuNTMxIDk1LjY0ODMgMjIwLjY0OCA5NS4yODg4QzIyMC43NjQgOTQuOTI5MyAyMjEuMDA1IDk0LjYyMDEgMjIxLjMzIDk0LjQxMzlDMjIxLjY1NSA5NC4yMDc2IDIyMi4wNDQgOTQuMTE3MSAyMjIuNDMgOTQuMTU3N0MyMjIuODE1IDk0LjE5ODMgMjIzLjE3NSA5NC4zNjc1IDIyMy40NDcgOTQuNjM2NkMyMjMuNzE5IDk0LjkwNTYgMjIzLjg4NiA5NS4yNTc4IDIyMy45MjEgOTUuNjMzMkMyMjMuOTU1IDk2LjAwODYgMjIzLjg1NSA5Ni4zODQgMjIzLjYzNiA5Ni42OTU2QzIyMy40MTggOTcuMDA3MiAyMjMuMDk1IDk3LjIzNTYgMjIyLjcyMyA5Ny4zNDE5QzIyMi4zNSA5Ny40NDgzIDIyMS45NTEgOTcuNDI2MSAyMjEuNTk0IDk3LjI3OTFDMjIxLjE4NCA5Ny4xMDgzIDIyMC44NTkgOTYuNzg3MyAyMjAuNjkxIDk2LjM4NTdaIiBmaWxsPSIjMDBBMTlBIi8+CjxwYXRoIGQ9Ik0yMTIuODA2IDE3Mi43NjhMMjEzLjUxNyAxNzEuMTAyTDIyMi40NDEgMTc0LjY2OEMyMjQuMzM2IDE3NS4zNjcgMjI2LjQzNyAxNzUuMzIgMjI4LjI5NiAxNzQuNTM4QzIzMC4xNTYgMTczLjc1NiAyMzEuNjI5IDE3Mi4zMDEgMjMyLjQwMSAxNzAuNDgxQzIzMy4xNzQgMTY4LjY2MiAyMzMuMTg1IDE2Ni42MjIgMjMyLjQzMyAxNjQuNzk0QzIzMS42OCAxNjIuOTY3IDIzMC4yMjQgMTYxLjQ5NiAyMjguMzczIDE2MC42OTVMMjE5LjQ0OCAxNTcuMTI4TDIyMC4xNTkgMTU1LjQ2MkwyMjkuMDgzIDE1OS4wMjhDMjMwLjI1NSAxNTkuNDk3IDIzMS4zMjEgMTYwLjE4NSAyMzIuMjE5IDE2MS4wNTRDMjMzLjExNyAxNjEuOTIyIDIzMy44MyAxNjIuOTU0IDIzNC4zMTggMTY0LjA5QzIzNC44MDUgMTY1LjIyNiAyMzUuMDU4IDE2Ni40NDQgMjM1LjA2IDE2Ny42NzVDMjM1LjA2MyAxNjguOTA2IDIzNC44MTYgMTcwLjEyNSAyMzQuMzM0IDE3MS4yNjNDMjMzLjg1MSAxNzIuNDAxIDIzMy4xNDIgMTczLjQzNiAyMzIuMjQ4IDE3NC4zMDhDMjMxLjM1NCAxNzUuMTggMjMwLjI5MSAxNzUuODczIDIyOS4xMjEgMTc2LjM0NkMyMjcuOTUxIDE3Ni44MiAyMjYuNjk3IDE3Ny4wNjUgMjI1LjQyOSAxNzcuMDY3QzIyNC4xNjIgMTc3LjA3IDIyMi45MDYgMTc2LjgzIDIyMS43MzQgMTc2LjM2MkwyMTIuODA2IDE3Mi43NjhaIiBmaWxsPSIjMDBBMTlBIi8+CjxwYXRoIGQ9Ik0yMjguMDI2IDE2OC43MjVDMjI4LjMyMyAxNjguMDI2IDIyOC40NzUgMTY3LjI3NyAyMjguNDczIDE2Ni41MkMyMjguNDcyIDE2NS43NjQgMjI4LjMxNyAxNjUuMDE2IDIyOC4wMTcgMTY0LjMxOEMyMjcuNzE3IDE2My42MiAyMjcuMjc5IDE2Mi45ODYgMjI2LjcyNyAxNjIuNDUyQzIyNi4xNzUgMTYxLjkxOSAyMjUuNTIgMTYxLjQ5NiAyMjQuOCAxNjEuMjA5TDIxOC43MzQgMTU4Ljc4MkwyMTQuMjE0IDE2OS40NDhMMjIwLjI3OSAxNzEuODcyQzIyMC45OTkgMTcyLjE2MSAyMjEuNzcxIDE3Mi4zMDkgMjIyLjU1MSAxNzIuMzA4QzIyMy4zMyAxNzIuMzA3IDIyNC4xMDEgMTcyLjE1NiAyMjQuODIxIDE3MS44NjVDMjI1LjU0IDE3MS41NzQgMjI2LjE5MyAxNzEuMTQ4IDIyNi43NDMgMTcwLjYxMkMyMjcuMjkyIDE3MC4wNzUgMjI3LjcyNyAxNjkuNDM5IDIyOC4wMjMgMTY4LjczOEwyMjguMDI2IDE2OC43MjVaTTIyMC42ODEgMTY1Ljc5MkMyMjAuNzc3IDE2NS41NjcgMjIwLjkyMyAxNjUuMzY1IDIyMS4xMDkgMTY1LjIwMUMyMjEuMjk2IDE2NS4wMzggMjIxLjUxNyAxNjQuOTE2IDIyMS43NTcgMTY0Ljg0NkMyMjEuOTk3IDE2NC43NzUgMjIyLjI1IDE2NC43NTcgMjIyLjQ5OSAxNjQuNzkyQzIyMi43NDcgMTY0LjgyOCAyMjIuOTg0IDE2NC45MTcgMjIzLjE5MyAxNjUuMDUyQzIyMy40MDIgMTY1LjE4NyAyMjMuNTc3IDE2NS4zNjYgMjIzLjcwNiAxNjUuNTc1QzIyMy44MzYgMTY1Ljc4NCAyMjMuOTE2IDE2Ni4wMTggMjIzLjk0MSAxNjYuMjZDMjIzLjk2NiAxNjYuNTAzIDIyMy45MzUgMTY2Ljc0OCAyMjMuODUxIDE2Ni45NzdDMjIzLjc2NyAxNjcuMjA3IDIyMy42MzEgMTY3LjQxNiAyMjMuNDU0IDE2Ny41ODhDMjIzLjI1NSAxNjcuNzc4IDIyMy4wMTEgMTY3LjkxNyAyMjIuNzQ0IDE2Ny45OTRDMjIyLjQ3NyAxNjguMDcyIDIyMi4xOTUgMTY4LjA4NSAyMjEuOTIxIDE2OC4wMzJDMjIxLjY0OCAxNjcuOTc5IDIyMS4zOTIgMTY3Ljg2MyAyMjEuMTc1IDE2Ny42OTNDMjIwLjk1OCAxNjcuNTIzIDIyMC43ODcgMTY3LjMwNCAyMjAuNjc3IDE2Ny4wNTVDMjIwLjU5MSAxNjYuODU1IDIyMC41NDYgMTY2LjY0IDIyMC41NDYgMTY2LjQyM0MyMjAuNTQ2IDE2Ni4yMDcgMjIwLjU5MSAxNjUuOTkyIDIyMC42NzcgMTY1Ljc5MkgyMjAuNjgxWiIgZmlsbD0iIzAwQTE5QSIvPgo8cGF0aCBkPSJNMTYwLjUwNCAyMTMuNzAxTDE2Mi4yMiAyMTMuMDA1TDE2NS45MjQgMjIxLjY0NUMxNjYuMzE3IDIyMi41NjEgMTY2Ljg5MyAyMjMuMzkzIDE2Ny42MTcgMjI0LjA5NEMxNjguMzQyIDIyNC43OTQgMTY5LjIwMSAyMjUuMzQ5IDE3MC4xNDYgMjI1LjcyN0MxNzEuMDkyIDIyNi4xMDUgMTcyLjEwNSAyMjYuMjk4IDE3My4xMjcgMjI2LjI5NkMxNzQuMTQ5IDIyNi4yOTQgMTc1LjE2MSAyMjYuMDk2IDE3Ni4xMDUgMjI1LjcxNUMxNzcuMDQ5IDIyNS4zMzMgMTc3LjkwNiAyMjQuNzc0IDE3OC42MjcgMjI0LjA3QzE3OS4zNDggMjIzLjM2NyAxNzkuOTIgMjIyLjUzMiAxODAuMzA5IDIyMS42MTRDMTgwLjY5OCAyMjAuNjk2IDE4MC44OTcgMjE5LjcxMyAxODAuODk1IDIxOC43MkMxODAuODkzIDIxNy43MjcgMTgwLjY4OSAyMTYuNzQ0IDE4MC4yOTYgMjE1LjgyOEwxNzYuNTkyIDIwNy4xOTFMMTc4LjMwOSAyMDYuNDkxTDE4Mi4wMTYgMjE1LjEzMUMxODIuNTAzIDIxNi4yNjcgMTgyLjc1NSAyMTcuNDg2IDE4Mi43NTggMjE4LjcxNkMxODIuNzYgMjE5Ljk0NyAxODIuNTEzIDIyMS4xNjYgMTgyLjAzIDIyMi4zMDRDMTgxLjU0NyAyMjMuNDQyIDE4MC44MzkgMjI0LjQ3NyAxNzkuOTQ0IDIyNS4zNDlDMTc5LjA1IDIyNi4yMjEgMTc3Ljk4NyAyMjYuOTEzIDE3Ni44MTcgMjI3LjM4NkMxNzUuNjQ3IDIyNy44NTkgMTc0LjM5MyAyMjguMTA0IDE3My4xMjUgMjI4LjEwN0MxNzEuODU4IDIyOC4xMDkgMTcwLjYwMiAyMjcuODY5IDE2OS40MzEgMjI3LjRDMTY4LjI1OSAyMjYuOTMxIDE2Ny4xOTMgMjI2LjI0MyAxNjYuMjk2IDIyNS4zNzRDMTY1LjM5OCAyMjQuNTA2IDE2NC42ODUgMjIzLjQ3NCAxNjQuMTk3IDIyMi4zMzhMMTYwLjUwNCAyMTMuNzAxWiIgZmlsbD0iIzAwQTE5QSIvPgo8cGF0aCBkPSJNMTc0LjIxIDIyMS4yOTVDMTc1LjY2MSAyMjAuNzA2IDE3Ni44MTIgMjE5LjU4MyAxNzcuNDExIDIxOC4xNzFDMTc4LjAxIDIxNi43NTkgMTc4LjAwOCAyMTUuMTc1IDE3Ny40MDYgMjEzLjc2NUwxNzQuODg3IDIwNy44ODVMMTYzLjk0NyAyMTIuMzE1TDE2Ni40NjYgMjE4LjE3OEMxNjcuMDY5IDIxOS41ODcgMTY4LjIyMyAyMjAuNzA3IDE2OS42NzUgMjIxLjI5MUMxNzEuMTI3IDIyMS44NzUgMTcyLjc1OCAyMjEuODc2IDE3NC4yMSAyMjEuMjk1Wk0xNzEuMTU5IDIxNC4xNzFDMTcxLjUyNSAyMTQuMDIgMTcxLjkzNCAyMTMuOTk3IDE3Mi4zMTUgMjE0LjEwNkMxNzIuNjk3IDIxNC4yMTYgMTczLjAyOCAyMTQuNDUgMTczLjI1MSAyMTQuNzdDMTczLjQ3NCAyMTUuMDkgMTczLjU3NiAyMTUuNDc1IDE3My41MzkgMjE1Ljg2QzE3My41MDIgMjE2LjI0NSAxNzMuMzI5IDIxNi42MDUgMTczLjA0OCAyMTYuODc5QzE3Mi43NjggMjE3LjE1MyAxNzIuMzk4IDIxNy4zMjUgMTcyLjAwMiAyMTcuMzYzQzE3MS42MDcgMjE3LjQwMiAxNzEuMjA5IDIxNy4zMDYgMTcwLjg3OCAyMTcuMDkyQzE3MC41NDcgMjE2Ljg3NyAxNzAuMzAzIDIxNi41NTggMTcwLjE4OCAyMTYuMTg4QzE3MC4wNzIgMjE1LjgxOCAxNzAuMDkzIDIxNS40MjEgMTcwLjI0NiAyMTUuMDY1QzE3MC40MjEgMjE0LjY2IDE3MC43NTIgMjE0LjM0IDE3MS4xNjkgMjE0LjE3MUgxNzEuMTU5WiIgZmlsbD0iIzAwQTE5QSIvPgo8cGF0aCBkPSJNOTIuNDE4NiAyMDYuNjUxTDk0LjEzNDkgMjA3LjM0MUw5MC40NjIxIDIxNi4wMDhDODkuNjc1NSAyMTcuODYyIDg5LjY3OTcgMjE5Ljk0NCA5MC40NzM3IDIyMS43OTVDOTEuMjY3OCAyMjMuNjQ3IDkyLjc4NjYgMjI1LjExNiA5NC42OTYyIDIyNS44NzlDOTYuNjA1NyAyMjYuNjQzIDk4Ljc0OTQgMjI2LjYzOSAxMDAuNjU2IDIyNS44NjhDMTAyLjU2MiAyMjUuMDk3IDEwNC4wNzUgMjIzLjYyMiAxMDQuODYyIDIyMS43NjhMMTA4LjUyOCAyMTMuMTAxTDExMC4yNDQgMjEzLjc5MUwxMDYuNTcxIDIyMi40NThDMTA2LjA4OSAyMjMuNTk2IDEwNS4zOCAyMjQuNjMxIDEwNC40ODYgMjI1LjUwM0MxMDMuNTkxIDIyNi4zNzUgMTAyLjUyOSAyMjcuMDY3IDEwMS4zNTkgMjI3LjU0MUMxMDAuMTg5IDIyOC4wMTQgOTguOTM0NCAyMjguMjU5IDk3LjY2NjkgMjI4LjI2MkM5Ni4zOTk1IDIyOC4yNjUgOTUuMTQzOSAyMjguMDI1IDkzLjk3MTkgMjI3LjU1NkM5Mi43OTk5IDIyNy4wODggOTEuNzM0NCAyMjYuMzk5IDkwLjgzNjIgMjI1LjUzMUM4OS45MzgxIDIyNC42NjIgODkuMjI0OSAyMjMuNjMxIDg4LjczNzQgMjIyLjQ5NUM4OC4yNDk5IDIyMS4zNTggODcuOTk3NiAyMjAuMTQgODcuOTk0OSAyMTguOTA5Qzg3Ljk5MjIgMjE3LjY3OSA4OC4yMzkyIDIxNi40NTkgODguNzIxNyAyMTUuMzIxTDkyLjQxODYgMjA2LjY1MVoiIGZpbGw9IiMwMEExOUEiLz4KPHBhdGggZD0iTTk2LjU4MjQgMjIxLjQzMUM5OC4wMzY5IDIyMi4wMTEgOTkuNjY4OSAyMjIuMDA3IDEwMS4xMiAyMjEuNDJDMTAyLjU3MSAyMjAuODMyIDEwMy43MjMgMjE5LjcwOSAxMDQuMzIzIDIxOC4yOThMMTA2LjgyMiAyMTIuNDA4TDk1LjgzNzYgMjA4LjAyNUw5My4zMzg2IDIxMy45MDhDOTIuNzQwNiAyMTUuMzIxIDkyLjc0NDkgMjE2LjkwNyA5My4zNTA2IDIxOC4zMTdDOTMuOTU2MyAyMTkuNzI3IDk1LjExMzggMjIwLjg0NiA5Ni41Njg3IDIyMS40MjhMOTYuNTgyNCAyMjEuNDMxWk05OS42MDMxIDIxNC4yOThDOTkuOTY1MyAyMTQuNDQ0IDEwMC4yNjQgMjE0LjcwOCAxMDAuNDQ5IDIxNS4wNDRDMTAwLjYzMyAyMTUuMzggMTAwLjY5MiAyMTUuNzY3IDEwMC42MTYgMjE2LjE0MUMxMDAuNTM5IDIxNi41MTQgMTAwLjMzMSAyMTYuODUgMTAwLjAyOCAyMTcuMDkyQzk5LjcyNDggMjE3LjMzMyA5OS4zNDQ4IDIxNy40NjUgOTguOTUyNiAyMTcuNDY1Qzk4LjU2MDUgMjE3LjQ2NSA5OC4xODA0IDIxNy4zMzMgOTcuODc3MiAyMTcuMDkyQzk3LjU3NCAyMTYuODUgOTcuMzY2NCAyMTYuNTE0IDk3LjI4OTcgMjE2LjE0MUM5Ny4yMTMgMjE1Ljc2NyA5Ny4yNzIgMjE1LjM4IDk3LjQ1NjYgMjE1LjA0NEM5Ny42NDEyIDIxNC43MDggOTcuOTQgMjE0LjQ0NCA5OC4zMDIyIDIxNC4yOThDOTguNzE5MSAyMTQuMTI5IDk5LjE4NzggMjE0LjEyNyA5OS42MDY1IDIxNC4yOTFMOTkuNjAzMSAyMTQuMjk4WiIgZmlsbD0iIzAwQTE5QSIvPgo8cGF0aCBkPSJNNDkuNTk3MyAxNTUuNDI1TDUwLjMxODEgMTU3LjA5Mkw0MS40MjA5IDE2MC42ODhDMzkuNTUzMiAxNjEuNDg1IDM4LjA4MTcgMTYyLjk2IDM3LjMyMjQgMTY0Ljc5OEMzNi41NjMxIDE2Ni42MzcgMzYuNTc2NyAxNjguNjkxIDM3LjM2MDMgMTcwLjUyQzM4LjE0MzggMTcyLjM0OCAzOS42MzQ4IDE3My44MDUgNDEuNTEyOCAxNzQuNTc4QzQzLjM5MDggMTc1LjM1MSA0NS41MDYgMTc1LjM3NyA0Ny40MDM4IDE3NC42NTJMNTYuMzA4IDE3MS4wNTJMNTcuMDE4NSAxNzIuNzE4TDQ4LjExNDQgMTc2LjMyNUM0Ni45MzkyIDE3Ni44MyA0NS42NzE5IDE3Ny4xMDIgNDQuMzg3IDE3Ny4xMjVDNDMuMTAyMSAxNzcuMTQ4IDQxLjgyNTQgMTc2LjkyMSA0MC42MzE4IDE3Ni40NTlDMzkuNDM4MyAxNzUuOTk2IDM4LjM1MiAxNzUuMzA2IDM3LjQzNjYgMTc0LjQzQzM2LjUyMTMgMTczLjU1NCAzNS43OTU0IDE3Mi41MSAzNS4zMDE1IDE3MS4zNTdDMzQuODA3NiAxNzAuMjA1IDM0LjU1NTcgMTY4Ljk2OSAzNC41NjA2IDE2Ny43MjFDMzQuNTY1NSAxNjYuNDczIDM0LjgyNzEgMTY1LjIzOSAzNS4zMjk5IDE2NC4wOUMzNS44MzI4IDE2Mi45NDIgMzYuNTY2OSAxNjEuOTAyIDM3LjQ4OSAxNjEuMDMzQzM4LjQxMTIgMTYwLjE2NCAzOS41MDI5IDE1OS40ODIgNDAuNyAxNTkuMDI4TDQ5LjU5NzMgMTU1LjQyNVoiIGZpbGw9IiMwMEExOUEiLz4KPHBhdGggZD0iTTQxLjc3ODIgMTY4LjczOUM0Mi4wNzczIDE2OS40MzcgNDIuNTE1MSAxNzAuMDcxIDQzLjA2NjggMTcwLjYwNUM0My42MTg0IDE3MS4xMzkgNDQuMjczIDE3MS41NjIgNDQuOTkzMSAxNzEuODUxQzQ1LjcxMzIgMTcyLjEzOSA0Ni40ODQ4IDE3Mi4yODYgNDcuMjYzNyAxNzIuMjg1QzQ4LjA0MjUgMTcyLjI4MyA0OC44MTM1IDE3Mi4xMzMgNDkuNTMyNCAxNzEuODQyTDU1LjU4NzUgMTY5LjM5NUw1MS4wMjU2IDE1OC43NjJMNDQuOTc0IDE2MS4yMTJDNDQuMjU1MiAxNjEuNTAyIDQzLjYwMjQgMTYxLjkyNyA0My4wNTI4IDE2Mi40NjNDNDIuNTAzMiAxNjIuOTk4IDQyLjA2NzYgMTYzLjYzNCA0MS43NzA4IDE2NC4zMzJDNDEuNDc0MSAxNjUuMDMxIDQxLjMyMiAxNjUuNzggNDEuMzIzMyAxNjYuNTM2QzQxLjMyNDUgMTY3LjI5MiA0MS40NzkxIDE2OC4wNDEgNDEuNzc4MiAxNjguNzM5Wk00OS4xMTM3IDE2NS43NzlDNDkuMjY0IDE2Ni4xMzEgNDkuMjgzOCAxNjYuNTI0IDQ5LjE2OTcgMTY2Ljg4OUM0OS4wNTU1IDE2Ny4yNTQgNDguODE0NSAxNjcuNTcgNDguNDg3NiAxNjcuNzgyQzQ4LjE2MDggMTY3Ljk5NCA0Ny43NjgzIDE2OC4wODkgNDcuMzc3MSAxNjguMDUyQzQ2Ljk4NiAxNjguMDE0IDQ2LjYyMDIgMTY3Ljg0NiA0Ni4zNDIzIDE2Ny41NzZDNDYuMDY0MyAxNjcuMzA3IDQ1Ljg5MTQgMTY2Ljk1MSA0NS44NTI4IDE2Ni41NzJDNDUuODE0MyAxNjYuMTkyIDQ1LjkxMjYgMTY1LjgxMSA0Ni4xMzA5IDE2NS40OTNDNDYuMzQ5MyAxNjUuMTc2IDQ2LjY3NDIgMTY0Ljk0MiA0Ny4wNTAzIDE2NC44MzFDNDcuNDI2NSAxNjQuNzIgNDcuODMwNSAxNjQuNzM5IDQ4LjE5MzcgMTY0Ljg4NUM0OC40MDAyIDE2NC45NjggNDguNTg3NyAxNjUuMDg5IDQ4Ljc0NTYgMTY1LjI0M0M0OC45MDM1IDE2NS4zOTYgNDkuMDI4NiAxNjUuNTc4IDQ5LjExMzcgMTY1Ljc3OVoiIGZpbGw9IiMwMEExOUEiLz4KPHBhdGggZD0iTTU2LjkxNTggODkuNDY5Mkw1Ni4xODgxIDkxLjEzNTlMNDcuMjYzNCA4Ny41NjkyQzQ1LjM1MzkgODYuODA1NCA0My4yMTAxIDg2LjgwOTUgNDEuMzAzNyA4Ny41ODA2QzM5LjM5NzMgODguMzUxNyAzNy44ODQ0IDg5LjgyNjYgMzcuMDk3OCA5MS42ODA5QzM2LjMxMTIgOTMuNTM1MiAzNi4zMTU0IDk1LjYxNjkgMzcuMTA5NSA5Ny40NjgyQzM3LjkwMzUgOTkuMzE5NSAzOS40MjI0IDEwMC43ODkgNDEuMzMxOSAxMDEuNTUyTDUwLjI1NjYgMTA1LjExMkw0OS41NDk1IDEwNi43NzlMNDAuNjI0OCAxMDMuMjEyQzM5LjQ1MjggMTAyLjc0MyAzOC4zODc0IDEwMi4wNTUgMzcuNDg5NCAxMDEuMTg2QzM2LjU5MTUgMTAwLjMxNyAzNS44Nzg1IDk5LjI4NDkgMzUuMzkxMyA5OC4xNDg1QzM0LjQwNzQgOTUuODUzNCAzNC40MDI2IDkzLjI3MjcgMzUuMzc4MSA5MC45NzQyQzM2LjM1MzUgODguNjc1NyAzOC4yMjkzIDg2Ljg0NzYgNDAuNTkyOCA4NS44OTIxQzQyLjk1NjMgODQuOTM2NiA0NS42MTM4IDg0LjkzMiA0Ny45ODA4IDg1Ljg3OTNMNTYuOTE1OCA4OS40NjkyWiIgZmlsbD0iIzAwQTE5QSIvPgo8cGF0aCBkPSJNNDEuNjk1NSA5My41MTI0QzQxLjM5OCA5NC4yMTE1IDQxLjI0NTQgOTQuOTYwOCA0MS4yNDY2IDk1LjcxNzNDNDEuMjQ3OCA5Ni40NzM4IDQxLjQwMjcgOTcuMjIyNyA0MS43MDI0IDk3LjkyMDlDNDIuMDAyMiA5OC42MTkyIDQyLjQ0MDkgOTkuMjUzMiA0Mi45OTM0IDk5Ljc4NjVDNDMuNTQ1OSAxMDAuMzIgNDQuMjAxMyAxMDAuNzQyIDQ0LjkyMjEgMTAxLjAyOUw1MC45ODA3IDEwMy40NTZMNTUuNTAxNCA5Mi43ODlMNDkuNDM2IDkwLjM2MjRDNDguNzE1OCA5MC4wNzQgNDcuOTQ0IDg5LjkyNjQgNDcuMTY0OSA4OS45MjhDNDYuMzg1OSA4OS45Mjk2IDQ1LjYxNDggOTAuMDgwMyA0NC44OTU4IDkwLjM3MTdDNDQuMTc2OCA5MC42NjMgNDMuNTI0MSA5MS4wODkyIDQyLjk3NDkgOTEuNjI1OUM0Mi40MjU4IDkyLjE2MjUgNDEuOTkxIDkyLjc5OSA0MS42OTU1IDkzLjQ5OVY5My41MTI0Wk00OS4wMzQ0IDk2LjQ0NTdDNDguOTM4MSA5Ni42NzA4IDQ4Ljc5MTcgOTYuODcyNCA0OC42MDU3IDk3LjAzNkM0OC40MTk2IDk3LjE5OTcgNDguMTk4NSA5Ny4zMjEyIDQ3Ljk1ODMgOTcuMzkyQzQ3LjcxODEgOTcuNDYyNyA0Ny40NjQ3IDk3LjQ4MDkgNDcuMjE2NCA5Ny40NDUyQzQ2Ljk2ODEgOTcuNDA5NSA0Ni43MzEgOTcuMzIwOSA0Ni41MjIyIDk3LjE4NTZDNDYuMzEzNCA5Ny4wNTA0IDQ2LjEzOCA5Ni44NzE4IDQ2LjAwODcgOTYuNjYyOUM0NS44Nzk0IDk2LjQ1NCA0NS43OTk0IDk2LjIxOTggNDUuNzc0NCA5NS45NzczQzQ1Ljc0OTQgOTUuNzM0NyA0NS43ODAxIDk1LjQ4OTggNDUuODY0MiA5NS4yNjAyQzQ1Ljk0ODMgOTUuMDMwNSA0Ni4wODM4IDk0LjgyMTggNDYuMjYwOSA5NC42NDlDNDYuNDU4MyA5NC40NTY2IDQ2LjcwMTUgOTQuMzE0NSA0Ni45NjkxIDk0LjIzNTNDNDcuMjM2NiA5NC4xNTYxIDQ3LjUyMDIgOTQuMTQyMyA0Ny43OTQ2IDk0LjE5NUM0OC4wNjg5IDk0LjI0NzggNDguMzI1NyA5NC4zNjU1IDQ4LjU0MTkgOTQuNTM3N0M0OC43NTgyIDk0LjcxIDQ4LjkyNzQgOTQuOTMxNCA0OS4wMzQ0IDk1LjE4MjRDNDkuMTIgOTUuMzgyNiA0OS4xNjQxIDk1LjU5NzIgNDkuMTY0MSA5NS44MTRDNDkuMTY0MSA5Ni4wMzA4IDQ5LjEyIDk2LjI0NTUgNDkuMDM0NCA5Ni40NDU3WiIgZmlsbD0iIzAwQTE5QSIvPgo8cGF0aCBkPSJNMTA5LjkwNCA0OC4yMjI4TDEwOC4xODggNDguOTE5NUwxMDQuNDgxIDQwLjI2OTVDMTA0LjEwMiAzOS4zMzM5IDEwMy41MzQgMzguNDgxMSAxMDIuODExIDM3Ljc2MUMxMDIuMDg5IDM3LjA0MDkgMTAxLjIyNSAzNi40NjggMTAwLjI3MiAzNi4wNzU3Qzk5LjMxODYgMzUuNjgzNSA5OC4yOTQyIDM1LjQ3OTcgOTcuMjU4NyAzNS40NzY1Qzk2LjIyMzMgMzUuNDczMyA5NS4xOTc2IDM1LjY3MDUgOTQuMjQxNiAzNi4wNTY4QzkzLjI4NTYgMzYuNDQzMSA5Mi40MTg1IDM3LjAxMDYgOTEuNjkxIDM3LjcyNjJDOTAuOTYzNiAzOC40NDE3IDkwLjM5MDMgMzkuMjkxIDkwLjAwNDkgNDAuMjI0MkM4OS42MTk0IDQxLjE1NzQgODkuNDI5NCA0Mi4xNTU5IDg5LjQ0NjEgNDMuMTYxM0M4OS40NjI3IDQ0LjE2NjcgODkuNjg1NyA0NS4xNTg4IDkwLjEwMTggNDYuMDc5NUw5My44MTU5IDU0LjcxOTRMOTIuMDk5NiA1NS40MDk0TDg4LjM5NTggNDYuNzY5NUM4Ny44ODY1IDQ1LjYzMDEgODcuNjE1NSA0NC40MDM3IDg3LjU5ODYgNDMuMTYxN0M4Ny41ODE4IDQxLjkxOTYgODcuODE5NCA0MC42ODY3IDg4LjI5NzcgMzkuNTM0N0M4OC43NzYgMzguMzgyNyA4OS40ODU0IDM3LjMzNDUgOTAuMzg0NiAzNi40NTExQzkxLjI4MzggMzUuNTY3NyA5Mi4zNTUgMzQuODY2NyA5My41MzU3IDM0LjM4OUM5NC43MTY1IDMzLjkxMTMgOTUuOTgzMyAzMy42NjYzIDk3LjI2MjQgMzMuNjY4M0M5OC41NDE1IDMzLjY3MDMgOTkuODA3NSAzMy45MTkzIDEwMC45ODcgMzQuNDAwN0MxMDIuMTY2IDM0Ljg4MjIgMTAzLjIzNSAzNS41ODY1IDEwNC4xMzEgMzYuNDcyN0MxMDUuMDI3IDM3LjM1ODkgMTA1LjczMyAzOC40MDkzIDEwNi4yMDggMzkuNTYyOUwxMDkuOTA0IDQ4LjIyMjhaIiBmaWxsPSIjMDBBMTlBIi8+CjxwYXRoIGQ9Ik05Ni4xOTgyIDQwLjYyNjJDOTUuNDc5IDQwLjkxNjYgOTQuODI1OCA0MS4zNDE4IDk0LjI3NTkgNDEuODc3NUM5My43MjYxIDQyLjQxMzIgOTMuMjkwMyA0My4wNDg4IDkyLjk5MzUgNDMuNzQ4MUM5Mi42OTY3IDQ0LjQ0NzQgOTIuNTQ0NyA0NS4xOTY3IDkyLjU0NjMgNDUuOTUzQzkyLjU0NzggNDYuNzA5NCA5Mi43MDI4IDQ3LjQ1OCA5My4wMDI1IDQ4LjE1NjJMOTUuNTIyIDU0LjAzNjFMMTA2LjQ3MiA0OS42MDYxTDEwMy45NTIgNDMuNzI2MkMxMDMuNjUzIDQzLjAyNzggMTAzLjIxNSA0Mi4zOTM1IDEwMi42NjQgNDEuODU5NUMxMDIuMTEyIDQxLjMyNTYgMTAxLjQ1OCA0MC45MDI0IDEwMC43MzggNDAuNjE0MkMxMDAuMDE3IDQwLjMyNiA5OS4yNDU5IDQwLjE3ODQgOTguNDY3IDQwLjE3OTlDOTcuNjg4MSA0MC4xODE0IDk2LjkxNzEgNDAuMzMxOSA5Ni4xOTgyIDQwLjYyMjlWNDAuNjI2MlpNOTkuMjQ2MyA0Ny43NDk1Qzk4LjkzMzEgNDcuODggOTguNTg3IDQ3LjkxNjkgOTguMjUyMSA0Ny44NTU3Qzk3LjkxNzEgNDcuNzk0NCA5Ny42MDg2IDQ3LjYzNzcgOTcuMzY1NyA0Ny40MDU1Qzk3LjEyMjggNDcuMTczNCA5Ni45NTY2IDQ2Ljg3NjIgOTYuODg4MyA0Ni41NTJDOTYuODIgNDYuMjI3NyA5Ni44NTI2IDQ1Ljg5MTEgOTYuOTgyIDQ1LjU4NDlDOTcuMTExNCA0NS4yNzg4IDk3LjMzMTggNDUuMDE2OSA5Ny42MTUgNDQuODMyOEM5Ny44OTgyIDQ0LjY0ODcgOTguMjMxNSA0NC41NTA3IDk4LjU3MjMgNDQuNTUxMkM5OC45MTMxIDQ0LjU1MTcgOTkuMjQ2MSA0NC42NTA3IDk5LjUyODcgNDQuODM1NkM5OS44MTE0IDQ1LjAyMDUgMTAwLjAzMSA0NS4yODMgMTAwLjE1OSA0NS41ODk1QzEwMC4yNDYgNDUuNzg5NSAxMDAuMjkgNDYuMDA0MSAxMDAuMjkxIDQ2LjIyMUMxMDAuMjkyIDQ2LjQzNzggMTAwLjI0OSA0Ni42NTI3IDEwMC4xNjQgNDYuODUzM0MxMDAuMDc5IDQ3LjA1MzkgOTkuOTU0NSA0Ny4yMzYzIDk5Ljc5NyA0Ny4zOTAxQzk5LjYzOTYgNDcuNTQzOSA5OS40NTI0IDQ3LjY2NiA5OS4yNDYzIDQ3Ljc0OTVaIiBmaWxsPSIjMDBBMTlBIi8+CjxwYXRoIGQ9Ik0xNTYuNDA5IDE4OS4zMDJDMTQ5LjY2NSAxOTEuNDQ1IDE0Mi42NDkgMTkyLjY3OSAxMzUuNTYgMTkyLjk2OEMxMjguMjIxIDE5My4yNzYgMTIwLjg3NCAxOTIuNjAzIDExMy43MjUgMTkwLjk2OEMxMDYuNTcyIDE4OS4zNzUgOTkuODQzNSAxODYuMzQyIDkzLjk3MzggMTgyLjA2NUM4Ny44NDggMTc3LjQ3NyA4Mi45MTc5IDE3MS41NTYgNzkuNTgxIDE2NC43NzlDNzUuNTY3MSAxNTYuMzE5IDczLjU2NTYgMTQ3LjA5MSA3My43MjUgMTM3Ljc3OUM3My40MzM0IDEyOS41NTIgNzQuODAxMiAxMjEuMzQ5IDc3Ljc1MTQgMTEzLjYzMkM4Mi44ODUyIDEwMC4yMiA5My4yMjI5IDg5LjI5MzkgMTA2LjU1MSA4My4xOTI2QzExMy4xNzQgODAuMDk5OSAxMjAuMjUyIDc4LjAyMyAxMjcuNTMxIDc3LjAzNkMxMzUuMDU2IDc2LjAxMDYgMTQyLjY5NSA3Ni4wNDg4IDE1MC4yMSA3Ny4xNDk0QzE1Ny45OTUgNzguMjc1MiAxNjUuNTg2IDgwLjQyNzMgMTcyLjc3MiA4My41NDZDMTcxLjQ2NSA4OC45MTkzIDE3MC4yMDcgOTQuMjg5MiAxNjguOTk2IDk5LjY1NThDMTY3Ljc4NiAxMDUuMDIyIDE2Ni42MDYgMTEwLjQ2NyAxNjUuNDU3IDExNS45ODlWMTE2LjIyNkwxNjAuMzM5IDExNi40NjJMMTQ1LjQ1OSAxMTYuNjk5QzE0NC4xNTkgMTE2LjY5OSAxNDMuNTA5IDExNS45MSAxNDMuNTA5IDExNC4zMzJWMTAxLjc4NkMxNDMuNTE1IDEwMS40NjggMTQzLjYwOCAxMDEuMTU3IDE0My43OCAxMDAuODg2QzE0My45NTEgMTAwLjYxNSAxNDQuMTk0IDEwMC4zOTQgMTQ0LjQ4NCAxMDAuMjQ2QzE0NS4xOTEgOTkuODU1NCAxNDUuOTkgOTkuNjUwMSAxNDYuODAzIDk5LjY1MDFDMTQ3LjYxNiA5OS42NTAxIDE0OC40MTUgOTkuODU1NCAxNDkuMTIyIDEwMC4yNDZDMTQ5LjQxMSAxMDAuMzk1IDE0OS42NTQgMTAwLjYxNiAxNDkuODI1IDEwMC44ODdDMTQ5Ljk5NiAxMDEuMTU4IDE1MC4wOSAxMDEuNDY4IDE1MC4wOTcgMTAxLjc4NlYxMTAuMzEySDE1OC4zOUwxNTMuOTg5IDg4Ljc1NTlDMTUxLjA0MyA4Ny42ODc5IDE0Ny45NzMgODYuOTcyNiAxNDQuODQ4IDg2LjYyNTlDMTQxIDg2LjE1MjMgMTM3LjEwNSA4Ni4xNTIzIDEzMy4yNTYgODYuNjI1OUMxMjkuMDQzIDg3LjE0NDEgMTI0LjkzMyA4OC4yNjc1IDEyMS4wNiA4OS45NTkzQzExNi44NyA5MS43NzkgMTEzLjEyNiA5NC40NDIyIDExMC4wNzYgOTcuNzcyNUMxMDYuNTMzIDEwMS43MzUgMTAzLjgwMyAxMDYuMzE4IDEwMi4wMyAxMTEuMjc2Qzk5Ljc0NzggMTE3LjgzIDk4LjY3MTggMTI0LjcyMyA5OC44NTE1IDEzMS42MzlDOTguNDE2MyAxMzkuNzE1IDk5Ljc0NzYgMTQ3Ljc4OSAxMDIuNzU4IDE1NS4zMjlDMTA1LjA4MiAxNjAuOTEgMTA4LjgwOSAxNjUuODM4IDExMy41OTggMTY5LjY2MkMxMTguMDA2IDE3My4wMzUgMTIzLjEyNSAxNzUuNDI1IDEyOC41OTEgMTc2LjY2MkMxMzQuMDMgMTc3LjkxMSAxMzkuNTkzIDE3OC41ODEgMTQ1LjE4MSAxNzguNjYyQzE1MC4zNTcgMTc4Ljc2IDE1NS41MzMgMTc4LjQ4MyAxNjAuNjY1IDE3Ny44MzJDMTY1LjQ3MSAxNzcuMjAzIDE2OS40MTQgMTc2LjY0NyAxNzIuNDk0IDE3Ni4xNjVMMTczLjIzMiAxODEuMzc1QzE2OC4wNjggMTg0LjgyNiAxNjIuMzk2IDE4Ny40OTggMTU2LjQwOSAxODkuMzAyWiIgZmlsbD0iIzAwQTE5QSIvPgo8cGF0aCBkPSJNNzIuMDg3OCAzMDEuNzk3QzY4LjI4OCAyODcuNTQ3IDU5Ljg3MTMgMjc3LjYzMSA1MC4xMTkzIDI3Ny42MzFDMzYuODA3OCAyNzcuNjMxIDI1Ljk5NTEgMjk2LjA4IDI1Ljk5NTEgMzE4LjgxNEMyNS45ODQ4IDM0MS41NCAzNi43OTc1IDM1OS45OTcgNTAuMTA5IDM1OS45OTdDNjAuODU2NCAzNTkuOTk3IDY5Ljk3MzQgMzQ3Ljk3NyA3My4wODY3IDMzMS4zOUg2MC43Mjk0QzU4LjY0NTggMzQxLjE0NyA1NC4zMzQ1IDM0Ny44NiA0OS4zNTczIDM0Ny44NkM0Mi4zNTQ4IDM0Ny44NiAzNi42NTY3IDMzNC41NTcgMzYuNjU2NyAzMTguMTY3QzM2LjY1NjcgMzAxLjc4NCA0Mi4zNTE0IDI4OC40ODEgNDkuMzU3MyAyODguNDgxQzUzLjc4MTkgMjg4LjQ4MSA1Ny42Nzc4IDI5My43NzQgNTkuOTUzNiAzMDEuODE0TDcyLjA4NzggMzAxLjc5N1oiIGZpbGw9IiNBNTExNUIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05NS4yNTc3IDMzNS4zMzdINzMuMDg2N0M3My4wODY3IDM0OC40MzcgODIuOTAzOSAzNTkuMDc3IDk0Ljk5MzQgMzU5LjA3N0MxMDcuMDgzIDM1OS4wNzcgMTE2LjkgMzQ4LjQzNyAxMTYuOSAzMzUuMzM3SDEwNC4yVjMzOC4wNDdIODUuNzgzOFYzMzUuMzhMOTUuMjU3NyAzMzUuMzM3Wk03My4wODY3IDI4Ni4wMTRIODUuNzg3MlYzMzUuMzQ3SDczLjA4NjdWMjg2LjAxNFpNMTA0LjIgMjkwLjQ1NEgxMTYuOVYzMzUuMzM3SDEwNC4yVjI5MC40NTRaTTEwNC4yIDMzOC4wNUMxMDQuMjg3IDM0MC41MSAxMDMuMzY3IDM0Mi45MDMgMTAxLjY0IDM0NC43MDZDOTkuOTE0MiAzNDYuNTA4IDk3LjUyMjkgMzQ3LjU3MyA5NC45OSAzNDcuNjY3QzkyLjQ1NzQgMzQ3LjU3MSA5MC4wNjY5IDM0Ni41MDUgODguMzQxNiAzNDQuNzAzQzg2LjYxNjIgMzQyLjkgODUuNjk2NiAzNDAuNTA3IDg1Ljc4MzggMzM4LjA0N0gxMDQuMlYzMzguMDVaIiBmaWxsPSIjQTUxMTVCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIyLjk5MyAzNTcuNTMzSDEzMy4xNUMxMzUuMjkyIDM1Mi45NSAxMzQuMzE0IDM0MS45MjMgMTM4LjIzIDM0Mi43MzdIMTQ4LjM5MUMxNTMuMTIxIDM0Mi42ODMgMTUxLjU0OSAzNDguNzcgMTUzLjQ3MSAzNjBIMTYzLjYyOEMxNjkuNzYyIDM0MS4xNjMgMTU2LjY0MyAyOTQuMTg3IDE0My4zMTEgMjkzLjQxN0MxMzUuMDY2IDI5NC41NTQgMTE3LjI2NCAzMzcuODU3IDEyMi45OTMgMzU3LjUzM1pNMTQzLjMxMSAzMTMuMTQ0QzE0MC43MDUgMzE0Ljg5NCAxMzkuMTE2IDMxOS45MjcgMTM4LjIzIDMyNy45NEMxMzguODc5IDMyOC42MTggMTM5LjY2NSAzMjkuMTU5IDE0MC41MzkgMzI5LjUyOUMxNDEuNDEzIDMyOS44OTggMTQyLjM1NiAzMzAuMDg5IDE0My4zMDkgMzMwLjA4OUMxNDQuMjYyIDMzMC4wODkgMTQ1LjIwNSAzMjkuODk4IDE0Ni4wNzkgMzI5LjUyOUMxNDYuOTUzIDMyOS4xNTkgMTQ3LjczOCAzMjguNjE4IDE0OC4zODcgMzI3Ljk0QzE0Ny44MTEgMzIwLjI4NCAxNDYuMTcgMzE1LjQgMTQzLjMxMSAzMTMuMTQ0WiIgZmlsbD0iI0E1MTE1QiIvPgo8cGF0aCBkPSJNMTc2LjA3NSAyODEuMDg0SDEyOC4wNzNWMjkwLjQ1MUgxNzYuMDc1VjM1OC4yNzNIMTg1LjcyVjI5MC40NTFIMjA5LjMzNlYyODEuMDg0SDE3Ni4wNzVaIiBmaWxsPSIjQTUxMTVCIi8+CjxwYXRoIGQ9Ik0yMTQuNDE2IDM0OC45VjI4MS4wODRIMjI0LjA2NVYzNDguOUgyNDQuODkxVjM1OC4yN0gyMTQuNDE2VjM0OC45WiIgZmlsbD0iI0E1MTE1QiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./assets/images/media_not_found.svg":
/*!*******************************************!*\
  !*** ./assets/images/media_not_found.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0iYTMzOGU3NTUtZjZjNy00NWEwLThlYzctMGU4YTkyZTMzY2Y2IiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjgxNi4yMjIzNyIgaGVpZ2h0PSI3MDAuNTk3IiB2aWV3Qm94PSIwIDAgODE2LjIyMjM3IDcwMC41OTciPjxwYXRoIGQ9Ik03NzIuMDIwOSw3OTcuODk1MThhMzQuODE0MjYsMzQuODE0MjYsMCwwLDEtMTYuNzQ1NjEtNC4zMDg1OUwyNzguODY3LDUzMy4wNDA2OWEzNS4wMzk0MiwzNS4wMzk0MiwwLDAsMS0xMy45MTM3LTQ3LjUwMTQ3TDQ2Ni4wMDA2MywxMTcuOTI0YTM0Ljk5OTQ1LDM0Ljk5OTQ1LDAsMCwxLDQ3LjUwMTcxLTEzLjkxMzU4bDQ3Ni40MDgyLDI2MC41NDU5YTM1LjAzOTEzLDM1LjAzOTEzLDAsMCwxLDEzLjkxMzgyLDQ3LjUwMTQ3TDgwMi43NzcsNzc5LjY3M2EzNC43NzE0LDM0Ljc3MTQsMCwwLDEtMjAuODY5MTQsMTYuNzk0OTJBMzUuMTQ3LDM1LjE0NywwLDAsMSw3NzIuMDIwOSw3OTcuODk1MThabS0xMy44NjY3LTkuNTcyMjdhMjkuMDAwNzksMjkuMDAwNzksMCwwLDAsMzkuMzU4NjQtMTEuNTI4OEw5OTguNTYwMiw0MDkuMTc4ODdBMjkuMDMzNDUsMjkuMDMzNDUsMCwwLDAsOTg3LjAzMTY0LDM2OS44Mkw1MTAuNjIzNDQsMTA5LjI3NDA5YTI5LjAwMDgxLDI5LjAwMDgxLDAsMCwwLTM5LjM1ODY1LDExLjUyODhMMjcwLjIxNzQzLDQ4OC40MTgxM0EyOS4wMzMzNSwyOS4wMzMzNSwwLDAsMCwyODEuNzQ2LDUyNy43NzdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkxLjg4ODgyIC05OS43MDE1KSIgZmlsbD0iI2YyZjJmMiIvPjxwYXRoIGQ9Ik03ODEuODQ0MTQsNjY5LjMyNDg3YTMyLjcwNTY3LDMyLjcwNTY3LDAsMCwxLTE1LjY4MjYyLTQuMDE2NkwzODAuOTk5MTcsNDU0LjY2NDcxYTMyLjQ2OTQ3LDMyLjQ2OTQ3LDAsMCwxLTEyLjkxOTkyLTQ0LjEwODRMNDg4LjE1MSwxOTEuMDA1YTMyLjQ5NjkzLDMyLjQ5NjkzLDAsMCwxLDQ0LjEwODY1LTEyLjkxOTkyTDkxNy40MjIyNiwzODguNzI4NjhhMzIuNDk3NTgsMzIuNDk3NTgsMCwwLDEsMTIuOTE5OTMsNDQuMTA4MzlsLS40Mzg3My0uMjM5NzQuNDM4NzMuMjM5NzRMODEwLjI3MDQxLDY1Mi4zODgzNEEzMi4zNjQzLDMyLjM2NDMsMCwwLDEsNzgxLjg0NDE0LDY2OS4zMjQ4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTEuODg4ODIgLTk5LjcwMTUpIiBmaWxsPSIjZjJmMmYyIi8+PHBhdGggZD0iTTc2OS44ODg4Miw3OTcuNzk4NWgtNTQzYTMyLjUzNjkyLDMyLjUzNjkyLDAsMCwxLTMyLjUtMzIuNXYtNDE5YTMyLjUzNjkyLDMyLjUzNjkyLDAsMCwxLDMyLjUtMzIuNWg1NDNhMzIuNTM2ODUsMzIuNTM2ODUsMCwwLDEsMzIuNSwzMi41djQxOUEzMi41MzY4NSwzMi41MzY4NSwwLDAsMSw3NjkuODg4ODIsNzk3Ljc5ODVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkxLjg4ODgyIC05OS43MDE1KSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik03NjkuODg4ODIsODAwLjI5ODVoLTU0M2EzNS4wMzk0NywzNS4wMzk0NywwLDAsMS0zNS0zNXYtNDE5YTM1LjAzOTQ3LDM1LjAzOTQ3LDAsMCwxLDM1LTM1aDU0M2EzNS4wMzk0NywzNS4wMzk0NywwLDAsMSwzNSwzNXY0MTlBMzUuMDM5NDcsMzUuMDM5NDcsMCwwLDEsNzY5Ljg4ODgyLDgwMC4yOTg1Wm0tNTQzLTQ4M2EyOS4wMzI3NSwyOS4wMzI3NSwwLDAsMC0yOSwyOXY0MTlhMjkuMDMyNzUsMjkuMDMyNzUsMCwwLDAsMjksMjloNTQzYTI5LjAzMjc2LDI5LjAzMjc2LDAsMCwwLDI5LTI5di00MTlhMjkuMDMyNzYsMjkuMDMyNzYsMCwwLDAtMjktMjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkxLjg4ODgyIC05OS43MDE1KSIgZmlsbD0iI2U2ZTZlNiIvPjxwYXRoIGQ9Ik01ODIuODkxNTYsNDUxLjU4NmE0MC43NjM1OCw0MC43NjM1OCwwLDAsMC0zMi41NTExNiwxNi4xODU5MywyNi44Mzk3NiwyNi44Mzk3NiwwLDAsMC0zNy40NDkxMiwyNC42NDc1N0g2MjMuNzI1MDVBNDAuODMzNDIsNDAuODMzNDIsMCwwLDAsNTgyLjg5MTU2LDQ1MS41ODZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkxLjg4ODgyIC05OS43MDE1KSIgZmlsbD0iI2U2ZTZlNiIvPjxjaXJjbGUgY3g9IjE0OC4xOTY2OSIgY3k9IjQ0NS45NjAzNiIgcj0iNjUuNzU3MjciIGZpbGw9IiNhMzE5NWIiLz48cGF0aCBkPSJNNzI1LjI0ODY4LDY4MS4xNzg1MWEzMS44NzgxMSwzMS44NzgxMSwwLDAsMS03LjM1OTg2Ljg1aC00MzlhMzEuODc0OTIsMzEuODc0OTIsMCwwLDEtMTUuNDYtMy45N2wxLjE2OTkyLTEuNjgsNDguOTgtNzAuNTMsNzIuNTgwMDgtMTA0LjQ5LDEuMDYtMS41MywxMS40MTk5My0xNi40NGE4LjMzNjkzLDguMzM2OTMsMCwwLDEsMTMuNzAwMTksMGwzNy45Mzk5NCw1NC42MXYuMDFsMjIuMzE5ODMsMzIuMTQsNTMuMjgwMjcsNzYuNyw4MC44MDk1Ny0xMTUuMzVhOC4zNDc4Miw4LjM0NzgyLDAsMCwxLDEzLjY4MDE4LDBsNTEuODM5ODQsNzMuOTksMi45OCw0LjI1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS44ODg4MiAtOTkuNzAxNSkiIGZpbGw9IiMxYzJkM2QiLz48cGF0aCBkPSJNNDk1LjYxODQ4LDUxOS43NjgwNUE1MC4yOTI3MSw1MC4yOTI3MSwwLDAsMCw0NTUuNDU4LDUzOS43Mzc3LDMzLjExNCwzMy4xMTQsMCwwLDAsNDA5LjI1NDUsNTcwLjE0N2gxMzYuNzQzQTUwLjM3ODksNTAuMzc4OSwwLDAsMCw0OTUuNjE4NDgsNTE5Ljc2ODA1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS44ODg4MiAtOTkuNzAxNSkiIGZpbGw9IiNjY2MiLz48cGF0aCBkPSJNNzE3Ljg4ODgyLDY4My4wMjg0OGgtNDM5YTMyLjk3MDA3LDMyLjk3MDA3LDAsMCwxLTMzLTMzVjM5OS43ODg3M2EzMy4wMzczNCwzMy4wMzczNCwwLDAsMSwzMy0zM2g0MzlhMzMuMDM3MzQsMzMuMDM3MzQsMCwwLDEsMzMsMzNWNjUwLjAyODQ4YTMyLjk2MjExLDMyLjk2MjExLDAsMCwxLTMzLDMzWm0tNDM5LTMxNC4yMzk3NWEzMS4wMzUyLDMxLjAzNTIsMCwwLDAtMzEsMzFWNjUwLjAyODQ4YTMwLjk3MDc3LDMwLjk3MDc3LDAsMCwwLDMxLDMxaDQzOWEzMC45NjM3LDMwLjk2MzcsMCwwLDAsMzEtMzFWMzk5Ljc4ODczYTMxLjAzNTIxLDMxLjAzNTIxLDAsMCwwLTMxLTMxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MS44ODg4MiAtOTkuNzAxNSkiIGZpbGw9IiMxYzJkM2QiLz48L3N2Zz4K");

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

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Coatl\\Coatl\\Coatl\\front-end\\components\\avatars\\CircleAvatar.tsx";



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

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Coatl\\Coatl\\Coatl\\front-end\\components\\buttons\\LoadMoreButton.tsx";



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

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Coatl\\Coatl\\Coatl\\front-end\\components\\buttons\\OutlineButton.tsx";

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

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Coatl\\Coatl\\Coatl\\front-end\\components\\cards\\ProductCard.tsx";





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


var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Coatl\\Coatl\\Coatl\\front-end\\components\\dropdowns\\Dropdown.tsx";



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

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Coatl\\Coatl\\Coatl\\front-end\\components\\footers\\Footer.tsx";



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

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Coatl\\Coatl\\Coatl\\front-end\\components\\galleries\\ProductsGallery.tsx";



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

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Coatl\\Coatl\\Coatl\\front-end\\components\\menus\\CategoriesMenu.tsx";

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

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Coatl\\Coatl\\Coatl\\front-end\\components\\menus\\DepartmentsMenu.tsx";





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


var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Coatl\\Coatl\\Coatl\\front-end\\components\\navbars\\Omnibar.tsx";











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
    countProducts
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
              children: countProducts()
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

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Coatl\\Coatl\\Coatl\\front-end\\components\\navbars\\Tabbar.tsx";






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

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Coatl\\Coatl\\Coatl\\front-end\\context\\AuthContext.tsx";



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

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Coatl\\Coatl\\Coatl\\front-end\\context\\OrderContext.tsx";

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);

  const countProducts = () => {
    return order ? order.variants.length : 0;
  };

  const addOrderItem = item => {}; //: use this function to add a new item to the order in local storage


  const setOrderItemInLS = activeOrder => {
    localStorage.setItem('orderItems', JSON.stringify(activeOrder));
  }; //: use this function to get the current order object from local storage


  const getOrderItemFromLS = () => {
    try {
      return JSON.parse(localStorage.getItem('orderItems')) || [];
    } catch (_error) {
      console.error(_error.message);
      return null;
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OrderContext.Provider, {
    value: {
      order,
      countProducts
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
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
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
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
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
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
exports.default = void 0;

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

var _default = requestIdleCallback;
exports.default = _default;

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

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
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
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
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
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
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
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
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
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
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

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

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
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
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

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

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

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

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
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
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

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

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
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
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
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
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

      const {
        url,
        as,
        options
      } = state;
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
      }));
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

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

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


  push(url, as = url, options = {}) {
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


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

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
      this.notify(this.components[this.route]);
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
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(addBasePath(addLocale(delBasePath((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname), this.locale)), pages, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname, this.locales);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: (0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(resolvedAs) ? delBasePath(resolvedAs) : resolvedAs, this.locales).pathname
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
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

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
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
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

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

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

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
        __N: true
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
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

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
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
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

  async getRouteInfo(route, pathname, query, as, routeProps) {
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
        }), delBasePath(as), __N_SSG, this.locale);
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

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
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
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
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

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
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
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
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
    return fetchNextData(dataHref, this.isSsr);
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

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

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
    throw new Error('invariant: invalid relative URL');
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

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
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

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
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _normalizeLocalePath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  if (!pages.includes((0, _normalizeLocalePath.normalizeLocalePath)(asPath, locales).pathname)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        const fsPathname = (0, _normalizeLocalePath.normalizeLocalePath)((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath), locales).pathname;

        if (pages.includes(fsPathname)) {
          asPath = fsPathname; // check if we now match a page as this means we are done
          // resolving the rewrites

          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(fsPathname);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          asPath = fsPathname;
          break;
        }
      }
    }
  }

  return asPath;
}

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

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
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
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
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

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Coatl\\Coatl\\Coatl\\front-end\\pages\\index.tsx";












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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2ZldGNoLWRlcGFydG1lbnRzLnRzIiwid2VicGFjazovLy8uL2FjdGlvbnMvZmV0Y2gtcHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9mZXRjaC1zZXNzaW9ucy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2ZhY2Vib29rX2NpcmNsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9mcmFtZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9pbnN0YWdyYW1fc3F1YXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvbWVkaWFfbm90X2ZvdW5kLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F2YXRhcnMvQ2lyY2xlQXZhdGFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvTG9hZE1vcmVCdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9PdXRsaW5lQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmRzL1Byb2R1Y3RDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3ducy9Ecm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXJzL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYWxsZXJpZXMvUHJvZHVjdHNHYWxsZXJ5LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnVzL0NhdGVnb3JpZXNNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnVzL0RlcGFydG1lbnRzTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXJzL09tbmliYXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFycy9UYWJiYXIudHN4Iiwid2VicGFjazovLy8uL2NvbmZpZy9nbG9iYWxzLnRzIiwid2VicGFjazovLy8uL2NvbnRleHQvQXV0aENvbnRleHQudHN4Iiwid2VicGFjazovLy8uL2NvbnRleHQvT3JkZXJDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9saWIvYXBvbGxvLWNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2RldGVjdC10b3VjaC1kZXZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybWF0LXByaWNlLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2dldC1tZWRpYS1zb3VyY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWZlYXRoZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2luZGV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiZ2V0RGVwYXJ0bWVudHMiLCJhcG9sbG9DbGllbnQiLCJlcnJvciIsImRhdGEiLCJxdWVyeSIsImdxbCIsImRlcGFydG1lbnRzIiwiZ2V0UHJvZHVjdHNQYWdlIiwiZmlsdGVyIiwiZm9ybWF0RmlsdGVycyIsImZvcm1hdHRlZEZpbHRlcnMiLCJkZXBhcnRtZW50IiwiY2F0ZWdvcnkiLCJzdWJjYXRlZ29yeSIsInN0YXJ0IiwibGltaXQiLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJnZXRQcm9kdWN0QnlTbHVnIiwic2x1ZyIsImdldFNlc3Npb24iLCJ0b2tlbiIsInVybCIsImluY2x1ZGVzIiwiQVVUSF9HT09HTEVfQ0FMTEJBQ0siLCJBVVRIX0ZBQ0VCT09LX0NBTExCQUNLIiwicmVzcG9uc2UiLCJmZXRjaCIsInNlc3Npb25EYXRhIiwianNvbiIsImp3dCIsInVzZXIiLCJpZCIsInVzZXJuYW1lIiwiZW1haWwiLCJhdmF0YXIiLCJmb3JtYXRzIiwidGh1bWJuYWlsIiwiQ2lyY2xlQXZhdGFyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwic2l6ZSIsInN0cmluZyIsImRlZmF1bHRQcm9wcyIsInN0eWxlcyIsInRhaWx3aW5kIiwiZnJhbWUiLCJjb250YWluZXIiLCJnZW5lcmljIiwiaW1hZ2UiLCJub0F2YXRhciIsImdldENvbnRhaW5lclN0eWxlIiwiZ2V0Tm9BdmF0YXJTdHlsZSIsImdldE1lZGlhU291cmNlIiwiTG9hZE1vcmVCdXR0b24iLCJkaXNhYmxlZCIsImJvb2wiLCJmZXRjaGVyIiwiZnVuYyIsImZldGhlciIsImNsYXNzZXMiLCJkZWZhdWx0IiwiZW5hYmxlZCIsInJlZnJlc2hJY29uIiwidXNlUmVmIiwibG9hZE1vcmUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNldFRpbWVvdXQiLCJPdXRsaW5lQnV0dG9uIiwibGFiZWwiLCJQcm9kdWN0Q2FyZCIsIm9mZmVyIiwiY2xpcFBhdGgiLCJpc0hvdmVyIiwic2V0SXNIb3ZlciIsInVzZVN0YXRlIiwiYW5pbWF0ZU9uSG92ZXIiLCJpc1RvdWNoRW5hYmxlZCIsImN1cnJlbnRUYXJnZXQiLCJjb3ZlciIsImFsdGVybmF0aXZlVGV4dCIsIm9mZmVycyIsImxlbmd0aCIsIm5hbWUiLCJmb3JtYXRQcmljZSIsInByaWNlIiwiRHJvcGRvd24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJhcnJvd0ljb24iLCJhbmltYXRlIiwic29jaWFsIiwibG9nbyIsImxpbmtzIiwiaXRlbSIsImxlZ2FscyIsImNvcHlyaWdodHMiLCJhbmNob3IiLCJGb290ZXIiLCJjdWF0bExvZ28iLCJmYWNlYm9va0xvZ28iLCJpbnN0YWdyYW1Mb2dvIiwiUHJvZHVjdHNHYWxsZXJ5IiwiYXJyYXlPZiIsIm1hcCIsIkNhdGVnb3JpZXNNZW51Iiwic3ViY2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJEZXBhcnRtZW50c01lbnUiLCJkZXBhcnRtZW50c01lbnUiLCJjYXRlZ29yaWVzTWVudSIsInRpdGxlIiwic2V0RGVwYXJ0bWVudCIsInNob3dDYXRlZ29yaWVzIiwiZXZ0IiwiT21uaWJhciIsIm1lbnVFbnRyaWVzIiwiYXJyYXkiLCJjYXJ2aW5nIiwibWVudSIsImxpbmtHcm91cCIsImJhZyIsIml0ZW1zQ291bnRlciIsIm5hdmJhciIsImJhY2tncm91bmRJbWFnZSIsImNhcnZpbmdJbWFnZSIsImZvbnRTaXplIiwibWVudUNvbnRhaW5lciIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImNvdW50UHJvZHVjdHMiLCJPcmRlckNvbnRleHQiLCJpc01lbnVWaXNpYmxlIiwic2V0SXNNZW51VmlzaWJsZSIsImxvZ29JbWFnZSIsIlRhYmJhciIsInBhZ2UiLCJ0YWJJdGVtIiwiVEFCX1BBR0VTIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJIT01FIiwiQkFHIiwiVVNFUiIsIkhFTFAiLCJBUElfRE9NQUlOIiwicHJvY2VzcyIsIlBBR0VfTElNSVQiLCJBVVRIX0ZBQ0VCT09LX1VSTCIsIkFVVEhfR09PR0xFX1VSTCIsIlNUUklQRV9QVUJMSVNIRURfS0VZIiwiY3JlYXRlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsInNldFVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dpbiIsInNlc3Npb24iLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlcGxhY2UiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsInB1c2giLCJnZXRTZXNzaW9uU3RvcmFnZSIsInBhcnNlIiwiZ2V0SXRlbSIsIl9lcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiZ2V0VG9rZW4iLCJ1c2VTZXNzaW9uIiwidXNlRWZmZWN0IiwiaXNVc2VyTG9nZ2VkSW4iLCJPcmRlclByb3ZpZGVyIiwib3JkZXIiLCJzZXRPcmRlciIsInZhcmlhbnRzIiwiYWRkT3JkZXJJdGVtIiwic2V0T3JkZXJJdGVtSW5MUyIsImFjdGl2ZU9yZGVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0T3JkZXJJdGVtRnJvbUxTIiwiY3JlYXRlQXBvbGxvQ2xpZW50IiwiQXBvbGxvQ2xpZW50Iiwic3NyTW9kZSIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImluaXRpYWxpemVBcG9sbG9DbGllbnQiLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJyZXN0b3JlIiwidXNlQXBvbGxvQ2xpZW50Iiwic3RvcmUiLCJ1c2VNZW1vIiwicHJlZmV0Y2hlZCIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJzdWNjZXNzIiwid2luZG93IiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJEYXRlIiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJvbkJ1aWxkTWFuaWZlc3QiLCJpZGxlVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwic3NnNDA0IiwibW9kIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJ2YWxpZGF0ZSIsInBhcnNlZERlc3RpbmF0aW9uIiwiaGFkTG9jYWxlIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInN0ck9yQXJyYXkiLCJjb21waWxlTm9uUGF0aCIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJmc1BhdGhuYW1lIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsImdhbGxlcnkiLCJsb2FkQnV0dG9uIiwiSG9tZVBhZ2UiLCJpbml0aWFsUHJvZHVjdHMiLCJzZXRQYWdlIiwiaW5kZXgiLCJwcmV2aW91c0RhdGEiLCJnZXROZXdQYWdlIiwibmV3UGFnZSIsImNvbmNhdCIsImxvZ2luVXNlciIsImdldFNlcnZlclNpZGVQcm9wcyIsIm1heFRvdWNoUG9pbnRzIiwiY3VycmVuY3lDb2RlIiwicHJpY2VXaXRoRGVjaW1hbHMiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInRvVXBwZXJDYXNlIiwibWVkaWEiLCJtZWRpYU5vdEZvdW5kSW1hZ2UiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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R0FUeUQsQ0FXMUQ7OztBQUNBLFNBQU84aUIsS0FBSyxDQUFDOWlCLEdBQWI7QUFDRCxDQWJEOztBQWVlZ0MsNkVBQWYsRTs7Ozs7Ozs7Ozs7QUM5QkEsMkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIGdxbCwgTm9ybWFsaXplZENhY2hlT2JqZWN0IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5pbXBvcnQgSURlcGFydG1lbnQgZnJvbSAnQC9tb2RlbHMvSURlcGFydG1lbnQnO1xuXG5leHBvcnQgY29uc3QgZ2V0RGVwYXJ0bWVudHMgPSBhc3luYyAoXG4gIGFwb2xsb0NsaWVudDogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD5cbik6IFByb21pc2U8SURlcGFydG1lbnRbXT4gPT4ge1xuICBjb25zdCB7IGVycm9yLCBkYXRhIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSBnZXREZXBhcnRtZW50cyB7XG4gICAgICAgIGRlcGFydG1lbnRzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHNsdWdcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgc3ViY2F0ZWdvcmllcyB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGBcbiAgfSk7XG5cbiAgcmV0dXJuIGVycm9yID8/IGRhdGEuZGVwYXJ0bWVudHM7XG59O1xuIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBncWwsIE5vcm1hbGl6ZWRDYWNoZU9iamVjdCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuaW1wb3J0IElQcm9kdWN0IGZyb20gJ0AvbW9kZWxzL0lQcm9kdWN0JztcblxuaW50ZXJmYWNlIElQYWdlRmlsdGVyIHtcbiAgc3RhcnQ6IG51bWJlcjtcbiAgbGltaXQ6IG51bWJlcjtcbiAgcXVlcnk/OiBhbnlcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c1BhZ2UgPSBhc3luYyAoXG4gIGFwb2xsb0NsaWVudDogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD4sXG4gIGZpbHRlcjogSVBhZ2VGaWx0ZXJcbik6IFByb21pc2U8SVByb2R1Y3RbXT4gPT4ge1xuICBjb25zdCBmb3JtYXRGaWx0ZXJzID0gKCkgPT4ge1xuICAgIGxldCBmb3JtYXR0ZWRGaWx0ZXJzID0gJyc7XG5cbiAgICBpZiAoZmlsdGVyLnF1ZXJ5KSB7XG4gICAgICBpZiAoZmlsdGVyLnF1ZXJ5LmRlcGFydG1lbnQpIHtcbiAgICAgICAgZm9ybWF0dGVkRmlsdGVycyArPSBgXG4gICAgICAgICAgZGVwYXJ0bWVudHM6IHsgc2x1ZzogXCIke2ZpbHRlci5xdWVyeS5kZXBhcnRtZW50fVwiIH1cbiAgICAgICAgYDtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRlci5xdWVyeS5jYXRlZ29yeSkge1xuICAgICAgICBmb3JtYXR0ZWRGaWx0ZXJzICs9IGBcbiAgICAgICAgICBjYXRlZ29yaWVzOiB7IHNsdWc6IFwiJHtmaWx0ZXIucXVlcnkuY2F0ZWdvcnl9XCIgfVxuICAgICAgICBgO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlsdGVyLnF1ZXJ5LnN1YmNhdGVnb3J5KSB7XG4gICAgICAgIGZvcm1hdHRlZEZpbHRlcnMgKz0gYFxuICAgICAgICAgIHN1YmNhdGVnb3JpZXM6IHsgc2x1ZzogXCIke2ZpbHRlci5xdWVyeS5zdWJjYXRlZ29yeX1cIiB9XG4gICAgICAgIGA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdHRlZEZpbHRlcnM7XG4gIH07XG5cbiAgY29uc3QgeyBlcnJvciwgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgZ2V0UHJvZHVjdHNQYWdlKFxuICAgICAgICAkd2hlcmU6IEpTT04hID0ge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICAgICR7Zm9ybWF0RmlsdGVycygpfVxuICAgICAgICB9XG4gICAgICApIHtcbiAgICAgICAgcHJvZHVjdHMoc3RhcnQ6ICR7ZmlsdGVyLnN0YXJ0fSwgbGltaXQ6ICR7ZmlsdGVyLmxpbWl0fSwgd2hlcmU6ICR3aGVyZSkge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBwcmljZVxuICAgICAgICAgIG9mZmVycyh3aGVyZTogeyBhY3RpdmU6IHRydWUgfSkge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICB9XG4gICAgICAgICAgY292ZXIge1xuICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XG4gICAgICAgICAgICB1cmxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgXG4gIH0pO1xuXG4gIHJldHVybiBlcnJvciA/PyBkYXRhLnByb2R1Y3RzLmZpbHRlcigocHJvZHVjdDogSVByb2R1Y3QpID0+IHByb2R1Y3QgIT09IG51bGwpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RCeVNsdWcgPSBhc3luYyAoXG4gIGFwb2xsb0NsaWVudDogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD4sXG4gIHNsdWc6IHN0cmluZ1xuKTogUHJvbWlzZTxJUHJvZHVjdD4gPT4ge1xuICBjb25zdCB7IGVycm9yLCBkYXRhIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSBnZXRQcm9kdWN0KCR3aGVyZTogSlNPTiEgPSB7IGFjdGl2ZTogdHJ1ZSwgc2x1ZzogXCIke3NsdWd9XCIgfSkge1xuICAgICAgICBwcm9kdWN0cyh3aGVyZTogJHdoZXJlKSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBtZWRpYSB7XG4gICAgICAgICAgICBtaW1lXG4gICAgICAgICAgICB1cmxcbiAgICAgICAgICB9XG4gICAgICAgICAgbWV0YV9kZXNjcmlwdGlvblxuICAgICAgICAgIG1ldGFfdGl0bGVcbiAgICAgICAgICBvZmZlcnMod2hlcmU6IHsgYWN0aXZlOiB0cnVlIH0pIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgZGlzY291bnRcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgICB2YXJpYW50cyh3aGVyZToge2FjdGl2ZTogdHJ1ZX0pIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBjb2xvclxuICAgICAgICAgICAgcGF0dGVyblxuICAgICAgICAgICAgc2l6ZVxuICAgICAgICAgICAgc3RvY2tcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgXG4gIH0pO1xuXG4gIHJldHVybiBlcnJvciA/PyBkYXRhLnByb2R1Y3RzWzBdO1xufTtcbiIsImltcG9ydCB7IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0ssIEFVVEhfR09PR0xFX0NBTExCQUNLIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XG5pbXBvcnQgSVNlc3Npb24gZnJvbSAnQC9tb2RlbHMvSVNlc3Npb24nO1xuXG5leHBvcnQgY29uc3QgZ2V0U2Vzc2lvbiA9IGFzeW5jICh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxJU2Vzc2lvbj4gPT4ge1xuICBjb25zdCB1cmw6IHN0cmluZyA9IHRva2VuLmluY2x1ZGVzKCdpZF90b2tlbicpXG4gICAgPyBBVVRIX0dPT0dMRV9DQUxMQkFDS1xuICAgIDogQVVUSF9GQUNFQk9PS19DQUxMQkFDSztcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIHRva2VuKTtcbiAgY29uc3Qgc2Vzc2lvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogc2Vzc2lvbkRhdGEuand0LFxuICAgIHVzZXI6IHtcbiAgICAgIGlkOiBzZXNzaW9uRGF0YS51c2VyLmlkLFxuICAgICAgdXNlcm5hbWU6IHNlc3Npb25EYXRhLnVzZXIudXNlcm5hbWUsXG4gICAgICBlbWFpbDogc2Vzc2lvbkRhdGEudXNlci5lbWFpbCxcbiAgICAgIGF2YXRhcjogc2Vzc2lvbkRhdGEudXNlci5hdmF0YXJcbiAgICAgICAgPyBzZXNzaW9uRGF0YS51c2VyLmF2YXRhci5mb3JtYXRzLnRodW1ibmFpbFxuICAgICAgICA6IG51bGxcbiAgICB9XG4gIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlJQUFBQ0NDQVlBQUFDS0F4RDlBQUFBQ1hCSVdYTUFBQmNSQUFBWEVRSEtKdk0vQUFBSlUwbEVRVlI0bk8yZFhXaGNSUlRIWjNlVHROdDB1MGxiV20reGRDcytxQzBrQllzb3hXekJsNExpRnQvOHdCUkVIL3phS3NLQ1FsTkYyQmNoQmZ2bVIvS2crRkpJRlBSSlRWNzZVb1VFS3BVS2JkWmExNWFreldhcDIrWmpWMlo3RnJlWk8zZnZ4OXk1TS9lZUh5d2JkbmFUbXp2L1BYUG16TXc1c1VhalFSQWtIdms3Z0RSQklTQk5VQWhJRXhRQzBxUXJyTGZCS0ZTemhKQU1QQVlKSVgzdzh4N216WHltb1dXR0VMSklDSmtpaE15Vmk2azU3aWMwSlJTekJxTlFwWjJjYlhzTU1HOFNTd1ZFMFh5VWk2a1oyZit6YUxRVmdsR28wbS81TUpIVDhaMW9DV09DUHNyRjFHS0g5eXVIVmtJd0NsVnEydk9Fa0p4REV5K2JTUkRFbU1MWGVBOWFDTUVvVklmaDJ6L0VOS29OdFJSVURLT3EreFhLQ2dIRy9XR3dBQ3AvKysweVRrVlJMcWFtVkx3NDVZUUFBc2pESTgyOFFYL29UR1JFTlVFb0pRUVlBa1pDWWdFNk1RNkNVR0xJVUVJSU1BTVkxZEFIOEVvRi9JZVJvQzhrVUNIQU1FQnZ3dHRNWTdRb1VYOG95T0VpTUNGQTVHOHNJc09BWFU3QmNDRTlEaEhJV29OUnFGSXI4RE9LZ0lGYXhpa1lLcVVpMVNMQVVEQVJRVi9BS2RSM3lNc01TRWtUQXFoOEtxUlRRcjhZTHhkVHd6TCtrQlFod0xSd0ZFWGdDaHAzeVBudE4vZ3VCQkRCbDB3RDRvUlp1cmptcHhoOGRSYkJLVVFSZUdmQWJ5ZlNONHRnRktyVTBYbVphVUM4VUFITElIei9neThXQVN3QmlrQThhYkFNR2RHL1diaEZRSjlBQ3NKOUJxRVdBVVVnalpiUDBDZnFEd29UQWpneUtBSjVERUNJWGdoQ2hnWlE1bHdVNGdUN2RzVkplbU9NZWYxOHVVNldhb0dzMjV3VXNYb3BTZ2d6Q213Z0ZjcVdaSXc4czcrcjl0amV4STFIOXlSVzkyNkwyMTRYV1ZranRiOFc2OWZwejVmbTYvRzVoWHI5UXJtKzQvSkNQWG5sWm9OY3VWbG5QdU9SbytWaWFzTExyL0FzQktOUUhRM1RNdklMQjd0cnJ4enFXWHBvWjN3bjB5aUF6ODh1bHo3NDlvN294VFk2clJ6MHNzbkYwd0VYV0VvT2hRamVQN0toOHRxaG5wN3VCRWtTMG56b1JCcjhoYXpiYTNidExMYXRKR3JORXc4a3lPOG5ObGZlR09wSmd3aDBaUWppTjNLRkVJWkZwRStlMnpoLzV0Vk5KSjJNaGNYSlBlRTIyT1JxYUlBaFFkdklJWFVFZjN4cjA0MzcrK1BibVViOWNUVkV1TFVJMnB6Z1dVK2JDTFl5amVGZ0NBSjdqbkFzQkJpSHROMWlGbklSdEJoMUduVjBKSVMyd3lkYVFuMkNDSWlBZ08vbXFKK2NXZ1J0VHgvUjJjSHpCN3ZENkJQd3lEdXhDcmFGb0xNMW9IN0JGeThsSzB4RHVIRmtGWnhZQkcydHdadlpua3FJcG9oT3NHMFZiQWxCZDJ0QUk0Wk1RelN3YlJYc1dvU2NydGFBTGh4cEhqSDBpcTJwcEYwaEJINUkweTN2UExYaGxwNVhMb3c5ZHVJS0hZVUFVVVF0NHdhNysrTmtWem9XcFprQ2o0NUNzQk5pbG5MU3hnK2VmREJSazdXU3VIUzdjWFBoVm1PSmFWakh4V3YxemN5TC9rT2pqUm1yWldvN1FzZ3hyMmpDa2YxZDg5UXcrSFcxbFZxajh0SDNkM3ErTzcrYVhLbzErZ2toL2N5YjFDRUhDNFdtV0FyQktGUzFkUklwKzR5RWI3T0ZUNmVYS3gvL2NFZW5lek5zSllST1BvSzIxb0J5MzVhWUw3dU12ajYzTXErWkNDZ0RWa3ZVb1JVQ2pSLzRBUjBPM2oxelcxY0hsTnVmWENIQTluUnRoNFg5QnZkZjg4VHA2V1hoTzA4bHd0Mm5ZSFczdUIrS01qOWRYRlhaSWV3RXQwOVJDQTc1N1crZERRSko4MDVVb3hBYzhNOVM0NW8yRjh2SHRGOU5oUURlSldZM1dVZHRwWEdiZVZFL0hGa0UwemNqb2NDMGIxRUkwY1AwYUNJS0lZS1lPWXc4SVFnN2Q0OG9DZE8vUENFd2lrRkNCZE8vUENIZ2pDSGNkTFlJSXRPeElNckM5REVqQkRPemdZUU9wby9OaElCRUVCUUMwZ1NGZ0RTeDNLcW1BcCs5bUx6d2lCSGY1UFJTa3QyeGpZUVFvVHVVZHZmSHQ1OTlyN2ZFTkRqZzlOVHlqcS9PclNoM3prSjVJVHkrTjdHOHRUZjJNTk1RQUYxeDBydDNXN3pYeTErK3ZLRG1NallPRFpLaDZmVlVCSVVnRVpwLzBZY2NpMEpBSVVpa2xZUlRSUmdocUZxN09BejhVbHBUeFNkaitwZ1JBdUlmZjF5dk81Nzl5SUluaEtobEY1SENyMyt1cWJJRG1xbnp3Qk9DOEZJeHlOME03b3JBOUM5UENOeFRzNGc3NkducGdOTDRtOEgwTHdwQkV0ZXJqWDlWdVJhejQvRThJVEJlSmVLTjZUOVdWeFc1aGRQTUt4WkNZQlNEZUlNVzdsRGtGcHIycmFrUXdIUjRXbHhCN21YbTZwb3FDMDJtMXQ1VUNBRGpXU0x1VWVqTXBHbS9XZ25CVkRtSWN4UTZNMW5oVlpGRklVamc2bUo5V1pGTDRmYXBaWEV2bzFDZEN6cTFIcSs4WHVmUEpjaUhUMjlnWHZjQy9XYS8vazNOOFdZWG55cTd1ZUZZdVpneXJiWFJhUkZrSXVqaVhTcmxJNkNub2M5ZVdtTmUxd2h1RFM2cm9ZRlltUkpFTzJhdGFrbGJDZ0dLU3VJME1oeHdVK3NSbTh2UVhIT0NhSVZsUDlvUmdxbHpnV2pGcE5Xd1lFc0lNTzgwalU4ajJtQTVMTmdTQW9CV1FWOUtkcllmMmhJQ3pEM1JhZFFUVzdVMm5PeFo3R2hlRU9XbzhBSklYb1F3aG5zWnRjUDJsOWUyRU1EclJLdWdEeFZmaEVEdWltRUVmUVZ0eUhlYU1yYmo1bHlEdG9XK0lrVEpybS9Rd3JFUTRBOWdYRUZ0L0s4V0QyaGJLRHdDVExvNXR1aEtDQkJ0UE1rMElFRlRjVnVWei9YWlIzQWNaNWtHSkVpR25UaUlRb1FBYUZzVE1vUk13cllCVjNnU0Fnd1J4NWtHUkRZbHIxOUt6OGZpeThVVURWcU1NdzJJTEtoZmtITTdKTFFRbFI4aGovNUNZT1I1VzlTZElFUUlvTVljcmtWSTU1VFR3QkVQWVJsVDRKaGNGc1VnamZGeU1TVXNuaU0wZFE2WUtKeEorQS9ka1N6MFBndlBvUVJUbUdOTUF5S0tXVjdKUGkvNGtrd0x4aTBVZzNpYUl2QTZRekREdDZ4cUtBYmgrQ1lDNG5kNlBSRERZWFFnUFRQdXB3aUlqRHlMc0JLR3N3bjMwTm1CNnpVRXUwaEp1QW16aVF3R25SeHpUUFRzZ0llMHpLdFUwZVZpaXRZU09zVTBJdXVoYXdjSFJBV0w3Q0E5QlM4RVFZN2lVTUZsa2hiZkVoRTJka0lndVpnaDFqQ0lXOTd1Z1g0eGpwZUxLYzhMU0c0SUxDazNEVW1YaTZrc1RER2piaDFhVmlDdzR3S0JaMmVIY1RBVDBhVnM2Z3NjQlN0Z212OVFGa3FrNlFkSGtuckhCeUl5WEZBTGVMSmNUR1c4N0NvU2lWTDFHcWlEQk1QRjRaQUtvZ0tiZmpPdzUxTVpsS3p5MWdwQ0dZVnFGZzdVRERGdjBvdlc4YlBSSUJ4Qk95aGQ3cTlORUJuWUJUV3NXU1Y3YXRYR1pNWUQzS0o4M1VmeS82WVhLb1M4VWFqbVFCRFBNbTlVZ3hLY0hCOEwyZ0YwZ2haQ2FBZWNxd21qVU8yRE5Zd2NQQWVaR0hRYWtsVk55UTRFaVVJN0liU0FzWGFpbFMzTUtGUUhJVWlWaGVjQjVrTmlxRUJpNnlsNHpLZzY3anZCTWdWdkNCaUVHQVY5N29QbkZqd0h0TlJXMDJBUk9yMzFQR05XR0NzTWhGMElpRTJ3N2lQU0JJV0FORUVoSUlRUVF2NEQ4d0VPNG1KZ2gxRUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UUTBNQ0lnYUdWcFoyaDBQU0l6TUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREUwTkRBZ016QWlJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrQ2p4bklHTnNhWEF0Y0dGMGFEMGlkWEpzS0NOamJHbHdNQ2tpUGdvOGNtVmpkQ0IzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTXpBaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElERWdNekFwSWlCbWFXeHNQU0ozYUdsMFpTSXZQZ284Y0dGMGFDQmtQU0pOTVRFdU16QTVNU0F5TUM0NE9EWTBWakUyTGpJMU56bElNVFl1TnpBNU1WWXlOVWd4VmpZdU5VZ3lNaTQxVmpFd0xqVTVPVGhJTmk0MFZqSXdMamc0TmpSSU1URXVNekE1TVZvaUlHWnBiR3c5SWlOQk16RTVOVUlpTHo0S1BIQmhkR2dnWkQwaVRURTVJREV5TGpBd05GWXpNRWcxTlZZeU5TNDRPRGN6U0RRMkxqVldNakV1TnpjME5rZ3pOeTQxVmpFM0xqRTBOekpJTWpndU5WWXhNaTR3TURSSU1UbGFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtDanh3WVhSb0lHUTlJazB5T0NBd1ZqWXVOREkzTnpaSU16Y3VNVGt4TlZZeE1TNDFOalEzU0RRMkxqTTRNMVl4T0VnMU5WWXdTREk0V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGdvOGNtVmpkQ0IzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTXpBaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElEWTBJRE13S1NJZ1ptbHNiRDBpZDJocGRHVWlMejRLUEhCaGRHZ2daRDBpVFRjMExqTXdPVEVnTWpBdU9EZzJORll4Tmk0eU5UYzVTRGM1TGpjd09URldNalZJTmpSV05pNDFTRGcxTGpWV01UQXVOVGs1T0VnMk9TNDBWakl3TGpnNE5qUklOelF1TXpBNU1Wb2lJR1pwYkd3OUlpTkJNekU1TlVJaUx6NEtQSEJoZEdnZ1pEMGlUVGd5SURFeUxqQXdORll6TUVneE1UaFdNalV1T0RnM00wZ3hNRGt1TlZZeU1TNDNOelEyU0RFd01DNDFWakUzTGpFME56SklPVEV1TlZZeE1pNHdNRFJJT0RKYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0NqeHdZWFJvSUdROUlrMDVNU0F3VmpZdU5ESTNOelpJTVRBd0xqRTVNVll4TVM0MU5qUTNTREV3T1M0ek9ETldNVGhJTVRFNFZqQklPVEZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrQ2p4eVpXTjBJSGRwWkhSb1BTSTFOQ0lnYUdWcFoyaDBQU0l6TUNJZ2RISmhibk5tYjNKdFBTSnRZWFJ5YVhnb01TQXdJREFnTFRFZ01USTNJRE13S1NJZ1ptbHNiRDBpZDJocGRHVWlMejRLUEhCaGRHZ2daRDBpVFRFek55NHpNRGtnTWpBdU9EZzJORll4Tmk0eU5UYzVTREUwTWk0M01EbFdNalZJTVRJM1ZqWXVOVWd4TkRndU5WWXhNQzQxT1RrNFNERXpNaTQwVmpJd0xqZzROalJJTVRNM0xqTXdPVm9pSUdacGJHdzlJaU5CTXpFNU5VSWlMejRLUEhCaGRHZ2daRDBpVFRFME5TQXhNaTR3TURSV016QklNVGd4VmpJMUxqZzROek5JTVRjeUxqVldNakV1TnpjME5rZ3hOak11TlZZeE55NHhORGN5U0RFMU5DNDFWakV5TGpBd05FZ3hORFZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrQ2p4d1lYUm9JR1E5SWsweE5UUWdNRlkyTGpReU56YzJTREUyTXk0eE9URldNVEV1TlRZME4wZ3hOekl1TXpnelZqRTRTREU0TVZZd1NERTFORm9pSUdacGJHdzlJaU5CTXpFNU5VSWlMejRLUEhKbFkzUWdkMmxrZEdnOUlqVTBJaUJvWldsbmFIUTlJak13SWlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNneElEQWdNQ0F0TVNBeE9UQWdNekFwSWlCbWFXeHNQU0ozYUdsMFpTSXZQZ284Y0dGMGFDQmtQU0pOTWpBd0xqTXdPU0F5TUM0NE9EWTBWakUyTGpJMU56bElNakExTGpjd09WWXlOVWd4T1RCV05pNDFTREl4TVM0MVZqRXdMalU1T1RoSU1UazFMalJXTWpBdU9EZzJORWd5TURBdU16QTVXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZ284Y0dGMGFDQmtQU0pOTWpBNElERXlMakF3TkZZek1FZ3lORFJXTWpVdU9EZzNNMGd5TXpVdU5WWXlNUzQzTnpRMlNESXlOaTQxVmpFM0xqRTBOekpJTWpFM0xqVldNVEl1TURBMFNESXdPRm9pSUdacGJHdzlJaU5CTXpFNU5VSWlMejRLUEhCaGRHZ2daRDBpVFRJeE55QXdWall1TkRJM056WklNakkyTGpFNU1WWXhNUzQxTmpRM1NESXpOUzR6T0ROV01UaElNalEwVmpCSU1qRTNXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZ284Y21WamRDQjNhV1IwYUQwaU5UUWlJR2hsYVdkb2REMGlNekFpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SURJMU15QXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtDanh3WVhSb0lHUTlJazB5TmpNdU16QTVJREl3TGpnNE5qUldNVFl1TWpVM09VZ3lOamd1TnpBNVZqSTFTREkxTTFZMkxqVklNamMwTGpWV01UQXVOVGs1T0VneU5UZ3VORll5TUM0NE9EWTBTREkyTXk0ek1EbGFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtDanh3WVhSb0lHUTlJazB5TnpFZ01USXVNREEwVmpNd1NETXdOMVl5TlM0NE9EY3pTREk1T0M0MVZqSXhMamMzTkRaSU1qZzVMalZXTVRjdU1UUTNNa2d5T0RBdU5WWXhNaTR3TURSSU1qY3hXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZ284Y0dGMGFDQmtQU0pOTWpnd0lEQldOaTQwTWpjM05rZ3lPRGt1TVRreFZqRXhMalUyTkRkSU1qazRMak00TTFZeE9FZ3pNRGRXTUVneU9EQmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtDanh5WldOMElIZHBaSFJvUFNJMU5DSWdhR1ZwWjJoMFBTSXpNQ0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVNBd0lEQWdMVEVnTXpFMklETXdLU0lnWm1sc2JEMGlkMmhwZEdVaUx6NEtQSEJoZEdnZ1pEMGlUVE15Tmk0ek1Ea2dNakF1T0RnMk5GWXhOaTR5TlRjNVNETXpNUzQzTURsV01qVklNekUyVmpZdU5VZ3pNemN1TlZZeE1DNDFPVGs0U0RNeU1TNDBWakl3TGpnNE5qUklNekkyTGpNd09Wb2lJR1pwYkd3OUlpTkJNekU1TlVJaUx6NEtQSEJoZEdnZ1pEMGlUVE16TkNBeE1pNHdNRFJXTXpCSU16Y3dWakkxTGpnNE56TklNell4TGpWV01qRXVOemMwTmtnek5USXVOVll4Tnk0eE5EY3lTRE0wTXk0MVZqRXlMakF3TkVnek16UmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtDanh3WVhSb0lHUTlJazB6TkRNZ01GWTJMalF5TnpjMlNETTFNaTR4T1RGV01URXVOVFkwTjBnek5qRXVNemd6VmpFNFNETTNNRll3U0RNME0xb2lJR1pwYkd3OUlpTkJNekU1TlVJaUx6NEtQSEpsWTNRZ2QybGtkR2c5SWpVMElpQm9aV2xuYUhROUlqTXdJaUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d4SURBZ01DQXRNU0F6TnprZ016QXBJaUJtYVd4c1BTSjNhR2wwWlNJdlBnbzhjR0YwYUNCa1BTSk5Nemc1TGpNd09TQXlNQzQ0T0RZMFZqRTJMakkxTnpsSU16azBMamN3T1ZZeU5VZ3pOemxXTmk0MVNEUXdNQzQxVmpFd0xqVTVPVGhJTXpnMExqUldNakF1T0RnMk5FZ3pPRGt1TXpBNVdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnbzhjR0YwYUNCa1BTSk5NemszSURFeUxqQXdORll6TUVnME16TldNalV1T0RnM00wZzBNalF1TlZZeU1TNDNOelEyU0RReE5TNDFWakUzTGpFME56SklOREEyTGpWV01USXVNREEwU0RNNU4xb2lJR1pwYkd3OUlpTkJNekU1TlVJaUx6NEtQSEJoZEdnZ1pEMGlUVFF3TmlBd1ZqWXVOREkzTnpaSU5ERTFMakU1TVZZeE1TNDFOalEzU0RReU5DNHpPRE5XTVRoSU5ETXpWakJJTkRBMldpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnbzhjbVZqZENCM2FXUjBhRDBpTlRRaUlHaGxhV2RvZEQwaU16QWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREVnTUNBd0lDMHhJRFEwTWlBek1Da2lJR1pwYkd3OUluZG9hWFJsSWk4K0NqeHdZWFJvSUdROUlrMDBOVEl1TXpBNUlESXdMamc0TmpSV01UWXVNalUzT1VnME5UY3VOekE1VmpJMVNEUTBNbFkyTGpWSU5EWXpMalZXTVRBdU5UazVPRWcwTkRjdU5GWXlNQzQ0T0RZMFNEUTFNaTR6TURsYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0NqeHdZWFJvSUdROUlrMDBOakFnTVRJdU1EQTBWak13U0RRNU5sWXlOUzQ0T0RjelNEUTROeTQxVmpJeExqYzNORFpJTkRjNExqVldNVGN1TVRRM01rZzBOamt1TlZZeE1pNHdNRFJJTkRZd1dpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnbzhjR0YwYUNCa1BTSk5ORFk1SURCV05pNDBNamMzTmtnME56Z3VNVGt4VmpFeExqVTJORGRJTkRnM0xqTTRNMVl4T0VnME9UWldNRWcwTmpsYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0NqeHlaV04wSUhkcFpIUm9QU0kxTkNJZ2FHVnBaMmgwUFNJek1DSWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NU0F3SURBZ0xURWdOVEExSURNd0tTSWdabWxzYkQwaWQyaHBkR1VpTHo0S1BIQmhkR2dnWkQwaVRUVXhOUzR6TURrZ01qQXVPRGcyTkZZeE5pNHlOVGM1U0RVeU1DNDNNRGxXTWpWSU5UQTFWall1TlVnMU1qWXVOVll4TUM0MU9UazRTRFV4TUM0MFZqSXdMamc0TmpSSU5URTFMak13T1ZvaUlHWnBiR3c5SWlOQk16RTVOVUlpTHo0S1BIQmhkR2dnWkQwaVRUVXlNeUF4TWk0d01EUldNekJJTlRVNVZqSTFMamc0TnpOSU5UVXdMalZXTWpFdU56YzBOa2cxTkRFdU5WWXhOeTR4TkRjeVNEVXpNaTQxVmpFeUxqQXdORWcxTWpOYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0NqeHdZWFJvSUdROUlrMDFNeklnTUZZMkxqUXlOemMyU0RVME1TNHhPVEZXTVRFdU5UWTBOMGcxTlRBdU16Z3pWakU0U0RVMU9WWXdTRFV6TWxvaUlHWnBiR3c5SWlOQk16RTVOVUlpTHo0S1BISmxZM1FnZDJsa2RHZzlJalUwSWlCb1pXbG5hSFE5SWpNd0lpQjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3hJREFnTUNBdE1TQTFOamdnTXpBcElpQm1hV3hzUFNKM2FHbDBaU0l2UGdvOGNHRjBhQ0JrUFNKTk5UYzRMak13T1NBeU1DNDRPRFkwVmpFMkxqSTFOemxJTlRnekxqY3dPVll5TlVnMU5qaFdOaTQxU0RVNE9TNDFWakV3TGpVNU9UaElOVGN6TGpSV01qQXVPRGcyTkVnMU56Z3VNekE1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGdvOGNHRjBhQ0JrUFNKTk5UZzJJREV5TGpBd05GWXpNRWcyTWpKV01qVXVPRGczTTBnMk1UTXVOVll5TVM0M056UTJTRFl3TkM0MVZqRTNMakUwTnpKSU5UazFMalZXTVRJdU1EQTBTRFU0TmxvaUlHWnBiR3c5SWlOQk16RTVOVUlpTHo0S1BIQmhkR2dnWkQwaVRUVTVOU0F3VmpZdU5ESTNOelpJTmpBMExqRTVNVll4TVM0MU5qUTNTRFl4TXk0ek9ETldNVGhJTmpJeVZqQklOVGsxV2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGdvOGNtVmpkQ0IzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTXpBaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElEWXpNU0F6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrQ2p4d1lYUm9JR1E5SWswMk5ERXVNekE1SURJd0xqZzROalJXTVRZdU1qVTNPVWcyTkRZdU56QTVWakkxU0RZek1WWTJMalZJTmpVeUxqVldNVEF1TlRrNU9FZzJNell1TkZZeU1DNDRPRFkwU0RZME1TNHpNRGxhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrQ2p4d1lYUm9JR1E5SWswMk5Ea2dNVEl1TURBMFZqTXdTRFk0TlZZeU5TNDRPRGN6U0RZM05pNDFWakl4TGpjM05EWklOalkzTGpWV01UY3VNVFEzTWtnMk5UZ3VOVll4TWk0d01EUklOalE1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGdvOGNHRjBhQ0JrUFNKTk5qVTRJREJXTmk0ME1qYzNOa2cyTmpjdU1Ua3hWakV4TGpVMk5EZElOamMyTGpNNE0xWXhPRWcyT0RWV01FZzJOVGhhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrQ2p4eVpXTjBJSGRwWkhSb1BTSTFOQ0lnYUdWcFoyaDBQU0l6TUNJZ2RISmhibk5tYjNKdFBTSnRZWFJ5YVhnb01TQXdJREFnTFRFZ05qazBJRE13S1NJZ1ptbHNiRDBpZDJocGRHVWlMejRLUEhCaGRHZ2daRDBpVFRjd05DNHpNRGtnTWpBdU9EZzJORll4Tmk0eU5UYzVTRGN3T1M0M01EbFdNalZJTmprMFZqWXVOVWczTVRVdU5WWXhNQzQxT1RrNFNEWTVPUzQwVmpJd0xqZzROalJJTnpBMExqTXdPVm9pSUdacGJHdzlJaU5CTXpFNU5VSWlMejRLUEhCaGRHZ2daRDBpVFRjeE1pQXhNaTR3TURSV016QklOelE0VmpJMUxqZzROek5JTnpNNUxqVldNakV1TnpjME5rZzNNekF1TlZZeE55NHhORGN5U0RjeU1TNDFWakV5TGpBd05FZzNNVEphSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrQ2p4d1lYUm9JR1E5SWswM01qRWdNRlkyTGpReU56YzJTRGN6TUM0eE9URldNVEV1TlRZME4wZzNNemt1TXpnelZqRTRTRGMwT0ZZd1NEY3lNVm9pSUdacGJHdzlJaU5CTXpFNU5VSWlMejRLUEhKbFkzUWdkMmxrZEdnOUlqVTBJaUJvWldsbmFIUTlJak13SWlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNneElEQWdNQ0F0TVNBM05UY2dNekFwSWlCbWFXeHNQU0ozYUdsMFpTSXZQZ284Y0dGMGFDQmtQU0pOTnpZM0xqTXdPU0F5TUM0NE9EWTBWakUyTGpJMU56bElOemN5TGpjd09WWXlOVWczTlRkV05pNDFTRGMzT0M0MVZqRXdMalU1T1RoSU56WXlMalJXTWpBdU9EZzJORWczTmpjdU16QTVXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZ284Y0dGMGFDQmtQU0pOTnpjMUlERXlMakF3TkZZek1FZzRNVEZXTWpVdU9EZzNNMGc0TURJdU5WWXlNUzQzTnpRMlNEYzVNeTQxVmpFM0xqRTBOekpJTnpnMExqVldNVEl1TURBMFNEYzNOVm9pSUdacGJHdzlJaU5CTXpFNU5VSWlMejRLUEhCaGRHZ2daRDBpVFRjNE5DQXdWall1TkRJM056WklOemt6TGpFNU1WWXhNUzQxTmpRM1NEZ3dNaTR6T0ROV01UaElPREV4VmpCSU56ZzBXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZ284Y21WamRDQjNhV1IwYUQwaU5UUWlJR2hsYVdkb2REMGlNekFpSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SURneU1DQXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtDanh3WVhSb0lHUTlJazA0TXpBdU16QTVJREl3TGpnNE5qUldNVFl1TWpVM09VZzRNelV1TnpBNVZqSTFTRGd5TUZZMkxqVklPRFF4TGpWV01UQXVOVGs1T0VnNE1qVXVORll5TUM0NE9EWTBTRGd6TUM0ek1EbGFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtDanh3WVhSb0lHUTlJazA0TXpnZ01USXVNREEwVmpNd1NEZzNORll5TlM0NE9EY3pTRGcyTlM0MVZqSXhMamMzTkRaSU9EVTJMalZXTVRjdU1UUTNNa2c0TkRjdU5WWXhNaTR3TURSSU9ETTRXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZ284Y0dGMGFDQmtQU0pOT0RRM0lEQldOaTQwTWpjM05rZzROVFl1TVRreFZqRXhMalUyTkRkSU9EWTFMak00TTFZeE9FZzROelJXTUVnNE5EZGFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtDanh5WldOMElIZHBaSFJvUFNJMU5DSWdhR1ZwWjJoMFBTSXpNQ0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVNBd0lEQWdMVEVnT0RneklETXdLU0lnWm1sc2JEMGlkMmhwZEdVaUx6NEtQSEJoZEdnZ1pEMGlUVGc1TXk0ek1Ea2dNakF1T0RnMk5GWXhOaTR5TlRjNVNEZzVPQzQzTURsV01qVklPRGd6VmpZdU5VZzVNRFF1TlZZeE1DNDFPVGs0U0RnNE9DNDBWakl3TGpnNE5qUklPRGt6TGpNd09Wb2lJR1pwYkd3OUlpTkJNekU1TlVJaUx6NEtQSEJoZEdnZ1pEMGlUVGt3TVNBeE1pNHdNRFJXTXpCSU9UTTNWakkxTGpnNE56TklPVEk0TGpWV01qRXVOemMwTmtnNU1Ua3VOVll4Tnk0eE5EY3lTRGt4TUM0MVZqRXlMakF3TkVnNU1ERmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtDanh3WVhSb0lHUTlJazA1TVRBZ01GWTJMalF5TnpjMlNEa3hPUzR4T1RGV01URXVOVFkwTjBnNU1qZ3VNemd6VmpFNFNEa3pOMVl3U0RreE1Gb2lJR1pwYkd3OUlpTkJNekU1TlVJaUx6NEtQSEpsWTNRZ2QybGtkR2c5SWpVMElpQm9aV2xuYUhROUlqTXdJaUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d4SURBZ01DQXRNU0E1TkRZZ016QXBJaUJtYVd4c1BTSjNhR2wwWlNJdlBnbzhjR0YwYUNCa1BTSk5PVFUyTGpNd09TQXlNQzQ0T0RZMFZqRTJMakkxTnpsSU9UWXhMamN3T1ZZeU5VZzVORFpXTmk0MVNEazJOeTQxVmpFd0xqVTVPVGhJT1RVeExqUldNakF1T0RnMk5FZzVOVFl1TXpBNVdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnbzhjR0YwYUNCa1BTSk5PVFkwSURFeUxqQXdORll6TUVneE1EQXdWakkxTGpnNE56TklPVGt4TGpWV01qRXVOemMwTmtnNU9ESXVOVll4Tnk0eE5EY3lTRGszTXk0MVZqRXlMakF3TkVnNU5qUmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtDanh3WVhSb0lHUTlJazA1TnpNZ01GWTJMalF5TnpjMlNEazRNaTR4T1RGV01URXVOVFkwTjBnNU9URXVNemd6VmpFNFNERXdNREJXTUVnNU56TmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtDanh5WldOMElIZHBaSFJvUFNJMU5DSWdhR1ZwWjJoMFBTSXpNQ0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVNBd0lEQWdMVEVnTVRBd09TQXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtDanh3WVhSb0lHUTlJazB4TURFNUxqTXhJREl3TGpnNE5qUldNVFl1TWpVM09VZ3hNREkwTGpjeFZqSTFTREV3TURsV05pNDFTREV3TXpBdU5WWXhNQzQxT1RrNFNERXdNVFF1TkZZeU1DNDRPRFkwU0RFd01Ua3VNekZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrQ2p4d1lYUm9JR1E5SWsweE1ESTNJREV5TGpBd05GWXpNRWd4TURZelZqSTFMamc0TnpOSU1UQTFOQzQxVmpJeExqYzNORFpJTVRBME5TNDFWakUzTGpFME56SklNVEF6Tmk0MVZqRXlMakF3TkVneE1ESTNXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZ284Y0dGMGFDQmtQU0pOTVRBek5pQXdWall1TkRJM056WklNVEEwTlM0eE9WWXhNUzQxTmpRM1NERXdOVFF1TXpoV01UaElNVEEyTTFZd1NERXdNelphSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrQ2p4eVpXTjBJSGRwWkhSb1BTSTFOQ0lnYUdWcFoyaDBQU0l6TUNJZ2RISmhibk5tYjNKdFBTSnRZWFJ5YVhnb01TQXdJREFnTFRFZ01UQTNNaUF6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrQ2p4d1lYUm9JR1E5SWsweE1EZ3lMak14SURJd0xqZzROalJXTVRZdU1qVTNPVWd4TURnM0xqY3hWakkxU0RFd056SldOaTQxU0RFd09UTXVOVll4TUM0MU9UazRTREV3TnpjdU5GWXlNQzQ0T0RZMFNERXdPREl1TXpGYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0NqeHdZWFJvSUdROUlrMHhNRGt3SURFeUxqQXdORll6TUVneE1USTJWakkxTGpnNE56TklNVEV4Tnk0MVZqSXhMamMzTkRaSU1URXdPQzQxVmpFM0xqRTBOekpJTVRBNU9TNDFWakV5TGpBd05FZ3hNRGt3V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGdvOGNHRjBhQ0JrUFNKTk1UQTVPU0F3VmpZdU5ESTNOelpJTVRFd09DNHhPVll4TVM0MU5qUTNTREV4TVRjdU16aFdNVGhJTVRFeU5sWXdTREV3T1RsYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0NqeHlaV04wSUhkcFpIUm9QU0kxTkNJZ2FHVnBaMmgwUFNJek1DSWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NU0F3SURBZ0xURWdNVEV6TlNBek1Da2lJR1pwYkd3OUluZG9hWFJsSWk4K0NqeHdZWFJvSUdROUlrMHhNVFExTGpNeElESXdMamc0TmpSV01UWXVNalUzT1VneE1UVXdMamN4VmpJMVNERXhNelZXTmk0MVNERXhOVFl1TlZZeE1DNDFPVGs0U0RFeE5EQXVORll5TUM0NE9EWTBTREV4TkRVdU16RmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtDanh3WVhSb0lHUTlJazB4TVRVeklERXlMakF3TkZZek1FZ3hNVGc1VmpJMUxqZzROek5JTVRFNE1DNDFWakl4TGpjM05EWklNVEUzTVM0MVZqRTNMakUwTnpKSU1URTJNaTQxVmpFeUxqQXdORWd4TVRVeldpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnbzhjR0YwYUNCa1BTSk5NVEUyTWlBd1ZqWXVOREkzTnpaSU1URTNNUzR4T1ZZeE1TNDFOalEzU0RFeE9EQXVNemhXTVRoSU1URTRPVll3U0RFeE5qSmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtDanh5WldOMElIZHBaSFJvUFNJMU5DSWdhR1ZwWjJoMFBTSXpNQ0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVNBd0lEQWdMVEVnTVRFNU9DQXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtDanh3WVhSb0lHUTlJazB4TWpBNExqTXhJREl3TGpnNE5qUldNVFl1TWpVM09VZ3hNakV6TGpjeFZqSTFTREV4T1RoV05pNDFTREV5TVRrdU5WWXhNQzQxT1RrNFNERXlNRE11TkZZeU1DNDRPRFkwU0RFeU1EZ3VNekZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrQ2p4d1lYUm9JR1E5SWsweE1qRTJJREV5TGpBd05GWXpNRWd4TWpVeVZqSTFMamc0TnpOSU1USTBNeTQxVmpJeExqYzNORFpJTVRJek5DNDFWakUzTGpFME56SklNVEl5TlM0MVZqRXlMakF3TkVneE1qRTJXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZ284Y0dGMGFDQmtQU0pOTVRJeU5TQXdWall1TkRJM056WklNVEl6TkM0eE9WWXhNUzQxTmpRM1NERXlORE11TXpoV01UaElNVEkxTWxZd1NERXlNalZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrQ2p4eVpXTjBJSGRwWkhSb1BTSTFOQ0lnYUdWcFoyaDBQU0l6TUNJZ2RISmhibk5tYjNKdFBTSnRZWFJ5YVhnb01TQXdJREFnTFRFZ01USTJNU0F6TUNraUlHWnBiR3c5SW5kb2FYUmxJaTgrQ2p4d1lYUm9JR1E5SWsweE1qY3hMak14SURJd0xqZzROalJXTVRZdU1qVTNPVWd4TWpjMkxqY3hWakkxU0RFeU5qRldOaTQxU0RFeU9ESXVOVll4TUM0MU9UazRTREV5TmpZdU5GWXlNQzQ0T0RZMFNERXlOekV1TXpGYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0NqeHdZWFJvSUdROUlrMHhNamM1SURFeUxqQXdORll6TUVneE16RTFWakkxTGpnNE56TklNVE13Tmk0MVZqSXhMamMzTkRaSU1USTVOeTQxVmpFM0xqRTBOekpJTVRJNE9DNDFWakV5TGpBd05FZ3hNamM1V2lJZ1ptbHNiRDBpSTBFek1UazFRaUl2UGdvOGNHRjBhQ0JrUFNKTk1USTRPQ0F3VmpZdU5ESTNOelpJTVRJNU55NHhPVll4TVM0MU5qUTNTREV6TURZdU16aFdNVGhJTVRNeE5WWXdTREV5T0RoYUlpQm1hV3hzUFNJalFUTXhPVFZDSWk4K0NqeHlaV04wSUhkcFpIUm9QU0kxTkNJZ2FHVnBaMmgwUFNJek1DSWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NU0F3SURBZ0xURWdNVE15TkNBek1Da2lJR1pwYkd3OUluZG9hWFJsSWk4K0NqeHdZWFJvSUdROUlrMHhNek0wTGpNeElESXdMamc0TmpSV01UWXVNalUzT1VneE16TTVMamN4VmpJMVNERXpNalJXTmk0MVNERXpORFV1TlZZeE1DNDFPVGs0U0RFek1qa3VORll5TUM0NE9EWTBTREV6TXpRdU16RmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtDanh3WVhSb0lHUTlJazB4TXpReUlERXlMakF3TkZZek1FZ3hNemM0VmpJMUxqZzROek5JTVRNMk9TNDFWakl4TGpjM05EWklNVE0yTUM0MVZqRTNMakUwTnpKSU1UTTFNUzQxVmpFeUxqQXdORWd4TXpReVdpSWdabWxzYkQwaUkwRXpNVGsxUWlJdlBnbzhjR0YwYUNCa1BTSk5NVE0xTVNBd1ZqWXVOREkzTnpaSU1UTTJNQzR4T1ZZeE1TNDFOalEzU0RFek5qa3VNemhXTVRoSU1UTTNPRll3U0RFek5URmFJaUJtYVd4c1BTSWpRVE14T1RWQ0lpOCtDanh5WldOMElIZHBaSFJvUFNJMU5DSWdhR1ZwWjJoMFBTSXpNQ0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVNBd0lEQWdMVEVnTVRNNE55QXpNQ2tpSUdacGJHdzlJbmRvYVhSbElpOCtDanh3WVhSb0lHUTlJazB4TXprM0xqTXhJREl3TGpnNE5qUldNVFl1TWpVM09VZ3hOREF5TGpjeFZqSTFTREV6T0RkV05pNDFTREUwTURndU5WWXhNQzQxT1RrNFNERXpPVEl1TkZZeU1DNDRPRFkwU0RFek9UY3VNekZhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrQ2p4d1lYUm9JR1E5SWsweE5EQTFJREV5TGpBd05GWXpNRWd4TkRReFZqSTFMamc0TnpOSU1UUXpNaTQxVmpJeExqYzNORFpJTVRReU15NDFWakUzTGpFME56SklNVFF4TkM0MVZqRXlMakF3TkVneE5EQTFXaUlnWm1sc2JEMGlJMEV6TVRrMVFpSXZQZ284Y0dGMGFDQmtQU0pOTVRReE5DQXdWall1TkRJM056WklNVFF5TXk0eE9WWXhNUzQxTmpRM1NERTBNekl1TXpoV01UaElNVFEwTVZZd1NERTBNVFJhSWlCbWFXeHNQU0lqUVRNeE9UVkNJaTgrQ2p3dlp6NEtQR1JsWm5NK0NqeGpiR2x3VUdGMGFDQnBaRDBpWTJ4cGNEQWlQZ284Y21WamRDQjNhV1IwYUQwaU1UUTBNQ0lnYUdWcFoyaDBQU0l6TUNJZ1ptbHNiRDBpZDJocGRHVWlMejRLUEM5amJHbHdVR0YwYUQ0S1BDOWtaV1p6UGdvOEwzTjJaejRLXCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRFlBQUFBMkNBWUFBQUNNUldyZEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJWZlNVUkJWSGdCaFZwNWtCN0ZkWC9kMC9OOTMrNXF0Ym92TG5FSWN4a0JKbmdEaFFNWWM1UUJHNUFEcENnQ2NZSWRZdXlLQ2NabC9nZzR0a081SU5pSkV4dENKU0VWY3hnVHFHQkRzQU1XTnhhQmdDU09HSU9FRGlRa2RLekU3bmZNVExkLzc3MmVtVzhsQkNQMTlodzkzZS8zN243ekdmcUE0NnpMLzMrV1Q4eHBaTUlwbnZ4aHh0UCt4b1JoUTZGSkJTVW1qak1oeEI2Tkg2QzNQa2h2Z2ljWDlGbUNjUll0OGR6ekdJclhCcjFIUTQ5emZzZndtQUxQS1JRWW0rSCt6cVF3YjJMTmxiaCsxR1RkcGRjKzhZa05lNkxkdk4vTk02OThmYmJ0NXRjQXpHVWdhSVl0Q1NmdCtWck9nMDdBd0V3OHQ2RVFnbDFRWUV5dzloRUVnNHZBRWkrRVY5Y3lyMWVtNkQwajF3SXlXSmxYMXZFVVRERGJjSDYzTDVMdlhQUHIwWFVmQ3V6Y1MxZWNCMGI5RUZUUE1Ud3hLUWpydll3V0lGZ29DTWdnMGdqUzl3TXhzZmNDUkNWbG9xUWlLQUdvWUJpRUFDb1pVTjZQNTBZa0tjdnB3WXdPaVpLZm1PMkpUeTYvOHBuajc5a2pzUE11ZXZHcVlNeU5ocUFXVkt1WUZlbUVDcVRwazVSSWdiUjM1ZlV1elphZ3ZZOEEreVFacFdEak9GWkZXK2k2U1NqQkdBRXBxNGJZR2N0L0ZDZVJOODU5N1MrZVBQR20zWUJkc09UL1BvY2hkMkdNcmRRcmdtQmd4cFNxRjZwbkFvYlVaaEpTUW10QXZyS2xTZUFxTzZ2VlUrMnFCbGF1WTRWd1UySUJEUW9HZXNpcmx1TGprYmdIOE5ZdHVmenBUOXhiQWJ2a3JCZjNLcExlU2t3NkxZQkFCbUZsY2w5SmkwcHBDU2U5Y0R4bDdnY2Q0N3hYaVZHODUzVnBCVmVERnJXRHZUaVpvMlFneGZYNDNDckhvNFJLenF0d2JDMExZNnNITEQxZUdUelozTEN0SXk1NStvUk5Ub2JublcvWUxFeExaR0pQa3lSV1hwYzI1WVUvUW1UYVowUE9LQWlWVHRIbkxCUTRQeFAxS2lVVnlaWnpVd0xndjBVRnhzU1ZqWmdWVStCcllORk1BcWtmNEdjK21ObEVuYS9qOWxmTnBTZjlhcDZ6NmNzZ1lrWWlnNzJBU1VvYmt0Zmp2V2hQTEpuV29LVTVDNXUwNkpoNU5EeTdRZWtnUEdGcUtXMGtsS0pQa2dTcTBhL3Zackx1WXc3eEFZV25Ja1ByNWVTNTMrRnBZc000YlY3eExtMS9kVHZacmlWMVZhWlV5RGlCcmVCN2sxQXBiK0RmWW9ybUlXNHd1Sk5EbHMrdzBXYXNjRXpQOVhXVlhFTEsvYUVSb3RIekRxQmp6MWxJdzdNR0pxL1ZmNFRKOXdOOThGRmJVbEQxd3IvMmhqYXRlZmd0ZXUzZlg2V3dVNE5obURTMWpsTzF0YUt1T0oxcDdQZ1pMdkc5VXlpNmFRRVJDbFVSbGhMZll4VWp0YW1QbmpxUHpycnFLQm9ZYWRLSEh1WURMei9nQlJQL0d4cGNNRWlIWEhZb0hYekJ3ZlRDRGMvUitvZldpdXRYY0pWTFVUOWdSQlgxbmsxT2RpRDRDQTI0YWtzTWlNRUlVUGppbE5UakhidGtQenJqSzhmVUdoQVBZVllPeXhqTHFMMmpUYjEybC9JTWFwVmp2b0xWTGNxS1k2S1pqTU5BVnkzeWx3VHEyeHhvVW5Ob2dOejBCbUZSNFg2bGRGRDdZNjhicGNhd296VjMvVllkaHd5d1VVbU5XRjhTWTJvb3d1SE9rZC9mbWx5RXlwN0VHQmkrOGJYTHhpdEhucmJQTHFBQ2RiYjE2TlY3WDZhMVQ2eWxzVFZiWWJQcStkSlNoZGxqbGp6MU1kQXp1QmowUzdDbGVuRnZnTndEMThoK00ybmVxZnZSUG1jdG90YmNvWWlPNk1pclBrYjV0ZzV0ZW5pZDJseW9sYklNRFF6UUc3dlFmUDNFQnlhQWU4REVPQ1F1SHVySVJMRkxIc0M4Vjl5L2hOeGdMYW8zSHZvdFBmM2RwOGgyaWlwYk1ORUdyYWtEdU9TSVJoVkhYYnR5MmtTQ1NtR2E2THBySHhqSERobmE3NHJGZE5CRlIwWDZBL1cyWmZUNGt2dklieStvZEJqRVkwVjY2aVVCYk1LQnd5a25yaVNlTUloZGlmdkdQUWVpUmkvK2FBV0tYMXg1OTR2MC9NM0xxSW5SdGhyUG1VME0ycXdTa1hjYU5rakFxbnN2WXZoUnlRVWY0WVRveHF1c3dnZzlacHhvMVkzTGFHaDRpT2FmdlVnZU5xQ3ErMy91SS9UV3JTdXF5S3FqUTN4UEdOZUVsdWVXUFdFaVdYa2hzYWtCZFd6aXZPVnlPdlJUKzFlU2FtOGVwNVUvZXA1YWdhV0JzVDZuQnQ3ajVqeS95eTNIUExuTUJ6VVhCbWxjOCtKeFJSdENodWNacFRhbkZHWlE5a216b01OditDU2R2UFF5V3Z6RE02a3hLNlVtMVBnMzMzbWNzaTJkaW82OXpqMFk0Y1hFK2IyWUQ2OW52YTREODdFV1JCaGRyRkJpU1Fsa1l1Y2RNcDJHNTAycEpuenpnZGZJdFROSm8xd29tZUgxWFdGT1BBZXcxQmNDMEVuajU3azJlUy9FYlFvSXdUMExrSW5KNktDdm5VaHpUaitRYUtxam1hTjcwU0hYbnlMUFhTZW5kVDlaV1dsTmE4NGdOUStjVXZtQU1oTVM3eDFqc09VYmpsUlNES29CUWxxUUJGL3ZmZmljMmpWQlBkY3ZmVjFTSjVaS2c4R3pkRXRRVVZvdVN0MUZCaGxzcWxxeld0VGFieW9OSERDTm1uTUdvREo1SEp1cnlrdnN6R2w0MGN6SzF2aVlmdGhjcUxIT3ZlMVhxNnB0RXYrWmUremVDc1pIWUZUdUpvUmh4aW5YTlprVmNDR3FFTzVOblY5TGl6SkRPMWR0amtScm5OT01YaDJFWGl0UFJTTHdaclBQUG9JV25IWWt0ZVlQazIwNjVRK3lDNTdudldXcjZlMjducWZ3enJoc2d4TE11ZVBaMVRSODVIdzFOZndaKzk5MVFnZGJVbWZOWnRDQUJ3MGx4MEZxVmhLcE1xOVZxOVk0Qnd3S1FuVzFJUUM5Y0pJZGdodE9LbHpzWmwydnAwNGphSGJpcWdRMkFtTlRiam1hLzhVVGFlR0ZIeWRKSUhjTjFFMUxVdytaUzhOb0N5NDZqdGI4K05mMDdtMVBFVTNrdFA2Zkg4TTJLOURJc1F1cC9kb21Xbi9MMDVnaUYrK1pkTEhpOWk2Wk9ab2NtQ0VqTmh2VlNRQVZNYmd6UUZlREtpcUEyZ2ZKL2Nxak85Nm1Sa0ZxcEZIMHR1S1dBa3RuRE5MQzY4NmkyU2NzK3RCVVF4N0RIKzk3NlNqTlB2b0FldjJyZDFDeWRZSzIvT0J4ZW9jZWw3b0R1M3hyZEVzU3ZLWHV6Z25ZbHdLekNPcVMyNW82ZEpnWWFnaTVveE9QRnRSdVhJeEZpVnd6c0ZwaXZYWkg3U0dFbUNBck9NMVdNR0V6b2NOdnVvZ0dGOCtycWNjaTNRMWp0UFh4MTZpOWFwTVFPWFFna3ViUi9hbTE5NHdLL01EaU9iVDNOejlONjYrK0Q0RStBNU01QWtScHg2MFFjekRyZEtnVnAwNmdHVWFjajdKSjNYNGRPa1FWeFF2RzdZWUxHcy9FR1BzazVyTmM3YTlVdjJoakVwQnhQdmZ5azBCZ0g2aWVwM1hmL3lWdHV2TkplRWhiN2JzUW1tZ0Q1aDM1ekRHMDE1V25rWnVtcE02QWxEdFE0UzAzLzFLems3aVZrZGdrcFFiWVV6ZXJwbWZhakdoUFRKL0JOQi9UTFBHMmpSaC9yRWpNUnkrbHJqbEphbUFoVjArWmtIcS9WTXBVdWJwM09JcDlMejYrMHI1OHJFMnYvdG10dFAyT0o2aFZlSmxiZHcyNi9YR1lhK0xlWmZUR2wvOE5JcTN6L2dVWGpWS0M4R0pqMGkxYXdiRko4bGU0aWFLb1ZkbFpuYy9VV3kwZW8vYzREdzZST0pHYzJsY2lmVUVtNlRNS0hwTjB5ZGtlZWpUYmhZa2dwdG1NNWw4NENudXBtZkQyM3o5RS9xWFZFaG8wcnNUQVRNcEFyWDJBZ09WcmFlUDNIcXIzTkxDNWtYTVc5d0VyRkZ5TXMrUnJKbkFHdzZIQUJJMmZKbVpCRlVOY3FLVWsyWURwVVFPRU4xeFgxS3c4ZUxGRzJxVkdBN2JXYUtOcGIxb2RHdnA0bloxMDFtMmw4WitwTjdNQXpnbTJaQnltRE43S05QR3NBTGoxenNlbzkvYjI2djFacHk5RzNoQjBmQXk0Z2UxR1doOHdsb3JOWXJxbXpET2gzSzNoUFVscERLYzNjT1d1STRRMzB3bUFBTkZTOHlvNTVBVklpdFpvTU1DZTlFUHpHalRsZ05xMk9zKzlRZzA3UWE2SmhqbVNwSVBXazh6Q3lzNUJRWmFiMmlhV0dGdTZzbnEvTVg4YVVxbWh5dk5LY201VUVrU2UrZzlKdkpHT0dWYkJhTyt4K2dGYVJiMHl6ZG5RbU5QTzhsNHMxdzFjQlF3QlBPMUZsVEl5R1IvSk5IaW5QdS9aV2J0R3hySFdHQnVMTDRXVnhpNmJDbmJObUtIVWN4aDh0bnBUdlE0SDhvRzAydHJFcEo1TVZZcXJYb3RqQ3FtWmxHVWdwb3FMcTY2UmRxb2tsQUU2QWFpcEVQVkpqTG5NMGl4alZsbndJYWpzSkM1Q2xSMGtLZTZhQXpUQWhNUkVVRkt3aGdxaXo2MEFsT0N4U3drQjVSSThZMGRoNHg2aTNESFhoNDI3ZnZHYUpqb1ZxU3l6cjRURW1pQXNGVUNGOUN4YVVaY2tWRkpSaWptdVpjb2hUVjVrT2RNYm85QkZSdEJTdDkxY09KL2FVRlBaWElyMkpMV2tMSU5rY0pDWVRjVExoU0tsd1FQbjFzdGtJQkk3Y1lyTUM1VXNkbzM0R21aSW1LTmplWmdFYXVJQTNlaUt3M0NXOTErWmxBUDQzTElCMjhtcW1EREJNU2ZVWlhJcUpyWlEvaTV5eUwzM2tUdFRqanVheG0rRGFzZkNKOEZkaXlwQ2FwNTdCb3I1QTRCeEdTdUhKeHc0L2lQVk91TnZicVJpODFaUjl4aWdkSDNhcGJUUUIwNDNxajV1NTZ6YWJ3b0RaNXZnNWhxUUhEeWZjOXc2MUcrc1JpVFdSV0RrQmx0RGIxTmsrYlpEN3ozN2VEWE96WjFEVXo1N0pwSmVNTW54T1BTWWw4ZktPZDVOMEJ0dXVOODY5emhxN2pPcmVyLzM3RytvV1dnVjJjUWt3SlJlc1I5WUNKVkRrYTh6b2R6Y0ZxcFZEU3pJS3BZS0lBYUk2NGJlTTMzQW1NRk1rTFNHZ2t1RTZDNWxUejhJNGRWWndjakZmMHpoMEFNeExxK1lZRERPTmlKUTF4TUdoU1AzcFJsWExLbUp6UUx0dU9zUnFUaEo3YVVrVks0bmU4VGdQZFhWNmFpV3BPYkR6VXJRalVTeXhFUnlXRmpzQ2Z1eVNtTFk0SmhVQ1JPQzBWZ1NTUXFuTXJhQnhoNzl6N29pbFRab3hqWGZKSHZhR2FpbVFJV3hFN2VPeCtZeVI5SE1xWG4rR2JUZzVyOG1OM1ZLcFZaYjducVkwczJib1BhWlNxSlV0UmlmYkovM1pmc3N2eU9VbXFXV284QWNBMG1zMS9Rb0tUU2cya0pxR01IWEhvOUxaSWxUVGxZdXVDcFdZcm9IYnFQT2duMXA0SWpmMS9GVGhtbms4MSttN0p3bGxMMzBBdlhXdjhYSkMrTFV2alR5c1ZIc3AyWlR2OUZrTDc5QnZkdnY0UnhQeW5rK0MxSDdyS2djdzB4UzF5ZmRRdk5IaVhHUXJTMTBONEJXc05rd054MTdRc3Q5MFBnbHpnUEdtTmQxQnRmQ2RpR05PWi94RlNDdFV6TzNlcFQvK050VWZPRmJsT3kzV0lsR1MrZnNSZW1uRnREZ252WXhlSC84K1JkcDRvWi9SQTQ1UVFYU2NrNkFKYmxGVGhtOEk5MDZvblRlcWd1MXZwdFRWVDBXR3NxNnZrb1J3TElJSkJjd2VxN1pnZW1UbUIxQWNUNzFjWE1YM1d1ZnhHVHk5anZVL3NGWGlNNzRQQTJkY2lGVXFrRWZlSUR3c1ovOUYyWC9jU2NsNDRnK0FKV1V0Y0dVcXZvK0JTUjk3SzJIQjJwZ1dVNVVCZkVJenBhZnVqRFdPVmJCcUg0c1RvbGpjYnZmMjBGVlRXektWS0pCaDNzZHVWZUZ6VkJuQnlRMWlKMUVQLzhlN1h6cUo5UTQ4US9KSEh3Y05lWXRSRUtkeWp3aDc4S2R2ME1Uenl5bGJPa3Z5RzNjUW81am5ITmtxUDVjSlJKcjZMeGliVEFGTTMyNFp2UllWK0tYNVBoU2hrY3ZVdE9rQ2hMcnFhU2lmUm1ydFQrNXQ3UHYyN1Z0UWEzbWs5MzRxdktJdlZRRktrUmd1bmRpbGpkM3JDVjY0R2JpQXAwZm1rbkZ3QlNBd3JPSk5vV3RZMkFROGtRRWFpK0FPTjNWVFdNb3YxSUdsWnhKamRoTmN5R0NlS05XNStMdExWRm5sQkcra3AxNlJtZGNFVUZwcmQ3RTRNeDlkOVVMTktCN2Jua3BPZklQeUd4NU9kcDhYNWs2QW1QZER1VzNZdTRML3A2R1pIcjhiVXAyd3NCekk2a1c1NGxGeW9GYUU5ZnlJNUVXY1RSSDlVSHRqS3U4QVczb3RLUDZLbVlJNU10WDYzcmlCWlUrOXNvbVRtVFpFN0lxT25ISmhiYVVHNGphOWpyNW5Sc3JMaldQWFVKK2NBQmM5TUpKa3dZWng4M3dmaDZxWTFHc01ieTc1ZWR5ajM5Q0FFZUVkZVE5eDllNlpwS3dwdUFlOTdLMm1nVS9OenllUzJDNExxWWtOUFdjMFFwVXRtRTc1UysvSlo5c0sxdVBvU0hLRG9rTktwdThtSWxnMk4weXdUeHBFc2FwOTlMOXRUWU96U2IzNldzUmg1QjlOMEY0QzhyRGJRQWFQZ0NWYWtFS1RiNDJjcC9ySU53SVkyMHp5QnF5Rm9OakFDQStPQVlWVFFFQWcyZ1F4enNHbUVGVlVlZjg0bWNwblR1Tm9yYlJqZ2RmUU83dHF4MkF4TTlnWWs0cHF1T2hpbmtYRXpwWlVHcjdHSkN3MjdjUzhZdVZQNlh3ZXhlQjZPbnlUbnI0T1ZUa2JjcVgvUlBjODdnWWFyMmxpQjhjQ2k4eFMzNUJ3YjhBeUZRdHFhYzdYNDVUeXUzU3JvajA1dzJrZGNINGM0b2NTY0hVcTYrZ29WTlByRzE5dkVjNy92VVhFc09DMldNSXlaeHRtUGNRaklmNEc1SkpqSlFEckRYU09JOUsvQTdxUG5rVHRUNTVIYWNmUW54cjhRWGtGNTFNK2VzL3A3RDZDZFQ3MWt0b01ENXV6M2t6VnVodk4vaFRyRlJWQzlVQ3duY3poRHc0ajhoditXQ25yb045aTA5YlpHZnZROGt4SjlETTA4K21aUHBJVFMrbTJuVEQzYkRYdGxSbm9zZXFuSmwrK3BDZHdFNnovVnVqenlRdWpGb0JGUjFIb2xMamZSU01FQWs1Vk96dzgyRmpYMkkzVlVXQVN1bUxDUlJsc0wzUE92aVduSUVBdElLRGE2ZzlKa1hIVXQyTFd4RncwcUlJNk5JbTFCbnVmSGdhZjh5bTNiWXBlRy9MOSsraXpoMUx3UmdVRGZFaHpjZTluRlJCVFYwTUxJeGQ1cXl6cjZEd01jcEFKQitVM21wamJVejRxeVBPMzN3QUdvVk42ZEZmNGhKeDM0b2NSUEFSYlZBLzBOaysxS1duZTcvRFVKakVuNXIzdXgvRjJFN2E5ZyszVSsvaDUwQlBBd3l2NngrQnpQdThaRlk0TytnZXhhdC9VZ0lUQ2FlOCswMWthOC9TSXdhRzgyVGpFOVI3WkRuWlJlZFRzdUFFMk4xYzJ2WGJyZGxsbFQwWGhDZVAzSDJyQlJ2YnVvWGEvL01JVGR6L01KbDNKNkJORGRuTDhkNlFjMWFWT3R1bWovT1ZOVWJ6cU5seHkwbXpVSFo3RGVZelV6TjRWa05XRHl1QVpKOHUzMlcwR0dsVWpGRFBGdm1SQThtT0hJUU1mclpLalZNb05HT2NPaFV1VDRzb29qeXFJbEpRTmZWZTg4RU0zZys3OElCdkEyYjhQYUxObTZtOVlnV1pWUWp5TzFBL3lhQjJ2VlQ3cktubnJJNUZWRWZTbjBURU1zNjJ2RW1IQ2FNNi8zTHEzOEhGLzZVQ2kyb29nSFNYSzRWMG0yZ2d0R29YTll0TmxZRklnUFR4ZzdxUE5pWGJmeTlPUXh3SDk3MTQzZ1hYNGJZSmZlaGdQSXFuQmFvQ29RMUNPMmhkVkRzek1DbExCVXdCVUh4ZTlKcG91QWNFUGppTllrYUxkWVZKZm5UWVM5Zi91ZXdEbW03NGhxelJ2UmkxdU5rR0tZNUtLa3JMNmZkZHVlNlhXZ1JWNWRTbHpudVZVUENGZWtXVUFpeURnUXA1eVd5NEFNUFhlWXc3UlF5dm1xSGJzb1RJQ1NCN1VnNGQvRTRTeitQUDVJd0p1eWt5b3NRWVF2QzMrVnlBbVV2dTI5Uzk5ek5YaE5UZFkxQlpZc2tGY1NRUm5GRUpjdHdROWRLZmtaSCtJcTYyRGhNbHhTcG1RcXFxVnVqUDIwTGNOUVQ1dVZzZUExcnBvalgrZVhtZkE2RG1teGIrdjlDZHZnS3hXbnNoQVVvU0wvbFozR3R3OVB2Q291WFhyOXZOWm9zSC8raXZrR2grRjNWQ1E2VXFSc2NST0laVkV1dDd6WmhvUHRHR2ZQUlkzTXZ2RUwzODVrUEFjZ1VxNTkrQUFCZytBQm9rd2g0dGlDcHlENEtoaXI2RGR4QkJ3Z1FraVQ1dlF5VjdUdXhLN2F1SlNnU2Z0NUFzOEM5Um9JN1dYWDN3aTM5ejQyUVo5aDM1WTM5NmdYWG1sdURNaU5pWlZVQlNMcE52VmJzQ3M1VVhreU1DNDVxRTVlMElseGVrVWxXb2ZVVlEzQWNHMWNOMVIyM05DekJJRHRjY0dta2NFcHRndTRQOXRMRjJsMjFMd1RHd29qY0FZSTNORU44Vmk1Yi83VTlwTitYYzVRalBYcmszYk90YXFPTUYwSi9wN0VBNEkrZTZvSnozajdXbUNsYmxEemZscTRnRVluVWNMRFZRQUREUmtRQU1TODlMbjBjbkFqQ1FGTFdSaGJBakFUQS93UUJoeHdJUUhxK3QzcEJCaGF5NTFYZUhiczk3d3pjY3RQeTZUYnRpMkhPWVlZYTk4bzM1elpDZllreDZpazNjRWZDTSswT1JoeUU5cC9sSnFZcDFRVVc5b2VSU1VSVlZXdXdJZ29BREVBQTB2UWlVK3phZUkyTmhGUXdkcndBbjBJK3o5UEQyVHR2THg4MTdmc0t1OHQzV0szbmVldFFXOXIvM1ducnJ1M3VpL1hlOEMvMXBwTS91SEFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTWpjd0lpQm9aV2xuYUhROUlqTTJNQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTNNQ0F6TmpBaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHUTlJazB4TXpVZ01qRTJMamN4TlVNeE9ETXVOekEwSURJeE5pNDNNVFVnTWpJekxqRTROaUF4TnpndU16YzBJREl5TXk0eE9EWWdNVE14TGpBM09VTXlNak11TVRnMklEZ3pMamM0TXpRZ01UZ3pMamN3TkNBME5TNDBOREk1SURFek5TQTBOUzQwTkRJNVF6ZzJMakk1TlRjZ05EVXVORFF5T1NBME5pNDRNVE15SURnekxqYzRNelFnTkRZdU9ERXpNaUF4TXpFdU1EYzVRelEyTGpneE16SWdNVGM0TGpNM05DQTROaTR5T1RVM0lESXhOaTQzTVRVZ01UTTFJREl4Tmk0M01UVmFJaUJtYVd4c1BTSjNhR2wwWlNJdlBnbzhjR0YwYUNCa1BTSk5NVE0wTGprNU55QXlNVEV1TURNeFF6RTRNQzQwTmpnZ01qRXhMakF6TVNBeU1UY3VNek14SURFM05TNHlNelVnTWpFM0xqTXpNU0F4TXpFdU1EYzVRekl4Tnk0ek16RWdPRFl1T1RJeU1pQXhPREF1TkRZNElEVXhMakV5TmpJZ01UTTBMams1TnlBMU1TNHhNall5UXpnNUxqVXlOU0ExTVM0eE1qWXlJRFV5TGpZMk1qZ2dPRFl1T1RJeU1pQTFNaTQyTmpJNElERXpNUzR3TnpsRE5USXVOall5T0NBeE56VXVNak0xSURnNUxqVXlOU0F5TVRFdU1ETXhJREV6TkM0NU9UY2dNakV4TGpBek1Wb2lJSE4wY205clpUMGlJMEV6TVRrMVFpSWdjM1J5YjJ0bExYZHBaSFJvUFNJeUxqQTNOeUlnYzNSeWIydGxMVzFwZEdWeWJHbHRhWFE5SWpFd0lpOCtDanh3WVhSb0lHUTlJazB4TXpRdU9Ua3lJREF1TURBek1qWTFNemhETVRBNExqSTVOaUF3TGpBd016STJOVFEySURneUxqRTVPRFlnTnk0Mk9UQTJOU0EyTUM0d01ERWdNakl1TURrek0wTXpOeTQ0TURNMUlETTJMalE1TmlBeU1DNDFNREkwSURVMkxqazJOekVnTVRBdU1qZzFOU0E0TUM0NU1UZ3hRekF1TURZNE5qa3dNeUF4TURRdU9EWTVJQzB5TGpZd05UQXlJREV6TVM0eU1qUWdNaTQyTURJME9TQXhOVFl1TmpVeFF6Y3VPREE1T1RrZ01UZ3lMakEzTnlBeU1DNDJOalE0SURJd05TNDBNek1nTXprdU5UUXhOU0F5TWpNdU56WTFRelU0TGpReE9ERWdNalF5TGpBNU55QTRNaTQwTmpnNElESTFOQzQxT0RJZ01UQTRMalkxTWlBeU5Ua3VOalF4UXpFek5DNDRNellnTWpZMExqY2dNVFl4TGprM05pQXlOakl1TVRBMUlERTROaTQyTkRFZ01qVXlMakU0TmtNeU1URXVNekEySURJME1pNHlOallnTWpNeUxqTTRPQ0F5TWpVdU5EWTNJREkwTnk0eU1qSWdNakF6TGpreE0wTXlOakl1TURVMUlERTRNaTR6TlRnZ01qWTVMamszTXlBeE5UY3VNREUzSURJMk9TNDVOelVnTVRNeExqQTVNa015TmprdU9UYzNJREV4TXk0NE56Z2dNalkyTGpRNE5pQTVOaTQ0TXpFM0lESTFPUzQzTURNZ09EQXVPVEkzTTBNeU5USXVPVElnTmpVdU1ESXlPU0F5TkRJdU9UYzRJRFV3TGpVM01UY2dNak13TGpRME15QXpPQzR6T1RnNVF6SXhOeTQ1TURrZ01qWXVNakkySURJd015NHdNamdnTVRZdU5UY2dNVGcyTGpZMUlEa3VPVGd5UXpFM01DNHlOek1nTXk0ek9UUXdOU0F4TlRJdU56RTVJREF1TURBek1qWTFNek1nTVRNMExqazVNaUF3TGpBd016STJOVE00VmpBdU1EQXpNalkxTXpoYVRURXpOQzQ1T1RJZ01qRTNMakExTVVNeE1UY3VORGcwSURJeE55NHdOU0F4TURBdU16WTVJREl4TWk0d01EY2dPRFV1T0RFeE55QXlNREl1TlRaRE56RXVNalUwTlNBeE9UTXVNVEV6SURVNUxqa3dPU0F4TnprdU5qZzNJRFV6TGpJd09UY2dNVFl6TGprM09VTTBOaTQxTVRBMElERTBPQzR5TnlBME5DNDNOVGd6SURFek1DNDVPRFlnTkRndU1UYzBPQ0F4TVRRdU16RkROVEV1TlRreE5DQTVOeTQyTXpRNUlEWXdMakF5TXpNZ09ESXVNekUzT1NBM01pNDBNRFF5SURjd0xqSTVOa000TkM0M09EVXhJRFU0TGpJM05ERWdNVEF3TGpVMU9TQTFNQzR3T0RjeklERXhOeTQzTXpFZ05EWXVOemN3T0VNeE16UXVPVEF6SURRekxqUTFORFFnTVRVeUxqY3dNeUEwTlM0eE5UY3lJREUyT0M0NE56Z2dOVEV1TmpZek9VTXhPRFV1TURVMElEVTRMakUzTURjZ01UazRMamc0SURZNUxqRTRPVEVnTWpBNExqWXdOeUE0TXk0ek1qWkRNakU0TGpNek5DQTVOeTQwTmpJNUlESXlNeTQxTWpZZ01URTBMakE0TXlBeU1qTXVOVEkySURFek1TNHdPRFZETWpJekxqVXlOaUF4TkRJdU16YzJJREl5TVM0eU16Y2dNVFV6TGpVMU5pQXlNVFl1TnpnNElERTJNeTQ1T0RkRE1qRXlMak16T1NBeE56UXVOREU0SURJd05TNDRNVGdnTVRnekxqZzVOaUF4T1RjdU5UazNJREU1TVM0NE56bERNVGc1TGpNM05pQXhPVGt1T0RZeklERTNPUzQyTVRVZ01qQTJMakU1TlNBeE5qZ3VPRGMwSURJeE1DNDFNVFZETVRVNExqRXpNaUF5TVRRdU9ETTJJREUwTmk0Mk1Ua2dNakUzTGpBMU9TQXhNelF1T1RreUlESXhOeTR3TlRoV01qRTNMakExTVZvaUlHWnBiR3c5SWlOQk16RTVOVUlpTHo0S1BIQmhkR2dnWkQwaVRURXpOQzQyTmlBeU1TNDVOVE14VERFek1TNDBOVEVnTXpJdU1UUTJORXd4TWpndU1qUXhJRFF5TGpNek9UWklNVFF4TGpBM05rd3hNemN1T0RjZ016SXVNVFEyTkV3eE16UXVOallnTWpFdU9UVXpNVm9pSUdacGJHdzlJaU13TUVFeE9VRWlMejRLUEhCaGRHZ2daRDBpVFRFME9DNDVOemNnTXpVdU5USTVOME14TkRjdU9EUTRJRE0xTGpVek1ERWdNVFEyTGpjMU1TQXpOUzQ0T1RBNElERTBOUzQ0TlRRZ016WXVOVFUyTTB3eE16UXVOallnTUV3eE1qTXVORFlnTXpZdU5UVTJNME14TWpJdU5UWWdNelV1T0Rrek1pQXhNakV1TkRZeUlETTFMalV6TWpnZ01USXdMak16TWlBek5TNDFNamszUXpFeE9DNDRPVGdnTXpVdU5USTVOeUF4TVRjdU5USXlJRE0yTGpBNE16RWdNVEUyTGpVd055QXpOeTR3TmpnelF6RXhOUzQwT1RNZ016Z3VNRFV6TlNBeE1UUXVPVEl6SURNNUxqTTRPVGNnTVRFMExqa3lNeUEwTUM0M09ETkRNVEUwTGpreU15QTBNaTR4TnpZeUlERXhOUzQwT1RNZ05ETXVOVEV5TkNBeE1UWXVOVEEzSURRMExqUTVOelpETVRFM0xqVXlNaUEwTlM0ME9ESTRJREV4T0M0NE9UZ2dORFl1TURNMk1pQXhNakF1TXpNeUlEUTJMakF6TmpKRE1USXhMalF4TVNBME5pNHdNekE1SURFeU1pNDBOakVnTkRVdU56QTFJREV5TXk0ek5ETWdORFV1TVRBeU5rTXhNalF1TWpJMUlEUTBMalV3TURFZ01USTBMamc1TmlBME15NDJORGs1SURFeU5TNHlOalVnTkRJdU5qWTJNMGd4TWpVdU16QTJUREV6TkM0Mk5qTWdNVEl1T1RNNU9Vd3hORFF1TURBM0lEUXlMalkyTmpOSU1UUTBMakF6TVVNeE5EUXVNemszSURRekxqVXlPVGdnTVRRMExqazVOeUEwTkM0eU9EQTNJREUwTlM0M05qZ2dORFF1T0RNNE9VTXhORFl1TlRNNUlEUTFMak01TnpJZ01UUTNMalExTVNBME5TNDNOREU1SURFME9DNDBNRGdnTkRVdU9ETTJORU14TkRrdU16WTBJRFExTGprek1EZ2dNVFV3TGpNeU9TQTBOUzQzTnpFMElERTFNUzR5SURRMUxqTTNOVEpETVRVeUxqQTNNU0EwTkM0NU56ZzVJREUxTWk0NE1UUWdORFF1TXpZd055QXhOVE11TXpVeUlEUXpMalU0TmpORE1UVXpMamc0T1NBME1pNDRNVElnTVRVMExqSWdOREV1T1RFd05pQXhOVFF1TWpVeElEUXdMamszT0RKRE1UVTBMak13TWlBME1DNHdORFU0SURFMU5DNHdPVElnTXprdU1URTNNeUF4TlRNdU5qUXpJRE00TGpJNU1UaERNVFV6TGpFNU5DQXpOeTQwTmpZeklERTFNaTQxTWpJZ016WXVOemMwTmlBeE5URXVOeUF6Tmk0eU9UQTFRekUxTUM0NE56Z2dNelV1T0RBMk5TQXhORGt1T1RNMUlETTFMalUwT0RFZ01UUTRMamszTkNBek5TNDFORE5NTVRRNExqazNOeUF6TlM0MU1qazNXaUlnWm1sc2JEMGlJekF3UVRFNVFTSXZQZ284Y0dGMGFDQmtQU0pOTlRVdU1qa3hPQ0ExTkM0eE5UWXlURFl3TGpRME1EWWdOak11TlRZMk1VdzJOUzQxT0RrMUlEY3lMamszTmt3M05DNDJOalV6SURZMExqRTJNamhNTmpRdU9UYzFNU0ExT1M0eE5qSTRURFUxTGpJNE5Ea2dOVFF1TVRZeU9VdzFOUzR5T1RFNElEVTBMakUxTmpKYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0NqeHdZWFJvSUdROUlrMDNOUzR5T1RjeklEVXpMamt5TWpoRE56UXVOVEF5TWlBMU5DNDNNREF4SURjekxqazRPRGtnTlRVdU56QTNOQ0EzTXk0NE16VWdOVFl1TnpreU4wd3pPUzR6TURNeUlETTRMall4TWpsTU5UZ3VNREF6T1NBM01pNHhOVEkyUXpVMkxqZzRNRElnTnpJdU16QTJNaUExTlM0NE16ZzVJRGN5TGpneE1UZ2dOVFV1TURNNE1pQTNNeTQxT1RJMlF6VTBMak15TWpjZ056UXVNalU0TkNBMU15NDRNRGswSURjMUxqRXdNak1nTlRNdU5UVTBNaUEzTmk0d016SXlRelV6TGpJNU9Ea2dOell1T1RZeUlEVXpMak14TVRZZ056Y3VPVFF5TVNBMU15NDFPVEE0SURjNExqZzJOVFJETlRNdU9EY2dOemt1TnpnNE55QTFOQzQwTURVeElEZ3dMall4T1RnZ05UVXVNVE0zTlNBNE1TNHlOamhETlRVdU9EY2dPREV1T1RFMk1pQTFOaTQzTnpFM0lEZ3lMak0xTmpZZ05UY3VOelEwTXlBNE1pNDFOREV4UXpVNExqY3hOamtnT0RJdU56STFOaUExT1M0M01qTWdPREl1TmpRM01TQTJNQzQyTlRJNElEZ3lMak14TkRKRE5qRXVOVGd5TlNBNE1TNDVPREV6SURZeUxqUXdNRE1nT0RFdU5EQTJPQ0EyTXk0d01UWTRJRGd3TGpZMU16UkROak11TmpNek15QTNPUzQ1SURZMExqQXlORGtnTnpndU9UazJOaUEyTkM0eE5EZzNJRGM0TGpBME1UaEROalF1TWpjeU5pQTNOeTR3T0RjZ05qUXVNVEkwSURjMkxqRXhOellnTmpNdU56RTVNaUEzTlM0eU16a3lURFl6TGpjek9UZ2dOelV1TWpFMU9VdzBPQzQzTVRFNUlEUTNMamMyT1RWTU56WXVPVGMxT0NBMk1pNHpOamswVmpZeUxqTTBPVFJETnpjdU9UVTFOU0EyTWk0M09UTXhJRGM1TGpBMU1UVWdOakl1T1RNMU1TQTRNQzR4TVRZM0lEWXlMamMxTmpSRE9ERXVNVGd4T1NBMk1pNDFOemMySURneUxqRTJOVE1nTmpJdU1EZzJOaUE0TWk0NU16UTRJRFl4TGpNME9UUkRPRE11TkRVNU1pQTJNQzQ0TmpZMklEZ3pMamczT0RnZ05qQXVNamcyT0NBNE5DNHhOamczSURVNUxqWTBORU00TkM0ME5UZzJJRFU1TGpBd01USWdPRFF1TmpFeklEVTRMak13T0RZZ09EUXVOakl5TnlBMU55NDJNRFk1UXpnMExqWXpNak1nTlRZdU9UQTFNeUE0TkM0ME9UY3lJRFUyTGpJd09EZ2dPRFF1TWpJMU1TQTFOUzQxTlRnM1F6Z3pMamsxTXlBMU5DNDVNRGcySURnekxqVTBPVFlnTlRRdU16RTRNU0E0TXk0d016ZzNJRFV6TGpneU1UbERPREl1TlRJM055QTFNeTR6TWpVM0lEZ3hMamt4T1RVZ05USXVPVE16T1NBNE1TNHlOVEF4SURVeUxqWTJPVGhET0RBdU5UZ3dOaUExTWk0ME1EVTJJRGM1TGpnMk16UWdOVEl1TWpjME15QTNPUzR4TkRBNUlEVXlMakk0TXpkRE56Z3VOREU0TXlBMU1pNHlPVE14SURjM0xqY3dOU0ExTWk0ME5ETWdOemN1TURRek1TQTFNaTQzTWpRMVF6YzJMak00TVRJZ05UTXVNREEySURjMUxqYzROREVnTlRNdU5ERXpOU0EzTlM0eU9EY2dOVE11T1RJeU9FZzNOUzR5T1RjeldpSWdabWxzYkQwaUl6QXdRVEU1UVNJdlBnbzhjR0YwYUNCa1BTSk5Nakl1TmpBMk55QXhNekV1TkRJeVRETXpMakV3TXpVZ01UTTBMalV6TlV3ME15NDJNREEwSURFek55NDJOVEpXTVRJMUxqRTRPVXd6TXk0eE1ETTFJREV5T0M0ek1EVk1Nakl1TmpBMk55QXhNekV1TkRJeVdpSWdabWxzYkQwaUl6QXdRVEU1UVNJdlBnbzhjR0YwYUNCa1BTSk5Nell1TlRnME5TQXhNVGN1TlRFeVF6TTJMalU0TkRjZ01URTRMall3T1NBek5pNDVOVE0xSURFeE9TNDJOelVnTXpjdU5qTTBPQ0F4TWpBdU5UUTVUREFnTVRNeExqUXhPVXd6Tnk0Mk5USWdNVFF5TGpJNU5VTXpOaTQ1TmpRNUlERTBNeTR4TnlBek5pNDFPVEl6SURFME5DNHlNemtnTXpZdU5Ua3hNeUF4TkRVdU16TTVRek0yTGpVNU1UTWdNVFEyTGpjek1pQXpOeTR4TmpFeklERTBPQzR3TmpnZ016Z3VNVGMxT0NBeE5Ea3VNRFV6UXpNNUxqRTVNRE1nTVRVd0xqQXpPU0EwTUM0MU5qWXpJREUxTUM0MU9USWdOREl1TURBeE1TQXhOVEF1TlRreVF6UXpMalF6TlRnZ01UVXdMalU1TWlBME5DNDRNVEU0SURFMU1DNHdNemtnTkRVdU9ESTJNeUF4TkRrdU1EVXpRelEyTGpnME1Ea2dNVFE0TGpBMk9DQTBOeTQwTVRBNElERTBOaTQzTXpJZ05EY3VOREV3T0NBeE5EVXVNek01UXpRM0xqUXdOek1nTVRRMExqSTRPQ0EwTnk0d056STBJREUwTXk0eU5qUWdORFl1TkRVeE15QXhOREl1TkRBMFF6UTFMamd6TURNZ01UUXhMalUwTkNBME5DNDVOVEk0SURFME1DNDRPU0EwTXk0NU16Y2dNVFF3TGpVeU9WWXhOREF1TkRrMVRERXpMak14TVRZZ01UTXhMalF4T1V3ME15NDVNemNnTVRJeUxqTXpObFl4TWpJdU16QTJRelEwTGprMU16RWdNVEl4TGprME9TQTBOUzQ0TXpJZ01USXhMakk1T0NBME5pNDBOVFVnTVRJd0xqUTBNVU0wTnk0d056Z2dNVEU1TGpVNE5DQTBOeTQwTVRVeUlERXhPQzQxTmpFZ05EY3VOREl4TVNBeE1UY3VOVEV5UXpRM0xqUXlNVEVnTVRFMkxqZ3lNaUEwTnk0eU9ERXlJREV4Tmk0eE16a2dORGN1TURBNU15QXhNVFV1TlRBeVF6UTJMamN6TnpVZ01URTBMamcyTlNBME5pNHpNemtnTVRFMExqSTROU0EwTlM0NE16WTJJREV4TXk0M09UaERORFV1TXpNME15QXhNVE11TXpFZ05EUXVOek0zT1NBeE1USXVPVEl6SURRMExqQTRNVFlnTVRFeUxqWTFPVU0wTXk0ME1qVXlJREV4TWk0ek9UVWdOREl1TnpJeE9DQXhNVEl1TWpVNUlEUXlMakF4TVRRZ01URXlMakkxT1VNME1TNHpNREE1SURFeE1pNHlOVGtnTkRBdU5UazNOU0F4TVRJdU16azFJRE01TGprME1URWdNVEV5TGpZMU9VTXpPUzR5T0RRNElERXhNaTQ1TWpNZ016Z3VOamc0TkNBeE1UTXVNekVnTXpndU1UZzJNU0F4TVRNdU56azRRek0zTGpZNE16Z2dNVEUwTGpJNE5TQXpOeTR5T0RVeklERXhOQzQ0TmpVZ016Y3VNREV6TkNBeE1UVXVOVEF5UXpNMkxqYzBNVFVnTVRFMkxqRXpPU0F6Tmk0Mk1ERTJJREV4Tmk0NE1qSWdNell1TmpBeE5pQXhNVGN1TlRFeVNETTJMalU0TkRWYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0NqeHdZWFJvSUdROUlrMDFOUzQzTmprZ01qQTRMalE0TlV3Mk5TNDBORGc1SURJd015NDBPRFZNTnpVdU1UTTVNU0F4T1RndU5EZzFURFkyTGpBMk16UWdNVGc1TGpZM01VdzJNQzQ1TVRRMUlERTVPUzR3T0RoTU5UVXVOelk1SURJd09DNDBPRFZhSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrQ2p4d1lYUm9JR1E5SWswMU5TNDFNamtnTVRnNUxqQTFOVU0xTmk0ek1qWXlJREU0T1M0NE16SWdOVGN1TXpZME55QXhPVEF1TXpNMElEVTRMalE0TkRRZ01Ua3dMalE0TWt3ek9TNDNPREF6SURJeU5DNHdNalZNTnpRdU16RTRPU0F5TURVdU9EVTRRemMwTGpRM01qUWdNakEyTGprMUlEYzBMams0T0RFZ01qQTNMamsyTXlBM05TNDNPRGd4SURJd09DNDNORFZETnpZdU9EQTNPU0F5TURrdU56QTRJRGM0TGpFM056SWdNakV3TGpJME15QTNPUzQxT1RrNElESXhNQzR5TXpORE9ERXVNREl5TkNBeU1UQXVNakl6SURneUxqTTROQ0F5TURrdU5qY2dPRE11TXprZ01qQTRMalk1TTBNNE5DNHpPVFU1SURJd055NDNNVGNnT0RRdU9UWTFOQ0F5TURZdU16azBJRGcwTGprM05UTWdNakExTGpBeE0wTTROQzQ1T0RVeUlESXdNeTQyTXpFZ09EUXVORE0wTmlBeU1ESXVNekF5SURnekxqUTBNamNnTWpBeExqTXhNVU00TWk0Mk56STBJREl3TUM0MU56VWdPREV1TmpnNU1TQXlNREF1TURnMUlEZ3dMall5TkRNZ01UazVMamt3TjBNM09TNDFOVGswSURFNU9TNDNNamdnTnpndU5EWXpOeUF4T1RrdU9EWTVJRGMzTGpRNE16Y2dNakF3TGpNeE1VdzNOeTQwTlRrM0lESXdNQzR5T0RGTU5Ea3VNVGsxT0NBeU1UUXVPRGd4VERZMExqSXpNRFlnTVRnM0xqUXpOVU0yTkM0Mk9EY2dNVGcyTGpRNE5TQTJOQzQ0TXpJNUlERTROUzQwTWpFZ05qUXVOalE0T0NBeE9EUXVNemc0UXpZMExqUTJORGNnTVRnekxqTTFOU0EyTXk0NU5UazBJREU0TWk0ME1ERWdOak11TWpBd09DQXhPREV1TmpVMVF6WXlMalk1T0RZZ01UZ3hMakUyTnlBMk1pNHhNREkwSURFNE1DNDNPQ0EyTVM0ME5EWXhJREU0TUM0MU1UVkROakF1TnpnNU9DQXhPREF1TWpVeElEWXdMakE0TmpRZ01UZ3dMakV4TlNBMU9TNHpOelU1SURFNE1DNHhNVFZETlRndU5qWTFOQ0F4T0RBdU1URTBJRFUzTGprMk1UZ2dNVGd3TGpJMUlEVTNMak13TlRNZ01UZ3dMalV4TkVNMU5pNDJORGc0SURFNE1DNDNOemNnTlRZdU1EVXlNaUF4T0RFdU1UWTBJRFUxTGpVME9UWWdNVGd4TGpZMU1rTTFOUzR3TkRZNUlERTRNaTR4TXprZ05UUXVOalE0TWlBeE9ESXVOekU0SURVMExqTTNOaUF4T0RNdU16VTJRelUwTGpFd016Z2dNVGd6TGprNU15QTFNeTQ1TmpNMUlERTROQzQyTnpZZ05UTXVPVFl6TWlBeE9EVXVNelkyUXpVekxqazJNamtnTVRnMkxqQTFOaUExTkM0eE1ESTFJREU0Tmk0M016a2dOVFF1TXpjME1TQXhPRGN1TXpjM1F6VTBMalkwTlRjZ01UZzRMakF4TkNBMU5TNHdORFFnTVRnNExqVTVNeUExTlM0MU5EWXhJREU0T1M0d09ESk1OVFV1TlRJNUlERTRPUzR3TlRWYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0NqeHdZWFJvSUdROUlrMHhNelV1TXpNM0lESTBNQzR5TWpSTU1UTTRMalUwTXlBeU16QXVNRE0xVERFME1TNDNOVElnTWpFNUxqZzBNVWd4TWpndU9URTRUREV6TWk0eE1qY2dNak13TGpBek5Vd3hNelV1TXpNM0lESTBNQzR5TWpSYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0NqeHdZWFJvSUdROUlrMHhNakV1TURFeUlESXlOaTQyTlRGRE1USXlMakUwTVNBeU1qWXVOalV4SURFeU15NHlNemtnTWpJMkxqSTVNeUF4TWpRdU1UTTVJREl5TlM0Mk16Rk1NVE0xTGpNMElESTJNaTR4T0RGTU1UUTJMalV6SURJeU5TNDJNVGhETVRRM0xqUXpJREl5Tmk0eU9EVWdNVFE0TGpVek1TQXlNall1TmpRM0lERTBPUzQyTmpRZ01qSTJMalkwT0VNeE5URXVNRGs0SURJeU5pNDJORGdnTVRVeUxqUTNOQ0F5TWpZdU1EazBJREUxTXk0ME9Ea2dNakkxTGpFd09VTXhOVFF1TlRBeklESXlOQzR4TWpRZ01UVTFMakEzTXlBeU1qSXVOemc0SURFMU5TNHdOek1nTWpJeExqTTVOVU14TlRVdU1EY3pJREl5TUM0d01ERWdNVFUwTGpVd015QXlNVGd1TmpZMUlERTFNeTQwT0RrZ01qRTNMalk0UXpFMU1pNDBOelFnTWpFMkxqWTVOU0F4TlRFdU1EazRJREl4Tmk0eE5ERWdNVFE1TGpZMk5DQXlNVFl1TVRReFF6RTBPQzQxT0RRZ01qRTJMakUwTnlBeE5EY3VOVE15SURJeE5pNDBOelFnTVRRMkxqWTBPU0F5TVRjdU1EYzVRekUwTlM0M05qY2dNakUzTGpZNE15QXhORFV1TURrMklESXhPQzQxTXpZZ01UUTBMamN5T0NBeU1Ua3VOVEl4U0RFME5DNDJPRFpNTVRNMUxqTTBJREkwT1M0eU5UUk1NVEkxTGprNE9TQXlNVGt1TlRJMVNERXlOUzQ1TlRoRE1USTFMalU1TWlBeU1UZ3VOallnTVRJMExqazVNU0F5TVRjdU9UQTRJREV5TkM0eU1pQXlNVGN1TXpRNVF6RXlNeTQwTkRnZ01qRTJMamM1SURFeU1pNDFNelVnTWpFMkxqUTBOU0F4TWpFdU5UYzNJREl4Tmk0ek5URkRNVEl3TGpZeE9TQXlNVFl1TWpVM0lERXhPUzQyTlRNZ01qRTJMalF4TnlBeE1UZ3VOemd4SURJeE5pNDRNVFJETVRFM0xqa3hJREl4Tnk0eU1URWdNVEUzTGpFMk5pQXlNVGN1T0RNeElERXhOaTQyTWprZ01qRTRMall3TmtNeE1UWXVNRGt4SURJeE9TNHpPRElnTVRFMUxqYzRNU0F5TWpBdU1qZzFJREV4TlM0M016RWdNakl4TGpJeE9FTXhNVFV1TmpneElESXlNaTR4TlRJZ01URTFMamc1TWlBeU1qTXVNRGd4SURFeE5pNHpORE1nTWpJekxqa3dOME14TVRZdU56azBJREl5TkM0M016TWdNVEUzTGpRMk9DQXlNalV1TkRJMElERXhPQzR5T1RJZ01qSTFMamt3T0VNeE1Ua3VNVEUySURJeU5pNHpPVEVnTVRJd0xqQTJJREl5Tmk0Mk5EZ2dNVEl4TGpBeU1pQXlNall1TmpVeFNERXlNUzR3TVRKYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0NqeHdZWFJvSUdROUlrMHlNVFF1TmprMElESXdPQzR3TXpWTU1qQTVMalUwTlNBeE9UZ3VOakU0VERJd05DNHpPVFlnTVRnNUxqSXdPRXd4T1RVdU16SXhJREU1T0M0d01qRk1NakExTGpBeE9DQXlNRE11TURJeFRESXhOQzQzTURnZ01qQTRMakF5TVV3eU1UUXVOamswSURJd09DNHdNelZhSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrQ2p4d1lYUm9JR1E5SWsweE9UUXVOamsySURJd09DNHlOalZETVRrMUxqUTVNaUF5TURjdU5EZzRJREU1Tmk0d01EVWdNakEyTGpRNElERTVOaTR4TlRnZ01qQTFMak01TlV3eU16QXVOamszSURJeU15NDFOVFZNTWpFeExqazVJREU1TUM0d01USkRNakV6TGpFeE15QXhPRGt1T0RZMklESXhOQzR4TlRVZ01UZzVMak0yTkNBeU1UUXVPVFUxSURFNE9DNDFPRFZETWpFMUxqWTNNU0F4T0RjdU9URTVJREl4Tmk0eE9EUWdNVGczTGpBM05TQXlNVFl1TkRNNUlERTROaTR4TkRWRE1qRTJMalk1TkNBeE9EVXVNakUxSURJeE5pNDJPREVnTVRnMExqSXpOU0F5TVRZdU5EQXhJREU0TXk0ek1URkRNakUyTGpFeU1TQXhPREl1TXpnNElESXhOUzQxT0RZZ01UZ3hMalUxTnlBeU1UUXVPRFV6SURFNE1DNDVNRGxETWpFMExqRXlNU0F4T0RBdU1qWXhJREl4TXk0eU1Ua2dNVGM1TGpneU1TQXlNVEl1TWpRMklERTNPUzQyTXpkRE1qRXhMakkzTXlBeE56a3VORFV6SURJeE1DNHlOamNnTVRjNUxqVXpNaUF5TURrdU16TTRJREUzT1M0NE5qVkRNakE0TGpRd09DQXhPREF1TVRrNElESXdOeTQxT1NBeE9EQXVOemN6SURJd05pNDVOelFnTVRneExqVXlOME15TURZdU16VTRJREU0TWk0eU9ERWdNakExTGprMk55QXhPRE11TVRnMElESXdOUzQ0TkRNZ01UZzBMakV6T1VNeU1EVXVOeklnTVRnMUxqQTVOQ0F5TURVdU9EWTVJREU0Tmk0d05qTWdNakEyTGpJM05DQXhPRFl1T1RReVRESXdOaTR5TlNBeE9EWXVPVFkxVERJeU1TNHlPRFVnTWpFMExqUXdPRXd4T1RNdU1ESTBJREU1T1M0NE1UaFdNVGs1TGpnek9FTXhPVEl1TVRNMklERTVPUzQwTnpnZ01Ua3hMakUyTkNBeE9Ua3VNelU1SURFNU1DNHlNVEVnTVRrNUxqUTVNME14T0RrdU1qVTVJREU1T1M0Mk1qY2dNVGc0TGpNMk1TQXlNREF1TURFZ01UZzNMall4TlNBeU1EQXVOakF4UXpFNE5pNDROamtnTWpBeExqRTVNaUF4T0RZdU16QXlJREl3TVM0NU5qZ2dNVGcxTGprM05TQXlNREl1T0RRM1F6RTROUzQyTkRnZ01qQXpMamN5TmlBeE9EVXVOVGN5SURJd05DNDJOelVnTVRnMUxqYzFOeUF5TURVdU5Ua3lRekU0TlM0NU5ERWdNakEyTGpVeElERTROaTR6TnprZ01qQTNMak0yTVNBeE9EY3VNREl6SURJd09DNHdOVFpETVRnM0xqWTJOeUF5TURndU56VXhJREU0T0M0ME9UTWdNakE1TGpJMk15QXhPRGt1TkRFeklESXdPUzQxTXpoRE1Ua3dMak16TXlBeU1Ea3VPREV6SURFNU1TNHpNVE1nTWpBNUxqZzBJREU1TWk0eU5EZ2dNakE1TGpZeE5rTXhPVE11TVRneUlESXdPUzR6T1RJZ01UazBMakF6TnlBeU1EZ3VPVEkySURFNU5DNDNNaUF5TURndU1qWTRUREU1TkM0Mk9UWWdNakE0TGpJMk5Wb2lJR1pwYkd3OUlpTXdNRUV4T1VFaUx6NEtQSEJoZEdnZ1pEMGlUVEkwTnk0ek56a2dNVE13TGpjMk5Vd3lNell1T0RnMklERXlOeTQyTkRsTU1qSTJMak00T1NBeE1qUXVOVE15VmpFek5pNDVPVFZNTWpNMkxqZzROaUF4TXpNdU9EZ3lUREkwTnk0ek56a2dNVE13TGpjMk5Wb2lJR1pwYkd3OUlpTXdNRUV4T1VFaUx6NEtQSEJoZEdnZ1pEMGlUVEl6TXk0ME1USWdNVFEwTGpZMk9VTXlNek11TkRBNUlERTBNeTQxTnpJZ01qTXpMakF6T0NBeE5ESXVOVEEySURJek1pNHpOVFVnTVRReExqWXpNa3d5TnpBZ01UTXdMamMyTWt3eU16SXVNelE0SURFeE9TNDRPRGxETWpNekxqQXpOQ0F4TVRrdU1ERXpJREl6TXk0ME1EWWdNVEUzTGprME15QXlNek11TkRBNUlERXhOaTQ0TkRKRE1qTXpMalF3T1NBeE1UVXVORFE1SURJek1pNDRNemtnTVRFMExqRXhNeUF5TXpFdU9ESTBJREV4TXk0eE1qaERNak13TGpneElERXhNaTR4TkRJZ01qSTVMalF6TkNBeE1URXVOVGc1SURJeU55NDVPVGtnTVRFeExqVTRPVU15TWpZdU5UWTBJREV4TVM0MU9Ea2dNakkxTGpFNE9DQXhNVEl1TVRReUlESXlOQzR4TnpNZ01URXpMakV5T0VNeU1qTXVNVFU1SURFeE5DNHhNVE1nTWpJeUxqVTRPU0F4TVRVdU5EUTVJREl5TWk0MU9Ea2dNVEUyTGpnME1rTXlNakl1TlRrMUlERXhOeTQ0T1RJZ01qSXlMamt6TXlBeE1UZ3VPVEUxSURJeU15NDFOVFlnTVRFNUxqYzNNME15TWpRdU1UYzVJREV5TUM0Mk16RWdNakkxTGpBMU55QXhNakV1TWpneklESXlOaTR3TnpNZ01USXhMalkwTWxZeE1qRXVOamMxVERJMU5pNDJPRFVnTVRNd0xqYzJNa3d5TWpZdU1EWTJJREV6T1M0NE16bFdNVE01TGpnMk1rTXlNalV1TURVeElERTBNQzR5TWpJZ01qSTBMakUzTXlBeE5EQXVPRGMwSURJeU15NDFOU0F4TkRFdU56TXlRekl5TWk0NU1qY2dNVFF5TGpVNUlESXlNaTQxT1NBeE5ETXVOakV5SURJeU1pNDFPRElnTVRRMExqWTJNa015TWpJdU5UZ3lJREUwTmk0d05UVWdNakl6TGpFMU1pQXhORGN1TXpreElESXlOQzR4TmpjZ01UUTRMak0zTjBNeU1qVXVNVGd4SURFME9TNHpOaklnTWpJMkxqVTFOeUF4TkRrdU9URTFJREl5Tnk0NU9USWdNVFE1TGpreE5VTXlNamt1TkRJM0lERTBPUzQ1TVRVZ01qTXdMamd3TXlBeE5Ea3VNell5SURJek1TNDRNVGNnTVRRNExqTTNOME15TXpJdU9ETXlJREUwTnk0ek9URWdNak16TGpRd01pQXhORFl1TURVMUlESXpNeTQwTURJZ01UUTBMalkyTWt3eU16TXVOREV5SURFME5DNDJOamxhSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrQ2p4d1lYUm9JR1E5SWsweU1UUXVNak14SURVekxqWTVNamxNTWpBMExqVXpOQ0ExT0M0Mk9USTVUREU1TkM0NE5EUWdOak11TmpreU9Fd3lNRE11T1RJZ056SXVOVEEyTVV3eU1Ea3VNRFk0SURZekxqQTVOakZNTWpFMExqSXhOeUExTXk0Mk9EWXlUREl4TkM0eU16RWdOVE11TmpreU9Wb2lJR1pwYkd3OUlpTXdNRUV4T1VFaUx6NEtQSEJoZEdnZ1pEMGlUVEl4TkM0ME5qZ2dOek11TVRFNU5FTXlNVE11TmpZNElEY3lMak0wTmpRZ01qRXlMall6SURjeExqZzBOemtnTWpFeExqVXhNaUEzTVM0Mk9UazBUREl6TUM0eU1pQXpPQzR4TmpZMFRERTVOUzQyTnpnZ05UWXVNekkyTWtNeE9UVXVOVEkwSURVMUxqSXpOallnTVRrMUxqQXdPQ0ExTkM0eU1qVTFJREU1TkM0eU1Ea2dOVE11TkRRMk1rTXhPVE11TVRrMElEVXlMalEyTVRRZ01Ua3hMamd4TnlBMU1TNDVNRGcxSURFNU1DNHpPRElnTlRFdU9UQTVNVU14T0RndU9UUTRJRFV4TGprd09UY2dNVGczTGpVM01pQTFNaTQwTmpNNElERTROaTQxTlRnZ05UTXVORFE1TlVNeE9EVXVOVFF6SURVMExqUXpOVE1nTVRnMExqazNOQ0ExTlM0M056RTRJREU0TkM0NU56VWdOVGN1TVRZMU1rTXhPRFF1T1RjMUlEVTRMalUxT0RZZ01UZzFMalUwTmlBMU9TNDRPVFEySURFNE5pNDFOakVnTmpBdU9EYzVOVU14T0RjdU16STVJRFl4TGpZeE5qSWdNVGc0TGpNeE1pQTJNaTR4TURZNUlERTRPUzR6TnpZZ05qSXVNamcxTmtNeE9UQXVORFFnTmpJdU5EWTBOQ0F4T1RFdU5UTTBJRFl5TGpNeU1qY2dNVGt5TGpVeE15QTJNUzQ0TnprMVRERTVNaTQxTXpjZ05qRXVPVEF5T0V3eU1qQXVPREF4SURRM0xqTXdPVFpNTWpBMUxqYzNNeUEzTkM0M05USTNWamMwTGpjM01qZERNakExTGpNeE5TQTNOUzQzTWpNNElESXdOUzR4TmpnZ056WXVOemc0TkNBeU1EVXVNelV5SURjM0xqZ3lNME15TURVdU5UTTNJRGM0TGpnMU56WWdNakEyTGpBME15QTNPUzQ0TVRJMklESXdOaTQ0TURNZ09EQXVOVFU1TTBNeU1EY3VNekExSURneExqQTBOamtnTWpBM0xqa3dNaUE0TVM0ME16TTNJREl3T0M0MU5Ua2dPREV1TmprM05FTXlNRGt1TWpFMUlEZ3hMamsyTVRFZ01qQTVMamt4T1NBNE1pNHdPVFkzSURJeE1DNDJNamtnT0RJdU1EazJORU15TVRFdU16UWdPREl1TURrMk1TQXlNVEl1TURReklEZ3hMamsxT1RrZ01qRXlMalk1T1NBNE1TNDJPVFUyUXpJeE15NHpOVFlnT0RFdU5ETXhNeUF5TVRNdU9UVXlJRGd4TGpBME5DQXlNVFF1TkRVMElEZ3dMalUxTmtNeU1UUXVPVFUySURnd0xqQTJOemtnTWpFMUxqTTFOU0EzT1M0ME9EZzFJREl4TlM0Mk1qWWdOemd1T0RVeFF6SXhOUzQ0T1RnZ056Z3VNakV6TlNBeU1UWXVNRE0zSURjM0xqVXpNRElnTWpFMkxqQXpOeUEzTmk0NE5EQXpRekl4Tmk0d016Y2dOell1TVRVd05DQXlNVFV1T0RrMklEYzFMalEyTnpNZ01qRTFMall5TkNBM05DNDRNME15TVRVdU16VXlJRGMwTGpFNU1qY2dNakUwTGprMU15QTNNeTQyTVRNM0lESXhOQzQwTlRFZ056TXVNVEkyVERJeE5DNDBOamdnTnpNdU1URTVORm9pSUdacGJHdzlJaU13TUVFeE9VRWlMejRLUEhCaGRHZ2daRDBpVFRFM055NDBPVElnTlRVdU16STVORXd4TnpVdU56YzFJRFUwTGpZek9UUk1NVGM1TGpRME9DQTBOUzQ1TnpJNFF6RTRNQzR5TXpNZ05EUXVNVEUxT1NBeE9EQXVNakkySURReUxqQXpNak1nTVRjNUxqUXlPU0EwTUM0eE9EQTBRekUzT0M0Mk16RWdNemd1TXpJNE5TQXhOemN1TVRBNUlETTJMamcySURFM05TNHhPVGNnTXpZdU1EazNPVU14TnpNdU1qZzFJRE0xTGpNek5Ua2dNVGN4TGpFek9TQXpOUzR6TkRJM0lERTJPUzR5TXpJZ016WXVNVEUyT1VNeE5qY3VNekkxSURNMkxqZzVNVEVnTVRZMUxqZ3hNeUF6T0M0ek5qa3pJREUyTlM0d01qZ2dOREF1TWpJMk1rd3hOakV1TXpVMUlEUTRMamc1TWpoTU1UVTVMall6T1NBME9DNHlNRFl5VERFMk15NHpNVElnTXprdU5UTTVOa014TmpRdU1qZzJJRE0zTGpJME1URWdNVFkyTGpFMk1TQXpOUzQwTVRJMklERTJPQzQxTWpRZ016UXVORFUyTlVNeE56QXVPRGczSURNekxqVXdNRFFnTVRjekxqVTBOQ0F6TXk0ME9UUTVJREUzTlM0NU1URWdNelF1TkRReE0wTXhOemd1TWpjNElETTFMak00TnpjZ01UZ3dMakUyTVNBek55NHlNRGcwSURFNE1TNHhORFVnTXprdU5UQXlPRU14T0RJdU1UTWdOREV1TnprM015QXhPREl1TVRNMklEUTBMak0zTnpjZ01UZ3hMakUyTVNBME5pNDJOell5VERFM055NDBPVElnTlRVdU16STVORm9pSUdacGJHdzlJaU13TUVFeE9VRWlMejRLUEhCaGRHZ2daRDBpVFRFM015NHpNamdnTkRBdU5UUTJNME14TnpJdU5qQTVJRFF3TGpJMU5qa2dNVGN4TGpnek55QTBNQzR4TURnMElERTNNUzR3TlRnZ05EQXVNVEE1TTBNeE56QXVNamM1SURRd0xqRXhNRElnTVRZNUxqVXdOeUEwTUM0eU5qQTJJREUyT0M0M09EZ2dOREF1TlRVeE4wTXhOamd1TURZNUlEUXdMamcwTWpnZ01UWTNMalF4TmlBME1TNHlOamtnTVRZMkxqZzJOeUEwTVM0NE1EVTNRekUyTmk0ek1UZ2dOREl1TXpReU5TQXhOalV1T0RneklEUXlMamszT1RNZ01UWTFMalU0T0NBME15NDJOemsyVERFMk15NHdPRGtnTkRrdU5UWXlPRXd4TnpRdU1ETTVJRFV6TGprMU1qaE1NVGMyTGpVek9DQTBPQzR3TmpJNVF6RTNOaTQ0TXpVZ05EY3VNell6TmlBeE56WXVPVGcySURRMkxqWXhORFFnTVRjMkxqazROU0EwTlM0NE5UZ3lRekUzTmk0NU9ETWdORFV1TVRBeE9TQXhOell1T0RJNElEUTBMak0xTXpRZ01UYzJMalV5T0NBME15NDJOVFUwUXpFM05pNHlNamtnTkRJdU9UVTNNeUF4TnpVdU56a2dOREl1TXpJek5TQXhOelV1TWpNNElEUXhMamM1UXpFM05DNDJPRFlnTkRFdU1qVTJOU0F4TnpRdU1ETXlJRFF3TGpnek16a2dNVGN6TGpNeE1TQTBNQzQxTkRZelNERTNNeTR6TWpoYVRURTNNQzR6TURnZ05EY3VOamN5T1VNeE5qa3VPVGszSURRM0xqVTBPRGtnTVRZNUxqY3pJRFEzTGpNek9DQXhOamt1TlRReklEUTNMakEyTmpsRE1UWTVMak0xTlNBME5pNDNPVFU0SURFMk9TNHlOVFFnTkRZdU5EYzJOeUF4TmprdU1qVTBJRFEyTGpFMVF6RTJPUzR5TlRNZ05EVXVPREl6TkNBeE5qa3VNelV5SURRMUxqVXdNemtnTVRZNUxqVXpPQ0EwTlM0eU16SkRNVFk1TGpjeU5TQTBOQzQ1TmpBeElERTJPUzQ1T1NBME5DNDNORGdnTVRjd0xqTXdNU0EwTkM0Mk1qSTNRekUzTUM0Mk1URWdORFF1TkRrM015QXhOekF1T1RVeklEUTBMalEyTkRRZ01UY3hMakk0TXlBME5DNDFNamM1UXpFM01TNDJNVE1nTkRRdU5Ua3hOU0F4TnpFdU9URTJJRFEwTGpjME9EY2dNVGN5TGpFMU5DQTBOQzQ1TnprM1F6RTNNaTR6T1RJZ05EVXVNakV3TnlBeE56SXVOVFUwSURRMUxqVXdOU0F4TnpJdU5qRTVJRFExTGpneU5UUkRNVGN5TGpZNE5TQTBOaTR4TkRVNElERTNNaTQyTlRFZ05EWXVORGMzT1NBeE56SXVOVEl5SURRMkxqYzNPVFZETVRjeUxqUXpPQ0EwTmk0NU56azVJREUzTWk0ek1UVWdORGN1TVRZeUlERTNNaTR4TlRnZ05EY3VNekUxTkVNeE56SXVNREF4SURRM0xqUTJPRGdnTVRjeExqZ3hOQ0EwTnk0MU9UQXpJREUzTVM0Mk1Ea2dORGN1TmpjeU9VTXhOekV1TkRBeklEUTNMamMxTmlBeE56RXVNVGd5SURRM0xqYzVPRGdnTVRjd0xqazFPQ0EwTnk0M09UZzRRekUzTUM0M016VWdORGN1TnprNE9DQXhOekF1TlRFMElEUTNMamMxTmlBeE56QXVNekE0SURRM0xqWTNNamxhSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrQ2p4d1lYUm9JR1E5SWsweU1qQXVNVGsySURFd05pNDJPVFpNTWpFNUxqUTNPU0F4TURVdU1ESTVUREl5T0M0ek56TWdNVEF4TGpReU9VTXlNekF1TWpReklERXdNQzQyTXpVZ01qTXhMamN4T0NBNU9TNHhOakF5SURJek1pNDBOemtnT1RjdU16SXhRekl6TXk0eU5DQTVOUzQwT0RFNUlESXpNeTR5TWpjZ09UTXVOREkySURJek1pNDBORE1nT1RFdU5UazJNVU15TXpFdU5qVTRJRGc1TGpjMk5qSWdNak13TGpFMk5TQTRPQzR6TURnMklESXlPQzR5T0RVZ09EY3VOVE0zTkVNeU1qWXVOREExSURnMkxqYzJOakVnTWpJMExqSTRPQ0E0Tmk0M05ESTRJREl5TWk0ek9TQTROeTQwTnpJMVRESXhNeTQwT0RZZ09URXVNRFkxT0V3eU1USXVOemMxSURnNUxqTTVPVEZNTWpJeExqWTNNaUE0TlM0M09Ua3lRekl5TkM0d01qWWdPRFF1T0RnMk5DQXlNall1TmpVMUlEZzBMamt3T1RRZ01qSTRMams1TVNBNE5TNDROak16UXpJek1TNHpNamNnT0RZdU9ERTNNaUF5TXpNdU1UZ3pJRGc0TGpZeU5UTWdNak0wTGpFMU9DQTVNQzQ0T1RkRE1qTTFMakV6TXlBNU15NHhOamc0SURJek5TNHhORGdnT1RVdU56SXhOeUF5TXpRdU1pQTVPQzR3TURRelF6SXpNeTR5TlRNZ01UQXdMakk0TnlBeU16RXVOREU0SURFd01pNHhNVFlnTWpJNUxqQTVOQ0F4TURNdU1EazJUREl5TUM0eE9UWWdNVEEyTGpZNU5sb2lJR1pwYkd3OUlpTXdNRUV4T1VFaUx6NEtQSEJoZEdnZ1pEMGlUVEl5T0M0d01pQTVNeTR6T0RVNFF6SXlOeTQwTVRVZ09URXVPVGMxT1NBeU1qWXVNalU0SURrd0xqZzFOeUF5TWpRdU9EQTBJRGt3TGpJM05VTXlNak11TXpVZ09Ea3VOamt6TVNBeU1qRXVOekU0SURnNUxqWTVOVGNnTWpJd0xqSTJOaUE1TUM0eU9ESTFUREl4TkM0eE9DQTVNaTQzTkRJMFRESXhPQzQzTlRJZ01UQXpMak00TWt3eU1qUXVPREEzSURFd01DNDVNekpETWpJMUxqVXpNU0F4TURBdU5qUTFJREl5Tmk0eE9Ea2dNVEF3TGpJeU1TQXlNall1TnpRMElEazVMalk0TlRWRE1qSTNMakk1T0NBNU9TNHhORGs0SURJeU55NDNNemdnT1RndU5URXlPU0F5TWpndU1ETTRJRGszTGpneE1UUkRNakk0TGpNek9DQTVOeTR4TURrNUlESXlPQzQwT1RJZ09UWXVNelUzTnlBeU1qZ3VORGt4SURrMUxqVTVPREZETWpJNExqUTVJRGswTGpnek9EWWdNakk0TGpNek5TQTVOQzR3T0RZM0lESXlPQzR3TXpNZ09UTXVNemcxT0VneU1qZ3VNREphVFRJeU1DNDJPVEVnT1RZdU16ZzFOME15TWpBdU5UUTNJRGsyTGpBek5pQXlNakF1TlRNeElEazFMalkwT0RNZ01qSXdMalkwT0NBNU5TNHlPRGc0UXpJeU1DNDNOalFnT1RRdU9USTVNeUF5TWpFdU1EQTFJRGswTGpZeU1ERWdNakl4TGpNeklEazBMalF4TXpsRE1qSXhMalkxTlNBNU5DNHlNRGMySURJeU1pNHdORFFnT1RRdU1URTNNU0F5TWpJdU5ETWdPVFF1TVRVM04wTXlNakl1T0RFMUlEazBMakU1T0RNZ01qSXpMakUzTlNBNU5DNHpOamMxSURJeU15NDBORGNnT1RRdU5qTTJOa015TWpNdU56RTVJRGswTGprd05UWWdNakl6TGpnNE5pQTVOUzR5TlRjNElESXlNeTQ1TWpFZ09UVXVOak16TWtNeU1qTXVPVFUxSURrMkxqQXdPRFlnTWpJekxqZzFOU0E1Tmk0ek9EUWdNakl6TGpZek5pQTVOaTQyT1RVMlF6SXlNeTQwTVRnZ09UY3VNREEzTWlBeU1qTXVNRGsxSURrM0xqSXpOVFlnTWpJeUxqY3lNeUE1Tnk0ek5ERTVRekl5TWk0ek5TQTVOeTQwTkRneklESXlNUzQ1TlRFZ09UY3VOREkyTVNBeU1qRXVOVGswSURrM0xqSTNPVEZETWpJeExqRTROQ0E1Tnk0eE1EZ3pJREl5TUM0NE5Ua2dPVFl1TnpnM015QXlNakF1TmpreElEazJMak00TlRkYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0NqeHdZWFJvSUdROUlrMHlNVEl1T0RBMklERTNNaTQzTmpoTU1qRXpMalV4TnlBeE56RXVNVEF5VERJeU1pNDBOREVnTVRjMExqWTJPRU15TWpRdU16TTJJREUzTlM0ek5qY2dNakkyTGpRek55QXhOelV1TXpJZ01qSTRMakk1TmlBeE56UXVOVE00UXpJek1DNHhOVFlnTVRjekxqYzFOaUF5TXpFdU5qSTVJREUzTWk0ek1ERWdNak15TGpRd01TQXhOekF1TkRneFF6SXpNeTR4TnpRZ01UWTRMalkyTWlBeU16TXVNVGcxSURFMk5pNDJNaklnTWpNeUxqUXpNeUF4TmpRdU56azBRekl6TVM0Mk9DQXhOakl1T1RZM0lESXpNQzR5TWpRZ01UWXhMalE1TmlBeU1qZ3VNemN6SURFMk1DNDJPVFZNTWpFNUxqUTBPQ0F4TlRjdU1USTRUREl5TUM0eE5Ua2dNVFUxTGpRMk1rd3lNamt1TURneklERTFPUzR3TWpoRE1qTXdMakkxTlNBeE5Ua3VORGszSURJek1TNHpNakVnTVRZd0xqRTROU0F5TXpJdU1qRTVJREUyTVM0d05UUkRNak16TGpFeE55QXhOakV1T1RJeUlESXpNeTQ0TXlBeE5qSXVPVFUwSURJek5DNHpNVGdnTVRZMExqQTVRekl6TkM0NE1EVWdNVFkxTGpJeU5pQXlNelV1TURVNElERTJOaTQwTkRRZ01qTTFMakEySURFMk55NDJOelZETWpNMUxqQTJNeUF4TmpndU9UQTJJREl6TkM0NE1UWWdNVGN3TGpFeU5TQXlNelF1TXpNMElERTNNUzR5TmpORE1qTXpMamcxTVNBeE56SXVOREF4SURJek15NHhORElnTVRjekxqUXpOaUF5TXpJdU1qUTRJREUzTkM0ek1EaERNak14TGpNMU5DQXhOelV1TVRnZ01qTXdMakk1TVNBeE56VXVPRGN6SURJeU9TNHhNakVnTVRjMkxqTTBOa015TWpjdU9UVXhJREUzTmk0NE1pQXlNall1TmprM0lERTNOeTR3TmpVZ01qSTFMalF5T1NBeE56Y3VNRFkzUXpJeU5DNHhOaklnTVRjM0xqQTNJREl5TWk0NU1EWWdNVGMyTGpneklESXlNUzQzTXpRZ01UYzJMak0yTWt3eU1USXVPREEySURFM01pNDNOamhhSWlCbWFXeHNQU0lqTURCQk1UbEJJaTgrQ2p4d1lYUm9JR1E5SWsweU1qZ3VNREkySURFMk9DNDNNalZETWpJNExqTXlNeUF4TmpndU1ESTJJREl5T0M0ME56VWdNVFkzTGpJM055QXlNamd1TkRjeklERTJOaTQxTWtNeU1qZ3VORGN5SURFMk5TNDNOalFnTWpJNExqTXhOeUF4TmpVdU1ERTJJREl5T0M0d01UY2dNVFkwTGpNeE9FTXlNamN1TnpFM0lERTJNeTQyTWlBeU1qY3VNamM1SURFMk1pNDVPRFlnTWpJMkxqY3lOeUF4TmpJdU5EVXlRekl5Tmk0eE56VWdNVFl4TGpreE9TQXlNalV1TlRJZ01UWXhMalE1TmlBeU1qUXVPQ0F4TmpFdU1qQTVUREl4T0M0M016UWdNVFU0TGpjNE1rd3lNVFF1TWpFMElERTJPUzQwTkRoTU1qSXdMakkzT1NBeE56RXVPRGN5UXpJeU1DNDVPVGtnTVRjeUxqRTJNU0F5TWpFdU56Y3hJREUzTWk0ek1Ea2dNakl5TGpVMU1TQXhOekl1TXpBNFF6SXlNeTR6TXlBeE56SXVNekEzSURJeU5DNHhNREVnTVRjeUxqRTFOaUF5TWpRdU9ESXhJREUzTVM0NE5qVkRNakkxTGpVMElERTNNUzQxTnpRZ01qSTJMakU1TXlBeE56RXVNVFE0SURJeU5pNDNORE1nTVRjd0xqWXhNa015TWpjdU1qa3lJREUzTUM0d056VWdNakkzTGpjeU55QXhOamt1TkRNNUlESXlPQzR3TWpNZ01UWTRMamN6T0V3eU1qZ3VNREkySURFMk9DNDNNalZhVFRJeU1DNDJPREVnTVRZMUxqYzVNa015TWpBdU56YzNJREUyTlM0MU5qY2dNakl3TGpreU15QXhOalV1TXpZMUlESXlNUzR4TURrZ01UWTFMakl3TVVNeU1qRXVNamsySURFMk5TNHdNemdnTWpJeExqVXhOeUF4TmpRdU9URTJJREl5TVM0M05UY2dNVFkwTGpnME5rTXlNakV1T1RrM0lERTJOQzQzTnpVZ01qSXlMakkxSURFMk5DNDNOVGNnTWpJeUxqUTVPU0F4TmpRdU56a3lRekl5TWk0M05EY2dNVFkwTGpneU9DQXlNakl1T1RnMElERTJOQzQ1TVRjZ01qSXpMakU1TXlBeE5qVXVNRFV5UXpJeU15NDBNRElnTVRZMUxqRTROeUF5TWpNdU5UYzNJREUyTlM0ek5qWWdNakl6TGpjd05pQXhOalV1TlRjMVF6SXlNeTQ0TXpZZ01UWTFMamM0TkNBeU1qTXVPVEUySURFMk5pNHdNVGdnTWpJekxqazBNU0F4TmpZdU1qWkRNakl6TGprMk5pQXhOall1TlRBeklESXlNeTQ1TXpVZ01UWTJMamMwT0NBeU1qTXVPRFV4SURFMk5pNDVOemRETWpJekxqYzJOeUF4TmpjdU1qQTNJREl5TXk0Mk16RWdNVFkzTGpReE5pQXlNak11TkRVMElERTJOeTQxT0RoRE1qSXpMakkxTlNBeE5qY3VOemM0SURJeU15NHdNVEVnTVRZM0xqa3hOeUF5TWpJdU56UTBJREUyTnk0NU9UUkRNakl5TGpRM055QXhOamd1TURjeUlESXlNaTR4T1RVZ01UWTRMakE0TlNBeU1qRXVPVEl4SURFMk9DNHdNekpETWpJeExqWTBPQ0F4TmpjdU9UYzVJREl5TVM0ek9USWdNVFkzTGpnMk15QXlNakV1TVRjMUlERTJOeTQyT1RORE1qSXdMamsxT0NBeE5qY3VOVEl6SURJeU1DNDNPRGNnTVRZM0xqTXdOQ0F5TWpBdU5qYzNJREUyTnk0d05UVkRNakl3TGpVNU1TQXhOall1T0RVMUlESXlNQzQxTkRZZ01UWTJMalkwSURJeU1DNDFORFlnTVRZMkxqUXlNME15TWpBdU5UUTJJREUyTmk0eU1EY2dNakl3TGpVNU1TQXhOalV1T1RreUlESXlNQzQyTnpjZ01UWTFMamM1TWtneU1qQXVOamd4V2lJZ1ptbHNiRDBpSXpBd1FURTVRU0l2UGdvOGNHRjBhQ0JrUFNKTk1UWXdMalV3TkNBeU1UTXVOekF4VERFMk1pNHlNaUF5TVRNdU1EQTFUREUyTlM0NU1qUWdNakl4TGpZME5VTXhOall1TXpFM0lESXlNaTQxTmpFZ01UWTJMamc1TXlBeU1qTXVNemt6SURFMk55NDJNVGNnTWpJMExqQTVORU14TmpndU16UXlJREl5TkM0M09UUWdNVFk1TGpJd01TQXlNalV1TXpRNUlERTNNQzR4TkRZZ01qSTFMamN5TjBNeE56RXVNRGt5SURJeU5pNHhNRFVnTVRjeUxqRXdOU0F5TWpZdU1qazRJREUzTXk0eE1qY2dNakkyTGpJNU5rTXhOelF1TVRRNUlESXlOaTR5T1RRZ01UYzFMakUyTVNBeU1qWXVNRGsySURFM05pNHhNRFVnTWpJMUxqY3hOVU14TnpjdU1EUTVJREl5TlM0ek16TWdNVGMzTGprd05pQXlNalF1TnpjMElERTNPQzQyTWpjZ01qSTBMakEzUXpFM09TNHpORGdnTWpJekxqTTJOeUF4TnprdU9USWdNakl5TGpVek1pQXhPREF1TXpBNUlESXlNUzQyTVRSRE1UZ3dMalk1T0NBeU1qQXVOamsySURFNE1DNDRPVGNnTWpFNUxqY3hNeUF4T0RBdU9EazFJREl4T0M0M01rTXhPREF1T0RreklESXhOeTQzTWpjZ01UZ3dMalk0T1NBeU1UWXVOelEwSURFNE1DNHlPVFlnTWpFMUxqZ3lPRXd4TnpZdU5Ua3lJREl3Tnk0eE9URk1NVGM0TGpNd09TQXlNRFl1TkRreFRERTRNaTR3TVRZZ01qRTFMakV6TVVNeE9ESXVOVEF6SURJeE5pNHlOamNnTVRneUxqYzFOU0F5TVRjdU5EZzJJREU0TWk0M05UZ2dNakU0TGpjeE5rTXhPREl1TnpZZ01qRTVMamswTnlBeE9ESXVOVEV6SURJeU1TNHhOallnTVRneUxqQXpJREl5TWk0ek1EUkRNVGd4TGpVME55QXlNak11TkRReUlERTRNQzQ0TXprZ01qSTBMalEzTnlBeE56a3VPVFEwSURJeU5TNHpORGxETVRjNUxqQTFJREl5Tmk0eU1qRWdNVGMzTGprNE55QXlNall1T1RFeklERTNOaTQ0TVRjZ01qSTNMak00TmtNeE56VXVOalEzSURJeU55NDROVGtnTVRjMExqTTVNeUF5TWpndU1UQTBJREUzTXk0eE1qVWdNakk0TGpFd04wTXhOekV1T0RVNElESXlPQzR4TURrZ01UY3dMall3TWlBeU1qY3VPRFk1SURFMk9TNDBNekVnTWpJM0xqUkRNVFk0TGpJMU9TQXlNall1T1RNeElERTJOeTR4T1RNZ01qSTJMakkwTXlBeE5qWXVNamsySURJeU5TNHpOelJETVRZMUxqTTVPQ0F5TWpRdU5UQTJJREUyTkM0Mk9EVWdNakl6TGpRM05DQXhOalF1TVRrM0lESXlNaTR6TXpoTU1UWXdMalV3TkNBeU1UTXVOekF4V2lJZ1ptbHNiRDBpSXpBd1FURTVRU0l2UGdvOGNHRjBhQ0JrUFNKTk1UYzBMakl4SURJeU1TNHlPVFZETVRjMUxqWTJNU0F5TWpBdU56QTJJREUzTmk0NE1USWdNakU1TGpVNE15QXhOemN1TkRFeElESXhPQzR4TnpGRE1UYzRMakF4SURJeE5pNDNOVGtnTVRjNExqQXdPQ0F5TVRVdU1UYzFJREUzTnk0ME1EWWdNakV6TGpjMk5Vd3hOelF1T0RnM0lESXdOeTQ0T0RWTU1UWXpMamswTnlBeU1USXVNekUxVERFMk5pNDBOallnTWpFNExqRTNPRU14TmpjdU1EWTVJREl4T1M0MU9EY2dNVFk0TGpJeU15QXlNakF1TnpBM0lERTJPUzQyTnpVZ01qSXhMakk1TVVNeE56RXVNVEkzSURJeU1TNDROelVnTVRjeUxqYzFPQ0F5TWpFdU9EYzJJREUzTkM0eU1TQXlNakV1TWprMVdrMHhOekV1TVRVNUlESXhOQzR4TnpGRE1UY3hMalV5TlNBeU1UUXVNRElnTVRjeExqa3pOQ0F5TVRNdU9UazNJREUzTWk0ek1UVWdNakUwTGpFd05rTXhOekl1TmprM0lESXhOQzR5TVRZZ01UY3pMakF5T0NBeU1UUXVORFVnTVRjekxqSTFNU0F5TVRRdU56ZERNVGN6TGpRM05DQXlNVFV1TURrZ01UY3pMalUzTmlBeU1UVXVORGMxSURFM015NDFNemtnTWpFMUxqZzJRekUzTXk0MU1ESWdNakUyTGpJME5TQXhOek11TXpJNUlESXhOaTQyTURVZ01UY3pMakEwT0NBeU1UWXVPRGM1UXpFM01pNDNOamdnTWpFM0xqRTFNeUF4TnpJdU16azRJREl4Tnk0ek1qVWdNVGN5TGpBd01pQXlNVGN1TXpZelF6RTNNUzQyTURjZ01qRTNMalF3TWlBeE56RXVNakE1SURJeE55NHpNRFlnTVRjd0xqZzNPQ0F5TVRjdU1Ea3lRekUzTUM0MU5EY2dNakUyTGpnM055QXhOekF1TXpBeklESXhOaTQxTlRnZ01UY3dMakU0T0NBeU1UWXVNVGc0UXpFM01DNHdOeklnTWpFMUxqZ3hPQ0F4TnpBdU1Ea3pJREl4TlM0ME1qRWdNVGN3TGpJME5pQXlNVFV1TURZMVF6RTNNQzQwTWpFZ01qRTBMalkySURFM01DNDNOVElnTWpFMExqTTBJREUzTVM0eE5qa2dNakUwTGpFM01VZ3hOekV1TVRVNVdpSWdabWxzYkQwaUl6QXdRVEU1UVNJdlBnbzhjR0YwYUNCa1BTSk5PVEl1TkRFNE5pQXlNRFl1TmpVeFREazBMakV6TkRrZ01qQTNMak0wTVV3NU1DNDBOakl4SURJeE5pNHdNRGhET0RrdU5qYzFOU0F5TVRjdU9EWXlJRGc1TGpZM09UY2dNakU1TGprME5DQTVNQzQwTnpNM0lESXlNUzQzT1RWRE9URXVNalkzT0NBeU1qTXVOalEzSURreUxqYzROallnTWpJMUxqRXhOaUE1TkM0Mk9UWXlJREl5TlM0NE56bERPVFl1TmpBMU55QXlNall1TmpReklEazRMamMwT1RRZ01qSTJMall6T1NBeE1EQXVOalUySURJeU5TNDROamhETVRBeUxqVTJNaUF5TWpVdU1EazNJREV3TkM0d056VWdNakl6TGpZeU1pQXhNRFF1T0RZeUlESXlNUzQzTmpoTU1UQTRMalV5T0NBeU1UTXVNVEF4VERFeE1DNHlORFFnTWpFekxqYzVNVXd4TURZdU5UY3hJREl5TWk0ME5UaERNVEEyTGpBNE9TQXlNak11TlRrMklERXdOUzR6T0NBeU1qUXVOak14SURFd05DNDBPRFlnTWpJMUxqVXdNME14TURNdU5Ua3hJREl5Tmk0ek56VWdNVEF5TGpVeU9TQXlNamN1TURZM0lERXdNUzR6TlRrZ01qSTNMalUwTVVNeE1EQXVNVGc1SURJeU9DNHdNVFFnT1RndU9UTTBOQ0F5TWpndU1qVTVJRGszTGpZMk5qa2dNakk0TGpJMk1rTTVOaTR6T1RrMUlESXlPQzR5TmpVZ09UVXVNVFF6T1NBeU1qZ3VNREkxSURrekxqazNNVGtnTWpJM0xqVTFOa001TWk0M09UazVJREl5Tnk0d09EZ2dPVEV1TnpNME5DQXlNall1TXprNUlEa3dMamd6TmpJZ01qSTFMalV6TVVNNE9TNDVNemd4SURJeU5DNDJOaklnT0RrdU1qSTBPU0F5TWpNdU5qTXhJRGc0TGpjek56UWdNakl5TGpRNU5VTTRPQzR5TkRrNUlESXlNUzR6TlRnZ09EY3VPVGszTmlBeU1qQXVNVFFnT0RjdU9UazBPU0F5TVRndU9UQTVRemczTGprNU1qSWdNakUzTGpZM09TQTRPQzR5TXpreUlESXhOaTQwTlRrZ09EZ3VOekl4TnlBeU1UVXVNekl4VERreUxqUXhPRFlnTWpBMkxqWTFNVm9pSUdacGJHdzlJaU13TUVFeE9VRWlMejRLUEhCaGRHZ2daRDBpVFRrMkxqVTRNalFnTWpJeExqUXpNVU01T0M0d016WTVJREl5TWk0d01URWdPVGt1TmpZNE9TQXlNakl1TURBM0lERXdNUzR4TWlBeU1qRXVOREpETVRBeUxqVTNNU0F5TWpBdU9ETXlJREV3TXk0M01qTWdNakU1TGpjd09TQXhNRFF1TXpJeklESXhPQzR5T1RoTU1UQTJMamd5TWlBeU1USXVOREE0VERrMUxqZ3pOellnTWpBNExqQXlOVXc1TXk0ek16ZzJJREl4TXk0NU1EaERPVEl1TnpRd05pQXlNVFV1TXpJeElEa3lMamMwTkRrZ01qRTJMamt3TnlBNU15NHpOVEEySURJeE9DNHpNVGRET1RNdU9UVTJNeUF5TVRrdU56STNJRGsxTGpFeE16Z2dNakl3TGpnME5pQTVOaTQxTmpnM0lESXlNUzQwTWpoTU9UWXVOVGd5TkNBeU1qRXVORE14V2swNU9TNDJNRE14SURJeE5DNHlPVGhET1RrdU9UWTFNeUF5TVRRdU5EUTBJREV3TUM0eU5qUWdNakUwTGpjd09DQXhNREF1TkRRNUlESXhOUzR3TkRSRE1UQXdMall6TXlBeU1UVXVNemdnTVRBd0xqWTVNaUF5TVRVdU56WTNJREV3TUM0Mk1UWWdNakUyTGpFME1VTXhNREF1TlRNNUlESXhOaTQxTVRRZ01UQXdMak16TVNBeU1UWXVPRFVnTVRBd0xqQXlPQ0F5TVRjdU1Ea3lRems1TGpjeU5EZ2dNakUzTGpNek15QTVPUzR6TkRRNElESXhOeTQwTmpVZ09UZ3VPVFV5TmlBeU1UY3VORFkxUXprNExqVTJNRFVnTWpFM0xqUTJOU0E1T0M0eE9EQTBJREl4Tnk0ek16TWdPVGN1T0RjM01pQXlNVGN1TURreVF6azNMalUzTkNBeU1UWXVPRFVnT1RjdU16WTJOQ0F5TVRZdU5URTBJRGszTGpJNE9UY2dNakUyTGpFME1VTTVOeTR5TVRNZ01qRTFMamMyTnlBNU55NHlOeklnTWpFMUxqTTRJRGszTGpRMU5qWWdNakUxTGpBME5FTTVOeTQyTkRFeUlESXhOQzQzTURnZ09UY3VPVFFnTWpFMExqUTBOQ0E1T0M0ek1ESXlJREl4TkM0eU9UaERPVGd1TnpFNU1TQXlNVFF1TVRJNUlEazVMakU0TnpnZ01qRTBMakV5TnlBNU9TNDJNRFkxSURJeE5DNHlPVEZNT1RrdU5qQXpNU0F5TVRRdU1qazRXaUlnWm1sc2JEMGlJekF3UVRFNVFTSXZQZ284Y0dGMGFDQmtQU0pOTkRrdU5UazNNeUF4TlRVdU5ESTFURFV3TGpNeE9ERWdNVFUzTGpBNU1rdzBNUzQwTWpBNUlERTJNQzQyT0RoRE16a3VOVFV6TWlBeE5qRXVORGcxSURNNExqQTRNVGNnTVRZeUxqazJJRE0zTGpNeU1qUWdNVFkwTGpjNU9FTXpOaTQxTmpNeElERTJOaTQyTXpjZ016WXVOVGMyTnlBeE5qZ3VOamt4SURNM0xqTTJNRE1nTVRjd0xqVXlRek00TGpFME16Z2dNVGN5TGpNME9DQXpPUzQyTXpRNElERTNNeTQ0TURVZ05ERXVOVEV5T0NBeE56UXVOVGM0UXpRekxqTTVNRGdnTVRjMUxqTTFNU0EwTlM0MU1EWWdNVGMxTGpNM055QTBOeTQwTURNNElERTNOQzQyTlRKTU5UWXVNekE0SURFM01TNHdOVEpNTlRjdU1ERTROU0F4TnpJdU56RTRURFE0TGpFeE5EUWdNVGMyTGpNeU5VTTBOaTQ1TXpreUlERTNOaTQ0TXlBME5TNDJOekU1SURFM055NHhNRElnTkRRdU16ZzNJREUzTnk0eE1qVkRORE11TVRBeU1TQXhOemN1TVRRNElEUXhMamd5TlRRZ01UYzJMamt5TVNBME1DNDJNekU0SURFM05pNDBOVGxETXprdU5ETTRNeUF4TnpVdU9UazJJRE00TGpNMU1pQXhOelV1TXpBMklETTNMalF6TmpZZ01UYzBMalF6UXpNMkxqVXlNVE1nTVRjekxqVTFOQ0F6TlM0M09UVTBJREUzTWk0MU1TQXpOUzR6TURFMUlERTNNUzR6TlRkRE16UXVPREEzTmlBeE56QXVNakExSURNMExqVTFOVGNnTVRZNExqazJPU0F6TkM0MU5qQTJJREUyTnk0M01qRkRNelF1TlRZMU5TQXhOall1TkRjeklETTBMamd5TnpFZ01UWTFMakl6T1NBek5TNHpNams1SURFMk5DNHdPVU16TlM0NE16STRJREUyTWk0NU5ESWdNell1TlRZMk9TQXhOakV1T1RBeUlETTNMalE0T1NBeE5qRXVNRE16UXpNNExqUXhNVElnTVRZd0xqRTJOQ0F6T1M0MU1ESTVJREUxT1M0ME9ESWdOREF1TnlBeE5Ua3VNREk0VERRNUxqVTVOek1nTVRVMUxqUXlOVm9pSUdacGJHdzlJaU13TUVFeE9VRWlMejRLUEhCaGRHZ2daRDBpVFRReExqYzNPRElnTVRZNExqY3pPVU0wTWk0d056Y3pJREUyT1M0ME16Y2dOREl1TlRFMU1TQXhOekF1TURjeElEUXpMakEyTmpnZ01UY3dMall3TlVNME15NDJNVGcwSURFM01TNHhNemtnTkRRdU1qY3pJREUzTVM0MU5qSWdORFF1T1Rrek1TQXhOekV1T0RVeFF6UTFMamN4TXpJZ01UY3lMakV6T1NBME5pNDBPRFE0SURFM01pNHlPRFlnTkRjdU1qWXpOeUF4TnpJdU1qZzFRelE0TGpBME1qVWdNVGN5TGpJNE15QTBPQzQ0TVRNMUlERTNNaTR4TXpNZ05Ea3VOVE15TkNBeE56RXVPRFF5VERVMUxqVTROelVnTVRZNUxqTTVOVXcxTVM0d01qVTJJREUxT0M0M05qSk1ORFF1T1RjMElERTJNUzR5TVRKRE5EUXVNalUxTWlBeE5qRXVOVEF5SURRekxqWXdNalFnTVRZeExqa3lOeUEwTXk0d05USTRJREUyTWk0ME5qTkROREl1TlRBek1pQXhOakl1T1RrNElEUXlMakEyTnpZZ01UWXpMall6TkNBME1TNDNOekE0SURFMk5DNHpNekpETkRFdU5EYzBNU0F4TmpVdU1ETXhJRFF4TGpNeU1pQXhOalV1TnpnZ05ERXVNekl6TXlBeE5qWXVOVE0yUXpReExqTXlORFVnTVRZM0xqSTVNaUEwTVM0ME56a3hJREUyT0M0d05ERWdOREV1TnpjNE1pQXhOamd1TnpNNVdrMDBPUzR4TVRNM0lERTJOUzQzTnpsRE5Ea3VNalkwSURFMk5pNHhNekVnTkRrdU1qZ3pPQ0F4TmpZdU5USTBJRFE1TGpFMk9UY2dNVFkyTGpnNE9VTTBPUzR3TlRVMUlERTJOeTR5TlRRZ05EZ3VPREUwTlNBeE5qY3VOVGNnTkRndU5EZzNOaUF4TmpjdU56Z3lRelE0TGpFMk1EZ2dNVFkzTGprNU5DQTBOeTQzTmpneklERTJPQzR3T0RrZ05EY3VNemMzTVNBeE5qZ3VNRFV5UXpRMkxqazROaUF4TmpndU1ERTBJRFEyTGpZeU1ESWdNVFkzTGpnME5pQTBOaTR6TkRJeklERTJOeTQxTnpaRE5EWXVNRFkwTXlBeE5qY3VNekEzSURRMUxqZzVNVFFnTVRZMkxqazFNU0EwTlM0NE5USTRJREUyTmk0MU56SkRORFV1T0RFME15QXhOall1TVRreUlEUTFMamt4TWpZZ01UWTFMamd4TVNBME5pNHhNekE1SURFMk5TNDBPVE5ETkRZdU16UTVNeUF4TmpVdU1UYzJJRFEyTGpZM05ESWdNVFkwTGprME1pQTBOeTR3TlRBeklERTJOQzQ0TXpGRE5EY3VOREkyTlNBeE5qUXVOeklnTkRjdU9ETXdOU0F4TmpRdU56TTVJRFE0TGpFNU16Y2dNVFkwTGpnNE5VTTBPQzQwTURBeUlERTJOQzQ1TmpnZ05EZ3VOVGczTnlBeE5qVXVNRGc1SURRNExqYzBOVFlnTVRZMUxqSTBNME0wT0M0NU1ETTFJREUyTlM0ek9UWWdORGt1TURJNE5pQXhOalV1TlRjNElEUTVMakV4TXpjZ01UWTFMamMzT1ZvaUlHWnBiR3c5SWlNd01FRXhPVUVpTHo0S1BIQmhkR2dnWkQwaVRUVTJMamt4TlRnZ09Ea3VORFk1TWt3MU5pNHhPRGd4SURreExqRXpOVGxNTkRjdU1qWXpOQ0E0Tnk0MU5qa3lRelExTGpNMU16a2dPRFl1T0RBMU5DQTBNeTR5TVRBeElEZzJMamd3T1RVZ05ERXVNekF6TnlBNE55NDFPREEyUXpNNUxqTTVOek1nT0RndU16VXhOeUF6Tnk0NE9EUTBJRGc1TGpneU5qWWdNemN1TURrM09DQTVNUzQyT0RBNVF6TTJMak14TVRJZ09UTXVOVE0xTWlBek5pNHpNVFUwSURrMUxqWXhOamtnTXpjdU1UQTVOU0E1Tnk0ME5qZ3lRek0zTGprd016VWdPVGt1TXpFNU5TQXpPUzQwTWpJMElERXdNQzQzT0RrZ05ERXVNek14T1NBeE1ERXVOVFV5VERVd0xqSTFOallnTVRBMUxqRXhNa3cwT1M0MU5EazFJREV3Tmk0M056bE1OREF1TmpJME9DQXhNRE11TWpFeVF6TTVMalExTWpnZ01UQXlMamMwTXlBek9DNHpPRGMwSURFd01pNHdOVFVnTXpjdU5EZzVOQ0F4TURFdU1UZzJRek0yTGpVNU1UVWdNVEF3TGpNeE55QXpOUzQ0TnpnMUlEazVMakk0TkRrZ016VXVNemt4TXlBNU9DNHhORGcxUXpNMExqUXdOelFnT1RVdU9EVXpOQ0F6TkM0ME1ESTJJRGt6TGpJM01qY2dNelV1TXpjNE1TQTVNQzQ1TnpReVF6TTJMak0xTXpVZ09EZ3VOamMxTnlBek9DNHlNamt6SURnMkxqZzBOellnTkRBdU5Ua3lPQ0E0TlM0NE9USXhRelF5TGprMU5qTWdPRFF1T1RNMk5pQTBOUzQyTVRNNElEZzBMamt6TWlBME55NDVPREE0SURnMUxqZzNPVE5NTlRZdU9URTFPQ0E0T1M0ME5qa3lXaUlnWm1sc2JEMGlJekF3UVRFNVFTSXZQZ284Y0dGMGFDQmtQU0pOTkRFdU5qazFOU0E1TXk0MU1USTBRelF4TGpNNU9DQTVOQzR5TVRFMUlEUXhMakkwTlRRZ09UUXVPVFl3T0NBME1TNHlORFkySURrMUxqY3hOek5ETkRFdU1qUTNPQ0E1Tmk0ME56TTRJRFF4TGpRd01qY2dPVGN1TWpJeU55QTBNUzQzTURJMElEazNMamt5TURsRE5ESXVNREF5TWlBNU9DNDJNVGt5SURReUxqUTBNRGtnT1RrdU1qVXpNaUEwTWk0NU9UTTBJRGs1TGpjNE5qVkRORE11TlRRMU9TQXhNREF1TXpJZ05EUXVNakF4TXlBeE1EQXVOelF5SURRMExqa3lNakVnTVRBeExqQXlPVXcxTUM0NU9EQTNJREV3TXk0ME5UWk1OVFV1TlRBeE5DQTVNaTQzT0RsTU5Ea3VORE0ySURrd0xqTTJNalJETkRndU56RTFPQ0E1TUM0d056UWdORGN1T1RRMElEZzVMamt5TmpRZ05EY3VNVFkwT1NBNE9TNDVNamhETkRZdU16ZzFPU0E0T1M0NU1qazJJRFExTGpZeE5EZ2dPVEF1TURnd015QTBOQzQ0T1RVNElEa3dMak0zTVRkRE5EUXVNVGMyT0NBNU1DNDJOak1nTkRNdU5USTBNU0E1TVM0d09Ea3lJRFF5TGprM05Ea2dPVEV1TmpJMU9VTTBNaTQwTWpVNElEa3lMakUyTWpVZ05ERXVPVGt4SURreUxqYzVPU0EwTVM0Mk9UVTFJRGt6TGpRNU9WWTVNeTQxTVRJMFdrMDBPUzR3TXpRMElEazJMalEwTlRkRE5EZ3VPVE00TVNBNU5pNDJOekE0SURRNExqYzVNVGNnT1RZdU9EY3lOQ0EwT0M0Mk1EVTNJRGszTGpBek5rTTBPQzQwTVRrMklEazNMakU1T1RjZ05EZ3VNVGs0TlNBNU55NHpNakV5SURRM0xqazFPRE1nT1RjdU16a3lRelEzTGpjeE9ERWdPVGN1TkRZeU55QTBOeTQwTmpRM0lEazNMalE0TURrZ05EY3VNakUyTkNBNU55NDBORFV5UXpRMkxqazJPREVnT1RjdU5EQTVOU0EwTmk0M016RWdPVGN1TXpJd09TQTBOaTQxTWpJeUlEazNMakU0TlRaRE5EWXVNekV6TkNBNU55NHdOVEEwSURRMkxqRXpPQ0E1Tmk0NE56RTRJRFEyTGpBd09EY2dPVFl1TmpZeU9VTTBOUzQ0TnprMElEazJMalExTkNBME5TNDNPVGswSURrMkxqSXhPVGdnTkRVdU56YzBOQ0E1TlM0NU56Y3pRelExTGpjME9UUWdPVFV1TnpNME55QTBOUzQzT0RBeElEazFMalE0T1RnZ05EVXVPRFkwTWlBNU5TNHlOakF5UXpRMUxqazBPRE1nT1RVdU1ETXdOU0EwTmk0d09ETTRJRGswTGpneU1UZ2dORFl1TWpZd09TQTVOQzQyTkRsRE5EWXVORFU0TXlBNU5DNDBOVFkySURRMkxqY3dNVFVnT1RRdU16RTBOU0EwTmk0NU5qa3hJRGswTGpJek5UTkRORGN1TWpNMk5pQTVOQzR4TlRZeElEUTNMalV5TURJZ09UUXVNVFF5TXlBME55NDNPVFEySURrMExqRTVOVU0wT0M0d05qZzVJRGswTGpJME56Z2dORGd1TXpJMU55QTVOQzR6TmpVMUlEUTRMalUwTVRrZ09UUXVOVE0zTjBNME9DNDNOVGd5SURrMExqY3hJRFE0TGpreU56UWdPVFF1T1RNeE5DQTBPUzR3TXpRMElEazFMakU0TWpSRE5Ea3VNVElnT1RVdU16Z3lOaUEwT1M0eE5qUXhJRGsxTGpVNU56SWdORGt1TVRZME1TQTVOUzQ0TVRSRE5Ea3VNVFkwTVNBNU5pNHdNekE0SURRNUxqRXlJRGsyTGpJME5UVWdORGt1TURNME5DQTVOaTQwTkRVM1dpSWdabWxzYkQwaUl6QXdRVEU1UVNJdlBnbzhjR0YwYUNCa1BTSk5NVEE1TGprd05DQTBPQzR5TWpJNFRERXdPQzR4T0RnZ05EZ3VPVEU1TlV3eE1EUXVORGd4SURRd0xqSTJPVFZETVRBMExqRXdNaUF6T1M0ek16TTVJREV3TXk0MU16UWdNemd1TkRneE1TQXhNREl1T0RFeElETTNMamMyTVVNeE1ESXVNRGc1SURNM0xqQTBNRGtnTVRBeExqSXlOU0F6Tmk0ME5qZ2dNVEF3TGpJM01pQXpOaTR3TnpVM1F6azVMak14T0RZZ016VXVOamd6TlNBNU9DNHlPVFF5SURNMUxqUTNPVGNnT1RjdU1qVTROeUF6TlM0ME56WTFRemsyTGpJeU16TWdNelV1TkRjek15QTVOUzR4T1RjMklETTFMalkzTURVZ09UUXVNalF4TmlBek5pNHdOVFk0UXprekxqSTROVFlnTXpZdU5EUXpNU0E1TWk0ME1UZzFJRE0zTGpBeE1EWWdPVEV1TmpreElETTNMamN5TmpKRE9UQXVPVFl6TmlBek9DNDBOREUzSURrd0xqTTVNRE1nTXprdU1qa3hJRGt3TGpBd05Ea2dOREF1TWpJME1rTTRPUzQyTVRrMElEUXhMakUxTnpRZ09Ea3VOREk1TkNBME1pNHhOVFU1SURnNUxqUTBOakVnTkRNdU1UWXhNME00T1M0ME5qSTNJRFEwTGpFMk5qY2dPRGt1TmpnMU55QTBOUzR4TlRnNElEa3dMakV3TVRnZ05EWXVNRGM1TlV3NU15NDRNVFU1SURVMExqY3hPVFJNT1RJdU1EazVOaUExTlM0ME1EazBURGc0TGpNNU5UZ2dORFl1TnpZNU5VTTROeTQ0T0RZMUlEUTFMall6TURFZ09EY3VOakUxTlNBME5DNDBNRE0zSURnM0xqVTVPRFlnTkRNdU1UWXhOME00Tnk0MU9ERTRJRFF4TGpreE9UWWdPRGN1T0RFNU5DQTBNQzQyT0RZM0lEZzRMakk1TnpjZ016a3VOVE0wTjBNNE9DNDNOellnTXpndU16Z3lOeUE0T1M0ME9EVTBJRE0zTGpNek5EVWdPVEF1TXpnME5pQXpOaTQwTlRFeFF6a3hMakk0TXpnZ016VXVOVFkzTnlBNU1pNHpOVFVnTXpRdU9EWTJOeUE1TXk0MU16VTNJRE0wTGpNNE9VTTVOQzQzTVRZMUlETXpMamt4TVRNZ09UVXVPVGd6TXlBek15NDJOall6SURrM0xqSTJNalFnTXpNdU5qWTRNME01T0M0MU5ERTFJRE16TGpZM01ETWdPVGt1T0RBM05TQXpNeTQ1TVRreklERXdNQzQ1T0RjZ016UXVOREF3TjBNeE1ESXVNVFkySURNMExqZzRNaklnTVRBekxqSXpOU0F6TlM0MU9EWTFJREV3TkM0eE16RWdNell1TkRjeU4wTXhNRFV1TURJM0lETTNMak0xT0RrZ01UQTFMamN6TXlBek9DNDBNRGt6SURFd05pNHlNRGdnTXprdU5UWXlPVXd4TURrdU9UQTBJRFE0TGpJeU1qaGFJaUJtYVd4c1BTSWpNREJCTVRsQklpOCtDanh3WVhSb0lHUTlJazA1Tmk0eE9UZ3lJRFF3TGpZeU5qSkRPVFV1TkRjNUlEUXdMamt4TmpZZ09UUXVPREkxT0NBME1TNHpOREU0SURrMExqSTNOVGtnTkRFdU9EYzNOVU01TXk0M01qWXhJRFF5TGpReE16SWdPVE11TWprd015QTBNeTR3TkRnNElEa3lMams1TXpVZ05ETXVOelE0TVVNNU1pNDJPVFkzSURRMExqUTBOelFnT1RJdU5UUTBOeUEwTlM0eE9UWTNJRGt5TGpVME5qTWdORFV1T1RVelF6a3lMalUwTnpnZ05EWXVOekE1TkNBNU1pNDNNREk0SURRM0xqUTFPQ0E1TXk0d01ESTFJRFE0TGpFMU5qSk1PVFV1TlRJeUlEVTBMakF6TmpGTU1UQTJMalEzTWlBME9TNDJNRFl4VERFd015NDVOVElnTkRNdU56STJNa014TURNdU5qVXpJRFF6TGpBeU56Z2dNVEF6TGpJeE5TQTBNaTR6T1RNMUlERXdNaTQyTmpRZ05ERXVPRFU1TlVNeE1ESXVNVEV5SURReExqTXlOVFlnTVRBeExqUTFPQ0EwTUM0NU1ESTBJREV3TUM0M016Z2dOREF1TmpFME1rTXhNREF1TURFM0lEUXdMak15TmlBNU9TNHlORFU1SURRd0xqRTNPRFFnT1RndU5EWTNJRFF3TGpFM09UbERPVGN1TmpnNE1TQTBNQzR4T0RFMElEazJMamt4TnpFZ05EQXVNek14T1NBNU5pNHhPVGd5SURRd0xqWXlNamxXTkRBdU5qSTJNbHBOT1RrdU1qUTJNeUEwTnk0M05EazFRems0TGprek16RWdORGN1T0RnZ09UZ3VOVGczSURRM0xqa3hOamtnT1RndU1qVXlNU0EwTnk0NE5UVTNRemszTGpreE56RWdORGN1TnprME5DQTVOeTQyTURnMklEUTNMall6TnpjZ09UY3VNelkxTnlBME55NDBNRFUxUXprM0xqRXlNamdnTkRjdU1UY3pOQ0E1Tmk0NU5UWTJJRFEyTGpnM05qSWdPVFl1T0RnNE15QTBOaTQxTlRKRE9UWXVPRElnTkRZdU1qSTNOeUE1Tmk0NE5USTJJRFExTGpnNU1URWdPVFl1T1RneUlEUTFMalU0TkRsRE9UY3VNVEV4TkNBME5TNHlOemc0SURrM0xqTXpNVGdnTkRVdU1ERTJPU0E1Tnk0Mk1UVWdORFF1T0RNeU9FTTVOeTQ0T1RneUlEUTBMalkwT0RjZ09UZ3VNak14TlNBME5DNDFOVEEzSURrNExqVTNNak1nTkRRdU5UVXhNa001T0M0NU1UTXhJRFEwTGpVMU1UY2dPVGt1TWpRMk1TQTBOQzQyTlRBM0lEazVMalV5T0RjZ05EUXVPRE0xTmtNNU9TNDRNVEUwSURRMUxqQXlNRFVnTVRBd0xqQXpNU0EwTlM0eU9ETWdNVEF3TGpFMU9TQTBOUzQxT0RrMVF6RXdNQzR5TkRZZ05EVXVOemc1TlNBeE1EQXVNamtnTkRZdU1EQTBNU0F4TURBdU1qa3hJRFEyTGpJeU1VTXhNREF1TWpreUlEUTJMalF6TnpnZ01UQXdMakkwT1NBME5pNDJOVEkzSURFd01DNHhOalFnTkRZdU9EVXpNME14TURBdU1EYzVJRFEzTGpBMU16a2dPVGt1T1RVME5TQTBOeTR5TXpZeklEazVMamM1TnlBME55NHpPVEF4UXprNUxqWXpPVFlnTkRjdU5UUXpPU0E1T1M0ME5USTBJRFEzTGpZMk5pQTVPUzR5TkRZeklEUTNMamMwT1RWYUlpQm1hV3hzUFNJak1EQkJNVGxCSWk4K0NqeHdZWFJvSUdROUlrMHhOVFl1TkRBNUlERTRPUzR6TURKRE1UUTVMalkyTlNBeE9URXVORFExSURFME1pNDJORGtnTVRreUxqWTNPU0F4TXpVdU5UWWdNVGt5TGprMk9FTXhNamd1TWpJeElERTVNeTR5TnpZZ01USXdMamczTkNBeE9USXVOakF6SURFeE15NDNNalVnTVRrd0xqazJPRU14TURZdU5UY3lJREU0T1M0ek56VWdPVGt1T0RRek5TQXhPRFl1TXpReUlEa3pMamszTXpnZ01UZ3lMakEyTlVNNE55NDRORGdnTVRjM0xqUTNOeUE0TWk0NU1UYzVJREUzTVM0MU5UWWdOemt1TlRneElERTJOQzQzTnpsRE56VXVOVFkzTVNBeE5UWXVNekU1SURjekxqVTJOVFlnTVRRM0xqQTVNU0EzTXk0M01qVWdNVE0zTGpjM09VTTNNeTQwTXpNMElERXlPUzQxTlRJZ056UXVPREF4TWlBeE1qRXVNelE1SURjM0xqYzFNVFFnTVRFekxqWXpNa000TWk0NE9EVXlJREV3TUM0eU1pQTVNeTR5TWpJNUlEZzVMakk1TXprZ01UQTJMalUxTVNBNE15NHhPVEkyUXpFeE15NHhOelFnT0RBdU1EazVPU0F4TWpBdU1qVXlJRGM0TGpBeU15QXhNamN1TlRNeElEYzNMakF6TmtNeE16VXVNRFUySURjMkxqQXhNRFlnTVRReUxqWTVOU0EzTmk0d05EZzRJREUxTUM0eU1TQTNOeTR4TkRrMFF6RTFOeTQ1T1RVZ056Z3VNamMxTWlBeE5qVXVOVGcySURnd0xqUXlOek1nTVRjeUxqYzNNaUE0TXk0MU5EWkRNVGN4TGpRMk5TQTRPQzQ1TVRreklERTNNQzR5TURjZ09UUXVNamc1TWlBeE5qZ3VPVGsySURrNUxqWTFOVGhETVRZM0xqYzROaUF4TURVdU1ESXlJREUyTmk0Mk1EWWdNVEV3TGpRMk55QXhOalV1TkRVM0lERXhOUzQ1T0RsV01URTJMakl5Tmt3eE5qQXVNek01SURFeE5pNDBOakpNTVRRMUxqUTFPU0F4TVRZdU5qazVRekUwTkM0eE5Ua2dNVEUyTGpZNU9TQXhORE11TlRBNUlERXhOUzQ1TVNBeE5ETXVOVEE1SURFeE5DNHpNekpXTVRBeExqYzROa014TkRNdU5URTFJREV3TVM0ME5qZ2dNVFF6TGpZd09DQXhNREV1TVRVM0lERTBNeTQzT0NBeE1EQXVPRGcyUXpFME15NDVOVEVnTVRBd0xqWXhOU0F4TkRRdU1UazBJREV3TUM0ek9UUWdNVFEwTGpRNE5DQXhNREF1TWpRMlF6RTBOUzR4T1RFZ09Ua3VPRFUxTkNBeE5EVXVPVGtnT1RrdU5qVXdNU0F4TkRZdU9EQXpJRGs1TGpZMU1ERkRNVFEzTGpZeE5pQTVPUzQyTlRBeElERTBPQzQwTVRVZ09Ua3VPRFUxTkNBeE5Ea3VNVEl5SURFd01DNHlORFpETVRRNUxqUXhNU0F4TURBdU16azFJREUwT1M0Mk5UUWdNVEF3TGpZeE5pQXhORGt1T0RJMUlERXdNQzQ0T0RkRE1UUTVMams1TmlBeE1ERXVNVFU0SURFMU1DNHdPU0F4TURFdU5EWTRJREUxTUM0d09UY2dNVEF4TGpjNE5sWXhNVEF1TXpFeVNERTFPQzR6T1V3eE5UTXVPVGc1SURnNExqYzFOVGxETVRVeExqQTBNeUE0Tnk0Mk9EYzVJREUwTnk0NU56TWdPRFl1T1RjeU5pQXhORFF1T0RRNElEZzJMall5TlRsRE1UUXhJRGcyTGpFMU1qTWdNVE0zTGpFd05TQTROaTR4TlRJeklERXpNeTR5TlRZZ09EWXVOakkxT1VNeE1qa3VNRFF6SURnM0xqRTBOREVnTVRJMExqa3pNeUE0T0M0eU5qYzFJREV5TVM0d05pQTRPUzQ1TlRrelF6RXhOaTQ0TnlBNU1TNDNOemtnTVRFekxqRXlOaUE1TkM0ME5ESXlJREV4TUM0d056WWdPVGN1TnpjeU5VTXhNRFl1TlRNeklERXdNUzQzTXpVZ01UQXpMamd3TXlBeE1EWXVNekU0SURFd01pNHdNeUF4TVRFdU1qYzJRems1TGpjME56Z2dNVEUzTGpneklEazRMalkzTVRnZ01USTBMamN5TXlBNU9DNDROVEUxSURFek1TNDJNemxET1RndU5ERTJNeUF4TXprdU56RTFJRGs1TGpjME56WWdNVFEzTGpjNE9TQXhNREl1TnpVNElERTFOUzR6TWpsRE1UQTFMakE0TWlBeE5qQXVPVEVnTVRBNExqZ3dPU0F4TmpVdU9ETTRJREV4TXk0MU9UZ2dNVFk1TGpZMk1rTXhNVGd1TURBMklERTNNeTR3TXpVZ01USXpMakV5TlNBeE56VXVOREkxSURFeU9DNDFPVEVnTVRjMkxqWTJNa014TXpRdU1ETWdNVGMzTGpreE1TQXhNemt1TlRreklERTNPQzQxT0RFZ01UUTFMakU0TVNBeE56Z3VOall5UXpFMU1DNHpOVGNnTVRjNExqYzJJREUxTlM0MU16TWdNVGM0TGpRNE15QXhOakF1TmpZMUlERTNOeTQ0TXpKRE1UWTFMalEzTVNBeE56Y3VNakF6SURFMk9TNDBNVFFnTVRjMkxqWTBOeUF4TnpJdU5EazBJREUzTmk0eE5qVk1NVGN6TGpJek1pQXhPREV1TXpjMVF6RTJPQzR3TmpnZ01UZzBMamd5TmlBeE5qSXVNemsySURFNE55NDBPVGdnTVRVMkxqUXdPU0F4T0RrdU16QXlXaUlnWm1sc2JEMGlJekF3UVRFNVFTSXZQZ284Y0dGMGFDQmtQU0pOTnpJdU1EZzNPQ0F6TURFdU56azNRelk0TGpJNE9DQXlPRGN1TlRRM0lEVTVMamczTVRNZ01qYzNMall6TVNBMU1DNHhNVGt6SURJM055NDJNekZETXpZdU9EQTNPQ0F5TnpjdU5qTXhJREkxTGprNU5URWdNamsyTGpBNElESTFMams1TlRFZ016RTRMamd4TkVNeU5TNDVPRFE0SURNME1TNDFOQ0F6Tmk0M09UYzFJRE0xT1M0NU9UY2dOVEF1TVRBNUlETTFPUzQ1T1RkRE5qQXVPRFUyTkNBek5Ua3VPVGszSURZNUxqazNNelFnTXpRM0xqazNOeUEzTXk0d09EWTNJRE16TVM0ek9VZzJNQzQzTWprMFF6VTRMalkwTlRnZ016UXhMakUwTnlBMU5DNHpNelExSURNME55NDROaUEwT1M0ek5UY3pJRE0wTnk0NE5rTTBNaTR6TlRRNElETTBOeTQ0TmlBek5pNDJOVFkzSURNek5DNDFOVGNnTXpZdU5qVTJOeUF6TVRndU1UWTNRek0yTGpZMU5qY2dNekF4TGpjNE5DQTBNaTR6TlRFMElESTRPQzQwT0RFZ05Ea3VNelUzTXlBeU9EZ3VORGd4UXpVekxqYzRNVGtnTWpnNExqUTRNU0ExTnk0Mk56YzRJREk1TXk0M056UWdOVGt1T1RVek5pQXpNREV1T0RFMFREY3lMakE0TnpnZ016QXhMamM1TjFvaUlHWnBiR3c5SWlOQk5URXhOVUlpTHo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazA1TlM0eU5UYzNJRE16TlM0ek16ZElOek11TURnMk4wTTNNeTR3T0RZM0lETTBPQzQwTXpjZ09ESXVPVEF6T1NBek5Ua3VNRGMzSURrMExqazVNelFnTXpVNUxqQTNOME14TURjdU1EZ3pJRE0xT1M0d056Y2dNVEUyTGprZ016UTRMalF6TnlBeE1UWXVPU0F6TXpVdU16TTNTREV3TkM0eVZqTXpPQzR3TkRkSU9EVXVOemd6T0ZZek16VXVNemhNT1RVdU1qVTNOeUF6TXpVdU16TTNXazAzTXk0d09EWTNJREk0Tmk0d01UUklPRFV1TnpnM01sWXpNelV1TXpRM1NEY3pMakE0TmpkV01qZzJMakF4TkZwTk1UQTBMaklnTWprd0xqUTFORWd4TVRZdU9WWXpNelV1TXpNM1NERXdOQzR5VmpJNU1DNDBOVFJhVFRFd05DNHlJRE16T0M0d05VTXhNRFF1TWpnM0lETTBNQzQxTVNBeE1ETXVNelkzSURNME1pNDVNRE1nTVRBeExqWTBJRE0wTkM0M01EWkRPVGt1T1RFME1pQXpORFl1TlRBNElEazNMalV5TWprZ016UTNMalUzTXlBNU5DNDVPU0F6TkRjdU5qWTNRemt5TGpRMU56UWdNelEzTGpVM01TQTVNQzR3TmpZNUlETTBOaTQxTURVZ09EZ3VNelF4TmlBek5EUXVOekF6UXpnMkxqWXhOaklnTXpReUxqa2dPRFV1TmprMk5pQXpOREF1TlRBM0lEZzFMamM0TXpnZ016TTRMakEwTjBneE1EUXVNbFl6TXpndU1EVmFJaUJtYVd4c1BTSWpRVFV4TVRWQ0lpOCtDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk1USXlMams1TXlBek5UY3VOVE16U0RFek15NHhOVU14TXpVdU1qa3lJRE0xTWk0NU5TQXhNelF1TXpFMElETTBNUzQ1TWpNZ01UTTRMakl6SURNME1pNDNNemRJTVRRNExqTTVNVU14TlRNdU1USXhJRE0wTWk0Mk9ETWdNVFV4TGpVME9TQXpORGd1TnpjZ01UVXpMalEzTVNBek5qQklNVFl6TGpZeU9FTXhOamt1TnpZeUlETTBNUzR4TmpNZ01UVTJMalkwTXlBeU9UUXVNVGczSURFME15NHpNVEVnTWprekxqUXhOME14TXpVdU1EWTJJREk1TkM0MU5UUWdNVEUzTGpJMk5DQXpNemN1T0RVM0lERXlNaTQ1T1RNZ016VTNMalV6TTFwTk1UUXpMak14TVNBek1UTXVNVFEwUXpFME1DNDNNRFVnTXpFMExqZzVOQ0F4TXprdU1URTJJRE14T1M0NU1qY2dNVE00TGpJeklETXlOeTQ1TkVNeE16Z3VPRGM1SURNeU9DNDJNVGdnTVRNNUxqWTJOU0F6TWprdU1UVTVJREUwTUM0MU16a2dNekk1TGpVeU9VTXhOREV1TkRFeklETXlPUzQ0T1RnZ01UUXlMak0xTmlBek16QXVNRGc1SURFME15NHpNRGtnTXpNd0xqQTRPVU14TkRRdU1qWXlJRE16TUM0d09Ea2dNVFExTGpJd05TQXpNamt1T0RrNElERTBOaTR3TnprZ016STVMalV5T1VNeE5EWXVPVFV6SURNeU9TNHhOVGtnTVRRM0xqY3pPQ0F6TWpndU5qRTRJREUwT0M0ek9EY2dNekkzTGprMFF6RTBOeTQ0TVRFZ016SXdMakk0TkNBeE5EWXVNVGNnTXpFMUxqUWdNVFF6TGpNeE1TQXpNVE11TVRRMFdpSWdabWxzYkQwaUkwRTFNVEUxUWlJdlBnbzhjR0YwYUNCa1BTSk5NVGMyTGpBM05TQXlPREV1TURnMFNERXlPQzR3TnpOV01qa3dMalExTVVneE56WXVNRGMxVmpNMU9DNHlOek5JTVRnMUxqY3lWakk1TUM0ME5URklNakE1TGpNek5sWXlPREV1TURnMFNERTNOaTR3TnpWYUlpQm1hV3hzUFNJalFUVXhNVFZDSWk4K0NqeHdZWFJvSUdROUlrMHlNVFF1TkRFMklETTBPQzQ1VmpJNE1TNHdPRFJJTWpJMExqQTJOVll6TkRndU9VZ3lORFF1T0RreFZqTTFPQzR5TjBneU1UUXVOREUyVmpNME9DNDVXaUlnWm1sc2JEMGlJMEUxTVRFMVFpSXZQZ284TDNOMlp6NEtcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCcFpEMGlZVE16T0dVM05UVXRaalpqTnkwME5XRXdMVGhsWXpjdE1HVTRZVGt5WlRNelkyWTJJaUJrWVhSaExXNWhiV1U5SWt4aGVXVnlJREVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZDJsa2RHZzlJamd4Tmk0eU1qSXpOeUlnYUdWcFoyaDBQU0kzTURBdU5UazNJaUIyYVdWM1FtOTRQU0l3SURBZ09ERTJMakl5TWpNM0lEY3dNQzQxT1RjaVBqeHdZWFJvSUdROUlrMDNOekl1TURJd09TdzNPVGN1T0RrMU1UaGhNelF1T0RFME1qWXNNelF1T0RFME1qWXNNQ3d3TERFdE1UWXVOelExTmpFdE5DNHpNRGcxT1V3eU56Z3VPRFkzTERVek15NHdOREEyT1dFek5TNHdNemswTWl3ek5TNHdNemswTWl3d0xEQXNNUzB4TXk0NU1UTTNMVFEzTGpVd01UUTNURFEyTmk0d01EQTJNeXd4TVRjdU9USTBZVE0wTGprNU9UUTFMRE0wTGprNU9UUTFMREFzTUN3eExEUTNMalV3TVRjeExURXpMamt4TXpVNGJEUTNOaTQwTURneUxESTJNQzQxTkRVNVlUTTFMakF6T1RFekxETTFMakF6T1RFekxEQXNNQ3d4TERFekxqa3hNemd5TERRM0xqVXdNVFEzVERnd01pNDNOemNzTnpjNUxqWTNNMkV6TkM0M056RTBMRE0wTGpjM01UUXNNQ3d3TERFdE1qQXVPRFk1TVRRc01UWXVOemswT1RKQk16VXVNVFEzTERNMUxqRTBOeXd3TERBc01TdzNOekl1TURJd09TdzNPVGN1T0RrMU1UaGFiUzB4TXk0NE5qWTNMVGt1TlRjeU1qZGhNamt1TURBd056a3NNamt1TURBd056a3NNQ3d3TERBc016a3VNelU0TmpRdE1URXVOVEk0T0V3NU9UZ3VOVFl3TWl3ME1Ea3VNVGM0T0RkQk1qa3VNRE16TkRVc01qa3VNRE16TkRVc01Dd3dMREFzT1RnM0xqQXpNVFkwTERNMk9TNDRNa3cxTVRBdU5qSXpORFFzTVRBNUxqSTNOREE1WVRJNUxqQXdNRGd4TERJNUxqQXdNRGd4TERBc01Dd3dMVE01TGpNMU9EWTFMREV4TGpVeU9EaE1NamN3TGpJeE56UXpMRFE0T0M0ME1UZ3hNMEV5T1M0d016TXpOU3d5T1M0d016TXpOU3d3TERBc01Dd3lPREV1TnpRMkxEVXlOeTQzTnpkYUlpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TVRreExqZzRPRGd5SUMwNU9TNDNNREUxS1NJZ1ptbHNiRDBpSTJZeVpqSm1NaUl2UGp4d1lYUm9JR1E5SWswM09ERXVPRFEwTVRRc05qWTVMak15TkRnM1lUTXlMamN3TlRZM0xETXlMamN3TlRZM0xEQXNNQ3d4TFRFMUxqWTRNall5TFRRdU1ERTJOa3d6T0RBdU9UazVNVGNzTkRVMExqWTJORGN4WVRNeUxqUTJPVFEzTERNeUxqUTJPVFEzTERBc01Dd3hMVEV5TGpreE9Ua3lMVFEwTGpFd09EUk1ORGc0TGpFMU1Td3hPVEV1TURBMVlUTXlMalE1TmprekxETXlMalE1TmprekxEQXNNQ3d4TERRMExqRXdPRFkxTFRFeUxqa3hPVGt5VERreE55NDBNakl5Tml3ek9EZ3VOekk0TmpoaE16SXVORGszTlRnc016SXVORGszTlRnc01Dd3dMREVzTVRJdU9URTVPVE1zTkRRdU1UQTRNemxzTFM0ME16ZzNNeTB1TWpNNU56UXVORE00TnpNdU1qTTVOelJNT0RFd0xqSTNNRFF4TERZMU1pNHpPRGd6TkVFek1pNHpOalF6TERNeUxqTTJORE1zTUN3d0xERXNOemd4TGpnME5ERTBMRFkyT1M0ek1qUTROMW9pSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtDMHhPVEV1T0RnNE9ESWdMVGs1TGpjd01UVXBJaUJtYVd4c1BTSWpaakptTW1ZeUlpOCtQSEJoZEdnZ1pEMGlUVGMyT1M0NE9EZzRNaXczT1RjdU56azROV2d0TlRRellUTXlMalV6TmpreUxETXlMalV6TmpreUxEQXNNQ3d4TFRNeUxqVXRNekl1TlhZdE5ERTVZVE15TGpVek5qa3lMRE15TGpVek5qa3lMREFzTUN3eExETXlMalV0TXpJdU5XZzFORE5oTXpJdU5UTTJPRFVzTXpJdU5UTTJPRFVzTUN3d0xERXNNekl1TlN3ek1pNDFkalF4T1VFek1pNDFNelk0TlN3ek1pNDFNelk0TlN3d0xEQXNNU3czTmprdU9EZzRPRElzTnprM0xqYzVPRFZhSWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3RNVGt4TGpnNE9EZ3lJQzA1T1M0M01ERTFLU0lnWm1sc2JEMGlJMlptWmlJdlBqeHdZWFJvSUdROUlrMDNOamt1T0RnNE9ESXNPREF3TGpJNU9EVm9MVFUwTTJFek5TNHdNemswTnl3ek5TNHdNemswTnl3d0xEQXNNUzB6TlMwek5YWXROREU1WVRNMUxqQXpPVFEzTERNMUxqQXpPVFEzTERBc01Dd3hMRE0xTFRNMWFEVTBNMkV6TlM0d016azBOeXd6TlM0d016azBOeXd3TERBc01Td3pOU3d6TlhZME1UbEJNelV1TURNNU5EY3NNelV1TURNNU5EY3NNQ3d3TERFc056WTVMamc0T0RneUxEZ3dNQzR5T1RnMVdtMHROVFF6TFRRNE0yRXlPUzR3TXpJM05Td3lPUzR3TXpJM05Td3dMREFzTUMweU9Td3lPWFkwTVRsaE1qa3VNRE15TnpVc01qa3VNRE15TnpVc01Dd3dMREFzTWprc01qbG9OVFF6WVRJNUxqQXpNamMyTERJNUxqQXpNamMyTERBc01Dd3dMREk1TFRJNWRpMDBNVGxoTWprdU1ETXlOellzTWprdU1ETXlOellzTUN3d0xEQXRNamt0TWpsYUlpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TVRreExqZzRPRGd5SUMwNU9TNDNNREUxS1NJZ1ptbHNiRDBpSTJVMlpUWmxOaUl2UGp4d1lYUm9JR1E5SWswMU9ESXVPRGt4TlRZc05EVXhMalU0Tm1FME1DNDNOak0xT0N3ME1DNDNOak0xT0N3d0xEQXNNQzB6TWk0MU5URXhOaXd4Tmk0eE9EVTVNeXd5Tmk0NE16azNOaXd5Tmk0NE16azNOaXd3TERBc01DMHpOeTQwTkRreE1pd3lOQzQyTkRjMU4wZzJNak11TnpJMU1EVkJOREF1T0RNek5ESXNOREF1T0RNek5ESXNNQ3d3TERBc05UZ3lMamc1TVRVMkxEUTFNUzQxT0RaYUlpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TVRreExqZzRPRGd5SUMwNU9TNDNNREUxS1NJZ1ptbHNiRDBpSTJVMlpUWmxOaUl2UGp4amFYSmpiR1VnWTNnOUlqRTBPQzR4T1RZMk9TSWdZM2s5SWpRME5TNDVOakF6TmlJZ2NqMGlOalV1TnpVM01qY2lJR1pwYkd3OUlpTmhNekU1TldJaUx6NDhjR0YwYUNCa1BTSk5OekkxTGpJME9EWTRMRFk0TVM0eE56ZzFNV0V6TVM0NE56Z3hNU3d6TVM0NE56Z3hNU3d3TERBc01TMDNMak0xT1RnMkxqZzFhQzAwTXpsaE16RXVPRGMwT1RJc016RXVPRGMwT1RJc01Dd3dMREV0TVRVdU5EWXRNeTQ1TjJ3eExqRTJPVGt5TFRFdU5qZ3NORGd1T1RndE56QXVOVE1zTnpJdU5UZ3dNRGd0TVRBMExqUTVMREV1TURZdE1TNDFNeXd4TVM0ME1UazVNeTB4Tmk0ME5HRTRMak16TmprekxEZ3VNek0yT1RNc01Dd3dMREVzTVRNdU56QXdNVGtzTUd3ek55NDVNems1TkN3MU5DNDJNWFl1TURGc01qSXVNekU1T0RNc016SXVNVFFzTlRNdU1qZ3dNamNzTnpZdU55dzRNQzQ0TURrMU55MHhNVFV1TXpWaE9DNHpORGM0TWl3NExqTTBOemd5TERBc01Dd3hMREV6TGpZNE1ERTRMREJzTlRFdU9ETTVPRFFzTnpNdU9Ua3NNaTQ1T0N3MExqSTFXaUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xURTVNUzQ0T0RnNE1pQXRPVGt1TnpBeE5Ta2lJR1pwYkd3OUlpTXhZekprTTJRaUx6NDhjR0YwYUNCa1BTSk5ORGsxTGpZeE9EUTRMRFV4T1M0M05qZ3dOVUUxTUM0eU9USTNNU3cxTUM0eU9USTNNU3d3TERBc01DdzBOVFV1TkRVNExEVXpPUzQzTXpjM0xETXpMakV4TkN3ek15NHhNVFFzTUN3d0xEQXNOREE1TGpJMU5EVXNOVGN3TGpFME4yZ3hNell1TnpRelFUVXdMak0zT0Rrc05UQXVNemM0T1N3d0xEQXNNQ3cwT1RVdU5qRTRORGdzTlRFNUxqYzJPREExV2lJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9MVEU1TVM0NE9EZzRNaUF0T1RrdU56QXhOU2tpSUdacGJHdzlJaU5qWTJNaUx6NDhjR0YwYUNCa1BTSk5OekUzTGpnNE9EZ3lMRFk0TXk0d01qZzBPR2d0TkRNNVlUTXlMamszTURBM0xETXlMamszTURBM0xEQXNNQ3d4TFRNekxUTXpWak01T1M0M09EZzNNMkV6TXk0d016Y3pOQ3d6TXk0d016Y3pOQ3d3TERBc01Td3pNeTB6TTJnME16bGhNek11TURNM016UXNNek11TURNM016UXNNQ3d3TERFc016TXNNek5XTmpVd0xqQXlPRFE0WVRNeUxqazJNakV4TERNeUxqazJNakV4TERBc01Dd3hMVE16TERNeldtMHRORE01TFRNeE5DNHlNemszTldFek1TNHdNelV5TERNeExqQXpOVElzTUN3d0xEQXRNekVzTXpGV05qVXdMakF5T0RRNFlUTXdMamszTURjM0xETXdMamszTURjM0xEQXNNQ3d3TERNeExETXhhRFF6T1dFek1DNDVOak0zTERNd0xqazJNemNzTUN3d0xEQXNNekV0TXpGV016azVMamM0T0RjellUTXhMakF6TlRJeExETXhMakF6TlRJeExEQXNNQ3d3TFRNeExUTXhXaUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb0xURTVNUzQ0T0RnNE1pQXRPVGt1TnpBeE5Ta2lJR1pwYkd3OUlpTXhZekprTTJRaUx6NDhMM04yWno0S1wiIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcblxuaW1wb3J0IGdldE1lZGlhU291cmNlIGZyb20gJ0AvdXRpbHMvZ2V0LW1lZGlhLXNvdXJjZSc7XG5cbkNpcmNsZUF2YXRhci5wcm9wVHlwZXMgPSB7XG4gIGF2YXRhcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuQ2lyY2xlQXZhdGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXZhdGFyOiBudWxsLFxuICBzaXplOiAnMzInXG59O1xuXG5sZXQgc3R5bGVzID0ge1xuICB0YWlsd2luZDoge1xuICAgIGZyYW1lOiBgXG4gICAgICBib3JkZXItNFxuICAgICAgYm9yZGVyLWFjY2VudFxuICAgICAgbWluLXctbWluXG4gICAgICBwLTJcbiAgICAgIHJvdW5kZWQtZnVsbFxuICAgICAgc2hhZG93XG4gICAgYCxcbiAgICBjb250YWluZXI6IGBcbiAgICAgIG92ZXJmbG93LWhpZGRlblxuICAgICAgcm91bmRlZC1mdWxsXG4gICAgYCxcbiAgICBnZW5lcmljOiB7XG4gICAgICBpbWFnZTogYFxuICAgICAgICBtYXgtaC1mdWxsXG4gICAgICAgIG1heC13LWZ1bGxcbiAgICAgIGAsXG4gICAgICBub0F2YXRhcjogYFxuICAgICAgICBiZy1zb2Z0XG4gICAgICAgIGZsZXhcbiAgICAgICAgZmxleC1ub3dyYXBcbiAgICAgICAgZmxleC1yb3dcbiAgICAgICAgaXRlbXMtY2VudGVyXG4gICAgICAgIGp1c3RpZnktY2VudGVyXG4gICAgICAgIHRleHQtYWNjZW50XG4gICAgICBgXG4gICAgfSxcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2lyY2xlQXZhdGFyKHsgYXZhdGFyLCBzaXplIH0pIHtcbiAgY29uc3QgZ2V0Q29udGFpbmVyU3R5bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgICAgICR7c3R5bGVzLnRhaWx3aW5kLmNvbnRhaW5lcn0gaC0ke3NpemV9IHctJHtzaXplfVxuICAgIGA7XG4gIH07XG5cbiAgY29uc3QgZ2V0Tm9BdmF0YXJTdHlsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gYFxuICAgICAgJHtzdHlsZXMudGFpbHdpbmQuZ2VuZXJpYy5ub0F2YXRhcn0gaC0ke3NpemV9IHctJHtzaXplfVxuICAgIGA7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhaWx3aW5kLmZyYW1lfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDb250YWluZXJTdHlsZSgpfT5cbiAgICAgICAge1xuICAgICAgICAgIGF2YXRhciAmJiBhdmF0YXIudXJsXG4gICAgICAgICAgICA/XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17Z2V0TWVkaWFTb3VyY2UoYXZhdGFyKX1cbiAgICAgICAgICAgICAgYWx0PVwiRm90byBkZSB1c3VhcmlvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQuZ2VuZXJpYy5pbWFnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Tm9BdmF0YXJTdHlsZSgpfT5cbiAgICAgICAgICAgICAgPFVzZXIgc2l6ZT17c2l6ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVmcmVzaEN3IH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XG5cbkxvYWRNb3JlQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBmZXRjaGVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuTG9hZE1vcmVCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGZldGhlcjogKCkgPT4geyB9XG59O1xuXG5jb25zdCBjbGFzc2VzID0ge1xuICBkZWZhdWx0OiBgXG4gICAgY3Vyc29yLXBvaW50ZXJcbiAgICBmbGV4XG4gICAgZmxleC1ub3dyYXBcbiAgICBmbGV4LXJvd1xuICAgIGZvbnQtYm9sZFxuICAgIGl0ZW1zLWNlbnRlclxuICAgIGp1c3RpZnktY2VudGVyXG4gICAgcC0zXG4gICAgcm91bmRlZC1sZ1xuICBgLFxuXG4gIGRpc2FibGVkOiBgXG4gICAgYmctaW5hY3RpdmVcbiAgICBzaGFkb3ctaW5uZXJcbiAgICB0ZXh0LXNlY29uZGFyeVxuICBgLFxuXG4gIGVuYWJsZWQ6IGBcbiAgICBiZy1hY2NlbnRcbiAgICBsZzpob3ZlcjpiZy1pbmFjdGl2ZVxuICAgIGxnOmhvdmVyOnRleHQtcHJpbWFyeVxuICAgIHRleHQtYnNlXG4gICAgc2hhZG93XG4gIGBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRNb3JlQnV0dG9uKHsgZGlzYWJsZWQsIGZldGNoZXIgfSkge1xuICBjb25zdCByZWZyZXNoSWNvbiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBsb2FkTW9yZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHJlZnJlc2hJY29uLmN1cnJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYW5pbWF0ZS1yb3RhdGVDZW50ZXInKTtcblxuICAgICAgLy86IGNyZWF0ZSBhbiBzbWFsbCBlZmZlY3Qgb2YgZGVsYXkgYmVmb3JlIGxvYWRpbmcgbW9yZSBwcm9kdWN0c1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZldGNoZXIoKTtcbiAgICAgICAgcmVmcmVzaEljb24uY3VycmVudC5jbGFzc0xpc3QudG9nZ2xlKCdhbmltYXRlLXJvdGF0ZUNlbnRlcicpO1xuICAgICAgfSwgMTUwMCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gbG9hZE1vcmUoZXZlbnQpfVxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmRlZmF1bHR9ICR7ZGlzYWJsZWQgPyBjbGFzc2VzLmRpc2FibGVkIDogY2xhc3Nlcy5lbmFibGVkfWB9XG4gICAgPlxuICAgICAgPHNwYW4gcmVmPXtyZWZyZXNoSWNvbn0gY2xhc3NOYW1lPVwibXItMlwiPjxSZWZyZXNoQ3cgc2l6ZT1cIjE4XCIgLz48L3NwYW4+XG4gICAgICB7XG4gICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgPyA8c3Bhbj5ObyBoYXkgbcOhcyBwcm9kdWN0b3M8L3NwYW4+XG4gICAgICAgICAgOiA8c3Bhbj5Nw6FzIHByb2R1Y3Rvczwvc3Bhbj5cbiAgICAgIH1cbiAgICA8L2E+XG4gICk7XG59O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuT3V0bGluZUJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5PdXRsaW5lQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6ICdPdXRsaW5lIGJ1dHRvbidcbn07XG5cbmNvbnN0IGNsYXNzZXMgPSBgXG4gIGJvcmRlci0yXG4gIGJvcmRlci1hY2NlbnRcbiAgZmxleFxuICBmbGV4LXJvd1xuICBmbGV4LW5vd3JhcFxuICBmb250LWJvbGRcbiAgaG92ZXI6YmctYWNjZW50XG4gIGhvdmVyOnRleHQtYnNlXG4gIGl0ZW1zLWNlbnRlclxuICBqdXN0aWZ5LWNlbnRlclxuICBwLTJcbiAgcm91bmRlZC1sZ1xuICB0ZXh0LWFjY2VudFxuICB0cmFuc2l0aW9uLWFsbFxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3V0bGluZUJ1dHRvbih7IGxhYmVsIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+e2xhYmVsfTwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGlzVG91Y2hFbmFibGVkIGZyb20gJ0AvdXRpbHMvZGV0ZWN0LXRvdWNoLWRldmljZSc7XG5pbXBvcnQgZm9ybWF0UHJpY2UgZnJvbSAnQC91dGlscy9mb3JtYXQtcHJpY2UnO1xuaW1wb3J0IGdldE1lZGlhU291cmNlIGZyb20gJ0AvdXRpbHMvZ2V0LW1lZGlhLXNvdXJjZSc7XG5cblByb2R1Y3RDYXJkLnByb3BUeXBlcyA9IHtcbiAgcHJvZHVjdDogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuUHJvZHVjdENhcmQuZGVmYXVsdFByb3BzID0ge1xuICBwcm9kdWN0OiBudWxsXG59O1xuXG5jb25zdCBjbGFzc2VzID0ge1xuICBjb250YWluZXI6IGBcbiAgICBoLTQwXG4gICAgbWQ6aC03MlxuICAgIG92ZXJmbG93LWhpZGRlblxuICAgIHJlbGF0aXZlXG4gICAgbGc6aC05NlxuICAgIGxnOnJvdW5kZWQteGxcbiAgICByb3VuZGVkLWxnXG4gICAgc2hhZG93XG4gIGAsXG5cbiAgaW1hZ2U6IGBcbiAgICBtaW4taC1mdWxsXG4gICAgbWluLXctZnVsbFxuICAgIG9iamVjdC1jb3ZlclxuICBgLFxuXG4gIG9mZmVyOiB7XG4gICAgY29udGFpbmVyOiBgXG4gICAgICBhYnNvbHV0ZVxuICAgICAgYmctYWNjZW50XG4gICAgICBiZy1vcGFjaXR5LTkwXG4gICAgICBoLTEvNFxuICAgICAgcmlnaHQtMFxuICAgICAgdG9wLTBcbiAgICAgIHctZnVsbFxuICAgICAgei0xMFxuICAgIGAsXG4gICAgbGFiZWw6IGBcbiAgICAgIGFic29sdXRlXG4gICAgICBmb250LWJvbGRcbiAgICAgIG1kOnJpZ2h0LTFcbiAgICAgIG1kOnRleHQtYmFzZVxuICAgICAgbWQ6dGV4dC1ic2VcbiAgICAgIG1kOnRvcC0zXG4gICAgICBtZDpyb3RhdGUtMzVcbiAgICAgIGxnOnJpZ2h0LTJcbiAgICAgIGxnOnRleHQtbGdcbiAgICAgIGxnOnRvcC00XG4gICAgICByaWdodC0wXG4gICAgICByb3RhdGUtMzNcbiAgICAgIHRvcC0yXG4gICAgICB0ZXh0LWJzZVxuICAgICAgdGV4dC14c1xuICAgICAgdHJhbnNmb3JtXG4gICAgYFxuICB9LFxuXG4gIHByb2R1Y3Q6IHtcbiAgICBjb250YWluZXI6IGBcbiAgICAgIGFic29sdXRlXG4gICAgICBib3R0b20tMFxuICAgICAgZm9udC1ib2xkXG4gICAgICBmb250LWRpc3BsYXlcbiAgICAgIG1kOnAtM1xuICAgICAgbWQ6dGV4dC1sZ1xuICAgICAgbGc6cHktNFxuICAgICAgbGc6cHgtNlxuICAgICAgbGc6dGV4dC0yeGxcbiAgICAgIHB4LTJcbiAgICAgIHB5LTFcbiAgICAgIHRleHQtYnNlXG4gICAgICB6LTEwXG4gICAgYFxuICB9XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIG9mZmVyOiB7IGNsaXBQYXRoOiAncG9seWdvbig1NCUgMCwgMTAwJSAxMDAlLCAxMDAlIDApJyB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Q2FyZCh7IHByb2R1Y3QgfSkge1xuICBjb25zdCBbaXNIb3Zlciwgc2V0SXNIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgYW5pbWF0ZU9uSG92ZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGlmIChpc1RvdWNoRW5hYmxlZCgpKSB7XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGUtc2NhbGVVcENlbnRlcicpO1xuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhbmltYXRlLXNjYWxlRG93bkNlbnRlcicpO1xuXG4gICAgICBzZXRJc0hvdmVyKCFpc0hvdmVyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfVxuICAgICAgb25Nb3VzZUVudGVyPXthbmltYXRlT25Ib3Zlcn1cbiAgICAgIG9uTW91c2VMZWF2ZT17YW5pbWF0ZU9uSG92ZXJ9XG4gICAgPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e2dldE1lZGlhU291cmNlKHByb2R1Y3QuY292ZXIpfVxuICAgICAgICBhbHQ9e3Byb2R1Y3QuY292ZXIuYWx0ZXJuYXRpdmVUZXh0fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XG4gICAgICAvPlxuXG4gICAgICB7cHJvZHVjdC5vZmZlcnMubGVuZ3RoICE9PSAwICYmXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmVyLmNvbnRhaW5lcn0gc3R5bGU9e3N0eWxlcy5vZmZlcn0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLm9mZmVyLmxhYmVsfT7CoU9mZXJ0YSE8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0LmNvbnRhaW5lcn0+XG4gICAgICAgIDxwPntwcm9kdWN0Lm5hbWV9PC9wPlxuICAgICAgICA8cD57Zm9ybWF0UHJpY2UoJ01YTicsIHByb2R1Y3QucHJpY2UpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGV2cm9uRG93biB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xuXG5Ecm9wZG93bi5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsOiAnRHJvcGRvd24nXG59O1xuXG5jb25zdCBjbGFzc2VzID0ge1xuICBjb250YWluZXI6IGBcbiAgICBmbGV4XG4gICAgZmxleC1yb3dcbiAgICBmbGV4LW5vd3JhcFxuICAgIGZvbnQtYm9sZFxuICAgIGl0ZW1zLWNlbnRlclxuICBgLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcGRvd24oeyBjaGlsZHJlbiA9ICcnLCBsYWJlbCwgb25DbGljayB9KSB7XG4gIGNvbnN0IGFycm93SWNvbiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgIGFycm93SWNvbi5jdXJyZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGUtZmxpcEhvcml6b250YWxCb3R0b20nKTtcbiAgICBvbkNsaWNrKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGEgb25DbGljaz17YW5pbWF0ZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTFcIj57bGFiZWx9PC9zcGFuPlxuICAgICAgICA8c3BhbiByZWY9e2Fycm93SWNvbn0+PENoZXZyb25Eb3duIHNpemU9XCIxOFwiIC8+PC9zcGFuPlxuICAgICAgPC9hPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCBjdWF0bExvZ28gZnJvbSAnQC9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnJztcbmltcG9ydCBmYWNlYm9va0xvZ28gZnJvbSAnQC9hc3NldHMvaW1hZ2VzL2ZhY2Vib29rX2NpcmNsZS5wbmcnO1xuaW1wb3J0IGluc3RhZ3JhbUxvZ28gZnJvbSAnQC9hc3NldHMvaW1hZ2VzL2luc3RhZ3JhbV9zcXVhcmUucG5nJztcblxuY29uc3QgY2xhc3NlcyA9IHtcbiAgY29udGFpbmVyOiBgXG4gICAgaGlkZGVuXG4gICAgbWQ6YmctYnNlXG4gICAgbWQ6YmxvY2tcbiAgICBtZDpib3R0b20tMFxuICAgIG1kOnAtMTJcbiAgICBtZDpzaGFkb3dcbiAgICBtZDp3LWZ1bGxcbiAgYCxcblxuICBpbWFnZTogYFxuICAgIG1heC1oLWZ1bGxcbiAgICBtYXgtdy1mdWxsXG4gIGAsXG5cbiAgc29jaWFsOiB7XG4gICAgY29udGFpbmVyOiBgXG4gICAgICBmbGV4XG4gICAgICBmbGV4LXJvd1xuICAgICAgaXRlbXMtY2VudGVyXG4gICAgICBqdXN0aWZ5LWJldHdlZW5cbiAgICAgIHctZnVsbFxuICAgIGAsXG4gICAgbG9nbzogYFxuICAgICAgaC0xMlxuICAgIGAsXG4gICAgbGlua3M6IHtcbiAgICAgIGNvbnRhaW5lcjogYFxuICAgICAgICBmbGV4XG4gICAgICAgIGZsZXgtcm93XG4gICAgICAgIGgtZnVsbFxuICAgICAgICBpdGVtcy1jZW50ZXJcbiAgICAgIGAsXG4gICAgICBpdGVtOiBgXG4gICAgICAgIGFuaW1hdGUtaGVhcnRiZWF0XG4gICAgICAgIGgtOVxuICAgICAgICBtbC0zXG4gICAgICBgXG4gICAgfVxuICB9LFxuXG4gIGxlZ2Fsczoge1xuICAgIGNvbnRhaW5lcjogYFxuICAgICAgYm9yZGVyLXNlY29uZGFyeVxuICAgICAgYm9yZGVyLXQtMlxuICAgICAgZmxleFxuICAgICAgZmxleC1yb3dcbiAgICAgIGl0ZW1zLWNlbnRlclxuICAgICAganVzdGlmeS1iZXR3ZWVuXG4gICAgICBtdC01XG4gICAgICBwdC0zXG4gICAgICB3LWZ1bGxcbiAgICBgLFxuICAgIGNvcHlyaWdodHM6IGBcbiAgICAgIGZvbnQtYm9sZFxuICAgICAgdGV4dC1zZWNvbmRhcnlcbiAgICAgIHRleHQteHNcbiAgICAgIHVwcGVyY2FzZVxuICAgIGAsXG4gICAgbGlua3M6IHtcbiAgICAgIGNvbnRhaW5lcjogYFxuICAgICAgICBmbGV4XG4gICAgICAgIGZsZXgtcm93XG4gICAgICBgLFxuICAgICAgYW5jaG9yOiBgXG4gICAgICAgIGZsZXhcbiAgICAgICAgZmxleC1yb3dcbiAgICAgICAgaXRlbXMtY2VudGVyXG4gICAgICAgIG1sLTRcbiAgICAgICAgdGV4dC1zZWNvbmRhcnlcbiAgICAgICAgdW5kZXJsaW5lXG4gICAgICBgLFxuICAgICAgbGFiZWw6IGBcbiAgICAgICAgZm9udC1ib2xkXG4gICAgICAgIG1yLTFcbiAgICAgICAgdGV4dC14c1xuICAgICAgICB1cHBlcmNhc2VcbiAgICAgIGBcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNvY2lhbC5sb2dvfT5cbiAgICAgICAgICA8aW1nIHNyYz17Y3VhdGxMb2dvfSBhbHQ9XCJMb2dvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWwubGlua3MuY29udGFpbmVyfT5cbiAgICAgICAgICA8cD5Tw61ndWVub3MgZW4gcmVkZXMgc29jaWFsZXM6PC9wPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaG9tZS5waHA/cmVmPXdpemFyZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsLmxpbmtzLml0ZW19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ZhY2Vib29rTG9nb30gYWx0PVwiRmFjZWJvb2tcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2ludml0ZXMvY29udGFjdC8/aT0xajRjd2xyeHhweTFvJnV0bV9jb250ZW50PWtrcnQweGtcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNvY2lhbC5saW5rcy5pdGVtfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbnN0YWdyYW1Mb2dvfSBhbHQ9XCJJbnN0YWdyYW1cIiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWdhbHMuY29udGFpbmVyfT5cbiAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWdhbHMuY29weXJpZ2h0c30+XG4gICAgICAgICAgwqkgMjAyMCBwb3IgQ3VhdGwuIFRvZG9zIGxvcyBkZXJlY2hvcyByZXNlcnZhZG9zLlxuICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWdhbHMubGlua3MuY29udGFpbmVyfT5cbiAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZ2Fscy5saW5rcy5hbmNob3J9PlxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWdhbHMubGlua3MubGFiZWx9PlxuICAgICAgICAgICAgICBBY2VyY2EgZGUgbm9zb3Ryb3NcbiAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9e2NsYXNzZXMubGVnYWxzLmxpbmtzLmFuY2hvcn0+XG4gICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZ2Fscy5saW5rcy5sYWJlbH0+XG4gICAgICAgICAgICAgIFBvbMOtdGljYSBkZSBwcml2YWNpZGFkXG4gICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9jYXJkcy9Qcm9kdWN0Q2FyZCc7XG5pbXBvcnQgSVByb2R1Y3QgZnJvbSAnQC9tb2RlbHMvSVByb2R1Y3QnO1xuXG5Qcm9kdWN0c0dhbGxlcnkucHJvcFR5cGVzID0ge1xuICBwcm9kdWN0czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcbn07XG5cblByb2R1Y3RzR2FsbGVyeS5kZWZhdWx0UHJvcHMgPSB7XG4gIHByb2R1Y3RzOiBbXVxufTtcblxuY29uc3QgY2xhc3NlcyA9IHtcbiAgY29udGFpbmVyOiBgXG4gICAgZ2FwLTdcbiAgICBncmlkXG4gICAgZ3JpZC1jb2xzLTJcbiAgICBtZDpncmlkLWNvbHMtM1xuICAgIGxnOmdyaWQtY29scy00XG4gIGBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzR2FsbGVyeSh7IHByb2R1Y3RzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAge1xuICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3Q6IElQcm9kdWN0KSA9PiAoXG4gICAgICAgICAgPExpbmsga2V5PXtwcm9kdWN0LmlkfSBocmVmPXtgL3Byb2R1Y3RzLyR7cHJvZHVjdC5zbHVnfWB9PlxuICAgICAgICAgICAgPGE+PFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSUNhdGVnb3J5IGZyb20gJ0AvbW9kZWxzL0lDYXRlZ29yeSc7XG5pbXBvcnQgSVN1YmNhdGVnb3J5IGZyb20gJ0AvbW9kZWxzL0lTdWJjYXRlZ29yeSc7XG5cbkNhdGVnb3JpZXNNZW51LnByb3BUeXBlcyA9IHtcbiAgZGVwYXJ0bWVudDogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbkNhdGVnb3JpZXNNZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGVwYXJ0bWVudDogbnVsbCxcbn07XG5cbmNvbnN0IGNsYXNzZXMgPSB7XG4gIGNvbnRhaW5lcjogYFxuICAgIGdhcC02XG4gICAgZ3JpZFxuICAgIG1kOmdyaWQtY29scy0zXG4gIGAsXG5cbiAgaXRlbTogYFxuICAgIGN1cnNvci1wb2ludGVyXG4gICAgZm9udC1ib2xkXG4gICAgdGV4dC1zZWNvbmRhcnlcbiAgICB1cHBlcmNhc2VcbiAgYCxcblxuICBzdWJjYXRlZ29yaWVzOiB7XG4gICAgY29udGFpbmVyOiBgXG4gICAgICBtbC00XG4gICAgYCxcbiAgICBpdGVtOiBgXG4gICAgICBjdXJzb3ItcG9pbnRlclxuICAgICAgaG92ZXI6dGV4dC1hY2NlbnRcbiAgICAgIG15LTFcbiAgICBgXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3JpZXNNZW51KHsgZGVwYXJ0bWVudCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIHtcbiAgICAgICAgZGVwYXJ0bWVudC5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnk6IElDYXRlZ29yeSkgPT4gKFxuICAgICAgICAgIDx1bCBrZXk9e2NhdGVnb3J5LnNsdWd9PlxuICAgICAgICAgICAgPGEgaHJlZj17YC9zdG9yZS9wcm9kdWN0cz9kZXBhcnRtZW50PSR7ZGVwYXJ0bWVudC5zbHVnfSZjYXRlZ29yeT0ke2NhdGVnb3J5LnNsdWd9YH0+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+e2NhdGVnb3J5Lm5hbWV9PC9saT5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJjYXRlZ29yaWVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5zdWJjYXRlZ29yaWVzLm1hcCgoc3ViY2F0ZWdvcnk6IElTdWJjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJjYXRlZ29yeS5zbHVnfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3N0b3JlL3Byb2R1Y3RzP2RlcGFydG1lbnQ9JHtkZXBhcnRtZW50LnNsdWd9JmNhdGVnb3J5PSR7Y2F0ZWdvcnkuc2x1Z30mc3ViY2F0ZWdvcnk9JHtzdWJjYXRlZ29yeS5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuc3ViY2F0ZWdvcmllcy5pdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICB7c3ViY2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hldnJvblJpZ2h0IH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XG5cbmltcG9ydCBDYXRlZ29yaWVzTWVudSBmcm9tICcuL0NhdGVnb3JpZXNNZW51JztcbmltcG9ydCBJRGVwYXJ0bWVudCBmcm9tICdAL21vZGVscy9JRGVwYXJ0bWVudCc7XG5pbXBvcnQgaXNUb3VjaEVuYWJsZWQgZnJvbSAnQC91dGlscy9kZXRlY3QtdG91Y2gtZGV2aWNlJztcblxuRGVwYXJ0bWVudHNNZW51LnByb3BUeXBlcyA9IHtcbiAgZGVwYXJ0bWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpXG59O1xuXG5EZXBhcnRtZW50c01lbnUuZGVmYXVsdFByb3BzID0ge1xuICBkZXBhcnRtZW50czogW11cbn07XG5cbmNvbnN0IGNsYXNzZXMgPSB7XG4gIGNvbnRhaW5lcjogYFxuICAgIGFuaW1hdGUtZXhwYW5kVmVydGljYWxseVxuICAgIGJnLWJzZVxuICAgIGZsZXhcbiAgICBmbGV4LW5vd3JhcFxuICAgIGZsZXgtcm93XG4gICAgdy1mdWxsXG4gIGAsXG5cbiAgZGVwYXJ0bWVudHNNZW51OiB7XG4gICAgY29udGFpbmVyOiBgXG4gICAgICBiZy1hY2NlbnRcbiAgICAgIGZvbnQtYm9sZFxuICAgICAgcHktNFxuICAgICAgbWQ6cHktN1xuICAgICAgdGV4dC1ic2VcbiAgICAgIG1kOnctMS80XG4gICAgICB3LTEvM1xuICAgIGAsXG4gICAgaXRlbTogYFxuICAgICAgYWN0aXZlOmJnLWJzZVxuICAgICAgYWN0aXZlOnRleHQtcHJpbWFyeVxuICAgICAgY3Vyc29yLXBvaW50ZXJcbiAgICAgIGZsZXhcbiAgICAgIGZsZXgtbm93cmFwXG4gICAgICBmbGV4LXJvd1xuICAgICAgaG92ZXI6YmctYnNlXG4gICAgICBob3Zlcjp0ZXh0LXByaW1hcnlcbiAgICAgIGl0ZW1zLWNlbnRlclxuICAgICAganVzdGlmeS1iZXR3ZWVuXG4gICAgICBwLTNcbiAgICBgXG4gIH0sXG5cbiAgY2F0ZWdvcmllc01lbnU6IHtcbiAgICBjb250YWluZXI6IGBcbiAgICAgIGZsZXgtMVxuICAgICAgbWQ6cHgtMTJcbiAgICAgIG1kOnB5LTlcbiAgICAgIHAtNlxuICAgIGAsXG4gICAgdGl0bGU6IGBcbiAgICAgIGJvcmRlci1iLTJcbiAgICAgIGJvcmRlci1zZWNvbmRhcnlcbiAgICAgIGZvbnQtZGlzcGxheVxuICAgICAgbWItNlxuICAgICAgbWQ6bWItOVxuICAgICAgcGItM1xuICAgICAgdGV4dC0yeGxcbiAgICAgIHRleHQtYWNjZW50XG4gICAgYFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXBhcnRtZW50c01lbnUoeyBkZXBhcnRtZW50cyB9KSB7XG4gIGNvbnN0IFtkZXBhcnRtZW50LCBzZXREZXBhcnRtZW50XSA9IHVzZVN0YXRlPElEZXBhcnRtZW50PihkZXBhcnRtZW50c1swXSk7XG5cbiAgY29uc3Qgc2hvd0NhdGVnb3JpZXMgPSAoZXZlbnQ6IGFueSwgaXRlbTogSURlcGFydG1lbnQpOiB2b2lkID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldERlcGFydG1lbnQoaXRlbSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXBhcnRtZW50c01lbnUuY29udGFpbmVyfT5cbiAgICAgICAge1xuICAgICAgICAgIGRlcGFydG1lbnRzLm1hcCgoaXRlbTogSURlcGFydG1lbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpc1RvdWNoRW5hYmxlZCgpXG4gICAgICAgICAgICAgID8gLy86IG9uIHRvdWNoIGRldmljZXMgY2xpY2tpbmcgb24gdGhpcyBpdGVtIHdpbGwgc2hvdyBjYXRlZ29yaWVzXG4gICAgICAgICAgICAgIDxhIGtleT17aXRlbS5zbHVnfSBvbkNsaWNrPXsoZXZ0KSA9PiBzaG93Q2F0ZWdvcmllcyhldnQsIGl0ZW0pfT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmRlcGFydG1lbnRzTWVudS5pdGVtfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPENoZXZyb25SaWdodCBzaXplPVwiMThcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgOiAvLzogb24gbm9uLXRvdWNoIGRldmljZXMgY2xpY2tpbmcgb24gdGhpcyBpdGVtIHdpbGwgcmVkaXJlY3RcbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uc2x1Z31cbiAgICAgICAgICAgICAgICBocmVmPXtgL3N0b3JlL3Byb2R1Y3RzP2RlcGFydG1lbnQ9JHtpdGVtLnNsdWd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXREZXBhcnRtZW50KGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlcGFydG1lbnRzTWVudS5pdGVtfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPENoZXZyb25SaWdodCBzaXplPVwiMThcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yaWVzTWVudS5jb250YWluZXJ9PlxuICAgICAgICA8YSBocmVmPXtgL3N0b3JlL3Byb2R1Y3RzP2RlcGFydG1lbnQ9JHtkZXBhcnRtZW50LnNsdWd9YH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yaWVzTWVudS50aXRsZX0+XG4gICAgICAgICAgICB7ZGVwYXJ0bWVudC5uYW1lfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvYT5cblxuICAgICAgICB7XG4gICAgICAgICAgZGVwYXJ0bWVudCAmJlxuICAgICAgICAgIDxDYXRlZ29yaWVzTWVudSBkZXBhcnRtZW50PXtkZXBhcnRtZW50fSAvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1vcmVIb3Jpem9udGFsLCBNb3JlVmVydGljYWwsIFNob3BwaW5nQmFnIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XG5cbmltcG9ydCBjYXJ2aW5nSW1hZ2UgZnJvbSAnQC9hc3NldHMvaW1hZ2VzL2ZyYW1lLnN2Zyc7XG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJ0AvYXNzZXRzL2ltYWdlcy9sb2dvLnN2Zyc7XG5pbXBvcnQgQ2lyY2xlQXZhdGFyIGZyb20gJ0AvY29tcG9uZW50cy9hdmF0YXJzL0NpcmNsZUF2YXRhcic7XG5pbXBvcnQgT3V0bGluZUJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9ucy9PdXRsaW5lQnV0dG9uJztcbmltcG9ydCBEcm9wZG93biBmcm9tICdAL2NvbXBvbmVudHMvZHJvcGRvd25zL0Ryb3Bkb3duJztcbmltcG9ydCBEZXBhcnRtZW50c01lbnUgZnJvbSAnQC9jb21wb25lbnRzL21lbnVzL0RlcGFydG1lbnRzTWVudSc7XG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnQC9jb250ZXh0L0F1dGhDb250ZXh0JztcbmltcG9ydCBPcmRlckNvbnRleHQgZnJvbSAnQC9jb250ZXh0L09yZGVyQ29udGV4dCc7XG5cbk9tbmliYXIucHJvcFR5cGVzID0ge1xuICBtZW51RW50cmllczogUHJvcFR5cGVzLmFycmF5XG59O1xuXG5PbW5pYmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgbWVudUVudHJpZXM6IFtdXG59O1xuXG5jb25zdCBjbGFzc2VzID0ge1xuICBjYXJ2aW5nOiBgXG4gICAgYmctcmVwZWF0LXhcbiAgICBoLThcbiAgICB3LWZ1bGxcbiAgYCxcblxuICBjb250YWluZXI6IGBcbiAgICBiZy1ic2VcbiAgICBmbGV4XG4gICAgZmxleC1jb2xcbiAgICBmbGV4LW5vd3JhcFxuICAgIGgtMjRcbiAgICBtZDpoLTI4XG4gICAgcmVsYXRpdmVcbiAgICBzaGFkb3dcbiAgICB3LWZ1bGxcbiAgICB6LTUwXG4gIGAsXG5cbiAgZGVwYXJ0bWVudHM6IHtcbiAgICBjb250YWluZXI6IGBcbiAgICAgIGN1cnNvci1wb2ludGVyXG4gICAgICBmbGV4XG4gICAgICBmbGV4LXJvd1xuICAgICAgZmxleC1ub3dyYXBcbiAgICAgIGl0ZW1zLWNlbnRlclxuICAgIGAsXG4gICAgbWVudTogYFxuICAgICAgYWJzb2x1dGVcbiAgICAgIG1heC1oLTEvMlxuICAgICAgdy1mdWxsXG4gICAgICB6LTQwXG4gICAgYFxuICB9LFxuXG4gIGxpbmtHcm91cDoge1xuICAgIGJhZzoge1xuICAgICAgY29udGFpbmVyOiBgXG4gICAgICAgIGhpZGRlblxuICAgICAgICBtZDpmbGV4XG4gICAgICAgIG1kOmZsZXgtcm93XG4gICAgICAgIG1kOmZsZXgtbm93cmFwXG4gICAgICAgIG1kOml0ZW1zLWNlbnRlclxuICAgICAgICBtZDpqdXN0aWZ5LWNlbnRlclxuICAgICAgICBtZDpoLTEyXG4gICAgICAgIG1kOnJlbGF0aXZlXG4gICAgICAgIG1kOnctMTJcbiAgICAgIGAsXG4gICAgICBpdGVtc0NvdW50ZXI6IGBcbiAgICAgICAgYWJzb2x1dGVcbiAgICAgICAgYmctYWNjZW50XG4gICAgICAgIGJvcmRlci0yXG4gICAgICAgIGJvcmRlci1ic2VcbiAgICAgICAgZmxleFxuICAgICAgICBmbGV4LXJvd1xuICAgICAgICBmbGV4LW5vd3JhcFxuICAgICAgICBmb250LWJvbGRcbiAgICAgICAgaC01XG4gICAgICAgIGl0ZW1zLWNlbnRlclxuICAgICAgICBqdXN0aWZ5LWNlbnRlclxuICAgICAgICByaWdodC0xXG4gICAgICAgIHJvdW5kZWQtZnVsbFxuICAgICAgICB0ZXh0LWJzZVxuICAgICAgICB0b3AtMVxuICAgICAgICB3LTVcbiAgICAgIGBcbiAgICB9LFxuICAgIGNvbnRhaW5lcjogYFxuICAgICAgZmxleFxuICAgICAgZmxleC1yb3dcbiAgICAgIGZsZXgtbm93cmFwXG4gICAgICBpdGVtcy1jZW50ZXJcbiAgICAgIGp1c3RpZnktZW5kXG4gICAgICB3LTEvM1xuICAgIGAsXG4gICAgdXNlcjoge1xuICAgICAgY29udGFpbmVyOiBgXG4gICAgICAgIGhpZGRlblxuICAgICAgICBtZDpjdXJzb3ItcG9pbnRlclxuICAgICAgICBtZDppbmxpbmUtYmxvY2tcbiAgICAgICAgbWQ6bWwtNFxuICAgICAgYFxuICAgIH1cbiAgfSxcblxuICBsb2dvOiB7XG4gICAgY29udGFpbmVyOiBgXG4gICAgICBmbGV4XG4gICAgICBmbGV4LXJvd1xuICAgICAgZmxleC1ub3dyYXBcbiAgICAgIGgtMTJcbiAgICAgIGp1c3RpZnktc3RhcnRcbiAgICAgIHctMS8zXG4gICAgYCxcbiAgICBpbWFnZTogYFxuICAgICAgbWF4LWgtZnVsbFxuICAgICAgbWF4LXctZnVsbFxuICAgIGAsXG4gIH0sXG5cbiAgbmF2YmFyOiBgXG4gICAgZmxleFxuICAgIGZsZXgtMVxuICAgIGZsZXgtcm93XG4gICAgZmxleC1ub3dyYXBcbiAgICBpdGVtcy1jZW50ZXJcbiAgICBqdXN0aWZ5LWJldHdlZW5cbiAgICBweC03XG4gIGBcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY2FydmluZzoge1xuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnJHtjYXJ2aW5nSW1hZ2V9JylgXG4gIH0sXG4gIGl0ZW1zQ291bnRlcjoge1xuICAgIGZvbnRTaXplOiAnMC43NXJlbSdcbiAgfSxcbiAgdGFpbHdpbmQ6IHtcbiAgICBkZXBhcnRtZW50c01lbnU6IHtcbiAgICAgIG1lbnVDb250YWluZXI6IGBcbiAgICAgICAgYWJzb2x1dGVcbiAgICAgICAgbWF4LWgtMS8yXG4gICAgICAgIG92ZXJmbG93LXktc2Nyb2xsXG4gICAgICAgIHRvcC0yNFxuICAgICAgICB3LWZ1bGxcbiAgICAgICAgei00MFxuICAgICAgYFxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT21uaWJhcih7IG1lbnVFbnRyaWVzIH0pIHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgY29uc3QgeyBjb3VudFByb2R1Y3RzIH0gPSB1c2VDb250ZXh0KE9yZGVyQ29udGV4dCk7XG4gIGNvbnN0IFtpc01lbnVWaXNpYmxlLCBzZXRJc01lbnVWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJ2aW5nfSBzdHlsZT17c3R5bGVzLmNhcnZpbmd9PjwvZGl2PlxuXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdmJhcn0+XG4gICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e2NsYXNzZXMubG9nby5jb250YWluZXJ9PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMubG9nby5pbWFnZX0gc3JjPXtsb2dvSW1hZ2V9IGFsdD1cIkxvZ29cIiAvPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlcGFydG1lbnRzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPlxuICAgICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRlcGFydGFtZW50b3NcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWVudVZpc2libGUoIWlzTWVudVZpc2libGUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rR3JvdXAuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNZW51VmlzaWJsZSghaXNNZW51VmlzaWJsZSl9PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNNZW51VmlzaWJsZVxuICAgICAgICAgICAgICAgICAgPyA8TW9yZUhvcml6b250YWwgLz5cbiAgICAgICAgICAgICAgICAgIDogPE1vcmVWZXJ0aWNhbCAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17dXNlciA/ICcvb3JkZXInIDogJy9hdXRoJ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtHcm91cC5iYWcuY29udGFpbmVyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U2hvcHBpbmdCYWcgLz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rR3JvdXAuYmFnLml0ZW1zQ291bnRlcn1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLml0ZW1zQ291bnRlcn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VudFByb2R1Y3RzKCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXt1c2VyID8gJy91c2VyL3Byb2ZpbGUnIDogJy9hdXRoJ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtHcm91cC51c2VyLmNvbnRhaW5lcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVzZXJcbiAgICAgICAgICAgICAgICAgID8gPENpcmNsZUF2YXRhciBhdmF0YXI9e3VzZXIuYXZhdGFyfSBzaXplPVwiOFwiIC8+XG4gICAgICAgICAgICAgICAgICA6IDxPdXRsaW5lQnV0dG9uIGxhYmVsPVwiUmVnw61zdHJhdGUgbyBpbmdyZXNhXCIgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7XG4gICAgICAgIGlzTWVudVZpc2libGUgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWlsd2luZC5kZXBhcnRtZW50c01lbnUubWVudUNvbnRhaW5lcn0+XG4gICAgICAgICAgPERlcGFydG1lbnRzTWVudSBkZXBhcnRtZW50cz17bWVudUVudHJpZXN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIb21lLCBNZXNzYWdlQ2lyY2xlLCBTaG9wcGluZ0JhZywgVXNlciB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xuXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnQC9jb250ZXh0L0F1dGhDb250ZXh0JztcbmltcG9ydCBPcmRlckNvbnRleHQgZnJvbSAnQC9jb250ZXh0L09yZGVyQ29udGV4dCc7XG5cblRhYmJhci5wcm9wVHlwZXMgPSB7XG4gIHBhZ2U6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblRhYmJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHBhZ2U6ICdob21lJ1xufTtcblxuY29uc3QgY2xhc3NlcyA9IHtcbiAgY29udGFpbmVyOiBgXG4gICAgZml4ZWRcbiAgICBiZy1ic2VcbiAgICBib3R0b20tMFxuICAgIGZsZXhcbiAgICBmbGV4LW5vd3JhcFxuICAgIGZsZXgtcm93XG4gICAgbWQ6aGlkZGVuXG4gICAgb3ZlcmZsb3ctaGlkZGVuXG4gICAgcm91bmRlZC10LTJ4bFxuICAgIHNoYWRvd1xuICAgIHctZnVsbFxuICAgIHotNTBcbiAgYCxcblxuICB0YWJJdGVtOiB7XG4gICAgY29udGFpbmVyOiBgXG4gICAgICBmbGV4XG4gICAgICBmbGV4LTFcbiAgICAgIGZsZXgtY29sXG4gICAgICBmbGV4LW5vd3JhcFxuICAgICAgZm9udC1ib2xkXG4gICAgICBoLTE2XG4gICAgICBpdGVtcy1jZW50ZXJcbiAgICAgIGp1c3RpZnktY2VudGVyXG4gICAgICByZWxhdGl2ZVxuICAgICAgdHJhbnNpdGlvbi1hbGxcbiAgICBgXG4gIH0sXG5cbiAgYmFnOiB7XG4gICAgaXRlbXNDb3VudGVyOiBgXG4gICAgICBhYnNvbHV0ZVxuICAgICAgYm9yZGVyLTJcbiAgICAgIGJvcmRlci1ic2VcbiAgICAgIGZsZXhcbiAgICAgIGZsZXgtbm93cmFwXG4gICAgICBmbGV4LXJvd1xuICAgICAgZm9udC1ib2xkXG4gICAgICBoLTVcbiAgICAgIGl0ZW1zLWNlbnRlclxuICAgICAganVzdGlmeS1jZW50ZXJcbiAgICAgIHJpZ2h0LTZcbiAgICAgIHJvdW5kZWQtZnVsbFxuICAgICAgdGV4dC1ic2VcbiAgICAgIHctNVxuICAgIGBcbiAgfVxufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBiYWc6IHtcbiAgICBpdGVtc0NvdW50ZXI6IHtcbiAgICAgIGZvbnRTaXplOiAnMC43NXJlbSdcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBlbnVtIFRBQl9QQUdFUyB7XG4gIEhPTUUgPSAnaG9tZScsXG4gIEJBRyA9ICdiYWcnLFxuICBVU0VSID0gJ3VzZXInLFxuICBIRUxQID0gJ2hlbHAnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJiYXIoeyBwYWdlIH06IHsgcGFnZTogVEFCX1BBR0VTIH0pIHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgY29uc3QgeyBjb3VudFByb2R1Y3RzIH0gPSB1c2VDb250ZXh0KE9yZGVyQ29udGV4dCk7XG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKHBhZ2UpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlSXRlbShUQUJfUEFHRVMuSE9NRSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGNsYXNzZXMudGFiSXRlbS5jb250YWluZXIgK1xuICAgICAgICAgICAgKGFjdGl2ZUl0ZW0gPT09IFRBQl9QQUdFUy5IT01FID8gJ3RleHQtYWNjZW50JyA6ICd0ZXh0LXNlY29uZGFyeScpXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPEhvbWUgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2FjdGl2ZUl0ZW0gPT09IFRBQl9QQUdFUy5IT01FID8gJycgOiAnaGlkZGVuJ30+XG4gICAgICAgICAgICBJbmljaW9cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPExpbmsgaHJlZj17dXNlciA/ICcvb3JkZXInIDogJy9hdXRoJ30+XG4gICAgICAgIDxhXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlSXRlbShUQUJfUEFHRVMuQkFHKX1cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgY2xhc3Nlcy50YWJJdGVtLmNvbnRhaW5lciArXG4gICAgICAgICAgICAoYWN0aXZlSXRlbSA9PT0gVEFCX1BBR0VTLkJBRyA/ICd0ZXh0LWFjY2VudCcgOiAndGV4dC1zZWNvbmRhcnknKVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIGNsYXNzZXMuYmFnLml0ZW1zQ291bnRlciArXG4gICAgICAgICAgICAgIChhY3RpdmVJdGVtID09PSBUQUJfUEFHRVMuQkFHID8gJ2JnLWFjY2VudCB0b3AtMScgOiAnYmctc2Vjb25kYXJ5IHRvcC0zJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYmFnLml0ZW1zQ291bnRlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y291bnRQcm9kdWN0cygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTaG9wcGluZ0JhZyAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YWN0aXZlSXRlbSA9PT0gVEFCX1BBR0VTLkJBRyA/ICcnIDogJ2hpZGRlbid9PlxuICAgICAgICAgICAgQm9sc2FcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPExpbmsgaHJlZj17dXNlciA/ICcvdXNlci9wcm9maWxlJyA6ICcvYXV0aCd9PlxuICAgICAgICA8YVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUl0ZW0oVEFCX1BBR0VTLlVTRVIpfVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBjbGFzc2VzLnRhYkl0ZW0uY29udGFpbmVyICtcbiAgICAgICAgICAgIChhY3RpdmVJdGVtID09PSBUQUJfUEFHRVMuVVNFUiA/ICd0ZXh0LWFjY2VudCcgOiAndGV4dC1zZWNvbmRhcnknKVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxVc2VyIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXthY3RpdmVJdGVtID09PSBUQUJfUEFHRVMuVVNFUiA/ICcnIDogJ2hpZGRlbid9PlxuICAgICAgICAgICAgWW9cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPExpbmsgaHJlZj1cIi9oZWxwXCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlSXRlbShUQUJfUEFHRVMuSEVMUCl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGNsYXNzZXMudGFiSXRlbS5jb250YWluZXIgK1xuICAgICAgICAgICAgKGFjdGl2ZUl0ZW0gPT09IFRBQl9QQUdFUy5IRUxQID8gJ3RleHQtYWNjZW50JyA6ICd0ZXh0LXNlY29uZGFyeScpXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPE1lc3NhZ2VDaXJjbGUgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2FjdGl2ZUl0ZW0gPT09IFRBQl9QQUdFUy5IRUxQID8gJycgOiAnaGlkZGVuJ30+XG4gICAgICAgICAgICBBeXVkYVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbmF2PlxuICApO1xufTtcbiIsImNvbnN0IEFQSV9ET01BSU4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRE9NQUlOO1xuY29uc3QgUEFHRV9MSU1JVCA9IDEyO1xuXG5jb25zdCBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLID0gYCR7QVBJX0RPTUFJTn0vYXV0aC9mYWNlYm9vay9jYWxsYmFja2A7XG5jb25zdCBBVVRIX0ZBQ0VCT09LX1VSTCA9IGAke0FQSV9ET01BSU59L2Nvbm5lY3QvZmFjZWJvb2tgO1xuY29uc3QgQVVUSF9HT09HTEVfQ0FMTEJBQ0sgPSBgJHtBUElfRE9NQUlOfS9hdXRoL2dvb2dsZS9jYWxsYmFja2A7XG5jb25zdCBBVVRIX0dPT0dMRV9VUkwgPSBgJHtBUElfRE9NQUlOfS9jb25uZWN0L2dvb2dsZWA7XG5cbmNvbnN0IFNUUklQRV9QVUJMSVNIRURfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJU0hFRF9LRVk7XG5cbmV4cG9ydCB7XG4gIEFQSV9ET01BSU4sXG4gIFBBR0VfTElNSVQsXG4gIEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0ssXG4gIEFVVEhfRkFDRUJPT0tfVVJMLFxuICBBVVRIX0dPT0dMRV9DQUxMQkFDSyxcbiAgQVVUSF9HT09HTEVfVVJMLFxuICBTVFJJUEVfUFVCTElTSEVEX0tFWVxufTtcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtc2Vzc2lvbnMnO1xuaW1wb3J0IElTZXNzaW9uIGZyb20gJ0AvbW9kZWxzL0lTZXNzaW9uJztcbmltcG9ydCBJVXNlciBmcm9tICdAL21vZGVscy9JVXNlcic7XG5cbi8vOiB1c2UgdGhpcyBjb250ZXh0IHdoZXJldmVyIHlvdSB3YW50IHRvIGFjY2VzcyB0aGUgQXV0aFByb3ZpZGVyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xuZXhwb3J0IHsgQXV0aFByb3ZpZGVyIH07XG5cbi8vOiB1c2UgdGhpcyBjb21wb25lbnQgaW4gdGhlIF9hcHAudHN4IGZpbGUgdG8gc2hhcmUgdGhlIGF1dGhlbnRpY2F0aW9uIHN0YXRlXG4vLzogZ2xvYmFsbHlcbmZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8SVVzZXI+KG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBpZiAoJ2lkX3Rva2VuJyBpbiByb3V0ZXIucXVlcnkgfHwgJ2FjY2Vzc190b2tlbicgaW4gcm91dGVyLnF1ZXJ5KSB7XG4gICAgICBjb25zdCBzZXNzaW9uOiBJU2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24obG9jYXRpb24uc2VhcmNoKTtcblxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Nlc3Npb24nLCBKU09OLnN0cmluZ2lmeShzZXNzaW9uKSk7XG4gICAgICBzZXRVc2VyKHNlc3Npb24udXNlcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpOiB2b2lkID0+IHtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdzZXNzaW9uJyk7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgICByb3V0ZXIucHVzaCgnLycpO1xuICB9O1xuXG4gIGNvbnN0IGdldFNlc3Npb25TdG9yYWdlID0gKCk6IElTZXNzaW9uIHwgbnVsbCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb24nKSk7XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChfZXJyb3IgYXMgU3ludGF4RXJyb3IpLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFRva2VuID0gKCk6IHN0cmluZyB8IG51bGwgPT4ge1xuICAgIHJldHVybiBnZXRTZXNzaW9uU3RvcmFnZSgpLnRva2VuO1xuICB9O1xuXG4gIC8vOiB1c2UgdGhpcyBjdXN0b20gaG9vayB0byBzZXQgdGhlIGxvY2FsIHNlc3Npb24gaW50byB0aGUgZ2xvYmFsIHN0YXRlIGVhY2hcbiAgLy86IHRpbWUgYSBwYWdlIGlzIHJlZnJlc2hlZDsgdXNlIGl0IG9ubHkgb24gcGFnZSBjb21wb25lbnRzXG4gIGNvbnN0IHVzZVNlc3Npb24gPSAoKTogdm9pZCA9PiB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNlc3Npb246IElTZXNzaW9uID0gZ2V0U2Vzc2lvblN0b3JhZ2UoKTtcblxuICAgICAgc2V0VXNlcihzZXNzaW9uPy51c2VyKTtcbiAgICB9LCBbXSk7XG4gIH07XG5cbiAgY29uc3QgaXNVc2VyTG9nZ2VkSW4gPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIGdldFNlc3Npb25TdG9yYWdlKCkgPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgIHVzZXIsIGxvZ2luLCBsb2dvdXQsIGdldFRva2VuLCBpc1VzZXJMb2dnZWRJbiwgdXNlU2Vzc2lvblxuICAgIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IElPcmRlciBmcm9tIFwiQC9tb2RlbHMvSU9yZGVyXCI7XG5pbXBvcnQgSVBheW1lbnRPcmRlciBmcm9tIFwiQC9tb2RlbHMvSVBheW1lbnRPcmRlclwiO1xuXG4vLzogdXNlIHRoaXMgY29udGV4dCB3aGVuZXZlciB5b3Ugd2FudCB0byBhY2Nlc3MgdGhlIE9yZGVyUHJvdmlkZXJcbmNvbnN0IE9yZGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyQ29udGV4dDtcbmV4cG9ydCB7IE9yZGVyUHJvdmlkZXIgfTtcblxuLy86IHVzZSB0aGlzIGNvbXBvbmVudCBpbiBhbGwgdGhlIG90aGVyIGNvbXBvbmVudHMgd2hlcmUgeW91IHdhbnQgdG8gYWNjZXNzXG4vLzogdGhlIGdsb2JhbCBzdGF0ZSBvZiBhIHVzZXIgb3JkZXJcbmZ1bmN0aW9uIE9yZGVyUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGU8SU9yZGVyPihudWxsKTtcblxuICBjb25zdCBjb3VudFByb2R1Y3RzID0gKCk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIG9yZGVyID8gb3JkZXIudmFyaWFudHMubGVuZ3RoIDogMDtcbiAgfTtcblxuICBjb25zdCBhZGRPcmRlckl0ZW0gPSAoaXRlbTogSVBheW1lbnRPcmRlcikgPT4ge1xuICB9O1xuXG4gIC8vOiB1c2UgdGhpcyBmdW5jdGlvbiB0byBhZGQgYSBuZXcgaXRlbSB0byB0aGUgb3JkZXIgaW4gbG9jYWwgc3RvcmFnZVxuICBjb25zdCBzZXRPcmRlckl0ZW1JbkxTID0gKGFjdGl2ZU9yZGVyOiBBcnJheTxJUGF5bWVudE9yZGVyPikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlckl0ZW1zJywgSlNPTi5zdHJpbmdpZnkoYWN0aXZlT3JkZXIpKTtcbiAgfTtcblxuICAvLzogdXNlIHRoaXMgZnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50IG9yZGVyIG9iamVjdCBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgZ2V0T3JkZXJJdGVtRnJvbUxTID0gKCk6IEFycmF5PElQYXltZW50T3JkZXI+ID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVySXRlbXMnKSkgfHwgW107XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChfZXJyb3IgYXMgU3ludGF4RXJyb3IpLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE9yZGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBvcmRlciwgY291bnRQcm9kdWN0cyB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L09yZGVyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iLCIvKipcbiAqIENvbmZpZ3VyYXRpb24gb2YgdGhlIEFwb2xsbyBDbGllbnQgdG8gZW5hYmxlIHRoZSB1c2Ugb2YgR3JhcGhRTC5cbiAqL1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEFwb2xsb0NsaWVudCxcbiAgSHR0cExpbmssXG4gIEluTWVtb3J5Q2FjaGUsXG4gIE5vcm1hbGl6ZWRDYWNoZU9iamVjdFxufSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmltcG9ydCB7IEFQSV9ET01BSU4gfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcblxubGV0IGFwb2xsb0NsaWVudDogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD47XG5cbmNvbnN0IGNyZWF0ZUFwb2xsb0NsaWVudCA9ICgpOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiA9PiB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJywgLy8gaXQgaXMgdHJ1ZSB3aGVuIFNTUlxuICAgIGxpbms6IG5ldyBIdHRwTGluayh7IHVyaTogYCR7QVBJX0RPTUFJTn0vZ3JhcGhxbGAgfSksXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcbiAgfSk7XG59O1xuXG5jb25zdCBpbml0aWFsaXplQXBvbGxvQ2xpZW50ID0gKGluaXRpYWxTdGF0ZTogYW55ID0gbnVsbCk6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+ID0+IHtcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKTtcblxuICAvLzogaW5pdGlhbCBzdGF0ZSBvZiBOZXh0LmpzIGRhdGEgZmV0Y2hpbmcgbWV0aG9kcyBpcyBoeWRyYXRlZCBoZXJlXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcbiAgICAvLzogZ2V0IGV4aXN0aW5nIGNhY2hlLCBsb2FkZWQgZHVyaW5nIGNsaWVudCBzaWRlIGRhdGEgZmV0Y2hpbmdcbiAgICBjb25zdCBleGlzdGluZ0NhY2hlID0gX2Fwb2xsb0NsaWVudC5leHRyYWN0KCk7XG5cbiAgICAvLzogcmVzdG9yZSB0aGUgY2FjaGUgdXNpbmcgdGhlIGRhdGEgcGFzc2VkIGZyb20gXCJnZXRTdGF0aWNQcm9wc1wiIG9yXG4gICAgLy86IFwiZ2V0U2VydmVyU2lkZVByb3BzXCIgY29tYmluZWQgd2l0aCB0aGUgZXhpc3RpbmcgY2FjaGUgZGF0YVxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZSh7IC4uLmV4aXN0aW5nQ2FjaGUsIC4uLmluaXRpYWxTdGF0ZSB9KTtcbiAgfVxuXG4gIC8vOiBmb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG5cbiAgLy86IGNyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnQ7XG5cbiAgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG59O1xuXG4vLzogdXNlIHRoaXMgY3VzdG9tIGhvb2sgaW4geW91ciBjb21wb25lbnRzIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIG9mIHRoZSBBcG9sbG9cbi8vOiBDbGllbnRcbmNvbnN0IHVzZUFwb2xsb0NsaWVudCA9IChpbml0aWFsU3RhdGU6IGFueSk6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+ID0+IHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKFxuICAgICgpID0+IGluaXRpYWxpemVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlKSxcbiAgICBbaW5pdGlhbFN0YXRlXVxuICApO1xuXG4gIHJldHVybiBzdG9yZTtcbn07XG5cbmV4cG9ydCB7IGluaXRpYWxpemVBcG9sbG9DbGllbnQsIHVzZUFwb2xsb0NsaWVudCB9O1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdywgbG9jYWxlIH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcikge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuZnVuY3Rpb24gaWRsZVRpbWVvdXQ8VD4obXM6IG51bWJlciwgZXJyOiBFcnJvcik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChlcnIpLCBtcykpXG4gIClcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIGlkbGVUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICAgICksXG4gIF0pXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGUpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludCA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0PFJvdXRlTG9hZGVyRW50cnk+KFxuICAgICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlKSB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8XG4gIHN0cmluZyxcbiAge1xuICAgIGlkOiBzdHJpbmdcbiAgICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbiAgfVxuPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SID0gJ1NTRyBEYXRhIE5PVF9GT1VORCdcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgcmVsb2FkaW5nIGluIGRldmVsb3BtZW50IGZyb20gZmFsbGJhY2sgcmV0dXJuaW5nIDIwMFxuICAgICAgICAvLyB0byBvbi1kZW1hbmQtZW50cnktaGFuZGxlciBjYXVzaW5nIGl0IHRvIHJlbG9hZCBwZXJpb2RpY2FsbHlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFNTR19EQVRBX05PVF9GT1VORF9FUlJPUilcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgobG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZSlcbiAgICAgIH1cblxuICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoXG4gICAgICAgICAgYWRkTG9jYWxlKGRlbEJhc2VQYXRoKHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lKSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHtcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICAgICAgaGFzQmFzZVBhdGgocmVzb2x2ZWRBcykgPyBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgICAgICkucGF0aG5hbWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcywgZmFsc2UpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG4gICAgICBjb25zdCBzc2c0MDQgPSBlcnIubWVzc2FnZSA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SXG5cbiAgICAgIGlmIChzc2c0MDQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgbW9kOiBhbnlcbiAgICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cywgbW9kIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICAgJy80MDQnXG4gICAgICAgICAgKSlcblxuICAgICAgICAgIC8vIFRPRE86IHNob3VsZCB3ZSB0b2xlcmF0ZSB0aGVzZSBwcm9wcyBtaXNzaW5nIGFuZCBzdGlsbCByZW5kZXIgdGhlXG4gICAgICAgICAgLy8gcGFnZSBpbnN0ZWFkIG9mIGZhbGxpbmcgYmFjayB0byBfZXJyb3I/XG4gICAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19OX1NTRykge1xuICAgICAgICAgICAgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoJy80MDQnLCAnLzQwNCcsIHRydWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgIC8vIG5vbi1mYXRhbCBmYWxsYmFjayB0byBfZXJyb3JcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycjogc3NnNDA0ID8gdW5kZWZpbmVkIDogZXJyLFxuICAgICAgICBlcnJvcjogc3NnNDA0ID8gdW5kZWZpbmVkIDogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXJzZWRIcmVmLnBhdGhuYW1lISlcbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzLCBmYWxzZSkgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2codXJsKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXNQYXRoLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVOb25QYXRoKHZhbHVlOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogc3RyaW5nIHtcbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcygnOicpKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwYXJhbXMpKSB7XG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKGA6JHtrZXl9YCkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWVcbiAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgbmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwqYCwgJ2cnKSxcbiAgICAgICAgICBgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1NgXG4gICAgICAgIClcbiAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgbmV3IFJlZ0V4cChgOiR7a2V5fVxcXFw/YCwgJ2cnKSxcbiAgICAgICAgICBgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTmBcbiAgICAgICAgKVxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXCtgLCAnZycpLCBgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9QTFVTYClcbiAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgbmV3IFJlZ0V4cChgOiR7a2V5fSg/IVxcXFx3KWAsICdnJyksXG4gICAgICAgICAgYC0tRVNDQVBFRF9QQVJBTV9DT0xPTiR7a2V5fWBcbiAgICAgICAgKVxuICAgIH1cbiAgfVxuICB2YWx1ZSA9IHZhbHVlXG4gICAgLnJlcGxhY2UoLyg6fFxcKnxcXD98XFwrfFxcKHxcXCl8XFx7fFxcfSkvZywgJ1xcXFwkMScpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9QTFVTL2csICcrJylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX0NPTE9OL2csICc6JylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1FVRVNUSU9OL2csICc/JylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX0FTVEVSSVNLUy9nLCAnKicpXG5cbiAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gIC8vIGNvcnJlY3RseVxuICByZXR1cm4gcGF0aFRvUmVnZXhwXG4gICAgLmNvbXBpbGUoYC8ke3ZhbHVlfWAsIHsgdmFsaWRhdGU6IGZhbHNlIH0pKHBhcmFtcylcbiAgICAuc3Vic3RyKDEpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhblxuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICAvLyBjbG9uZSBxdWVyeSBzbyB3ZSBkb24ndCBtb2RpZnkgdGhlIG9yaWdpbmFsXG4gIHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnkpXG4gIGNvbnN0IGhhZExvY2FsZSA9IHF1ZXJ5Ll9fbmV4dExvY2FsZVxuICBkZWxldGUgcXVlcnkuX19uZXh0TG9jYWxlXG4gIGRlbGV0ZSBxdWVyeS5fX25leHREZWZhdWx0TG9jYWxlXG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBjb21waWxlTm9uUGF0aCh2YWx1ZSwgcGFyYW1zKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGxldCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgLy8gcmVtb3ZlIGludGVybmFsIHBhcmFtIGZvciBpMThuXG4gIGlmIChoYWRMb2NhbGUpIHtcbiAgICBwYXJhbUtleXMgPSBwYXJhbUtleXMuZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9PSAnbmV4dEludGVybmFsTG9jYWxlJylcbiAgfVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSAocGFyc2VkRGVzdGluYXRpb24gYXMgYW55KS5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi8uLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKG5vcm1hbGl6ZUxvY2FsZVBhdGgoYXNQYXRoLCBsb2NhbGVzKS5wYXRobmFtZSkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBjb25zdCBmc1BhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpLFxuICAgICAgICAgIGxvY2FsZXNcbiAgICAgICAgKS5wYXRobmFtZVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhmc1BhdGhuYW1lKSkge1xuICAgICAgICAgIGFzUGF0aCA9IGZzUGF0aG5hbWVcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGZzUGF0aG5hbWUpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBhc1BhdGggPSBmc1BhdGhuYW1lXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQuanMnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0L2luZGV4JztcblxuaW1wb3J0IHsgZ2V0RGVwYXJ0bWVudHMgfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtZGVwYXJ0bWVudHMnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHNQYWdlIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLXByb2R1Y3RzJztcbmltcG9ydCBMb2FkTW9yZUJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9ucy9Mb2FkTW9yZUJ1dHRvbic7XG5pbXBvcnQgUHJvZHVjdHNHYWxsZXJ5IGZyb20gJ0AvY29tcG9uZW50cy9nYWxsZXJpZXMvUHJvZHVjdHNHYWxsZXJ5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9jb21wb25lbnRzL2Zvb3RlcnMvRm9vdGVyJztcbmltcG9ydCBPbW5pYmFyIGZyb20gJ0AvY29tcG9uZW50cy9uYXZiYXJzL09tbmliYXInO1xuaW1wb3J0IFRhYmJhciwgeyBUQUJfUEFHRVMgfSBmcm9tICdAL2NvbXBvbmVudHMvbmF2YmFycy9UYWJiYXInO1xuaW1wb3J0IHsgUEFHRV9MSU1JVCB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJ0AvY29udGV4dC9BdXRoQ29udGV4dCc7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvQ2xpZW50LCB1c2VBcG9sbG9DbGllbnQgfSBmcm9tICdAL2xpYi9hcG9sbG8tY2xpZW50JztcbmltcG9ydCBJUGFnZSBmcm9tICdAL21vZGVscy9JUGFnZSc7XG5pbXBvcnQgSVByb2R1Y3QgZnJvbSAnQC9tb2RlbHMvSVByb2R1Y3QnO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XG5cbmNvbnN0IGNsYXNzZXMgPSB7XG4gIGNvbnRhaW5lcjogYFxuICAgIGgtc2NyZWVuXG4gICAgbWF4LXctc2NyZWVuXG4gIGAsXG5cbiAgZ2FsbGVyeToge1xuICAgIGNvbnRhaW5lcjogYFxuICAgICAgaC0zLzRcbiAgICAgIG1kOmgtYXV0b1xuICAgICAgbWQ6b3ZlcmZsb3ctdmlzaWJsZVxuICAgICAgb3ZlcmZsb3cteS1hdXRvXG4gICAgICBweC03XG4gICAgICBweS0xMlxuICAgICAgdG9wLTBcbiAgICAgIHctZnVsbFxuICAgIGAsXG4gICAgbG9hZEJ1dHRvbjogYFxuICAgICAgZmxleFxuICAgICAgZmxleC1ub3dyYXBcbiAgICAgIGZsZXgtcm93XG4gICAgICBqdXN0aWZ5LWNlbnRlclxuICAgICAgbWItMjBcbiAgICAgIG1kOm15LTEyXG4gICAgICBtdC0xMlxuICAgIGBcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoeyBpbml0aWFsUHJvZHVjdHMsIGRlcGFydG1lbnRzIH0pIHtcbiAgY29uc3QgeyBsb2dpbiwgdXNlU2Vzc2lvbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IHVzZUFwb2xsb0NsaWVudChpbml0aWFsUHJvZHVjdHMpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxJUGFnZT4oe1xuICAgIGluZGV4OiAwLFxuICAgIGRhdGE6IGluaXRpYWxQcm9kdWN0cyxcbiAgICBwcmV2aW91c0RhdGE6IGluaXRpYWxQcm9kdWN0c1xuICB9KTtcblxuICBjb25zdCBnZXROZXdQYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG5ld1BhZ2U6IElQcm9kdWN0W10gPSBhd2FpdCBnZXRQcm9kdWN0c1BhZ2UoXG4gICAgICBhcG9sbG9DbGllbnQsIHsgc3RhcnQ6IHBhZ2UuZGF0YS5sZW5ndGgsIGxpbWl0OiBQQUdFX0xJTUlUIH1cbiAgICApO1xuXG4gICAgc2V0UGFnZSh7XG4gICAgICBpbmRleDogcGFnZS5pbmRleCArIDEsXG4gICAgICBkYXRhOiBwYWdlLmRhdGEuY29uY2F0KG5ld1BhZ2UpLFxuICAgICAgcHJldmlvdXNEYXRhOiBuZXdQYWdlXG4gICAgfSk7XG4gIH07XG5cbiAgdXNlU2Vzc2lvbigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgLy86IGxvZ2luIHVzZXIgaWYgdGhlIHNlc3Npb24gdG9rZW4gaXMgaW4gdGhlIHJvdXRlIHF1ZXJ5XG4gICAgICBpZiAobG9jYXRpb24uc2VhcmNoKSBhd2FpdCBsb2dpbihsb2NhdGlvbi5zZWFyY2gpO1xuICAgIH07XG5cbiAgICBsb2dpblVzZXIoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3VhdGwgLSBMYSBtZWpvciBtb2RhIGFydGVzYW5hbCBkZSBNw6l4aWNvPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkVuY3VlbnRyYSBsb3MgbWVqb3JlcyBwcm9kdWN0b3MgYXJ0ZXNhbmFsZXMgZGUgTcOpeGljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxPbW5pYmFyIG1lbnVFbnRyaWVzPXtkZXBhcnRtZW50c30gLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ2FsbGVyeS5jb250YWluZXJ9PlxuICAgICAgICA8UHJvZHVjdHNHYWxsZXJ5IHByb2R1Y3RzPXtwYWdlLmRhdGF9IC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ2FsbGVyeS5sb2FkQnV0dG9ufT5cbiAgICAgICAgICA8TG9hZE1vcmVCdXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXshcGFnZS5wcmV2aW91c0RhdGEubGVuZ3RofVxuICAgICAgICAgICAgZmV0Y2hlcj17Z2V0TmV3UGFnZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8VGFiYmFyIHBhZ2U9e1RBQl9QQUdFUy5IT01FfSAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvQ2xpZW50KCk7XG4gIGNvbnN0IGluaXRpYWxQcm9kdWN0cyA9IGF3YWl0IGdldFByb2R1Y3RzUGFnZShhcG9sbG9DbGllbnQsIHtcbiAgICBzdGFydDogMCxcbiAgICBsaW1pdDogUEFHRV9MSU1JVFxuICB9KTtcbiAgY29uc3QgZGVwYXJ0bWVudHMgPSBhd2FpdCBnZXREZXBhcnRtZW50cyhhcG9sbG9DbGllbnQpO1xuXG4gIHJldHVybiB7IHByb3BzOiB7IGluaXRpYWxQcm9kdWN0cywgZGVwYXJ0bWVudHMgfSB9O1xufTtcbiIsImNvbnN0IGlzVG91Y2hFbmFibGVkID0gKCkgPT4ge1xuICByZXR1cm4gKCd0b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzVG91Y2hFbmFibGVkO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZm9ybWF0IHByaWNlcyB0byBtYWtlIHRoZW0gbG9vayBsaWtlOlxuICogVVMgMzAwLjkwLCBNWCAxNTg5LjkwIG9yIEdCIDEyLjAwXG4gKlxuICogQ3VycmVuY3kgY29kZXMgKElTTyA0MjE3IGN1cnJlbmN5IGNvZGVzKSBhcmUgcGFzc2VkIGFzIGFyZ3VtZW50cyBkZXBlbmRpbmcgb25cbiAqIGkxOG4gZ2xvYmFsIGNvbnRleHQuXG4gKi9cbmNvbnN0IGZvcm1hdFByaWNlOiAoY3VycmVuY3lDb2RlOiBzdHJpbmcsIHByaWNlOiBudW1iZXIgfCBzdHJpbmcpID0+IHN0cmluZyA9IChjdXJyZW5jeUNvZGUsIHByaWNlKSA9PiB7XG4gIC8vOiBmb3JjZSB0d28gZGVjaW1hbHNcbiAgY29uc3QgcHJpY2VXaXRoRGVjaW1hbHMgPSBwYXJzZUZsb2F0KFN0cmluZyhwcmljZSkpLnRvRml4ZWQoMik7XG5cbiAgcmV0dXJuIGAke2N1cnJlbmN5Q29kZS50b1VwcGVyQ2FzZSgpfSAke3ByaWNlV2l0aERlY2ltYWxzfWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRQcmljZTtcbiIsIi8qKlxuICogVGhpcyB1dGlsaXR5IGZ1bmN0aW9uIHJldHVybnMgYSBtZWRpYSBVUkwgYmFzZWQgb24gb25lIG9mIHRocmVlIGNhc2VzOlxuICpcbiAqICAxLiBUaGVyZSdzIG5vIG1lZGlhIHNvdXJjZSB0byByZXR1cm4gKHdoZW4gbm8gbWVkaWEgaXMgYWRkZWQpLlxuICogIDIuIFRoZSBtZWRpYSBpcyBzZXJ2ZWQgZnJvbSB0aGUgc2FtZSBzZXJ2ZXIgdGhhdCBydW5zIHRoZSBhcHAgKGxvY2FsKS5cbiAqICAzLiBUaGUgbWVkaWEgaXMgc2VydmVkIGJ5IGFuIHVwbG9hZCBwcm92aWRlciAocmVtb3RlIHNlcnZlcikuXG4gKi9cbmltcG9ydCB7IEFQSV9ET01BSU4gfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcbmltcG9ydCBtZWRpYU5vdEZvdW5kSW1hZ2UgZnJvbSBcIkAvYXNzZXRzL2ltYWdlcy9tZWRpYV9ub3RfZm91bmQuc3ZnXCI7XG5cbmludGVyZmFjZSBNZWRpYSB7XG4gIHVybDogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59O1xuXG5jb25zdCBnZXRNZWRpYVNvdXJjZTogKG1lZGlhOiBNZWRpYSkgPT4gc3RyaW5nID0gKG1lZGlhKSA9PiB7XG4gIC8vOiBDYXNlIDEuXG4gIGlmICghbWVkaWEpIHtcbiAgICByZXR1cm4gbWVkaWFOb3RGb3VuZEltYWdlO1xuICB9XG5cbiAgLy86IENhc2UgMi5cbiAgaWYgKG1lZGlhLnVybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuICAgIHJldHVybiBBUElfRE9NQUlOICsgbWVkaWEudXJsO1xuICB9XG5cbiAgLy86IENhc2UgMy5cbiAgcmV0dXJuIG1lZGlhLnVybDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1lZGlhU291cmNlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmVhdGhlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9pbmRleFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==