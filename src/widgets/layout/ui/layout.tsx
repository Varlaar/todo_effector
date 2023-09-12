import React from "react";

import { Outlet } from "react-router-dom";

import styles from "./layout.module.scss";

export const Layout = () => (
  <main className={styles.wrapper}>
    <Outlet />
  </main>
);
