import React from "react";

import { Link } from "react-router-dom";

import { TodoList } from "../../feature/todoList/ui";
import { useTodos } from "../../entities/todo/model";
import { EmptyTodoList } from "../../entities/emptyTodoList"; 
import { Button } from "../../shared/ui";

export const Home = () => {
  const todos = useTodos();
  const showEmptyTodoList = todos.length === 0;
  return (
    <>
      <Link to={"/create"}>
        <Button name="+ Добавить новую задачу" />
      </Link>
      {showEmptyTodoList && <EmptyTodoList />}
      <TodoList />
    </>
  );
};
