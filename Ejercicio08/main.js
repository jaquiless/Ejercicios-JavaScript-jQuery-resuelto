//Paso 1
let mesDelAno = 12;
switch (mesDelAno) {
  case 1:
    console.log("enero");
    break;
  case 2:
    console.log("febrero");
    break;
  case 3:
    console.log("marzo");
    break;
  case 4:
    console.log("abril");
    break;
  case 5:
    console.log("mayo");
    break;
  case 6:
    console.log("junio");
    break;
  case 7:
    console.log("julio");
    break;
  case 8:
    console.log("agosto");
    break;
  case 9:
    console.log("setiembre");
    break;
  case 10:
    console.log("octubre");
    break;
  case 11:
    console.log("noviembre");
    break;
  case 12:
    console.log("diciembre");
    break;
  default:
    console.error("ERROR: no es un mes del año (solo del 1 al 12)");
    break;
}

//Paso 2
let numeros = "tres";
switch (numeros) {
  case "uno":
    console.log("1");
    break;
  case "dos":
    console.log("2");
    break;
  case "tres":
    console.log("3");
    break;
  case "cuatro":
    console.log("4");
    break;
  case "cinco":
    console.log("5");
    break;
  default:
    console.error("ERROR: no es un numero del uno al cinco");
    break;
}
