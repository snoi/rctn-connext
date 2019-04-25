import Component from './Component'
import superagent from 'superagent'

class MyComponent extends Component {
  constructor (name, tag) {
    super(name)

    this.tag = tag
  }

  render2 () {
    const hasil = superagent.get('https://swapi.co/api/vehicles/')
      .then(response => {
        return response.body.results[1]
      })
      .then(body => {
        console.log(body.name, 'promise')
      })
      .catch(err => {
        console.log(err)
      })

    console.log('WKWKWK')
  }

  async render () {
    try {
      const hasil = await superagent.get('https://swapi.co/api/vehicles/')

      console.log(hasil.body.results[0].name, 'async')
    } catch (error) {
      console.log(error)
    }

    console.log('HAHAHA')
  }
}

export default MyComponent