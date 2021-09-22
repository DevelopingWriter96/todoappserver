let todos = [
    {
        id: 1,
        taskName: 'Task 1',
        category: 'Test Category 1',
        completed: 'Incomplete',
    },
    {
        id: 2,
        taskName: 'Task 2',
        category: 'Test Category 2',
        completed: 'Incomplete',
    },
    {
        id: 3,
        taskName: 'Task 3',
        category: 'Test Category 1',
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
                    <p class="card-text category">${todo.category}</p>
                </div>
            </li>`
    })
    root.innerHTML += `</ul>`
}
window.onload = updateTodos()