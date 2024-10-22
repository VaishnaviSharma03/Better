import Link from 'next/link';
import React from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { BsArrowRightCircle } from "react-icons/bs";
import Image from 'next/image';

export const DetailSection = () => {
    return (
        <>
            <section className="section w-full pb-base lg:pb-12">
                <div className="m-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]">
                    <div className="justify-left flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 h-auto lg:max-w-none lg:items-end lg:justify-between">
                        <h1 className="font-bold text-textPrimary !text-6xl m-0 p-0 md:text-2xl md:tracking-tight w-full max-w-lg tracking-tight">
                            Got questions?<br />We&apos;ve got answers
                        </h1>
                        <div className="flex gap-3 overflow-x-scroll lg:gap-6 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0">
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] text-interactivePrimary">
                                Our products
                            </button>
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto">
                                Calculators
                            </button>
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto">
                                Guides & FAQs
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center gap-8 lg:gap-6">
                        <Link className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-md bg-[#eef7f1] px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>*]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px]" href="/content/buying-your-first-home-with-better-mortgage/">
                            <div className="flex flex-col gap-6">
                                <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl !text-3xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
                                    Buying your first home with Better
                                </h4>
                                <div className="flex items-end justify-between h-auto">
                                    <div className="h-auto">
                                        <BsArrowRightCircle width={48} height={50} className='!w-[50px] !h-[50px] !text-[50px]' />
                                    </div>
                                </div>
                            </div>
                            <Image alt="First Home" rel="preconnect" loading="lazy" width="200" height="200" decoding="async" className="w-full rounded-md object-cover h-[160px] md:h-[130px]" color="transparent" src="/Assets/first-home.webp" />
                        </Link>
                        <Link className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-md bg-[#eef7f1] px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>*]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px]" href="/b/one-day-mortgage/">
                            <div className="flex flex-col gap-6">
                                <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">One Day Mortgage<sup>1</sup></h4>
                                <p className="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.<sup>1</sup></p>
                                <div className="flex items-end justify-between">
                                    <div className="group">
                                        <BsArrowRightCircle width={50} height={50} className='!w-[50px] !h-[50px] !text-[50px]' />
                                    </div>
                                </div>
                            </div>
                            <Image alt="One day mortgage" rel="preconnect" width={200} height={200} className="w-full rounded-md object-cover h-[160px] md:h-[130px]" src="/Assets/image4.png" />
                        </Link>
                        <Link className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-md bg-[#eef7f1] px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>*]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px]" href="/b/heloc/">
                            <div className="flex flex-col gap-6">
                                <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">Better HELOC</h4>
                                <p className="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit<sup>2</sup>. Access up to 90% of your home equity as cash in as little as 7 days.<sup>3</sup></p>
                                <div className="flex items-end justify-between">
                                    <div className="group">
                                        <BsArrowRightCircle width={50} height={50} className='!w-[50px] !h-[50px] !text-[50px]' />
                                    </div>
                                </div>
                            </div>
                            <Image alt="Better HELOC" width={200} height={200} className="w-full rounded-md object-cover h-[160px] md:h-[130px]" src="/Assets/image5.png" color="transparent" />
                        </Link>
                        <Link className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-md bg-[#eef7f1] px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>*]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px]" href="/content/refinancing/">
                            <div className="flex flex-col gap-6">
                                <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">Refinancing with Better</h4>
                                <p className="hidden flex-1 md:flex-none text-sm text-backgroundInversePrimary md:block">Refinance to cut down on debt, shorten your loan term, or lower your monthly payment. Whatever your goal, we&apos;re here to help you find the best loan for your needs.</p>
                                <div className="flex items-end justify-between">
                                    <div className="group">
                                        <BsArrowRightCircle width={50} height={50} className='!w-[50px] !h-[50px] !text-[50px]' />
                                    </div>
                                </div>
                            </div>
                            <Image alt="Better Refinancing" width={200} height={200} className="w-full rounded-md object-cover h-[160px] md:h-[130px]" src="/Assets/image6.png" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};
