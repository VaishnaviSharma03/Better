import Link from 'next/link';
import React from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import GoogleIcon from '@mui/icons-material/Google';
import { FcGoogle } from "react-icons/fc";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Image from 'next/image';
import { HiStar } from "react-icons/hi2";
export const HeroSection = () => {
    return (
        <div className='bg-[#004835]'>
            <div className='m-auto max-w-screen-2xl overflow-hidden px-6 md:px-10 lg:px-14'>
                <div className='flex items-center justify-center gap-3 md:gap-4'>
                    <p className="font-normal text-white text-4xl">
                        Rate drop alert
                    </p>
                </div>
                <h1 className='font-bold text-9xl text-center text-white'>The rate drop you’ve been waiting for</h1>
                <div className='relative flex flex-col items-center justify-center md:flex-row'>
                    <div className='w-80 md:w-auto'>
                        <Link href={'/'} className='inline-flex items-center justify-center whitespace-nowrap rounded-full 
                        text-lg font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 
                        transition-all ease-in-out duration-200 bg-[#00e388] text-black hover:bg-[#004835]
                         hover:text-white h-16 px-12 py-5 mt-lg w-full md:mt-none md:w-fit'>Start My Approval</Link>
                        <div className="mt-3 flex items-center justify-center gap-1 text-sm text-white">
                            <span className="mr-1"><AccessAlarmIcon />3 min</span><span>| No credit impact</span></div>
                    </div>
                    <div className="mt-5 md:mb-[-36px] md:mt-0">
                        <Image alt="Better Mortgage" className='' width={510} height={810} color='transparent' src="/Assets/image1.png" /></div>
                    <div className="rounded-base absolute bottom-8 bg-backgroundInversePrimary px-3 py-2.5 md:relative md:bg-transparent md:mt-lg">
                        <div className='flex items-center gap-2'>
                            <FcGoogle className='w-[30px] h-[30px] text-3xl' />
                            <div className='flex items-center'>
                                <HiStar className='w-[25px] h-[25px] text-yellow-400 border-none' />
                                <HiStar className='w-[25px] h-[25px] text-yellow-400 border-none' />
                                <HiStar className='w-[25px] h-[25px] text-yellow-400 border-none' />
                                <HiStar className='w-[25px] h-[25px] text-yellow-400 border-none' />
                                <StarHalfIcon className='w-[25px] h-[25px] text-yellow-400 border-none text-3xl' />
                            </div>
                        </div>
                        <div class="mt-1 text-xs text-white">4.6 Stars | 3177 Google reviews</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
