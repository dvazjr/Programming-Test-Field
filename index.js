function double(x) {
  return x * 2
}

function triple(x) {
  return x * 3
}

function run(operation, x) {
  if (operation === "double") {
    return double(x)
  }
  if (operation === "triple") {
    return triple(x)
  }
}

console.log(run("double", 4))
console.log(run("triple", 5))