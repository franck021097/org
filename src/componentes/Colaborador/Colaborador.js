import { useState } from "react"
import "./Colaborador.css"
import { TiDelete } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";

const Colaborador = (props) => {
    const {nombre, puesto, foto, id, favorito} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props
    
    return <div className="colaborador" id={id}>
                <TiDelete size={ 25 } className="eliminar" onClick={ () => eliminarColaborador(id)}/>
                <div className="encabezado" style={ {backgroundColor: colorPrimario} }> <img src={foto} alt={nombre}/></div>

                <div className="info">
                    <p className="nombre">{nombre}</p>
                    <p className="puesto">{puesto}</p>

                    {favorito ? <FaHeart size={25}  onClick={() => { like(id)}} color="red"/> : <FaHeart size={25}   color="grey" onClick={() => { like(id)}}/>}                
                    
                </div>
        </div>
}


export default Colaborador