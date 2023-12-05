import React from 'react'
import Introduction from './components/introduction'

function page() {
    return (
        <div>
            <main className='flex container mx-auto min-h-screen flex-col bg-black px-12 py-4'>
                <Introduction />
            </main>

        </div>
    )
}

export default page
