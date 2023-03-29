import React from "react";
import Auth from "../core/auth/Auth";
import {Tab} from "@headlessui/react"



export function Home() {
    return(
        <div className="grid grid-cols-8 gap-4 mt-3">
            <div className="col-span-3">
                {/*<Sidenav />*/}
                <Tab.Group vertical>
                    <Tab.List className = "block">
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>Content 1</Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <div className="col-span-3">
               <Auth />
            </div>
        </div>
    )
}