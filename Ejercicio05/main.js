function tirarMoneda(){
var numero = Math.round(Math.random());

if(numero == 0){
    moneda = 'cruz';
}
else{
moneda ='cara';
}
return moneda;
};
console.log (tirarMoneda());