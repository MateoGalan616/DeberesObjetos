# Exercims
 
 1-Darts

import React, { useState, Dispatch, SetStateAction } from 'react';

function score(x: number, y: number): number {
  const distance = Math.sqrt(x ** 2 + y ** 2);
  if (distance <= 1) {
    return 10;
  } else if (distance <= 5) {
    return 5;
  } else if (distance <= 10) {
    return 1;
  } else {
    return 0;
  }
}

function ScoreCalculator() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [scoreResult, setScoreResult] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<number>>) => {
    setter(Number(event.target.value));
  }

  const calculateScore = () => {
    setScoreResult(score(x, y));
  }

  return (
    <div>
      <input type="number" value={x} onChange={(event) => handleInputChange(event, setX)} placeholder="Ingrese X" />
      <input type="number" value={y} onChange={(event) => handleInputChange(event, setY)} placeholder="Ingrese Y" />
      <button onClick={calculateScore}>Calcular Puntuación</button>
      <p>La puntuación es: {scoreResult}</p>
    </div>
  );
}

export default ScoreCalculator;


Explicacion de que hace cada linea 

import React, { useState, Dispatch, SetStateAction } from 'react';: Esta línea importa el módulo React y algunas funciones específicas de React. useState es un Hook de React que te permite agregar estado de React a los componentes de función. Dispatch y SetStateAction son tipos de TypeScript utilizados para tipar correctamente los setters del estado.
function score(x: number, y: number): number {: Esta línea define una función llamada score que toma dos números, x e y, como argumentos y devuelve un número.
const distance = Math.sqrt(x ** 2 + y ** 2);: Esta línea calcula la distancia desde el origen (0,0) hasta el punto (x,y) utilizando el teorema de Pitágoras.
if (distance <= 1) { return 10; } else if (distance <= 5) { return 5; } else if (distance <= 10) { return 1; } else { return 0; }: Estas líneas devuelven una puntuación basada en la distancia calculada. Si la distancia es menor o igual a 1, devuelve 10. Si la distancia es mayor que 1 pero menor o igual a 5, devuelve 5. Si la distancia es mayor que 5 pero menor o igual a 10, devuelve 1. Si la distancia es mayor que 10, devuelve 0.
function ScoreCalculator() {: Esta línea define un componente de React llamado ScoreCalculator.
const [x, setX] = useState(0); const [y, setY] = useState(0); const [scoreResult, setScoreResult] = useState(0);: Estas líneas utilizan el Hook useState para agregar estado al componente ScoreCalculator. Se definen tres estados: x, y y scoreResult, cada uno con su respectivo setter (setX, setY y setScoreResult) y un valor inicial de 0.
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<number>>) => { setter(Number(event.target.value)); }: Esta línea define una función que maneja los cambios en los campos de entrada. Toma un evento y un setter como argumentos, y utiliza el setter para actualizar el estado con el valor numérico del campo de entrada.
const calculateScore = () => { setScoreResult(score(x, y)); }: Esta línea define una función que calcula la puntuación utilizando los valores actuales de x e y, y actualiza el estado scoreResult con el resultado.
return ( ... ): Esta línea devuelve el JSX que se renderizará para el componente ScoreCalculator. Contiene dos campos de entrada para los valores de x e y, un botón para calcular la puntuación y un párrafo que muestra la puntuación calculada.
export default ScoreCalculator;: Esta línea exporta el componente ScoreCalculator como exportación predeterminada del módulo.


 2-Pangram

import React, { useState } from 'react';

const ALPHABET_LENGTH = 26;

function isPangram(sentence: string): boolean {
  let charSet = new Set<string>();
  sentence = sentence.toLowerCase().replace(/[^a-z]/ig, '');
  const len = sentence.length;
  for (let i = 0; i < len; i++) {
    const ch = sentence.charAt(i);
    charSet.add(ch);
    
    if (charSet.size === ALPHABET_LENGTH)
      return true;  
  }
  
  return false;
}

function PangramChecker() {
  const [sentence, setSentence] = useState('');
  const [isPangramResult, setIsPangramResult] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSentence(event.target.value);
    setIsPangramResult(isPangram(event.target.value));
  }

  return (
    <div>
      <input type="text" value={sentence} onChange={handleInputChange} />
      <p>{isPangramResult ? 'La frase es un pangrama.' : 'La frase no es un pangrama.'}</p>
    </div>
  );
}

export default PangramChecker;


export default DnDCharacter;

explicacion de que hace cada linea 
import React, { useState } from 'react';: Esta línea importa el módulo React y la función useState de React. useState es un Hook de React que te permite agregar estado de React a los componentes de función.
const ALPHABET_LENGTH = 26;: Esta línea define una constante llamada ALPHABET_LENGTH y le asigna el valor 26, que es la cantidad de letras en el alfabeto inglés.
function isPangram(sentence: string): boolean {: Esta línea define una función llamada isPangram que toma una cadena de caracteres, sentence, como argumento y devuelve un booleano.
let charSet = new Set<string>();: Esta línea crea un nuevo conjunto vacío llamado charSet. Este conjunto se utilizará para almacenar las letras únicas en la frase.
sentence = sentence.toLowerCase().replace(/[^a-z]/ig, '');: Esta línea convierte la frase a minúsculas y luego elimina todos los caracteres que no son letras.
const len = sentence.length;: Esta línea define una constante llamada len y le asigna el valor de la longitud de la frase.
for (let i = 0; i < len; i++) {: Esta línea inicia un bucle for que recorre cada carácter en la frase.
const ch = sentence.charAt(i); charSet.add(ch);: Estas líneas obtienen el carácter en el índice i de la frase y luego lo añaden al conjunto charSet.
if (charSet.size === ALPHABET_LENGTH) return true;: Esta línea comprueba si el tamaño del conjunto charSet es igual a ALPHABET_LENGTH. Si es así, la función devuelve true, lo que significa que la frase es un pangrama.
return false;: Esta línea se ejecuta si el bucle for termina sin encontrar un pangrama. En este caso, la función devuelve false.
function PangramChecker() {: Esta línea define un componente de React llamado PangramChecker.
const [sentence, setSentence] = useState(''); const [isPangramResult, setIsPangramResult] = useState(false);: Estas líneas utilizan el Hook useState para agregar estado al componente PangramChecker. Se definen dos estados: sentence y isPangramResult, cada uno con su respectivo setter (setSentence y setIsPangramResult) y un valor inicial.
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { setSentence(event.target.value); setIsPangramResult(isPangram(event.target.value)); }: Esta línea define una función que maneja los cambios en el campo de entrada. Cuando el valor del campo de entrada cambia, esta función actualiza el estado sentence con el nuevo valor y luego actualiza el estado isPangramResult con el resultado de llamar a la función isPangram con el nuevo valor.
return ( ... ): Esta línea devuelve el JSX que se renderizará para el componente PangramChecker. Contiene un campo de entrada para la frase y un párrafo que muestra si la frase es un pangrama o no.
export default PangramChecker;: Esta línea exporta el componente PangramChecker como exportación predeterminada del módulo.

Link video:https://youtu.be/bmOt6M631S8?si=EKxDAkf2cW5d7qW8