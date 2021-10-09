/*Ejercicios de tarea*/



/* Ejercicio 1 */

function rectangulo(base,altura) {
    return base * altura
}

console.log(rectangulo(3,2.5))



/* Ejercicio 2 */

function triangulo(base,altura) {
    return (base * altura)/2 
}

console.log(triangulo(6,3))



/* Ejercicio 3 */

let MarcasDeCelulares = ['Apple', 'Samsung', 'Xiaomi', 'LG']

function largoDelArray(MarcasDeCelulares) {
    return MarcasDeCelulares.length
}

console.log(MarcasDeCelulares)


/* Ejercicio 4 */

function diaSegunNumero(Miercoles) {
    return Miercoles[2]
}
let Miercoles = diaSegunNumero = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']

console.log(Miercoles[2])



/* Ejercicio 5 */

let letras = cantidadDeLetras("programacion");
letras.length;

function cantidadDeLetras(letras){
    return letras.length
}

console.log(letras)


/* Ejercicio 6 */

let dolar = dolarHoy(10)


function dolarHoy(pesos){
    return pesos / 180
}

console.log (dolar)


/* Ejercicio 7 */

function precioFinal(IVA){
    return IVA+(IVA*0.21)
}
let precioIVA = precioFinal(1000)

console.log(precioIVA)



/* Ejercicio 8 */

function mitad(numero){
    return numero/2
}

let division= mitad(10)

console.log (division)



/* ejercicio 9 */
function sumar(num1, num2){
    return num1+num2
}

let operacion=sumar(5, 2)

console.log(operacion)
/*<------------------------------>*/
function multiplicar(num1, num2){
    return num1*num2
}

let operacion2= multiplicar(3,4)

console.log(operacion2)
/*<------------------------------>*/
function restar(num1, num2){
    return num1-num2
}

let operacion3= restar(10,4)

console.log(operacion3)
/*<------------------------------>*/
function dividir(num1, num2){
    return num1/num2
}

let operacion4= dividir(25, 5)

console.log(operacion4)