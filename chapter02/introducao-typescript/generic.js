//* Outro recurso eficaz do TypeScript, e útil em estruturas de dados e algoritmos
//* é o conceito de genéricos (generic).
//TODO: Vamos modificar a interface Comparable para que possamos definir
//TODO: o tipo do objeto que o método compareTo deve receber como argumento:
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
var teste;
compare.compareTo(teste.age);
