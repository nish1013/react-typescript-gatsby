import * as React from "react"

export default function Amount({amount=0, selected=false, onClickBtn}) {
    
    const classValueBtn =
    "Button min-w-1/8 border hover:text-white font-bold mx-2 py-2 px-4 rounded-full";
    const classValueSelectedBtn =
    "Button-selected min-w-1/8 border text-white font-bold mx-2 py-2 px-4 rounded-full";
    const className = selected ? classValueSelectedBtn: classValueBtn;
    return (<div onClick={onClickBtn} className={className}>£{amount}</div>)
}