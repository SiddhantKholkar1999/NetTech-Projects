import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      pinned: false,
      createdAt: Date.now(), // keeps insertion order
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const togglePin = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, pinned: !todo.pinned } : todo
      )
    );
  };

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return a.createdAt - b.createdAt;
  });

  return (
    <>
      <div style={{ width: "300px", margin: "auto" }}>
        <h2>Todo List with Pinning</h2>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTodo}>Add</button>

        <div style={{ listStyle: "none", padding: 0 }}>
          {sortedTodos.map((todo) => (
            <div
              key={todo.id}
              style={{
                background: todo.pinned ? "cyan" : "#f9fafb",
                width: todo.pinned ? "400px" : "300px",
                padding: "8px 10px",
                margin: "6px 0",
                border: todo.pinned ? "2px black" : "none",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="checkbox"
                checked={todo.pinned}
                onChange={() => togglePin(todo.id)}
              />
              <span style={{ marginLeft: "10px" }}>{todo.text}</span>
              <span style={{ marginLeft: "10px" }}>
                {new Date(todo.createdAt).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
        <div>
          <pre>Don't go by name or text as order is pre decided by Date</pre>
        </div>
      </div>
    </>
  );
}
