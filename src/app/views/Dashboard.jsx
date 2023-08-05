import Navbar from "../layout/topBar/TopBar";
import {Outlet} from "react-router-dom";

export default function Dashboard () {
    return (
        <>
            <Navbar />
            <Outlet />
        </>

    )
}