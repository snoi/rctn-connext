import { createStore, combineReducers } from 'redux'
import userReducer from './userReducer'


const reducers = combineReducers({
  user: userReducer
})

const store = createStore(reducers)

export default store

