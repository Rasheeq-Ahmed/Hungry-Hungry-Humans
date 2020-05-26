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

/***/ "./src/burger.js":
/*!***********************!*\
  !*** ./src/burger.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Burger; });\nclass Burger {\n\n    constructor(game) {\n        this.image = document.getElementById('img_burger');\n\n        this.gameWidth = game.gameWidth;\n\n        this.gameHeight = game.gameHeight;\n\n        this.game = game;\n\n\n        this.position = {x: 10, y:10}\n\n        this.speed = {x: 2, y: 2}\n\n        this.size = 50;\n    }\n\n\n    draw(ctx) {\n        ctx.drawImage(this.image, \n            this.position.x, \n            this.position.y, \n            this.size, \n            this.size);\n    }\n\n\n    update(deltaTime) { \n        this.position.x += this.speed.x;\n        \n        this.position.y += this.speed.y;\n\n        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {\n            this.speed.x = -this.speed.x;\n        }\n\n        if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {\n            this.speed.y = -this.speed.y;\n        }\n\n\n\n        let bottomOfBurger = this.position.y + this.size;\n        let topSideHuman = this.game.human.position.y;\n        let bottomSideHuman = this.game.human.position.y - this.game.human.height;\n\n        let leftSideHuman = this.game.human.position.x;\n        let rightSideHuman = this.game.human.position.x + this.game.human.width;\n\n        if(bottomOfBurger >= topSideHuman\n            && this.position.x >= leftSideHuman\n\n            && this.position.x  + this.size <= rightSideHuman\n\n            ) {\n            this.speed.y = -this.speed.y\n            this.position.y = this.game.human.position.y - this.size;\n        }\n\n\n    }\n\n\n\n\n\n\n\n}\n\n//# sourceURL=webpack:///./src/burger.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _human__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./human */ \"./src/human.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger */ \"./src/burger.js\");\n/* harmony import */ var _mouth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mouth */ \"./src/mouth.js\");\n\n\n\n\n\n\n\n\nclass Game {\n\n    constructor(gameWidth, gameHeight) {\n\n        this.gameWidth = gameWidth\n        this.gameHeight = gameHeight\n\n        this.score = 0;\n\n    }\n\n    start() {\n        this.human = new _human__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n        this.burger = new _burger__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n        let mouth = new _mouth__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, {x: 20, y: 20})\n\n        let mouths = []\n\n    \n\n        this.gameObjects = [\n            this.burger,\n            this.human,\n            mouth\n        ]\n\n        new _input__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.human);\n    }\n\n\n    update(deltaTime) {\n      \n\n            this.gameObjects.forEach((object) => object.update(deltaTime));\n\n    }\n\n    draw(ctx) {\n\n            this.gameObjects.forEach((object) => object.draw(ctx))\n\n    }\n\n\n\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/human.js":
/*!**********************!*\
  !*** ./src/human.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Human; });\nclass Human {\n\n    constructor(game) {\n        this.gameWidth = game.gameWidth;\n        this.gameHeight = game.gameHeight;\n        this.width = 300;\n        this.height = 20;\n\n        this.position = {\n          x: game.gameWidth / 2 - this.width /2,\n          y: game.gameHeight - this.height -50\n        };\n\n\n        this.maxSpeed = 5;\n        this.VmaxSpeed = 2;\n\n        this.speed = 0;\n        this.vspeed = 0;\n    }\n\n    moveLeft() {\n        this.position.x -= 10;\n    }\n\n    moveRight() {\n        this.position.x += 10;\n    }\n\n    moveUp() {\n        this.position.y -= 10;\n    }\n\n     moveDown() {\n        this.position.y += 10;\n    }\n\n    eat() {\n        if (this.width != 0 || this.height != 0) {\n            this.width -= 10;\n            this.height -= 10;\n        }\n\n        if (this.width == 0 && this.height == 0) {\n            alert(\"GAME OVER/NEXT LEVEL\");\n        }\n        \n    }\n\n\n\n    draw(ctx) {\n        ctx.fillStyle = '#f00'\n        ctx.fillRect(this.position.x, this.position.y, this.width,this.height)\n    }\n\n    update (deltaTime) {\n\n        if(this.position.x < 0) this.position.x = 0;\n        if(this.position.x + this.width > this.gameWidth) \n        this.position.x = this.gameWidth- this.width;\n\n        if (this.position.y < 0) this.position.y = 0;\n        if (this.position.y + this.height > this.gameHeight)\n          this.position.y = this.gameHeight - this.height;\n\n\n    }\n\n\n}\n\n//# sourceURL=webpack:///./src/human.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nlet canvas = document.getElementById(\"gameScreen\");\nlet ctx = canvas.getContext('2d');\n\nconst GAME_WIDTH = 800;\nconst GAME_HEIGHT = 600\n\n\n\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](GAME_WIDTH, GAME_HEIGHT);\ngame.start();\n\n\n\n\nlet lastTime = 0;\n\n\n\n\n//images\n\n\nlet background = document.getElementById(\"img_background\");\n\n\n\n\nfunction gameLoop(timestamp) {\n    let deltaTime = timestamp - lastTime;\n    lastTime = timestamp;\n    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);\n    ctx.drawImage(background,0,0)\n    \n    game.update(deltaTime);\n    game.draw(ctx);\n    \n\n    requestAnimationFrame(gameLoop)\n\n}\n\n\nrequestAnimationFrame(gameLoop);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler {\n\n    constructor(food) {\n\n        document.addEventListener('keydown', event => {\n            \n            switch (event.keyCode) {\n              case 32:\n                food.eat();\n\n                break;\n              case 37:\n                food.moveLeft();\n\n                break;\n\n              case 38:\n                food.moveUp();\n\n                break;\n\n              case 39:\n                food.moveRight();\n\n                break;\n\n              case 40:\n                food.moveDown();\n\n                break;\n            }\n        })\n\n    }\n\n\n\n}\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/mouth.js":
/*!**********************!*\
  !*** ./src/mouth.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mouth; });\nclass Mouth {\n    constructor(game, position) {\n            this.image = document.getElementById(\"img_mouth\");\n\n            this.game = game;\n\n            this.position = position;\n\n            // this.speed = { x: 2, y: 2 };\n\n            this.width = 52;\n            this.height = 24;\n    }\n\n    update() {\n\n    }\n\n\n    draw(ctx) {\n        ctx.drawImage(\n          this.image,\n          this.position.x,\n          this.position.y,\n          this.width,\n          this.height\n        );\n\n    }\n\n\n\n\n\n}\n\n//# sourceURL=webpack:///./src/mouth.js?");

/***/ })

/******/ });