import * as React from "react";

import { api } from "./api";

export const AppAsync = () => {
  const [items, setItems] = React.useState([]);
  const [text, setText] = React.useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.length) {
      return;
    }

    const newItem = {
      text,
      id: Date.now(),
    };

    // ✨ NEW ✨
    api.createItem("/items", newItem).then((persistedItem) => {
      setText("");
      setItems(items.concat(persistedItem));
    });
  };

  return (
    <div>
      <h1>Liste de courses</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">Qu'est ce que je dois acheter ?</label>
        <br />
        <input id="new-todo" onChange={handleChange} value={text} />
        <button>Ajouter #{items.length + 1}</button>
      </form>
    </div>
  );
};
