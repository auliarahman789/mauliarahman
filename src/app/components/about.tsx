"use client";
import React from 'react'
import Image from "next/image";

function About() {
    return (
        <section className="lg:py-16">

            <div className='flex'>

                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#FEF9EF] to-[#FEE440] font-bold text-6xl'>
                    About Me
                </p>
                <div className='flex justify-end w-9/12 px-6'>
                    <div>
                        <Image
                            alt="logo1"
                            src={"/anjas.png"}
                            height={200}
                            width={200}
                            className=' rounded-full bg-[#FEF9EF]'
                        />
                    </div>
                </div>
            </div>
            <div className='flex'>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#FEF9EF] to-[#FEE440] font-semibold text-3xl'>
                    Who Am I?
                </p>
            </div>
            <div className='flex pt-3 w-5/12'>
                <p className='text-[#FEF9EF] font-bold text-1xl text-justify'>
                    Currently working as Front-end Developer at PT. Saptaloka Digital Indonesia, with many project experience such as
                    Front-end website and game programming using Unity.
                </p>
            </div>

        </section >
    );
};

export default About
