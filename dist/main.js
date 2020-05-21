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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Food; });\nclass Food {\n\n    constructor(gameWidth,gameHeight) {\n        this.gameWidth = gameWidth;\n        this.gameHeight = gameHeight;\n        this.width = 150;\n        this.height = 150;\n\n        this.position = {\n          x: gameWidth / 2 - this.width /2,\n          y: gameHeight - this.height -50\n        };\n\n\n        this.maxSpeed = 5;\n        this.VmaxSpeed = 2;\n\n        this.speed = 0;\n        this.vspeed = 0;\n    }\n\n    moveLeft() {\n        this.position.x -= 50;\n    }\n\n    moveRight() {\n        this.position.x += 50;\n    }\n\n    moveUp() {\n        this.position.y -= 50;\n    }\n\n     moveDown() {\n        this.position.y += 50;\n    }\n\n    eaten() {\n        \n    }\n\n\n\n    draw(ctx) {\n        ctx.fillStyle = '#f00'\n        ctx.fillRect(this.position.x, this.position.y, this.width,this.height)\n    }\n\n    update (deltaTime) {\n        if (!deltaTime) return;\n\n        if(this.position.x < 0) this.position.x = 0;\n        if(this.position.x + this.width > this.gameWidth) \n        this.position.x = this.gameWidth- this.width;\n\n        if (this.position.y < 0) this.position.y = 0;\n        if (this.position.y + this.height > this.gameHeight)\n          this.position.y = this.gameHeight - this.height;\n\n\n    }\n\n\n}\n\n//# sourceURL=webpack:///./src/food.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food */ \"./src/food.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n\n\n\nlet canvas = document.getElementById(\"gameScreen\");\nlet ctx = canvas.getContext('2d');\n\nconst GAME_WIDTH = 800;\nconst GAME_HEIGHT = 600\n\n\n\nlet food = new _food__WEBPACK_IMPORTED_MODULE_0__[\"default\"](GAME_WIDTH,GAME_HEIGHT);\n\nfood.draw(ctx);\n\nlet lastTime = 0;\n\n\n\nnew _input__WEBPACK_IMPORTED_MODULE_1__[\"default\"](food);\n\n\n\nfunction gameLoop(timestamp) {\n    let deltaTime = timestamp - lastTime;\n    lastTime = timestamp;\n\n    ctx.clearRect(0, 0, 800, 600);\n       \n    food.update(deltaTime)\n\n    food.draw(ctx)\n\n\n    requestAnimationFrame(gameLoop)\n\n}\n\n\ngameLoop();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler {\n\n    constructor(food) {\n\n        document.addEventListener('keydown', event => {\n            \n            switch (event.keyCode) {\n              case 37:\n                food.moveLeft();\n\n                break;\n\n              case 38:\n                food.moveUp();\n\n                break;\n\n              case 39:\n                food.moveRight();\n\n                break;\n\n              case 40:\n                food.moveDown();\n\n                break;\n            }\n        })\n\n    }\n\n\n\n}\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ })

/******/ });