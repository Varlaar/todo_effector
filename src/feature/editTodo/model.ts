import { createEvent, sample } from "effector";

import { $todos } from "../../entities/todo/model";

import { ITodo } from "../../types";

export const clickedButtonSaveTodo = createEvent<ITodo>();

sample({
  clock: clickedButtonSaveTodo,
  source: $todos,
  fn: (todos, newTodo) =>
    todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo)),
  target: $todos,
});

clickedButtonSaveTodo.watch((newTodo) =>
  console.log("Задача была изменена", newTodo)
);
