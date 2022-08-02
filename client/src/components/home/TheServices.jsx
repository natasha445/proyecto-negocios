import React from "react";

import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';


const TheServices = () => {
    return (
        <div className="bg-secondary-200 px-8 py-24">
            <div className="xl:w-[85%] mx-auto">

                <div className="flex justify-between mb-12">
                    <h3 className="text-3xl text-[#453227] capitalize tracking-wide font-semibold w-1/2">explore our top products <br /> and find something new</h3>
                    <p className="w-1/2 leading-relaxed text-[#795744]">To musicians, value means getting the best deal possible on the gear you need with free, fast shipping. That's why MuShop offers you more ways to save and guarantees our in-stock gear to ship within 24 hours of ordering. Check out all the reasons you should buy your gear here.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-center">

                    <div className="flex flex-col items-center bg-[#c5a491] py-12 px-8 rounded">
                        <span className="flex justify-center items-center w-16 h-16 mb-4 rounded-full text-3xl bg-[#eaded7]"><GiCompass /></span>
                        <h4 className="capitalize text-2xl mb-3 font-bold">mission</h4>
                        <p className="leading-relaxed text-[#5f4435]">We strive to offer our customers, the best quality musical instruments at prices as low as possible, with the best selection and with great reliability.</p>
                    </div>

                    <div className="flex flex-col items-center bg-[#c5a491] py-12 px-8 rounded">
                        <span className="flex justify-center items-center w-16 h-16 mb-4 rounded-full text-3xl bg-[#eaded7]"><GiDiamondHard /></span>
                        <h4 className="capitalize text-2xl mb-3 font-bold">vision</h4>
                        <p className="leading-relaxed text-[#5f4435]">Be the e-commerce of musical instruments with the best selection of products and the best treatment and customer service.</p>
                    </div>

                    <div className="flex flex-col items-center bg-[#c5a491] py-12 px-8 rounded">
                        <span className="flex justify-center items-center w-16 h-16 mb-4 rounded-full text-3xl bg-[#eaded7]"><GiStabbedNote /></span>
                        <h4 className="capitalize text-2xl mb-3 font-bold">history</h4>
                        <p className="leading-relaxed text-[#5f4435]">We've been a company made up of musicians and music-lovers alike, whose sole purpose is to get the right gear into your hands. We understand the journey of a musician, and we're "the friend" who's here to help you every step of the way.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};



export default TheServices;