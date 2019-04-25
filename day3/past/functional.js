const data = [
  {
    nama: 'A',
    kelas: 10
  },
  {
    nama: 'B',
    kelas: 11
  },
  {
    nama: 'C',
    kelas: 11
  },
  {
    nama: 'D',
    kelas: 12
  },
  {
    nama: 'E',
    kelas: 13
  },
]

const arrKelas = data.map(d => {
  return {
    kelas: d.kelas
  }
})

const arrKelas11Keatas = arrKelas.filter(
  function({ kelas }) {
    if (kelas > 10) {
      return true
    } else {
      return false
    }
  }
)

const totalKelas = arrKelas11Keatas.reduce(
  (previous, { kelas }) => {
    console.log(previous, kelas)

    return previous + kelas
  },0
)

console.log(totalKelas)
