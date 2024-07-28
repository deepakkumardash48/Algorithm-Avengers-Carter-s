import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ToddlerBoy from "./ToddlerBoy";
import ToddlerGirl from "./ToddlerGirl";
import Toddler from "./Toddler";

const AllRoutesToddler = () => {
    return (
        <Routes>
            <Route path="/" element={<Toddler/>} />;
            <Route path="/toddlerboy" element={<ToddlerBoy/>}/>;
            <Route path="/toddlergirl" element={<ToddlerGirl/>}/>;
        </Routes>
    )
}

export default AllRoutesToddler;