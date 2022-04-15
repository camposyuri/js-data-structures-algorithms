//* Em TypeScript há dois conceitos de interfaces
//* O primeiro está relacionado atribuição de um tipo a uma variável.
//? Permite que os editores com VSCode tenham preenchimento automático
//? com o IntelliSense
var printName = function (person) { return console.log(person.name); };
//* O primeiro conceito de interface em TypeScript é que uma interface deve existir
//* É uma descrição de atributos e de métodos que um objeto deve ter.
var john = { name: "John", age: 21 };
var mary = { name: "Mary", age: 21, phone: "123-45678" };
printName(john);
//TODO: A variável mary tem name e age, mas tem também informações em phone.
//* O TypeScript tem um conceito chamado duck typing (tipagem pato).
//* Se algo se parece com um pato, nada como um pato, faz quack como um pato.
//* então deve ser um pato!
//* A variável mary se comporta como a interface Person, portanto é uma Person,
//* Esse é um recurso eficaz do TypeScript.
printName(mary);
var MyObject = /** @class */ (function () {
    function MyObject() {
    }
    MyObject.prototype.compareTo = function (b) {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    };
    return MyObject;
}());
var compare = new MyObject();
console.log(compare.compareTo(11));
