import { useEffect, useState, useCallback } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useTodos } from "../../../entities/todo/model";
import { Button, Input, Textarea } from "../../../shared/ui";

import { clickedButtonSaveTodo } from "../model";

import styles from "./editTodo.module.scss";

export const EditTodo = () => {
  const { id } = useParams();

  const todoId = id ?? "";

  const todos = useTodos();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getCurrentTodo = useCallback(() => {
    const todo = todos.find((todo) => todo.id === todoId);
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todoId, todos]);

  useEffect(() => {
    getCurrentTodo();
  }, [getCurrentTodo]);

  const handleChangeTitle = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(value);
  };

  const handleChangeDescription = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(value);
  };

  const handleSaveTodo = () => {
    const newTodo = {
      id: todoId,
      title: title.trim(),
      description: description.trim(),
    };

    clickedButtonSaveTodo(newTodo);
  };

  return (
    <div className={styles.wrapper}>
      <span>Название задачи</span>
      <Input value={title} onChange={handleChangeTitle} />
      <span>Описание задачи</span>
      <Textarea value={description} onChange={handleChangeDescription} />
      <Link to={"/"}>
        <Button onClick={handleSaveTodo} name="Сохранить" />
      </Link>
      <Link to={"/"}>
        <Button name="Назад" />
      </Link>
    </div>
  );
};
