import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className='sticky top-0 transition-all ease-in-out duration-300 bg-[#004835]'>
            <nav className='flex justify-between m-auto max-w-screen-2xl p-5 md:py-5 md:px-10 xl:p-5'>
                <div className='flex flex-row'>
                    <ul className='flex items-start'>
                        <li className='mr-3'>
                            <Image alt="img" className="icon icon-LogoBetter2021" width={85} height={35} src="/Assets/better-logo.svg" color='white' />
                        </li>
                        <li className='mr-2'><button className='rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black'>Buy</button></li>
                        <li className='mx-5 hidden xl:block'><button className='rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black'>Refinance</button></li>
                        <li className='mx-5 hidden xl:block'><button className='rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black'>HELOC</button></li>
                        <li className='mx-5 hidden xl:block'><button className='rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black'>Rates</button></li>
                        <li className='mx-5 hidden xl:block'><button className='rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black'>Better+</button></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex items-center gap-3 lg:gap-6'>
                        <li><button className='rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black'>Better+</button></li>
                        <li><button className='rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black'>Sign In</button></li>
                        <li><Link href={"/get-started"}><button className='rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black'>Get Started</button></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
