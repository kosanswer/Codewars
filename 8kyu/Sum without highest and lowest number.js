/*Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.*/
///////////////////////////////////////////////////////////
function sumArray(arr) {
  if (!arr || arr.length <= 1) {
    return 0;
  }

  // Find the highest and lowest elements
  const sortedArr = arr.sort((a, b) => a - b);
  const highest = sortedArr[sortedArr.length - 1];
  const lowest = sortedArr[0];

  // Sum all elements except the highest and lowest
  const sum = arr.reduce((total, num) => total + num, 0) - highest - lowest;

  return sum;
}
