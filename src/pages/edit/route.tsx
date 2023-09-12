import { RouteObject } from "react-router-dom";

import { EditView } from "./edit";

export const editTodoRoute = (path: string): RouteObject => ({
  path,
  element: <EditView />,
});
