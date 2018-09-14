/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n\nvar _init = __webpack_require__(/*! ./js/init */ \"./src/js/init.js\");\n\nvar _init2 = _interopRequireDefault(_init);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar printjs = _init2.default.init;\n\nif (typeof window !== 'undefined') {\n  window.printJS = printjs;\n}\n\nexports.default = printjs;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/browser.js":
/*!***************************!*\
  !*** ./src/js/browser.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Browser = {\n  // Firefox 1.0+\n  isFirefox: function isFirefox() {\n    return typeof InstallTrigger !== 'undefined';\n  },\n  // Internet Explorer 6-11\n  isIE: function isIE() {\n    return navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode;\n  },\n  // Edge 20+\n  isEdge: function isEdge() {\n    return !Browser.isIE() && !!window.StyleMedia;\n  },\n  // Chrome 1+\n  isChrome: function isChrome() {\n    return !!window.chrome && !!window.chrome.webstore;\n  },\n  // At least Safari 3+: \"[object HTMLElementConstructor]\"\n  isSafari: function isSafari() {\n    return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || navigator.userAgent.toLowerCase().indexOf('safari') !== -1;\n  }\n};\n\nexports.default = Browser;\n\n//# sourceURL=webpack:///./src/js/browser.js?");

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addWrapper = addWrapper;\nexports.capitalizePrint = capitalizePrint;\nexports.collectStyles = collectStyles;\nexports.loopNodesCollectStyles = loopNodesCollectStyles;\nexports.addHeader = addHeader;\nfunction addWrapper(htmlData, params) {\n  var bodyStyle = 'font-family:' + params.font + ' !important; font-size: ' + params.font_size + ' !important; width:100%;';\n  return '<div style=\"' + bodyStyle + '\">' + htmlData + '</div>';\n}\n\nfunction capitalizePrint(obj) {\n  return obj.charAt(0).toUpperCase() + obj.slice(1);\n}\n\nfunction collectStyles(element, params) {\n  var win = document.defaultView || window;\n\n  // String variable to hold styling for each element\n  var elementStyle = '';\n\n  // Loop over computed styles\n  var styles = win.getComputedStyle(element, '');\n\n  Object.keys(styles).map(function (key) {\n    // Check if style should be processed\n    if (params.targetStyles.indexOf('*') !== -1 || params.targetStyle.indexOf(styles[key]) !== -1 || targetStylesMatch(params.targetStyles, styles[key])) {\n      if (styles.getPropertyValue(styles[key])) elementStyle += styles[key] + ':' + styles.getPropertyValue(styles[key]) + ';';\n    }\n  });\n\n  // Print friendly defaults\n  elementStyle += 'max-width: ' + params.maxWidth + 'px !important;' + params.font_size + ' !important;';\n\n  return elementStyle;\n}\n\nfunction targetStylesMatch(styles, value) {\n  for (var i = 0; i < styles.length; i++) {\n    if (value.indexOf(styles[i]) !== -1) return true;\n  }\n  return false;\n}\n\nfunction loopNodesCollectStyles(elements, params) {\n  for (var n = 0; n < elements.length; n++) {\n    var currentElement = elements[n];\n\n    // Check if we are skiping this element\n    if (params.ignoreElements.indexOf(currentElement.getAttribute('id')) !== -1) {\n      currentElement.parentNode.removeChild(currentElement);\n      continue;\n    }\n\n    // Form Printing - check if is element Input\n    var tag = currentElement.tagName;\n    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {\n      // Save style to variable\n      var textStyle = collectStyles(currentElement, params);\n\n      // Remove INPUT element and insert a text node\n      var parent = currentElement.parentNode;\n\n      // Get text value\n      var textNode = tag === 'SELECT' ? document.createTextNode(currentElement.options[currentElement.selectedIndex].text) : document.createTextNode(currentElement.value);\n\n      // Create text element\n      var textElement = document.createElement('div');\n      textElement.appendChild(textNode);\n\n      // Add style to text\n      textElement.setAttribute('style', textStyle);\n\n      // Add text\n      parent.appendChild(textElement);\n\n      // Remove input\n      parent.removeChild(currentElement);\n    } else {\n      // Get all styling for print element\n      currentElement.setAttribute('style', collectStyles(currentElement, params));\n    }\n\n    // Check if more elements in tree\n    var children = currentElement.children;\n\n    if (children && children.length) {\n      loopNodesCollectStyles(children, params);\n    }\n  }\n}\n\nfunction addHeader(printElement, header, headerStyle) {\n  // Create header element\n  var headerElement = document.createElement('h1');\n\n  // Create header text node\n  var headerNode = document.createTextNode(header);\n\n  // Build and style\n  headerElement.appendChild(headerNode);\n  headerElement.setAttribute('style', headerStyle);\n\n  printElement.insertBefore(headerElement, printElement.childNodes[0]);\n}\n\n//# sourceURL=webpack:///./src/js/functions.js?");

/***/ }),

/***/ "./src/js/html.js":
/*!************************!*\
  !*** ./src/js/html.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\nvar _print = __webpack_require__(/*! ./print */ \"./src/js/print.js\");\n\nvar _print2 = _interopRequireDefault(_print);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  print: function print(params, printFrame) {\n    // Get HTML printable element\n    var printElement = document.getElementById(params.printable);\n\n    // Check if element exists\n    if (!printElement) {\n      window.console.error('Invalid HTML element id: ' + params.printable);\n\n      return false;\n    }\n\n    // Make a copy of the printElement to prevent DOM changes\n    var printableElement = document.createElement('div');\n    printableElement.appendChild(printElement.cloneNode(true));\n\n    // Add cloned element to DOM, to have DOM element methods available. It will also be easier to colect styles\n    printableElement.setAttribute('style', 'height:0; overflow:hidden;');\n    printableElement.setAttribute('id', 'printJS-html');\n    printElement.parentNode.appendChild(printableElement);\n\n    // Update printableElement variable with newly created DOM element\n    printableElement = document.getElementById('printJS-html');\n\n    // Process html styles\n    if (params.scanStyles === true) {\n      // Optional - include margin and padding\n      if (params.honorMarginPadding) params.targetStyles.push('margin', 'padding');\n\n      // Optional - include color\n      if (params.honorColor) params.targetStyles.push('color');\n\n      // Get main element styling\n      printableElement.setAttribute('style', (0, _functions.collectStyles)(printableElement, params) + 'margin:0 !important;');\n\n      // Get all children elements\n      var elements = printableElement.children;\n\n      // Get styles for all children elements\n      (0, _functions.loopNodesCollectStyles)(elements, params);\n    }\n\n    // Add header\n    if (params.header) {\n      (0, _functions.addHeader)(printableElement, params.header, params.headerStyle);\n    }\n\n    // Remove DOM printableElement\n    printableElement.parentNode.removeChild(printableElement);\n\n    // Store html data\n    params.htmlData = (0, _functions.addWrapper)(printableElement.innerHTML, params);\n\n    // Print html element contents\n    _print2.default.send(params, printFrame);\n  }\n};\n\n//# sourceURL=webpack:///./src/js/html.js?");

/***/ }),

/***/ "./src/js/image.js":
/*!*************************!*\
  !*** ./src/js/image.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\nvar _print = __webpack_require__(/*! ./print */ \"./src/js/print.js\");\n\nvar _print2 = _interopRequireDefault(_print);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  print: function print(params, printFrame) {\n    // Check if we are printing one image or multiple images\n    if (params.printable.constructor !== Array) {\n      // Create array with one image\n      params.printable = [params.printable];\n    }\n\n    // Create printable element (container)\n    var printableElement = document.createElement('div');\n    printableElement.setAttribute('style', 'width:100%');\n\n    // Load images and append\n    loadImagesAndAppendToPrintableElement(printableElement, params).then(function () {\n      // Check if we are adding a header\n      if (params.header) (0, _functions.addHeader)(printableElement, params.header, params.headerStyle);\n\n      // Store html data\n      params.htmlData = printableElement.outerHTML;\n\n      // Print image\n      _print2.default.send(params, printFrame);\n    });\n  }\n};\n\n\nfunction loadImagesAndAppendToPrintableElement(printableElement, params) {\n  var promises = [];\n\n  params.printable.forEach(function (image, index) {\n    // Create the image element\n    var img = document.createElement('img');\n\n    // Set image src with image file url\n    img.src = image;\n\n    // Load image\n    promises.push(loadImageAndAppendToPrintableElement(printableElement, params, img, index));\n  });\n\n  return Promise.all(promises);\n}\n\nfunction loadImageAndAppendToPrintableElement(printableElement, params, img, index) {\n  return new Promise(function (resolve) {\n    img.onload = function () {\n      // Create image wrapper\n      var imageWrapper = document.createElement('div');\n      imageWrapper.setAttribute('style', params.imageStyle);\n\n      img.setAttribute('style', 'width:100%;');\n      img.setAttribute('id', 'printableImage' + index);\n\n      // Append image to wrapper element\n      imageWrapper.appendChild(img);\n\n      // Append wrapper element to printable element\n      printableElement.appendChild(imageWrapper);\n\n      resolve();\n    };\n  });\n}\n\n//# sourceURL=webpack:///./src/js/image.js?");

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _browser = __webpack_require__(/*! ./browser */ \"./src/js/browser.js\");\n\nvar _browser2 = _interopRequireDefault(_browser);\n\nvar _modal = __webpack_require__(/*! ./modal */ \"./src/js/modal.js\");\n\nvar _modal2 = _interopRequireDefault(_modal);\n\nvar _pdf = __webpack_require__(/*! ./pdf */ \"./src/js/pdf.js\");\n\nvar _pdf2 = _interopRequireDefault(_pdf);\n\nvar _html = __webpack_require__(/*! ./html */ \"./src/js/html.js\");\n\nvar _html2 = _interopRequireDefault(_html);\n\nvar _image = __webpack_require__(/*! ./image */ \"./src/js/image.js\");\n\nvar _image2 = _interopRequireDefault(_image);\n\nvar _json = __webpack_require__(/*! ./json */ \"./src/js/json.js\");\n\nvar _json2 = _interopRequireDefault(_json);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar printTypes = ['pdf', 'html', 'image', 'json'];\n\nexports.default = {\n  init: function init() {\n    var params = {\n      printable: null,\n      fallbackPrintable: null,\n      type: 'pdf',\n      header: null,\n      headerStyle: 'font-weight: 300;',\n      maxWidth: 800,\n      font: 'TimesNewRoman',\n      font_size: '12pt',\n      honorMarginPadding: true,\n      honorColor: false,\n      properties: null,\n      gridHeaderStyle: 'font-weight: bold; padding: 5px; border: 1px solid #dddddd;',\n      gridStyle: 'border: 1px solid lightgray; margin-bottom: -1px;',\n      showModal: false,\n      onLoadingStart: null,\n      onLoadingEnd: null,\n      onPrintDialogClose: null,\n      modalMessage: 'Retrieving Document...',\n      frameId: 'printJS',\n      htmlData: '',\n      documentTitle: 'Document',\n      targetStyle: ['clear', 'display', 'width', 'min-width', 'height', 'min-height', 'max-height'],\n      targetStyles: ['border', 'box', 'break', 'text-decoration'],\n      ignoreElements: [],\n      imageStyle: 'width:100%;',\n      repeatTableHeader: true,\n      css: null,\n      style: null,\n      scanStyles: true\n\n      // Check if a printable document or object was supplied\n    };var args = arguments[0];\n    if (args === undefined) throw new Error('printJS expects at least 1 attribute.');\n\n    // Process parameters\n    switch (typeof args === 'undefined' ? 'undefined' : _typeof(args)) {\n      case 'string':\n        params.printable = encodeURI(args);\n        params.fallbackPrintable = params.printable;\n        params.type = arguments[1] || params.type;\n        break;\n      case 'object':\n        params.printable = args.printable;\n        params.fallbackPrintable = typeof args.fallbackPrintable !== 'undefined' ? args.fallbackPrintable : params.printable;\n        params.type = typeof args.type !== 'undefined' ? args.type : params.type;\n        params.frameId = typeof args.frameId !== 'undefined' ? args.frameId : params.frameId;\n        params.header = typeof args.header !== 'undefined' ? args.header : params.header;\n        params.headerStyle = typeof args.headerStyle !== 'undefined' ? args.headerStyle : params.headerStyle;\n        params.maxWidth = typeof args.maxWidth !== 'undefined' ? args.maxWidth : params.maxWidth;\n        params.font = typeof args.font !== 'undefined' ? args.font : params.font;\n        params.font_size = typeof args.font_size !== 'undefined' ? args.font_size : params.font_size;\n        params.honorMarginPadding = typeof args.honorMarginPadding !== 'undefined' ? args.honorMarginPadding : params.honorMarginPadding;\n        params.properties = typeof args.properties !== 'undefined' ? args.properties : params.properties;\n        params.gridHeaderStyle = typeof args.gridHeaderStyle !== 'undefined' ? args.gridHeaderStyle : params.gridHeaderStyle;\n        params.gridStyle = typeof args.gridStyle !== 'undefined' ? args.gridStyle : params.gridStyle;\n        params.showModal = typeof args.showModal !== 'undefined' ? args.showModal : params.showModal;\n        params.onLoadingStart = typeof args.onLoadingStart !== 'undefined' ? args.onLoadingStart : params.onLoadingStart;\n        params.onLoadingEnd = typeof args.onLoadingEnd !== 'undefined' ? args.onLoadingEnd : params.onLoadingEnd;\n        params.onPrintDialogClose = typeof args.onPrintDialogClose !== 'undefined' ? args.onPrintDialogClose : params.onPrintDialogClose;\n        params.modalMessage = typeof args.modalMessage !== 'undefined' ? args.modalMessage : params.modalMessage;\n        params.documentTitle = typeof args.documentTitle !== 'undefined' ? args.documentTitle : params.documentTitle;\n        params.targetStyle = typeof args.targetStyle !== 'undefined' ? args.targetStyle : params.targetStyle;\n        params.targetStyles = typeof args.targetStyles !== 'undefined' ? args.targetStyles : params.targetStyles;\n        params.ignoreElements = typeof args.ignoreElements !== 'undefined' ? args.ignoreElements : params.ignoreElements;\n        params.imageStyle = typeof args.imageStyle !== 'undefined' ? args.imageStyle : params.imageStyle;\n        params.repeatTableHeader = typeof args.repeatTableHeader !== 'undefined' ? args.repeatTableHeader : params.repeatTableHeader;\n        params.css = typeof args.css !== 'undefined' ? args.css : params.css;\n        params.style = typeof args.style !== 'undefined' ? args.style : params.style;\n        params.scanStyles = typeof args.scanStyles !== 'undefined' ? args.scanStyles : params.scanStyles;\n        break;\n      default:\n        throw new Error('Unexpected argument type! Expected \"string\" or \"object\", got ' + (typeof args === 'undefined' ? 'undefined' : _typeof(args)));\n    }\n\n    // Validate printable\n    if (!params.printable) throw new Error('Missing printable information.');\n\n    // Validate type\n    if (!params.type || typeof params.type !== 'string' || printTypes.indexOf(params.type.toLowerCase()) === -1) {\n      throw new Error('Invalid print type. Available types are: pdf, html, image and json.');\n    }\n\n    // Check if we are showing a feedback message to the user (useful for large files)\n    if (params.showModal) _modal2.default.show(params);\n\n    // Check for a print start hook function\n    if (params.onLoadingStart) params.onLoadingStart();\n\n    // To prevent duplication and issues, remove any used printFrame from the DOM\n    var usedFrame = document.getElementById(params.frameId);\n\n    if (usedFrame) usedFrame.parentNode.removeChild(usedFrame);\n\n    // Create a new iframe or embed element (IE prints blank pdf's if we use iframe)\n    var printFrame = void 0;\n\n    // Create iframe element\n    printFrame = document.createElement('iframe');\n\n    // Hide iframe\n    printFrame.setAttribute('style', 'visibility: hidden; height: 0; width: 0; position: absolute;');\n\n    // Set iframe element id\n    printFrame.setAttribute('id', params.frameId);\n\n    // For non pdf printing, pass an html document string to srcdoc (force onload callback)\n    if (params.type !== 'pdf') {\n      printFrame.srcdoc = '<html><head><title>' + params.documentTitle + '</title>';\n\n      // Attach css files\n      if (params.css !== null) {\n        // Add support for single file\n        if (!Array.isArray(params.css)) params.css = [params.css];\n\n        // Create link tags for each css file\n        params.css.forEach(function (file) {\n          printFrame.srcdoc += '<link rel=\"stylesheet\" href=\"' + file + '\">';\n        });\n      }\n\n      printFrame.srcdoc += '</head><body></body></html>';\n    }\n\n    // Check printable type\n    switch (params.type) {\n      case 'pdf':\n        // Check browser support for pdf and if not supported we will just open the pdf file instead\n        if (_browser2.default.isFirefox() || _browser2.default.isEdge() || _browser2.default.isIE()) {\n          console.info('PrintJS currently doesn\\'t support PDF printing in Firefox, Internet Explorer and Edge.');\n          var win = window.open(params.fallbackPrintable, '_blank');\n          win.focus();\n          // Make sure there is no loading modal opened\n          if (params.showModal) _modal2.default.close();\n          if (params.onLoadingEnd) params.onLoadingEnd();\n        } else {\n          _pdf2.default.print(params, printFrame);\n        }\n        break;\n      case 'image':\n        _image2.default.print(params, printFrame);\n        break;\n      case 'html':\n        _html2.default.print(params, printFrame);\n        break;\n      case 'json':\n        _json2.default.print(params, printFrame);\n        break;\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/js/init.js?");

/***/ }),

/***/ "./src/js/json.js":
/*!************************!*\
  !*** ./src/js/json.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\nvar _print = __webpack_require__(/*! ./print */ \"./src/js/print.js\");\n\nvar _print2 = _interopRequireDefault(_print);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  print: function print(params, printFrame) {\n    // Check if we received proper data\n    if (_typeof(params.printable) !== 'object') {\n      throw new Error('Invalid javascript data object (JSON).');\n    }\n\n    // Validate repeatTableHeader\n    if (typeof params.repeatTableHeader !== 'boolean') {\n      throw new Error('Invalid value for repeatTableHeader attribute (JSON).');\n    }\n\n    // Validate properties\n    if (!params.properties || !Array.isArray(params.properties)) {\n      throw new Error('Invalid properties array for your JSON data.');\n    }\n\n    // We will format the property objects to keep the JSON api compatible with older releases\n    params.properties = params.properties.map(function (property) {\n      return {\n        field: (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' ? property.field : property,\n        displayName: (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' ? property.displayName : property,\n        columnSize: (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' && property.columnSize + ';' ? property.columnSize : 100 / params.properties.length + '%;'\n      };\n    });\n\n    // Variable to hold the html string\n    var htmlData = '';\n\n    // Check if there is a header on top of the table\n    if (params.header) htmlData += '<h1 style=\"' + params.headerStyle + '\">' + params.header + '</h1>';\n\n    // Build the printable html data\n    htmlData += jsonToHTML(params);\n\n    // Store the data\n    params.htmlData = (0, _functions.addWrapper)(htmlData, params);\n\n    // Print the json data\n    _print2.default.send(params, printFrame);\n  }\n};\n\n\nfunction jsonToHTML(params) {\n  // Get the row and column data\n  var data = params.printable;\n  var properties = params.properties;\n\n  // Create a html table\n  var htmlData = '<table style=\"border-collapse: collapse; width: 100%;\">';\n\n  // Check if the header should be repeated\n  if (params.repeatTableHeader) {\n    htmlData += '<thead>';\n  }\n\n  // Add the table header row\n  htmlData += '<tr>';\n\n  // Add the table header columns\n  for (var a = 0; a < properties.length; a++) {\n    htmlData += '<th style=\"width:' + properties[a].columnSize + ';' + params.gridHeaderStyle + '\">' + (0, _functions.capitalizePrint)(properties[a].displayName) + '</th>';\n  }\n\n  // Add the closing tag for the table header row\n  htmlData += '</tr>';\n\n  // If the table header is marked as repeated, add the closing tag\n  if (params.repeatTableHeader) {\n    htmlData += '</thead>';\n  }\n\n  // Create the table body\n  htmlData += '<tbody>';\n\n  // Add the table data rows\n  for (var i = 0; i < data.length; i++) {\n    // Add the row starting tag\n    htmlData += '<tr>';\n\n    // Print selected properties only\n    for (var n = 0; n < properties.length; n++) {\n      var stringData = data[i];\n\n      // Support nested objects\n      var property = properties[n].field.split('.');\n      if (property.length > 1) {\n        for (var p = 0; p < property.length; p++) {\n          stringData = stringData[property[p]];\n        }\n      } else {\n        stringData = stringData[properties[n].field];\n      }\n\n      // Add the row contents and styles\n      htmlData += '<td style=\"width:' + properties[n].columnSize + params.gridStyle + '\">' + stringData + '</td>';\n    }\n\n    // Add the row closing tag\n    htmlData += '</tr>';\n  }\n\n  // Add the table and body closing tags\n  htmlData += '</tbody></table>';\n\n  return htmlData;\n}\n\n//# sourceURL=webpack:///./src/js/json.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Modal = {\n  show: function show(params) {\n    // Build modal\n    var modalStyle = 'font-family:sans-serif; ' + 'display:table; ' + 'text-align:center; ' + 'font-weight:300; ' + 'font-size:30px; ' + 'left:0; top:0;' + 'position:fixed; ' + 'z-index: 9990;' + 'color: #0460B5; ' + 'width: 100%; ' + 'height: 100%; ' + 'background-color:rgba(255,255,255,.9);' + 'transition: opacity .3s ease;';\n\n    // Create wrapper\n    var printModal = document.createElement('div');\n    printModal.setAttribute('style', modalStyle);\n    printModal.setAttribute('id', 'printJS-Modal');\n\n    // Create content div\n    var contentDiv = document.createElement('div');\n    contentDiv.setAttribute('style', 'display:table-cell; vertical-align:middle; padding-bottom:100px;');\n\n    // Add close button (requires print.css)\n    var closeButton = document.createElement('div');\n    closeButton.setAttribute('class', 'printClose');\n    closeButton.setAttribute('id', 'printClose');\n    contentDiv.appendChild(closeButton);\n\n    // Add spinner (requires print.css)\n    var spinner = document.createElement('span');\n    spinner.setAttribute('class', 'printSpinner');\n    contentDiv.appendChild(spinner);\n\n    // Add message\n    var messageNode = document.createTextNode(params.modalMessage);\n    contentDiv.appendChild(messageNode);\n\n    // Add contentDiv to printModal\n    printModal.appendChild(contentDiv);\n\n    // Append print modal element to document body\n    document.getElementsByTagName('body')[0].appendChild(printModal);\n\n    // Add event listener to close button\n    document.getElementById('printClose').addEventListener('click', function () {\n      Modal.close();\n    });\n  },\n  close: function close() {\n    var printFrame = document.getElementById('printJS-Modal');\n\n    printFrame.parentNode.removeChild(printFrame);\n  }\n};\n\nexports.default = Modal;\n\n//# sourceURL=webpack:///./src/js/modal.js?");

/***/ }),

/***/ "./src/js/pdf.js":
/*!***********************!*\
  !*** ./src/js/pdf.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _print = __webpack_require__(/*! ./print */ \"./src/js/print.js\");\n\nvar _print2 = _interopRequireDefault(_print);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  print: function print(params, printFrame) {\n    // Format pdf url\n    params.printable = params.printable.indexOf('http') !== -1 ? params.printable : window.location.origin + (params.printable.charAt(0) !== '/' ? '/' + params.printable : params.printable);\n\n    // If showing a loading modal or using a hook function, we will preload the pdf file\n    if (params.showModal || params.onLoadingStart) {\n      // Get the file through a http request\n      var req = new window.XMLHttpRequest();\n      req.responseType = 'arraybuffer';\n\n      req.addEventListener('load', function () {\n        // Pass response data to a blob and create a local object url\n        var localPdf = new window.Blob([req.response], { type: 'application/pdf' });\n        localPdf = window.URL.createObjectURL(localPdf);\n\n        // Pass the url to the printable parameter (replacing the original pdf file url)\n        // This will prevent a second request to the file (server) once the iframe loads\n        params.printable = localPdf;\n\n        send(params, printFrame);\n      });\n\n      req.open('GET', params.printable, true);\n      req.send();\n    } else {\n      send(params, printFrame);\n    }\n  }\n};\n\n\nfunction send(params, printFrame) {\n  // Set iframe src with pdf document url\n  printFrame.setAttribute('src', params.printable);\n  _print2.default.send(params, printFrame);\n}\n\n//# sourceURL=webpack:///./src/js/pdf.js?");

/***/ }),

/***/ "./src/js/print.js":
/*!*************************!*\
  !*** ./src/js/print.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _browser = __webpack_require__(/*! ./browser */ \"./src/js/browser.js\");\n\nvar _browser2 = _interopRequireDefault(_browser);\n\nvar _modal = __webpack_require__(/*! ./modal */ \"./src/js/modal.js\");\n\nvar _modal2 = _interopRequireDefault(_modal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Print = {\n  send: function send(params, printFrame) {\n    // Append iframe element to document body\n    document.getElementsByTagName('body')[0].appendChild(printFrame);\n\n    // Get iframe element\n    var iframeElement = document.getElementById(params.frameId);\n\n    // Wait for iframe to load all content\n    if (params.type === 'pdf' && (_browser2.default.isIE() || _browser2.default.isEdge())) {\n      iframeElement.setAttribute('onload', finishPrint(iframeElement, params));\n    } else {\n      printFrame.onload = function () {\n        if (params.type === 'pdf') {\n          finishPrint(iframeElement, params);\n        } else {\n          // Get iframe element document\n          var printDocument = iframeElement.contentWindow || iframeElement.contentDocument;\n          if (printDocument.document) printDocument = printDocument.document;\n\n          // Inject printable html into iframe body\n          printDocument.body.innerHTML = params.htmlData;\n\n          // Add custom style\n          if (params.type !== 'pdf' && params.style !== null) {\n            // Create style element\n            var style = document.createElement('style');\n            style.innerHTML = params.style;\n\n            // Append style element to iframe's head\n            printDocument.head.appendChild(style);\n          }\n\n          // If printing image, wait for it to load inside the iframe\n          if (params.type === 'image') {\n            loadIframeImages(printDocument, params).then(function () {\n              finishPrint(iframeElement, params);\n            });\n          } else {\n            finishPrint(iframeElement, params);\n          }\n        }\n      };\n    }\n  }\n};\n\nfunction finishPrint(iframeElement, params) {\n  iframeElement.focus();\n\n  // If Edge or IE, try catch with execCommand\n  if (_browser2.default.isEdge() || _browser2.default.isIE()) {\n    try {\n      iframeElement.contentWindow.document.execCommand('print', false, null);\n    } catch (e) {\n      iframeElement.contentWindow.print();\n    }\n  } else {\n    // Other browsers\n    iframeElement.contentWindow.print();\n  }\n\n  // If we are showing a feedback message to user, remove it\n  if (params.showModal) _modal2.default.close();\n\n  // Check for a finished loading hook function\n  if (params.onLoadingEnd) params.onLoadingEnd();\n\n  // If preloading pdf files, clean blob url\n  if (params.showModal || params.onLoadingStart) window.URL.revokeObjectURL(params.printable);\n\n  // If a onPrintDialogClose callback is given, execute it\n  if (params.onPrintDialogClose) {\n    var event = 'mouseover';\n\n    if (_browser2.default.isChrome() || _browser2.default.isFirefox()) {\n      // Firefox will require an extra click in the document\n      // to fire the focus event. Should we console.warn that?\n      event = 'focus';\n    }\n    var handler = function handler() {\n      // Make sure the event only happens once.\n      window.removeEventListener(event, handler);\n\n      params.onPrintDialogClose();\n    };\n\n    window.addEventListener(event, handler);\n  }\n}\n\nfunction loadIframeImages(printDocument, params) {\n  var promises = [];\n\n  params.printable.forEach(function (image, index) {\n    return promises.push(loadIframeImage(printDocument, index));\n  });\n\n  return Promise.all(promises);\n}\n\nfunction loadIframeImage(printDocument, index) {\n  return new Promise(function (resolve) {\n    var image = printDocument ? printDocument.getElementById('printableImage' + index) : null;\n\n    if (!image || typeof image.naturalWidth === 'undefined' || image.naturalWidth === 0) {\n      setTimeout(function () {\n        loadIframeImage(printDocument, index);\n      }, 500);\n    } else {\n      resolve();\n    }\n  });\n}\n\nexports.default = Print;\n\n//# sourceURL=webpack:///./src/js/print.js?");

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/index.scss?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });