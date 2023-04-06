import React, { useState } from "react";

function Header({ addTodoItem }) {
  const [keywords, setKeywords] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addTodoItem(keywords);

    setKeywords("");
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
      </form>
    </header>
  );
}

export default Header;
