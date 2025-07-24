import React, { useState, useEffect } from 'react'

const Taskbar = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);

    const formatTime = (date) => {
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return `${hours}:${minutes} ${ampm}`;
    };

    return (
        <div className="fixed bottom-0 left-0 w-full h-[34px] bg-[#c0c0c0] border-t border-white flex items-center px-1 z-50" style={{ fontFamily: `"MS Sans Serif", "Pixelated MS Sans Serif", "Tahoma", sans-serif` }}>

            <button className="flex items-center px-2 py-0.5 border-2 border-t-white border-l-white border-r-black border-b-black active:border-t-black active:border-l-black active:border-r-white active:border-b-white">
                <img src="https://win98icons.alexmeub.com/icons/png/windows-0.png" alt="Start" className="w-5 h-5 mr-1" />
                <span className="font-bold">Start</span>
            </button>

            <div className="h-full w-px bg-gray-500 border-r border-white mx-2"></div>
            <img src='https://i.ibb.co/p6fBT1rR/e.png' className='size-5' />
            <img src=' https://i.ibb.co/snyRqF8/e2.png' className='size-10' />



            <div className="flex-grow h-full flex items-center" />

            <div className="flex items-center h-[22px] px-2 border-2 border-l-gray-500 border-t-gray-500 border-r-white border-b-white gap-4">
                <img src="https://win98icons.alexmeub.com/icons/png/loudspeaker_rays-0.png" alt="Volume" className="h-4 w-4 mr-2" />
                <span className="text-sm">{formatTime(time)}</span>
            </div>
        </div>
    )
}

export default Taskbar