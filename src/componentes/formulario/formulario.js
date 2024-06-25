import "./formulario.css"
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";



const Formulario = () => {
    const ManejarEnvio = (evento) => {
        evento.preventDefault();
        console.log("Manejar envio");
    }

    return <section className="formulario">
        <form onSubmit = {ManejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required/>
            <ListaOpciones />
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario;