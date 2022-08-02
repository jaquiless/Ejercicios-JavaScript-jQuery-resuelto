var estadoBombilla = false;
var tamanoBombilla = 420;
var cantidadLuz = 1;

function bombilla() {
  if (estadoBombilla == false) {
    estadoBombilla = true;
    document.getElementById("bombilla").innerHTML =
      " <img src='img/on.jpg' id='bulb'>";
    document.getElementById("interruptor").innerHTML =
      "<img src='img/bon.jpg' onclick='bombilla()'></img>";
  } else {
    estadoBombilla = false;
    document.getElementById("bombilla").innerHTML =
      " <img src='img/off.jpg' id='bulb'>";
    document.getElementById("interruptor").innerHTML =
      "<img src='img/boff.jpg' onclick='bombilla()'></img>";
  }
  actualizaBombilla();
  actualizaLuzBombilla();
}

function outputUpdate(selector, valor) {
  let texto = "";
  if (selector == "#bZoom") {
    texte = "Light bulb ZOOM " + valor;
    tamanoBombilla = valor * 60;
    actualizaBombilla();
  } else {
    texto = "Light level " + valor;
    cantidadLuz = valor / 10 + 0.3;
    actualizaLuzBombilla();
  }
  //alert (selector + " " +texte);
  document.querySelector(selector).value = texte;
}

function actualizaBombilla() {
  var img = document.getElementById("bulb");
  img.width = tamanoBombilla;
}

function actualizaLuzBombilla() {
  var element = document.getElementById("bulb");
  element.style.opacity = cantidadLuz;
}
