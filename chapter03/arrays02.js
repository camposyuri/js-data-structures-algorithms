const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];

let numbersConcat = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbersConcat);

const isEven = (number) => number % 2 === 0;

let num = [1, 2, 3, 4, 5];

console.log(num.every(isEven));
console.log(num.some(isEven));
console.log("----------");
num.forEach((item) => console.log(item % 2 === 0));

const sumNumbers = num.reduce((acc, item) => acc + item);
console.log(sumNumbers);

for (const n of num) {
  console.log(n % 2 === 0 ? "even" : "odd");
}

const carro = {
  marca: "Fiat",
  roda: 4,
};

for (const c in carro) {
  console.log(c);
}

let iterator = num[Symbol.iterator]();
for (const n of iterator) {
  console.log(n);
}
