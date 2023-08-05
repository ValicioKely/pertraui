import {FlipCard} from "../shared/components/FlipCard";
import PageHeader from "../shared/components/PageHeader";

export function Marketplace() {
    return (
        <div>
            <PageHeader title="Program"/>
            <div className="text-center">
                <h1 className="text-center text-gray-600 text-6xl pt-4">
                    Why Petra?
                </h1>
                <p className="text-xl text-gray-400 py-20">
                    If you are looking for a reliable and affordable forex risk management program ,<br/>
                    you can choose from our flexible pricing plans that suit your needs and budget. <br/> Don't let forex risk ruin your business.
                </p>
            </div>
            <div className="flex justify-center my-10">

                <FlipCard/>
            </div>
        </div>)
}