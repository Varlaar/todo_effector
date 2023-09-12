import React from "react";

import { ITodo } from "../../../types";

import styles from "./todo.module.scss";

interface ITodoProps extends ITodo {
  children: React.ReactNode;
}

export const Todo: React.FC<ITodoProps> = ({
  title,
  description,
  id,
  children,
}) => (
  <>
    <li className={styles.item} key={id}>
      <span>{title}</span>
      <span>{description}</span>
      {children}
    </li>
  </>
);
