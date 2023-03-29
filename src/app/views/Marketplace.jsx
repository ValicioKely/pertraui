import {FlipCard} from "../shared/components/FlipCard";
import PageHeader from "../shared/components/PageHeader";

export function Marketplace() {
    return (
        <div>
            <PageHeader title="Program"/>
            <div className="flex justify-center">
                <FlipCard/>
            </div>
        </div>)
}