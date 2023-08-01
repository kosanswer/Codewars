/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/
function addLength(str) {
  return str.split(' ').map(word => `${word} ${word.length}`);
}
/*
Функция addLength разделяет входную строку str на отдельные слова, используя пробел в качестве разделителя с помощью метода split().
Затем она использует метод map() для создания нового массива, в котором каждому слову добавляется его длина с пробелом.
Новый массив с результатами возвращается.
*/
