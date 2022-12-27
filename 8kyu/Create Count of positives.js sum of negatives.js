function countPositivesSumNegatives (A) {
  if (!A || !A.length) return []

  let pos = A.filter(x=>x>0),
      neg = A.filter(x=>x<=0)

  return [pos.length, Math.floor(neg.reduce((s,v)=>s+v,0))]
}
// or 
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}
