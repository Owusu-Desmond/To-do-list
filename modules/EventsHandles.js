import Storage from './Storage';
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
export { clearAllCompleteTask, markAsComplete, clearForm };