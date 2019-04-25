const arr2 = ['kelas', 'klub']
const arr = ['no', 'nama', 'npm', ...arr2]

const cobaSpread = (p1,p2,p3,p4,p5) => {
  console.log(p1,p2,p3,p4,p5)
}

const obj = {
  nama: 'test',
  tempat: 'tost'
}

const data = {
  ...obj,
  kelas: 1,
  lokal: 3
}

console.log(data)