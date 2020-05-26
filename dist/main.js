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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Burger; });\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collision */ \"./src/collision.js\");\n\n\n\nclass Burger {\n\n    constructor(game) {\n        this.image = document.getElementById('img_burger');\n\n        this.gameWidth = game.gameWidth;\n\n        this.gameHeight = game.gameHeight;\n\n        this.game = game;\n\n\n        this.position = {\n          x: Math.floor(Math.random() * 700 ),\n          y: Math.floor(Math.random() * 500)\n        };\n\n        this.speed = {\n        //   x: Math.floor(Math.random() * 8),\n        //   y: Math.floor(Math.random() * 7),\n        x: 2,\n        y: 0\n        };\n\n        this.size = 50;\n        this.markedForDeletion = false;\n\n    }\n\n\n    draw(ctx) {\n        ctx.drawImage(this.image, \n            this.position.x, \n            this.position.y, \n            this.size, \n            this.size);\n    }\n\n\n    update(deltaTime) { \n        this.position.x += this.speed.x;\n        \n        this.position.y += this.speed.y;\n\n        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {\n            this.speed.x = -this.speed.x;\n        }\n\n        if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {\n            this.speed.y = -this.speed.y;\n        }\n\n\n\n\n        if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"detectCollision\"])(this, this.game.human))  {\n\n            // this.speed.y = -this.speed.y\n            // this.speed.x = -this.speed.x\n            // this.position.y = this.game.human.position.y - this.size;\n            this.markedForDeletion = true;\n            this.game.score+= 1\n        }\n\n\n    }\n\n\n\n\n\n\n\n}\n\n//# sourceURL=webpack:///./src/burger.js?");

/***/ }),

/***/ "./src/collision.js":
/*!**************************!*\
  !*** ./src/collision.js ***!
  \**************************/
/*! exports provided: detectCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detectCollision\", function() { return detectCollision; });\nfunction detectCollision(burger, gameObject) {\n\n    let bottomOfBurger = burger.position.y + burger.size;\n    let topOfBurger = burger.position.y\n    \n    let topObject = gameObject.position.y;\n    \n    let bottomObject = gameObject.position.y + gameObject.height;\n\n    let leftObject = gameObject.position.x;\n    let rightObject = gameObject.position.x + gameObject.width;\n\n    if (\n      //   bottomOfBurger + burger.size>= topObject &&\n      //   topOfBurger <= bottomObject &&\n      burger.position.x + burger.size >= leftObject &&\n      burger.position.x <= rightObject &&\n      burger.position.y + burger.size >= topObject &&\n      burger.position.y <= bottomObject\n    ) {\n      return true;\n    } else {\n      return false;\n    }\n}\n\n//# sourceURL=webpack:///./src/collision.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _human__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./human */ \"./src/human.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger */ \"./src/burger.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n\n\n\n\n\n\n\nconst GAMESTATE = {\n    PAUSED: 0,\n    RUNNING: 1,\n    MENU: 2,\n    GAMEOVER: 3\n}\n\nclass Game {\n\n    constructor(gameWidth, gameHeight) {\n\n        this.gameWidth = gameWidth\n        this.gameHeight = gameHeight\n\n        this.score = 0;\n\n    }\n\n    start() {\n\n        this.gamestate = GAMESTATE.RUNNING;\n        this.human = new _human__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n\n        \n        this.burger = new _burger__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n        // let SCORE = 0;\n        // let LEVEL = 1;\n        // const MAX_LEVEL = 5\n        let burgers = Object(_levels__WEBPACK_IMPORTED_MODULE_3__[\"buildLevel\"])(this, _levels__WEBPACK_IMPORTED_MODULE_3__[\"level1\"])\n\n        // for (let i= 0; i < 5; i++) {\n        //     burgers.push(new Burger(this))\n        // }\n\n        \n        this.gameObjects = [\n            ...burgers,\n            this.human,\n            \n        ]\n\n        new _input__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.human, this);\n    }\n\n\n    // showGameStats(text, textX, textY, label) {\n    //     ctx.fillStyle = '#FFF';\n    //     ctx.font = \"20px Arial\";\n    //     ctx.fillText(text, textX, textY)\n\n    // }\n\n    togglePause() {\n        if (this.gamestate == GAMESTATE.PAUSED) {\n            this.gamestate = GAMESTATE.RUNNING;\n        } else {\n            this.gamestate = GAMESTATE.PAUSED;\n        }\n    }\n\n    update(deltaTime) {\n        if (this.gamestate == GAMESTATE.PAUSED) return;\n\n        this.gameObjects.forEach((object) => object.update(deltaTime));\n\n        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion)\n\n    }\n\n    draw(ctx) {\n\n        this.gameObjects.forEach((object) => object.draw(ctx))\n\n    }\n\n\n\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/human.js":
/*!**********************!*\
  !*** ./src/human.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Human; });\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collision */ \"./src/collision.js\");\n\n\nclass Human {\n\n    constructor(game) {\n        this.gameWidth = game.gameWidth;\n        this.gameHeight = game.gameHeight;\n        this.width = 40;\n        this.height = 10;\n\n        this.position = {\n          x: game.gameWidth / 2 - this.width /2,\n          y: game.gameHeight - this.height -50\n        };\n\n\n        this.maxSpeed = 5;\n\n        this.xspeed = 0;\n        this.yspeed = 0;\n    }\n\n    moveLeft() {\n        this.xspeed = -this.maxSpeed;\n    }\n\n    moveRight() {\n        this.xspeed = this.maxSpeed;\n    }\n\n    moveUp() {\n        this.yspeed = -this.maxSpeed;\n    }\n\n     moveDown() {\n        this.yspeed = this.maxSpeed;\n    }\n\n    eat() {\n        if (this.width != 0 || this.height != 0) {\n            this.width -= 10;\n            this.height -= 10;\n        }\n\n        if (this.width == 0 && this.height == 0) {\n            alert(\"GAME OVER/NEXT LEVEL\");\n        }\n        \n    }\n    stopX (){\n        this.xspeed = 0;\n    }\n    stopY() {\n        this.yspeed = 0;\n    }\n    draw(ctx) {\n        // ctx.fillStyle = '#f00'\n        // ctx.fillRect(this.position.x, this.position.y, this.width,this.height)\n        ctx.font = \"30px Arial\"\n        ctx.fillText(\"👅\", this.position.x, this.position.y)\n    }\n\n    update (deltaTime) {\n        this.position.x += this.xspeed;\n        this.position.y += this.yspeed;\n\n\n        if(this.position.x < 0) {\n            this.position.x = 0;\n        }\n        if(this.position.x + this.width > this.gameWidth) \n        this.position.x = this.gameWidth - this.width;\n\n        if (this.position.y < 0){\n            this.position.y = 0;\n        }\n\n        if (this.position.y + this.height > this.gameHeight) {\n            this.position.y = this.gameHeight - this.height;\n        }\n\n        \n\n    }\n\n\n}\n\n//# sourceURL=webpack:///./src/human.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nlet canvas = document.getElementById(\"gameScreen\");\nlet ctx = canvas.getContext('2d');\n\nconst GAME_WIDTH = 600;\nconst GAME_HEIGHT = 750\n\n\n\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](GAME_WIDTH, GAME_HEIGHT);\ngame.start();\n\n\n\n\nlet lastTime = 0;\n\n\n\n\n//images\n\n\nlet background = document.getElementById(\"img_background\");\n\n\n\n\nfunction gameLoop(timestamp) {\n    let deltaTime = timestamp - lastTime;\n    lastTime = timestamp;\n    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);\n    // ctx.drawImage(background,0,0)\n    \n    game.update(deltaTime);\n    game.draw(ctx);\n    \n\n\n    requestAnimationFrame(gameLoop)\n\n}\n\n\nrequestAnimationFrame(gameLoop);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler {\n\n    constructor(human,game) {\n\n        document.addEventListener('keydown', event => {\n            \n            switch (event.keyCode) {\n              case 32:\n                human.eat();\n                break;\n              case 37:\n                human.moveLeft();\n                break;\n              case 38:\n                human.moveUp();\n                break;\n              case 39:\n                human.moveRight();\n                break;\n              case 40:\n                human.moveDown();\n                break;\n              case 80:\n                game.togglePause();\n                break;\n            }\n        });\n        document.addEventListener(\"keyup\", (event) => {\n          switch (event.keyCode) {\n            case 37:\n              if(human.xspeed < 0) human.stopX();\n              break;\n            case 38:\n              if (human.yspeed < 0) human.stopY();\n              break;\n            case 39:\n             if (human.xspeed > 0) human.stopX();\n              break;\n            case 40:\n              if (human.yspeed > 0) human.stopY();\n              break;\n          }\n        });\n\n    }\n\n\n\n}\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: buildLevel, level1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildLevel\", function() { return buildLevel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level1\", function() { return level1; });\n/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger */ \"./src/burger.js\");\n\n\n\nfunction buildLevel(game, level) {\n    let burgers = [];\n\n        for( let i = 0; i < level; i++) {\n            burgers.push(new _burger__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game))\n        }\n\n\n    return burgers\n}\n\n\n\nconst level1 = 5;\n\n\n\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ })

/******/ });