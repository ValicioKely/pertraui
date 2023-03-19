import {CameraIcon} from "@heroicons/react/20/solid";
import {useForm} from "react-hook-form";
import {AuthButton} from "../../core/auth/AuthButton";

export function ProfileCard() {
    const {register , handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
           <div className="shadow-xl w-fit rounded-xl p-4" >
               <form onSubmit={handleSubmit(onSubmit)}>
                   <div className="bg-gray-200 w-80 h-80 rounded-full relative">
                       <label htmlFor="avatar"  className="absolute bottom-5 right-12"><CameraIcon className="h-10 w-10 text-gray-500" /></label>
                       <input name="avatar" {...register("avatar")} id="avatar" type="file" className="hidden"/>
                   </div>
                   <div className="bg-gray-200 rounded-xl p-2 my-3">
                       <input type="text" {...register("bio")} placeholder="Add bio" className="outline-0 bg-transparent mx-6" />
                   </div>
                   <p className="text-right">
                       <AuthButton value="Save" />
                   </p>
               </form>
           </div>
        </div>
    )
}
