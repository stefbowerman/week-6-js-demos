const num = 2
function onClick() {
  function square(num) {
    return num * num
  }

  return square(5)
}

console.log(onClick())