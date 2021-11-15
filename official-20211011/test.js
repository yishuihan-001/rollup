try {
  let name = 'test'
  console.log('===> 1', nam)
} catch (error) {
  console.log('===> 2', error)
}

try {
  undefined.map(v => v)
} catch (error) {
  console.log('===> 异常', error)
}

try {
  setTimeout(() => {
    undefined.map(v => v)
  }, 1000)
} catch (error) {
  console.log('===> 异常', error)
}
