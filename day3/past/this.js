class Component { 
  constructor (name) {
    this.name = name
  }

  render () {
    const tag = '<h1>'
    return tag + this.name + tag
  }
}

class MyComponent extends Component {
  constructor (name, tag) {
    super(name)

    this.tag = tag
  }

  render () {
    return this.tag + this.name + this.tag
  }
}

const myComponent = new MyComponent('MyComponent','<p>')

console.log(myComponent.render())