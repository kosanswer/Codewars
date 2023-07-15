/*in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range 
[a,b]
[a,b] the function should output an empty list.

90, 100 --> []
Enjoy it!!*/
function sumDigPow(a, b) {
  let eurekaNumbers = [];

  for (let i = a; i <= b; i++) {
    let digits = i.toString().split('');
    let sum = digits.reduce(function (acc, digit, index) {
      return acc + Math.pow(parseInt(digit), index + 1);
    }, 0);

    if (sum === i) {
      eurekaNumbers.push(i);
    }
  }

  return eurekaNumbers;
}
