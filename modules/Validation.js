import UI from "./UI";

const validate = (task) => {
    const tasksDescriptions = document.querySelectorAll('.task-description');
    let taskAdded = 'no';
    tasksDescriptions.forEach(td => {
        if (td.innerHTML === task.description) {
            taskAdded = 'yes';
            UI.showErrorMessage('Task already added.')
        }
    })
    if (taskAdded === 'yes') {
        return false;
    }else{
        return true
    }
}

export default validate;