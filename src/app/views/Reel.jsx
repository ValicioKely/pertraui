import Pair from "../shared/components/Pair";
import PageHeader from "../shared/components/PageHeader";

export function Reel() {
    return (
        <>
            <PageHeader title="Symbol" />
            <div className="grid grid-cols-12 gap-24 mt-24 ">
                <div className="col-span-1"></div>

                <div className="col-span-3">
                    <Pair pair="USD/JPY" ratio="1.5%" isDown={true}/>
                </div>
                <div className="col-span-3">
                    <Pair pair="EUR/USD" ratio="0.12%"/>
                </div>
                <div className="col-span-3">
                    <Pair pair="EUR/JPY" ratio="0.67%" isDown={true}/>
                </div>
            </div>
        </>
    )
}