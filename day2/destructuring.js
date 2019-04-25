const obj = {
  name: 'john doe',
  position: 'manager',
  staff: [
    'budi',
    'ani',
    'joni'
  ],
  address: {
    street: 'setia budi',
    number: 7
  }
}

const {
  address: {
    street: jalan,
    number: angka
  }
} = obj

console.log(jalan, angka)