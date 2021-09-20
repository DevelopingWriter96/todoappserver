let todos = [
    {
        id: 1,
        taskName: 'Test 1',
        category: 'Test',
        completed: 'Incomplete',
    },
    {
        id: 2,
        taskName: 'Test 2',
        category: 'Test',
        completed: 'Incomplete',
    },
    {
        id: 3,
        taskName: 'Test 3',
        category: 'Test',
        completed: 'Incomplete',
    },
]

const updateTodos = () => {
    let root = document.getElementById('root')
    root.innerHTML = ``

    todos.map((todo) => {
        root.innerHTML += `<div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">${todo.taskName}</h5>
                                    <p class="card-text">${todo.category}</p>
                                    <p class="card-text">${todo.completed}</p>
                                    <button type="button" class="btn btn-success">Complete Task</button>
                                </div>
                            </div>`
    })
}
window.onload = updateTodos()