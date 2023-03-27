import {ProfileCard} from "../shared/components/ProfileCard";
import {NavLink} from "react-router-dom";
import Report from "../shared/components/Report";

function ProfileNav({link}) {

    const navlink = link.toLowerCase();
    return (
        <NavLink to={navlink}
                 className={({isActive, isPending}) =>
                     isActive ? " hidden w-28 lg:flex justify-center items-center group border-b-transparent border-b-4 border-b-blue-600 transition-all ease-in-out duration-300 "
                         : " hidden w-28 lg:flex justify-center items-center group border-b-transparent border-b-4  transition-all ease-in-out duration-300 "
                 }
        >
            {({isActive , isPending})=> <p className={isActive ? " text-blue-600 p-2" : " text-gray-500 p-2" } >
                {link}
            </p> }
        </NavLink>
    )
}

export function Profile() {
    return (
        <div>
            {/*Header*/}
            <div className="mx-20">
                <h1 className="text-gray-500 text-4xl p-5">Profile</h1>
                <hr/>
            </div>
            {/*Navigation*/}
                <div className="flex justify-evenly items-center">
                   <ProfileNav link="Profile" />
                   <ProfileNav link="Performance" />
                   <ProfileNav link="Verification" />
                </div>
            {/*Content*/}
            <div className="grid grid-cols-6 gap-2">
                <div className="col-span-1"></div>
                <div className="col-span-2">
                    <ProfileCard/>
                </div>
                <div className="col-span-2">
                    <h1 className="text-left text-gray-500 text-xl" >Rentability</h1>
                    <hr/>
                    <div className="grid grid-cols-12 gap-14">
                        <Report ratio={50} month="Jan" />
                        <Report ratio={30} month="Feb" />
                        <Report ratio={5} month="Mar" />
                        <Report ratio={20} month="Apr" />
                        <Report ratio={10} month="May" />
                    </div>

                </div>
            </div>
        </div>
    )
}
