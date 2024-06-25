import "./MiOrg.css"

const MiOrg = (props) => {
    return <section className="orgSection">
        <h3>Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.verOcultar}/>
    </section>
}


export default MiOrg