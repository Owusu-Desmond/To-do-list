import './style.css';
import { trim } from 'lodash';
import UI from '../modules/UI';
import {
  markAsComplete, clearAllCompleteTask, clearForm, editList,
} from '../modules/EventsHandles';
import Storage from '../modules/Storage';
import validate from '../modules/Validation';

const tasks = [

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
    // execute after validation passed
    clearForm();
    UI.addTask(task);
    // enable user to edit and mark the added list as complete
    editList();
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
  editList();
}

// execute the following functions when page loads
markAsComplete();
clearAllCompleteTask();
