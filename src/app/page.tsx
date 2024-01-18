import React from 'react'
import Introduction from './components/introduction'
import About from './components/about'
import Cardproject from './components/cardproject'

function page() {
    return (
        <div>
            <main className='flex  min-h-screen  flex-col bg-[#FEF9EF] '>
                <div className=' mx-auto px-12 py-4'>
                    <Introduction />
                </div>
                <div className='mx-auto px-12 py-4'>
                    <Cardproject />
                </div>
            </main>
            <main className='flex  min-h-screen  flex-col bg-[#FF865E]'>
                <div className='px-12 py-4'>
                    <About />
                </div>
            </main>
        </div>
    )
}

export default page
