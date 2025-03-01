import {Head} from "@inertiajs/react"
import GuestLayout from "@/layouts/guest-layout";
import IntroSection from "@/components/introSection";
import {useEffect, useState} from "react";
import FaqSection from "@/components/faqSection";
import * as React from "react";
import {Input} from "@/components/ui/input";
import ContactForm from "@/components/contact-form";

export default function Contact() {
    const [isCopied, setIsCopied] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText('junaid@allnextcer.com');
        setIsCopied(true);

        setTimeout(() => setIsCopied(false), 1000);
    }

    return (
        <>
            <Head title="Contact Me"/>
            <GuestLayout>
                <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6 lg:w-[1272px] mx-auto mt-6">
                    <div>
                        <IntroSection/>
                    </div>
                    {/* Contact */}
                    <div
                        className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
                        <div className="">
                            <h2 className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
                                Let's 👋 <span className="text-primary">Work</span> Together
                            </h2>
                            <p className="mt-4 text-lg text-muted dark:text-light/70">
                                I'm here to help if you're searching for a Web or Mobile App Developer to bring
                                your idea to life or a partner to help take your business to the next level.
                            </p>
                            {/* CTA buttons */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                <a href="tel:+8801705294083"
                                   className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                         stroke-width="1.5" className="h-6 w-6">
                                        <path
                                            d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Zm10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6"/>
                                    </svg>
                                    <span>Book A Call</span>
                                </a>
                                <button type="button"
                                        onClick={handleClick}
                                        className="js-clipboard hs-tooltip inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark transition [--trigger:focus] hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                         stroke-width="1.5" className="h-6 w-6">
                                        <path
                                            d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z"/>
                                        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>
                                    </svg>
                                    <span>
                                            {isCopied ? "Copied.." : "Copy Email"}
                                        </span>

                                    <span
                                        className="hs-tooltip-content invisible z-10 hidden rounded-lg bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                                        role="tooltip">
									Copied to clipboard
								</span>
                                </button>
                            </div>
                        </div>

                        <div className="mt-10 lg:mt-14">
                            <ContactForm />
                        </div>

                        {/* Map */}
                        <div className="mt-10 aspect-video overflow-hidden rounded-lg lg:mt-14">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8016685370494!2d90.40585077648221!3d23.790075887249902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d55d28674eb335f%3A0x8c2607ede6084008!2sAll%20Next%20Ver!5e0!3m2!1sen!2sbd!4v1756484112545!5m2!1sen!2sbd"
                                width="100%" height="450" allowFullScreen={true} loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        {/* FAQ */}
                        <div className="mt-13">
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

                </main>
            </GuestLayout>
        </>
    )
}
