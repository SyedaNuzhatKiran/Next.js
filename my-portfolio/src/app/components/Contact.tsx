import React from 'react'
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
const Contact = () => {
    return (
        <div id='contact' className='pt-32 container'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className=' space-y-8'>
                    <h2 className='text-5xl'data-aos="zoom-in-up"> Get In Touch</h2>
                    <p className='text-white text-[18px] pt-2' data-aos="zoom-in-up">
                        Drop Me A Line, Give Me A Call, Or Send Me A Message By Submitting The Form.
                    </p>
                    <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                        <SiGmail size={30} /> xyz@gmail.com
                    </div>
                    <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                        <BsFillTelephoneFill size={30} /> (021) 000-0000
                    </div>
                </div>
                <div className='space-y-8'>
                    <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            className='h-[40px] bg-transparent border border-purple-500'
                            id='name' />
                    </div>
                    <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                            className='h-[40px] bg-transparent border border-purple-500'
                            id='email' />
                    </div>
                    <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                        <label htmlFor="msg">Message</label>
                        <textarea
                            className='bg-transparent border border-purple-500'
                            id='msg' rows={8}>
                        </textarea>
                    </div>
                    <button className='bg-purple-500 p-2 px-6'data-aos="zoom-in-up">Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
