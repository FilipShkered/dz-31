import { TodoApi } from '../../../api/TodoApi'

export const ACTION_TODO_CREATE = 'ACTION_TODO_CREATE'
export const ACTION_TODO_REMOVE = 'ACTION_TODO_REMOVE'
export const ACTION_TODO_EDIT = 'ACTION_TODO_EDIT'
export const ACTION_TODO_UPDATE = 'ACTION_TODO_UPDATE'
export const ACTION_SET_TODO_LIST = 'ACTION_SET_TODO_LIST'


export function fetchTodos () {
  return (dispatch) => {
    TodoApi.getList().then((newList) => {
      dispatch(setTodoList(newList))
    })
  }
}
export function create (todo) {
  return { type: ACTION_TODO_CREATE, payload: todo }
}

export function remove(id) {
  return (dispatch) => {
    TodoApi.delete(id).then(() => {
      dispatch({ type: ACTION_TODO_REMOVE, payload: id });
    });
  };
}
export function edit (todo) {
  return { type: ACTION_TODO_EDIT, payload: todo }
}

export function update (todo) {
  return { type: ACTION_TODO_UPDATE, payload: todo }
}

export function setTodoList (list) {
  return { type: ACTION_SET_TODO_LIST, payload: list }
}


export function save (todo) {
  return (dispatch) => {
    if (todo.id) { 
      TodoApi.update(todo.id, todo).then(() => {
        dispatch(update(todo))
      })
    } else { 
      TodoApi.create(todo).then((todoWithId) => {
        dispatch(create(todoWithId))
      })
    }
    
  }
}


