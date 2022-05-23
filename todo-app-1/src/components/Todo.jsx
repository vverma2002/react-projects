import React from "react";
import { Checkbox, ListItem, IconButton, Typography } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }
  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox onClick={handleCheckboxClick} checked={todo.completed} />
      <Typography
        variant="body"
        style={{ textDecoration: todo.completed ? "line-through" : null }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseRounded />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
