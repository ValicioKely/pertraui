import React from "react";
import "./App.css"
import {RecoilRoot} from "recoil";
// import Cover from "./app/views/Cover";
import Navbar from "./app/layout/topBar/TopBar";
import {Outlet} from "react-router-dom";
import env from "react-dotenv";

export default function App (){
    console.log(env.API_URL);

                return (
                    <RecoilRoot >
                        <div className= "bg-gray-100 dark:bg-slate-900 h-screen">
                            <Navbar />
                            <Outlet />
                            {/*<Cover />*/}
                        </div>
                    </RecoilRoot>
                );

}
