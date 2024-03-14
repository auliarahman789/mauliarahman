"use client";

import Image from "next/image";
import { motion } from 'framer-motion';

function About() {

    return (
        <section className="lg:py-16" >

            <div className='relative flex pt-16'>

                <motion.div
                    // initial={{ opacity: 0, scale: 0.5 }}

                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 2 }}
                    className=""
                >
                    <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#F0F3FF] to-[#15F5BA] font-bold text-6xl' >
                        About Me
                    </p>

                    <div className='flex justify-center lg:gap-[850px]  w-full px-6 pt-10'>
                        <Image
                            alt="logo1"
                            src={"/anjas.png"}
                            height={300}
                            width={300}
                            className='w-52 h-60 rounded-full bg-[#211951ba]'
                        />
                        <div>
                            <Image
                                alt="logo1"
                                src={"/kingpose.png"}
                                height={300}
                                width={300}
                                className='w-52 h-60 rounded-full bg-[#211951ba]'
                            />
                        </div>

                    </div>
                    <div className='flex pt-10'>
                        <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#F0F3FF] to-[#15F5BA] font-semibold text-3xl'>
                            Who Am I?
                        </p>
                    </div>
                    <div className='flex pt-3 w-5/12'>
                        <p className='text-[#F0F3FF] font-bold text-1xl text-justify'>
                            Currently working as Front-end Developer at PT. Saptaloka Digital Indonesia, with many project experience such as
                            Front-end website and game programming using Unity.
                        </p>
                    </div>
                </motion.div>

            </div>



        </section >
    );
};

export default About
