// calculadora.js

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}
function multiplicar(a,b){
  return a * b;
}
function dividir(a,b){
  if(b == 0)
    return  "No se puede dividir entre 0";
  else
  return a / b;
}
function raiz(a){

  if (a <=0)
    return "No existen las raices negativas"
    else
  return Math.sqrt(a);
}

module.exports = { sumar,restar,multiplicar,dividir,raiz };