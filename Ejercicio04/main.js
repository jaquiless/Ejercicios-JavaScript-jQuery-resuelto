//Punto 1
const miNombre = (name) => {
  return name;
};
//Llamada de la arrow function
console.log(miNombre("Javier Quiles Gómez"));

//Punto 2
function boleano(dato) {
  if (typeof(dato = Boolean)) {
    console.log("true");
  } else {
    console.log("false");
  }
}
// llamada a la funcion
boleano();
//Punto 3
const ilimtados = function (...valores) {
  valores.forEach((numer) => {
    console.log(numer);
  });
};
//llamada a la funcion
ilimtados("1", "2", "3", "4", "5");
