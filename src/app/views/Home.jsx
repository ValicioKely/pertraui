import React from "react";
import Auth from "../core/auth/Auth";
import Sidenav from "../layout/sidenav/SideNav";
import { useLoaderData} from "react-router-dom";


export function Home() {
    const users = useLoaderData();
    console.log(users)
     return(
        <div className="grid grid-cols-8 gap-4 mt-3">
            <div className="col-span-3">
                <Sidenav />
            </div>
            <div className="col-span-3">
               <Auth />
            </div>
        </div>
    )
}