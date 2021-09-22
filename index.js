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
            `<li class="card">
                <div class="card-body">
                    <button type="button" class="btn-close float-end" aria-label="Close" onclick="deleteTodo(${todo.id})"></button>
                    <input type="checkbox" id="task${todo.id}" name="task${todo.id}" onclick="completeTodo(${todo.id})">
                    <label for="task${todo.id}"> ${todo.taskName}</label><br>
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

