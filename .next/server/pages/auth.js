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
const API_DOMAIN = "http://cuatl.shop/api";
const PAGE_LIMIT = 12;
const AUTH_FACEBOOK_CALLBACK = `${API_DOMAIN}/auth/facebook/callback`;
const AUTH_FACEBOOK_URL = `${API_DOMAIN}/connect/facebook`; //const AUTH_GOOGLE_CALLBACK = `http://cuatl.shop/api/connect/google/callback`;
//const AUTH_GOOGLE_URL = `http://cuatl.shop/api/connect/google`;

const AUTH_GOOGLE_CALLBACK = `${API_DOMAIN}/connect/google/callback/`;
const AUTH_GOOGLE_URL = `${API_DOMAIN}/connect/google/`;
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
/* harmony import */ var _assets_images_google_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/google.svg */ "./assets/images/google.svg");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/apollo-client */ "./lib/apollo-client.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\pages\\auth.tsx";








const styles = {
  tailwind: {
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
    isUserLoggedIn
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (isUserLoggedIn()) router.push('/');
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    container: true,
    spacing: 1,
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: "30px"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
      item: true,
      xs: 12,
      sm: 10,
      md: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CardContent"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
            variant: "h4",
            align: "center",
            children: "\xA1Bienvenido!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
            variant: "body1",
            align: "center",
            children: "Ingresa y disfruta una gran experiencia"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: _config_globals__WEBPACK_IMPORTED_MODULE_5__["AUTH_GOOGLE_URL"],
            className: styles.tailwind.mainContent.loginForm.button.container + styles.tailwind.generic.google,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: styles.tailwind.mainContent.loginForm.button.icon.container,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: _assets_images_google_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
                className: styles.tailwind.mainContent.loginForm.button.icon.image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
              variant: "button",
              align: "center",
              children: "Ingresa con Google"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 7
  }, this);
}
;
const getServerSideProps = async () => {
  const apolloClient = Object(_lib_apollo_client__WEBPACK_IMPORTED_MODULE_7__["initializeApolloClient"])();
  const departments = await Object(_actions_fetch_departments__WEBPACK_IMPORTED_MODULE_3__["getDepartments"])(apolloClient);
  return {
    props: {
      departments
    }
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9mZXRjaC1kZXBhcnRtZW50cy50cyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2ZldGNoLXNlc3Npb25zLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ29vZ2xlLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb25maWcvZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9saWIvYXBvbGxvLWNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImdldERlcGFydG1lbnRzIiwiYXBvbGxvQ2xpZW50IiwiZXJyb3IiLCJkYXRhIiwibG9hZGluZyIsInF1ZXJ5IiwiZ3FsIiwiZGVwYXJ0bWVudHMiLCJnZXRTZXNzaW9uIiwidG9rZW4iLCJ1cmwiLCJpbmNsdWRlcyIsIkFVVEhfR09PR0xFX0NBTExCQUNLIiwiQVVUSF9GQUNFQk9PS19DQUxMQkFDSyIsInJlc3BvbnNlIiwiZmV0Y2giLCJzZXNzaW9uRGF0YSIsImpzb24iLCJqd3QiLCJ1c2VyIiwiaWQiLCJ1c2VybmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiZm9ybWF0cyIsInRodW1ibmFpbCIsIkFQSV9ET01BSU4iLCJwcm9jZXNzIiwiUEFHRV9MSU1JVCIsIkFVVEhfRkFDRUJPT0tfVVJMIiwiQVVUSF9HT09HTEVfVVJMIiwiU1RSSVBFX1BVQkxJU0hFRF9LRVkiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImxvZ2luIiwic2Vzc2lvbiIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwicHVzaCIsImdldFNlc3Npb25TdG9yYWdlIiwicGFyc2UiLCJnZXRJdGVtIiwiX2Vycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJnZXRUb2tlbiIsInVzZVNlc3Npb24iLCJ1c2VFZmZlY3QiLCJpc1VzZXJMb2dnZWRJbiIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImluaXRpYWxpemVBcG9sbG9DbGllbnQiLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJyZXN0b3JlIiwidXNlQXBvbGxvQ2xpZW50Iiwic3RvcmUiLCJ1c2VNZW1vIiwic3R5bGVzIiwidGFpbHdpbmQiLCJtYWluQ29udGVudCIsImNvbnRhaW5lciIsImxvZ2luRm9ybSIsImJ1dHRvbiIsImljb24iLCJpbWFnZSIsImdlbmVyaWMiLCJnb29nbGUiLCJBdXRoZW50aWNhdGlvblBhZ2UiLCJ1c2VDb250ZXh0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiZ29vZ2xlTG9nb0ltYWdlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJ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WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2F1dGgudHN4XCIpO1xuIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBncWwsIE5vcm1hbGl6ZWRDYWNoZU9iamVjdCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmltcG9ydCBJRGVwYXJ0bWVudCBmcm9tICdAL21vZGVscy9JRGVwYXJ0bWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGVwYXJ0bWVudHMgPSBhc3luYyAoXHJcbiAgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PlxyXG4pOiBQcm9taXNlPElEZXBhcnRtZW50W10+ID0+IHtcclxuICBsZXQgeyBlcnJvciwgZGF0YSwgbG9hZGluZyB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBncWxgXHJcbiAgICAgIHF1ZXJ5IGdldERlcGFydG1lbnRzIHtcclxuICAgICAgICBkZXBhcnRtZW50cyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBzdWJjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGBcclxuICB9KTtcclxuICBcclxuICByZXR1cm4gZXJyb3IgPz8gZGF0YS5kZXBhcnRtZW50cztcclxufTtcclxuIiwiaW1wb3J0IHsgQVVUSF9GQUNFQk9PS19DQUxMQkFDSywgQVVUSF9HT09HTEVfQ0FMTEJBQ0sgfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuaW1wb3J0IElTZXNzaW9uIGZyb20gJ0AvbW9kZWxzL0lTZXNzaW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uID0gYXN5bmMgKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPElTZXNzaW9uPiA9PiB7XHJcbiAgY29uc3QgdXJsOiBzdHJpbmcgPSB0b2tlbi5pbmNsdWRlcygnaWRfdG9rZW4nKVxyXG4gICAgPyBBVVRIX0dPT0dMRV9DQUxMQkFDS1xyXG4gICAgOiBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIHRva2VuKTtcclxuICBjb25zdCBzZXNzaW9uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRva2VuOiBzZXNzaW9uRGF0YS5qd3QsXHJcbiAgICB1c2VyOiB7XHJcbiAgICAgIGlkOiBzZXNzaW9uRGF0YS51c2VyLmlkLFxyXG4gICAgICB1c2VybmFtZTogc2Vzc2lvbkRhdGEudXNlci51c2VybmFtZSxcclxuICAgICAgZW1haWw6IHNlc3Npb25EYXRhLnVzZXIuZW1haWwsXHJcbiAgICAgIGF2YXRhcjogc2Vzc2lvbkRhdGEudXNlci5hdmF0YXJcclxuICAgICAgICA/IHNlc3Npb25EYXRhLnVzZXIuYXZhdGFyLmZvcm1hdHMudGh1bWJuYWlsXHJcbiAgICAgICAgOiBudWxsXHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTlRRaUlIWnBaWGRDYjNnOUlqQWdNQ0ExTkNBMU5DSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JR1E5SWswMExqUTNNVGcySURFMUxqTTROemRETmk0eE1EWTJNeUF4TVM0NU9ERWdPQzQwTVRZek9TQTVMakV3TVRjMElERXhMak15TnpNZ05pNDNNRGMyUXpFMUxqSTNNVGtnTXk0ME5EZzJNU0F4T1M0M09UWTFJREV1TkRnMk9Ea2dNalF1T0RZNU5TQXdMamc0TlRjeU1rTXpNQzQ0TWpnMUlEQXVNVGM1TURneElETTJMalF5T0RrZ01TNHpNRGMySURReExqWXdOelFnTkM0ME1EZ3pPRU0wTWk0NE9UUXhJRFV1TVRjNE15QTBOQzR3T1RZMUlEWXVNRFV6TmprZ05EVXVNalEyTVNBM0xqQXdNamt4UXpRMUxqVXpNRGdnTnk0eU16UTVOQ0EwTlM0ME9Ua3lJRGN1TXpjeU1EVWdORFV1TWpVMk5pQTNMall3TkRBNFF6UXlMamt3TkRjZ09TNDVORFUwT1NBME1DNDFOVEkzSURFeUxqSTROamtnTXpndU1qSXhPU0F4TkM0Mk5EazBRek0zTGprME56WWdNVFF1T1RJek5pQXpOeTQ0SURFMExqa3dNalVnTXpjdU5UQTBOeUF4TkM0Mk9ERkRNekF1Tmpjd015QTVMalF4T0RFMUlESXdMamN3TXpVZ01UQXVPRFF5SURFMUxqWXdPVFFnTVRjdU9EQXlPVU14TkM0M01USTVJREU1TGpBeU5qUWdNVE11T1RnMU1TQXlNQzR6TkRRM0lERXpMalEzT0RrZ01qRXVOemM1TVVNeE15NDBNelkzSURJeExqa3dOVFlnTVRNdU16VXlNeUF5TWk0d01qRTNJREV6TGpJNE9URWdNakl1TVRRNE1rTXhNUzQ1TWpnMUlESXhMakV4TkRZZ01UQXVOVFUzTkNBeU1DNHdPREVnT1M0eU1EYzBNU0F4T1M0d016WTVRemN1TmpJMU16Z2dNVGN1T0RJMElEWXVNRFF6TXpVZ01UWXVOakV4TVNBMExqUTNNVGcySURFMUxqTTROemRhSWlCbWFXeHNQU0lqUlRrME16TTFJaTgrRFFvOGNHRjBhQ0JrUFNKTk1UTXVNamc1SURNeUxqQTBNVU14TXk0M05ESTJJRE16TGpBME15QXhOQzR4TWpJeUlETTBMakE0TnpFZ01UUXVOamt4T0NBek5TNHdNalU0UXpFM0xqQTROVGtnTXpndU9UUTVNaUF5TUM0MU1ETXhJRFF4TGpRMk9Ua2dNalV1TURBMk5pQTBNaTR6TmpZMFF6STVMakEyTnpJZ05ETXVNVGM0TlNBek1pNDVOamsxSURReUxqWXpNREVnTXpZdU5qQTRNaUEwTUM0MU9UUTFRek0yTGpjek5EY2dOREF1TlRNeE15QXpOaTQ0TmpFeklEUXdMalEyT0NBek5pNDVOemN6SURRd0xqUXdORGRETXpjdU1EUXdOaUEwTUM0ME5qZ2dNemN1TURrek15QTBNQzQxTkRFNElETTNMakUxTmpZZ05EQXVOVGswTlVNek9TNDROemMzSURReUxqY3dNemtnTkRJdU5qQTVOQ0EwTkM0NE1UTXpJRFExTGpNek1EUWdORFl1T1RJeU4wTTBOQzR3TWpJMklEUTRMakl4T1RrZ05ESXVOVE0xTlNBME9TNHlOalF4SURRd0xqazFNelVnTlRBdU1UY3hNVU16Tmk0ek5qVTJJRFV5TGpjNE5qY2dNekV1TXprNElEVXpMamcwTVRRZ01qWXVNVFkyT0NBMU15NDBOREEyUXpFNUxqWTBPRGdnTlRJdU9UTTBOQ0F4TkM0d01qY3pJRFV3TGpNMk1Ea2dPUzR6T0RZMk9TQTBOUzQzTWpBelF6Y3VNelV4TVRVZ05ETXVOamcwT0NBMUxqWTNOREU1SURReExqTTROVFVnTkM0ME5qRXpJRE00TGpjMU9UUkROUzQxT0RrNE1pQXpOeTQ0T1RRMUlEWXVOekU0TXpRZ016Y3VNRFF3TWlBM0xqZzBOamcxSURNMkxqRTNOVFJET1M0Mk5qQTVNU0F6TkM0M09UTTRJREV4TGpRM05TQXpNeTQwTWpJM0lERXpMakk0T1NBek1pNHdOREZhSWlCbWFXeHNQU0lqTXpSQk9EVXpJaTgrRFFvOGNHRjBhQ0JrUFNKTk5EVXVNelF4SURRMkxqa3lNME0wTWk0Mk1UazVJRFEwTGpneE16Y2dNemt1T0RnNE15QTBNaTQzTURReklETTNMakUyTnpJZ05EQXVOVGswT1VNek55NHhNRE01SURRd0xqVTBNaklnTXpjdU1EUXdOaUEwTUM0ME5qZzBJRE0yTGprNE56a2dOREF1TkRBMU1VTXpOeTQ1TWpZMklETTVMalkzTnpNZ016Z3VPRGcyTXlBek9DNDVOekEzSURNNUxqWTFOak1nTXpndU1EUXlOa00wTUM0NU5ETWdNell1TlRBeU55QTBNUzQzT1RjeklETTBMamMyTWpVZ05ESXVNalF3TXlBek1pNDRNVEV6UXpReUxqSTVNeUF6TWk0MU5qZzNJRFF5TGpJMU1EZ2dNekl1TkRnME5DQTBNaTR3TURneUlETXlMalE1TkRsRE5ERXVPRGd4TnlBek1pNDFNRFUxSURReExqYzJOVFlnTXpJdU5EazBPU0EwTVM0Mk16a3hJRE15TGpRNU5EbERNemN1TXpNMklETXlMalE1TkRrZ016TXVNREl5TXlBek1pNDBPRFEwSURJNExqY3hPVElnTXpJdU5UQTFOVU15T0M0eU5EUTFJRE15TGpVd05UVWdNamd1TVRNNU1TQXpNaTR6TnpnNUlESTRMakUwT1RZZ016RXVPVEkxTkVNeU9DNHhOekEzSURJNExqZzJOamdnTWpndU1UY3dOeUF5TlM0NE1EZ3lJREk0TGpFME9UWWdNakl1TnpRNU5rTXlPQzR4TkRrMklESXlMak0xT1RRZ01qZ3VNalUxTVNBeU1pNHlOVE01SURJNExqWTBOVE1nTWpJdU1qVXpPVU16Tmk0MU16UTBJREl5TGpJMk5EVWdORFF1TkRJek5TQXlNaTR5TmpRMUlEVXlMak15TXpFZ01qSXVNalV6T1VNMU1pNDJOakEySURJeUxqSTFNemtnTlRJdU56azNOeUF5TWk0ek16Z3pJRFV5TGpnNE1qRWdNakl1TmprMk9VTTFNeTQxTWpVMElESTFMalU1TnpNZ05UTXVORGd6TWlBeU9DNDFNRGd5SURVekxqQTVNeUF6TVM0ME5EQXlRelV5TGpjM05qWWdNek11TnpneE5pQTFNaTR5TURjeElETTJMakEwT1RJZ05URXVNek14TnlBek9DNHlORE5ETlRBdU1ETTBOQ0EwTVM0ME9EQTVJRFE0TGpFeU5UUWdORFF1TXpBM05DQTBOUzQyTVRVeklEUTJMamN6TXpKRE5EVXVOVEl3TXlBME5pNDRNRGNnTkRVdU5ESTFOQ0EwTmk0NE5UazRJRFExTGpNME1TQTBOaTQ1TWpOYUlpQm1hV3hzUFNJak5ESTROVVl6SWk4K0RRbzhjR0YwYUNCa1BTSk5NVE11TWpnNUlETXlMakEwTVRSRE1URXVORGMxSURNekxqUXlNeUE1TGpZMk1Ea3lJRE0wTGpjNU5ERWdOeTQ0TkRZNE5TQXpOaTR4TnpVNFF6WXVOekU0TXpRZ016Y3VNRE13TVNBMUxqVTRPVGd5SURNM0xqZzVORGtnTkM0ME5qRXpNU0F6T0M0M05UazRRek11TlRnMU9USWdNemN1TVRNMU5TQXpMakF4TmpNNUlETTFMalF4TmpRZ01pNDFOVEl6TWlBek15NDJORFExUXpFdU5qWTJNemtnTXpBdU1qRTJPQ0F4TGpVeU9USTRJREkyTGpjek5qTWdNaTR3TVRRME15QXlNeTR5TkRVelF6SXVNemswTVRJZ01qQXVOVEF6TVNBekxqRTROVEUwSURFM0xqZzJOalFnTkM0ME5qRXpNU0F4TlM0ek9UZzBRell1TURRek16UWdNVFl1TmpFeE15QTNMall4TkRneUlERTNMamd6TkRnZ09TNHhPVFk0TlNBeE9TNHdORGMzUXpFd0xqVTFOelFnTWpBdU1Ea3hPQ0F4TVM0NU1UYzVJREl4TGpFeU5UUWdNVE11TWpjNE5TQXlNaTR4TlRsRE1UTXVNRFEyTlNBeU15NHlPRGMxSURFeUxqY3hPVFVnTWpRdU16azBPU0F4TWk0Mk1UUWdNalV1TlRVMU1VTXhNaTQwTWpReUlESTNMalkyTkRVZ01USXVOakkwTmlBeU9TNDNNakV4SURFekxqSXlOVGdnTXpFdU56UTJNVU14TXk0eU5qYzVJRE14TGpnek1EVWdNVE11TWpjNE5TQXpNUzQ1TXpVNUlERXpMakk0T1NBek1pNHdOREUwV2lJZ1ptbHNiRDBpSTBaQlFrSXdOaUl2UGcwS1BDOXpkbWMrRFFvPVwiIiwiY29uc3QgQVBJX0RPTUFJTiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9ET01BSU47XHJcbmNvbnN0IFBBR0VfTElNSVQgPSAxMjtcclxuXHJcbmNvbnN0IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0sgPSBgJHtBUElfRE9NQUlOfS9hdXRoL2ZhY2Vib29rL2NhbGxiYWNrYDtcclxuY29uc3QgQVVUSF9GQUNFQk9PS19VUkwgPSBgJHtBUElfRE9NQUlOfS9jb25uZWN0L2ZhY2Vib29rYDtcclxuLy9jb25zdCBBVVRIX0dPT0dMRV9DQUxMQkFDSyA9IGBodHRwOi8vY3VhdGwuc2hvcC9hcGkvY29ubmVjdC9nb29nbGUvY2FsbGJhY2tgO1xyXG4vL2NvbnN0IEFVVEhfR09PR0xFX1VSTCA9IGBodHRwOi8vY3VhdGwuc2hvcC9hcGkvY29ubmVjdC9nb29nbGVgO1xyXG5jb25zdCBBVVRIX0dPT0dMRV9DQUxMQkFDSyA9IGAke0FQSV9ET01BSU59L2Nvbm5lY3QvZ29vZ2xlL2NhbGxiYWNrL2A7XHJcbmNvbnN0IEFVVEhfR09PR0xFX1VSTCA9IGAke0FQSV9ET01BSU59L2Nvbm5lY3QvZ29vZ2xlL2A7XHJcblxyXG5cclxuY29uc3QgU1RSSVBFX1BVQkxJU0hFRF9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElTSEVEX0tFWTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQVBJX0RPTUFJTixcclxuICBQQUdFX0xJTUlULFxyXG4gIEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0ssXHJcbiAgQVVUSF9GQUNFQk9PS19VUkwsXHJcbiAgQVVUSF9HT09HTEVfQ0FMTEJBQ0ssXHJcbiAgQVVUSF9HT09HTEVfVVJMLFxyXG4gIFNUUklQRV9QVUJMSVNIRURfS0VZXHJcbn07XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtc2Vzc2lvbnMnO1xyXG5pbXBvcnQgSVNlc3Npb24gZnJvbSAnQC9tb2RlbHMvSVNlc3Npb24nO1xyXG5pbXBvcnQgSVVzZXIgZnJvbSAnQC9tb2RlbHMvSVVzZXInO1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbnRleHQgd2hlcmV2ZXIgeW91IHdhbnQgdG8gYWNjZXNzIHRoZSBBdXRoUHJvdmlkZXJcclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XHJcbmV4cG9ydCB7IEF1dGhQcm92aWRlciB9O1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbXBvbmVudCBpbiB0aGUgX2FwcC50c3ggZmlsZSB0byBzaGFyZSB0aGUgYXV0aGVudGljYXRpb24gc3RhdGVcclxuLy86IGdsb2JhbGx5XHJcbmZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxJVXNlcj4obnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgaWYgKCdpZF90b2tlbicgaW4gcm91dGVyLnF1ZXJ5IHx8ICdhY2Nlc3NfdG9rZW4nIGluIHJvdXRlci5xdWVyeSkge1xyXG4gICAgICBjb25zdCBzZXNzaW9uOiBJU2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24obG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Nlc3Npb24nLCBKU09OLnN0cmluZ2lmeShzZXNzaW9uKSk7XHJcbiAgICAgIHNldFVzZXIoc2Vzc2lvbi51c2VyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdzZXNzaW9uJyk7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgcm91dGVyLnB1c2goJy8nKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRTZXNzaW9uU3RvcmFnZSA9ICgpOiBJU2Vzc2lvbiB8IG51bGwgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbicpKTtcclxuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKChfZXJyb3IgYXMgU3ludGF4RXJyb3IpLm1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRUb2tlbiA9ICgpOiBzdHJpbmcgfCBudWxsID0+IHtcclxuICAgIHJldHVybiBnZXRTZXNzaW9uU3RvcmFnZSgpLnRva2VuO1xyXG4gIH07XHJcblxyXG4gIC8vOiB1c2UgdGhpcyBjdXN0b20gaG9vayB0byBzZXQgdGhlIGxvY2FsIHNlc3Npb24gaW50byB0aGUgZ2xvYmFsIHN0YXRlIGVhY2hcclxuICAvLzogdGltZSBhIHBhZ2UgaXMgcmVmcmVzaGVkOyB1c2UgaXQgb25seSBvbiBwYWdlIGNvbXBvbmVudHNcclxuICBjb25zdCB1c2VTZXNzaW9uID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgc2Vzc2lvbjogSVNlc3Npb24gPSBnZXRTZXNzaW9uU3RvcmFnZSgpO1xyXG5cclxuICAgICAgc2V0VXNlcihzZXNzaW9uPy51c2VyKTtcclxuICAgIH0sIFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc1VzZXJMb2dnZWRJbiA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiBnZXRTZXNzaW9uU3RvcmFnZSgpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgdXNlciwgbG9naW4sIGxvZ291dCwgZ2V0VG9rZW4sIGlzVXNlckxvZ2dlZEluLCB1c2VTZXNzaW9uXHJcbiAgICB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCIvKipcclxuICogQ29uZmlndXJhdGlvbiBvZiB0aGUgQXBvbGxvIENsaWVudCB0byBlbmFibGUgdGhlIHVzZSBvZiBHcmFwaFFMLlxyXG4gKi9cclxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBBcG9sbG9DbGllbnQsXHJcbiAgSHR0cExpbmssXHJcbiAgSW5NZW1vcnlDYWNoZSxcclxuICBOb3JtYWxpemVkQ2FjaGVPYmplY3RcclxufSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBBUElfRE9NQUlOIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcblxyXG5sZXQgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PjtcclxuXHJcbmNvbnN0IGNyZWF0ZUFwb2xsb0NsaWVudCA9ICgpOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiA9PiB7XHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgbGluazogbmV3IEh0dHBMaW5rKHsgdXJpOiBgJHtBUElfRE9NQUlOfS9ncmFwaHFsYCB9KSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbiAgfSk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGluaXRpYWxpemVBcG9sbG9DbGllbnQgPSAoaW5pdGlhbFN0YXRlOiBhbnkgPSBudWxsKTogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD4gPT4ge1xyXG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KCk7XHJcblxyXG4gIC8vOiBpbml0aWFsIHN0YXRlIG9mIE5leHQuanMgZGF0YSBmZXRjaGluZyBtZXRob2RzIGlzIGh5ZHJhdGVkIGhlcmVcclxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICAvLzogZ2V0IGV4aXN0aW5nIGNhY2hlLCBsb2FkZWQgZHVyaW5nIGNsaWVudCBzaWRlIGRhdGEgZmV0Y2hpbmdcclxuICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGUgPSBfYXBvbGxvQ2xpZW50LmV4dHJhY3QoKTtcclxuXHJcbiAgICAvLzogcmVzdG9yZSB0aGUgY2FjaGUgdXNpbmcgdGhlIGRhdGEgcGFzc2VkIGZyb20gXCJnZXRTdGF0aWNQcm9wc1wiIG9yXHJcbiAgICAvLzogXCJnZXRTZXJ2ZXJTaWRlUHJvcHNcIiBjb21iaW5lZCB3aXRoIHRoZSBleGlzdGluZyBjYWNoZSBkYXRhXHJcbiAgICBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoeyAuLi5leGlzdGluZ0NhY2hlLCAuLi5pbml0aWFsU3RhdGUgfSk7XHJcbiAgfVxyXG5cclxuICAvLzogZm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgQXBvbGxvIENsaWVudFxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XHJcblxyXG4gIC8vOiBjcmVhdGUgdGhlIEFwb2xsbyBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnQ7XHJcblxyXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50O1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiB1c2UgdGhpcyBjdXN0b20gaG9vayBpbiB5b3VyIGNvbXBvbmVudHMgdG8gaHlkcmF0ZSB0aGUgc3RhdGUgb2YgdGhlIEFwb2xsb1xyXG4vLzogQ2xpZW50XHJcbmNvbnN0IHVzZUFwb2xsb0NsaWVudCA9IChpbml0aWFsU3RhdGU6IGFueSk6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+ID0+IHtcclxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiBpbml0aWFsaXplQXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSksXHJcbiAgICBbaW5pdGlhbFN0YXRlXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGluaXRpYWxpemVBcG9sbG9DbGllbnQsIHVzZUFwb2xsb0NsaWVudCB9O1xyXG4iLCJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldERlcGFydG1lbnRzIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLWRlcGFydG1lbnRzJztcclxuaW1wb3J0IGdvb2dsZUxvZ29JbWFnZSBmcm9tICdAL2Fzc2V0cy9pbWFnZXMvZ29vZ2xlLnN2Zyc7XHJcbmltcG9ydCB7IEFVVEhfR09PR0xFX1VSTCB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnQC9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCB9IGZyb20gJ0AvbGliL2Fwb2xsby1jbGllbnQnO1xyXG5pbXBvcnQgeyBDYXJkQ29udGVudCwgQ2FyZCwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB0YWlsd2luZDoge1xyXG4gICAgbWFpbkNvbnRlbnQ6IHtcclxuICAgICAgY29udGFpbmVyOiBgXHJcbiAgICAgICAgZmxleC0xXHJcbiAgICAgICAgbWItMjRcclxuICAgICAgICBtZDptYi1hdXRvXHJcbiAgICAgICAgbWQ6b3ZlcmZsb3ctdmlzaWJsZVxyXG4gICAgICAgIG92ZXJmbG93LXktc2Nyb2xsXHJcbiAgICAgICAgdy1mdWxsXHJcbiAgICAgIGAsXHJcbiAgICAgIGxvZ2luRm9ybToge1xyXG4gICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgY29udGFpbmVyOiBgXHJcbiAgICAgICAgICAgIGZsZXhcclxuICAgICAgICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgICAgICAgZmxleC1yb3dcclxuICAgICAgICAgICAgZm9udC1ib2xkXHJcbiAgICAgICAgICAgIGgtMTZcclxuICAgICAgICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICAgICAgICAgIGp1c3RpZnktY2VudGVyXHJcbiAgICAgICAgICAgIG1kOm14LWF1dG9cclxuICAgICAgICAgICAgbWQ6dy02MFxyXG4gICAgICAgICAgICBtdC02XHJcbiAgICAgICAgICAgIHJvdW5kZWQtbGdcclxuICAgICAgICAgICAgc2hhZG93XHJcbiAgICAgICAgICAgIHctZnVsbFxyXG4gICAgICAgICAgYCxcclxuICAgICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiBgXHJcbiAgICAgICAgICAgICAgZmxleFxyXG4gICAgICAgICAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgICAgICAgICAgZmxleC1yb3dcclxuICAgICAgICAgICAgICBoLTE2XHJcbiAgICAgICAgICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICAgICAgICAgICAganVzdGlmeS1jZW50ZXJcclxuICAgICAgICAgICAgICB3LTE2XHJcbiAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgIGltYWdlOiBgXHJcbiAgICAgICAgICAgICAgaC02XHJcbiAgICAgICAgICAgICAgdy02XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZW5lcmljOiB7XHJcbiAgICAgIGdvb2dsZTogYFxyXG4gICAgICAgIGJnLWluYWN0aXZlXHJcbiAgICAgIGBcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoZW50aWNhdGlvblBhZ2UoeyBkZXBhcnRtZW50cyB9KSB7XHJcbiAgY29uc3QgeyBpc1VzZXJMb2dnZWRJbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNVc2VyTG9nZ2VkSW4oKSkgcm91dGVyLnB1c2goJy8nKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjMwcHhcIlxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCI+wqFCaWVudmVuaWRvITwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBhbGlnbj1cImNlbnRlclwiPkluZ3Jlc2EgeSBkaXNmcnV0YSB1bmEgZ3JhbiBleHBlcmllbmNpYTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e0FVVEhfR09PR0xFX1VSTH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXMudGFpbHdpbmQubWFpbkNvbnRlbnQubG9naW5Gb3JtLmJ1dHRvbi5jb250YWluZXIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcy50YWlsd2luZC5nZW5lcmljLmdvb2dsZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQubWFpbkNvbnRlbnQubG9naW5Gb3JtLmJ1dHRvbi5pY29uLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Z29vZ2xlTG9nb0ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQubWFpbkNvbnRlbnQubG9naW5Gb3JtLmJ1dHRvbi5pY29uLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJ1dHRvblwiIGFsaWduPVwiY2VudGVyXCI+SW5ncmVzYSBjb24gR29vZ2xlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCgpO1xyXG4gIGNvbnN0IGRlcGFydG1lbnRzID0gYXdhaXQgZ2V0RGVwYXJ0bWVudHMoYXBvbGxvQ2xpZW50KTtcclxuXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgZGVwYXJ0bWVudHMgfSB9O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==