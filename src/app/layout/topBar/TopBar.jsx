import {SearchField} from "../../shared/components/SearchField";
import {
    BuildingStorefrontIcon, ChartBarIcon,
     CpuChipIcon,
    HomeIcon, UserCircleIcon,
} from "@heroicons/react/20/solid";
import {NavLink} from "react-router-dom";
import {NotificationComponent} from "../../shared/components/Notification";
import {MenuComponent} from "../../shared/components/Menu";
import {SettingComponent} from "../../shared/components/Setting";

function MainNav({link, Icon}) {
    return (
        <NavLink to={link}
                 className={({isActive, isPending}) =>
                     isActive ? " hidden w-28 lg:flex justify-center items-center group border-b-4 border-b-blue-600 transition-all ease-in-out duration-300 "
                         : " hidden w-28 lg:flex justify-center items-center group border-b-transparent border-b-4  transition-all ease-in-out duration-300 "
                 }
        >
            {({isActive , isPending})=> Icon && <Icon className={isActive ? "h-8 w-8 text-blue-600" : "h-8 w-8 text-gray-300" } /> }
        </NavLink>
    )
}

function RightNav({Icon}) {
    return (
        <div>
            {Icon}
        </div>
    )
}


export default function Navbar() {
    return (
        <div className="bg-white dark:bg-slate-700 border-b-2 shadow dark:shadow-gray-300 pr-3 pl-3 flex justify-between">
            <div className="p-2 nav-left flex justify-evenly items-center gap-2">
                <CpuChipIcon className="h-8 w-8 text-green-300"/>
                <div className="hidden md:block">
                    <SearchField placeholder="Search"/>
                </div>
            </div>

            <div className="nav-center flex justify-evenly gap-10 ">
                <MainNav link="home" Icon={HomeIcon}/>
                <MainNav link="reel" Icon={ChartBarIcon}/>
                <MainNav link="marketplace" Icon={BuildingStorefrontIcon}/>
                <MainNav link="profile" Icon={UserCircleIcon}/>
            </div>


            <div className="nav-right flex justify-evenly items-center gap-4">
                <RightNav Icon={<MenuComponent />}/>
                <RightNav Icon={<NotificationComponent />}/>
                <RightNav Icon={<SettingComponent />}/>
            </div>
        </div>
    )
}

