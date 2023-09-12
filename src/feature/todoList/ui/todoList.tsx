import React from "react";

import { Link } from "react-router-dom";

import { Todo } from "../../../entities/todo"; 
import { useTodos } from "../../../entities/todo/model";
import { Button } from "../../../shared/ui";

import { clickedButtonDeleteTodo } from "../model";

import styles from "./todoList.module.scss";

export const TodoList = () => {
  const todos = useTodos();

  const handleDeleteTodo = (id: string) => {
    clickedButtonDeleteTodo(id);
  };

  return (
    <>
      <ul className={styles.list}>
        {todos.map((todo: any) => (
          <Todo
            title={todo.title}
            description={todo.description}
            key={todo.id}
            id={todo.id}
          >
            <Link to={`/edit/${todo.id}`}>
              <Button name="Редактировать задачу" />
            </Link>
            <Button
              onClick={() => handleDeleteTodo(todo.id)}
              name="Удалить задачу"
            />
          </Todo>
        ))}
      </ul>
    </>
  );
};
