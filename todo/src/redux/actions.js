// action type
export const MAKE_TODO = 'MAKE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// action creator
export function makeTodo(newTodo) {
  // action
  return {
    type: MAKE_TODO,
    payload: newTodo
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
}

export function deleteTodo(deleteTodo) {
  return {
    type: DELETE_TODO,
    payload: deleteTodo
  };
}
