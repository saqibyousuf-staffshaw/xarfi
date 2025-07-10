"use client"
import React, { useState } from 'react'
import Container from '../Constants/Container'
import Image from 'next/image'
import Button from '../Constants/Button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
function Navbar() {
    const [selectedLang,setSelectedLang] = useState({ 
            flag: "/assets/images/german.png",
            lang:'Germany'
         }) 
    const languages = [
        { 
            flag: "/assets/images/german.png",
            lang:'Germany'
         },
        { 
            flag: "/assets/images/usa.jpg",
            lang:'English'
         },
        { 
            flag: "/assets/images/france.png",
            lang:'French'
         },
        { 
            flag: "/assets/images/italy.png",
            lang:'Italian'
         },
    ]
    return (
        <div className='Navbar w-full absolute top-0 z-50'>
            <Container>
                <div className='flex items-center justify-between w-full pt-[30px]'>
                    <div className='logo'>
                        <Image alt='logo' width={160} height={73} src="/assets/images/logo.png" className='md:w-[160px] w-[120px] h-auto' />
                    </div>
                    <div className='navLinks flex items-center'>
                        <div className='langSelector flex items-center gap-[10px]'>
                            {/* <Image alt='language' width={37} height={37} src="/assets/images/usa.jpg" className='rounded-full aspect-square' /> */}
                            <DropdownMenu>
                                <DropdownMenuTrigger className="outline-none cursor-pointer"><Image alt='language' width={37} height={37} src={selectedLang.flag} className='rounded-full w-[37px] h-[37px] object-cover aspect-square' /></DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-black border-black w-[200px]">
                                    <DropdownMenuLabel className={"text-white"}>Choose Language</DropdownMenuLabel>
                                    <DropdownMenuSeparator className={'border-[#ffffff02]'} />
                                    {languages.map((a)=>(
                                        <DropdownMenuItem className={"text-white hover:!bg-[#FF8C26] hover:!text-[#fff] cursor-pointer"} onClick={()=>{
                                            setSelectedLang(a)
                                        }}><Image alt='logo' width={37} height={37} src={a.flag} className='rounded-full w-[37px] h-[37px] object-cover aspect-square' /> {a.lang}</DropdownMenuItem>
                                    ))}
                                    {/* <DropdownMenuItem className={"text-white hover:!bg-[#FF8C26] hover:!text-[#fff] cursor-pointer"}><Image alt='logo' width={37} height={73} src="/assets/images/usa.jpg" className='rounded-full aspect-square' /> English</DropdownMenuItem>
                                    <DropdownMenuItem className={"text-white hover:!bg-[#FF8C26] hover:!text-[#fff] cursor-pointer"}><Image alt='logo' width={37} height={73} src="/assets/images/france.png" className='rounded-full aspect-square' /> French</DropdownMenuItem>
                                    <DropdownMenuItem className={"text-white hover:!bg-[#FF8C26] hover:!text-[#fff] cursor-pointer"}><Image alt='logo' width={37} height={73} src="/assets/images/italy.png" className='rounded-full aspect-square' /> Italian</DropdownMenuItem> */}
                                    {/* <DropdownMenuItem className={"text-white hover:!bg-[#FF8C26] hover:!text-[#fff]"}>Team</DropdownMenuItem>
                                    <DropdownMenuItem className={"text-white hover:!bg-[#FF8C26] hover:!text-[#fff]"}>Subscription</DropdownMenuItem> */}
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button text={'Get Started'} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar