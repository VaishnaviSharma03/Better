import React from 'react'
import { PiPlayCircle } from "react-icons/pi";
import Image from 'next/image';
import Link from 'next/link';
import { CompanyTimeLine } from './CompanyTimeLine';
export const OurMission = () => {
    return (
        <>
            <section class="m-auto flex h-screen max-w-screen-xl items-center md:px-20">
                <div>
                    <h1 class="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight text-center text-textHighlight">Our mission</h1>
                    <h2 class="font-bold text-textPrimary leading-heading m-0 p-0 w-auto text-2xl md:text-3xl tracking-tight md:tracking-tighter mt-8 text-center">We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.</h2>
                </div>
            </section>
            <section class="m-auto flex max-w-screen-xl flex-col-reverse gap-x-32 gap-y-base px-20 pb-32 md:flex-row md:px-20">
                <div class="w-full md:w-1/2">
                    <h2 class="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">The status quo is broken</h2>
                    <p class="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base mt-6">The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, <Link href="/content/vishal-garg-better-ceo/">Vishal Garg</Link>, set out to change that.</p>
                    <Link class="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundPrimary bg-interactivePrimary hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-xl h-3xl w-auto inline-flex items-center justify-center mt-8" href="/content/the-house-that-got-away-why-i-started-better-mortgage/">Read Vishal’s story</Link></div>
                <div class="relative w-full md:w-1/2">
                    <button className="h-[400px]">
                        <Image alt="" loading="lazy" width="1080" height="800" decoding="async" data-nimg="1" src="/Assets/image7.png" color="transparent" object-fit="cover" />
                        <PiPlayCircle className='lucide lucide-circle-play absolute text-center left-[45%] top-1/3 w-[80px] h-[80px] text-white' width={80} height={60} />
                    </button></div>
            </section>
            <section class="bg-[#007c50] px-20 py-20">
                <div class="m-auto max-w-screen-lg">
                    <h2 class="font-bold leading-heading m-0 p-0 w-auto text-2xl md:text-3xl tracking-tight md:tracking-tighter text-white">How we’re changing things</h2>
                    <p class="font-normal leading-body m-0 p-0 text-left text-white text-base mt-8">Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.</p>
                    <p class="font-normal leading-body m-0 p-0 text-left text-white text-base mt-4">That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
                </div>
            </section>
            <section class="px-20 py-28"><h2 class="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight text-center">Backed by</h2>
                <div class="m-auto mt-20 flex max-w-screen-2xl flex-wrap justify-around">
                    <Link href="https://group.softbank/en/philosophy" target="_blank">
                        <Image alt='soft-bank' className='h-[90px] w-[154px]' width={154} height={90} src="/Assets/soft-bank.svg" />
                    </Link>
                    <Link href="https://www.ally.com" target="_blank">
                        <Image alt='soft-bank' className='h-[90px] w-[154px]' width={154} height={90} src="/Assets/ally.svg" />
                    </Link>
                    <Link href="https://www.citi.com" target="_blank">
                        <Image alt='soft-bank' className='h-[90px] w-[154px]' width={154} height={90} src="/Assets/citi.svg" />
                    </Link>
                    <Link href="https://bank.pingan.com/english/index.shtml" target="_blank">
                        <Image alt='soft-bank' className='h-[90px] w-[154px]' width={154} height={90} src="/Assets/pingan.svg" />
                    </Link>
                    <Link href="https://www.goldmansachs.com" target="_blank">
                        <Image alt='soft-bank' className='h-[90px] w-[154px]' width={154} height={90} src="/Assets/goldman.svg" />
                    </Link>
                    <Link href="https://www.goldmansachs.com" target="_blank">
                        <Image alt='soft-bank' className='h-[90px] w-[154px]' width={154} height={90} src="/Assets/kpcb.svg" />
                    </Link>
                    <Link href="https://www.goldmansachs.com" target="_blank">
                        <Image alt='soft-bank' className='h-[90px] w-[154px]' width={154} height={90} src="/Assets/american.svg" />
                    </Link>
                </div>
            </section>
            <CompanyTimeLine />
        </>
    )
}
