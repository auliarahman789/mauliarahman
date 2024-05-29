"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import "../components/style.css";
function About() {

    return (
        <section className="lg:py-16" >

            <div className='relative flex flex-col-1 w-full h-full z-[20] bg-[#826fffa9] backdrop-blur-md rounded-xl px-20 py-10'>
                <div className="flex flex-col justify-center bg-[#826fffa9] backdrop-blur-md">
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

                        <div className=''>
                            {/* <Image
                                alt="logo1"
                                src={"/anjas.png"}
                                height={300}
                                width={300}
                                className='w-52 h-60 rounded-full bg-[#211951ba]'
                            /> */}


                        </div>
                    </motion.div>
                </div>

                <div className='flex pt-3 w-8/12 justify-center items-end'>
                    <p className='text-[#F0F3FF] font-bold text-1xl text-justify'>
                        Currently working as Front-end Developer at PT. Saptaloka Digital Indonesia, with many project experience such as
                        Front-end website and game programming using Unity.
                    </p>
                </div>


            </div>
        </section >
    );
};

export default About
