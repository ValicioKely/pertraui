import Logo from "../../shared/icons/Logo";
import Message from "../../shared/icons/Message";
import Bell from "../../shared/icons/Bell";
import Humburger from "../../shared/icons/Humburger";
import SearchModal from "../../shared/components/SearchModal";

function NavLink(props) {
    return(
        <li className="text-blue-300 hover:text-blue-900 ease-in-out duration-200">
            {props.children}
        </li>
    )
}
function NavItem(props) {
    return (
        <ul className= "flex flex-row space-x-5 p-5 ">
            {props.children}
        </ul>
    )
}
function NavBrand() {
    return(
        <div className="flex justify-between gap-2 absolute top-0 left-0 m-5 text-stone-500 hover:text-stone-900 ease-in-out duration-200">
            <div>
                <Logo />
            </div>
            <div className="m-auto">
                <SearchModal />
            </div>
        </div>
    )
}
export default function Navbar() {
    return (
        <div className= "bg-white shadow-lg  flex justify-end relative">
            <NavBrand />
            <NavItem >
                <NavLink>
                    <Message />
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

