"use client"
import React, { useState } from 'react'
import Introduction from './components/introduction'
import About from './components/about'
import Cardproject from './components/cardproject'
import PlaceCard from './components/carddesc';
import Navbar from './components/navbar';


const Places = [
    { skills: 'TSX', desc: 'TypeScript', image: '/ts.png' },
    { skills: 'JS', desc: 'JavaScript', image: '/js.png' },
    { skills: 'PHP', desc: 'PHP', image: '/php.png' },
    { skills: 'HTML', desc: 'HTML', image: '/html.png' },
    { skills: 'CSS', desc: 'Tailwind CSS', image: '/tw.png' },
    { skills: 'React', desc: 'React', image: '/react.png' },
    { skills: 'MySQL', desc: 'MySql', image: '/sql.png' },
    { skills: 'Unity', desc: 'Unity', image: '/unity.png' },

];

function Page() {
    const [color, setColor] = useState('')
    return (
        <div>

            <main className='flex  min-h-screen  flex-col bg-[#211951] '>
                <Navbar color={color} />
                <div className='mt-5  top-0 z-50'>
                    <button onClick={() => setColor('#15f5b9b2')} className=' bg-[#15F5BA] w-2 rounded-full mt-12 px-3 py-2 z-50 shadow-xl'>
                    </button>
                    <button onClick={() => setColor('#826fffa9')} className='bg-[#826fffa9] w-2 rounded-full mt-12 px-3 py-2 z-50 shadow-xl'>
                    </button>
                    <button onClick={() => setColor('#211951ba')} className='bg-[#271c69] w-2 rounded-full mt-12 px-3 py-2 z-50 shadow-xl'>
                    </button>
                </div>

                <div className=' mx-auto px-12 py-4'>
                    <Introduction />
                </div>
                <div className='mx-auto px-12 py-4'>
                    <Cardproject color={color} />
                </div>
            </main>
            <main className='flex  min-h-screen  flex-col bg-[#826fffa9] backdrop-blur-md'>
                <div className='px-12 py-4'>
                    <About />
                </div>
            </main>
            <main className='flex  min-h-screen  flex-col bg-[#211951] pt-28'>
                <div className='flex w-full justify-center'>
                    <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#15F5BA] to-[#F0F3FF] font-bold text-6xl' >
                        My Skills
                    </p>
                </div>
                <div className="flex flex-wrap pl-40 w-full gap-4 py-4 justify-items-center pt-20">
                    {Places.map((place, index) => (
                        <PlaceCard key={index} skills={place.skills} desc={place.desc} image={place.image} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Page
