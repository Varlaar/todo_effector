import { RouteObject } from "react-router-dom";

import { CreateView } from "./create";

export const createTodoRoute = (path: string): RouteObject => ({
  path,
  element: <CreateView />,
});
