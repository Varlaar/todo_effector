import { createEvent, sample } from "effector";

import { $todos } from "../../entities/todo/model";

export const clickedButtonDeleteTodo = createEvent<string>();

sample({
  clock: clickedButtonDeleteTodo,
  source: $todos,
  fn: (todos, id) => todos.filter((todo) => todo.id !== id),
  target: $todos,
});

clickedButtonDeleteTodo.watch((todo) => console.log("Удалена задача", todo));
