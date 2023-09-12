import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Input, Button, Textarea } from "../../../shared/ui";

import { clickedButtonAddTodo } from "../model";

import { v4 as uuidv4 } from "uuid";

import styles from "./createTodo.module.scss";

export const CreateTodo: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const isTitleEmpty = title.trim() === "";

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

  const handleAddTodo = async () => {
    const newTitle = title.trim();
    const newDescription = description.trim();

    if (isTitleEmpty) {
      return;
    }
    const newTodo = {
      id: uuidv4(),
      title: newTitle,
      description: newDescription,
    };

    clickedButtonAddTodo(newTodo);
    setTitle("");
    setDescription("");
  };

  return (
    <div className={styles.container}>
      <Input
        onChange={handleChangeTitle}
        value={title}
        placeholder="Введите название задачи"
      />
      <Textarea
        onChange={handleChangeDescription}
        value={description}
        placeholder="Введите описание задачи"
      />
      <Link to={"/"}>
        <Button
          onClick={handleAddTodo}
          name="Добавить задачу"
          disabled={isTitleEmpty}
        />
      </Link>
      <Link to={"/"}>
        <Button name="Отмена" />
      </Link>
    </div>
  );
};
