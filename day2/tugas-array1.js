/**
 * [
 *   {
 *     no: 1,
 *     nama: 'akbar',
 *     npm: '12345'
 *   },
 *   {
 *     no: 2,
 *     nama: 'budi',
 *     npm: '23456'
 *   }
 * ]
 */

const arr = [
  ['no', 'nama', 'npm'], // 0
  [1, 'akbar', '12345'], // 1
  [2, 'budi', '23456'],  // 2
]

const hasil = []

const [header1, header2, header3] = arr[0]

for (let i = 1; i < arr.length; i++) {
  const [data1, data2, data3] = arr[i]

  const obj = {}

  obj[header1] = data1
  obj[header2] = data2
  obj[header3] = data3

  hasil.push(obj)
}
console.log(hasil)
