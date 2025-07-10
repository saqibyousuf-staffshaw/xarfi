import React from 'react'
import Container from '../Constants/Container'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { LinkedInIcons } from '../Constants/Icons';
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from 'next/link';

function Footer() {
    return (
        <div className='Footer w-full bg-[#1E1E1E] py-[30px]'>
            <Container>
                <div className='w-full'>
                    <div className='logoSocial flex md:items-center items-start justify-between w-full md:flex-row flex-col '>
                        <div className='logo'>
                            <Image alt='logo' width={160} height={73} src="/assets/images/logo.png" />
                        </div>
                        <div className='social'>
                            <div className='flex gap-5 text-white'>
                                <LinkedInIcons width='30px' height='30px' className={'w-[30px] h-[30px]'} />
                                <FaFacebook width='30px' height='30px' className={'w-[30px] h-[30px]'} />
                                <AiFillTwitterCircle width='30px' height='30px' className={'w-[30px] h-[30px]'} />

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-[35px] flex-wrap'>
                        <div className='contact'>
                            <div className='bg-[#FF8C26] mb-[25px] w-fit rounded-[7px] px-[7px] text-white font-medium text-[20px] leading-[100%] tracking-[0] font-urbanist'>
                                Contact us:
                            </div>
                            <div className="text-white mb-[20px] font-normal text-[18px] leading-[100%] tracking-[0] font-urbanist">Email: info@xarfi.com</div>
                            <div className="text-white mb-[20px] font-normal text-[18px] leading-[100%] tracking-[0] font-urbanist">Phone: 555-567-8901</div>
                            <div className="text-white font-normal md:mb-0 mb-[20px] text-[18px] leading-[100%] tracking-[0] font-urbanist">Address: 1234 Main St <br />
                                Moonstone City, Stardust State 12345</div>
                        </div>
                        <div className='flex items-end'>
                            <div className='privacyPolicyCopy flex gap-10 md:flex-row flex-col'>
                                <p className="text-white mb-[0px] font-normal text-[18px] leading-[100%] tracking-[0] font-urbanist">© 2025 Xarfi. All Rights Reserved.</p>
                                <Link href="#" className="text-white mb-[0px] font-normal text-[18px] leading-[100%] tracking-[0] font-urbanist">Privacy Policy</Link>
                                <Link href="#" className="text-white mb-[0px] font-normal text-[18px] leading-[100%] tracking-[0] font-urbanist">Terms and Conditions</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer