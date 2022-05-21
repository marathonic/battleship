"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cockpit.jpg */ "./src/img/cockpit.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Righteous-Regular.ttf */ "./src/fonts/Righteous-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n:root {\n    font-family: Righteous;\n    --cyberYellow: #FFDC00;\n    --sleekGrey: #DDDDDD;\n    --aquaticBlue: #7FDBFF;\n    --pirateNavy: #001f3f;\n    --darkNavy: #001f3f;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.bg {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 120px 1fr;\n    grid-template-columns: 1fr 3fr 1fr;\n    background-color: #001f3f;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nh1 {\n    grid-column: 2;\n    justify-self: center;\n    font-size: 47px;\n    color: var(--cyberYellow);\n}\n\n.boards {\n    margin-top: 30px;\n    width: 30vw;\n    height: 69vh;\n\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.boards.board1 {\n    \n    width: 25vw;\n    height: 35vh;\n    \n}\n\n.boards div:nth-child(10n+1) {\n    margin-left: 2vw;\n    width: 5vw;\n}\n\n\n.boards div:nth-child(10n+10) {\n    margin-right: 2vw;\n    width: 5vw;\n}\n\n.boards div:first-of-type {\n    border-top-left-radius: 100%;\n}\n\n.boards div:nth-of-type(91) {\n    border-bottom-left-radius: 100%;\n}\n\n.boards div:nth-of-type(10) {\n    border-top-right-radius: 100%;\n}\n\ndiv#J10.squares {\n\n    border-bottom-right-radius: 100%;\n}\n\n\n\n.squares-computer:hover {\n    background-color: rgba(255, 220, 0, 0.7);\n}\n\n.boards.board2{\n    border:dashed 1px rgba(255, 220, 0, 0.1);\n    border: none;\n    border-top-left-radius: 10%;\n    border-bottom-left-radius: 10%;\n    border-top-right-radius: 10%;\n    border-bottom-right-radius: 10%;\n    width: 70vw;\n    height: 30vh;\n    \n    grid-row:2;\n    grid-column: 2;\n}\n\n\n.boards:hover {\n    cursor: crosshair;\n    \n}\n\n.squares-computer {\n    border: dashed 1px var(--cyberYellow);\n    background-color: rgba(255, 255, 255, 0.2);\n}\n.squares {\n    border: solid cyan 1px;\n    background-color: rgba(0, 255, 255, 0.3);\n    cursor: pointer;\n}\n\n.squares-animation {\n    animation: append-animate .3s linear;\n}\n\n.cursor-not-allowed {\n    cursor:not-allowed;\n}\n\n.squares-computer:first-of-type {\n    border-top-left-radius: 100%;\n}\n\n.hovered-ship {\n    background-color: black;\n}\n\n.revealed-ship {\n    background-color: red;\n}\n\nbutton {\n    max-width: max-content;\n    max-height: max-content;\n}\n\n\n.coloured-in {\n    background-color: darkred;\n    border: none;\n    animation: pulse 5s infinite;\n}\n\n.coloured-in:hover {\n    background-color:cyan;\n}\n\n.missed-shot {\n    background-color: cyan;\n    background-color: white;\n    clip-path: polygon(100% 35%,100.00% 43.00%,0.00% 43.00%,0% 35%);\n}\n\n.missed-shot:hover {\n    background-color: #7FDBFF;\n    background-color: white;\n}\n\n.missed-shot-from-computer {\n    background-color: rgba(255, 255, 255, 0.7);\n}\n\n.coloured-in-from-computer {\n    background-color: yellow;\n}\n\n.allied-ship-location {\n    background-color: var(--cyberYellow);\n    border: solid var(--cyberYellow) 1px;\n}\n\n.deploy-ships-btn {\n\n    grid-row: 2;\n    position: absolute;\n    justify-self: center;\n    align-self: center;\n    background-color: var(--cyberYellow);\n    font-family: 'Righteous';\n    font-size: 60px;\n    color: rgb(9, 9, 75);\n    max-width: 70vw;\n    height: fit-content;\n    \n    display: grid;\n    flex-wrap: wrap;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    border: none;\n}\n\n.deploy-ships-btn:hover {\n    color: var(--darkNavy);\n    border: none;\n    box-shadow: 0 5px 15px var(--cyberYellow);\n}\n\n.rotate-btn {\n    justify-self: center;\n    align-self: center;\n    margin-top: 10%;\n    margin-left: 395%;\n    background-color: var(--cyberYellow);\n    font-family: 'Righteous';\n    font-size: 60px;\n    color: rgb(9, 9, 75);\n    max-width: 70vw;\n    height: fit-content;\n    cursor: pointer;\n}\n\n.rotate-vertical {\n    transform: rotate(-0.25turn);\n}\n\n\n.invisible {\n    display: none;\n}\n\n.hide {\n    visibility: hidden;\n}\n\n.mini {\n    height: 5%;\n    width: 5%;\n}\n\n.invisible:hover {\n    cursor:default;\n}\n\n.placement-stage {\n    width: 5vw;\n    height: 6vh;\n}\n\n.board1.board-placement-stage {\n    grid-row: 2;\n    grid-column: 2;\n    justify-content: center;\n}\n\n\n.example-parent {\n    border: 2px solid #DFA612;\n    color: black;\n    display: flex;\n    font-family: sans-serif;\n    font-weight: bold;\n  }\n  \n  .example-origin {\n\n    position: absolute;\n    justify-content: center;\n  }\n  \n  .example-draggable {\n    background-color: #4AAE9B;\n    font-weight: normal;\n    \n  }\n\n  .example-draggable-img {\n    \n    max-width: 500px;\n    max-height: 420px;\n    width: 90%;\n    height: 70%; \n    justify-items: center;\n    align-self: center;\n    margin-top: -30%;\n    \n  }\n\n  #battleship.example-draggable-img {\n      max-width: 30%;\n      max-height: 30%;\n      margin-top: -40%;\n  }\n\n  #battleship.grabbing {\n      margin-top: -38%;\n      max-width: 16%;\n      max-height: 16%;\n  }\n\n  #carrier.example-draggable-img {\n      max-width: 100%;\n      max-height: 100%;\n      margin-left: -16%;\n  }\n\n  #carrier.grabbing {\n      margin-left: 0;\n      max-width: 30%;\n      max-height: 30%;\n  }\n\n\n  .grabbing {\n      max-width: 50%;\n      max-height: 20%;\n  }\n\n  .squares > .grabbing {\n      max-width: 100%;\n      max-height: 100%;\n  }\n\n\n  div.on-board > #submarine {\n      width: 200%;\n      z-index: 99;\n      opacity: 99%;\n  } \n\n  div.on-board > #submarine.rotate-vertical {\n      width: 100%;\n      height: 200%;\n      z-index: 99;\n      opacity: 99%;\n  }\n\n  div.on-board > #cruiser {\n      width: 230%;\n      opacity: 99%;\n  }\n\n  div.on-board > #cruiser.rotate-vertical {\n      width: 100%;\n      height: 200%;\n      z-index: 99;\n      opacity: 99%;\n  }\n  \n  div.on-board > #battleship {\n      transform: rotate(0deg);\n      width: 100%;\n      height: 400%;\n      z-index: 99;\n      opacity: 99%;\n  }\n\n  div.on-board > #battleship.rotate-vertical {\n      transform: rotate(270deg);\n      transform-origin: top center;\n      width: 96%;\n      height: 500%;\n      opacity: 99%;\n  }\n\n  div.on-board > #carrier {\n      width: 430%;\n      height: 100%;\n      opacity: 99%;\n  }\n\n  div.on-board > #carrier.rotate-vertical {\n      margin: 0;\n      transform-origin: top left;\n      width: 300%;\n      height: 100%;\n      position: relative;\n  }\n\n  \n  .example-dropzone {\n    background-color: #6DB65B;\n    background-color: rgba(255, 255, 255, 0.7);\n    width: 10%;\n    height: 20%;\n  }\n\n  .example-parent {\n      grid-column: 2;\n      grid-row: 2;\n      height: 52%;\n      width: 70%;\n      justify-self: center;\n      align-self: center;\n      margin-top: -20%;\n      margin-right: -5%;\n  }\n\n  img {\n      width: 100%;\n      height: 100%;\n  }\n\n  .drag-div {\n      grid-column: 2;\n      grid-row: 2;\n      justify-self: center;\n  }\n\n  .painted-square {\n    background: var(--cyberYellow);\n  }\n\n  .test-drop {\n      background-color: var(--cyberYellow);\n  }\n\n  .colour-this-square {\n      background-color: var(--cyberYellow);\n  }\n\n  .black {\n      background-color: black;\n  }\n\n  .cyan {\n      background-color: cyan;\n  }\n\n  .positioned-x-wing,\n  .positioned-submarine,\n  .positioned-cruiser,\n  .positioned-battleship,\n  .positioned-carrier {\n      background-color: var(--cyberYellow);\n      border: none;\n  }\n\n  .positioned-submarine {\n      padding-top: 15px;\n  }\n\n  .ready-btn { \n    justify-self: center;\n    align-self: center;\n    margin-top: 10%;\n    margin-left: 395%;\n    background-color: #d60338;\n    font-family: 'Righteous';\n    font-size: 60px;\n    color: rgb(9, 9, 75);\n    color: white;\n    max-width: 70vw;\n    height: fit-content;\n    padding: 7%;\n    cursor: pointer;\n  }\n\n  .board1-outside {\n\n    width: 25vw;\n    height: 35vh;\n    grid-column: 2;\n    grid-row: 2;\n    justify-self: center;\n    align-self: flex-end;\n\n  }\n\n  .hit-position-human {\n      background-color: red;\n  }\n\n  .certain-hit {\n      background-color: red;\n  }\n\n  .certain-miss {\n      background-color: white;\n  }\n\n  .victory-modal {\n      background-color: var(--darkNavy);\n      display: block;\n      width: 100vw;\n      height: 100vh;\n      opacity: 0.6;\n    position: absolute;\n    cursor: pointer;\n  }\n\n  .victory-modal > p {\n      text-align: center;\n      font-size: 7rem;\n      color: white;\n  }\n\n\n\n  \n\n  .fade{ \n      /* animation: glitch 2s linear 2s; */\n      animation: fade 1s linear 0s;\n  }\n  \n  .squares.fade {\n      cursor: not-allowed;\n  }\n\n  @keyframes glitch{\n\n    0% { opacity: 1}\n    100% { opacity: 0 }\n\n    99%,94%{\n      transform: translate(-99px,100) skew(0deg);\n    }\n    4%,60%{\n      transform: translate(99px,100) skew(10deg);\n    }\n    62%{\n      transform: translate(0,0) skew(75deg); \n    }\n  }\n\n  @keyframes fade {\n      0% { opacity: 0 }\n      100% { opacity: 1}\n  } \n  \n\n\n  .squares.placement-stage:after{\n    animation: glitchBotom 1.5s linear infinite;\n    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);\n    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);\n  }\n  \n\n\n@font-face {\n    font-family: 'Righteous';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n}\n\n@keyframes pulse {\n    0%, 100% {\n        background-color: darkred;\n    }\n    50% {\n        background-color: crimson;\n    }\n}\n\n@keyframes append-animate {\n    from {\n        transform: scale(0);\n        opacity: 0;\n    }\n    to {\n        transform: scale(1);\n        opacity: 1;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n:root {\n    font-family: Righteous;\n    --cyberYellow: #FFDC00;\n    --sleekGrey: #DDDDDD;\n    --aquaticBlue: #7FDBFF;\n    --pirateNavy: #001f3f;\n    --darkNavy: #001f3f;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.bg {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 120px 1fr;\n    grid-template-columns: 1fr 3fr 1fr;\n    background-color: #001f3f;\n    background-image: url(./img/cockpit.jpg);\n}\n\nh1 {\n    grid-column: 2;\n    justify-self: center;\n    font-size: 47px;\n    color: var(--cyberYellow);\n}\n\n.boards {\n    margin-top: 30px;\n    width: 30vw;\n    height: 69vh;\n\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.boards.board1 {\n    \n    width: 25vw;\n    height: 35vh;\n    \n}\n\n.boards div:nth-child(10n+1) {\n    margin-left: 2vw;\n    width: 5vw;\n}\n\n\n.boards div:nth-child(10n+10) {\n    margin-right: 2vw;\n    width: 5vw;\n}\n\n.boards div:first-of-type {\n    border-top-left-radius: 100%;\n}\n\n.boards div:nth-of-type(91) {\n    border-bottom-left-radius: 100%;\n}\n\n.boards div:nth-of-type(10) {\n    border-top-right-radius: 100%;\n}\n\ndiv#J10.squares {\n\n    border-bottom-right-radius: 100%;\n}\n\n\n\n.squares-computer:hover {\n    background-color: rgba(255, 220, 0, 0.7);\n}\n\n.boards.board2{\n    border:dashed 1px rgba(255, 220, 0, 0.1);\n    border: none;\n    border-top-left-radius: 10%;\n    border-bottom-left-radius: 10%;\n    border-top-right-radius: 10%;\n    border-bottom-right-radius: 10%;\n    width: 70vw;\n    height: 30vh;\n    \n    grid-row:2;\n    grid-column: 2;\n}\n\n\n.boards:hover {\n    cursor: crosshair;\n    \n}\n\n.squares-computer {\n    border: dashed 1px var(--cyberYellow);\n    background-color: rgba(255, 255, 255, 0.2);\n}\n.squares {\n    border: solid cyan 1px;\n    background-color: rgba(0, 255, 255, 0.3);\n    cursor: pointer;\n}\n\n.squares-animation {\n    animation: append-animate .3s linear;\n}\n\n.cursor-not-allowed {\n    cursor:not-allowed;\n}\n\n.squares-computer:first-of-type {\n    border-top-left-radius: 100%;\n}\n\n.hovered-ship {\n    background-color: black;\n}\n\n.revealed-ship {\n    background-color: red;\n}\n\nbutton {\n    max-width: max-content;\n    max-height: max-content;\n}\n\n\n.coloured-in {\n    background-color: darkred;\n    border: none;\n    animation: pulse 5s infinite;\n}\n\n.coloured-in:hover {\n    background-color:cyan;\n}\n\n.missed-shot {\n    background-color: cyan;\n    background-color: white;\n    clip-path: polygon(100% 35%,100.00% 43.00%,0.00% 43.00%,0% 35%);\n}\n\n.missed-shot:hover {\n    background-color: #7FDBFF;\n    background-color: white;\n}\n\n.missed-shot-from-computer {\n    background-color: rgba(255, 255, 255, 0.7);\n}\n\n.coloured-in-from-computer {\n    background-color: yellow;\n}\n\n.allied-ship-location {\n    background-color: var(--cyberYellow);\n    border: solid var(--cyberYellow) 1px;\n}\n\n.deploy-ships-btn {\n\n    grid-row: 2;\n    position: absolute;\n    justify-self: center;\n    align-self: center;\n    background-color: var(--cyberYellow);\n    font-family: 'Righteous';\n    font-size: 60px;\n    color: rgb(9, 9, 75);\n    max-width: 70vw;\n    height: fit-content;\n    \n    display: grid;\n    flex-wrap: wrap;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    border: none;\n}\n\n.deploy-ships-btn:hover {\n    color: var(--darkNavy);\n    border: none;\n    box-shadow: 0 5px 15px var(--cyberYellow);\n}\n\n.rotate-btn {\n    justify-self: center;\n    align-self: center;\n    margin-top: 10%;\n    margin-left: 395%;\n    background-color: var(--cyberYellow);\n    font-family: 'Righteous';\n    font-size: 60px;\n    color: rgb(9, 9, 75);\n    max-width: 70vw;\n    height: fit-content;\n    cursor: pointer;\n}\n\n.rotate-vertical {\n    transform: rotate(-0.25turn);\n}\n\n\n.invisible {\n    display: none;\n}\n\n.hide {\n    visibility: hidden;\n}\n\n.mini {\n    height: 5%;\n    width: 5%;\n}\n\n.invisible:hover {\n    cursor:default;\n}\n\n.placement-stage {\n    width: 5vw;\n    height: 6vh;\n}\n\n.board1.board-placement-stage {\n    grid-row: 2;\n    grid-column: 2;\n    justify-content: center;\n}\n\n\n.example-parent {\n    border: 2px solid #DFA612;\n    color: black;\n    display: flex;\n    font-family: sans-serif;\n    font-weight: bold;\n  }\n  \n  .example-origin {\n\n    position: absolute;\n    justify-content: center;\n  }\n  \n  .example-draggable {\n    background-color: #4AAE9B;\n    font-weight: normal;\n    \n  }\n\n  .example-draggable-img {\n    \n    max-width: 500px;\n    max-height: 420px;\n    width: 90%;\n    height: 70%; \n    justify-items: center;\n    align-self: center;\n    margin-top: -30%;\n    \n  }\n\n  #battleship.example-draggable-img {\n      max-width: 30%;\n      max-height: 30%;\n      margin-top: -40%;\n  }\n\n  #battleship.grabbing {\n      margin-top: -38%;\n      max-width: 16%;\n      max-height: 16%;\n  }\n\n  #carrier.example-draggable-img {\n      max-width: 100%;\n      max-height: 100%;\n      margin-left: -16%;\n  }\n\n  #carrier.grabbing {\n      margin-left: 0;\n      max-width: 30%;\n      max-height: 30%;\n  }\n\n\n  .grabbing {\n      max-width: 50%;\n      max-height: 20%;\n  }\n\n  .squares > .grabbing {\n      max-width: 100%;\n      max-height: 100%;\n  }\n\n\n  div.on-board > #submarine {\n      width: 200%;\n      z-index: 99;\n      opacity: 99%;\n  } \n\n  div.on-board > #submarine.rotate-vertical {\n      width: 100%;\n      height: 200%;\n      z-index: 99;\n      opacity: 99%;\n  }\n\n  div.on-board > #cruiser {\n      width: 230%;\n      opacity: 99%;\n  }\n\n  div.on-board > #cruiser.rotate-vertical {\n      width: 100%;\n      height: 200%;\n      z-index: 99;\n      opacity: 99%;\n  }\n  \n  div.on-board > #battleship {\n      transform: rotate(0deg);\n      width: 100%;\n      height: 400%;\n      z-index: 99;\n      opacity: 99%;\n  }\n\n  div.on-board > #battleship.rotate-vertical {\n      transform: rotate(270deg);\n      transform-origin: top center;\n      width: 96%;\n      height: 500%;\n      opacity: 99%;\n  }\n\n  div.on-board > #carrier {\n      width: 430%;\n      height: 100%;\n      opacity: 99%;\n  }\n\n  div.on-board > #carrier.rotate-vertical {\n      margin: 0;\n      transform-origin: top left;\n      width: 300%;\n      height: 100%;\n      position: relative;\n  }\n\n  \n  .example-dropzone {\n    background-color: #6DB65B;\n    background-color: rgba(255, 255, 255, 0.7);\n    width: 10%;\n    height: 20%;\n  }\n\n  .example-parent {\n      grid-column: 2;\n      grid-row: 2;\n      height: 52%;\n      width: 70%;\n      justify-self: center;\n      align-self: center;\n      margin-top: -20%;\n      margin-right: -5%;\n  }\n\n  img {\n      width: 100%;\n      height: 100%;\n  }\n\n  .drag-div {\n      grid-column: 2;\n      grid-row: 2;\n      justify-self: center;\n  }\n\n  .painted-square {\n    background: var(--cyberYellow);\n  }\n\n  .test-drop {\n      background-color: var(--cyberYellow);\n  }\n\n  .colour-this-square {\n      background-color: var(--cyberYellow);\n  }\n\n  .black {\n      background-color: black;\n  }\n\n  .cyan {\n      background-color: cyan;\n  }\n\n  .positioned-x-wing,\n  .positioned-submarine,\n  .positioned-cruiser,\n  .positioned-battleship,\n  .positioned-carrier {\n      background-color: var(--cyberYellow);\n      border: none;\n  }\n\n  .positioned-submarine {\n      padding-top: 15px;\n  }\n\n  .ready-btn { \n    justify-self: center;\n    align-self: center;\n    margin-top: 10%;\n    margin-left: 395%;\n    background-color: #d60338;\n    font-family: 'Righteous';\n    font-size: 60px;\n    color: rgb(9, 9, 75);\n    color: white;\n    max-width: 70vw;\n    height: fit-content;\n    padding: 7%;\n    cursor: pointer;\n  }\n\n  .board1-outside {\n\n    width: 25vw;\n    height: 35vh;\n    grid-column: 2;\n    grid-row: 2;\n    justify-self: center;\n    align-self: flex-end;\n\n  }\n\n  .hit-position-human {\n      background-color: red;\n  }\n\n  .certain-hit {\n      background-color: red;\n  }\n\n  .certain-miss {\n      background-color: white;\n  }\n\n  .victory-modal {\n      background-color: var(--darkNavy);\n      display: block;\n      width: 100vw;\n      height: 100vh;\n      opacity: 0.6;\n    position: absolute;\n    cursor: pointer;\n  }\n\n  .victory-modal > p {\n      text-align: center;\n      font-size: 7rem;\n      color: white;\n  }\n\n\n\n  \n\n  .fade{ \n      /* animation: glitch 2s linear 2s; */\n      animation: fade 1s linear 0s;\n  }\n  \n  .squares.fade {\n      cursor: not-allowed;\n  }\n\n  @keyframes glitch{\n\n    0% { opacity: 1}\n    100% { opacity: 0 }\n\n    99%,94%{\n      transform: translate(-99px,100) skew(0deg);\n    }\n    4%,60%{\n      transform: translate(99px,100) skew(10deg);\n    }\n    62%{\n      transform: translate(0,0) skew(75deg); \n    }\n  }\n\n  @keyframes fade {\n      0% { opacity: 0 }\n      100% { opacity: 1}\n  } \n  \n\n\n  .squares.placement-stage:after{\n    animation: glitchBotom 1.5s linear infinite;\n    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);\n    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);\n  }\n  \n\n\n@font-face {\n    font-family: 'Righteous';\n    src: url('./fonts/Righteous-Regular.ttf') format('truetype');\n}\n\n@keyframes pulse {\n    0%, 100% {\n        background-color: darkred;\n    }\n    50% {\n        background-color: crimson;\n    }\n}\n\n@keyframes append-animate {\n    from {\n        transform: scale(0);\n        opacity: 0;\n    }\n    to {\n        transform: scale(1);\n        opacity: 1;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ComputerPlayer.js":
/*!*******************************!*\
  !*** ./src/ComputerPlayer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputerPlayer": () => (/* binding */ ComputerPlayer)
/* harmony export */ });
function ComputerPlayer() {
  let horizontal = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let vertical = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let cpuMoves = [];

  const computerMove = () => {
    let xMove = Math.floor(Math.random() * 10);
    let yMove = Math.floor(Math.random() * 10);
    let computerShot = vertical[yMove] + horizontal[xMove];
    // <-- don't shoot the same location twice! Might not be the most performant implementation, but it works
    while (cpuMoves.includes(computerShot)) {
      xMove = Math.floor(Math.random() * 10);
      yMove = Math.floor(Math.random() * 10);
      computerShot = vertical[yMove] + horizontal[xMove];
    }
    cpuMoves.push(computerShot); // <-- always adds a new position;
    return computerShot;
  };

  return {
    computerMove,
    getComputerMoves() {
      return cpuMoves;
    },
    async attacks(theHumansBoard) {
      theHumansBoard.receiveAttack(computerMove());
    },
  };
}


/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _randomPositionsFor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./randomPositionsFor */ "./src/randomPositionsFor.js");
/* harmony import */ var _onGameOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onGameOver */ "./src/onGameOver.js");




function Gameboard() {
  let shipsHere = []; // <-- contains the coordinate locations on which ships have been placed
  let spotsTaken = []; // <-- does the same as shipsHere, but for computer (???)
  let missedShots = [];
  let sunkShips = [];
  let ship;
  let shipsObject = {};
  let targetShip;
  let allCoordinatesOnMap = [];
  let registeredHitsOnHuman = [];

  return {
    placeShip(shipModel, [...coordies]) {
      ship = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipModel);
      let coordinates = coordies;
      let obj = {};
      obj.ship = ship.getName();
      obj.damage = ship.damageReport();
      obj.hit = ship.hit;
      obj.isSunk = ship.isSunk;
      obj.getName = ship.getName;
      obj.getLength = ship.getLength;
      obj.positions = coordinates;
      shipsHere.push(obj); // <-- store each {ship:coord} inside [shipsHere];
      shipsObject[ship.getName()] = ship;
      allCoordinatesOnMap.push(coordies);
    },
    shipsPls() {
      return shipsHere;
    },
    shipsObjectPls() {
      return shipsObject;
    },

    registerComputerPositionsFor(typeOfShip) {
      let newPositionsToPlace = (0,_randomPositionsFor__WEBPACK_IMPORTED_MODULE_1__.randomPositionsFor)(typeOfShip);

      // <-- while newPositionsToPlace includes ANY coord that exists in spotsTaken, re-run the code
      if (spotsTaken.length > 0) {
        spotsTaken.forEach((arrai) => {
          while (newPositionsToPlace.some((val) => arrai.indexOf(val) !== -1)) {
            newPositionsToPlace = (0,_randomPositionsFor__WEBPACK_IMPORTED_MODULE_1__.randomPositionsFor)(typeOfShip);
          }
        });
      }

      spotsTaken.push(newPositionsToPlace);
      return newPositionsToPlace;
    },
    receiveAttack(coordinates) {
      try {
        let actualCoordinateDiv = document.querySelector("#" + coordinates);
        if (actualCoordinateDiv.classList.contains("on-board")) {
          actualCoordinateDiv.classList.add("certain-hit");
          (0,_onGameOver__WEBPACK_IMPORTED_MODULE_2__["default"])();
        }
        if (!actualCoordinateDiv.classList.contains("on-board")) {
          actualCoordinateDiv.classList.add("certain-miss");
        }
        //<-- if position has been hit before and was a miss, hit() => false
        if (missedShots.includes(coordinates)) {
          return false;
        }
        if (registeredHitsOnHuman.includes(coordinates)) return false;
        // <-- is there a ship at those coordinates? If yes, proceed with line below
        if (shipsHere.some((e) => e.positions.includes(coordinates))) {
          targetShip = shipsHere.find((e) => e.positions.includes(coordinates)); // <-- we get the ship at the input coordinates (the targeted ship's own object)
          if (targetShip.damage.includes(coordinates)) return false; // <-- if that position has already been hit, return false.

          targetShip.hit(coordinates);

          if (sunkShips.length === 5) {
            alert("ALL SHIPS SUNK");
            return false;
          }
          if (targetShip.isSunk()) {
            targetShip.isSunk = true;
            sunkShips.push(targetShip.getName());
            return true;
          }

          return true;
        } else {
          missedShots.push(coordinates);
          return false;
        }
      } catch (err) {
        return err;
      }
    },
    computerReceivesAttack(coordinates) {
      try {
        //<-- if position has been hit before and was a miss, hit() => false
        if (missedShots.includes(coordinates)) {
          return false;
        }
        if (registeredHitsOnHuman.includes(coordinates)) return false;
        // <-- is there a ship at those coordinates? If yes, proceed with line below
        if (shipsHere.some((e) => e.positions.includes(coordinates))) {
          targetShip = shipsHere.find((e) => e.positions.includes(coordinates)); // <-- we get the ship at the input coordinates (the targeted ship's own object)
          if (targetShip.damage.includes(coordinates)) return false; // <-- if that position has already been hit, return false.

          targetShip.hit(coordinates);
          if (sunkShips.length === 5) {
            return false;
          }
          if (targetShip.isSunk()) {
            targetShip.isSunk = true;
            sunkShips.push(targetShip.getName());
            return true;
          }

          return true;
        } else {
          missedShots.push(coordinates);
          return false;
        }
      } catch (err) {
        return err;
      }
    },
    missedHere() {
      return missedShots;
    },
    reportSunk() {
      if (sunkShips.length === 5) {
        alert("all ships sunk");
        return true;
      }
    },
    hoverLength() {
      switch (shipsHere.length) {
        case 0:
          return 2; // <-- no ships have been placed, current ship is a destroyer (2 squares)

        default:
          break;
      }
    },

    reportClickedSquare() {
      let board2 = document.querySelector(".board2");
      board2.addEventListener("click", function (e) {
        if (e.target.classList == "squares-computer") {
          let allCoordinatesOnMapArray = allCoordinatesOnMap; // <-- why am I storing a reference here?
          allCoordinatesOnMapArray.forEach((arr) => {
            if (arr.includes(e.target.id)) {
              let matchedSquare = e.target;
              matchedSquare.classList.add("coloured-in");
              (0,_onGameOver__WEBPACK_IMPORTED_MODULE_2__["default"])();
            }
          });
        }
        // <-- add event to callback queue; by runtime, the newly hit coordinate will have been added to the array
        setTimeout(() => {
          let alltheGoddarnSquaresAgain =
            document.querySelectorAll(".squares-computer");
          alltheGoddarnSquaresAgain.forEach((sq) => {
            if (missedShots.includes(sq.id)) {
              sq.classList.add("missed-shot");
            }
          });
        }, 100);
      });
    },

    //send that id to ReceiveAttacck
    newReceiveAttack(coordinates) {
      try {
        //<-- if position has been hit before, hit() => false
        // <-- is there a ship at those coordinates? If yes, proceed with line below
        if (shipsHere.some((e) => e.positions.includes(coordinates))) {
          targetShip = shipsHere.find((e) => e.positions.includes(coordinates)); // <-- we get the ship at the input coordinates (the targeted ship's own object)
          if (targetShip.damage.includes(coordinates)) return false; //
          targetShip.hit(coordinates);
          if (targetShip.isSunk()) {
            targetShip.isSunk = true;
            sunkShips.push(targetShip.getName());
            return true;
          }
          return `${targetShip.getName()} hit, HP: ${targetShip.getLength()}`;
        } else {
          missedShots.push(coordinates);
          return false;
        }
      } catch (err) {
        return err;
      }
    },
    getAllCoordinatesOnMap() {
      console.log(
        "MESSAGE FROM COMMANDER DATA: \n Commander, Lt. Commander LaForge has repurposed the corbo-handwavium drive to reveal enemy coordinates..."
      );
      console.table(allCoordinatesOnMap);
    },
  };
}


/***/ }),

/***/ "./src/HumanPlayer.js":
/*!****************************!*\
  !*** ./src/HumanPlayer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HumanPlayer)
/* harmony export */ });
function HumanPlayer(nameOfPlayer) {
  return {
    playerName() {
      return nameOfPlayer;
    },
    attacks(theComputersBoard) {
      let computerBoard = document.querySelector(".board2");
      computerBoard.addEventListener("click", function (e) {
        theComputersBoard.receiveAttack(e.target.id);
      });
    },
    async sendsAttack(theComputersBoard, theComputerPlayer, theHumansBoard) {
      let computerBoard = document.querySelector(".board2");
      computerBoard.addEventListener("click", function (e) {
        theComputersBoard.computerReceivesAttack(e.target.id);
        theComputerPlayer.attacks(theHumansBoard);
      });
    },
  };
}


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(shipType) {
  let length;
  let previouslyHit = [];
  let shipName;
  let originalLength;
  switch (shipType) {
    case "destroyer":
      length = 1;
      originalLength = 1;
      shipName = "destroyer";
      break;

    case "submarine":
      length = 2;
      originalLength = 2;
      shipName = "submarine";
      break;

    case "cruiser":
      length = 3;
      originalLength = 3;
      shipName = "cruiser";
      break;

    case "battleship":
      length = 4;
      originalLength = 4;
      shipName = "battleship";
      break;

    case "carrier":
      length = 5;
      originalLength = 5;
      shipName = "carrier";
      break;

    default:
      break;
  }
  return {
    getLength() {
      return length;
    },
    hit(position) {
      if (previouslyHit.includes(position)) return false;
      length--;
      previouslyHit.push(position);

      return;
    },
    isSunk() {
      if (previouslyHit.length === originalLength || length <= 0) {
        return true;
      } else {
        return false;
      }
    },
    getName() {
      return shipName;
    },
    damageReport() {
      return previouslyHit;
    },
  };
}


/***/ }),

/***/ "./src/coinToss.js":
/*!*************************!*\
  !*** ./src/coinToss.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ coinToss),
/* harmony export */   "randomForSubmarine": () => (/* binding */ randomForSubmarine),
/* harmony export */   "randomLimiterFor": () => (/* binding */ randomLimiterFor),
/* harmony export */   "randomOutOfTen": () => (/* binding */ randomOutOfTen)
/* harmony export */ });
/* harmony import */ var _getLogicLengthOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLogicLengthOf */ "./src/getLogicLengthOf.js");


function coinToss() {
  let num = Math.floor(Math.random() * 2);
  if (num === 1) return "horizontal";
  return "vertical";
}

function randomOutOfTen() {
  return Math.floor(Math.random() * 10);
}

function randomForSubmarine() {
  return Math.floor(Math.random() * 8);
}

function randomLimiterFor(typeOfShip) {
  let length = (0,_getLogicLengthOf__WEBPACK_IMPORTED_MODULE_0__["default"])(typeOfShip);
  return Math.floor(Math.random() * length);
}


/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ component)
/* harmony export */ });
function component() {
  const element = document.createElement("div");
  const background = document.createElement("div");
  background.classList.add("bg");

  //Title
  const title = document.createElement("h1");
  title.innerHTML = "Starship";
  //Div to attach both gameboard and draggable images to
  const dragDiv = document.createElement("div");
  dragDiv.classList.add("drag-div");
  background.appendChild(title);
  background.appendChild(dragDiv);
  element.appendChild(background);
  return element;
}


/***/ }),

/***/ "./src/createReadyBtn.js":
/*!*******************************!*\
  !*** ./src/createReadyBtn.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createReadyBtn)
/* harmony export */ });
/* harmony import */ var _generateComputerHologram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateComputerHologram */ "./src/generateComputerHologram.js");
/* harmony import */ var _repositionBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repositionBoard */ "./src/repositionBoard.js");



function createReadyBtn() {
  removeRotateBtn();
  let readyBtn = document.createElement("button");
  readyBtn.innerHTML = "READY";
  readyBtn.classList.add("ready-btn");
  readyBtn.id = "ready-button";
  readyBtn.addEventListener("click", function () {
    (0,_repositionBoard__WEBPACK_IMPORTED_MODULE_1__["default"])();
    removeReadyBtn();
    (0,_repositionBoard__WEBPACK_IMPORTED_MODULE_1__.repositionBoardOne)();
    (0,_generateComputerHologram__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
  let btnContainerDiv = document.querySelector("#btn-container-div");
  btnContainerDiv.appendChild(readyBtn);
}

const removeRotateBtn = () => {
  let rotateBtn = document.querySelector("#rotate-button");
  rotateBtn.parentNode.removeChild(rotateBtn);
};

const removeReadyBtn = () => {
  let readyBtn = document.querySelector("#ready-button");
  readyBtn.parentNode.removeChild(readyBtn);
};


/***/ }),

/***/ "./src/deployShipsBtn.js":
/*!*******************************!*\
  !*** ./src/deployShipsBtn.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDeployShipsBtn)
/* harmony export */ });
function addDeployShipsBtn() {
  const deployShipsBtn = document.createElement("button");
  deployShipsBtn.classList.add("deploy-ships-btn");
  deployShipsBtn.innerHTML = "ENGAGE";
  const background = document.querySelector(".bg");
  background.appendChild(deployShipsBtn);
  return background;
}


/***/ }),

/***/ "./src/displayVictoryModal.js":
/*!************************************!*\
  !*** ./src/displayVictoryModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayVictoryModal)
/* harmony export */ });
function displayVictoryModal(winner) {
  let modalContainer = document.createElement("div");
  modalContainer.classList.add("victory-modal");
  let msg = document.createElement("p");
  msg.classList.add("victory-modal-msg");
  msg.innerHTML = `${winner}\nwins!`;
  modalContainer.appendChild(msg);

  let bg = document.querySelector(".bg");
  bg.appendChild(modalContainer);

  modalContainer.addEventListener("click", function () {
    location.reload();
  });
}


/***/ }),

/***/ "./src/dragShipImages.js":
/*!*******************************!*\
  !*** ./src/dragShipImages.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dragShipImages)
/* harmony export */ });
/* harmony import */ var _img_xwing_cropped_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/xwing-cropped.png */ "./src/img/xwing-cropped.png");
/* harmony import */ var _lastPaintedCoords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lastPaintedCoords */ "./src/lastPaintedCoords.js");



function dragShipImages() {
  //Wait for ENGAGE button click to present the ships:
  let engageBtn = document.querySelector(".deploy-ships-btn");
  engageBtn.addEventListener("click", function () {
    const exampleOrigin = document.createElement("div");
    exampleOrigin.classList.add("example-origin");
    const xWing = document.createElement("img");
    xWing.id = "x-wing";
    xWing.src = _img_xwing_cropped_png__WEBPACK_IMPORTED_MODULE_0__;
    xWing.classList.add("example-draggable-img");
    xWing.draggable = true;
    exampleOrigin.appendChild(xWing);
    xWing.addEventListener("dragstart", function (e) {
      if (e.target.parentNode.classList.contains("positioned-x-wing"))
        e.target.parentNode.classList.remove("positioned-x-wing");
      onDragStart(e);
    });

    setTimeout(() => {
      let draggit = document.querySelector(".drag-div");
      draggit.appendChild(exampleOrigin);
    }, 320);
  });
}

function onDragStart(e) {
  if (e.currentTarget.parentNode.classList.contains("squares")) {
    // <-- 'If the image we're dragging has already been placed in the gameboard'

    let oldPaint = (0,_lastPaintedCoords__WEBPACK_IMPORTED_MODULE_1__.reportPaint)();
    for (let i = 0; i < oldPaint.length; i++) {
      let elementToDepaint = document.getElementById(oldPaint[i]);
      elementToDepaint.classList.remove("colour-this-square");
    }
    (0,_lastPaintedCoords__WEBPACK_IMPORTED_MODULE_1__.clearRecord)();
  }
  e.dataTransfer.setData("text/plain", e.target.id);
  e.dataTransfer.setDragImage(e.target, 0, 0);
  if (e.currentTarget.classList.contains("grabbing")) return;
  e.currentTarget.classList.add("grabbing");
}


/***/ }),

/***/ "./src/generateComputerHologram.js":
/*!*****************************************!*\
  !*** ./src/generateComputerHologram.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateComputerHologram)
/* harmony export */ });
/* harmony import */ var _newGamePlus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newGamePlus */ "./src/newGamePlus.js");


function generateComputerHologram() {
  const board2 = document.createElement("div");
  board2.classList.add("boards");
  board2.classList.add("board2");

  let constructHorizontalComputer = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];
  let constructVerticalComputer = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
  ];
  for (let i = 0; i < constructHorizontalComputer.length; i++) {
    let currentLetter = constructVerticalComputer[i]; // <--- get a letter (example: A)
    //Then, loop through the numbers array 10 times,
    for (let j = 0; j < constructVerticalComputer.length; j++) {
      let square = document.createElement("div");
      square.id = currentLetter + constructHorizontalComputer[j]; // making its id equal the current letter + a number, up to number 10. Example: A7
      square.classList.add("squares-computer");
      board2.appendChild(square);
    }
  }
  let bg = document.querySelector(".bg");
  bg.appendChild(board2);
  (0,_newGamePlus__WEBPACK_IMPORTED_MODULE_0__["default"])();
}


/***/ }),

/***/ "./src/generateHumanHologram.js":
/*!**************************************!*\
  !*** ./src/generateHumanHologram.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateHumanHologram)
/* harmony export */ });
/* harmony import */ var _paintLength__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paintLength */ "./src/paintLength.js");
/* harmony import */ var _presentNextImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentNextImage */ "./src/presentNextImage.js");
/* harmony import */ var _rotateImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rotateImg */ "./src/rotateImg.js");




function generateHumanHologram() {
  let markedAsPlaced = [];
  let btn = document.querySelector(".deploy-ships-btn");
  btn.addEventListener("click", function (e) {
    const board1 = document.createElement("div");
    board1.classList.add("boards");
    board1.classList.add("board1");

    let constructHorizontal = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
    ];
    let constructVertical = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    for (let i = 0; i < constructHorizontal.length; i++) {
      let currentLetter = constructVertical[i]; // <--- get a letter (example: A)
      //Then, loop through the numbers array 10 times,
      for (let j = 0; j < constructVertical.length; j++) {
        let square = document.createElement("div");
        square.id = currentLetter + constructHorizontal[j]; // making its id equal the current letter + a number, up to number 10.
        square.classList.add("squares");
        square.classList.add("placement-stage");
        square.classList.add("squares-animation");

        board1.appendChild(square);
      }
    }
    board1.classList.add("board-placement-stage");
    let bg = document.querySelector(".bg");
    let dragBoi = document.querySelector(".drag-div");
    dragBoi.appendChild(board1);
    bg.appendChild(dragBoi);
    e.target.parentNode.removeChild(e.target); // <--- removes the 'ENGAGE' button upon click

    // give this hologram Drag & Drop functionality:

    board1.addEventListener("dragover", function (e) {
      onDragOver(e);
    });
    board1.addEventListener("drop", function (e) {
      onDrop(e);
    });
    function onDragOver(e) {
      e.preventDefault();
    }

    function onDrop(e) {
      let id = e.dataTransfer.getData("text");
      let draggableElement = document.getElementById(id);
      let dropzone = e.target;
      dropzone.appendChild(draggableElement);
      // Get the next image:
      markedAsPlaced.push(id);
      if (markedAsPlaced.length > 1) markedAsPlaced.shift();
      let imgID = markedAsPlaced[0];
      let sqID = e.target.id;
      (0,_paintLength__WEBPACK_IMPORTED_MODULE_0__["default"])(imgID, sqID);
      e.dataTransfer.clearData();
      draggableElement.classList.remove("example-draggable-img");
      draggableElement.classList.remove("grabbing");
      (0,_presentNextImage__WEBPACK_IMPORTED_MODULE_1__["default"])(markedAsPlaced);
    }
    setTimeout(() => {
      let btnContainerDiv = document.createElement("div");
      btnContainerDiv.id = "btn-container-div";
      let rotateBtn = document.createElement("button");
      rotateBtn.id = "rotate-button";
      rotateBtn.innerHTML = "rotate";
      rotateBtn.classList = "rotate-btn";
      btnContainerDiv.classList.add("rotate-btn-container");
      btnContainerDiv.appendChild(rotateBtn);

      board1.appendChild(btnContainerDiv);
      (0,_rotateImg__WEBPACK_IMPORTED_MODULE_2__.rotateImg)();
    }, 300);
  });
}


/***/ }),

/***/ "./src/getLogicLengthOf.js":
/*!*********************************!*\
  !*** ./src/getLogicLengthOf.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLogicLengthFor)
/* harmony export */ });
function getLogicLengthFor(typeOfShip) {
  switch (typeOfShip) {
    case "destroyer":
      return 1;

    case "submarine":
      return 2;

    case "cruiser":
      return 3;

    case "battleship":
      return 4;

    case "carrier":
      return 5;

    default:
      break;
  }
}


/***/ }),

/***/ "./src/getNextLengthToBePlaced.js":
/*!****************************************!*\
  !*** ./src/getNextLengthToBePlaced.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLengthOf)
/* harmony export */ });
function getLengthOf(imgID) {
  switch (imgID) {
    case "x-wing":
      return 1;

    case "submarine":
      return 2;

    case "cruiser":
      return 3;

    case "battleship":
      return 4;

    case "carrier":
      return 5;

    default:
      break;
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/component.js");
/* harmony import */ var _deployShipsBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deployShipsBtn */ "./src/deployShipsBtn.js");
/* harmony import */ var _generateHumanHologram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateHumanHologram */ "./src/generateHumanHologram.js");
/* harmony import */ var _dragShipImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dragShipImages */ "./src/dragShipImages.js");






document.body.appendChild((0,_component__WEBPACK_IMPORTED_MODULE_1__["default"])());
document.body.appendChild((0,_deployShipsBtn__WEBPACK_IMPORTED_MODULE_2__["default"])());
(0,_generateHumanHologram__WEBPACK_IMPORTED_MODULE_3__["default"])(); // <-- on click
(0,_dragShipImages__WEBPACK_IMPORTED_MODULE_4__["default"])();


/***/ }),

/***/ "./src/lastPaintedCoords.js":
/*!**********************************!*\
  !*** ./src/lastPaintedCoords.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearRecord": () => (/* binding */ clearRecord),
/* harmony export */   "default": () => (/* binding */ lastPaintedCoords),
/* harmony export */   "reportPaint": () => (/* binding */ reportPaint)
/* harmony export */ });
let paintedLocation = [];

function lastPaintedCoords(newCoord) {
  paintedLocation.push(newCoord);
}

function reportPaint() {
  return paintedLocation;
}

function clearRecord() {
  paintedLocation = [];
}


/***/ }),

/***/ "./src/newGamePlus.js":
/*!****************************!*\
  !*** ./src/newGamePlus.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newGamePlus)
/* harmony export */ });
/* harmony import */ var _ComputerPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComputerPlayer */ "./src/ComputerPlayer.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _HumanPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HumanPlayer */ "./src/HumanPlayer.js");
/* harmony import */ var _setPositionLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setPositionLogic */ "./src/setPositionLogic.js");





//This file runs the main game loop. I have noted that I need to name my functions more clearly.

function newGamePlus() {
  // <-- Only run functions, must not write new code here.
  let human = (0,_HumanPlayer__WEBPACK_IMPORTED_MODULE_2__["default"])("human");
  let humanBoard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();
  let computer = (0,_ComputerPlayer__WEBPACK_IMPORTED_MODULE_0__.ComputerPlayer)();
  let computerBoard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();

  humanBoard.placeShip("destroyer", (0,_setPositionLogic__WEBPACK_IMPORTED_MODULE_3__["default"])("x-wing"));
  humanBoard.placeShip("submarine", (0,_setPositionLogic__WEBPACK_IMPORTED_MODULE_3__["default"])("submarine"));
  humanBoard.placeShip("cruiser", (0,_setPositionLogic__WEBPACK_IMPORTED_MODULE_3__["default"])("cruiser"));
  humanBoard.placeShip("battleship", (0,_setPositionLogic__WEBPACK_IMPORTED_MODULE_3__["default"])("battleship"));
  humanBoard.placeShip("carrier", (0,_setPositionLogic__WEBPACK_IMPORTED_MODULE_3__["default"])("carrier"));

  computerBoard.placeShip(
    "destroyer",
    computerBoard.registerComputerPositionsFor("destroyer")
  );
  computerBoard.placeShip(
    "submarine",
    computerBoard.registerComputerPositionsFor("submarine")
  );
  computerBoard.placeShip(
    "cruiser",
    computerBoard.registerComputerPositionsFor("cruiser")
  );
  computerBoard.placeShip(
    "battleship",
    computerBoard.registerComputerPositionsFor("battleship")
  );
  computerBoard.placeShip(
    "carrier",
    computerBoard.registerComputerPositionsFor("carrier")
  );

  computerBoard.getAllCoordinatesOnMap(); // <-- reveal computer ships in the console
  computerBoard.reportClickedSquare(); // <---- Computer board colours in matching positions

  human.sendsAttack(computerBoard, computer, humanBoard);
}


/***/ }),

/***/ "./src/onGameOver.js":
/*!***************************!*\
  !*** ./src/onGameOver.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onGameOver)
/* harmony export */ });
/* harmony import */ var _displayVictoryModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayVictoryModal */ "./src/displayVictoryModal.js");


function onGameOver() {
  let hitsOnComputer = document.querySelectorAll(".coloured-in");
  let hitsOnHuman = document.querySelectorAll(".certain-hit");
  if (hitsOnComputer.length === 15) {
    setTimeout(() => {
      (0,_displayVictoryModal__WEBPACK_IMPORTED_MODULE_0__["default"])("human");
    }, 190);
  }
  if (hitsOnHuman.length === 15) {
    setTimeout(() => {
      (0,_displayVictoryModal__WEBPACK_IMPORTED_MODULE_0__["default"])("computer");
    }, 190);
  }
}


/***/ }),

/***/ "./src/paintLength.js":
/*!****************************!*\
  !*** ./src/paintLength.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ paintLength)
/* harmony export */ });
/* harmony import */ var _getNextLengthToBePlaced__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNextLengthToBePlaced */ "./src/getNextLengthToBePlaced.js");
/* harmony import */ var _lastPaintedCoords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lastPaintedCoords */ "./src/lastPaintedCoords.js");



function paintLength(imageIdee, squareIdee, orientation) {
  if (orientation === undefined) orientation = "horizontal";
  let theImage = document.getElementById(imageIdee);
  if (theImage.classList.contains("rotate-vertical")) orientation = "vertical";
  if (
    theImage.id === "battleship" &&
    !theImage.classList.contains("rotate-vertical")
  )
    orientation = "vertical";
  if (
    theImage.id === "battleship" &&
    theImage.classList.contains("rotate-vertical")
  )
    orientation = "horizontal";

  let letterCells = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  if (orientation === "vertical") {
    let lengthToFill = (0,_getNextLengthToBePlaced__WEBPACK_IMPORTED_MODULE_0__["default"])(imageIdee);
    let num = Number(squareIdee.substring(1));
    let theLetter = squareIdee.charAt(0);
    let indexOfLetter = letterCells.indexOf(theLetter);

    //do not proceed if vertical overflow

    if (indexOfLetter + lengthToFill > 10) {
      console.log(indexOfLetter + "would overflow the map, cannot place there");

      return false;
    }

    for (let i = 0; i < lengthToFill; i++) {
      let letter = letterCells[indexOfLetter];
      let coordData = letter + num;
      let coordToPaint = document.getElementById(coordData);
      let classToAdd = "positioned-" + imageIdee;
      coordToPaint.classList.add(classToAdd);
      coordToPaint.classList.toggle("on-board");
      (0,_lastPaintedCoords__WEBPACK_IMPORTED_MODULE_1__["default"])(coordData);
      indexOfLetter++; // <--- A vertical line
    }
  }

  ///horizontal positioning

  if (orientation === "horizontal") {
    let lengthToFill = (0,_getNextLengthToBePlaced__WEBPACK_IMPORTED_MODULE_0__["default"])(imageIdee);
    let letter = squareIdee.charAt(0);
    let num = Number(squareIdee.substring(1));

    //do not proceed if horizontal overflow

    if (num + lengthToFill - 1 > 10) {
      return false;
    }

    for (let i = 0; i < lengthToFill; i++) {
      let coordData = letter + num;
      let coordToPaint = document.getElementById(coordData);
      let classToAdd = "positioned-" + imageIdee;
      coordToPaint.classList.add(classToAdd);
      coordToPaint.classList.toggle("on-board");

      (0,_lastPaintedCoords__WEBPACK_IMPORTED_MODULE_1__["default"])(coordData);
      num++; // <-- a horizontal line
    }
  }
}


/***/ }),

/***/ "./src/presentNextImage.js":
/*!*********************************!*\
  !*** ./src/presentNextImage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ presentNextImage)
/* harmony export */ });
/* harmony import */ var _img_resurrection_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/resurrection.png */ "./src/img/resurrection.png");
/* harmony import */ var _img_enterprise2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/enterprise2.png */ "./src/img/enterprise2.png");
/* harmony import */ var _img_gundam_suit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/gundam-suit.png */ "./src/img/gundam-suit.png");
/* harmony import */ var _img_super_star_destroyer_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/super-star-destroyer.png */ "./src/img/super-star-destroyer.png");
/* harmony import */ var _createReadyBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createReadyBtn */ "./src/createReadyBtn.js");






function presentNextImage(arrayOfPictureIDs) {
  let nextImage = document.createElement("img");
  let exampleOrigin = document.querySelector(".example-origin");

  switch (arrayOfPictureIDs[0]) {
    case "x-wing":
      nextImage.src = _img_resurrection_png__WEBPACK_IMPORTED_MODULE_0__;
      nextImage.id = "submarine";

      break;
    case "submarine":
      nextImage.src = _img_enterprise2_png__WEBPACK_IMPORTED_MODULE_1__;
      nextImage.id = "cruiser";
      break;

    case "cruiser":
      nextImage.src = _img_gundam_suit_png__WEBPACK_IMPORTED_MODULE_2__;
      nextImage.id = "battleship";
      break;

    case "battleship":
      nextImage.src = _img_super_star_destroyer_png__WEBPACK_IMPORTED_MODULE_3__;
      nextImage.id = "carrier";
      break;

    case "carrier":
      (0,_createReadyBtn__WEBPACK_IMPORTED_MODULE_4__["default"])();
      break;

    default:
      break;
  }

  nextImage.classList.add("example-draggable-img");
  nextImage.classList.add("aboslute-position");
  nextImage.draggable = true;
  //check how many divs in example-origin (the div where new images appear)
  if (exampleOrigin.childElementCount > 0) return;
  //the code below will only run if exampleOrigin is empty
  exampleOrigin.appendChild(nextImage);
  nextImage.addEventListener("dragstart", function (e) {
    function onDragStart(e) {
      let starShipName = arrayOfPictureIDs[0];
      let classToRemove = "positioned-" + starShipName;
      if (e.target.parentNode.classList.contains(classToRemove)) {
        let oldPositionsToRemove = document.querySelectorAll(
          "." + classToRemove
        );
        for (let i = 0; i < oldPositionsToRemove.length; i++) {
          let toBeRestyled = oldPositionsToRemove[i];
          toBeRestyled.classList.remove(classToRemove);
        }
      }

      e.dataTransfer.setData("text/plain", e.target.id);
      e.dataTransfer.setDragImage(e.target, 0, 0);
      e.currentTarget.classList.add("grabbing");
    }

    onDragStart(e);
  });
}


/***/ }),

/***/ "./src/randomPositionsFor.js":
/*!***********************************!*\
  !*** ./src/randomPositionsFor.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomPositionsFor": () => (/* binding */ randomPositionsFor)
/* harmony export */ });
/* harmony import */ var _coinToss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coinToss */ "./src/coinToss.js");


const randomPositionsFor = (typeOfShip) => {
  let coordsToSet = []; // <-- this stores all the coords that will be returned
  let shipLength;
  let horizontalNumberArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];
  let verticalLetterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  let orientation = (0,_coinToss__WEBPACK_IMPORTED_MODULE_0__["default"])();

  let ySpot;
  let xSpot;

  switch (typeOfShip) {
    case "destroyer":
      shipLength = 1;
      break;

    case "submarine":
      shipLength = 2;
      break;

    case "cruiser":
      shipLength = 3;
      break;

    case "battleship":
      shipLength = 4;
      break;

    case "carrier":
      shipLength = 5;
      break;

    default:
      break;
  }

  //Depending on its orientation, add value on iteration.
  //The limiters allow us to make sure we're not placing spots outside of the board
  if (orientation == "horizontal") {
    xSpot = (0,_coinToss__WEBPACK_IMPORTED_MODULE_0__.randomLimiterFor)(typeOfShip);
    ySpot = (0,_coinToss__WEBPACK_IMPORTED_MODULE_0__.randomOutOfTen)();

    for (let i = 0; i < shipLength; i++) {
      let newShipCoordinate =
        verticalLetterArray[ySpot] + horizontalNumberArray[xSpot];
      coordsToSet.push(newShipCoordinate);
      xSpot++;
    }
  }

  if (orientation == "vertical") {
    ySpot = (0,_coinToss__WEBPACK_IMPORTED_MODULE_0__.randomLimiterFor)(typeOfShip);
    xSpot = (0,_coinToss__WEBPACK_IMPORTED_MODULE_0__.randomOutOfTen)();

    for (let i = 0; i < shipLength; i++) {
      let newShipCoordinate =
        verticalLetterArray[ySpot] + horizontalNumberArray[xSpot];
      coordsToSet.push(newShipCoordinate);
      ySpot++;
    }
  }

  return coordsToSet;
};


/***/ }),

/***/ "./src/repositionBoard.js":
/*!********************************!*\
  !*** ./src/repositionBoard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ readyBtnClick),
/* harmony export */   "repositionBoardOne": () => (/* binding */ repositionBoardOne)
/* harmony export */ });
function readyBtnClick() {
  let board1 = document.querySelector(".board1");
  let allSquares = document.querySelectorAll(".squares");
  let allImages = document.querySelectorAll("img");
  board1.classList.remove("board-placement-stage");
  allSquares.forEach((sq) => {
    sq.classList.remove("placement-stage");
    sq.classList.remove("squares-animation");
  });
  allImages.forEach((img) => img.parentNode.removeChild(img));
}

function repositionBoardOne() {
  let allSq = document.querySelectorAll(".squares");
  allSq.forEach((sq) => sq.classList.add("fade"));
  removeBtnContainerDiv();
  let boardOneInContainer = document.querySelector(".board1");
  let board1Outside;
  board1Outside = boardOneInContainer;
  let dragDiv = document.querySelector(".drag-div");
  dragDiv.removeChild(boardOneInContainer);
  dragDiv.parentNode.removeChild(dragDiv);
  let bg = document.querySelector(".bg");
  board1Outside.classList.add("board1-outside");
  bg.appendChild(board1Outside);
}

function removeBtnContainerDiv() {
  let btnContainerDiv = document.querySelector("#btn-container-div");
  btnContainerDiv.parentNode.removeChild(btnContainerDiv);
}


/***/ }),

/***/ "./src/rotateImg.js":
/*!**************************!*\
  !*** ./src/rotateImg.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rotateImg": () => (/* binding */ rotateImg)
/* harmony export */ });
function rotateImg() {
  let rotateBtn = document.querySelector("#rotate-button");
  rotateBtn.addEventListener("click", function () {
    let draggableImg = document.querySelector(".example-draggable-img");
    draggableImg.classList.toggle("rotate-vertical");
    console.log("rotating...");
  });
}


/***/ }),

/***/ "./src/setPositionLogic.js":
/*!*********************************!*\
  !*** ./src/setPositionLogic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setPositionLogic)
/* harmony export */ });
//This function scans the DOM for positioned ships and then returns the [positions] of the ship given as parameter.

function setPositionLogic(shipType) {
  let filled = document.querySelectorAll(".on-board");
  let positions = [];

  for (let i = 0; i < filled.length; i++) {
    let current = filled[i];
    if (current.classList.contains("positioned-" + shipType)) {
      positions.push(current.id);
    }
  }

  return positions;
}


/***/ }),

/***/ "./src/fonts/Righteous-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/Righteous-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd0110471f2228c1808a.ttf";

/***/ }),

/***/ "./src/img/cockpit.jpg":
/*!*****************************!*\
  !*** ./src/img/cockpit.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ec85847c1a87ba7eb7a.jpg";

/***/ }),

/***/ "./src/img/enterprise2.png":
/*!*********************************!*\
  !*** ./src/img/enterprise2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f55b997709109e50ee31.png";

/***/ }),

/***/ "./src/img/gundam-suit.png":
/*!*********************************!*\
  !*** ./src/img/gundam-suit.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "915653bdad1881d2c266.png";

/***/ }),

/***/ "./src/img/resurrection.png":
/*!**********************************!*\
  !*** ./src/img/resurrection.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81f8d89798b78efad767.png";

/***/ }),

/***/ "./src/img/super-star-destroyer.png":
/*!******************************************!*\
  !*** ./src/img/super-star-destroyer.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90506ed87c6609f7545f.png";

/***/ }),

/***/ "./src/img/xwing-cropped.png":
/*!***********************************!*\
  !*** ./src/img/xwing-cropped.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "672070fabd9a43c7ac51.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFV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QTtBQUNBO0FBQ0EsWUFBWSwyREFBZ0I7QUFDNUIsWUFBWSx5REFBYzs7QUFFMUIsb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDJEQUFnQjtBQUM1QixZQUFZLHlEQUFjOztBQUUxQixvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUEsa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvQ29tcHV0ZXJQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9IdW1hblBsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb2luVG9zcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NyZWF0ZVJlYWR5QnRuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGVwbG95U2hpcHNCdG4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5VmljdG9yeU1vZGFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZHJhZ1NoaXBJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nZW5lcmF0ZUNvbXB1dGVySG9sb2dyYW0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nZW5lcmF0ZUh1bWFuSG9sb2dyYW0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nZXRMb2dpY0xlbmd0aE9mLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2V0TmV4dExlbmd0aFRvQmVQbGFjZWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xhc3RQYWludGVkQ29vcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbmV3R2FtZVBsdXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9vbkdhbWVPdmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGFpbnRMZW5ndGguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wcmVzZW50TmV4dEltYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmFuZG9tUG9zaXRpb25zRm9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVwb3NpdGlvbkJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcm90YXRlSW1nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2V0UG9zaXRpb25Mb2dpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvY29ja3BpdC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JpZ2h0ZW91cy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogUmlnaHRlb3VzO1xcbiAgICAtLWN5YmVyWWVsbG93OiAjRkZEQzAwO1xcbiAgICAtLXNsZWVrR3JleTogI0RERERERDtcXG4gICAgLS1hcXVhdGljQmx1ZTogIzdGREJGRjtcXG4gICAgLS1waXJhdGVOYXZ5OiAjMDAxZjNmO1xcbiAgICAtLWRhcmtOYXZ5OiAjMDAxZjNmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYmcge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxZjNmO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5oMSB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0N3B4O1xcbiAgICBjb2xvcjogdmFyKC0tY3liZXJZZWxsb3cpO1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGhlaWdodDogNjl2aDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uYm9hcmRzLmJvYXJkMSB7XFxuICAgIFxcbiAgICB3aWR0aDogMjV2dztcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBcXG59XFxuXFxuLmJvYXJkcyBkaXY6bnRoLWNoaWxkKDEwbisxKSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAydnc7XFxuICAgIHdpZHRoOiA1dnc7XFxufVxcblxcblxcbi5ib2FyZHMgZGl2Om50aC1jaGlsZCgxMG4rMTApIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAydnc7XFxuICAgIHdpZHRoOiA1dnc7XFxufVxcblxcbi5ib2FyZHMgZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4uYm9hcmRzIGRpdjpudGgtb2YtdHlwZSg5MSkge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4uYm9hcmRzIGRpdjpudGgtb2YtdHlwZSgxMCkge1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwJTtcXG59XFxuXFxuZGl2I0oxMC5zcXVhcmVzIHtcXG5cXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XFxufVxcblxcblxcblxcbi5zcXVhcmVzLWNvbXB1dGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyMCwgMCwgMC43KTtcXG59XFxuXFxuLmJvYXJkcy5ib2FyZDJ7XFxuICAgIGJvcmRlcjpkYXNoZWQgMXB4IHJnYmEoMjU1LCAyMjAsIDAsIDAuMSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMCU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMCU7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxuICAgIFxcbiAgICBncmlkLXJvdzoyO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuXFxuLmJvYXJkczpob3ZlciB7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgICBcXG59XFxuXFxuLnNxdWFyZXMtY29tcHV0ZXIge1xcbiAgICBib3JkZXI6IGRhc2hlZCAxcHggdmFyKC0tY3liZXJZZWxsb3cpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcbi5zcXVhcmVzIHtcXG4gICAgYm9yZGVyOiBzb2xpZCBjeWFuIDFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3F1YXJlcy1hbmltYXRpb24ge1xcbiAgICBhbmltYXRpb246IGFwcGVuZC1hbmltYXRlIC4zcyBsaW5lYXI7XFxufVxcblxcbi5jdXJzb3Itbm90LWFsbG93ZWQge1xcbiAgICBjdXJzb3I6bm90LWFsbG93ZWQ7XFxufVxcblxcbi5zcXVhcmVzLWNvbXB1dGVyOmZpcnN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4uaG92ZXJlZC1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5yZXZlYWxlZC1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG59XFxuXFxuXFxuLmNvbG91cmVkLWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBhbmltYXRpb246IHB1bHNlIDVzIGluZmluaXRlO1xcbn1cXG5cXG4uY29sb3VyZWQtaW46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmN5YW47XFxufVxcblxcbi5taXNzZWQtc2hvdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAzNSUsMTAwLjAwJSA0My4wMCUsMC4wMCUgNDMuMDAlLDAlIDM1JSk7XFxufVxcblxcbi5taXNzZWQtc2hvdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3RkRCRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWlzc2VkLXNob3QtZnJvbS1jb21wdXRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxuLmNvbG91cmVkLWluLWZyb20tY29tcHV0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5hbGxpZWQtc2hpcC1sb2NhdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YmVyWWVsbG93KTtcXG4gICAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jeWJlclllbGxvdykgMXB4O1xcbn1cXG5cXG4uZGVwbG95LXNoaXBzLWJ0biB7XFxuXFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YmVyWWVsbG93KTtcXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnO1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGNvbG9yOiByZ2IoOSwgOSwgNzUpO1xcbiAgICBtYXgtd2lkdGg6IDcwdnc7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRlcGxveS1zaGlwcy1idG46aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZGFya05hdnkpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggdmFyKC0tY3liZXJZZWxsb3cpO1xcbn1cXG5cXG4ucm90YXRlLWJ0biB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDM5NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YmVyWWVsbG93KTtcXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnO1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGNvbG9yOiByZ2IoOSwgOSwgNzUpO1xcbiAgICBtYXgtd2lkdGg6IDcwdnc7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZS12ZXJ0aWNhbCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0wLjI1dHVybik7XFxufVxcblxcblxcbi5pbnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLm1pbmkge1xcbiAgICBoZWlnaHQ6IDUlO1xcbiAgICB3aWR0aDogNSU7XFxufVxcblxcbi5pbnZpc2libGU6aG92ZXIge1xcbiAgICBjdXJzb3I6ZGVmYXVsdDtcXG59XFxuXFxuLnBsYWNlbWVudC1zdGFnZSB7XFxuICAgIHdpZHRoOiA1dnc7XFxuICAgIGhlaWdodDogNnZoO1xcbn1cXG5cXG4uYm9hcmQxLmJvYXJkLXBsYWNlbWVudC1zdGFnZSB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbi5leGFtcGxlLXBhcmVudCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNERkE2MTI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgXFxuICAuZXhhbXBsZS1vcmlnaW4ge1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuZXhhbXBsZS1kcmFnZ2FibGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEFBRTlCO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBcXG4gIH1cXG5cXG4gIC5leGFtcGxlLWRyYWdnYWJsZS1pbWcge1xcbiAgICBcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgbWF4LWhlaWdodDogNDIwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogNzAlOyBcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0zMCU7XFxuICAgIFxcbiAgfVxcblxcbiAgI2JhdHRsZXNoaXAuZXhhbXBsZS1kcmFnZ2FibGUtaW1nIHtcXG4gICAgICBtYXgtd2lkdGg6IDMwJTtcXG4gICAgICBtYXgtaGVpZ2h0OiAzMCU7XFxuICAgICAgbWFyZ2luLXRvcDogLTQwJTtcXG4gIH1cXG5cXG4gICNiYXR0bGVzaGlwLmdyYWJiaW5nIHtcXG4gICAgICBtYXJnaW4tdG9wOiAtMzglO1xcbiAgICAgIG1heC13aWR0aDogMTYlO1xcbiAgICAgIG1heC1oZWlnaHQ6IDE2JTtcXG4gIH1cXG5cXG4gICNjYXJyaWVyLmV4YW1wbGUtZHJhZ2dhYmxlLWltZyB7XFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgICAgbWFyZ2luLWxlZnQ6IC0xNiU7XFxuICB9XFxuXFxuICAjY2Fycmllci5ncmFiYmluZyB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgbWF4LXdpZHRoOiAzMCU7XFxuICAgICAgbWF4LWhlaWdodDogMzAlO1xcbiAgfVxcblxcblxcbiAgLmdyYWJiaW5nIHtcXG4gICAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgICBtYXgtaGVpZ2h0OiAyMCU7XFxuICB9XFxuXFxuICAuc3F1YXJlcyA+IC5ncmFiYmluZyB7XFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuXFxuICBkaXYub24tYm9hcmQgPiAjc3VibWFyaW5lIHtcXG4gICAgICB3aWR0aDogMjAwJTtcXG4gICAgICB6LWluZGV4OiA5OTtcXG4gICAgICBvcGFjaXR5OiA5OSU7XFxuICB9IFxcblxcbiAgZGl2Lm9uLWJvYXJkID4gI3N1Ym1hcmluZS5yb3RhdGUtdmVydGljYWwge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMjAwJTtcXG4gICAgICB6LWluZGV4OiA5OTtcXG4gICAgICBvcGFjaXR5OiA5OSU7XFxuICB9XFxuXFxuICBkaXYub24tYm9hcmQgPiAjY3J1aXNlciB7XFxuICAgICAgd2lkdGg6IDIzMCU7XFxuICAgICAgb3BhY2l0eTogOTklO1xcbiAgfVxcblxcbiAgZGl2Lm9uLWJvYXJkID4gI2NydWlzZXIucm90YXRlLXZlcnRpY2FsIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDIwMCU7XFxuICAgICAgei1pbmRleDogOTk7XFxuICAgICAgb3BhY2l0eTogOTklO1xcbiAgfVxcbiAgXFxuICBkaXYub24tYm9hcmQgPiAjYmF0dGxlc2hpcCB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiA0MDAlO1xcbiAgICAgIHotaW5kZXg6IDk5O1xcbiAgICAgIG9wYWNpdHk6IDk5JTtcXG4gIH1cXG5cXG4gIGRpdi5vbi1ib2FyZCA+ICNiYXR0bGVzaGlwLnJvdGF0ZS12ZXJ0aWNhbCB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xcbiAgICAgIHdpZHRoOiA5NiU7XFxuICAgICAgaGVpZ2h0OiA1MDAlO1xcbiAgICAgIG9wYWNpdHk6IDk5JTtcXG4gIH1cXG5cXG4gIGRpdi5vbi1ib2FyZCA+ICNjYXJyaWVyIHtcXG4gICAgICB3aWR0aDogNDMwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgb3BhY2l0eTogOTklO1xcbiAgfVxcblxcbiAgZGl2Lm9uLWJvYXJkID4gI2NhcnJpZXIucm90YXRlLXZlcnRpY2FsIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgICAgd2lkdGg6IDMwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIFxcbiAgLmV4YW1wbGUtZHJvcHpvbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkRCNjVCO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgfVxcblxcbiAgLmV4YW1wbGUtcGFyZW50IHtcXG4gICAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgICBncmlkLXJvdzogMjtcXG4gICAgICBoZWlnaHQ6IDUyJTtcXG4gICAgICB3aWR0aDogNzAlO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tdG9wOiAtMjAlO1xcbiAgICAgIG1hcmdpbi1yaWdodDogLTUlO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAuZHJhZy1kaXYge1xcbiAgICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICAgIGdyaWQtcm93OiAyO1xcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLnBhaW50ZWQtc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY3liZXJZZWxsb3cpO1xcbiAgfVxcblxcbiAgLnRlc3QtZHJvcCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3liZXJZZWxsb3cpO1xcbiAgfVxcblxcbiAgLmNvbG91ci10aGlzLXNxdWFyZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3liZXJZZWxsb3cpO1xcbiAgfVxcblxcbiAgLmJsYWNrIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIH1cXG5cXG4gIC5jeWFuIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbiAgfVxcblxcbiAgLnBvc2l0aW9uZWQteC13aW5nLFxcbiAgLnBvc2l0aW9uZWQtc3VibWFyaW5lLFxcbiAgLnBvc2l0aW9uZWQtY3J1aXNlcixcXG4gIC5wb3NpdGlvbmVkLWJhdHRsZXNoaXAsXFxuICAucG9zaXRpb25lZC1jYXJyaWVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWJlclllbGxvdyk7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgfVxcblxcbiAgLnBvc2l0aW9uZWQtc3VibWFyaW5lIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gIH1cXG5cXG4gIC5yZWFkeS1idG4geyBcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBtYXJnaW4tbGVmdDogMzk1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2MDMzODtcXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnO1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGNvbG9yOiByZ2IoOSwgOSwgNzUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1heC13aWR0aDogNzB2dztcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogNyU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5ib2FyZDEtb3V0c2lkZSB7XFxuXFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBoZWlnaHQ6IDM1dmg7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcblxcbiAgfVxcblxcbiAgLmhpdC1wb3NpdGlvbi1odW1hbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgfVxcblxcbiAgLmNlcnRhaW4taGl0IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB9XFxuXFxuICAuY2VydGFpbi1taXNzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC52aWN0b3J5LW1vZGFsIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrTmF2eSk7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgb3BhY2l0eTogMC42O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC52aWN0b3J5LW1vZGFsID4gcCB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogN3JlbTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuXFxuXFxuICBcXG5cXG4gIC5mYWRleyBcXG4gICAgICAvKiBhbmltYXRpb246IGdsaXRjaCAycyBsaW5lYXIgMnM7ICovXFxuICAgICAgYW5pbWF0aW9uOiBmYWRlIDFzIGxpbmVhciAwcztcXG4gIH1cXG4gIFxcbiAgLnNxdWFyZXMuZmFkZSB7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgZ2xpdGNoe1xcblxcbiAgICAwJSB7IG9wYWNpdHk6IDF9XFxuICAgIDEwMCUgeyBvcGFjaXR5OiAwIH1cXG5cXG4gICAgOTklLDk0JXtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTlweCwxMDApIHNrZXcoMGRlZyk7XFxuICAgIH1cXG4gICAgNCUsNjAle1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDk5cHgsMTAwKSBza2V3KDEwZGVnKTtcXG4gICAgfVxcbiAgICA2MiV7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKSBza2V3KDc1ZGVnKTsgXFxuICAgIH1cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgZmFkZSB7XFxuICAgICAgMCUgeyBvcGFjaXR5OiAwIH1cXG4gICAgICAxMDAlIHsgb3BhY2l0eTogMX1cXG4gIH0gXFxuICBcXG5cXG5cXG4gIC5zcXVhcmVzLnBsYWNlbWVudC1zdGFnZTphZnRlcntcXG4gICAgYW5pbWF0aW9uOiBnbGl0Y2hCb3RvbSAxLjVzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNjclLCAxMDAlIDY3JSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigwIDY3JSwgMTAwJSA2NyUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXG4gIH1cXG4gIFxcblxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgICAwJSwgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYXBwZW5kLWFuaW1hdGUge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6Qix5REFBd0M7QUFDNUM7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7O0lBRVosYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxzQ0FBc0M7QUFDMUM7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLGdDQUFnQztBQUNwQzs7OztBQUlB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QjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLG9CQUFvQjs7RUFFdEI7O0VBRUE7TUFDSSxxQkFBcUI7RUFDekI7O0VBRUE7TUFDSSxxQkFBcUI7RUFDekI7O0VBRUE7TUFDSSx1QkFBdUI7RUFDM0I7O0VBRUE7TUFDSSxpQ0FBaUM7TUFDakMsY0FBYztNQUNkLFlBQVk7TUFDWixhQUFhO01BQ2IsWUFBWTtJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixZQUFZO0VBQ2hCOzs7Ozs7RUFNQTtNQUNJLG9DQUFvQztNQUNwQyw0QkFBNEI7RUFDaEM7O0VBRUE7TUFDSSxtQkFBbUI7RUFDdkI7O0VBRUE7O0lBRUUsS0FBSyxVQUFVO0lBQ2YsT0FBTyxXQUFXOztJQUVsQjtNQUNFLDBDQUEwQztJQUM1QztJQUNBO01BQ0UsMENBQTBDO0lBQzVDO0lBQ0E7TUFDRSxxQ0FBcUM7SUFDdkM7RUFDRjs7RUFFQTtNQUNJLEtBQUssV0FBVztNQUNoQixPQUFPLFVBQVU7RUFDckI7Ozs7RUFJQTtJQUNFLDJDQUEyQztJQUMzQyxzREFBc0Q7SUFDdEQsOERBQThEO0VBQ2hFOzs7O0FBSUY7SUFDSSx3QkFBd0I7SUFDeEIsK0RBQTREO0FBQ2hFOztBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IFJpZ2h0ZW91cztcXG4gICAgLS1jeWJlclllbGxvdzogI0ZGREMwMDtcXG4gICAgLS1zbGVla0dyZXk6ICNEREREREQ7XFxuICAgIC0tYXF1YXRpY0JsdWU6ICM3RkRCRkY7XFxuICAgIC0tcGlyYXRlTmF2eTogIzAwMWYzZjtcXG4gICAgLS1kYXJrTmF2eTogIzAwMWYzZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmJnIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMWYzZjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2NvY2twaXQuanBnKTtcXG59XFxuXFxuaDEge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDdweDtcXG4gICAgY29sb3I6IHZhcigtLWN5YmVyWWVsbG93KTtcXG59XFxuXFxuLmJvYXJkcyB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBoZWlnaHQ6IDY5dmg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmJvYXJkcy5ib2FyZDEge1xcbiAgICBcXG4gICAgd2lkdGg6IDI1dnc7XFxuICAgIGhlaWdodDogMzV2aDtcXG4gICAgXFxufVxcblxcbi5ib2FyZHMgZGl2Om50aC1jaGlsZCgxMG4rMSkge1xcbiAgICBtYXJnaW4tbGVmdDogMnZ3O1xcbiAgICB3aWR0aDogNXZ3O1xcbn1cXG5cXG5cXG4uYm9hcmRzIGRpdjpudGgtY2hpbGQoMTBuKzEwKSB7XFxuICAgIG1hcmdpbi1yaWdodDogMnZ3O1xcbiAgICB3aWR0aDogNXZ3O1xcbn1cXG5cXG4uYm9hcmRzIGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTtcXG59XFxuXFxuLmJvYXJkcyBkaXY6bnRoLW9mLXR5cGUoOTEpIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwJTtcXG59XFxuXFxuLmJvYXJkcyBkaXY6bnRoLW9mLXR5cGUoMTApIHtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMCU7XFxufVxcblxcbmRpdiNKMTAuc3F1YXJlcyB7XFxuXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG5cXG5cXG4uc3F1YXJlcy1jb21wdXRlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjAsIDAsIDAuNyk7XFxufVxcblxcbi5ib2FyZHMuYm9hcmQye1xcbiAgICBib3JkZXI6ZGFzaGVkIDFweCByZ2JhKDI1NSwgMjIwLCAwLCAwLjEpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAlO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAlO1xcbiAgICB3aWR0aDogNzB2dztcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICBcXG4gICAgZ3JpZC1yb3c6MjtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcblxcbi5ib2FyZHM6aG92ZXIge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgXFxufVxcblxcbi5zcXVhcmVzLWNvbXB1dGVyIHtcXG4gICAgYm9yZGVyOiBkYXNoZWQgMXB4IHZhcigtLWN5YmVyWWVsbG93KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG4uc3F1YXJlcyB7XFxuICAgIGJvcmRlcjogc29saWQgY3lhbiAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNxdWFyZXMtYW5pbWF0aW9uIHtcXG4gICAgYW5pbWF0aW9uOiBhcHBlbmQtYW5pbWF0ZSAuM3MgbGluZWFyO1xcbn1cXG5cXG4uY3Vyc29yLW5vdC1hbGxvd2VkIHtcXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc3F1YXJlcy1jb21wdXRlcjpmaXJzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTtcXG59XFxuXFxuLmhvdmVyZWQtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucmV2ZWFsZWQtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxufVxcblxcblxcbi5jb2xvdXJlZC1pbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYW5pbWF0aW9uOiBwdWxzZSA1cyBpbmZpbml0ZTtcXG59XFxuXFxuLmNvbG91cmVkLWluOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpjeWFuO1xcbn1cXG5cXG4ubWlzc2VkLXNob3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMzUlLDEwMC4wMCUgNDMuMDAlLDAuMDAlIDQzLjAwJSwwJSAzNSUpO1xcbn1cXG5cXG4ubWlzc2VkLXNob3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0ZEQkZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1pc3NlZC1zaG90LWZyb20tY29tcHV0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxufVxcblxcbi5jb2xvdXJlZC1pbi1mcm9tLWNvbXB1dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uYWxsaWVkLXNoaXAtbG9jYXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWJlclllbGxvdyk7XFxuICAgIGJvcmRlcjogc29saWQgdmFyKC0tY3liZXJZZWxsb3cpIDFweDtcXG59XFxuXFxuLmRlcGxveS1zaGlwcy1idG4ge1xcblxcbiAgICBncmlkLXJvdzogMjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWJlclllbGxvdyk7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJztcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBjb2xvcjogcmdiKDksIDksIDc1KTtcXG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZXBsb3ktc2hpcHMtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtOYXZ5KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHZhcigtLWN5YmVyWWVsbG93KTtcXG59XFxuXFxuLnJvdGF0ZS1idG4ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzOTUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWJlclllbGxvdyk7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJztcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBjb2xvcjogcmdiKDksIDksIDc1KTtcXG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yb3RhdGUtdmVydGljYWwge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMC4yNXR1cm4pO1xcbn1cXG5cXG5cXG4uaW52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpZGUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5taW5pIHtcXG4gICAgaGVpZ2h0OiA1JTtcXG4gICAgd2lkdGg6IDUlO1xcbn1cXG5cXG4uaW52aXNpYmxlOmhvdmVyIHtcXG4gICAgY3Vyc29yOmRlZmF1bHQ7XFxufVxcblxcbi5wbGFjZW1lbnQtc3RhZ2Uge1xcbiAgICB3aWR0aDogNXZ3O1xcbiAgICBoZWlnaHQ6IDZ2aDtcXG59XFxuXFxuLmJvYXJkMS5ib2FyZC1wbGFjZW1lbnQtc3RhZ2Uge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG4uZXhhbXBsZS1wYXJlbnQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjREZBNjEyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIFxcbiAgLmV4YW1wbGUtb3JpZ2luIHtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmV4YW1wbGUtZHJhZ2dhYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRBQUU5QjtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgXFxuICB9XFxuXFxuICAuZXhhbXBsZS1kcmFnZ2FibGUtaW1nIHtcXG4gICAgXFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDQyMHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDcwJTsgXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtMzAlO1xcbiAgICBcXG4gIH1cXG5cXG4gICNiYXR0bGVzaGlwLmV4YW1wbGUtZHJhZ2dhYmxlLWltZyB7XFxuICAgICAgbWF4LXdpZHRoOiAzMCU7XFxuICAgICAgbWF4LWhlaWdodDogMzAlO1xcbiAgICAgIG1hcmdpbi10b3A6IC00MCU7XFxuICB9XFxuXFxuICAjYmF0dGxlc2hpcC5ncmFiYmluZyB7XFxuICAgICAgbWFyZ2luLXRvcDogLTM4JTtcXG4gICAgICBtYXgtd2lkdGg6IDE2JTtcXG4gICAgICBtYXgtaGVpZ2h0OiAxNiU7XFxuICB9XFxuXFxuICAjY2Fycmllci5leGFtcGxlLWRyYWdnYWJsZS1pbWcge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTYlO1xcbiAgfVxcblxcbiAgI2NhcnJpZXIuZ3JhYmJpbmcge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgIG1heC13aWR0aDogMzAlO1xcbiAgICAgIG1heC1oZWlnaHQ6IDMwJTtcXG4gIH1cXG5cXG5cXG4gIC5ncmFiYmluZyB7XFxuICAgICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgICAgbWF4LWhlaWdodDogMjAlO1xcbiAgfVxcblxcbiAgLnNxdWFyZXMgPiAuZ3JhYmJpbmcge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcblxcbiAgZGl2Lm9uLWJvYXJkID4gI3N1Ym1hcmluZSB7XFxuICAgICAgd2lkdGg6IDIwMCU7XFxuICAgICAgei1pbmRleDogOTk7XFxuICAgICAgb3BhY2l0eTogOTklO1xcbiAgfSBcXG5cXG4gIGRpdi5vbi1ib2FyZCA+ICNzdWJtYXJpbmUucm90YXRlLXZlcnRpY2FsIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDIwMCU7XFxuICAgICAgei1pbmRleDogOTk7XFxuICAgICAgb3BhY2l0eTogOTklO1xcbiAgfVxcblxcbiAgZGl2Lm9uLWJvYXJkID4gI2NydWlzZXIge1xcbiAgICAgIHdpZHRoOiAyMzAlO1xcbiAgICAgIG9wYWNpdHk6IDk5JTtcXG4gIH1cXG5cXG4gIGRpdi5vbi1ib2FyZCA+ICNjcnVpc2VyLnJvdGF0ZS12ZXJ0aWNhbCB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAyMDAlO1xcbiAgICAgIHotaW5kZXg6IDk5O1xcbiAgICAgIG9wYWNpdHk6IDk5JTtcXG4gIH1cXG4gIFxcbiAgZGl2Lm9uLWJvYXJkID4gI2JhdHRsZXNoaXAge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogNDAwJTtcXG4gICAgICB6LWluZGV4OiA5OTtcXG4gICAgICBvcGFjaXR5OiA5OSU7XFxuICB9XFxuXFxuICBkaXYub24tYm9hcmQgPiAjYmF0dGxlc2hpcC5yb3RhdGUtdmVydGljYWwge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcXG4gICAgICB3aWR0aDogOTYlO1xcbiAgICAgIGhlaWdodDogNTAwJTtcXG4gICAgICBvcGFjaXR5OiA5OSU7XFxuICB9XFxuXFxuICBkaXYub24tYm9hcmQgPiAjY2FycmllciB7XFxuICAgICAgd2lkdGg6IDQzMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIG9wYWNpdHk6IDk5JTtcXG4gIH1cXG5cXG4gIGRpdi5vbi1ib2FyZCA+ICNjYXJyaWVyLnJvdGF0ZS12ZXJ0aWNhbCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICAgIHdpZHRoOiAzMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICBcXG4gIC5leGFtcGxlLWRyb3B6b25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZEQjY1QjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gIH1cXG5cXG4gIC5leGFtcGxlLXBhcmVudCB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgICAgZ3JpZC1yb3c6IDI7XFxuICAgICAgaGVpZ2h0OiA1MiU7XFxuICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgbWFyZ2luLXRvcDogLTIwJTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IC01JTtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLmRyYWctZGl2IHtcXG4gICAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgICBncmlkLXJvdzogMjtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5wYWludGVkLXNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWN5YmVyWWVsbG93KTtcXG4gIH1cXG5cXG4gIC50ZXN0LWRyb3Age1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YmVyWWVsbG93KTtcXG4gIH1cXG5cXG4gIC5jb2xvdXItdGhpcy1zcXVhcmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YmVyWWVsbG93KTtcXG4gIH1cXG5cXG4gIC5ibGFjayB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB9XFxuXFxuICAuY3lhbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXG4gIH1cXG5cXG4gIC5wb3NpdGlvbmVkLXgtd2luZyxcXG4gIC5wb3NpdGlvbmVkLXN1Ym1hcmluZSxcXG4gIC5wb3NpdGlvbmVkLWNydWlzZXIsXFxuICAucG9zaXRpb25lZC1iYXR0bGVzaGlwLFxcbiAgLnBvc2l0aW9uZWQtY2FycmllciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3liZXJZZWxsb3cpO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG5cXG4gIC5wb3NpdGlvbmVkLXN1Ym1hcmluZSB7XFxuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICB9XFxuXFxuICAucmVhZHktYnRuIHsgXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDM5NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjAzMzg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJztcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBjb2xvcjogcmdiKDksIDksIDc1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXgtd2lkdGg6IDcwdnc7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDclO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAuYm9hcmQxLW91dHNpZGUge1xcblxcbiAgICB3aWR0aDogMjV2dztcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG5cXG4gIH1cXG5cXG4gIC5oaXQtcG9zaXRpb24taHVtYW4ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIH1cXG5cXG4gIC5jZXJ0YWluLWhpdCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgfVxcblxcbiAgLmNlcnRhaW4tbWlzcyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICAudmljdG9yeS1tb2RhbCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya05hdnkpO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAudmljdG9yeS1tb2RhbCA+IHAge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDdyZW07XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcblxcblxcbiAgXFxuXFxuICAuZmFkZXsgXFxuICAgICAgLyogYW5pbWF0aW9uOiBnbGl0Y2ggMnMgbGluZWFyIDJzOyAqL1xcbiAgICAgIGFuaW1hdGlvbjogZmFkZSAxcyBsaW5lYXIgMHM7XFxuICB9XFxuICBcXG4gIC5zcXVhcmVzLmZhZGUge1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGdsaXRjaHtcXG5cXG4gICAgMCUgeyBvcGFjaXR5OiAxfVxcbiAgICAxMDAlIHsgb3BhY2l0eTogMCB9XFxuXFxuICAgIDk5JSw5NCV7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTk5cHgsMTAwKSBza2V3KDBkZWcpO1xcbiAgICB9XFxuICAgIDQlLDYwJXtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg5OXB4LDEwMCkgc2tldygxMGRlZyk7XFxuICAgIH1cXG4gICAgNjIle1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCkgc2tldyg3NWRlZyk7IFxcbiAgICB9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGZhZGUge1xcbiAgICAgIDAlIHsgb3BhY2l0eTogMCB9XFxuICAgICAgMTAwJSB7IG9wYWNpdHk6IDF9XFxuICB9IFxcbiAgXFxuXFxuXFxuICAuc3F1YXJlcy5wbGFjZW1lbnQtc3RhZ2U6YWZ0ZXJ7XFxuICAgIGFuaW1hdGlvbjogZ2xpdGNoQm90b20gMS41cyBsaW5lYXIgaW5maW5pdGU7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDY3JSwgMTAwJSA2NyUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCA2NyUsIDEwMCUgNjclLCAxMDAlIDEwMCUsIDAgMTAwJSk7XFxuICB9XFxuICBcXG5cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9SaWdodGVvdXMtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgICAwJSwgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYXBwZW5kLWFuaW1hdGUge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gQ29tcHV0ZXJQbGF5ZXIoKSB7XG4gIGxldCBob3Jpem9udGFsID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl07XG4gIGxldCB2ZXJ0aWNhbCA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gIGxldCBjcHVNb3ZlcyA9IFtdO1xuXG4gIGNvbnN0IGNvbXB1dGVyTW92ZSA9ICgpID0+IHtcbiAgICBsZXQgeE1vdmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgbGV0IHlNb3ZlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGxldCBjb21wdXRlclNob3QgPSB2ZXJ0aWNhbFt5TW92ZV0gKyBob3Jpem9udGFsW3hNb3ZlXTtcbiAgICAvLyA8LS0gZG9uJ3Qgc2hvb3QgdGhlIHNhbWUgbG9jYXRpb24gdHdpY2UhIE1pZ2h0IG5vdCBiZSB0aGUgbW9zdCBwZXJmb3JtYW50IGltcGxlbWVudGF0aW9uLCBidXQgaXQgd29ya3NcbiAgICB3aGlsZSAoY3B1TW92ZXMuaW5jbHVkZXMoY29tcHV0ZXJTaG90KSkge1xuICAgICAgeE1vdmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB5TW92ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbXB1dGVyU2hvdCA9IHZlcnRpY2FsW3lNb3ZlXSArIGhvcml6b250YWxbeE1vdmVdO1xuICAgIH1cbiAgICBjcHVNb3Zlcy5wdXNoKGNvbXB1dGVyU2hvdCk7IC8vIDwtLSBhbHdheXMgYWRkcyBhIG5ldyBwb3NpdGlvbjtcbiAgICByZXR1cm4gY29tcHV0ZXJTaG90O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY29tcHV0ZXJNb3ZlLFxuICAgIGdldENvbXB1dGVyTW92ZXMoKSB7XG4gICAgICByZXR1cm4gY3B1TW92ZXM7XG4gICAgfSxcbiAgICBhc3luYyBhdHRhY2tzKHRoZUh1bWFuc0JvYXJkKSB7XG4gICAgICB0aGVIdW1hbnNCb2FyZC5yZWNlaXZlQXR0YWNrKGNvbXB1dGVyTW92ZSgpKTtcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCB7IHJhbmRvbVBvc2l0aW9uc0ZvciB9IGZyb20gXCIuL3JhbmRvbVBvc2l0aW9uc0ZvclwiO1xuaW1wb3J0IG9uR2FtZU92ZXIgZnJvbSBcIi4vb25HYW1lT3ZlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBsZXQgc2hpcHNIZXJlID0gW107IC8vIDwtLSBjb250YWlucyB0aGUgY29vcmRpbmF0ZSBsb2NhdGlvbnMgb24gd2hpY2ggc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuICBsZXQgc3BvdHNUYWtlbiA9IFtdOyAvLyA8LS0gZG9lcyB0aGUgc2FtZSBhcyBzaGlwc0hlcmUsIGJ1dCBmb3IgY29tcHV0ZXIgKD8/PylcbiAgbGV0IG1pc3NlZFNob3RzID0gW107XG4gIGxldCBzdW5rU2hpcHMgPSBbXTtcbiAgbGV0IHNoaXA7XG4gIGxldCBzaGlwc09iamVjdCA9IHt9O1xuICBsZXQgdGFyZ2V0U2hpcDtcbiAgbGV0IGFsbENvb3JkaW5hdGVzT25NYXAgPSBbXTtcbiAgbGV0IHJlZ2lzdGVyZWRIaXRzT25IdW1hbiA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwKHNoaXBNb2RlbCwgWy4uLmNvb3JkaWVzXSkge1xuICAgICAgc2hpcCA9IFNoaXAoc2hpcE1vZGVsKTtcbiAgICAgIGxldCBjb29yZGluYXRlcyA9IGNvb3JkaWVzO1xuICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgb2JqLnNoaXAgPSBzaGlwLmdldE5hbWUoKTtcbiAgICAgIG9iai5kYW1hZ2UgPSBzaGlwLmRhbWFnZVJlcG9ydCgpO1xuICAgICAgb2JqLmhpdCA9IHNoaXAuaGl0O1xuICAgICAgb2JqLmlzU3VuayA9IHNoaXAuaXNTdW5rO1xuICAgICAgb2JqLmdldE5hbWUgPSBzaGlwLmdldE5hbWU7XG4gICAgICBvYmouZ2V0TGVuZ3RoID0gc2hpcC5nZXRMZW5ndGg7XG4gICAgICBvYmoucG9zaXRpb25zID0gY29vcmRpbmF0ZXM7XG4gICAgICBzaGlwc0hlcmUucHVzaChvYmopOyAvLyA8LS0gc3RvcmUgZWFjaCB7c2hpcDpjb29yZH0gaW5zaWRlIFtzaGlwc0hlcmVdO1xuICAgICAgc2hpcHNPYmplY3Rbc2hpcC5nZXROYW1lKCldID0gc2hpcDtcbiAgICAgIGFsbENvb3JkaW5hdGVzT25NYXAucHVzaChjb29yZGllcyk7XG4gICAgfSxcbiAgICBzaGlwc1BscygpIHtcbiAgICAgIHJldHVybiBzaGlwc0hlcmU7XG4gICAgfSxcbiAgICBzaGlwc09iamVjdFBscygpIHtcbiAgICAgIHJldHVybiBzaGlwc09iamVjdDtcbiAgICB9LFxuXG4gICAgcmVnaXN0ZXJDb21wdXRlclBvc2l0aW9uc0Zvcih0eXBlT2ZTaGlwKSB7XG4gICAgICBsZXQgbmV3UG9zaXRpb25zVG9QbGFjZSA9IHJhbmRvbVBvc2l0aW9uc0Zvcih0eXBlT2ZTaGlwKTtcblxuICAgICAgLy8gPC0tIHdoaWxlIG5ld1Bvc2l0aW9uc1RvUGxhY2UgaW5jbHVkZXMgQU5ZIGNvb3JkIHRoYXQgZXhpc3RzIGluIHNwb3RzVGFrZW4sIHJlLXJ1biB0aGUgY29kZVxuICAgICAgaWYgKHNwb3RzVGFrZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBzcG90c1Rha2VuLmZvckVhY2goKGFycmFpKSA9PiB7XG4gICAgICAgICAgd2hpbGUgKG5ld1Bvc2l0aW9uc1RvUGxhY2Uuc29tZSgodmFsKSA9PiBhcnJhaS5pbmRleE9mKHZhbCkgIT09IC0xKSkge1xuICAgICAgICAgICAgbmV3UG9zaXRpb25zVG9QbGFjZSA9IHJhbmRvbVBvc2l0aW9uc0Zvcih0eXBlT2ZTaGlwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzcG90c1Rha2VuLnB1c2gobmV3UG9zaXRpb25zVG9QbGFjZSk7XG4gICAgICByZXR1cm4gbmV3UG9zaXRpb25zVG9QbGFjZTtcbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBhY3R1YWxDb29yZGluYXRlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGNvb3JkaW5hdGVzKTtcbiAgICAgICAgaWYgKGFjdHVhbENvb3JkaW5hdGVEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwib24tYm9hcmRcIikpIHtcbiAgICAgICAgICBhY3R1YWxDb29yZGluYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJjZXJ0YWluLWhpdFwiKTtcbiAgICAgICAgICBvbkdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhY3R1YWxDb29yZGluYXRlRGl2LmNsYXNzTGlzdC5jb250YWlucyhcIm9uLWJvYXJkXCIpKSB7XG4gICAgICAgICAgYWN0dWFsQ29vcmRpbmF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiY2VydGFpbi1taXNzXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vPC0tIGlmIHBvc2l0aW9uIGhhcyBiZWVuIGhpdCBiZWZvcmUgYW5kIHdhcyBhIG1pc3MsIGhpdCgpID0+IGZhbHNlXG4gICAgICAgIGlmIChtaXNzZWRTaG90cy5pbmNsdWRlcyhjb29yZGluYXRlcykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlZ2lzdGVyZWRIaXRzT25IdW1hbi5pbmNsdWRlcyhjb29yZGluYXRlcykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gPC0tIGlzIHRoZXJlIGEgc2hpcCBhdCB0aG9zZSBjb29yZGluYXRlcz8gSWYgeWVzLCBwcm9jZWVkIHdpdGggbGluZSBiZWxvd1xuICAgICAgICBpZiAoc2hpcHNIZXJlLnNvbWUoKGUpID0+IGUucG9zaXRpb25zLmluY2x1ZGVzKGNvb3JkaW5hdGVzKSkpIHtcbiAgICAgICAgICB0YXJnZXRTaGlwID0gc2hpcHNIZXJlLmZpbmQoKGUpID0+IGUucG9zaXRpb25zLmluY2x1ZGVzKGNvb3JkaW5hdGVzKSk7IC8vIDwtLSB3ZSBnZXQgdGhlIHNoaXAgYXQgdGhlIGlucHV0IGNvb3JkaW5hdGVzICh0aGUgdGFyZ2V0ZWQgc2hpcCdzIG93biBvYmplY3QpXG4gICAgICAgICAgaWYgKHRhcmdldFNoaXAuZGFtYWdlLmluY2x1ZGVzKGNvb3JkaW5hdGVzKSkgcmV0dXJuIGZhbHNlOyAvLyA8LS0gaWYgdGhhdCBwb3NpdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGhpdCwgcmV0dXJuIGZhbHNlLlxuXG4gICAgICAgICAgdGFyZ2V0U2hpcC5oaXQoY29vcmRpbmF0ZXMpO1xuXG4gICAgICAgICAgaWYgKHN1bmtTaGlwcy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiQUxMIFNISVBTIFNVTktcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0YXJnZXRTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICB0YXJnZXRTaGlwLmlzU3VuayA9IHRydWU7XG4gICAgICAgICAgICBzdW5rU2hpcHMucHVzaCh0YXJnZXRTaGlwLmdldE5hbWUoKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtaXNzZWRTaG90cy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZXJSZWNlaXZlc0F0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy88LS0gaWYgcG9zaXRpb24gaGFzIGJlZW4gaGl0IGJlZm9yZSBhbmQgd2FzIGEgbWlzcywgaGl0KCkgPT4gZmFsc2VcbiAgICAgICAgaWYgKG1pc3NlZFNob3RzLmluY2x1ZGVzKGNvb3JkaW5hdGVzKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVnaXN0ZXJlZEhpdHNPbkh1bWFuLmluY2x1ZGVzKGNvb3JkaW5hdGVzKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyA8LS0gaXMgdGhlcmUgYSBzaGlwIGF0IHRob3NlIGNvb3JkaW5hdGVzPyBJZiB5ZXMsIHByb2NlZWQgd2l0aCBsaW5lIGJlbG93XG4gICAgICAgIGlmIChzaGlwc0hlcmUuc29tZSgoZSkgPT4gZS5wb3NpdGlvbnMuaW5jbHVkZXMoY29vcmRpbmF0ZXMpKSkge1xuICAgICAgICAgIHRhcmdldFNoaXAgPSBzaGlwc0hlcmUuZmluZCgoZSkgPT4gZS5wb3NpdGlvbnMuaW5jbHVkZXMoY29vcmRpbmF0ZXMpKTsgLy8gPC0tIHdlIGdldCB0aGUgc2hpcCBhdCB0aGUgaW5wdXQgY29vcmRpbmF0ZXMgKHRoZSB0YXJnZXRlZCBzaGlwJ3Mgb3duIG9iamVjdClcbiAgICAgICAgICBpZiAodGFyZ2V0U2hpcC5kYW1hZ2UuaW5jbHVkZXMoY29vcmRpbmF0ZXMpKSByZXR1cm4gZmFsc2U7IC8vIDwtLSBpZiB0aGF0IHBvc2l0aW9uIGhhcyBhbHJlYWR5IGJlZW4gaGl0LCByZXR1cm4gZmFsc2UuXG5cbiAgICAgICAgICB0YXJnZXRTaGlwLmhpdChjb29yZGluYXRlcyk7XG4gICAgICAgICAgaWYgKHN1bmtTaGlwcy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRhcmdldFNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHRhcmdldFNoaXAuaXNTdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHN1bmtTaGlwcy5wdXNoKHRhcmdldFNoaXAuZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1pc3NlZFNob3RzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgICB9XG4gICAgfSxcbiAgICBtaXNzZWRIZXJlKCkge1xuICAgICAgcmV0dXJuIG1pc3NlZFNob3RzO1xuICAgIH0sXG4gICAgcmVwb3J0U3VuaygpIHtcbiAgICAgIGlmIChzdW5rU2hpcHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgIGFsZXJ0KFwiYWxsIHNoaXBzIHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgaG92ZXJMZW5ndGgoKSB7XG4gICAgICBzd2l0Y2ggKHNoaXBzSGVyZS5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAyOyAvLyA8LS0gbm8gc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZCwgY3VycmVudCBzaGlwIGlzIGEgZGVzdHJveWVyICgyIHNxdWFyZXMpXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVwb3J0Q2xpY2tlZFNxdWFyZSgpIHtcbiAgICAgIGxldCBib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkMlwiKTtcbiAgICAgIGJvYXJkMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdCA9PSBcInNxdWFyZXMtY29tcHV0ZXJcIikge1xuICAgICAgICAgIGxldCBhbGxDb29yZGluYXRlc09uTWFwQXJyYXkgPSBhbGxDb29yZGluYXRlc09uTWFwOyAvLyA8LS0gd2h5IGFtIEkgc3RvcmluZyBhIHJlZmVyZW5jZSBoZXJlP1xuICAgICAgICAgIGFsbENvb3JkaW5hdGVzT25NYXBBcnJheS5mb3JFYWNoKChhcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChhcnIuaW5jbHVkZXMoZS50YXJnZXQuaWQpKSB7XG4gICAgICAgICAgICAgIGxldCBtYXRjaGVkU3F1YXJlID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgIG1hdGNoZWRTcXVhcmUuY2xhc3NMaXN0LmFkZChcImNvbG91cmVkLWluXCIpO1xuICAgICAgICAgICAgICBvbkdhbWVPdmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gPC0tIGFkZCBldmVudCB0byBjYWxsYmFjayBxdWV1ZTsgYnkgcnVudGltZSwgdGhlIG5ld2x5IGhpdCBjb29yZGluYXRlIHdpbGwgaGF2ZSBiZWVuIGFkZGVkIHRvIHRoZSBhcnJheVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsZXQgYWxsdGhlR29kZGFyblNxdWFyZXNBZ2FpbiA9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNxdWFyZXMtY29tcHV0ZXJcIik7XG4gICAgICAgICAgYWxsdGhlR29kZGFyblNxdWFyZXNBZ2Fpbi5mb3JFYWNoKChzcSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1pc3NlZFNob3RzLmluY2x1ZGVzKHNxLmlkKSkge1xuICAgICAgICAgICAgICBzcS5jbGFzc0xpc3QuYWRkKFwibWlzc2VkLXNob3RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy9zZW5kIHRoYXQgaWQgdG8gUmVjZWl2ZUF0dGFjY2tcbiAgICBuZXdSZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLzwtLSBpZiBwb3NpdGlvbiBoYXMgYmVlbiBoaXQgYmVmb3JlLCBoaXQoKSA9PiBmYWxzZVxuICAgICAgICAvLyA8LS0gaXMgdGhlcmUgYSBzaGlwIGF0IHRob3NlIGNvb3JkaW5hdGVzPyBJZiB5ZXMsIHByb2NlZWQgd2l0aCBsaW5lIGJlbG93XG4gICAgICAgIGlmIChzaGlwc0hlcmUuc29tZSgoZSkgPT4gZS5wb3NpdGlvbnMuaW5jbHVkZXMoY29vcmRpbmF0ZXMpKSkge1xuICAgICAgICAgIHRhcmdldFNoaXAgPSBzaGlwc0hlcmUuZmluZCgoZSkgPT4gZS5wb3NpdGlvbnMuaW5jbHVkZXMoY29vcmRpbmF0ZXMpKTsgLy8gPC0tIHdlIGdldCB0aGUgc2hpcCBhdCB0aGUgaW5wdXQgY29vcmRpbmF0ZXMgKHRoZSB0YXJnZXRlZCBzaGlwJ3Mgb3duIG9iamVjdClcbiAgICAgICAgICBpZiAodGFyZ2V0U2hpcC5kYW1hZ2UuaW5jbHVkZXMoY29vcmRpbmF0ZXMpKSByZXR1cm4gZmFsc2U7IC8vXG4gICAgICAgICAgdGFyZ2V0U2hpcC5oaXQoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgIGlmICh0YXJnZXRTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICB0YXJnZXRTaGlwLmlzU3VuayA9IHRydWU7XG4gICAgICAgICAgICBzdW5rU2hpcHMucHVzaCh0YXJnZXRTaGlwLmdldE5hbWUoKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGAke3RhcmdldFNoaXAuZ2V0TmFtZSgpfSBoaXQsIEhQOiAke3RhcmdldFNoaXAuZ2V0TGVuZ3RoKCl9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtaXNzZWRTaG90cy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0QWxsQ29vcmRpbmF0ZXNPbk1hcCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIk1FU1NBR0UgRlJPTSBDT01NQU5ERVIgREFUQTogXFxuIENvbW1hbmRlciwgTHQuIENvbW1hbmRlciBMYUZvcmdlIGhhcyByZXB1cnBvc2VkIHRoZSBjb3Jiby1oYW5kd2F2aXVtIGRyaXZlIHRvIHJldmVhbCBlbmVteSBjb29yZGluYXRlcy4uLlwiXG4gICAgICApO1xuICAgICAgY29uc29sZS50YWJsZShhbGxDb29yZGluYXRlc09uTWFwKTtcbiAgICB9LFxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSHVtYW5QbGF5ZXIobmFtZU9mUGxheWVyKSB7XG4gIHJldHVybiB7XG4gICAgcGxheWVyTmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lT2ZQbGF5ZXI7XG4gICAgfSxcbiAgICBhdHRhY2tzKHRoZUNvbXB1dGVyc0JvYXJkKSB7XG4gICAgICBsZXQgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQyXCIpO1xuICAgICAgY29tcHV0ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhlQ29tcHV0ZXJzQm9hcmQucmVjZWl2ZUF0dGFjayhlLnRhcmdldC5pZCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFzeW5jIHNlbmRzQXR0YWNrKHRoZUNvbXB1dGVyc0JvYXJkLCB0aGVDb21wdXRlclBsYXllciwgdGhlSHVtYW5zQm9hcmQpIHtcbiAgICAgIGxldCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZDJcIik7XG4gICAgICBjb21wdXRlckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGVDb21wdXRlcnNCb2FyZC5jb21wdXRlclJlY2VpdmVzQXR0YWNrKGUudGFyZ2V0LmlkKTtcbiAgICAgICAgdGhlQ29tcHV0ZXJQbGF5ZXIuYXR0YWNrcyh0aGVIdW1hbnNCb2FyZCk7XG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIFNoaXAoc2hpcFR5cGUpIHtcbiAgbGV0IGxlbmd0aDtcbiAgbGV0IHByZXZpb3VzbHlIaXQgPSBbXTtcbiAgbGV0IHNoaXBOYW1lO1xuICBsZXQgb3JpZ2luYWxMZW5ndGg7XG4gIHN3aXRjaCAoc2hpcFR5cGUpIHtcbiAgICBjYXNlIFwiZGVzdHJveWVyXCI6XG4gICAgICBsZW5ndGggPSAxO1xuICAgICAgb3JpZ2luYWxMZW5ndGggPSAxO1xuICAgICAgc2hpcE5hbWUgPSBcImRlc3Ryb3llclwiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwic3VibWFyaW5lXCI6XG4gICAgICBsZW5ndGggPSAyO1xuICAgICAgb3JpZ2luYWxMZW5ndGggPSAyO1xuICAgICAgc2hpcE5hbWUgPSBcInN1Ym1hcmluZVwiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiY3J1aXNlclwiOlxuICAgICAgbGVuZ3RoID0gMztcbiAgICAgIG9yaWdpbmFsTGVuZ3RoID0gMztcbiAgICAgIHNoaXBOYW1lID0gXCJjcnVpc2VyXCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJiYXR0bGVzaGlwXCI6XG4gICAgICBsZW5ndGggPSA0O1xuICAgICAgb3JpZ2luYWxMZW5ndGggPSA0O1xuICAgICAgc2hpcE5hbWUgPSBcImJhdHRsZXNoaXBcIjtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcImNhcnJpZXJcIjpcbiAgICAgIGxlbmd0aCA9IDU7XG4gICAgICBvcmlnaW5hbExlbmd0aCA9IDU7XG4gICAgICBzaGlwTmFtZSA9IFwiY2FycmllclwiO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBnZXRMZW5ndGgoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH0sXG4gICAgaGl0KHBvc2l0aW9uKSB7XG4gICAgICBpZiAocHJldmlvdXNseUhpdC5pbmNsdWRlcyhwb3NpdGlvbikpIHJldHVybiBmYWxzZTtcbiAgICAgIGxlbmd0aC0tO1xuICAgICAgcHJldmlvdXNseUhpdC5wdXNoKHBvc2l0aW9uKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0sXG4gICAgaXNTdW5rKCkge1xuICAgICAgaWYgKHByZXZpb3VzbHlIaXQubGVuZ3RoID09PSBvcmlnaW5hbExlbmd0aCB8fCBsZW5ndGggPD0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldE5hbWUoKSB7XG4gICAgICByZXR1cm4gc2hpcE5hbWU7XG4gICAgfSxcbiAgICBkYW1hZ2VSZXBvcnQoKSB7XG4gICAgICByZXR1cm4gcHJldmlvdXNseUhpdDtcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IGdldExvZ2ljTGVuZ3RoRm9yIGZyb20gXCIuL2dldExvZ2ljTGVuZ3RoT2ZcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29pblRvc3MoKSB7XG4gIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgaWYgKG51bSA9PT0gMSkgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xuICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tT3V0T2ZUZW4oKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21Gb3JTdWJtYXJpbmUoKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUxpbWl0ZXJGb3IodHlwZU9mU2hpcCkge1xuICBsZXQgbGVuZ3RoID0gZ2V0TG9naWNMZW5ndGhGb3IodHlwZU9mU2hpcCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImJnXCIpO1xuXG4gIC8vVGl0bGVcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLmlubmVySFRNTCA9IFwiU3RhcnNoaXBcIjtcbiAgLy9EaXYgdG8gYXR0YWNoIGJvdGggZ2FtZWJvYXJkIGFuZCBkcmFnZ2FibGUgaW1hZ2VzIHRvXG4gIGNvbnN0IGRyYWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkcmFnRGl2LmNsYXNzTGlzdC5hZGQoXCJkcmFnLWRpdlwiKTtcbiAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoZHJhZ0Rpdik7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiaW1wb3J0IGdlbmVyYXRlQ29tcHV0ZXJIb2xvZ3JhbSBmcm9tIFwiLi9nZW5lcmF0ZUNvbXB1dGVySG9sb2dyYW1cIjtcbmltcG9ydCByZWFkeUJ0bkNsaWNrLCB7IHJlcG9zaXRpb25Cb2FyZE9uZSB9IGZyb20gXCIuL3JlcG9zaXRpb25Cb2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVSZWFkeUJ0bigpIHtcbiAgcmVtb3ZlUm90YXRlQnRuKCk7XG4gIGxldCByZWFkeUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJlYWR5QnRuLmlubmVySFRNTCA9IFwiUkVBRFlcIjtcbiAgcmVhZHlCdG4uY2xhc3NMaXN0LmFkZChcInJlYWR5LWJ0blwiKTtcbiAgcmVhZHlCdG4uaWQgPSBcInJlYWR5LWJ1dHRvblwiO1xuICByZWFkeUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJlYWR5QnRuQ2xpY2soKTtcbiAgICByZW1vdmVSZWFkeUJ0bigpO1xuICAgIHJlcG9zaXRpb25Cb2FyZE9uZSgpO1xuICAgIGdlbmVyYXRlQ29tcHV0ZXJIb2xvZ3JhbSgpO1xuICB9KTtcbiAgbGV0IGJ0bkNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNvbnRhaW5lci1kaXZcIik7XG4gIGJ0bkNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChyZWFkeUJ0bik7XG59XG5cbmNvbnN0IHJlbW92ZVJvdGF0ZUJ0biA9ICgpID0+IHtcbiAgbGV0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm90YXRlLWJ1dHRvblwiKTtcbiAgcm90YXRlQnRuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocm90YXRlQnRuKTtcbn07XG5cbmNvbnN0IHJlbW92ZVJlYWR5QnRuID0gKCkgPT4ge1xuICBsZXQgcmVhZHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlYWR5LWJ1dHRvblwiKTtcbiAgcmVhZHlCdG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZWFkeUJ0bik7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGVwbG95U2hpcHNCdG4oKSB7XG4gIGNvbnN0IGRlcGxveVNoaXBzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVwbG95U2hpcHNCdG4uY2xhc3NMaXN0LmFkZChcImRlcGxveS1zaGlwcy1idG5cIik7XG4gIGRlcGxveVNoaXBzQnRuLmlubmVySFRNTCA9IFwiRU5HQUdFXCI7XG4gIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnXCIpO1xuICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGRlcGxveVNoaXBzQnRuKTtcbiAgcmV0dXJuIGJhY2tncm91bmQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5VmljdG9yeU1vZGFsKHdpbm5lcikge1xuICBsZXQgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidmljdG9yeS1tb2RhbFwiKTtcbiAgbGV0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtc2cuY2xhc3NMaXN0LmFkZChcInZpY3RvcnktbW9kYWwtbXNnXCIpO1xuICBtc2cuaW5uZXJIVE1MID0gYCR7d2lubmVyfVxcbndpbnMhYDtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobXNnKTtcblxuICBsZXQgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnXCIpO1xuICBiZy5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XG5cbiAgbW9kYWxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeFdpbmd5IGZyb20gXCIuL2ltZy94d2luZy1jcm9wcGVkLnBuZ1wiO1xuaW1wb3J0IHsgY2xlYXJSZWNvcmQsIHJlcG9ydFBhaW50IH0gZnJvbSBcIi4vbGFzdFBhaW50ZWRDb29yZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ1NoaXBJbWFnZXMoKSB7XG4gIC8vV2FpdCBmb3IgRU5HQUdFIGJ1dHRvbiBjbGljayB0byBwcmVzZW50IHRoZSBzaGlwczpcbiAgbGV0IGVuZ2FnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVwbG95LXNoaXBzLWJ0blwiKTtcbiAgZW5nYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZXhhbXBsZU9yaWdpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXhhbXBsZU9yaWdpbi5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZS1vcmlnaW5cIik7XG4gICAgY29uc3QgeFdpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHhXaW5nLmlkID0gXCJ4LXdpbmdcIjtcbiAgICB4V2luZy5zcmMgPSB4V2luZ3k7XG4gICAgeFdpbmcuY2xhc3NMaXN0LmFkZChcImV4YW1wbGUtZHJhZ2dhYmxlLWltZ1wiKTtcbiAgICB4V2luZy5kcmFnZ2FibGUgPSB0cnVlO1xuICAgIGV4YW1wbGVPcmlnaW4uYXBwZW5kQ2hpbGQoeFdpbmcpO1xuICAgIHhXaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcInBvc2l0aW9uZWQteC13aW5nXCIpKVxuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3NpdGlvbmVkLXgtd2luZ1wiKTtcbiAgICAgIG9uRHJhZ1N0YXJ0KGUpO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgZHJhZ2dpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZy1kaXZcIik7XG4gICAgICBkcmFnZ2l0LmFwcGVuZENoaWxkKGV4YW1wbGVPcmlnaW4pO1xuICAgIH0sIDMyMCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvbkRyYWdTdGFydChlKSB7XG4gIGlmIChlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzcXVhcmVzXCIpKSB7XG4gICAgLy8gPC0tICdJZiB0aGUgaW1hZ2Ugd2UncmUgZHJhZ2dpbmcgaGFzIGFscmVhZHkgYmVlbiBwbGFjZWQgaW4gdGhlIGdhbWVib2FyZCdcblxuICAgIGxldCBvbGRQYWludCA9IHJlcG9ydFBhaW50KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbGRQYWludC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGVsZW1lbnRUb0RlcGFpbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbGRQYWludFtpXSk7XG4gICAgICBlbGVtZW50VG9EZXBhaW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xvdXItdGhpcy1zcXVhcmVcIik7XG4gICAgfVxuICAgIGNsZWFyUmVjb3JkKCk7XG4gIH1cbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZS50YXJnZXQuaWQpO1xuICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZS50YXJnZXQsIDAsIDApO1xuICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImdyYWJiaW5nXCIpKSByZXR1cm47XG4gIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZ3JhYmJpbmdcIik7XG59XG4iLCJpbXBvcnQgbmV3R2FtZVBsdXMgZnJvbSBcIi4vbmV3R2FtZVBsdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVDb21wdXRlckhvbG9ncmFtKCkge1xuICBjb25zdCBib2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2FyZDIuY2xhc3NMaXN0LmFkZChcImJvYXJkc1wiKTtcbiAgYm9hcmQyLmNsYXNzTGlzdC5hZGQoXCJib2FyZDJcIik7XG5cbiAgbGV0IGNvbnN0cnVjdEhvcml6b250YWxDb21wdXRlciA9IFtcbiAgICBcIjFcIixcbiAgICBcIjJcIixcbiAgICBcIjNcIixcbiAgICBcIjRcIixcbiAgICBcIjVcIixcbiAgICBcIjZcIixcbiAgICBcIjdcIixcbiAgICBcIjhcIixcbiAgICBcIjlcIixcbiAgICBcIjEwXCIsXG4gIF07XG4gIGxldCBjb25zdHJ1Y3RWZXJ0aWNhbENvbXB1dGVyID0gW1xuICAgIFwiQVwiLFxuICAgIFwiQlwiLFxuICAgIFwiQ1wiLFxuICAgIFwiRFwiLFxuICAgIFwiRVwiLFxuICAgIFwiRlwiLFxuICAgIFwiR1wiLFxuICAgIFwiSFwiLFxuICAgIFwiSVwiLFxuICAgIFwiSlwiLFxuICBdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnN0cnVjdEhvcml6b250YWxDb21wdXRlci5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjdXJyZW50TGV0dGVyID0gY29uc3RydWN0VmVydGljYWxDb21wdXRlcltpXTsgLy8gPC0tLSBnZXQgYSBsZXR0ZXIgKGV4YW1wbGU6IEEpXG4gICAgLy9UaGVuLCBsb29wIHRocm91Z2ggdGhlIG51bWJlcnMgYXJyYXkgMTAgdGltZXMsXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb25zdHJ1Y3RWZXJ0aWNhbENvbXB1dGVyLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZS5pZCA9IGN1cnJlbnRMZXR0ZXIgKyBjb25zdHJ1Y3RIb3Jpem9udGFsQ29tcHV0ZXJbal07IC8vIG1ha2luZyBpdHMgaWQgZXF1YWwgdGhlIGN1cnJlbnQgbGV0dGVyICsgYSBudW1iZXIsIHVwIHRvIG51bWJlciAxMC4gRXhhbXBsZTogQTdcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlcy1jb21wdXRlclwiKTtcbiAgICAgIGJvYXJkMi5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgfVxuICBsZXQgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnXCIpO1xuICBiZy5hcHBlbmRDaGlsZChib2FyZDIpO1xuICBuZXdHYW1lUGx1cygpO1xufVxuIiwiaW1wb3J0IHBhaW50TGVuZ3RoIGZyb20gXCIuL3BhaW50TGVuZ3RoXCI7XG5pbXBvcnQgcHJlc2VudE5leHRJbWFnZSBmcm9tIFwiLi9wcmVzZW50TmV4dEltYWdlXCI7XG5pbXBvcnQgeyByb3RhdGVJbWcgfSBmcm9tIFwiLi9yb3RhdGVJbWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVIdW1hbkhvbG9ncmFtKCkge1xuICBsZXQgbWFya2VkQXNQbGFjZWQgPSBbXTtcbiAgbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVwbG95LXNoaXBzLWJ0blwiKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IGJvYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmQxLmNsYXNzTGlzdC5hZGQoXCJib2FyZHNcIik7XG4gICAgYm9hcmQxLmNsYXNzTGlzdC5hZGQoXCJib2FyZDFcIik7XG5cbiAgICBsZXQgY29uc3RydWN0SG9yaXpvbnRhbCA9IFtcbiAgICAgIFwiMVwiLFxuICAgICAgXCIyXCIsXG4gICAgICBcIjNcIixcbiAgICAgIFwiNFwiLFxuICAgICAgXCI1XCIsXG4gICAgICBcIjZcIixcbiAgICAgIFwiN1wiLFxuICAgICAgXCI4XCIsXG4gICAgICBcIjlcIixcbiAgICAgIFwiMTBcIixcbiAgICBdO1xuICAgIGxldCBjb25zdHJ1Y3RWZXJ0aWNhbCA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25zdHJ1Y3RIb3Jpem9udGFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VycmVudExldHRlciA9IGNvbnN0cnVjdFZlcnRpY2FsW2ldOyAvLyA8LS0tIGdldCBhIGxldHRlciAoZXhhbXBsZTogQSlcbiAgICAgIC8vVGhlbiwgbG9vcCB0aHJvdWdoIHRoZSBudW1iZXJzIGFycmF5IDEwIHRpbWVzLFxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb25zdHJ1Y3RWZXJ0aWNhbC5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3F1YXJlLmlkID0gY3VycmVudExldHRlciArIGNvbnN0cnVjdEhvcml6b250YWxbal07IC8vIG1ha2luZyBpdHMgaWQgZXF1YWwgdGhlIGN1cnJlbnQgbGV0dGVyICsgYSBudW1iZXIsIHVwIHRvIG51bWJlciAxMC5cbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVzXCIpO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudC1zdGFnZVwiKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVzLWFuaW1hdGlvblwiKTtcblxuICAgICAgICBib2FyZDEuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYm9hcmQxLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1wbGFjZW1lbnQtc3RhZ2VcIik7XG4gICAgbGV0IGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZ1wiKTtcbiAgICBsZXQgZHJhZ0JvaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZy1kaXZcIik7XG4gICAgZHJhZ0JvaS5hcHBlbmRDaGlsZChib2FyZDEpO1xuICAgIGJnLmFwcGVuZENoaWxkKGRyYWdCb2kpO1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZS50YXJnZXQpOyAvLyA8LS0tIHJlbW92ZXMgdGhlICdFTkdBR0UnIGJ1dHRvbiB1cG9uIGNsaWNrXG5cbiAgICAvLyBnaXZlIHRoaXMgaG9sb2dyYW0gRHJhZyAmIERyb3AgZnVuY3Rpb25hbGl0eTpcblxuICAgIGJvYXJkMS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIG9uRHJhZ092ZXIoZSk7XG4gICAgfSk7XG4gICAgYm9hcmQxLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBvbkRyb3AoZSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gb25EcmFnT3ZlcihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Ecm9wKGUpIHtcbiAgICAgIGxldCBpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgbGV0IGRyYWdnYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICBsZXQgZHJvcHpvbmUgPSBlLnRhcmdldDtcbiAgICAgIGRyb3B6b25lLmFwcGVuZENoaWxkKGRyYWdnYWJsZUVsZW1lbnQpO1xuICAgICAgLy8gR2V0IHRoZSBuZXh0IGltYWdlOlxuICAgICAgbWFya2VkQXNQbGFjZWQucHVzaChpZCk7XG4gICAgICBpZiAobWFya2VkQXNQbGFjZWQubGVuZ3RoID4gMSkgbWFya2VkQXNQbGFjZWQuc2hpZnQoKTtcbiAgICAgIGxldCBpbWdJRCA9IG1hcmtlZEFzUGxhY2VkWzBdO1xuICAgICAgbGV0IHNxSUQgPSBlLnRhcmdldC5pZDtcbiAgICAgIHBhaW50TGVuZ3RoKGltZ0lELCBzcUlEKTtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLmNsZWFyRGF0YSgpO1xuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZXhhbXBsZS1kcmFnZ2FibGUtaW1nXCIpO1xuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JhYmJpbmdcIik7XG4gICAgICBwcmVzZW50TmV4dEltYWdlKG1hcmtlZEFzUGxhY2VkKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgYnRuQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJ0bkNvbnRhaW5lckRpdi5pZCA9IFwiYnRuLWNvbnRhaW5lci1kaXZcIjtcbiAgICAgIGxldCByb3RhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcm90YXRlQnRuLmlkID0gXCJyb3RhdGUtYnV0dG9uXCI7XG4gICAgICByb3RhdGVCdG4uaW5uZXJIVE1MID0gXCJyb3RhdGVcIjtcbiAgICAgIHJvdGF0ZUJ0bi5jbGFzc0xpc3QgPSBcInJvdGF0ZS1idG5cIjtcbiAgICAgIGJ0bkNvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKFwicm90YXRlLWJ0bi1jb250YWluZXJcIik7XG4gICAgICBidG5Db250YWluZXJEaXYuYXBwZW5kQ2hpbGQocm90YXRlQnRuKTtcblxuICAgICAgYm9hcmQxLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lckRpdik7XG4gICAgICByb3RhdGVJbWcoKTtcbiAgICB9LCAzMDApO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExvZ2ljTGVuZ3RoRm9yKHR5cGVPZlNoaXApIHtcbiAgc3dpdGNoICh0eXBlT2ZTaGlwKSB7XG4gICAgY2FzZSBcImRlc3Ryb3llclwiOlxuICAgICAgcmV0dXJuIDE7XG5cbiAgICBjYXNlIFwic3VibWFyaW5lXCI6XG4gICAgICByZXR1cm4gMjtcblxuICAgIGNhc2UgXCJjcnVpc2VyXCI6XG4gICAgICByZXR1cm4gMztcblxuICAgIGNhc2UgXCJiYXR0bGVzaGlwXCI6XG4gICAgICByZXR1cm4gNDtcblxuICAgIGNhc2UgXCJjYXJyaWVyXCI6XG4gICAgICByZXR1cm4gNTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGVuZ3RoT2YoaW1nSUQpIHtcbiAgc3dpdGNoIChpbWdJRCkge1xuICAgIGNhc2UgXCJ4LXdpbmdcIjpcbiAgICAgIHJldHVybiAxO1xuXG4gICAgY2FzZSBcInN1Ym1hcmluZVwiOlxuICAgICAgcmV0dXJuIDI7XG5cbiAgICBjYXNlIFwiY3J1aXNlclwiOlxuICAgICAgcmV0dXJuIDM7XG5cbiAgICBjYXNlIFwiYmF0dGxlc2hpcFwiOlxuICAgICAgcmV0dXJuIDQ7XG5cbiAgICBjYXNlIFwiY2FycmllclwiOlxuICAgICAgcmV0dXJuIDU7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuaW1wb3J0IGFkZERlcGxveVNoaXBzQnRuIGZyb20gXCIuL2RlcGxveVNoaXBzQnRuXCI7XG5pbXBvcnQgZ2VuZXJhdGVIdW1hbkhvbG9ncmFtIGZyb20gXCIuL2dlbmVyYXRlSHVtYW5Ib2xvZ3JhbVwiO1xuaW1wb3J0IGRyYWdTaGlwSW1hZ2VzIGZyb20gXCIuL2RyYWdTaGlwSW1hZ2VzXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGREZXBsb3lTaGlwc0J0bigpKTtcbmdlbmVyYXRlSHVtYW5Ib2xvZ3JhbSgpOyAvLyA8LS0gb24gY2xpY2tcbmRyYWdTaGlwSW1hZ2VzKCk7XG4iLCJsZXQgcGFpbnRlZExvY2F0aW9uID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxhc3RQYWludGVkQ29vcmRzKG5ld0Nvb3JkKSB7XG4gIHBhaW50ZWRMb2NhdGlvbi5wdXNoKG5ld0Nvb3JkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcG9ydFBhaW50KCkge1xuICByZXR1cm4gcGFpbnRlZExvY2F0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJSZWNvcmQoKSB7XG4gIHBhaW50ZWRMb2NhdGlvbiA9IFtdO1xufVxuIiwiaW1wb3J0IHsgQ29tcHV0ZXJQbGF5ZXIgfSBmcm9tIFwiLi9Db21wdXRlclBsYXllclwiO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgSHVtYW5QbGF5ZXIgZnJvbSBcIi4vSHVtYW5QbGF5ZXJcIjtcbmltcG9ydCBzZXRQb3NpdGlvbkxvZ2ljIGZyb20gXCIuL3NldFBvc2l0aW9uTG9naWNcIjtcblxuLy9UaGlzIGZpbGUgcnVucyB0aGUgbWFpbiBnYW1lIGxvb3AuIEkgaGF2ZSBub3RlZCB0aGF0IEkgbmVlZCB0byBuYW1lIG15IGZ1bmN0aW9ucyBtb3JlIGNsZWFybHkuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld0dhbWVQbHVzKCkge1xuICAvLyA8LS0gT25seSBydW4gZnVuY3Rpb25zLCBtdXN0IG5vdCB3cml0ZSBuZXcgY29kZSBoZXJlLlxuICBsZXQgaHVtYW4gPSBIdW1hblBsYXllcihcImh1bWFuXCIpO1xuICBsZXQgaHVtYW5Cb2FyZCA9IEdhbWVib2FyZCgpO1xuICBsZXQgY29tcHV0ZXIgPSBDb21wdXRlclBsYXllcigpO1xuICBsZXQgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGh1bWFuQm9hcmQucGxhY2VTaGlwKFwiZGVzdHJveWVyXCIsIHNldFBvc2l0aW9uTG9naWMoXCJ4LXdpbmdcIikpO1xuICBodW1hbkJvYXJkLnBsYWNlU2hpcChcInN1Ym1hcmluZVwiLCBzZXRQb3NpdGlvbkxvZ2ljKFwic3VibWFyaW5lXCIpKTtcbiAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoXCJjcnVpc2VyXCIsIHNldFBvc2l0aW9uTG9naWMoXCJjcnVpc2VyXCIpKTtcbiAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoXCJiYXR0bGVzaGlwXCIsIHNldFBvc2l0aW9uTG9naWMoXCJiYXR0bGVzaGlwXCIpKTtcbiAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoXCJjYXJyaWVyXCIsIHNldFBvc2l0aW9uTG9naWMoXCJjYXJyaWVyXCIpKTtcblxuICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChcbiAgICBcImRlc3Ryb3llclwiLFxuICAgIGNvbXB1dGVyQm9hcmQucmVnaXN0ZXJDb21wdXRlclBvc2l0aW9uc0ZvcihcImRlc3Ryb3llclwiKVxuICApO1xuICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChcbiAgICBcInN1Ym1hcmluZVwiLFxuICAgIGNvbXB1dGVyQm9hcmQucmVnaXN0ZXJDb21wdXRlclBvc2l0aW9uc0ZvcihcInN1Ym1hcmluZVwiKVxuICApO1xuICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChcbiAgICBcImNydWlzZXJcIixcbiAgICBjb21wdXRlckJvYXJkLnJlZ2lzdGVyQ29tcHV0ZXJQb3NpdGlvbnNGb3IoXCJjcnVpc2VyXCIpXG4gICk7XG4gIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKFxuICAgIFwiYmF0dGxlc2hpcFwiLFxuICAgIGNvbXB1dGVyQm9hcmQucmVnaXN0ZXJDb21wdXRlclBvc2l0aW9uc0ZvcihcImJhdHRsZXNoaXBcIilcbiAgKTtcbiAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoXG4gICAgXCJjYXJyaWVyXCIsXG4gICAgY29tcHV0ZXJCb2FyZC5yZWdpc3RlckNvbXB1dGVyUG9zaXRpb25zRm9yKFwiY2FycmllclwiKVxuICApO1xuXG4gIGNvbXB1dGVyQm9hcmQuZ2V0QWxsQ29vcmRpbmF0ZXNPbk1hcCgpOyAvLyA8LS0gcmV2ZWFsIGNvbXB1dGVyIHNoaXBzIGluIHRoZSBjb25zb2xlXG4gIGNvbXB1dGVyQm9hcmQucmVwb3J0Q2xpY2tlZFNxdWFyZSgpOyAvLyA8LS0tLSBDb21wdXRlciBib2FyZCBjb2xvdXJzIGluIG1hdGNoaW5nIHBvc2l0aW9uc1xuXG4gIGh1bWFuLnNlbmRzQXR0YWNrKGNvbXB1dGVyQm9hcmQsIGNvbXB1dGVyLCBodW1hbkJvYXJkKTtcbn1cbiIsImltcG9ydCBkaXNwbGF5VmljdG9yeU1vZGFsIGZyb20gXCIuL2Rpc3BsYXlWaWN0b3J5TW9kYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25HYW1lT3ZlcigpIHtcbiAgbGV0IGhpdHNPbkNvbXB1dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvdXJlZC1pblwiKTtcbiAgbGV0IGhpdHNPbkh1bWFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZXJ0YWluLWhpdFwiKTtcbiAgaWYgKGhpdHNPbkNvbXB1dGVyLmxlbmd0aCA9PT0gMTUpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRpc3BsYXlWaWN0b3J5TW9kYWwoXCJodW1hblwiKTtcbiAgICB9LCAxOTApO1xuICB9XG4gIGlmIChoaXRzT25IdW1hbi5sZW5ndGggPT09IDE1KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXNwbGF5VmljdG9yeU1vZGFsKFwiY29tcHV0ZXJcIik7XG4gICAgfSwgMTkwKTtcbiAgfVxufVxuIiwiaW1wb3J0IGdldE5leHRMZW5ndGhUb0JlUGxhY2VkIGZyb20gXCIuL2dldE5leHRMZW5ndGhUb0JlUGxhY2VkXCI7XG5pbXBvcnQgbGFzdFBhaW50ZWRDb29yZHMgZnJvbSBcIi4vbGFzdFBhaW50ZWRDb29yZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFpbnRMZW5ndGgoaW1hZ2VJZGVlLCBzcXVhcmVJZGVlLCBvcmllbnRhdGlvbikge1xuICBpZiAob3JpZW50YXRpb24gPT09IHVuZGVmaW5lZCkgb3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgbGV0IHRoZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW1hZ2VJZGVlKTtcbiAgaWYgKHRoZUltYWdlLmNsYXNzTGlzdC5jb250YWlucyhcInJvdGF0ZS12ZXJ0aWNhbFwiKSkgb3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCI7XG4gIGlmIChcbiAgICB0aGVJbWFnZS5pZCA9PT0gXCJiYXR0bGVzaGlwXCIgJiZcbiAgICAhdGhlSW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwicm90YXRlLXZlcnRpY2FsXCIpXG4gIClcbiAgICBvcmllbnRhdGlvbiA9IFwidmVydGljYWxcIjtcbiAgaWYgKFxuICAgIHRoZUltYWdlLmlkID09PSBcImJhdHRsZXNoaXBcIiAmJlxuICAgIHRoZUltYWdlLmNsYXNzTGlzdC5jb250YWlucyhcInJvdGF0ZS12ZXJ0aWNhbFwiKVxuICApXG4gICAgb3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcblxuICBsZXQgbGV0dGVyQ2VsbHMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuXG4gIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgbGV0IGxlbmd0aFRvRmlsbCA9IGdldE5leHRMZW5ndGhUb0JlUGxhY2VkKGltYWdlSWRlZSk7XG4gICAgbGV0IG51bSA9IE51bWJlcihzcXVhcmVJZGVlLnN1YnN0cmluZygxKSk7XG4gICAgbGV0IHRoZUxldHRlciA9IHNxdWFyZUlkZWUuY2hhckF0KDApO1xuICAgIGxldCBpbmRleE9mTGV0dGVyID0gbGV0dGVyQ2VsbHMuaW5kZXhPZih0aGVMZXR0ZXIpO1xuXG4gICAgLy9kbyBub3QgcHJvY2VlZCBpZiB2ZXJ0aWNhbCBvdmVyZmxvd1xuXG4gICAgaWYgKGluZGV4T2ZMZXR0ZXIgKyBsZW5ndGhUb0ZpbGwgPiAxMCkge1xuICAgICAgY29uc29sZS5sb2coaW5kZXhPZkxldHRlciArIFwid291bGQgb3ZlcmZsb3cgdGhlIG1hcCwgY2Fubm90IHBsYWNlIHRoZXJlXCIpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhUb0ZpbGw7IGkrKykge1xuICAgICAgbGV0IGxldHRlciA9IGxldHRlckNlbGxzW2luZGV4T2ZMZXR0ZXJdO1xuICAgICAgbGV0IGNvb3JkRGF0YSA9IGxldHRlciArIG51bTtcbiAgICAgIGxldCBjb29yZFRvUGFpbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb29yZERhdGEpO1xuICAgICAgbGV0IGNsYXNzVG9BZGQgPSBcInBvc2l0aW9uZWQtXCIgKyBpbWFnZUlkZWU7XG4gICAgICBjb29yZFRvUGFpbnQuY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcbiAgICAgIGNvb3JkVG9QYWludC5jbGFzc0xpc3QudG9nZ2xlKFwib24tYm9hcmRcIik7XG4gICAgICBsYXN0UGFpbnRlZENvb3Jkcyhjb29yZERhdGEpO1xuICAgICAgaW5kZXhPZkxldHRlcisrOyAvLyA8LS0tIEEgdmVydGljYWwgbGluZVxuICAgIH1cbiAgfVxuXG4gIC8vL2hvcml6b250YWwgcG9zaXRpb25pbmdcblxuICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgbGV0IGxlbmd0aFRvRmlsbCA9IGdldE5leHRMZW5ndGhUb0JlUGxhY2VkKGltYWdlSWRlZSk7XG4gICAgbGV0IGxldHRlciA9IHNxdWFyZUlkZWUuY2hhckF0KDApO1xuICAgIGxldCBudW0gPSBOdW1iZXIoc3F1YXJlSWRlZS5zdWJzdHJpbmcoMSkpO1xuXG4gICAgLy9kbyBub3QgcHJvY2VlZCBpZiBob3Jpem9udGFsIG92ZXJmbG93XG5cbiAgICBpZiAobnVtICsgbGVuZ3RoVG9GaWxsIC0gMSA+IDEwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhUb0ZpbGw7IGkrKykge1xuICAgICAgbGV0IGNvb3JkRGF0YSA9IGxldHRlciArIG51bTtcbiAgICAgIGxldCBjb29yZFRvUGFpbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb29yZERhdGEpO1xuICAgICAgbGV0IGNsYXNzVG9BZGQgPSBcInBvc2l0aW9uZWQtXCIgKyBpbWFnZUlkZWU7XG4gICAgICBjb29yZFRvUGFpbnQuY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcbiAgICAgIGNvb3JkVG9QYWludC5jbGFzc0xpc3QudG9nZ2xlKFwib24tYm9hcmRcIik7XG5cbiAgICAgIGxhc3RQYWludGVkQ29vcmRzKGNvb3JkRGF0YSk7XG4gICAgICBudW0rKzsgLy8gPC0tIGEgaG9yaXpvbnRhbCBsaW5lXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgc3VibWFyaW5lIGZyb20gXCIuL2ltZy9yZXN1cnJlY3Rpb24ucG5nXCI7XG5pbXBvcnQgY3J1aXNlciBmcm9tIFwiLi9pbWcvZW50ZXJwcmlzZTIucG5nXCI7XG5pbXBvcnQgYmF0dGxlc2hpcCBmcm9tIFwiLi9pbWcvZ3VuZGFtLXN1aXQucG5nXCI7XG5pbXBvcnQgY2FycmllciBmcm9tIFwiLi9pbWcvc3VwZXItc3Rhci1kZXN0cm95ZXIucG5nXCI7XG5pbXBvcnQgY3JlYXRlUmVhZHlCdG4gZnJvbSBcIi4vY3JlYXRlUmVhZHlCdG5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlc2VudE5leHRJbWFnZShhcnJheU9mUGljdHVyZUlEcykge1xuICBsZXQgbmV4dEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbGV0IGV4YW1wbGVPcmlnaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4YW1wbGUtb3JpZ2luXCIpO1xuXG4gIHN3aXRjaCAoYXJyYXlPZlBpY3R1cmVJRHNbMF0pIHtcbiAgICBjYXNlIFwieC13aW5nXCI6XG4gICAgICBuZXh0SW1hZ2Uuc3JjID0gc3VibWFyaW5lO1xuICAgICAgbmV4dEltYWdlLmlkID0gXCJzdWJtYXJpbmVcIjtcblxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInN1Ym1hcmluZVwiOlxuICAgICAgbmV4dEltYWdlLnNyYyA9IGNydWlzZXI7XG4gICAgICBuZXh0SW1hZ2UuaWQgPSBcImNydWlzZXJcIjtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcImNydWlzZXJcIjpcbiAgICAgIG5leHRJbWFnZS5zcmMgPSBiYXR0bGVzaGlwO1xuICAgICAgbmV4dEltYWdlLmlkID0gXCJiYXR0bGVzaGlwXCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJiYXR0bGVzaGlwXCI6XG4gICAgICBuZXh0SW1hZ2Uuc3JjID0gY2FycmllcjtcbiAgICAgIG5leHRJbWFnZS5pZCA9IFwiY2FycmllclwiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiY2FycmllclwiOlxuICAgICAgY3JlYXRlUmVhZHlCdG4oKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgbmV4dEltYWdlLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlLWRyYWdnYWJsZS1pbWdcIik7XG4gIG5leHRJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYWJvc2x1dGUtcG9zaXRpb25cIik7XG4gIG5leHRJbWFnZS5kcmFnZ2FibGUgPSB0cnVlO1xuICAvL2NoZWNrIGhvdyBtYW55IGRpdnMgaW4gZXhhbXBsZS1vcmlnaW4gKHRoZSBkaXYgd2hlcmUgbmV3IGltYWdlcyBhcHBlYXIpXG4gIGlmIChleGFtcGxlT3JpZ2luLmNoaWxkRWxlbWVudENvdW50ID4gMCkgcmV0dXJuO1xuICAvL3RoZSBjb2RlIGJlbG93IHdpbGwgb25seSBydW4gaWYgZXhhbXBsZU9yaWdpbiBpcyBlbXB0eVxuICBleGFtcGxlT3JpZ2luLmFwcGVuZENoaWxkKG5leHRJbWFnZSk7XG4gIG5leHRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZnVuY3Rpb24gb25EcmFnU3RhcnQoZSkge1xuICAgICAgbGV0IHN0YXJTaGlwTmFtZSA9IGFycmF5T2ZQaWN0dXJlSURzWzBdO1xuICAgICAgbGV0IGNsYXNzVG9SZW1vdmUgPSBcInBvc2l0aW9uZWQtXCIgKyBzdGFyU2hpcE5hbWU7XG4gICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NUb1JlbW92ZSkpIHtcbiAgICAgICAgbGV0IG9sZFBvc2l0aW9uc1RvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICBcIi5cIiArIGNsYXNzVG9SZW1vdmVcbiAgICAgICAgKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbGRQb3NpdGlvbnNUb1JlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCB0b0JlUmVzdHlsZWQgPSBvbGRQb3NpdGlvbnNUb1JlbW92ZVtpXTtcbiAgICAgICAgICB0b0JlUmVzdHlsZWQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc1RvUmVtb3ZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBlLnRhcmdldC5pZCk7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZS50YXJnZXQsIDAsIDApO1xuICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJncmFiYmluZ1wiKTtcbiAgICB9XG5cbiAgICBvbkRyYWdTdGFydChlKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgY29pblRvc3MsIHsgcmFuZG9tTGltaXRlckZvciwgcmFuZG9tT3V0T2ZUZW4gfSBmcm9tIFwiLi9jb2luVG9zc1wiO1xuXG5leHBvcnQgY29uc3QgcmFuZG9tUG9zaXRpb25zRm9yID0gKHR5cGVPZlNoaXApID0+IHtcbiAgbGV0IGNvb3Jkc1RvU2V0ID0gW107IC8vIDwtLSB0aGlzIHN0b3JlcyBhbGwgdGhlIGNvb3JkcyB0aGF0IHdpbGwgYmUgcmV0dXJuZWRcbiAgbGV0IHNoaXBMZW5ndGg7XG4gIGxldCBob3Jpem9udGFsTnVtYmVyQXJyYXkgPSBbXG4gICAgXCIxXCIsXG4gICAgXCIyXCIsXG4gICAgXCIzXCIsXG4gICAgXCI0XCIsXG4gICAgXCI1XCIsXG4gICAgXCI2XCIsXG4gICAgXCI3XCIsXG4gICAgXCI4XCIsXG4gICAgXCI5XCIsXG4gICAgXCIxMFwiLFxuICBdO1xuICBsZXQgdmVydGljYWxMZXR0ZXJBcnJheSA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG5cbiAgbGV0IG9yaWVudGF0aW9uID0gY29pblRvc3MoKTtcblxuICBsZXQgeVNwb3Q7XG4gIGxldCB4U3BvdDtcblxuICBzd2l0Y2ggKHR5cGVPZlNoaXApIHtcbiAgICBjYXNlIFwiZGVzdHJveWVyXCI6XG4gICAgICBzaGlwTGVuZ3RoID0gMTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcInN1Ym1hcmluZVwiOlxuICAgICAgc2hpcExlbmd0aCA9IDI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJjcnVpc2VyXCI6XG4gICAgICBzaGlwTGVuZ3RoID0gMztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcImJhdHRsZXNoaXBcIjpcbiAgICAgIHNoaXBMZW5ndGggPSA0O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiY2FycmllclwiOlxuICAgICAgc2hpcExlbmd0aCA9IDU7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIC8vRGVwZW5kaW5nIG9uIGl0cyBvcmllbnRhdGlvbiwgYWRkIHZhbHVlIG9uIGl0ZXJhdGlvbi5cbiAgLy9UaGUgbGltaXRlcnMgYWxsb3cgdXMgdG8gbWFrZSBzdXJlIHdlJ3JlIG5vdCBwbGFjaW5nIHNwb3RzIG91dHNpZGUgb2YgdGhlIGJvYXJkXG4gIGlmIChvcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgIHhTcG90ID0gcmFuZG9tTGltaXRlckZvcih0eXBlT2ZTaGlwKTtcbiAgICB5U3BvdCA9IHJhbmRvbU91dE9mVGVuKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5ld1NoaXBDb29yZGluYXRlID1cbiAgICAgICAgdmVydGljYWxMZXR0ZXJBcnJheVt5U3BvdF0gKyBob3Jpem9udGFsTnVtYmVyQXJyYXlbeFNwb3RdO1xuICAgICAgY29vcmRzVG9TZXQucHVzaChuZXdTaGlwQ29vcmRpbmF0ZSk7XG4gICAgICB4U3BvdCsrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChvcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICB5U3BvdCA9IHJhbmRvbUxpbWl0ZXJGb3IodHlwZU9mU2hpcCk7XG4gICAgeFNwb3QgPSByYW5kb21PdXRPZlRlbigpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBuZXdTaGlwQ29vcmRpbmF0ZSA9XG4gICAgICAgIHZlcnRpY2FsTGV0dGVyQXJyYXlbeVNwb3RdICsgaG9yaXpvbnRhbE51bWJlckFycmF5W3hTcG90XTtcbiAgICAgIGNvb3Jkc1RvU2V0LnB1c2gobmV3U2hpcENvb3JkaW5hdGUpO1xuICAgICAgeVNwb3QrKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29vcmRzVG9TZXQ7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVhZHlCdG5DbGljaygpIHtcbiAgbGV0IGJvYXJkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQxXCIpO1xuICBsZXQgYWxsU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlc1wiKTtcbiAgbGV0IGFsbEltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIik7XG4gIGJvYXJkMS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtcGxhY2VtZW50LXN0YWdlXCIpO1xuICBhbGxTcXVhcmVzLmZvckVhY2goKHNxKSA9PiB7XG4gICAgc3EuY2xhc3NMaXN0LnJlbW92ZShcInBsYWNlbWVudC1zdGFnZVwiKTtcbiAgICBzcS5jbGFzc0xpc3QucmVtb3ZlKFwic3F1YXJlcy1hbmltYXRpb25cIik7XG4gIH0pO1xuICBhbGxJbWFnZXMuZm9yRWFjaCgoaW1nKSA9PiBpbWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpbWcpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcG9zaXRpb25Cb2FyZE9uZSgpIHtcbiAgbGV0IGFsbFNxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zcXVhcmVzXCIpO1xuICBhbGxTcS5mb3JFYWNoKChzcSkgPT4gc3EuY2xhc3NMaXN0LmFkZChcImZhZGVcIikpO1xuICByZW1vdmVCdG5Db250YWluZXJEaXYoKTtcbiAgbGV0IGJvYXJkT25lSW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkMVwiKTtcbiAgbGV0IGJvYXJkMU91dHNpZGU7XG4gIGJvYXJkMU91dHNpZGUgPSBib2FyZE9uZUluQ29udGFpbmVyO1xuICBsZXQgZHJhZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZy1kaXZcIik7XG4gIGRyYWdEaXYucmVtb3ZlQ2hpbGQoYm9hcmRPbmVJbkNvbnRhaW5lcik7XG4gIGRyYWdEaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnRGl2KTtcbiAgbGV0IGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZ1wiKTtcbiAgYm9hcmQxT3V0c2lkZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQxLW91dHNpZGVcIik7XG4gIGJnLmFwcGVuZENoaWxkKGJvYXJkMU91dHNpZGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVCdG5Db250YWluZXJEaXYoKSB7XG4gIGxldCBidG5Db250YWluZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1jb250YWluZXItZGl2XCIpO1xuICBidG5Db250YWluZXJEaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChidG5Db250YWluZXJEaXYpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZUltZygpIHtcbiAgbGV0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm90YXRlLWJ1dHRvblwiKTtcbiAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGRyYWdnYWJsZUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXhhbXBsZS1kcmFnZ2FibGUtaW1nXCIpO1xuICAgIGRyYWdnYWJsZUltZy5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLXZlcnRpY2FsXCIpO1xuICAgIGNvbnNvbGUubG9nKFwicm90YXRpbmcuLi5cIik7XG4gIH0pO1xufVxuIiwiLy9UaGlzIGZ1bmN0aW9uIHNjYW5zIHRoZSBET00gZm9yIHBvc2l0aW9uZWQgc2hpcHMgYW5kIHRoZW4gcmV0dXJucyB0aGUgW3Bvc2l0aW9uc10gb2YgdGhlIHNoaXAgZ2l2ZW4gYXMgcGFyYW1ldGVyLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRQb3NpdGlvbkxvZ2ljKHNoaXBUeXBlKSB7XG4gIGxldCBmaWxsZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9uLWJvYXJkXCIpO1xuICBsZXQgcG9zaXRpb25zID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxsZWQubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY3VycmVudCA9IGZpbGxlZFtpXTtcbiAgICBpZiAoY3VycmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3NpdGlvbmVkLVwiICsgc2hpcFR5cGUpKSB7XG4gICAgICBwb3NpdGlvbnMucHVzaChjdXJyZW50LmlkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcG9zaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9