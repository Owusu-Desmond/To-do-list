import './style.css';
import UI from '../modules/UI';
import { markAsComplete, clearAllCompleteTask, clearForm } from '../modules/EventsHandles';

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
  const task = {
    description: addForm.elements.description.value,
    completed: false,
  };
  clearForm();
  UI.addTask(task);
  UI.editList();
  markAsComplete();
});

// display already added tasks when page loads
UI.displayTasks(tasks);
// execute the following functions when page loads
markAsComplete();
UI.editList();
clearAllCompleteTask();
