import React from 'react'

export default props => (
  <div>
    <h1>{props.title}</h1>
    <hr />
    <h3>{props.author}</h3>
    <p>{props.description}</p>
    <a href={props.url}>read more...</a>
  </div>
)