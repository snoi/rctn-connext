import React from 'react'
import { connect } from 'react-redux'
import News from '../components/News'
import { getNews } from '../store/news'

const NewsList = props => {
  return (
    <div>
      <button
        onClick={props.getNews} >
        get news
      </button>
      <div>
        {
          props.news.map(
            n => <News {...n} />
          )
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  news: state.news
})

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(getNews())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)