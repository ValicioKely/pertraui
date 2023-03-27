export default function Report ({ratio , month}) {

    const heightForRatio =parseInt( (96 * ratio) / 100 ) ;
    const heightForTrans = parseInt(96 - heightForRatio);

    const classForTrans = "bg-transparent h-" + heightForTrans;
    const classForRatio = "bg-blue-500 h-" + heightForRatio;

    return (
        <div>
            <div className="h-96">
                <p className="text-green-400 text-2xl">{ratio}%</p>
                <div className="bg-gray-300 h-full w-10">
                    <div className={classForRatio}></div>
                    <div className={classForTrans}></div>
                </div>
                <p className="text-gray-400 text-2xl">{month}</p>
            </div>
        </div>
    )
}