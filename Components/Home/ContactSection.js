"use client"
import React, { useState } from 'react'
import Container from '../Constants/Container'
import Image from 'next/image'
import { toast } from "sonner"
import Spinner from '../Constants/Spinner'
function ContactSection() {
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form behavior
        setLoader(true)
        // Basic validation
        if (!data.firstName.trim()) {
            // alert("First Name is required");
            setLoader(false)

            toast.error("First Name is required")
            return;
        }

        if (!data.lastName.trim()) {
            setLoader(false)

            toast.error("Last Name is required");
            return;
        }

        if (!data.email.trim()) {
            setLoader(false)

            toast.error("Email is required");
            return;
        }

        // Basic email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            setLoader(false)

            toast.error("Please enter a valid email address");
            return;
        }

        if (!data.phoneNumber.trim()) {
            setLoader(false)

            toast.error("Phone Number is required");
            return;
        }

        // Optional: check phone format (very basic)
        const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
        if (!phoneRegex.test(data.phoneNumber)) {
            setLoader(false)

            toast.error("Please enter a valid phone number");
            return;
        }

        // if (!data.companyName.trim()) {
        //     setLoader(false)

        //     toast.error("Company Name is required");
        //     return;
        // }

        // Prepare form data
        const formData = new URLSearchParams();
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("email", data.email);
        formData.append("phone", data.phoneNumber);
        formData.append("company", data.companyName);

        // Submit the data
        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbzEeOUefWFt_QLzCbyme_RnwqEc9etJIzoyY2SC8Uscz9aPYrFX9TTyLqW250USrku_Jg/exec", {
                method: "POST",
                body: formData,
            });

            const result = await response.text();
            console.log("Success:", result);
            setLoader(false)

            toast.success("Form submitted successfully!");

            // Optional: reset form
            setData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                companyName: ''
            });

        } catch (error) {
            console.error("Error:", error);
            setLoader(false)

            toast.error("There was an error submitting the form.");
        }
    };

    return (
        <div className='ContactSection py-[50px] md:px-6 bg-black' id="waitingList">
            <Container >
                <div className='py-[93px] md:px-10 px-5 bg-cover bg-[#FF8C26] bg-no-repeat rounded-[40px]' style={{ backgroundImage: `url('/assets/images/contactBg.png')` }}>
                    <div className='flex justify-between items-center lg:flex-row flex-col'>
                        <div className='content max-w-[561px] w-full'>
                            <div className='w-[281px] h-[235.49px] flex justify-center relative'>
                            <Image width={161.19} height={173.97} alt='announce.png' className='absolute top-0 left-[72.88px] z-20' src={'/assets/images/mic.png'} data-aos="zoom-in" data-aos-delay="1400"/>
                            <Image width={267.99} height={56.29} alt='ellipse.png' className='absolute top-[30px] left-[16.15px] z-10' src={'/assets/images/ellipse.png'} data-aos="flip-left" data-aos-delay="500" />
                            <Image width={267.99} height={56.29} alt='ellipse.png' className='absolute top-[50px] left-[9.57px] z-10' src={'/assets/images/ellipse.png'} data-aos="flip-left" data-aos-delay="700" />
                            <Image width={267.99} height={56.29} alt='ellipse.png' className='absolute top-[70px] left-[0px] z-10' src={'/assets/images/ellipse.png'} data-aos="flip-left" data-aos-delay="900" />
                            <Image width={32.59} height={32.59} alt='ellipse.png' className='absolute top-[140.35px] left-[27.94px] movementAnimation' src={'/assets/images/star.png'} data-aos="zoom-in" data-aos-delay="500" />
                            <Image width={17} height={17} alt='ellipse.png' className='absolute bottom-[15.61px] rotate-45 right-[125.48px] movementAnimation' src={'/assets/images/star.png'} data-aos="zoom-in" data-aos-delay="700" />
                            <Image width={9.47} height={9.47} alt='ellipse.png' className='absolute bottom-[33px] rotate-45 right-[77px] z-0 movementAnimation' src={'/assets/images/brownCircle.png'} data-aos="zoom-in" data-aos-delay="900" />
                            <Image width={14.67} height={14.67} alt='ellipse.png' className='absolute top-[22.88px] rotate-45 left-[40.9px] z-20 movementAnimation' src={'/assets/images/brownCircle.png'} data-aos="zoom-in" data-aos-delay="1100" />
                            <Image width={22.24} height={22.24} alt='ellipse.png' className='absolute top-[0px] rotate-45 left-[17.45px] z-20 movementAnimation' src={'/assets/images/blackCircle.png'} data-aos="zoom-in" data-aos-delay="1300" />
                            {/* 
                            <Image width={267.99} height={56.29} alt='ellipse.png' className='absolute top-0 left-[72.88px]' src={'/assets/images/ellipse.png'} /> */}
                            </div>
                            {/* <Image width={281} height={235.49} alt='announce.png' src={'/assets/images/Illustration.png'} data-aos="zoom-in"/> */}
                            <h5 className='font-bold md:text-[58px] text-[40px] leading-[100%] tracking-[0] align-middle font-urbanist text-white mt-[11px]' data-aos="fade-right">The Spot You Want Could Be Yours</h5>
                            <p className='font-medium text-[22px] leading-[100%] tracking-[0] align-middle font-urbanist text-white mt-[11px]' data-aos="fade-right">Let your salon grow stronger, and let your clients get exactly what they want without any wait. Take the next step; join the experience today and make every moment count.
                            </p>
                        </div>
                        <div className='form max-w-[586px] w-full'>
                            <form className='w-full' onSubmit={handleSubmit} data-aos="fade-in" data-aos-delay="500">
                                <p className='font-normal text-[22px] leading-[100%] tracking-[0] align-middle font-urbanist w-full text-white mb-5'>Please fill the details</p>
                                <div className='flex flex-wrap justify-between'>
                                    <label className='mb-[15px] w-[calc(50%-3px)]'>
                                        <input value={data.firstName} placeholder='First Name' className='w-full px-[15px] h-[56px] border-none text-[#777777] rounded-2xl bg-white font-semibold text-[16px] leading-[14px] tracking-[0] font-urbanist '
                                            onChange={(e) => {
                                                let obj = { ...data }
                                                obj.firstName = e.target.value
                                                setData(obj)
                                            }}
                                        />
                                    </label>
                                    <label className='mb-[15px] w-[calc(50%-3px)]'>
                                        <input value={data.lastName} placeholder='Last Name' className='w-full px-[15px] h-[56px] border-none text-[#777777] rounded-2xl bg-white font-semibold text-[16px] leading-[14px] tracking-[0] font-urbanist '
                                            onChange={(e) => {
                                                let obj = { ...data }
                                                obj.lastName = e.target.value
                                                setData(obj)
                                            }}
                                        />
                                    </label>
                                    <label className='mb-[15px] w-[100%]'>
                                        <input value={data.email} placeholder='Email Address' className='w-full px-[15px] h-[56px] border-none text-[#777777] rounded-2xl bg-white font-semibold text-[16px] leading-[14px] tracking-[0] font-urbanist '
                                            onChange={(e) => {
                                                let obj = { ...data }
                                                obj.email = e.target.value
                                                setData(obj)
                                            }}
                                        />
                                    </label>
                                    <label className='mb-[15px] w-[100%]'>
                                        <input type='tel' value={data.phoneNumber} placeholder='Phone Number' className='w-full px-[15px] h-[56px] border-none text-[#777777] rounded-2xl bg-white font-semibold text-[16px] leading-[14px] tracking-[0] font-urbanist '
                                            onChange={(e) => {
                                                let obj = { ...data }
                                                obj.phoneNumber = e.target.value
                                                setData(obj)
                                            }}
                                        />
                                    </label>
                                    <label className='mb-[15px] w-[100%]'>
                                        <input value={data.companyName} placeholder='Company Name (Optional)' className='w-full px-[15px] h-[56px] border-none text-[#777777] rounded-2xl bg-white font-semibold text-[16px] leading-[14px] tracking-[0] font-urbanist '
                                            onChange={(e) => {
                                                let obj = { ...data }
                                                obj.companyName = e.target.value
                                                setData(obj)
                                            }}
                                        />
                                    </label>
                                    <div className='w-full flex justify-center items-center'>
                                        <button type='submit' className='px-[27px] py-[14.5px] cursor-pointer bg-[#121212] text-white shadow-[0px_4px_74.9px_0px_#00000040] rounded-2xl mt-[5px]'>{loader ? <Spinner /> : `Submit`}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactSection