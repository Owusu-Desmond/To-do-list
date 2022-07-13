import UI from './UI';

const validate = (task) => {
  const tasksDescriptions = document.querySelectorAll('.task-description');
  let taskAdded = false;
  tasksDescriptions.forEach((td) => {
    if (td.innerHTML === task.description) {
      taskAdded = true;
      UI.showErrorMessage('Task already added.');
    }
  });
  if (taskAdded) {
    return false;
  }
  return true;
};

export default validate;