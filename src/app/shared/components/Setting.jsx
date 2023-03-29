import {Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid";
import {useCallback, useState} from "react";
import {ThemeButton} from "./ThemeButton";

export function SettingComponent() {
    const [isShow, setShow] = useState(false);
    const handleClick = useCallback(() => {
        setShow(s => !s);
    }, [])
    return (
        <>
             <span onClick={handleClick} className="relative">
                    <Bars3Icon
                        className="bg-gray-200 rounded-full p-2 h-10 w-10 text-gray-500 hover:bg-gray-400 transition-all ease-in-out duration-300"/>
        </span>
            {isShow ? <div className="bg-gray-50 dark:bg-slate-700 w-[300px] h-screen absolute bottom-0 right-0 shadow-xl z-100 ">
                <p className="text-right p-3">
                    <button type="button" onClick={handleClick}>
                        <XMarkIcon
                            className="bg-gray-200 rounded-full p-2 h-10 w-10 text-gray-500 hover:bg-gray-400 transition-all ease-in-out duration-300"/>

                    </button>
                </p>


                <p>
                    Enable dark mode
                    <ThemeButton />
                </p>

            </div> : ''}
        </>

    )
}