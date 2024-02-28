"use client"
import React, { useState } from 'react';


const Navbar = () => {
    const [color, setColor] = useState('')

    return (
        <div>
            <div style={{ background: `${color}` }} className='flex w-full fixed top-0 h-[65px] bg-[#826fffa9] shadow-lg backdrop-blur-md z-50 justify-center'>

                <div className='flex gap-16 py-5 pl-[450px]'>
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
                <div className='flex pl-[400px] px-4 py-6 gap-1'>
                    <button onClick={() => setColor('#15f5b9b2')} className='rounded-full w-3 y-3 bg-[#15F5BA] shadow-xl'>

                    </button>
                    <button onClick={() => setColor('#826fffa9')} className='rounded-full w-3 y-3 bg-[#826fffa9] shadow-xl'>

                    </button>
                    <button onClick={() => setColor('#211951ba')} className='rounded-full w-3 y-3 bg-[#211951] shadow-xl'>

                    </button>
                </div>

            </div>
        </div>
    )
}

export default Navbar
