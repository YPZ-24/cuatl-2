webpackHotUpdate_N_E("pages/_app",{

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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log("GUARDANDO"); //saveOrder(order)
  }, [order]);

  var countProducts = function countProducts() {
    //return order ? order.variants.length : 0;
    return 0;
  };

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
    lineNumber: 98,
    columnNumber: 5
  }, this);
}

_s(OrderProvider, "8/qTCjM2uwYguu/A2jhkdgtsQnk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9PcmRlckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIk9yZGVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJPcmRlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsIm9yZGVyIiwic2V0T3JkZXIiLCJnZXRPcmRlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsInVzZUVmZmVjdCIsIm8iLCJjb25zb2xlIiwibG9nIiwiY291bnRQcm9kdWN0cyIsInNhdmVPcmRlciIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZGRQcm9kdWN0VG9CYWciLCJ2YXJpYW50UXVhbnRpdHkiLCJwcm9kdWN0IiwiYWN0aXZlT3JkZXIiLCJpbmRleE9mT3JkZXJJdGVtIiwiZmluZEluZGV4Iiwib3JkZXJJdGVtIiwidmFyaWFudCIsImlkIiwiY3VycmVudFF1YW50aXR5IiwicXVhbnRpdHkiLCJzdG9jayIsInB1c2giLCJvZmZlcnMiLCJyZW1vdmVQcm9kdWN0IiwiaXRlbU51bWJlciIsImFsZXJ0Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQSxJQUFNQSxZQUFZLGdCQUFHQywyREFBYSxDQUFDLElBQUQsQ0FBbEM7QUFFZUQsMkVBQWY7Q0FJQTtBQUNBOztBQUNBLFNBQVNFLGFBQVQsT0FBcUM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBRVRDLHNEQUFRLEVBRkM7QUFBQSxNQUU1QkMsS0FGNEI7QUFBQSxNQUVyQkMsUUFGcUI7O0FBSW5DLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQTRCO0FBQzNDLFFBQUk7QUFDRixhQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQVgsS0FBNkMsRUFBcEQ7QUFDRCxLQUZELENBRUUsT0FBT0MsS0FBUCxFQUFjLENBQUc7O0FBQ25CLFdBQU8sRUFBUDtBQUNELEdBTEQ7O0FBUUFDLHlEQUFTLENBQUMsWUFBSTtBQUNaLFFBQU1DLENBQUMsR0FBR1AsUUFBUSxFQUFsQjtBQUNBRCxZQUFRLENBQUNRLENBQUQsQ0FBUjtBQUNELEdBSFEsRUFHUCxFQUhPLENBQVQ7QUFLQUQseURBQVMsQ0FBQyxZQUFJO0FBQ1pFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFEWSxDQUdaO0FBQ0QsR0FKUSxFQUlQLENBQUNYLEtBQUQsQ0FKTyxDQUFUOztBQU1BLE1BQU1ZLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBYztBQUNsQztBQUNBLFdBQU8sQ0FBUDtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ2IsS0FBRCxFQUFpQztBQUNqREssZ0JBQVksQ0FBQ1MsT0FBYixDQUFxQixPQUFyQixFQUE4QlgsSUFBSSxDQUFDWSxTQUFMLENBQWVmLEtBQWYsQ0FBOUI7QUFDRCxHQUZEOztBQUlBLE1BQU1nQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLGVBQUQsRUFBeUJDLE9BQXpCLEVBQW1EO0FBQ3pFLFFBQU1DLFdBQVcsR0FBRyxzSUFBSW5CLEtBQVAsQ0FBakIsQ0FEeUUsQ0FFMUU7OztBQUNBLFFBQU1vQixnQkFBZ0IsR0FBR0QsV0FBVyxDQUFDRSxTQUFaLENBQXNCLFVBQUNDLFNBQUQ7QUFBQSxhQUE4QkEsU0FBUyxDQUFDQyxPQUFWLENBQWtCQyxFQUFsQixLQUF5Qk4sT0FBTyxDQUFDSyxPQUFSLENBQWdCQyxFQUF2RTtBQUFBLEtBQXRCLENBQXpCOztBQUNBLFFBQUlKLGdCQUFnQixLQUFLLENBQUMsQ0FBMUIsRUFBNkI7QUFDM0I7QUFDQSxVQUFNSyxlQUFlLEdBQUdOLFdBQVcsQ0FBQ0MsZ0JBQUQsQ0FBWCxDQUE4Qk0sUUFBdEQ7O0FBQ0EsVUFBSUQsZUFBZSxHQUFHUixlQUFsQixJQUFxQ0MsT0FBTyxDQUFDSyxPQUFSLENBQWdCSSxLQUF6RCxFQUFnRTtBQUM5RFIsbUJBQVcsQ0FBQ0MsZ0JBQUQsQ0FBWCxDQUE4Qk0sUUFBOUIsR0FBeUNELGVBQWUsR0FBR1IsZUFBM0Q7QUFDRDtBQUNGLEtBTkQsTUFNTztBQUNMRSxpQkFBVyxDQUFDUyxJQUFaLENBQWlCO0FBQ2ZWLGVBQU8sRUFBRUEsT0FBTyxDQUFDQSxPQURGO0FBRWZLLGVBQU8sRUFBRUwsT0FBTyxDQUFDSyxPQUZGO0FBR2ZHLGdCQUFRLEVBQUVULGVBSEs7QUFJZlksY0FBTSxFQUFFWCxPQUFPLENBQUNXO0FBSkQsT0FBakI7QUFNRDs7QUFDQTVCLFlBQVEsQ0FBQ2tCLFdBQUQsQ0FBUixDQWxCeUUsQ0FtQnpFO0FBQ0QsR0FwQkQ7O0FBc0JBLE1BQU1XLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsVUFBRCxFQUFnQjtBQUNsQ0MsU0FBSyxDQUFDLFFBQUQsQ0FBTDtBQUNBaEMsU0FBSyxDQUFDaUMsTUFBTixDQUFhRixVQUFiLEVBQXlCLENBQXpCO0FBQ0E5QixZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBYSxhQUFTLENBQUNiLEtBQUQsQ0FBVDtBQUNILEdBTEQ7QUFRQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNRSxzQkFDRSxxRUFBQyxZQUFELENBQWMsUUFBZDtBQUF1QixTQUFLLEVBQUU7QUFBRUEsV0FBSyxFQUFMQSxLQUFGO0FBQVNZLG1CQUFhLEVBQWJBLGFBQVQ7QUFBd0JJLHFCQUFlLEVBQWZBLGVBQXhCO0FBQXlDYyxtQkFBYSxFQUFiQTtBQUF6QyxLQUE5QjtBQUFBLGNBQ0doQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztHQXpGUUQsYTs7S0FBQUEsYTtBQXlGUiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVlNDUwZWJmYjlkNzAzMmYxZDJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJUGF5bWVudE9yZGVyIGZyb20gXCJAL21vZGVscy9JUGF5bWVudE9yZGVyXCI7XHJcblxyXG4vLzogdXNlIHRoaXMgY29udGV4dCB3aGVuZXZlciB5b3Ugd2FudCB0byBhY2Nlc3MgdGhlIE9yZGVyUHJvdmlkZXJcclxuY29uc3QgT3JkZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyQ29udGV4dDtcclxuXHJcbmV4cG9ydCB7IE9yZGVyUHJvdmlkZXIgfTtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb21wb25lbnQgaW4gYWxsIHRoZSBvdGhlciBjb21wb25lbnRzIHdoZXJlIHlvdSB3YW50IHRvIGFjY2Vzc1xyXG4vLzogdGhlIGdsb2JhbCBzdGF0ZSBvZiBhIHVzZXIgb3JkZXJcclxuZnVuY3Rpb24gT3JkZXJQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuXHJcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZTxBcnJheTxJUGF5bWVudE9yZGVyPj4oKTtcclxuXHJcbiAgY29uc3QgZ2V0T3JkZXIgPSAoKTogQXJyYXk8SVBheW1lbnRPcmRlcj4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyJykpIHx8IFtdO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH07XHJcblxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgbyA9IGdldE9yZGVyKClcclxuICAgIHNldE9yZGVyKG8pXHJcbiAgfSxbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhcIkdVQVJEQU5ET1wiKVxyXG4gICAgXHJcbiAgICAvL3NhdmVPcmRlcihvcmRlcilcclxuICB9LFtvcmRlcl0pXHJcblxyXG4gIGNvbnN0IGNvdW50UHJvZHVjdHMgPSAoKTogbnVtYmVyID0+IHtcclxuICAgIC8vcmV0dXJuIG9yZGVyID8gb3JkZXIudmFyaWFudHMubGVuZ3RoIDogMDtcclxuICAgIHJldHVybiAwXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2F2ZU9yZGVyID0gKG9yZGVyOiBBcnJheTxJUGF5bWVudE9yZGVyPikgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29yZGVyJywgSlNPTi5zdHJpbmdpZnkob3JkZXIpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRQcm9kdWN0VG9CYWcgPSAodmFyaWFudFF1YW50aXR5Om51bWJlciwgcHJvZHVjdDpJUGF5bWVudE9yZGVyKSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmVPcmRlciA9IFsuLi5vcmRlcl1cclxuICAgLy86IGlmIHRoZSBwcm9kdWN0IGFuZCB2YXJpYW50IGlzIGFscmVhZHkgdGhlcmVcclxuICAgY29uc3QgaW5kZXhPZk9yZGVySXRlbSA9IGFjdGl2ZU9yZGVyLmZpbmRJbmRleCgob3JkZXJJdGVtOiBJUGF5bWVudE9yZGVyKSA9PiBvcmRlckl0ZW0udmFyaWFudC5pZCA9PT0gcHJvZHVjdC52YXJpYW50LmlkKTtcclxuICAgaWYgKGluZGV4T2ZPcmRlckl0ZW0gIT09IC0xKSB7XHJcbiAgICAgLy86IHVwZGF0ZSBxdWFudGl0eVxyXG4gICAgIGNvbnN0IGN1cnJlbnRRdWFudGl0eSA9IGFjdGl2ZU9yZGVyW2luZGV4T2ZPcmRlckl0ZW1dLnF1YW50aXR5O1xyXG4gICAgIGlmIChjdXJyZW50UXVhbnRpdHkgKyB2YXJpYW50UXVhbnRpdHkgPD0gcHJvZHVjdC52YXJpYW50LnN0b2NrKSB7XHJcbiAgICAgICBhY3RpdmVPcmRlcltpbmRleE9mT3JkZXJJdGVtXS5xdWFudGl0eSA9IGN1cnJlbnRRdWFudGl0eSArIHZhcmlhbnRRdWFudGl0eTtcclxuICAgICB9XHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgYWN0aXZlT3JkZXIucHVzaCh7XHJcbiAgICAgICBwcm9kdWN0OiBwcm9kdWN0LnByb2R1Y3QsXHJcbiAgICAgICB2YXJpYW50OiBwcm9kdWN0LnZhcmlhbnQsXHJcbiAgICAgICBxdWFudGl0eTogdmFyaWFudFF1YW50aXR5LFxyXG4gICAgICAgb2ZmZXJzOiBwcm9kdWN0Lm9mZmVyc1xyXG4gICAgIH0pO1xyXG4gICB9XHJcbiAgICBzZXRPcmRlcihhY3RpdmVPcmRlcik7XHJcbiAgICAvL3NhdmVPcmRlcihhY3RpdmVPcmRlcilcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVQcm9kdWN0ID0gKGl0ZW1OdW1iZXIpID0+IHtcclxuICAgICAgYWxlcnQoXCJCT1JSQVJcIilcclxuICAgICAgb3JkZXIuc3BsaWNlKGl0ZW1OdW1iZXIsIDEpXHJcbiAgICAgIHNldE9yZGVyKG9yZGVyKVxyXG4gICAgICBzYXZlT3JkZXIob3JkZXIpXHJcbiAgfTtcclxuXHJcblxyXG4gIC8qXHJcblxyXG4gIFxyXG5cclxuICBjb25zdCBhZGRPcmRlckl0ZW0gPSAoaXRlbTogSVBheW1lbnRPcmRlcikgPT4ge1xyXG4gIH07XHJcblxyXG4gIC8vOiB1c2UgdGhpcyBmdW5jdGlvbiB0byBhZGQgYSBuZXcgaXRlbSB0byB0aGUgb3JkZXIgaW4gbG9jYWwgc3RvcmFnZVxyXG4gIGNvbnN0IHNldE9yZGVySXRlbUluTFMgPSAoYWN0aXZlT3JkZXI6IEFycmF5PElQYXltZW50T3JkZXI+KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXJJdGVtcycsIEpTT04uc3RyaW5naWZ5KGFjdGl2ZU9yZGVyKSk7XHJcbiAgfTtcclxuXHJcbiAgLy86IHVzZSB0aGlzIGZ1bmN0aW9uIHRvIGdldCB0aGUgY3VycmVudCBvcmRlciBvYmplY3QgZnJvbSBsb2NhbCBzdG9yYWdlXHJcbiAgY29uc3QgZ2V0T3JkZXJJdGVtRnJvbUxTID0gKCk6IEFycmF5PElQYXltZW50T3JkZXI+ID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlckl0ZW1zJykpIHx8IFtdO1xyXG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoKF9lcnJvciBhcyBTeW50YXhFcnJvcikubWVzc2FnZSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH07Ki9cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxPcmRlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgb3JkZXIsIGNvdW50UHJvZHVjdHMsIGFkZFByb2R1Y3RUb0JhZywgcmVtb3ZlUHJvZHVjdCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9PcmRlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==