"use client"

import React, { useEffect, useState } from 'react';


const Navbar = () => {

    return (
        <div>
            <div className='w-full h-[65px]  top-0 shadow-lg bg-[#826fffa9] backdrop-blur-md z-50 px-10 justify-center'>

                <div className=''>
                    <div className='flex gap-10 py-5'>
                        <a className='flex text-[#F0F3FF] font-semibold ' href='#about'>
                            About
                        </a>
                        <a className='flex text-[#F0F3FF] font-semibold ' href='#skills'>
                            Skills
                        </a>
                        <a className='flex text-[#F0F3FF] font-semibold '>
                            Project
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
