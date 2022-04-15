//? Importando as duas que vamos utilizar nesse arquivo.
import * as area from "./17-CalcArea.js";

import Book from "./17-Book.js";

const myBook = new Book("some title");

myBook.printTitle();

console.log(area.circleArea(2));
console.log(area.squareArea(2));
