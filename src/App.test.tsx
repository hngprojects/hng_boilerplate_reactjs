import { setup } from "./test/utils";

describe("app tests", () => {
  it("should render without crashing", () => {
    expect.assertions(1);

    setup();

    expect(true).toBeTruthy();
  });
});
