// mark task as completed
const markAsComplete = () => {
  const checkBoxes = document.querySelectorAll('.form-check-input');
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('click', () => {
      checkBox.parentElement.classList.toggle('text-decoration-line-through');
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
  });
};

const clearForm = () => {
  const addForm = document.querySelector('form');
  addForm.elements.description.value = '';
};
export { clearAllCompleteTask, markAsComplete, clearForm };