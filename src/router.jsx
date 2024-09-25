import {BrowserRouter, Routes, Route} from  'react-router-dom'
import Login from './pages/login'
import HomePage from './pages/home'



export default function Navigation(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<HomePage />}/>
                <Route path='/' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}