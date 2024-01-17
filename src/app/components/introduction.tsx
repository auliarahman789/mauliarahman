"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { once } from "events";

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="flex flex-col-1 w-full h-full">
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="flex place-self-start text-start sm:text-left justify-self-start"
                    >
                        <div className="text-white mb-4 text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold ">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF865E] to-[#FEE440]">
                                Hello, I&apos;m{" "}
                            </span>
                            <br></br>
                            <div>
                                <TypeAnimation
                                    className="text-[#FF865E]"
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
                    className="flex place-self-start text-center sm:text-left justify-self-start"
                >
                    <p className=" text-justify text-xl text-[#FF865E]">
                        I am a Front-End Developer and Unity Programmer who is interested in website front-end development and games
                        development, has experience in creating websites, desktop applications and games on a project scale.
                        Currently I'm focused on building responsive front-end web applications while learning back-end technologies.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="flex place-self-start text-center sm:text-left justify-self-start"
            >
                <div>
                    <Link
                        href="/#contact"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-[#FF865E] to-[#FEE440] hover:bg-slate-200 text-white"
                    >
                        Hire Me
                    </Link>
                    <Link
                        href="/"
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-[#FF865E] to-[#FEE440] hover:bg-slate-800 text-white mt-3"
                    >
                        <span className="block bg-[#FFF6F4] hover:bg-slate-200 rounded-full px-5 py-2 text-[#FF865E]">
                            Download CV
                        </span>
                    </Link>
                </div>
            </motion.div>
        </section >
    );
};

export default HeroSection;