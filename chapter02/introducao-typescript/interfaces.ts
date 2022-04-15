//* Em TypeScript há dois conceitos de interfaces
//* O primeiro está relacionado atribuição de um tipo a uma variável.

interface Person {
  name: string;
  age: number;
}

//? Permite que os editores com VSCode tenham preenchimento automático
//? com o IntelliSense
const printName = (person: Person) => console.log(person.name);

//* O primeiro conceito de interface em TypeScript é que uma interface deve existir
//* É uma descrição de atributos e de métodos que um objeto deve ter.

const john = { name: "John", age: 21 };
const mary = { name: "Mary", age: 21, phone: "123-45678" };

printName(john);

//TODO: A variável mary tem name e age, mas tem também informações em phone.
//* O TypeScript tem um conceito chamado duck typing (tipagem pato).
//* Se algo se parece com um pato, nada como um pato, faz quack como um pato.
//* então deve ser um pato!
//* A variável mary se comporta como a interface Person, portanto é uma Person,
//* Esse é um recurso eficaz do TypeScript.
printName(mary);

//* Segundo conceito de interface no TypeScript está relacionado à OO
//* Uma interface é um contrato.
//* Nele podemos definir comportamentos que as classes ou as interfaces que
//* implementarão esse contrato deve ter.
//* Considere o padrão ECMASCRIpt. É uma interface para a linguagem JavaScript
//* Ela diz que o JS quais funcionalidades ela deve ter, mas cada navegador
//* pode ter uma implementação diferentes para elas.

interface Comparable {
  compareTo(b): number;
}

class MyObject implements Comparable {
  age: number;
  compareTo(b): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}

const compare = new MyObject();
console.log(compare.compareTo(11));
