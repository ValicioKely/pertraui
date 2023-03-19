
export default function Pair  ({pair , ratio ,isDown}) {
    return (
        <div className="h-auto border-2 border-green-400 w-1/2  rounded-xl shadow-xl">
            <div >
                <p className="text-left text-2xl text-gray-600 p-2  ">{pair}</p>
            </div>

            <div>
                <h1 className={isDown ? "text-center text-red-600 text-4xl p-10" : "text-center text-green-600 text-4xl p-10"}>{ratio}</h1>
            </div>
            <div className="bg-blue-600 opacity-50 h-28 rounded ">

            </div>
        </div>
    );
}