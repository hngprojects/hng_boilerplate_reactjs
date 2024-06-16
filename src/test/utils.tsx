/* eslint-disable react-refresh/only-export-components */
import { render, type RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider } from "react-router-dom";

import router from "../router";

const AllTheProviders = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

const customRender = (options?: Omit<RenderOptions, "wrapper">) =>
  render(<></>, { wrapper: AllTheProviders, ...options });

const setup = (...renderOptions: Parameters<typeof customRender>) => {
  return {
    user: userEvent.setup(),
    render: customRender(...renderOptions),
  };
};

export * from "@testing-library/react";
export { customRender as render, setup };
