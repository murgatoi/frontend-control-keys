import { ElementType, HTMLInputTypeAttribute, ReactNode } from "react"
import { IconType } from "react-icons"
import { LuUserRound } from "react-icons/lu"

interface Props {
    id?: string,
    label?: string

}

export function Checkbox({ id, label }: Props) {
    return (

        <div className="group flex items-start text-center w-full" >
            <input
                type="checkbox"
                name="checkbox-one"
                id="checkbox-one"
                className="bg-transparent hover:outline-none cursor-pointer 
    size-6 border-3 border-amber-500 focus:outline-none rounded-md" />

            {label ? <label htmlFor={id}>{label}</label> : <></>}
        </div>
    )
}