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

    setOrder(activeOrder);
  };

  var removeProduct = function removeProduct(itemNumber) {
    var activeOrder = Object(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(order);

    activeOrder.splice(itemNumber, 1);
    setOrder(activeOrder);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OrderContext.Provider, {
    value: {
      order: order,
      addProductToBag: addProductToBag,
      removeProduct: removeProduct,
      setOrder: setOrder
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9PcmRlckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIk9yZGVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJPcmRlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsIm9yZGVyIiwic2V0T3JkZXIiLCJnZXRPcmRlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsInVzZUVmZmVjdCIsIm8iLCJzYXZlT3JkZXIiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkUHJvZHVjdFRvQmFnIiwidmFyaWFudFF1YW50aXR5IiwicHJvZHVjdCIsImFjdGl2ZU9yZGVyIiwiaW5kZXhPZk9yZGVySXRlbSIsImZpbmRJbmRleCIsIm9yZGVySXRlbSIsInZhcmlhbnQiLCJpZCIsImN1cnJlbnRRdWFudGl0eSIsInF1YW50aXR5Iiwic3RvY2siLCJwdXNoIiwib2ZmZXJzIiwicmVtb3ZlUHJvZHVjdCIsIml0ZW1OdW1iZXIiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBLElBQU1BLFlBQVksZ0JBQUdDLDJEQUFhLENBQUMsSUFBRCxDQUFsQztBQUVlRCwyRUFBZjtDQUlBO0FBQ0E7O0FBQ0EsU0FBU0UsYUFBVCxPQUFxQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFFVEMsc0RBQVEsQ0FBdUIsRUFBdkIsQ0FGQztBQUFBLE1BRTVCQyxLQUY0QjtBQUFBLE1BRXJCQyxRQUZxQjs7QUFJbkMsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBNEI7QUFDM0MsUUFBSTtBQUNGLGFBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBWCxLQUE2QyxFQUFwRDtBQUNELEtBRkQsQ0FFRSxPQUFPQyxLQUFQLEVBQWMsQ0FBRzs7QUFDbkIsV0FBTyxFQUFQO0FBQ0QsR0FMRDs7QUFPQUMseURBQVMsQ0FBQyxZQUFJO0FBQ1osUUFBTUMsQ0FBQyxHQUFHUCxRQUFRLEVBQWxCO0FBQ0FELFlBQVEsQ0FBQ1EsQ0FBRCxDQUFSO0FBQ0QsR0FIUSxFQUdQLEVBSE8sQ0FBVDtBQUtBRCx5REFBUyxDQUFDLFlBQUk7QUFDWkUsYUFBUyxDQUFDVixLQUFELENBQVQ7QUFDRCxHQUZRLEVBRVAsQ0FBQ0EsS0FBRCxDQUZPLENBQVQ7O0FBSUEsTUFBTVUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1YsS0FBRCxFQUFpQztBQUNqREssZ0JBQVksQ0FBQ00sT0FBYixDQUFxQixPQUFyQixFQUE4QlIsSUFBSSxDQUFDUyxTQUFMLENBQWVaLEtBQWYsQ0FBOUI7QUFDRCxHQUZEOztBQUlBLE1BQU1hLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsZUFBRCxFQUF5QkMsT0FBekIsRUFBbUQ7QUFDekUsUUFBTUMsV0FBVyxHQUFHLHNJQUFJaEIsS0FBUCxDQUFqQixDQUR5RSxDQUUxRTs7O0FBQ0EsUUFBTWlCLGdCQUFnQixHQUFHRCxXQUFXLENBQUNFLFNBQVosQ0FBc0IsVUFBQ0MsU0FBRDtBQUFBLGFBQThCQSxTQUFTLENBQUNDLE9BQVYsQ0FBa0JDLEVBQWxCLEtBQXlCTixPQUFPLENBQUNLLE9BQVIsQ0FBZ0JDLEVBQXZFO0FBQUEsS0FBdEIsQ0FBekI7O0FBQ0EsUUFBSUosZ0JBQWdCLEtBQUssQ0FBQyxDQUExQixFQUE2QjtBQUMzQjtBQUNBLFVBQU1LLGVBQWUsR0FBR04sV0FBVyxDQUFDQyxnQkFBRCxDQUFYLENBQThCTSxRQUF0RDs7QUFDQSxVQUFJRCxlQUFlLEdBQUdSLGVBQWxCLElBQXFDQyxPQUFPLENBQUNLLE9BQVIsQ0FBZ0JJLEtBQXpELEVBQWdFO0FBQzlEUixtQkFBVyxDQUFDQyxnQkFBRCxDQUFYLENBQThCTSxRQUE5QixHQUF5Q0QsZUFBZSxHQUFHUixlQUEzRDtBQUNEO0FBQ0YsS0FORCxNQU1PO0FBQ0xFLGlCQUFXLENBQUNTLElBQVosQ0FBaUI7QUFDZlYsZUFBTyxFQUFFQSxPQUFPLENBQUNBLE9BREY7QUFFZkssZUFBTyxFQUFFTCxPQUFPLENBQUNLLE9BRkY7QUFHZkcsZ0JBQVEsRUFBRVQsZUFISztBQUlmWSxjQUFNLEVBQUVYLE9BQU8sQ0FBQ1c7QUFKRCxPQUFqQjtBQU1EOztBQUNBekIsWUFBUSxDQUFDZSxXQUFELENBQVI7QUFDRCxHQW5CRDs7QUFxQkEsTUFBTVcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxVQUFELEVBQWdCO0FBQ2xDLFFBQU1aLFdBQVcsR0FBRyxzSUFBSWhCLEtBQVAsQ0FBakI7O0FBQ0FnQixlQUFXLENBQUNhLE1BQVosQ0FBbUJELFVBQW5CLEVBQStCLENBQS9CO0FBQ0EzQixZQUFRLENBQUNlLFdBQUQsQ0FBUjtBQUNILEdBSkQ7O0FBTUEsc0JBQ0UscUVBQUMsWUFBRCxDQUFjLFFBQWQ7QUFBdUIsU0FBSyxFQUFFO0FBQUVoQixXQUFLLEVBQUxBLEtBQUY7QUFBU2EscUJBQWUsRUFBZkEsZUFBVDtBQUEwQmMsbUJBQWEsRUFBYkEsYUFBMUI7QUFBeUMxQixjQUFRLEVBQVJBO0FBQXpDLEtBQTlCO0FBQUEsY0FDR0g7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0F4RFFELGE7O0tBQUFBLGE7QUF3RFIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xNTRmNTJjYmQ1NWNhZDcyYTQ5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSVBheW1lbnRPcmRlciBmcm9tIFwiQC9tb2RlbHMvSVBheW1lbnRPcmRlclwiO1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbnRleHQgd2hlbmV2ZXIgeW91IHdhbnQgdG8gYWNjZXNzIHRoZSBPcmRlclByb3ZpZGVyXHJcbmNvbnN0IE9yZGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlckNvbnRleHQ7XHJcblxyXG5leHBvcnQgeyBPcmRlclByb3ZpZGVyIH07XHJcblxyXG4vLzogdXNlIHRoaXMgY29tcG9uZW50IGluIGFsbCB0aGUgb3RoZXIgY29tcG9uZW50cyB3aGVyZSB5b3Ugd2FudCB0byBhY2Nlc3NcclxuLy86IHRoZSBnbG9iYWwgc3RhdGUgb2YgYSB1c2VyIG9yZGVyXHJcbmZ1bmN0aW9uIE9yZGVyUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcblxyXG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGU8QXJyYXk8SVBheW1lbnRPcmRlcj4+KFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0T3JkZXIgPSAoKTogQXJyYXk8SVBheW1lbnRPcmRlcj4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyJykpIHx8IFtdO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH07XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zdCBvID0gZ2V0T3JkZXIoKVxyXG4gICAgc2V0T3JkZXIobylcclxuICB9LFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHNhdmVPcmRlcihvcmRlcilcclxuICB9LFtvcmRlcl0pXHJcblxyXG4gIGNvbnN0IHNhdmVPcmRlciA9IChvcmRlcjogQXJyYXk8SVBheW1lbnRPcmRlcj4pID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlcicsIEpTT04uc3RyaW5naWZ5KG9yZGVyKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkUHJvZHVjdFRvQmFnID0gKHZhcmlhbnRRdWFudGl0eTpudW1iZXIsIHByb2R1Y3Q6SVBheW1lbnRPcmRlcikgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlT3JkZXIgPSBbLi4ub3JkZXJdXHJcbiAgIC8vOiBpZiB0aGUgcHJvZHVjdCBhbmQgdmFyaWFudCBpcyBhbHJlYWR5IHRoZXJlXHJcbiAgIGNvbnN0IGluZGV4T2ZPcmRlckl0ZW0gPSBhY3RpdmVPcmRlci5maW5kSW5kZXgoKG9yZGVySXRlbTogSVBheW1lbnRPcmRlcikgPT4gb3JkZXJJdGVtLnZhcmlhbnQuaWQgPT09IHByb2R1Y3QudmFyaWFudC5pZCk7XHJcbiAgIGlmIChpbmRleE9mT3JkZXJJdGVtICE9PSAtMSkge1xyXG4gICAgIC8vOiB1cGRhdGUgcXVhbnRpdHlcclxuICAgICBjb25zdCBjdXJyZW50UXVhbnRpdHkgPSBhY3RpdmVPcmRlcltpbmRleE9mT3JkZXJJdGVtXS5xdWFudGl0eTtcclxuICAgICBpZiAoY3VycmVudFF1YW50aXR5ICsgdmFyaWFudFF1YW50aXR5IDw9IHByb2R1Y3QudmFyaWFudC5zdG9jaykge1xyXG4gICAgICAgYWN0aXZlT3JkZXJbaW5kZXhPZk9yZGVySXRlbV0ucXVhbnRpdHkgPSBjdXJyZW50UXVhbnRpdHkgKyB2YXJpYW50UXVhbnRpdHk7XHJcbiAgICAgfVxyXG4gICB9IGVsc2Uge1xyXG4gICAgIGFjdGl2ZU9yZGVyLnB1c2goe1xyXG4gICAgICAgcHJvZHVjdDogcHJvZHVjdC5wcm9kdWN0LFxyXG4gICAgICAgdmFyaWFudDogcHJvZHVjdC52YXJpYW50LFxyXG4gICAgICAgcXVhbnRpdHk6IHZhcmlhbnRRdWFudGl0eSxcclxuICAgICAgIG9mZmVyczogcHJvZHVjdC5vZmZlcnNcclxuICAgICB9KTtcclxuICAgfVxyXG4gICAgc2V0T3JkZXIoYWN0aXZlT3JkZXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZVByb2R1Y3QgPSAoaXRlbU51bWJlcikgPT4ge1xyXG4gICAgICBjb25zdCBhY3RpdmVPcmRlciA9IFsuLi5vcmRlcl1cclxuICAgICAgYWN0aXZlT3JkZXIuc3BsaWNlKGl0ZW1OdW1iZXIsIDEpXHJcbiAgICAgIHNldE9yZGVyKGFjdGl2ZU9yZGVyKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8T3JkZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG9yZGVyLCBhZGRQcm9kdWN0VG9CYWcsIHJlbW92ZVByb2R1Y3QsIHNldE9yZGVyIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L09yZGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9