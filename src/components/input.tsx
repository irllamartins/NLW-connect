import { Mail } from "lucide-react";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input">{}

export const function Input(props:InputProps){
return(
    <div className="bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2"
    >
        <span><Mail/></span>
        <input className="" {...props}/>
    </div>
)
}