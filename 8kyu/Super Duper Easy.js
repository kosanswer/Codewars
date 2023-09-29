
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x) {
  // Check if x is a string
  if (typeof x === 'string') {
    return "Error";
  }

  // Check if x is a number (or can be converted to a number)
  if (!isNaN(x)) {
    // Perform the calculation: multiply by 50 and increase by 6
    return x * 50 + 6;
  }

  // If x is neither a number nor a string, return "Error"
  return "Error";
}
