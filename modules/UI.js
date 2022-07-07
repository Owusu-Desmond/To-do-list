class UI {
  static addTask(task) {
    const tasksList = document.querySelector('ul');
    const taskList = document.createElement('li');
    taskList.setAttribute('class', 'list-group-item d-flex align-items-start');
    const taskListContent = `
                <div class="${(task.completed === false) ? '' : 'text-decoration-line-through'} d-flex ms-2 p-2 me-auto fs-3">
                  <input
                    class="form-check-input me-1"
                    ${(task.completed === false) ? '' : 'checked'}
                    type="checkbox"
                    aria-label="..."
                    autofocus
                  />
                  <div class="ps-3 pe-5 task-description">${task.description}</div>
                </div>
                <i class="btn text-primary fs-3 bi bi-three-dots-vertical"></i>
            `;
    taskList.innerHTML = taskListContent;
    tasksList.appendChild(taskList);
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
        deleteBtn.parentElement.remove();
      });
    });
  }

  static editList() {
    const allThreeDotBtn = document.querySelectorAll('.bi-three-dots-vertical');
    allThreeDotBtn.forEach((threeDotBtn) => {
      threeDotBtn.addEventListener('click', () => {
        const list = threeDotBtn.parentElement;
        const tastDescription = list.firstElementChild.lastElementChild;
        // change btn to delete btn and change color
        threeDotBtn.classList.toggle('bi-trash3-fill');
        threeDotBtn.classList.toggle('text-danger');
        list.classList.add('bg-light');
        // set content to editable autofocus and chech spellings
        tastDescription.toggleAttribute('contentEditable');
        tastDescription.toggleAttribute('spellCheck');
        tastDescription.focus();
        // delete task if necessary
        this.deleteTask();
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
}

export default UI;