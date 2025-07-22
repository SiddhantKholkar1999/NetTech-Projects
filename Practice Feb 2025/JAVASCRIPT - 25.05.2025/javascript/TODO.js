// const addBtn = document.getElementById('add-btn');
let addBtn = document.querySelector('#add-btn');
// const input = document.getElementById('todo-input');
let input = document.querySelector('#todo-input');
// const container = document.getElementById('todo-container');
let container = document.querySelector('#todo-container');
// const darkBtn = document.getElementById('dark-mode');
let darkBtn = document.querySelector('#dark-mode');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    container.innerHTML = '';
    todos.forEach((todo, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'todo-item';
        if (todo.completed)
            taskDiv.classList.add('completed');

        const textSpan = document.createElement('span');
        textSpan.textContent = todo.text;

        const btnDiv = document.createElement('div');
        btnDiv.className = 'btns';

        const doneBtn = document.createElement('button');
        doneBtn.textContent = '✓';
        doneBtn.title = 'Mark as Complete';
        doneBtn.addEventListener('click', () => {
            todos[index].completed = !todos[index].completed;
            saveTodos();
            renderTodos();
        });

        const editBtn = document.createElement('button');
        editBtn.textContent = '✏️';
        editBtn.title = 'Edit Task';
        editBtn.addEventListener('click', () => {
            const editInput = document.createElement('input');
            editInput.className = 'edit-input';
            editInput.value = todos[index].text;

            const saveEdit = () => {
            if (editInput.value.trim()) {
                todos[index].text = editInput.value.trim();
                saveTodos();
                renderTodos();
            }
            };

            editInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') saveEdit();
            });

            taskDiv.innerHTML = '';
            taskDiv.appendChild(editInput);
            editInput.focus();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️';
        deleteBtn.title = 'Delete Task';
        deleteBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
        });

        btnDiv.appendChild(doneBtn);
        btnDiv.appendChild(editBtn);
        btnDiv.appendChild(deleteBtn);

        taskDiv.appendChild(textSpan);
        taskDiv.appendChild(btnDiv);
        container.appendChild(taskDiv);
    });
}

addBtn.addEventListener('click', () => {
    const task = input.value.trim();
    if (task === '') return;

    todos.push({ text: task, completed: false });
    input.value = '';
    saveTodos();
    renderTodos();
});

darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

renderTodos();