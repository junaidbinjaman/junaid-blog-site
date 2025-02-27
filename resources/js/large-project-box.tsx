import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
    thumbnail: string;
    title: string;
    category: string;
    href: string;
}
export default function LargeProjectBox({thumbnail, title, category, href}: Props) {
    return (
        <div className="">
            <div
                className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0 xl:p-10 xl:pb-0">
                <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                    <img src={thumbnail} alt=""
                         className="h-full w-full rounded-t-lg object-cover object-top transition"/>

                    <a href={thumbnail} data-gall="project-gallry-1"
                       className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100">
                        <FaExternalLinkAlt />
                    </a>
                </div>
            </div>

            <div className="flex flex-wrap items-start justify-between py-4 md:p-6">
                <div className="">
                    <h3 className="text-lg font-medium md:text-xl lg:text-2xl">
                        <a href={href}
                           target="_blank"
                           className="border-b border-transparent text-dark transition hover:border-b-primary hover:text-primary dark:text-light/80 dark:hover:text-primary">
                            {title}
                        </a>
                    </h3>
                    <p className="text-sm text-muted lg:text-base">
                        {category}
                    </p>
                </div>

                <a href={href}
                   target="_blank"
                   className="inline-flex items-center justify-center gap-1 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition hover:text-primary dark:bg-black dark:text-light/70 dark:hover:text-primary">
                    <span>Visit Site</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none"
                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                         className="h-4 w-4 shrink-0">
                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}
