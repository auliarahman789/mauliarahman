'use client'
import styles from '../page.module.scss'
import ZoomParallax from '../components/index';
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis'

import Navbar1 from '../components/navbar1';

export default function Home() {
    const [color, setColor] = useState('')
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <div>
            <div className='pt-20'>
                <label className='flex text-transparent bg-clip-text bg-gradient-to-r from-[#F0F3FF] to-[#211951ba] text-6xl font-bold w-full justify-center'>
                    Projects
                </label>
                <Navbar1 color={color} />
                <ZoomParallax />

                <div className='pt-3'>
                    <img
                        alt=''
                        src='/22.png'>
                    </img>
                </div>
                <div className='pt-3'>
                    <img
                        alt=''
                        src='/33.png'>
                    </img>
                </div>
                <div className='pt-3'>
                    <img
                        alt=''
                        src='/44.png'>
                    </img>
                </div>
                <div className='pt-3'>
                    <img
                        alt=''
                        src='/55.png'>
                    </img>
                </div>
                <div className='pt-3'>
                    <img
                        alt=''
                        src='/66.png'>
                    </img>
                </div>
                <div className='pt-3'>
                    <img
                        alt=''
                        src='/77.png'>
                    </img>
                </div>


            </div>
        </div>
    )

}