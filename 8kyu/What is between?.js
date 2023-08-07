/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/
function between(a, b) {
  const result = []; // Создаем пустой массив для хранения результата

  // Используем цикл for для генерации чисел между a и b (включительно)
  for (let i = a; i <= b; i++) {
    result.push(i); // Добавляем текущее число i в массив result
  }

  return result; // Возвращаем массив result с числами
}
