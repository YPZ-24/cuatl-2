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

const AUTH_GOOGLE_CALLBACK = `${API_DOMAIN}/connect/google/callback`;
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
    const s = getSessionStorage();
    console.log("s");
    console.log(s);
    return s ? true : false;
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
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9mZXRjaC1kZXBhcnRtZW50cy50cyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2ZldGNoLXNlc3Npb25zLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ29vZ2xlLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb25maWcvZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9saWIvYXBvbGxvLWNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImdldERlcGFydG1lbnRzIiwiYXBvbGxvQ2xpZW50IiwiZXJyb3IiLCJkYXRhIiwibG9hZGluZyIsInF1ZXJ5IiwiZ3FsIiwiZGVwYXJ0bWVudHMiLCJnZXRTZXNzaW9uIiwidG9rZW4iLCJ1cmwiLCJpbmNsdWRlcyIsIkFVVEhfR09PR0xFX0NBTExCQUNLIiwiQVVUSF9GQUNFQk9PS19DQUxMQkFDSyIsInJlc3BvbnNlIiwiZmV0Y2giLCJzZXNzaW9uRGF0YSIsImpzb24iLCJqd3QiLCJ1c2VyIiwiaWQiLCJ1c2VybmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiZm9ybWF0cyIsInRodW1ibmFpbCIsIkFQSV9ET01BSU4iLCJwcm9jZXNzIiwiUEFHRV9MSU1JVCIsIkFVVEhfRkFDRUJPT0tfVVJMIiwiQVVUSF9HT09HTEVfVVJMIiwiU1RSSVBFX1BVQkxJU0hFRF9LRVkiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImxvZ2luIiwic2Vzc2lvbiIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwicHVzaCIsImdldFNlc3Npb25TdG9yYWdlIiwicGFyc2UiLCJnZXRJdGVtIiwiX2Vycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJnZXRUb2tlbiIsInVzZVNlc3Npb24iLCJ1c2VFZmZlY3QiLCJpc1VzZXJMb2dnZWRJbiIsInMiLCJsb2ciLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJpbml0aWFsaXplQXBvbGxvQ2xpZW50IiwiaW5pdGlhbFN0YXRlIiwiX2Fwb2xsb0NsaWVudCIsImV4aXN0aW5nQ2FjaGUiLCJleHRyYWN0IiwicmVzdG9yZSIsInVzZUFwb2xsb0NsaWVudCIsInN0b3JlIiwidXNlTWVtbyIsInN0eWxlcyIsInRhaWx3aW5kIiwibWFpbkNvbnRlbnQiLCJjb250YWluZXIiLCJsb2dpbkZvcm0iLCJidXR0b24iLCJpY29uIiwiaW1hZ2UiLCJnZW5lcmljIiwiZ29vZ2xlIiwiQXV0aGVudGljYXRpb25QYWdlIiwidXNlQ29udGV4dCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsImdvb2dsZUxvZ29JbWFnZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2F1dGgudHN4XCIpO1xuIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBncWwsIE5vcm1hbGl6ZWRDYWNoZU9iamVjdCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmltcG9ydCBJRGVwYXJ0bWVudCBmcm9tICdAL21vZGVscy9JRGVwYXJ0bWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGVwYXJ0bWVudHMgPSBhc3luYyAoXHJcbiAgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PlxyXG4pOiBQcm9taXNlPElEZXBhcnRtZW50W10+ID0+IHtcclxuICBsZXQgeyBlcnJvciwgZGF0YSwgbG9hZGluZyB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBncWxgXHJcbiAgICAgIHF1ZXJ5IGdldERlcGFydG1lbnRzIHtcclxuICAgICAgICBkZXBhcnRtZW50cyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBzdWJjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGBcclxuICB9KTtcclxuICBcclxuICByZXR1cm4gZXJyb3IgPz8gZGF0YS5kZXBhcnRtZW50cztcclxufTtcclxuIiwiaW1wb3J0IHsgQVVUSF9GQUNFQk9PS19DQUxMQkFDSywgQVVUSF9HT09HTEVfQ0FMTEJBQ0sgfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuaW1wb3J0IElTZXNzaW9uIGZyb20gJ0AvbW9kZWxzL0lTZXNzaW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uID0gYXN5bmMgKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPElTZXNzaW9uPiA9PiB7XHJcbiAgY29uc3QgdXJsOiBzdHJpbmcgPSB0b2tlbi5pbmNsdWRlcygnaWRfdG9rZW4nKVxyXG4gICAgPyBBVVRIX0dPT0dMRV9DQUxMQkFDS1xyXG4gICAgOiBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIHRva2VuKTtcclxuICBjb25zdCBzZXNzaW9uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRva2VuOiBzZXNzaW9uRGF0YS5qd3QsXHJcbiAgICB1c2VyOiB7XHJcbiAgICAgIGlkOiBzZXNzaW9uRGF0YS51c2VyLmlkLFxyXG4gICAgICB1c2VybmFtZTogc2Vzc2lvbkRhdGEudXNlci51c2VybmFtZSxcclxuICAgICAgZW1haWw6IHNlc3Npb25EYXRhLnVzZXIuZW1haWwsXHJcbiAgICAgIGF2YXRhcjogc2Vzc2lvbkRhdGEudXNlci5hdmF0YXJcclxuICAgICAgICA/IHNlc3Npb25EYXRhLnVzZXIuYXZhdGFyLmZvcm1hdHMudGh1bWJuYWlsXHJcbiAgICAgICAgOiBudWxsXHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTlRRaUlIWnBaWGRDYjNnOUlqQWdNQ0ExTkNBMU5DSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JR1E5SWswMExqUTNNVGcySURFMUxqTTROemRETmk0eE1EWTJNeUF4TVM0NU9ERWdPQzQwTVRZek9TQTVMakV3TVRjMElERXhMak15TnpNZ05pNDNNRGMyUXpFMUxqSTNNVGtnTXk0ME5EZzJNU0F4T1M0M09UWTFJREV1TkRnMk9Ea2dNalF1T0RZNU5TQXdMamc0TlRjeU1rTXpNQzQ0TWpnMUlEQXVNVGM1TURneElETTJMalF5T0RrZ01TNHpNRGMySURReExqWXdOelFnTkM0ME1EZ3pPRU0wTWk0NE9UUXhJRFV1TVRjNE15QTBOQzR3T1RZMUlEWXVNRFV6TmprZ05EVXVNalEyTVNBM0xqQXdNamt4UXpRMUxqVXpNRGdnTnk0eU16UTVOQ0EwTlM0ME9Ua3lJRGN1TXpjeU1EVWdORFV1TWpVMk5pQTNMall3TkRBNFF6UXlMamt3TkRjZ09TNDVORFUwT1NBME1DNDFOVEkzSURFeUxqSTROamtnTXpndU1qSXhPU0F4TkM0Mk5EazBRek0zTGprME56WWdNVFF1T1RJek5pQXpOeTQ0SURFMExqa3dNalVnTXpjdU5UQTBOeUF4TkM0Mk9ERkRNekF1Tmpjd015QTVMalF4T0RFMUlESXdMamN3TXpVZ01UQXVPRFF5SURFMUxqWXdPVFFnTVRjdU9EQXlPVU14TkM0M01USTVJREU1TGpBeU5qUWdNVE11T1RnMU1TQXlNQzR6TkRRM0lERXpMalEzT0RrZ01qRXVOemM1TVVNeE15NDBNelkzSURJeExqa3dOVFlnTVRNdU16VXlNeUF5TWk0d01qRTNJREV6TGpJNE9URWdNakl1TVRRNE1rTXhNUzQ1TWpnMUlESXhMakV4TkRZZ01UQXVOVFUzTkNBeU1DNHdPREVnT1M0eU1EYzBNU0F4T1M0d016WTVRemN1TmpJMU16Z2dNVGN1T0RJMElEWXVNRFF6TXpVZ01UWXVOakV4TVNBMExqUTNNVGcySURFMUxqTTROemRhSWlCbWFXeHNQU0lqUlRrME16TTFJaTgrRFFvOGNHRjBhQ0JrUFNKTk1UTXVNamc1SURNeUxqQTBNVU14TXk0M05ESTJJRE16TGpBME15QXhOQzR4TWpJeUlETTBMakE0TnpFZ01UUXVOamt4T0NBek5TNHdNalU0UXpFM0xqQTROVGtnTXpndU9UUTVNaUF5TUM0MU1ETXhJRFF4TGpRMk9Ua2dNalV1TURBMk5pQTBNaTR6TmpZMFF6STVMakEyTnpJZ05ETXVNVGM0TlNBek1pNDVOamsxSURReUxqWXpNREVnTXpZdU5qQTRNaUEwTUM0MU9UUTFRek0yTGpjek5EY2dOREF1TlRNeE15QXpOaTQ0TmpFeklEUXdMalEyT0NBek5pNDVOemN6SURRd0xqUXdORGRETXpjdU1EUXdOaUEwTUM0ME5qZ2dNemN1TURrek15QTBNQzQxTkRFNElETTNMakUxTmpZZ05EQXVOVGswTlVNek9TNDROemMzSURReUxqY3dNemtnTkRJdU5qQTVOQ0EwTkM0NE1UTXpJRFExTGpNek1EUWdORFl1T1RJeU4wTTBOQzR3TWpJMklEUTRMakl4T1RrZ05ESXVOVE0xTlNBME9TNHlOalF4SURRd0xqazFNelVnTlRBdU1UY3hNVU16Tmk0ek5qVTJJRFV5TGpjNE5qY2dNekV1TXprNElEVXpMamcwTVRRZ01qWXVNVFkyT0NBMU15NDBOREEyUXpFNUxqWTBPRGdnTlRJdU9UTTBOQ0F4TkM0d01qY3pJRFV3TGpNMk1Ea2dPUzR6T0RZMk9TQTBOUzQzTWpBelF6Y3VNelV4TVRVZ05ETXVOamcwT0NBMUxqWTNOREU1SURReExqTTROVFVnTkM0ME5qRXpJRE00TGpjMU9UUkROUzQxT0RrNE1pQXpOeTQ0T1RRMUlEWXVOekU0TXpRZ016Y3VNRFF3TWlBM0xqZzBOamcxSURNMkxqRTNOVFJET1M0Mk5qQTVNU0F6TkM0M09UTTRJREV4TGpRM05TQXpNeTQwTWpJM0lERXpMakk0T1NBek1pNHdOREZhSWlCbWFXeHNQU0lqTXpSQk9EVXpJaTgrRFFvOGNHRjBhQ0JrUFNKTk5EVXVNelF4SURRMkxqa3lNME0wTWk0Mk1UazVJRFEwTGpneE16Y2dNemt1T0RnNE15QTBNaTQzTURReklETTNMakUyTnpJZ05EQXVOVGswT1VNek55NHhNRE01SURRd0xqVTBNaklnTXpjdU1EUXdOaUEwTUM0ME5qZzBJRE0yTGprNE56a2dOREF1TkRBMU1VTXpOeTQ1TWpZMklETTVMalkzTnpNZ016Z3VPRGcyTXlBek9DNDVOekEzSURNNUxqWTFOak1nTXpndU1EUXlOa00wTUM0NU5ETWdNell1TlRBeU55QTBNUzQzT1RjeklETTBMamMyTWpVZ05ESXVNalF3TXlBek1pNDRNVEV6UXpReUxqSTVNeUF6TWk0MU5qZzNJRFF5TGpJMU1EZ2dNekl1TkRnME5DQTBNaTR3TURneUlETXlMalE1TkRsRE5ERXVPRGd4TnlBek1pNDFNRFUxSURReExqYzJOVFlnTXpJdU5EazBPU0EwTVM0Mk16a3hJRE15TGpRNU5EbERNemN1TXpNMklETXlMalE1TkRrZ016TXVNREl5TXlBek1pNDBPRFEwSURJNExqY3hPVElnTXpJdU5UQTFOVU15T0M0eU5EUTFJRE15TGpVd05UVWdNamd1TVRNNU1TQXpNaTR6TnpnNUlESTRMakUwT1RZZ016RXVPVEkxTkVNeU9DNHhOekEzSURJNExqZzJOamdnTWpndU1UY3dOeUF5TlM0NE1EZ3lJREk0TGpFME9UWWdNakl1TnpRNU5rTXlPQzR4TkRrMklESXlMak0xT1RRZ01qZ3VNalUxTVNBeU1pNHlOVE01SURJNExqWTBOVE1nTWpJdU1qVXpPVU16Tmk0MU16UTBJREl5TGpJMk5EVWdORFF1TkRJek5TQXlNaTR5TmpRMUlEVXlMak15TXpFZ01qSXVNalV6T1VNMU1pNDJOakEySURJeUxqSTFNemtnTlRJdU56azNOeUF5TWk0ek16Z3pJRFV5TGpnNE1qRWdNakl1TmprMk9VTTFNeTQxTWpVMElESTFMalU1TnpNZ05UTXVORGd6TWlBeU9DNDFNRGd5SURVekxqQTVNeUF6TVM0ME5EQXlRelV5TGpjM05qWWdNek11TnpneE5pQTFNaTR5TURjeElETTJMakEwT1RJZ05URXVNek14TnlBek9DNHlORE5ETlRBdU1ETTBOQ0EwTVM0ME9EQTVJRFE0TGpFeU5UUWdORFF1TXpBM05DQTBOUzQyTVRVeklEUTJMamN6TXpKRE5EVXVOVEl3TXlBME5pNDRNRGNnTkRVdU5ESTFOQ0EwTmk0NE5UazRJRFExTGpNME1TQTBOaTQ1TWpOYUlpQm1hV3hzUFNJak5ESTROVVl6SWk4K0RRbzhjR0YwYUNCa1BTSk5NVE11TWpnNUlETXlMakEwTVRSRE1URXVORGMxSURNekxqUXlNeUE1TGpZMk1Ea3lJRE0wTGpjNU5ERWdOeTQ0TkRZNE5TQXpOaTR4TnpVNFF6WXVOekU0TXpRZ016Y3VNRE13TVNBMUxqVTRPVGd5SURNM0xqZzVORGtnTkM0ME5qRXpNU0F6T0M0M05UazRRek11TlRnMU9USWdNemN1TVRNMU5TQXpMakF4TmpNNUlETTFMalF4TmpRZ01pNDFOVEl6TWlBek15NDJORFExUXpFdU5qWTJNemtnTXpBdU1qRTJPQ0F4TGpVeU9USTRJREkyTGpjek5qTWdNaTR3TVRRME15QXlNeTR5TkRVelF6SXVNemswTVRJZ01qQXVOVEF6TVNBekxqRTROVEUwSURFM0xqZzJOalFnTkM0ME5qRXpNU0F4TlM0ek9UZzBRell1TURRek16UWdNVFl1TmpFeE15QTNMall4TkRneUlERTNMamd6TkRnZ09TNHhPVFk0TlNBeE9TNHdORGMzUXpFd0xqVTFOelFnTWpBdU1Ea3hPQ0F4TVM0NU1UYzVJREl4TGpFeU5UUWdNVE11TWpjNE5TQXlNaTR4TlRsRE1UTXVNRFEyTlNBeU15NHlPRGMxSURFeUxqY3hPVFVnTWpRdU16azBPU0F4TWk0Mk1UUWdNalV1TlRVMU1VTXhNaTQwTWpReUlESTNMalkyTkRVZ01USXVOakkwTmlBeU9TNDNNakV4SURFekxqSXlOVGdnTXpFdU56UTJNVU14TXk0eU5qYzVJRE14TGpnek1EVWdNVE11TWpjNE5TQXpNUzQ1TXpVNUlERXpMakk0T1NBek1pNHdOREUwV2lJZ1ptbHNiRDBpSTBaQlFrSXdOaUl2UGcwS1BDOXpkbWMrRFFvPVwiIiwiY29uc3QgQVBJX0RPTUFJTiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9ET01BSU47XHJcbmNvbnN0IFBBR0VfTElNSVQgPSAxMjtcclxuXHJcbmNvbnN0IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0sgPSBgJHtBUElfRE9NQUlOfS9hdXRoL2ZhY2Vib29rL2NhbGxiYWNrYDtcclxuY29uc3QgQVVUSF9GQUNFQk9PS19VUkwgPSBgJHtBUElfRE9NQUlOfS9jb25uZWN0L2ZhY2Vib29rYDtcclxuLy9jb25zdCBBVVRIX0dPT0dMRV9DQUxMQkFDSyA9IGBodHRwOi8vY3VhdGwuc2hvcC9hcGkvY29ubmVjdC9nb29nbGUvY2FsbGJhY2tgO1xyXG4vL2NvbnN0IEFVVEhfR09PR0xFX1VSTCA9IGBodHRwOi8vY3VhdGwuc2hvcC9hcGkvY29ubmVjdC9nb29nbGVgO1xyXG5jb25zdCBBVVRIX0dPT0dMRV9DQUxMQkFDSyA9IGAke0FQSV9ET01BSU59L2Nvbm5lY3QvZ29vZ2xlL2NhbGxiYWNrYDtcclxuY29uc3QgQVVUSF9HT09HTEVfVVJMID0gYCR7QVBJX0RPTUFJTn0vY29ubmVjdC9nb29nbGVgO1xyXG5cclxuXHJcbmNvbnN0IFNUUklQRV9QVUJMSVNIRURfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJU0hFRF9LRVk7XHJcblxyXG5leHBvcnQge1xyXG4gIEFQSV9ET01BSU4sXHJcbiAgUEFHRV9MSU1JVCxcclxuICBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLLFxyXG4gIEFVVEhfRkFDRUJPT0tfVVJMLFxyXG4gIEFVVEhfR09PR0xFX0NBTExCQUNLLFxyXG4gIEFVVEhfR09PR0xFX1VSTCxcclxuICBTVFJJUEVfUFVCTElTSEVEX0tFWVxyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLXNlc3Npb25zJztcclxuaW1wb3J0IElTZXNzaW9uIGZyb20gJ0AvbW9kZWxzL0lTZXNzaW9uJztcclxuaW1wb3J0IElVc2VyIGZyb20gJ0AvbW9kZWxzL0lVc2VyJztcclxuXHJcbi8vOiB1c2UgdGhpcyBjb250ZXh0IHdoZXJldmVyIHlvdSB3YW50IHRvIGFjY2VzcyB0aGUgQXV0aFByb3ZpZGVyXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xyXG5leHBvcnQgeyBBdXRoUHJvdmlkZXIgfTtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb21wb25lbnQgaW4gdGhlIF9hcHAudHN4IGZpbGUgdG8gc2hhcmUgdGhlIGF1dGhlbnRpY2F0aW9uIHN0YXRlXHJcbi8vOiBnbG9iYWxseVxyXG5mdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8SVVzZXI+KG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBsb2dpbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGlmICgnaWRfdG9rZW4nIGluIHJvdXRlci5xdWVyeSB8fCAnYWNjZXNzX3Rva2VuJyBpbiByb3V0ZXIucXVlcnkpIHtcclxuICAgICAgY29uc3Qgc2Vzc2lvbjogSVNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGxvY2F0aW9uLnNlYXJjaCk7XHJcblxyXG4gICAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdzZXNzaW9uJywgSlNPTi5zdHJpbmdpZnkoc2Vzc2lvbikpO1xyXG4gICAgICBzZXRVc2VyKHNlc3Npb24udXNlcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnc2Vzc2lvbicpO1xyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U2Vzc2lvblN0b3JhZ2UgPSAoKTogSVNlc3Npb24gfCBudWxsID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb24nKSk7XHJcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcigoX2Vycm9yIGFzIFN5bnRheEVycm9yKS5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0VG9rZW4gPSAoKTogc3RyaW5nIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gZ2V0U2Vzc2lvblN0b3JhZ2UoKS50b2tlbjtcclxuICB9O1xyXG5cclxuICAvLzogdXNlIHRoaXMgY3VzdG9tIGhvb2sgdG8gc2V0IHRoZSBsb2NhbCBzZXNzaW9uIGludG8gdGhlIGdsb2JhbCBzdGF0ZSBlYWNoXHJcbiAgLy86IHRpbWUgYSBwYWdlIGlzIHJlZnJlc2hlZDsgdXNlIGl0IG9ubHkgb24gcGFnZSBjb21wb25lbnRzXHJcbiAgY29uc3QgdXNlU2Vzc2lvbiA9ICgpOiB2b2lkID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlc3Npb246IElTZXNzaW9uID0gZ2V0U2Vzc2lvblN0b3JhZ2UoKTtcclxuXHJcbiAgICAgIHNldFVzZXIoc2Vzc2lvbj8udXNlcik7XHJcbiAgICB9LCBbXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNVc2VyTG9nZ2VkSW4gPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICBjb25zdCBzID0gZ2V0U2Vzc2lvblN0b3JhZ2UoKVxyXG4gICAgY29uc29sZS5sb2coXCJzXCIpXHJcbiAgICBjb25zb2xlLmxvZyhzKVxyXG4gICAgcmV0dXJuIHMgPyB0cnVlIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICB1c2VyLCBsb2dpbiwgbG9nb3V0LCBnZXRUb2tlbiwgaXNVc2VyTG9nZ2VkSW4sIHVzZVNlc3Npb25cclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIG9mIHRoZSBBcG9sbG8gQ2xpZW50IHRvIGVuYWJsZSB0aGUgdXNlIG9mIEdyYXBoUUwuXHJcbiAqL1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEFwb2xsb0NsaWVudCxcclxuICBIdHRwTGluayxcclxuICBJbk1lbW9yeUNhY2hlLFxyXG4gIE5vcm1hbGl6ZWRDYWNoZU9iamVjdFxyXG59IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmltcG9ydCB7IEFQSV9ET01BSU4gfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuXHJcbmxldCBhcG9sbG9DbGllbnQ6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+O1xyXG5cclxuY29uc3QgY3JlYXRlQXBvbGxvQ2xpZW50ID0gKCk6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+ID0+IHtcclxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoeyB1cmk6IGAke0FQSV9ET01BSU59L2dyYXBocWxgIH0pLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcclxuICB9KTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCA9IChpbml0aWFsU3RhdGU6IGFueSA9IG51bGwpOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiA9PiB7XHJcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKTtcclxuXHJcbiAgLy86IGluaXRpYWwgc3RhdGUgb2YgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgaXMgaHlkcmF0ZWQgaGVyZVxyXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcclxuICAgIC8vOiBnZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xyXG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpO1xyXG5cclxuICAgIC8vOiByZXN0b3JlIHRoZSBjYWNoZSB1c2luZyB0aGUgZGF0YSBwYXNzZWQgZnJvbSBcImdldFN0YXRpY1Byb3BzXCIgb3JcclxuICAgIC8vOiBcImdldFNlcnZlclNpZGVQcm9wc1wiIGNvbWJpbmVkIHdpdGggdGhlIGV4aXN0aW5nIGNhY2hlIGRhdGFcclxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZSh7IC4uLmV4aXN0aW5nQ2FjaGUsIC4uLmluaXRpYWxTdGF0ZSB9KTtcclxuICB9XHJcblxyXG4gIC8vOiBmb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcclxuXHJcbiAgLy86IGNyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcclxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudDtcclxuXHJcbiAgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IHVzZSB0aGlzIGN1c3RvbSBob29rIGluIHlvdXIgY29tcG9uZW50cyB0byBoeWRyYXRlIHRoZSBzdGF0ZSBvZiB0aGUgQXBvbGxvXHJcbi8vOiBDbGllbnRcclxuY29uc3QgdXNlQXBvbGxvQ2xpZW50ID0gKGluaXRpYWxTdGF0ZTogYW55KTogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD4gPT4ge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbyhcclxuICAgICgpID0+IGluaXRpYWxpemVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlKSxcclxuICAgIFtpbml0aWFsU3RhdGVdXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCwgdXNlQXBvbGxvQ2xpZW50IH07XHJcbiIsImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0RGVwYXJ0bWVudHMgfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtZGVwYXJ0bWVudHMnO1xyXG5pbXBvcnQgZ29vZ2xlTG9nb0ltYWdlIGZyb20gJ0AvYXNzZXRzL2ltYWdlcy9nb29nbGUuc3ZnJztcclxuaW1wb3J0IHsgQVVUSF9HT09HTEVfVVJMIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvQ2xpZW50IH0gZnJvbSAnQC9saWIvYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCB7IENhcmRDb250ZW50LCBDYXJkLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHRhaWx3aW5kOiB7XHJcbiAgICBtYWluQ29udGVudDoge1xyXG4gICAgICBjb250YWluZXI6IGBcclxuICAgICAgICBmbGV4LTFcclxuICAgICAgICBtYi0yNFxyXG4gICAgICAgIG1kOm1iLWF1dG9cclxuICAgICAgICBtZDpvdmVyZmxvdy12aXNpYmxlXHJcbiAgICAgICAgb3ZlcmZsb3cteS1zY3JvbGxcclxuICAgICAgICB3LWZ1bGxcclxuICAgICAgYCxcclxuICAgICAgbG9naW5Gb3JtOiB7XHJcbiAgICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgICBjb250YWluZXI6IGBcclxuICAgICAgICAgICAgZmxleFxyXG4gICAgICAgICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICAgICAgICBmbGV4LXJvd1xyXG4gICAgICAgICAgICBmb250LWJvbGRcclxuICAgICAgICAgICAgaC0xNlxyXG4gICAgICAgICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAgICAgICAganVzdGlmeS1jZW50ZXJcclxuICAgICAgICAgICAgbWQ6bXgtYXV0b1xyXG4gICAgICAgICAgICBtZDp3LTYwXHJcbiAgICAgICAgICAgIG10LTZcclxuICAgICAgICAgICAgcm91bmRlZC1sZ1xyXG4gICAgICAgICAgICBzaGFkb3dcclxuICAgICAgICAgICAgdy1mdWxsXHJcbiAgICAgICAgICBgLFxyXG4gICAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBjb250YWluZXI6IGBcclxuICAgICAgICAgICAgICBmbGV4XHJcbiAgICAgICAgICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgICAgICAgICBmbGV4LXJvd1xyXG4gICAgICAgICAgICAgIGgtMTZcclxuICAgICAgICAgICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNlbnRlclxyXG4gICAgICAgICAgICAgIHctMTZcclxuICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgaW1hZ2U6IGBcclxuICAgICAgICAgICAgICBoLTZcclxuICAgICAgICAgICAgICB3LTZcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdlbmVyaWM6IHtcclxuICAgICAgZ29vZ2xlOiBgXHJcbiAgICAgICAgYmctaW5hY3RpdmVcclxuICAgICAgYFxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhlbnRpY2F0aW9uUGFnZSh7IGRlcGFydG1lbnRzIH0pIHtcclxuICBjb25zdCB7IGlzVXNlckxvZ2dlZEluIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc1VzZXJMb2dnZWRJbigpKSByb3V0ZXIucHVzaCgnLycpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiMzBweFwiXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTB9IG1kPXs2fT5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgYWxpZ249XCJjZW50ZXJcIj7CoUJpZW52ZW5pZG8hPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGFsaWduPVwiY2VudGVyXCI+SW5ncmVzYSB5IGRpc2ZydXRhIHVuYSBncmFuIGV4cGVyaWVuY2lhPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj17QVVUSF9HT09HTEVfVVJMfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcy50YWlsd2luZC5tYWluQ29udGVudC5sb2dpbkZvcm0uYnV0dG9uLmNvbnRhaW5lciArXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzLnRhaWx3aW5kLmdlbmVyaWMuZ29vZ2xlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50YWlsd2luZC5tYWluQ29udGVudC5sb2dpbkZvcm0uYnV0dG9uLmljb24uY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtnb29nbGVMb2dvSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50YWlsd2luZC5tYWluQ29udGVudC5sb2dpbkZvcm0uYnV0dG9uLmljb24uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYnV0dG9uXCIgYWxpZ249XCJjZW50ZXJcIj5JbmdyZXNhIGNvbiBHb29nbGU8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvQ2xpZW50KCk7XHJcbiAgY29uc3QgZGVwYXJ0bWVudHMgPSBhd2FpdCBnZXREZXBhcnRtZW50cyhhcG9sbG9DbGllbnQpO1xyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBkZXBhcnRtZW50cyB9IH07XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9