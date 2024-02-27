"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { once } from "events";

const HeroSection = () => {
    return (
        <section className="lg:py-16  ">
            <div className="relative flex flex-col-1 w-full h-full z-[20]">
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="flex place-self-start text-start sm:text-left justify-self-start z-[20]"
                    >
                        <div className=" text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold ">
                            <span className="text-[#15F5BA] lg:text-6xl font-semibold ">
                                {/* text-transparent bg-clip-text bg-gradient-to-r  from-[#FEE440] to-[#A2D2FF] */}
                                Hello,

                            </span>
                            <span className="pl-2 text-[#15F5BA] lg:text-6xl z-[20]">
                                I&apos;m{" "}
                            </span>
                            <div>
                                <TypeAnimation
                                    className="text-[#F0F3FF] z-[20]"
                                    sequence={[
                                        "Front-End Developer",
                                        1000,
                                        "Unity Programmer",
                                        1000,
                                        "Muhammad Aulia Rahman",
                                        1000,
                                    ]}

                                    wrapper="span"
                                    speed={30}
                                />
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="flex w-full h-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex place-self-start text-center sm:text-left justify-self-start z-[20]"
                >
                    <p className=" text-justify text-xl text-[#F0F3FF]">
                        I am a Front-End Developer and Unity Programmer who is interested in website front-end development and games
                        development, has experience in creating websites, desktop applications and games on a project scale.
                        Currently I&rsquo;am focused on building responsive front-end web applications while learning back-end technologies.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="flex place-self-start text-center sm:text-left justify-self-start z-[20]"
            >
                <div className="relative flex z-[30]">
                    <Link
                        href="/#contact"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mt-3 mr-4 bg-[#15F5BA] hover:bg-slate-200 text-[#211951] font-semibold z-[30]"
                    >
                        Hire Me
                    </Link>
                    <Link
                        href="/"
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-[#15F5BA] hover:bg-slate-800 text-white mt-3 font-semibold z-[30]"
                    >
                        <span className="block bg-[#FFF6F4] hover:bg-slate-200 rounded-full px-5 py-2 text-[#211951] z-[30]">
                            Download CV
                        </span>
                    </Link>
                </div>
            </motion.div>
        </section >
    );
};

export default HeroSection;