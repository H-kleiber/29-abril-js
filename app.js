// 1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se
// deberá imprimir en pantalla
function sumar(num1, num2){
return num1+num2;      
}
console.log("suma",sumar(2,3));

// 2. Un estudiante realiza 4 exámenes, calcular el promedio de estos
function promedio(nota1,nota2,nota3,nota4){
return (nota1+nota2+nota3+nota4)/4;
}
console.log("promedio",promedio(12,13,12,12));

// 3. Calcular el área de un rectángulo

function arearectangulo(base,altura){
    return base*altura;

}
console.log("area del rectangulo",arearectangulo(10,6));
// 4. Calcular el área de un triángulo
function areatriangulo(base,altura){
    return (base*altura)/2;

}
console.log("area del traiangulo",areatriangulo(3,4));

// 5. Calcular el área de una circunferencia
function areacircunferencia(pi,radio){
    return pi*radio;
}
console.log("areacircunferencia",areacircunferencia(3.14,0.25));
// 6. Determinar el sueldo semanal de un trabajador basándose en sus horas
// trabajadas y su salario de hora hombre

function salario(horas,montoxhora){
return horas*montoxhora;
}
console.log("salario",salario(120,15));
// 7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero.
// Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas,
// pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a
// resolver el problema, determinando cuantas pulgadas debe pedir con base en
// los metros que requiere. Represéntelo mediante el diagrama de flujo y el
// pseudocódigo (1 pulgada = 0.0254 m).

function tela(metros,pulgada){
    return metros*pulgada;
    // 39.3701 es un metro en pulgada
}
console.log("metros a pulgadas",tela(30,39.3701))
// 8. Una empresa importadora desea determinar cuántos dólares puede adquirir
// con equis cantidad de dinero peruano

function dolares(){
let dolar=3.68;
let cantidadsoles=300;
let cambio=cantidadsoles*dolar;
console.log("cambio dolares",cambio);
}
dolares();
// 9. Una empresa que contrata personal requiere determinar la edad de las
// personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se
// les pregunta el año en que nacieron

function edad(yearactual,yearnac){
    return yearactual-yearnac;
}
console.log("edad actual", edad(2023,1998));

// 10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la
// edad de la persona de menor edad

let person1=["jorge",21];
let person2=["joel",22];
let person3=["alejandra",24];
let mayor;

if (person1[1] > person2[1]){
 mayort=person1[1];
}else 
mayort=person2[1]

if(mayort> person3[1]){
 mayor=mayort;
}else 
mayor=person3[1];
console.log("ecnonctras el mayor de 3 personas ",mayor);



