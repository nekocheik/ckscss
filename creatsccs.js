let array =[
  0,
  1,
]

for (let i = 2; i < 21; i++) {
  array[i] = array[i-1] + array[i-2]
}



console.log(array)