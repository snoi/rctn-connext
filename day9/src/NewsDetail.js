import React from 'react'

export default class NewsDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      allHeadlines: []
    }
  }

  componentDidMount () {
    const {
      match: {
        params: {
          source
        }
      }
    } = this.props
    const url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=e61bf626e4aa4669909c783e6a766f66`

    console.log(url)

    fetch(url)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.setState({
          allHeadlines: result.articles
        })
      })
      .catch(error => alert(error.message))
  }

  render () {
    const { allHeadlines } = this.state

    return (
      <div>
        <p>{this.props.match.params.source}</p>
        {
          allHeadlines.map(
            (headline, index) =>
              <NewsCard
                key={index}
                {...headline} />
          )
        }
      </div>
    )
  }
}

const NewsCard = props => (
  <div>
    <h3
      style={{ color: 'red '}}>
      {props.title}</h3>
    <img
      style={{width: '300px'}}
      src={props.urlToImage} 
      alt={props.title}/>
    <p>
      {props.description}
    </p>
    <a 
      href={props.url}
      // eslint-disable-next-line react/jsx-no-target-blank
      target="_blank"
      rel="noopener noreferer">Read news</a>
  </div>
)