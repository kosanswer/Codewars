function makeNegative(num) {
   if(num <= 0){
    return num;
  }else{
    return -Math.abs(num);
  }
}
//or
function makeNegative(num) {
  return -Math.abs(num);
}
