import React from "react";
import "./App.css"
import Navbar from "./app/layout/topBar/TopBar";
import Sidenav from "./app/layout/nav/SideNav";
import Section from "./app/layout/section/Section";


class App extends React.Component{


    render() {
        return (
            <div className= "bg-gray-100 ">
                <Navbar />
                <div className="h-screen grid grid-cols-4 lg:grid-cols-12">
                    <div className="col-span-1 lg:col-span-3">
                        <Sidenav />
                    </div>
                    <div className="col-span-3 lg:col-span-7 h-screen bg-gray-200 ">
                        <Section />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;