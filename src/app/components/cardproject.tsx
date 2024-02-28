"use client";
import { motion } from "framer-motion"
import React from "react"

function Cardproject() {
    return (
        <div className="relative flex py-4 px-12 z-[20] ">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="flex place-self-start text-center sm:text-left justify-self-start"
            >
                <div className="flex bg-[#211951ba] backdrop-blur-md  h-full rounded-full shadow-xl">

                    <div className="flex flex-col">
                        <div className="flex w-full gap-10 px-14 pt-4">
                            <a className="flex pr-48 font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#15F5BA] to-[#F0F3FF] ml-9"> 1+</a>
                            <a className="flex pr-48 ps-6 font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#15F5BA] to-[#F0F3FF]"> 20+ </a>
                            <a className="flex ps-8 font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#15F5BA] to-[#F0F3FF]"> 10+</a>
                        </div>
                        <div className="flex w-full gap-10 px-14 pb-2">
                            <a className="flex pr-56 font-semibold text-[#F0F3FF] ml-9"> Year</a>
                            <a className="flex pr-60 font-semibold text-[#F0F3FF]">  Projects</a>
                            <a className="flex font-semibold text-[#F0F3FF]"> Skills</a>
                        </div>
                        <div className="flex w-full px-10 pb-4">
                            <a className="flex font-medium text-[#F0F3FF]"> I Code Professionally</a>
                            <a className="flex font-medium ps-[165px] text-[#F0F3FF]"> That I Finished</a>
                            <a className="flex font-medium ps-[210px] pr-3 text-[#F0F3FF]"> I&rsquo;m Proficient with</a>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}

export default Cardproject
