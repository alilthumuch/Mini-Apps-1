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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/Board.jsx":
/*!**************************!*\
  !*** ./client/Board.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _BoardRow = __webpack_require__(/*! ./BoardRow.jsx */ \"./client/BoardRow.jsx\");\n\nvar _BoardRow2 = _interopRequireDefault(_BoardRow);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Board = function Board(props) {\n\tconsole.log(props.board);\n\treturn React.createElement(\n\t\t\"table\",\n\t\t{ className: \"rowWrap\" },\n\t\tprops.board.map(function (rowID, index) {\n\t\t\treturn React.createElement(_BoardRow2.default, { rowID: index, board: props.board[index], handleMove: props.handleMove, color: props.color });\n\t\t})\n\t);\n};\n\nexports.default = Board;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvQm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9Cb2FyZC5qc3g/YWJkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBCb2FyZFJvdyBmcm9tICcuL0JvYXJkUm93LmpzeCdcblxudmFyIEJvYXJkID0gKHByb3BzKSA9PiB7XG5cdGNvbnNvbGUubG9nKHByb3BzLmJvYXJkKVxuXHRyZXR1cm4gKFxuXHRcdDx0YWJsZSBjbGFzc05hbWUgPSBcInJvd1dyYXBcIj5cblx0ICAge3Byb3BzLmJvYXJkLm1hcCgocm93SUQsIGluZGV4KSA9PiBcblx0ICAgXHQ8Qm9hcmRSb3cgcm93SUQgPSB7aW5kZXh9IGJvYXJkID0ge3Byb3BzLmJvYXJkW2luZGV4XX0gaGFuZGxlTW92ZSA9IHtwcm9wcy5oYW5kbGVNb3ZlfSBjb2xvciA9IHtwcm9wcy5jb2xvcn0vPlxuXHQgICApfVxuXHQgICA8L3RhYmxlPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFNQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/Board.jsx\n");

/***/ }),

/***/ "./client/BoardRow.jsx":
/*!*****************************!*\
  !*** ./client/BoardRow.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _Cells = __webpack_require__(/*! ./Cells.jsx */ \"./client/Cells.jsx\");\n\nvar _Cells2 = _interopRequireDefault(_Cells);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar BoardRow = function BoardRow(props) {\n\tconsole.log(props.board);\n\treturn React.createElement(\n\t\t'tr',\n\t\t{ id: props.rowID[0] },\n\t\tprops.board.map(function (cell, index) {\n\t\t\treturn React.createElement(_Cells2.default, { colID: index, rowID: props.rowID, handleMove: props.handleMove, color: props.color });\n\t\t})\n\t);\n};\n\nexports.default = BoardRow;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvQm9hcmRSb3cuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9Cb2FyZFJvdy5qc3g/MGQ3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2VsbHMgZnJvbSAnLi9DZWxscy5qc3gnXG5cbnZhciBCb2FyZFJvdyA9IChwcm9wcykgPT4ge1xuXHRjb25zb2xlLmxvZyhwcm9wcy5ib2FyZClcblx0cmV0dXJuIChcblx0XHQ8dHIgaWQgPSB7cHJvcHMucm93SURbMF19ID5cblx0XHR7cHJvcHMuYm9hcmQubWFwKChjZWxsLCBpbmRleCkgPT4ge1xuXHRcdCByZXR1cm4gPENlbGxzIGNvbElEPSB7aW5kZXh9IHJvd0lEID0ge3Byb3BzLnJvd0lEfSBoYW5kbGVNb3ZlID0ge3Byb3BzLmhhbmRsZU1vdmV9IGNvbG9yID0ge3Byb3BzLmNvbG9yfS8+XG5cdFx0fSl9XG5cdFx0PC90cj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZFJvdzsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/BoardRow.jsx\n");

/***/ }),

/***/ "./client/Cells.jsx":
/*!**************************!*\
  !*** ./client/Cells.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar Cells = function Cells(props) {\n\treturn React.createElement('td', { className: props.color, id: props.rowID + '' + props.colID, onClick: props.handleMove });\n};\n\nexports.default = Cells;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvQ2VsbHMuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9DZWxscy5qc3g/MDc5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBDZWxscyA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDx0ZCBjbGFzc05hbWU9e3Byb3BzLmNvbG9yfSBpZCA9IHtwcm9wcy5yb3dJRCArICcnICsgcHJvcHMuY29sSUR9IG9uQ2xpY2sgPSB7cHJvcHMuaGFuZGxlTW92ZX0vPlxuXHQpXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDZWxscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/Cells.jsx\n");

/***/ }),

/***/ "./client/app.jsx":
/*!************************!*\
  !*** ./client/app.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Board = __webpack_require__(/*! ./Board.jsx */ \"./client/Board.jsx\");\n\nvar _Board2 = _interopRequireDefault(_Board);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n\t_inherits(App, _React$Component);\n\n\tfunction App(props) {\n\t\t_classCallCheck(this, App);\n\n\t\tvar _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n\t\t_this.state = {\n\t\t\trow: [0, 1, 2, 3, 4, 5],\n\t\t\tboard: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],\n\t\t\tcurrentPlayer: 1,\n\t\t\tgameOver: false,\n\t\t\tcolor: \"lightGray\"\n\t\t};\n\t\treturn _this;\n\t}\n\n\t_createClass(App, [{\n\t\tkey: 'handleMove',\n\t\tvalue: function handleMove(event) {\n\t\t\t// console.log(event.target.id)\n\t\t\t//change board position to either 1 or 2. \n\t\t\t//call win function \n\t\t\tvar row = Number(event.target.id[0]);\n\t\t\tvar col = Number(event.target.id[1]);\n\t\t\t// console.log(row, col, typeof row)\n\t\t\tvar split = JSON.stringify(event.target.id).split(',');\n\t\t\t// console.log(split)\n\t\t\tif (this.state.color === \"red\" || this.state.color === \"lightGray\") {\n\t\t\t\tthis.setState({\n\t\t\t\t\tcolor: \"black\"\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tthis.setState({\n\t\t\t\t\tcolor: \"red\"\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tif (this.state.currentPlayer === 1) {\n\t\t\t\tthis.setState({\n\t\t\t\t\tcurrentPlayer: 2\n\t\t\t\t});\n\t\t\t\tthis.state.board[row][col] = 2;\n\t\t\t}\n\t\t\tif (this.state.currentPlayer === 2) {\n\t\t\t\tthis.setState({\n\t\t\t\t\tcurrentPlayer: 1\n\t\t\t\t});\n\t\t\t\tthis.state.board[row][col] = 1;\n\t\t\t}\n\t\t\tconsole.log(\"YO CURRENT PLAYER\", this.state.currentPlayer);\n\n\t\t\tthis.checkBoardWin(this.state.board);\n\t\t\tif (this.state.gameOver === true) {\n\t\t\t\tconsole.log(\"game over\");\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'checkSingleArray',\n\t\tvalue: function checkSingleArray(currentArray) {\n\t\t\t//row win\n\t\t\tvar moveCounter = 0;\n\t\t\tfor (var i = 0; i < currentArray.length; i++) {\n\t\t\t\tif (currentArray[i] === currentArray[i + 1]) {\n\t\t\t\t\tmoveCounter += 1;\n\t\t\t\t\tif (moveCounter === 3) {\n\t\t\t\t\t\tconsole.log(currentArray[i]);\n\t\t\t\t\t\tthis.setState({\n\t\t\t\t\t\t\tgameOver: true\n\t\t\t\t\t\t});\n\t\t\t\t\t\treturn currentArray[i];\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn false;\n\t\t}\n\t}, {\n\t\tkey: 'checkBoardWin',\n\t\tvalue: function checkBoardWin(board) {\n\t\t\tfor (var row = 0; row < board.length; row++) {\n\t\t\t\tif (this.checkSingleArray(board[row]) === false) {\n\t\t\t\t\treturn false;\n\t\t\t\t} else if (this.checkSingleArray(board[row]) === 1 || this.checkSingleArray(board[row]) === 2) {\n\t\t\t\t\treturn this.checkSingleArray(board[row]);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn false;\n\t\t}\n\t}, {\n\t\tkey: 'checkRowWin',\n\t\tvalue: function checkRowWin() {\n\t\t\tvar board = this.state.board;\n\t\t\tcheckBoardWin(board);\n\t\t}\n\t}, {\n\t\tkey: 'checkColWin',\n\t\tvalue: function checkColWin(board) {\n\t\t\t//col win \n\t\t\tvar colBoard = [];\n\n\t\t\tfor (var row = 0; row < board.length; row++) {\n\t\t\t\tvar innerArr = [];\n\t\t\t\tfor (var col = 0; col < board[row].length; col++) {\n\t\t\t\t\tinnerArr.push(board[col][row]);\n\t\t\t\t}\n\t\t\t\tcolBoard.push(innerArr);\n\t\t\t}\n\n\t\t\tcheckBoardWin(colBoard);\n\n\t\t\t// var checkSingleCol = function(colIndex) {\n\t\t\t// \tvar board = this.state.board\n\t\t\t// \tvar rowTracker = [];\n\t\t\t// \tfor (var row = 0; row < board.length; row ++) {\n\t\t\t// \t\tif (board[row][colIndex] === 1) {\n\t\t\t// \t\t\trowTracker.push(row);\n\t\t\t// \t\t}\n\t\t\t// \t}\n\t\t\t// \tfor (var i = 0; i < rowTracker.length; i ++) {\n\t\t\t// \t\tif (rowTracker[i] !== rowTracker[i] + 1) {\n\t\t\t// \t\t\treturn false;\n\t\t\t// \t\t} \n\t\t\t// \t}\n\t\t\t// \treturn true;\n\t\t\t// }\n\n\t\t\t// var checkColWin = function() {\n\t\t\t// \tvar colIndex = [0,1,2,3,4,5,6]\n\t\t\t// \tfor (var i = 0; i < colIndex; i ++) {\n\t\t\t// \t\tif (checkSingleCol[i] === false) {\n\t\t\t// \t\t\treturn false;\n\t\t\t// \t\t}\n\t\t\t// \t}\n\t\t\t// \treturn true;\n\t\t\t// }\t  \n\t\t\t//diagonal win\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tReact.createElement(_Board2.default, { rowID: this.state.row, board: this.state.board, handleMove: this.handleMove.bind(this) })\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvYXBwLmpzeD9iY2VmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQuanN4J1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJvdzogWzAsMSwyLDMsNCw1XSxcblx0XHRcdGJvYXJkOiBbIFswLCAwLCAwLCAwLCAwLCAwLCAwXSwgXG5cdFx0XHRcdFx0IFswLCAwLCAwLCAwLCAwLCAwLCAwXSwgXG5cdFx0XHRcdFx0IFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcblx0XHRcdFx0XHQgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuXHRcdFx0XHRcdCBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG5cdFx0XHRcdFx0IFswLCAwLCAwLCAwLCAwLCAwLCAwXSBcblx0XHRcdFx0ICAgIF0sXG5cdFx0XHRjdXJyZW50UGxheWVyOiAxLFxuXHRcdFx0Z2FtZU92ZXI6IGZhbHNlLFxuXHRcdFx0Y29sb3I6IFwibGlnaHRHcmF5XCJcblx0XHR9XG5cdH1cblxuXG5cdGhhbmRsZU1vdmUgKGV2ZW50KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlkKVxuXHRcdC8vY2hhbmdlIGJvYXJkIHBvc2l0aW9uIHRvIGVpdGhlciAxIG9yIDIuIFxuXHRcdC8vY2FsbCB3aW4gZnVuY3Rpb24gXG5cdFx0dmFyIHJvdyA9IE51bWJlcihldmVudC50YXJnZXQuaWRbMF0pO1xuXHRcdHZhciBjb2wgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmlkWzFdKTtcblx0XHQvLyBjb25zb2xlLmxvZyhyb3csIGNvbCwgdHlwZW9mIHJvdylcblx0XHR2YXIgc3BsaXQgPSBKU09OLnN0cmluZ2lmeShldmVudC50YXJnZXQuaWQpLnNwbGl0KCcsJylcblx0XHQvLyBjb25zb2xlLmxvZyhzcGxpdClcblx0XHRpZiAodGhpcy5zdGF0ZS5jb2xvciA9PT0gXCJyZWRcIiB8fCB0aGlzLnN0YXRlLmNvbG9yID09PSBcImxpZ2h0R3JheVwiKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRjb2xvcjogXCJibGFja1wiIFxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGNvbG9yOiBcInJlZFwiIFxuXHRcdFx0fSlcblx0XHR9XG5cblxuXHRcdGlmICh0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXIgPT09IDEpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRjdXJyZW50UGxheWVyOiAyXG5cdFx0XHR9KVxuXHRcdFx0dGhpcy5zdGF0ZS5ib2FyZFtyb3ddW2NvbF0gPSAyO1xuXHRcdH0gXG5cdCAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyID09PSAyKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Y3VycmVudFBsYXllcjogMVxuXHRcdFx0fSlcblx0XHRcdHRoaXMuc3RhdGUuYm9hcmRbcm93XVtjb2xdID0gMTtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coXCJZTyBDVVJSRU5UIFBMQVlFUlwiLCB0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXIpXG5cdFxuXHRcdFxuXHRcdHRoaXMuY2hlY2tCb2FyZFdpbih0aGlzLnN0YXRlLmJvYXJkKVxuXHRcdGlmKHRoaXMuc3RhdGUuZ2FtZU92ZXIgPT09IHRydWUpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiZ2FtZSBvdmVyXCIpXG5cdFx0fVxuXHR9XG5cblx0Y2hlY2tTaW5nbGVBcnJheSAoY3VycmVudEFycmF5KSB7XG5cdCAgLy9yb3cgd2luXG5cdCAgXHR2YXIgbW92ZUNvdW50ZXIgPSAwO1xuXHQgIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50QXJyYXkubGVuZ3RoOyBpKyspe1xuXHQgIFx0XHRpZihjdXJyZW50QXJyYXlbaV0gPT09IGN1cnJlbnRBcnJheVtpICsxXSkge1xuXHQgIFx0XHRcdG1vdmVDb3VudGVyICs9IDE7XG5cdCAgXHRcdFx0aWYobW92ZUNvdW50ZXIgPT09IDMpIHtcblx0ICBcdFx0XHRcdGNvbnNvbGUubG9nKGN1cnJlbnRBcnJheVtpXSlcblx0ICBcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHQgIFx0XHRcdFx0XHRnYW1lT3ZlcjogdHJ1ZSxcblx0ICBcdFx0XHRcdH0pXG5cdCAgXHRcdFx0XHRyZXR1cm4gY3VycmVudEFycmF5W2ldO1xuXHQgIFx0XHRcdH1cblx0ICBcdFx0fSBcblx0ICBcdH1cblx0ICBcdHJldHVybiBmYWxzZTtcblx0ICB9XG5cblx0Y2hlY2tCb2FyZFdpbiAoYm9hcmQpIHtcblx0ICBcdGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IGJvYXJkLmxlbmd0aDsgcm93KyspIHtcblx0ICBcdFx0aWYgKHRoaXMuY2hlY2tTaW5nbGVBcnJheShib2FyZFtyb3ddKSA9PT0gZmFsc2UpIHtcblx0ICBcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdCAgXHRcdH0gZWxzZSBpZiAodGhpcy5jaGVja1NpbmdsZUFycmF5KGJvYXJkW3Jvd10pID09PSAxIHx8IHRoaXMuY2hlY2tTaW5nbGVBcnJheShib2FyZFtyb3ddKSA9PT0gMikge1xuXHQgIFx0XHRcdHJldHVybiB0aGlzLmNoZWNrU2luZ2xlQXJyYXkoYm9hcmRbcm93XSlcblx0ICBcdFx0fVxuXHQgIFx0fSBcblx0ICBcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNoZWNrUm93V2luICgpIHtcblx0XHR2YXIgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuXHRcdGNoZWNrQm9hcmRXaW4oYm9hcmQpO1xuXHR9XG5cblxuXHRjaGVja0NvbFdpbiAoYm9hcmQpIHtcblx0ICAvL2NvbCB3aW4gXG5cdCAgdmFyIGNvbEJvYXJkID0gW107XG5cblx0ICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBib2FyZC5sZW5ndGg7IHJvdyArKykge1xuXHQgIFx0dmFyIGlubmVyQXJyID0gW107XG5cdCAgXHRmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBib2FyZFtyb3ddLmxlbmd0aDsgY29sICsrKSB7XG5cdCAgXHRcdGlubmVyQXJyLnB1c2goYm9hcmRbY29sXVtyb3ddKVxuXHQgIFx0fVxuXHQgIFx0Y29sQm9hcmQucHVzaChpbm5lckFycilcblx0ICB9XG5cblx0ICBjaGVja0JvYXJkV2luKGNvbEJvYXJkKVxuXG5cdCAgLy8gdmFyIGNoZWNrU2luZ2xlQ29sID0gZnVuY3Rpb24oY29sSW5kZXgpIHtcblx0ICAvLyBcdHZhciBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmRcblx0ICAvLyBcdHZhciByb3dUcmFja2VyID0gW107XG5cdCAgLy8gXHRmb3IgKHZhciByb3cgPSAwOyByb3cgPCBib2FyZC5sZW5ndGg7IHJvdyArKykge1xuXHQgIC8vIFx0XHRpZiAoYm9hcmRbcm93XVtjb2xJbmRleF0gPT09IDEpIHtcblx0ICAvLyBcdFx0XHRyb3dUcmFja2VyLnB1c2gocm93KTtcblx0ICAvLyBcdFx0fVxuXHQgIC8vIFx0fVxuXHQgIC8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByb3dUcmFja2VyLmxlbmd0aDsgaSArKykge1xuXHQgIC8vIFx0XHRpZiAocm93VHJhY2tlcltpXSAhPT0gcm93VHJhY2tlcltpXSArIDEpIHtcblx0ICAvLyBcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdCAgLy8gXHRcdH0gXG5cdCAgLy8gXHR9XG5cdCAgLy8gXHRyZXR1cm4gdHJ1ZTtcblx0ICAvLyB9XG5cblx0ICAvLyB2YXIgY2hlY2tDb2xXaW4gPSBmdW5jdGlvbigpIHtcblx0ICAvLyBcdHZhciBjb2xJbmRleCA9IFswLDEsMiwzLDQsNSw2XVxuXHQgIC8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb2xJbmRleDsgaSArKykge1xuXHQgIC8vIFx0XHRpZiAoY2hlY2tTaW5nbGVDb2xbaV0gPT09IGZhbHNlKSB7XG5cdCAgLy8gXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHQgIC8vIFx0XHR9XG5cdCAgLy8gXHR9XG5cdCAgLy8gXHRyZXR1cm4gdHJ1ZTtcblx0ICAvLyB9XHQgIFxuXHQgICAvL2RpYWdvbmFsIHdpblxuXHR9XG5cblxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHQ8Qm9hcmQgcm93SUQgPSB7dGhpcy5zdGF0ZS5yb3d9IGJvYXJkID0ge3RoaXMuc3RhdGUuYm9hcmR9IGhhbmRsZU1vdmUgPSB7dGhpcy5oYW5kbGVNb3ZlLmJpbmQodGhpcyl9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFYQTtBQUZBO0FBZUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQWpKQTtBQUNBO0FBb0pBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/app.jsx\n");

/***/ })

/******/ });