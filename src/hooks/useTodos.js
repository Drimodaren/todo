import { useState } from 'react';

// setTodos - метод для изменения todos
const useTodos = (data = []) => {
  const [todos, setTodos] = useState(data);
  // todos это текущее состояние, т.е оно может изменять с ходом выполенния программы.
  // data это изначальное состояние, самое первое, оно не изменяется.
  // changeTodo для изменения флага completed
  // setTodos принимает либо новое состояние, либо функцию первым аргументом предыдущие состояние. Этот аргумент можно назвать как угодно, в данном случаем prev. т.е prev === todos
  const changeTodo = (id) => {
    setTodos((prev) => {
      console.log(prev);
      return prev.map((element) => {
        if (element.id === id) {
          return { ...element, completed: !element.completed };
        }
        return element;
      });
    });
  };
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const addNewTodo = (newText) => {
    setTodos((prev) => {
      return [...prev, { id: new Date(), title: newText, completed: false }];
    });
  };
  return { todos, changeTodo, removeTodo, addNewTodo, setTodos };
};
export default useTodos;
