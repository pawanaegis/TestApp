import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";

const RouteComponents =()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup.html" element={<Signup/>}/>
        </Routes>
    )

}

export default RouteComponents;