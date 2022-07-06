/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("console.log('file 1');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/navbar.js":
/*!*********************************!*\
  !*** ./src/assets/js/navbar.js ***!
  \*********************************/
/***/ (function() {

eval("function burgerMenu() {\r\n    //  Burger Toggle menu\r\n\r\nconst burger = document.querySelector('.burger');\r\nconst navBarNav = document.querySelector('.navbar_nav');\r\nconst navLink = document.querySelectorAll('.nav_link');\r\n\r\n\r\nconst navButtons = document.querySelector('.nav_buttons');\r\n\r\nburger.addEventListener('click', ()=> {\r\n    burger.classList.toggle('active');\r\n    navBarNav.classList.toggle('active');\r\n    navButtons.classList.toggle('active');\r\n  \r\n    // console.log(navControls.style);\r\n   \r\n   \r\n})\r\nnavLink.forEach((item)=> {\r\n    item.addEventListener('click', ()=> {\r\n    //   console.log(item.innerHTML);\r\n        burger.classList.remove('active');\r\n        navBarNav.classList.remove('active');\r\n       navButtons.classList.remove('active');\r\n       \r\n    })\r\n\r\n})\r\n\r\nwindow.addEventListener('resize', ()=> {\r\n    if(window.innerWidth>768) {\r\n        burger.classList.remove('active');\r\n        navBarNav.classList.remove('active');\r\n        navButtons.classList.remove('active');\r\n\r\n    }\r\n})\r\n}\r\n\r\nburgerMenu();\r\n\r\n\r\n// .nav_controls {\r\n// }\r\n// .select {\r\n// }\r\n// .nav_buttons {\r\n// }\r\n// .btn {\r\n// }\r\n// .btn_primary {\r\n// }\r\n// .nav_btn {\r\n// }\r\n// .btn_secondary {\r\n// }\r\n\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/navbar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/navbar.js"]();
/******/ 	
/******/ })()
;