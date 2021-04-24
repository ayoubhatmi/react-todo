import React, { useState } from "react";
function Form({
  setInputText,
  inputText,
  setTodos,
  todos,
  setFiltredTodos,
  filtredTodos,
  setStatus,
  status,
}) {
  const [id, setId] = useState(1);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setId(id + 1);
    setTodos([...todos, { text: inputText, completed: false, id: id }]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        value={inputText}
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
