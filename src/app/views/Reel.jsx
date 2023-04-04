import Pair from "../shared/components/Pair";
import PageHeader from "../shared/components/PageHeader";

export function Reel() {

    const pairs =  [
        {
            pair : "USD/JPY",
            ratio: "1.5%",
        },
        {
            pair : "EUR/JPY",
            ratio: "-0.5%",
        },
        {
            pair : "USD/CAD",
            ratio: "0.5%",
        },
        {
            pair : "XAU/USD",
            ratio: "1.5%",
        },
        {
            pair : "AUD/NZD",
            ratio: "0.8%",
        },
        {
            pair : "GBP/USD",
            ratio: "0.25%",
        }
    ];


    return (
        <div className="h-auto bg-gray-100 dark:bg-slate-900 py-12">
            <PageHeader title="Symbol" />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-24 mx-10 ">
                    {
                        pairs.map( onePair => {
                            return (
                                <Pair pair={onePair.pair} ratio={onePair.ratio}/>
                            )
                        }
                        )
                    }
            </div>
        </div>
    )
}