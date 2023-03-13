import {useState} from "react";
import {NavIconContainer} from "../../layout/topBar/TopBar";


export default function Humburger (){

    const [show , setShow] = useState(false);
    // setShow(show => !show)
    const toggleNav = () =>{
        setShow(show => !show)
    }
    return (
        <div>
            <button type="button" onClick={toggleNav} >
                <NavIconContainer>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </NavIconContainer>

            </button>
            { show ?
            <div className=" h-20 w-1/6 bg-gray-400 absolute top-98 right-0 rounded shadow-lg">
                hello
            </div>
                : ''}


        </div>


    )
}