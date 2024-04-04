import React from "react";
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom";

const GuestLayout = ()=>{
    return(
       <React.Fragment>
            <NavBar />
            <Outlet /> 
       </React.Fragment>
    )
}

export default GuestLayout;