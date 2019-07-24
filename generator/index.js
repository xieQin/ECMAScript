function* Generator() {
  yield 'hello'
  yield 'world'
  return 'end'
}

let A = Generator()

setTimeout(() => {
  console.log(A.next(), '1')
  console.log(A.next(), '2')
  console.log(A.next(), '3')
}, 0)
console.log(A.next(), '0')
