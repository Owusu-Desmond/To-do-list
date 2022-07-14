import { trim } from 'lodash';
import tasks from '../__mocks__/tasks';
import Storage from './Storage';
import UI from './UI';
// mark task as completed
const markAsComplete = () => {
  const checkBoxes = document.querySelectorAll('.form-check-input');
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('change', () => {
      checkBox.parentElement.classList.toggle('text-decoration-line-through');
      const taskDescription = checkBox.parentElement.lastElementChild.innerHTML;
      Storage.toggleTask(taskDescription);
    });
  });
};

// clear all completed task function
const clearAllCompleteTask = () => {
  const clearCompleted = document.getElementById('clear-all-completed');
  clearCompleted.addEventListener('click', () => {
    const allSelected = document.querySelectorAll('.text-decoration-line-through');
    allSelected.forEach((selected) => {
      selected.parentElement.remove();
    });
    // remove completed task from storage
    Storage.clearAllCompleted();
  });
};

const clearForm = () => {
  const addForm = document.querySelector('form');
  addForm.elements.description.value = '';
};

const saveEdited = (deleteBtn, threeDotBtn, taskDescription, list) => {
  // remove delete btn
  deleteBtn.classList.add('d-none');
  threeDotBtn.classList.remove('d-none');
  // remove contentEditable attribute
  taskDescription.removeAttribute('contentEditable');
  // remove list background color
  list.classList.remove('bg-light');
};

const editList = () => {
  const allThreeDotBtn = document.querySelectorAll('.bi-three-dots-vertical');
  allThreeDotBtn.forEach((threeDotBtn) => {
    threeDotBtn.addEventListener('click', () => {
      const list = threeDotBtn.parentElement;
      const taskDescription = list.firstElementChild.lastElementChild;
      // add backgroud color to list
      list.classList.add('bg-light');
      // set content to editable autofocus and check spellings
      taskDescription.setAttribute('contentEditable', true);
      taskDescription.setAttribute('spellCheck', true);
      taskDescription.focus();
      threeDotBtn.classList.add('d-none');
      // delete task when neccessary
      const deleteBtn = threeDotBtn.previousElementSibling;
      deleteBtn.classList.remove('d-none');
      UI.deleteTask();
      // Update to storage after user input
      let task = taskDescription.innerText;
      taskDescription.addEventListener('input', () => {
        const newTask = taskDescription.innerText;
        Storage.updateTask(task, newTask, Storage.getTasks());
        task = newTask;
      });
      // Update to UI if enter key is pressed
      taskDescription.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          // check if the edited list is not empty
          if (trim(taskDescription.innerText).length < 4) {
            UI.showErrorMessage('Edited task length is too short');
            return;
          }
          saveEdited(deleteBtn, threeDotBtn, taskDescription, list);
        }
      });
    });
  });
};
export {
  clearAllCompleteTask, markAsComplete, clearForm, editList,
};