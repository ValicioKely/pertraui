import {ChevronRightIcon} from "@heroicons/react/20/solid";

function Card({title}) {
    const className = "bg-blue-500 group hover:bg-gray-50 ring-1 ring-gray-300 ring-offset-1 rounded-xl  w-60 h-60 gap-2 shadow-xl hover:-translate-y-12 hover:rotate-360 ease duration-500 ";
    return (
        <div className={className}>
            {/*  Header  */}
            <h1 className="text-4xl text-gray-50 px-20 group-hover:text-blue-600 ">{title}</h1>
            {/*  Detail  */}
            <p className="text-gray-100 p-5 group-hover:text-blue-600">
                Up to 4 accounts
                <br/>
                and experts advisors
            </p>
            {/*  Footer  */}
            <p className="text-right p-2 translate-y-12">
                <button className="flex text-gray-50 group-hover:text-blue-600">
                    Read more
                    <ChevronRightIcon className=" h-6 w-6 translate-x-24" />
                </button>
            </p>
        </div>
    )
}

export function FlipCard (){
    return (
        <div className="flex items-center">
           <Card title="Basic"  />
           <Card title="Premium"  />
           <Card title="Gold"  />
        </div>
    )
}