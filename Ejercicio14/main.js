//Paso 1
var cerveza = ["🍔", "🌯", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥩"];
var change = cerveza.splice(4, 5, "🍺", "🍺", "🍺", "🍺", "🍺");
console.log(cerveza);

//Paso 2
var pizzas = ["🍕", "🍕", "🍍", "🍕", "🍕"];
console.log(pizzas.includes("🍍"));

//Paso 3
var change2 = pizzas.splice(2, 1);
console.log(pizzas);

//Paso 4
var fresas = ["🍓", "🍋", "🍓", "🍋", "🍓"];
let champiñon = fresas.map(e=> e.replace(/🍓/g, '🍄'));
console.log(champiñon);

//Paso 5
var acalorado=['🌶️','🥛','🌶️','🥛','🌶️','🥛'];
console.log(acalorado.splice(1, 0, '🥵'));
console.log(acalorado.splice(4, 0, '🥵'));
console.log(acalorado.splice(7, 0, '🥵'));
console.log(acalorado);

//Paso 6
var acalorado=['🎴','🎴','🎴','🃏','🎴','🎴','🎴'];
console.log(acalorado.splice(1, 0, '🃏'));
console.log(acalorado.splice(3, 0, '🃏'));
console.log(acalorado.splice(7, 0, '🃏'));
console.log(acalorado.splice(9, 0, '🃏'));
console.log(acalorado);



