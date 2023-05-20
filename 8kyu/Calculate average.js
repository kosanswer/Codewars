/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/
function findAverage(array) {
  if (array.length !== 0 ) {
    var result = array.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0);
    var average = result / array.length;
    return average
  } else {
    return 0;
  }
}
