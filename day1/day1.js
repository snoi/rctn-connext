const string1 = 'hello'
const string2 = 'world'

const random = () => Math.random()

const string3 = `${string1} ${string2} ${random()} ${ 1 + 1 * 0 }`

console.log(string3)

console.log('--------------')

const someJSON = `{
  "input": {
    "keyword": "test",
    "limit": 10,
    "skip: 0
  }
}`

console.log(someJSON)
