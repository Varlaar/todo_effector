import { RouteObject } from "react-router-dom";

import { Home } from "./home";

export const homeRoute = (path: string): RouteObject => ({
  path,
  element: <Home />,
});
