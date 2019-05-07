const userInitialState = {
  name: 'hacktiv8',
  token: '',
  login: false
}

const userReducer = (state = userInitialState, action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.text
      }
    case 'LOGIN':
    case 'LOGOUT': {
      return {
        ...state,
        login: action.login
      }
    }
    default:
      return state
  }
}

export default userReducer