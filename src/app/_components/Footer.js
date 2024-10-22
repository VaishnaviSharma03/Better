import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-accentBorderInverseSecondary section">
            <div className="m-auto px-6 py-6 md:px-10 lg:px-16 xl:px-20 2xl:px-40">
                <Image alt="img" className="icon icon-LogoBetter2021" width={85} height={35} src="/Assets/better-logo.svg" color='transparent'>

                </Image>
                <div className="mt-6 flex flex-col gap-y-8 md:flex-row md:gap-16">
                    <div className="flex-shrink flex-grow basis-1/6">
                        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">Better is a family of companies serving all your homeownership needs.</p>
                        <ul className="mt-6 space-y-4">
                            <li className="mt-4">
                                <Link href="/mortgage/">
                                    <Image alt="better mortgage homepage" loading="lazy" width={150} height={23} src="/Assets/better-mortgage-logo.svg" color="transparent" />
                                </Link>
                                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p></li><li>
                                <Link href="/b/realestate/">
                                    <Image alt="better real estate page" width={160} height={21} src="/Assets/better-real-estate-logo.svg" color="transparent" />
                                </Link>
                                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p></li><li>
                                <Link href="https://www.bettercover.com/">
                                    <Image alt="better" width={115} height={21} src="/Assets/better-cover-logo.svg" color="transparent" />
                                </Link>
                                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p></li><li>
                                <Link href="/content/home-inspection-checklist/">
                                    <Image alt="better inspect page" width={130} height={23} src="/Assets/better-inspect-logo.svg" color="transparent" />
                                </Link>
                                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p></li><li><Link href="/title/">
                                    <Image alt="better inspect page" width={240} height={21} src="/Assets/better-settlement-services-logo.svg" color="transparent" />
                                </Link>
                                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">Get transparent rates when you shop for title insurance all in one convenient place.</p>
                            </li></ul>
                    </div>
                    <div className="flex-shrink flex-grow basis-0"><h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">Resources</h4><ul className="mt-2 space-y-4 md:mt-6">
                        <li>
                            <Link href="/how-much-house-can-i-afford" className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8">Home affordability calculator</Link></li><li><Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/mortgage-calculator/">Mortgage calculator</Link>
                        </li>
                        <li>
                            <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/free-mortgage-calculator/">Free mortgage calculator</Link></li><li>
                            <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/mortgage-calculator-with-taxes/">Mortgage calculator with taxes</Link></li><li>
                            <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/mortgage-calculator-with-pmi/">Mortgage calculator with PMI</Link></li><li>
                            <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/rent-vs-buy-calculator/">Rent vs buy calculator</Link></li><li>
                            <Link href="/heloc-calculator" className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8">HELOC payment calculator</Link></li><li>
                            <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/heloc-vs-cashout-refi-calculator/">HELOC vs cash-out refinance calculator</Link></li><li>
                            <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/content/buying-a-house-online/">Buy a home</Link></li><li>
                            <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/content/buying-and-selling-a-home-at-the-same-time/">Sell a home</Link></li><li>
                            <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/content/home-inspection-checklist/">Get home inspection</Link></li></ul>
                    </div>
                    <div className="flex-shrink flex-grow basis-0"><h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">Company</h4><ul className="mt-2 space-y-4 md:mt-6"><li>
                        <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/about-us/">About Us</Link></li><li>
                            <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/about-us/careers/">Careers</Link></li><li>
                            <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/about-us/media/">Media</Link></li><li>
                            <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/partnerships/">Partner With Us</Link></li><li>
                            <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/content/">Learning center</Link></li><li>
                            <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/faq/">FAQs</Link></li><li><Link className="styles_hover-gradient-effect__AIX_8" href="https://investors.better.com">Investor Relations</Link></li></ul></div>
                    <div className="flex-shrink flex-grow basis-0"><h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">Contact Us</h4><ul className="mt-2 space-y-4 md:mt-6"><li>
                        <Link className="styles_hover-gradient-effect__AIX_8" href="mailto:hello@better.com">hello@better.com</Link></li><li>
                            <Link className="styles_hover-gradient-effect__AIX_8" href="tel:415-523-8837">415-523-8837</Link></li><li>
                            <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/faq/">FAQ</Link></li><li>
                            <Link href="/glossary" className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8">Glossary</Link></li></ul>
                        <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg mt-6">Legal</h4><ul className="mt-2 space-y-4 md:mt-6"><li>
                            <Link className="styles_hover-gradient-effect__AIX_8" href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511">NMLS Consumer Access</Link></li><li>
                                <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/about-us/privacy-policy/">Privacy Policy</Link></li><li>
                                <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/about-us/terms-of-use/">Terms of Use</Link></li><li>
                                <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/about-us/licensing-disclosure/">Disclosures &amp; Licensing</Link></li><li>
                                <Link className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8" href="/about-us/affiliated-business/">Affiliated Business</Link></li><li>
                                <Link href="/browser-support" className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8">Browser Disclaimer</Link></li><li>
                                <div className="mt-8 flex gap-4">
                                    <Image alt='home' width={40} height={41} src='/Assets/home.svg' />
                                    <Image alt='home' width={40} height={43} src='/Assets/home1.svg' />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 flex gap-x-4 md:mt-60">
                    <div>
                        <Link aria-label="Facebook" href="https://www.facebook.com/better/" rel="noopener noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#313131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook "><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link></div><div><Link aria-label="Instagram" href="https://www.instagram.com/betterdotcom/" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#313131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram "><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                            </Link>
                    </div>
                    <div>
                        <Link aria-label="Linkedin" href="https://www.linkedin.com/company/betterdotcom/" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#313131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin "><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </Link>
                    </div>
                </div>
                <div className="mt-12"><p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs"><sup>1</sup> Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See
                    <Link className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] hover:text-interactivePrimary text-inherit" href="/with/one-day-mortgage-terms/">One Day Mortgage™ Terms and Conditions.</Link></p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-3"><sup>2</sup>Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See
                        <Link className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] hover:text-interactivePrimary text-inherit" href="/b/better-mortgage-one-day-heloc-promotion-terms-and-conditions/">One Day Heloc™ Terms and Conditions.</Link></p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-3"><sup>3</sup>Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value.</p>
                    <hr className="my-xl border-gray-400" />
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs">© 2024 Better Home &amp; Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.</p><p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. <Link className="underline" data-qa="nmls-link" href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511">NMLS Consumer Access</Link></p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s <Link className="underline" href="/with/better-realestate-license/">license numbers</Link>. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.</p><p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
                        <Link className="underline" href="https://www.dos.ny.gov/licensing/docs/FairHousingNotice_new.pdf">New York State Housing and Anti-Discrimination Notice</Link></p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
                        <Link className="underline" href="https://media.better.com/pdfs/NYStandardizedOperatingProcedures.pdf">New York Standard Operating Procedures</Link></p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">Texas Real Estate Commission:
                        <Link className="underline" href="https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&amp;cid=645736">Information About Brokerage Services</Link> | <Link className="underline" href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-4-1_1.pdf">Consumer Protection Notice</Link></p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.</p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.</p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s <Link className="underline" href="https://www.bettercover.com/licenses">license numbers</Link>.</p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.</p><p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home &amp; Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.</p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home &amp; Finance Holding Company. Better Home &amp; Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.</p>
                </div>
            </div>
        </footer>
    )
}
