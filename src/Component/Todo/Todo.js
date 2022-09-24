import React, { useEffect, useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div>
      <h1 className="todo-h1">Total Todo Data : {todos.length}</h1>
      <div className="todo">
        {todos.map((todo) => (
          <TodoData id={todo.id} title={todo.title}></TodoData>
        ))}
      </div>
    </div>
  );
};

const TodoData = (props) => {
  return (
    <div className="todo-list">
      <div>
        <h2>
          {props.id}. <span> {props.title}</span>{" "}
        </h2>
      </div>
    </div>
  );
};
export default Todo;
