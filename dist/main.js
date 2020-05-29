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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Burger; });\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collision */ \"./src/collision.js\");\n\n\n\nclass Burger {\n\n    constructor(game) {\n        this.image = document.getElementById('img_burger');\n\n        this.gameWidth = game.gameWidth;\n\n        this.gameHeight = game.gameHeight;\n\n        this.game = game;\n\n\n        this.position = {\n          x: Math.floor(Math.random() * 700 ),\n          y: Math.floor(Math.random() * 500)\n        };\n\n        this.speed = {\n          x: Math.floor(Math.random() * 5),\n          y: Math.floor(Math.random() * 5),\n        // x: 2,\n        // y: 0\n        };\n\n        this.size = 50;\n        this.markedForDeletion = false;\n\n    }\n\n\n    draw(ctx) {\n        ctx.drawImage(this.image, \n            this.position.x, \n            this.position.y, \n            this.size, \n            this.size);\n    }\n\n\n    update(deltaTime) { \n        this.position.x += this.speed.x;\n        \n        this.position.y += this.speed.y;\n\n        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {\n            this.speed.x = -this.speed.x;\n        }\n\n        if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {\n            this.speed.y = -this.speed.y;\n        }\n\n\n\n\n        if (Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"detectCollision\"])(this, this.game.human))  {\n\n            // this.speed.y = -this.speed.y\n            // this.speed.x = -this.speed.x\n            // this.position.y = this.game.human.position.y - this.size;\n            this\n            this.markedForDeletion = true;\n            this.game.score+= 1\n        }\n\n\n    }\n\n\n\n\n\n\n\n}\n\n//# sourceURL=webpack:///./src/burger.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _human__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./human */ \"./src/human.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger */ \"./src/burger.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n\n\n\n\n\n\n\nconst GAMESTATE = {\n    PAUSED: 0,\n    RUNNING: 1,\n    MENU: 2,\n    GAMEOVER: 3,\n    NEWLEVEL: 4,\n    WINNER: 5\n\n}\n\n\n\nclass Game {\n\n    constructor(gameWidth, gameHeight) {\n        this.health = document.getElementById(\"health\")\n        this.gameWidth = gameWidth\n        this.gameHeight = gameHeight\n\n        this.score = 0;\n        this.human = new _human__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n        // this.burger = new Burger(this);\n        new _input__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.human, this);\n        this.gameObjects = [];\n        this.burgers = [];\n        this.gamestate = GAMESTATE.MENU;\n\n\n        this.levels = [_levels__WEBPACK_IMPORTED_MODULE_3__[\"level1\"], _levels__WEBPACK_IMPORTED_MODULE_3__[\"level2\"], _levels__WEBPACK_IMPORTED_MODULE_3__[\"level3\"]]\n        this.currentLevel = 0;\n\n\n    }\n\n    start() {\n\n        if (this.gamestate !== GAMESTATE.MENU &&\n            this.gamestate !== GAMESTATE.NEWLEVEL) return;\n        \n        this.burgers = Object(_levels__WEBPACK_IMPORTED_MODULE_3__[\"buildLevel\"])(this, this.levels[this.currentLevel]); \n               \n        this.gameObjects = [\n            this.human\n        ];\n        this.gamestate = GAMESTATE.RUNNING;\n        // this.health.value -= 10;\n        // this.health.max -= 10;\n\n    }\n\n\n    // showGameStats(text, textX, textY, label) {\n    //     ctx.fillStyle = '#FFF';\n    //     ctx.font = \"20px Arial\";\n    //     ctx.fillText(text, textX, textY)\n\n    // }\n\n    togglePause() {\n        if (this.gamestate == GAMESTATE.PAUSED) {\n            this.gamestate = GAMESTATE.RUNNING;\n        } else {\n            this.gamestate = GAMESTATE.PAUSED;\n        }\n    }\n\n    //     menu() {\n    //     this.gamestate = GAMESTATE.MENU;\n    //     this.health.value = 100;\n    // }\n\n    // reset() {\n    //     this.human.width = 40;\n    //     this.human.height = 40;\n    //     this.human.ma\n    // }\n\n    update(deltaTime) {\n\n        \n\n        if (this.gamestate === GAMESTATE.PAUSED || \n            this.gamestate === GAMESTATE.MENU ||\n            this.gamestate === GAMESTATE.GAMEOVER)\n            return;\n\n            if (this.burgers.length === 0 && this.currentLevel < 4) {\n                this.currentLevel +=1;\n                this.gamestate = GAMESTATE.NEWLEVEL;\n                this.human.maxSpeed /= 3;\n                this.human.width -= 5;\n                this.human.height -= 5;\n                this.health.value = 100;\n                this.start();\n\n            }\n            this.health.value -= 0.04;\n\n\n        if (this.health.value === 0) {\n            this.gamestate = GAMESTATE.GAMEOVER;\n        }\n        if (this.currentLevel === 4) {\n            this.gamestate = GAMESTATE.WINNER;\n            this.health.value = 100;\n\n        }\n\n\n        [...this.gameObjects, ...this.burgers].forEach((object) => object.update(deltaTime));\n\n        this.burgers = this.burgers.filter(burger => !burger.markedForDeletion)\n        // console.log(this.gameObjects);\n\n        \n    }\n\n    draw(ctx) {\n        [...this.gameObjects, ...this.burgers].forEach((object) => object.draw(ctx));\n        \n        if (this.gamestate == GAMESTATE.PAUSED) {\n            ctx.rect(0,0, this.gameWidth, this.gameHeight);\n            ctx.fillStyle = \"rgba(0,0,0,0.9)\";\n            ctx.fill();\n            \n            ctx.font = \"30px Arial\"\n            ctx.fillStyle = \"white\"\n            \n            ctx.textAlign = \"center\"\n            ctx.fillText(\"The Game Is Paused. To Resume, Press P\", this.gameWidth / 2, this.gameHeight/ 2)\n            \n        }\n        ctx.font = \"50px Germania One\";\n        ctx.fillText(`Burgers Left: ${this.burgers.length}`, this.gameWidth/ 2, this.gameHeight - 700);\n        \n        \n        if (this.gamestate === GAMESTATE.MENU) {\n            ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n            ctx.fillStyle = \"rgba(0,0,0,1)\";\n            ctx.fill();\n\n           ctx.font = \"30px Arial\";\n           ctx.fillStyle = \"white\";\n            ctx.textAlign = \"center\";\n           ctx.fillText(\n             \"Eat All The Burgers Before Times Up. \",\n             this.gameWidth / 2,\n             this.gameHeight / 8);\n             ctx.fillText(\n               \"Arrow Keys to Move, P to Pause. \",\n               this.gameWidth / 2,\n               this.gameHeight / 5\n             );\n\n\n\n\n           ctx.textAlign = \"center\";\n           ctx.fillText(\n             \"Press ENTER To Start\",\n             this.gameWidth / 2,\n             this.gameHeight / 2\n           );\n         }\n\n         \n         if (this.gamestate === GAMESTATE.GAMEOVER) {\n           ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n           ctx.fillStyle = \"rgba(0,0,0,1)\";\n           ctx.fill();\n\n           ctx.font = \"30px Arial\";\n           ctx.fillStyle = \"white\";\n\n           ctx.textAlign = \"center\";\n           ctx.fillText(\n             \"Game Over! Refresh Page To Try Again\",\n             this.gameWidth / 2,\n             this.gameHeight / 2\n           );\n         }\n\n         if (this.gamestate === GAMESTATE.WINNER) {\n           ctx.rect(0, 0, this.gameWidth, this.gameHeight);\n           ctx.fillStyle = \"rgba(0,0,0,1)\";\n           ctx.fill();\n\n           ctx.font = \"30px Arial\";\n           ctx.fillStyle = \"white\";\n\n           ctx.textAlign = \"center\";\n           ctx.fillText(\"CONGRATS! YOU WON! Refresh Page To Play Again\", this.gameWidth / 2, this.gameHeight / 2);\n         }\n\n\n\n        if (this.gamestate == GAMESTATE.RUNNING) {\n            ctx.fillStyle = \"black\";\n\n        }\n\n    }\n\n\n\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/human.js":
/*!**********************!*\
  !*** ./src/human.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Human; });\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collision */ \"./src/collision.js\");\n\n\nclass Human {\n\n    constructor(game) {\n        this.image = document.getElementById(\"img_human\");\n        this.gameWidth = game.gameWidth;\n        this.gameHeight = game.gameHeight;\n        this.width = 40;\n        this.height = 40;\n\n        this.position = {\n          x: game.gameWidth / 2 - this.width /2,\n          y: game.gameHeight - this.height -50\n        };\n\n\n        this.maxSpeed = 5;\n\n        this.xspeed = 0;\n        this.yspeed = 0;\n    }\n\n    moveLeft() {\n        this.xspeed = -this.maxSpeed;\n    }\n\n    moveRight() {\n        this.xspeed = this.maxSpeed;\n    }\n\n    moveUp() {\n        this.yspeed = -this.maxSpeed;\n    }\n\n     moveDown() {\n        this.yspeed = this.maxSpeed;\n    }\n\n    // eat() {\n    //     if (this.width != 0 || this.height != 0) {\n    //         this.width -= 10;\n    //         this.height -= 10;\n    //     }\n\n    //     if (this.width == 0 && this.height == 0) {\n    //         alert(\"GAME OVER/NEXT LEVEL\");\n    //     }\n        \n    // }\n    stopX (){\n        this.xspeed = 0;\n    }\n    stopY() {\n        this.yspeed = 0;\n    }\n    draw(ctx) {\n        // ctx.fillStyle = '#f00'\n        // ctx.fillRect(this.position.x, this.position.y, this.width,this.height)\n        // ctx.font = \"30px Arial\"\n        // ctx.fillText(\"👅\", this.position.x, this.position.y)\n           ctx.drawImage(\n             this.image,\n             this.position.x,\n             this.position.y,\n             this.width,\n             this.height\n           );\n    }\n\n    update (deltaTime) {\n        this.position.x += this.xspeed;\n        this.position.y += this.yspeed;\n\n\n        if(this.position.x < 0) {\n            this.position.x = 0;\n        }\n        if(this.position.x + this.width > this.gameWidth) \n        this.position.x = this.gameWidth - this.width;\n\n        if (this.position.y < 0){\n            this.position.y = 0;\n        }\n\n        if (this.position.y + this.height > this.gameHeight) {\n            this.position.y = this.gameHeight - this.height;\n        }\n\n        \n\n    }\n\n\n}\n\n//# sourceURL=webpack:///./src/human.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nlet canvas = document.getElementById(\"gameScreen\");\nlet ctx = canvas.getContext('2d');\n\nconst GAME_WIDTH = 800;\nconst GAME_HEIGHT = 700\n\n\n\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](GAME_WIDTH, GAME_HEIGHT);\n\n\n\n\n\nlet lastTime = 0;\n\n\n\n\n//images\n\n\n// let background = document.getElementById(\"img_background\");\n\n\n\n\nfunction gameLoop(timestamp) {\n    let deltaTime = timestamp - lastTime;\n    lastTime = timestamp;\n    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);\n    // ctx.drawImage(background,0,0)\n    \n    game.update(deltaTime);\n    game.draw(ctx);\n    \n\n\n    requestAnimationFrame(gameLoop)\n\n}\n\n\nrequestAnimationFrame(gameLoop);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler {\n\n    constructor(human,game) {\n\n        document.addEventListener('keydown', event => {\n            \n            switch (event.keyCode) {\n              case 32:\n                human.eat();\n                break;\n              case 37:\n                event.preventDefault();\n\n                human.moveLeft();\n                break;\n              case 38:\n                event.preventDefault();\n\n                human.moveUp();\n                break;\n              case 39:\n                event.preventDefault();\n\n                human.moveRight();\n                break;\n              case 40:\n                event.preventDefault();\n\n                human.moveDown();\n                break;\n              case 80:\n                event.preventDefault();\n                game.togglePause();\n                break;\n            //   case 82:\n            //     game.menu();\n            //     break;\n              case 13:\n                game.start();\n                break;\n            }\n        });\n        document.addEventListener(\"keyup\", (event) => {\n          switch (event.keyCode) {\n            case 37:\n                event.preventDefault();\n              if(human.xspeed < 0) human.stopX();\n              break;\n            case 38:\n              if (human.yspeed < 0) human.stopY();\n              break;\n            case 39:\n                event.preventDefault();\n\n             if (human.xspeed > 0) human.stopX();\n              break;\n            case 40:\n                event.preventDefault();\n\n              if (human.yspeed > 0) human.stopY();\n              break;\n          }\n        });\n\n    }\n\n\n\n}\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: buildLevel, level1, level2, level3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildLevel\", function() { return buildLevel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level1\", function() { return level1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level2\", function() { return level2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level3\", function() { return level3; });\n/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger */ \"./src/burger.js\");\n\n\n\nfunction buildLevel(game, level) {\n    let burgers = [];\n\n        for( let i = 0; i < level; i++) {\n            burgers.push(new _burger__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game))\n        }\n\n\n    return burgers;\n}\n\n\n\nconst level1 = 5;\nconst level2 = 6;\nconst level3 = 7;\n\n\n\n\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ })

/******/ });