import React from "react";

function Main({ todos, toogleTodoItem, deleteTodoItem }) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos.map((todo, i) => (
          <li className={todo.isCompleted ? "completed" : ""} key={i}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toogleTodoItem(todo.id)}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => deleteTodoItem(todo.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Main;
