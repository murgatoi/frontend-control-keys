

"use client";

import { HTMLInputTypeAttribute, useState } from "react"
import { IconType } from "react-icons"
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

interface Props {
    id?: string,
    placeholder?: string,
    Icon?: React.ReactNode,
    type?: HTMLInputTypeAttribute,
    label?: string

}


export function Input({ id, placeholder, Icon, type, label }: Props) {
    return (
        <div className="my-4 w-full">
            {label && <label className="font-bold" htmlFor="user">{label}</label>}
            <div
                className="
            h-12 
                        group 
                        flex
                        items-center 
                        w-full 
                        p-2 
                        rounded-md 
                        ring-2
                        my-1
                        ring-input-borderDefault
                        has-[:focus]:ring-2 s
                        has-[:focus]:ring-input-borderActive
                        " >

                {
                    Icon
                    &&
                    <label htmlFor={id}>{Icon}</label>
                }
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className="w-full h-full border-transparent focus:border-transparent focus:ring-0"
                />
            </div>
        </div>
    )
}

export function InputPassword({ id, placeholder, Icon, label }: Props) {
    const [show, isShow] = useState(false);

    return (
        <div className="my-4 w-full">
            {label && <label className="font-bold" htmlFor="user">{label}</label>}
            <div
                className="
                        group
                        flex 
                        items-center
                        w-full 
                        p-2 
                        rounded-md
                        ring-2
                        ring-input-borderDefault 
                         my-2
                        has-[:focus]:border-input-borderActive 
                        has-[:focus]:ring-2 
                        has-[:focus]:ring-input-borderActive" >
                {
                    Icon
                    &&
                    <label htmlFor={id}>{Icon}</label>
                }
                <input
                    type={!show ? 'password' : 'text'}
                    id={id}
                    placeholder={placeholder}
                    className="h-8 w-full border-transparent focus:border-transparent focus:ring-0"
                />
                {!show ?
                    <FaRegEye onClick={() => isShow(!show)} className="size-6 mr-3" />
                    :
                    <FaRegEyeSlash onClick={() => isShow(!show)} className="size-6 mr-3" />
                }
            </div>
        </div>
    )
}