// Add your functions here
function map(obj, c) {
    const array = []
    for (const key in obj) {
        array.push(c(obj[key]))
    }
    return array
}

function reduce(obj, c, accumulator) {
    const keys = Object.keys(obj)
    let i = 1
  
    if (accumulator) {
      i = 0
    } else {
      accumulator = obj[keys[0]]
    }
  
    for (i; i < keys.length; i++) {
      accumulator = c(accumulator, obj[keys[i]])
    }
    return accumulator
  }