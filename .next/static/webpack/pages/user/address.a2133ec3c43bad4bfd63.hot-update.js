webpackHotUpdate_N_E("pages/user/address",{

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    saveOrder(order);
  }, [order]);

  var saveOrder = function saveOrder(order) {
    localStorage.setItem('order', JSON.stringify(order));
  };

  var addProductToBag = function addProductToBag(variantQuantity, product) {
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
    var activeOrder = Object(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(order);

    activeOrder.splice(itemNumber, 1);
    setOrder(activeOrder); //saveOrder(order)
  };

  var cleanOrder = function cleanOrder() {
    console.log("LIMPIA");
    console.log(order); //const activeOrder = []
    //setOrder(activeOrder)
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
      addProductToBag: addProductToBag,
      removeProduct: removeProduct,
      cleanOrder: cleanOrder
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, this);
}

_s(OrderProvider, "qKKneJbUx5gtcqFHlUHt/8aiVS8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9PcmRlckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIk9yZGVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJPcmRlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsIm9yZGVyIiwic2V0T3JkZXIiLCJnZXRPcmRlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsInVzZUVmZmVjdCIsIm8iLCJzYXZlT3JkZXIiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkUHJvZHVjdFRvQmFnIiwidmFyaWFudFF1YW50aXR5IiwicHJvZHVjdCIsImFjdGl2ZU9yZGVyIiwiaW5kZXhPZk9yZGVySXRlbSIsImZpbmRJbmRleCIsIm9yZGVySXRlbSIsInZhcmlhbnQiLCJpZCIsImN1cnJlbnRRdWFudGl0eSIsInF1YW50aXR5Iiwic3RvY2siLCJwdXNoIiwib2ZmZXJzIiwicmVtb3ZlUHJvZHVjdCIsIml0ZW1OdW1iZXIiLCJzcGxpY2UiLCJjbGVhbk9yZGVyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0EsSUFBTUEsWUFBWSxnQkFBR0MsMkRBQWEsQ0FBQyxJQUFELENBQWxDO0FBRWVELDJFQUFmO0NBSUE7QUFDQTs7QUFDQSxTQUFTRSxhQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUVUQyxzREFBUSxDQUF1QixFQUF2QixDQUZDO0FBQUEsTUFFNUJDLEtBRjRCO0FBQUEsTUFFckJDLFFBRnFCOztBQUluQyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUE0QjtBQUMzQyxRQUFJO0FBQ0YsYUFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFYLEtBQTZDLEVBQXBEO0FBQ0QsS0FGRCxDQUVFLE9BQU9DLEtBQVAsRUFBYyxDQUFHOztBQUNuQixXQUFPLEVBQVA7QUFDRCxHQUxEOztBQVFBQyx5REFBUyxDQUFDLFlBQUk7QUFDWixRQUFNQyxDQUFDLEdBQUdQLFFBQVEsRUFBbEI7QUFDQUQsWUFBUSxDQUFDUSxDQUFELENBQVI7QUFDRCxHQUhRLEVBR1AsRUFITyxDQUFUO0FBS0FELHlEQUFTLENBQUMsWUFBSTtBQUNaRSxhQUFTLENBQUNWLEtBQUQsQ0FBVDtBQUNELEdBRlEsRUFFUCxDQUFDQSxLQUFELENBRk8sQ0FBVDs7QUFJQSxNQUFNVSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDVixLQUFELEVBQWlDO0FBQ2pESyxnQkFBWSxDQUFDTSxPQUFiLENBQXFCLE9BQXJCLEVBQThCUixJQUFJLENBQUNTLFNBQUwsQ0FBZVosS0FBZixDQUE5QjtBQUNELEdBRkQ7O0FBSUEsTUFBTWEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxlQUFELEVBQXlCQyxPQUF6QixFQUFtRDtBQUN6RSxRQUFNQyxXQUFXLEdBQUcsc0lBQUloQixLQUFQLENBQWpCLENBRHlFLENBRTFFOzs7QUFDQSxRQUFNaUIsZ0JBQWdCLEdBQUdELFdBQVcsQ0FBQ0UsU0FBWixDQUFzQixVQUFDQyxTQUFEO0FBQUEsYUFBOEJBLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQkMsRUFBbEIsS0FBeUJOLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkMsRUFBdkU7QUFBQSxLQUF0QixDQUF6Qjs7QUFDQSxRQUFJSixnQkFBZ0IsS0FBSyxDQUFDLENBQTFCLEVBQTZCO0FBQzNCO0FBQ0EsVUFBTUssZUFBZSxHQUFHTixXQUFXLENBQUNDLGdCQUFELENBQVgsQ0FBOEJNLFFBQXREOztBQUNBLFVBQUlELGVBQWUsR0FBR1IsZUFBbEIsSUFBcUNDLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkksS0FBekQsRUFBZ0U7QUFDOURSLG1CQUFXLENBQUNDLGdCQUFELENBQVgsQ0FBOEJNLFFBQTlCLEdBQXlDRCxlQUFlLEdBQUdSLGVBQTNEO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTEUsaUJBQVcsQ0FBQ1MsSUFBWixDQUFpQjtBQUNmVixlQUFPLEVBQUVBLE9BQU8sQ0FBQ0EsT0FERjtBQUVmSyxlQUFPLEVBQUVMLE9BQU8sQ0FBQ0ssT0FGRjtBQUdmRyxnQkFBUSxFQUFFVCxlQUhLO0FBSWZZLGNBQU0sRUFBRVgsT0FBTyxDQUFDVztBQUpELE9BQWpCO0FBTUQ7O0FBQ0F6QixZQUFRLENBQUNlLFdBQUQsQ0FBUixDQWxCeUUsQ0FtQnpFO0FBQ0QsR0FwQkQ7O0FBc0JBLE1BQU1XLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsVUFBRCxFQUFnQjtBQUNsQyxRQUFNWixXQUFXLEdBQUcsc0lBQUloQixLQUFQLENBQWpCOztBQUNBZ0IsZUFBVyxDQUFDYSxNQUFaLENBQW1CRCxVQUFuQixFQUErQixDQUEvQjtBQUNBM0IsWUFBUSxDQUFDZSxXQUFELENBQVIsQ0FIa0MsQ0FJbEM7QUFDSCxHQUxEOztBQU9BLE1BQU1jLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVloQyxLQUFaLEVBRnVCLENBR3ZCO0FBQ0E7QUFDRCxHQUxEO0FBUUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUUsc0JBQ0UscUVBQUMsWUFBRCxDQUFjLFFBQWQ7QUFBdUIsU0FBSyxFQUFFO0FBQUVBLFdBQUssRUFBTEEsS0FBRjtBQUFTYSxxQkFBZSxFQUFmQSxlQUFUO0FBQTBCYyxtQkFBYSxFQUFiQSxhQUExQjtBQUF5Q0csZ0JBQVUsRUFBVkE7QUFBekMsS0FBOUI7QUFBQSxjQUNHaEM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0F6RlFELGE7O0tBQUFBLGE7QUF5RlIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9hZGRyZXNzLmEyMTMzZWMzYzQzYmFkNGJmZDYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJUGF5bWVudE9yZGVyIGZyb20gXCJAL21vZGVscy9JUGF5bWVudE9yZGVyXCI7XHJcblxyXG4vLzogdXNlIHRoaXMgY29udGV4dCB3aGVuZXZlciB5b3Ugd2FudCB0byBhY2Nlc3MgdGhlIE9yZGVyUHJvdmlkZXJcclxuY29uc3QgT3JkZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyQ29udGV4dDtcclxuXHJcbmV4cG9ydCB7IE9yZGVyUHJvdmlkZXIgfTtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb21wb25lbnQgaW4gYWxsIHRoZSBvdGhlciBjb21wb25lbnRzIHdoZXJlIHlvdSB3YW50IHRvIGFjY2Vzc1xyXG4vLzogdGhlIGdsb2JhbCBzdGF0ZSBvZiBhIHVzZXIgb3JkZXJcclxuZnVuY3Rpb24gT3JkZXJQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuXHJcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZTxBcnJheTxJUGF5bWVudE9yZGVyPj4oW10pO1xyXG5cclxuICBjb25zdCBnZXRPcmRlciA9ICgpOiBBcnJheTxJUGF5bWVudE9yZGVyPiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXInKSkgfHwgW107XHJcbiAgICB9IGNhdGNoIChlcnJvcikgeyB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfTtcclxuXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zdCBvID0gZ2V0T3JkZXIoKVxyXG4gICAgc2V0T3JkZXIobylcclxuICB9LFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHNhdmVPcmRlcihvcmRlcilcclxuICB9LFtvcmRlcl0pXHJcblxyXG4gIGNvbnN0IHNhdmVPcmRlciA9IChvcmRlcjogQXJyYXk8SVBheW1lbnRPcmRlcj4pID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlcicsIEpTT04uc3RyaW5naWZ5KG9yZGVyKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkUHJvZHVjdFRvQmFnID0gKHZhcmlhbnRRdWFudGl0eTpudW1iZXIsIHByb2R1Y3Q6SVBheW1lbnRPcmRlcikgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlT3JkZXIgPSBbLi4ub3JkZXJdXHJcbiAgIC8vOiBpZiB0aGUgcHJvZHVjdCBhbmQgdmFyaWFudCBpcyBhbHJlYWR5IHRoZXJlXHJcbiAgIGNvbnN0IGluZGV4T2ZPcmRlckl0ZW0gPSBhY3RpdmVPcmRlci5maW5kSW5kZXgoKG9yZGVySXRlbTogSVBheW1lbnRPcmRlcikgPT4gb3JkZXJJdGVtLnZhcmlhbnQuaWQgPT09IHByb2R1Y3QudmFyaWFudC5pZCk7XHJcbiAgIGlmIChpbmRleE9mT3JkZXJJdGVtICE9PSAtMSkge1xyXG4gICAgIC8vOiB1cGRhdGUgcXVhbnRpdHlcclxuICAgICBjb25zdCBjdXJyZW50UXVhbnRpdHkgPSBhY3RpdmVPcmRlcltpbmRleE9mT3JkZXJJdGVtXS5xdWFudGl0eTtcclxuICAgICBpZiAoY3VycmVudFF1YW50aXR5ICsgdmFyaWFudFF1YW50aXR5IDw9IHByb2R1Y3QudmFyaWFudC5zdG9jaykge1xyXG4gICAgICAgYWN0aXZlT3JkZXJbaW5kZXhPZk9yZGVySXRlbV0ucXVhbnRpdHkgPSBjdXJyZW50UXVhbnRpdHkgKyB2YXJpYW50UXVhbnRpdHk7XHJcbiAgICAgfVxyXG4gICB9IGVsc2Uge1xyXG4gICAgIGFjdGl2ZU9yZGVyLnB1c2goe1xyXG4gICAgICAgcHJvZHVjdDogcHJvZHVjdC5wcm9kdWN0LFxyXG4gICAgICAgdmFyaWFudDogcHJvZHVjdC52YXJpYW50LFxyXG4gICAgICAgcXVhbnRpdHk6IHZhcmlhbnRRdWFudGl0eSxcclxuICAgICAgIG9mZmVyczogcHJvZHVjdC5vZmZlcnNcclxuICAgICB9KTtcclxuICAgfVxyXG4gICAgc2V0T3JkZXIoYWN0aXZlT3JkZXIpO1xyXG4gICAgLy9zYXZlT3JkZXIoYWN0aXZlT3JkZXIpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlUHJvZHVjdCA9IChpdGVtTnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFjdGl2ZU9yZGVyID0gWy4uLm9yZGVyXVxyXG4gICAgICBhY3RpdmVPcmRlci5zcGxpY2UoaXRlbU51bWJlciwgMSlcclxuICAgICAgc2V0T3JkZXIoYWN0aXZlT3JkZXIpXHJcbiAgICAgIC8vc2F2ZU9yZGVyKG9yZGVyKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsZWFuT3JkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxJTVBJQVwiKVxyXG4gICAgY29uc29sZS5sb2cob3JkZXIpXHJcbiAgICAvL2NvbnN0IGFjdGl2ZU9yZGVyID0gW11cclxuICAgIC8vc2V0T3JkZXIoYWN0aXZlT3JkZXIpXHJcbiAgfVxyXG5cclxuXHJcbiAgLypcclxuXHJcbiAgXHJcblxyXG4gIGNvbnN0IGFkZE9yZGVySXRlbSA9IChpdGVtOiBJUGF5bWVudE9yZGVyKSA9PiB7XHJcbiAgfTtcclxuXHJcbiAgLy86IHVzZSB0aGlzIGZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBpdGVtIHRvIHRoZSBvcmRlciBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgY29uc3Qgc2V0T3JkZXJJdGVtSW5MUyA9IChhY3RpdmVPcmRlcjogQXJyYXk8SVBheW1lbnRPcmRlcj4pID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlckl0ZW1zJywgSlNPTi5zdHJpbmdpZnkoYWN0aXZlT3JkZXIpKTtcclxuICB9O1xyXG5cclxuICAvLzogdXNlIHRoaXMgZnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50IG9yZGVyIG9iamVjdCBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBnZXRPcmRlckl0ZW1Gcm9tTFMgPSAoKTogQXJyYXk8SVBheW1lbnRPcmRlcj4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVySXRlbXMnKSkgfHwgW107XHJcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcigoX2Vycm9yIGFzIFN5bnRheEVycm9yKS5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTsqL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE9yZGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBvcmRlciwgYWRkUHJvZHVjdFRvQmFnLCByZW1vdmVQcm9kdWN0LCBjbGVhbk9yZGVyIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L09yZGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9