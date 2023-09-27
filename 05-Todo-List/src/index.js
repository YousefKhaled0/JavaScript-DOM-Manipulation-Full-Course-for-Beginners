const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', () => {

    const todoText = document.getElementById("new-todo").value.trim();


    if (todoText === ''){

        return ;
    }

    const task = document.createElement('li');
    
    task.innerHTML = `
    ${todoText}
    <button class="done" onclick="markDone(this)">Done</button>
    <button class="delete" onclick="deleteTodo(this)">Delete</button>
    `;

    todoList.appendChild(task);
});


function markDone(button) {
    const listItem = button.parentElement;
    button.disabled = true;
    listItem.style.textDecoration = "line-through";
}

function deleteTodo(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
