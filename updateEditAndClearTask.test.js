/**
 * @jest-environment jsdom
 */
import tasks from "./__mocks__/tasks";
import Storage from "./modules/Storage";
const updateTask = (task, newTask, tasks) =>
  Storage.updateTask(task, newTask, tasks);

describe("Edit, update and clear completed task", () => {
  test("Edit existing task", () => {
    const expectingTasks = [
      { description: "I will jog", completed: true, index: 0 },
      { description: "Take lessons at microverse", completed: true, index: 1 },
      { description: "I will wash", completed: true, index: 2 },
    ];
    const task = {
      description: "Have doctor appointment",
      completed: true,
      index: 0,
    };
    const newTask = { description: "I will jog", completed: true, index: 0 };

    expect(
      updateTask(task.description, newTask.description, tasks)
    ).toStrictEqual(expectingTasks);
  });
});
