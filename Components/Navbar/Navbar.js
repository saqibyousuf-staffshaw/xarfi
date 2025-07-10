import React from 'react'
import Container from '../Constants/Container'
import Image from 'next/image'
import Button from '../Constants/Button'

function Navbar() {
    return (
        <div className='Navbar w-full absolute top-0 z-50'>
            <Container>
                <div className='flex items-center justify-between w-full pt-[30px]'>
                    <div className='logo'>
                        <Image alt='logo' width={160} height={73} src="/assets/images/logo.png" />
                    </div>
                    <div className='navLinks flex items-center'>
                        <div className='langSelector flex items-center gap-[10px]'>
                            <Image alt='language' width={37} height={37} src="/assets/images/german.png" />
                            <Button text={'Get Started'}/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar