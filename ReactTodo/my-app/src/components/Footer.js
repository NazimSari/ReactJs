import React from "react";

function Footer({ length, onChangeFilter, filter, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{length}</strong>
        items left
      </span>

      <ul className="filters">
        <li onClick={() => onChangeFilter("all")}>
          <a href="#/" className={filter === "all" ? "selected" : ""}>
            All
          </a>
        </li>
        <li onClick={() => onChangeFilter("active")}>
          <a href="#/" className={filter === "active" ? "selected" : ""}>
            Active
          </a>
        </li>
        <li onClick={() => onChangeFilter("completed")}>
          <a href="#/" className={filter === "completed" ? "selected" : ""}>
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
