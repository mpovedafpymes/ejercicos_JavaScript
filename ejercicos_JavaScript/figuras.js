//Código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);

//const areaCuadrado = ladoCuadrado ** 2;
//console.log(`El area del cuadrado es: ${areaCuadrado} cm2`); 

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado ** 2;
}

console.groupEnd();

console.group("Triangulo");
//Código del triángulo

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

//console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm `);
//console.log(`La altura del triangulo es: ${alturaTriangulo} cm`);

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log(`El perímetro del tieangulo es: ${perimetroTriangulo} cm`);

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log(`El area del triangulo es: ${areaTriangulo} cm2`); 

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return ( base * altura ) / 2;
}

console.groupEnd();

//Código del circulo
console.group("Circulo");

//const radioCirculo = 4;
//console.log(`El radio del circulo es: ${radioCirculo} cm`); 

//const diametroCirculo = radioCirculo * 2;
//console.log(`El diametro del circulo es: ${diametroCirculo} cm`); 

//const PI = Math.PI;
//console.log(`PI es: ${PI} cm`); 

//const perimetroCirculo = diametroCirculo * PI;
//console.log(`El perimetro del circulo es: ${perimetroCirculo} cm2`); 

//const areaCirculo = radioCirculo**2 * PI;
//console.log(`El area del circulo es: ${areaCirculo} cm2`); 

function perimetroCirculo(diametro){
    return diametro * Math.PI;
}

function areaCirculo(radio){
    return radio**2 * Math.PI;
}

console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}