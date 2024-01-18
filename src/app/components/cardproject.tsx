"use client";
import { motion } from 'framer-motion'
import React from 'react'

function Cardproject() {
    return (
        <div className='flex py-4 px-12'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="flex place-self-start text-center sm:text-left justify-self-start"
            >
                <div className='flex bg-[#FF865E] h-full rounded-full shadow-xl'>

                    <div className='flex flex-col'>
                        <div className='flex w-full gap-10 px-14 pt-4'>
                            <a className='flex pr-48 font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#FEF9EF] to-[#FEE440] ml-9'> 1+</a>
                            <a className='flex pr-48 ps-6 font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#FEF9EF] to-[#FEE440]'> 20+ </a>
                            <a className='flex ps-8 font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#FEF9EF] to-[#FEE440]'> 10+</a>
                        </div>
                        <div className='flex w-full gap-10 px-14 pb-2'>
                            <a className='flex pr-56 font-semibold text-[#FEF9EF] ml-9'> Year</a>
                            <a className='flex pr-60 font-semibold text-[#FEF9EF]'>  Projects</a>
                            <a className='flex font-semibold text-[#FEF9EF]'> Skills</a>
                        </div>
                        <div className='flex w-full px-10 pb-4'>
                            <a className='flex font-medium text-[#FEF9EF]'> I Code Professionally</a>
                            <a className='flex font-medium ps-[165px] text-[#FEF9EF]'> That I Finished</a>
                            <a className='flex font-medium ps-[210px] pr-3 text-[#FEF9EF]'> I'm Proficient with</a>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}

export default Cardproject
