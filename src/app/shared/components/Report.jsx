//var CanvasJSReact = require('./canvasjs.react');
import CanvasjsReact from "../../../assets/canvasjs.react";

var CanvasJSChart = CanvasjsReact.CanvasJSChart;



export default function Report() {

    const options = {
        animationEnabled: true,
        backgroundColor : "transparent",
        theme: "light", // "light1", "dark1", "dark2"
        title:{
            text: "Rentability",
            fontColor : "grey",
            fontFamily: "arial"
        },
        axisY: {
            title: "Profit Rate",
            fontColor : "grey",
            fontFamily: "arial",
            suffix: "%"
        },
        axisX: {
            title: "Week of Year",
            prefix: "W",
            interval: 2
        },
        data: [{
            type: "line",
            color:"rgb(74 222 128)",
            toolTipContent: "Week {x}: {y}%",
            dataPoints: [
                { x: 1, y: 0 },
                { x: 2, y: 6 },
                { x: 3, y: 10 },
                { x: 4, y: 2 },
                { x: 5, y: 5 },
                { x: 6, y: -3 },
                { x: 7, y: 1 },
                { x: 8, y: 4 },
                { x: 9, y: 7 },
                { x: 10, y: -5 },
                { x: 11, y: 10 },
                { x: 12, y: 15 },
                { x: 13, y: 5 },
                { x: 14, y: 3 },
                { x: 15, y: 12 },
                { x: 16, y: 5 },
                { x: 17, y: 4.5 },
                { x: 18, y: 20 },
                { x: 19, y: 21 },
                { x: 20, y: 12 },
                { x: 21, y: 10 },
                { x: 22, y: 10 },
                { x: 23, y: 8 }
            ]
        }]
    }

    return(
        <div>
            <CanvasJSChart options = {options}
                /* onRef = {ref => this.chart = ref} */
            />
        </div>
    )
}