import React from 'react'

export default () => (
  <div>
    <h1>Home</h1>
    <button
      onClick={() => {
        localStorage.setItem('token', '1233454')
      }}>
      login
    </button>
    <button
      onClick={() => {
        localStorage.removeItem('token')
      }}
      >
      logout
    </button>
  </div>
)