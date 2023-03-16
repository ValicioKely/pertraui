import {
    BuildingStorefrontIcon,
    ComputerDesktopIcon,
    CubeIcon,
    UserGroupIcon,
    UsersIcon
} from "@heroicons/react/20/solid";
import { NavLink} from "react-router-dom";

function SidenavRow({title , Icon ,color}) {

    const className =  "h-6 w-6 " + color;
    const link = title.toLowerCase();
    return (
        <NavLink to={link} className=" p-1 flex justify-start items-center gap-5 hover:bg-gray-300 rounded-xl">
            {Icon && <Icon className={className} />}
            <p className="text-xl">{title}</p>
        </NavLink>
    )
}
export default function Sidenav (){
    return (
       <div className="m-7">
           <SidenavRow Icon = {CubeIcon} color ="text-amber-300" title=" Games"  />
           <SidenavRow Icon = {UsersIcon} color ="text-green-500"  title=" Friends"  />
           <SidenavRow Icon = {UserGroupIcon} color ="text-blue-900" title=" Group"  />
           <SidenavRow Icon = {BuildingStorefrontIcon} color ="text-blue-300" title=" Marketplace"  />
           <SidenavRow Icon = {ComputerDesktopIcon} title=" Videos"  />
       </div>
    )
}

