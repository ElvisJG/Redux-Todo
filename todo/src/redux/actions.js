// action type
export const MAKE_TODO = 'MAKE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// action creator
export function makeDeposit(value, completed) {
  // action
  return {
    type: MAKE_TODO,
    payload: {
      value,
      completed
    }
  };
}

export function makeWithdrawal(value, completed) {
  return {
    type: DELETE_TODO,
    payload: {
      value,
      completed
    }
  };
}
