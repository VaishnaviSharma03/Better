import Link from 'next/link';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
export const AboutUsSection = () => {
    return (
        <section className='m-auto flex max-w-screen-2xl flex-col justify-between gap-12 px-6 py-16 md:px-10 md:flex-row-reverse xl:p-28'>
            <div className="flex flex-col justify-center md:max-w-[507px]">
                <h2 className="font-bold text-black tracking-tight mb-6 text-3xl md:text-4xl lg:text-7xl">
                    Find out why we’re better.
                </h2>
                <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base
                 font-bold transition-all ease-in-out duration-200 bg-green-500 text-white hover:bg-[#004835] h-16 px-12 py-5 w-full md:w-fit"
                    href={"/aboutUs"}>
                    See all our stories
                </Link>
                <div className="mt-4 mb-6 flex items-end justify-center gap-4 leading-small text-black md:justify-start">
                    <StarIcon className='text-green-400 w-6 h-6' />
                    <strong className='text-black'>Trustpilot</strong>
                    <span><strong>Excellent</strong></span>
                    <span><strong>4.4</strong> out of 5</span>
                </div>
            </div>
            <div className="flex flex-col gap-6 md:flex-col-reverse">
                <div className="flex gap-4 ">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border  hover:border-gray-300 hover:shadow-inner hover:text-blue-600 h-12 px-6 py-3 w-auto shadow-inner border-gray-300 text-blue-600">
                        Arian
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-900 hover:shadow-lg hover:border-gray-300  hover:text-blue-600 h-12 px-6 py-3 w-auto">
                        Amanda
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-900 hover:shadow-lg hover:border-gray-300  hover:text-blue-600 h-12 px-6 py-3 w-auto">
                        Paul
                    </button>
                </div>
                <div className="flex justify-center gap-4 overflow-hidden rounded-lg">
                    <Image
                        alt="Arian-tab"
                        loading="lazy"
                        width={341}
                        height={606}
                        src="/assets/image2.png"
                        className="color-transparent"
                    />
                </div>
            </div>

        </section>
    );
};
