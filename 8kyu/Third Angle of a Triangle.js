/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
*/
function otherAngle(a, b) {
  // Check if the input angles are positive integers
  if (a <= 0 || b <= 0 || typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "Invalid input. Please provide positive integers.";
  }

  // Calculate the third angle
  const thirdAngle = 180 - a - b;

  return thirdAngle;
}
