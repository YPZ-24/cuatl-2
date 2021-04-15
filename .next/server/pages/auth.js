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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth.tsx");
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

/***/ "./assets/images/facebook.svg":
/*!************************************!*\
  !*** ./assets/images/facebook.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAxNyAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNyAwSDEyLjVDMTAuNTEwOSAwIDguNjAzMjIgMC43OTAxNzYgNy4xOTY3IDIuMTk2N0M1Ljc5MDE4IDMuNjAzMjIgNSA1LjUxMDg4IDUgNy41VjEySDAuNVYxOEg1VjMwSDExVjE4SDE1LjVMMTcgMTJIMTFWNy41QzExIDcuMTAyMTggMTEuMTU4IDYuNzIwNjQgMTEuNDM5MyA2LjQzOTM0QzExLjcyMDYgNi4xNTgwNCAxMi4xMDIyIDYgMTIuNSA2SDE3VjBaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ "./assets/images/google.svg":
/*!**********************************!*\
  !*** ./assets/images/google.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA1NCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik00LjQ3MTg2IDE1LjM4NzdDNi4xMDY2MyAxMS45ODEgOC40MTYzOSA5LjEwMTc0IDExLjMyNzMgNi43MDc2QzE1LjI3MTkgMy40NDg2MSAxOS43OTY1IDEuNDg2ODkgMjQuODY5NSAwLjg4NTcyMkMzMC44Mjg1IDAuMTc5MDgxIDM2LjQyODkgMS4zMDc2IDQxLjYwNzQgNC40MDgzOEM0Mi44OTQxIDUuMTc4MyA0NC4wOTY1IDYuMDUzNjkgNDUuMjQ2MSA3LjAwMjkxQzQ1LjUzMDggNy4yMzQ5NCA0NS40OTkyIDcuMzcyMDUgNDUuMjU2NiA3LjYwNDA4QzQyLjkwNDcgOS45NDU0OSA0MC41NTI3IDEyLjI4NjkgMzguMjIxOSAxNC42NDk0QzM3Ljk0NzYgMTQuOTIzNiAzNy44IDE0LjkwMjUgMzcuNTA0NyAxNC42ODFDMzAuNjcwMyA5LjQxODE1IDIwLjcwMzUgMTAuODQyIDE1LjYwOTQgMTcuODAyOUMxNC43MTI5IDE5LjAyNjQgMTMuOTg1MSAyMC4zNDQ3IDEzLjQ3ODkgMjEuNzc5MUMxMy40MzY3IDIxLjkwNTYgMTMuMzUyMyAyMi4wMjE3IDEzLjI4OTEgMjIuMTQ4MkMxMS45Mjg1IDIxLjExNDYgMTAuNTU3NCAyMC4wODEgOS4yMDc0MSAxOS4wMzY5QzcuNjI1MzggMTcuODI0IDYuMDQzMzUgMTYuNjExMSA0LjQ3MTg2IDE1LjM4NzdaIiBmaWxsPSIjRTk0MzM1Ii8+DQo8cGF0aCBkPSJNMTMuMjg5IDMyLjA0MUMxMy43NDI2IDMzLjA0MyAxNC4xMjIyIDM0LjA4NzEgMTQuNjkxOCAzNS4wMjU4QzE3LjA4NTkgMzguOTQ5MiAyMC41MDMxIDQxLjQ2OTkgMjUuMDA2NiA0Mi4zNjY0QzI5LjA2NzIgNDMuMTc4NSAzMi45Njk1IDQyLjYzMDEgMzYuNjA4MiA0MC41OTQ1QzM2LjczNDcgNDAuNTMxMyAzNi44NjEzIDQwLjQ2OCAzNi45NzczIDQwLjQwNDdDMzcuMDQwNiA0MC40NjggMzcuMDkzMyA0MC41NDE4IDM3LjE1NjYgNDAuNTk0NUMzOS44Nzc3IDQyLjcwMzkgNDIuNjA5NCA0NC44MTMzIDQ1LjMzMDQgNDYuOTIyN0M0NC4wMjI2IDQ4LjIxOTkgNDIuNTM1NSA0OS4yNjQxIDQwLjk1MzUgNTAuMTcxMUMzNi4zNjU2IDUyLjc4NjcgMzEuMzk4IDUzLjg0MTQgMjYuMTY2OCA1My40NDA2QzE5LjY0ODggNTIuOTM0NCAxNC4wMjczIDUwLjM2MDkgOS4zODY2OSA0NS43MjAzQzcuMzUxMTUgNDMuNjg0OCA1LjY3NDE5IDQxLjM4NTUgNC40NjEzIDM4Ljc1OTRDNS41ODk4MiAzNy44OTQ1IDYuNzE4MzQgMzcuMDQwMiA3Ljg0Njg1IDM2LjE3NTRDOS42NjA5MSAzNC43OTM4IDExLjQ3NSAzMy40MjI3IDEzLjI4OSAzMi4wNDFaIiBmaWxsPSIjMzRBODUzIi8+DQo8cGF0aCBkPSJNNDUuMzQxIDQ2LjkyM0M0Mi42MTk5IDQ0LjgxMzcgMzkuODg4MyA0Mi43MDQzIDM3LjE2NzIgNDAuNTk0OUMzNy4xMDM5IDQwLjU0MjIgMzcuMDQwNiA0MC40Njg0IDM2Ljk4NzkgNDAuNDA1MUMzNy45MjY2IDM5LjY3NzMgMzguODg2MyAzOC45NzA3IDM5LjY1NjMgMzguMDQyNkM0MC45NDMgMzYuNTAyNyA0MS43OTczIDM0Ljc2MjUgNDIuMjQwMyAzMi44MTEzQzQyLjI5MyAzMi41Njg3IDQyLjI1MDggMzIuNDg0NCA0Mi4wMDgyIDMyLjQ5NDlDNDEuODgxNyAzMi41MDU1IDQxLjc2NTYgMzIuNDk0OSA0MS42MzkxIDMyLjQ5NDlDMzcuMzM2IDMyLjQ5NDkgMzMuMDIyMyAzMi40ODQ0IDI4LjcxOTIgMzIuNTA1NUMyOC4yNDQ1IDMyLjUwNTUgMjguMTM5MSAzMi4zNzg5IDI4LjE0OTYgMzEuOTI1NEMyOC4xNzA3IDI4Ljg2NjggMjguMTcwNyAyNS44MDgyIDI4LjE0OTYgMjIuNzQ5NkMyOC4xNDk2IDIyLjM1OTQgMjguMjU1MSAyMi4yNTM5IDI4LjY0NTMgMjIuMjUzOUMzNi41MzQ0IDIyLjI2NDUgNDQuNDIzNSAyMi4yNjQ1IDUyLjMyMzEgMjIuMjUzOUM1Mi42NjA2IDIyLjI1MzkgNTIuNzk3NyAyMi4zMzgzIDUyLjg4MjEgMjIuNjk2OUM1My41MjU0IDI1LjU5NzMgNTMuNDgzMiAyOC41MDgyIDUzLjA5MyAzMS40NDAyQzUyLjc3NjYgMzMuNzgxNiA1Mi4yMDcxIDM2LjA0OTIgNTEuMzMxNyAzOC4yNDNDNTAuMDM0NCA0MS40ODA5IDQ4LjEyNTQgNDQuMzA3NCA0NS42MTUzIDQ2LjczMzJDNDUuNTIwMyA0Ni44MDcgNDUuNDI1NCA0Ni44NTk4IDQ1LjM0MSA0Ni45MjNaIiBmaWxsPSIjNDI4NUYzIi8+DQo8cGF0aCBkPSJNMTMuMjg5IDMyLjA0MTRDMTEuNDc1IDMzLjQyMyA5LjY2MDkyIDM0Ljc5NDEgNy44NDY4NSAzNi4xNzU4QzYuNzE4MzQgMzcuMDMwMSA1LjU4OTgyIDM3Ljg5NDkgNC40NjEzMSAzOC43NTk4QzMuNTg1OTIgMzcuMTM1NSAzLjAxNjM5IDM1LjQxNjQgMi41NTIzMiAzMy42NDQ1QzEuNjY2MzkgMzAuMjE2OCAxLjUyOTI4IDI2LjczNjMgMi4wMTQ0MyAyMy4yNDUzQzIuMzk0MTIgMjAuNTAzMSAzLjE4NTE0IDE3Ljg2NjQgNC40NjEzMSAxNS4zOTg0QzYuMDQzMzQgMTYuNjExMyA3LjYxNDgyIDE3LjgzNDggOS4xOTY4NSAxOS4wNDc3QzEwLjU1NzQgMjAuMDkxOCAxMS45MTc5IDIxLjEyNTQgMTMuMjc4NSAyMi4xNTlDMTMuMDQ2NSAyMy4yODc1IDEyLjcxOTUgMjQuMzk0OSAxMi42MTQgMjUuNTU1MUMxMi40MjQyIDI3LjY2NDUgMTIuNjI0NiAyOS43MjExIDEzLjIyNTggMzEuNzQ2MUMxMy4yNjc5IDMxLjgzMDUgMTMuMjc4NSAzMS45MzU5IDEzLjI4OSAzMi4wNDE0WiIgZmlsbD0iI0ZBQkIwNiIvPg0KPC9zdmc+DQo=");

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

/***/ "./pages/auth.tsx":
/*!************************!*\
  !*** ./pages/auth.tsx ***!
  \************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthenticationPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_fetch_departments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/actions/fetch-departments */ "./actions/fetch-departments.ts");
/* harmony import */ var _assets_images_facebook_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/facebook.svg */ "./assets/images/facebook.svg");
/* harmony import */ var _assets_images_google_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/google.svg */ "./assets/images/google.svg");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/lib/apollo-client */ "./lib/apollo-client.ts");
/* harmony import */ var _utils_use_viewport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/use-viewport */ "./utils/use-viewport.ts");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\pages\\auth.tsx";









const styles = {
  tailwind: {
    pageContainer: `
      flex
      flex-col
      flex-nowrap
      h-screen
      overflow-hidden
      w-screen
    `,
    mainContent: {
      container: `
        flex-1
        mb-24
        md:mb-auto
        md:overflow-visible
        overflow-y-scroll
        w-full
      `,
      loginForm: {
        container: `
          bg-bse
          flex
          flex-col
          flex-nowrap
          items-center
          m-6
          md:mx-auto
          md:my-16
          md:w-1/2
          lg:w-1/3
          p-6
          rounded-xl
          text-center
          shadow
        `,
        title: `
          font-bold
          font-display
          m-6
          text-3xl
        `,
        group: `
          my-6
          w-full
        `,
        button: {
          container: `
            flex
            flex-nowrap
            flex-row
            font-bold
            h-16
            items-center
            justify-center
            md:mx-auto
            md:w-60
            mt-6
            rounded-lg
            shadow
            w-full
          `,
          icon: {
            container: `
              flex
              flex-nowrap
              flex-row
              h-16
              items-center
              justify-center
              w-16
            `,
            image: `
              h-6
              w-6
            `
          }
        }
      }
    },
    generic: {
      facebook: `
        bg-facebook
        text-bse
      `,
      google: `
        bg-inactive
      `
    }
  }
};
function AuthenticationPage({
  departments
}) {
  const {
    useSession,
    isUserLoggedIn
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const viewport = Object(_utils_use_viewport__WEBPACK_IMPORTED_MODULE_9__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (isUserLoggedIn()) router.push('/');
  }, []);
  useSession();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: styles.tailwind.pageContainer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styles.tailwind.mainContent.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: styles.tailwind.mainContent.loginForm.container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: styles.tailwind.mainContent.loginForm.title,
          children: "\xA1Bienvenido!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\xA1Ingresa y disfruta de una gran experiencia!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: styles.tailwind.mainContent.loginForm.group,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: _config_globals__WEBPACK_IMPORTED_MODULE_6__["AUTH_FACEBOOK_URL"],
            className: styles.tailwind.mainContent.loginForm.button.container + styles.tailwind.generic.facebook,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: styles.tailwind.mainContent.loginForm.button.icon.container,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: _assets_images_facebook_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
                className: styles.tailwind.mainContent.loginForm.button.icon.image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Ingresa con Facebook"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: _config_globals__WEBPACK_IMPORTED_MODULE_6__["AUTH_GOOGLE_URL"],
            className: styles.tailwind.mainContent.loginForm.button.container + styles.tailwind.generic.google,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: styles.tailwind.mainContent.loginForm.button.icon.container,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: _assets_images_google_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
                className: styles.tailwind.mainContent.loginForm.button.icon.image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Ingresa con Google"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 5
  }, this);
}
;
const getServerSideProps = async () => {
  const apolloClient = Object(_lib_apollo_client__WEBPACK_IMPORTED_MODULE_8__["initializeApolloClient"])();
  const departments = await Object(_actions_fetch_departments__WEBPACK_IMPORTED_MODULE_3__["getDepartments"])(apolloClient);
  return {
    props: {
      departments
    }
  };
};

/***/ }),

/***/ "./utils/use-viewport.ts":
/*!*******************************!*\
  !*** ./utils/use-viewport.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

; //: use this custom hook to get the viewport size of the screen in order to
//: execute some code base on screen size

const useViewport = () => {
  const {
    0: viewportSize,
    1: setViewportSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    height: 0,
    width: 0
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (window) {
      const refreshViewportSize = () => setViewportSize({
        height: window.innerHeight,
        width: window.innerWidth
      });

      refreshViewportSize();
      window.addEventListener('resize', refreshViewportSize);
      return () => window.removeEventListener('resize', refreshViewportSize);
    }
  }, []);
  return viewportSize;
};

/* harmony default export */ __webpack_exports__["default"] = (useViewport);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9mZXRjaC1kZXBhcnRtZW50cy50cyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2ZldGNoLXNlc3Npb25zLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZmFjZWJvb2suc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ29vZ2xlLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb25maWcvZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9saWIvYXBvbGxvLWNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy91c2Utdmlld3BvcnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiZ2V0RGVwYXJ0bWVudHMiLCJhcG9sbG9DbGllbnQiLCJlcnJvciIsImRhdGEiLCJsb2FkaW5nIiwicXVlcnkiLCJncWwiLCJkZXBhcnRtZW50cyIsImdldFNlc3Npb24iLCJ0b2tlbiIsInVybCIsImluY2x1ZGVzIiwiQVVUSF9HT09HTEVfQ0FMTEJBQ0siLCJBVVRIX0ZBQ0VCT09LX0NBTExCQUNLIiwicmVzcG9uc2UiLCJmZXRjaCIsInNlc3Npb25EYXRhIiwianNvbiIsImp3dCIsInVzZXIiLCJpZCIsInVzZXJuYW1lIiwiZW1haWwiLCJhdmF0YXIiLCJmb3JtYXRzIiwidGh1bWJuYWlsIiwiQVBJX0RPTUFJTiIsInByb2Nlc3MiLCJQQUdFX0xJTUlUIiwiQVVUSF9GQUNFQk9PS19VUkwiLCJBVVRIX0dPT0dMRV9VUkwiLCJTVFJJUEVfUFVCTElTSEVEX0tFWSIsIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwic2V0VXNlciIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9naW4iLCJzZXNzaW9uIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiZ2V0U2Vzc2lvblN0b3JhZ2UiLCJwYXJzZSIsImdldEl0ZW0iLCJfZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSIsImdldFRva2VuIiwidXNlU2Vzc2lvbiIsInVzZUVmZmVjdCIsImlzVXNlckxvZ2dlZEluIiwiY3JlYXRlQXBvbGxvQ2xpZW50IiwiQXBvbGxvQ2xpZW50IiwibGluayIsIkh0dHBMaW5rIiwidXJpIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCIsImluaXRpYWxTdGF0ZSIsIl9hcG9sbG9DbGllbnQiLCJleGlzdGluZ0NhY2hlIiwiZXh0cmFjdCIsInJlc3RvcmUiLCJ1c2VBcG9sbG9DbGllbnQiLCJzdG9yZSIsInVzZU1lbW8iLCJzdHlsZXMiLCJ0YWlsd2luZCIsInBhZ2VDb250YWluZXIiLCJtYWluQ29udGVudCIsImNvbnRhaW5lciIsImxvZ2luRm9ybSIsInRpdGxlIiwiZ3JvdXAiLCJidXR0b24iLCJpY29uIiwiaW1hZ2UiLCJnZW5lcmljIiwiZmFjZWJvb2siLCJnb29nbGUiLCJBdXRoZW50aWNhdGlvblBhZ2UiLCJ1c2VDb250ZXh0Iiwidmlld3BvcnQiLCJ1c2VWaWV3cG9ydCIsImZhY2Vib29rTG9nb0ltYWdlIiwiZ29vZ2xlTG9nb0ltYWdlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvcHMiLCJ2aWV3cG9ydFNpemUiLCJzZXRWaWV3cG9ydFNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsIndpbmRvdyIsInJlZnJlc2hWaWV3cG9ydFNpemUiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSU8sTUFBTUEsY0FBYyxHQUFHLE9BQzVCQyxZQUQ0QixLQUVEO0FBQzNCLE1BQUk7QUFBRUMsU0FBRjtBQUFTQyxRQUFUO0FBQWVDO0FBQWYsTUFBMkIsTUFBTUgsWUFBWSxDQUFDSSxLQUFiLENBQW1CO0FBQ3REQSxTQUFLLEVBQUVDLGtEQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUxNLEM7Ozs7Ozs7Ozs7OztBQzNLUDtBQUFBO0FBQUE7QUFBQTtBQUtDLEMsQ0FFRDtBQUNBOztBQUNBLE1BQU13RixXQUFXLEdBQUcsTUFBaUI7QUFDbkMsUUFBTTtBQUFBLE9BQUNLLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDaEUsc0RBQVEsQ0FBWTtBQUMxRGlFLFVBQU0sRUFBRSxDQURrRDtBQUMvQ0MsU0FBSyxFQUFFO0FBRHdDLEdBQVosQ0FBaEQ7QUFJQTNDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUk0QyxNQUFKLEVBQVk7QUFDVixZQUFNQyxtQkFBbUIsR0FBRyxNQUFZSixlQUFlLENBQUM7QUFDdERDLGNBQU0sRUFBRUUsTUFBTSxDQUFDRSxXQUR1QztBQUMxQkgsYUFBSyxFQUFFQyxNQUFNLENBQUNHO0FBRFksT0FBRCxDQUF2RDs7QUFJQUYseUJBQW1CO0FBQ25CRCxZQUFNLENBQUNJLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxtQkFBbEM7QUFFQSxhQUFPLE1BQU1ELE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNKLG1CQUFyQyxDQUFiO0FBQ0Q7QUFDRixHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUEsU0FBT0wsWUFBUDtBQUNELENBbkJEOztBQXFCZUwsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUMvQkEsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXV0aC50c3hcIik7XG4iLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIGdxbCwgTm9ybWFsaXplZENhY2hlT2JqZWN0IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuaW1wb3J0IElEZXBhcnRtZW50IGZyb20gJ0AvbW9kZWxzL0lEZXBhcnRtZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREZXBhcnRtZW50cyA9IGFzeW5jIChcclxuICBhcG9sbG9DbGllbnQ6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+XHJcbik6IFByb21pc2U8SURlcGFydG1lbnRbXT4gPT4ge1xyXG4gIGxldCB7IGVycm9yLCBkYXRhLCBsb2FkaW5nIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgcXVlcnk6IGdxbGBcclxuICAgICAgcXVlcnkgZ2V0RGVwYXJ0bWVudHMge1xyXG4gICAgICAgIGRlcGFydG1lbnRzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIHN1YmNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYFxyXG4gIH0pO1xyXG4gIFxyXG4gIHJldHVybiBlcnJvciA/PyBkYXRhLmRlcGFydG1lbnRzO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLLCBBVVRIX0dPT0dMRV9DQUxMQkFDSyB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xyXG5pbXBvcnQgSVNlc3Npb24gZnJvbSAnQC9tb2RlbHMvSVNlc3Npb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb24gPSBhc3luYyAodG9rZW46IHN0cmluZyk6IFByb21pc2U8SVNlc3Npb24+ID0+IHtcclxuICBjb25zdCB1cmw6IHN0cmluZyA9IHRva2VuLmluY2x1ZGVzKCdpZF90b2tlbicpXHJcbiAgICA/IEFVVEhfR09PR0xFX0NBTExCQUNLXHJcbiAgICA6IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0s7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgdG9rZW4pO1xyXG4gIGNvbnN0IHNlc3Npb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9rZW46IHNlc3Npb25EYXRhLmp3dCxcclxuICAgIHVzZXI6IHtcclxuICAgICAgaWQ6IHNlc3Npb25EYXRhLnVzZXIuaWQsXHJcbiAgICAgIHVzZXJuYW1lOiBzZXNzaW9uRGF0YS51c2VyLnVzZXJuYW1lLFxyXG4gICAgICBlbWFpbDogc2Vzc2lvbkRhdGEudXNlci5lbWFpbCxcclxuICAgICAgYXZhdGFyOiBzZXNzaW9uRGF0YS51c2VyLmF2YXRhclxyXG4gICAgICAgID8gc2Vzc2lvbkRhdGEudXNlci5hdmF0YXIuZm9ybWF0cy50aHVtYm5haWxcclxuICAgICAgICA6IG51bGxcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UY2lJR2hsYVdkb2REMGlNekFpSUhacFpYZENiM2c5SWpBZ01DQXhOeUF6TUNJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5Danh3WVhSb0lHUTlJazB4TnlBd1NERXlMalZETVRBdU5URXdPU0F3SURndU5qQXpNaklnTUM0M09UQXhOellnTnk0eE9UWTNJREl1TVRrMk4wTTFMamM1TURFNElETXVOakF6TWpJZ05TQTFMalV4TURnNElEVWdOeTQxVmpFeVNEQXVOVll4T0VnMVZqTXdTREV4VmpFNFNERTFMalZNTVRjZ01USklNVEZXTnk0MVF6RXhJRGN1TVRBeU1UZ2dNVEV1TVRVNElEWXVOekl3TmpRZ01URXVORE01TXlBMkxqUXpPVE0wUXpFeExqY3lNRFlnTmk0eE5UZ3dOQ0F4TWk0eE1ESXlJRFlnTVRJdU5TQTJTREUzVmpCYUlpQm1hV3hzUFNKM2FHbDBaU0l2UGcwS1BDOXpkbWMrRFFvPVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTlRRaUlIWnBaWGRDYjNnOUlqQWdNQ0ExTkNBMU5DSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JR1E5SWswMExqUTNNVGcySURFMUxqTTROemRETmk0eE1EWTJNeUF4TVM0NU9ERWdPQzQwTVRZek9TQTVMakV3TVRjMElERXhMak15TnpNZ05pNDNNRGMyUXpFMUxqSTNNVGtnTXk0ME5EZzJNU0F4T1M0M09UWTFJREV1TkRnMk9Ea2dNalF1T0RZNU5TQXdMamc0TlRjeU1rTXpNQzQ0TWpnMUlEQXVNVGM1TURneElETTJMalF5T0RrZ01TNHpNRGMySURReExqWXdOelFnTkM0ME1EZ3pPRU0wTWk0NE9UUXhJRFV1TVRjNE15QTBOQzR3T1RZMUlEWXVNRFV6TmprZ05EVXVNalEyTVNBM0xqQXdNamt4UXpRMUxqVXpNRGdnTnk0eU16UTVOQ0EwTlM0ME9Ua3lJRGN1TXpjeU1EVWdORFV1TWpVMk5pQTNMall3TkRBNFF6UXlMamt3TkRjZ09TNDVORFUwT1NBME1DNDFOVEkzSURFeUxqSTROamtnTXpndU1qSXhPU0F4TkM0Mk5EazBRek0zTGprME56WWdNVFF1T1RJek5pQXpOeTQ0SURFMExqa3dNalVnTXpjdU5UQTBOeUF4TkM0Mk9ERkRNekF1Tmpjd015QTVMalF4T0RFMUlESXdMamN3TXpVZ01UQXVPRFF5SURFMUxqWXdPVFFnTVRjdU9EQXlPVU14TkM0M01USTVJREU1TGpBeU5qUWdNVE11T1RnMU1TQXlNQzR6TkRRM0lERXpMalEzT0RrZ01qRXVOemM1TVVNeE15NDBNelkzSURJeExqa3dOVFlnTVRNdU16VXlNeUF5TWk0d01qRTNJREV6TGpJNE9URWdNakl1TVRRNE1rTXhNUzQ1TWpnMUlESXhMakV4TkRZZ01UQXVOVFUzTkNBeU1DNHdPREVnT1M0eU1EYzBNU0F4T1M0d016WTVRemN1TmpJMU16Z2dNVGN1T0RJMElEWXVNRFF6TXpVZ01UWXVOakV4TVNBMExqUTNNVGcySURFMUxqTTROemRhSWlCbWFXeHNQU0lqUlRrME16TTFJaTgrRFFvOGNHRjBhQ0JrUFNKTk1UTXVNamc1SURNeUxqQTBNVU14TXk0M05ESTJJRE16TGpBME15QXhOQzR4TWpJeUlETTBMakE0TnpFZ01UUXVOamt4T0NBek5TNHdNalU0UXpFM0xqQTROVGtnTXpndU9UUTVNaUF5TUM0MU1ETXhJRFF4TGpRMk9Ua2dNalV1TURBMk5pQTBNaTR6TmpZMFF6STVMakEyTnpJZ05ETXVNVGM0TlNBek1pNDVOamsxSURReUxqWXpNREVnTXpZdU5qQTRNaUEwTUM0MU9UUTFRek0yTGpjek5EY2dOREF1TlRNeE15QXpOaTQ0TmpFeklEUXdMalEyT0NBek5pNDVOemN6SURRd0xqUXdORGRETXpjdU1EUXdOaUEwTUM0ME5qZ2dNemN1TURrek15QTBNQzQxTkRFNElETTNMakUxTmpZZ05EQXVOVGswTlVNek9TNDROemMzSURReUxqY3dNemtnTkRJdU5qQTVOQ0EwTkM0NE1UTXpJRFExTGpNek1EUWdORFl1T1RJeU4wTTBOQzR3TWpJMklEUTRMakl4T1RrZ05ESXVOVE0xTlNBME9TNHlOalF4SURRd0xqazFNelVnTlRBdU1UY3hNVU16Tmk0ek5qVTJJRFV5TGpjNE5qY2dNekV1TXprNElEVXpMamcwTVRRZ01qWXVNVFkyT0NBMU15NDBOREEyUXpFNUxqWTBPRGdnTlRJdU9UTTBOQ0F4TkM0d01qY3pJRFV3TGpNMk1Ea2dPUzR6T0RZMk9TQTBOUzQzTWpBelF6Y3VNelV4TVRVZ05ETXVOamcwT0NBMUxqWTNOREU1SURReExqTTROVFVnTkM0ME5qRXpJRE00TGpjMU9UUkROUzQxT0RrNE1pQXpOeTQ0T1RRMUlEWXVOekU0TXpRZ016Y3VNRFF3TWlBM0xqZzBOamcxSURNMkxqRTNOVFJET1M0Mk5qQTVNU0F6TkM0M09UTTRJREV4TGpRM05TQXpNeTQwTWpJM0lERXpMakk0T1NBek1pNHdOREZhSWlCbWFXeHNQU0lqTXpSQk9EVXpJaTgrRFFvOGNHRjBhQ0JrUFNKTk5EVXVNelF4SURRMkxqa3lNME0wTWk0Mk1UazVJRFEwTGpneE16Y2dNemt1T0RnNE15QTBNaTQzTURReklETTNMakUyTnpJZ05EQXVOVGswT1VNek55NHhNRE01SURRd0xqVTBNaklnTXpjdU1EUXdOaUEwTUM0ME5qZzBJRE0yTGprNE56a2dOREF1TkRBMU1VTXpOeTQ1TWpZMklETTVMalkzTnpNZ016Z3VPRGcyTXlBek9DNDVOekEzSURNNUxqWTFOak1nTXpndU1EUXlOa00wTUM0NU5ETWdNell1TlRBeU55QTBNUzQzT1RjeklETTBMamMyTWpVZ05ESXVNalF3TXlBek1pNDRNVEV6UXpReUxqSTVNeUF6TWk0MU5qZzNJRFF5TGpJMU1EZ2dNekl1TkRnME5DQTBNaTR3TURneUlETXlMalE1TkRsRE5ERXVPRGd4TnlBek1pNDFNRFUxSURReExqYzJOVFlnTXpJdU5EazBPU0EwTVM0Mk16a3hJRE15TGpRNU5EbERNemN1TXpNMklETXlMalE1TkRrZ016TXVNREl5TXlBek1pNDBPRFEwSURJNExqY3hPVElnTXpJdU5UQTFOVU15T0M0eU5EUTFJRE15TGpVd05UVWdNamd1TVRNNU1TQXpNaTR6TnpnNUlESTRMakUwT1RZZ016RXVPVEkxTkVNeU9DNHhOekEzSURJNExqZzJOamdnTWpndU1UY3dOeUF5TlM0NE1EZ3lJREk0TGpFME9UWWdNakl1TnpRNU5rTXlPQzR4TkRrMklESXlMak0xT1RRZ01qZ3VNalUxTVNBeU1pNHlOVE01SURJNExqWTBOVE1nTWpJdU1qVXpPVU16Tmk0MU16UTBJREl5TGpJMk5EVWdORFF1TkRJek5TQXlNaTR5TmpRMUlEVXlMak15TXpFZ01qSXVNalV6T1VNMU1pNDJOakEySURJeUxqSTFNemtnTlRJdU56azNOeUF5TWk0ek16Z3pJRFV5TGpnNE1qRWdNakl1TmprMk9VTTFNeTQxTWpVMElESTFMalU1TnpNZ05UTXVORGd6TWlBeU9DNDFNRGd5SURVekxqQTVNeUF6TVM0ME5EQXlRelV5TGpjM05qWWdNek11TnpneE5pQTFNaTR5TURjeElETTJMakEwT1RJZ05URXVNek14TnlBek9DNHlORE5ETlRBdU1ETTBOQ0EwTVM0ME9EQTVJRFE0TGpFeU5UUWdORFF1TXpBM05DQTBOUzQyTVRVeklEUTJMamN6TXpKRE5EVXVOVEl3TXlBME5pNDRNRGNnTkRVdU5ESTFOQ0EwTmk0NE5UazRJRFExTGpNME1TQTBOaTQ1TWpOYUlpQm1hV3hzUFNJak5ESTROVVl6SWk4K0RRbzhjR0YwYUNCa1BTSk5NVE11TWpnNUlETXlMakEwTVRSRE1URXVORGMxSURNekxqUXlNeUE1TGpZMk1Ea3lJRE0wTGpjNU5ERWdOeTQ0TkRZNE5TQXpOaTR4TnpVNFF6WXVOekU0TXpRZ016Y3VNRE13TVNBMUxqVTRPVGd5SURNM0xqZzVORGtnTkM0ME5qRXpNU0F6T0M0M05UazRRek11TlRnMU9USWdNemN1TVRNMU5TQXpMakF4TmpNNUlETTFMalF4TmpRZ01pNDFOVEl6TWlBek15NDJORFExUXpFdU5qWTJNemtnTXpBdU1qRTJPQ0F4TGpVeU9USTRJREkyTGpjek5qTWdNaTR3TVRRME15QXlNeTR5TkRVelF6SXVNemswTVRJZ01qQXVOVEF6TVNBekxqRTROVEUwSURFM0xqZzJOalFnTkM0ME5qRXpNU0F4TlM0ek9UZzBRell1TURRek16UWdNVFl1TmpFeE15QTNMall4TkRneUlERTNMamd6TkRnZ09TNHhPVFk0TlNBeE9TNHdORGMzUXpFd0xqVTFOelFnTWpBdU1Ea3hPQ0F4TVM0NU1UYzVJREl4TGpFeU5UUWdNVE11TWpjNE5TQXlNaTR4TlRsRE1UTXVNRFEyTlNBeU15NHlPRGMxSURFeUxqY3hPVFVnTWpRdU16azBPU0F4TWk0Mk1UUWdNalV1TlRVMU1VTXhNaTQwTWpReUlESTNMalkyTkRVZ01USXVOakkwTmlBeU9TNDNNakV4SURFekxqSXlOVGdnTXpFdU56UTJNVU14TXk0eU5qYzVJRE14TGpnek1EVWdNVE11TWpjNE5TQXpNUzQ1TXpVNUlERXpMakk0T1NBek1pNHdOREUwV2lJZ1ptbHNiRDBpSTBaQlFrSXdOaUl2UGcwS1BDOXpkbWMrRFFvPVwiIiwiY29uc3QgQVBJX0RPTUFJTiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9ET01BSU47XHJcbmNvbnN0IFBBR0VfTElNSVQgPSAxMjtcclxuXHJcbmNvbnN0IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0sgPSBgJHtBUElfRE9NQUlOfS9hdXRoL2ZhY2Vib29rL2NhbGxiYWNrYDtcclxuY29uc3QgQVVUSF9GQUNFQk9PS19VUkwgPSBgJHtBUElfRE9NQUlOfS9jb25uZWN0L2ZhY2Vib29rYDtcclxuY29uc3QgQVVUSF9HT09HTEVfQ0FMTEJBQ0sgPSBgJHtBUElfRE9NQUlOfS9hdXRoL2dvb2dsZS9jYWxsYmFja2A7XHJcbmNvbnN0IEFVVEhfR09PR0xFX1VSTCA9IGAke0FQSV9ET01BSU59L2Nvbm5lY3QvZ29vZ2xlYDtcclxuXHJcbmNvbnN0IFNUUklQRV9QVUJMSVNIRURfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJU0hFRF9LRVk7XHJcblxyXG5leHBvcnQge1xyXG4gIEFQSV9ET01BSU4sXHJcbiAgUEFHRV9MSU1JVCxcclxuICBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLLFxyXG4gIEFVVEhfRkFDRUJPT0tfVVJMLFxyXG4gIEFVVEhfR09PR0xFX0NBTExCQUNLLFxyXG4gIEFVVEhfR09PR0xFX1VSTCxcclxuICBTVFJJUEVfUFVCTElTSEVEX0tFWVxyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLXNlc3Npb25zJztcclxuaW1wb3J0IElTZXNzaW9uIGZyb20gJ0AvbW9kZWxzL0lTZXNzaW9uJztcclxuaW1wb3J0IElVc2VyIGZyb20gJ0AvbW9kZWxzL0lVc2VyJztcclxuXHJcbi8vOiB1c2UgdGhpcyBjb250ZXh0IHdoZXJldmVyIHlvdSB3YW50IHRvIGFjY2VzcyB0aGUgQXV0aFByb3ZpZGVyXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xyXG5leHBvcnQgeyBBdXRoUHJvdmlkZXIgfTtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb21wb25lbnQgaW4gdGhlIF9hcHAudHN4IGZpbGUgdG8gc2hhcmUgdGhlIGF1dGhlbnRpY2F0aW9uIHN0YXRlXHJcbi8vOiBnbG9iYWxseVxyXG5mdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8SVVzZXI+KG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBsb2dpbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGlmICgnaWRfdG9rZW4nIGluIHJvdXRlci5xdWVyeSB8fCAnYWNjZXNzX3Rva2VuJyBpbiByb3V0ZXIucXVlcnkpIHtcclxuICAgICAgY29uc3Qgc2Vzc2lvbjogSVNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGxvY2F0aW9uLnNlYXJjaCk7XHJcblxyXG4gICAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdzZXNzaW9uJywgSlNPTi5zdHJpbmdpZnkoc2Vzc2lvbikpO1xyXG4gICAgICBzZXRVc2VyKHNlc3Npb24udXNlcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnc2Vzc2lvbicpO1xyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U2Vzc2lvblN0b3JhZ2UgPSAoKTogSVNlc3Npb24gfCBudWxsID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb24nKSk7XHJcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcigoX2Vycm9yIGFzIFN5bnRheEVycm9yKS5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0VG9rZW4gPSAoKTogc3RyaW5nIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gZ2V0U2Vzc2lvblN0b3JhZ2UoKS50b2tlbjtcclxuICB9O1xyXG5cclxuICAvLzogdXNlIHRoaXMgY3VzdG9tIGhvb2sgdG8gc2V0IHRoZSBsb2NhbCBzZXNzaW9uIGludG8gdGhlIGdsb2JhbCBzdGF0ZSBlYWNoXHJcbiAgLy86IHRpbWUgYSBwYWdlIGlzIHJlZnJlc2hlZDsgdXNlIGl0IG9ubHkgb24gcGFnZSBjb21wb25lbnRzXHJcbiAgY29uc3QgdXNlU2Vzc2lvbiA9ICgpOiB2b2lkID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlc3Npb246IElTZXNzaW9uID0gZ2V0U2Vzc2lvblN0b3JhZ2UoKTtcclxuXHJcbiAgICAgIHNldFVzZXIoc2Vzc2lvbj8udXNlcik7XHJcbiAgICB9LCBbXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNVc2VyTG9nZ2VkSW4gPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gZ2V0U2Vzc2lvblN0b3JhZ2UoKSA/IHRydWUgOiBmYWxzZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgIHVzZXIsIGxvZ2luLCBsb2dvdXQsIGdldFRva2VuLCBpc1VzZXJMb2dnZWRJbiwgdXNlU2Vzc2lvblxyXG4gICAgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIiwiLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gb2YgdGhlIEFwb2xsbyBDbGllbnQgdG8gZW5hYmxlIHRoZSB1c2Ugb2YgR3JhcGhRTC5cclxuICovXHJcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQXBvbGxvQ2xpZW50LFxyXG4gIEh0dHBMaW5rLFxyXG4gIEluTWVtb3J5Q2FjaGUsXHJcbiAgTm9ybWFsaXplZENhY2hlT2JqZWN0XHJcbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgQVBJX0RPTUFJTiB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xyXG5cclxubGV0IGFwb2xsb0NsaWVudDogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD47XHJcblxyXG5jb25zdCBjcmVhdGVBcG9sbG9DbGllbnQgPSAoKTogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD4gPT4ge1xyXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIGxpbms6IG5ldyBIdHRwTGluayh7IHVyaTogYCR7QVBJX0RPTUFJTn0vZ3JhcGhxbGAgfSksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG4gIH0pO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBpbml0aWFsaXplQXBvbGxvQ2xpZW50ID0gKGluaXRpYWxTdGF0ZTogYW55ID0gbnVsbCk6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+ID0+IHtcclxuICBjb25zdCBfYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudCgpO1xyXG5cclxuICAvLzogaW5pdGlhbCBzdGF0ZSBvZiBOZXh0LmpzIGRhdGEgZmV0Y2hpbmcgbWV0aG9kcyBpcyBoeWRyYXRlZCBoZXJlXHJcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgLy86IGdldCBleGlzdGluZyBjYWNoZSwgbG9hZGVkIGR1cmluZyBjbGllbnQgc2lkZSBkYXRhIGZldGNoaW5nXHJcbiAgICBjb25zdCBleGlzdGluZ0NhY2hlID0gX2Fwb2xsb0NsaWVudC5leHRyYWN0KCk7XHJcblxyXG4gICAgLy86IHJlc3RvcmUgdGhlIGNhY2hlIHVzaW5nIHRoZSBkYXRhIHBhc3NlZCBmcm9tIFwiZ2V0U3RhdGljUHJvcHNcIiBvclxyXG4gICAgLy86IFwiZ2V0U2VydmVyU2lkZVByb3BzXCIgY29tYmluZWQgd2l0aCB0aGUgZXhpc3RpbmcgY2FjaGUgZGF0YVxyXG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKHsgLi4uZXhpc3RpbmdDYWNoZSwgLi4uaW5pdGlhbFN0YXRlIH0pO1xyXG4gIH1cclxuXHJcbiAgLy86IGZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfYXBvbGxvQ2xpZW50O1xyXG5cclxuICAvLzogY3JlYXRlIHRoZSBBcG9sbG8gQ2xpZW50IG9uY2UgaW4gdGhlIGNsaWVudFxyXG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50O1xyXG5cclxuICByZXR1cm4gX2Fwb2xsb0NsaWVudDtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogdXNlIHRoaXMgY3VzdG9tIGhvb2sgaW4geW91ciBjb21wb25lbnRzIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIG9mIHRoZSBBcG9sbG9cclxuLy86IENsaWVudFxyXG5jb25zdCB1c2VBcG9sbG9DbGllbnQgPSAoaW5pdGlhbFN0YXRlOiBhbnkpOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiA9PiB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gaW5pdGlhbGl6ZUFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUpLFxyXG4gICAgW2luaXRpYWxTdGF0ZV1cclxuICApO1xyXG5cclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgeyBpbml0aWFsaXplQXBvbGxvQ2xpZW50LCB1c2VBcG9sbG9DbGllbnQgfTtcclxuIiwiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZ2V0RGVwYXJ0bWVudHMgfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtZGVwYXJ0bWVudHMnO1xyXG5pbXBvcnQgZmFjZWJvb2tMb2dvSW1hZ2UgZnJvbSAnQC9hc3NldHMvaW1hZ2VzL2ZhY2Vib29rLnN2Zyc7XHJcbmltcG9ydCBnb29nbGVMb2dvSW1hZ2UgZnJvbSAnQC9hc3NldHMvaW1hZ2VzL2dvb2dsZS5zdmcnO1xyXG5pbXBvcnQgeyBBVVRIX0ZBQ0VCT09LX1VSTCwgQVVUSF9HT09HTEVfVVJMIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvQ2xpZW50IH0gZnJvbSAnQC9saWIvYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCB1c2VWaWV3cG9ydCBmcm9tICdAL3V0aWxzL3VzZS12aWV3cG9ydCc7XHJcblxyXG5pbXBvcnQgT21uaWJhciBmcm9tICdAL2NvbXBvbmVudHMvbmF2YmFycy9PbW5pYmFyJztcclxuaW1wb3J0IFRhYmJhciwgeyBUQUJfUEFHRVMgfSBmcm9tICdAL2NvbXBvbmVudHMvbmF2YmFycy9UYWJiYXInO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHRhaWx3aW5kOiB7XHJcbiAgICBwYWdlQ29udGFpbmVyOiBgXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1jb2xcclxuICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgaC1zY3JlZW5cclxuICAgICAgb3ZlcmZsb3ctaGlkZGVuXHJcbiAgICAgIHctc2NyZWVuXHJcbiAgICBgLFxyXG4gICAgbWFpbkNvbnRlbnQ6IHtcclxuICAgICAgY29udGFpbmVyOiBgXHJcbiAgICAgICAgZmxleC0xXHJcbiAgICAgICAgbWItMjRcclxuICAgICAgICBtZDptYi1hdXRvXHJcbiAgICAgICAgbWQ6b3ZlcmZsb3ctdmlzaWJsZVxyXG4gICAgICAgIG92ZXJmbG93LXktc2Nyb2xsXHJcbiAgICAgICAgdy1mdWxsXHJcbiAgICAgIGAsXHJcbiAgICAgIGxvZ2luRm9ybToge1xyXG4gICAgICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICAgICAgYmctYnNlXHJcbiAgICAgICAgICBmbGV4XHJcbiAgICAgICAgICBmbGV4LWNvbFxyXG4gICAgICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICAgICAgbS02XHJcbiAgICAgICAgICBtZDpteC1hdXRvXHJcbiAgICAgICAgICBtZDpteS0xNlxyXG4gICAgICAgICAgbWQ6dy0xLzJcclxuICAgICAgICAgIGxnOnctMS8zXHJcbiAgICAgICAgICBwLTZcclxuICAgICAgICAgIHJvdW5kZWQteGxcclxuICAgICAgICAgIHRleHQtY2VudGVyXHJcbiAgICAgICAgICBzaGFkb3dcclxuICAgICAgICBgLFxyXG4gICAgICAgIHRpdGxlOiBgXHJcbiAgICAgICAgICBmb250LWJvbGRcclxuICAgICAgICAgIGZvbnQtZGlzcGxheVxyXG4gICAgICAgICAgbS02XHJcbiAgICAgICAgICB0ZXh0LTN4bFxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgZ3JvdXA6IGBcclxuICAgICAgICAgIG15LTZcclxuICAgICAgICAgIHctZnVsbFxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgICBjb250YWluZXI6IGBcclxuICAgICAgICAgICAgZmxleFxyXG4gICAgICAgICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICAgICAgICBmbGV4LXJvd1xyXG4gICAgICAgICAgICBmb250LWJvbGRcclxuICAgICAgICAgICAgaC0xNlxyXG4gICAgICAgICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAgICAgICAganVzdGlmeS1jZW50ZXJcclxuICAgICAgICAgICAgbWQ6bXgtYXV0b1xyXG4gICAgICAgICAgICBtZDp3LTYwXHJcbiAgICAgICAgICAgIG10LTZcclxuICAgICAgICAgICAgcm91bmRlZC1sZ1xyXG4gICAgICAgICAgICBzaGFkb3dcclxuICAgICAgICAgICAgdy1mdWxsXHJcbiAgICAgICAgICBgLFxyXG4gICAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBjb250YWluZXI6IGBcclxuICAgICAgICAgICAgICBmbGV4XHJcbiAgICAgICAgICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgICAgICAgICBmbGV4LXJvd1xyXG4gICAgICAgICAgICAgIGgtMTZcclxuICAgICAgICAgICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNlbnRlclxyXG4gICAgICAgICAgICAgIHctMTZcclxuICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgaW1hZ2U6IGBcclxuICAgICAgICAgICAgICBoLTZcclxuICAgICAgICAgICAgICB3LTZcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdlbmVyaWM6IHtcclxuICAgICAgZmFjZWJvb2s6IGBcclxuICAgICAgICBiZy1mYWNlYm9va1xyXG4gICAgICAgIHRleHQtYnNlXHJcbiAgICAgIGAsXHJcbiAgICAgIGdvb2dsZTogYFxyXG4gICAgICAgIGJnLWluYWN0aXZlXHJcbiAgICAgIGBcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoZW50aWNhdGlvblBhZ2UoeyBkZXBhcnRtZW50cyB9KSB7XHJcbiAgY29uc3QgeyB1c2VTZXNzaW9uLCBpc1VzZXJMb2dnZWRJbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgdmlld3BvcnQgPSB1c2VWaWV3cG9ydCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzVXNlckxvZ2dlZEluKCkpIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VTZXNzaW9uKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhaWx3aW5kLnBhZ2VDb250YWluZXJ9PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWlsd2luZC5tYWluQ29udGVudC5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQubWFpbkNvbnRlbnQubG9naW5Gb3JtLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQubWFpbkNvbnRlbnQubG9naW5Gb3JtLnRpdGxlfT5cclxuICAgICAgICAgICAgwqFCaWVudmVuaWRvIVxyXG4gICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICA8cD7CoUluZ3Jlc2EgeSBkaXNmcnV0YSBkZSB1bmEgZ3JhbiBleHBlcmllbmNpYSE8L3A+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWlsd2luZC5tYWluQ29udGVudC5sb2dpbkZvcm0uZ3JvdXB9PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9e0FVVEhfRkFDRUJPT0tfVVJMfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBzdHlsZXMudGFpbHdpbmQubWFpbkNvbnRlbnQubG9naW5Gb3JtLmJ1dHRvbi5jb250YWluZXIgK1xyXG4gICAgICAgICAgICAgICAgc3R5bGVzLnRhaWx3aW5kLmdlbmVyaWMuZmFjZWJvb2tcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQubWFpbkNvbnRlbnQubG9naW5Gb3JtLmJ1dHRvbi5pY29uLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZmFjZWJvb2tMb2dvSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhaWx3aW5kLm1haW5Db250ZW50LmxvZ2luRm9ybS5idXR0b24uaWNvbi5pbWFnZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkluZ3Jlc2EgY29uIEZhY2Vib29rPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj17QVVUSF9HT09HTEVfVVJMfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBzdHlsZXMudGFpbHdpbmQubWFpbkNvbnRlbnQubG9naW5Gb3JtLmJ1dHRvbi5jb250YWluZXIgK1xyXG4gICAgICAgICAgICAgICAgc3R5bGVzLnRhaWx3aW5kLmdlbmVyaWMuZ29vZ2xlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhaWx3aW5kLm1haW5Db250ZW50LmxvZ2luRm9ybS5idXR0b24uaWNvbi5jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2dvb2dsZUxvZ29JbWFnZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQubWFpbkNvbnRlbnQubG9naW5Gb3JtLmJ1dHRvbi5pY29uLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+SW5ncmVzYSBjb24gR29vZ2xlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG9DbGllbnQoKTtcclxuICBjb25zdCBkZXBhcnRtZW50cyA9IGF3YWl0IGdldERlcGFydG1lbnRzKGFwb2xsb0NsaWVudCk7XHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IGRlcGFydG1lbnRzIH0gfTtcclxufTtcclxuIiwiaW1wb3J0IHsgdHlwZSB9IGZyb20gXCJvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSVZpZXdwb3J0IHtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG59O1xyXG5cclxuLy86IHVzZSB0aGlzIGN1c3RvbSBob29rIHRvIGdldCB0aGUgdmlld3BvcnQgc2l6ZSBvZiB0aGUgc2NyZWVuIGluIG9yZGVyIHRvXHJcbi8vOiBleGVjdXRlIHNvbWUgY29kZSBiYXNlIG9uIHNjcmVlbiBzaXplXHJcbmNvbnN0IHVzZVZpZXdwb3J0ID0gKCk6IElWaWV3cG9ydCA9PiB7XHJcbiAgY29uc3QgW3ZpZXdwb3J0U2l6ZSwgc2V0Vmlld3BvcnRTaXplXSA9IHVzZVN0YXRlPElWaWV3cG9ydD4oe1xyXG4gICAgaGVpZ2h0OiAwLCB3aWR0aDogMFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdykge1xyXG4gICAgICBjb25zdCByZWZyZXNoVmlld3BvcnRTaXplID0gKCk6IHZvaWQgPT4gc2V0Vmlld3BvcnRTaXplKHtcclxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVmcmVzaFZpZXdwb3J0U2l6ZSgpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVmcmVzaFZpZXdwb3J0U2l6ZSk7XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlZnJlc2hWaWV3cG9ydFNpemUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHZpZXdwb3J0U2l6ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVZpZXdwb3J0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==