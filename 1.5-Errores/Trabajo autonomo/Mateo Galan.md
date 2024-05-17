#los 10 errores comunes de los princpiantes en React con los Hooks

1-Usar el estado cuando no es necesario: A veces, los principiantes usan el estado para las entradas de formulario que no necesitan volver a renderizar el componente cada vez que cambian. En su lugar, puedes usar useRef

import { useRef } from 'react';

function Form() {
  const inputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}

2-No usar la versión de función de useState: Cuando actualizas el estado basándote en el estado anterior, especialmente cuando hay múltiples llamadas setState seguidas, debes usar la versión de función de useState

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

3-El estado no se actualiza inmediatamente: setState es asíncrono, por lo que si necesitas hacer algo cuando cambia el estado, debes usar useEffect en lugar de intentar hacerlo justo después de setState

import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

4-useEffect innecesarios: Evita usar useEffect cuando no necesitas ejecutar algún código cada vez que cambia una dependencia. En su lugar, mueve el código a donde realmente importa, como dentro de una solicitud fetch o una declaración de variable.

import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value === '') {
      setCount(0);
    } else {
      setCount(value.length);
    }
  }, [value]);

  // ...
}

5-Errores de igualdad referencial: Usar objetos o arrays como dependencias en useEffect puede causar re-renderizados no deseados. Puedes usar useMemo o useCallback para evitar crear nuevas referencias cada vez.

import { useState, useEffect, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <Child increment={increment} />;
}

function Child({ increment }) {
  useEffect(() => {
    increment();
  }, [increment]);

  // ...
}

6-No abortar las solicitudes fetch: Debes usar la API AbortController para cancelar las solicitudes fetch cuando el componente se desmonta o cambian las dependencias, para prevenir fugas de memoria y errores.

import { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('/api/data', { signal })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Fetch error:', error);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  // ...
}

7-No agregar todas las dependencias en useEffect: A veces, los desarrolladores olvidan agregar todas las dependencias necesarias en la matriz de dependencias de useEffect. Esto puede llevar a comportamientos inesperados porque useEffect solo se ejecutará de nuevo cuando cambien las dependencias especificadas.

import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  useEffect(() => {
    setCount(count + value.length);
  }, [value]); // count no está en la matriz de dependencias

  // ...
}

8-Llamar a un Hook dentro de un callback o un bucle: Los Hooks de React deben llamarse en el nivel superior de tus componentes. No deben llamarse dentro de bucles, condiciones o funciones anidadas.

// Incorrecto
function Example({ items }) {
  items.forEach(item => {
    const [count, setCount] = useState(0); // Error
    // ...
  });

  // ...
}

// Correcto
function Example({ items }) {
  const counts = items.map(() => useState(0)); // Correcto

  // ...
}

9-No manejar correctamente los errores y los estados de carga en las solicitudes fetch: Debes manejar correctamente los estados de carga y los errores al realizar solicitudes fetch en useEffect.

import { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return 'Loading...';
  if (error) return 'Error!';

  return (
    // Renderizar los datos
  );
}

10-No limpiar los efectos secundarios en useEffect: Si tu efecto secundario es una suscripción o algo que necesita limpieza, debes devolver una función de limpieza en useEffect.

import { useState, useEffect } from 'react';

function Example() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    // ...
  );
}
