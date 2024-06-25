import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';
import { useState } from "react"

function App() {
  const [mostrarFormulario, actualizarEstadoFormulario] = useState(false);

  const obtenerEstadoFormulario = () => {
    actualizarEstadoFormulario(!mostrarFormulario);
  }

  return (
    <div className="app-container">
        <Header/>
        { mostrarFormulario ? <Formulario/> : null}
        <MiOrg verOcultar={obtenerEstadoFormulario}/>
    </div>
  );
}

export default App;
