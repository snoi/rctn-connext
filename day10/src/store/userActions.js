exports.changeName = text => ({
  type: 'CHANGE_NAME',
  text
})

exports.login = () => ({
  type: 'LOGIN',
  login: true
})

exports.logout = () => ({
  type: 'LOGOUT',
  login: false
})