import {
    Line,
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer
} from "recharts";
import React from "react";

export default function Performance() {
    const data = [
        {
            "subject": "TradingAlgo",
            "A": 120,
            "B": 110,
            "fullMark": 100
        },
        {
            "subject": "Win trade",
            "A": 98,
            "B": 130,
            "fullMark": 100
        },
        {
            "subject": "Loose trade",
            "A": 86,
            "fullMark": 100
        },
        {
            "subject": "Trading activity",
            "A": 99,
            "fullMark": 100
        },
        {
            "subject": "Deposit",
            "A": 85,
            "fullMark": 100
        },
        {
            "subject": "Max Drawdown",
            "A": 65,
            "fullMark": 100
        }
    ];

    const performanceData = [
        {
            name: 'Year A',
            equity: 1000,
            capital: 2400,
            amt: 2400,
        },
        {
            name: 'Year B',
            equity: 1200,
            capital: 1398,
            amt: 2210,
        },
        {
            name: 'Year C',
            equity: 1500,
            capital: 9800,
            amt: 2290,
        },
        {
            name: 'Year D',
            equity: 1400,
            capital: 3908,
            amt: 2000,
        },
        {
            name: 'Year E',
            equity: 1300,
            capital: 4800,
            amt: 2181,
        },
        {
            name: 'Year F',
            equity: 1500,
            capital: 3800,
            amt: 2500,
        },
        {
            name: 'Year G',
            equity: 2004,
            capital: 4300,
            amt: 2100,
        },
    ];


    return (
        <div className="h-auto">
            {/*Activities*/}
            <div >
                <div className="grid md:grid-cols-2 place-content-center ">
                    <div className="flex justify-center">
                        <RadarChart outerRadius={90} width={500} height={250} data={data}>
                            <PolarGrid/>
                            <PolarAngleAxis dataKey="subject"/>
                            <PolarRadiusAxis angle={30} domain={[0, 150]}/>
                            <Radar name="User" dataKey="A" stroke="blue" fill="rgb(134 239 172)" fillOpacity={0.6}/>
                            <Legend/>
                        </RadarChart>
                    </div>
                    <div >
                        History
                    </div>
                </div>
            </div>
            {/*Performances*/}
            <div className="grid place-content-center py-10" >
                <div className='h-96 w-[90vw] px-12'>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={730} height={250} data={performanceData}
                                   margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="capital" stroke="rgb(239 68 68)" />
                            <Line type="monotone" dataKey="equity" stroke="rgb(134 239 172)" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )

}