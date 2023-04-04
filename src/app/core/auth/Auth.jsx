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
            <div className="bg-gray-50 dark:bg-slate-700 shadow-xl flex justify-center w-fit h-full rounded-xl py-10 px-10 backdrop-blur-2xl backdrop-opacity-10 ">
                <div>
                    {isMember ? <Login /> : <Register />}
                    <p className="text-center text-gray-500 dark:text-gray-50">
                        <button  onClick={handleAuth} >{isMember ? "Do not have an account yet ?" : "Already member?"}</button>
                    </p>
                    <NavLink to="/help">
                        <p className="text-center text-gray-500 dark:text-gray-50">Need help?</p>
                    </NavLink>
                </div>
            </div>
        )
    }