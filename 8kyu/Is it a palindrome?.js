/*
Write a function that checks if a given string (case insensitive) is a palindrome. 
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, 
such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".
*/
function isPalindrome(x) {
  const cleanedString = x.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
}
/*
Функция isPalindrome принимает строку x в качестве входного значения.
Сначала она очищает строку, приводя ее к нижнему регистру и удаляя все символы, кроме букв и цифр, с помощью регулярного выражения. 
Затем создается обратная версия очищенной строки, разбивая ее на массив, переворачивая массив и объединяя элементы обратно в строку.
Наконец, функция проверяет, равна ли очищенная строка обратной строке, и возвращает true, если они равны, что указывает на то, 
что введенная строка является палиндромом. В противном случае она возвращает false.
*/
// В виде стрелочной функции:
const isPalindrome = x => {
  const cleanedString = x.toLowerCase().replace(/[^a-zа-я0-9]/g, "");
  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
};
