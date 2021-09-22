let todos = [
    {
        id: 1,
        taskName: 'Task 1',
        completed: 'Incomplete',
    },
    {
        id: 2,
        taskName: 'Task 2',
        completed: 'Incomplete',
    },
    {
        id: 3,
        taskName: 'Task 3',
        completed: 'Incomplete',
    },
]

const updateTodos = () => {
    let root = document.querySelector('#root')
    root.innerHTML = `<ul>`

    todos.map((todo) => {
        root.innerHTML +=
            `<li class="card">
                <div class="card-body">
                    <input type="checkbox" id="task${todo.id}" name="task${todo.id}" value="Bike">
                    <label for="task${todo.id}"> ${todo.taskName}</label><br>
                </div>
            </li>`
    })
    root.innerHTML += `</ul>`
}

updateTodos();
document.querySelector("#addTaskButton").addEventListener('click', (event) => {
    let inputBox = document.querySelector('#newTaskName');
    let newTaskName = inputBox.value
    let newId = todos.length + 1

    inputBox.value = "";

    todos.push({ id: newId, taskName: newTaskName, completed: false })
    updateTodos();
})
