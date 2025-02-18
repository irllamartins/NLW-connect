import React, { ComponentProps, ReactNode } from "react"

interface IconButtonProps extends ComponentProps<"button"> {
   children:ReactNode
}

export function Button(props: IconButtonProps) {
    return <button 
    className="px-1.5 bg-gray-500 items-center text-blue  rounded-md  cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
    {...props}>
        {props.children}
    </button>
}