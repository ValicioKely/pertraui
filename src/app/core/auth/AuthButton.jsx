export function AuthButton ({value}){
    return (
        <input
            className="px-5 py-1 m-4 border-2 border-green-400 rounded-xl text-green-400 ease-in-out duration-300 hover:bg-green-400 hover:text-white "
            type="submit" value={value}/>
    )
}