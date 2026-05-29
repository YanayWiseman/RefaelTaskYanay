import type { ComponentProps } from "react";
type ButtonProps =
{
} & ComponentProps<"button">
export function Button({...props}: ButtonProps)
{
    return (<button {...props} className="bg-violet-600 hover:bg-violet-800 text-white 
    px-3 py-1 rounded disabled:opacity-30 disabled:cursor-not-allowed">{props.content}

    </button>)
}

