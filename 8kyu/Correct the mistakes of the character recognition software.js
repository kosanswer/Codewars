/*Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/
///////////////////////////////
function correct(string)
{
	// Заменяем ошибочные символы
  const correctedText = string
    .replace(/5/g, 'S')
    .replace(/0/g, 'O')
    .replace(/1/g, 'I');

  return correctedText;
}
//////////////////////////
// replace метод
/* Метод `replace()` в JavaScript используется для замены части строки на другую строку или паттерн на новую строку. 
Он выполняет замену только первого совпадения или всех совпадений в зависимости от использования регулярного выражения и флагов.

Вот синтаксис метода `replace()`:

str.replace(searchValue, replaceValue)
где:
- `str` - исходная строка, в которой нужно выполнить замену.
- `searchValue` - значение, которое нужно найти для замены. Это может быть либо строка, либо регулярное выражение.
- `replaceValue` - новое значение, на которое нужно заменить найденное значение. Это может быть строка или функция.

Если `searchValue` является строкой, `replace()` заменит только первое совпадение. 
Если `searchValue` является регулярным выражением с флагом `g` (глобальный поиск), `replace()` заменит все совпадения.

Примеры использования метода `replace()`:

const str = 'Hello, World!';

const newStr = str.replace('Hello', 'Hi');
console.log(newStr);  // Выводит 'Hi, World!'

const replacedStr = str.replace(/o/g, 'a');
console.log(replacedStr);  // Выводит 'Hella, Warld!'

Во втором примере мы использовали регулярное выражение `/o/g` с флагом `g`, чтобы заменить все вхождения символа 'o' на символ 'a' в строке.
Метод `replace()` также может использовать функцию в качестве `replaceValue`. 
В этом случае функция будет вызываться для каждого совпадения, и она должна вернуть новую строку для замены. Пример:

const str = 'Hello, World!';

const replacedStr = str.replace(/o/g, function(match) {
  return match.toUpperCase();
});

console.log(replacedStr);  // Выводит 'HellO, WOrld!'

В этом примере мы использовали функцию, которая принимает совпавшую подстроку и возвращает ее в верхнем регистре.

Метод `replace()` не изменяет исходную строку, а возвращает новую строку с выполненными заменами. 
Если вам нужно изменить исходную строку, необходимо присвоить результат замены переменной.
*/
