/**
 * @jest-environment jsdom
 */
import UI from './modules/UI';
import tasks from './__mocks__/tasks';
import Storage from './modules/Storage';

const deleteTask = (task, tasks) => Storage.deleteTask(task, tasks);
const addTask = (task) => UI.addTask(task);

describe('Add and remove test', () => {
  test('Add a new task to the existing ones', () => {
    document.body.innerHTML = '<ul></ul>';
    tasks.forEach((task) => {
      addTask(task);
    });
    const list = document.querySelectorAll('.list-group-item');
    expect(list).toHaveLength(tasks.length);
  });

  test('Remove task if it exit', () => {
    const task = { description: 'I will wash', completed: true, index: 2 };
    expect(deleteTask(task.description, tasks)).toHaveLength(2);
  });
});
