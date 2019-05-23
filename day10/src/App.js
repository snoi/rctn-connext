import React from 'react'
import store from './store'
import { Provider } from 'react-redux' 

import User from './containers/User'
import NewsList from './containers/NewsList'

function App() {
  return (
    <Provider store={store}>
      <User/>
      <NewsList />
    </Provider>
  )
}



export default App;
