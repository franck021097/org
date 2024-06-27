import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';
import { useState } from "react"
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [mostrarFormulario, actualizarEstadoFormulario] = useState(false);
  const [nuevoColaborador, setColaborador] = useState([
    { id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      favorito: false
    },
    { id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      favorito: false
    },
    { id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      favorito: false
    },
    { id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      favorito: false
    }
  ]);

  const [equipos, actualizarEquipo] = useState([
    { id: uuidv4(),
      titulo:"Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9"
    },
    {id: uuidv4(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {id: uuidv4(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {id: uuidv4(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {id: uuidv4(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {id: uuidv4(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {id: uuidv4(),
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }]);


  const registrarColaborador = (colaborador) => {
    setColaborador([...nuevoColaborador, colaborador]);
  }

  const eliminarColaborador = (id) => {
    const nuevaListaColaboradores = nuevoColaborador.filter( (colaborador) => colaborador.id != id )
    setColaborador(nuevaListaColaboradores);
  }

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map( (equipo) => {
      if(equipo.id === id) equipo.colorPrimario = color

      return equipo
    } )

    actualizarEquipo(equiposActualizados);
  }
  
  const obtenerEstadoFormulario = () => {
    actualizarEstadoFormulario(!mostrarFormulario);
  }

  const like = (id) => {
      const nuevoColaboradorFavorito = nuevoColaborador.map( (colaborador) => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    } )
    setColaborador(nuevoColaboradorFavorito)
  }

  return (
    <div className="app-container">
        <Header/>
        { mostrarFormulario && <Formulario 
        equipo={equipos.map( (equipo) => equipo.titulo )} 
        registrarColaborador={registrarColaborador}/>}
        <MiOrg verOcultar={obtenerEstadoFormulario}/>
        
        {
          equipos.map( (equipo) => {
            return <Equipo 
            datos={equipo} 
            key={equipo.id} 
            colaboradores={nuevoColaborador.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
            />
          } )
        }

        <Footer/>
        
    </div>
  );
}

export default App;
