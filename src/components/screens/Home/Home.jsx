import React, { useEffect, useState } from 'react';
import TodoItem from './item/Todoitem';
import CreateTodoField from './Create-todo-field/CreateTodoField';
import useTodos from '../../../hooks/useTodos';
import { TodoContext } from '../../../context/todoContext';

// setTodos - метод для изменения todos
const Home = () => {
  const { todos, changeTodo, removeTodo, addNewTodo, setTodos } = useTodos([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((json) => setTodos(json))
      .finally(() => {
        setLoading(false);
      });
  }, [setTodos]);

  return (
    <TodoContext.Provider value={{ changeTodo, removeTodo, addNewTodo }}>
      {loading ? (
        <div className="text-white w-4/5 mx-auto">Loading</div>
      ) : (
        <div className="text-white w-4/5 mx-auto">
          <h1 className="text-2xl front-bold text-center mb-10">Todo for junior</h1>
          {todos.map((item) => (
            <TodoItem key={item.id} todo={item} /> // вызов компонента и CreateTodoField тоже самое. key специальный зарезервированный пропс, нужен для реакта для оптимизации, перерисвывет только то значение, которое было туда передано. Остальные значения не трогает.
          ))}
          <CreateTodoField />
        </div>
      )}
    </TodoContext.Provider>
  );
};

export default Home;
