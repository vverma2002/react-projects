import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, TextField } from "@mui/material";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      //reset task input
      setTodo({ ...todo, task: "" });
      console.log(todo);
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        variant="standard"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}

export default TodoForm;
