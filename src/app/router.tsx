import { createBrowserRouter as Router } from "react-router-dom";

import { homeRoute } from "../pages/home/route";
import { createTodoRoute } from "../pages/create/route";
import { editTodoRoute } from "../pages/edit/route";

import { Layout } from "../widgets/layout/ui";

export const router = Router([
  {
    element: <Layout />,
    children: [
      homeRoute("/"),
      createTodoRoute("/create"),
      editTodoRoute("/edit/:id"),
    ],
  },
]);
