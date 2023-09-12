import React from "react";

import styles from "./emptyTodoList.module.scss";

export const EmptyTodoList = () => {
  return (
    <>
      <span className={styles.empty}>Список задач пуст</span>
    </>
  );
};
