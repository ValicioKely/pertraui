import { Switch } from '@headlessui/react'
import {useEffect, useState} from "react";
import {themeState} from "../../core/store";
import {useRecoilValue} from "recoil";

export function ThemeButton() {
    const [enabled, setEnabled] = useState(false);
    const theme  = useRecoilValue(themeState)

    useEffect(
        () =>{
            if (enabled) {
                document.documentElement.classList.add(theme)
            }else {
                document.documentElement.classList.remove(theme)
            }
        }, [enabled , theme]
    )

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
                enabled ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
            <span className="sr-only">Enable notifications</span>
            <span
                className={`${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
        </Switch>
    )
}