(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

const tasks = [
  {
    description: 'Body exercise at 7am',
    completed: true,
    index: 0,
  },
  {
    description: 'Take breakfast',
    completed: true,
    index: 1,
  },
  {
    description: 'Hangout with friends',
    completed: true,
    index: 2,
  },
  {
    description: 'Complete project for Microverse',
    completed: false,
    index: 3,
  },
  {
    description: 'Take programming tutorials',
    completed: false,
    index: 4,
  },
  {
    description: 'Dinner plan with family',
    completed: false,
    index: 5,
  },
  {
    description: 'Complete assignment at school',
    completed: false,
    index: 6,
  },
];

const displayTasks = () => {
  tasks.forEach((task) => {
    const tasksList = document.querySelector('ul');
    const taskList = document.createElement('li');
    taskList.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-start');
  
    const taskListContent = `
          <div class="${(task.completed === false) ? '' : 'text-decoration-line-through'} ms-2 p-2 me-auto fs-3">
            <input
              class="form-check-input me-1"
              ${(task.completed === false) ? '' : 'checked'}
              type="checkbox"
              aria-label="..."
            />
            <span>${task.description}</span>
          </div>
          <i class="btn btn-outline-primary fs-3 bi bi-three-dots-vertical"></i>
      `;
    taskList.innerHTML = taskListContent;
    tasksList.appendChild(taskList);
  });
}

// display tasks on page loads
displayTasks();

// add line-through to checked tasks
const checkBoxes = document.querySelectorAll('.form-check-input');
checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener('click', () => {
    checkBox.parentElement.classList.toggle('text-decoration-line-through');
  });
});

// clear all completed task function
const clearCompleted = document.getElementById('clear-all-completed');
clearCompleted.addEventListener('click', () => {
  const allSelected = document.querySelectorAll('.text-decoration-line-through');
  allSelected.forEach((selected) => {
    selected.parentElement.remove();
  });
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0VBQWtFO0FBQzFGO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YXNrcyA9IFtcbiAge1xuICAgIGRlc2NyaXB0aW9uOiAnQm9keSBleGVyY2lzZSBhdCA3YW0nLFxuICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgICBpbmRleDogMCxcbiAgfSxcbiAge1xuICAgIGRlc2NyaXB0aW9uOiAnVGFrZSBicmVha2Zhc3QnLFxuICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgICBpbmRleDogMSxcbiAgfSxcbiAge1xuICAgIGRlc2NyaXB0aW9uOiAnSGFuZ291dCB3aXRoIGZyaWVuZHMnLFxuICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgICBpbmRleDogMixcbiAgfSxcbiAge1xuICAgIGRlc2NyaXB0aW9uOiAnQ29tcGxldGUgcHJvamVjdCBmb3IgTWljcm92ZXJzZScsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBpbmRleDogMyxcbiAgfSxcbiAge1xuICAgIGRlc2NyaXB0aW9uOiAnVGFrZSBwcm9ncmFtbWluZyB0dXRvcmlhbHMnLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgaW5kZXg6IDQsXG4gIH0sXG4gIHtcbiAgICBkZXNjcmlwdGlvbjogJ0Rpbm5lciBwbGFuIHdpdGggZmFtaWx5JyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiA1LFxuICB9LFxuICB7XG4gICAgZGVzY3JpcHRpb246ICdDb21wbGV0ZSBhc3NpZ25tZW50IGF0IHNjaG9vbCcsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBpbmRleDogNixcbiAgfSxcbl07XG5cbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICgpID0+IHtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRhc2tMaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1zdGFydCcpO1xuICBcbiAgICBjb25zdCB0YXNrTGlzdENvbnRlbnQgPSBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIiR7KHRhc2suY29tcGxldGVkID09PSBmYWxzZSkgPyAnJyA6ICd0ZXh0LWRlY29yYXRpb24tbGluZS10aHJvdWdoJ30gbXMtMiBwLTIgbWUtYXV0byBmcy0zXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0IG1lLTFcIlxuICAgICAgICAgICAgICAkeyh0YXNrLmNvbXBsZXRlZCA9PT0gZmFsc2UpID8gJycgOiAnY2hlY2tlZCd9XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCIuLi5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuPiR7dGFzay5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGkgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBmcy0zIGJpIGJpLXRocmVlLWRvdHMtdmVydGljYWxcIj48L2k+XG4gICAgICBgO1xuICAgIHRhc2tMaXN0LmlubmVySFRNTCA9IHRhc2tMaXN0Q29udGVudDtcbiAgICB0YXNrc0xpc3QuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuICB9KTtcbn1cblxuLy8gZGlzcGxheSB0YXNrcyBvbiBwYWdlIGxvYWRzXG5kaXNwbGF5VGFza3MoKTtcblxuLy8gYWRkIGxpbmUtdGhyb3VnaCB0byBjaGVja2VkIHRhc2tzXG5jb25zdCBjaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY2hlY2staW5wdXQnKTtcbmNoZWNrQm94ZXMuZm9yRWFjaCgoY2hlY2tCb3gpID0+IHtcbiAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2hlY2tCb3gucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCd0ZXh0LWRlY29yYXRpb24tbGluZS10aHJvdWdoJyk7XG4gIH0pO1xufSk7XG5cbi8vIGNsZWFyIGFsbCBjb21wbGV0ZWQgdGFzayBmdW5jdGlvblxuY29uc3QgY2xlYXJDb21wbGV0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXItYWxsLWNvbXBsZXRlZCcpO1xuY2xlYXJDb21wbGV0ZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGFsbFNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHQtZGVjb3JhdGlvbi1saW5lLXRocm91Z2gnKTtcbiAgYWxsU2VsZWN0ZWQuZm9yRWFjaCgoc2VsZWN0ZWQpID0+IHtcbiAgICBzZWxlY3RlZC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9