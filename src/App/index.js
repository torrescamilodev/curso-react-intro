import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


// Se envia al componente AppUI como contenido como children del contexto, del componente TodoProvider,
// de esta forma el componente AppUI y todos los componentes hijo van a poder tener acceso a la informacion
// del contexto
function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
