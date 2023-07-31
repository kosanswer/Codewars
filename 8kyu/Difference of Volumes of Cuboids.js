/*
In this simple exercise, you will create a program that will take two lists of integers, 
a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. 
You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.


*/
const findDifference = (a, b) => Math.abs(a.reduce((acc, val) => acc * val) - b.reduce((acc, val) => acc * val));

/*
Вы можете вычислить объем каждого кубоида, используя формулу `длина * ширина * высота`, а затем найти разницу их объемов. Вот решение в одну строку
В этой однострочной функции:

1. Мы используем синтаксис стрелочной функции `(a, b) => ...` для определения функции с двумя параметрами `a` и `b`.

2. Мы используем метод `reduce` на массивах `a` и `b` для вычисления объема каждого кубоида.

3. Для кубоида `a`, `a.reduce((acc, val) => acc * val)` перемножает все элементы массива `a`, что дает объем кубоида `a`.

4. Для кубоида `b`, `b.reduce((acc, val) => acc * val)` делает то же самое и дает объем кубоида `b`.

5. Наконец, мы используем `Math.abs(...)` для получения абсолютного значения разницы между объемами `a` и `b`, 
что гарантирует, что результат всегда будет положительным.

Например, вызов `findDifference([2, 2, 3], [5, 4, 1])` вернет 8, как объяснено в условии задачи.
*/
