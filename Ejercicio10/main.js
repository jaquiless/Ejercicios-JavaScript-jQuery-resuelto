//Paso 1
function cambioletra(texto) {
  var nuevotexto = texto.replace(/a/g, "o");
  console.log(nuevotexto);
  return nuevotexto;
}
cambioletra("alcaparra");

//Paso 2
function aCa(texto2) {
  var nuevotexto2 = texto2.startsWith("aca");
  console.log(nuevotexto2);
  return nuevotexto2;
}
aCa("academia");
aCa("escuela");

//Paso 3
function saludo(texto3) {
  var nuevotexto3 = texto3.repeat(3);
  console.log(nuevotexto3);
  return nuevotexto3;
}
saludo("hola");
