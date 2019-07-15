import { MAKE_TODO, TOGGLE_TODO, DELETE_TODO } from './actions';
import uuid from 'uuid';

// all state values need an initial value
const initialState = {
  todos: [
    {
      value: 'Walk Dog',
      completed: false,
      id: uuid()
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MAKE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(i =>
          i.id === action.payload ? { ...i, completed: !i.completed } : i
        )
      };
    case DELETE_TODO:
      return {
        state
      };
    default:
      return state;
  }
}
