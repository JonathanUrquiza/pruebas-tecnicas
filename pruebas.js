/* const numeros = [1,3,5,7,9, 9]


const candles = (candles) => {
    const busqueda = (candles) => {
        const mayorCandles = Math.max(...candles)
        return mayorCandles
    }
    let comaprador = busqueda(candles)
    const  candle = candles.filter((el) => el == comaprador )
    return candle.length
}

console.log(candles(numeros));



function convertirAHoraMilitar(horario) {
    // Dividir la cadena del horario en horas y minutos
    const partes = horario.split(':');
    let horas = parseInt(partes[0]);
    const minutos = parseInt(partes[1]);
    let segundos = parseInt(partes[2]);

    // Si el horario es PM y no es 12 PM, se le suma 12 para convertirlo a formato militar
    if (horario.toLowerCase().includes('pm') && horas !== 12) {
        horas += 12;
    }

    // Si el horario es AM y es 12 AM, se cambia a 0 horas para el formato militar
    if (horario.toLowerCase().includes('am') && horas === 12) {
        horas = 0;
    }

    // Formatear las horas y minutos en el formato HH:mm
    const horarioMilitar = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

    return horarioMilitar;
}

// Ejemplo de uso
const horarioOriginal = '12:30:45 PM';
const horarioMilitar = convertirAHoraMilitar(horarioOriginal);
console.log(horarioMilitar); // Output: "13:30"
 */


const string = 'aabbcd' //no
const string2 = 'aabbccddeefghi' // no
const string3 = 'abcdefghhgfedecba' //si
const arr = string.split('')
const arr2 = string2.split('')
const arr3 = string3.split('')

const hasDuplicate = arr => new Set(arr).size < arr.length

hasDuplicate(arr)
hasDuplicate(arr2)
hasDuplicate(arr3)

function isValid(s) {
    // key for each unique letter in the string and the value is how many times it appears
    const stringCounts = {};
  
    // key for all letter counts in the string and how many times the count occurs
    const countOccurence = {};
  
    for (let i = 0; i < s.length; i++) {
      const letter = s[i];
      stringCounts[letter] = (stringCounts[letter] || 0) + 1;
    }
  
    for (const key in stringCounts) {
      const letterCount = stringCounts[key];
      countOccurence[letterCount] = (countOccurence[letterCount] || 0) + 1;
    }
  
    const counts = Object.keys(countOccurence);
  
    if (counts.length > 2) return "NO";
    if (counts.length === 1) return "YES";
  
    const singleCount = counts.find(count => count === "1");
  
    const maxCount = Math.max(...counts);
    const minCount = Math.min(...counts);
  
    // if only one character has a count of one it can be removed and all other letters will have equal counts
    // if only one character appears one more time than all the other characters one occurance of it can be removed
    // and all characters will have equal counts
    return (singleCount && countOccurence[singleCount] === 1) ||
      (maxCount - minCount === 1 && countOccurence[maxCount] === 1)
      ? "YES"
      : "NO";
  }

  function getIndexsForPalindrome(word) {

    const checkPalindrome = (word) => word === word.split('').reverse().join('')
    
    const swap = (word, start, end) => {
      const palabra = word.split('');
      
      [palabra[start],palabra[end]] = [palabra[end], palabra[start]]
      return palabra.join('')
      }
    if(checkPalindrome(word)) return []
    
      for(let start = 0; start < word.length; start++) {
        for(let end = 0; end < word.length; end++){
          if(checkPalindrome(swap(word,start,end))) return [start, end]
        }
      }
      return null
    }