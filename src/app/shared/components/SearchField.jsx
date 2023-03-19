import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {useForm} from "react-hook-form";
import {useCallback} from "react";

export function SearchField(props) {

    const {register , handleSubmit  } = useForm();

    const onSubmit = useCallback((data ,e )=> {
        e.preventDefault();
    } , []);

    return (
        <form className="flex justify-evenly bg-gray-100  p-2 rounded-full" onSubmit={handleSubmit(onSubmit)}>
            <button type="submit" className="outline-0">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-500"/>
            </button>
            <input type="text" placeholder={props.placeholder}  className="bg-transparent outline-0 ml-2" {...register("search")}/>
        </form>
    )
}

