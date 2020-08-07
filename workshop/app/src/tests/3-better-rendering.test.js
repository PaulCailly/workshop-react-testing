import * as React from "react";
import { render } from "@testing-library/react";

import { App } from "../App";

test("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<App />);

  getByText("Liste de courses");
  getByLabelText("Qu'est que je dois acheter ?");
  getByText("Ajouter #1");
});
