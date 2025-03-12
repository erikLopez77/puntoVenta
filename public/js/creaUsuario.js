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

/***/ "./src/js/creaUsuario.js":
/*!*******************************!*\
  !*** ./src/js/creaUsuario.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* const form = document.querySelector('#crear');\r\n\r\nform.addEventListener('submit', async (e) => {\r\n    e.preventDefault();\r\n    const nombre = form.querySelector('input[name=\"nombre\"]').value;\r\n    const apellidos = form.querySelector('input[name=\"apellidos\"]').value;\r\n    const nombreUsuario = form.querySelector('input[name=\"nombreUsuario\"]').value;\r\n    const password = form.querySelector('input[name=\"password\"]').value;\r\n    const rol = form.querySelector('select[name=\"rol\"]').value;\r\n    try {\r\n        console.log('m antes');\r\n        const peticion = await fetch(\"/registrate\", {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json', // Indicar que el cuerpo es JSON\r\n            },\r\n            body: JSON.stringify({ nombre, apellidos, nombreUsuario, password, rol }), // Enviar el ID como JSON\r\n        });\r\n        console.log('2m antes');\r\n        const respuesta = await peticion.json();\r\n        console.log(respuesta)\r\n        if (peticion.ok && respuesta.success) {\r\n            console.log('3m antes');\r\n            Swal.fire('Exito', respuesta.message, 'success');\r\n            window.location.href = '/usuario/iniciar-sesion';\r\n        } else {\r\n            console.log(respuesta)\r\n        }\r\n    } catch (error) {\r\n        console.error('Error:', error);\r\n        Swal.fire('Error', 'Hubo un problema en el navegador.', 'error');\r\n    }\r\n}) */\n\n//# sourceURL=webpack://puntoventa/./src/js/creaUsuario.js?");

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
/******/ 	__webpack_modules__["./src/js/creaUsuario.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;