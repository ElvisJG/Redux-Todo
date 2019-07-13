// action type
export const MAKE_TODO = 'MAKE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// action creator
export function makeTodo(newTodo) {
  // action
  return {
    type: MAKE_TODO,
    payload: newTodo
  };
}
