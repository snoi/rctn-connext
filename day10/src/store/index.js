import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import userReducer from './user'
import newsReducer from './news'


const reducers = combineReducers({
  user: userReducer,
  news: newsReducer
})
const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(logger, thunk)
    )
)

export default store

