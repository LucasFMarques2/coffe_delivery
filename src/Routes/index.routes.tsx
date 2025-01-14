import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home' 
import { Checkout } from '../Pages/Checkout'
import { DefaultLayout } from '../Layouts'

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/checkout' element={<Checkout/>}/>    
            </Route>
        </Routes>
    )
}