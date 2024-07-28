import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NP from './NP'
import CharShop from './CharShop'
import FanShop from './FanShop'

const AllRoutesNP = () => {
    return (
        <Routes>
            <Route path='/' element={<NP/>} />;
            <Route path='/charshop' element={<CharShop />} />;
            <Route path='/fanshop' element={<FanShop />} />;
        </Routes>
      )
}

export default AllRoutesNP