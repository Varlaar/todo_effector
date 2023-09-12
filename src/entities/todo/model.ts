import persist from 'effector-localstorage';

import { createStore, createEvent } from "effector";
import { useStore } from "effector-react";

import { ITodo } from "../../types";

export const $todos = createStore<ITodo[]>([]);

export const useTodos = () => useStore($todos);

export const saveToLocaleStorage = createEvent<ITodo[]>();
export const getTodoFromLocalStorage = createEvent();

$todos.watch((todos) => console.log("Стор:", todos));

persist({
  store: $todos,
  key: 'todos',
})



