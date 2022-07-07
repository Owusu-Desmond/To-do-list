import './style.css';
import { trim } from 'lodash';
import UI from '../modules/UI';
import { markAsComplete, clearAllCompleteTask, clearForm } from '../modules/EventsHandles';
import Storage from '../modules/Storage';
import validate from '../modules/Validation';

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

const addForm = document.querySelector('form');
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const tastsInStorage = Storage.getTasks();
  const task = {
    description: trim(addForm.elements.description.value),
    completed: false,
    index: tastsInStorage.length,
  };
  if (validate(task)) {
    Storage.addTask(task);
    clearForm();
    UI.addTask(task);
    UI.editList();
    markAsComplete();
  }
});

// display default task when task in storage is empty
if (Storage.getTasks().length === 0) {
  // add default tasks to storage
  tasks.forEach((task) => {
    Storage.addTask(task);
  });
  UI.displayTasks(tasks);
} else {
  const saveTasks = Storage.getTasks();
  UI.displayTasks(saveTasks);
}

// execute the following functions when page loads
markAsComplete();
clearAllCompleteTask();
UI.editList();
