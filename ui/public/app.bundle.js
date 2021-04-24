/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/App.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"./node_modules/babel-polyfill/lib/index.js\");\n\n__webpack_require__(/*! whatwg-fetch */ \"./node_modules/whatwg-fetch/fetch.js\");\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\"));\n\nvar _ProductList = _interopRequireDefault(__webpack_require__(/*! ./ProductList.jsx */ \"./src/ProductList.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint linebreak-style: [\"error\", \"windows\"] */\nvar element = /*#__PURE__*/_react.default.createElement(_ProductList.default, null);\n\n_reactDom.default.render(element, document.getElementById('contents'));\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ }),

/***/ "./src/ProductAdd.jsx":
/*!****************************!*\
  !*** ./src/ProductAdd.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar buttonStyle = {\n  color: 'black',\n  background: 'rgb(242, 245, 244)',\n  alignContent: 'center'\n};\n\nvar ProductAdd = /*#__PURE__*/function (_React$Component) {\n  _inheritsLoose(ProductAdd, _React$Component);\n\n  function ProductAdd() {\n    var _this;\n\n    _this = _React$Component.call(this) || this;\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  var _proto = ProductAdd.prototype;\n\n  _proto.handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    var form = document.forms.productAdd;\n    var product = {\n      name: form.productName.value,\n      pricePerUnit: form.pricePerUnit.value.substr(1),\n      category: form.category.value,\n      imageUrl: form.imageUrl.value\n    };\n    var createProduct = this.props.createProduct;\n    createProduct(product);\n    form.productName.value = '';\n    form.pricePerUnit.value = '$';\n    form.category.value = '';\n    form.imageUrl.value = '';\n  };\n\n  _proto.render = function render() {\n    return /*#__PURE__*/_react.default.createElement(\"form\", {\n      name: \"productAdd\",\n      onSubmit: this.handleSubmit\n    }, /*#__PURE__*/_react.default.createElement(\"div\", {\n      className: \"formContainer\"\n    }, /*#__PURE__*/_react.default.createElement(\"div\", {\n      className: \"formCol\"\n    }, \"Category:\", /*#__PURE__*/_react.default.createElement(\"br\", null), /*#__PURE__*/_react.default.createElement(\"select\", {\n      id: \"menu\",\n      name: \"category\"\n    }, /*#__PURE__*/_react.default.createElement(\"option\", {\n      value: \"Shirts\"\n    }, \"Shirts\"), /*#__PURE__*/_react.default.createElement(\"option\", {\n      value: \"Jeans\"\n    }, \"Jeans\"), /*#__PURE__*/_react.default.createElement(\"option\", {\n      value: \"Jackets\"\n    }, \"Jackets\"), /*#__PURE__*/_react.default.createElement(\"option\", {\n      value: \"Sweaters\"\n    }, \"Sweaters\"), /*#__PURE__*/_react.default.createElement(\"option\", {\n      value: \"Accessories\"\n    }, \"Accessories\")), /*#__PURE__*/_react.default.createElement(\"br\", null), /*#__PURE__*/_react.default.createElement(\"br\", null), \"Product Name:\", /*#__PURE__*/_react.default.createElement(\"br\", null), /*#__PURE__*/_react.default.createElement(\"input\", {\n      type: \"text\",\n      name: \"productName\"\n    }), /*#__PURE__*/_react.default.createElement(\"br\", null)), \"\\xA0\\xA0\", /*#__PURE__*/_react.default.createElement(\"div\", {\n      className: \"formCol\"\n    }, \"Price Per Unit:\", /*#__PURE__*/_react.default.createElement(\"br\", null), /*#__PURE__*/_react.default.createElement(\"input\", {\n      type: \"text\",\n      name: \"pricePerUnit\",\n      defaultValue: \"$\"\n    }), /*#__PURE__*/_react.default.createElement(\"br\", null), /*#__PURE__*/_react.default.createElement(\"br\", null), \"Image URL:\", /*#__PURE__*/_react.default.createElement(\"br\", null), /*#__PURE__*/_react.default.createElement(\"input\", {\n      type: \"text\",\n      name: \"imageUrl\"\n    }), /*#__PURE__*/_react.default.createElement(\"br\", null))), /*#__PURE__*/_react.default.createElement(\"br\", null), /*#__PURE__*/_react.default.createElement(\"button\", {\n      style: buttonStyle,\n      type: \"submit\"\n    }, \"Add Product\"));\n  };\n\n  return ProductAdd;\n}(_react.default.Component);\n\nexports.default = ProductAdd;\n\n//# sourceURL=webpack:///./src/ProductAdd.jsx?");

/***/ }),

/***/ "./src/ProductList.jsx":
/*!*****************************!*\
  !*** ./src/ProductList.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _ProductTable = _interopRequireDefault(__webpack_require__(/*! ./ProductTable.jsx */ \"./src/ProductTable.jsx\"));\n\nvar _ProductAdd = _interopRequireDefault(__webpack_require__(/*! ./ProductAdd.jsx */ \"./src/ProductAdd.jsx\"));\n\nvar _graphQLFetch = _interopRequireDefault(__webpack_require__(/*! ./graphQLFetch.js */ \"./src/graphQLFetch.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar ProductList = /*#__PURE__*/function (_React$Component) {\n  _inheritsLoose(ProductList, _React$Component);\n\n  function ProductList() {\n    var _this;\n\n    _this = _React$Component.call(this) || this;\n    _this.state = {\n      products: []\n    };\n    _this.createProduct = _this.createProduct.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  var _proto = ProductList.prototype;\n\n  _proto.componentDidMount = function componentDidMount() {\n    this.loadData();\n  };\n\n  _proto.loadData = /*#__PURE__*/function () {\n    var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var query, data;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              query = \"query {\\n              productList {\\n                id\\n                name\\n                pricePerUnit\\n                category\\n                imageUrl\\n              }\\n            }\";\n              _context.next = 3;\n              return (0, _graphQLFetch.default)(query);\n\n            case 3:\n              data = _context.sent;\n\n              if (data) {\n                this.setState({\n                  products: data.productList\n                });\n              }\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function loadData() {\n      return _loadData.apply(this, arguments);\n    }\n\n    return loadData;\n  }();\n\n  _proto.createProduct = /*#__PURE__*/function () {\n    var _createProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(product) {\n      var query, data;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              query = \"mutation addProduct($product: ProductInputs!) {\\n              addProduct(product: $product) {\\n                  id\\n              }\\n            }\";\n              _context2.next = 3;\n              return (0, _graphQLFetch.default)(query, {\n                product: product\n              });\n\n            case 3:\n              data = _context2.sent;\n\n              if (data) {\n                this.loadData();\n              }\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, this);\n    }));\n\n    function createProduct(_x) {\n      return _createProduct.apply(this, arguments);\n    }\n\n    return createProduct;\n  }();\n\n  _proto.render = function render() {\n    var products = this.state.products;\n    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(\"h1\", null, \"My Company Inventory\"), /*#__PURE__*/_react.default.createElement(\"p\", null, \"Showing all available products\"), /*#__PURE__*/_react.default.createElement(\"hr\", null), /*#__PURE__*/_react.default.createElement(_ProductTable.default, {\n      products: products\n    }), /*#__PURE__*/_react.default.createElement(\"br\", null), /*#__PURE__*/_react.default.createElement(\"p\", null, \"Add a new product to inventory\"), /*#__PURE__*/_react.default.createElement(\"hr\", null), /*#__PURE__*/_react.default.createElement(_ProductAdd.default, {\n      createProduct: this.createProduct\n    }));\n  };\n\n  return ProductList;\n}(_react.default.Component);\n\nexports.default = ProductList;\n\n//# sourceURL=webpack:///./src/ProductList.jsx?");

/***/ }),

/***/ "./src/ProductTable.jsx":
/*!******************************!*\
  !*** ./src/ProductTable.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = ProductTable;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction ProductRow(_ref) {\n  var product = _ref.product;\n  return /*#__PURE__*/_react.default.createElement(\"tr\", null, /*#__PURE__*/_react.default.createElement(\"td\", null, product.name), /*#__PURE__*/_react.default.createElement(\"td\", null, \"$\", product.pricePerUnit), /*#__PURE__*/_react.default.createElement(\"td\", null, product.category), /*#__PURE__*/_react.default.createElement(\"td\", null, /*#__PURE__*/_react.default.createElement(\"a\", {\n    href: product.imageUrl,\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, \"View\")));\n}\n\nfunction ProductTable(_ref2) {\n  var products = _ref2.products;\n  var productRows = products.map(function (product) {\n    return /*#__PURE__*/_react.default.createElement(ProductRow, {\n      key: product.id,\n      product: product\n    });\n  });\n  return /*#__PURE__*/_react.default.createElement(\"table\", {\n    className: \"bordered-table\"\n  }, /*#__PURE__*/_react.default.createElement(\"thead\", null, /*#__PURE__*/_react.default.createElement(\"tr\", null, /*#__PURE__*/_react.default.createElement(\"th\", null, \"Product Name\"), /*#__PURE__*/_react.default.createElement(\"th\", null, \"Price\"), /*#__PURE__*/_react.default.createElement(\"th\", null, \"Category\"), /*#__PURE__*/_react.default.createElement(\"th\", null, \"Image\"))), /*#__PURE__*/_react.default.createElement(\"tbody\", null, productRows));\n}\n\n//# sourceURL=webpack:///./src/ProductTable.jsx?");

/***/ }),

/***/ "./src/graphQLFetch.js":
/*!*****************************!*\
  !*** ./src/graphQLFetch.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = graphQLFetch;\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n/* eslint linebreak-style: [\"error\", \"windows\"] */\n\n/* eslint \"no-alert\": \"off\" */\nfunction graphQLFetch(_x, _x2) {\n  return _graphQLFetch.apply(this, arguments);\n}\n\nfunction _graphQLFetch() {\n  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query, variables) {\n    var response, body, result, error, details;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (variables === void 0) {\n              variables = {};\n            }\n\n            _context.prev = 1;\n            _context.next = 4;\n            return fetch(window.ENV.UI_API_ENDPOINT, {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify({\n                query: query,\n                variables: variables\n              })\n            });\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.text();\n\n          case 7:\n            body = _context.sent;\n            result = JSON.parse(body);\n\n            if (result.errors) {\n              error = result.errors[0];\n\n              if (error.extensions.code === 'BAD_USER_INPUT') {\n                details = error.extensions.exception.errors.join('\\n ');\n                alert(error.message + \":\\n \" + details);\n              } else {\n                alert(error.extensions.code + \": \" + error.message);\n              }\n            }\n\n            return _context.abrupt(\"return\", result.data);\n\n          case 13:\n            _context.prev = 13;\n            _context.t0 = _context[\"catch\"](1);\n            alert(\"Error in sending data to server: \" + _context.t0.message);\n            return _context.abrupt(\"return\", null);\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 13]]);\n  }));\n  return _graphQLFetch.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./src/graphQLFetch.js?");

/***/ })

/******/ });