import { createEvent, sample } from "effector";

import { $todos } from "../../entities/todo/model";

import { ITodo } from "../../types";

export const clickedButtonAddTodo = createEvent<ITodo>();

sample({
  clock: clickedButtonAddTodo,
  source: $todos,
  fn: (todos, newTodo) => [...todos, newTodo],
  target: $todos,
});

clickedButtonAddTodo.watch((todo) =>
  console.log("Добавлена новая задача", todo)
);
