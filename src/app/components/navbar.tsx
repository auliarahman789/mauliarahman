import React from 'react'
import Image from "next/image";
function Navbar() {
    return (
        <div>
            <div className='flex  w-full h-12 bg-[#836FFF] shadow-xl px-8'>
                <div className='flex gap-10 py-3'>
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
    )
}

export default Navbar
