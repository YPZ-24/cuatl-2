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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9PcmRlckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIk9yZGVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJPcmRlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsIm9yZGVyIiwic2V0T3JkZXIiLCJnZXRPcmRlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsInVzZUVmZmVjdCIsIm8iLCJjb3VudFByb2R1Y3RzIiwic2F2ZU9yZGVyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFkZFByb2R1Y3RUb0JhZyIsInZhcmlhbnRRdWFudGl0eSIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlT3JkZXIiLCJpbmRleE9mT3JkZXJJdGVtIiwiZmluZEluZGV4Iiwib3JkZXJJdGVtIiwidmFyaWFudCIsImlkIiwiY3VycmVudFF1YW50aXR5IiwicXVhbnRpdHkiLCJzdG9jayIsInB1c2giLCJvZmZlcnMiLCJyZW1vdmVQcm9kdWN0IiwiaXRlbU51bWJlciIsImFsZXJ0Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0EsSUFBTUEsWUFBWSxnQkFBR0MsMkRBQWEsQ0FBQyxJQUFELENBQWxDO0FBRWVELDJFQUFmO0NBSUE7QUFDQTs7QUFDQSxTQUFTRSxhQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUVUQyxzREFBUSxFQUZDO0FBQUEsTUFFNUJDLEtBRjRCO0FBQUEsTUFFckJDLFFBRnFCOztBQUluQyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUE0QjtBQUMzQyxRQUFJO0FBQ0YsYUFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFYLEtBQTZDLEVBQXBEO0FBQ0QsS0FGRCxDQUVFLE9BQU9DLEtBQVAsRUFBYyxDQUFHOztBQUNuQixXQUFPLEVBQVA7QUFDRCxHQUxEOztBQVFBQyx5REFBUyxDQUFDLFlBQUk7QUFDWixRQUFNQyxDQUFDLEdBQUdQLFFBQVEsRUFBbEI7QUFDQUQsWUFBUSxDQUFDUSxDQUFELENBQVI7QUFDRCxHQUhRLEVBR1AsRUFITyxDQUFUOztBQUtBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBYztBQUNsQztBQUNBLFdBQU8sQ0FBUDtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1gsS0FBRCxFQUFpQztBQUNqREssZ0JBQVksQ0FBQ08sT0FBYixDQUFxQixPQUFyQixFQUE4QlQsSUFBSSxDQUFDVSxTQUFMLENBQWViLEtBQWYsQ0FBOUI7QUFDRCxHQUZEOztBQUlBLE1BQU1jLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsZUFBRCxFQUF5QkMsT0FBekIsRUFBbUQ7QUFDekVDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsS0FBWjtBQUNBO0FBQ0EsUUFBTW1CLFdBQVcsR0FBR25CLEtBQXBCO0FBQ0EsYUFKeUUsQ0FLMUU7O0FBQ0EsUUFBTW9CLGdCQUFnQixHQUFHRCxXQUFXLENBQUNFLFNBQVosQ0FBc0IsVUFBQ0MsU0FBRDtBQUFBLGFBQThCQSxTQUFTLENBQUNDLE9BQVYsQ0FBa0JDLEVBQWxCLEtBQXlCUixPQUFPLENBQUNPLE9BQVIsQ0FBZ0JDLEVBQXZFO0FBQUEsS0FBdEIsQ0FBekI7QUFDQTs7QUFDQSxRQUFJSixnQkFBZ0IsS0FBSyxDQUFDLENBQTFCLEVBQTZCO0FBQzNCO0FBQ0EsVUFBTUssZUFBZSxHQUFHTixXQUFXLENBQUNDLGdCQUFELENBQVgsQ0FBOEJNLFFBQXREOztBQUNBLFVBQUlELGVBQWUsR0FBR1YsZUFBbEIsSUFBcUNDLE9BQU8sQ0FBQ08sT0FBUixDQUFnQkksS0FBekQsRUFBZ0U7QUFDOURSLG1CQUFXLENBQUNDLGdCQUFELENBQVgsQ0FBOEJNLFFBQTlCLEdBQXlDRCxlQUFlLEdBQUdWLGVBQTNEO0FBQ0Q7O0FBQ0Q7QUFDRCxLQVBELE1BT087QUFDTEksaUJBQVcsQ0FBQ1MsSUFBWixDQUFpQjtBQUNmWixlQUFPLEVBQUVBLE9BQU8sQ0FBQ0EsT0FERjtBQUVmTyxlQUFPLEVBQUVQLE9BQU8sQ0FBQ08sT0FGRjtBQUdmRyxnQkFBUSxFQUFFWCxlQUhLO0FBSWZjLGNBQU0sRUFBRWIsT0FBTyxDQUFDYTtBQUpELE9BQWpCO0FBTUE7QUFDRDs7QUFDRFosV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWWxCLEtBQVo7QUFDQWlCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQVosRUEzQjBFLENBNkJ6RTtBQUNBO0FBQ0QsR0EvQkQ7O0FBaUNBLE1BQU1XLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsVUFBRCxFQUFnQjtBQUNsQ0MsU0FBSyxDQUFDLFFBQUQsQ0FBTDtBQUNBaEMsU0FBSyxDQUFDaUMsTUFBTixDQUFhRixVQUFiLEVBQXlCLENBQXpCO0FBQ0E5QixZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBVyxhQUFTLENBQUNYLEtBQUQsQ0FBVDtBQUNILEdBTEQ7QUFRQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNRSxzQkFDRSxxRUFBQyxZQUFELENBQWMsUUFBZDtBQUF1QixTQUFLLEVBQUU7QUFBRUEsV0FBSyxFQUFMQSxLQUFGO0FBQVNVLG1CQUFhLEVBQWJBLGFBQVQ7QUFBd0JJLHFCQUFlLEVBQWZBLGVBQXhCO0FBQXlDZ0IsbUJBQWEsRUFBYkE7QUFBekMsS0FBOUI7QUFBQSxjQUNHaEM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0E5RlFELGE7O0tBQUFBLGE7QUE4RlIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWEzOTk1NWZlNTFkODU3YjlmMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElQYXltZW50T3JkZXIgZnJvbSBcIkAvbW9kZWxzL0lQYXltZW50T3JkZXJcIjtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb250ZXh0IHdoZW5ldmVyIHlvdSB3YW50IHRvIGFjY2VzcyB0aGUgT3JkZXJQcm92aWRlclxyXG5jb25zdCBPcmRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJDb250ZXh0O1xyXG5cclxuZXhwb3J0IHsgT3JkZXJQcm92aWRlciB9O1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbXBvbmVudCBpbiBhbGwgdGhlIG90aGVyIGNvbXBvbmVudHMgd2hlcmUgeW91IHdhbnQgdG8gYWNjZXNzXHJcbi8vOiB0aGUgZ2xvYmFsIHN0YXRlIG9mIGEgdXNlciBvcmRlclxyXG5mdW5jdGlvbiBPcmRlclByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG5cclxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlPEFycmF5PElQYXltZW50T3JkZXI+PigpO1xyXG5cclxuICBjb25zdCBnZXRPcmRlciA9ICgpOiBBcnJheTxJUGF5bWVudE9yZGVyPiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXInKSkgfHwgW107XHJcbiAgICB9IGNhdGNoIChlcnJvcikgeyB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfTtcclxuXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zdCBvID0gZ2V0T3JkZXIoKVxyXG4gICAgc2V0T3JkZXIobylcclxuICB9LFtdKVxyXG5cclxuICBjb25zdCBjb3VudFByb2R1Y3RzID0gKCk6IG51bWJlciA9PiB7XHJcbiAgICAvL3JldHVybiBvcmRlciA/IG9yZGVyLnZhcmlhbnRzLmxlbmd0aCA6IDA7XHJcbiAgICByZXR1cm4gMFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNhdmVPcmRlciA9IChvcmRlcjogQXJyYXk8SVBheW1lbnRPcmRlcj4pID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlcicsIEpTT04uc3RyaW5naWZ5KG9yZGVyKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkUHJvZHVjdFRvQmFnID0gKHZhcmlhbnRRdWFudGl0eTpudW1iZXIsIHByb2R1Y3Q6SVBheW1lbnRPcmRlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2cob3JkZXIpXHJcbiAgICBkZWJ1Z2dlclxyXG4gICAgY29uc3QgYWN0aXZlT3JkZXIgPSBvcmRlclxyXG4gICAgZGVidWdnZXJcclxuICAgLy86IGlmIHRoZSBwcm9kdWN0IGFuZCB2YXJpYW50IGlzIGFscmVhZHkgdGhlcmVcclxuICAgY29uc3QgaW5kZXhPZk9yZGVySXRlbSA9IGFjdGl2ZU9yZGVyLmZpbmRJbmRleCgob3JkZXJJdGVtOiBJUGF5bWVudE9yZGVyKSA9PiBvcmRlckl0ZW0udmFyaWFudC5pZCA9PT0gcHJvZHVjdC52YXJpYW50LmlkKTtcclxuICAgZGVidWdnZXJcclxuICAgaWYgKGluZGV4T2ZPcmRlckl0ZW0gIT09IC0xKSB7XHJcbiAgICAgLy86IHVwZGF0ZSBxdWFudGl0eVxyXG4gICAgIGNvbnN0IGN1cnJlbnRRdWFudGl0eSA9IGFjdGl2ZU9yZGVyW2luZGV4T2ZPcmRlckl0ZW1dLnF1YW50aXR5O1xyXG4gICAgIGlmIChjdXJyZW50UXVhbnRpdHkgKyB2YXJpYW50UXVhbnRpdHkgPD0gcHJvZHVjdC52YXJpYW50LnN0b2NrKSB7XHJcbiAgICAgICBhY3RpdmVPcmRlcltpbmRleE9mT3JkZXJJdGVtXS5xdWFudGl0eSA9IGN1cnJlbnRRdWFudGl0eSArIHZhcmlhbnRRdWFudGl0eTtcclxuICAgICB9XHJcbiAgICAgZGVidWdnZXJcclxuICAgfSBlbHNlIHtcclxuICAgICBhY3RpdmVPcmRlci5wdXNoKHtcclxuICAgICAgIHByb2R1Y3Q6IHByb2R1Y3QucHJvZHVjdCxcclxuICAgICAgIHZhcmlhbnQ6IHByb2R1Y3QudmFyaWFudCxcclxuICAgICAgIHF1YW50aXR5OiB2YXJpYW50UXVhbnRpdHksXHJcbiAgICAgICBvZmZlcnM6IHByb2R1Y3Qub2ZmZXJzXHJcbiAgICAgfSk7XHJcbiAgICAgZGVidWdnZXJcclxuICAgfVxyXG4gICBjb25zb2xlLmxvZyhcIm9yZGVyXCIpXHJcbiAgIGNvbnNvbGUubG9nKG9yZGVyKVxyXG4gICBjb25zb2xlLmxvZyhcImFjdGl2ZU9yZGVyXCIpXHJcbiAgIGNvbnNvbGUubG9nKGFjdGl2ZU9yZGVyKVxyXG5cclxuICAgIC8vc2V0T3JkZXIoYWN0aXZlT3JkZXIpO1xyXG4gICAgLy9zYXZlT3JkZXIoYWN0aXZlT3JkZXIpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlUHJvZHVjdCA9IChpdGVtTnVtYmVyKSA9PiB7XHJcbiAgICAgIGFsZXJ0KFwiQk9SUkFSXCIpXHJcbiAgICAgIG9yZGVyLnNwbGljZShpdGVtTnVtYmVyLCAxKVxyXG4gICAgICBzZXRPcmRlcihvcmRlcilcclxuICAgICAgc2F2ZU9yZGVyKG9yZGVyKVxyXG4gIH07XHJcblxyXG5cclxuICAvKlxyXG5cclxuICBcclxuXHJcbiAgY29uc3QgYWRkT3JkZXJJdGVtID0gKGl0ZW06IElQYXltZW50T3JkZXIpID0+IHtcclxuICB9O1xyXG5cclxuICAvLzogdXNlIHRoaXMgZnVuY3Rpb24gdG8gYWRkIGEgbmV3IGl0ZW0gdG8gdGhlIG9yZGVyIGluIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBzZXRPcmRlckl0ZW1JbkxTID0gKGFjdGl2ZU9yZGVyOiBBcnJheTxJUGF5bWVudE9yZGVyPikgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29yZGVySXRlbXMnLCBKU09OLnN0cmluZ2lmeShhY3RpdmVPcmRlcikpO1xyXG4gIH07XHJcblxyXG4gIC8vOiB1c2UgdGhpcyBmdW5jdGlvbiB0byBnZXQgdGhlIGN1cnJlbnQgb3JkZXIgb2JqZWN0IGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gIGNvbnN0IGdldE9yZGVySXRlbUZyb21MUyA9ICgpOiBBcnJheTxJUGF5bWVudE9yZGVyPiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXJJdGVtcycpKSB8fCBbXTtcclxuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKChfZXJyb3IgYXMgU3ludGF4RXJyb3IpLm1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9OyovXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8T3JkZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG9yZGVyLCBjb3VudFByb2R1Y3RzLCBhZGRQcm9kdWN0VG9CYWcsIHJlbW92ZVByb2R1Y3QgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvT3JkZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=