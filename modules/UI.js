import Storage from './Storage';

class UI {
  static addTask = (task) => {
    const tasksList = document.querySelector('ul');
    const taskList = document.createElement('li');
    taskList.setAttribute('class', 'list-group-item d-flex align-items-start');
    const taskListContent = `
                <div class="${(task.completed === false) ? '' : 'text-decoration-line-through'} d-flex ms-2 p-2 me-auto fs-4">
                  <input
                    class="form-check-input me-1"
                    ${(task.completed === false) ? '' : 'checked'}
                    type="checkbox"
                    id="task${task.index}"
                    aria-label="..."
                    autofocus
                  />
                  <div class="ps-1 pe-4 task-description">${task.description}</div>
                </div>
                <i class="btn text-danger fs-3 bi bi-trash3-fill d-none"></i>
                <i class="btn text-primary fs-3 bi bi-three-dots-vertical"></i>
            `;
    taskList.innerHTML = taskListContent;
    tasksList.appendChild(taskList);
    this.markAsComplete(task.index);
  }

  static displayTasks(tasks) {
    tasks.forEach((task) => {
      this.addTask(task);
    });
  }

  static deleteTask() {
    const allDeleteBtn = document.querySelectorAll('.bi-trash3-fill');
    allDeleteBtn.forEach((deleteBtn) => {
      deleteBtn.addEventListener('click', () => {
        // delete from UI
        deleteBtn.parentElement.remove();
        // delete from storage
        const task = deleteBtn.parentElement.firstElementChild.lastElementChild.innerHTML;
        Storage.deleteTask(task);
      });
    });
  }

  static showErrorMessage(message) {
    const errorMessage = document.querySelector('.error-message-container');
    errorMessage.innerHTML = message;
    // hide error message 5 seconds time
    setTimeout(() => {
      errorMessage.innerHTML = '';
    }, 5000);
  }

  // mark task as completed
  static markAsComplete(taskIndex) {
    const checkBox = document.getElementById(`task${taskIndex}`);
    checkBox.addEventListener('change', () => {
      checkBox.parentElement.classList.toggle('text-decoration-line-through');
      const taskDescription = checkBox.parentElement.lastElementChild.innerHTML;
      Storage.toggleTask(taskDescription);
    });
  }
}

export default UI;