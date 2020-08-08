import * as React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";

import { AppAsync } from "../AppAsync";
import { api } from "../API";

jest.mock("../API");
const createItem = api.createItem;

test("allows users to add items to their list", async () => {
  const todoText = "Tomates";
  createItem.mockResolvedValueOnce({ id: 123, text: todoText });
  const { getByText, getByLabelText } = render(<AppAsync />);

  const input = getByLabelText("Qu'est ce que je dois acheter ?");
  fireEvent.change(input, { target: { value: todoText } });
  fireEvent.click(getByText("Ajouter #1"));

  await waitFor(() => getByText(todoText));
});
