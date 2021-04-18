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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/order.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/buttons/PaymentButton.js":
/*!*********************************************!*\
  !*** ./components/buttons/PaymentButton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\buttons\\PaymentButton.js";




const PaymentButton = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const handleClick = async () => {
    router.push('/user/address');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleClick,
    variant: "contained",
    color: "primary",
    fullWidth: true,
    children: "Continuar la compra"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

PaymentButton.propTypes = {
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
PaymentButton.default = {
  order: []
};
/* harmony default export */ __webpack_exports__["default"] = (PaymentButton);

/***/ }),

/***/ "./components/tables/OrderResumeTable.js":
/*!***********************************************!*\
  !*** ./components/tables/OrderResumeTable.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/format-price */ "./utils/format-price.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _buttons_PaymentButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buttons/PaymentButton */ "./components/buttons/PaymentButton.js");


var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\tables\\OrderResumeTable.js";






const OrderResumeTable = ({
  order
}) => {
  const {
    0: total,
    1: setTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let subTotal = 0;

    for (let i = 0; i < order.length; i++) {
      subTotal += order[i].product.price * order[i].quantity;
    }

    setTotal(subTotal);
  }, [order]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "h5",
      align: "center",
      children: "TOTAL"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "h6",
      align: "center",
      children: Object(_utils_format_price__WEBPACK_IMPORTED_MODULE_3__["default"])('MXN', total)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_buttons_PaymentButton__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

OrderResumeTable.propTypes = {
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
OrderResumeTable.defaultProps = {
  order: []
};
/* harmony default export */ __webpack_exports__["default"] = (OrderResumeTable);

/***/ }),

/***/ "./components/tables/OrderTable.js":
/*!*****************************************!*\
  !*** ./components/tables/OrderTable.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\tables\\OrderTable.js";




const OrderTable = ({
  order,
  removeProduct
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableContainer"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      size: "small",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableHead"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "QUITAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "PRODUCTO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "COLOR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "TAMA\xD1O"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "PRECIO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "CANTIDAD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "FINAL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableBody"], {
        children: order.map((orderItem, itemNumber) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
              onClick: () => {},
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            children: orderItem.product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            children: orderItem.variant.color
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            children: orderItem.variant.size
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            children: orderItem.product.price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            children: orderItem.quantity
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            children: orderItem.product.price * orderItem.quantity
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 17
          }, undefined)]
        }, itemNumber, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

OrderTable.propTypes = {
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
OrderTable.defaultProps = {
  order: []
};
/* harmony default export */ __webpack_exports__["default"] = (OrderTable);

/***/ }),

/***/ "./context/OrderContext.tsx":
/*!**********************************!*\
  !*** ./context/OrderContext.tsx ***!
  \**********************************/
/*! exports provided: default, OrderProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderProvider", function() { return OrderProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\context\\OrderContext.tsx";

//: use this context whenever you want to access the OrderProvider
const OrderContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
/* harmony default export */ __webpack_exports__["default"] = (OrderContext);
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

  const countProducts = () => {
    //return order ? order.variants.length : 0;
    return 0;
  };

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

    setOrder(activeOrder); //saveOrder(activeOrder)
  };

  const removeProduct = itemNumber => {
    alert("BORRAR");
    const activeOrder = [...order];
    activeOrder.splice(itemNumber, 1);
    setOrder(activeOrder); //saveOrder(order)
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
      order,
      countProducts,
      addProductToBag,
      removeProduct
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, this);
}

;

/***/ }),

/***/ "./pages/order.tsx":
/*!*************************!*\
  !*** ./pages/order.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_tables_OrderResumeTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/tables/OrderResumeTable */ "./components/tables/OrderResumeTable.js");
/* harmony import */ var _components_tables_OrderTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/tables/OrderTable */ "./components/tables/OrderTable.js");
/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/OrderContext */ "./context/OrderContext.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\pages\\order.tsx";





function OrderPage() {
  const {
    order,
    removeProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      container: true,
      spacing: 5,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
          variant: "h4",
          align: "center",
          children: "BOLSA DE COMPRAS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), order.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
          variant: "h5",
          align: "center",
          children: "A\xFAn no tienes articulos en tu bolsa"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 14
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
          variant: "h5",
          align: "center",
          children: "Agrega algunos"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 14
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
          item: true,
          xs: 12,
          md: 9,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_tables_OrderTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
            order: order,
            removeProduct: removeProduct
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
          item: true,
          xs: 12,
          md: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_tables_OrderResumeTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
            order: order
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
;

/***/ }),

/***/ "./utils/format-price.ts":
/*!*******************************!*\
  !*** ./utils/format-price.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This function is used to format prices to make them look like:
 * US 300.90, MX 1589.90 or GB 12.00
 *
 * Currency codes (ISO 4217 currency codes) are passed as arguments depending on
 * i18n global context.
 */
const formatPrice = (currencyCode, price) => {
  //: force two decimals
  const priceWithDecimals = parseFloat(String(price)).toFixed(2);
  return `${currencyCode.toUpperCase()} ${priceWithDecimals}`;
};

/* harmony default export */ __webpack_exports__["default"] = (formatPrice);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL1BheW1lbnRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZXMvT3JkZXJSZXN1bWVUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlcy9PcmRlclRhYmxlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvT3JkZXJDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9vcmRlci50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybWF0LXByaWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUGF5bWVudEJ1dHRvbiIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsaWNrIiwicHVzaCIsInByb3BUeXBlcyIsIm9yZGVyIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJkZWZhdWx0IiwiT3JkZXJSZXN1bWVUYWJsZSIsInRvdGFsIiwic2V0VG90YWwiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN1YlRvdGFsIiwiaSIsImxlbmd0aCIsInByb2R1Y3QiLCJwcmljZSIsInF1YW50aXR5IiwiZm9ybWF0UHJpY2UiLCJkZWZhdWx0UHJvcHMiLCJPcmRlclRhYmxlIiwicmVtb3ZlUHJvZHVjdCIsIm1hcCIsIm9yZGVySXRlbSIsIml0ZW1OdW1iZXIiLCJuYW1lIiwidmFyaWFudCIsImNvbG9yIiwic2l6ZSIsIk9yZGVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJPcmRlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRPcmRlciIsImdldE9yZGVyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVycm9yIiwibyIsInNhdmVPcmRlciIsImNvdW50UHJvZHVjdHMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkUHJvZHVjdFRvQmFnIiwidmFyaWFudFF1YW50aXR5IiwiYWN0aXZlT3JkZXIiLCJpbmRleE9mT3JkZXJJdGVtIiwiZmluZEluZGV4IiwiaWQiLCJjdXJyZW50UXVhbnRpdHkiLCJzdG9jayIsIm9mZmVycyIsImFsZXJ0Iiwic3BsaWNlIiwiT3JkZXJQYWdlIiwidXNlQ29udGV4dCIsImN1cnJlbmN5Q29kZSIsInByaWNlV2l0aERlY2ltYWxzIiwicGFyc2VGbG9hdCIsIlN0cmluZyIsInRvRml4ZWQiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7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QUFDLHNEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLEVBQWY7QUFBbUIsWUFBRSxFQUFFLENBQXZCO0FBQUEsaUNBQ0UscUVBQUMsMkVBQUQ7QUFBa0IsaUJBQUssRUFBRWxCO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpEO0FBQUEsc0JBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF3QkQ7QUFBQSxDOzs7Ozs7Ozs7Ozs7QUNqQ0Q7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1lLFdBQXFFLEdBQUcsQ0FBQ3dDLFlBQUQsRUFBZTFDLEtBQWYsS0FBeUI7QUFDckc7QUFDQSxRQUFNMkMsaUJBQWlCLEdBQUdDLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDN0MsS0FBRCxDQUFQLENBQVYsQ0FBMEI4QyxPQUExQixDQUFrQyxDQUFsQyxDQUExQjtBQUVBLFNBQVEsR0FBRUosWUFBWSxDQUFDSyxXQUFiLEVBQTJCLElBQUdKLGlCQUFrQixFQUExRDtBQUNELENBTEQ7O0FBT2V6QywwRUFBZixFOzs7Ozs7Ozs7OztBQ2RBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL29yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9vcmRlci50c3hcIik7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5cclxuXHJcbmNvbnN0IFBheW1lbnRCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goJy91c2VyL2FkZHJlc3MnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGZ1bGxXaWR0aD5cclxuICAgICAgQ29udGludWFyIGxhIGNvbXByYVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcblBheW1lbnRCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIG9yZGVyOiBQcm9wVHlwZXMuYXJyYXlcclxufTtcclxuXHJcblBheW1lbnRCdXR0b24uZGVmYXVsdCA9IHtcclxuICBvcmRlcjogW11cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRCdXR0b247XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmb3JtYXRQcmljZSBmcm9tICdAL3V0aWxzL2Zvcm1hdC1wcmljZSc7XHJcbmltcG9ydCB7VHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBQYXltZW50QnV0dG9uIGZyb20gJy4uL2J1dHRvbnMvUGF5bWVudEJ1dHRvbic7XHJcblxyXG5jb25zdCBPcmRlclJlc3VtZVRhYmxlID0gKHsgb3JkZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBzdWJUb3RhbCA9IDBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc3ViVG90YWwgKz0gb3JkZXJbaV0ucHJvZHVjdC5wcmljZSAqIG9yZGVyW2ldLnF1YW50aXR5O1xyXG4gICAgfVxyXG4gICAgc2V0VG90YWwoc3ViVG90YWwpXHJcbiAgfSwgW29yZGVyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBhbGlnbj1cImNlbnRlclwiPlRPVEFMPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBhbGlnbj1cImNlbnRlclwiPntmb3JtYXRQcmljZSgnTVhOJyx0b3RhbCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8UGF5bWVudEJ1dHRvbiAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk9yZGVyUmVzdW1lVGFibGUucHJvcFR5cGVzID0ge1xyXG4gIG9yZGVyOiBQcm9wVHlwZXMuYXJyYXlcclxufTtcclxuXHJcbk9yZGVyUmVzdW1lVGFibGUuZGVmYXVsdFByb3BzID0ge1xyXG4gIG9yZGVyOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJSZXN1bWVUYWJsZTtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtUYWJsZUNvbnRhaW5lciwgVGFibGUsIFRhYmxlSGVhZCwgVGFibGVSb3csIFRhYmxlQm9keSwgVGFibGVDZWxsLCBJY29uQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEljb25EZWxldGUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSdcclxuXHJcbmNvbnN0IE9yZGVyVGFibGUgPSAoeyBvcmRlciwgcmVtb3ZlUHJvZHVjdH0pID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUYWJsZUNvbnRhaW5lcj5cclxuICAgICAgPFRhYmxlIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50ID0gXCJ0aFwiPlFVSVRBUjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudCA9IFwidGhcIj5QUk9EVUNUTzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudCA9IFwidGhcIj5DT0xPUjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudCA9IFwidGhcIj5UQU1Bw5FPPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50ID0gXCJ0aFwiPlBSRUNJTzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudCA9IFwidGhcIj5DQU5USURBRDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudCA9IFwidGhcIj5GSU5BTDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAge29yZGVyLm1hcCgob3JkZXJJdGVtLCBpdGVtTnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aXRlbU51bWJlcn0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKT0+e319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uRGVsZXRlLz5cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntvcmRlckl0ZW0ucHJvZHVjdC5uYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57b3JkZXJJdGVtLnZhcmlhbnQuY29sb3J9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntvcmRlckl0ZW0udmFyaWFudC5zaXplfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57b3JkZXJJdGVtLnByb2R1Y3QucHJpY2V9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntvcmRlckl0ZW0ucXVhbnRpdHl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntvcmRlckl0ZW0ucHJvZHVjdC5wcmljZSpvcmRlckl0ZW0ucXVhbnRpdHl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgIDwvVGFibGU+XHJcbiAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5PcmRlclRhYmxlLnByb3BUeXBlcyA9IHtcclxuICBvcmRlcjogUHJvcFR5cGVzLmFycmF5XHJcbn07XHJcblxyXG5PcmRlclRhYmxlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBvcmRlcjogW11cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyVGFibGU7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElQYXltZW50T3JkZXIgZnJvbSBcIkAvbW9kZWxzL0lQYXltZW50T3JkZXJcIjtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb250ZXh0IHdoZW5ldmVyIHlvdSB3YW50IHRvIGFjY2VzcyB0aGUgT3JkZXJQcm92aWRlclxyXG5jb25zdCBPcmRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJDb250ZXh0O1xyXG5cclxuZXhwb3J0IHsgT3JkZXJQcm92aWRlciB9O1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbXBvbmVudCBpbiBhbGwgdGhlIG90aGVyIGNvbXBvbmVudHMgd2hlcmUgeW91IHdhbnQgdG8gYWNjZXNzXHJcbi8vOiB0aGUgZ2xvYmFsIHN0YXRlIG9mIGEgdXNlciBvcmRlclxyXG5mdW5jdGlvbiBPcmRlclByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG5cclxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlPEFycmF5PElQYXltZW50T3JkZXI+PihbXSk7XHJcblxyXG4gIGNvbnN0IGdldE9yZGVyID0gKCk6IEFycmF5PElQYXltZW50T3JkZXI+ID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcicpKSB8fCBbXTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cclxuICAgIHJldHVybiBbXTtcclxuICB9O1xyXG5cclxuICBcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnN0IG8gPSBnZXRPcmRlcigpXHJcbiAgICBzZXRPcmRlcihvKVxyXG4gIH0sW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2F2ZU9yZGVyKG9yZGVyKVxyXG4gIH0sW29yZGVyXSlcclxuXHJcbiAgY29uc3QgY291bnRQcm9kdWN0cyA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgLy9yZXR1cm4gb3JkZXIgPyBvcmRlci52YXJpYW50cy5sZW5ndGggOiAwO1xyXG4gICAgcmV0dXJuIDBcclxuICB9O1xyXG5cclxuICBjb25zdCBzYXZlT3JkZXIgPSAob3JkZXI6IEFycmF5PElQYXltZW50T3JkZXI+KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXInLCBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFByb2R1Y3RUb0JhZyA9ICh2YXJpYW50UXVhbnRpdHk6bnVtYmVyLCBwcm9kdWN0OklQYXltZW50T3JkZXIpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZU9yZGVyID0gWy4uLm9yZGVyXVxyXG4gICAvLzogaWYgdGhlIHByb2R1Y3QgYW5kIHZhcmlhbnQgaXMgYWxyZWFkeSB0aGVyZVxyXG4gICBjb25zdCBpbmRleE9mT3JkZXJJdGVtID0gYWN0aXZlT3JkZXIuZmluZEluZGV4KChvcmRlckl0ZW06IElQYXltZW50T3JkZXIpID0+IG9yZGVySXRlbS52YXJpYW50LmlkID09PSBwcm9kdWN0LnZhcmlhbnQuaWQpO1xyXG4gICBpZiAoaW5kZXhPZk9yZGVySXRlbSAhPT0gLTEpIHtcclxuICAgICAvLzogdXBkYXRlIHF1YW50aXR5XHJcbiAgICAgY29uc3QgY3VycmVudFF1YW50aXR5ID0gYWN0aXZlT3JkZXJbaW5kZXhPZk9yZGVySXRlbV0ucXVhbnRpdHk7XHJcbiAgICAgaWYgKGN1cnJlbnRRdWFudGl0eSArIHZhcmlhbnRRdWFudGl0eSA8PSBwcm9kdWN0LnZhcmlhbnQuc3RvY2spIHtcclxuICAgICAgIGFjdGl2ZU9yZGVyW2luZGV4T2ZPcmRlckl0ZW1dLnF1YW50aXR5ID0gY3VycmVudFF1YW50aXR5ICsgdmFyaWFudFF1YW50aXR5O1xyXG4gICAgIH1cclxuICAgfSBlbHNlIHtcclxuICAgICBhY3RpdmVPcmRlci5wdXNoKHtcclxuICAgICAgIHByb2R1Y3Q6IHByb2R1Y3QucHJvZHVjdCxcclxuICAgICAgIHZhcmlhbnQ6IHByb2R1Y3QudmFyaWFudCxcclxuICAgICAgIHF1YW50aXR5OiB2YXJpYW50UXVhbnRpdHksXHJcbiAgICAgICBvZmZlcnM6IHByb2R1Y3Qub2ZmZXJzXHJcbiAgICAgfSk7XHJcbiAgIH1cclxuICAgIHNldE9yZGVyKGFjdGl2ZU9yZGVyKTtcclxuICAgIC8vc2F2ZU9yZGVyKGFjdGl2ZU9yZGVyKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZVByb2R1Y3QgPSAoaXRlbU51bWJlcikgPT4ge1xyXG4gICAgICBhbGVydChcIkJPUlJBUlwiKVxyXG4gICAgICBjb25zdCBhY3RpdmVPcmRlciA9IFsuLi5vcmRlcl1cclxuICAgICAgYWN0aXZlT3JkZXIuc3BsaWNlKGl0ZW1OdW1iZXIsIDEpXHJcbiAgICAgIHNldE9yZGVyKGFjdGl2ZU9yZGVyKVxyXG4gICAgICAvL3NhdmVPcmRlcihvcmRlcilcclxuICB9O1xyXG5cclxuXHJcbiAgLypcclxuXHJcbiAgXHJcblxyXG4gIGNvbnN0IGFkZE9yZGVySXRlbSA9IChpdGVtOiBJUGF5bWVudE9yZGVyKSA9PiB7XHJcbiAgfTtcclxuXHJcbiAgLy86IHVzZSB0aGlzIGZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBpdGVtIHRvIHRoZSBvcmRlciBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgY29uc3Qgc2V0T3JkZXJJdGVtSW5MUyA9IChhY3RpdmVPcmRlcjogQXJyYXk8SVBheW1lbnRPcmRlcj4pID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlckl0ZW1zJywgSlNPTi5zdHJpbmdpZnkoYWN0aXZlT3JkZXIpKTtcclxuICB9O1xyXG5cclxuICAvLzogdXNlIHRoaXMgZnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50IG9yZGVyIG9iamVjdCBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICBjb25zdCBnZXRPcmRlckl0ZW1Gcm9tTFMgPSAoKTogQXJyYXk8SVBheW1lbnRPcmRlcj4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVySXRlbXMnKSkgfHwgW107XHJcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcigoX2Vycm9yIGFzIFN5bnRheEVycm9yKS5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTsqL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE9yZGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBvcmRlciwgY291bnRQcm9kdWN0cywgYWRkUHJvZHVjdFRvQmFnLCByZW1vdmVQcm9kdWN0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L09yZGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgT3JkZXJSZXN1bWVUYWJsZSBmcm9tICdAL2NvbXBvbmVudHMvdGFibGVzL09yZGVyUmVzdW1lVGFibGUnO1xyXG5pbXBvcnQgT3JkZXJUYWJsZSBmcm9tICdAL2NvbXBvbmVudHMvdGFibGVzL09yZGVyVGFibGUnO1xyXG5pbXBvcnQgT3JkZXJDb250ZXh0IGZyb20gJ0AvY29udGV4dC9PcmRlckNvbnRleHQnO1xyXG5pbXBvcnQge1R5cG9ncmFwaHksIEdyaWR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3JkZXJQYWdlKCkge1xyXG4gIGNvbnN0IHsgb3JkZXIsIHJlbW92ZVByb2R1Y3QgfSA9IHVzZUNvbnRleHQoT3JkZXJDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fT5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBhbGlnbj1cImNlbnRlclwiPkJPTFNBIERFIENPTVBSQVM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIHtvcmRlci5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgYWxpZ249XCJjZW50ZXJcIj5Bw7puIG5vIHRpZW5lcyBhcnRpY3Vsb3MgZW4gdHUgYm9sc2E8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBhbGlnbj1cImNlbnRlclwiPkFncmVnYSBhbGd1bm9zPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDpcclxuICAgICAgICAgPD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OX0+XHJcbiAgICAgICAgICAgIDxPcmRlclRhYmxlIG9yZGVyPXtvcmRlcn0gcmVtb3ZlUHJvZHVjdD17cmVtb3ZlUHJvZHVjdH0gLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30+XHJcbiAgICAgICAgICAgIDxPcmRlclJlc3VtZVRhYmxlIG9yZGVyPXtvcmRlcn0gLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCIvKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGZvcm1hdCBwcmljZXMgdG8gbWFrZSB0aGVtIGxvb2sgbGlrZTpcclxuICogVVMgMzAwLjkwLCBNWCAxNTg5LjkwIG9yIEdCIDEyLjAwXHJcbiAqXHJcbiAqIEN1cnJlbmN5IGNvZGVzIChJU08gNDIxNyBjdXJyZW5jeSBjb2RlcykgYXJlIHBhc3NlZCBhcyBhcmd1bWVudHMgZGVwZW5kaW5nIG9uXHJcbiAqIGkxOG4gZ2xvYmFsIGNvbnRleHQuXHJcbiAqL1xyXG5jb25zdCBmb3JtYXRQcmljZTogKGN1cnJlbmN5Q29kZTogc3RyaW5nLCBwcmljZTogbnVtYmVyIHwgc3RyaW5nKSA9PiBzdHJpbmcgPSAoY3VycmVuY3lDb2RlLCBwcmljZSkgPT4ge1xyXG4gIC8vOiBmb3JjZSB0d28gZGVjaW1hbHNcclxuICBjb25zdCBwcmljZVdpdGhEZWNpbWFscyA9IHBhcnNlRmxvYXQoU3RyaW5nKHByaWNlKSkudG9GaXhlZCgyKTtcclxuXHJcbiAgcmV0dXJuIGAke2N1cnJlbmN5Q29kZS50b1VwcGVyQ2FzZSgpfSAke3ByaWNlV2l0aERlY2ltYWxzfWA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRQcmljZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==