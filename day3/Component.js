class Component { 
  constructor (name) {
    this.name = name
  }

  render () {
    const tag = '<h2>'
    return tag + this.name + tag
  }
}

export default Component