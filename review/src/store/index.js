import { createStore } from 'redux'

const toDoInitialState = {
  total: 0,
  tasks: []
}

export const addTask = (name, done = false) => ({
  type: 'ADD_TODO',
  task: {
    name,
    done
  }
})

export const deleteTask = index => ({
  type: 'DELETE_TODO',
  index
})

const toDoReducer = (state = toDoInitialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const addState = {
        total: state.total + 1,
        tasks: [...state.tasks, action.task]
      }

      return addState
    case 'GET_ALL_TODO':
    case 'DONE_TODO':
    case 'DELETE_TODO':
      const deleteState = {
        total: state.total - 1,
        tasks: [
          ...state.tasks.slice(0, action.index), ...state.tasks.slice(action.index + 1)
        ]
      }

      return deleteState
    case 'EDIT_TODO':
    default:
      return state
  }
}

const store = createStore(toDoReducer)

export default store