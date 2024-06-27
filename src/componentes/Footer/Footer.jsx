import "./Footer.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
            <div className='redes'>
                <a href='https://github.com/franck021097'>
                    <FaGithub size={30} color="#000" />
                </a>
                <a href='https://www.linkedin.com/in/francisco-javier-castro-alcantar-89617811a/'>
                    <FaLinkedin size={30} color="#fff"/>
                </a>
                <a href='https://franck021097-github-io.vercel.app/'>
                    <CgWebsite size={30} color="gold"/>
                </a>
            </div>
            <img src='/img/Logo.png'  alt='org' />
            <strong>Desarrollado en Alura</strong>
        </footer>
}

export default Footer