// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    if(nums.length < 3){
        return undefined;
    }
    let ordenados = nums.sort((a, b) => b-a);

    ordenados = ordenados.filter(soloValoresUnicos);
    
    let tercerMax = ordenados[2];

    if(!tercerMax){
        tercerMax = ordenados[1];
        if(!tercerMax){
            tercerMax = ordenados[0];
        }
    }
    return tercerMax;
}

function soloValoresUnicos(valor, indice, array) { 
    return array.indexOf(valor) === indice;
}

// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === 4);
console.log(greater3([1,1,2,5]) === 1);