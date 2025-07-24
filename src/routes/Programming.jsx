import React from 'react';
import ProgData from '../data/ProgData';

const Programming = () => {
    return (
        <div className='relative h-80 w-full bg-black overflow-auto p-4 text-green-500'>
            {/* Matrix background animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="matrix-rain">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="matrix-column" style={{ left: `${i * 5}%`, animationDelay: `${Math.random() * 2}s` }}>
                            {Math.random().toString(2).substring(2, Math.floor(Math.random() * 20) + 20)}
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ProgData ? ProgData.map((item) => (
                    <div key={item.id} className="w-full bg-black border-2 border-green-500 p-1">
                        <div className="bg-green-900 text-green-300 p-1 mb-2 flex items-center">
                            <span className="flex-1">{item.title}</span>
                            <button className="bg-green-700 text-green-300 px-2 border border-green-500 hover:bg-green-600">
                                X
                            </button>
                        </div>
                        <div className="p-2 bg-black border border-green-500">
                            <img
                                src={item.img || "/path-to-your-image.jpg"} // Fallback if img is empty
                                alt={item.name}
                                className="w-full h-21 object-cover mb-2 border border-green-500"
                            />
                            <div className="bg-green-900 p-2 border border-green-500">
                                <h3 className="font-bold mb-2">{item.name}</h3>
                                <p className="text-sm">
                                    {item.description}
                                </p>
                                {item.link && (
                                    <a href={item.link} className="text-green-300 hover:underline" target="_blank" rel="noopener noreferrer">
                                        View on GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )) : <div>  Add Some Data ! </div>}
            </div>
        </div>
    );
};

export default Programming;