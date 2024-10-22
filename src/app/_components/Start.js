import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { PhoneAndroidRounded } from '@mui/icons-material'
import { CallEndOutlined } from '@mui/icons-material'
import CallIcon from '@mui/icons-material/Call';
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { TbCirclePercentage } from "react-icons/tb";
import { AiFillDollarCircle, AiOutlineDollar } from "react-icons/ai";
export const Start = () => {
    return (
        <div className='w-auto min-h-[100vh]'>
            <div className='ml-auto mr-auto w-auto max-w-[1200px]'>
                <header className="h-[96px] pt-6 pb-6">
                    <div className="items-center flex justify-between w-full">
                        <div className="w-auto">
                            <Link href="/mortgage/">
                                <Image alt="better mortgage homepage" loading="lazy" width={150} height={23} src="/Assets/better-mortgage-logo.svg" color="transparent" />
                            </Link>
                        </div>
                        <div className="items-center flex w-auto">
                            <div className="flex">
                                <button className="bg-transparent rounded-lg h-12 px-4 relative gap-3 w-auto text-black border-none transition-shadow duration-300 font-bold text-lg cursor-pointer pointer-events-auto">
                                    <div className="items-center flex w-auto justify-between">
                                        <div className="items-center bg-[#c4ead4] rounded-[50%] flex h-[calc(32px)] justify-center w-[calc(32px)]">
                                            <CallIcon className='text-[#2b936a]' />
                                        </div>
                                        <h5 className="css-1tb76b9">Need help? Call (415) 523 8837</h5>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='relative w-auto'>
                    <div className='w-auto'>
                        <div className='rounded-sm h-1 w-full bg-[#e7eae6]'>
                            <div className='w-0 h-1 duration-300 transition-[width]'></div>
                        </div>
                    </div>
                    <div className='rounded-[50%] w-12 h-12 absolute overflow-hidden left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] mr-[-50%]'>
                        <div className='items-center flex justify-center relative w-12 max-h-24'>
                            <div className='pb-12 w-12 relative'>
                                <Image className='block top-0 left-0 object-contain !w-[100%] !h-[100%] rounded-[50%]' alt='img' src="/Assets/image8.png" height={400} width={400} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid pb-20 pt-12 w-auto gap-0 grid-rows-1 '>
                    <div className="text-center w-auto justify-self-center">
                        <h1 className="text-black m-0 w-auto font-bold text-2xl">
                            <span>Hi, I'm Betsy!</span><br />What can I help you with?
                        </h1>
                        <div className="mt-6 w-auto">
                            <div role="radiogroup" className="grid w-auto grid-cols-1 gap-4">
                                <button aria-checked="false" role="radio" tabindex="0"
                                    className="items-center bg-transparent rounded-lg hover:border-[#108358] hover:border-[6px]
                                 text-black flex flex-row h-16 justify-start text-left w-auto border-[1px] border-[#a4a8a4] text-lg font-bold duration-300 transition-colors">
                                    <div className="self-center flex justify-center ml-4 mr-6 w-auto">
                                        <Image height={36} width={36} alt='home' className='w-9 h-9 fill-transparent' src="/Assets/buying-home.svg" />
                                    </div>
                                    <span >Buying a home</span>
                                </button>
                                <button aria-checked="false" role="radio" tabindex="-1" className="items-center bg-transparent rounded-lg hover:border-[#108358] hover:border-[6px]
                                 text-black flex flex-row h-16 justify-start text-left w-auto border-[1px] border-[#a4a8a4] text-lg font-bold duration-300 transition-colors">
                                    <div className="self-center flex justify-center ml-4 mr-6 w-auto">
                                        <Image height={36} width={36} alt='home' className='w-9 h-9 fill-transparent' src='/Assets/refinance.svg' />
                                    </div>
                                    <span >Refinance my mortgage</span>
                                </button>
                                <button aria-checked="false" role="radio" tabindex="-1" className="items-center bg-transparent rounded-lg hover:border-[#108358] hover:border-[6px]
                                 text-black flex flex-row h-16 justify-start text-left w-auto border-[1px] border-[#a4a8a4] text-lg font-bold duration-300 transition-colors">
                                    <div className="self-center flex justify-center ml-4 mr-6 w-auto">
                                        <Image height={36} width={36} alt='home' className='w-9 h-9 fill-transparent' src="/Assets/get-cash.svg" />
                                    </div>
                                    <span >Get cash from my home</span>
                                </button>
                            </div>
                        </div>
                        <div className="grid mb-16 mt-16 w-auto gap-0 grid-cols-[(25,1fr)] grid-rows-1">
                            <div className="w-auto col-start-12 col-end-1">
                                <p className="w-auto m-0 p-0 text-black text-center font-bold text-4xl ">$100B</p>
                                <p className="text-[#565d5a] p-0 mt-4 w-auto font-normal text-sm">home loans funded entirely online</p></div>
                            <div className="w-auto col-start-[25] col-end-13">
                                <p className="w-auto m-0 p-0 text-black text-center font-bold text-4xl ">400K</p>
                                <p className="text-[#565d5a] p-0 mt-4 w-auto font-normal text-sm">Customers who chose a Better Mortgage</p></div></div>
                        <div className="bg-[#f0f7f1] rounded-lg mt-[40px] w-auto text-center p-5"><p className="text-[#565d5a] mr-4 p-0 text-center w-auto font-normal text-lg">After a few questions, you'll unlock:</p>
                            <div className="w-fit mx-auto my-0"><div className="w-auto">
                                <div className="flex w-auto flex-row">
                                    <div className="items-center flex justify-center w-auto">
                                        <HiDevicePhoneMobile className='w-6 h-6 text-green-400' />
                                    </div>
                                    <div className="justify-center flex w-auto ml-3">
                                        <p className="text-[#565d5a] m-0 p-0 text-left w-auto font-normal text-lg">Custom mortgage rates</p>
                                    </div>
                                </div>
                                <div className="flex w-auto flex-row">
                                    <div className="items-center flex justify-center w-auto">
                                        <TbCirclePercentage className='w-6 h-6 text-green-400' />
                                    </div>
                                    <div className="justify-center flex w-auto ml-3">
                                        <p className="text-[#565d5a] m-0 p-0 text-left w-auto font-normal text-lg">Exclusive offers</p>
                                    </div>
                                </div>
                                <div className="flex w-auto flex-row">
                                    <div className="items-center flex justify-center w-auto">
                                        <AiOutlineDollar className='w-6 h-6 text-green-400' />
                                    </div>
                                    <div className="justify-center flex w-auto ml-3">
                                        <p className="text-[#565d5a] m-0 p-0 text-left w-auto font-normal text-lg">A personalized dashboard
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
