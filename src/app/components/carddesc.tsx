"use client";
import { useState } from 'react';

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
                        <label className='text-5xl font-extrabold text-[#FEF9EF]'>{skills}</label>
                    </div>
                    <div className="flip-card-back">
                        <div className='grid grid-cols-1 justify-items-center pt-5'>
                            <img
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