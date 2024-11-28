// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a,b,c) {
let largest = 0;

(a > b && a > c) ? largest = a : (a < b && b > c) ? largest = b :  (a < c && b < c) ? largest = c : largest = a

return largest
}
