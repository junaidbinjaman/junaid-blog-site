import React, {type PropsWithChildren, type ReactElement, ReactNode, useEffect, useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

type Props = PropsWithChildren<{
    profile_pic_url: string;
    name: string;
    description: ReactNode;
    phoneNumber: number | string;
    email: string;
    socialMedia: SocialMediaLink[];
}>

type SocialMediaLink = {
    icon: ReactElement;
    profileUrl: string;
};

export default function Intro({name, description, phoneNumber, email, socialMedia, profile_pic_url}: Props) {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleClick = () => {
        navigator.clipboard.writeText('junaid@allnextcer.com');
        setIsCopied(true);

        setTimeout(() => setIsCopied(false), 1000);
    }

    return <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <div className="aspect-6/4 overflow-hidden rounded-lg bg-light pt-4 text-center dark:bg-dark-2">
            <img src={profile_pic_url} alt="Junaid Bin Jaman Profile Pic"
                 className="inline-block h-full w-full scale-110 object-cover object-top"/>
        </div>

        <div className="mt-6">
            <h3 className="text-2xl font-semibold dark:text-light">{name} 👋</h3>
            {description}

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap gap-2">
                <a href={"tel:" + phoneNumber}
                   className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                         stroke-width="1.5" className="h-6 w-6">
                        <path
                            d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Zm10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6"/>
                    </svg>
                    <span>Book A Call</span>
                </a>
                <button
                    onClick={handleClick}
                    type="button"
                    className="js-clipboard hs-tooltip inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark transition [--trigger:focus] hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                         stroke-width="1.5" className="h-6 w-6">
                        <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z"/>
                        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>
                    </svg>
                    <span>{isCopied ? "Copied.." : "Copy Email"}</span>

                    <span
                        className="hs-tooltip-content invisible z-10 hidden rounded-lg bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-1 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                        role="tooltip">
                        Copied to clipboard
                    </span>
                </button>
            </div>

            {/* Social */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
                {
                    socialMedia.map((item) => (
                        <a href={item.profileUrl}
                           target="_blank"
                           className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                            {item.icon}
                        </a>
                    ))
                }
            </div>
        </div>
    </div>
}
