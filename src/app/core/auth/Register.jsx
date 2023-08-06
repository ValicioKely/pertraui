import {AtSymbolIcon, CpuChipIcon, KeyIcon, UserIcon} from "@heroicons/react/20/solid";
import {useForm} from "react-hook-form";
import {AuthButton} from "./AuthButton";
import axios from "axios";
import {useRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";
import {userid} from "../store";


export function Register() {
    const {register, handleSubmit} = useForm();
    const [userId , setUserId] = useRecoilState(userid);
    const navigate = useNavigate();

    const Input = ({Icon, label, type}) => {

        return (
            <div className=" bg-transparent border-2 border-green-400 rounded-xl py-2  m-4 flex">
                <label className="px-2 border-r-2 border-green-400">{Icon &&
                    <Icon className="h-6 w-6   text-green-400 "/>}</label>
                <input className="outline-0 bg-transparent px-10" type={type} {...register(label.toLowerCase() , {required : true})} placeholder={label}/>
            </div>
        );
    };

    const onSubmit = async (userdata) => {
        if (!userdata.confirmpassword === userdata.password){
            console.log("password don't match ")
        }else {
        await axios.post(
            `${process.env.REACT_APP_API_URL}api/user/register`,
            {
                username:userdata.username,
                email:userdata.email,
                password:userdata.password
            }
        )
            .then(
                function (response) {
                    console.log(response)
                    setUserId(response.data.user);
                    navigate("/dashboard/home");
                    return userId;
                }
            )
            .catch((error) => {
                console.log(`Axios failed to fetch data ${error}`)
            })
        }

    }


    return (
            <div className="bg-transparent ">
                <div>
                    <h1 className="px-auto"><CpuChipIcon className="h-16 w-16 text-green-400 "/></h1>
                    <h1 className="text-center text-2xl text-gray-500">Welcome to Pertra!</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Username" Icon={UserIcon} type="text"/>
                    <Input label="Email" Icon={AtSymbolIcon} type="text"/>
                    <Input label="Password" Icon={KeyIcon} type="password"/>

                    <div className=" bg-transparent border-2 border-green-400 rounded-xl py-2  m-4 flex">
                        <label className="px-2 border-r-2 border-green-400">
                            <KeyIcon className="h-6 w-6   text-green-400 "/>
                        </label>
                        <input className="outline-0 bg-transparent px-10" type="password" {...register( "confirmpassword" , {required : true})} placeholder="Confirm password"/>
                    </div>

                    <p className="text-end">
                       <AuthButton value="Register" />
                    </p>
                </form>
            </div>
    );
}

