function SeparaNumeros (...parametros){
    var numeros = [];
    for(let i = 0; i < parametros.length; i++){
        if(typeof parametros[i] === 'number' && Number.isInteger(parametros[i])){
            numeros.push(parametros[i]);
        }
    }
    return numeros;
}

console.log(SeparaNumeros("Hola"));
console.log(SeparaNumeros("Hola", "Adios"));
console.log(SeparaNumeros("Hola", "Adios" , 123));
console.log(SeparaNumeros("Hola", "Adios" , undefined, 22222, new Date()));
