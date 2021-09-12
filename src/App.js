import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setTodos(json.data);
        }
      });
  }, []);
  return (
    <div className="App">
      <ol>
        {todos.map((todo, i) => {
          return <li key={i}>{todo.title}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
