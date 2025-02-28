import {Head} from "@inertiajs/react";

import GuestLayout from "@/layouts/guest-layout";
import IntroSection from "@/components/introSection";
import PostBox from "@/components/postBox";
import blogThumbnail4 from "@/images/blog-img-4.jpg";
import * as React from "react";

export default function Blogs() {
    return (
        <>
            <Head title="Blogs" />
            <GuestLayout>
                <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6 lg:w-[1272px] mx-auto mt-6">
                    {/* Intro */}
                    <div className="">
                        <IntroSection />
                    </div>

                    {/* Blog */}
                    <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
                        <div className="">
                            <h2 className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
                                My Recent Article and Publications
                            </h2>
                            <p className="mt-4 text-lg text-muted dark:text-light/70">
                                I'm here to help if you're searching for a product designer to bring
                                your idea to life or a design partner to help take your business to the
                                next level.
                            </p>
                        </div>

                        {/* Blogs */}
                        <div className="mt-10 lg:mt-14">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
                                <PostBox
                                    title="Want To Upgrade Your Brain? Stop Doing These7 Things"
                                    thumbnail={blogThumbnail4}
                                    href="/posts"
                                    category="Development"
                                    categoryHref="categories"
                                    publishDate="Nov 6, 2023"
                                    readTime="4 min read"
                                />
                                <PostBox
                                    title="Want To Upgrade Your Brain? Stop Doing These7 Things"
                                    thumbnail={blogThumbnail4}
                                    href="/posts"
                                    category="Development"
                                    categoryHref="categories"
                                    publishDate="Nov 6, 2023"
                                    readTime="4 min read"
                                />
                                <PostBox
                                    title="Want To Upgrade Your Brain? Stop Doing These7 Things"
                                    thumbnail={blogThumbnail4}
                                    href="/posts"
                                    category="Development"
                                    categoryHref="categories"
                                    publishDate="Nov 6, 2023"
                                    readTime="4 min read"
                                />
                                <PostBox
                                    title="Want To Upgrade Your Brain? Stop Doing These7 Things"
                                    thumbnail={blogThumbnail4}
                                    href="/posts"
                                    category="Development"
                                    categoryHref="categories"
                                    publishDate="Nov 6, 2023"
                                    readTime="4 min read"
                                />
                                <PostBox
                                    title="Want To Upgrade Your Brain? Stop Doing These7 Things"
                                    thumbnail={blogThumbnail4}
                                    href="/posts"
                                    category="Development"
                                    categoryHref="categories"
                                    publishDate="Nov 6, 2023"
                                    readTime="4 min read"
                                />
                                <PostBox
                                    title="Want To Upgrade Your Brain? Stop Doing These7 Things"
                                    thumbnail={blogThumbnail4}
                                    href="/posts"
                                    category="Development"
                                    categoryHref="categories"
                                    publishDate="Nov 6, 2023"
                                    readTime="4 min read"
                                />
                            </div>

                            {/* Pagination */}
                            <nav className="mt-10 flex items-center justify-center gap-1.5">
                                <button type="button"
                                        className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                         stroke="currentColor" className="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                                    </svg>

                                    <span aria-hidden="true" className="sr-only">Previous</span>
                                </button>
                                <button type="button"
                                        className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary"
                                        aria-current="page">
                                    1
                                </button>
                                <button type="button"
                                        className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary">
                                    2
                                </button>
                                <button type="button"
                                        className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary">
                                    3
                                </button>
                                <div className="hs-tooltip inline-block">
                                    <button type="button"
                                            className="hs-tooltip-toggle group inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary">
                                        <span className="text-xs group-hover:hidden">•••</span>
                                        <svg className="hidden h-5 w-5 flex-shrink-0 group-hover:block"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                             stroke-linejoin="round">
                                            <path d="m6 17 5-5-5-5"/>
                                            <path d="m13 17 5-5-5-5"/>
                                        </svg>
                                        <span
                                            className="hs-tooltip-content invisible absolute z-10 inline-block rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                                            role="tooltip">
										Next 4 pages
									</span>
                                    </button>
                                </div>
                                <button type="button"
                                        className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary">
                                    100
                                </button>
                                <button type="button"
                                        className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary">
                                    <span aria-hidden="true" className="sr-only">Next</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                         stroke="currentColor" className="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                                    </svg>
                                </button>
                            </nav>
                        {/*  End Pagination  */}
                        </div>
                    </div>
                </main>
            </GuestLayout>
        </>
    )
}
