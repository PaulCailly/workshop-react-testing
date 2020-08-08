import * as React from "react";
import { render, fireEvent } from "@testing-library/react";

import { App } from "../App";

test("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<App />);

  getByText("Liste de courses");
  getByLabelText("Qu'est ce que je dois acheter ?");
  getByText("Ajouter #1");
});

test("allows users to add items to their list", () => {
  const { getByText, getByLabelText } = render(<App />);

  const input = getByLabelText("Qu'est ce que je dois acheter ?");
  fireEvent.change(input, { target: { value: "Tomates" } });
  fireEvent.click(getByText("Ajouter #1"));

  getByText("Tomates");
  getByText("Ajouter #2");
});
