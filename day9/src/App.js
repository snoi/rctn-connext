import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './Home'
import About from './About'
import News from './News'
import NewsDetail from './NewsDetail'

function App(props) {
  return (
    <Router>
      <h1>React & React Native Course</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/news'>News</Link>
        </li>
        <li>
          <Link to='/asdada'>404</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/news' exact component={News} />
        <Route path='/news/:source' component={NewsDetail} />
        <Route 
          render={props => {
            const token = localStorage.getItem('token')

            if (token) {
              return <h1>Welcome!</h1>
            } else {
              props.history.push('/')
            }
          }}/>
      </Switch>
      <hr />
      <p>Copyright 2019</p>
    </Router>
  )
}

export default App
