import { MAKE_TODO, TOGGLE_TODO } from './actions';
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
    case MAKE_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }
    case TOGGLE_TODO: {
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    }
    default:
      return state;
  }
}
