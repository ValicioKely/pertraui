import {Register} from "./Register";
import {Login} from "./Login";
import {NavLink} from "react-router-dom";
import {useCallback, useState} from "react";


export default function Auth() {
    const [isMember , setMember] = useState(true) ;
    const handleAuth = useCallback(() => {
        setMember(isMember => isMember = !isMember) ;
    } , [])
    return (
        <div className="shadow-xl flex justify-center w-fit h-full py-10 px-10 ">
            <div>
                {isMember ? <Login /> : <Register />}
                <p className="text-center text-gray-500">
                    <button  onClick={handleAuth} >{isMember ? "Do not have an account yet ?" : "Already member?"}</button>
                </p>
                <NavLink to="/help">
                    <p className="text-center text-gray-500">Need help?</p>
                </NavLink>
            </div>
        </div>
    )
}