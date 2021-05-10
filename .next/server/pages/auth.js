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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qIq5");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6Kf1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AuthProvider; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./config/globals.ts
var globals = __webpack_require__("VS8K");

// CONCATENATED MODULE: ./actions/fetch-sessions.ts

const getSession = async token => {
  const url = token.includes('id_token') ? globals["c" /* AUTH_GOOGLE_CALLBACK */] : globals["b" /* AUTH_FACEBOOK_CALLBACK */];
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
// CONCATENATED MODULE: ./context/AuthContext.tsx




//: use this context wherever you want to access the AuthProvider
const AuthContext = /*#__PURE__*/Object(external_react_["createContext"])(null);
/* harmony default export */ var context_AuthContext = __webpack_exports__["b"] = (AuthContext);
 //: use this component in the _app.tsx file to share the authentication state
//: globally

function AuthProvider({
  children
}) {
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])(null);
  const router = Object(router_["useRouter"])();

  const login = async () => {
    if ('id_token' in router.query || 'access_token' in router.query) {
      const session = await getSession(location.search);
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
    Object(external_react_["useEffect"])(() => {
      const session = getSessionStorage();
      setUser(session === null || session === void 0 ? void 0 : session.user);
    }, []);
  };

  const isUserLoggedIn = () => {
    return getSessionStorage() ? true : false;
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(AuthContext.Provider, {
    value: {
      user,
      login,
      logout,
      getToken,
      isUserLoggedIn,
      useSession
    },
    children: children
  });
}

;

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

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
const API_DOMAIN = "https://cuatl.shop/api";
const PAGE_LIMIT = 12;
const AUTH_FACEBOOK_CALLBACK = `${API_DOMAIN}/auth/facebook/callback`;
const AUTH_FACEBOOK_URL = `${API_DOMAIN}/connect/facebook`; //const AUTH_GOOGLE_CALLBACK = `http://cuatl.shop/api/connect/google/callback`;

const AUTH_GOOGLE_URL = `http://cuatl.shop/api/connect/google`;
const AUTH_GOOGLE_CALLBACK = `${API_DOMAIN}/auth/google/callback`;
const STRIPE_PUBLISHED_KEY = "pk_test_51Hw15gJ4rvPOyPXnQ6Rjf7X4RxmsSBqvTVy3h3Bfwdo2WddlWAgC64bzfHeQbn4V5jJpPrJ7eHeWrGQMWOlRzW8700mrQLCJpL";


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "qIq5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ AuthenticationPage; });
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./actions/fetch-departments.ts
var fetch_departments = __webpack_require__("pvWX");

// CONCATENATED MODULE: ./assets/images/google.svg
/* harmony default export */ var google = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA1NCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik00LjQ3MTg2IDE1LjM4NzdDNi4xMDY2MyAxMS45ODEgOC40MTYzOSA5LjEwMTc0IDExLjMyNzMgNi43MDc2QzE1LjI3MTkgMy40NDg2MSAxOS43OTY1IDEuNDg2ODkgMjQuODY5NSAwLjg4NTcyMkMzMC44Mjg1IDAuMTc5MDgxIDM2LjQyODkgMS4zMDc2IDQxLjYwNzQgNC40MDgzOEM0Mi44OTQxIDUuMTc4MyA0NC4wOTY1IDYuMDUzNjkgNDUuMjQ2MSA3LjAwMjkxQzQ1LjUzMDggNy4yMzQ5NCA0NS40OTkyIDcuMzcyMDUgNDUuMjU2NiA3LjYwNDA4QzQyLjkwNDcgOS45NDU0OSA0MC41NTI3IDEyLjI4NjkgMzguMjIxOSAxNC42NDk0QzM3Ljk0NzYgMTQuOTIzNiAzNy44IDE0LjkwMjUgMzcuNTA0NyAxNC42ODFDMzAuNjcwMyA5LjQxODE1IDIwLjcwMzUgMTAuODQyIDE1LjYwOTQgMTcuODAyOUMxNC43MTI5IDE5LjAyNjQgMTMuOTg1MSAyMC4zNDQ3IDEzLjQ3ODkgMjEuNzc5MUMxMy40MzY3IDIxLjkwNTYgMTMuMzUyMyAyMi4wMjE3IDEzLjI4OTEgMjIuMTQ4MkMxMS45Mjg1IDIxLjExNDYgMTAuNTU3NCAyMC4wODEgOS4yMDc0MSAxOS4wMzY5QzcuNjI1MzggMTcuODI0IDYuMDQzMzUgMTYuNjExMSA0LjQ3MTg2IDE1LjM4NzdaIiBmaWxsPSIjRTk0MzM1Ii8+DQo8cGF0aCBkPSJNMTMuMjg5IDMyLjA0MUMxMy43NDI2IDMzLjA0MyAxNC4xMjIyIDM0LjA4NzEgMTQuNjkxOCAzNS4wMjU4QzE3LjA4NTkgMzguOTQ5MiAyMC41MDMxIDQxLjQ2OTkgMjUuMDA2NiA0Mi4zNjY0QzI5LjA2NzIgNDMuMTc4NSAzMi45Njk1IDQyLjYzMDEgMzYuNjA4MiA0MC41OTQ1QzM2LjczNDcgNDAuNTMxMyAzNi44NjEzIDQwLjQ2OCAzNi45NzczIDQwLjQwNDdDMzcuMDQwNiA0MC40NjggMzcuMDkzMyA0MC41NDE4IDM3LjE1NjYgNDAuNTk0NUMzOS44Nzc3IDQyLjcwMzkgNDIuNjA5NCA0NC44MTMzIDQ1LjMzMDQgNDYuOTIyN0M0NC4wMjI2IDQ4LjIxOTkgNDIuNTM1NSA0OS4yNjQxIDQwLjk1MzUgNTAuMTcxMUMzNi4zNjU2IDUyLjc4NjcgMzEuMzk4IDUzLjg0MTQgMjYuMTY2OCA1My40NDA2QzE5LjY0ODggNTIuOTM0NCAxNC4wMjczIDUwLjM2MDkgOS4zODY2OSA0NS43MjAzQzcuMzUxMTUgNDMuNjg0OCA1LjY3NDE5IDQxLjM4NTUgNC40NjEzIDM4Ljc1OTRDNS41ODk4MiAzNy44OTQ1IDYuNzE4MzQgMzcuMDQwMiA3Ljg0Njg1IDM2LjE3NTRDOS42NjA5MSAzNC43OTM4IDExLjQ3NSAzMy40MjI3IDEzLjI4OSAzMi4wNDFaIiBmaWxsPSIjMzRBODUzIi8+DQo8cGF0aCBkPSJNNDUuMzQxIDQ2LjkyM0M0Mi42MTk5IDQ0LjgxMzcgMzkuODg4MyA0Mi43MDQzIDM3LjE2NzIgNDAuNTk0OUMzNy4xMDM5IDQwLjU0MjIgMzcuMDQwNiA0MC40Njg0IDM2Ljk4NzkgNDAuNDA1MUMzNy45MjY2IDM5LjY3NzMgMzguODg2MyAzOC45NzA3IDM5LjY1NjMgMzguMDQyNkM0MC45NDMgMzYuNTAyNyA0MS43OTczIDM0Ljc2MjUgNDIuMjQwMyAzMi44MTEzQzQyLjI5MyAzMi41Njg3IDQyLjI1MDggMzIuNDg0NCA0Mi4wMDgyIDMyLjQ5NDlDNDEuODgxNyAzMi41MDU1IDQxLjc2NTYgMzIuNDk0OSA0MS42MzkxIDMyLjQ5NDlDMzcuMzM2IDMyLjQ5NDkgMzMuMDIyMyAzMi40ODQ0IDI4LjcxOTIgMzIuNTA1NUMyOC4yNDQ1IDMyLjUwNTUgMjguMTM5MSAzMi4zNzg5IDI4LjE0OTYgMzEuOTI1NEMyOC4xNzA3IDI4Ljg2NjggMjguMTcwNyAyNS44MDgyIDI4LjE0OTYgMjIuNzQ5NkMyOC4xNDk2IDIyLjM1OTQgMjguMjU1MSAyMi4yNTM5IDI4LjY0NTMgMjIuMjUzOUMzNi41MzQ0IDIyLjI2NDUgNDQuNDIzNSAyMi4yNjQ1IDUyLjMyMzEgMjIuMjUzOUM1Mi42NjA2IDIyLjI1MzkgNTIuNzk3NyAyMi4zMzgzIDUyLjg4MjEgMjIuNjk2OUM1My41MjU0IDI1LjU5NzMgNTMuNDgzMiAyOC41MDgyIDUzLjA5MyAzMS40NDAyQzUyLjc3NjYgMzMuNzgxNiA1Mi4yMDcxIDM2LjA0OTIgNTEuMzMxNyAzOC4yNDNDNTAuMDM0NCA0MS40ODA5IDQ4LjEyNTQgNDQuMzA3NCA0NS42MTUzIDQ2LjczMzJDNDUuNTIwMyA0Ni44MDcgNDUuNDI1NCA0Ni44NTk4IDQ1LjM0MSA0Ni45MjNaIiBmaWxsPSIjNDI4NUYzIi8+DQo8cGF0aCBkPSJNMTMuMjg5IDMyLjA0MTRDMTEuNDc1IDMzLjQyMyA5LjY2MDkyIDM0Ljc5NDEgNy44NDY4NSAzNi4xNzU4QzYuNzE4MzQgMzcuMDMwMSA1LjU4OTgyIDM3Ljg5NDkgNC40NjEzMSAzOC43NTk4QzMuNTg1OTIgMzcuMTM1NSAzLjAxNjM5IDM1LjQxNjQgMi41NTIzMiAzMy42NDQ1QzEuNjY2MzkgMzAuMjE2OCAxLjUyOTI4IDI2LjczNjMgMi4wMTQ0MyAyMy4yNDUzQzIuMzk0MTIgMjAuNTAzMSAzLjE4NTE0IDE3Ljg2NjQgNC40NjEzMSAxNS4zOTg0QzYuMDQzMzQgMTYuNjExMyA3LjYxNDgyIDE3LjgzNDggOS4xOTY4NSAxOS4wNDc3QzEwLjU1NzQgMjAuMDkxOCAxMS45MTc5IDIxLjEyNTQgMTMuMjc4NSAyMi4xNTlDMTMuMDQ2NSAyMy4yODc1IDEyLjcxOTUgMjQuMzk0OSAxMi42MTQgMjUuNTU1MUMxMi40MjQyIDI3LjY2NDUgMTIuNjI0NiAyOS43MjExIDEzLjIyNTggMzEuNzQ2MUMxMy4yNjc5IDMxLjgzMDUgMTMuMjc4NSAzMS45MzU5IDEzLjI4OSAzMi4wNDE0WiIgZmlsbD0iI0ZBQkIwNiIvPg0KPC9zdmc+DQo=");
// EXTERNAL MODULE: ./config/globals.ts
var globals = __webpack_require__("VS8K");

// EXTERNAL MODULE: ./context/AuthContext.tsx + 1 modules
var AuthContext = __webpack_require__("6Kf1");

// EXTERNAL MODULE: ./lib/apollo-client.ts
var apollo_client = __webpack_require__("+GZE");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./pages/auth.tsx










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
  } = Object(external_react_["useContext"])(AuthContext["b" /* default */]);
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    if (isUserLoggedIn()) router.push('/');
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
    container: true,
    spacing: 1,
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: "30px"
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
      item: true,
      xs: 12,
      sm: 10,
      md: 6,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Card"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["CardContent"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
            variant: "h4",
            align: "center",
            children: "\xA1Bienvenido!"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
            variant: "body1",
            align: "center",
            children: "Ingresa y disfruta una gran experiencia"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
            href: globals["d" /* AUTH_GOOGLE_URL */],
            className: styles.tailwind.mainContent.loginForm.button.container + styles.tailwind.generic.google,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: styles.tailwind.mainContent.loginForm.button.icon.container,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: google,
                className: styles.tailwind.mainContent.loginForm.button.icon.image
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
              variant: "button",
              align: "center",
              children: "Ingresa con Google"
            })]
          })]
        })
      })
    })
  });
}
;
const getServerSideProps = async () => {
  const apolloClient = Object(apollo_client["a" /* initializeApolloClient */])();
  const departments = await Object(fetch_departments["a" /* getDepartments */])(apolloClient);
  return {
    props: {
      departments
    }
  };
};

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });