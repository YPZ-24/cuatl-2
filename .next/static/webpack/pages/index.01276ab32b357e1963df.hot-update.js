webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/apollo-client.ts":
/*!******************************!*\
  !*** ./lib/apollo-client.ts ***!
  \******************************/
/*! exports provided: initializeApolloClient, useApolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApolloClient", function() { return initializeApolloClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return useApolloClient; });
/* harmony import */ var C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Configuration of the Apollo Client to enable the use of GraphQL.
 */



var apolloClient;

var createApolloClient = function createApolloClient() {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]({
      uri: "".concat(_config_globals__WEBPACK_IMPORTED_MODULE_3__["API_DOMAIN"], "/graphql")
    }),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]()
  });
};

var initializeApolloClient = function initializeApolloClient() {
  var _apolloClient2;

  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); //: initial state of Next.js data fetching methods is hydrated here


  if (initialState) {
    //: get existing cache, loaded during client side data fetching
    var existingCache = _apolloClient.extract(); //: restore the cache using the data passed from "getStaticProps" or
    //: "getServerSideProps" combined with the existing cache data


    _apolloClient.cache.restore(_objectSpread(_objectSpread({}, existingCache), initialState));
  } //: for SSG and SSR always create a new Apollo Client


  if (false) {} //: create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}; //: use this custom hook in your components to hydrate the state of the Apollo
//: Client


var useApolloClient = function useApolloClient(initialState) {
  _s();

  var store = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return initializeApolloClient(initialState);
  }, [initialState]);
  return store;
};

_s(useApolloClient, "K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=");



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2Fwb2xsby1jbGllbnQudHMiXSwibmFtZXMiOlsiYXBvbGxvQ2xpZW50IiwiY3JlYXRlQXBvbGxvQ2xpZW50IiwiQXBvbGxvQ2xpZW50IiwibGluayIsIkh0dHBMaW5rIiwidXJpIiwiQVBJX0RPTUFJTiIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImluaXRpYWxpemVBcG9sbG9DbGllbnQiLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJyZXN0b3JlIiwidXNlQXBvbGxvQ2xpZW50Iiwic3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVBLElBQUlBLFlBQUo7O0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUEyQztBQUNwRSxTQUFPLElBQUlDLDJEQUFKLENBQWlCO0FBQ3RCQyxRQUFJLEVBQUUsSUFBSUMsdURBQUosQ0FBYTtBQUFFQyxTQUFHLFlBQUtDLDBEQUFMO0FBQUwsS0FBYixDQURnQjtBQUV0QkMsU0FBSyxFQUFFLElBQUlDLDREQUFKO0FBRmUsR0FBakIsQ0FBUDtBQUlELENBTEQ7O0FBZUEsSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFtRTtBQUFBOztBQUFBLE1BQWxFQyxZQUFrRSx1RUFBOUMsSUFBOEM7O0FBQ2hHLE1BQU1DLGFBQWEscUJBQUdYLFlBQUgsMkRBQW1CQyxrQkFBa0IsRUFBeEQsQ0FEZ0csQ0FHaEc7OztBQUNBLE1BQUlTLFlBQUosRUFBa0I7QUFDaEI7QUFDQSxRQUFNRSxhQUFhLEdBQUdELGFBQWEsQ0FBQ0UsT0FBZCxFQUF0QixDQUZnQixDQUloQjtBQUNBOzs7QUFDQUYsaUJBQWEsQ0FBQ0osS0FBZCxDQUFvQk8sT0FBcEIsaUNBQWlDRixhQUFqQyxHQUFtREYsWUFBbkQ7QUFDRCxHQVgrRixDQWFoRzs7O0FBQ0EsYUFBbUMsRUFkNkQsQ0FnQmhHOztBQUNBLE1BQUksQ0FBQ1YsWUFBTCxFQUFtQkEsWUFBWSxHQUFHVyxhQUFmO0FBRW5CLFNBQU9BLGFBQVA7QUFDRCxDQXBCRCxDLENBNkJBO0FBQ0E7OztBQUNBLElBQU1JLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0wsWUFBRCxFQUE0RDtBQUFBOztBQUNsRixNQUFNTSxLQUFLLEdBQUdDLHFEQUFPLENBQ25CO0FBQUEsV0FBTVIsc0JBQXNCLENBQUNDLFlBQUQsQ0FBNUI7QUFBQSxHQURtQixFQUVuQixDQUFDQSxZQUFELENBRm1CLENBQXJCO0FBS0EsU0FBT00sS0FBUDtBQUNELENBUEQ7O0dBQU1ELGU7O0FBU04iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDEyNzZhYjMyYjM1N2UxOTYzZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIG9mIHRoZSBBcG9sbG8gQ2xpZW50IHRvIGVuYWJsZSB0aGUgdXNlIG9mIEdyYXBoUUwuXHJcbiAqL1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEFwb2xsb0NsaWVudCxcclxuICBIdHRwTGluayxcclxuICBJbk1lbW9yeUNhY2hlLFxyXG4gIE5vcm1hbGl6ZWRDYWNoZU9iamVjdFxyXG59IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmltcG9ydCB7IEFQSV9ET01BSU4gfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuXHJcbmxldCBhcG9sbG9DbGllbnQ6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+O1xyXG5cclxuY29uc3QgY3JlYXRlQXBvbGxvQ2xpZW50ID0gKCk6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+ID0+IHtcclxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoeyB1cmk6IGAke0FQSV9ET01BSU59L2dyYXBocWxgIH0pLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcclxuICB9KTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCA9IChpbml0aWFsU3RhdGU6IGFueSA9IG51bGwpOiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PiA9PiB7XHJcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKTtcclxuXHJcbiAgLy86IGluaXRpYWwgc3RhdGUgb2YgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgaXMgaHlkcmF0ZWQgaGVyZVxyXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcclxuICAgIC8vOiBnZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xyXG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpO1xyXG5cclxuICAgIC8vOiByZXN0b3JlIHRoZSBjYWNoZSB1c2luZyB0aGUgZGF0YSBwYXNzZWQgZnJvbSBcImdldFN0YXRpY1Byb3BzXCIgb3JcclxuICAgIC8vOiBcImdldFNlcnZlclNpZGVQcm9wc1wiIGNvbWJpbmVkIHdpdGggdGhlIGV4aXN0aW5nIGNhY2hlIGRhdGFcclxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZSh7IC4uLmV4aXN0aW5nQ2FjaGUsIC4uLmluaXRpYWxTdGF0ZSB9KTtcclxuICB9XHJcblxyXG4gIC8vOiBmb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcclxuXHJcbiAgLy86IGNyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcclxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudDtcclxuXHJcbiAgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IHVzZSB0aGlzIGN1c3RvbSBob29rIGluIHlvdXIgY29tcG9uZW50cyB0byBoeWRyYXRlIHRoZSBzdGF0ZSBvZiB0aGUgQXBvbGxvXHJcbi8vOiBDbGllbnRcclxuY29uc3QgdXNlQXBvbGxvQ2xpZW50ID0gKGluaXRpYWxTdGF0ZTogYW55KTogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD4gPT4ge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbyhcclxuICAgICgpID0+IGluaXRpYWxpemVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlKSxcclxuICAgIFtpbml0aWFsU3RhdGVdXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCwgdXNlQXBvbGxvQ2xpZW50IH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=