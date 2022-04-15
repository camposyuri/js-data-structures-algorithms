const circleArea = (r) => 3.14 * r ** 2;

const squareArea = (s) => s * s;

//? Significa que estamos expondo as duas funções para outros arquivos
//* Somente membros exportados que são visíveis aos outros módulos ou arquivos
export { circleArea, squareArea };
