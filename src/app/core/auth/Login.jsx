import {AtSymbolIcon, CpuChipIcon, KeyIcon} from "@heroicons/react/20/solid";
import {useForm} from "react-hook-form";
import {AuthButton} from "./AuthButton";
import { useMutation} from "@apollo/client";
import {useEffect} from "react";
import {LOGIN} from "../query";
import {Navigate} from "react-router-dom";


export function Login() {
    const {register, handleSubmit ,reset} = useForm();
    var isSubmitSuccessful = false ;



    const Input = ({Icon, label, type}) => {
        return (
            <div className=" bg-transparent border-2 border-green-400 rounded-xl py-2  m-4 flex">
                <label className="px-2 border-r-2 border-green-400">{Icon &&
                    <Icon className="h-6 w-6   text-green-400 "/>}</label>
                <input className="outline-0 bg-transparent px-10" type={type} {...register(label , {required : true})} placeholder={label}/>
            </div>
        );
    };


    const [login ] = useMutation(LOGIN);

    const onSubmit = async (userdata) => {

       await login({variables : {
                email : userdata.email,
                password : userdata.password
            }})
            .then(
                (res) =>{
                    console.log(res.data.errors)
                }
            )
    }

    useEffect(() => {
        if (isSubmitSuccessful){
            reset({
                email: '',
                password: ''
            })
        }
    }, [isSubmitSuccessful ,reset])



    return (
            <div className="bg-transparent">
                {isSubmitSuccessful && (<Navigate to="/home"   replace={true} />)}
                <div>
                    <h1 className="px-auto"><CpuChipIcon className="h-16 w-16 text-green-400 "/></h1>
                    <h1 className="text-center text-2xl text-gray-500 dark:text-gray-50">Welcome back to Pertra!</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input label="email" Icon={AtSymbolIcon} type="text"/>
                    <Input label="password" Icon={KeyIcon} type="password"/>
                    <p className="text-end">
                        <AuthButton value="Login" />
                    </p>
                </form>
            </div>
    );
}

