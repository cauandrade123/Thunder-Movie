import './index.scss'
import Logo from '../../assets/images/logo.png'
import axios from 'axios'



export default function Asidebar(){

    function deslogar(){
        axios.put('http:localhost:3001/')
    }


    return(
    <aside>
        <img src={Logo} alt="Logo" className="logo" />
        <nav>
            <p>Home</p>
            <p>Cadastrar</p>
            <p>Consultar</p>
        </nav>
        <p onClick={deslogar}>Sair</p>
    </aside>
    )
}