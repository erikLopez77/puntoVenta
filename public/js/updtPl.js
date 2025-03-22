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

/***/ "./src/js/updtPl.js":
/*!**************************!*\
  !*** ./src/js/updtPl.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst forms = document.querySelector('#updtForm');\r\n\r\nforms.addEventListener('submit', async (e) => {\r\n    e.preventDefault();\r\n    const id = forms.querySelector('input[name=\"id\"]').value;\r\n    const nombre = forms.querySelector('input[name=\"nombre\"]').value;\r\n    const descripcion = forms.querySelector('textarea[name=\"descripcion\"]').value;\r\n    const precio = forms.querySelector('input[name=\"precio\"]').value;\r\n    const categoriaId = forms.querySelector('select[name=\"categoriaId\"]').value;\r\n    console.log(\"123\");\r\n    try {\r\n        // Obtener el token CSRF\r\n        const csrfToken = document.querySelector('meta[name=\"csrf-token\"]').getAttribute('content');\r\n        const peticion = await fetch(`/usuario/edita-platillo/${id}`, {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json', // Indicar que el cuerpo es JSON\r\n                'X-CSRF-Token': csrfToken\r\n            },\r\n            body: JSON.stringify({ id, nombre, descripcion, precio, categoriaId }), // Enviar el ID como JSON\r\n        });\r\n        const respuesta = await peticion.json();\r\n        if (peticion.ok && respuesta.success) {\r\n            await Swal.fire('¡Editado', respuesta.message, 'success');\r\n            window.location.href = '/usuario/vista-menu';\r\n        } else {\r\n            await Swal.fire('¡Error!', respuesta.message, 'error');\r\n            window.location.href = '/usuario/vista-menu'; // Redirigir después de mostrar el mensaje\r\n        }\r\n    } catch (error) {\r\n        console.error('Error:', error);\r\n        Swal.fire('Error', 'Hubo un problema al editar el platillo.', 'error');\r\n    }\r\n\r\n})\r\n\n\n//# sourceURL=webpack://puntoventa/./src/js/updtPl.js?");

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
/******/ 	__webpack_modules__["./src/js/updtPl.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;