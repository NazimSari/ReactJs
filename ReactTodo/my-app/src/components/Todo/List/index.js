import React from "react";

function List({ task, toggleComplete }) {
  return (
    <div>
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        <li
          onClick={() => toggleComplete(task.id)}
          className={`${task.completed ? "completed" : ""}`}
        >
          {task.task}
        </li>
      </ul>
    </div>
  );
}

export default List;
