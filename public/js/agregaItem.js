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

/***/ "./src/js/agregaItem.js":
/*!******************************!*\
  !*** ./src/js/agregaItem.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst addForm = document.querySelector(\"#addForm\");\r\naddForm.addEventListener('submit', async (e) => {\r\n    e.preventDefault();\r\n    const id = addForm.querySelector('input[name=\"id\"]').value;\r\n    const cantidad = addForm.querySelector('select[name=\"cantidad\"]').value;\r\n    const indicaciones = addForm.querySelector('textarea[name=\"indicaciones\"]').value;\r\n    try {\r\n        const solicitud = await fetch(`/ordenar-pedido/${id}`, {\r\n            method: 'POST',\r\n            headers: { 'Content-Type': 'application/json' },\r\n            body: JSON.stringify({ id, cantidad, indicaciones }) // Enviar todos los datos necesarios\r\n        });\r\n\r\n        const mensaje = await solicitud.json();\r\n\r\n        if (solicitud.ok && mensaje.success) {\r\n            await Swal.fire('¡Orden agregada!', mensaje.message, 'success');\r\n            window.location.href = '/menu-general'; // Redirigir después de mostrar el mensaje\r\n        } else {\r\n            await Swal.fire('¡Error!', mensaje.message || 'No se pudo agregar el platillo', 'error');\r\n            window.location.href = '/menu-general'; // Redirigir después de mostrar el mensaje\r\n        }\r\n    } catch (error) {\r\n        console.error('Error:', error);\r\n        await Swal.fire('¡Error!', 'Hubo un problema al procesar la solicitud', 'error');\r\n        window.location.href = '/menu-general'; // Redirigir después de mostrar el mensaje\r\n    }\r\n})\n\n//# sourceURL=webpack://puntoventa/./src/js/agregaItem.js?");

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
/******/ 	__webpack_modules__["./src/js/agregaItem.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;