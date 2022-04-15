//? Importando as duas que vamos utilizar nesse arquivo.
import { circleArea, squareArea } from "./17-CalcArea";

import Book from "./17-Book";

const myBook = new Book("Estrutura de Dados e algoritmos com JavaScript");

myBook.printTitle();

console.log(circleArea(2));
console.log(squareArea(2));