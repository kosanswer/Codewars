/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)


*/
function sumStr(a, b) {
  // Convert input strings to integers, treating empty strings as 0
  const numA = parseInt(a) || 0;
  const numB = parseInt(b) || 0;

  // Calculate the sum
  const sum = numA + numB;

  // Convert the sum to a string and return it
  return sum.toString();
}
