
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let min = numbers[0];

for (i of numbers) {
  if (min > i) {
  min = i;
  }
}
console.log(min)
