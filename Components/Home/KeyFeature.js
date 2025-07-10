"use client"
import React, { useState } from 'react'
import Container from '../Constants/Container'
// import videoo from '@/public/assets/images/video.mp4'
import ReactPlayer from 'react-player'
import { IoPlay } from "react-icons/io5";

function KeyFeature() {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className='KeyFeature py-[50px] bg-[#121212]' id='keyFeatures'>
            <Container>
                <div className='flex xl:flex-row flex-col-reverse justify-between items-center gap-12'>
                    <div className='xl:max-w-[55.5%] w-full' data-aos="fade-right">
                        <div className='relative rounded-[29px] overflow-hidden flex items-center justify-center'>
                            <ReactPlayer
                                src="https://www.youtube.com/watch?v=KsZ-QiUWfLI&list=PLBojSARlczT4XJo42oO8ttM67dJ4j3nP4&index=5"  // ✅ use 'url', not 'src'
                                playing={isPlaying}
                                controls={false}
                                width="100%"
                                height="auto"
                                className="!w-full !h-auto rounded-[29px] aspect-[1.41924]"
                            />
                            {!isPlaying && (
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="w-[86.54px] cursor-pointer h-[86.54px] bg-[#FF8C26] rounded-full absolute flex items-center justify-center"
                                >
                                    <IoPlay className="w-[60.54px] h-[60.54px] text-white text-[34px]" />
                                </button>
                            )}
                        </div>
                    </div>
                    <div className='conntent xl:max-w-[calc(100%-55.5%-48px)] w-full'>
                        <h2 className="font-semibold text-white xl:text-left text-center md:text-[44px] text-[36px] mb-[17px] leading-[100%] tracking-[0] font-urbanist" data-aos="fade-in">
                            Smart Booking That<br />Works for Everyone

                        </h2>
                        <div className='features gap-[15px] flex xl:flex-col lg:flex-row flex-col flex-wrap'>
                            <div className='p-[15px] bg-[#FFFFFF1A] rounded-[16px] xl:w-full lg:w-[calc(50%-12px)] w-full' data-aos="fade-in" >
                                <h5 className='mb-[10px] font-medium text-[24px] leading-[100%] tracking-[0] align-middle font-urbanist text-white'>✂️ Fill Every Gap with Zero Stress</h5>
                                <p className='font-light text-[18px]  text-white tracking-[0] align-middle font-urbanist'>Salon owners can instantly reach out to interested clients when openings arise, no calls, no clutter.</p>
                            </div>
                            <div className='p-[15px] bg-[#FFFFFF1A] rounded-[16px] xl:w-full lg:w-[calc(50%-12px)] w-full' data-aos="fade-in" >
                                <h5 className='mb-[10px] font-medium text-[24px] leading-[100%] tracking-[0] align-middle font-urbanist text-white'>💇‍♂ Be First in Line Without the Hassle</h5>
                                <p className='font-light text-[18px]  text-white tracking-[0] align-middle font-urbanist'>Clients can tap to be next for a slot they want; no more checking back or refreshing.</p>
                            </div>
                            <div className='p-[15px] bg-[#FFFFFF1A] rounded-[16px] xl:w-full lg:w-[calc(50%-12px)] w-full' data-aos="fade-in" >
                                <h5 className='mb-[10px] font-medium text-[24px] leading-[100%] tracking-[0] align-middle font-urbanist text-white'>📱 Instant Notifications, Real-Time Decisions</h5>
                                <p className='font-light text-[18px]  text-white tracking-[0] align-middle font-urbanist'>As soon as time frees up, the right people are notified; no delays, just action.</p>
                            </div>
                            <div className='p-[15px] bg-[#FFFFFF1A] rounded-[16px] xl:w-full lg:w-[calc(50%-12px)] w-full' data-aos="fade-in" >
                                <h5 className='mb-[10px] font-medium text-[24px] leading-[100%] tracking-[0] align-middle font-urbanist text-white'>🌍 Create Experiences Worth Repeating</h5>
                                <p className='font-light text-[18px]  text-white tracking-[0] align-middle font-urbanist'>This feature enhances service, boosts loyalty, and gives both sides something to look forward to.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default KeyFeature