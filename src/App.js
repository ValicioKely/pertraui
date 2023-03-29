import React from "react";
import "./App.css"
import {RecoilRoot} from "recoil";
import Navbar from "./app/layout/topBar/TopBar";
import {Outlet} from "react-router-dom";





export default function App (){


                return (
                    <RecoilRoot >
                        <div className= "bg-gray-100 h-screen ">
                            <Navbar />
                            <Outlet />

                        </div>
                    </RecoilRoot>
                );

}
