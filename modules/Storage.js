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
      this.setTasks(tasks);
      return tasks;
    }
    return tasks;
  }

  // add task to already existing tasks in storage
  static addTask(task) {
    // Check if task exist or not, if not then add them to Local Storage
    const tasks = this.getTasks();
    let taskExist = 'no';
    tasks.forEach((t) => {
      if (t.description === task.description) {
        taskExist = 'yes';
      }
    });
    if (taskExist === 'no') {
      tasks.push(task);
      this.setTasks(tasks);
    }
  }

  static deleteTask(task) {
    const tasks = this.getTasks();
    tasks.forEach((t, index) => {
      if (task === t.description) {
        tasks.splice(index, 1);
        // set indexes
        tasks.forEach((tsk, i) => {
          tsk.index = i;
        })
        this.setTasks(tasks);
      }
    });
  }

  static toggleTask(task){
    const tasks = this.getTasks();
    tasks.forEach(t => {
      if(t.description === task){
        t.completed = !t.completed;
        return;
      }
    })
    this.setTasks(tasks)
  }

  static clearAllCompleted(){
    const tasks = this.getTasks();
    const tasksLeft = tasks.filter((task) => task.completed === false)
    tasksLeft.forEach((t, index) => {
      t.index = index;
    })
    this.setTasks(tasksLeft);
  }
}

export default Storage;