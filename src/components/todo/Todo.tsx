import React, { ChangeEvent, useState } from "react";
import { useDispatch } from 'react-redux';

import { addTodo } from '../../store/todo/actions';
import { TodoList } from './TodoList';

export function Todo() {
  const [todoMessage, setTodoMessage] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addTodo({ todo: todoMessage, isCheck: false }));
    setTodoMessage("");
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoMessage(event.target.value);
  }

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">

        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
              onChange={handleOnChange}
              value={todoMessage}
            />
            <button onClick={handleClick} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
              Add
            </button>
          </div>
        </div>

        <TodoList  />

      </div>
    </div>
  );
}
