class MultiplicatorError extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorError("Oops...");
  }
}

let cnt = 0;
function reliableMultiply(a, b) {
  // code here
  try{
    return primitiveMultiply(a, b)
  }
  catch(e) {
    if(e instanceof MultiplicatorError){
      cnt++;
      return reliableMultiply(a, b)
    }
  }

}

console.log(reliableMultiply(4, 4));
console.log(cnt);
