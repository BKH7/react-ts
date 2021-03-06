import { TodoState, TodoActionInterface, TodoActionType } from "./types";

const initialState: TodoState = {
  todos: [],
};

export default function todoReducer(
  state = initialState,
  action: TodoActionInterface
): TodoState {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case TodoActionType.DELETE_TODO:
      return {
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    case TodoActionType.CHECK_TODO:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload
            ? { todo: todo.todo, isCheck: !todo.isCheck }
            : todo
        ),
      };
    default:
      return state;
  }
}
