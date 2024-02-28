"use client"
import React, { useState } from 'react';


const Navbar = ({ color }: { color: any }) => {

    return (
        <div>
            <div style={{ background: `${color}` }} className='flex w-full fixed top-0 h-[65px] bg-[#826fffa9] shadow-lg backdrop-blur-md z-50 justify-center'>

                <div className='flex gap-16 py-5'>
                    <a className='flex text-[#F0F3FF] font-semibold text-xl' href='#about'>
                        About
                    </a>
                    <a className='flex text-[#F0F3FF] font-semibold text-xl' href='#skills'>
                        Skills
                    </a>
                    <a className='flex text-[#F0F3FF] font-semibold text-xl' href='#project'>
                        Project
                    </a>

                </div>

            </div>
        </div>
    )
}

export default Navbar
