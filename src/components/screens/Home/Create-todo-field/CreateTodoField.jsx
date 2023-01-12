import React, { useContext, useState } from 'react';
import { TodoContext } from '../../../../context/todoContext';

const CreateTodoField = () => {
  const [title, setTitle] = useState('');
  const {addNewTodo}=useContext(TodoContext)
  const addTodo = (title) => {
    addNewTodo(title);
    setTitle('');
  };
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        // в 15-16 строках управление компонента ввода
        onKeyPress={(e) => e.key === 'Enter' && addTodo(title)}
        className="bg-transparent w-full border-none outline-none"
        placeholder="Add a task"
      />
    </div>
  );
};
export default CreateTodoField;
