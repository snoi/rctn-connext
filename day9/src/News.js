import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
export default class News extends Component {
  state = {
    allSources: []
  }

  componentDidMount () {
    const url = 'https://newsapi.org/v2/sources?' +
          'apiKey=e61bf626e4aa4669909c783e6a766f66'

    fetch(url)
      .then(response => response.json())
      .then(result => {
        this.setState({
          allSources: result.sources
        })
      })
      .catch(error => alert(error.message))
  }

  render () {
    const { allSources } = this.state

    return (
      <div>
      <h2>All News</h2>
      {
        allSources.map(
          (news, index) => 
            <SourceCard
              key={index}
              title={news.name}
              content={news.description}
              id={news.id} />
        )
      }
      </div>
    )
  }
}

const SourceCard = props => (
  <div>
    <h3>{props.title}</h3>
    <p>{props.content}</p>
    <Link to={`/news/${props.id}`}>
      <button>Read Headlines</button>
    </Link>
  </div>
)