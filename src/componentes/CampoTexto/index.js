import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const [valor, setValor] = useState("");
    const manejarCambio = (e) => {
        console.log(e.target.value);
        setValor(e.target.value);
    }
    return <div className="campo-texto">
    <label>{ props.titulo }</label>
    <input 
    placeholder={props.placeholder} 
    required={props.required}
    onChange={manejarCambio}
    />
    </div>
}

export default CampoTexto