// Variables globales
var string = "Hola Mundo";
let number = 123.45;
var boolean = true;
var nulll = null;
var undefined;
const symbol= Symbol('+');
const object= {tienda: 'amazon'};
let array= [1, "comprar en amazon", true];

const despedida = function(){
    //Variable local
    const nombre ="adios";
    console.log(nombre);
};

console.log(typeof (string));
console.log(typeof (number));
console.log(typeof (boolean));
console.log(typeof (nulll));
console.log(typeof (undefined));
console.log(typeof (symbol.description));
console.log(typeof (object));
console.log(typeof (array));
console.log(typeof despedida());

console.log(string);
console.log(number);
console.log(boolean);
console.log(nulll);
console.log(undefined);
console.log(symbol.description);
console.log(object);
console.log(array);
console.log(despedida());


