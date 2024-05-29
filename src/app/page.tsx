"use client"
import React, { useState } from 'react'
import Introduction from './components/introduction'
import About from './components/about'
import Cardproject from './components/cardproject'
import PlaceCard from './components/carddesc';
import Navbar from './components/navbar';
import ZoomParallax from './components/index';
import Paralax2 from './components/paralax1'
import SideScroll from './components/sidescroll'


const Places = [
    { skills: 'TSX', desc: 'TypeScript', image: '/ts.png', skilldesc: 'Type script is Programming language that i most proficient with' },
    { skills: 'JS', desc: 'JavaScript', image: '/js.png', skilldesc: 'Use it for some Back-end' },
    { skills: 'PHP', desc: 'PHP', image: '/php.png', skilldesc: 'Have some time with Native PHP' },
    { skills: 'HTML', desc: 'HTML', image: '/html.png', skilldesc: 'Use on daily' },
    { skills: 'CSS', desc: 'Tailwind CSS', image: '/tw.png', skilldesc: 'Tailwind CSS so powerfull' },
    { skills: 'React', desc: 'React', image: '/react.png', skilldesc: 'Well Yes' },
    { skills: 'MySQL', desc: 'MySql', image: '/sql.png', skilldesc: 'Have experience making database' },
    { skills: 'Unity', desc: 'Unity', image: '/unity.png', skilldesc: 'Already make Inertia Showdown title' },

];

function Page() {
    const [color, setColor] = useState('')


    return (
        <div id='#'>
            <main className='flex  min-h-screen  flex-col bg-[#211951] ' >
                <Navbar color={color} />
                <div className='mt-5  top-0 z-50'>
                    <button onClick={() => setColor('#15f5b9b2')} className=' bg-[#15F5BA] w-2 rounded-full mt-12 px-3 py-2 z-50 shadow-xl'>
                    </button>
                    <button onClick={() => setColor('#826fffa9')} className='bg-[#826fffa9] w-2 rounded-full mt-12 px-3 py-2 z-50 shadow-xl'>
                    </button>
                    <button onClick={() => setColor('#211951ba')} className='bg-[#271c69] w-2 rounded-full mt-12 px-3 py-2 z-50 shadow-xl'>
                    </button>
                </div>
                <div className=' mx-auto px-12 py-4 bg-[#211951]'>
                    <Introduction />
                </div>
            </main>
            <main className='flex  min-h-screen  flex-col bg-[#826fffa9] backdrop-blur-md' id='about'>
                <div className='px-12 py-4 bg-[#826fffa9] backdrop-blur-md'>
                    <About />
                </div>
            </main>
            <main className='flex  min-h-screen  flex-col bg-[#826fffa9]' id='projects'>
                <div className='pt-28 z-[20] '>
                    <Paralax2 />
                </div>
            </main>

        </div>
    )
}

export default Page
