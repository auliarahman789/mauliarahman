"use client"
import React, { useState } from 'react';
import Image from "next/image";

const Navbar = ({ color }: { color: any }) => {

    return (
        <div>

            <div style={{ background: `${color}` }} className='flex w-full fixed top-0 h-[45px] bg-[#211951ba] shadow-lg backdrop-blur-md z-50 justify-center'>

                <div className='flex w-full justify-end gap-4 px-7'>
                    {/* <a href='/#'>
                        <Image
                            src={'/brand.png'}
                            width={50}
                            height={50}
                            alt={'logo'}
                            className=' w-12 h-12 rounded-full'
                        />
                    </a> */}

                    <a className='lg:pl-[490px] flex text-[#F0F3FF] font-semibold text-lg pt-2' href='#about'>
                        About
                    </a>

                    <a className='flex text-[#F0F3FF] font-semibold text-lg pt-2' href='#projects'>
                        Project
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
