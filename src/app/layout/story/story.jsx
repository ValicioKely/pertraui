export function Story(props) {
    return (
        <div className="relative bg-gray-200 h-1/3 rounded-xl">
            <div className="picture">
                <img src="public/902379.jpg" alt="Story "/>
            </div>
            <div className=" h-14 w-full absolute bottom-0 left-0  ">
               <p className="text-center"> Username</p>
            </div>
            <div className="absolute top-0 left-0  h-16 w-16 m-2 profile">
                <div className="h-16 w-16 border-full border-6 border-b-blue-300  rounded-full p-auto " >
                    <img src="public/902379.jpg" alt="Profile"/>
                </div>
            </div>
        </div>
    )
}