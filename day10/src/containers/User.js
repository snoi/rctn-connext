import React from 'react'
import faker from 'faker'
import { connect } from 'react-redux'
import { changeName, login, logout } from '../store/user'

const User = props => (
  <div>
    {props.user.name}
    <button
      onClick={() => {
        props.changeName(faker.name.findName())
      }}>Ganti Nama</button>
    {
      props.user.login 
        ? <button
            onClick={props.logout}>
            logout</button>
        : <button
            onClick={props.login}>
            login</button>
    }
  </div>
)

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  changeName: name => dispatch(changeName(name)),
  login: () => dispatch(login()),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(User)