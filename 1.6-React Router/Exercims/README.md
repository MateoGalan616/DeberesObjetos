# Exercims
 
 1-Bob

import React, { useState } from 'react';

const HeyComponent = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const hey = (message) => {
    if(message.trim().length >= 1) {
      if (!/[a-z]/.test(message) && /[A-Z]/.test(message) && message.endsWith('?')) {
        return "Calm down, I know what I'm doing!";
      } else if(message.trim().endsWith('?')) {
        return 'Sure.';
      } else if (!/[a-z]/.test(message) && /[A-Z]/.test(message)) {
        return 'Whoa, chill out!';
      } else {
        return 'Whatever.';
      } 
    } else {
      return 'Fine. Be that way!';
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleCheckMessage = () => {
    setResponse(hey(message));
  };

  return (
    <div>
      <h2>Hey Component</h2>
      <input 
        type="text" 
        value={message} 
        onChange={handleMessageChange} 
        placeholder="Enter your message"
      />
      <button onClick={handleCheckMessage}>Check Message</button>
      <p>Response: {response}</p>
    </div>
  );
};

export default HeyComponent;

Explicacion de que hace cada linea 

import React, { useState } from 'react';
Esta línea importa la biblioteca React y el hook useState del paquete 'react'. El hook useState se utiliza para gestionar el estado dentro de los componentes funcionales.
const HeyComponent = () => {
Esto define un componente funcional llamado HeyComponent. No recibe ninguna prop y utiliza la sintaxis de función de flecha.
const [message, setMessage] = useState('');
Esta línea inicializa una variable de estado llamada message utilizando el hook useState. El valor inicial de message es una cadena vacía (''), y setMessage es una función para actualizar su valor.
const [response, setResponse] = useState('');
Similar a la línea anterior, esto inicializa otra variable de estado llamada response con un valor inicial de una cadena vacía.
const hey = (message) => { ... }
Esto define una función llamada hey que toma un parámetro message. La función evalúa el mensaje y devuelve diferentes respuestas según ciertas condiciones.
Dentro de la función hey:
Verifica si la longitud recortada del message es mayor o igual a 1.
Si es así, la función continúa con comprobaciones adicionales:
Si el mensaje no contiene letras minúsculas (/[a-z]/) y al menos una letra mayúscula (/[A-Z]/) y termina con un signo de interrogación (message.endsWith('?')), devuelve la cadena “¡Cálmate, sé lo que estoy haciendo!”.
Si el mensaje recortado termina con un signo de interrogación, devuelve la cadena “¡Claro!”.
Si el mensaje no contiene letras minúsculas y al menos una letra mayúscula, devuelve la cadena “¡Whoa, cálmate!”.
De lo contrario, devuelve la cadena “¡Lo que sea!”.
Si la longitud recortada del message es menor que 1, devuelve la cadena “¡Está bien, sé así!”.
const handleMessageChange = (event) => { ... }
Esto define una función llamada handleMessageChange que toma un parámetro event. Se llama cuando cambia el valor del campo de entrada (onChange). Dentro de esta función, actualiza el estado message con el nuevo valor del campo de entrada.
const handleCheckMessage = () => { ... }
Esto define una función llamada handleCheckMessage que se llama cuando se hace clic en el botón “Verificar mensaje”. Invoca la función hey con el valor actual de message y establece el resultado en el estado response.
La declaración return:
Devuelve JSX (elementos de React) que conforman la interfaz de usuario para el componente HeyComponent.
Incluye un campo de entrada, un botón y un párrafo para mostrar la respuesta.



 2-Matrix

import React, { useState } from 'react';

class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    return this.matrix.split('\n').map(nums => nums.split(' ').map(row => +row));
  }

  get columns() {
    return this.rows[0].map((_, index) => this.rows.map(row => row[index]));
  }
}

const MatrixComponent = () => {
  const [matrixInput, setMatrixInput] = useState('');
  const [matrixRows, setMatrixRows] = useState([]);
  const [matrixColumns, setMatrixColumns] = useState([]);

  const handleMatrixChange = (event) => {
    setMatrixInput(event.target.value);
  };

  const handleMatrixSubmit = () => {
    const matrix = new Matrix(matrixInput);
    setMatrixRows(matrix.rows);
    setMatrixColumns(matrix.columns);
  };

  return (
    <div>
      <h2>Matrix Component</h2>
      <textarea 
        value={matrixInput}
        onChange={handleMatrixChange}
        placeholder="Enter matrix rows separated by new lines and columns by spaces"
        rows={5}
        cols={30}
      />
      <br />
      <button onClick={handleMatrixSubmit}>Process Matrix</button>
      <div>
        <h3>Rows</h3>
        <pre>{JSON.stringify(matrixRows, null, 2)}</pre>
      </div>
      <div>
        <h3>Columns</h3>
        <pre>{JSON.stringify(matrixColumns, null, 2)}</pre>
      </div>
    </div>
  );
};

export default MatrixComponent;

explicacion de que hace cada linea 

Importación de módulos:
import React, { useState } from 'react';
Importa la biblioteca React y el hook useState del paquete 'react'. El hook useState se utiliza para gestionar el estado dentro de los componentes funcionales.
Clase Matrix:
class Matrix { ... }
Define una clase llamada Matrix.
El constructor toma una matriz como argumento y almacena la matriz en la propiedad matrix.
Método rows:
get rows() { ... }
Este método calcula las filas de la matriz.
Divide la cadena de la matriz en líneas ('\n') y luego divide cada línea en números utilizando espacios (' ').
Convierte cada número en un valor numérico (+row).
Devuelve un array de arrays, donde cada subarray representa una fila de la matriz.
Método columns:
get columns() { ... }
Este método calcula las columnas de la matriz.
Utiliza el método map en la primera fila de la matriz para iterar sobre los índices de columna.
Para cada índice de columna, crea un nuevo array que contiene los elementos de esa columna.
Devuelve un array de arrays, donde cada subarray representa una columna de la matriz.
Componente MatrixComponent:
const MatrixComponent = () => { ... }
Define un componente funcional llamado MatrixComponent.
Utiliza el hook useState para gestionar el estado de la entrada de la matriz (matrixInput), las filas de la matriz (matrixRows) y las columnas de la matriz (matrixColumns).
Manejo de cambios en la matriz:
const handleMatrixChange = (event) => { ... }
Este método se llama cuando cambia el valor del campo de entrada de la matriz (onChange).
Actualiza el estado matrixInput con el nuevo valor del campo de entrada.
Procesamiento de la matriz:
const handleMatrixSubmit = () => { ... }
Este método se llama cuando se hace clic en el botón “Procesar matriz”.
Crea una nueva instancia de la clase Matrix con la entrada de la matriz.
Actualiza los estados matrixRows y matrixColumns con las filas y columnas calculadas, respectivamente.
Renderizado del componente:
Devuelve JSX (elementos de React) que conforman la interfaz de usuario para el componente MatrixComponent.
Incluye un área de texto para ingresar la matriz, un botón para procesarla y secciones para mostrar las filas y columnas.


Link video: