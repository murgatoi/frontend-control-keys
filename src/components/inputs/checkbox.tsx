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
                className="
                            bg-transparent 
                            hover:outline-none 
                            cursor-pointer
                            mr-2 
                            text-input-textDefault
                            size-6 border-3  
                            focus:ring-0 focus:ring-transparent focus:outline-none focus:shadow-none
                            rounded-md
                        "
            />

            {label ? <label className="font-bold" htmlFor={id}>{label}</label> : <></>}
        </div>
    )
}