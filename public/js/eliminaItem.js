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

/***/ "./src/js/eliminaItem.js":
/*!*******************************!*\
  !*** ./src/js/eliminaItem.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconsole.log('Holaaaaq');\r\n\r\nconsole.log('Hola mundo desde eliminaItem.js');\r\n\r\n// Seleccionar todos los formularios con la clase .formDelete\r\nconst formularios = document.querySelectorAll('.formDelete');\r\n\r\nformularios.forEach((formulario) => {\r\n    formulario.addEventListener('submit', (e) => {\r\n        e.preventDefault(); // Evitar que el formulario se envíe automáticamente\r\n\r\n        // Mostrar un mensaje de confirmación\r\n        const confirmacion = confirm('¿Estás seguro de que deseas eliminar este ítem?');\r\n\r\n        if (confirmacion) {\r\n            formulario.submit(); // Enviar el formulario si el usuario confirma\r\n        }\r\n    });\r\n});\r\n/* const eliminar=documet.querySelector('.formDelete')\r\n      if(eliminar){\r\n        eliminar.forEach((boton)=>{\r\n          boton.addEventListener('submit',async (e)=>{\r\n            e.preventDefault();\r\n            if (confirm('¿Estás seguro de que quieres eliminar este ítem?')) {\r\n              fetch(`/carrito/eliminar/`, {\r\n                method: 'POST',\r\n              })\r\n              .then(response => {\r\n                if (response.ok) {\r\n                  window.location.reload(); // Recarga la página para actualizar el carrito\r\n                } else {\r\n                  alert('Error al eliminar el ítem');\r\n                }\r\n              })\r\n              .catch(error => console.error('Error:', error));\r\n            }\r\n          })\r\n        })\r\n      } */\r\n\r\n       /*  function enviarOrden() {\r\n            if (confirm('¿Estás seguro de que quieres enviar la orden a cocina?')) {\r\n              fetch('/carrito/enviar', {\r\n                method: 'POST',\r\n              })\r\n              .then(response => {\r\n                if (response.ok) {\r\n                  window.location.href = '/menu-general'; // Redirige al menú general\r\n                } else {\r\n                  alert('Error al enviar la orden');\r\n                }\r\n              })\r\n              .catch(error => console.error('Error:', error));\r\n            }\r\n          } */\n\n//# sourceURL=webpack://puntoventa/./src/js/eliminaItem.js?");

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
/******/ 	__webpack_modules__["./src/js/eliminaItem.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;