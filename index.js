const inputTask = document.getElementById('input-task');
const taskList = document.getElementById('task-list');


function addTask() {
    // Create a new task item
    const newTask = document.createElement('li');
    newTask.innerText = inputTask.value;

    // Add a delete button to the task item
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        newTask.remove();
    };
    newTask.appendChild(deleteButton);

    // Add the new task item to the task list
    taskList.appendChild(newTask);

    // Clear the input field
    inputTask.value = '';
}

