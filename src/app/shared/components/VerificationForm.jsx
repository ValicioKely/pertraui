import {useForm} from "react-hook-form";
import {HomeIcon, UserIcon} from "@heroicons/react/20/solid";

export default function VerificationForm (){
   const {register , handleSubmit}= useForm();

    const Input = ({Icon, label, type}) => {
        return (
            <div className=" bg-transparent border-2 border-green-400 rounded-xl py-2  m-4 flex">
                <label className="px-2 border-r-2 border-green-400">{Icon &&
                    <Icon className="h-6 w-6   text-green-400 "/>}</label>
                <input className=" outline-0 bg-transparent px-10" type={type} {...register(label , {required : true})} placeholder={label}/>
            </div>
        );
    };

    const onSubmit = (data) => {
        console.log(data)
    }
    return(
        <div className="flex justify-center items-center shadow-xl w-fit rounded-xl p-4 backdrop-blur-2xl bg-gradient-to-tr from-slate-200 to-slate-100 opacity-75">
            <form onSubmit={handleSubmit(onSubmit)} >
                <Input type="text" label="Username" Icon={UserIcon} />
                <Input type="text" label="Address" Icon={HomeIcon} />

            </form>
        </div>
    )
}