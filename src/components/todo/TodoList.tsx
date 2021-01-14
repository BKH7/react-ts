import React, { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoState } from "../../store/todo/selectors";
import { checkTodo, deleteTodo } from "../../store/todo/actions";

export function TodoList() {
  const todos = useSelector(getTodoState);
  const dispatch = useDispatch();

  const handleClick = (type: string, index: number) =>
    type === "done" ? dispatch(checkTodo(index)) : dispatch(deleteTodo(index));

  return (
    <>
      {todos.map((x, i) => (
        <div key={i} className="flex mb-4 items-center">
          <p
            className={`w-full text-grey-darkest ${
              x.isCheck && "line-through text-red-500"
            }`}
          >
            {x.todo}
          </p>
          <button
            onClick={() => handleClick("done", i)}
            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
          >
            Done
          </button>
          <button
            onClick={() => handleClick("delete", i)}
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
}
