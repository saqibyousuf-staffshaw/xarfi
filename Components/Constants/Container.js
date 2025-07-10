import React from 'react'

function Container({ children,parentClassName }) {
    return (
        <div className={'flex justify-center items-center w-full px-6 h-full ' + parentClassName}>
            <div className='Container max-w-[1279px] w-full mx-auto h-full'>
                {children}
            </div>
        </div>
    )
}

export default Container