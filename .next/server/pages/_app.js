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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


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

/***/ "8k/1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowDown");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "DME6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Ibnk":
/***/ (function(module, exports) {

module.exports = require("next/head.js");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Ti6D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Layout; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head.js"
var head_js_ = __webpack_require__("Ibnk");
var head_js_default = /*#__PURE__*/__webpack_require__.n(head_js_);

// CONCATENATED MODULE: ./assets/images/logo.svg
/* harmony default export */ var logo = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjcwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDI3MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTM1IDIxNi43MTVDMTgzLjcwNCAyMTYuNzE1IDIyMy4xODYgMTc4LjM3NCAyMjMuMTg2IDEzMS4wNzlDMjIzLjE4NiA4My43ODM0IDE4My43MDQgNDUuNDQyOSAxMzUgNDUuNDQyOUM4Ni4yOTU3IDQ1LjQ0MjkgNDYuODEzMiA4My43ODM0IDQ2LjgxMzIgMTMxLjA3OUM0Ni44MTMyIDE3OC4zNzQgODYuMjk1NyAyMTYuNzE1IDEzNSAyMTYuNzE1WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik0xMzQuOTk3IDIxMS4wMzFDMTgwLjQ2OCAyMTEuMDMxIDIxNy4zMzEgMTc1LjIzNSAyMTcuMzMxIDEzMS4wNzlDMjE3LjMzMSA4Ni45MjIyIDE4MC40NjggNTEuMTI2MiAxMzQuOTk3IDUxLjEyNjJDODkuNTI1IDUxLjEyNjIgNTIuNjYyOCA4Ni45MjIyIDUyLjY2MjggMTMxLjA3OUM1Mi42NjI4IDE3NS4yMzUgODkuNTI1IDIxMS4wMzEgMTM0Ljk5NyAyMTEuMDMxWiIgc3Ryb2tlPSIjQTMxOTVCIiBzdHJva2Utd2lkdGg9IjIuMDc3IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4NCjxwYXRoIGQ9Ik0xMzQuOTkyIDAuMDAzMjY1MzhDMTA4LjI5NiAwLjAwMzI2NTQ2IDgyLjE5ODYgNy42OTA2NSA2MC4wMDEgMjIuMDkzM0MzNy44MDM1IDM2LjQ5NiAyMC41MDI0IDU2Ljk2NzEgMTAuMjg1NSA4MC45MTgxQzAuMDY4NjkwMyAxMDQuODY5IC0yLjYwNTAyIDEzMS4yMjQgMi42MDI0OSAxNTYuNjUxQzcuODA5OTkgMTgyLjA3NyAyMC42NjQ4IDIwNS40MzMgMzkuNTQxNSAyMjMuNzY1QzU4LjQxODEgMjQyLjA5NyA4Mi40Njg4IDI1NC41ODIgMTA4LjY1MiAyNTkuNjQxQzEzNC44MzYgMjY0LjcgMTYxLjk3NiAyNjIuMTA1IDE4Ni42NDEgMjUyLjE4NkMyMTEuMzA2IDI0Mi4yNjYgMjMyLjM4OCAyMjUuNDY3IDI0Ny4yMjIgMjAzLjkxM0MyNjIuMDU1IDE4Mi4zNTggMjY5Ljk3MyAxNTcuMDE3IDI2OS45NzUgMTMxLjA5MkMyNjkuOTc3IDExMy44NzggMjY2LjQ4NiA5Ni44MzE3IDI1OS43MDMgODAuOTI3M0MyNTIuOTIgNjUuMDIyOSAyNDIuOTc4IDUwLjU3MTcgMjMwLjQ0MyAzOC4zOTg5QzIxNy45MDkgMjYuMjI2IDIwMy4wMjggMTYuNTcgMTg2LjY1IDkuOTgyQzE3MC4yNzMgMy4zOTQwNSAxNTIuNzE5IDAuMDAzMjY1MzMgMTM0Ljk5MiAwLjAwMzI2NTM4VjAuMDAzMjY1MzhaTTEzNC45OTIgMjE3LjA1MUMxMTcuNDg0IDIxNy4wNSAxMDAuMzY5IDIxMi4wMDcgODUuODExNyAyMDIuNTZDNzEuMjU0NSAxOTMuMTEzIDU5LjkwOSAxNzkuNjg3IDUzLjIwOTcgMTYzLjk3OUM0Ni41MTA0IDE0OC4yNyA0NC43NTgzIDEzMC45ODYgNDguMTc0OCAxMTQuMzFDNTEuNTkxNCA5Ny42MzQ5IDYwLjAyMzMgODIuMzE3OSA3Mi40MDQyIDcwLjI5NkM4NC43ODUxIDU4LjI3NDEgMTAwLjU1OSA1MC4wODczIDExNy43MzEgNDYuNzcwOEMxMzQuOTAzIDQzLjQ1NDQgMTUyLjcwMyA0NS4xNTcyIDE2OC44NzggNTEuNjYzOUMxODUuMDU0IDU4LjE3MDcgMTk4Ljg4IDY5LjE4OTEgMjA4LjYwNyA4My4zMjZDMjE4LjMzNCA5Ny40NjI5IDIyMy41MjYgMTE0LjA4MyAyMjMuNTI2IDEzMS4wODVDMjIzLjUyNiAxNDIuMzc2IDIyMS4yMzcgMTUzLjU1NiAyMTYuNzg4IDE2My45ODdDMjEyLjMzOSAxNzQuNDE4IDIwNS44MTggMTgzLjg5NiAxOTcuNTk3IDE5MS44NzlDMTg5LjM3NiAxOTkuODYzIDE3OS42MTUgMjA2LjE5NSAxNjguODc0IDIxMC41MTVDMTU4LjEzMiAyMTQuODM2IDE0Ni42MTkgMjE3LjA1OSAxMzQuOTkyIDIxNy4wNThWMjE3LjA1MVoiIGZpbGw9IiNBMzE5NUIiLz4NCjxwYXRoIGQ9Ik0xMzQuNjYgMjEuOTUzMUwxMzEuNDUxIDMyLjE0NjRMMTI4LjI0MSA0Mi4zMzk2SDE0MS4wNzZMMTM3Ljg3IDMyLjE0NjRMMTM0LjY2IDIxLjk1MzFaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMTQ4Ljk3NyAzNS41Mjk3QzE0Ny44NDggMzUuNTMwMSAxNDYuNzUxIDM1Ljg5MDggMTQ1Ljg1NCAzNi41NTYzTDEzNC42NiAwTDEyMy40NiAzNi41NTYzQzEyMi41NiAzNS44OTMyIDEyMS40NjIgMzUuNTMyOCAxMjAuMzMyIDM1LjUyOTdDMTE4Ljg5OCAzNS41Mjk3IDExNy41MjIgMzYuMDgzMSAxMTYuNTA3IDM3LjA2ODNDMTE1LjQ5MyAzOC4wNTM1IDExNC45MjMgMzkuMzg5NyAxMTQuOTIzIDQwLjc4M0MxMTQuOTIzIDQyLjE3NjIgMTE1LjQ5MyA0My41MTI0IDExNi41MDcgNDQuNDk3NkMxMTcuNTIyIDQ1LjQ4MjggMTE4Ljg5OCA0Ni4wMzYyIDEyMC4zMzIgNDYuMDM2MkMxMjEuNDExIDQ2LjAzMDkgMTIyLjQ2MSA0NS43MDUgMTIzLjM0MyA0NS4xMDI2QzEyNC4yMjUgNDQuNTAwMSAxMjQuODk2IDQzLjY0OTkgMTI1LjI2NSA0Mi42NjYzSDEyNS4zMDZMMTM0LjY2MyAxMi45Mzk5TDE0NC4wMDcgNDIuNjY2M0gxNDQuMDMxQzE0NC4zOTcgNDMuNTI5OCAxNDQuOTk3IDQ0LjI4MDcgMTQ1Ljc2OCA0NC44Mzg5QzE0Ni41MzkgNDUuMzk3MiAxNDcuNDUxIDQ1Ljc0MTkgMTQ4LjQwOCA0NS44MzY0QzE0OS4zNjQgNDUuOTMwOCAxNTAuMzI5IDQ1Ljc3MTQgMTUxLjIgNDUuMzc1MkMxNTIuMDcxIDQ0Ljk3ODkgMTUyLjgxNCA0NC4zNjA3IDE1My4zNTIgNDMuNTg2M0MxNTMuODg5IDQyLjgxMiAxNTQuMiA0MS45MTA2IDE1NC4yNTEgNDAuOTc4MkMxNTQuMzAyIDQwLjA0NTggMTU0LjA5MiAzOS4xMTczIDE1My42NDMgMzguMjkxOEMxNTMuMTk0IDM3LjQ2NjMgMTUyLjUyMiAzNi43NzQ2IDE1MS43IDM2LjI5MDVDMTUwLjg3OCAzNS44MDY1IDE0OS45MzUgMzUuNTQ4MSAxNDguOTc0IDM1LjU0M0wxNDguOTc3IDM1LjUyOTdaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNNTUuMjkxOCA1NC4xNTYyTDYwLjQ0MDYgNjMuNTY2MUw2NS41ODk1IDcyLjk3Nkw3NC42NjUzIDY0LjE2MjhMNjQuOTc1MSA1OS4xNjI4TDU1LjI4NDkgNTQuMTYyOUw1NS4yOTE4IDU0LjE1NjJaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNNzUuMjk3MyA1My45MjI4Qzc0LjUwMjIgNTQuNzAwMSA3My45ODg5IDU1LjcwNzQgNzMuODM1IDU2Ljc5MjdMMzkuMzAzMiAzOC42MTI5TDU4LjAwMzkgNzIuMTUyNkM1Ni44ODAyIDcyLjMwNjIgNTUuODM4OSA3Mi44MTE4IDU1LjAzODIgNzMuNTkyNkM1NC4zMjI3IDc0LjI1ODQgNTMuODA5NCA3NS4xMDIzIDUzLjU1NDIgNzYuMDMyMkM1My4yOTg5IDc2Ljk2MiA1My4zMTE2IDc3Ljk0MjEgNTMuNTkwOCA3OC44NjU0QzUzLjg3IDc5Ljc4ODcgNTQuNDA1MSA4MC42MTk4IDU1LjEzNzUgODEuMjY4QzU1Ljg3IDgxLjkxNjIgNTYuNzcxNyA4Mi4zNTY2IDU3Ljc0NDMgODIuNTQxMUM1OC43MTY5IDgyLjcyNTYgNTkuNzIzIDgyLjY0NzEgNjAuNjUyOCA4Mi4zMTQyQzYxLjU4MjUgODEuOTgxMyA2Mi40MDAzIDgxLjQwNjggNjMuMDE2OCA4MC42NTM0QzYzLjYzMzMgNzkuOSA2NC4wMjQ5IDc4Ljk5NjYgNjQuMTQ4NyA3OC4wNDE4QzY0LjI3MjYgNzcuMDg3IDY0LjEyNCA3Ni4xMTc2IDYzLjcxOTIgNzUuMjM5Mkw2My43Mzk4IDc1LjIxNTlMNDguNzExOSA0Ny43Njk1TDc2Ljk3NTggNjIuMzY5NFY2Mi4zNDk0Qzc3Ljk1NTUgNjIuNzkzMSA3OS4wNTE1IDYyLjkzNTEgODAuMTE2NyA2Mi43NTY0QzgxLjE4MTkgNjIuNTc3NiA4Mi4xNjUzIDYyLjA4NjYgODIuOTM0OCA2MS4zNDk0QzgzLjQ1OTIgNjAuODY2NiA4My44Nzg4IDYwLjI4NjggODQuMTY4NyA1OS42NDRDODQuNDU4NiA1OS4wMDEyIDg0LjYxMyA1OC4zMDg2IDg0LjYyMjcgNTcuNjA2OUM4NC42MzIzIDU2LjkwNTMgODQuNDk3MiA1Ni4yMDg4IDg0LjIyNTEgNTUuNTU4N0M4My45NTMgNTQuOTA4NiA4My41NDk2IDU0LjMxODEgODMuMDM4NyA1My44MjE5QzgyLjUyNzcgNTMuMzI1NyA4MS45MTk1IDUyLjkzMzkgODEuMjUwMSA1Mi42Njk4QzgwLjU4MDYgNTIuNDA1NiA3OS44NjM0IDUyLjI3NDMgNzkuMTQwOSA1Mi4yODM3Qzc4LjQxODMgNTIuMjkzMSA3Ny43MDUgNTIuNDQzIDc3LjA0MzEgNTIuNzI0NUM3Ni4zODEyIDUzLjAwNiA3NS43ODQxIDUzLjQxMzUgNzUuMjg3IDUzLjkyMjhINzUuMjk3M1oiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0yMi42MDY3IDEzMS40MjJMMzMuMTAzNSAxMzQuNTM1TDQzLjYwMDQgMTM3LjY1MlYxMjUuMTg5TDMzLjEwMzUgMTI4LjMwNUwyMi42MDY3IDEzMS40MjJaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMzYuNTg0NSAxMTcuNTEyQzM2LjU4NDcgMTE4LjYwOSAzNi45NTM1IDExOS42NzUgMzcuNjM0OCAxMjAuNTQ5TDAgMTMxLjQxOUwzNy42NTIgMTQyLjI5NUMzNi45NjQ5IDE0My4xNyAzNi41OTIzIDE0NC4yMzkgMzYuNTkxMyAxNDUuMzM5QzM2LjU5MTMgMTQ2LjczMiAzNy4xNjEzIDE0OC4wNjggMzguMTc1OCAxNDkuMDUzQzM5LjE5MDMgMTUwLjAzOSA0MC41NjYzIDE1MC41OTIgNDIuMDAxMSAxNTAuNTkyQzQzLjQzNTggMTUwLjU5MiA0NC44MTE4IDE1MC4wMzkgNDUuODI2MyAxNDkuMDUzQzQ2Ljg0MDkgMTQ4LjA2OCA0Ny40MTA4IDE0Ni43MzIgNDcuNDEwOCAxNDUuMzM5QzQ3LjQwNzMgMTQ0LjI4OCA0Ny4wNzI0IDE0My4yNjQgNDYuNDUxMyAxNDIuNDA0QzQ1LjgzMDMgMTQxLjU0NCA0NC45NTI4IDE0MC44OSA0My45MzcgMTQwLjUyOVYxNDAuNDk1TDEzLjMxMTYgMTMxLjQxOUw0My45MzcgMTIyLjMzNlYxMjIuMzA2QzQ0Ljk1MzEgMTIxLjk0OSA0NS44MzIgMTIxLjI5OCA0Ni40NTUgMTIwLjQ0MUM0Ny4wNzggMTE5LjU4NCA0Ny40MTUyIDExOC41NjEgNDcuNDIxMSAxMTcuNTEyQzQ3LjQyMTEgMTE2LjgyMiA0Ny4yODEyIDExNi4xMzkgNDcuMDA5MyAxMTUuNTAyQzQ2LjczNzUgMTE0Ljg2NSA0Ni4zMzkgMTE0LjI4NSA0NS44MzY2IDExMy43OThDNDUuMzM0MyAxMTMuMzEgNDQuNzM3OSAxMTIuOTIzIDQ0LjA4MTYgMTEyLjY1OUM0My40MjUyIDExMi4zOTUgNDIuNzIxOCAxMTIuMjU5IDQyLjAxMTQgMTEyLjI1OUM0MS4zMDA5IDExMi4yNTkgNDAuNTk3NSAxMTIuMzk1IDM5Ljk0MTEgMTEyLjY1OUMzOS4yODQ4IDExMi45MjMgMzguNjg4NCAxMTMuMzEgMzguMTg2MSAxMTMuNzk4QzM3LjY4MzggMTE0LjI4NSAzNy4yODUzIDExNC44NjUgMzcuMDEzNCAxMTUuNTAyQzM2Ljc0MTUgMTE2LjEzOSAzNi42MDE2IDExNi44MjIgMzYuNjAxNiAxMTcuNTEySDM2LjU4NDVaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNNTUuNzY5IDIwOC40ODVMNjUuNDQ4OSAyMDMuNDg1TDc1LjEzOTEgMTk4LjQ4NUw2Ni4wNjM0IDE4OS42NzFMNjAuOTE0NSAxOTkuMDg4TDU1Ljc2OSAyMDguNDg1WiIgZmlsbD0iIzAwQTE5QSIvPg0KPHBhdGggZD0iTTU1LjUyOSAxODkuMDU1QzU2LjMyNjIgMTg5LjgzMiA1Ny4zNjQ3IDE5MC4zMzQgNTguNDg0NCAxOTAuNDgyTDM5Ljc4MDMgMjI0LjAyNUw3NC4zMTg5IDIwNS44NThDNzQuNDcyNCAyMDYuOTUgNzQuOTg4MSAyMDcuOTYzIDc1Ljc4ODEgMjA4Ljc0NUM3Ni44MDc5IDIwOS43MDggNzguMTc3MiAyMTAuMjQzIDc5LjU5OTggMjEwLjIzM0M4MS4wMjI0IDIxMC4yMjMgODIuMzg0IDIwOS42NyA4My4zOSAyMDguNjkzQzg0LjM5NTkgMjA3LjcxNyA4NC45NjU0IDIwNi4zOTQgODQuOTc1MyAyMDUuMDEzQzg0Ljk4NTIgMjAzLjYzMSA4NC40MzQ2IDIwMi4zMDIgODMuNDQyNyAyMDEuMzExQzgyLjY3MjQgMjAwLjU3NSA4MS42ODkxIDIwMC4wODUgODAuNjI0MyAxOTkuOTA3Qzc5LjU1OTQgMTk5LjcyOCA3OC40NjM3IDE5OS44NjkgNzcuNDgzNyAyMDAuMzExTDc3LjQ1OTcgMjAwLjI4MUw0OS4xOTU4IDIxNC44ODFMNjQuMjMwNiAxODcuNDM1QzY0LjY4NyAxODYuNDg1IDY0LjgzMjkgMTg1LjQyMSA2NC42NDg4IDE4NC4zODhDNjQuNDY0NyAxODMuMzU1IDYzLjk1OTQgMTgyLjQwMSA2My4yMDA4IDE4MS42NTVDNjIuNjk4NiAxODEuMTY3IDYyLjEwMjQgMTgwLjc4IDYxLjQ0NjEgMTgwLjUxNUM2MC43ODk4IDE4MC4yNTEgNjAuMDg2NCAxODAuMTE1IDU5LjM3NTkgMTgwLjExNUM1OC42NjU0IDE4MC4xMTQgNTcuOTYxOCAxODAuMjUgNTcuMzA1MyAxODAuNTE0QzU2LjY0ODggMTgwLjc3NyA1Ni4wNTIyIDE4MS4xNjQgNTUuNTQ5NiAxODEuNjUyQzU1LjA0NjkgMTgyLjEzOSA1NC42NDgyIDE4Mi43MTggNTQuMzc2IDE4My4zNTZDNTQuMTAzOCAxODMuOTkzIDUzLjk2MzUgMTg0LjY3NiA1My45NjMyIDE4NS4zNjZDNTMuOTYyOSAxODYuMDU2IDU0LjEwMjUgMTg2LjczOSA1NC4zNzQxIDE4Ny4zNzdDNTQuNjQ1NyAxODguMDE0IDU1LjA0NCAxODguNTkzIDU1LjU0NjEgMTg5LjA4Mkw1NS41MjkgMTg5LjA1NVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0xMzUuMzM3IDI0MC4yMjRMMTM4LjU0MyAyMzAuMDM1TDE0MS43NTIgMjE5Ljg0MUgxMjguOTE4TDEzMi4xMjcgMjMwLjAzNUwxMzUuMzM3IDI0MC4yMjRaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMTIxLjAxMiAyMjYuNjUxQzEyMi4xNDEgMjI2LjY1MSAxMjMuMjM5IDIyNi4yOTMgMTI0LjEzOSAyMjUuNjMxTDEzNS4zNCAyNjIuMTgxTDE0Ni41MyAyMjUuNjE4QzE0Ny40MyAyMjYuMjg1IDE0OC41MzEgMjI2LjY0NyAxNDkuNjY0IDIyNi42NDhDMTUxLjA5OCAyMjYuNjQ4IDE1Mi40NzQgMjI2LjA5NCAxNTMuNDg5IDIyNS4xMDlDMTU0LjUwMyAyMjQuMTI0IDE1NS4wNzMgMjIyLjc4OCAxNTUuMDczIDIyMS4zOTVDMTU1LjA3MyAyMjAuMDAxIDE1NC41MDMgMjE4LjY2NSAxNTMuNDg5IDIxNy42OEMxNTIuNDc0IDIxNi42OTUgMTUxLjA5OCAyMTYuMTQxIDE0OS42NjQgMjE2LjE0MUMxNDguNTg0IDIxNi4xNDcgMTQ3LjUzMiAyMTYuNDc0IDE0Ni42NDkgMjE3LjA3OUMxNDUuNzY3IDIxNy42ODMgMTQ1LjA5NiAyMTguNTM2IDE0NC43MjggMjE5LjUyMUgxNDQuNjg2TDEzNS4zNCAyNDkuMjU0TDEyNS45ODkgMjE5LjUyNUgxMjUuOTU4QzEyNS41OTIgMjE4LjY2IDEyNC45OTEgMjE3LjkwOCAxMjQuMjIgMjE3LjM0OUMxMjMuNDQ4IDIxNi43OSAxMjIuNTM1IDIxNi40NDUgMTIxLjU3NyAyMTYuMzUxQzEyMC42MTkgMjE2LjI1NyAxMTkuNjUzIDIxNi40MTcgMTE4Ljc4MSAyMTYuODE0QzExNy45MSAyMTcuMjExIDExNy4xNjYgMjE3LjgzMSAxMTYuNjI5IDIxOC42MDZDMTE2LjA5MSAyMTkuMzgyIDExNS43ODEgMjIwLjI4NSAxMTUuNzMxIDIyMS4yMThDMTE1LjY4MSAyMjIuMTUyIDExNS44OTIgMjIzLjA4MSAxMTYuMzQzIDIyMy45MDdDMTE2Ljc5NCAyMjQuNzMzIDExNy40NjggMjI1LjQyNCAxMTguMjkyIDIyNS45MDhDMTE5LjExNiAyMjYuMzkxIDEyMC4wNiAyMjYuNjQ4IDEyMS4wMjIgMjI2LjY1MUgxMjEuMDEyWiIgZmlsbD0iIzAwQTE5QSIvPg0KPHBhdGggZD0iTTIxNC42OTQgMjA4LjAzNUwyMDkuNTQ1IDE5OC42MThMMjA0LjM5NiAxODkuMjA4TDE5NS4zMjEgMTk4LjAyMUwyMDUuMDE4IDIwMy4wMjFMMjE0LjcwOCAyMDguMDIxTDIxNC42OTQgMjA4LjAzNVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0xOTQuNjk2IDIwOC4yNjVDMTk1LjQ5MiAyMDcuNDg4IDE5Ni4wMDUgMjA2LjQ4IDE5Ni4xNTggMjA1LjM5NUwyMzAuNjk3IDIyMy41NTVMMjExLjk5IDE5MC4wMTJDMjEzLjExMyAxODkuODY2IDIxNC4xNTUgMTg5LjM2NCAyMTQuOTU1IDE4OC41ODVDMjE1LjY3MSAxODcuOTE5IDIxNi4xODQgMTg3LjA3NSAyMTYuNDM5IDE4Ni4xNDVDMjE2LjY5NCAxODUuMjE1IDIxNi42ODEgMTg0LjIzNSAyMTYuNDAxIDE4My4zMTFDMjE2LjEyMSAxODIuMzg4IDIxNS41ODYgMTgxLjU1NyAyMTQuODUzIDE4MC45MDlDMjE0LjEyMSAxODAuMjYxIDIxMy4yMTkgMTc5LjgyMSAyMTIuMjQ2IDE3OS42MzdDMjExLjI3MyAxNzkuNDUzIDIxMC4yNjcgMTc5LjUzMiAyMDkuMzM4IDE3OS44NjVDMjA4LjQwOCAxODAuMTk4IDIwNy41OSAxODAuNzczIDIwNi45NzQgMTgxLjUyN0MyMDYuMzU4IDE4Mi4yODEgMjA1Ljk2NyAxODMuMTg0IDIwNS44NDMgMTg0LjEzOUMyMDUuNzIgMTg1LjA5NCAyMDUuODY5IDE4Ni4wNjMgMjA2LjI3NCAxODYuOTQyTDIwNi4yNSAxODYuOTY1TDIyMS4yODUgMjE0LjQwOEwxOTMuMDI0IDE5OS44MThWMTk5LjgzOEMxOTIuMTM2IDE5OS40NzggMTkxLjE2NCAxOTkuMzU5IDE5MC4yMTEgMTk5LjQ5M0MxODkuMjU5IDE5OS42MjcgMTg4LjM2MSAyMDAuMDEgMTg3LjYxNSAyMDAuNjAxQzE4Ni44NjkgMjAxLjE5MiAxODYuMzAyIDIwMS45NjggMTg1Ljk3NSAyMDIuODQ3QzE4NS42NDggMjAzLjcyNiAxODUuNTcyIDIwNC42NzUgMTg1Ljc1NyAyMDUuNTkyQzE4NS45NDEgMjA2LjUxIDE4Ni4zNzkgMjA3LjM2MSAxODcuMDIzIDIwOC4wNTZDMTg3LjY2NyAyMDguNzUxIDE4OC40OTMgMjA5LjI2MyAxODkuNDEzIDIwOS41MzhDMTkwLjMzMyAyMDkuODEzIDE5MS4zMTMgMjA5Ljg0IDE5Mi4yNDggMjA5LjYxNkMxOTMuMTgyIDIwOS4zOTIgMTk0LjAzNyAyMDguOTI2IDE5NC43MiAyMDguMjY4TDE5NC42OTYgMjA4LjI2NVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0yNDcuMzc5IDEzMC43NjVMMjM2Ljg4NiAxMjcuNjQ5TDIyNi4zODkgMTI0LjUzMlYxMzYuOTk1TDIzNi44ODYgMTMzLjg4MkwyNDcuMzc5IDEzMC43NjVaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMjMzLjQxMiAxNDQuNjY5QzIzMy40MDkgMTQzLjU3MiAyMzMuMDM4IDE0Mi41MDYgMjMyLjM1NSAxNDEuNjMyTDI3MCAxMzAuNzYyTDIzMi4zNDggMTE5Ljg4OUMyMzMuMDM0IDExOS4wMTMgMjMzLjQwNiAxMTcuOTQzIDIzMy40MDkgMTE2Ljg0MkMyMzMuNDA5IDExNS40NDkgMjMyLjgzOSAxMTQuMTEzIDIzMS44MjQgMTEzLjEyOEMyMzAuODEgMTEyLjE0MiAyMjkuNDM0IDExMS41ODkgMjI3Ljk5OSAxMTEuNTg5QzIyNi41NjQgMTExLjU4OSAyMjUuMTg4IDExMi4xNDIgMjI0LjE3MyAxMTMuMTI4QzIyMy4xNTkgMTE0LjExMyAyMjIuNTg5IDExNS40NDkgMjIyLjU4OSAxMTYuODQyQzIyMi41OTUgMTE3Ljg5MiAyMjIuOTMzIDExOC45MTUgMjIzLjU1NiAxMTkuNzczQzIyNC4xNzkgMTIwLjYzMSAyMjUuMDU3IDEyMS4yODMgMjI2LjA3MyAxMjEuNjQyVjEyMS42NzVMMjU2LjY4NSAxMzAuNzYyTDIyNi4wNjYgMTM5LjgzOVYxMzkuODYyQzIyNS4wNTEgMTQwLjIyMiAyMjQuMTczIDE0MC44NzQgMjIzLjU1IDE0MS43MzJDMjIyLjkyNyAxNDIuNTkgMjIyLjU5IDE0My42MTIgMjIyLjU4MiAxNDQuNjYyQzIyMi41ODIgMTQ2LjA1NSAyMjMuMTUyIDE0Ny4zOTEgMjI0LjE2NyAxNDguMzc3QzIyNS4xODEgMTQ5LjM2MiAyMjYuNTU3IDE0OS45MTUgMjI3Ljk5MiAxNDkuOTE1QzIyOS40MjcgMTQ5LjkxNSAyMzAuODAzIDE0OS4zNjIgMjMxLjgxNyAxNDguMzc3QzIzMi44MzIgMTQ3LjM5MSAyMzMuNDAyIDE0Ni4wNTUgMjMzLjQwMiAxNDQuNjYyTDIzMy40MTIgMTQ0LjY2OVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0yMTQuMjMxIDUzLjY5MjlMMjA0LjUzNCA1OC42OTI5TDE5NC44NDQgNjMuNjkyOEwyMDMuOTIgNzIuNTA2MUwyMDkuMDY4IDYzLjA5NjFMMjE0LjIxNyA1My42ODYyTDIxNC4yMzEgNTMuNjkyOVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0yMTQuNDY4IDczLjExOTRDMjEzLjY2OCA3Mi4zNDY0IDIxMi42MyA3MS44NDc5IDIxMS41MTIgNzEuNjk5NEwyMzAuMjIgMzguMTY2NEwxOTUuNjc4IDU2LjMyNjJDMTk1LjUyNCA1NS4yMzY2IDE5NS4wMDggNTQuMjI1NSAxOTQuMjA5IDUzLjQ0NjJDMTkzLjE5NCA1Mi40NjE0IDE5MS44MTcgNTEuOTA4NSAxOTAuMzgyIDUxLjkwOTFDMTg4Ljk0OCA1MS45MDk3IDE4Ny41NzIgNTIuNDYzOCAxODYuNTU4IDUzLjQ0OTVDMTg1LjU0MyA1NC40MzUzIDE4NC45NzQgNTUuNzcxOCAxODQuOTc1IDU3LjE2NTJDMTg0Ljk3NSA1OC41NTg2IDE4NS41NDYgNTkuODk0NiAxODYuNTYxIDYwLjg3OTVDMTg3LjMyOSA2MS42MTYyIDE4OC4zMTIgNjIuMTA2OSAxODkuMzc2IDYyLjI4NTZDMTkwLjQ0IDYyLjQ2NDQgMTkxLjUzNCA2Mi4zMjI3IDE5Mi41MTMgNjEuODc5NUwxOTIuNTM3IDYxLjkwMjhMMjIwLjgwMSA0Ny4zMDk2TDIwNS43NzMgNzQuNzUyN1Y3NC43NzI3QzIwNS4zMTUgNzUuNzIzOCAyMDUuMTY4IDc2Ljc4ODQgMjA1LjM1MiA3Ny44MjNDMjA1LjUzNyA3OC44NTc2IDIwNi4wNDMgNzkuODEyNiAyMDYuODAzIDgwLjU1OTNDMjA3LjMwNSA4MS4wNDY5IDIwNy45MDIgODEuNDMzNyAyMDguNTU5IDgxLjY5NzRDMjA5LjIxNSA4MS45NjExIDIwOS45MTkgODIuMDk2NyAyMTAuNjI5IDgyLjA5NjRDMjExLjM0IDgyLjA5NjEgMjEyLjA0MyA4MS45NTk5IDIxMi42OTkgODEuNjk1NkMyMTMuMzU2IDgxLjQzMTMgMjEzLjk1MiA4MS4wNDQgMjE0LjQ1NCA4MC41NTZDMjE0Ljk1NiA4MC4wNjc5IDIxNS4zNTUgNzkuNDg4NSAyMTUuNjI2IDc4Ljg1MUMyMTUuODk4IDc4LjIxMzUgMjE2LjAzNyA3Ny41MzAyIDIxNi4wMzcgNzYuODQwM0MyMTYuMDM3IDc2LjE1MDQgMjE1Ljg5NiA3NS40NjczIDIxNS42MjQgNzQuODNDMjE1LjM1MiA3NC4xOTI3IDIxNC45NTMgNzMuNjEzNyAyMTQuNDUxIDczLjEyNkwyMTQuNDY4IDczLjExOTRaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMTc3LjQ5MiA1NS4zMjk0TDE3NS43NzUgNTQuNjM5NEwxNzkuNDQ4IDQ1Ljk3MjhDMTgwLjIzMyA0NC4xMTU5IDE4MC4yMjYgNDIuMDMyMyAxNzkuNDI5IDQwLjE4MDRDMTc4LjYzMSAzOC4zMjg1IDE3Ny4xMDkgMzYuODYgMTc1LjE5NyAzNi4wOTc5QzE3My4yODUgMzUuMzM1OSAxNzEuMTM5IDM1LjM0MjcgMTY5LjIzMiAzNi4xMTY5QzE2Ny4zMjUgMzYuODkxMSAxNjUuODEzIDM4LjM2OTMgMTY1LjAyOCA0MC4yMjYyTDE2MS4zNTUgNDguODkyOEwxNTkuNjM5IDQ4LjIwNjJMMTYzLjMxMiAzOS41Mzk2QzE2NC4yODYgMzcuMjQxMSAxNjYuMTYxIDM1LjQxMjYgMTY4LjUyNCAzNC40NTY1QzE3MC44ODcgMzMuNTAwNCAxNzMuNTQ0IDMzLjQ5NDkgMTc1LjkxMSAzNC40NDEzQzE3OC4yNzggMzUuMzg3NyAxODAuMTYxIDM3LjIwODQgMTgxLjE0NSAzOS41MDI4QzE4Mi4xMyA0MS43OTczIDE4Mi4xMzYgNDQuMzc3NyAxODEuMTYxIDQ2LjY3NjJMMTc3LjQ5MiA1NS4zMjk0WiIgZmlsbD0iIzAwQTE5QSIvPg0KPHBhdGggZD0iTTE3My4zMjggNDAuNTQ2M0MxNzIuNjA5IDQwLjI1NjkgMTcxLjgzNyA0MC4xMDg0IDE3MS4wNTggNDAuMTA5M0MxNzAuMjc5IDQwLjExMDIgMTY5LjUwNyA0MC4yNjA2IDE2OC43ODggNDAuNTUxN0MxNjguMDY5IDQwLjg0MjggMTY3LjQxNiA0MS4yNjkgMTY2Ljg2NyA0MS44MDU3QzE2Ni4zMTggNDIuMzQyNSAxNjUuODgzIDQyLjk3OTMgMTY1LjU4OCA0My42Nzk2TDE2My4wODkgNDkuNTYyOEwxNzQuMDM5IDUzLjk1MjhMMTc2LjUzOCA0OC4wNjI5QzE3Ni44MzUgNDcuMzYzNiAxNzYuOTg2IDQ2LjYxNDQgMTc2Ljk4NSA0NS44NTgyQzE3Ni45ODMgNDUuMTAxOSAxNzYuODI4IDQ0LjM1MzQgMTc2LjUyOCA0My42NTU0QzE3Ni4yMjkgNDIuOTU3MyAxNzUuNzkgNDIuMzIzNSAxNzUuMjM4IDQxLjc5QzE3NC42ODYgNDEuMjU2NSAxNzQuMDMyIDQwLjgzMzkgMTczLjMxMSA0MC41NDYzSDE3My4zMjhaTTE3MC4zMDggNDcuNjcyOUMxNjkuOTk3IDQ3LjU0ODkgMTY5LjczIDQ3LjMzOCAxNjkuNTQzIDQ3LjA2NjlDMTY5LjM1NSA0Ni43OTU4IDE2OS4yNTQgNDYuNDc2NyAxNjkuMjU0IDQ2LjE1QzE2OS4yNTMgNDUuODIzNCAxNjkuMzUyIDQ1LjUwMzkgMTY5LjUzOCA0NS4yMzJDMTY5LjcyNSA0NC45NjAxIDE2OS45OSA0NC43NDggMTcwLjMwMSA0NC42MjI3QzE3MC42MTEgNDQuNDk3MyAxNzAuOTUzIDQ0LjQ2NDQgMTcxLjI4MyA0NC41Mjc5QzE3MS42MTMgNDQuNTkxNSAxNzEuOTE2IDQ0Ljc0ODcgMTcyLjE1NCA0NC45Nzk3QzE3Mi4zOTIgNDUuMjEwNyAxNzIuNTU0IDQ1LjUwNSAxNzIuNjE5IDQ1LjgyNTRDMTcyLjY4NSA0Ni4xNDU4IDE3Mi42NTEgNDYuNDc3OSAxNzIuNTIyIDQ2Ljc3OTVDMTcyLjQzOCA0Ni45Nzk5IDE3Mi4zMTUgNDcuMTYyIDE3Mi4xNTggNDcuMzE1NEMxNzIuMDAxIDQ3LjQ2ODggMTcxLjgxNCA0Ny41OTAzIDE3MS42MDkgNDcuNjcyOUMxNzEuNDAzIDQ3Ljc1NiAxNzEuMTgyIDQ3Ljc5ODggMTcwLjk1OCA0Ny43OTg4QzE3MC43MzUgNDcuNzk4OCAxNzAuNTE0IDQ3Ljc1NiAxNzAuMzA4IDQ3LjY3MjlaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMjIwLjE5NiAxMDYuNjk2TDIxOS40NzkgMTA1LjAyOUwyMjguMzczIDEwMS40MjlDMjMwLjI0MyAxMDAuNjM1IDIzMS43MTggOTkuMTYwMiAyMzIuNDc5IDk3LjMyMUMyMzMuMjQgOTUuNDgxOSAyMzMuMjI3IDkzLjQyNiAyMzIuNDQzIDkxLjU5NjFDMjMxLjY1OCA4OS43NjYyIDIzMC4xNjUgODguMzA4NiAyMjguMjg1IDg3LjUzNzRDMjI2LjQwNSA4Ni43NjYxIDIyNC4yODggODYuNzQyOCAyMjIuMzkgODcuNDcyNUwyMTMuNDg2IDkxLjA2NThMMjEyLjc3NSA4OS4zOTkxTDIyMS42NzIgODUuNzk5MkMyMjQuMDI2IDg0Ljg4NjQgMjI2LjY1NSA4NC45MDk0IDIyOC45OTEgODUuODYzM0MyMzEuMzI3IDg2LjgxNzIgMjMzLjE4MyA4OC42MjUzIDIzNC4xNTggOTAuODk3QzIzNS4xMzMgOTMuMTY4OCAyMzUuMTQ4IDk1LjcyMTcgMjM0LjIgOTguMDA0M0MyMzMuMjUzIDEwMC4yODcgMjMxLjQxOCAxMDIuMTE2IDIyOS4wOTQgMTAzLjA5NkwyMjAuMTk2IDEwNi42OTZaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMjI4LjAyIDkzLjM4NThDMjI3LjQxNSA5MS45NzU5IDIyNi4yNTggOTAuODU3IDIyNC44MDQgOTAuMjc1QzIyMy4zNSA4OS42OTMxIDIyMS43MTggODkuNjk1NyAyMjAuMjY2IDkwLjI4MjVMMjE0LjE4IDkyLjc0MjRMMjE4Ljc1MiAxMDMuMzgyTDIyNC44MDcgMTAwLjkzMkMyMjUuNTMxIDEwMC42NDUgMjI2LjE4OSAxMDAuMjIxIDIyNi43NDQgOTkuNjg1NUMyMjcuMjk4IDk5LjE0OTggMjI3LjczOCA5OC41MTI5IDIyOC4wMzggOTcuODExNEMyMjguMzM4IDk3LjEwOTkgMjI4LjQ5MiA5Ni4zNTc3IDIyOC40OTEgOTUuNTk4MUMyMjguNDkgOTQuODM4NiAyMjguMzM1IDk0LjA4NjcgMjI4LjAzMyA5My4zODU4SDIyOC4wMlpNMjIwLjY5MSA5Ni4zODU3QzIyMC41NDcgOTYuMDM2IDIyMC41MzEgOTUuNjQ4MyAyMjAuNjQ4IDk1LjI4ODhDMjIwLjc2NCA5NC45MjkzIDIyMS4wMDUgOTQuNjIwMSAyMjEuMzMgOTQuNDEzOUMyMjEuNjU1IDk0LjIwNzYgMjIyLjA0NCA5NC4xMTcxIDIyMi40MyA5NC4xNTc3QzIyMi44MTUgOTQuMTk4MyAyMjMuMTc1IDk0LjM2NzUgMjIzLjQ0NyA5NC42MzY2QzIyMy43MTkgOTQuOTA1NiAyMjMuODg2IDk1LjI1NzggMjIzLjkyMSA5NS42MzMyQzIyMy45NTUgOTYuMDA4NiAyMjMuODU1IDk2LjM4NCAyMjMuNjM2IDk2LjY5NTZDMjIzLjQxOCA5Ny4wMDcyIDIyMy4wOTUgOTcuMjM1NiAyMjIuNzIzIDk3LjM0MTlDMjIyLjM1IDk3LjQ0ODMgMjIxLjk1MSA5Ny40MjYxIDIyMS41OTQgOTcuMjc5MUMyMjEuMTg0IDk3LjEwODMgMjIwLjg1OSA5Ni43ODczIDIyMC42OTEgOTYuMzg1N1oiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0yMTIuODA2IDE3Mi43NjhMMjEzLjUxNyAxNzEuMTAyTDIyMi40NDEgMTc0LjY2OEMyMjQuMzM2IDE3NS4zNjcgMjI2LjQzNyAxNzUuMzIgMjI4LjI5NiAxNzQuNTM4QzIzMC4xNTYgMTczLjc1NiAyMzEuNjI5IDE3Mi4zMDEgMjMyLjQwMSAxNzAuNDgxQzIzMy4xNzQgMTY4LjY2MiAyMzMuMTg1IDE2Ni42MjIgMjMyLjQzMyAxNjQuNzk0QzIzMS42OCAxNjIuOTY3IDIzMC4yMjQgMTYxLjQ5NiAyMjguMzczIDE2MC42OTVMMjE5LjQ0OCAxNTcuMTI4TDIyMC4xNTkgMTU1LjQ2MkwyMjkuMDgzIDE1OS4wMjhDMjMwLjI1NSAxNTkuNDk3IDIzMS4zMjEgMTYwLjE4NSAyMzIuMjE5IDE2MS4wNTRDMjMzLjExNyAxNjEuOTIyIDIzMy44MyAxNjIuOTU0IDIzNC4zMTggMTY0LjA5QzIzNC44MDUgMTY1LjIyNiAyMzUuMDU4IDE2Ni40NDQgMjM1LjA2IDE2Ny42NzVDMjM1LjA2MyAxNjguOTA2IDIzNC44MTYgMTcwLjEyNSAyMzQuMzM0IDE3MS4yNjNDMjMzLjg1MSAxNzIuNDAxIDIzMy4xNDIgMTczLjQzNiAyMzIuMjQ4IDE3NC4zMDhDMjMxLjM1NCAxNzUuMTggMjMwLjI5MSAxNzUuODczIDIyOS4xMjEgMTc2LjM0NkMyMjcuOTUxIDE3Ni44MiAyMjYuNjk3IDE3Ny4wNjUgMjI1LjQyOSAxNzcuMDY3QzIyNC4xNjIgMTc3LjA3IDIyMi45MDYgMTc2LjgzIDIyMS43MzQgMTc2LjM2MkwyMTIuODA2IDE3Mi43NjhaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMjI4LjAyNiAxNjguNzI1QzIyOC4zMjMgMTY4LjAyNiAyMjguNDc1IDE2Ny4yNzcgMjI4LjQ3MyAxNjYuNTJDMjI4LjQ3MiAxNjUuNzY0IDIyOC4zMTcgMTY1LjAxNiAyMjguMDE3IDE2NC4zMThDMjI3LjcxNyAxNjMuNjIgMjI3LjI3OSAxNjIuOTg2IDIyNi43MjcgMTYyLjQ1MkMyMjYuMTc1IDE2MS45MTkgMjI1LjUyIDE2MS40OTYgMjI0LjggMTYxLjIwOUwyMTguNzM0IDE1OC43ODJMMjE0LjIxNCAxNjkuNDQ4TDIyMC4yNzkgMTcxLjg3MkMyMjAuOTk5IDE3Mi4xNjEgMjIxLjc3MSAxNzIuMzA5IDIyMi41NTEgMTcyLjMwOEMyMjMuMzMgMTcyLjMwNyAyMjQuMTAxIDE3Mi4xNTYgMjI0LjgyMSAxNzEuODY1QzIyNS41NCAxNzEuNTc0IDIyNi4xOTMgMTcxLjE0OCAyMjYuNzQzIDE3MC42MTJDMjI3LjI5MiAxNzAuMDc1IDIyNy43MjcgMTY5LjQzOSAyMjguMDIzIDE2OC43MzhMMjI4LjAyNiAxNjguNzI1Wk0yMjAuNjgxIDE2NS43OTJDMjIwLjc3NyAxNjUuNTY3IDIyMC45MjMgMTY1LjM2NSAyMjEuMTA5IDE2NS4yMDFDMjIxLjI5NiAxNjUuMDM4IDIyMS41MTcgMTY0LjkxNiAyMjEuNzU3IDE2NC44NDZDMjIxLjk5NyAxNjQuNzc1IDIyMi4yNSAxNjQuNzU3IDIyMi40OTkgMTY0Ljc5MkMyMjIuNzQ3IDE2NC44MjggMjIyLjk4NCAxNjQuOTE3IDIyMy4xOTMgMTY1LjA1MkMyMjMuNDAyIDE2NS4xODcgMjIzLjU3NyAxNjUuMzY2IDIyMy43MDYgMTY1LjU3NUMyMjMuODM2IDE2NS43ODQgMjIzLjkxNiAxNjYuMDE4IDIyMy45NDEgMTY2LjI2QzIyMy45NjYgMTY2LjUwMyAyMjMuOTM1IDE2Ni43NDggMjIzLjg1MSAxNjYuOTc3QzIyMy43NjcgMTY3LjIwNyAyMjMuNjMxIDE2Ny40MTYgMjIzLjQ1NCAxNjcuNTg4QzIyMy4yNTUgMTY3Ljc3OCAyMjMuMDExIDE2Ny45MTcgMjIyLjc0NCAxNjcuOTk0QzIyMi40NzcgMTY4LjA3MiAyMjIuMTk1IDE2OC4wODUgMjIxLjkyMSAxNjguMDMyQzIyMS42NDggMTY3Ljk3OSAyMjEuMzkyIDE2Ny44NjMgMjIxLjE3NSAxNjcuNjkzQzIyMC45NTggMTY3LjUyMyAyMjAuNzg3IDE2Ny4zMDQgMjIwLjY3NyAxNjcuMDU1QzIyMC41OTEgMTY2Ljg1NSAyMjAuNTQ2IDE2Ni42NCAyMjAuNTQ2IDE2Ni40MjNDMjIwLjU0NiAxNjYuMjA3IDIyMC41OTEgMTY1Ljk5MiAyMjAuNjc3IDE2NS43OTJIMjIwLjY4MVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0xNjAuNTA0IDIxMy43MDFMMTYyLjIyIDIxMy4wMDVMMTY1LjkyNCAyMjEuNjQ1QzE2Ni4zMTcgMjIyLjU2MSAxNjYuODkzIDIyMy4zOTMgMTY3LjYxNyAyMjQuMDk0QzE2OC4zNDIgMjI0Ljc5NCAxNjkuMjAxIDIyNS4zNDkgMTcwLjE0NiAyMjUuNzI3QzE3MS4wOTIgMjI2LjEwNSAxNzIuMTA1IDIyNi4yOTggMTczLjEyNyAyMjYuMjk2QzE3NC4xNDkgMjI2LjI5NCAxNzUuMTYxIDIyNi4wOTYgMTc2LjEwNSAyMjUuNzE1QzE3Ny4wNDkgMjI1LjMzMyAxNzcuOTA2IDIyNC43NzQgMTc4LjYyNyAyMjQuMDdDMTc5LjM0OCAyMjMuMzY3IDE3OS45MiAyMjIuNTMyIDE4MC4zMDkgMjIxLjYxNEMxODAuNjk4IDIyMC42OTYgMTgwLjg5NyAyMTkuNzEzIDE4MC44OTUgMjE4LjcyQzE4MC44OTMgMjE3LjcyNyAxODAuNjg5IDIxNi43NDQgMTgwLjI5NiAyMTUuODI4TDE3Ni41OTIgMjA3LjE5MUwxNzguMzA5IDIwNi40OTFMMTgyLjAxNiAyMTUuMTMxQzE4Mi41MDMgMjE2LjI2NyAxODIuNzU1IDIxNy40ODYgMTgyLjc1OCAyMTguNzE2QzE4Mi43NiAyMTkuOTQ3IDE4Mi41MTMgMjIxLjE2NiAxODIuMDMgMjIyLjMwNEMxODEuNTQ3IDIyMy40NDIgMTgwLjgzOSAyMjQuNDc3IDE3OS45NDQgMjI1LjM0OUMxNzkuMDUgMjI2LjIyMSAxNzcuOTg3IDIyNi45MTMgMTc2LjgxNyAyMjcuMzg2QzE3NS42NDcgMjI3Ljg1OSAxNzQuMzkzIDIyOC4xMDQgMTczLjEyNSAyMjguMTA3QzE3MS44NTggMjI4LjEwOSAxNzAuNjAyIDIyNy44NjkgMTY5LjQzMSAyMjcuNEMxNjguMjU5IDIyNi45MzEgMTY3LjE5MyAyMjYuMjQzIDE2Ni4yOTYgMjI1LjM3NEMxNjUuMzk4IDIyNC41MDYgMTY0LjY4NSAyMjMuNDc0IDE2NC4xOTcgMjIyLjMzOEwxNjAuNTA0IDIxMy43MDFaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNMTc0LjIxIDIyMS4yOTVDMTc1LjY2MSAyMjAuNzA2IDE3Ni44MTIgMjE5LjU4MyAxNzcuNDExIDIxOC4xNzFDMTc4LjAxIDIxNi43NTkgMTc4LjAwOCAyMTUuMTc1IDE3Ny40MDYgMjEzLjc2NUwxNzQuODg3IDIwNy44ODVMMTYzLjk0NyAyMTIuMzE1TDE2Ni40NjYgMjE4LjE3OEMxNjcuMDY5IDIxOS41ODcgMTY4LjIyMyAyMjAuNzA3IDE2OS42NzUgMjIxLjI5MUMxNzEuMTI3IDIyMS44NzUgMTcyLjc1OCAyMjEuODc2IDE3NC4yMSAyMjEuMjk1Wk0xNzEuMTU5IDIxNC4xNzFDMTcxLjUyNSAyMTQuMDIgMTcxLjkzNCAyMTMuOTk3IDE3Mi4zMTUgMjE0LjEwNkMxNzIuNjk3IDIxNC4yMTYgMTczLjAyOCAyMTQuNDUgMTczLjI1MSAyMTQuNzdDMTczLjQ3NCAyMTUuMDkgMTczLjU3NiAyMTUuNDc1IDE3My41MzkgMjE1Ljg2QzE3My41MDIgMjE2LjI0NSAxNzMuMzI5IDIxNi42MDUgMTczLjA0OCAyMTYuODc5QzE3Mi43NjggMjE3LjE1MyAxNzIuMzk4IDIxNy4zMjUgMTcyLjAwMiAyMTcuMzYzQzE3MS42MDcgMjE3LjQwMiAxNzEuMjA5IDIxNy4zMDYgMTcwLjg3OCAyMTcuMDkyQzE3MC41NDcgMjE2Ljg3NyAxNzAuMzAzIDIxNi41NTggMTcwLjE4OCAyMTYuMTg4QzE3MC4wNzIgMjE1LjgxOCAxNzAuMDkzIDIxNS40MjEgMTcwLjI0NiAyMTUuMDY1QzE3MC40MjEgMjE0LjY2IDE3MC43NTIgMjE0LjM0IDE3MS4xNjkgMjE0LjE3MUgxNzEuMTU5WiIgZmlsbD0iIzAwQTE5QSIvPg0KPHBhdGggZD0iTTkyLjQxODYgMjA2LjY1MUw5NC4xMzQ5IDIwNy4zNDFMOTAuNDYyMSAyMTYuMDA4Qzg5LjY3NTUgMjE3Ljg2MiA4OS42Nzk3IDIxOS45NDQgOTAuNDczNyAyMjEuNzk1QzkxLjI2NzggMjIzLjY0NyA5Mi43ODY2IDIyNS4xMTYgOTQuNjk2MiAyMjUuODc5Qzk2LjYwNTcgMjI2LjY0MyA5OC43NDk0IDIyNi42MzkgMTAwLjY1NiAyMjUuODY4QzEwMi41NjIgMjI1LjA5NyAxMDQuMDc1IDIyMy42MjIgMTA0Ljg2MiAyMjEuNzY4TDEwOC41MjggMjEzLjEwMUwxMTAuMjQ0IDIxMy43OTFMMTA2LjU3MSAyMjIuNDU4QzEwNi4wODkgMjIzLjU5NiAxMDUuMzggMjI0LjYzMSAxMDQuNDg2IDIyNS41MDNDMTAzLjU5MSAyMjYuMzc1IDEwMi41MjkgMjI3LjA2NyAxMDEuMzU5IDIyNy41NDFDMTAwLjE4OSAyMjguMDE0IDk4LjkzNDQgMjI4LjI1OSA5Ny42NjY5IDIyOC4yNjJDOTYuMzk5NSAyMjguMjY1IDk1LjE0MzkgMjI4LjAyNSA5My45NzE5IDIyNy41NTZDOTIuNzk5OSAyMjcuMDg4IDkxLjczNDQgMjI2LjM5OSA5MC44MzYyIDIyNS41MzFDODkuOTM4MSAyMjQuNjYyIDg5LjIyNDkgMjIzLjYzMSA4OC43Mzc0IDIyMi40OTVDODguMjQ5OSAyMjEuMzU4IDg3Ljk5NzYgMjIwLjE0IDg3Ljk5NDkgMjE4LjkwOUM4Ny45OTIyIDIxNy42NzkgODguMjM5MiAyMTYuNDU5IDg4LjcyMTcgMjE1LjMyMUw5Mi40MTg2IDIwNi42NTFaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNOTYuNTgyNCAyMjEuNDMxQzk4LjAzNjkgMjIyLjAxMSA5OS42Njg5IDIyMi4wMDcgMTAxLjEyIDIyMS40MkMxMDIuNTcxIDIyMC44MzIgMTAzLjcyMyAyMTkuNzA5IDEwNC4zMjMgMjE4LjI5OEwxMDYuODIyIDIxMi40MDhMOTUuODM3NiAyMDguMDI1TDkzLjMzODYgMjEzLjkwOEM5Mi43NDA2IDIxNS4zMjEgOTIuNzQ0OSAyMTYuOTA3IDkzLjM1MDYgMjE4LjMxN0M5My45NTYzIDIxOS43MjcgOTUuMTEzOCAyMjAuODQ2IDk2LjU2ODcgMjIxLjQyOEw5Ni41ODI0IDIyMS40MzFaTTk5LjYwMzEgMjE0LjI5OEM5OS45NjUzIDIxNC40NDQgMTAwLjI2NCAyMTQuNzA4IDEwMC40NDkgMjE1LjA0NEMxMDAuNjMzIDIxNS4zOCAxMDAuNjkyIDIxNS43NjcgMTAwLjYxNiAyMTYuMTQxQzEwMC41MzkgMjE2LjUxNCAxMDAuMzMxIDIxNi44NSAxMDAuMDI4IDIxNy4wOTJDOTkuNzI0OCAyMTcuMzMzIDk5LjM0NDggMjE3LjQ2NSA5OC45NTI2IDIxNy40NjVDOTguNTYwNSAyMTcuNDY1IDk4LjE4MDQgMjE3LjMzMyA5Ny44NzcyIDIxNy4wOTJDOTcuNTc0IDIxNi44NSA5Ny4zNjY0IDIxNi41MTQgOTcuMjg5NyAyMTYuMTQxQzk3LjIxMyAyMTUuNzY3IDk3LjI3MiAyMTUuMzggOTcuNDU2NiAyMTUuMDQ0Qzk3LjY0MTIgMjE0LjcwOCA5Ny45NCAyMTQuNDQ0IDk4LjMwMjIgMjE0LjI5OEM5OC43MTkxIDIxNC4xMjkgOTkuMTg3OCAyMTQuMTI3IDk5LjYwNjUgMjE0LjI5MUw5OS42MDMxIDIxNC4yOThaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNNDkuNTk3MyAxNTUuNDI1TDUwLjMxODEgMTU3LjA5Mkw0MS40MjA5IDE2MC42ODhDMzkuNTUzMiAxNjEuNDg1IDM4LjA4MTcgMTYyLjk2IDM3LjMyMjQgMTY0Ljc5OEMzNi41NjMxIDE2Ni42MzcgMzYuNTc2NyAxNjguNjkxIDM3LjM2MDMgMTcwLjUyQzM4LjE0MzggMTcyLjM0OCAzOS42MzQ4IDE3My44MDUgNDEuNTEyOCAxNzQuNTc4QzQzLjM5MDggMTc1LjM1MSA0NS41MDYgMTc1LjM3NyA0Ny40MDM4IDE3NC42NTJMNTYuMzA4IDE3MS4wNTJMNTcuMDE4NSAxNzIuNzE4TDQ4LjExNDQgMTc2LjMyNUM0Ni45MzkyIDE3Ni44MyA0NS42NzE5IDE3Ny4xMDIgNDQuMzg3IDE3Ny4xMjVDNDMuMTAyMSAxNzcuMTQ4IDQxLjgyNTQgMTc2LjkyMSA0MC42MzE4IDE3Ni40NTlDMzkuNDM4MyAxNzUuOTk2IDM4LjM1MiAxNzUuMzA2IDM3LjQzNjYgMTc0LjQzQzM2LjUyMTMgMTczLjU1NCAzNS43OTU0IDE3Mi41MSAzNS4zMDE1IDE3MS4zNTdDMzQuODA3NiAxNzAuMjA1IDM0LjU1NTcgMTY4Ljk2OSAzNC41NjA2IDE2Ny43MjFDMzQuNTY1NSAxNjYuNDczIDM0LjgyNzEgMTY1LjIzOSAzNS4zMjk5IDE2NC4wOUMzNS44MzI4IDE2Mi45NDIgMzYuNTY2OSAxNjEuOTAyIDM3LjQ4OSAxNjEuMDMzQzM4LjQxMTIgMTYwLjE2NCAzOS41MDI5IDE1OS40ODIgNDAuNyAxNTkuMDI4TDQ5LjU5NzMgMTU1LjQyNVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik00MS43NzgyIDE2OC43MzlDNDIuMDc3MyAxNjkuNDM3IDQyLjUxNTEgMTcwLjA3MSA0My4wNjY4IDE3MC42MDVDNDMuNjE4NCAxNzEuMTM5IDQ0LjI3MyAxNzEuNTYyIDQ0Ljk5MzEgMTcxLjg1MUM0NS43MTMyIDE3Mi4xMzkgNDYuNDg0OCAxNzIuMjg2IDQ3LjI2MzcgMTcyLjI4NUM0OC4wNDI1IDE3Mi4yODMgNDguODEzNSAxNzIuMTMzIDQ5LjUzMjQgMTcxLjg0Mkw1NS41ODc1IDE2OS4zOTVMNTEuMDI1NiAxNTguNzYyTDQ0Ljk3NCAxNjEuMjEyQzQ0LjI1NTIgMTYxLjUwMiA0My42MDI0IDE2MS45MjcgNDMuMDUyOCAxNjIuNDYzQzQyLjUwMzIgMTYyLjk5OCA0Mi4wNjc2IDE2My42MzQgNDEuNzcwOCAxNjQuMzMyQzQxLjQ3NDEgMTY1LjAzMSA0MS4zMjIgMTY1Ljc4IDQxLjMyMzMgMTY2LjUzNkM0MS4zMjQ1IDE2Ny4yOTIgNDEuNDc5MSAxNjguMDQxIDQxLjc3ODIgMTY4LjczOVpNNDkuMTEzNyAxNjUuNzc5QzQ5LjI2NCAxNjYuMTMxIDQ5LjI4MzggMTY2LjUyNCA0OS4xNjk3IDE2Ni44ODlDNDkuMDU1NSAxNjcuMjU0IDQ4LjgxNDUgMTY3LjU3IDQ4LjQ4NzYgMTY3Ljc4MkM0OC4xNjA4IDE2Ny45OTQgNDcuNzY4MyAxNjguMDg5IDQ3LjM3NzEgMTY4LjA1MkM0Ni45ODYgMTY4LjAxNCA0Ni42MjAyIDE2Ny44NDYgNDYuMzQyMyAxNjcuNTc2QzQ2LjA2NDMgMTY3LjMwNyA0NS44OTE0IDE2Ni45NTEgNDUuODUyOCAxNjYuNTcyQzQ1LjgxNDMgMTY2LjE5MiA0NS45MTI2IDE2NS44MTEgNDYuMTMwOSAxNjUuNDkzQzQ2LjM0OTMgMTY1LjE3NiA0Ni42NzQyIDE2NC45NDIgNDcuMDUwMyAxNjQuODMxQzQ3LjQyNjUgMTY0LjcyIDQ3LjgzMDUgMTY0LjczOSA0OC4xOTM3IDE2NC44ODVDNDguNDAwMiAxNjQuOTY4IDQ4LjU4NzcgMTY1LjA4OSA0OC43NDU2IDE2NS4yNDNDNDguOTAzNSAxNjUuMzk2IDQ5LjAyODYgMTY1LjU3OCA0OS4xMTM3IDE2NS43NzlaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNNTYuOTE1OCA4OS40NjkyTDU2LjE4ODEgOTEuMTM1OUw0Ny4yNjM0IDg3LjU2OTJDNDUuMzUzOSA4Ni44MDU0IDQzLjIxMDEgODYuODA5NSA0MS4zMDM3IDg3LjU4MDZDMzkuMzk3MyA4OC4zNTE3IDM3Ljg4NDQgODkuODI2NiAzNy4wOTc4IDkxLjY4MDlDMzYuMzExMiA5My41MzUyIDM2LjMxNTQgOTUuNjE2OSAzNy4xMDk1IDk3LjQ2ODJDMzcuOTAzNSA5OS4zMTk1IDM5LjQyMjQgMTAwLjc4OSA0MS4zMzE5IDEwMS41NTJMNTAuMjU2NiAxMDUuMTEyTDQ5LjU0OTUgMTA2Ljc3OUw0MC42MjQ4IDEwMy4yMTJDMzkuNDUyOCAxMDIuNzQzIDM4LjM4NzQgMTAyLjA1NSAzNy40ODk0IDEwMS4xODZDMzYuNTkxNSAxMDAuMzE3IDM1Ljg3ODUgOTkuMjg0OSAzNS4zOTEzIDk4LjE0ODVDMzQuNDA3NCA5NS44NTM0IDM0LjQwMjYgOTMuMjcyNyAzNS4zNzgxIDkwLjk3NDJDMzYuMzUzNSA4OC42NzU3IDM4LjIyOTMgODYuODQ3NiA0MC41OTI4IDg1Ljg5MjFDNDIuOTU2MyA4NC45MzY2IDQ1LjYxMzggODQuOTMyIDQ3Ljk4MDggODUuODc5M0w1Ni45MTU4IDg5LjQ2OTJaIiBmaWxsPSIjMDBBMTlBIi8+DQo8cGF0aCBkPSJNNDEuNjk1NSA5My41MTI0QzQxLjM5OCA5NC4yMTE1IDQxLjI0NTQgOTQuOTYwOCA0MS4yNDY2IDk1LjcxNzNDNDEuMjQ3OCA5Ni40NzM4IDQxLjQwMjcgOTcuMjIyNyA0MS43MDI0IDk3LjkyMDlDNDIuMDAyMiA5OC42MTkyIDQyLjQ0MDkgOTkuMjUzMiA0Mi45OTM0IDk5Ljc4NjVDNDMuNTQ1OSAxMDAuMzIgNDQuMjAxMyAxMDAuNzQyIDQ0LjkyMjEgMTAxLjAyOUw1MC45ODA3IDEwMy40NTZMNTUuNTAxNCA5Mi43ODlMNDkuNDM2IDkwLjM2MjRDNDguNzE1OCA5MC4wNzQgNDcuOTQ0IDg5LjkyNjQgNDcuMTY0OSA4OS45MjhDNDYuMzg1OSA4OS45Mjk2IDQ1LjYxNDggOTAuMDgwMyA0NC44OTU4IDkwLjM3MTdDNDQuMTc2OCA5MC42NjMgNDMuNTI0MSA5MS4wODkyIDQyLjk3NDkgOTEuNjI1OUM0Mi40MjU4IDkyLjE2MjUgNDEuOTkxIDkyLjc5OSA0MS42OTU1IDkzLjQ5OVY5My41MTI0Wk00OS4wMzQ0IDk2LjQ0NTdDNDguOTM4MSA5Ni42NzA4IDQ4Ljc5MTcgOTYuODcyNCA0OC42MDU3IDk3LjAzNkM0OC40MTk2IDk3LjE5OTcgNDguMTk4NSA5Ny4zMjEyIDQ3Ljk1ODMgOTcuMzkyQzQ3LjcxODEgOTcuNDYyNyA0Ny40NjQ3IDk3LjQ4MDkgNDcuMjE2NCA5Ny40NDUyQzQ2Ljk2ODEgOTcuNDA5NSA0Ni43MzEgOTcuMzIwOSA0Ni41MjIyIDk3LjE4NTZDNDYuMzEzNCA5Ny4wNTA0IDQ2LjEzOCA5Ni44NzE4IDQ2LjAwODcgOTYuNjYyOUM0NS44Nzk0IDk2LjQ1NCA0NS43OTk0IDk2LjIxOTggNDUuNzc0NCA5NS45NzczQzQ1Ljc0OTQgOTUuNzM0NyA0NS43ODAxIDk1LjQ4OTggNDUuODY0MiA5NS4yNjAyQzQ1Ljk0ODMgOTUuMDMwNSA0Ni4wODM4IDk0LjgyMTggNDYuMjYwOSA5NC42NDlDNDYuNDU4MyA5NC40NTY2IDQ2LjcwMTUgOTQuMzE0NSA0Ni45NjkxIDk0LjIzNTNDNDcuMjM2NiA5NC4xNTYxIDQ3LjUyMDIgOTQuMTQyMyA0Ny43OTQ2IDk0LjE5NUM0OC4wNjg5IDk0LjI0NzggNDguMzI1NyA5NC4zNjU1IDQ4LjU0MTkgOTQuNTM3N0M0OC43NTgyIDk0LjcxIDQ4LjkyNzQgOTQuOTMxNCA0OS4wMzQ0IDk1LjE4MjRDNDkuMTIgOTUuMzgyNiA0OS4xNjQxIDk1LjU5NzIgNDkuMTY0MSA5NS44MTRDNDkuMTY0MSA5Ni4wMzA4IDQ5LjEyIDk2LjI0NTUgNDkuMDM0NCA5Ni40NDU3WiIgZmlsbD0iIzAwQTE5QSIvPg0KPHBhdGggZD0iTTEwOS45MDQgNDguMjIyOEwxMDguMTg4IDQ4LjkxOTVMMTA0LjQ4MSA0MC4yNjk1QzEwNC4xMDIgMzkuMzMzOSAxMDMuNTM0IDM4LjQ4MTEgMTAyLjgxMSAzNy43NjFDMTAyLjA4OSAzNy4wNDA5IDEwMS4yMjUgMzYuNDY4IDEwMC4yNzIgMzYuMDc1N0M5OS4zMTg2IDM1LjY4MzUgOTguMjk0MiAzNS40Nzk3IDk3LjI1ODcgMzUuNDc2NUM5Ni4yMjMzIDM1LjQ3MzMgOTUuMTk3NiAzNS42NzA1IDk0LjI0MTYgMzYuMDU2OEM5My4yODU2IDM2LjQ0MzEgOTIuNDE4NSAzNy4wMTA2IDkxLjY5MSAzNy43MjYyQzkwLjk2MzYgMzguNDQxNyA5MC4zOTAzIDM5LjI5MSA5MC4wMDQ5IDQwLjIyNDJDODkuNjE5NCA0MS4xNTc0IDg5LjQyOTQgNDIuMTU1OSA4OS40NDYxIDQzLjE2MTNDODkuNDYyNyA0NC4xNjY3IDg5LjY4NTcgNDUuMTU4OCA5MC4xMDE4IDQ2LjA3OTVMOTMuODE1OSA1NC43MTk0TDkyLjA5OTYgNTUuNDA5NEw4OC4zOTU4IDQ2Ljc2OTVDODcuODg2NSA0NS42MzAxIDg3LjYxNTUgNDQuNDAzNyA4Ny41OTg2IDQzLjE2MTdDODcuNTgxOCA0MS45MTk2IDg3LjgxOTQgNDAuNjg2NyA4OC4yOTc3IDM5LjUzNDdDODguNzc2IDM4LjM4MjcgODkuNDg1NCAzNy4zMzQ1IDkwLjM4NDYgMzYuNDUxMUM5MS4yODM4IDM1LjU2NzcgOTIuMzU1IDM0Ljg2NjcgOTMuNTM1NyAzNC4zODlDOTQuNzE2NSAzMy45MTEzIDk1Ljk4MzMgMzMuNjY2MyA5Ny4yNjI0IDMzLjY2ODNDOTguNTQxNSAzMy42NzAzIDk5LjgwNzUgMzMuOTE5MyAxMDAuOTg3IDM0LjQwMDdDMTAyLjE2NiAzNC44ODIyIDEwMy4yMzUgMzUuNTg2NSAxMDQuMTMxIDM2LjQ3MjdDMTA1LjAyNyAzNy4zNTg5IDEwNS43MzMgMzguNDA5MyAxMDYuMjA4IDM5LjU2MjlMMTA5LjkwNCA0OC4yMjI4WiIgZmlsbD0iIzAwQTE5QSIvPg0KPHBhdGggZD0iTTk2LjE5ODIgNDAuNjI2MkM5NS40NzkgNDAuOTE2NiA5NC44MjU4IDQxLjM0MTggOTQuMjc1OSA0MS44Nzc1QzkzLjcyNjEgNDIuNDEzMiA5My4yOTAzIDQzLjA0ODggOTIuOTkzNSA0My43NDgxQzkyLjY5NjcgNDQuNDQ3NCA5Mi41NDQ3IDQ1LjE5NjcgOTIuNTQ2MyA0NS45NTNDOTIuNTQ3OCA0Ni43MDk0IDkyLjcwMjggNDcuNDU4IDkzLjAwMjUgNDguMTU2Mkw5NS41MjIgNTQuMDM2MUwxMDYuNDcyIDQ5LjYwNjFMMTAzLjk1MiA0My43MjYyQzEwMy42NTMgNDMuMDI3OCAxMDMuMjE1IDQyLjM5MzUgMTAyLjY2NCA0MS44NTk1QzEwMi4xMTIgNDEuMzI1NiAxMDEuNDU4IDQwLjkwMjQgMTAwLjczOCA0MC42MTQyQzEwMC4wMTcgNDAuMzI2IDk5LjI0NTkgNDAuMTc4NCA5OC40NjcgNDAuMTc5OUM5Ny42ODgxIDQwLjE4MTQgOTYuOTE3MSA0MC4zMzE5IDk2LjE5ODIgNDAuNjIyOVY0MC42MjYyWk05OS4yNDYzIDQ3Ljc0OTVDOTguOTMzMSA0Ny44OCA5OC41ODcgNDcuOTE2OSA5OC4yNTIxIDQ3Ljg1NTdDOTcuOTE3MSA0Ny43OTQ0IDk3LjYwODYgNDcuNjM3NyA5Ny4zNjU3IDQ3LjQwNTVDOTcuMTIyOCA0Ny4xNzM0IDk2Ljk1NjYgNDYuODc2MiA5Ni44ODgzIDQ2LjU1MkM5Ni44MiA0Ni4yMjc3IDk2Ljg1MjYgNDUuODkxMSA5Ni45ODIgNDUuNTg0OUM5Ny4xMTE0IDQ1LjI3ODggOTcuMzMxOCA0NS4wMTY5IDk3LjYxNSA0NC44MzI4Qzk3Ljg5ODIgNDQuNjQ4NyA5OC4yMzE1IDQ0LjU1MDcgOTguNTcyMyA0NC41NTEyQzk4LjkxMzEgNDQuNTUxNyA5OS4yNDYxIDQ0LjY1MDcgOTkuNTI4NyA0NC44MzU2Qzk5LjgxMTQgNDUuMDIwNSAxMDAuMDMxIDQ1LjI4MyAxMDAuMTU5IDQ1LjU4OTVDMTAwLjI0NiA0NS43ODk1IDEwMC4yOSA0Ni4wMDQxIDEwMC4yOTEgNDYuMjIxQzEwMC4yOTIgNDYuNDM3OCAxMDAuMjQ5IDQ2LjY1MjcgMTAwLjE2NCA0Ni44NTMzQzEwMC4wNzkgNDcuMDUzOSA5OS45NTQ1IDQ3LjIzNjMgOTkuNzk3IDQ3LjM5MDFDOTkuNjM5NiA0Ny41NDM5IDk5LjQ1MjQgNDcuNjY2IDk5LjI0NjMgNDcuNzQ5NVoiIGZpbGw9IiMwMEExOUEiLz4NCjxwYXRoIGQ9Ik0xNTYuNDA5IDE4OS4zMDJDMTQ5LjY2NSAxOTEuNDQ1IDE0Mi42NDkgMTkyLjY3OSAxMzUuNTYgMTkyLjk2OEMxMjguMjIxIDE5My4yNzYgMTIwLjg3NCAxOTIuNjAzIDExMy43MjUgMTkwLjk2OEMxMDYuNTcyIDE4OS4zNzUgOTkuODQzNSAxODYuMzQyIDkzLjk3MzggMTgyLjA2NUM4Ny44NDggMTc3LjQ3NyA4Mi45MTc5IDE3MS41NTYgNzkuNTgxIDE2NC43NzlDNzUuNTY3MSAxNTYuMzE5IDczLjU2NTYgMTQ3LjA5MSA3My43MjUgMTM3Ljc3OUM3My40MzM0IDEyOS41NTIgNzQuODAxMiAxMjEuMzQ5IDc3Ljc1MTQgMTEzLjYzMkM4Mi44ODUyIDEwMC4yMiA5My4yMjI5IDg5LjI5MzkgMTA2LjU1MSA4My4xOTI2QzExMy4xNzQgODAuMDk5OSAxMjAuMjUyIDc4LjAyMyAxMjcuNTMxIDc3LjAzNkMxMzUuMDU2IDc2LjAxMDYgMTQyLjY5NSA3Ni4wNDg4IDE1MC4yMSA3Ny4xNDk0QzE1Ny45OTUgNzguMjc1MiAxNjUuNTg2IDgwLjQyNzMgMTcyLjc3MiA4My41NDZDMTcxLjQ2NSA4OC45MTkzIDE3MC4yMDcgOTQuMjg5MiAxNjguOTk2IDk5LjY1NThDMTY3Ljc4NiAxMDUuMDIyIDE2Ni42MDYgMTEwLjQ2NyAxNjUuNDU3IDExNS45ODlWMTE2LjIyNkwxNjAuMzM5IDExNi40NjJMMTQ1LjQ1OSAxMTYuNjk5QzE0NC4xNTkgMTE2LjY5OSAxNDMuNTA5IDExNS45MSAxNDMuNTA5IDExNC4zMzJWMTAxLjc4NkMxNDMuNTE1IDEwMS40NjggMTQzLjYwOCAxMDEuMTU3IDE0My43OCAxMDAuODg2QzE0My45NTEgMTAwLjYxNSAxNDQuMTk0IDEwMC4zOTQgMTQ0LjQ4NCAxMDAuMjQ2QzE0NS4xOTEgOTkuODU1NCAxNDUuOTkgOTkuNjUwMSAxNDYuODAzIDk5LjY1MDFDMTQ3LjYxNiA5OS42NTAxIDE0OC40MTUgOTkuODU1NCAxNDkuMTIyIDEwMC4yNDZDMTQ5LjQxMSAxMDAuMzk1IDE0OS42NTQgMTAwLjYxNiAxNDkuODI1IDEwMC44ODdDMTQ5Ljk5NiAxMDEuMTU4IDE1MC4wOSAxMDEuNDY4IDE1MC4wOTcgMTAxLjc4NlYxMTAuMzEySDE1OC4zOUwxNTMuOTg5IDg4Ljc1NTlDMTUxLjA0MyA4Ny42ODc5IDE0Ny45NzMgODYuOTcyNiAxNDQuODQ4IDg2LjYyNTlDMTQxIDg2LjE1MjMgMTM3LjEwNSA4Ni4xNTIzIDEzMy4yNTYgODYuNjI1OUMxMjkuMDQzIDg3LjE0NDEgMTI0LjkzMyA4OC4yNjc1IDEyMS4wNiA4OS45NTkzQzExNi44NyA5MS43NzkgMTEzLjEyNiA5NC40NDIyIDExMC4wNzYgOTcuNzcyNUMxMDYuNTMzIDEwMS43MzUgMTAzLjgwMyAxMDYuMzE4IDEwMi4wMyAxMTEuMjc2Qzk5Ljc0NzggMTE3LjgzIDk4LjY3MTggMTI0LjcyMyA5OC44NTE1IDEzMS42MzlDOTguNDE2MyAxMzkuNzE1IDk5Ljc0NzYgMTQ3Ljc4OSAxMDIuNzU4IDE1NS4zMjlDMTA1LjA4MiAxNjAuOTEgMTA4LjgwOSAxNjUuODM4IDExMy41OTggMTY5LjY2MkMxMTguMDA2IDE3My4wMzUgMTIzLjEyNSAxNzUuNDI1IDEyOC41OTEgMTc2LjY2MkMxMzQuMDMgMTc3LjkxMSAxMzkuNTkzIDE3OC41ODEgMTQ1LjE4MSAxNzguNjYyQzE1MC4zNTcgMTc4Ljc2IDE1NS41MzMgMTc4LjQ4MyAxNjAuNjY1IDE3Ny44MzJDMTY1LjQ3MSAxNzcuMjAzIDE2OS40MTQgMTc2LjY0NyAxNzIuNDk0IDE3Ni4xNjVMMTczLjIzMiAxODEuMzc1QzE2OC4wNjggMTg0LjgyNiAxNjIuMzk2IDE4Ny40OTggMTU2LjQwOSAxODkuMzAyWiIgZmlsbD0iIzAwQTE5QSIvPg0KPHBhdGggZD0iTTcyLjA4NzggMzAxLjc5N0M2OC4yODggMjg3LjU0NyA1OS44NzEzIDI3Ny42MzEgNTAuMTE5MyAyNzcuNjMxQzM2LjgwNzggMjc3LjYzMSAyNS45OTUxIDI5Ni4wOCAyNS45OTUxIDMxOC44MTRDMjUuOTg0OCAzNDEuNTQgMzYuNzk3NSAzNTkuOTk3IDUwLjEwOSAzNTkuOTk3QzYwLjg1NjQgMzU5Ljk5NyA2OS45NzM0IDM0Ny45NzcgNzMuMDg2NyAzMzEuMzlINjAuNzI5NEM1OC42NDU4IDM0MS4xNDcgNTQuMzM0NSAzNDcuODYgNDkuMzU3MyAzNDcuODZDNDIuMzU0OCAzNDcuODYgMzYuNjU2NyAzMzQuNTU3IDM2LjY1NjcgMzE4LjE2N0MzNi42NTY3IDMwMS43ODQgNDIuMzUxNCAyODguNDgxIDQ5LjM1NzMgMjg4LjQ4MUM1My43ODE5IDI4OC40ODEgNTcuNjc3OCAyOTMuNzc0IDU5Ljk1MzYgMzAxLjgxNEw3Mi4wODc4IDMwMS43OTdaIiBmaWxsPSIjQTUxMTVCIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTk1LjI1NzcgMzM1LjMzN0g3My4wODY3QzczLjA4NjcgMzQ4LjQzNyA4Mi45MDM5IDM1OS4wNzcgOTQuOTkzNCAzNTkuMDc3QzEwNy4wODMgMzU5LjA3NyAxMTYuOSAzNDguNDM3IDExNi45IDMzNS4zMzdIMTA0LjJWMzM4LjA0N0g4NS43ODM4VjMzNS4zOEw5NS4yNTc3IDMzNS4zMzdaTTczLjA4NjcgMjg2LjAxNEg4NS43ODcyVjMzNS4zNDdINzMuMDg2N1YyODYuMDE0Wk0xMDQuMiAyOTAuNDU0SDExNi45VjMzNS4zMzdIMTA0LjJWMjkwLjQ1NFpNMTA0LjIgMzM4LjA1QzEwNC4yODcgMzQwLjUxIDEwMy4zNjcgMzQyLjkwMyAxMDEuNjQgMzQ0LjcwNkM5OS45MTQyIDM0Ni41MDggOTcuNTIyOSAzNDcuNTczIDk0Ljk5IDM0Ny42NjdDOTIuNDU3NCAzNDcuNTcxIDkwLjA2NjkgMzQ2LjUwNSA4OC4zNDE2IDM0NC43MDNDODYuNjE2MiAzNDIuOSA4NS42OTY2IDM0MC41MDcgODUuNzgzOCAzMzguMDQ3SDEwNC4yVjMzOC4wNVoiIGZpbGw9IiNBNTExNUIiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIyLjk5MyAzNTcuNTMzSDEzMy4xNUMxMzUuMjkyIDM1Mi45NSAxMzQuMzE0IDM0MS45MjMgMTM4LjIzIDM0Mi43MzdIMTQ4LjM5MUMxNTMuMTIxIDM0Mi42ODMgMTUxLjU0OSAzNDguNzcgMTUzLjQ3MSAzNjBIMTYzLjYyOEMxNjkuNzYyIDM0MS4xNjMgMTU2LjY0MyAyOTQuMTg3IDE0My4zMTEgMjkzLjQxN0MxMzUuMDY2IDI5NC41NTQgMTE3LjI2NCAzMzcuODU3IDEyMi45OTMgMzU3LjUzM1pNMTQzLjMxMSAzMTMuMTQ0QzE0MC43MDUgMzE0Ljg5NCAxMzkuMTE2IDMxOS45MjcgMTM4LjIzIDMyNy45NEMxMzguODc5IDMyOC42MTggMTM5LjY2NSAzMjkuMTU5IDE0MC41MzkgMzI5LjUyOUMxNDEuNDEzIDMyOS44OTggMTQyLjM1NiAzMzAuMDg5IDE0My4zMDkgMzMwLjA4OUMxNDQuMjYyIDMzMC4wODkgMTQ1LjIwNSAzMjkuODk4IDE0Ni4wNzkgMzI5LjUyOUMxNDYuOTUzIDMyOS4xNTkgMTQ3LjczOCAzMjguNjE4IDE0OC4zODcgMzI3Ljk0QzE0Ny44MTEgMzIwLjI4NCAxNDYuMTcgMzE1LjQgMTQzLjMxMSAzMTMuMTQ0WiIgZmlsbD0iI0E1MTE1QiIvPg0KPHBhdGggZD0iTTE3Ni4wNzUgMjgxLjA4NEgxMjguMDczVjI5MC40NTFIMTc2LjA3NVYzNTguMjczSDE4NS43MlYyOTAuNDUxSDIwOS4zMzZWMjgxLjA4NEgxNzYuMDc1WiIgZmlsbD0iI0E1MTE1QiIvPg0KPHBhdGggZD0iTTIxNC40MTYgMzQ4LjlWMjgxLjA4NEgyMjQuMDY1VjM0OC45SDI0NC44OTFWMzU4LjI3SDIxNC40MTZWMzQ4LjlaIiBmaWxsPSIjQTUxMTVCIi8+DQo8L3N2Zz4NCg==");
// EXTERNAL MODULE: ./context/AuthContext.tsx + 1 modules
var AuthContext = __webpack_require__("6Kf1");

// EXTERNAL MODULE: ./context/OrderContext.tsx
var OrderContext = __webpack_require__("bCPq");

// EXTERNAL MODULE: ./lib/apollo-client.ts
var apollo_client = __webpack_require__("+GZE");

// EXTERNAL MODULE: ./actions/fetch-departments.ts
var fetch_departments = __webpack_require__("pvWX");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/LocalMall"
var LocalMall_ = __webpack_require__("qaih");
var LocalMall_default = /*#__PURE__*/__webpack_require__.n(LocalMall_);

// EXTERNAL MODULE: external "@material-ui/icons/AccountCircle"
var AccountCircle_ = __webpack_require__("DME6");
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);

// CONCATENATED MODULE: ./components/navbars/DrawerDeptops.js





function DrawerDeptops({
  open,
  setOpen,
  departments
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Drawer"], {
      open: open,
      onClose: () => {
        setOpen(false);
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["List"], {
        children: departments ? departments.map(d => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Link"], {
            href: `/store/products?department=${d.slug}`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItem"], {
              button: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
                variant: "h6",
                children: d.name
              })
            })
          }), d.categories.map(c => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Link"], {
              href: `/store/products?department=${d.slug}&category=${c.slug}`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItem"], {
                button: true,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
                  style: {
                    paddingLeft: "20px"
                  },
                  variant: "subtitle1",
                  children: c.name
                })
              })
            }), c.subcategories.map(sc => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Link"], {
              href: `/store/products?department=${d.slug}&category=${c.slug}&subcategory=${sc.slug}`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItem"], {
                button: true,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
                  style: {
                    paddingLeft: "40px"
                  },
                  variant: "subtitle2",
                  children: sc.name
                })
              })
            }, sc.slug))]
          }, c.slug)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Divider"], {})]
        }, d.slug)) : null
      })
    })
  });
}

/* harmony default export */ var navbars_DrawerDeptops = (DrawerDeptops);
// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowDown"
var KeyboardArrowDown_ = __webpack_require__("8k/1");
var KeyboardArrowDown_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowDown_);

// CONCATENATED MODULE: ./components/navbars/Omnibar.tsx














Omnibar.defaultProps = {
  menuEntries: []
};
const useStyles = Object(core_["makeStyles"])({
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  imgContainer: {
    height: "3rem",
    width: "3rem"
  },
  img: {
    height: "100%",
    width: "100%"
  }
});
function Omnibar() {
  const classes = useStyles();
  const {
    user
  } = Object(external_react_["useContext"])(AuthContext["b" /* default */]);
  const {
    order
  } = Object(external_react_["useContext"])(OrderContext["b" /* default */]);
  const {
    0: menuEntries,
    1: setMenuEntries
  } = Object(external_react_["useState"])();
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const colorIconUser = user ? "primary" : "default";

  async function getDeptos() {
    const apolloClient = Object(apollo_client["a" /* initializeApolloClient */])();
    const mEntries = await Object(fetch_departments["a" /* getDepartments */])(apolloClient);
    setMenuEntries(mEntries);
  }

  Object(external_react_["useEffect"])(() => {
    getDeptos();
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["AppBar"], {
    position: "static",
    style: {
      background: "white",
      padding: "10px 20px"
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Grid"], {
      container: true,
      spacing: 1,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
        item: true,
        xs: 2,
        className: classes.grid,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "/",
          className: classes.imgContainer,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            className: classes.img,
            src: logo,
            alt: "Logo"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Grid"], {
        item: true,
        xs: 8,
        className: classes.grid,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Button"], {
          fullWidth: true,
          onClick: () => {
            setOpen(true);
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
            variant: "h6",
            color: "primary",
            children: "DEPARTAMENTOS"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(KeyboardArrowDown_default.a, {
            fontSize: "large",
            color: "primary"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navbars_DrawerDeptops, {
          open: open,
          setOpen: setOpen,
          departments: menuEntries
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
        item: true,
        xs: 1,
        className: classes.grid,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(IconButton_default.a, {
          href: user ? '/order' : '/auth',
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Badge"], {
            badgeContent: order.length,
            color: "primary",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LocalMall_default.a, {})
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
        item: true,
        xs: 1,
        className: classes.grid,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(IconButton_default.a, {
          color: colorIconUser,
          href: user ? '/user/orders' : '/auth',
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AccountCircle_default.a, {})
        })
      })]
    })
  });
}
;
// CONCATENATED MODULE: ./components/Header.tsx







function Header() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_js_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Cuatl"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: "Encuentra los mejores productos artesanales de M\xE9xico"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Omnibar, {})]
  });
}

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// CONCATENATED MODULE: ./components/Footer.tsx


function Footer() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f2f2f2",
      padding: "5px 0px",
      position: "fixed",
      bottom: 0,
      width: "100%"
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
      variant: "overline",
      children: "Cuatl | La mejor moda artesanal de M\xE9xico | 2021"
    })
  });
}
;
// CONCATENATED MODULE: ./pages/Layout.tsx








function Layout({
  children
}) {
  const {
    login,
    useSession
  } = Object(external_react_["useContext"])(AuthContext["b" /* default */]);
  useSession();
  Object(external_react_["useEffect"])(() => {
    const loginUser = async () => {
      //: login user if the session token is in the route query
      if (location.search) await login(location.search);
    };

    loginUser();
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container_default.a, {
      style: {
        marginBottom: "60px",
        marginTop: "20px"
      },
      children: children
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
  });
}

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

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
const API_DOMAIN = "http://165.227.199.69:1337";
const PAGE_LIMIT = 12;
console.log("API");
console.log(API_DOMAIN);
const AUTH_FACEBOOK_CALLBACK = `${API_DOMAIN}/auth/facebook/callback`;
const AUTH_FACEBOOK_URL = `${API_DOMAIN}/connect/facebook`;
const AUTH_GOOGLE_CALLBACK = `${API_DOMAIN}/auth/google/callback`;
const AUTH_GOOGLE_URL = `${API_DOMAIN}/connect/google`;
const STRIPE_PUBLISHED_KEY = "pk_test_51Hw15gJ4rvPOyPXnQ6Rjf7X4RxmsSBqvTVy3h3Bfwdo2WddlWAgC64bzfHeQbn4V5jJpPrJ7eHeWrGQMWOlRzW8700mrQLCJpL";


/***/ }),

/***/ "bCPq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderProvider; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


//: use this context whenever you want to access the OrderProvider
const OrderContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
/* harmony default export */ __webpack_exports__["b"] = (OrderContext);
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

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(OrderContext.Provider, {
    value: {
      order,
      addProductToBag,
      removeProduct,
      setOrder
    },
    children: children
  });
}

;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: ./node_modules/tailwindcss/tailwind.css
var tailwind = __webpack_require__("uXJ4");

// EXTERNAL MODULE: ./context/AuthContext.tsx + 1 modules
var AuthContext = __webpack_require__("6Kf1");

// EXTERNAL MODULE: ./context/OrderContext.tsx
var OrderContext = __webpack_require__("bCPq");

// EXTERNAL MODULE: ./lib/apollo-client.ts
var apollo_client = __webpack_require__("+GZE");

// EXTERNAL MODULE: ./pages/Layout.tsx + 5 modules
var Layout = __webpack_require__("Ti6D");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./utils/themeConfig.js

const theme = Object(styles_["createMuiTheme"])({
  palette: {
    primary: {
      main: 'rgb(163,25,91)'
    },
    secondary: {
      main: 'rgb(4,162,156)'
    }
  }
});
/* harmony default export */ var themeConfig = (theme);
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__("oF3+");

// CONCATENATED MODULE: ./pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function App({
  Component,
  pageProps
}) {
  const apolloClient = Object(apollo_client["b" /* useApolloClient */])(pageProps.initialApolloState);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(client_["ApolloProvider"], {
    client: apolloClient,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AuthContext["a" /* AuthProvider */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(OrderContext["a" /* OrderProvider */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["ThemeProvider"], {
          theme: themeConfig,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["CssBaseline"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_notistack_["SnackbarProvider"], {
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right'
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout["default"], {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
            })
          })]
        })
      })
    })
  });
}

;
/* harmony default export */ var _app = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "oF3+":
/***/ (function(module, exports) {

module.exports = require("notistack");

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

/***/ "qaih":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalMall");

/***/ }),

/***/ "uXJ4":
/***/ (function(module, exports) {



/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });