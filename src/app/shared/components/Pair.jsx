import {useEffect, useRef} from "react";


// function useFetch({url}) {
//     const [state , setState] = useState();
//
//     useEffect( function () {
//         ( async function () {
//             const response = await fetch("https://api.apilayer.com/currency_data/change?start_date=2023-03-27&end_date=2022-03-25");
//             const responseData = await response.text();
//             if (response.ok) {
//                 setState(responseData);
//             }else{
//                 JSON.stringify(responseData)
//             }
//
//         })()
//     } )
//     return(
//         [state])
// }

function Canvas (){


    const canvasRef = useRef(null);



    useEffect(
        function (){
            const canvas =  canvasRef.current;
            const ctx =  canvas.getContext("2d");
            ctx.moveTo(0 , 100);
            ctx.lineTo(10 , 50);
            ctx.lineTo(20 , 40);
            ctx.lineTo(30 , 70);
            ctx.lineTo(40 , 30);
            ctx.lineTo(50 , 80);
            ctx.lineTo(60 , 50);
            ctx.stroke();

        }

    )
    return(
        <canvas ref={canvasRef} className="w-[100px] h-[50px]">
1
        </canvas>
    )
}


export default function Pair  ({pair , ratio ,isDown}) {

    return (
        <div className="h-auto ring-2 ring-green-400 ring-offset-1 w-fit  rounded-xl shadow-xl">
            <div >
                <p className="text-left text-2xl text-gray-600 p-2  ">{pair}</p>
            </div>

            <div>
                <h1 className={isDown ? "text-center text-red-600 text-4xl p-10" : "text-center text-green-600 text-4xl p-10"}>{ratio}</h1>
            </div>
            <Canvas />
        </div>
    );
}