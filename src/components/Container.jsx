import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RestaurantsMenu from '../pages/RestaurantsMenu'
import Restaurant from '../pages/Restaurant'
import Conta from '../pages/Conta'

import './Container.css'

const Container = () => {

    return(
        <div className="Container">
            <Router>
                <Routes>
                    <Route path='/' element={<RestaurantsMenu/>}/>
                    <Route path='/conta' element={<Conta/>}/>
                    <Route path='/restaurant' element={<Restaurant/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Container