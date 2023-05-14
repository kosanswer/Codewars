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
