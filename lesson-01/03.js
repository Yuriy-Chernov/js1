/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;

let targetNum = 20
while(targetNum > 0){
   if (targetNum % 2 == 1) sum = sum + targetNum;

    targetNum--
}

console.log(sum)