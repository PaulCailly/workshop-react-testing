import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "../App.js";

test("renders the correct content", () => {
  // Faire un rendu de l'App dans le DOM
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  // Utiliser les APIs du DOM (querySelector) pour faire des assertions
  expect(root.querySelector("h1").textContent).toBe("Liste de courses");
  expect(root.querySelector("label").textContent).toBe(
    "Qu'est que je dois acheter ?"
  );
  expect(root.querySelector("button").textContent).toBe("Ajouter #1");
});
