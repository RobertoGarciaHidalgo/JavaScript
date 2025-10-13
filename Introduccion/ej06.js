function mayorNumeroDeUnArray(numeros){
    let numeroMayor = 0;
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > numeroMayor){
            numeroMayor = numeros[i];
        }
    }
    return numeroMayor;
}
console.log(mayorNumeroDeUnArray([1,2,3,4,5,4,7,8,9]));