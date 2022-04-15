let myName: string = "Pack";

myName = "Yuri";

//? Código verboso
let age: number = 22;
let existsFlag: boolean = false;
let language: string = "JavaScript";

//? Código mais simples
//* O TypeScript se não passarmos o tipo da váriavel ele irá fazer isso
//* Em tempo de compilação
let firstName = "Yuri"; // String

//* Se quisermos declarar váriaveis e não inicializarmos com um valor
//* é recomendavel que atribui-lhe um tipo, como mostra o código a seguir:
//! Se não especificarmos um tipo para uma váriavel, ela será automaticamente
//! tipada com any que significa que poderá receber qualquer valor, como no JS.
let favoriteLanguage: string;
let langs = ["JavaScript", "TypeScript", "Java"];

favoriteLanguage = langs[0];
