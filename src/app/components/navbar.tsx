import React from 'react'
import Image from "next/image";
function Navbar() {
    return (
        <div>
            <div className='flex  w-full h-20 bg-[#FF865E]  justify-start backdrop-blur-lg shadow-xl px-8'>
                <div className='flex w-full'>

                </div>
                <div className='flex gap-10 lg:w-5/12  py-7'>
                    <a className='flex text-[#FFF6F4] font-semibold '>
                        About
                    </a>
                    <a className='flex text-[#FFF6F4] font-semibold '>
                        Portfolio
                    </a>

                    <a className='flex text-[#FFF6F4] font-semibold '>
                        Contact
                    </a>
                    <a className='flex text-[#FFF6F4] font-semibold '>
                        Works
                    </a>

                </div>

            </div>
        </div>
    )
}

export default Navbar
