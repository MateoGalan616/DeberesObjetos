## Crear el estado actual de la producción de un elemento implementando métodos del ciclo de vida.

Crear un componente que muestre el estado actual de la producción de un elemento utilizando los métodos del ciclo de vida

## Descripción
ProductionStatus: Este es un componente de clase en React que muestra el estado de producción de un producto. Cuando se monta el componente, inicia un temporizador que actualiza el estado de producción después de 2 segundos.
ComponentMount: Este es un componente funcional en React que maneja el estado del nombre del producto y si se debe detener la producción. También maneja los eventos de cambio de producto y detención de la producción. Este componente renderiza el componente ProductionStatusFunctional y ProductionStatusUnmount.
ProductionStatusFunctional: Este es un componente funcional en React que muestra el estado de producción de un producto. Cuando cambia el nombre del producto, inicia un temporizador que actualiza el estado de producción después de 2 segundos.
ProductionStatusUnmount: Este es un componente funcional en React que muestra un mensaje sobre la detención de la producción y un botón que, cuando se hace clic, llama a la función stopProduction.
En resumen, estos códigos juntos crean una interfaz de usuario que permite a los usuarios ver el estado de producción de un producto, cambiar el producto y detener la producción. Espero que esto te ayude a entender mejor el código.


Did Mount 
import { Component, useState } from 'react';: Esta línea importa el componente Component y la función useState desde la biblioteca react.
import { ProductionStatusFunctional } from './componentDidUpdate'; y import { ProductionStatusUnmount } from './componentWillUnmount';: Estas líneas importan dos componentes desde otros archivos en el mismo directorio.
interface ProductionStatusProps { productName: string; }: Aquí se define una interfaz para las propiedades (props) que se pasarán al componente ProductionStatus. En este caso, se espera un productName de tipo string.
interface ProductionStatusState { productionStatus: string; }: Aquí se define una interfaz para el estado del componente ProductionStatus. En este caso, el estado incluye productionStatus, que es una cadena de texto (string).
class ProductionStatus extends Component<ProductionStatusProps, ProductionStatusState> { ... }: Aquí se define un componente de clase llamado ProductionStatus. Este componente extiende de Component, lo que significa que hereda todas las propiedades y métodos de un componente de React. Las interfaces definidas anteriormente se utilizan aquí para tipar las props y el state.
Dentro de la clase ProductionStatus, se define un constructor que inicializa el estado del componente y un método componentDidMount que actualiza el estado después de un cierto tiempo. También se define un método render que devuelve el JSX que se renderizará en la página.
const ComponentMount = () => { ... };: Aquí se define un componente funcional llamado ComponentMount. Este componente utiliza el hook useState para manejar su propio estado.
Dentro de ComponentMount, se definen varias funciones para manejar eventos, como cambiar el nombre del producto y detener la producción. Estas funciones actualizan el estado del componente cuando se llaman.
Finalmente, ComponentMount devuelve un JSX que incluye los componentes ProductionStatusFunctional y ProductionStatusUnmount, así como varios elementos HTML.
export default ComponentMount;: Esta línea exporta el componente ComponentMount como el export por defecto de este archivo, lo que significa que puede ser importado y utilizado en otros archivos.

Did update
import React, { useEffect, useState } from 'react';: Esta línea importa React junto con los hooks useEffect y useState desde la biblioteca react.
interface ProductionStatusProps { productName: string; }: Aquí se define una interfaz para las propiedades (props) que se pasarán al componente ProductionStatusFunctional. En este caso, se espera un productName de tipo string.
export const ProductionStatusFunctional: React.FC<ProductionStatusProps> = ({ productName }) => { ... };: Aquí se define un componente funcional llamado ProductionStatusFunctional. Este componente recibe productName como propiedad.
const [productionStatus, setProductionStatus] = useState('Initializing production...'); y const [updateMessage, setUpdateMessage] = useState('');: Estas líneas utilizan el hook useState para crear y manejar el estado local del componente. productionStatus y updateMessage son las variables de estado, y setProductionStatus y setUpdateMessage son las funciones que se utilizan para actualizar ese estado.
useEffect(() => { ... }, [productName]);: Aquí se utiliza el hook useEffect para realizar efectos secundarios en el componente. En este caso, el efecto se activa cada vez que productName cambia.
Dentro del useEffect, se actualiza el estado updateMessage y se inicia un temporizador. Cuando el temporizador termina, se actualiza el estado productionStatus y se limpia updateMessage.
return () => clearTimeout(timeout);: Esta es la función de limpieza del useEffect. Se ejecuta cuando el componente se desmonta o antes de que el efecto se vuelva a ejecutar. En este caso, se utiliza para limpiar el temporizador.
Finalmente, ProductionStatusFunctional devuelve un JSX que muestra el estado de producción y cualquier mensaje de actualización.

WillUnmount
import React, { useEffect, useState } from 'react';: Esta línea importa React junto con los hooks useEffect y useState desde la biblioteca react.
interface ProductionStatusProps { productName: string; }: Aquí se define una interfaz para las propiedades (props) que se pasarán al componente ProductionStatusFunctional. En este caso, se espera un productName de tipo string.
export const ProductionStatusFunctional: React.FC<ProductionStatusProps> = ({ productName }) => { ... };: Aquí se define un componente funcional llamado ProductionStatusFunctional. Este componente recibe productName como propiedad.
const [productionStatus, setProductionStatus] = useState('Initializing production...'); y const [updateMessage, setUpdateMessage] = useState('');: Estas líneas utilizan el hook useState para crear y manejar el estado local del componente. productionStatus y updateMessage son las variables de estado, y setProductionStatus y setUpdateMessage son las funciones que se utilizan para actualizar ese estado.
useEffect(() => { ... }, [productName]);: Aquí se utiliza el hook useEffect para realizar efectos secundarios en el componente. En este caso, el efecto se activa cada vez que productName cambia.
Dentro del useEffect, se actualiza el estado updateMessage y se inicia un temporizador. Cuando el temporizador termina, se actualiza el estado productionStatus y se limpia updateMessage.
return () => clearTimeout(timeout);: Esta es la función de limpieza del useEffect. Se ejecuta cuando el componente se desmonta o antes de que el efecto se vuelva a ejecutar. En este caso, se utiliza para limpiar el temporizador.
Finalmente, ProductionStatusFunctional devuelve un JSX que muestra el estado de producción y cualquier mensaje de actualización.


Link video:https://youtu.be/WGrf22fYync?si=qfyQCl-lS17d0hC7