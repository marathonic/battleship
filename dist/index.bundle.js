(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n:root {\n    font-family: Righteous;\n    --cyberYellow: #FFDC00;\n    --sleekGrey: #DDDDDD;\n    --aquaticBlue: #7FDBFF;\n    --pirateNavy: #001f3f;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.bg {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 120px 1fr;\n    grid-template-columns: 1fr 3fr 1fr;\n    background-color: #001f3f;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    /* TESTING DEVELOPMENT */\n    /* background-color: white; */\n}\n\nh1 {\n    grid-column: 2;\n    justify-self: center;\n    font-size: 47px;\n    color: var(--cyberYellow);\n    /* TESTING DEVELOPMENT */\n    /* color: black;  */\n}\n\n.boards {\n    margin-top: 30px;\n    width: 30vw;\n    height: 69vh;\n    /* border: solid whitesmoke 7px; */\n\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    \n    /* TESTING DEVELOPMENT */\n    /* border: solid black 3px; */\n}\n\n.boards.board1 {\n    \n    width: 25vw;\n    height: 35vh;\n    /* margin-left: 15vw ; */\n    /* margin-left: 0.5vw; */\n    grid-row: 3;\n    grid-column: 2;\n    justify-self: center;\n    \n}\n\n/* TO MAKE THE HUMAN HOLOGRAM LOOK MORE UNIFORM, REPLACE BELOW WITH: .board1 div:nth-child(10n+1)  */\n.boards div:nth-child(10n+1) {\n    margin-left: 2vw;\n    width: 5vw;\n}\n\n\n.boards div:nth-child(10n+10) {\n    margin-right: 2vw;\n    width: 5vw;\n}\n\n.boards div:first-of-type {\n    border-top-left-radius: 100%;\n}\n\n.boards div:nth-of-type(91) {\n    border-bottom-left-radius: 100%;\n}\n\n.boards div:nth-of-type(10) {\n    border-top-right-radius: 100%;\n}\n\n.boards div:last-of-type {\n    border-bottom-right-radius: 100%;\n}\n\n.squares-computer:hover {\n    background-color: rgba(255, 220, 0, 0.7);\n}\n/* \nATTENTION\nATTENTION\n-------------------------------------------------------\n-------------------------------------------------------- */\n/* LMAOOOOOOOOOOOOOOOOOOOOOO WE DID THE WHOLE STYLING ON THE PLAYER'S BOARD\nIT'S SUPPOSED TO BE ON THE COMPUTER'S BOARD!!! SWITCH THE STYLING NAMES */\n\n.boards.board2{\n    margin-left: 15vw;\n    border:dashed 1px rgba(255, 220, 0, 0.1);\n    border: none;\n    border-top-left-radius: 10%;\n    border-bottom-left-radius: 10%;\n    border-top-right-radius: 10%;\n    border-bottom-right-radius: 10%;\n    width: 70vw;\n    height: 30vh;\n\n    grid-row:2;\n    /* border-start-end-radius: 70%; */\n}\n\n\n.boards:hover {\n    cursor: crosshair;\n    \n}\n\n.squares-computer {\n    border: dashed 1px var(--cyberYellow);\n    background-color: rgba(255, 255, 255, 0.2);\n}\n.squares {\n    border: solid cyan 1px;\n    background-color: rgba(0, 255, 255, 0.3);\n    cursor: pointer;\n    /* TESTING DEVELOPMENT */\n    /* border: solid black 1px; */\n}\n\n.squares-animation {\n    animation: append-animate .3s linear;\n}\n\n.cursor-not-allowed {\n    cursor:not-allowed;\n}\n\n.squares-computer:first-of-type {\n    border-top-left-radius: 100%;\n}\n\n.hovered-ship {\n    background-color: black;\n}\n\n.revealed-ship {\n    background-color: red;\n}\n\n/* NOTE ON VERTICAL POSITIONING ----------------------------------------> */\n/* WHEN WE PLACE OUR OWN SHIPS, IF WE'RE POSITIONING THE SHIP VERTICALLY, just :nth-child(10n) */\n/* WE want to select every other 10th square. So vertically we're selecting A2, B2, C2, etc */\n/* HOWEVER, WE'RE GETTING THE COORDINATES FROM THE LOGIC, NOT THE CSS! */\n/* So what we do is when we click the square, we get the index of its id in allSquaresXD nodeList with querySelectorAll, to do that, we first need to make an Array.from(allSquaresXD)*/\n/* And after we have the id in the Array, just loop over the original nodeList up to the length of the ship currently being placed.  */\n/* Each loop, we find the item at 0 + 10 */\nbutton {\n    max-width: max-content;\n    max-height: max-content;\n}\n\n.hello {\n    color: red;\n    font-size: 100px;\n}\n\n.coloured-in {\n    /* background-color: cyan; */\n    /* border-color: cyan; */\n    background-color: darkred;\n    border: none;\n    animation: pulse 5s infinite;\n}\n\n.coloured-in:hover {\n    background-color:cyan;\n}\n\n.missed-shot {\n    background-color: cyan;\n    background-color: white;\n    clip-path: polygon(100% 35%,100.00% 43.00%,0.00% 43.00%,0% 35%);\n}\n\n.missed-shot:hover {\n    background-color: #7FDBFF;\n    background-color: white;\n}\n\n.missed-shot-from-computer {\n    background-color: rgba(255, 255, 255, 0.7);\n}\n\n.coloured-in-from-computer {\n    background-color: yellow;\n}\n\n.allied-ship-location {\n    background-color: var(--cyberYellow);\n    border: solid var(--cyberYellow) 1px;\n}\n\n.deploy-ships-btn {\n\n    grid-row: 2;\n    position: absolute;\n    justify-self: center;\n    align-self: center;\n    background-color: var(--cyberYellow);\n    font-family: 'Righteous';\n    font-size: 60px;\n    color: rgb(9, 9, 75);\n    max-width: 70vw;\n    height: fit-content;\n    \n    display: grid;\n    flex-wrap: wrap;\n    cursor: pointer;\n}\n\n.invisible {\n    display: none;\n}\n\n.invisible:hover {\n    cursor:default;\n}\n\n.placement-stage {\n    width: 5vw;\n    height: 6vh;\n}\n\n.board1.board-placement-stage {\n    grid-row: 2;\n    justify-content: center;\n}\n\n/* Testing draggable CSS thing from digitalocean */\n\n.example-parent {\n    border: 2px solid #DFA612;\n    color: black;\n    display: flex;\n    font-family: sans-serif;\n    font-weight: bold;\n  }\n  \n  .example-origin {\n    flex-basis: 100%;\n    flex-grow: 1;\n    padding: 10px;\n  }\n  \n  .example-draggable {\n    background-color: #4AAE9B;\n    /* background: url('./img/xwing-sideview2-removebg-preview.png') no-repeat; */\n    font-weight: normal;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    padding: 10px;\n  }\n\n  .example-draggable-img {\n    /* background: url('./img/xwing-sideview2-removebg-preview.png') no-repeat; */\n    font-weight: normal;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    padding: 10px;\n  }\n\n  \n  \n  .example-dropzone {\n    background-color: #6DB65B;\n    background-color: rgba(255, 255, 255, 0.7);\n    flex-basis: 100%;\n    flex-grow: 1;\n    padding: 10px;\n  }\n\n  .testing-yellow {\n      background-color: yellow;\n  }\n\n  .example-parent {\n      grid-column: 2;\n      grid-row: 2;\n      height: 72%;\n  }\n\n  img {\n      width: 100%;\n      height: 100%;\n  }\n\n@font-face {\n    font-family: 'Righteous';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n}\n\n@keyframes pulse {\n    0%, 100% {\n        background-color: darkred;\n    }\n    50% {\n        background-color: crimson;\n    }\n}\n\n@keyframes append-animate {\n    from {\n        transform: scale(0);\n        opacity: 0;\n    }\n    to {\n        transform: scale(1);\n        opacity: 1;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,sBAAsB;IACtB,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,6BAA6B;IAC7B,kCAAkC;IAClC,yBAAyB;IACzB,yDAAwC;IACxC,wBAAwB;IACxB,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,yBAAyB;IACzB,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,kCAAkC;;IAElC,aAAa;IACb,mCAAmC;IACnC,sCAAsC;;IAEtC,wBAAwB;IACxB,6BAA6B;AACjC;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,wBAAwB;IACxB,WAAW;IACX,cAAc;IACd,oBAAoB;;AAExB;;AAEA,oGAAoG;AACpG;IACI,gBAAgB;IAChB,UAAU;AACd;;;AAGA;IACI,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,wCAAwC;AAC5C;AACA;;;;0DAI0D;AAC1D;yEACyE;;AAEzE;IACI,iBAAiB;IACjB,wCAAwC;IACxC,YAAY;IACZ,2BAA2B;IAC3B,8BAA8B;IAC9B,4BAA4B;IAC5B,+BAA+B;IAC/B,WAAW;IACX,YAAY;;IAEZ,UAAU;IACV,kCAAkC;AACtC;;;AAGA;IACI,iBAAiB;;AAErB;;AAEA;IACI,qCAAqC;IACrC,0CAA0C;AAC9C;AACA;IACI,sBAAsB;IACtB,wCAAwC;IACxC,eAAe;IACf,wBAAwB;IACxB,6BAA6B;AACjC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA,2EAA2E;AAC3E,gGAAgG;AAChG,6FAA6F;AAC7F,wEAAwE;AACxE,uLAAuL;AACvL,sIAAsI;AACtI,0CAA0C;AAC1C;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;IAC5B,wBAAwB;IACxB,yBAAyB;IACzB,YAAY;IACZ,4BAA4B;AAChC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,+DAA+D;AACnE;;AAEA;IACI,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,oCAAoC;IACpC,oCAAoC;AACxC;;AAEA;;IAEI,WAAW;IACX,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;IAClB,oCAAoC;IACpC,wBAAwB;IACxB,eAAe;IACf,oBAAoB;IACpB,eAAe;IACf,mBAAmB;;IAEnB,aAAa;IACb,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,WAAW;IACX,uBAAuB;AAC3B;;AAEA,kDAAkD;;AAElD;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,yBAAyB;IACzB,6EAA6E;IAC7E,mBAAmB;IACnB,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;EACf;;EAEA;IACE,6EAA6E;IAC7E,mBAAmB;IACnB,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;EACf;;;;EAIA;IACE,yBAAyB;IACzB,0CAA0C;IAC1C,gBAAgB;IAChB,YAAY;IACZ,aAAa;EACf;;EAEA;MACI,wBAAwB;EAC5B;;EAEA;MACI,cAAc;MACd,WAAW;MACX,WAAW;EACf;;EAEA;MACI,WAAW;MACX,YAAY;EAChB;;AAEF;IACI,wBAAwB;IACxB,+DAA4D;AAChE;;AAEA;IACI;QACI,yBAAyB;IAC7B;IACA;QACI,yBAAyB;IAC7B;AACJ;;AAEA;IACI;QACI,mBAAmB;QACnB,UAAU;IACd;IACA;QACI,mBAAmB;QACnB,UAAU;IACd;AACJ","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n:root {\n    font-family: Righteous;\n    --cyberYellow: #FFDC00;\n    --sleekGrey: #DDDDDD;\n    --aquaticBlue: #7FDBFF;\n    --pirateNavy: #001f3f;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.bg {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 120px 1fr;\n    grid-template-columns: 1fr 3fr 1fr;\n    background-color: #001f3f;\n    background-image: url(./img/cockpit.jpg);\n    /* TESTING DEVELOPMENT */\n    /* background-color: white; */\n}\n\nh1 {\n    grid-column: 2;\n    justify-self: center;\n    font-size: 47px;\n    color: var(--cyberYellow);\n    /* TESTING DEVELOPMENT */\n    /* color: black;  */\n}\n\n.boards {\n    margin-top: 30px;\n    width: 30vw;\n    height: 69vh;\n    /* border: solid whitesmoke 7px; */\n\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    \n    /* TESTING DEVELOPMENT */\n    /* border: solid black 3px; */\n}\n\n.boards.board1 {\n    \n    width: 25vw;\n    height: 35vh;\n    /* margin-left: 15vw ; */\n    /* margin-left: 0.5vw; */\n    grid-row: 3;\n    grid-column: 2;\n    justify-self: center;\n    \n}\n\n/* TO MAKE THE HUMAN HOLOGRAM LOOK MORE UNIFORM, REPLACE BELOW WITH: .board1 div:nth-child(10n+1)  */\n.boards div:nth-child(10n+1) {\n    margin-left: 2vw;\n    width: 5vw;\n}\n\n\n.boards div:nth-child(10n+10) {\n    margin-right: 2vw;\n    width: 5vw;\n}\n\n.boards div:first-of-type {\n    border-top-left-radius: 100%;\n}\n\n.boards div:nth-of-type(91) {\n    border-bottom-left-radius: 100%;\n}\n\n.boards div:nth-of-type(10) {\n    border-top-right-radius: 100%;\n}\n\n.boards div:last-of-type {\n    border-bottom-right-radius: 100%;\n}\n\n.squares-computer:hover {\n    background-color: rgba(255, 220, 0, 0.7);\n}\n/* \nATTENTION\nATTENTION\n-------------------------------------------------------\n-------------------------------------------------------- */\n/* LMAOOOOOOOOOOOOOOOOOOOOOO WE DID THE WHOLE STYLING ON THE PLAYER'S BOARD\nIT'S SUPPOSED TO BE ON THE COMPUTER'S BOARD!!! SWITCH THE STYLING NAMES */\n\n.boards.board2{\n    margin-left: 15vw;\n    border:dashed 1px rgba(255, 220, 0, 0.1);\n    border: none;\n    border-top-left-radius: 10%;\n    border-bottom-left-radius: 10%;\n    border-top-right-radius: 10%;\n    border-bottom-right-radius: 10%;\n    width: 70vw;\n    height: 30vh;\n\n    grid-row:2;\n    /* border-start-end-radius: 70%; */\n}\n\n\n.boards:hover {\n    cursor: crosshair;\n    \n}\n\n.squares-computer {\n    border: dashed 1px var(--cyberYellow);\n    background-color: rgba(255, 255, 255, 0.2);\n}\n.squares {\n    border: solid cyan 1px;\n    background-color: rgba(0, 255, 255, 0.3);\n    cursor: pointer;\n    /* TESTING DEVELOPMENT */\n    /* border: solid black 1px; */\n}\n\n.squares-animation {\n    animation: append-animate .3s linear;\n}\n\n.cursor-not-allowed {\n    cursor:not-allowed;\n}\n\n.squares-computer:first-of-type {\n    border-top-left-radius: 100%;\n}\n\n.hovered-ship {\n    background-color: black;\n}\n\n.revealed-ship {\n    background-color: red;\n}\n\n/* NOTE ON VERTICAL POSITIONING ----------------------------------------> */\n/* WHEN WE PLACE OUR OWN SHIPS, IF WE'RE POSITIONING THE SHIP VERTICALLY, just :nth-child(10n) */\n/* WE want to select every other 10th square. So vertically we're selecting A2, B2, C2, etc */\n/* HOWEVER, WE'RE GETTING THE COORDINATES FROM THE LOGIC, NOT THE CSS! */\n/* So what we do is when we click the square, we get the index of its id in allSquaresXD nodeList with querySelectorAll, to do that, we first need to make an Array.from(allSquaresXD)*/\n/* And after we have the id in the Array, just loop over the original nodeList up to the length of the ship currently being placed.  */\n/* Each loop, we find the item at 0 + 10 */\nbutton {\n    max-width: max-content;\n    max-height: max-content;\n}\n\n.hello {\n    color: red;\n    font-size: 100px;\n}\n\n.coloured-in {\n    /* background-color: cyan; */\n    /* border-color: cyan; */\n    background-color: darkred;\n    border: none;\n    animation: pulse 5s infinite;\n}\n\n.coloured-in:hover {\n    background-color:cyan;\n}\n\n.missed-shot {\n    background-color: cyan;\n    background-color: white;\n    clip-path: polygon(100% 35%,100.00% 43.00%,0.00% 43.00%,0% 35%);\n}\n\n.missed-shot:hover {\n    background-color: #7FDBFF;\n    background-color: white;\n}\n\n.missed-shot-from-computer {\n    background-color: rgba(255, 255, 255, 0.7);\n}\n\n.coloured-in-from-computer {\n    background-color: yellow;\n}\n\n.allied-ship-location {\n    background-color: var(--cyberYellow);\n    border: solid var(--cyberYellow) 1px;\n}\n\n.deploy-ships-btn {\n\n    grid-row: 2;\n    position: absolute;\n    justify-self: center;\n    align-self: center;\n    background-color: var(--cyberYellow);\n    font-family: 'Righteous';\n    font-size: 60px;\n    color: rgb(9, 9, 75);\n    max-width: 70vw;\n    height: fit-content;\n    \n    display: grid;\n    flex-wrap: wrap;\n    cursor: pointer;\n}\n\n.invisible {\n    display: none;\n}\n\n.invisible:hover {\n    cursor:default;\n}\n\n.placement-stage {\n    width: 5vw;\n    height: 6vh;\n}\n\n.board1.board-placement-stage {\n    grid-row: 2;\n    justify-content: center;\n}\n\n/* Testing draggable CSS thing from digitalocean */\n\n.example-parent {\n    border: 2px solid #DFA612;\n    color: black;\n    display: flex;\n    font-family: sans-serif;\n    font-weight: bold;\n  }\n  \n  .example-origin {\n    flex-basis: 100%;\n    flex-grow: 1;\n    padding: 10px;\n  }\n  \n  .example-draggable {\n    background-color: #4AAE9B;\n    /* background: url('./img/xwing-sideview2-removebg-preview.png') no-repeat; */\n    font-weight: normal;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    padding: 10px;\n  }\n\n  .example-draggable-img {\n    /* background: url('./img/xwing-sideview2-removebg-preview.png') no-repeat; */\n    font-weight: normal;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    padding: 10px;\n  }\n\n  \n  \n  .example-dropzone {\n    background-color: #6DB65B;\n    background-color: rgba(255, 255, 255, 0.7);\n    flex-basis: 100%;\n    flex-grow: 1;\n    padding: 10px;\n  }\n\n  .testing-yellow {\n      background-color: yellow;\n  }\n\n  .example-parent {\n      grid-column: 2;\n      grid-row: 2;\n      height: 72%;\n  }\n\n  img {\n      width: 100%;\n      height: 100%;\n  }\n\n@font-face {\n    font-family: 'Righteous';\n    src: url('./fonts/Righteous-Regular.ttf') format('truetype');\n}\n\n@keyframes pulse {\n    0%, 100% {\n        background-color: darkred;\n    }\n    50% {\n        background-color: crimson;\n    }\n}\n\n@keyframes append-animate {\n    from {\n        transform: scale(0);\n        opacity: 0;\n    }\n    to {\n        transform: scale(1);\n        opacity: 1;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputerPlayer": () => (/* binding */ ComputerPlayer)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");


function ComputerPlayer() {
  //begin CPU functionality
  let horizontal = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let vertical = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let cpuMoves = [];
  // Players take turns at playing the game

  const computerMove = () => {
    let xMove = Math.floor(Math.random() * 10);
    let yMove = Math.floor(Math.random() * 10);
    let computerShot = vertical[yMove] + horizontal[xMove];
    // <-- don't shoot the same location twice! Definitely not the most performant implementation, but let's test it out
    while (cpuMoves.includes(computerShot)) {
      xMove = Math.floor(Math.random() * 10);
      yMove = Math.floor(Math.random() * 10);
      computerShot = vertical[yMove] + horizontal[xMove];
    }
    cpuMoves.push(computerShot); // <-- always adds a new position;
    return computerShot;
    // return cpuMoves[cpuMoves.length - 1];
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

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _ComputerPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComputerPlayer */ "./src/ComputerPlayer.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _HumanPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HumanPlayer */ "./src/HumanPlayer.js");




function Game() {
  // <-- Only run functions, must not write new code here.
  let human = (0,_HumanPlayer__WEBPACK_IMPORTED_MODULE_2__["default"])("John");
  let humanBoard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();
  let computer = (0,_ComputerPlayer__WEBPACK_IMPORTED_MODULE_0__.ComputerPlayer)();
  let computerBoard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();
  //For now, placeholder Ships. Implement system for players to place ships manually later.
  // humanBoard.clickToPlaceShip();

  // document.body.addEventListener("click", function () {
  //  humanBoard.clickToPlaceShip();
  //   alert("test");
  // });

  humanBoard.placeShip("destroyer", "A1");
  humanBoard.placeShip("submarine", "A8", "A9"); // <-- When hovering X ship on grid, X ship highlights X squares on DOM. On click, put those squares' id into an Array. Return that array (holds our coordinates). We then change the parameters of placeShip to take the <...coordinates> array. We'll have to figure out how to get them out of the array. RIght now we're getting individual values, but with an array, we would get a double array [['A1','A2', 'etc.']]

  computerBoard.placeShip("destroyer", "B1");
  computerBoard.placeShip("submarine", "C3", "C4"); // <-- When hovering X ship on grid, X ship highlights X squares on DOM. On click, put those squares' id into an Array. Return that array (holds our coordinates). We then change the parameters of placeShip to take the <...coordinates> array. We'll have to figure out how to get them out of the array. RIght now we're getting individual values, but with an array, we would get a double array [['A1','A2', 'etc.']]

  humanBoard.getAllCoordinatesOnMap();
  computerBoard.getAllCoordinatesOnMap();
  computerBoard.reportClickedSquare(); // <---- COMPUTER BOARD COLOURS IN MATCHING POSITIONS
  // humanBoard.revealHumansShips();
  humanBoard.reportComputersAttacksOnBoard();

  // humanBoard.reportAllHumanPositionsAttacked(); // <-- fill in when a human coordinate is attacked

  // should we make async? <------------
  human.sendsAttack(computerBoard, computer, humanBoard); //// <--------ATTENTION!!! WE LEFT OFF ON LINE 33 (THE LINE BELOW THIS ONE) PICK IT BACK UP THERE, WE ALREADY HAVE THAT LOGIC WRITTEN SOMEWHERE.
  //computer attacks here.
  humanBoard.showAlliedShips(); // <-------- This was supposed to show us all our allied ships on the board, but it's not working. Figure out why.

  //lets run some
  // human.attack('A2')
  // <-- write modified computerMove() that places coordinates.
  //Loop through the ship's length starting at i = length, then i-- until 0.
}


/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/component.js");



//<------- How to place ships
//Needs to get input from the DOM.
//addEventListener('click') for each square in the battlefield.
// send the id of the clicked square to placeShip()

function Gameboard() {
  let shipsHere = []; // <-- contains the coordinate locations on which ships have been placed
  let missedShots = [];
  let sunkShips = [];
  let ship;
  let shipsObject = {};
  let targetShip;
  let allCoordinatesOnMap = [];
  let testLocationArray = ["A1", "A8", "A9"]; // <-------- WE'RE GOING TO SEND THE PLACEMENT COORDINATES THE USER CHOOSES TO AN ARRAY, JUST LIKE THIS.
  //For human boards:

  return {
    placeShip(shipModel, ...coordies) {
      ship = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipModel);
      let coordinates = coordies;
      // <-- register [{destroyer: 'A7'}, {anotherShip: 'coordinates'}, {etc...}];
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
    receiveAttack(coordinates) {
      try {
        //<-- if position has been hit before and was a miss, hit() => false
        if (missedShots.includes(coordinates)) {
          // console.log("cant hit same position twice");
          return false;
        }
        // <-- is there a ship at those coordinates? If yes, proceed with line below
        if (shipsHere.some((e) => e.positions.includes(coordinates))) {
          targetShip = shipsHere.find((e) => e.positions.includes(coordinates)); // <-- we get the ship at the input coordinates (the targeted ship's own object)
          if (targetShip.damage.includes(coordinates)) return false; // <-- if that position has already been hit, return false.

          targetShip.hit(coordinates);
          if (sunkShips.length === 2) {
            console.log("THE GAME IS OVER, ALL SHIPS ARE SUNK DUDE");
            return false;
            return "THE GAME IS OVER, ALL SHIPS ARE SUNK";
          }
          if (targetShip.isSunk()) {
            targetShip.isSunk = true;
            sunkShips.push(targetShip.getName());
            console.log(`Direct hit! ${targetShip.getName()} has been sunk`);
            return true;
            return `${targetShip.getName()} has been sunk`;
          }
          console.log(
            `${targetShip.getName()} has been hit. HP Reamining: ${targetShip.getLength()}`
          );
          return true;
          return `${targetShip.getName()} hit, HP: ${targetShip.getLength()}`;
        } else {
          missedShots.push(coordinates);
          console.log("MISS");
          return false;
          return "miss"; // ('miss' for testing purposes, change to false!)<-- player hit the water, there's no ships there
        }
      } catch (err) {
        return err;
      }
    },
    missedHere() {
      return missedShots;
    },
    reportSunk() {
      return sunkShips.length === shipsHere.length ? true : false;
    },
    hoverLength() {
      switch (shipsHere.length) {
        case 0:
          return 2; // <-- no ships have been placed, current ship is a destroyer (2 squares)
        // write some code to make the

        default:
          break;
      }
    },
    selectHoveredOverAsCoordies() {
      // <-- upon click, send to placeShips the IDs of the squares that have a class of hovered-over as the (...coordinates) parameter.
    },

    //ok just get the id of the clicked square.

    //Wait a minute. Why do we need to be able to attack our own board? We don't
    //The computer's attack process is as follows:
    //1) The computer sends a coordinate to be attacked on the human's board
    //2) The human's board receivesAttack to that coordinate

    //reportAttackedSquare will be called by human only
    // reportAttackedSquare() {

    // }

    //reportClickedSquare will be called by computer only

    reportClickedSquare() {
      let board2 = document.querySelector(".board2");
      board2.addEventListener("click", function (e) {
        if (e.target.classList == "squares-computer") {
          let allCoordinatesOnMapArray = allCoordinatesOnMap; // <-- why am I storing a reference here?
          allCoordinatesOnMapArray.forEach((arr) => {
            if (arr.includes(e.target.id)) {
              console.log("MATCH");
              let matchedSquare = e.target;
              matchedSquare.classList.add("coloured-in");
            }
          });
          // console.log(e.target.id);
          // return e.target.id;
        }
        // <--- We're still running insde the eventListener for the computer board
        // <-- We're giving an ample 2 sec timeout for the computer to play its turn, and then
        // <-- by the time the timeout runs, the newly hit coordinate will have been added to the array
        setTimeout(() => {
          let alltheGoddarnSquaresAgain =
            document.querySelectorAll(".squares-computer");
          alltheGoddarnSquaresAgain.forEach((sq) => {
            if (missedShots.includes(sq.id)) {
              sq.classList.add("missed-shot");
              console.log(
                "This message means the missedShots array in human gameboard does include the coordinate"
              );
            }
          });
        }, 100);
      });
    },
    reportComputersAttacksOnBoard() {
      let boardGetsClicked = document.querySelector(".board2");
      boardGetsClicked.addEventListener("click", function () {
        //now let's create the one for the human board
        setTimeout(() => {
          let humanSquares = document.querySelectorAll(".squares");
          humanSquares.forEach((sq) => {
            if (missedShots.includes(sq.id)) {
              sq.classList.add("missed-shot-from-computer");
            }
            if (sq.classList.contains("allied-ship-location")) {
              sq.classList.add("coloured-in-from-computer");
            }
          });
        }, 300);
      });
    },
    // reportAllHumanPositionsAttacked() {
    //   let alltheGoddarnSquaresAgain = document.querySelectorAll(".squares");
    //   alltheGoddarnSquaresAgain.forEach((sq) => {
    //     if (missedShots.includes(sq)) {
    //       sq.classList.add("missed-shot");
    //     }
    //   });
    // },

    //send that id to ReceiveAttacck
    newReceiveAttack(coordinates) {
      try {
        //<-- if position has been hit before, hit() => false
        // <-- is there a ship at those coordinates? If yes, proceed with line below
        if (shipsHere.some((e) => e.positions.includes(coordinates))) {
          targetShip = shipsHere.find((e) => e.positions.includes(coordinates)); // <-- we get the ship at the input coordinates (the targeted ship's own object)
          if (targetShip.damage.includes(coordinates)) return false; // <-- if that position has already been hit, return false.
          targetShip.hit(coordinates);
          if (targetShip.isSunk()) {
            targetShip.isSunk = true;
            sunkShips.push(targetShip.getName());
            return true;
            return `${targetShip.getName()} has been sunk`;
          }
          return `${targetShip.getName()} hit, HP: ${targetShip.getLength()}`;
        } else {
          missedShots.push(coordinates);
          return "miss"; // ('miss' for testing purposes, change to false!)<-- player hit the water, there's no ships there
        }
      } catch (err) {
        return err;
      }
    },
    getAllCoordinatesOnMap() {
      console.log(allCoordinatesOnMap);
    },
    showAlliedShips() {
      let alliedBattlefield = document.querySelectorAll(".squares");
      alliedBattlefield.forEach((sq) => {
        if (testLocationArray.includes(sq.id)) {
          sq.classList.add("allied-ship-location");
        }
      });
    },

    // At the same time,, or later, immediately apply a CSS class to the square in the DOM.
  };
}


/***/ }),

/***/ "./src/HumanPlayer.js":
/*!****************************!*\
  !*** ./src/HumanPlayer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HumanPlayer)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");


function HumanPlayer(nameOfPlayer) {
  let playerName = nameOfPlayer;
  // Each player's boards and methods will be assigned automatically
  //Main Game Loop (make elsewhere):
  //  playerOne's turn ? playerTwo will receive attacks during this turn
  //  playerTwo's turn ? playerOne will receive attacks during this turn

  //<-- InputForm Regex for playerName: Reserve "computer" for computer Players
  //Regex for coordinates: take 1 letter and 1 or 2 digits. OR just
  //delimit coordinates by naming the physical DOM squares. choice = id;

  return {
    playerName() {
      return nameOfPlayer;
    },
    attacks(theComputersBoard) {
      let computerBoard = document.querySelector(".board2");
      computerBoard.addEventListener("click", function (e) {
        console.log(`${e.target.id} clicked, this fires from HumanPlayer!`);
        theComputersBoard.receiveAttack(e.target.id);
        // return `a coordinate ${e.target.id} has been clicked, get computer's board to receive the attack`;
      });
    },
    async sendsAttack(theComputersBoard, theComputerPlayer, theHumansBoard) {
      let computerBoard = document.querySelector(".board2");
      computerBoard.addEventListener("click", function (e) {
        theComputersBoard.receiveAttack(e.target.id);
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(shipType) {
  //   let hits = 0;
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
      console.log("HIT IS BEING CALLED FROM SHIP");
      return true;
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

/***/ "./src/clickBoardToPlaceShip.js":
/*!**************************************!*\
  !*** ./src/clickBoardToPlaceShip.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clickBoardToPlaceShip)
/* harmony export */ });
function clickBoardToPlaceShip(shipsHereArray) {
  let board = document.querySelector(".board1");
  board.addEventListener("click", function (e) {
    if (e.target.classList !== "squares") return false;
    let clickedChild = e.target;
    let indexOfClickedChild = Array.from(
      clickedChild.parentElement.children
    ).indexOf(clickedChild);
    // <--- we could get the id instead, and then we could send those IDs over to placeShip() as coordinate inputs
    let lengthToHover = shipsHereArray.length + 1;
    // let lengthToHover;
    // switch (shipsHere.length) {
    //   case 0:
    //     lengthToHover = 2;
    //     break;

    //   case 1:
    //     lengthToHover = 3;
    //     break;

    //   default:
    //     break;
    // }
    for (let i = 0; i < lengthToHover; i++) {
      let toBeStyled = indexOfClickedChild + i;
      console.log(toBeStyled);
      document
        .querySelector(`.board1 :nth-child(${toBeStyled})`)
        .classList.add("hovered-ship");
      // toBeStyled.classLi
    }
  });
}


/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ component)
/* harmony export */ });
/* harmony import */ var _clickBoardToPlaceShip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickBoardToPlaceShip */ "./src/clickBoardToPlaceShip.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print */ "./src/print.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_print__WEBPACK_IMPORTED_MODULE_2__);




function component() {
  const element = document.createElement("div");
  const background = document.createElement("div");
  background.classList.add("bg");

  //Title
  const title = document.createElement("h1");
  title.innerHTML = "Starship";
  const btn = document.createElement("button");

  //Get the coordinates with ships on them. shipsHere[] from variable
  // can we use the Game Module as an escrow for DOM and logic?
  //would it have to be async?
  //

  //before allowing players to place their ships, we'ŕe doing it manually.
  //let's just get shipsHere inside of here.
  //map through shipsHere to

  //   for (let i = 0; i < 100; i++) {
  //     let square = document.createElement("div");
  //     square.classList.add("squares");
  //     board1.appendChild(square);
  //   }

  //Board squares get IDs!

  //send that id to ReceiveAttacck

  // At the same time,, or later, immediately apply a CSS class to the square in the DOM.
  // When you send the ID pof the clicked square to the Gameboard, the Gameboard takes that id and marks that position as hit, which disables it from being hit again on the Gameboard.
  //When you hit a square two times, you get <false>. So when the Gameboard's receiveAttack function returns false, we need to let the DOM signal that.

  //DEV TEST: Console log the IDs when clicking a square

  // board1.addEventListener("click", function (e) {
  //   console.log(e.target.id);
  // });

  //Make a class for each ship to be placed. The hover length changes with each ship that's loaded to play next.
  //Then, a switch statement applies the appropriate class to each ship to be placed next
  //First ship (destroyer): Square hovered over + next sibling.
  //Last ship (carrier): Square hovered + next 5 siblings.

  //<----------------------------------------Let's pick it up here. We could try our idea from above.
  // board1.addEventListener("mouseover", function (e) {
  //   if (e.target.classList == "squares") {
  //     e.target.classList.add("hovered-ship");
  //     //<-- Take the return value of a function that reports the ship currently being placed
  //   }
  // });

  background.appendChild(title);
  element.appendChild(background);
  return element;
}


/***/ }),

/***/ "./src/deployShipsBtn.js":
/*!*******************************!*\
  !*** ./src/deployShipsBtn.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDeployShipsBtn)
/* harmony export */ });
// export default function addShips() {}

function addDeployShipsBtn() {
  const deployShipsBtn = document.createElement("button");
  deployShipsBtn.classList.add("deploy-ships-btn");
  deployShipsBtn.innerHTML = "ENGAGE";
  const background = document.querySelector(".bg");
  background.appendChild(deployShipsBtn);
  return background;
}


/***/ }),

/***/ "./src/dragShipImages.js":
/*!*******************************!*\
  !*** ./src/dragShipImages.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dragShipImages)
/* harmony export */ });
function dragShipImages() {
  //Wait for ENGAGE button click to present the ships:
  let engageBtn = document.querySelector(".deploy-ships-btn");
  engageBtn.addEventListener("click", function () {
    //Then wait just enough for the board animation to complete:
    //NOw for the images:
    const exampleParent = document.createElement("div");
    exampleParent.classList.add("example-parent");
    const exampleOrigin = document.createElement("div");
    exampleOrigin.classList.add("example-origin");
    exampleParent.appendChild(exampleOrigin);
    ///draggable
    const divDraggable = document.createElement("div");
    divDraggable.id = "draggable-1";
    divDraggable.classList.add("example-draggable");
    divDraggable.innerHTML = "draggable";
    divDraggable.draggable = true;
    exampleOrigin.appendChild(divDraggable);
    divDraggable.addEventListener("dragstart", function (e) {
      onDragStart(e);
    });
    ///another one, draggable 2
    const divDraggable2 = document.createElement("div");
    divDraggable2.id = "draggable-2";
    divDraggable2.classList.add("example-draggable");
    divDraggable2.innerHTML = "thingy-2";
    divDraggable2.draggable = true;
    exampleOrigin.appendChild(divDraggable2);
    divDraggable2.addEventListener("dragstart", function (e) {
      onDragStart(e);
    });
    ///a third one, this time an image
    const xWing = document.createElement("img");
    xWing.id = "x-wing";
    xWing.src = "xwing.png";
    xWing.classList.add("example-draggable-img");
    xWing.draggable = true;
    exampleOrigin.appendChild(xWing);
    xWing.addEventListener("dragstart", function (e) {
      onDragStart(e);
    });
    /////// dropzone

    const dropzone = document.createElement("div");
    dropzone.classList.add("example-dropzone");
    dropzone.innerHTML = "dropzone";
    dropzone.addEventListener("dragover", function (e) {
      onDragOver(e); // <-------------------- PAY ATTENTION! Divs don't drop by default, but images do!
      // When we switch to an img, if our img isn't dropping, take this part out!
    });
    dropzone.addEventListener("drop", function (e) {
      onDrop(e);
    });
    exampleParent.appendChild(dropzone);
    //   const xWing = document.createElement("img");
    //   xWing.src = "./img/enterprise-sideview.png";
    let bg = document.querySelector(".bg");
    setTimeout(() => {
      bg.appendChild(exampleParent);
    }, 320);
  });
}

function onDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);

  e.currentTarget.classList.add("testing-yellow");
}

function onDragOver(e) {
  e.preventDefault();
}

function onDrop(e) {
  let id = e.dataTransfer.getData("text");
  let draggableElement = document.getElementById(id);
  let dropzone = e.target;
  dropzone.appendChild(draggableElement);

  e.dataTransfer.clearData();
}


/***/ }),

/***/ "./src/generateComputerHologram.js":
/*!*****************************************!*\
  !*** ./src/generateComputerHologram.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateComputerHologram)
/* harmony export */ });
function generateComputerHologram() {
  //Board for computer
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
      square.classList.add("invisible");
      board2.appendChild(square);
    }
  }
}


/***/ }),

/***/ "./src/generateHumanHologram.js":
/*!**************************************!*\
  !*** ./src/generateHumanHologram.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateHumanHologram)
/* harmony export */ });
function generateHumanHologram() {
  let btn = document.querySelector(".deploy-ships-btn");
  btn.addEventListener("click", function (e) {
    //Board for human
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
        square.id = currentLetter + constructHorizontal[j]; // making its id equal the current letter + a number, up to number 10. Example: A7
        square.classList.add("squares");
        square.classList.add("placement-stage");
        square.classList.add("squares-animation");
        // square.classList.add("placement-stage"); //<-- REMOVE THIS CLASS UPON PLACING OUR LAST SHIP!

        board1.appendChild(square);
      }
    }
    board1.classList.add("board-placement-stage");
    let bg = document.querySelector(".bg");
    bg.appendChild(board1);
    e.target.parentNode.removeChild(e.target);
  });
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/component.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ "./src/Game.js");
/* harmony import */ var _clickBoardToPlaceShip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clickBoardToPlaceShip */ "./src/clickBoardToPlaceShip.js");
/* harmony import */ var _HumanPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HumanPlayer */ "./src/HumanPlayer.js");
/* harmony import */ var _deployShipsBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deployShipsBtn */ "./src/deployShipsBtn.js");
/* harmony import */ var _generateComputerHologram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generateComputerHologram */ "./src/generateComputerHologram.js");
/* harmony import */ var _generateHumanHologram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generateHumanHologram */ "./src/generateHumanHologram.js");
/* harmony import */ var _dragShipImages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dragShipImages */ "./src/dragShipImages.js");











document.body.appendChild((0,_component__WEBPACK_IMPORTED_MODULE_1__["default"])());
document.body.appendChild((0,_deployShipsBtn__WEBPACK_IMPORTED_MODULE_5__["default"])());
(0,_generateHumanHologram__WEBPACK_IMPORTED_MODULE_7__["default"])(); // <-- on click
(0,_dragShipImages__WEBPACK_IMPORTED_MODULE_8__["default"])();
// generateComputerHologram();
(0,_Game__WEBPACK_IMPORTED_MODULE_2__["default"])(); // <-- we are running Game from here. Game is in turn running reportClickedSquare() from the humanBoard variable created inside of Game.js


/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ (() => {



/***/ }),

/***/ "./src/fonts/Righteous-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/Righteous-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fd0110471f2228c1808a.ttf";

/***/ }),

/***/ "./src/img/cockpit.jpg":
/*!*****************************!*\
  !*** ./src/img/cockpit.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1ec85847c1a87ba7eb7a.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSw4QkFBOEIscUJBQXFCLE9BQU8sR0FBRyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLFFBQVEsT0FBTyxNQUFNLFFBQVEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxVQUFVLFlBQVksUUFBUSxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFB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RmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0NBQXdDO0FBQzFELHNEQUFzRDtBQUN0RDtBQUNBLG9CQUFvQixzQ0FBc0M7QUFDMUQ7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRCxnREFBZ0Q7QUFDaEQ7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BEO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q3FCO0FBQ2U7QUFDVjtBQUNrQztBQUNwQjtBQUNNO0FBQ0c7QUFDaUI7QUFDTjtBQUNkOztBQUU5QywwQkFBMEIsc0RBQVM7QUFDbkMsMEJBQTBCLDJEQUFpQjtBQUMzQyxrRUFBcUIsSUFBSTtBQUN6QiwyREFBYztBQUNkO0FBQ0EsaURBQUksSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Db21wdXRlclBsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9IdW1hblBsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGlja0JvYXJkVG9QbGFjZVNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kZXBsb3lTaGlwc0J0bi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RyYWdTaGlwSW1hZ2VzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2VuZXJhdGVDb21wdXRlckhvbG9ncmFtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2VuZXJhdGVIdW1hbkhvbG9ncmFtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvY29ja3BpdC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JpZ2h0ZW91cy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogUmlnaHRlb3VzO1xcbiAgICAtLWN5YmVyWWVsbG93OiAjRkZEQzAwO1xcbiAgICAtLXNsZWVrR3JleTogI0RERERERDtcXG4gICAgLS1hcXVhdGljQmx1ZTogIzdGREJGRjtcXG4gICAgLS1waXJhdGVOYXZ5OiAjMDAxZjNmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYmcge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxZjNmO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICAvKiBURVNUSU5HIERFVkVMT1BNRU5UICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcbn1cXG5cXG5oMSB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0N3B4O1xcbiAgICBjb2xvcjogdmFyKC0tY3liZXJZZWxsb3cpO1xcbiAgICAvKiBURVNUSU5HIERFVkVMT1BNRU5UICovXFxuICAgIC8qIGNvbG9yOiBibGFjazsgICovXFxufVxcblxcbi5ib2FyZHMge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgaGVpZ2h0OiA2OXZoO1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIHdoaXRlc21va2UgN3B4OyAqL1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIFxcbiAgICAvKiBURVNUSU5HIERFVkVMT1BNRU5UICovXFxuICAgIC8qIGJvcmRlcjogc29saWQgYmxhY2sgM3B4OyAqL1xcbn1cXG5cXG4uYm9hcmRzLmJvYXJkMSB7XFxuICAgIFxcbiAgICB3aWR0aDogMjV2dztcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICAvKiBtYXJnaW4tbGVmdDogMTV2dyA7ICovXFxuICAgIC8qIG1hcmdpbi1sZWZ0OiAwLjV2dzsgKi9cXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi8qIFRPIE1BS0UgVEhFIEhVTUFOIEhPTE9HUkFNIExPT0sgTU9SRSBVTklGT1JNLCBSRVBMQUNFIEJFTE9XIFdJVEg6IC5ib2FyZDEgZGl2Om50aC1jaGlsZCgxMG4rMSkgICovXFxuLmJvYXJkcyBkaXY6bnRoLWNoaWxkKDEwbisxKSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAydnc7XFxuICAgIHdpZHRoOiA1dnc7XFxufVxcblxcblxcbi5ib2FyZHMgZGl2Om50aC1jaGlsZCgxMG4rMTApIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAydnc7XFxuICAgIHdpZHRoOiA1dnc7XFxufVxcblxcbi5ib2FyZHMgZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4uYm9hcmRzIGRpdjpudGgtb2YtdHlwZSg5MSkge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4uYm9hcmRzIGRpdjpudGgtb2YtdHlwZSgxMCkge1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwJTtcXG59XFxuXFxuLmJvYXJkcyBkaXY6bGFzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XFxufVxcblxcbi5zcXVhcmVzLWNvbXB1dGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyMCwgMCwgMC43KTtcXG59XFxuLyogXFxuQVRURU5USU9OXFxuQVRURU5USU9OXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogTE1BT09PT09PT09PT09PT09PT09PT09PTyBXRSBESUQgVEhFIFdIT0xFIFNUWUxJTkcgT04gVEhFIFBMQVlFUidTIEJPQVJEXFxuSVQnUyBTVVBQT1NFRCBUTyBCRSBPTiBUSEUgQ09NUFVURVInUyBCT0FSRCEhISBTV0lUQ0ggVEhFIFNUWUxJTkcgTkFNRVMgKi9cXG5cXG4uYm9hcmRzLmJvYXJkMntcXG4gICAgbWFyZ2luLWxlZnQ6IDE1dnc7XFxuICAgIGJvcmRlcjpkYXNoZWQgMXB4IHJnYmEoMjU1LCAyMjAsIDAsIDAuMSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMCU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMCU7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxuXFxuICAgIGdyaWQtcm93OjI7XFxuICAgIC8qIGJvcmRlci1zdGFydC1lbmQtcmFkaXVzOiA3MCU7ICovXFxufVxcblxcblxcbi5ib2FyZHM6aG92ZXIge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgXFxufVxcblxcbi5zcXVhcmVzLWNvbXB1dGVyIHtcXG4gICAgYm9yZGVyOiBkYXNoZWQgMXB4IHZhcigtLWN5YmVyWWVsbG93KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG4uc3F1YXJlcyB7XFxuICAgIGJvcmRlcjogc29saWQgY3lhbiAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogVEVTVElORyBERVZFTE9QTUVOVCAqL1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDsgKi9cXG59XFxuXFxuLnNxdWFyZXMtYW5pbWF0aW9uIHtcXG4gICAgYW5pbWF0aW9uOiBhcHBlbmQtYW5pbWF0ZSAuM3MgbGluZWFyO1xcbn1cXG5cXG4uY3Vyc29yLW5vdC1hbGxvd2VkIHtcXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc3F1YXJlcy1jb21wdXRlcjpmaXJzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTtcXG59XFxuXFxuLmhvdmVyZWQtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucmV2ZWFsZWQtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyogTk9URSBPTiBWRVJUSUNBTCBQT1NJVElPTklORyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiAqL1xcbi8qIFdIRU4gV0UgUExBQ0UgT1VSIE9XTiBTSElQUywgSUYgV0UnUkUgUE9TSVRJT05JTkcgVEhFIFNISVAgVkVSVElDQUxMWSwganVzdCA6bnRoLWNoaWxkKDEwbikgKi9cXG4vKiBXRSB3YW50IHRvIHNlbGVjdCBldmVyeSBvdGhlciAxMHRoIHNxdWFyZS4gU28gdmVydGljYWxseSB3ZSdyZSBzZWxlY3RpbmcgQTIsIEIyLCBDMiwgZXRjICovXFxuLyogSE9XRVZFUiwgV0UnUkUgR0VUVElORyBUSEUgQ09PUkRJTkFURVMgRlJPTSBUSEUgTE9HSUMsIE5PVCBUSEUgQ1NTISAqL1xcbi8qIFNvIHdoYXQgd2UgZG8gaXMgd2hlbiB3ZSBjbGljayB0aGUgc3F1YXJlLCB3ZSBnZXQgdGhlIGluZGV4IG9mIGl0cyBpZCBpbiBhbGxTcXVhcmVzWEQgbm9kZUxpc3Qgd2l0aCBxdWVyeVNlbGVjdG9yQWxsLCB0byBkbyB0aGF0LCB3ZSBmaXJzdCBuZWVkIHRvIG1ha2UgYW4gQXJyYXkuZnJvbShhbGxTcXVhcmVzWEQpKi9cXG4vKiBBbmQgYWZ0ZXIgd2UgaGF2ZSB0aGUgaWQgaW4gdGhlIEFycmF5LCBqdXN0IGxvb3Agb3ZlciB0aGUgb3JpZ2luYWwgbm9kZUxpc3QgdXAgdG8gdGhlIGxlbmd0aCBvZiB0aGUgc2hpcCBjdXJyZW50bHkgYmVpbmcgcGxhY2VkLiAgKi9cXG4vKiBFYWNoIGxvb3AsIHdlIGZpbmQgdGhlIGl0ZW0gYXQgMCArIDEwICovXFxuYnV0dG9uIHtcXG4gICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5oZWxsbyB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcblxcbi5jb2xvdXJlZC1pbiB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGN5YW47ICovXFxuICAgIC8qIGJvcmRlci1jb2xvcjogY3lhbjsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBhbmltYXRpb246IHB1bHNlIDVzIGluZmluaXRlO1xcbn1cXG5cXG4uY29sb3VyZWQtaW46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmN5YW47XFxufVxcblxcbi5taXNzZWQtc2hvdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAzNSUsMTAwLjAwJSA0My4wMCUsMC4wMCUgNDMuMDAlLDAlIDM1JSk7XFxufVxcblxcbi5taXNzZWQtc2hvdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3RkRCRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWlzc2VkLXNob3QtZnJvbS1jb21wdXRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxuLmNvbG91cmVkLWluLWZyb20tY29tcHV0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5hbGxpZWQtc2hpcC1sb2NhdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YmVyWWVsbG93KTtcXG4gICAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jeWJlclllbGxvdykgMXB4O1xcbn1cXG5cXG4uZGVwbG95LXNoaXBzLWJ0biB7XFxuXFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YmVyWWVsbG93KTtcXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnO1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGNvbG9yOiByZ2IoOSwgOSwgNzUpO1xcbiAgICBtYXgtd2lkdGg6IDcwdnc7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmludmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pbnZpc2libGU6aG92ZXIge1xcbiAgICBjdXJzb3I6ZGVmYXVsdDtcXG59XFxuXFxuLnBsYWNlbWVudC1zdGFnZSB7XFxuICAgIHdpZHRoOiA1dnc7XFxuICAgIGhlaWdodDogNnZoO1xcbn1cXG5cXG4uYm9hcmQxLmJvYXJkLXBsYWNlbWVudC1zdGFnZSB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogVGVzdGluZyBkcmFnZ2FibGUgQ1NTIHRoaW5nIGZyb20gZGlnaXRhbG9jZWFuICovXFxuXFxuLmV4YW1wbGUtcGFyZW50IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0RGQTYxMjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4gIC5leGFtcGxlLW9yaWdpbiB7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG4gIFxcbiAgLmV4YW1wbGUtZHJhZ2dhYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRBQUU5QjtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL2ltZy94d2luZy1zaWRldmlldzItcmVtb3ZlYmctcHJldmlldy5wbmcnKSBuby1yZXBlYXQ7ICovXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAuZXhhbXBsZS1kcmFnZ2FibGUtaW1nIHtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL2ltZy94d2luZy1zaWRldmlldzItcmVtb3ZlYmctcHJldmlldy5wbmcnKSBuby1yZXBlYXQ7ICovXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICBcXG4gIFxcbiAgLmV4YW1wbGUtZHJvcHpvbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkRCNjVCO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG5cXG4gIC50ZXN0aW5nLXllbGxvdyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgfVxcblxcbiAgLmV4YW1wbGUtcGFyZW50IHtcXG4gICAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgICBncmlkLXJvdzogMjtcXG4gICAgICBoZWlnaHQ6IDcyJTtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgICAwJSwgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYXBwZW5kLWFuaW1hdGUge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLHlEQUF3QztJQUN4Qyx3QkFBd0I7SUFDeEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBa0M7O0lBRWxDLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsc0NBQXNDOztJQUV0Qyx3QkFBd0I7SUFDeEIsNkJBQTZC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Q0ksd0JBQXdCO0VBQzVCOztFQUVBO01BQ0ksY0FBYztNQUNkLFdBQVc7TUFDWCxXQUFXO0VBQ2Y7O0VBRUE7TUFDSSxXQUFXO01BQ1gsWUFBWTtFQUNoQjs7QUFFRjtJQUNJLHdCQUF3QjtJQUN4QiwrREFBNEQ7QUFDaEU7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogUmlnaHRlb3VzO1xcbiAgICAtLWN5YmVyWWVsbG93OiAjRkZEQzAwO1xcbiAgICAtLXNsZWVrR3JleTogI0RERERERDtcXG4gICAgLS1hcXVhdGljQmx1ZTogIzdGREJGRjtcXG4gICAgLS1waXJhdGVOYXZ5OiAjMDAxZjNmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYmcge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxZjNmO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvY29ja3BpdC5qcGcpO1xcbiAgICAvKiBURVNUSU5HIERFVkVMT1BNRU5UICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcbn1cXG5cXG5oMSB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0N3B4O1xcbiAgICBjb2xvcjogdmFyKC0tY3liZXJZZWxsb3cpO1xcbiAgICAvKiBURVNUSU5HIERFVkVMT1BNRU5UICovXFxuICAgIC8qIGNvbG9yOiBibGFjazsgICovXFxufVxcblxcbi5ib2FyZHMge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgaGVpZ2h0OiA2OXZoO1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIHdoaXRlc21va2UgN3B4OyAqL1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIFxcbiAgICAvKiBURVNUSU5HIERFVkVMT1BNRU5UICovXFxuICAgIC8qIGJvcmRlcjogc29saWQgYmxhY2sgM3B4OyAqL1xcbn1cXG5cXG4uYm9hcmRzLmJvYXJkMSB7XFxuICAgIFxcbiAgICB3aWR0aDogMjV2dztcXG4gICAgaGVpZ2h0OiAzNXZoO1xcbiAgICAvKiBtYXJnaW4tbGVmdDogMTV2dyA7ICovXFxuICAgIC8qIG1hcmdpbi1sZWZ0OiAwLjV2dzsgKi9cXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi8qIFRPIE1BS0UgVEhFIEhVTUFOIEhPTE9HUkFNIExPT0sgTU9SRSBVTklGT1JNLCBSRVBMQUNFIEJFTE9XIFdJVEg6IC5ib2FyZDEgZGl2Om50aC1jaGlsZCgxMG4rMSkgICovXFxuLmJvYXJkcyBkaXY6bnRoLWNoaWxkKDEwbisxKSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAydnc7XFxuICAgIHdpZHRoOiA1dnc7XFxufVxcblxcblxcbi5ib2FyZHMgZGl2Om50aC1jaGlsZCgxMG4rMTApIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAydnc7XFxuICAgIHdpZHRoOiA1dnc7XFxufVxcblxcbi5ib2FyZHMgZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4uYm9hcmRzIGRpdjpudGgtb2YtdHlwZSg5MSkge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4uYm9hcmRzIGRpdjpudGgtb2YtdHlwZSgxMCkge1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwJTtcXG59XFxuXFxuLmJvYXJkcyBkaXY6bGFzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XFxufVxcblxcbi5zcXVhcmVzLWNvbXB1dGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyMCwgMCwgMC43KTtcXG59XFxuLyogXFxuQVRURU5USU9OXFxuQVRURU5USU9OXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogTE1BT09PT09PT09PT09PT09PT09PT09PTyBXRSBESUQgVEhFIFdIT0xFIFNUWUxJTkcgT04gVEhFIFBMQVlFUidTIEJPQVJEXFxuSVQnUyBTVVBQT1NFRCBUTyBCRSBPTiBUSEUgQ09NUFVURVInUyBCT0FSRCEhISBTV0lUQ0ggVEhFIFNUWUxJTkcgTkFNRVMgKi9cXG5cXG4uYm9hcmRzLmJvYXJkMntcXG4gICAgbWFyZ2luLWxlZnQ6IDE1dnc7XFxuICAgIGJvcmRlcjpkYXNoZWQgMXB4IHJnYmEoMjU1LCAyMjAsIDAsIDAuMSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAlO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMCU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMCU7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxuXFxuICAgIGdyaWQtcm93OjI7XFxuICAgIC8qIGJvcmRlci1zdGFydC1lbmQtcmFkaXVzOiA3MCU7ICovXFxufVxcblxcblxcbi5ib2FyZHM6aG92ZXIge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgXFxufVxcblxcbi5zcXVhcmVzLWNvbXB1dGVyIHtcXG4gICAgYm9yZGVyOiBkYXNoZWQgMXB4IHZhcigtLWN5YmVyWWVsbG93KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG4uc3F1YXJlcyB7XFxuICAgIGJvcmRlcjogc29saWQgY3lhbiAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogVEVTVElORyBERVZFTE9QTUVOVCAqL1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDsgKi9cXG59XFxuXFxuLnNxdWFyZXMtYW5pbWF0aW9uIHtcXG4gICAgYW5pbWF0aW9uOiBhcHBlbmQtYW5pbWF0ZSAuM3MgbGluZWFyO1xcbn1cXG5cXG4uY3Vyc29yLW5vdC1hbGxvd2VkIHtcXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc3F1YXJlcy1jb21wdXRlcjpmaXJzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTtcXG59XFxuXFxuLmhvdmVyZWQtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucmV2ZWFsZWQtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyogTk9URSBPTiBWRVJUSUNBTCBQT1NJVElPTklORyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiAqL1xcbi8qIFdIRU4gV0UgUExBQ0UgT1VSIE9XTiBTSElQUywgSUYgV0UnUkUgUE9TSVRJT05JTkcgVEhFIFNISVAgVkVSVElDQUxMWSwganVzdCA6bnRoLWNoaWxkKDEwbikgKi9cXG4vKiBXRSB3YW50IHRvIHNlbGVjdCBldmVyeSBvdGhlciAxMHRoIHNxdWFyZS4gU28gdmVydGljYWxseSB3ZSdyZSBzZWxlY3RpbmcgQTIsIEIyLCBDMiwgZXRjICovXFxuLyogSE9XRVZFUiwgV0UnUkUgR0VUVElORyBUSEUgQ09PUkRJTkFURVMgRlJPTSBUSEUgTE9HSUMsIE5PVCBUSEUgQ1NTISAqL1xcbi8qIFNvIHdoYXQgd2UgZG8gaXMgd2hlbiB3ZSBjbGljayB0aGUgc3F1YXJlLCB3ZSBnZXQgdGhlIGluZGV4IG9mIGl0cyBpZCBpbiBhbGxTcXVhcmVzWEQgbm9kZUxpc3Qgd2l0aCBxdWVyeVNlbGVjdG9yQWxsLCB0byBkbyB0aGF0LCB3ZSBmaXJzdCBuZWVkIHRvIG1ha2UgYW4gQXJyYXkuZnJvbShhbGxTcXVhcmVzWEQpKi9cXG4vKiBBbmQgYWZ0ZXIgd2UgaGF2ZSB0aGUgaWQgaW4gdGhlIEFycmF5LCBqdXN0IGxvb3Agb3ZlciB0aGUgb3JpZ2luYWwgbm9kZUxpc3QgdXAgdG8gdGhlIGxlbmd0aCBvZiB0aGUgc2hpcCBjdXJyZW50bHkgYmVpbmcgcGxhY2VkLiAgKi9cXG4vKiBFYWNoIGxvb3AsIHdlIGZpbmQgdGhlIGl0ZW0gYXQgMCArIDEwICovXFxuYnV0dG9uIHtcXG4gICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5oZWxsbyB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcblxcbi5jb2xvdXJlZC1pbiB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGN5YW47ICovXFxuICAgIC8qIGJvcmRlci1jb2xvcjogY3lhbjsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBhbmltYXRpb246IHB1bHNlIDVzIGluZmluaXRlO1xcbn1cXG5cXG4uY29sb3VyZWQtaW46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmN5YW47XFxufVxcblxcbi5taXNzZWQtc2hvdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAzNSUsMTAwLjAwJSA0My4wMCUsMC4wMCUgNDMuMDAlLDAlIDM1JSk7XFxufVxcblxcbi5taXNzZWQtc2hvdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3RkRCRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWlzc2VkLXNob3QtZnJvbS1jb21wdXRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxuLmNvbG91cmVkLWluLWZyb20tY29tcHV0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5hbGxpZWQtc2hpcC1sb2NhdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YmVyWWVsbG93KTtcXG4gICAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jeWJlclllbGxvdykgMXB4O1xcbn1cXG5cXG4uZGVwbG95LXNoaXBzLWJ0biB7XFxuXFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YmVyWWVsbG93KTtcXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnO1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGNvbG9yOiByZ2IoOSwgOSwgNzUpO1xcbiAgICBtYXgtd2lkdGg6IDcwdnc7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmludmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pbnZpc2libGU6aG92ZXIge1xcbiAgICBjdXJzb3I6ZGVmYXVsdDtcXG59XFxuXFxuLnBsYWNlbWVudC1zdGFnZSB7XFxuICAgIHdpZHRoOiA1dnc7XFxuICAgIGhlaWdodDogNnZoO1xcbn1cXG5cXG4uYm9hcmQxLmJvYXJkLXBsYWNlbWVudC1zdGFnZSB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogVGVzdGluZyBkcmFnZ2FibGUgQ1NTIHRoaW5nIGZyb20gZGlnaXRhbG9jZWFuICovXFxuXFxuLmV4YW1wbGUtcGFyZW50IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0RGQTYxMjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4gIC5leGFtcGxlLW9yaWdpbiB7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG4gIFxcbiAgLmV4YW1wbGUtZHJhZ2dhYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRBQUU5QjtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL2ltZy94d2luZy1zaWRldmlldzItcmVtb3ZlYmctcHJldmlldy5wbmcnKSBuby1yZXBlYXQ7ICovXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAuZXhhbXBsZS1kcmFnZ2FibGUtaW1nIHtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL2ltZy94d2luZy1zaWRldmlldzItcmVtb3ZlYmctcHJldmlldy5wbmcnKSBuby1yZXBlYXQ7ICovXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICBcXG4gIFxcbiAgLmV4YW1wbGUtZHJvcHpvbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkRCNjVCO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG5cXG4gIC50ZXN0aW5nLXllbGxvdyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgfVxcblxcbiAgLmV4YW1wbGUtcGFyZW50IHtcXG4gICAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgICBncmlkLXJvdzogMjtcXG4gICAgICBoZWlnaHQ6IDcyJTtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cyc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1JpZ2h0ZW91cy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICAgIDAlLCAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBhcHBlbmQtYW5pbWF0ZSB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL0dhbWVib2FyZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29tcHV0ZXJQbGF5ZXIoKSB7XG4gIC8vYmVnaW4gQ1BVIGZ1bmN0aW9uYWxpdHlcbiAgbGV0IGhvcml6b250YWwgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiXTtcbiAgbGV0IHZlcnRpY2FsID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXTtcbiAgbGV0IGNwdU1vdmVzID0gW107XG4gIC8vIFBsYXllcnMgdGFrZSB0dXJucyBhdCBwbGF5aW5nIHRoZSBnYW1lXG5cbiAgY29uc3QgY29tcHV0ZXJNb3ZlID0gKCkgPT4ge1xuICAgIGxldCB4TW92ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBsZXQgeU1vdmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgbGV0IGNvbXB1dGVyU2hvdCA9IHZlcnRpY2FsW3lNb3ZlXSArIGhvcml6b250YWxbeE1vdmVdO1xuICAgIC8vIDwtLSBkb24ndCBzaG9vdCB0aGUgc2FtZSBsb2NhdGlvbiB0d2ljZSEgRGVmaW5pdGVseSBub3QgdGhlIG1vc3QgcGVyZm9ybWFudCBpbXBsZW1lbnRhdGlvbiwgYnV0IGxldCdzIHRlc3QgaXQgb3V0XG4gICAgd2hpbGUgKGNwdU1vdmVzLmluY2x1ZGVzKGNvbXB1dGVyU2hvdCkpIHtcbiAgICAgIHhNb3ZlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgeU1vdmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb21wdXRlclNob3QgPSB2ZXJ0aWNhbFt5TW92ZV0gKyBob3Jpem9udGFsW3hNb3ZlXTtcbiAgICB9XG4gICAgY3B1TW92ZXMucHVzaChjb21wdXRlclNob3QpOyAvLyA8LS0gYWx3YXlzIGFkZHMgYSBuZXcgcG9zaXRpb247XG4gICAgcmV0dXJuIGNvbXB1dGVyU2hvdDtcbiAgICAvLyByZXR1cm4gY3B1TW92ZXNbY3B1TW92ZXMubGVuZ3RoIC0gMV07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjb21wdXRlck1vdmUsXG4gICAgZ2V0Q29tcHV0ZXJNb3ZlcygpIHtcbiAgICAgIHJldHVybiBjcHVNb3ZlcztcbiAgICB9LFxuICAgIGFzeW5jIGF0dGFja3ModGhlSHVtYW5zQm9hcmQpIHtcbiAgICAgIHRoZUh1bWFuc0JvYXJkLnJlY2VpdmVBdHRhY2soY29tcHV0ZXJNb3ZlKCkpO1xuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb21wdXRlclBsYXllciB9IGZyb20gXCIuL0NvbXB1dGVyUGxheWVyXCI7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcbmltcG9ydCBIdW1hblBsYXllciBmcm9tIFwiLi9IdW1hblBsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKCkge1xuICAvLyA8LS0gT25seSBydW4gZnVuY3Rpb25zLCBtdXN0IG5vdCB3cml0ZSBuZXcgY29kZSBoZXJlLlxuICBsZXQgaHVtYW4gPSBIdW1hblBsYXllcihcIkpvaG5cIik7XG4gIGxldCBodW1hbkJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGxldCBjb21wdXRlciA9IENvbXB1dGVyUGxheWVyKCk7XG4gIGxldCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIC8vRm9yIG5vdywgcGxhY2Vob2xkZXIgU2hpcHMuIEltcGxlbWVudCBzeXN0ZW0gZm9yIHBsYXllcnMgdG8gcGxhY2Ugc2hpcHMgbWFudWFsbHkgbGF0ZXIuXG4gIC8vIGh1bWFuQm9hcmQuY2xpY2tUb1BsYWNlU2hpcCgpO1xuXG4gIC8vIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgLy8gIGh1bWFuQm9hcmQuY2xpY2tUb1BsYWNlU2hpcCgpO1xuICAvLyAgIGFsZXJ0KFwidGVzdFwiKTtcbiAgLy8gfSk7XG5cbiAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoXCJkZXN0cm95ZXJcIiwgXCJBMVwiKTtcbiAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoXCJzdWJtYXJpbmVcIiwgXCJBOFwiLCBcIkE5XCIpOyAvLyA8LS0gV2hlbiBob3ZlcmluZyBYIHNoaXAgb24gZ3JpZCwgWCBzaGlwIGhpZ2hsaWdodHMgWCBzcXVhcmVzIG9uIERPTS4gT24gY2xpY2ssIHB1dCB0aG9zZSBzcXVhcmVzJyBpZCBpbnRvIGFuIEFycmF5LiBSZXR1cm4gdGhhdCBhcnJheSAoaG9sZHMgb3VyIGNvb3JkaW5hdGVzKS4gV2UgdGhlbiBjaGFuZ2UgdGhlIHBhcmFtZXRlcnMgb2YgcGxhY2VTaGlwIHRvIHRha2UgdGhlIDwuLi5jb29yZGluYXRlcz4gYXJyYXkuIFdlJ2xsIGhhdmUgdG8gZmlndXJlIG91dCBob3cgdG8gZ2V0IHRoZW0gb3V0IG9mIHRoZSBhcnJheS4gUklnaHQgbm93IHdlJ3JlIGdldHRpbmcgaW5kaXZpZHVhbCB2YWx1ZXMsIGJ1dCB3aXRoIGFuIGFycmF5LCB3ZSB3b3VsZCBnZXQgYSBkb3VibGUgYXJyYXkgW1snQTEnLCdBMicsICdldGMuJ11dXG5cbiAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoXCJkZXN0cm95ZXJcIiwgXCJCMVwiKTtcbiAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoXCJzdWJtYXJpbmVcIiwgXCJDM1wiLCBcIkM0XCIpOyAvLyA8LS0gV2hlbiBob3ZlcmluZyBYIHNoaXAgb24gZ3JpZCwgWCBzaGlwIGhpZ2hsaWdodHMgWCBzcXVhcmVzIG9uIERPTS4gT24gY2xpY2ssIHB1dCB0aG9zZSBzcXVhcmVzJyBpZCBpbnRvIGFuIEFycmF5LiBSZXR1cm4gdGhhdCBhcnJheSAoaG9sZHMgb3VyIGNvb3JkaW5hdGVzKS4gV2UgdGhlbiBjaGFuZ2UgdGhlIHBhcmFtZXRlcnMgb2YgcGxhY2VTaGlwIHRvIHRha2UgdGhlIDwuLi5jb29yZGluYXRlcz4gYXJyYXkuIFdlJ2xsIGhhdmUgdG8gZmlndXJlIG91dCBob3cgdG8gZ2V0IHRoZW0gb3V0IG9mIHRoZSBhcnJheS4gUklnaHQgbm93IHdlJ3JlIGdldHRpbmcgaW5kaXZpZHVhbCB2YWx1ZXMsIGJ1dCB3aXRoIGFuIGFycmF5LCB3ZSB3b3VsZCBnZXQgYSBkb3VibGUgYXJyYXkgW1snQTEnLCdBMicsICdldGMuJ11dXG5cbiAgaHVtYW5Cb2FyZC5nZXRBbGxDb29yZGluYXRlc09uTWFwKCk7XG4gIGNvbXB1dGVyQm9hcmQuZ2V0QWxsQ29vcmRpbmF0ZXNPbk1hcCgpO1xuICBjb21wdXRlckJvYXJkLnJlcG9ydENsaWNrZWRTcXVhcmUoKTsgLy8gPC0tLS0gQ09NUFVURVIgQk9BUkQgQ09MT1VSUyBJTiBNQVRDSElORyBQT1NJVElPTlNcbiAgLy8gaHVtYW5Cb2FyZC5yZXZlYWxIdW1hbnNTaGlwcygpO1xuICBodW1hbkJvYXJkLnJlcG9ydENvbXB1dGVyc0F0dGFja3NPbkJvYXJkKCk7XG5cbiAgLy8gaHVtYW5Cb2FyZC5yZXBvcnRBbGxIdW1hblBvc2l0aW9uc0F0dGFja2VkKCk7IC8vIDwtLSBmaWxsIGluIHdoZW4gYSBodW1hbiBjb29yZGluYXRlIGlzIGF0dGFja2VkXG5cbiAgLy8gc2hvdWxkIHdlIG1ha2UgYXN5bmM/IDwtLS0tLS0tLS0tLS1cbiAgaHVtYW4uc2VuZHNBdHRhY2soY29tcHV0ZXJCb2FyZCwgY29tcHV0ZXIsIGh1bWFuQm9hcmQpOyAvLy8vIDwtLS0tLS0tLUFUVEVOVElPTiEhISBXRSBMRUZUIE9GRiBPTiBMSU5FIDMzIChUSEUgTElORSBCRUxPVyBUSElTIE9ORSkgUElDSyBJVCBCQUNLIFVQIFRIRVJFLCBXRSBBTFJFQURZIEhBVkUgVEhBVCBMT0dJQyBXUklUVEVOIFNPTUVXSEVSRS5cbiAgLy9jb21wdXRlciBhdHRhY2tzIGhlcmUuXG4gIGh1bWFuQm9hcmQuc2hvd0FsbGllZFNoaXBzKCk7IC8vIDwtLS0tLS0tLSBUaGlzIHdhcyBzdXBwb3NlZCB0byBzaG93IHVzIGFsbCBvdXIgYWxsaWVkIHNoaXBzIG9uIHRoZSBib2FyZCwgYnV0IGl0J3Mgbm90IHdvcmtpbmcuIEZpZ3VyZSBvdXQgd2h5LlxuXG4gIC8vbGV0cyBydW4gc29tZVxuICAvLyBodW1hbi5hdHRhY2soJ0EyJylcbiAgLy8gPC0tIHdyaXRlIG1vZGlmaWVkIGNvbXB1dGVyTW92ZSgpIHRoYXQgcGxhY2VzIGNvb3JkaW5hdGVzLlxuICAvL0xvb3AgdGhyb3VnaCB0aGUgc2hpcCdzIGxlbmd0aCBzdGFydGluZyBhdCBpID0gbGVuZ3RoLCB0aGVuIGktLSB1bnRpbCAwLlxufVxuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5cbi8vPC0tLS0tLS0gSG93IHRvIHBsYWNlIHNoaXBzXG4vL05lZWRzIHRvIGdldCBpbnB1dCBmcm9tIHRoZSBET00uXG4vL2FkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJykgZm9yIGVhY2ggc3F1YXJlIGluIHRoZSBiYXR0bGVmaWVsZC5cbi8vIHNlbmQgdGhlIGlkIG9mIHRoZSBjbGlja2VkIHNxdWFyZSB0byBwbGFjZVNoaXAoKVxuXG5leHBvcnQgZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBsZXQgc2hpcHNIZXJlID0gW107IC8vIDwtLSBjb250YWlucyB0aGUgY29vcmRpbmF0ZSBsb2NhdGlvbnMgb24gd2hpY2ggc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuICBsZXQgbWlzc2VkU2hvdHMgPSBbXTtcbiAgbGV0IHN1bmtTaGlwcyA9IFtdO1xuICBsZXQgc2hpcDtcbiAgbGV0IHNoaXBzT2JqZWN0ID0ge307XG4gIGxldCB0YXJnZXRTaGlwO1xuICBsZXQgYWxsQ29vcmRpbmF0ZXNPbk1hcCA9IFtdO1xuICBsZXQgdGVzdExvY2F0aW9uQXJyYXkgPSBbXCJBMVwiLCBcIkE4XCIsIFwiQTlcIl07IC8vIDwtLS0tLS0tLSBXRSdSRSBHT0lORyBUTyBTRU5EIFRIRSBQTEFDRU1FTlQgQ09PUkRJTkFURVMgVEhFIFVTRVIgQ0hPT1NFUyBUTyBBTiBBUlJBWSwgSlVTVCBMSUtFIFRISVMuXG4gIC8vRm9yIGh1bWFuIGJvYXJkczpcblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcChzaGlwTW9kZWwsIC4uLmNvb3JkaWVzKSB7XG4gICAgICBzaGlwID0gU2hpcChzaGlwTW9kZWwpO1xuICAgICAgbGV0IGNvb3JkaW5hdGVzID0gY29vcmRpZXM7XG4gICAgICAvLyA8LS0gcmVnaXN0ZXIgW3tkZXN0cm95ZXI6ICdBNyd9LCB7YW5vdGhlclNoaXA6ICdjb29yZGluYXRlcyd9LCB7ZXRjLi4ufV07XG4gICAgICBsZXQgb2JqID0ge307XG4gICAgICBvYmouc2hpcCA9IHNoaXAuZ2V0TmFtZSgpO1xuICAgICAgb2JqLmRhbWFnZSA9IHNoaXAuZGFtYWdlUmVwb3J0KCk7XG4gICAgICBvYmouaGl0ID0gc2hpcC5oaXQ7XG4gICAgICBvYmouaXNTdW5rID0gc2hpcC5pc1N1bms7XG4gICAgICBvYmouZ2V0TmFtZSA9IHNoaXAuZ2V0TmFtZTtcbiAgICAgIG9iai5nZXRMZW5ndGggPSBzaGlwLmdldExlbmd0aDtcbiAgICAgIG9iai5wb3NpdGlvbnMgPSBjb29yZGluYXRlcztcbiAgICAgIHNoaXBzSGVyZS5wdXNoKG9iaik7IC8vIDwtLSBzdG9yZSBlYWNoIHtzaGlwOmNvb3JkfSBpbnNpZGUgW3NoaXBzSGVyZV07XG4gICAgICBzaGlwc09iamVjdFtzaGlwLmdldE5hbWUoKV0gPSBzaGlwO1xuICAgICAgYWxsQ29vcmRpbmF0ZXNPbk1hcC5wdXNoKGNvb3JkaWVzKTtcbiAgICB9LFxuICAgIHNoaXBzUGxzKCkge1xuICAgICAgcmV0dXJuIHNoaXBzSGVyZTtcbiAgICB9LFxuICAgIHNoaXBzT2JqZWN0UGxzKCkge1xuICAgICAgcmV0dXJuIHNoaXBzT2JqZWN0O1xuICAgIH0sXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy88LS0gaWYgcG9zaXRpb24gaGFzIGJlZW4gaGl0IGJlZm9yZSBhbmQgd2FzIGEgbWlzcywgaGl0KCkgPT4gZmFsc2VcbiAgICAgICAgaWYgKG1pc3NlZFNob3RzLmluY2x1ZGVzKGNvb3JkaW5hdGVzKSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2FudCBoaXQgc2FtZSBwb3NpdGlvbiB0d2ljZVwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gPC0tIGlzIHRoZXJlIGEgc2hpcCBhdCB0aG9zZSBjb29yZGluYXRlcz8gSWYgeWVzLCBwcm9jZWVkIHdpdGggbGluZSBiZWxvd1xuICAgICAgICBpZiAoc2hpcHNIZXJlLnNvbWUoKGUpID0+IGUucG9zaXRpb25zLmluY2x1ZGVzKGNvb3JkaW5hdGVzKSkpIHtcbiAgICAgICAgICB0YXJnZXRTaGlwID0gc2hpcHNIZXJlLmZpbmQoKGUpID0+IGUucG9zaXRpb25zLmluY2x1ZGVzKGNvb3JkaW5hdGVzKSk7IC8vIDwtLSB3ZSBnZXQgdGhlIHNoaXAgYXQgdGhlIGlucHV0IGNvb3JkaW5hdGVzICh0aGUgdGFyZ2V0ZWQgc2hpcCdzIG93biBvYmplY3QpXG4gICAgICAgICAgaWYgKHRhcmdldFNoaXAuZGFtYWdlLmluY2x1ZGVzKGNvb3JkaW5hdGVzKSkgcmV0dXJuIGZhbHNlOyAvLyA8LS0gaWYgdGhhdCBwb3NpdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGhpdCwgcmV0dXJuIGZhbHNlLlxuXG4gICAgICAgICAgdGFyZ2V0U2hpcC5oaXQoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgIGlmIChzdW5rU2hpcHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRIRSBHQU1FIElTIE9WRVIsIEFMTCBTSElQUyBBUkUgU1VOSyBEVURFXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIFwiVEhFIEdBTUUgSVMgT1ZFUiwgQUxMIFNISVBTIEFSRSBTVU5LXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0YXJnZXRTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICB0YXJnZXRTaGlwLmlzU3VuayA9IHRydWU7XG4gICAgICAgICAgICBzdW5rU2hpcHMucHVzaCh0YXJnZXRTaGlwLmdldE5hbWUoKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRGlyZWN0IGhpdCEgJHt0YXJnZXRTaGlwLmdldE5hbWUoKX0gaGFzIGJlZW4gc3Vua2ApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGFyZ2V0U2hpcC5nZXROYW1lKCl9IGhhcyBiZWVuIHN1bmtgO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGAke3RhcmdldFNoaXAuZ2V0TmFtZSgpfSBoYXMgYmVlbiBoaXQuIEhQIFJlYW1pbmluZzogJHt0YXJnZXRTaGlwLmdldExlbmd0aCgpfWBcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIHJldHVybiBgJHt0YXJnZXRTaGlwLmdldE5hbWUoKX0gaGl0LCBIUDogJHt0YXJnZXRTaGlwLmdldExlbmd0aCgpfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWlzc2VkU2hvdHMucHVzaChjb29yZGluYXRlcyk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJNSVNTXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gXCJtaXNzXCI7IC8vICgnbWlzcycgZm9yIHRlc3RpbmcgcHVycG9zZXMsIGNoYW5nZSB0byBmYWxzZSEpPC0tIHBsYXllciBoaXQgdGhlIHdhdGVyLCB0aGVyZSdzIG5vIHNoaXBzIHRoZXJlXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgfVxuICAgIH0sXG4gICAgbWlzc2VkSGVyZSgpIHtcbiAgICAgIHJldHVybiBtaXNzZWRTaG90cztcbiAgICB9LFxuICAgIHJlcG9ydFN1bmsoKSB7XG4gICAgICByZXR1cm4gc3Vua1NoaXBzLmxlbmd0aCA9PT0gc2hpcHNIZXJlLmxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuICAgIGhvdmVyTGVuZ3RoKCkge1xuICAgICAgc3dpdGNoIChzaGlwc0hlcmUubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gMjsgLy8gPC0tIG5vIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQsIGN1cnJlbnQgc2hpcCBpcyBhIGRlc3Ryb3llciAoMiBzcXVhcmVzKVxuICAgICAgICAvLyB3cml0ZSBzb21lIGNvZGUgdG8gbWFrZSB0aGVcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0SG92ZXJlZE92ZXJBc0Nvb3JkaWVzKCkge1xuICAgICAgLy8gPC0tIHVwb24gY2xpY2ssIHNlbmQgdG8gcGxhY2VTaGlwcyB0aGUgSURzIG9mIHRoZSBzcXVhcmVzIHRoYXQgaGF2ZSBhIGNsYXNzIG9mIGhvdmVyZWQtb3ZlciBhcyB0aGUgKC4uLmNvb3JkaW5hdGVzKSBwYXJhbWV0ZXIuXG4gICAgfSxcblxuICAgIC8vb2sganVzdCBnZXQgdGhlIGlkIG9mIHRoZSBjbGlja2VkIHNxdWFyZS5cblxuICAgIC8vV2FpdCBhIG1pbnV0ZS4gV2h5IGRvIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBhdHRhY2sgb3VyIG93biBib2FyZD8gV2UgZG9uJ3RcbiAgICAvL1RoZSBjb21wdXRlcidzIGF0dGFjayBwcm9jZXNzIGlzIGFzIGZvbGxvd3M6XG4gICAgLy8xKSBUaGUgY29tcHV0ZXIgc2VuZHMgYSBjb29yZGluYXRlIHRvIGJlIGF0dGFja2VkIG9uIHRoZSBodW1hbidzIGJvYXJkXG4gICAgLy8yKSBUaGUgaHVtYW4ncyBib2FyZCByZWNlaXZlc0F0dGFjayB0byB0aGF0IGNvb3JkaW5hdGVcblxuICAgIC8vcmVwb3J0QXR0YWNrZWRTcXVhcmUgd2lsbCBiZSBjYWxsZWQgYnkgaHVtYW4gb25seVxuICAgIC8vIHJlcG9ydEF0dGFja2VkU3F1YXJlKCkge1xuXG4gICAgLy8gfVxuXG4gICAgLy9yZXBvcnRDbGlja2VkU3F1YXJlIHdpbGwgYmUgY2FsbGVkIGJ5IGNvbXB1dGVyIG9ubHlcblxuICAgIHJlcG9ydENsaWNrZWRTcXVhcmUoKSB7XG4gICAgICBsZXQgYm9hcmQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZDJcIik7XG4gICAgICBib2FyZDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QgPT0gXCJzcXVhcmVzLWNvbXB1dGVyXCIpIHtcbiAgICAgICAgICBsZXQgYWxsQ29vcmRpbmF0ZXNPbk1hcEFycmF5ID0gYWxsQ29vcmRpbmF0ZXNPbk1hcDsgLy8gPC0tIHdoeSBhbSBJIHN0b3JpbmcgYSByZWZlcmVuY2UgaGVyZT9cbiAgICAgICAgICBhbGxDb29yZGluYXRlc09uTWFwQXJyYXkuZm9yRWFjaCgoYXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXJyLmluY2x1ZGVzKGUudGFyZ2V0LmlkKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1BVENIXCIpO1xuICAgICAgICAgICAgICBsZXQgbWF0Y2hlZFNxdWFyZSA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICBtYXRjaGVkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJjb2xvdXJlZC1pblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5pZCk7XG4gICAgICAgICAgLy8gcmV0dXJuIGUudGFyZ2V0LmlkO1xuICAgICAgICB9XG4gICAgICAgIC8vIDwtLS0gV2UncmUgc3RpbGwgcnVubmluZyBpbnNkZSB0aGUgZXZlbnRMaXN0ZW5lciBmb3IgdGhlIGNvbXB1dGVyIGJvYXJkXG4gICAgICAgIC8vIDwtLSBXZSdyZSBnaXZpbmcgYW4gYW1wbGUgMiBzZWMgdGltZW91dCBmb3IgdGhlIGNvbXB1dGVyIHRvIHBsYXkgaXRzIHR1cm4sIGFuZCB0aGVuXG4gICAgICAgIC8vIDwtLSBieSB0aGUgdGltZSB0aGUgdGltZW91dCBydW5zLCB0aGUgbmV3bHkgaGl0IGNvb3JkaW5hdGUgd2lsbCBoYXZlIGJlZW4gYWRkZWQgdG8gdGhlIGFycmF5XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxldCBhbGx0aGVHb2RkYXJuU3F1YXJlc0FnYWluID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlcy1jb21wdXRlclwiKTtcbiAgICAgICAgICBhbGx0aGVHb2RkYXJuU3F1YXJlc0FnYWluLmZvckVhY2goKHNxKSA9PiB7XG4gICAgICAgICAgICBpZiAobWlzc2VkU2hvdHMuaW5jbHVkZXMoc3EuaWQpKSB7XG4gICAgICAgICAgICAgIHNxLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWQtc2hvdFwiKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgXCJUaGlzIG1lc3NhZ2UgbWVhbnMgdGhlIG1pc3NlZFNob3RzIGFycmF5IGluIGh1bWFuIGdhbWVib2FyZCBkb2VzIGluY2x1ZGUgdGhlIGNvb3JkaW5hdGVcIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICByZXBvcnRDb21wdXRlcnNBdHRhY2tzT25Cb2FyZCgpIHtcbiAgICAgIGxldCBib2FyZEdldHNDbGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZDJcIik7XG4gICAgICBib2FyZEdldHNDbGlja2VkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vbm93IGxldCdzIGNyZWF0ZSB0aGUgb25lIGZvciB0aGUgaHVtYW4gYm9hcmRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGV0IGh1bWFuU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlc1wiKTtcbiAgICAgICAgICBodW1hblNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHtcbiAgICAgICAgICAgIGlmIChtaXNzZWRTaG90cy5pbmNsdWRlcyhzcS5pZCkpIHtcbiAgICAgICAgICAgICAgc3EuY2xhc3NMaXN0LmFkZChcIm1pc3NlZC1zaG90LWZyb20tY29tcHV0ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3EuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWxsaWVkLXNoaXAtbG9jYXRpb25cIikpIHtcbiAgICAgICAgICAgICAgc3EuY2xhc3NMaXN0LmFkZChcImNvbG91cmVkLWluLWZyb20tY29tcHV0ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8vIHJlcG9ydEFsbEh1bWFuUG9zaXRpb25zQXR0YWNrZWQoKSB7XG4gICAgLy8gICBsZXQgYWxsdGhlR29kZGFyblNxdWFyZXNBZ2FpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlc1wiKTtcbiAgICAvLyAgIGFsbHRoZUdvZGRhcm5TcXVhcmVzQWdhaW4uZm9yRWFjaCgoc3EpID0+IHtcbiAgICAvLyAgICAgaWYgKG1pc3NlZFNob3RzLmluY2x1ZGVzKHNxKSkge1xuICAgIC8vICAgICAgIHNxLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWQtc2hvdFwiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG4gICAgLy8gfSxcblxuICAgIC8vc2VuZCB0aGF0IGlkIHRvIFJlY2VpdmVBdHRhY2NrXG4gICAgbmV3UmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy88LS0gaWYgcG9zaXRpb24gaGFzIGJlZW4gaGl0IGJlZm9yZSwgaGl0KCkgPT4gZmFsc2VcbiAgICAgICAgLy8gPC0tIGlzIHRoZXJlIGEgc2hpcCBhdCB0aG9zZSBjb29yZGluYXRlcz8gSWYgeWVzLCBwcm9jZWVkIHdpdGggbGluZSBiZWxvd1xuICAgICAgICBpZiAoc2hpcHNIZXJlLnNvbWUoKGUpID0+IGUucG9zaXRpb25zLmluY2x1ZGVzKGNvb3JkaW5hdGVzKSkpIHtcbiAgICAgICAgICB0YXJnZXRTaGlwID0gc2hpcHNIZXJlLmZpbmQoKGUpID0+IGUucG9zaXRpb25zLmluY2x1ZGVzKGNvb3JkaW5hdGVzKSk7IC8vIDwtLSB3ZSBnZXQgdGhlIHNoaXAgYXQgdGhlIGlucHV0IGNvb3JkaW5hdGVzICh0aGUgdGFyZ2V0ZWQgc2hpcCdzIG93biBvYmplY3QpXG4gICAgICAgICAgaWYgKHRhcmdldFNoaXAuZGFtYWdlLmluY2x1ZGVzKGNvb3JkaW5hdGVzKSkgcmV0dXJuIGZhbHNlOyAvLyA8LS0gaWYgdGhhdCBwb3NpdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGhpdCwgcmV0dXJuIGZhbHNlLlxuICAgICAgICAgIHRhcmdldFNoaXAuaGl0KGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICBpZiAodGFyZ2V0U2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgdGFyZ2V0U2hpcC5pc1N1bmsgPSB0cnVlO1xuICAgICAgICAgICAgc3Vua1NoaXBzLnB1c2godGFyZ2V0U2hpcC5nZXROYW1lKCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGFyZ2V0U2hpcC5nZXROYW1lKCl9IGhhcyBiZWVuIHN1bmtgO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYCR7dGFyZ2V0U2hpcC5nZXROYW1lKCl9IGhpdCwgSFA6ICR7dGFyZ2V0U2hpcC5nZXRMZW5ndGgoKX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1pc3NlZFNob3RzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgICAgIHJldHVybiBcIm1pc3NcIjsgLy8gKCdtaXNzJyBmb3IgdGVzdGluZyBwdXJwb3NlcywgY2hhbmdlIHRvIGZhbHNlISk8LS0gcGxheWVyIGhpdCB0aGUgd2F0ZXIsIHRoZXJlJ3Mgbm8gc2hpcHMgdGhlcmVcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRBbGxDb29yZGluYXRlc09uTWFwKCkge1xuICAgICAgY29uc29sZS5sb2coYWxsQ29vcmRpbmF0ZXNPbk1hcCk7XG4gICAgfSxcbiAgICBzaG93QWxsaWVkU2hpcHMoKSB7XG4gICAgICBsZXQgYWxsaWVkQmF0dGxlZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNxdWFyZXNcIik7XG4gICAgICBhbGxpZWRCYXR0bGVmaWVsZC5mb3JFYWNoKChzcSkgPT4ge1xuICAgICAgICBpZiAodGVzdExvY2F0aW9uQXJyYXkuaW5jbHVkZXMoc3EuaWQpKSB7XG4gICAgICAgICAgc3EuY2xhc3NMaXN0LmFkZChcImFsbGllZC1zaGlwLWxvY2F0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gQXQgdGhlIHNhbWUgdGltZSwsIG9yIGxhdGVyLCBpbW1lZGlhdGVseSBhcHBseSBhIENTUyBjbGFzcyB0byB0aGUgc3F1YXJlIGluIHRoZSBET00uXG4gIH07XG59XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSHVtYW5QbGF5ZXIobmFtZU9mUGxheWVyKSB7XG4gIGxldCBwbGF5ZXJOYW1lID0gbmFtZU9mUGxheWVyO1xuICAvLyBFYWNoIHBsYXllcidzIGJvYXJkcyBhbmQgbWV0aG9kcyB3aWxsIGJlIGFzc2lnbmVkIGF1dG9tYXRpY2FsbHlcbiAgLy9NYWluIEdhbWUgTG9vcCAobWFrZSBlbHNld2hlcmUpOlxuICAvLyAgcGxheWVyT25lJ3MgdHVybiA/IHBsYXllclR3byB3aWxsIHJlY2VpdmUgYXR0YWNrcyBkdXJpbmcgdGhpcyB0dXJuXG4gIC8vICBwbGF5ZXJUd28ncyB0dXJuID8gcGxheWVyT25lIHdpbGwgcmVjZWl2ZSBhdHRhY2tzIGR1cmluZyB0aGlzIHR1cm5cblxuICAvLzwtLSBJbnB1dEZvcm0gUmVnZXggZm9yIHBsYXllck5hbWU6IFJlc2VydmUgXCJjb21wdXRlclwiIGZvciBjb21wdXRlciBQbGF5ZXJzXG4gIC8vUmVnZXggZm9yIGNvb3JkaW5hdGVzOiB0YWtlIDEgbGV0dGVyIGFuZCAxIG9yIDIgZGlnaXRzLiBPUiBqdXN0XG4gIC8vZGVsaW1pdCBjb29yZGluYXRlcyBieSBuYW1pbmcgdGhlIHBoeXNpY2FsIERPTSBzcXVhcmVzLiBjaG9pY2UgPSBpZDtcblxuICByZXR1cm4ge1xuICAgIHBsYXllck5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZU9mUGxheWVyO1xuICAgIH0sXG4gICAgYXR0YWNrcyh0aGVDb21wdXRlcnNCb2FyZCkge1xuICAgICAgbGV0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkMlwiKTtcbiAgICAgIGNvbXB1dGVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2UudGFyZ2V0LmlkfSBjbGlja2VkLCB0aGlzIGZpcmVzIGZyb20gSHVtYW5QbGF5ZXIhYCk7XG4gICAgICAgIHRoZUNvbXB1dGVyc0JvYXJkLnJlY2VpdmVBdHRhY2soZS50YXJnZXQuaWQpO1xuICAgICAgICAvLyByZXR1cm4gYGEgY29vcmRpbmF0ZSAke2UudGFyZ2V0LmlkfSBoYXMgYmVlbiBjbGlja2VkLCBnZXQgY29tcHV0ZXIncyBib2FyZCB0byByZWNlaXZlIHRoZSBhdHRhY2tgO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBhc3luYyBzZW5kc0F0dGFjayh0aGVDb21wdXRlcnNCb2FyZCwgdGhlQ29tcHV0ZXJQbGF5ZXIsIHRoZUh1bWFuc0JvYXJkKSB7XG4gICAgICBsZXQgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQyXCIpO1xuICAgICAgY29tcHV0ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhlQ29tcHV0ZXJzQm9hcmQucmVjZWl2ZUF0dGFjayhlLnRhcmdldC5pZCk7XG4gICAgICAgIHRoZUNvbXB1dGVyUGxheWVyLmF0dGFja3ModGhlSHVtYW5zQm9hcmQpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBTaGlwKHNoaXBUeXBlKSB7XG4gIC8vICAgbGV0IGhpdHMgPSAwO1xuICBsZXQgbGVuZ3RoO1xuICBsZXQgcHJldmlvdXNseUhpdCA9IFtdO1xuICBsZXQgc2hpcE5hbWU7XG4gIGxldCBvcmlnaW5hbExlbmd0aDtcbiAgc3dpdGNoIChzaGlwVHlwZSkge1xuICAgIGNhc2UgXCJkZXN0cm95ZXJcIjpcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgICBvcmlnaW5hbExlbmd0aCA9IDE7XG4gICAgICBzaGlwTmFtZSA9IFwiZGVzdHJveWVyXCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJzdWJtYXJpbmVcIjpcbiAgICAgIGxlbmd0aCA9IDI7XG4gICAgICBvcmlnaW5hbExlbmd0aCA9IDI7XG4gICAgICBzaGlwTmFtZSA9IFwic3VibWFyaW5lXCI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJjcnVpc2VyXCI6XG4gICAgICBsZW5ndGggPSAzO1xuICAgICAgb3JpZ2luYWxMZW5ndGggPSAzO1xuICAgICAgc2hpcE5hbWUgPSBcImNydWlzZXJcIjtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcImJhdHRsZXNoaXBcIjpcbiAgICAgIGxlbmd0aCA9IDQ7XG4gICAgICBvcmlnaW5hbExlbmd0aCA9IDQ7XG4gICAgICBzaGlwTmFtZSA9IFwiYmF0dGxlc2hpcFwiO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiY2FycmllclwiOlxuICAgICAgbGVuZ3RoID0gNTtcbiAgICAgIG9yaWdpbmFsTGVuZ3RoID0gNTtcbiAgICAgIHNoaXBOYW1lID0gXCJjYXJyaWVyXCI7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4ge1xuICAgIGdldExlbmd0aCgpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfSxcbiAgICBoaXQocG9zaXRpb24pIHtcbiAgICAgIGlmIChwcmV2aW91c2x5SGl0LmluY2x1ZGVzKHBvc2l0aW9uKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgbGVuZ3RoLS07XG4gICAgICBwcmV2aW91c2x5SGl0LnB1c2gocG9zaXRpb24pO1xuICAgICAgY29uc29sZS5sb2coXCJISVQgSVMgQkVJTkcgQ0FMTEVEIEZST00gU0hJUFwiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgaXNTdW5rKCkge1xuICAgICAgaWYgKHByZXZpb3VzbHlIaXQubGVuZ3RoID09PSBvcmlnaW5hbExlbmd0aCB8fCBsZW5ndGggPD0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldE5hbWUoKSB7XG4gICAgICByZXR1cm4gc2hpcE5hbWU7XG4gICAgfSxcbiAgICBkYW1hZ2VSZXBvcnQoKSB7XG4gICAgICByZXR1cm4gcHJldmlvdXNseUhpdDtcbiAgICB9LFxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xpY2tCb2FyZFRvUGxhY2VTaGlwKHNoaXBzSGVyZUFycmF5KSB7XG4gIGxldCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQxXCIpO1xuICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0ICE9PSBcInNxdWFyZXNcIikgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBjbGlja2VkQ2hpbGQgPSBlLnRhcmdldDtcbiAgICBsZXQgaW5kZXhPZkNsaWNrZWRDaGlsZCA9IEFycmF5LmZyb20oXG4gICAgICBjbGlja2VkQ2hpbGQucGFyZW50RWxlbWVudC5jaGlsZHJlblxuICAgICkuaW5kZXhPZihjbGlja2VkQ2hpbGQpO1xuICAgIC8vIDwtLS0gd2UgY291bGQgZ2V0IHRoZSBpZCBpbnN0ZWFkLCBhbmQgdGhlbiB3ZSBjb3VsZCBzZW5kIHRob3NlIElEcyBvdmVyIHRvIHBsYWNlU2hpcCgpIGFzIGNvb3JkaW5hdGUgaW5wdXRzXG4gICAgbGV0IGxlbmd0aFRvSG92ZXIgPSBzaGlwc0hlcmVBcnJheS5sZW5ndGggKyAxO1xuICAgIC8vIGxldCBsZW5ndGhUb0hvdmVyO1xuICAgIC8vIHN3aXRjaCAoc2hpcHNIZXJlLmxlbmd0aCkge1xuICAgIC8vICAgY2FzZSAwOlxuICAgIC8vICAgICBsZW5ndGhUb0hvdmVyID0gMjtcbiAgICAvLyAgICAgYnJlYWs7XG5cbiAgICAvLyAgIGNhc2UgMTpcbiAgICAvLyAgICAgbGVuZ3RoVG9Ib3ZlciA9IDM7XG4gICAgLy8gICAgIGJyZWFrO1xuXG4gICAgLy8gICBkZWZhdWx0OlxuICAgIC8vICAgICBicmVhaztcbiAgICAvLyB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhUb0hvdmVyOyBpKyspIHtcbiAgICAgIGxldCB0b0JlU3R5bGVkID0gaW5kZXhPZkNsaWNrZWRDaGlsZCArIGk7XG4gICAgICBjb25zb2xlLmxvZyh0b0JlU3R5bGVkKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQxIDpudGgtY2hpbGQoJHt0b0JlU3R5bGVkfSlgKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcImhvdmVyZWQtc2hpcFwiKTtcbiAgICAgIC8vIHRvQmVTdHlsZWQuY2xhc3NMaVxuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgY2xpY2tCb2FyZFRvUGxhY2VTaGlwIGZyb20gXCIuL2NsaWNrQm9hcmRUb1BsYWNlU2hpcFwiO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgcHJpbnRNZSBmcm9tIFwiLi9wcmludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiYmdcIik7XG5cbiAgLy9UaXRsZVxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUuaW5uZXJIVE1MID0gXCJTdGFyc2hpcFwiO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIC8vR2V0IHRoZSBjb29yZGluYXRlcyB3aXRoIHNoaXBzIG9uIHRoZW0uIHNoaXBzSGVyZVtdIGZyb20gdmFyaWFibGVcbiAgLy8gY2FuIHdlIHVzZSB0aGUgR2FtZSBNb2R1bGUgYXMgYW4gZXNjcm93IGZvciBET00gYW5kIGxvZ2ljP1xuICAvL3dvdWxkIGl0IGhhdmUgdG8gYmUgYXN5bmM/XG4gIC8vXG5cbiAgLy9iZWZvcmUgYWxsb3dpbmcgcGxheWVycyB0byBwbGFjZSB0aGVpciBzaGlwcywgd2UnxZVlIGRvaW5nIGl0IG1hbnVhbGx5LlxuICAvL2xldCdzIGp1c3QgZ2V0IHNoaXBzSGVyZSBpbnNpZGUgb2YgaGVyZS5cbiAgLy9tYXAgdGhyb3VnaCBzaGlwc0hlcmUgdG9cblxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgLy8gICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvLyAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVzXCIpO1xuICAvLyAgICAgYm9hcmQxLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gIC8vICAgfVxuXG4gIC8vQm9hcmQgc3F1YXJlcyBnZXQgSURzIVxuXG4gIC8vc2VuZCB0aGF0IGlkIHRvIFJlY2VpdmVBdHRhY2NrXG5cbiAgLy8gQXQgdGhlIHNhbWUgdGltZSwsIG9yIGxhdGVyLCBpbW1lZGlhdGVseSBhcHBseSBhIENTUyBjbGFzcyB0byB0aGUgc3F1YXJlIGluIHRoZSBET00uXG4gIC8vIFdoZW4geW91IHNlbmQgdGhlIElEIHBvZiB0aGUgY2xpY2tlZCBzcXVhcmUgdG8gdGhlIEdhbWVib2FyZCwgdGhlIEdhbWVib2FyZCB0YWtlcyB0aGF0IGlkIGFuZCBtYXJrcyB0aGF0IHBvc2l0aW9uIGFzIGhpdCwgd2hpY2ggZGlzYWJsZXMgaXQgZnJvbSBiZWluZyBoaXQgYWdhaW4gb24gdGhlIEdhbWVib2FyZC5cbiAgLy9XaGVuIHlvdSBoaXQgYSBzcXVhcmUgdHdvIHRpbWVzLCB5b3UgZ2V0IDxmYWxzZT4uIFNvIHdoZW4gdGhlIEdhbWVib2FyZCdzIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSwgd2UgbmVlZCB0byBsZXQgdGhlIERPTSBzaWduYWwgdGhhdC5cblxuICAvL0RFViBURVNUOiBDb25zb2xlIGxvZyB0aGUgSURzIHdoZW4gY2xpY2tpbmcgYSBzcXVhcmVcblxuICAvLyBib2FyZDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIC8vICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpO1xuICAvLyB9KTtcblxuICAvL01ha2UgYSBjbGFzcyBmb3IgZWFjaCBzaGlwIHRvIGJlIHBsYWNlZC4gVGhlIGhvdmVyIGxlbmd0aCBjaGFuZ2VzIHdpdGggZWFjaCBzaGlwIHRoYXQncyBsb2FkZWQgdG8gcGxheSBuZXh0LlxuICAvL1RoZW4sIGEgc3dpdGNoIHN0YXRlbWVudCBhcHBsaWVzIHRoZSBhcHByb3ByaWF0ZSBjbGFzcyB0byBlYWNoIHNoaXAgdG8gYmUgcGxhY2VkIG5leHRcbiAgLy9GaXJzdCBzaGlwIChkZXN0cm95ZXIpOiBTcXVhcmUgaG92ZXJlZCBvdmVyICsgbmV4dCBzaWJsaW5nLlxuICAvL0xhc3Qgc2hpcCAoY2Fycmllcik6IFNxdWFyZSBob3ZlcmVkICsgbmV4dCA1IHNpYmxpbmdzLlxuXG4gIC8vPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MZXQncyBwaWNrIGl0IHVwIGhlcmUuIFdlIGNvdWxkIHRyeSBvdXIgaWRlYSBmcm9tIGFib3ZlLlxuICAvLyBib2FyZDEuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAvLyAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QgPT0gXCJzcXVhcmVzXCIpIHtcbiAgLy8gICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJob3ZlcmVkLXNoaXBcIik7XG4gIC8vICAgICAvLzwtLSBUYWtlIHRoZSByZXR1cm4gdmFsdWUgb2YgYSBmdW5jdGlvbiB0aGF0IHJlcG9ydHMgdGhlIHNoaXAgY3VycmVudGx5IGJlaW5nIHBsYWNlZFxuICAvLyAgIH1cbiAgLy8gfSk7XG5cbiAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU2hpcHMoKSB7fVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREZXBsb3lTaGlwc0J0bigpIHtcbiAgY29uc3QgZGVwbG95U2hpcHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZXBsb3lTaGlwc0J0bi5jbGFzc0xpc3QuYWRkKFwiZGVwbG95LXNoaXBzLWJ0blwiKTtcbiAgZGVwbG95U2hpcHNCdG4uaW5uZXJIVE1MID0gXCJFTkdBR0VcIjtcbiAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmdcIik7XG4gIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoZGVwbG95U2hpcHNCdG4pO1xuICByZXR1cm4gYmFja2dyb3VuZDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYWdTaGlwSW1hZ2VzKCkge1xuICAvL1dhaXQgZm9yIEVOR0FHRSBidXR0b24gY2xpY2sgdG8gcHJlc2VudCB0aGUgc2hpcHM6XG4gIGxldCBlbmdhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlcGxveS1zaGlwcy1idG5cIik7XG4gIGVuZ2FnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vVGhlbiB3YWl0IGp1c3QgZW5vdWdoIGZvciB0aGUgYm9hcmQgYW5pbWF0aW9uIHRvIGNvbXBsZXRlOlxuICAgIC8vTk93IGZvciB0aGUgaW1hZ2VzOlxuICAgIGNvbnN0IGV4YW1wbGVQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGV4YW1wbGVQYXJlbnQuY2xhc3NMaXN0LmFkZChcImV4YW1wbGUtcGFyZW50XCIpO1xuICAgIGNvbnN0IGV4YW1wbGVPcmlnaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGV4YW1wbGVPcmlnaW4uY2xhc3NMaXN0LmFkZChcImV4YW1wbGUtb3JpZ2luXCIpO1xuICAgIGV4YW1wbGVQYXJlbnQuYXBwZW5kQ2hpbGQoZXhhbXBsZU9yaWdpbik7XG4gICAgLy8vZHJhZ2dhYmxlXG4gICAgY29uc3QgZGl2RHJhZ2dhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZEcmFnZ2FibGUuaWQgPSBcImRyYWdnYWJsZS0xXCI7XG4gICAgZGl2RHJhZ2dhYmxlLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlLWRyYWdnYWJsZVwiKTtcbiAgICBkaXZEcmFnZ2FibGUuaW5uZXJIVE1MID0gXCJkcmFnZ2FibGVcIjtcbiAgICBkaXZEcmFnZ2FibGUuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICBleGFtcGxlT3JpZ2luLmFwcGVuZENoaWxkKGRpdkRyYWdnYWJsZSk7XG4gICAgZGl2RHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIG9uRHJhZ1N0YXJ0KGUpO1xuICAgIH0pO1xuICAgIC8vL2Fub3RoZXIgb25lLCBkcmFnZ2FibGUgMlxuICAgIGNvbnN0IGRpdkRyYWdnYWJsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkRyYWdnYWJsZTIuaWQgPSBcImRyYWdnYWJsZS0yXCI7XG4gICAgZGl2RHJhZ2dhYmxlMi5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZS1kcmFnZ2FibGVcIik7XG4gICAgZGl2RHJhZ2dhYmxlMi5pbm5lckhUTUwgPSBcInRoaW5neS0yXCI7XG4gICAgZGl2RHJhZ2dhYmxlMi5kcmFnZ2FibGUgPSB0cnVlO1xuICAgIGV4YW1wbGVPcmlnaW4uYXBwZW5kQ2hpbGQoZGl2RHJhZ2dhYmxlMik7XG4gICAgZGl2RHJhZ2dhYmxlMi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBvbkRyYWdTdGFydChlKTtcbiAgICB9KTtcbiAgICAvLy9hIHRoaXJkIG9uZSwgdGhpcyB0aW1lIGFuIGltYWdlXG4gICAgY29uc3QgeFdpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHhXaW5nLmlkID0gXCJ4LXdpbmdcIjtcbiAgICB4V2luZy5zcmMgPSBcInh3aW5nLnBuZ1wiO1xuICAgIHhXaW5nLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlLWRyYWdnYWJsZS1pbWdcIik7XG4gICAgeFdpbmcuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICBleGFtcGxlT3JpZ2luLmFwcGVuZENoaWxkKHhXaW5nKTtcbiAgICB4V2luZy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBvbkRyYWdTdGFydChlKTtcbiAgICB9KTtcbiAgICAvLy8vLy8vIGRyb3B6b25lXG5cbiAgICBjb25zdCBkcm9wem9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHJvcHpvbmUuY2xhc3NMaXN0LmFkZChcImV4YW1wbGUtZHJvcHpvbmVcIik7XG4gICAgZHJvcHpvbmUuaW5uZXJIVE1MID0gXCJkcm9wem9uZVwiO1xuICAgIGRyb3B6b25lLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgb25EcmFnT3ZlcihlKTsgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tIFBBWSBBVFRFTlRJT04hIERpdnMgZG9uJ3QgZHJvcCBieSBkZWZhdWx0LCBidXQgaW1hZ2VzIGRvIVxuICAgICAgLy8gV2hlbiB3ZSBzd2l0Y2ggdG8gYW4gaW1nLCBpZiBvdXIgaW1nIGlzbid0IGRyb3BwaW5nLCB0YWtlIHRoaXMgcGFydCBvdXQhXG4gICAgfSk7XG4gICAgZHJvcHpvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIG9uRHJvcChlKTtcbiAgICB9KTtcbiAgICBleGFtcGxlUGFyZW50LmFwcGVuZENoaWxkKGRyb3B6b25lKTtcbiAgICAvLyAgIGNvbnN0IHhXaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAvLyAgIHhXaW5nLnNyYyA9IFwiLi9pbWcvZW50ZXJwcmlzZS1zaWRldmlldy5wbmdcIjtcbiAgICBsZXQgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYmcuYXBwZW5kQ2hpbGQoZXhhbXBsZVBhcmVudCk7XG4gICAgfSwgMzIwKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGUpIHtcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZS50YXJnZXQuaWQpO1xuXG4gIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwidGVzdGluZy15ZWxsb3dcIik7XG59XG5cbmZ1bmN0aW9uIG9uRHJhZ092ZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIG9uRHJvcChlKSB7XG4gIGxldCBpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICBsZXQgZHJhZ2dhYmxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgbGV0IGRyb3B6b25lID0gZS50YXJnZXQ7XG4gIGRyb3B6b25lLmFwcGVuZENoaWxkKGRyYWdnYWJsZUVsZW1lbnQpO1xuXG4gIGUuZGF0YVRyYW5zZmVyLmNsZWFyRGF0YSgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVDb21wdXRlckhvbG9ncmFtKCkge1xuICAvL0JvYXJkIGZvciBjb21wdXRlclxuICBjb25zdCBib2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2FyZDIuY2xhc3NMaXN0LmFkZChcImJvYXJkc1wiKTtcbiAgYm9hcmQyLmNsYXNzTGlzdC5hZGQoXCJib2FyZDJcIik7XG5cbiAgbGV0IGNvbnN0cnVjdEhvcml6b250YWxDb21wdXRlciA9IFtcbiAgICBcIjFcIixcbiAgICBcIjJcIixcbiAgICBcIjNcIixcbiAgICBcIjRcIixcbiAgICBcIjVcIixcbiAgICBcIjZcIixcbiAgICBcIjdcIixcbiAgICBcIjhcIixcbiAgICBcIjlcIixcbiAgICBcIjEwXCIsXG4gIF07XG4gIGxldCBjb25zdHJ1Y3RWZXJ0aWNhbENvbXB1dGVyID0gW1xuICAgIFwiQVwiLFxuICAgIFwiQlwiLFxuICAgIFwiQ1wiLFxuICAgIFwiRFwiLFxuICAgIFwiRVwiLFxuICAgIFwiRlwiLFxuICAgIFwiR1wiLFxuICAgIFwiSFwiLFxuICAgIFwiSVwiLFxuICAgIFwiSlwiLFxuICBdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnN0cnVjdEhvcml6b250YWxDb21wdXRlci5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjdXJyZW50TGV0dGVyID0gY29uc3RydWN0VmVydGljYWxDb21wdXRlcltpXTsgLy8gPC0tLSBnZXQgYSBsZXR0ZXIgKGV4YW1wbGU6IEEpXG4gICAgLy9UaGVuLCBsb29wIHRocm91Z2ggdGhlIG51bWJlcnMgYXJyYXkgMTAgdGltZXMsXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb25zdHJ1Y3RWZXJ0aWNhbENvbXB1dGVyLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZS5pZCA9IGN1cnJlbnRMZXR0ZXIgKyBjb25zdHJ1Y3RIb3Jpem9udGFsQ29tcHV0ZXJbal07IC8vIG1ha2luZyBpdHMgaWQgZXF1YWwgdGhlIGN1cnJlbnQgbGV0dGVyICsgYSBudW1iZXIsIHVwIHRvIG51bWJlciAxMC4gRXhhbXBsZTogQTdcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlcy1jb21wdXRlclwiKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgYm9hcmQyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUh1bWFuSG9sb2dyYW0oKSB7XG4gIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlcGxveS1zaGlwcy1idG5cIik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAvL0JvYXJkIGZvciBodW1hblxuICAgIGNvbnN0IGJvYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmQxLmNsYXNzTGlzdC5hZGQoXCJib2FyZHNcIik7XG4gICAgYm9hcmQxLmNsYXNzTGlzdC5hZGQoXCJib2FyZDFcIik7XG5cbiAgICBsZXQgY29uc3RydWN0SG9yaXpvbnRhbCA9IFtcbiAgICAgIFwiMVwiLFxuICAgICAgXCIyXCIsXG4gICAgICBcIjNcIixcbiAgICAgIFwiNFwiLFxuICAgICAgXCI1XCIsXG4gICAgICBcIjZcIixcbiAgICAgIFwiN1wiLFxuICAgICAgXCI4XCIsXG4gICAgICBcIjlcIixcbiAgICAgIFwiMTBcIixcbiAgICBdO1xuICAgIGxldCBjb25zdHJ1Y3RWZXJ0aWNhbCA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25zdHJ1Y3RIb3Jpem9udGFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VycmVudExldHRlciA9IGNvbnN0cnVjdFZlcnRpY2FsW2ldOyAvLyA8LS0tIGdldCBhIGxldHRlciAoZXhhbXBsZTogQSlcbiAgICAgIC8vVGhlbiwgbG9vcCB0aHJvdWdoIHRoZSBudW1iZXJzIGFycmF5IDEwIHRpbWVzLFxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb25zdHJ1Y3RWZXJ0aWNhbC5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3F1YXJlLmlkID0gY3VycmVudExldHRlciArIGNvbnN0cnVjdEhvcml6b250YWxbal07IC8vIG1ha2luZyBpdHMgaWQgZXF1YWwgdGhlIGN1cnJlbnQgbGV0dGVyICsgYSBudW1iZXIsIHVwIHRvIG51bWJlciAxMC4gRXhhbXBsZTogQTdcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVzXCIpO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudC1zdGFnZVwiKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVzLWFuaW1hdGlvblwiKTtcbiAgICAgICAgLy8gc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnQtc3RhZ2VcIik7IC8vPC0tIFJFTU9WRSBUSElTIENMQVNTIFVQT04gUExBQ0lORyBPVVIgTEFTVCBTSElQIVxuXG4gICAgICAgIGJvYXJkMS5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgfVxuICAgIH1cbiAgICBib2FyZDEuY2xhc3NMaXN0LmFkZChcImJvYXJkLXBsYWNlbWVudC1zdGFnZVwiKTtcbiAgICBsZXQgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnXCIpO1xuICAgIGJnLmFwcGVuZENoaWxkKGJvYXJkMSk7XG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlLnRhcmdldCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XG5pbXBvcnQgY2xpY2tCb2FyZFRvUGxhY2VTaGlwIGZyb20gXCIuL2NsaWNrQm9hcmRUb1BsYWNlU2hpcFwiO1xuaW1wb3J0IEh1bWFuUGxheWVyIGZyb20gXCIuL0h1bWFuUGxheWVyXCI7XG5pbXBvcnQgZGVwbG95U2hpcHNCdG4gZnJvbSBcIi4vZGVwbG95U2hpcHNCdG5cIjtcbmltcG9ydCBhZGREZXBsb3lTaGlwc0J0biBmcm9tIFwiLi9kZXBsb3lTaGlwc0J0blwiO1xuaW1wb3J0IGdlbmVyYXRlQ29tcHV0ZXJIb2xvZ3JhbSBmcm9tIFwiLi9nZW5lcmF0ZUNvbXB1dGVySG9sb2dyYW1cIjtcbmltcG9ydCBnZW5lcmF0ZUh1bWFuSG9sb2dyYW0gZnJvbSBcIi4vZ2VuZXJhdGVIdW1hbkhvbG9ncmFtXCI7XG5pbXBvcnQgZHJhZ1NoaXBJbWFnZXMgZnJvbSBcIi4vZHJhZ1NoaXBJbWFnZXNcIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFkZERlcGxveVNoaXBzQnRuKCkpO1xuZ2VuZXJhdGVIdW1hbkhvbG9ncmFtKCk7IC8vIDwtLSBvbiBjbGlja1xuZHJhZ1NoaXBJbWFnZXMoKTtcbi8vIGdlbmVyYXRlQ29tcHV0ZXJIb2xvZ3JhbSgpO1xuR2FtZSgpOyAvLyA8LS0gd2UgYXJlIHJ1bm5pbmcgR2FtZSBmcm9tIGhlcmUuIEdhbWUgaXMgaW4gdHVybiBydW5uaW5nIHJlcG9ydENsaWNrZWRTcXVhcmUoKSBmcm9tIHRoZSBodW1hbkJvYXJkIHZhcmlhYmxlIGNyZWF0ZWQgaW5zaWRlIG9mIEdhbWUuanNcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==