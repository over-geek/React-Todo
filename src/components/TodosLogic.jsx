import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: false,
    },
  ])
  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ])
  }
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo])
  }
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    )
  }

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList todosProps={todos} handleChange={handleChange} delTodo={delTodo} setUpdate={setUpdate} />
    </div>
  )
}

export default TodosLogic;