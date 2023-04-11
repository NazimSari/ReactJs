import { useState } from "react";
import Form from "./Form";
import List from "./List";
import { v4 as uuidv4 } from "uuid";
uuidv4();
function Todo() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };
  return (
    <div>
      <Form addTodo={addTodo} />
      <section className="main">
        {todos.map((todo, index) => (
          <List task={todo} key={index} toggleComplete={toggleComplete} />
        ))}
      </section>
    </div>
  );
}

export default Todo;
