let todos = [
    {
        id: 1,
        taskName: "Task 1",
        completed: false,
        category: "Work"
    },
    {
        id: 2,
        taskName: "Task 2",
        completed: true,
        category: "School"
    },
    {
        id: 3,
        taskName: "Task 3",
        completed: false,
        category: "Uncategorized"
    },
]
let categories = []

const updateTodos = () => {
    let taskList = document.querySelector('#taskList')
    taskList.innerHTML = `<ul>`

    todos.map((todo) => {
        taskList.innerHTML +=
            `<li class="card w-50">
                <div class="card-body">
                    <div>
                    <button type="button" id="task${todo.id}Close" class="btn-close float-end ms-2 mt-1" aria-label="Close"></button>
                        <button type="button" id="task${todo.id}Edit" class="btn btn-success btn-sm float-end">Edit</button>
                    </div>
                    <input type="checkbox" id="task${todo.id}Completed" name="task${todo.id}" ${todo.completed == true ? 'checked' : ''}>
                    <label for="task${todo.id}"> ${todo.taskName}</label><br>
                </div>
            </li>`;

        // document.querySelector(`#task${todo.id}Completed`).addEventListener('click', completeTodo(todo.id));
        // document.querySelector(`#task${todo.id}Close`).addEventListener('change', deleteTodo(todo.id));
        // console.log(`#task${todo.id}Close`)
        // console.log(document.querySelector(`#task${todo.id}Close`))
        // // document.querySelector(`#task${todo.id}Edit`).addEventListener('click', editTodo(todo.id));
    })
    taskList.innerHTML += `</ul>`

    getAllCategories()

}

// event listener for add task btn
document.querySelector("#addTaskButton").addEventListener('click', () => {

    let inputBox = document.querySelector('#newTaskName');
    let newTaskName = inputBox.value
    if (newTaskName !== '') {
        let newId = todos.length + 1
        let newCategory = document.querySelectorAll('#filterDropdown')[0].value // new todo select will always be first
        if (newCategory === 'Select Category') {
            newCategory = 'Uncategorized'
        }

        inputBox.value = "";

        todos.push({ id: newId, taskName: newTaskName, completed: false, category: newCategory })
        updateTodos();
    }
})

// event listener for add category btn
document.querySelector("#addCategoryButton").addEventListener('click', () => {
    let inputBox = document.querySelector('#newCategoryName')
    let newCategory = inputBox.value

    if (!categories.includes(newCategory) && newCategory != "") {
        categories.push(newCategory)

        let dropdowns = document.querySelectorAll('#filterDropdown')
        dropdowns.forEach((dropdown) => {
            const newElement = document.createElement('option');
            newElement.value = newCategory
            newElement.innerHTML = newCategory
            dropdown.appendChild(newElement)
        })
    }

    inputBox.value = "";
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
        if (element.completed === false) {
            return element
        }
    })
    updateTodos()
}

let todoBeingEdited = [];



//edit 
function editTodo(index) {
    let todo = todos[index - 1];
    todoBeingEdited.push(todo);
    document.querySelector('#newTaskName').value = todo.taskName;
    document.querySelector('#newCategoryName').value = todo.category;
    document.querySelector('#saveTaskButton').style.display = 'block';
    document.querySelector('#addTaskButton').style.display = 'none';
}

//save 
const saveTodo = () => {
    let value = document.querySelector('#newTaskName').value;
    let todoToSave = todoBeingEdited.pop();
    todos[todoToSave.id - 1].taskName = value;
    document.querySelector('#newTaskName').value = '';
    document.querySelector('#saveTaskButton').style.display = 'none';
    document.querySelector('#addTaskButton').style.display = 'block';
    updateTodos()
}

document.querySelector('#saveTaskButton').addEventListener('click', () => {
    saveTodo();
})

// grab unique categories and display them in drop down
function getAllCategories() {

    categories = todos.map((todo) => {
        if (!categories.includes(todo.category) && todo.category != '') {

            let dropdowns = document.querySelectorAll("#filterDropdown");
            dropdowns.forEach((dropdown) => {
                const newElement = document.createElement('option');
                newElement.value = `${todo.category}`
                newElement.innerHTML = `${todo.category}`
                dropdown.appendChild(newElement)
            })
            return todo.category
        }
    })
}

function sortTodos() {

}

