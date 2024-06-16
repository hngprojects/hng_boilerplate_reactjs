import { createBrowserRouter, type RouteObject } from "react-router-dom";

import Layout from "./layout";

export const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        async lazy() {
          const { default: Component } = await import("./pages/index");

          return {
            Component,
          };
        },
      },
    ],
  },
];

const router = createBrowserRouter(routerConfig);

export default router;
