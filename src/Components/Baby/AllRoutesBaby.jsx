import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Baby from "./Baby";
import BabyBoy from "./BabyBoy";
import BabyGirl from "./BabyGirl";
import BabyNeutral from "./BabyNeutral";


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Baby/>} />;
            <Route path='/babyboy' element={<BabyBoy />} />;
            <Route path='/babygirl' element={<BabyGirl />} />;
            <Route path='/babyneutral' element={<BabyNeutral/>} />;
        </Routes>
      )
}

export default AllRoutes