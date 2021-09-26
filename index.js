let todos = [
    {
        id: 1,
        taskName: 'Task 1',
        completed: false,
    },
    {
        id: 2,
        taskName: 'Task 2',
        completed: false,
    },
    {
        id: 3,
        taskName: 'Task 3',
        completed: false,
    },
]


const updateTodos = () => {
    let taskList = document.querySelector('#taskList')
    taskList.innerHTML = `<ul>`

    todos.map((todo) => {
        taskList.innerHTML +=
            `<li class="card w-50">
                <div class="card-body">
                    <button type="button" class="btn-close float-end" aria-label="Close" onclick="deleteTodo(${todo.id})"></button>
                    <input type="checkbox" id="task${todo.id}" name="task${todo.id}" onclick="completeTodo(${todo.id})">
                    <label for="task${todo.id}"> ${todo.taskName}</label><br>
                    <button type="button" onclick="editTodo(${todo.id})" class= "text-primary">Edit</button>
                </div>
            </li>`
    })
    taskList.innerHTML += `</ul>`
}



document.querySelector("#addTaskButton").addEventListener('click', () => {
    let inputBox = document.querySelector('#newTaskName');
    let newTaskName = inputBox.value
    let newId = todos.length + 1

    inputBox.value = "";

    todos.push({ id: newId, taskName: newTaskName, completed: false })
    updateTodos();
})

updateTodos();


function deleteTodo(id) {
    todos = todos.filter(element => {
        if (element.id != id) {
            return element;
        }

    })

    updateTodos()
}

function completeTodo(id) {
    todos = todos.filter(element => {
        if (element.id == id) {
            element.completed = !element.completed;
        }
        return element;
    })
}

function deleteCompleted() {
    todos = todos.filter(element => {
        if(element.completed === false){
            return element
        }
    })
    updateTodos()
}

let todoBeingEdited = [];

//edit 
function editTodo(index){
    let todo = todos[index - 1];
    todoBeingEdited.push(todo);
    document.getElementById('newTaskName').value = todo.taskName;
    document.getElementById('saveTaskButton').style.display = 'block';
    document.getElementById('addTaskButton').style.display = 'none'; 
}

//save 
const saveTodo = () => {
    let value = document.getElementById('newTaskName').value;
    let todoToSave = todoBeingEdited.pop();
    todos[todoToSave.id - 1].taskName = value;
    document.getElementById('newTaskName').value = ''; 
    document.getElementById('saveTaskButton').style.display = 'none';
    document.getElementById('addTaskButton').style.display = 'block';
    updateTodos()
}

document.getElementById('saveTaskButton').addEventListener('click', () => {
    saveTodo();
})



