import React, { Component } from 'react'
import axios from 'axios'

import Table from './components/Table'
import SearchBar from './components/SearchBar'


class App extends Component {
  constructor (props) {
    super()
    this.state = {
      people: [],
      keyword: '',
      loading: false
    }
  }

  async getPeople (keyword) {
    try {
      this.setState({
        loading: true
      })
      const uri = keyword 
        ? 'https://swapi.co/api/people/?search='+keyword 
        : 'https://swapi.co/api/people/'

        console.log(uri)
      const result = await axios.get(uri)
      
      this.setState({
        loading: false
      })

      return result.data.results
    } catch (error) {
      this.setState({
        loading: 'error'
      })
    }
    
  }

  async changeKeyword (newKeyword) {
    if (
      this.state.keyword.toLowerCase() !== newKeyword.toLowerCase()
    ) {
      this.setState({
        keyword: newKeyword,
        people: await this.getPeople(newKeyword)
      })
    } 
  }

  async componentDidMount () {
    this.setState({
      people: await this.getPeople(this.state.keyword)
    })
  }

  render () {
    return (
      <div className="container">
        <h1>Star Wars Characters</h1>
        <SearchBar
          changeKeyword={this.changeKeyword.bind(this)}
          />
        {
          this.state.loading && <p>Loading...</p>
        }
        <Table 
          headers={['Name', 'Gender', 'Hair Color']}
          data={this.state.people}
        />

      </div>
    )
  }
}

export default App;
