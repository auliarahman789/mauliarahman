"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";

const Navbar = ({ color }: { color: any }) => {
    const [scrollLocation, setScrollLocation] = useState(0);
    const [prevScrollLocation, setPrevScrollLocation] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<string | null>(null);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollLocation = window.scrollY;
            setScrollLocation(currentScrollLocation);

            // Check if scrollLocation is decreasing
            if (currentScrollLocation < prevScrollLocation) {
                // Scroll location is decreasing
                setScrollDirection("up");
            } else if (currentScrollLocation > prevScrollLocation) {
                // Scroll location is increasing
                setScrollDirection("down");
            }

            // Update prevScrollLocation with currentScrollLocation
            setPrevScrollLocation(currentScrollLocation);
        };

        window.addEventListener("scroll", handleScroll);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollLocation]);

    return (
        <div
            className={`absolute w-full  flex justify-between items-center py-[25px] duration-200 
    ${scrollLocation >= 100 ? "bg-[#000820]" : "bg-transparent"}
    ${scrollLocation >= 380 && scrollDirection == "down"
                    ? "-translate-y-[90px]"
                    : ""
                }
    `}
        >
            <div style={{ background: `${color}` }} className='flex w-full fixed top-0 h-[45px] bg-[#211951ba] shadow-lg backdrop-blur-md z-50 justify-center'>

                <div className='flex w-full justify-end gap-4 px-7'>
                    {/* <a href='/#'>
                        <Image
                            src={'/brand.png'}
                            width={50}
                            height={50}
                            alt={'logo'}
                            className=' w-12 h-12 rounded-full'
                        />
                    </a> */}

                    <a className='lg:pl-[490px] flex text-[#F0F3FF] font-semibold text-lg pt-2' href='#about'>
                        About
                    </a>

                    <a className='flex text-[#F0F3FF] font-semibold text-lg pt-2' href='#projects'>
                        Project
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
