import {useForm} from "react-hook-form";
import {
    CheckIcon,
    ChevronUpDownIcon,
    CpuChipIcon,
    IdentificationIcon,
    KeyIcon,
    ServerIcon,
    UserIcon
} from "@heroicons/react/20/solid";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

export default function Account (){


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
    
    const Select = () => {
            const platform = [
                {id :1 , platform: 'MT4'},
                {id :1 , platform : 'MT5'}
            ];
            const [selected, setSelected] = useState(platform[0]);

            return (
                <div className="w-72 bg-transparent border-2 border-green-400 rounded-xl ">

                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative flex w-full cursor-default rounded-lg  py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="mr-1 border-r-2 border-green-400">
                                    <CpuChipIcon className="h-6 w-6   text-green-400"/>
                                </span>
                                <span className="block truncate">{selected.platform}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
              />
            </span>
                             </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-green-400 ring-opacity-5 focus:outline-none sm:text-sm">
                                    {platform.map((platform) => (
                                        <Listbox.Option
                                            key={platform.id}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                    active ? 'bg-transparent text-green-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={platform}
                                        >
                                            {({ selected }) => (
                                                <>
                      <span
                          className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {platform.platform}
                      </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-400">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                </div>
            )
    }


    const onSubmit = (data) => {
        console.log(data)
    }
    return(
        <div className="flex justify-center items-center shadow-xl w-fit rounded-xl p-4 backdrop-blur-2xl bg-gradient-to-tr from-slate-200 to-slate-100 opacity-75">
            <form onSubmit={handleSubmit(onSubmit)} >
                <Input type="text" label="Name" Icon={IdentificationIcon} />
                <Input type="text" label="Login" Icon={UserIcon} />
                <Input type="text" label="Server" Icon={ServerIcon} />
                <Input type="password" label="Password" Icon={KeyIcon} />
                <Select />

            </form>
        </div>
    )
}