webpackHotUpdate_N_E("pages/index",{

/***/ "./context/OrderContext.tsx":
/*!**********************************!*\
  !*** ./context/OrderContext.tsx ***!
  \**********************************/
/*! exports provided: default, OrderProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderProvider", function() { return OrderProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\context\\OrderContext.tsx",
    _s = $RefreshSig$();


//: use this context whenever you want to access the OrderProvider
var OrderContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])(null);
/* harmony default export */ __webpack_exports__["default"] = (OrderContext);
 //: use this component in all the other components where you want to access
//: the global state of a user order

function OrderProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      order = _useState[0],
      setOrder = _useState[1];

  var getOrder = function getOrder() {
    try {
      return JSON.parse(localStorage.getItem('order')) || [];
    } catch (error) {}

    return [];
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var o = getOrder();
    setOrder(o);
  }, []);

  var countProducts = function countProducts() {
    //return order ? order.variants.length : 0;
    return 0;
  };

  var saveOrder = function saveOrder(order) {
    localStorage.setItem('order', JSON.stringify(order));
  };

  var addProductToBag = function addProductToBag(variantQuantity, product) {
    console.log(order);

    var activeOrder = Object(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(order); //: if the product and variant is already there


    var indexOfOrderItem = activeOrder.findIndex(function (orderItem) {
      return orderItem.variant.id === product.variant.id;
    });

    if (indexOfOrderItem !== -1) {
      //: update quantity
      var currentQuantity = activeOrder[indexOfOrderItem].quantity;

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

  var removeProduct = function removeProduct(itemNumber) {
    alert("BORRAR");
    order.splice(itemNumber, 1);
    setOrder(order);
    saveOrder(order);
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
      order: order,
      countProducts: countProducts,
      addProductToBag: addProductToBag,
      removeProduct: removeProduct
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, this);
}

_s(OrderProvider, "do+Fm2MjiudTzR9o35RBkv5hglY=");

_c = OrderProvider;
;

var _c;

$RefreshReg$(_c, "OrderProvider");

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9PcmRlckNvbnRleHQudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIl0sIm5hbWVzIjpbIk9yZGVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJPcmRlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsIm9yZGVyIiwic2V0T3JkZXIiLCJnZXRPcmRlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsInVzZUVmZmVjdCIsIm8iLCJjb3VudFByb2R1Y3RzIiwic2F2ZU9yZGVyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFkZFByb2R1Y3RUb0JhZyIsInZhcmlhbnRRdWFudGl0eSIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlT3JkZXIiLCJpbmRleE9mT3JkZXJJdGVtIiwiZmluZEluZGV4Iiwib3JkZXJJdGVtIiwidmFyaWFudCIsImlkIiwiY3VycmVudFF1YW50aXR5IiwicXVhbnRpdHkiLCJzdG9jayIsInB1c2giLCJvZmZlcnMiLCJyZW1vdmVQcm9kdWN0IiwiaXRlbU51bWJlciIsImFsZXJ0Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQSxJQUFNQSxZ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QUssRUFBTEEsS0FBRjtBQUFTVSxtQkFBYSxFQUFiQSxhQUFUO0FBQXdCSSxxQkFBZSxFQUFmQSxlQUF4QjtBQUF5Q2dCLG1CQUFhLEVBQWJBO0FBQXpDLEtBQTlCO0FBQUEsY0FDR2hDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBcEZRRCxhOztLQUFBQSxhO0FBb0ZSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdEO0FBQUE7QUFBQTtBQUEyRTtBQUM1RDtBQUNmLGlDQUFpQywyRkFBZ0I7QUFDakQsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RTtBQUNKO0FBQ3NCO0FBQ2xCO0FBQzlEO0FBQ2YsU0FBUyw0RkFBaUIsU0FBUywwRkFBZSxTQUFTLHFHQUEwQixTQUFTLDRGQUFpQjtBQUMvRyxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVkZTFjMmE2NTc1Y2UyODZjYjAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJUGF5bWVudE9yZGVyIGZyb20gXCJAL21vZGVscy9JUGF5bWVudE9yZGVyXCI7XHJcblxyXG4vLzogdXNlIHRoaXMgY29udGV4dCB3aGVuZXZlciB5b3Ugd2FudCB0byBhY2Nlc3MgdGhlIE9yZGVyUHJvdmlkZXJcclxuY29uc3QgT3JkZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyQ29udGV4dDtcclxuXHJcbmV4cG9ydCB7IE9yZGVyUHJvdmlkZXIgfTtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb21wb25lbnQgaW4gYWxsIHRoZSBvdGhlciBjb21wb25lbnRzIHdoZXJlIHlvdSB3YW50IHRvIGFjY2Vzc1xyXG4vLzogdGhlIGdsb2JhbCBzdGF0ZSBvZiBhIHVzZXIgb3JkZXJcclxuZnVuY3Rpb24gT3JkZXJQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuXHJcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZTxBcnJheTxJUGF5bWVudE9yZGVyPj4oKTtcclxuXHJcbiAgY29uc3QgZ2V0T3JkZXIgPSAoKTogQXJyYXk8SVBheW1lbnRPcmRlcj4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyJykpIHx8IFtdO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH07XHJcblxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgbyA9IGdldE9yZGVyKClcclxuICAgIHNldE9yZGVyKG8pXHJcbiAgfSxbXSlcclxuXHJcbiAgY29uc3QgY291bnRQcm9kdWN0cyA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgLy9yZXR1cm4gb3JkZXIgPyBvcmRlci52YXJpYW50cy5sZW5ndGggOiAwO1xyXG4gICAgcmV0dXJuIDBcclxuICB9O1xyXG5cclxuICBjb25zdCBzYXZlT3JkZXIgPSAob3JkZXI6IEFycmF5PElQYXltZW50T3JkZXI+KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXInLCBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFByb2R1Y3RUb0JhZyA9ICh2YXJpYW50UXVhbnRpdHk6bnVtYmVyLCBwcm9kdWN0OklQYXltZW50T3JkZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG9yZGVyKVxyXG4gICAgY29uc3QgYWN0aXZlT3JkZXIgPSBbLi4ub3JkZXJdXHJcbiAgIC8vOiBpZiB0aGUgcHJvZHVjdCBhbmQgdmFyaWFudCBpcyBhbHJlYWR5IHRoZXJlXHJcbiAgIGNvbnN0IGluZGV4T2ZPcmRlckl0ZW0gPSBhY3RpdmVPcmRlci5maW5kSW5kZXgoKG9yZGVySXRlbTogSVBheW1lbnRPcmRlcikgPT4gb3JkZXJJdGVtLnZhcmlhbnQuaWQgPT09IHByb2R1Y3QudmFyaWFudC5pZCk7XHJcbiAgIGlmIChpbmRleE9mT3JkZXJJdGVtICE9PSAtMSkge1xyXG4gICAgIC8vOiB1cGRhdGUgcXVhbnRpdHlcclxuICAgICBjb25zdCBjdXJyZW50UXVhbnRpdHkgPSBhY3RpdmVPcmRlcltpbmRleE9mT3JkZXJJdGVtXS5xdWFudGl0eTtcclxuICAgICBpZiAoY3VycmVudFF1YW50aXR5ICsgdmFyaWFudFF1YW50aXR5IDw9IHByb2R1Y3QudmFyaWFudC5zdG9jaykge1xyXG4gICAgICAgYWN0aXZlT3JkZXJbaW5kZXhPZk9yZGVySXRlbV0ucXVhbnRpdHkgPSBjdXJyZW50UXVhbnRpdHkgKyB2YXJpYW50UXVhbnRpdHk7XHJcbiAgICAgfVxyXG4gICB9IGVsc2Uge1xyXG4gICAgIGFjdGl2ZU9yZGVyLnB1c2goe1xyXG4gICAgICAgcHJvZHVjdDogcHJvZHVjdC5wcm9kdWN0LFxyXG4gICAgICAgdmFyaWFudDogcHJvZHVjdC52YXJpYW50LFxyXG4gICAgICAgcXVhbnRpdHk6IHZhcmlhbnRRdWFudGl0eSxcclxuICAgICAgIG9mZmVyczogcHJvZHVjdC5vZmZlcnNcclxuICAgICB9KTtcclxuICAgfVxyXG4gICAgc2V0T3JkZXIoYWN0aXZlT3JkZXIpO1xyXG4gICAgLy9zYXZlT3JkZXIoYWN0aXZlT3JkZXIpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlUHJvZHVjdCA9IChpdGVtTnVtYmVyKSA9PiB7XHJcbiAgICAgIGFsZXJ0KFwiQk9SUkFSXCIpXHJcbiAgICAgIG9yZGVyLnNwbGljZShpdGVtTnVtYmVyLCAxKVxyXG4gICAgICBzZXRPcmRlcihvcmRlcilcclxuICAgICAgc2F2ZU9yZGVyKG9yZGVyKVxyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG5cclxuICBcclxuXHJcbiAgY29uc3QgYWRkT3JkZXJJdGVtID0gKGl0ZW06IElQYXltZW50T3JkZXIpID0+IHtcclxuICB9O1xyXG5cclxuICAvLzogdXNlIHRoaXMgZnVuY3Rpb24gdG8gYWRkIGEgbmV3IGl0ZW0gdG8gdGhlIG9yZGVyIGluIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBzZXRPcmRlckl0ZW1JbkxTID0gKGFjdGl2ZU9yZGVyOiBBcnJheTxJUGF5bWVudE9yZGVyPikgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29yZGVySXRlbXMnLCBKU09OLnN0cmluZ2lmeShhY3RpdmVPcmRlcikpO1xyXG4gIH07XHJcblxyXG4gIC8vOiB1c2UgdGhpcyBmdW5jdGlvbiB0byBnZXQgdGhlIGN1cnJlbnQgb3JkZXIgb2JqZWN0IGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gIGNvbnN0IGdldE9yZGVySXRlbUZyb21MUyA9ICgpOiBBcnJheTxJUGF5bWVudE9yZGVyPiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXJJdGVtcycpKSB8fCBbXTtcclxuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKChfZXJyb3IgYXMgU3ludGF4RXJyb3IpLm1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9OyovXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8T3JkZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG9yZGVyLCBjb3VudFByb2R1Y3RzLCBhZGRQcm9kdWN0VG9CYWcsIHJlbW92ZVByb2R1Y3QgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvT3JkZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9