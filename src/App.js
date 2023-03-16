import React from "react";
import "./App.css"
import Navbar from "./app/layout/topBar/TopBar";
import Sidenav from "./app/layout/sidenav/SideNav";
import {Outlet} from "react-router-dom";

export default function App (){
                return (
                <div className= "bg-gray-100 h-screen overflow-hidden">
                    <Navbar />
                    <Sidenav />
                    <Outlet />
                </div>);
}
