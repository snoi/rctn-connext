import React, { Component } from 'react'
import './App.css'

import Board from './components/Board'
import Minus from './components/Minus'
import Plus from './components/Plus'

class App extends Component {
  constructor () {
    super()
    this.state = {
      score: 0,
      text: 'halo'
    }
  }

  plusOne () {
    let { score } = this.state
    this.setState({
      score: ++score
    })
  }

  minusOne () {
    let { score } = this.state
    this.setState({
      score: --score
    })
  }

  updateText (element) {
    this.setState({
      text: element.target.value
    })
  }

  render () {
    return (
      <div className="App">
       <Board score={this.state.score} />
       <div className="controller">
         <Minus subtract={this.minusOne.bind(this)} />
         <Plus add={this.plusOne.bind(this)} />
       </div>
       <h1>{this.state.text}</h1>
       <input
        type="text"
        placeholder={this.state.text}
        onChange={this.updateText.bind(this)} />
      </div>
    );
  }
}

export default App;
