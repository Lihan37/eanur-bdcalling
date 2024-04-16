import React from 'react';
import banner from '../src/assets/Rectangle 8.png';
import vector from '../src/assets/icon/Vector.png';

const Banner = () => {
    return (
        <div className="relative w-full mt-10">
            {/* Background image */}
            <img className="w-full h-auto" src={banner} alt="Banner" />
            
            {/* Overlay content */}
            <div className="absolute top-1/2 left-0 translate-y-[-50%] pl-16 text-left text-white">
                {/* Title */}
                <h1 className="text-4xl font-extrabold mb-4">CMA Fest</h1>
                
                {/* Heading */}
                <p className="text-lg mb-6">Make memories that will last a lifetime. See your favorite artists live at CMA Fest!</p>
                
                {/* Buttons */}
                <div className="flex space-x-4">
                    {/* First button */}
                    <button
                        className="bg-gradient-to-r from-[#7342F9] to-[#8053FA] text-white flex items-center space-x-2 font-bold py-2 px-4 rounded"
                    >
                        {/* Icon and text */}
                        <img src={vector} alt="Icon" className="w-4 h-4" />
                        <span>Get Ticket</span>
                    </button>
                    
                    {/* Second button */}
                    <button
                        className="border border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-[#591BFF]"
                    >
                        Explore All Events
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
