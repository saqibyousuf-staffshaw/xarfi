import React from 'react'
import Container from '../Constants/Container'
import Button from '../Constants/Button'
import Image from 'next/image'
import { VscPlayCircle } from "react-icons/vsc";
import Link from 'next/link';

function HeroSection() {
    
    return (
        <div className='HeroSection relative flex items-center md:pt-[123px] pt-[170px] pb-[75px] bg-cover bg-no-repeat' style={{ backgroundImage: `url('/assets/images/heroBg.png')` }}>
            <Container>
                <div className='flex items-center justify-between' >
                    <div className='content lg:max-w-[59.3%] w-full z-10'>
                        <div>
                            <h2 className='font-semibold md:text-[58px] text-[40px] leading-[100%] tracking-[0] font-urbanist text-white'  data-aos="fade-right" data-aos-duration="2000">
                                Stay Fully Booked<br /> Fill All Your Empty Slots
                            </h2>
                            <Image width={618} height={42} alt='line' className='max-w-[618px] w-full mb-6' data-aos="zoom-in" src={'/assets/images/line.svg'} data-aos-duration="3000"/>
                            <p className='font-normal text-[22px]  tracking-[0] font-urbanist text-white' data-aos="fade-right" data-aos-duration="2000">
                                Busy day? No problem. Our smart scheduling flow ensures your salon never misses a beat and your customers never miss a chance to book with their favorite stylist.
                            </p>
                            <div className='flex md:items-center mt-6 gap-[29.17px] md:flex-row flex-col'>
                                <Link href={"#waitingList"}  data-aos="zoom-in-up" data-aos-duration="1000"><Button className={"py-[14px] font-semibold"} text={'Join the Waiting List'} /></Link>
                                <Link href={"#keyFeatures"}  data-aos="zoom-in-up" data-aos-duration="1000"><button className='font-medium cursor-pointer text-[22px] leading-[100%] tracking-[0] font-urbanist text-white flex items-center'>
                                    <VscPlayCircle width={31.67} height={31.67} className='text-white text-[31.67px] mr-[18.17px]' />
                                    Watch Video
                                </button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[calc(100%-59.3%)] lg:opacity-100 opacity-70 w-full lg:static absolute left-0 text-center flex items-center justify-center'>
                        <Image alt="appView" width={299.43} height={612} className='text-center drop-shadow-[0px_4px_35px_#FFFFFF0D]' src={'/assets/images/MobileScreen.png'} data-aos="fade-left"/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeroSection