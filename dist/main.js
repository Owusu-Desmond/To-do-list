/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const tasks = [\n  {\n    description: 'Body exercise at 7am',\n    completed: true,\n    index: 0,\n  },\n  {\n    description: 'Take breakfast',\n    completed: true,\n    index: 1,\n  },\n  {\n    description: 'Hangout with friends',\n    completed: true,\n    index: 2,\n  },\n  {\n    description: 'Complete project for Microverse',\n    completed: false,\n    index: 3,\n  },\n  {\n    description: 'Take programming tutorials',\n    completed: false,\n    index: 4,\n  },\n  {\n    description: 'Dinner plan with family',\n    completed: false,\n    index: 5,\n  },\n  {\n    description: 'Complete assignment at school',\n    completed: false,\n    index: 6,\n  },\n];\n\ntasks.forEach((task) => {\n  const tasksList = document.querySelector('ul');\n  const taskList = document.createElement('li');\n  taskList.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-start');\n\n  const taskListContent = `\n        <div class=\"${(task.completed === false) ? '' : 'text-decoration-line-through'} ms-2 p-2 me-auto fs-3\">\n          <input\n            class=\"form-check-input me-1\"\n            ${(task.completed === false) ? '' : 'checked'}\n            type=\"checkbox\"\n            aria-label=\"...\"\n          />\n          <span>${task.description}</span>\n        </div>\n        <i class=\"btn btn-outline-primary fs-3 bi bi-three-dots-vertical\"></i>\n    `;\n  taskList.innerHTML = taskListContent;\n  tasksList.appendChild(taskList);\n});\n\n// add line-through to checked tasks\nconst checkBoxes = document.querySelectorAll('.form-check-input');\ncheckBoxes.forEach((checkBox) => {\n  checkBox.addEventListener('click', () => {\n    checkBox.parentElement.classList.toggle('text-decoration-line-through');\n  });\n});\n\n// clear all completed task function\nconst clearCompleted = document.getElementById('clear-all-completed');\nclearCompleted.addEventListener('click', () => {\n  const allSelected = document.querySelectorAll('.text-decoration-line-through');\n  allSelected.forEach((selected) => {\n    selected.parentElement.remove();\n  });\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;