interface Person {
  name: string;
  age: number;
}

const friendsArr = [
  { name: "John", age: 30 },
  { name: "Ana", age: 20 },
  { name: "Chris", age: 25 },
];

const comparer = (a: Person, b: Person) => {
  if (a.age > b.age) return -1;
  if (a.age < b.age) return 1;
  return 0;
};

console.log(friendsArr.sort(comparer));
