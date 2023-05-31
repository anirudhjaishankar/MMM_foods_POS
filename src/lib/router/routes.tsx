import React from "react";
import type { PathRouteProps } from "react-router-dom";

const Home = React.lazy(() => import("lib/pages/home"));
const Menu = React.lazy(() => import("lib/pages/menu"));
const NewOrder = React.lazy(() => import("lib/pages/new-order"));

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/new-order",
    element: <NewOrder />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
