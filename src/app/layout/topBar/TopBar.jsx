import Message from "../../shared/icons/Message";
import Bell from "../../shared/icons/Bell";
import Humburger from "../../shared/icons/Humburger";
import SearchModal from "../../shared/components/SearchModal";

function NavLink(props) {
    return(
            <li className="text-gray-500  ">
                {props.children}
            </li>
    )
}
function NavItem(props) {
    return (
        <ul className= "flex flex-row space-x-5 p-3 ">
            {props.children}
        </ul>
    )
}

export function NavIconContainer (props){
    return (<div className=" bg-gray-100 hover:bg-gray-200 h-12 w-12 m-auto p-3 rounded-full  ease-in-out duration-200">
        {props.children}
    </div>)
}


function NavBrand() {
    return(
        <div className="flex p-3 justify-between gap-5 absolute top-0 left-0 text-stone-500 hover:text-stone-900 ease-in-out duration-200">
            <div className="p-1">
               <h1 className="text-2xl text-blue-400" >F</h1>
            </div>
            <div>
                <SearchModal />
            </div>
        </div>
    )
}
export default function Navbar() {
    return (
        <div className= "bg-white border-b-2 border-b-gray-400 pr-3 pl-3  flex justify-end relative">
            <NavBrand />
            <NavItem >
                <NavLink>
                        <Message  />
                </NavLink>
                <NavLink>
                        <Bell />
                </NavLink>
                <NavLink >
                        <Humburger />
                </NavLink>
            </NavItem>
        </div>
    )
}

