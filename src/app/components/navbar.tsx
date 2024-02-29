"use client"
import React, { useState } from 'react';
import Image from "next/image";

const Navbar = ({ color }: { color: any }) => {

    return (
        <div>

            <div style={{ background: `${color}` }} className='flex w-full fixed top-0 h-[65px] bg-[#211951ba] shadow-lg backdrop-blur-md z-50 justify-center'>

                <div className='flex gap-16 w-full'>
                    <Image
                        src={'/brand.png'}
                        width={50}
                        height={50}
                        alt={'logo'}
                        className='z-50 w-16 h-16'
                    />
                    <a className='lg:pl-[450px] flex text-[#F0F3FF] font-semibold text-xl py-5' href='#about'>
                        About
                    </a>
                    <a className='flex text-[#F0F3FF] font-semibold text-xl py-5' href='#skills'>
                        Skills
                    </a>
                    <a className='flex text-[#F0F3FF] font-semibold text-xl py-5' href='#project'>
                        Project
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
