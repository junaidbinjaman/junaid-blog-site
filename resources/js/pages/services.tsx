import * as React from "react";
import {Link, Head} from "@inertiajs/react";

// components
import GuestLayout from "@/layouts/guest-layout";
import IntroSection from "@/components/introSection";
import ServiceBox from "@/components/serviceBox";
import BrandSection from "@/components/brandSection";
import TestimonialSection from "@/components/testimonialSection";
import AwardSection from "@/components/awardSection";
import FaqSection from "@/components/faqSection";

// icons
import {IoIosDesktop} from "react-icons/io";
import {CiMobile1} from "react-icons/ci";
import {BsPlugin} from "react-icons/bs";
import {IoNewspaperOutline} from "react-icons/io5";
import {IoStorefrontOutline} from "react-icons/io5";
import {LiaElementor} from "react-icons/lia";
import {FaFigma} from "react-icons/fa";
import {BsArrowLeftRight} from "react-icons/bs";

// images
import allNextVerWebsiteHeroSectionScreenshot from "../images/allnextver-website-hero-section-screenshot.png";

export default function Services() {
    return (
        <>
            <Head title="Services"/>
            <GuestLayout>
                <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6 lg:w-[1272px] mx-auto mt-6">
                    {/* Intro */}
                    <div>
                        <IntroSection/>
                    </div>

                    {/* Services */}
                    <div
                        className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
                        <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
                            <div className="">
                                <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                                    Services I <span className="text-primary">Offered</span>
                                </h2>
                                <p className="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
                                    Transforming Ideas into Innovative Reality, Elevate Your Vision with
                                    Our Expert&nbsp;
                                    <span className="font-semibold text-dark dark:text-white">
                                    Product Design and Development&nbsp;
								</span>
                                    Services!
                                </p>
                            </div>
                            <div
                                className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-primary dark:bg-dark-2 lg:text-lg">
                        <span className="relative flex h-2 w-2 shrink-0">
								<span
                                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                                <span>Available For Hire</span>
                            </div>
                        </div>

                        {/* Service cards */}
                        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:mt-14">
                            <ServiceBox icon={<IoIosDesktop color='#4670ff' size={74}/>} label="Web App"/>
                            <ServiceBox icon={<CiMobile1 color='#4670ff' size={74}/>} label="Mobile App"/>
                            <ServiceBox icon={<BsPlugin color='#4670ff' size={74}/>} label="Custom WP Plugin"/>
                            <ServiceBox icon={<IoNewspaperOutline color='#4670ff' size={74}/>} label="Simple Web Page"/>
                            <ServiceBox icon={<IoStorefrontOutline color='#4670ff' size={74}/>}
                                        label="Ecommerce Store Development"/>
                            <ServiceBox icon={<FaFigma color='#4670ff' size={74}/>} label="UI Design on Figma & Canva"/>
                            <ServiceBox icon={<LiaElementor color='#4670ff' size={74}/>}
                                        label="Elementor Widget Development"/>
                            <ServiceBox icon={<BsArrowLeftRight color='#4670ff' size={74}/>}
                                        label="Service API Development"/>

                        </div>

                        {/* image */}
                        <div className="mt-10 aspect-video overflow-hidden rounded-lg bg-light dark:bg-dark-2 lg:mt-14">
                            <img src={allNextVerWebsiteHeroSectionScreenshot} alt=""
                                 className="h-full w-full rounded-lg object-cover"/>
                        </div>

                        {/* Brands */}
                        <BrandSection/>

                        {/* Reviews */}
                        <TestimonialSection/>

                        {/* Awards */}
                        <AwardSection/>

                        {/* FAQ */}
                        <div className="mt-10 lg:mt-14">
                            <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                                Frequently Asked Questions
                            </h3>

                            <div className="mt-8 space-y-4">
                                <FaqSection accordingData={[
                                    {
                                        title: "What does a product designer need to know?",
                                        description: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.",
                                        item: 1
                                    },
                                    {
                                        title: "What does a product designer need to know?",
                                        description: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.",
                                        item: 2
                                    },
                                    {
                                        title: "What does a product designer need to know?",
                                        description: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.",
                                        item: 3
                                    },
                                    {
                                        title: "What does a product designer need to know?",
                                        description: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.",
                                        item: 4
                                    },
                                    {
                                        title: "What does a product designer need to know?",
                                        description: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.",
                                        item: 5
                                    }
                                ]}/>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="mt-10 lg:mt-14">
                            <div className="group flex gap-6 overflow-hidden rounded-lg bg-light p-6 dark:bg-dark-2">
                                <div
                                    className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
                                    <Link href="/contact"
                                          className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                        Let's 👋 Work Together
                                    </Link>
                                    <Link href="/contact"
                                          className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                        Let's 👋 Work Together
                                    </Link>
                                </div>
                                <div
                                    className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
                                    <Link href="/contact"
                                          className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                        Let's 👋 Work Together
                                    </Link>
                                    <Link href="/contact"
                                          className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                        Let's 👋 Work Together
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </GuestLayout>
        </>
    )
}
