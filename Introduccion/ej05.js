function sumarElementosArray(numeros){

    let suma = 0;

    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    return suma;
}
console.log(sumarElementosArray([1,2,3,4,5,6,7,8,9]));