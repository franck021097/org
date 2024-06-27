import Colaborador from "../Colaborador/Colaborador";
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {

    const {colorPrimario, titulo, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;

    
    const colorRGBA = hexToRgba(colorPrimario, '0.6')

    const estiloEquipoContainer = {backgroundColor: colorRGBA }


    const estiloTituloEquipo = {borderColor: colorPrimario}

    return <>{
        colaboradores.length > 0 && <section className="equipo" style={ estiloEquipoContainer }>
        <input 
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={ (e) => { 
                actualizarColor(e.target.value,id);
            }}
        />


        <h3 style={ estiloTituloEquipo }>{titulo}</h3>
        <div className="Colaboradores">

            {
                colaboradores.map( (colaborador, index) => <Colaborador 
                datos={colaborador} 
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />)
            }
        </div>
        </section>
    }</>
     
}


export default Equipo