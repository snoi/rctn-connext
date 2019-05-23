import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../store'

class TodoAdd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      task: ''
    }
  }

  updateTask (element) {
    const task = element.target.value

    this.setState({
      task
    })
  }

  addTask (e) {
    e.preventDefault()

    this.props.addTodo(this.state.task)

    this.setState({
      task: ''
    })
  }

  render () {
    return (
      <div className="jumbotron">
        <form>
          <div className="form-group">
            <label>What do yo want to do?</label>
            <input
              className="form-control" 
              type="text"
              value={this.state.task}
              onChange={this.updateTask.bind(this)}/>
          </div>
          <div className="form-group">
            <button
              className="btn btn-success"
              type="button"
              onClick={this.addTask.bind(this)}>
              Add To Do</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  addTodo: task => dispatch(addTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd)