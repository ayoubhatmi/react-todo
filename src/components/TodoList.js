import React, { useState } from "react";

import Todo from "./Todo";

function TodoList({ todos, setTodos, filtredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtredTodos.map((todo) => (
          <Todo
            todoText={todo.text}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
