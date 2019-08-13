class MultiplicatorError extends Error {
  constructor(...args) {
    super(...args)
    this.name = args[0]
  }
}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorError("Oops...");
  }
}

function reliableMultiply(a, b) {
  try{
    return primitiveMultiply(a, b);
  }catch(err){
    if (err instanceof MultiplicatorError) {
      return err.name
    }
  }
}

console.log(reliableMultiply(4, 4));
