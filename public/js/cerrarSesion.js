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

/***/ "./src/js/cerrarSesion.js":
/*!********************************!*\
  !*** ./src/js/cerrarSesion.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    const formC = document.querySelector(\"#frmC\");\r\n    if (formC) {\r\n        formC.addEventListener('click', function (event) {\r\n            event.preventDefault();\r\n            Swal.fire({\r\n                title: 'Cerrar sesión',\r\n                text: \"¿Estás seguro de que quieres salir?\",\r\n                icon: 'warning',\r\n                showCancelButton: true,\r\n                confirmButtonColor: '#3085d6',\r\n                cancelButtonColor: '#d33',\r\n                confirmButtonText: 'Sí, cerrar sesión',\r\n                cancelButtonText: 'Cancelar'\r\n            }).then((result) => {\r\n                if (result.isConfirmed) {\r\n                    window.location.href = \"/usuario/cerrar-sesion\";\r\n                }\r\n            });\r\n        });\r\n    }\r\n});\n\n//# sourceURL=webpack://puntoventa/./src/js/cerrarSesion.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/cerrarSesion.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;