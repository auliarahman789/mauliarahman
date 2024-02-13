"use client";
import { useState } from 'react';
import Image from 'next/image'
const PlaceCard = ({ skills, desc, image }: { skills: any, desc: any, image: any }) => {

    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className="place-card bg-[#FEF9EF]" id='skills' onClick={toggleDescription}>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front  pt-4">
                        <label className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#836FFF] to-[#15F5BA]'>{skills}</label>
                    </div>
                    <div className="flip-card-back">
                        <div className='grid grid-cols-1 justify-items-center pt-5'>
                            <img
                                width={32}
                                height={32}
                                src={image}
                                alt='gambar'
                                className='w-32 h-32'
                            />
                        </div>

                        <label>
                            {desc}
                        </label>
                    </div>
                </div>
            </div>


        </div>

    )
};

export default PlaceCard;