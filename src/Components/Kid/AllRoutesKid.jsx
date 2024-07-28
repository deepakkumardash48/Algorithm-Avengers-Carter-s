import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Kid from "./Kid";
import KidBoy from "./KidBoy";
import KidGirl from "./KidGirl";

const AllRoutesKid = () => {
    return (
        <Routes>
            <Route path="/" element={<Kid/>} />;
            <Route path="/kidboy" element={<KidBoy/>}/>;
            <Route path="/kidgirl" element={<KidGirl/>}/>;
        </Routes>
    )
}

export default AllRoutesKid;