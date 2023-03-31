    import {CpuChipIcon} from "@heroicons/react/20/solid";
    import AuthModal from "../core/auth/AuthModal";
    import {FlipCard} from "../shared/components/FlipCard";

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
                    <AuthModal />
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
            <div className="mt-[100px] mx-[150px] h-screen">
                <p className="text-blue-600 font-semibold  text-xl py-9">RISK PROFILE </p>
                <div className="flex justify-evenly py-20">
                    <span className="m-2 w-fit">
                        <h1 className="text-black text-7xl font-light ">
                            Profitable Yield
                            <br/>strategies for different
                            <br/>market conditions and
                            <br/>risk profiles
                        </h1>
                    </span>
                    <spapn className="py-20" >
                        <p className="py-2">
                            We integrate with multiple Blockchain and
                            <br/>DeFi protocol and design back tested and
                            <br/>scalable
                            yield that stand the best of
                            <br/>the time
                        </p>
                        <p className="py-2">
                            Choose the asset you want to have exposure
                            <br/>to (USD , ETH , etc) and select the strategy that
                            <br/>fits your risk/reward profile with a One-click
                            <br/>investment
                        </p>
                    </spapn>
                </div>
                <div className="flex justify-center">
                    <FlipCard />
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