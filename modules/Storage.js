// Storage Class: Handles all Operations on Local Storage
class Storage {
  // set new or modified tasks to storage
  static setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Retrieve tasks from Storage
  static getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) {
      tasks = [];
      this.setTasks(tasks)
      return tasks
    }
    return tasks;
  }

  // add task to already existing tasks in storage
  static addTask(task) {
    // Check if task exist or not, if not then add them to Local Storage
    const tasks = this.getTasks();
    tasks.forEach((t) => {
      if (t.description = task.description) {
        return;
      }
    })
    tasks.push(task);
    this.setTasks(tasks);
  }

  static removetask(task) {b
    const tasks = this.getTasks();
    tasks.forEach((t, index) => {
      if (task.description === t.description) {
        tasks.splice(index, 1);
        this.setTasks(tasks);
      }
    });
  }
}

export default Storage;