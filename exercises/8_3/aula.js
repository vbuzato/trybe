const numbers = [32, 15, 3, 2, -5, 56, 10];

// const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
// console.log(sumNumbers); // 113

const getSum = (result, number) => {
  // console.log(result); // 32 47 50 52 47 103
  return result + number;
};
const sumNumbers = numbers.reduce(getSum, 0);
console.log(sumNumbers); // 113


// ---------------------------------------------

const numbers2 = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

const bigger = numbers2.reduce(getBigger, 0); // O segundo parâmetro indica um valor inicial para o reduce
console.log(bigger); // 85


// ---------------------------------------------

const numbers3 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEven = (numbers) => {
  return numbers.reduce((result, number) => (number % 2 === 0) ? result + number : result);
};

console.log(sumEven(numbers3));
