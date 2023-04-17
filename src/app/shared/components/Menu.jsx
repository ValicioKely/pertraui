import {Squares2X2Icon} from "@heroicons/react/20/solid";
import {Transition} from "@headlessui/react";
import {useState} from "react";


function MenuItem () {
    return (
        <div>
            menuItem
        </div>
    )
}

export function MenuComponent() {

    const [isShow , setShow] = useState(false);

    const handleClick = () => {
        setShow(c => !c)
    }


    return (
        <>
            <button type="button" onClick={handleClick}>
                <Squares2X2Icon className="bg-gray-200 rounded-full p-2 h-10 w-10
         text-gray-500 hover:bg-gray-400 transition-all ease-in-out duration-300 "/>
            </button>


                <Transition
                show ={isShow}>
                    <div className="bg-gray-50 absolute top-[6%] right-[10%] h-96 w-96 z-10 rounded-xl shadow-xl">
                        <MenuItem />
                    </div>
                </Transition>
        </>
    )
}