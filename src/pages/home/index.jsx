import Asidebar from '../../components/asidebar'
import Cabecalho from '../../components/cabecalho'
import './index.scss'





export default function HomePage(){
    return(
        <main>
            <Asidebar className='sim' /> 
            <Cabecalho />
        </main>
    )
}