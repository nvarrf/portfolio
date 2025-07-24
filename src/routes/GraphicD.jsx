import React from 'react';
import GraphicData from '../data/GraphicData';

const GraphicD = () => {
    return (
        <div className='h-80 w-full bg-white overflow-auto p-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {GraphicData ? GraphicData.map((item) => (
                    <div key={item.id} className="w-full bg-[#c0c0c0] border-t-[2px] border-l-[2px] border-t-white border-l-white border-r-[2px] border-b-[2px] border-r-black border-b-black p-1">
                        <div className="bg-[#000080] text-white p-1 mb-2 flex items-center">
                            <span className="flex-1">{item.name}</span>
                            <button className="bg-[#c0c0c0] text-black px-2 border-t border-l border-t-white border-l-white border-r border-b border-r-black border-b-black hover:bg-[#a9a9a9]">
                                X
                            </button>
                        </div>
                        <div className="p-2 bg-white border border-black">
                            <img
                                src={item.img || "/path-to-your-image.jpg"} // Fallback if img is empty
                                alt={item.name}
                                className="w-full h-21 object-cover mb-2 border border-black"
                            />
                            <div className="bg-[#c0c0c0] p-2 border-t border-l border-t-white border-l-white border-r border-b border-r-black border-b-black">
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p className="text-sm">
                                    {item.description}
                                </p>
                                {item.link && (
                                    <a href={item.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                        View Designs
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

export default GraphicD;