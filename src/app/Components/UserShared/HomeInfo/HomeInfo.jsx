import { open_sans } from '@/fonts/fonts';
import React from 'react';

const HomeInfo = () => {
    return (
        <main className={` ${open_sans.className} bg-white text-black py-14`}>
        <div className='lg:max-w-6xl md:max-w-3xl sm: max-w-sm md:mx-auto sm: mx-4'>
            <h1>Home Info</h1>
        </div>
        </main>
    );
};

export default HomeInfo;