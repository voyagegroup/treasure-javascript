class MultiplicatorError extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b
  } else {
    throw new MultiplicatorError('Oops...')
  }
}

function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b)
  } catch (e) {
    if (e instanceof MultiplicatorError) {
      return reliableMultiply(a, b)
    }
  }
  // code here
}

console.log(reliableMultiply(4, 4))
