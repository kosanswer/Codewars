function countBy(x, n) {
   let result = [x];
  for (let i = 2; i <= n; i++) {
    if (x === 1) {
      result.push(i);
    } else {
      result.push(i * x);
    }
  }
  return result;
}
// or
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
// or 
const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)
