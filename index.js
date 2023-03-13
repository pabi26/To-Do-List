const inputTask = document.getElementById('input-task');
const taskList = document.getElementById('task-list');
const addItemBtn = document.getElementById('add-item-button')

addItemBtn?.addEventListener("click", function(event){
    console.log('clicked');
    if (!inputTask || !inputTask.value) {
        event.preventDefault();
        document.getElementById('warning').textContent = "Enter Task";
    } else {
        addTask()
    }
});




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
    document.getElementById('warning').textContent = "";
}
