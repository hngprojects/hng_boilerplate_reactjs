import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout";

const router = createBrowserRouter([
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
]);

export default router;
