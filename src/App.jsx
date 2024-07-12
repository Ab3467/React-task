import React, { useState } from "react";
import "./index.css";
import AddTodoForm from "./components/AddTodoForm";
import ListItem from "./components/ListItem";

function App() {
  const [todo, setTodo] = useState([]);

  function handleAddItems(newItem) {
    setTodo((prev) => [...prev, newItem]);
  }

  return (
    <div className="flex flex-row items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 font-serif">
          Todo List
        </h1>
        <AddTodoForm additem={handleAddItems} />
        <ListItem list={todo} />
      </div>
    </div>
  );
}

export default App;
