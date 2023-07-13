function digitize(number) {
  if (number === 0) {
    return [0];
  }

  const digits = [];
  while (number > 0) {
    const digit = number % 10;
    digits.push(digit);
    number = Math.floor(number / 10);
  }

  return digits;
}
