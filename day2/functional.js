const array1 = [
  {
    nama: 'asdasd',
    kelas: 1
  },
  {
    nama: 'are3rws',
    kelas: 2
  },
  {
    nama: '989isdfc',
    kelas: 3
  }
]

const newArr = array1.map(value => {
  return value.nama
})

const filterArr = array1.filter(({ kelas }) => kelas === 1)

console.log(filterArr)