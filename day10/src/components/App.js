import React from 'react'
import store from '../store'
import { Provider } from 'react-redux' 

import User from './User'

function App() {
  return (
    <Provider store={store}>
      <User/>
    </Provider>
  );
}



export default App;
