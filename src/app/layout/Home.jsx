import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./topBar/TopBar";
import Cover from "./Cover";
import {currentUserIdState} from "../core/store";
import {useRecoilValue} from "recoil";


export function Home() {
    const user = useRecoilValue(currentUserIdState);
    return (
        <div>
            {user
                ?
                <>
                    <Navbar />
                    <Outlet />
                </>

               :
                <Cover />
            }
        </div>



    )

}