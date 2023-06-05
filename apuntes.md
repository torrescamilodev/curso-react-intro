# React

React.js nos ayuda a crear aplicaciones altamente escalables e interactivas (multiplataforma, declarativo, basado en componentes)

Dependencias (NPM)

- npm start: Inicia un servidor de desarrollo.

# Que es un componente

como los componentes componen la anatomia de la aplicación, todo en la aplicacion va a ser un componente y estos componentes se van a poder reutilizar varias veces para construir la apliación y que sea reutilizable e interactiva.

- Como trabajar con componentes
- ¿Cual es la diferencia con los elementos de React, y como estos elementos son distintos pero va na terminar transformandose en etiquetas HTML

Cuando en un proyecto de React se encuentre una funcion que tenga la primera letra del nombre en mayuscula es un componente de React.js

***jsx:*** Es una sintaxis que permite combinar js con xml.

***elementos de React:*** Etiquetas en minuscula que despues se trasnfomaran en elementos de html

- Hay un metodo render que va a permiter enviar dentro de corchetes con el componente y asi renderizar el componente en la apliacion (se puede renderizar el mismo componente varias veces).

***props:*** Propiedades que parecen parametros, permiten cambiar para que en ese objetos de propiedades se pueda decir tal propiedad va a reemplazar un valor fijo.

***Componentes:*** Los componentes reciben propiedades, no terminan rederizando nada en el html, los elementos son encapsulados por los componentes, los elementos siempre viven dentro de componentes que se renderizan, pero esos elementos son los que terminan trasnformando en el html (aun no son html, parecen)

# Componentes de TODO

***Comunicacion entre componentes por medio de props:*** Los componentes reciben parametros. Le enviamos argumentos y recibimos parametros, pero en React. js no se le dicen parametros se le dicen props (son objetos que tiene distintas propiedades)

**React no traduce las props como atributos**

La propiedad Children es especial, React Automaticamente transforma todo lo que este dentro del componente en la propiedad children es decir, si se crea un componente no solo con una etiqueta que se cierre, si no con una de apertura y cierre y por dentro se crean mas componentes o elementos que se quieran renderizar todo eso que esta por dentro de las etiquetas de apertura y de cierre React lo va a transformar autoamticamente en la propiedad children

**Renderizar Arrays:** por cada objeto, por cada elemento dentro del array se va a renderizar un TodoItem, para eso se llama al array y se crea un nuevo array, React.js permite que se renderizen arrays y por dentro de cada array se puede renderizar un elemento, se va arenderizar un array generado a partir de otro array

**Dos formas de agregar estilos CSS a los componentes:**
- Estilos en linea (no son los mismos estilos de html)
- Hojas de estilo

Las propiedades se agregan en forma de objeto (CamelCase), las llaves permiten en jsx enviar JS, (VARIABLES) a el elemento, a la interfaz

Sitaxis para agregar JS dentro de `` (comillas ivertidas): ${}

# Eventos en React: onClick onChange

Como escuchar los enventos e interacciones de los usuarios.

Escuchar las interacciones de React.js y hacer que la aplicación reaccione a ellas.
Todo lo que empiece por *on* en React va a ser un evento, eso es distinto a una propiedad a un atributo, lo convierte en un AddEventListener en Js.
El codigo de React.js tradujo el atributo onClick a un evento de JS con AddEventListener

# ¿Que es el estado?

El estado no solo se consume si no que tambien se actualizam el **estado** en React.js de inmutable
se necesita una funcion actualizadora del estado controlada por React.js para que pueda hacer todos sus procesos de inmutabilidad y no afecte al historial de estados del componentes (se necesita un segundo elemento en el array, que react envia desde useState)
Use state nos permite definir un estado inicial.

Los estados se comunican de padres a hijos no de hijos a padres

Los estados derivados son variables, propiedades, calculos que hacemos a partir de un estado

# Local Storage con React.js

Es una herramienta que nos ayuda a hacer persistencia de datos en el navegador, eso signifca que cuando los usuarios entren al navegador guarden informacion en local storage y depues cierren la pestaña, cierren la ventana, el navegador completo, incluso que apaguen el computaodr, lo que nos ayuda la persistencia de datos en local storage es cuando vuelvan a abrir el comptuador, vuelvan a abrir la ventana y vuelvan a abrir la pestaña con la aplicacion ahi siga teniendo esa informacion que no se haya borrado, eso es lo que permite local storage.

Todo lo que se guarde en local Storage tiene que ser un String (JSON.stringify()) nos ayuda a convertir en string JS.


Se crea el array:

const defaultTodos = [
  {text: "Conseguir trabajo", completed: false},
  {text: "Conseguir novia", completed: false},
  {text: "Estudiar", completed: false},
  {text: "Gruaduarse", completed: true}
];

Se pasa a un String:

const stringifiedTodos = JSON.stringify(defaultTodos)

Se guarda en Local Storage;

localStorage.setItem('TODOS_V1', stringifiedTodos)

Se visualiza si esta correcto

# Custom Hooks

Abstrae y encapsular la parte de la logica de los componentes para que quede mucho mas limpio y la podemos reutilizar mucho mas.
La convencion, la nomenclatura que nos pide React.js que sigamos de forma opcionalmente obligarotia es que siempre empecemos por use ara que sepamos cual es una funcion y cual una custom hook

Componentes que manejen el estado (la logica compleja de la aplicación)
Componentes que manejen interfaz

# Efectos React.js

Sirven para encapsular esa parte pesada o demorada de la logica de los componetes y se pueda proteger para que unicamente se ejecuten cuando realmente se necesitan

# React Context

Es una herramienta que nos permite crear estados globales para evitar el problema de prop drilling, los componentes no se ven en forma de arbol (padres, hijos, abuelos), si no solo como componentes, sin importar en el nivel en el que esten, lo que nos permite REACT CONTEXT, los estados globales de la aplicacion, es que todos los componentes puedan comunicarse directamente con el estado, con el contexto global de la aplicacion y de esta forma no vamos a tener componentes que pasan informacion a otros y otros a otros, siemplemente cada componente que necesite cierta informacion se la pide al conetxto (estado global)

# React Portals

Sirve para abrir portales  para teletrasnportar componentes de react entre nodos de HTML