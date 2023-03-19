import {SearchField} from "../../shared/components/SearchField";
import {
    Bars3Icon,
    BellIcon,
    BuildingStorefrontIcon, ChartBarIcon,
    ChatBubbleLeftRightIcon, CpuChipIcon,
    HomeIcon, Squares2X2Icon, UserCircleIcon,
} from "@heroicons/react/20/solid";
import {NavLink} from "react-router-dom";

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
            {Icon && <Icon
                className="bg-gray-200 rounded-full p-2 h-10 w-10 text-gray-500 hover:bg-gray-400 transition-all ease-in-out duration-300"/>}
        </div>
    )
}


export default function Navbar() {
    return (
        <div className="bg-white border-b-2 shadow pr-3 pl-3 flex justify-between">
            <div className="p-2 nav-left flex justify-evenly items-center gap-2">
                <CpuChipIcon className="h-6 w-6 text-green-300"/>
                <SearchField placeholder="Search"/>
            </div>

            <div className="nav-center flex justify-evenly gap-10 ">
                <MainNav link="home" Icon={HomeIcon}/>
                <MainNav link="reel" Icon={ChartBarIcon}/>
                <MainNav link="marketplace" Icon={BuildingStorefrontIcon}/>
                <MainNav link="profile" Icon={UserCircleIcon}/>
            </div>


            <div className="nav-right flex justify-evenly items-center gap-4">
                <RightNav Icon={Squares2X2Icon}/>
                <RightNav Icon={ChatBubbleLeftRightIcon}/>
                <RightNav Icon={BellIcon}/>
                <RightNav Icon={Bars3Icon}/>
            </div>
        </div>
    )
}

