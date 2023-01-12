import React, { useContext } from 'react';
import Check from './Check';
import classNames from 'classnames';
import { BsTrash } from 'react-icons/bs';
import { TodoContext } from '../../../../context/todoContext';

const TodoItem = ({ todo }) => {
  const { changeTodo, removeTodo } = useContext(TodoContext);
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full">
      <button onClick={() => changeTodo(todo.id)} className="flex items-center">
        <Check isCompleted={todo.completed} />
        <span
          className={classNames({
            'line-through': todo.completed,
          })}
        >
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <BsTrash
          size={22}
          className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
        />
      </button>
    </div>
  );
};

export default TodoItem;
