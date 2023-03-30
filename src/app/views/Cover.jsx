import {CpuChipIcon} from "@heroicons/react/20/solid";

function LandingPageHeader() {
    return (
        <div className="flex justify-between mx-[20rem]">
            <span className="p-5">
                <CpuChipIcon className="h-8 w-8 text-blue-600"/>
            </span>
            <span className="nav-center flex items-center">
                <span className="p-5 font-semibold">
                    Labs
                </span>
                  <span className="p-5 font-semibold">
                    Documentation
                </span>
                  <span className="p-5 font-semibold">
                    Security
                </span>
            </span>
            <span className="nav-left flex items-center">
                <button className=" font-semibold text-blue-600 rounded p-1 ring-2 ring-blue-600 hover:bg-blue-600 hover:backdrop-opacity-10 hover:text-gray-50 ease-in-out duration-150" >
                    Get Started
                </button>
            </span>
        </div>
    )
}


function CoverContent (){
    return (
        <div className="m-[150px]">
            <span>
                <h1 className="text-black text-7xl font-light">DEFI Real Yields
                    <br/> On Autopilot  </h1>
                <p className="py-12 text-gray-500">
                    One-click access to the automated and risk
                    <br/>adjusted yield strategies  </p>
                <div className="gap-6">
                    <button type="button" className="px-4 py-2 bg-blue-600 text-gray-50 rounded font-semibold hover:ring-2 hover:ring-blue-600 hover:bg-transparent hover:text-blue-600 ease-in-out duration-150 m-2">JOIN PROFILE PERTRA</button>
                    <button type="button" className="px-4 py-2  rounded backdrop-blur-xl bg-gray-400/10 font-semibold hover:text-blue-600 hover:bg-transparent hover:ring-2 hover:ring-blue-500 ease-in-out duration-150">READ OUR DOCUMENTATION</button>
                </div>
            </span>
            <span>
            </span>
        </div>
    )
}

function RiskProfile () {
    return (
        <div className="h-screen">
            <p>Risk profile</p>
            <div>
                <span>
                    <h1>
                        Profitable Yield
                        <br/>strategies for different
                        <br/>market conditions and
                        <br/>risk profiles
                    </h1>
                </span>
            </div>
        </div>
    )
}


export default function Cover() {

    return (
        <div>
            <div className="z-1">
                <LandingPageHeader/>
                <CoverContent />
                <RiskProfile />

            </div>
            <div
                className="bg-gradient-to-bl from-indigo-500 from-40% via-sky-500 via-30% to-emerald-500 to-60%  w-96 h-40   blur-3xl absolute top-0 right-0 -z-1">

            </div>
            <div
                className="bg-gradient-to-r from-indigo-500 from-40% via-sky-500 via-30% to-emerald-500 to-60%  w-20 h-96   blur-3xl absolute bottom-4 left-0 -z-1">

            </div>


        </div>
    )
}