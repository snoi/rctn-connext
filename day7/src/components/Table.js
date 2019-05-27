import React from 'react'

export default ({ headers, data}) => (
  <table className="table">
    <thead>
      <tr>
        {
          headers.map(header => <th key={header}>{header}</th>)
        }
      </tr>
    </thead>
    <tbody>
      {
        data.map(d => (
          <tr key={d.name}>
            <td>{d.name}</td>
            <td>{d.gender}</td>
            <td>{d.hair_color}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
)