import Pair from "../shared/components/Pair";

export function Reel (){
    return (
        <div className="flex justify-center items-center h-full">
            <Pair pair="USD/JPY" ratio="1.5%" isDown={true} />
            <Pair pair="EUR/USD" ratio="0.12%" />
            <Pair pair="EUR/JPY" ratio="0.67%" isDown={true} />
        </div>
    )
}