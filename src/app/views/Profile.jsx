import {ProfileCard} from "../shared/components/ProfileCard";
import Report from "../shared/components/Report";
import PageHeader from "../shared/components/PageHeader";
import {Tab} from "@headlessui/react";
import VerificationForm from "../shared/components/VerificationForm";
import Performance from "../shared/components/Performance";

export function Profile() {
    return (
        <div className="bg-gray-100 dark:bg-slate-900">
            {/*Header*/}
            <PageHeader title="Profile" />
            {/*Navigation*/}
                <div>
                    <Tab.Group vertical >
                        <Tab.List className ="flex justify-evenly p-5 text-gray-400" >
                            <Tab >Profile</Tab>
                            <Tab >Performance</Tab>
                            <Tab>Verification</Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel >
                                <div className="grid lg:grid-cols-2 place-content-center  px-20 h-auto">
                                    <div>
                                        <ProfileCard/>
                                    </div>
                                    <div>
                                        <Report />
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel > <Performance />  </Tab.Panel>
                            <Tab.Panel >
                                <div className="min-h-screen">
                                    <VerificationForm/>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            {/*Content*/}

        </div>
    )
}
