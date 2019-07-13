import { MAKE_TODO, DELETE_TODO } from './actions';
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
    // case DELETE_TODO: {
    //   const { amount, account, description } = action.payload;
    //   const newAmount = state[account] - parseInt(amount);
    //   const newActivity = state.accountActivity.concat([
    //     `${new Date()}, ${description}, -${amount}`
    //   ]);

    //   return {
    //     ...state,
    //     [account]: newAmount,
    //     accountActivity: newActivity
    //   };
    // }
    default:
      return state;
  }
}
