const obj = {
  nama: 'asdasd',
  kelas: 1
}
obj[el] = 'alamat palsu'

Reflect.deleteProperty(obj, 'nama')

console.log(obj)
