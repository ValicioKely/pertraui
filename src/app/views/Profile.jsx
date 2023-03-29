import {ProfileCard} from "../shared/components/ProfileCard";
import Report from "../shared/components/Report";
import PageHeader from "../shared/components/PageHeader";
import {Tab} from "@headlessui/react";

export function Profile() {
    return (
        <div>
            {/*Header*/}
            <PageHeader title="Profile" />
            {/*Navigation*/}
                <div>
                    <Tab.Group vertical >
                        <Tab.List className ="flex justify-evenly p-5" >
                            <Tab >Profile</Tab>
                            <Tab >Performance</Tab>
                            <Tab>Verification</Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel >
                                <div className="grid grid-cols-6 gap-2">
                                    <div className="col-span-1"></div>
                                    <div className="col-span-2">
                                        <ProfileCard/>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="grid grid-cols-12 gap-14">
                                            <Report />
                                        </div>

                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel >Performance  </Tab.Panel>
                            <Tab.Panel >Verification</Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            {/*Content*/}

        </div>
    )
}
