function addTodo() {
  if (!document.getElementById("todo_input").value.trim()) return;
  const todoObj = {
    id: todoObj.length(),
    text: "",
    pinned: false,
    createdAt: Date.now(), // keeps insertion order
  };
}

function deleteTodo(id) {
  todos = todos.filter((el) => el.id !== id);
}

function togglePin(id) {
  save();
}

function save() {}
