export default function PageHeader ({title}){
    return (
        <div className="mx-20">
            <h1 className="text-gray-500 text-4xl p-5">{title}</h1>
            <hr className="shadow"/>
        </div>
    )
}