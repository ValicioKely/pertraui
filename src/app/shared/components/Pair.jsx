import React, {PureComponent, useState} from 'react';
import {AreaChart, Area, ResponsiveContainer} from 'recharts';
import {StarIcon} from "@heroicons/react/24/outline";

const data = [
    {
        name: 'Page A',
        uv: 1000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 1200,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 1500,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 1400,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1300,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 1500,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 2004,
        pv: 4300,
        amt: 2100,
    },
];

export default function Pair ({pair}) {
    const [isBookmarked , setBookmarked] = useState(false);
    const handleBookmark = () => {
      setBookmarked(oldState => !oldState)
    }
    return (
        <div className=" h-[20em] rounded shadow-xl bg-gray-50 dark:bg-slate-700 overflow-hidden">
            <div className="flex justify-between p-6">
                    <span className="text-gray-400 font-semibold ">
                        {pair}
                    </span>
                <span>
                        <button type="button" onClick={handleBookmark}>
                            <StarIcon className={isBookmarked ? "h-6 w-6 text-amber-400" : "h-6 w-6 text-gray-400"}/>
                        </button>
                    </span>
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="rgb(134 239 172)" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="rgb(134 239 172)" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="uv" stroke="rgb(134 239 172)" fillOpacity={1}
                          fill="url(#colorPv)"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}