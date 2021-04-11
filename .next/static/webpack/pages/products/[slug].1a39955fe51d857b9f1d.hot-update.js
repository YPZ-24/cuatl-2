webpackHotUpdate_N_E("pages/products/[slug]",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\context\\OrderContext.tsx",
    _s = $RefreshSig$();


//: use this context whenever you want to access the OrderProvider
var OrderContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
/* harmony default export */ __webpack_exports__["default"] = (OrderContext);
 //: use this component in all the other components where you want to access
//: the global state of a user order

function OrderProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      order = _useState[0],
      setOrder = _useState[1];

  var getOrder = function getOrder() {
    try {
      return JSON.parse(localStorage.getItem('order')) || [];
    } catch (error) {}

    return [];
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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
    debugger;
    var activeOrder = order;
    debugger; //: if the product and variant is already there

    var indexOfOrderItem = activeOrder.findIndex(function (orderItem) {
      return orderItem.variant.id === product.variant.id;
    });
    debugger;

    if (indexOfOrderItem !== -1) {
      //: update quantity
      var currentQuantity = activeOrder[indexOfOrderItem].quantity;

      if (currentQuantity + variantQuantity <= product.variant.stock) {
        activeOrder[indexOfOrderItem].quantity = currentQuantity + variantQuantity;
      }

      debugger;
    } else {
      activeOrder.push({
        product: product.product,
        variant: product.variant,
        quantity: variantQuantity,
        offers: product.offers
      });
      debugger;
    }

    console.log("order");
    console.log(order);
    console.log("activeOrder");
    console.log(activeOrder); //setOrder(activeOrder);
    //saveOrder(activeOrder)
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
    lineNumber: 103,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9PcmRlckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIk9yZGVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJPcmRlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsIm9yZGVyIiwic2V0T3JkZXIiLCJnZXRPcmRlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsInVzZUVmZmVjdCIsIm8iLCJjb3VudFByb2R1Y3RzIiwic2F2ZU9yZGVyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFkZFByb2R1Y3RUb0JhZyIsInZhcmlhbnRRdWFudGl0eSIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlT3JkZXIiLCJpbmRleE9mT3JkZXJJdGVtIiwiZmluZEluZGV4Iiwib3JkZXJJdGVtIiwidmFyaWFudCIsImlkIiwiY3VycmVudFF1YW50aXR5IiwicXVhbnRpdHkiLCJzdG9jayIsInB1c2giLCJvZmZlcnMiLCJyZW1vdmVQcm9kdWN0IiwiaXRlbU51bWJlciIsImFsZXJ0Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0EsSUFBTUEsWUFBWSxnQkFBR0MsMkRBQWEsQ0FBQyxJQUFELENBQWxDO0FBRWVELDJFQUFmO0NBSUE7QUFDQTs7QUFDQSxTQUFTRSxhQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUVUQyxzREFBUSxFQUZDO0FBQUEsTUFFNUJDLEtBRjRCO0FBQUEsTUFFckJDLFFBRnFCOztBQUluQyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUE0QjtBQUMzQyxRQUFJO0FBQ0YsYUFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFYLEtBQTZDLEVBQXBEO0FBQ0QsS0FGRCxDQUVFLE9BQU9D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ZHVjdHMvW3NsdWddLjFhMzk5NTVmZTUxZDg1N2I5ZjFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJUGF5bWVudE9yZGVyIGZyb20gXCJAL21vZGVscy9JUGF5bWVudE9yZGVyXCI7XHJcblxyXG4vLzogdXNlIHRoaXMgY29udGV4dCB3aGVuZXZlciB5b3Ugd2FudCB0byBhY2Nlc3MgdGhlIE9yZGVyUHJvdmlkZXJcclxuY29uc3QgT3JkZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyQ29udGV4dDtcclxuXHJcbmV4cG9ydCB7IE9yZGVyUHJvdmlkZXIgfTtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb21wb25lbnQgaW4gYWxsIHRoZSBvdGhlciBjb21wb25lbnRzIHdoZXJlIHlvdSB3YW50IHRvIGFjY2Vzc1xyXG4vLzogdGhlIGdsb2JhbCBzdGF0ZSBvZiBhIHVzZXIgb3JkZXJcclxuZnVuY3Rpb24gT3JkZXJQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuXHJcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZTxBcnJheTxJUGF5bWVudE9yZGVyPj4oKTtcclxuXHJcbiAgY29uc3QgZ2V0T3JkZXIgPSAoKTogQXJyYXk8SVBheW1lbnRPcmRlcj4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyJykpIHx8IFtdO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH07XHJcblxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgbyA9IGdldE9yZGVyKClcclxuICAgIHNldE9yZGVyKG8pXHJcbiAgfSxbXSlcclxuXHJcbiAgY29uc3QgY291bnRQcm9kdWN0cyA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgLy9yZXR1cm4gb3JkZXIgPyBvcmRlci52YXJpYW50cy5sZW5ndGggOiAwO1xyXG4gICAgcmV0dXJuIDBcclxuICB9O1xyXG5cclxuICBjb25zdCBzYXZlT3JkZXIgPSAob3JkZXI6IEFycmF5PElQYXltZW50T3JkZXI+KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXInLCBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFByb2R1Y3RUb0JhZyA9ICh2YXJpYW50UXVhbnRpdHk6bnVtYmVyLCBwcm9kdWN0OklQYXltZW50T3JkZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG9yZGVyKVxyXG4gICAgZGVidWdnZXJcclxuICAgIGNvbnN0IGFjdGl2ZU9yZGVyID0gb3JkZXJcclxuICAgIGRlYnVnZ2VyXHJcbiAgIC8vOiBpZiB0aGUgcHJvZHVjdCBhbmQgdmFyaWFudCBpcyBhbHJlYWR5IHRoZXJlXHJcbiAgIGNvbnN0IGluZGV4T2ZPcmRlckl0ZW0gPSBhY3RpdmVPcmRlci5maW5kSW5kZXgoKG9yZGVySXRlbTogSVBheW1lbnRPcmRlcikgPT4gb3JkZXJJdGVtLnZhcmlhbnQuaWQgPT09IHByb2R1Y3QudmFyaWFudC5pZCk7XHJcbiAgIGRlYnVnZ2VyXHJcbiAgIGlmIChpbmRleE9mT3JkZXJJdGVtICE9PSAtMSkge1xyXG4gICAgIC8vOiB1cGRhdGUgcXVhbnRpdHlcclxuICAgICBjb25zdCBjdXJyZW50UXVhbnRpdHkgPSBhY3RpdmVPcmRlcltpbmRleE9mT3JkZXJJdGVtXS5xdWFudGl0eTtcclxuICAgICBpZiAoY3VycmVudFF1YW50aXR5ICsgdmFyaWFudFF1YW50aXR5IDw9IHByb2R1Y3QudmFyaWFudC5zdG9jaykge1xyXG4gICAgICAgYWN0aXZlT3JkZXJbaW5kZXhPZk9yZGVySXRlbV0ucXVhbnRpdHkgPSBjdXJyZW50UXVhbnRpdHkgKyB2YXJpYW50UXVhbnRpdHk7XHJcbiAgICAgfVxyXG4gICAgIGRlYnVnZ2VyXHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgYWN0aXZlT3JkZXIucHVzaCh7XHJcbiAgICAgICBwcm9kdWN0OiBwcm9kdWN0LnByb2R1Y3QsXHJcbiAgICAgICB2YXJpYW50OiBwcm9kdWN0LnZhcmlhbnQsXHJcbiAgICAgICBxdWFudGl0eTogdmFyaWFudFF1YW50aXR5LFxyXG4gICAgICAgb2ZmZXJzOiBwcm9kdWN0Lm9mZmVyc1xyXG4gICAgIH0pO1xyXG4gICAgIGRlYnVnZ2VyXHJcbiAgIH1cclxuICAgY29uc29sZS5sb2coXCJvcmRlclwiKVxyXG4gICBjb25zb2xlLmxvZyhvcmRlcilcclxuICAgY29uc29sZS5sb2coXCJhY3RpdmVPcmRlclwiKVxyXG4gICBjb25zb2xlLmxvZyhhY3RpdmVPcmRlcilcclxuXHJcbiAgICAvL3NldE9yZGVyKGFjdGl2ZU9yZGVyKTtcclxuICAgIC8vc2F2ZU9yZGVyKGFjdGl2ZU9yZGVyKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZVByb2R1Y3QgPSAoaXRlbU51bWJlcikgPT4ge1xyXG4gICAgICBhbGVydChcIkJPUlJBUlwiKVxyXG4gICAgICBvcmRlci5zcGxpY2UoaXRlbU51bWJlciwgMSlcclxuICAgICAgc2V0T3JkZXIob3JkZXIpXHJcbiAgICAgIHNhdmVPcmRlcihvcmRlcilcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuXHJcbiAgXHJcblxyXG4gIGNvbnN0IGFkZE9yZGVySXRlbSA9IChpdGVtOiBJUGF5bWVudE9yZGVyKSA9PiB7XHJcbiAgfTtcclxuXHJcbiAgLy86IHVzZSB0aGlzIGZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBpdGVtIHRvIHRoZSBvcmRlciBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgY29uc3Qgc2V0T3JkZXJJdGVtSW5MUyA9IChhY3RpdmVPcmRlcjogQXJyYXk8SVBheW1lbnRPcmRlcj4pID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlckl0ZW1zJywgSlNPTi5zdHJpbmdpZnkoYWN0aXZlT3JkZXIpKTtcclxuICB9O1xyXG5cclxuICAvLzogdXNlIHRoaXMgZnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50IG9yZGVyIG9iamVjdCBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBnZXRPcmRlckl0ZW1Gcm9tTFMgPSAoKTogQXJyYXk8SVBheW1lbnRPcmRlcj4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVySXRlbXMnKSkgfHwgW107XHJcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcigoX2Vycm9yIGFzIFN5bnRheEVycm9yKS5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTsqL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE9yZGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBvcmRlciwgY291bnRQcm9kdWN0cywgYWRkUHJvZHVjdFRvQmFnLCByZW1vdmVQcm9kdWN0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L09yZGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9