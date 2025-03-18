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

/***/ "./src/js/deletePl.js":
/*!****************************!*\
  !*** ./src/js/deletePl.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst forms = document.querySelectorAll('.formDelete');\r\n\r\nforms.forEach((formulario) => {\r\n    formulario.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n\r\n        Swal.fire({\r\n            title: '¿Estás de acuerdo con eliminar este platillo?',\r\n            text: 'No se podrá revertir esta acción',\r\n            icon: 'warning',\r\n            showCancelButton: true,\r\n            confirmButtonText: 'Si, eliminar',\r\n            cancelButtonText: 'Cancelar',\r\n            timer: 5000, // Cierra automáticamente después de 5 segundos\r\n        }).then(async (result) => {\r\n            if (result.isConfirmed) {\r\n                try {\r\n                    const peticion = await fetch('/usuario/elimina-platillo', {\r\n                        method: 'POST',\r\n                        headers: {\r\n                            'Content-Type': 'application/json', // Indicar que el cuerpo es JSON\r\n                        },\r\n                        body: JSON.stringify({ id: formulario.querySelector('input[name=\"id\"]').value }), // Enviar el ID como JSON\r\n                    });\r\n                    const respuesta = await peticion.json();\r\n                    if (peticion.ok && respuesta.success) {\r\n                        await Swal.fire('¡Eliminado', respuesta.message, 'success');\r\n                        window.location.reload();\r\n                    } else {\r\n                        throw new Error(respuesta.message || 'Error al eliminar el ítem.');\r\n                    }\r\n                } catch (error) {\r\n                    console.error('Error:', error);\r\n                    Swal.fire('Error', 'Hubo un problema al eliminar el ítem.', 'error');\r\n                }\r\n            }\r\n        })\r\n    })\r\n})\n\n//# sourceURL=webpack://puntoventa/./src/js/deletePl.js?");

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
/******/ 	__webpack_modules__["./src/js/deletePl.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;