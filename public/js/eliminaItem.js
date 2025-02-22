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

eval("__webpack_require__.r(__webpack_exports__);\nconst formularios = document.querySelectorAll('.formDelete');\r\n\r\nformularios.forEach((formulario) => {\r\n  formulario.addEventListener('submit', (e) => {\r\n    e.preventDefault(); // Evitar el envío automático del formulario\r\n\r\n    Swal.fire({\r\n      title: '¿Estás seguro de que deseas eliminar este ítem?',\r\n      text: 'No podrás revertir esta acción',\r\n      icon: 'warning',\r\n      showCancelButton: true,\r\n      confirmButtonText: 'Sí, eliminar',\r\n      cancelButtonText: 'Cancelar'\r\n    }).then(async (result) => {\r\n      if (result.isConfirmed) {\r\n        try {\r\n          // Enviar la petición para eliminar\r\n          const respuesta = await fetch('/carrito/eliminar', {\r\n            method: 'POST',\r\n            headers: {\r\n              'Content-Type': 'application/json', // Indicar que el cuerpo es JSON\r\n            },\r\n            body: JSON.stringify({ id: formulario.querySelector('input[name=\"id\"]').value }), // Enviar el ID como JSON\r\n          });\r\n          const data = await respuesta.json(); // Analizar la respuesta como JSON\r\n\r\n          if (respuesta.ok && data.success) {\r\n            // Mostrar éxito y esperar a que el usuario lo cierre\r\n            await Swal.fire('¡Eliminado!', data.message, 'success');\r\n            window.location.reload(); // Recargar la página\r\n          } else {\r\n            throw new Error(data.message || 'Error al eliminar el ítem.');\r\n          }\r\n        } catch (error) {\r\n          console.error('Error:', error);\r\n          Swal.fire('Error', 'Hubo un problema al eliminar el ítem.', 'error');\r\n        }\r\n      }\r\n    });\r\n  });\r\n});\r\n\r\n\r\n// Seleccionar el formulario de envío de orden\r\nconst btnEnviaOrden = document.querySelector('#formOrden');\r\n\r\nbtnEnviaOrden.addEventListener('submit', (e) => {\r\n  e.preventDefault(); // Evitar que el formulario se envíe automáticamente\r\n  Swal.fire({\r\n    title: '¿Estás seguro de que deseas mandar la orden a cocina?',\r\n    text: 'No podrás revertir esta acción',\r\n    icon: 'question',\r\n    showCancelButton: true,\r\n    confirmButtonText: 'Si, enviar',\r\n    cancelButtonText: 'Cancelar'\r\n  }).then(async (result) => {\r\n    // Mostrar un mensaje de confirmación\r\n    if (result.isConfirmed) {\r\n      const respuesta = await fetch('/carrito/mandar-orden', {\r\n        method: 'POST',\r\n        headers: { 'Content-Type': 'application/json' },\r\n        //body: new FormData(btnEnviaOrden), // Enviar los datos del formulario\r\n        body: JSON.stringify({ nombre: btnEnviaOrden.querySelector('input[name=\"nombre\"]').value, mesa: btnEnviaOrden.querySelector('select[name=\"mesa\"]').value })\r\n      })\r\n      const solicitud = await respuesta.json();\r\n      if (respuesta.ok && solicitud.success) {\r\n        await Swal.fire('¡Enviado!', solicitud.message, 'success');\r\n        window.location.href = '/menu-general'; // Redirige al carrito\r\n      } else {\r\n        await Swal.fire('¡Error!', solicitud.message, 'error');\r\n        window.location.reload(); // recarga\r\n      }\r\n    }\r\n  })\r\n});\n\n//# sourceURL=webpack://puntoventa/./src/js/eliminaItem.js?");

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