"use client";
import { useState } from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';
const PlaceCard = ({ skills, desc, image, skilldesc }: { skills: any, desc: any, image: any, skilldesc: any }) => {

    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <section>
            <div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    animate={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 2 }}
                    className=""
                >
                    <div className="relative place-card bg-[#FEF9EF] z-[20]" onClick={toggleDescription}>

                        <div className="flip-card">
                            <div className="flip-card-inner">

                                <div className="flip-card-back  pt-4">
                                    <label className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#836FFF] to-[#15F5BA]'>
                                        {skills}
                                    </label>
                                    <p className='text-sm font-semibold text-justify text-[#FEF9EF] px-20'>
                                        {skilldesc}
                                    </p>
                                </div>
                                <div className="flip-card-front gap-2">
                                    <div className='grid grid-cols-1 justify-items-center pt-5 pb-3'>
                                        <img
                                            width={28}
                                            height={28}
                                            src={image}
                                            alt='gambar'
                                            className='w-28 h-28'
                                        />
                                    </div>

                                    <label className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#836FFF] to-[#15F5BA]'>
                                        {desc}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

    )
};

export default PlaceCard;