import start from "../images/star-full.svg";
import {TiStarFullOutline} from "react-icons/ti";
import {TiStarHalfOutline} from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";

type Props = {
    ratings: number;
    siteName: string;
    href: string;
    review: string;
    name: string;
    jobTitle: string;
}

export default function TestimonialBox({ratings, siteName, href, review, name, jobTitle}: Props) {
    const fullStar = Math.floor(ratings);
    const halfStar = ratings % 1 >= 0.5;
    const emptyStart = 5 - Math.ceil(ratings);

    return (

        <div
            className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
            <div className="flex flex-wrap items-center justify-between gap-4">
                {/* stars */}
                <div className="flex flex-wrap items-center gap-1">
                    {
                        [...Array(fullStar)].map((_, i) => (
                            <TiStarFullOutline key={i} className="text-yellow-500" size={19}/>
                        ))
                    }

                    {
                        halfStar && (
                            <TiStarHalfOutline className="text-yellow-500" size={19}/>
                        )
                    }

                    {
                        [...Array(emptyStart)].map((_, i) => (
                            <TiStarOutline key={i} className="text-muted" size={19}/>
                        ))
                    }
                </div>

                <a href={href}
                   className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black">
                    <span>{siteName}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15"
                         fill="none" stroke="currentColor" stroke-linecap="round"
                         stroke-linejoin="round" className="h-3.5 w-3.5 shrink-0">
                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"/>
                    </svg>
                </a>
            </div>

            <blockquote className="mt-6 flex-1 text-lg">{review}</blockquote>

            <p className="mt-8 font-medium">
                {name} -&nbsp; <span className="font-normal text-muted">{jobTitle}</span>
            </p>
        </div>
    )
}
