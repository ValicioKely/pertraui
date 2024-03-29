import {CameraIcon} from "@heroicons/react/20/solid";
import {useForm} from "react-hook-form";
import {AuthButton} from "../../core/auth/AuthButton";
import {useRecoilValue} from "recoil";
import {currentUserNameState} from "../../core/store";

export function ProfileCard() {
    let currentUserName = useRecoilValue(currentUserNameState);
    const {register , handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
           <div className="shadow-xl w-fit m-8 rounded-xl p-4 ring-2 ring-offset-4 ring-green-400" >
               <form onSubmit={handleSubmit(onSubmit)}>
                   <div >
                       <label htmlFor="avatar"  >
                           <div className="bg-gray-200 w-80 h-80 rounded-full relative">
                               <CameraIcon className="h-10 w-10 text-gray-500 absolute bottom-5 right-12" />
                           </div>
                       </label>
                       <input name="avatar" {...register("avatar")} id="avatar" type="file" className="hidden"/>
                   </div>
                   <div>
                       <h2 className="text-xl text-blue-600">{currentUserName.username}</h2>
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
