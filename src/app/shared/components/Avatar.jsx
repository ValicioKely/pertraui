export function Avatar({img , username}) {
    
    return (
        <div className="bg-gray-400 h-12 w-12 rounded-full">
            <img src={img} alt={username} />
        </div>
    )
}