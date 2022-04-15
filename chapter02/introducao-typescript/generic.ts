//* Outro recurso eficaz do TypeScript, e útil em estruturas de dados e algoritmos
//* é o conceito de genéricos (generic).
//TODO: Vamos modificar a interface Comparable para que possamos definir
//TODO: o tipo do objeto que o método compareTo deve receber como argumento:

//? Ao passar o tipo T dinamicamente para a interface Comparable
//? usando o operador <>, podemos especificar o tipo do argumento da função compareTo
interface Comparable<T> {
  compareTo(b: T): number;
}

class MyObject implements Comparable<MyObject> {
  age: number;
  compareTo(b: MyObject): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}

const compare = new MyObject();
let teste: MyObject = { age: 22 };
compare.compareTo();
