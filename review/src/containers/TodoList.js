import React from 'react'
import { connect } from 'react-redux'
import { deleteTask } from '../store'

const TodoList = props => (
  <div className="well">
    <p>
      Total: {props.todo.total}
    </p>
    {
      props.todo.tasks.map((task, index) => (
        <div
          key={index}
          onDoubleClick={() => {
            props.deleteTask(index)
          }}
          className="alert alert-primary">{task.name}
        </div>
      ))
    }
  </div>
)


const mapStateToProps = state => ({
  todo: state
})

const mapDispatchToProps = dispatch => ({
  deleteTask: index => dispatch(deleteTask(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)