import * as React from "react"
import {Head} from "@inertiajs/react";
import {Card, CardContent} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

// components
import GuestLayout from "@/layouts/guest-layout";
import Intro from "@/components/intro";
import BrandLogo from "@/components/brandLogo";
import TestimonialBox from "@/components/testimonialBox";

// icons
import {FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa6";

// images
import junaidProfilePic from "@/images/junaidbinjaman-profile-pic.jpg";
import circleText from "../images/circle-text.svg";
import androidBrandLogo from "../images/logos/brand/android-brand-logo.png";
import clickUpBrandLogo from "../images/logos/brand/clickup-brand-logo.png";
import awsBrandLogo from "../images/logos/brand/aws-brand-logo.png";
import figmaBrandLogo from "../images/logos/brand/figma-brand-logo.png";
import iosBrandLogo from "../images/logos/brand/ios-brand-logo.png";
import javascriptBrandLogo from "../images/logos/brand/javascript-brand-logo.png";
import jQueryBrandLogo from "../images/logos/brand/jquery-brand-logo.png";
import laravelBrandLogo from "../images/logos/brand/laravel-brand-logo.png";
import mySqlBrandLogo from "../images/logos/brand/mysql-brand-logo.png";
import phpBrandLogo from "../images/logos/brand/php-brand-logo.png";
import phpstormBrandLogo from "../images/logos/brand/phpstorm-brand-logo.png";
import reactBrandLogo from "../images/logos/brand/react-brand-logo.png";
import tailwindcssBrandLogo from "../images/logos/brand/tailwindcss-brand-logo.png";
import woocommerceBrandLogo from "../images/logos/brand/woo-brand-logo.png";
import wordpressBrandLogo from "../images/logos/brand/wordpress-brand-logo.png";
import tsBrandLogo from "../images/logos/brand/ts-brand-logo.png";

export default function About() {
    return <GuestLayout>
        <Head title="About Me"/>
        <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6n lg:w-[1272px] mx-auto mt-6">
            {/* Intro */}
            <div className="">
                <Intro
                    profile_pic_url={junaidProfilePic}
                    name="Junaid Bin Jaman"
                    description={
                        <>
                            <p>
                                Seven years of experience engineering dynamic front-ends with <strong>React/React
                                Native</strong> powerful back-ends with <strong>Laravel</strong>.
                            </p>
                            <br/>
                            <p>
                                Expert in extending WordPress functionality through custom <strong>plugin
                                development.</strong>
                            </p>
                        </>
                    }
                    phoneNumber="+8801705294083"
                    email="junaid@allnextver.com"
                    socialMedia={[
                        {
                            icon: <FaLinkedinIn size={24}/>,
                            profileUrl: 'https://www.linkedin.com/in/junaidbinjaman/'
                        },
                        {icon: <FaGithub size={24}/>, profileUrl: 'https://github.com/junaidbinjaman'},
                        {
                            icon: <FaInstagram size={24}/>,
                            profileUrl: 'https://www.instagram.com/junaidbinjaman/'
                        },
                        {
                            icon: <FaFacebookF size={24}/>,
                            profileUrl: 'https://www.facebook.com/junaidbinjaman/'
                        },
                    ]}
                />
            </div>

            {/* about */}
            <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
                <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
                    <div className="">
                        <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                            Hi, This Is <span className="text-primary">Junaid</span> 👋
                        </h2>
                        <p className="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
                            A Passionate
                            <span className="font-semibold text-dark dark:text-white">
									&nbsp;Full Stack Developer&nbsp;
								</span>
                            🖥️ &
                            <span className="font-semibold text-dark dark:text-white">
									&nbsp;Project mamager
								</span>
                            &nbsp;having&nbsp;
                            <span className="font-semibold text-dark dark:text-white">
									7 years&nbsp;
								</span>
                            of Experiences over 3 Country Worldwide.
                        </p>
                    </div>
                    <div
                        className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-primary dark:bg-dark-2 lg:text-lg">
                        <span className="relative flex h-2 w-2 shrink-0">
								<span
                                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light"></span>
                        <span
                            className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        <span>Available For Hire</span>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap justify-between gap-6 lg:mt-12 lg:gap-10">
                    <div className="flex flex-wrap items-start gap-6 lg:gap-10">
                        <div className="">
                            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                                <span>07</span>+
                            </h2>
                            <p className="mt-2 text-muted">Year of Experience</p>
                        </div>
                        <div className="">
                            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                                <span>34</span>+
                            </h2>
                            <p className="mt-2 text-muted">Project Completed</p>
                        </div>
                        <div className="">
                            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                                <span>12</span>+
                            </h2>
                            <p className="mt-2 text-muted">Happy Client</p>
                        </div>
                    </div>

                    <div className="relative -mt-6 hidden h-[100px] w-[100px] p-4 lg:block xl:-mt-10">
                        <img src={circleText} alt=""
                             className="absolute inset-0 h-full w-full animate-spin-slow dark:hidden"/>
                        <img src={circleText} alt=""
                             className="absolute inset-0 hidden h-full w-full animate-spin-slow dark:block"/>
                        <div className="grid h-full w-full place-content-center rounded-full bg-primary text-light">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none"
                                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" className="h-10 w-10">
                                <path d="M20 5v30m-5-5 5 5 5-5"/>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Brands */}
                <div className="mt-10 lg:mt-14">
                    <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                        Working With 50+ Brands ✨ Worldwide
                    </h3>
                    <div
                        className="mt-8 grid grid-cols-[repeat(auto-fit,_minmax(60px,1fr))] gap-2 lg:grid-cols-[repeat(auto-fit,_minmax(80px,1fr))] lg:gap-4">
                        <BrandLogo logoSrc={reactBrandLogo} alt="The react logo"/>
                        <BrandLogo logoSrc={wordpressBrandLogo} alt="The wordpress logo"/>
                        <BrandLogo logoSrc={laravelBrandLogo} alt="The laravel logo"/>
                        <BrandLogo logoSrc={tsBrandLogo} alt="The ts logo"/>
                        <BrandLogo logoSrc={tailwindcssBrandLogo} alt="The tailwindcss logo"/>
                        <BrandLogo logoSrc={jQueryBrandLogo} alt="The jQuery logo"/>
                        <BrandLogo logoSrc={javascriptBrandLogo} alt="The javascript logo"/>
                        <BrandLogo logoSrc={phpBrandLogo} alt="The php logo"/>
                        <BrandLogo logoSrc={figmaBrandLogo} alt="The figma logo"/>
                        <BrandLogo logoSrc={phpstormBrandLogo} alt="The phpstorm logo"/>
                        <BrandLogo logoSrc={iosBrandLogo} alt="The ios logo"/>
                        <BrandLogo logoSrc={androidBrandLogo} alt="The android logo"/>
                        <BrandLogo logoSrc={mySqlBrandLogo} alt="The mysql logo"/>
                        <BrandLogo logoSrc={woocommerceBrandLogo} alt="The woocommerce logo"/>
                        <BrandLogo logoSrc={clickUpBrandLogo} alt="The clickup logo"/>
                        <BrandLogo logoSrc={awsBrandLogo} alt="The aws logo"/>
                    </div>
                </div>

                {/* Reviews */}
                <div className="mt-10 lg:mt-20!">
                    <Carousel>
                        <div className="flex flex-wrap items-center justify-between gap-6">
                            <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                                Trusted By 80+ Clients
                            </h3>

                            <div className="flex items-center gap-2">
                                <CarouselPrevious
                                    className="static grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"/>
                                <CarouselNext
                                    className="static grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"/>
                            </div>
                        </div>
                        <div className="mt-8">

                            <CarouselContent>
                                <CarouselItem className="basis-1/2">
                                    <TestimonialBox
                                        ratings={2.7}
                                        name="Samiul Hasan"
                                        href="https://allnextver.expert/"
                                        jobTitle="Project Manager"
                                        siteName="All Next Ver"
                                        review="Partnering with Junaid has been a great decision for our agency. He not only delivers high-quality websites but also helps us refine ideas into practical solutions. His consistency and proactive communication make projects stress-free."
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-1/2">
                                    <TestimonialBox
                                        ratings={4.9}
                                        name="Elena Roy"
                                        href="https://rcnmedia.expert/"
                                        jobTitle="Marketing Lead"
                                        siteName="RCN"
                                        review="Junaid played a key role in building our digital platforms. He’s fast, reliable, and deeply understands business needs. Our team values his input just as much as his technical execution."
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-1/2">
                                    <TestimonialBox
                                        ratings={5}
                                        name="Marcus Lee"
                                        href="https://loopmedia.expert/"
                                        jobTitle="CEO"
                                        siteName="Loop Media"
                                        review="We rely on Junaid for critical web development projects. He delivers on time, communicates clearly, and always brings innovative solutions."
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-1/2">
                                    <TestimonialBox
                                        ratings={4.8}
                                        name="Hannah Green"
                                        href="https://brandhouse.expert/"
                                        jobTitle="Creative Director"
                                        siteName="Brand House"
                                        review="Junaid is not just a developer, he’s a collaborator. He understood our vision quickly and delivered a product that matched our brand perfectly."
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-1/2">
                                    <TestimonialBox
                                        ratings={5}
                                        name="David Kim"
                                        href="https://visionlab.expert/"
                                        jobTitle="CTO"
                                        siteName="Vision Lab"
                                        review="From WordPress customization to React solutions, Junaid’s skillset covers it all. His code quality and professionalism stand out every time."
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-1/2">
                                    <TestimonialBox
                                        ratings={4.9}
                                        name="Sophia Ahmed"
                                        href="https://creativepulse.expert/"
                                        jobTitle="Product Manager"
                                        siteName="Creative Pulse"
                                        review="We asked Junaid to develop a mobile app for our internal workflow, and the results were outstanding. Smooth performance, clean UI, and reliable support throughout the process. Our team efficiency has improved significantly."
                                    />
                                </CarouselItem>
                            </CarouselContent>
                        </div>
                    </Carousel>
                </div>

                {/* Awards */}
                <div className="mt-10 lg:mt-14">
                    <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                        Awards and Recognitions
                    </h3>

                    <div className="mt-8 space-y-4">
                        <div
                            className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
                            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                                <div
                                    className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                                    <img src="assets/img/adobe.svg" alt="" className="h-6 w-6 shrink-0"/>
                                </div>
                                <div className="">
                                    <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                                        Adobe Design Contest
                                    </h5>
                                    <p className="text-muted">2022 - 2023</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none"
                                     stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="1.5" className="h-5 w-5 shrink-0">
                                    <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"/>
                                    <path
                                        d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889"/>
                                </svg>
                                <h5 className="font-medium leading-tight text-dark dark:text-light">
                                    Runner Up
                                </h5>
                            </div>

                            <div className="text-right">
                                <a href="#"
                                   className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-black dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                                    <span>View Project</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none"
                                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                         className="h-3.5 w-3.5 shrink-0">
                                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div
                            className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
                            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                                <div
                                    className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                                    <img src="assets/img/dribbble.svg" alt="" className="h-6 w-6 shrink-0"/>
                                </div>
                                <div className="">
                                    <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                                        Dribbble Design Contest
                                    </h5>
                                    <p className="text-muted">2022 - 2023</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none"
                                     stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="1.5" className="h-5 w-5 shrink-0">
                                    <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"/>
                                    <path
                                        d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889"/>
                                </svg>
                                <h5 className="font-medium leading-tight text-dark dark:text-light">
                                    Gold Winner
                                </h5>
                            </div>

                            <div className="text-right">
                                <a href="#"
                                   className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-black dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                                    <span>View Project</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none"
                                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                         className="h-3.5 w-3.5 shrink-0">
                                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div
                            className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
                            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                                <div
                                    className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                                    <img src="assets/img/awwwards.png" alt="" className="h-6 w-6 shrink-0"/>
                                </div>
                                <div className="">
                                    <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                                        Awwwards Nominee
                                    </h5>
                                    <p className="text-muted">2022 - 2023</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none"
                                     stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="1.5" className="h-5 w-5 shrink-0">
                                    <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"/>
                                    <path
                                        d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889"/>
                                </svg>
                                <h5 className="font-medium leading-tight text-dark dark:text-light">
                                    Runner Up
                                </h5>
                            </div>

                            <div className="text-right">
                                <a href="#"
                                   className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-black dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                                    <span>View Project</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none"
                                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                         className="h-3.5 w-3.5 shrink-0">
                                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div
                            className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
                            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                                <div
                                    className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                                    <img src="assets/img/behance.svg" alt="" className="h-6 w-6 shrink-0"/>
                                </div>
                                <div className="">
                                    <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                                        Behance Design Contest
                                    </h5>
                                    <p className="text-muted">2022 - 2023</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none"
                                     stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="1.5" className="h-5 w-5 shrink-0">
                                    <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"/>
                                    <path
                                        d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889"/>
                                </svg>
                                <h5 className="font-medium leading-tight text-dark dark:text-light">
                                    Gold Winner
                                </h5>
                            </div>

                            <div className="text-right">
                                <a href="#"
                                   className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-black dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                                    <span>View Project</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none"
                                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                         className="h-3.5 w-3.5 shrink-0">
                                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog */}
                <div className="mt-10 lg:mt-14">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                            Article and Publications
                        </h3>

                        <div className="flex items-center gap-2">
                            <button
                                className="blog-carousel-button-prev grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                                     stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="1.5" className="h-5 w-5 shrink-0">
                                    <path d="M4.167 10h11.666M4.167 10l5 5m-5-5 5-5"/>
                                </svg>
                            </button>
                            <button
                                className="blog-carousel-button-next grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                                     stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="1.5" className="h-5 w-5 shrink-0">
                                    <path d="M4.167 10h11.666m-5 5 5-5m-5-5 5 5"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="swiper blog-carousel">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="">
                                        <div className="relative">
                                            <a href="article.html"
                                               className="group block aspect-6/4 overflow-hidden rounded-lg">
                                                <img src="assets/img/blog-img-1.jpg" alt=""
                                                     className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"/>
                                            </a>

                                            {/* Tags */}
                                            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                                <a href="#"
                                                   className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white">
                                                    Development
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <h2 className="text-xl font-medium xl:text-2xl">
                                                <a href="article.html"
                                                   className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary">
                                                    Want To Upgrade Your Brain? Stop Doing These
                                                    7 Things
                                                </a>
                                            </h2>

                                            <ul className="mt-4 flex flex-wrap items-center gap-2">
                                                <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                                                    15 min read
                                                </li>
                                                <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                                                    Nov 6, 2023
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="">
                                        <div className="relative">
                                            <a href="article.html"
                                               className="group block aspect-6/4 overflow-hidden rounded-lg">
                                                <img src="assets/img/blog-img-2.jpg" alt=""
                                                     className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"/>
                                            </a>

                                            {/* Tags */}
                                            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                                <a href="#"
                                                   className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white">
                                                    Development
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <h2 className="text-xl font-medium xl:text-2xl">
                                                <a href="article.html"
                                                   className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary">
                                                    Want To Upgrade Your Brain? Stop Doing These
                                                    7 Things
                                                </a>
                                            </h2>

                                            <ul className="mt-4 flex flex-wrap items-center gap-2">
                                                <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                                                    15 min read
                                                </li>
                                                <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                                                    Nov 6, 2023
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="">
                                        <div className="relative">
                                            <a href="article.html"
                                               className="group block aspect-6/4 overflow-hidden rounded-lg">
                                                <img src="assets/img/blog-img-3.jpg" alt=""
                                                     className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"/>
                                            </a>

                                            {/* Tags */}
                                            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                                <a href="#"
                                                   className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white">
                                                    Development
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <h2 className="text-xl font-medium xl:text-2xl">
                                                <a href="article.html"
                                                   className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary">
                                                    Want To Upgrade Your Brain? Stop Doing These
                                                    7 Things
                                                </a>
                                            </h2>

                                            <ul className="mt-4 flex flex-wrap items-center gap-2">
                                                <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                                                    15 min read
                                                </li>
                                                <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                                                    Nov 6, 2023
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div className="mt-10 lg:mt-14">
                    <div className="group flex gap-6 overflow-hidden rounded-lg bg-light p-6 dark:bg-dark-2">
                        <div
                            className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
                            <a href="contact.html"
                               className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                Let's 👋 Work Together
                            </a>
                            <a href="contact.html"
                               className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                Let's 👋 Work Together
                            </a>
                        </div>
                        <div
                            className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
                            <a href="contact.html"
                               className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                Let's 👋 Work Together
                            </a>
                            <a href="contact.html"
                               className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                Let's 👋 Work Together
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </GuestLayout>
}
