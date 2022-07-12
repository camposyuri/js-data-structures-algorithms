let numbers = [1, 2, 3, 4, 5, 6, 8];
let aEntries = numbers.entries();

for (let n of aEntries) {
  console.log(n);
}

const aKeys = numbers.keys();
console.log(aKeys.next());

const aValues = numbers.values();
console.log(aValues.next());

let numbers2 = Array.from(numbers);
console.log(numbers2);

let evens = Array.from(numbers, (x) => x % 2 === 0);
console.log(evens);

let numbers3 = Array.of(1);
console.log(numbers3);

let numbers4 = Array.of(1, 2, 3, 4, 5, 6, 7);
console.log(numbers4);

let numbersCopy = Array.of(...numbers4);
console.log(numbersCopy);

let arrFill = numbersCopy.fill(0);
console.log(arrFill);

let arrFill2 = numbersCopy.fill(7, 1);
console.log(arrFill2);

let arrFill3 = numbers.fill(7, 2, 5);
console.log(arrFill3);

let ones = Array(6).fill(1);
console.log(ones);

let copyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let arrCopy = copyArray.copyWithin(9, 3, 6);
console.log(arrCopy);

let sortNumbers = [1, 8, 975, 58, 4, 5, 6, 2, 3, 7, 10, 18, 29, 20];
console.log(sortNumbers.sort((a, b) => a - b));

const friends = [
  {
    name: "John",
    age: 30,
  },
  { name: "Ana", age: 20 },
  { name: "Chris", age: 25 },
];

const comparePerson = (a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
};

console.log(friends.sort(comparePerson));

const names = ["Ana", "John", "ana", "john"];
console.log(
  names.sort((a, b) => {
    if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) return -1;
    if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) return 1;
    return 0;
  })
);

const numbersFind = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const multipleOf13 = (element, index, array) => element % 13 === 0;

console.log(numbersFind.find(multipleOf13));
console.log(numbersFind.findIndex(multipleOf13));

console.log(numbersFind.includes(15));
console.log(numbersFind.includes(20));

let numbers5 = [1, 2, 3, 4, 5, 6];
console.log(numbers5.includes(4, 4));

console.log(numbers5.toString());

let numbersStrings = numbers.join("-");
console.log(numbersStrings);
