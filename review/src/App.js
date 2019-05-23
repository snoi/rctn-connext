import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import TodoAdd from './containers/TodoAdd'
import TodoList from './containers/TodoList'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="row">
          <TodoAdd/>
        </div>
        <div className="row">
          <TodoList/>
        </div>
      </div>
    </Provider>
  )
}

export default App
