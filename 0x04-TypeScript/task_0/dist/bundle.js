/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("{\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// Create two students\nconst student1 = {\n    firstName: \"Alice\",\n    lastName: \"Johnson\",\n    age: 20,\n    location: \"Addis Ababa\"\n};\nconst student2 = {\n    firstName: \"Bob\",\n    lastName: \"Smith\",\n    age: 22,\n    location: \"Nairobi\"\n};\n// Create an array containing the students\nconst studentsList = [student1, student2];\n// Render a table\nconst table = document.createElement(\"table\");\ndocument.body.appendChild(table);\nstudentsList.forEach((student) => {\n    const row = table.insertRow();\n    const firstNameCell = row.insertCell();\n    const locationCell = row.insertCell();\n    firstNameCell.textContent = student.firstName;\n    locationCell.textContent = student.location;\n});\n\n\n//# sourceURL=webpack://frontend-javascript/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;