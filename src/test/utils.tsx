/* eslint-disable react-refresh/only-export-components */
import { render, type RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import { routerConfig } from "../router";

interface CustomRenderOptions {
  initialEntries?: string[];
  renderOptions?: RenderOptions;
}
const customRender = (options?: CustomRenderOptions) => {
  const router = createMemoryRouter(routerConfig, {
    initialEntries: options?.initialEntries ?? ["/"],
  });

  return render(
    <>
      <RouterProvider router={router} />
    </>,
    { ...options?.renderOptions },
  );
};

const setup = (...options: Parameters<typeof customRender>) => {
  const user = userEvent.setup();
  const view = customRender(...options);

  return {
    user,
    view,
  };
};

export * from "@testing-library/react";
export { customRender, setup };
