import React from 'react'
import Link from 'next/link'

export const CompanyTimeLine = () => {
    return (
        <section className="max-w-screen-xl m-auto pb-20 text-center">
            <h2 className="text-xl md:text-2xl font-bold tracking-normal md:tracking-tight text-textPrimary mb-16">
                Company timeline
            </h2>
            <div className="relative w-1/3 m-auto before:bg-[#dfe0dc] p-[40px] before:absolute before:h-full before:w-1 before:left-1/2 before:transform before:translate-x-2/4">
                {timelineData.map(({ year, text, linkText, linkHref, isAlternate, link }, idx) => (
                    <div key={idx} className="relative flex flex-col items-center">
                        <div className="bg-[#007c50] rounded-full px-8 py-2">
                            <h3 className="text-white text-lg md:text-xl font-bold">{year}</h3>
                        </div>
                        <div
                            className={`bg-[#dfe0dc] rounded-md p-[40px] lg:p-xl my-5 ${isAlternate
                                ? 'ml-8 translate-x-1/2 lg:ml-3xl'
                                : '-ml-base -translate-x-1/2 lg:-ml-2xl'
                                }`}
                        >
                            <p className="text-left text-base">
                                {text}{' '}
                                {linkText && (
                                    <Link href={linkHref} className="rounded-md p-3 leading-body text-base text-center font-bold select-none outline-none transition duration-300
                                     ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-white bg-[#007c50] hover:bg-accentPrimary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-5 h-2xl items-center justify-center mt-4 flex w-fit">
                                        {linkText}
                                    </Link>
                                )}
                                {link && (<Link href={linkHref} className='outline-1 outline-black'>{link}</Link>)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

// Timeline data to avoid repetition
const timelineData = [
    {
        year: '2014',
        text: "After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
        isAlternate: false
    },
    {
        year: '2015',
        text: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
        isAlternate: true
    },
    {
        year: '2016',
        text: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
        isAlternate: false
    },
    {
        year: '2017',
        text: "Better expands into the real estate market with Better Real Estate.",
        isAlternate: true
    },
    {
        year: '2018',
        text: "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
        isAlternate: false
    },
    {
        year: '2019',
        text: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
        isAlternate: true
    },
    {
        year: '2021',
        text: "Better acquires Trussle — The UK’s most innovative online mortgage broker.",
        isAlternate: false
    },
    {
        year: '2022',
        text: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
        isAlternate: true
    },
    {
        year: '2023',
        text: "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to",
        link: "full mortgage Commitment Letter within 24 hours",
        linkHref: "/with/one-day-mortgage-terms/",
        isAlternate: false
    },
    {
        year: 'Today',
        text: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
        linkText: "Get started",
        linkHref: "/start",
        isAlternate: true
    }
]
