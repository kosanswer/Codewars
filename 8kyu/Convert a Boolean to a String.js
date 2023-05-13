function booleanToString(b){
  if (b) {
  return 'true'
  }
 else {
   return 'false'
 }
}
// second solution
function booleanToString(b){
  return b.toString();
}
// third solution
function booleanToString(b){
  return b ? 'true' : 'false';
}
// or 
function booleanToString(b){
  return String(b);
}
