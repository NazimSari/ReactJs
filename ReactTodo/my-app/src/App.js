import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const addTodoItem = (text) => {
    setTodos((prev) => [
      ...prev, //daha önceki stateleri almak için...
      {
        id: uuidv4(),
        text,
        isCompleted: false,
      },
    ]);
  };
  const toogleTodoItem = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    findTodo.isCompleted = !findTodo.isCompleted;
    setTodos(todos.map((todo) => (todo.id === id ? findTodo : todo)));
  };
  const deleteTodoItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const unCompletedLength = todos.filter((todo) => !todo.isCompleted).length;
  const onHandleChangeFilter = (filter) => setFilter(filter);
  const filteredTodos = todos.filter((todo) => {
    return filter === "active"
      ? !todo.isCompleted
      : filter === "completed"
      ? todo.isCompleted
      : todo;
  });
  const handleClearCompleted = () =>
    setTodos(todos.filter((todo) => !todo.isCompleted));
  return (
    <section className="todoapp">
      <Header addTodoItem={addTodoItem} />
      <Main
        todos={filteredTodos} //projenin başında burası todos olarak kullanıldı ancak footerdaki filtreleme işlemi için bu son halini aldı
        toogleTodoItem={toogleTodoItem}
        deleteTodoItem={deleteTodoItem}
      />
      <Footer
        length={unCompletedLength}
        onChangeFilter={onHandleChangeFilter}
        filter={filter}
        clearCompleted={handleClearCompleted}
      />
    </section>
  );
}

export default App;
