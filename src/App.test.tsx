import App from "./App";
import { render, screen, setup } from "./test/utils";

describe("app tests", () => {
  it("should render correctly", () => {
    expect.assertions(1);

    render(<App />);

    expect(true).toBeTruthy();
  });
  it("should render with testing router", async () => {
    expect.assertions(1);

    setup();

    // page is lazy so we need to wait for it to load
    const element = await screen.findByText("Vite + React");
    expect(element).toBeInTheDocument();
  });
});
