export const changeName = text => ({
  type: 'CHANGE_NAME',
  text
})

export const login = () => ({
  type: 'LOGIN',
  login: true
})

export const logout = () => ({
  type: 'LOGOUT',
  login: false
})

const userInitialState = {
  name: 'hacktiv8',
  token: '',
  login: false
}

export default (state = userInitialState, action) => {
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
