import * as React from "react"
import {Head, Link} from "@inertiajs/react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

// components
import GuestLayout from "@/layouts/guest-layout";
import PostBox from "@/components/postBox";
import IntroSection from "@/components/introSection";
import BrandSection from "@/components/brandSection";
import TestimonialSection from "@/components/testimonialSection";
import AwardSection from "@/components/awardSection";

// images
import circleText from "../images/circle-text.svg";
import blogThumbnail1 from "../images/blog-img-1.jpg";
import blogThumbnail2 from "../images/blog-img-2.jpg";
import blogThumbnail3 from "../images/blog-img-3.jpg";
import blogThumbnail4 from "../images/blog-img-4.jpg";

export default function About() {
    return <GuestLayout>
        <Head title="About Me"/>
        <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6n lg:w-[1272px] mx-auto mt-6">
            {/* Intro */}
            <div>
                <IntroSection />
            </div>

            {/* about */}
            <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
                <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
                    <div className="">
                        <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                            Hi, This is <span className="text-primary">Junaid</span> 👋
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
                <BrandSection />

                {/* Reviews */}
                <TestimonialSection />

                {/* Awards */}
                <AwardSection />

                {/* Blog */}
                <Carousel>
                    <div className="mt-10 lg:mt-14">
                        <div className="flex flex-wrap items-center justify-between gap-6">
                            <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                                Article and Publications
                            </h3>

                            <div className="flex items-center gap-2">
                                <CarouselPrevious
                                    className="static blog-carousel-button-prev grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"/>
                                <CarouselNext
                                    className="static blog-carousel-button-next grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"/>
                            </div>
                        </div>

                        <div className="mt-8">
                            <CarouselContent>
                                <CarouselItem className="basis-1/2">
                                    <PostBox
                                        title="Want To Upgrade Your Brain? Stop Doing These7 Things"
                                        thumbnail={blogThumbnail1}
                                        href="/posts"
                                        category="Development"
                                        categoryHref="categories"
                                        publishDate="Nov 6, 2023"
                                        readTime="4 min read"
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-1/2">
                                    <PostBox
                                        title="Want To Upgrade Your Brain? Stop Doing These7 Things"
                                        thumbnail={blogThumbnail2}
                                        href="/posts"
                                        category="Development"
                                        categoryHref="categories"
                                        publishDate="Nov 6, 2023"
                                        readTime="4 min read"
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-1/2">
                                    <PostBox
                                        title="Want To Upgrade Your Brain? Stop Doing These7 Things"
                                        thumbnail={blogThumbnail3}
                                        href="/posts"
                                        category="Development"
                                        categoryHref="categories"
                                        publishDate="Nov 6, 2023"
                                        readTime="4 min read"
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-1/2">
                                    <PostBox
                                        title="Want To Upgrade Your Brain? Stop Doing These7 Things"
                                        thumbnail={blogThumbnail4}
                                        href="/posts"
                                        category="Development"
                                        categoryHref="categories"
                                        publishDate="Nov 6, 2023"
                                        readTime="4 min read"
                                    />
                                </CarouselItem>
                            </CarouselContent>
                        </div>
                    </div>
                </Carousel>


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
}
