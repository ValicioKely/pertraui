import {SearchField} from "../../shared/components/SearchField";
import {
    Bars3Icon,
    BellIcon,
    BuildingStorefrontIcon,
    ChatBubbleLeftRightIcon, CpuChipIcon,
    FlagIcon,
    HomeIcon, Squares2X2Icon,
    UserGroupIcon
} from "@heroicons/react/20/solid";

function NavRow(props) {
    return (
        <div className=" p-2 w-28 flex justify-center group border-b-transparent border-b-4 hover:border-b-blue-600 transition-all ease-in-out duration-300 ">
            {props.children}
        </div>
    )
}

export default function Navbar() {
    return (
        <div className= "bg-white border-b-2 shadow pr-3 pl-3 flex justify-between">


            <div className="nav-left flex justify-evenly items-center gap-2">
                <CpuChipIcon className="h-6 w-6 text-green-300" />
                <SearchField placeholder = "Search Facebook"/>
            </div>


            <div className="nav-center flex justify-evenly gap-10 ">
                <NavRow >
                    <HomeIcon className="h-8 w-8 text-gray-300 group-hover:text-blue-600 " />
                </NavRow>
                <NavRow>
                    <FlagIcon className="h-8 w-8 text-gray-300 group-hover:text-blue-600" />
                </NavRow>
                <NavRow>
                    <BuildingStorefrontIcon className="h-8 w-8 text-gray-300 group-hover:text-blue-600" />
                </NavRow>
                <NavRow>
                    <UserGroupIcon className="h-8 w-8 text-gray-300 group-hover:text-blue-600" />
                </NavRow>
            </div>


            <div className="nav-right flex justify-evenly items-center gap-4">
                <Squares2X2Icon className="bg-gray-200 rounded-full p-2 h-10 w-10 text-gray-500 hover:bg-gray-400 transition-all ease-in-out duration-300"/>
                <ChatBubbleLeftRightIcon className="bg-gray-200 rounded-full p-2 h-10 w-10 text-gray-500 hover:bg-gray-400 transition-all ease-in-out duration-300" />
                <BellIcon className="bg-gray-200 rounded-full p-2 h-10 w-10 text-gray-500 hover:bg-gray-400 transition-all ease-in-out duration-300"/>
                <Bars3Icon className="bg-gray-200 rounded-full p-2 h-10 w-10 text-gray-500 hover:bg-gray-400 transition-all ease-in-out duration-300"/>
            </div>
        </div>
    )
}

