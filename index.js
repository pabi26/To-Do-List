let taskArray = [];
const inputTask = document.getElementById('input-task');
const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-item-button');

addTaskBtn?.addEventListener("click", function(event){
    console.log('clicked');
    if (!inputTask || !inputTask.value) {
      event.preventDefault();
      document.getElementById('warning').textContent = "Enter Task";
    } else {
      addTask(inputTask.value, false);
    }
  });
  
function addTask(taskText, isLoadedFromStorage) {
    // Create a new task item
    const newTask = document.createElement('li');
    newTask.innerText = "- " + taskText;
  
    // Check if the task already exists in the task list
    if (taskList.querySelector(`li[data-task="${taskText}"]`)) {
      return;
    }
  
    // Add a delete button to the task item
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
      newTask.remove();
      localStorage.removeItem(taskText);
    };
    newTask.appendChild(deleteButton);
  
    // Add the new task item to the task list
    taskList.appendChild(newTask);
    if (!isLoadedFromStorage) {
      taskArray.push(taskText);
    }
  
    // Clear the input field
    inputTask.value = '';
    document.getElementById('warning').textContent = "";
  
    // Store the task item in local storage
    localStorage.setItem('taskArray', JSON.stringify(taskArray));
    localStorage.setItem(taskText, true);
  }
  

// Load existing task items from local storage
if (localStorage.getItem('taskArray')) {
    taskArray = JSON.parse(localStorage.getItem('taskArray'));
    taskArray.forEach(function(taskText) {
        const taskListItem = document.createElement('li');
        taskListItem.innerText = "- " + taskText;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            taskListItem.remove();
            localStorage.removeItem(taskText);
            taskArray.splice(taskArray.indexOf(taskText), 1);
            localStorage.setItem('taskArray', JSON.stringify(taskArray));
        };
        taskListItem.appendChild(deleteButton);

        taskList.appendChild(taskListItem);
    });
}
