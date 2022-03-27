// Write a program which will output in the console the sum of squares of even numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfSquaresOfEvenNumbers = numbers.filter(number => number % -2 === 0)
    .reduce((acc, curr) => acc + curr ** 2, 0)

console.log(sumOfSquaresOfEvenNumbers)
// Output: 220