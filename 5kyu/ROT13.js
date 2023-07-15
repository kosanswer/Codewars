/*How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"*/
//////////////////////////////////////////////////
function rot13(str) {
  let decoded = '';

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters (A-Z)
      decoded += String.fromCharCode((charCode - 65 + 13) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters (a-z)
      decoded += String.fromCharCode((charCode - 97 + 13) % 26 + 97);
    } else {
      // Non-alphabetic characters
      decoded += str[i];
    }
  }

  return decoded;
}
