import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }
  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <React.Fragment>
      <input type="checkbox" onClick={handleCheckboxClick} />
      {todo.task}
      <button onClick={handleRemoveClick}>x</button>
    </React.Fragment>
  );
}

export default Todo;
