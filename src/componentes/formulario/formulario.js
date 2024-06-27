import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";
import { v4 as uuidv4 } from 'uuid';


const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const {registrarColaborador} = props

    const ManejarEnvio = (evento) => {
        evento.preventDefault();

        let datosEnviar = {
            id: uuidv4(),
            nombre,
            puesto,
            foto,
            equipo
        }

        registrarColaborador(datosEnviar);
    }

    return <section className="formulario">
        <form onSubmit = {ManejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required valor={nombre} 
            actualizarValor={setNombre}/>
            
            <CampoTexto 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required valor={puesto} 
            actualizarValor={setPuesto}/>
            
            <CampoTexto 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required valor={foto} 
            actualizarValor={setFoto}/>
            
            <ListaOpciones 
            required valor={equipo} 
            actualizarValor={setEquipo}
            equipos={props.equipo}/>
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario;