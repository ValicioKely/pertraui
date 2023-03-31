import {AtSymbolIcon, CpuChipIcon, KeyIcon} from "@heroicons/react/20/solid";
import {useForm} from "react-hook-form";
import {useCallback} from "react";
import {AuthButton} from "./AuthButton";
import {gql, useApolloClient} from "@apollo/client";


export function Login() {
    const {register, handleSubmit} = useForm();



    const Input = ({Icon, label, type}) => {
        return (
            <div className=" bg-transparent border-2 border-green-400 rounded-xl py-2  m-4 flex">
                <label className="px-2 border-r-2 border-green-400">{Icon &&
                    <Icon className="h-6 w-6   text-green-400 "/>}</label>
                <input className="outline-0 bg-transparent px-10" type={type} {...register(label , {required : true})} placeholder={label}/>
            </div>
        );
    };


    const client =  useApolloClient();
    const onSubmit = useCallback((data) => {

        const mutation = gql(
            ``
        );
        client.mutate({mutation}).then(
            response => {
                console.log(response.data)
            }
        )
        console.log(data)
    }, []);


    return (

            <div className="bg-transparent">
                <div>
                    <h1 className="px-auto"><CpuChipIcon className="h-16 w-16 text-green-400 "/></h1>
                    <h1 className="text-center text-2xl text-gray-500">Welcome back to Pertra!</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Email" Icon={AtSymbolIcon} type="text"/>
                    <Input label="Password" Icon={KeyIcon} type="password"/>
                    <p className="text-end">
                        <AuthButton value="Login" />
                    </p>
                </form>
            </div>
    );
}

