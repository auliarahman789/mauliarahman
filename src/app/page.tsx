import React from 'react'
import Introduction from './components/introduction'
import About from './components/about'
import Cardproject from './components/cardproject'
import PlaceCard from './components/carddesc';

const places = [
    { skills: 'TSX', desc: 'Pro banget bjir11', image: '/logo1.png' },
    { skills: 'JS', desc: 'Hansemr', image: '/anjas.png' },
    { skills: 'PHP', desc: 'Hansem', image: '/logo1.png' },
    { skills: 'HTML', desc: 'Pro banget bjir11', image: '/logodefault.png' },
    { skills: 'CSS', desc: 'Pro banget bjir11', image: '/profile.png' },
    { skills: 'C#', desc: 'Pro banget bjir11', image: '/profile.png' },
    { skills: 'MySQL', desc: 'Hansem', image: '/anjas.png' },
    { skills: 'Unity', desc: 'Pro banget bjir11', image: '/logodefault.png' },

];

function page() {
    return (
        <div>
            <main className='flex  min-h-screen  flex-col bg-[#211951] '>
                <div className=' mx-auto px-12 py-4'>
                    <Introduction />
                </div>
                <div className='mx-auto px-12 py-4'>
                    <Cardproject />
                </div>
            </main>
            <main className='flex  min-h-screen  flex-col bg-[#836FFF]'>
                <div className='px-12 py-4'>
                    <About />
                </div>
            </main>
            <main className='flex  min-h-screen  flex-col bg-[#211951] pt-20'>
                <div className='flex w-full justify-center'>
                    <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#15F5BA] to-[#F0F3FF] font-bold text-6xl' >
                        My Skills
                    </p>
                </div>
                <div className="flex flex-wrap pl-40 w-full gap-4 py-4 justify-items-center pt-20">
                    {places.map((place, index) => (
                        <PlaceCard key={index} skills={place.skills} desc={place.desc} image={place.image} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default page
