/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
*/
function otherAngle(a, b) {
  const sumOfAngles = a + b;
  const thirdAngle = 180 - sumOfAngles;
  return thirdAngle;
}
////////////////////////////////////
const otherAngle = (a, b) => 180 - a - b
