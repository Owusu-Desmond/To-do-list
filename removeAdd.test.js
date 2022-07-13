/**
 * @jest-environment jsdom
 */
import UI from "./modules/UI";
import tasks from "./__mocks__/tasks"
const addTask = (task) => UI.addTask(task)

test('Add a new task to the existing ones', () => {
    document.body.innerHTML = `
    <ul></ul>
    `
    tasks.forEach(task => {
       addTask(task); 
    })
    
    const list = document.querySelectorAll('.list-group-item');
    expect(list).toHaveLength(tasks.length);
})