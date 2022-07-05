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
