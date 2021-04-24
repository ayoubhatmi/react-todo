import { useEffect, useState } from "react";
import "./App.css";

//importting components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // satate
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtredTodos, setFiltredTodos] = useState([]);

  // functions
  const filterHnadler = () => {
    switch (status) {
      case "completed":
        setFiltredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFiltredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFiltredTodos(todos);
        break;
    }
  };
  // useEffect do the filterHandeler after render, on adding todo and on status changed
  useEffect(() => {
    filterHnadler();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        status={status}
        setFiltredTodos={setFiltredTodos}
        filtredTodos={filtredTodos}
      />
      <TodoList setTodos={setTodos} todos={todos} filtredTodos={filtredTodos} />
    </div>
  );
}

export default App;
