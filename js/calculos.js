/* function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}



const matrisNumeros = [
    [1, 43, 5, 76, 25],
    [2, 68, 36, 100, 99],
    [330, 55, 1000, 5, 9]
]
console.log(matrisNumeros);
const { length } = matrisNumeros;
const order = [];

for (let i = 0; i < length; i++) {
    const element = matrisNumeros[i];
    
    for (let j = 0; j < matrisNumeros.length + 2; j++) {
        order.push(element[j])

    }
}
console.log(order.sort());
 */
/* 
1)_ Realizar una funcion que nos permita realizar las cuatro oeraciones aritmeticas, es decir, nos permita sumar, restar, dividr y multiplicar.

2)_la funcion debe recibir 3 parametros, dos de ellos deben ser los valores (a, b) y uno el nombre de la oeración (en minusculas).

3)_ Si el parametro de la operacion no es válido que mande un error personalizado a la consola.
*/

/* let a = 0; b = 0


function operaciones(a, b, operator) {
    switch (operator) {
        case "+":
            return console.log(a + b);
        case "-":
            return console.log(a - b);
        case "*":
            return console.log(a * b);
        case "/":
            return console.log(a / b);
        default:
            console.error(`La operación ${operator} no es correcta`);
    }
} */
//operaciones(12, 5, "*")


/* Realizar una funcion que almacene en un array todos los numero pares desde a hasta b. */
/* const pares = [];
const impares = [];

for (let i = 0; i < order.length; i++) {

    if (order[i] % 2 == 0) {
        pares.push(order[i])
    } else if (order[i] % 2 == 1) {
        impares.push(order[i])
    }
} */
//console.log(pares);
//console.log(impares);

function obtenerSumaCifras(num) {
    
    suma = 0;
    
    while (num > 0) {
        let ultimaCifra = num % 10
        suma = suma + ultimaCifra
        num = Math.trunc(num / 10)
    }
    return resultado = suma
}


function bubbleSort(arr, compare = defaultCompare) {
    const { length } = arr;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) { // refer to note below
            if (compare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}
let sorting = bubbleSort(order)

console.log(sorting);



const matrizN = []

let arrayNuevo = [];



for (let i = 0; i < order.length; i++) {
        if (arrayNuevo.length + 1 < 5) {
            arrayNuevo.push(order[i]);
        } else {
            arrayNuevo.push(order[i])
            matrizN.push(arrayNuevo);
            arrayNuevo = [];
        }
}

console.log(matrizN);



const arrRep = [1, 2, 'a', 'b', 'a', 'b', 'javascript'];
const noRepeat = (params) => {
    const resultado = [];
    
    for (let i = 0; i < params.length; i++) {
        const element = params[i]
        if (typeof (element) === typeof ('string')) {
            resultado.push(element)
        }
    }
    return resultado;
}


console.log(noRepeat(arrRep));
   

function remove (texto) {
    if (typeof(texto) === typeof('string')) {
        
        let caracteres = texto.split('');
        let resultado = [];
        
        for ( let i = 0; i < caracteres.length; ++i) {
            
            if(texto.indexOf(caracteres[i]) === texto.lastIndexOf(caracteres[i])) {
            resultado.push(caracteres[i])

            }
        }
        return resultado.join('');
    } else {
        console.log('Debe ser un string')
    };
};
remove() 

const giftIds = [2, 1, 3, 5, 3, 2]
const giftIds2 = [1, 2, 3, 4]
const giftIds3 = [5, 1, 5, 1]


function findFirstRepeated(gifts) {
    const mapa = []
    for (const numero of gifts) {
        if (mapa.includes(numero)) {
            return numero
        }
        mapa.push(numero)
    }
    gifts.forEach(element => {
        console.log(element);
    });   
}
console.log(findFirstRepeated(giftIds)); 


const original = 'abcd'
const modified = 'abcde'
function findNaughtyStep(original, modified) {
    if (original.length === modified.length) return '';
    
    const iterator = modified.length > original.length ? modified : original
    
    for (let i = 0; i < iterator.length; i++) {
        if (original[i] !== modified[i]) {
            return iterator[i]
        };
    };
  
  
  }

console.log(findNaughtyStep(original, modified));

const imprimirNumeros = (n) => {
  if (n >= 0) {
    console.log(n)
    imprimirNumeros(n-1)
  }
}
imprimirNumeros(100)
function decode(message) {
    let stack = [];
      for (let char of message) {
          if (char === '(') {
              stack.push('');
          } else if (char === ')') {
              let temp = stack.pop().split('').reverse().join('');
              if (stack.length !== 0) {
                  stack[stack.length - 1] += temp;
              } else {
                  stack.push(temp);
              }
          } else {
              if (stack.length !== 0) {
                  stack[stack.length - 1] += char;
              } else {
                  stack.push(char);
              }
          }
      }
      return stack.join('');
  }

console.log(decode('(olleh) (dlrow)!'));

function maxDistance(movements) {
    let distance = 0
    let joker = 0
      // Code here
  
      for (const signo of movements) {
          if (signo === '>') distance++
          if (signo === '<') distance--
          if (signo === '*') joker++     
      }
      return Math.abs(distance) + joker
  }

console.log(maxDistance('>***>'));



function adjustLights(lights) {
    function checkLights(lights) {
        let luz = 0
        for (let i = 1; i < lights.length; i++) {
            if (lights[i] === lights[i - 1]) {
                luz++
                lights[i] = lights[i] === '🟢' ? '🔴' : '🟢'
            }


        }
        return luz
    }

    return Math.min(checkLights([...lights])), checkLights([...lights].reverse())
}




console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']));
// -> 1 (cambias la cuarta luz a 🔴)
console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']));
// -> 1 (cambia la primera luz a verde)
console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']));
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']));
// -> 0 (ya están alternadas)
console.log(adjustLights(['🔴', '🔴', '🔴']));
// -> 1 (cambias la segunda luz a 🟢)

/* ¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.

Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.

Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.

Por ejemplo si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol: */


/* function findOptimalStartNode(n, k, security_vals) {
    let maxSecuritySum = -Infinity;
    let optimalStartNode = -1;

    // Función auxiliar para realizar DFS
    function dfs(node, securitySum, visited) {
        if (node < 0 || node >= n || visited[node]) {
            return;
        }

        visited[node] = true;
        securitySum += security_vals[node];

        if (securitySum > maxSecuritySum) {
            maxSecuritySum = securitySum;
            optimalStartNode = node + 1; // Sumamos 1 para que coincida con la numeración de nodos
        }

        // Realizamos un salto de longitud k
        dfs(node + k, securitySum, visited);

        // Realizamos un salto de longitud -k
        dfs(node - k, securitySum, visited);

        visited[node] = false; // Marcamos el nodo como no visitado para futuras iteraciones
    }

    // Iniciamos DFS desde cada nodo
    for (let i = 0; i < n; i++) {
        let visited = new Array(n).fill(false);
        dfs(i, 0, visited);
    }

    return optimalStartNode;
}

// Ejemplo de uso:
const n = 5;
const k = 2;
const security_vals = [3, 5, 2, 7, 4];

const optimalStartNode = findOptimalStartNode(n, k, security_vals);
console.log("Nodo inicial óptimo:", optimalStartNode); */
/* 
const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21 */


//const numeros = [1, 3, 5, 7, 9]
/* const numeros2 = [396285104, 573261094, 759641832, 819230764, 364801279]
function miniSumaMax(arr) {
    const ordenado = (arr) => {
        let ordenadoArr = arr.sort((a, b) => a - b)
        return ordenadoArr
    }
    
    function Max() {
        const array = [...arr]
        ordenado(array).pop()
        const sumMax = array.reduce((acc, el) => acc + el)
        return sumMax;
    }

    function min() {
        const array = [...arr]
        ordenado(array).shift()
        const sumMin = array.reduce((acc, el) => acc + el);
        return sumMin
    }
            
    
    return console.log(Max(arr),min(arr))
}

miniSumaMax(numeros2)//2093989309  2548418794

 */
