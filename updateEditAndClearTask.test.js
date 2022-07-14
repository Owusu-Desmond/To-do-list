/**
 * @jest-environment jsdom
 */
import tasks from './__mocks__/tasks';
import Storage from './modules/Storage';

const updateTask = (task, newTask, tasks) => Storage.updateTask(task, newTask, tasks);
const clearAllCompleted = (tasks) => Storage.clearAllCompleted(tasks);
const completedStatus = (task, tasks) => Storage.toggleTask(task, tasks);

describe('Edit, update and clear completed task', () => {
  test('Edit existing task', () => {
    const expectingTasks = [
      { description: 'I will jog', completed: true, index: 0 },
      { description: 'Take lessons at microverse', completed: true, index: 1 },
      { description: 'I will wash', completed: true, index: 2 },
    ];
    const oldTask = 'Have doctor appointment';
    const newTask = 'I will jog';

    expect(
      updateTask(oldTask, newTask, tasks),
    ).toStrictEqual(expectingTasks);
  });

  test('clear all completed test', () => {
    // expect empty array since we have all tasks completed in the tasks mock
    const expectingTasks = [];
    expect(clearAllCompleted(tasks)).toStrictEqual(expectingTasks);
  });

  test('Complete task status', () => {
    // expect "I will wash" task to change to be incompleted
    const expectingTasks = [
      { description: 'I will jog', completed: true, index: 0 },
      { description: 'Take lessons at microverse', completed: true, index: 1 },
      { description: 'I will wash', completed: false, index: 2 },
    ];
    const toggleTaskStatus = 'I will wash';
    expect(completedStatus(toggleTaskStatus, tasks)).toStrictEqual(expectingTasks);
  });
});
