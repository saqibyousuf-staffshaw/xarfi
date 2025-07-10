import React from 'react'

function Button({className,onClick,text}) {
    return (
        <button className={'bg-[#FF8C26] cursor-pointer rounded-2xl text-lg py-2 px-4 text-white ' + className} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button