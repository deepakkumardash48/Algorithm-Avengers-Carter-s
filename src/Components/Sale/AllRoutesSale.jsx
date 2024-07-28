import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sale from './Sale'
import Sale1 from './Sale1'
import Clearance from './Clearance'
import Under10 from './Under10'


const AllRoutesSale = () => {
    return (
        <Routes>
            <Route path='/' element={<Sale/>} />;
            <Route path='/sale1' element={<Sale1 />} />;
            <Route path='/clearance' element={<Clearance />} />;
            <Route path='/under10' element={<Under10/>} />;
        </Routes>
      )
}

export default AllRoutesSale