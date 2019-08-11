class MultiplicatorError extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorError("Oops...");
  }
}

function reliableMultiply(a, b) {
  // code here
  return primitiveMultiply(a, b);
}

console.log(reliableMultiply(4, 4));
