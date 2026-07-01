

"use client";

import { HTMLInputTypeAttribute, useState } from "react"
import { IconType } from "react-icons"
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

interface Props {
    id?: string,
    placeholder?: string,
    Icon?: React.ReactNode,
    type?: HTMLInputTypeAttribute

}


export function Input({ id, placeholder, Icon, type }: Props) {
    return (

        <div className="group flex w-full p-2 rounded-md has-[:focus]:border-input-borderActive has-[:focus]:ring-2 has-[:focus]:ring-input-borderActive" >
            {
                Icon
                &&
                <label htmlFor={id}>{Icon}</label>

            }
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className="h-8 w-full outline-none focus:outline-none focus:ring-0"
            />
        </div>
    )
}

export function InputPassword({ id, placeholder, Icon, type }: Props) {
    const [show, isShow] = useState(false);

    return (
        <div className="group flex w-full p-2 rounded-md has-[:focus]:border-input-borderActive has-[:focus]:ring-2 has-[:focus]:ring-input-borderActive" >
            {
                Icon
                &&
                <label htmlFor={id}>{Icon}</label>
            }
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className="h-8 w-full outline-none focus:outline-none focus:ring-0"
            />
            {!show ?
                <FaRegEye />
                :
                <FaRegEyeSlash />
            }
        </div>
    )
}