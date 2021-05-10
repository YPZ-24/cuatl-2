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
  let response;
  response = await fetch(url + token);
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
const API_DOMAIN = "http://165.227.199.69:1337";
const PAGE_LIMIT = 12;
const AUTH_FACEBOOK_CALLBACK = `${API_DOMAIN}/auth/facebook/callback`;
const AUTH_FACEBOOK_URL = `${API_DOMAIN}/connect/facebook`; //const AUTH_GOOGLE_CALLBACK = `http://cuatl.shop/api/connect/google/callback`;

const AUTH_GOOGLE_URL = `http://cuatl.shop/api/connect/google`;
const AUTH_GOOGLE_CALLBACK = `${API_DOMAIN}/auth/google/callback`;
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

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\A\\cuatl-2\\context\\AuthContext.tsx";



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

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\A\\cuatl-2\\pages\\auth.tsx";








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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9mZXRjaC1kZXBhcnRtZW50cy50cyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2ZldGNoLXNlc3Npb25zLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ29vZ2xlLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb25maWcvZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9saWIvYXBvbGxvLWNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImdldERlcGFydG1lbnRzIiwiYXBvbGxvQ2xpZW50IiwiZXJyb3IiLCJkYXRhIiwibG9hZGluZyIsInF1ZXJ5IiwiZ3FsIiwiZGVwYXJ0bWVudHMiLCJnZXRTZXNzaW9uIiwidG9rZW4iLCJ1cmwiLCJpbmNsdWRlcyIsIkFVVEhfR09PR0xFX0NBTExCQUNLIiwiQVVUSF9GQUNFQk9PS19DQUxMQkFDSyIsInJlc3BvbnNlIiwiZmV0Y2giLCJzZXNzaW9uRGF0YSIsImpzb24iLCJqd3QiLCJ1c2VyIiwiaWQiLCJ1c2VybmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiZm9ybWF0cyIsInRodW1ibmFpbCIsIkFQSV9ET01BSU4iLCJwcm9jZXNzIiwiUEFHRV9MSU1JVCIsIkFVVEhfRkFDRUJPT0tfVVJMIiwiQVVUSF9HT09HTEVfVVJMIiwiU1RSSVBFX1BVQkxJU0hFRF9LRVkiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImxvZ2luIiwic2Vzc2lvbiIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwicHVzaCIsImdldFNlc3Npb25TdG9yYWdlIiwicGFyc2UiLCJnZXRJdGVtIiwiX2Vycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJnZXRUb2tlbiIsInVzZVNlc3Npb24iLCJ1c2VFZmZlY3QiLCJpc1VzZXJMb2dnZWRJbiIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImluaXRpYWxpemVBcG9sbG9DbGllbnQiLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJyZXN0b3JlIiwidXNlQXBvbGxvQ2xpZW50Iiwic3RvcmUiLCJ1c2VNZW1vIiwic3R5bGVzIiwidGFpbHdpbmQiLCJtYWluQ29udGVudCIsImNvbnRhaW5lciIsImxvZ2luRm9ybSIsImJ1dHRvbiIsImljb24iLCJpbWFnZSIsImdlbmVyaWMiLCJnb29nbGUiLCJBdXRoZW50aWNhdGlvblBhZ2UiLCJ1c2VDb250ZXh0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiZ29vZ2xlTG9nb0ltYWdlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJ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dC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXV0aC50c3hcIik7XG4iLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIGdxbCwgTm9ybWFsaXplZENhY2hlT2JqZWN0IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuaW1wb3J0IElEZXBhcnRtZW50IGZyb20gJ0AvbW9kZWxzL0lEZXBhcnRtZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREZXBhcnRtZW50cyA9IGFzeW5jIChcclxuICBhcG9sbG9DbGllbnQ6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+XHJcbik6IFByb21pc2U8SURlcGFydG1lbnRbXT4gPT4ge1xyXG4gIGxldCB7IGVycm9yLCBkYXRhLCBsb2FkaW5nIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xyXG4gICAgcXVlcnk6IGdxbGBcclxuICAgICAgcXVlcnkgZ2V0RGVwYXJ0bWVudHMge1xyXG4gICAgICAgIGRlcGFydG1lbnRzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIHN1YmNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYFxyXG4gIH0pO1xyXG4gIFxyXG4gIHJldHVybiBlcnJvciA/PyBkYXRhLmRlcGFydG1lbnRzO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLLCBBVVRIX0dPT0dMRV9DQUxMQkFDSyB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xyXG5pbXBvcnQgSVNlc3Npb24gZnJvbSAnQC9tb2RlbHMvSVNlc3Npb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb24gPSBhc3luYyAodG9rZW46IHN0cmluZyk6IFByb21pc2U8SVNlc3Npb24+ID0+IHtcclxuICBjb25zdCB1cmw6IHN0cmluZyA9IHRva2VuLmluY2x1ZGVzKCdpZF90b2tlbicpXHJcbiAgICA/IEFVVEhfR09PR0xFX0NBTExCQUNLXHJcbiAgICA6IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0s7XHJcbiAgICBsZXQgcmVzcG9uc2U7XHJcbiAgXHJcbiAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIHRva2VuKTtcclxuICBcclxuICBjb25zdCBzZXNzaW9uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRva2VuOiBzZXNzaW9uRGF0YS5qd3QsXHJcbiAgICB1c2VyOiB7XHJcbiAgICAgIGlkOiBzZXNzaW9uRGF0YS51c2VyLmlkLFxyXG4gICAgICB1c2VybmFtZTogc2Vzc2lvbkRhdGEudXNlci51c2VybmFtZSxcclxuICAgICAgZW1haWw6IHNlc3Npb25EYXRhLnVzZXIuZW1haWwsXHJcbiAgICAgIGF2YXRhcjogc2Vzc2lvbkRhdGEudXNlci5hdmF0YXJcclxuICAgICAgICA/IHNlc3Npb25EYXRhLnVzZXIuYXZhdGFyLmZvcm1hdHMudGh1bWJuYWlsXHJcbiAgICAgICAgOiBudWxsXHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVFFpSUdobGFXZG9kRDBpTlRRaUlIWnBaWGRDYjNnOUlqQWdNQ0ExTkNBMU5DSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JR1E5SWswMExqUTNNVGcySURFMUxqTTROemRETmk0eE1EWTJNeUF4TVM0NU9ERWdPQzQwTVRZek9TQTVMakV3TVRjMElERXhMak15TnpNZ05pNDNNRGMyUXpFMUxqSTNNVGtnTXk0ME5EZzJNU0F4T1M0M09UWTFJREV1TkRnMk9Ea2dNalF1T0RZNU5TQXdMamc0TlRjeU1rTXpNQzQ0TWpnMUlEQXVNVGM1TURneElETTJMalF5T0RrZ01TNHpNRGMySURReExqWXdOelFnTkM0ME1EZ3pPRU0wTWk0NE9UUXhJRFV1TVRjNE15QTBOQzR3T1RZMUlEWXVNRFV6TmprZ05EVXVNalEyTVNBM0xqQXdNamt4UXpRMUxqVXpNRGdnTnk0eU16UTVOQ0EwTlM0ME9Ua3lJRGN1TXpjeU1EVWdORFV1TWpVMk5pQTNMall3TkRBNFF6UXlMamt3TkRjZ09TNDVORFUwT1NBME1DNDFOVEkzSURFeUxqSTROamtnTXpndU1qSXhPU0F4TkM0Mk5EazBRek0zTGprME56WWdNVFF1T1RJek5pQXpOeTQ0SURFMExqa3dNalVnTXpjdU5UQTBOeUF4TkM0Mk9ERkRNekF1Tmpjd015QTVMalF4T0RFMUlESXdMamN3TXpVZ01UQXVPRFF5SURFMUxqWXdPVFFnTVRjdU9EQXlPVU14TkM0M01USTVJREU1TGpBeU5qUWdNVE11T1RnMU1TQXlNQzR6TkRRM0lERXpMalEzT0RrZ01qRXVOemM1TVVNeE15NDBNelkzSURJeExqa3dOVFlnTVRNdU16VXlNeUF5TWk0d01qRTNJREV6TGpJNE9URWdNakl1TVRRNE1rTXhNUzQ1TWpnMUlESXhMakV4TkRZZ01UQXVOVFUzTkNBeU1DNHdPREVnT1M0eU1EYzBNU0F4T1M0d016WTVRemN1TmpJMU16Z2dNVGN1T0RJMElEWXVNRFF6TXpVZ01UWXVOakV4TVNBMExqUTNNVGcySURFMUxqTTROemRhSWlCbWFXeHNQU0lqUlRrME16TTFJaTgrRFFvOGNHRjBhQ0JrUFNKTk1UTXVNamc1SURNeUxqQTBNVU14TXk0M05ESTJJRE16TGpBME15QXhOQzR4TWpJeUlETTBMakE0TnpFZ01UUXVOamt4T0NBek5TNHdNalU0UXpFM0xqQTROVGtnTXpndU9UUTVNaUF5TUM0MU1ETXhJRFF4TGpRMk9Ua2dNalV1TURBMk5pQTBNaTR6TmpZMFF6STVMakEyTnpJZ05ETXVNVGM0TlNBek1pNDVOamsxSURReUxqWXpNREVnTXpZdU5qQTRNaUEwTUM0MU9UUTFRek0yTGpjek5EY2dOREF1TlRNeE15QXpOaTQ0TmpFeklEUXdMalEyT0NBek5pNDVOemN6SURRd0xqUXdORGRETXpjdU1EUXdOaUEwTUM0ME5qZ2dNemN1TURrek15QTBNQzQxTkRFNElETTNMakUxTmpZZ05EQXVOVGswTlVNek9TNDROemMzSURReUxqY3dNemtnTkRJdU5qQTVOQ0EwTkM0NE1UTXpJRFExTGpNek1EUWdORFl1T1RJeU4wTTBOQzR3TWpJMklEUTRMakl4T1RrZ05ESXVOVE0xTlNBME9TNHlOalF4SURRd0xqazFNelVnTlRBdU1UY3hNVU16Tmk0ek5qVTJJRFV5TGpjNE5qY2dNekV1TXprNElEVXpMamcwTVRRZ01qWXVNVFkyT0NBMU15NDBOREEyUXpFNUxqWTBPRGdnTlRJdU9UTTBOQ0F4TkM0d01qY3pJRFV3TGpNMk1Ea2dPUzR6T0RZMk9TQTBOUzQzTWpBelF6Y3VNelV4TVRVZ05ETXVOamcwT0NBMUxqWTNOREU1SURReExqTTROVFVnTkM0ME5qRXpJRE00TGpjMU9UUkROUzQxT0RrNE1pQXpOeTQ0T1RRMUlEWXVOekU0TXpRZ016Y3VNRFF3TWlBM0xqZzBOamcxSURNMkxqRTNOVFJET1M0Mk5qQTVNU0F6TkM0M09UTTRJREV4TGpRM05TQXpNeTQwTWpJM0lERXpMakk0T1NBek1pNHdOREZhSWlCbWFXeHNQU0lqTXpSQk9EVXpJaTgrRFFvOGNHRjBhQ0JrUFNKTk5EVXVNelF4SURRMkxqa3lNME0wTWk0Mk1UazVJRFEwTGpneE16Y2dNemt1T0RnNE15QTBNaTQzTURReklETTNMakUyTnpJZ05EQXVOVGswT1VNek55NHhNRE01SURRd0xqVTBNaklnTXpjdU1EUXdOaUEwTUM0ME5qZzBJRE0yTGprNE56a2dOREF1TkRBMU1VTXpOeTQ1TWpZMklETTVMalkzTnpNZ016Z3VPRGcyTXlBek9DNDVOekEzSURNNUxqWTFOak1nTXpndU1EUXlOa00wTUM0NU5ETWdNell1TlRBeU55QTBNUzQzT1RjeklETTBMamMyTWpVZ05ESXVNalF3TXlBek1pNDRNVEV6UXpReUxqSTVNeUF6TWk0MU5qZzNJRFF5TGpJMU1EZ2dNekl1TkRnME5DQTBNaTR3TURneUlETXlMalE1TkRsRE5ERXVPRGd4TnlBek1pNDFNRFUxSURReExqYzJOVFlnTXpJdU5EazBPU0EwTVM0Mk16a3hJRE15TGpRNU5EbERNemN1TXpNMklETXlMalE1TkRrZ016TXVNREl5TXlBek1pNDBPRFEwSURJNExqY3hPVElnTXpJdU5UQTFOVU15T0M0eU5EUTFJRE15TGpVd05UVWdNamd1TVRNNU1TQXpNaTR6TnpnNUlESTRMakUwT1RZZ016RXVPVEkxTkVNeU9DNHhOekEzSURJNExqZzJOamdnTWpndU1UY3dOeUF5TlM0NE1EZ3lJREk0TGpFME9UWWdNakl1TnpRNU5rTXlPQzR4TkRrMklESXlMak0xT1RRZ01qZ3VNalUxTVNBeU1pNHlOVE01SURJNExqWTBOVE1nTWpJdU1qVXpPVU16Tmk0MU16UTBJREl5TGpJMk5EVWdORFF1TkRJek5TQXlNaTR5TmpRMUlEVXlMak15TXpFZ01qSXVNalV6T1VNMU1pNDJOakEySURJeUxqSTFNemtnTlRJdU56azNOeUF5TWk0ek16Z3pJRFV5TGpnNE1qRWdNakl1TmprMk9VTTFNeTQxTWpVMElESTFMalU1TnpNZ05UTXVORGd6TWlBeU9DNDFNRGd5SURVekxqQTVNeUF6TVM0ME5EQXlRelV5TGpjM05qWWdNek11TnpneE5pQTFNaTR5TURjeElETTJMakEwT1RJZ05URXVNek14TnlBek9DNHlORE5ETlRBdU1ETTBOQ0EwTVM0ME9EQTVJRFE0TGpFeU5UUWdORFF1TXpBM05DQTBOUzQyTVRVeklEUTJMamN6TXpKRE5EVXVOVEl3TXlBME5pNDRNRGNnTkRVdU5ESTFOQ0EwTmk0NE5UazRJRFExTGpNME1TQTBOaTQ1TWpOYUlpQm1hV3hzUFNJak5ESTROVVl6SWk4K0RRbzhjR0YwYUNCa1BTSk5NVE11TWpnNUlETXlMakEwTVRSRE1URXVORGMxSURNekxqUXlNeUE1TGpZMk1Ea3lJRE0wTGpjNU5ERWdOeTQ0TkRZNE5TQXpOaTR4TnpVNFF6WXVOekU0TXpRZ016Y3VNRE13TVNBMUxqVTRPVGd5SURNM0xqZzVORGtnTkM0ME5qRXpNU0F6T0M0M05UazRRek11TlRnMU9USWdNemN1TVRNMU5TQXpMakF4TmpNNUlETTFMalF4TmpRZ01pNDFOVEl6TWlBek15NDJORFExUXpFdU5qWTJNemtnTXpBdU1qRTJPQ0F4TGpVeU9USTRJREkyTGpjek5qTWdNaTR3TVRRME15QXlNeTR5TkRVelF6SXVNemswTVRJZ01qQXVOVEF6TVNBekxqRTROVEUwSURFM0xqZzJOalFnTkM0ME5qRXpNU0F4TlM0ek9UZzBRell1TURRek16UWdNVFl1TmpFeE15QTNMall4TkRneUlERTNMamd6TkRnZ09TNHhPVFk0TlNBeE9TNHdORGMzUXpFd0xqVTFOelFnTWpBdU1Ea3hPQ0F4TVM0NU1UYzVJREl4TGpFeU5UUWdNVE11TWpjNE5TQXlNaTR4TlRsRE1UTXVNRFEyTlNBeU15NHlPRGMxSURFeUxqY3hPVFVnTWpRdU16azBPU0F4TWk0Mk1UUWdNalV1TlRVMU1VTXhNaTQwTWpReUlESTNMalkyTkRVZ01USXVOakkwTmlBeU9TNDNNakV4SURFekxqSXlOVGdnTXpFdU56UTJNVU14TXk0eU5qYzVJRE14TGpnek1EVWdNVE11TWpjNE5TQXpNUzQ1TXpVNUlERXpMakk0T1NBek1pNHdOREUwV2lJZ1ptbHNiRDBpSTBaQlFrSXdOaUl2UGcwS1BDOXpkbWMrRFFvPVwiIiwiY29uc3QgQVBJX0RPTUFJTiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9ET01BSU47XHJcbmNvbnN0IFBBR0VfTElNSVQgPSAxMjtcclxuXHJcbmNvbnN0IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0sgPSBgJHtBUElfRE9NQUlOfS9hdXRoL2ZhY2Vib29rL2NhbGxiYWNrYDtcclxuY29uc3QgQVVUSF9GQUNFQk9PS19VUkwgPSBgJHtBUElfRE9NQUlOfS9jb25uZWN0L2ZhY2Vib29rYDtcclxuLy9jb25zdCBBVVRIX0dPT0dMRV9DQUxMQkFDSyA9IGBodHRwOi8vY3VhdGwuc2hvcC9hcGkvY29ubmVjdC9nb29nbGUvY2FsbGJhY2tgO1xyXG5jb25zdCBBVVRIX0dPT0dMRV9VUkwgPSBgaHR0cDovL2N1YXRsLnNob3AvYXBpL2Nvbm5lY3QvZ29vZ2xlYDtcclxuY29uc3QgQVVUSF9HT09HTEVfQ0FMTEJBQ0sgPSBgJHtBUElfRE9NQUlOfS9hdXRoL2dvb2dsZS9jYWxsYmFja2A7XHJcblxyXG5cclxuY29uc3QgU1RSSVBFX1BVQkxJU0hFRF9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElTSEVEX0tFWTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQVBJX0RPTUFJTixcclxuICBQQUdFX0xJTUlULFxyXG4gIEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0ssXHJcbiAgQVVUSF9GQUNFQk9PS19VUkwsXHJcbiAgQVVUSF9HT09HTEVfQ0FMTEJBQ0ssXHJcbiAgQVVUSF9HT09HTEVfVVJMLFxyXG4gIFNUUklQRV9QVUJMSVNIRURfS0VZXHJcbn07XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtc2Vzc2lvbnMnO1xyXG5pbXBvcnQgSVNlc3Npb24gZnJvbSAnQC9tb2RlbHMvSVNlc3Npb24nO1xyXG5pbXBvcnQgSVVzZXIgZnJvbSAnQC9tb2RlbHMvSVVzZXInO1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbnRleHQgd2hlcmV2ZXIgeW91IHdhbnQgdG8gYWNjZXNzIHRoZSBBdXRoUHJvdmlkZXJcclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XHJcbmV4cG9ydCB7IEF1dGhQcm92aWRlciB9O1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbXBvbmVudCBpbiB0aGUgX2FwcC50c3ggZmlsZSB0byBzaGFyZSB0aGUgYXV0aGVudGljYXRpb24gc3RhdGVcclxuLy86IGdsb2JhbGx5XHJcbmZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxJVXNlcj4obnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgaWYgKCdpZF90b2tlbicgaW4gcm91dGVyLnF1ZXJ5IHx8ICdhY2Nlc3NfdG9rZW4nIGluIHJvdXRlci5xdWVyeSkge1xyXG4gICAgICBjb25zdCBzZXNzaW9uOiBJU2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24obG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Nlc3Npb24nLCBKU09OLnN0cmluZ2lmeShzZXNzaW9uKSk7XHJcbiAgICAgIHNldFVzZXIoc2Vzc2lvbi51c2VyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdzZXNzaW9uJyk7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgcm91dGVyLnB1c2goJy8nKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRTZXNzaW9uU3RvcmFnZSA9ICgpOiBJU2Vzc2lvbiB8IG51bGwgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbicpKTtcclxuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKChfZXJyb3IgYXMgU3ludGF4RXJyb3IpLm1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRUb2tlbiA9ICgpOiBzdHJpbmcgfCBudWxsID0+IHtcclxuICAgIHJldHVybiBnZXRTZXNzaW9uU3RvcmFnZSgpLnRva2VuO1xyXG4gIH07XHJcblxyXG4gIC8vOiB1c2UgdGhpcyBjdXN0b20gaG9vayB0byBzZXQgdGhlIGxvY2FsIHNlc3Npb24gaW50byB0aGUgZ2xvYmFsIHN0YXRlIGVhY2hcclxuICAvLzogdGltZSBhIHBhZ2UgaXMgcmVmcmVzaGVkOyB1c2UgaXQgb25seSBvbiBwYWdlIGNvbXBvbmVudHNcclxuICBjb25zdCB1c2VTZXNzaW9uID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgc2Vzc2lvbjogSVNlc3Npb24gPSBnZXRTZXNzaW9uU3RvcmFnZSgpO1xyXG5cclxuICAgICAgc2V0VXNlcihzZXNzaW9uPy51c2VyKTtcclxuICAgIH0sIFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc1VzZXJMb2dnZWRJbiA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiBnZXRTZXNzaW9uU3RvcmFnZSgpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgdXNlciwgbG9naW4sIGxvZ291dCwgZ2V0VG9rZW4sIGlzVXNlckxvZ2dlZEluLCB1c2VTZXNzaW9uXHJcbiAgICB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCIvKipcclxuICogQ29uZmlndXJhdGlvbiBvZiB0aGUgQXBvbGxvIENsaWVudCB0byBlbmFibGUgdGhlIHVzZSBvZiBHcmFwaFFMLlxyXG4gKi9cclxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBBcG9sbG9DbGllbnQsXHJcbiAgSHR0cExpbmssXHJcbiAgSW5NZW1vcnlDYWNoZSxcclxuICBOb3JtYWxpemVkQ2FjaGVPYmplY3RcclxufSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBBUElfRE9NQUlOIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcblxyXG5sZXQgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PjtcclxuXHJcbmNvbnN0IGNyZWF0ZUFwb2xsb0NsaWVudCA9ICgpOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiA9PiB7XHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgbGluazogbmV3IEh0dHBMaW5rKHsgdXJpOiBgJHtBUElfRE9NQUlOfS9ncmFwaHFsYCB9KSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbiAgfSk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGluaXRpYWxpemVBcG9sbG9DbGllbnQgPSAoaW5pdGlhbFN0YXRlOiBhbnkgPSBudWxsKTogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD4gPT4ge1xyXG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KCk7XHJcblxyXG4gIC8vOiBpbml0aWFsIHN0YXRlIG9mIE5leHQuanMgZGF0YSBmZXRjaGluZyBtZXRob2RzIGlzIGh5ZHJhdGVkIGhlcmVcclxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICAvLzogZ2V0IGV4aXN0aW5nIGNhY2hlLCBsb2FkZWQgZHVyaW5nIGNsaWVudCBzaWRlIGRhdGEgZmV0Y2hpbmdcclxuICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGUgPSBfYXBvbGxvQ2xpZW50LmV4dHJhY3QoKTtcclxuXHJcbiAgICAvLzogcmVzdG9yZSB0aGUgY2FjaGUgdXNpbmcgdGhlIGRhdGEgcGFzc2VkIGZyb20gXCJnZXRTdGF0aWNQcm9wc1wiIG9yXHJcbiAgICAvLzogXCJnZXRTZXJ2ZXJTaWRlUHJvcHNcIiBjb21iaW5lZCB3aXRoIHRoZSBleGlzdGluZyBjYWNoZSBkYXRhXHJcbiAgICBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoeyAuLi5leGlzdGluZ0NhY2hlLCAuLi5pbml0aWFsU3RhdGUgfSk7XHJcbiAgfVxyXG5cclxuICAvLzogZm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgQXBvbGxvIENsaWVudFxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XHJcblxyXG4gIC8vOiBjcmVhdGUgdGhlIEFwb2xsbyBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnQ7XHJcblxyXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50O1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiB1c2UgdGhpcyBjdXN0b20gaG9vayBpbiB5b3VyIGNvbXBvbmVudHMgdG8gaHlkcmF0ZSB0aGUgc3RhdGUgb2YgdGhlIEFwb2xsb1xyXG4vLzogQ2xpZW50XHJcbmNvbnN0IHVzZUFwb2xsb0NsaWVudCA9IChpbml0aWFsU3RhdGU6IGFueSk6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+ID0+IHtcclxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiBpbml0aWFsaXplQXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSksXHJcbiAgICBbaW5pdGlhbFN0YXRlXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGluaXRpYWxpemVBcG9sbG9DbGllbnQsIHVzZUFwb2xsb0NsaWVudCB9O1xyXG4iLCJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldERlcGFydG1lbnRzIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLWRlcGFydG1lbnRzJztcclxuaW1wb3J0IGdvb2dsZUxvZ29JbWFnZSBmcm9tICdAL2Fzc2V0cy9pbWFnZXMvZ29vZ2xlLnN2Zyc7XHJcbmltcG9ydCB7IEFVVEhfR09PR0xFX1VSTCB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnQC9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCB9IGZyb20gJ0AvbGliL2Fwb2xsby1jbGllbnQnO1xyXG5pbXBvcnQgeyBDYXJkQ29udGVudCwgQ2FyZCwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB0YWlsd2luZDoge1xyXG4gICAgbWFpbkNvbnRlbnQ6IHtcclxuICAgICAgY29udGFpbmVyOiBgXHJcbiAgICAgICAgZmxleC0xXHJcbiAgICAgICAgbWItMjRcclxuICAgICAgICBtZDptYi1hdXRvXHJcbiAgICAgICAgbWQ6b3ZlcmZsb3ctdmlzaWJsZVxyXG4gICAgICAgIG92ZXJmbG93LXktc2Nyb2xsXHJcbiAgICAgICAgdy1mdWxsXHJcbiAgICAgIGAsXHJcbiAgICAgIGxvZ2luRm9ybToge1xyXG4gICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgY29udGFpbmVyOiBgXHJcbiAgICAgICAgICAgIGZsZXhcclxuICAgICAgICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgICAgICAgZmxleC1yb3dcclxuICAgICAgICAgICAgZm9udC1ib2xkXHJcbiAgICAgICAgICAgIGgtMTZcclxuICAgICAgICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICAgICAgICAgIGp1c3RpZnktY2VudGVyXHJcbiAgICAgICAgICAgIG1kOm14LWF1dG9cclxuICAgICAgICAgICAgbWQ6dy02MFxyXG4gICAgICAgICAgICBtdC02XHJcbiAgICAgICAgICAgIHJvdW5kZWQtbGdcclxuICAgICAgICAgICAgc2hhZG93XHJcbiAgICAgICAgICAgIHctZnVsbFxyXG4gICAgICAgICAgYCxcclxuICAgICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiBgXHJcbiAgICAgICAgICAgICAgZmxleFxyXG4gICAgICAgICAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgICAgICAgICAgZmxleC1yb3dcclxuICAgICAgICAgICAgICBoLTE2XHJcbiAgICAgICAgICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICAgICAgICAgICAganVzdGlmeS1jZW50ZXJcclxuICAgICAgICAgICAgICB3LTE2XHJcbiAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgIGltYWdlOiBgXHJcbiAgICAgICAgICAgICAgaC02XHJcbiAgICAgICAgICAgICAgdy02XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZW5lcmljOiB7XHJcbiAgICAgIGdvb2dsZTogYFxyXG4gICAgICAgIGJnLWluYWN0aXZlXHJcbiAgICAgIGBcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoZW50aWNhdGlvblBhZ2UoeyBkZXBhcnRtZW50cyB9KSB7XHJcbiAgY29uc3QgeyBpc1VzZXJMb2dnZWRJbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNVc2VyTG9nZ2VkSW4oKSkgcm91dGVyLnB1c2goJy8nKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjMwcHhcIlxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEwfSBtZD17Nn0+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCI+wqFCaWVudmVuaWRvITwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBhbGlnbj1cImNlbnRlclwiPkluZ3Jlc2EgeSBkaXNmcnV0YSB1bmEgZ3JhbiBleHBlcmllbmNpYTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e0FVVEhfR09PR0xFX1VSTH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXMudGFpbHdpbmQubWFpbkNvbnRlbnQubG9naW5Gb3JtLmJ1dHRvbi5jb250YWluZXIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcy50YWlsd2luZC5nZW5lcmljLmdvb2dsZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQubWFpbkNvbnRlbnQubG9naW5Gb3JtLmJ1dHRvbi5pY29uLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Z29vZ2xlTG9nb0ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQubWFpbkNvbnRlbnQubG9naW5Gb3JtLmJ1dHRvbi5pY29uLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJ1dHRvblwiIGFsaWduPVwiY2VudGVyXCI+SW5ncmVzYSBjb24gR29vZ2xlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCgpO1xyXG4gIGNvbnN0IGRlcGFydG1lbnRzID0gYXdhaXQgZ2V0RGVwYXJ0bWVudHMoYXBvbGxvQ2xpZW50KTtcclxuXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgZGVwYXJ0bWVudHMgfSB9O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==